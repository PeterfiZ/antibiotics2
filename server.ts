/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";
import fs from "fs";

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Persistent file-backed translation cache to prevent N+1 request storms and stay within daily limits
const CACHE_FILE_PATH = path.join(__dirname, "translation_cache.json");
let translationCache: Record<string, Record<string, string>> = { en: {}, de: {} };

try {
  if (fs.existsSync(CACHE_FILE_PATH)) {
    const data = fs.readFileSync(CACHE_FILE_PATH, "utf-8");
    translationCache = JSON.parse(data);
    console.log(`Loaded ${Object.keys(translationCache.en || {}).length} English and ${Object.keys(translationCache.de || {}).length} German cached translations.`);
  }
} catch (err) {
  console.warn("Failed to load translation cache file, starting fresh:", err);
}

function saveTranslationCache() {
  try {
    fs.writeFileSync(CACHE_FILE_PATH, JSON.stringify(translationCache, null, 2), "utf-8");
  } catch (err) {
    console.warn("Failed to save translation cache to file:", err);
  }
}

// Stats persistence for visits and downloads
const STATS_FILE_PATH = path.join(__dirname, "stats.json");

function getStats() {
  try {
    if (fs.existsSync(STATS_FILE_PATH)) {
      const data = fs.readFileSync(STATS_FILE_PATH, "utf-8");
      return JSON.parse(data);
    }
  } catch (err) {
    console.warn("Failed to load stats file, using fresh defaults:", err);
  }
  return { visits: 0, downloads: 0 };
}

function saveStats(stats: { visits: number; downloads: number }) {
  try {
    fs.writeFileSync(STATS_FILE_PATH, JSON.stringify(stats, null, 2), "utf-8");
  } catch (err) {
    console.warn("Failed to save stats to file:", err);
  }
}

const app = express();
const PORT = 3000;

// Enable JSON body parsing
app.use(express.json());

// Initialize Gemini API client safely
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
  console.log("Gemini API client initialized successfully.");
} else {
  console.warn("GEMINI_API_KEY is not defined in the environment. AI features will be disabled.");
}

// 1. AI Consult / Explain Endpoint
app.post("/api/gemini/explain", async (req, res) => {
  if (!ai) {
    return res.status(503).json({ error: "Az AI szolgáltatás jelenleg nem elérhető (hiányzó API kulcs)." });
  }

  const { question, context, lang } = req.body;
  if (!question) {
    return res.status(400).json({ error: "A kérdés mező kitöltése kötelező." });
  }

  try {
    const prompt = `Kérdés / Question: ${question}\n\nKontextus vagy kiválasztott antibiotikum/kórokozó: ${context || "Nincs specifikus kontextus"}`;
    
    let systemInstruction = `Te egy tapasztalt klinikai farmakológus és infektológus professzor vagy, aki orvostanhallgatókat és gyakorló orvosokat oktat. 
A feladatod, hogy szabatosan, magas szintű tudományos orvosi terminológiával és stílusban, de érthetően és logikusan válaszolj infektológiai, mikrobiológiai vagy antibiotikum-farmakológiai kérdésekre.
Kizárólag magyar nyelven válaszolj! 
Használj orvosi szakkifejezéseket (pl. baktericid, bakteriosztatikus, PBP, transzpeptidáció, rezisztencia-mechanizmusok, ESBL, AmpC, carbapenemáz, MIC, AUC/MIC, koncentráció- vagy időfüggő hatás, TDM, OPAT stb.).
Formázd a választ olvashatóan Markdown formátumban (bekezdések, listák, vastagítások), de kerüld a túl hosszú vagy csapongó magyarázatokat. Koncentrálj a klinikai relevanciára és a patomechanizmusra.`;

    if (lang === 'en') {
      systemInstruction = `You are an experienced clinical pharmacologist and infectious disease professor teaching medical students and practicing clinicians.
Your task is to answer questions about infectiology, microbiology, or antibiotic pharmacology precisely, with high-level scientific medical terminology, but in an understandable and logical manner.
Respond exclusively in English!
Use medical terms (e.g. bactericidal, bacteriostatic, PBP, transpeptidation, resistance mechanisms, ESBL, AmpC, carbapenemase, MIC, AUC/MIC, concentration- or time-dependent activity, TDM, OPAT, etc.).
Format your response clearly using Markdown (paragraphs, lists, bold text), but avoid overly long or rambling explanations. Focus on clinical relevance and pathomechanisms.`;
    } else if (lang === 'de') {
      systemInstruction = `Sie sind ein erfahrener klinischer Pharmakologe und Infektiologe, der Medizinstudenten und praktizierende Ärzte unterrichtet.
Ihre Aufgabe ist es, Fragen zur Infektiologie, Mikrobiologie oder Antibiotika-Pharmakologie präzise, mit anspruchsvoller wissenschaftlicher medizinischer Terminologie, aber verständlich und logisch zu beantworten.
Antworten Sie ausschließlich auf Deutsch!
Verwenden Sie medizinische Fachbegriffe (z. B. bakterizid, bakteriostatisch, PBP, Transpeptidation, Resistenzmechanismen, ESBL, AmpC, Carbapenemase, MHK, AUC/MHK, konzentrations- oder zeitabhängige Wirkung, TDM, OPAT usw.).
Formatieren Sie Ihre Antwort gut lesbar mit Markdown (Absätze, Listen, Fettdruck), aber vermeiden Sie zu lange oder ausschweifende Erklärungen. Konzentrieren Sie sich auf klinische Relevanz und Pathomechanismen.`;
    }
    
    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite",
      contents: prompt,
      config: {
        systemInstruction
      }
    });

    res.json({ answer: response.text });
  } catch (error: any) {
    console.error("Error in /api/gemini/explain:", error);
    res.status(500).json({ error: "Sikertelen válaszgenerálás az AI által: " + (error.message || error) });
  }
});

// 2. Case Generator Endpoint
app.post("/api/gemini/generate-case", async (req, res) => {
  if (!ai) {
    return res.status(503).json({ error: "Az AI szolgáltatás jelenleg nem elérhető (hiányzó API kulcs)." });
  }

  const { category, lang } = req.body;

  try {
    const prompt = `Generálj egy klinikai esetet a következő kategóriában: ${category || "bármilyen infektológiai kórkép"}. Language: ${lang || 'hu'}`;

    let sysInstruction = `Generálj egy élethű infektológiai klinikai esetet orvostanhallgatóknak gyakorlásra. A kimenetnek egy szigorúan érvényes JSON-nak kell lennie a következő mezőkkel:
{
  "age": szám (beteg kora),
  "gender": "férfi" vagy "nő",
  "symptoms": [szöveges szimptómák tömbje, pl. "magas láz", "hidegrázás"],
  "vitals": {
    "bp": "vérnyomás pl. 110/70 Hgmm",
    "hr": pulzusszám (szám),
    "temp": "testhőmérséklet pl. 38.5 °C",
    "rr": légzésszám (szám)
  },
  "labs": [laborleletek és vizsgálati eredmények tömbje, pl. "CRP: 120 mg/l", "Mellkas rtg: infiltrátum"],
  "questionText": "A kérdés, pl. Mi a legmegfelelőbb empirikus kezelés?",
  "options": [4 válaszlehetőség tömbje, pl. "Amoxicillin", "Ceftriaxon", "Vancomycin", "Metronidazol"],
  "correctAnswerIndex": a helyes válasz indexe (0, 1, 2, vagy 3),
  "explanation": "Részletes, magas szintű szakmai magyarázat magyarul, hogy miért az a helyes válasz, és a többiek miért nem."
}
Kizárólag magyarul fogalmazz. Az eset legyen klinikailag reális, feleljen meg a legújabb szakmai irányelveknek.`;

    if (lang === 'en') {
      sysInstruction = `Generate a realistic infectious disease clinical case for medical students for practice. The output MUST be a strictly valid JSON with the following fields:
{
  "age": number (patient age),
  "gender": "male" or "female",
  "symptoms": [array of symptoms, e.g., "high fever", "chills"],
  "vitals": {
    "bp": "blood pressure e.g., 110/70 mmHg",
    "hr": heart rate (number),
    "temp": "body temperature e.g., 38.5 °C",
    "rr": respiratory rate (number)
  },
  "labs": [array of laboratory findings and diagnostic results, e.g., "CRP: 120 mg/l", "Chest X-ray: infiltrate"],
  "questionText": "The question, e.g., What is the most appropriate empirical treatment?",
  "options": [array of 4 multiple choice options, e.g., "Amoxicillin", "Ceftriaxone", "Vancomycin", "Metronidazole"],
  "correctAnswerIndex": index of the correct answer (0, 1, 2, or 3),
  "explanation": "Detailed, high-level professional explanation in English, detailing why this is the correct answer and why the others are incorrect."
}
Formulate everything exclusively in English. The case must be clinically realistic and in line with latest guidelines.`;
    } else if (lang === 'de') {
      sysInstruction = `Generieren Sie einen realistischen infektiologischen klinischen Fall für Medizinstudenten zum Üben. Die Ausgabe MUSS ein streng gültiges JSON mit den folgenden Feldern sein:
{
  "age": Zahl (Alter des Patienten),
  "gender": "männlich" oder "weiblich",
  "symptoms": [Array von Symptomen, z. B. "hohes Fieber", "Schüttelfrost"],
  "vitals": {
    "bp": "Blutdruck z. B. 110/70 mmHg",
    "hr": Pulsfrequenz (Zahl),
    "temp": "Körpertemperatur z. B. 38.5 °C",
    "rr": Atemfrequenz (Zahl)
  },
  "labs": [Array von Laborbefunden und Untersuchungsergebnissen, z. B. "CRP: 120 mg/l", "Röntgen-Thorax: Infiltrat"],
  "questionText": "Die Frage, z. B. Was ist die am besten geeignete empirische Behandlung?",
  "options": [Array von 4 Antwortmöglichkeiten, z. B. "Amoxicillin", "Ceftriaxon", "Vancomycin", "Metronidazol"],
  "correctAnswerIndex": Index der richtigen Antwort (0, 1, 2 oder 3),
  "explanation": "Detaillierte, anspruchsvolle medizinische Erklärung auf Deutsch, warum dies die richtige Antwort ist und warum die anderen falsch sind."
}
Formulieren Sie alles ausschließlich auf Deutsch. Der Fall muss klinisch realistisch sein und den neuesten Richtlinien entsprechen.`;
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        systemInstruction: sysInstruction
      }
    });

    const caseData = JSON.parse(response.text || "{}");
    res.json(caseData);
  } catch (error: any) {
    console.error("Error in /api/gemini/generate-case:", error);
    res.status(500).json({ error: "Sikertelen esetgenerálás: " + (error.message || error) });
  }
});

// 3. Translation Proxy Endpoint
app.post("/api/translate", async (req, res) => {
  const { text, targetLang } = req.body;
  if (!text) {
    return res.status(400).json({ error: "Text is required." });
  }

  if (targetLang === 'hu') {
    return res.json({ translatedText: text });
  }

  // Check persistent server-side cache first
  const langKey = targetLang === 'en' ? 'en' : 'de';
  if (translationCache[langKey] && translationCache[langKey][text]) {
    return res.json({ translatedText: translationCache[langKey][text] });
  }

  if (!ai) {
    return res.status(503).json({ error: "Translation service unavailable (missing API key)." });
  }

  try {
    const prompt = `Translate the following medical text from Hungarian to ${targetLang === 'en' ? 'English' : 'German'}. 
Keep all markdown formatting (like *, **, -, numbers, lists) exactly identical, and maintain strict medical term accuracy matching professional international guidelines. 
Translate Hungarian medical abbreviations and phrases to their accurate professional equivalents (e.g., "Amoxicillin/klavulánsav" -> "Amoxicillin/clavulanate", "kórokozó" -> "pathogen", "húgyúti fertőzés" -> "urinary tract infection", "szövődményes" -> "complicated"). 
Return ONLY the translated text, absolutely nothing else. No introductions, no pleasantries, no markdown blocks. Just the translated text.

Text to translate:
${text}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite",
      contents: prompt,
    });

    const translatedText = response.text ? response.text.trim() : text;

    // Save to cache
    if (!translationCache[langKey]) {
      translationCache[langKey] = {};
    }
    translationCache[langKey][text] = translatedText;
    saveTranslationCache();

    res.json({ translatedText });
  } catch (error: any) {
    const cleanMsg = error.message || String(error);
    console.warn("Translation API fallback activated due to:", cleanMsg.includes("quota") ? "rate limit (using original text)" : cleanMsg);
    // Return 200 OK with original text as fallback to avoid registering platform 500 error logs when quota is exceeded
    res.json({ translatedText: text, error: "Translation rate limit or error", isFallback: true });
  }
});

// 4. Retrieve entire server-side translation cache in a single request
app.get("/api/translations", (req, res) => {
  res.json(translationCache);
});

// 5. Submit User Feedback Endpoint
const FEEDBACK_FILE_PATH = path.join(__dirname, "feedbacks.json");

app.post("/api/feedback", async (req, res) => {
  const { name, email, subject, message, rating } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: "E-mail és üzenet kitöltése kötelező!" });
  }

  try {
    let feedbacks: any[] = [];
    if (fs.existsSync(FEEDBACK_FILE_PATH)) {
      const data = fs.readFileSync(FEEDBACK_FILE_PATH, "utf-8");
      try {
        feedbacks = JSON.parse(data);
        if (!Array.isArray(feedbacks)) feedbacks = [];
      } catch (e) {
        feedbacks = [];
      }
    }

    const newFeedback = {
      id: Date.now().toString(),
      name: name || "Névtelen látogató",
      email,
      subject: subject || "SepsisDose Visszajelzés",
      message,
      rating: rating || 5,
      timestamp: new Date().toISOString()
    };

    feedbacks.push(newFeedback);
    fs.writeFileSync(FEEDBACK_FILE_PATH, JSON.stringify(feedbacks, null, 2), "utf-8");
    console.log(`New feedback saved from ${email} (Rating: ${rating || 5}/5).`);

    res.json({ success: true, feedback: newFeedback });
  } catch (error: any) {
    console.error("Error saving feedback:", error);
    res.status(500).json({ error: "Hiba történt a visszajelzés mentése során: " + (error.message || error) });
  }
});

// 6. Stats & Counters API
app.get("/api/stats", (req, res) => {
  const stats = getStats();
  res.json(stats);
});

app.post("/api/stats/visit", (req, res) => {
  const stats = getStats();
  stats.visits = (stats.visits || 0) + 1;
  saveStats(stats);
  res.json(stats);
});

app.post("/api/stats/download", (req, res) => {
  const stats = getStats();
  stats.downloads = (stats.downloads || 0) + 1;
  saveStats(stats);
  res.json(stats);
});

// Configure Vite or Static Asset Serving
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    // Development mode: Integrate Vite as a middleware
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite development middleware integrated.");
  } else {
    // Production mode: Serve pre-built static files
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
    console.log("Production static server configured.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
