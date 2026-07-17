import { antibioticsData_HU } from "./src/data/antibiotics_hu";
import { microbesData } from "./src/data/microbiology_hu";
import { clinicalInfectionsData } from "./src/data/clinical_hu";
import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("GEMINI_API_KEY environment variable is required to run this script.");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

const CACHE_FILE_PATH = path.join(process.cwd(), "translation_cache.json");

// Load existing cache
let translationCache: Record<string, Record<string, string>> = { en: {}, de: {} };
if (fs.existsSync(CACHE_FILE_PATH)) {
  try {
    translationCache = JSON.parse(fs.readFileSync(CACHE_FILE_PATH, "utf-8"));
    if (!translationCache.en) translationCache.en = {};
    if (!translationCache.de) translationCache.de = {};
    
    // Clean up failed fallback translations (where key === value and length > 10)
    for (const lang of ["en", "de"]) {
      const cache = translationCache[lang];
      for (const [key, val] of Object.entries(cache)) {
        if (key === val && key.length > 10) {
          delete cache[key];
        }
      }
    }
    console.log(`Loaded and cleaned existing cache: ${Object.keys(translationCache.en).length} English, ${Object.keys(translationCache.de).length} German items.`);
  } catch (err) {
    console.warn("Failed to parse existing cache, starting fresh:", err);
  }
}

// Gather unique Hungarian strings to translate
const textsToTranslate = new Set<string>();

// 1. Antibiotics
for (const ab of antibioticsData_HU) {
  if (ab.mechanismOfAction) textsToTranslate.add(ab.mechanismOfAction.trim());
  if (ab.spectrum && ab.spectrum.other) textsToTranslate.add(ab.spectrum.other.trim());
  if (ab.dosage) {
    if (ab.dosage.adult) textsToTranslate.add(ab.dosage.adult.trim());
    if (ab.dosage.pediatric) textsToTranslate.add(ab.dosage.pediatric.trim());
    if (ab.dosage.renalAdjustment) textsToTranslate.add(ab.dosage.renalAdjustment.trim());
  }
  if (ab.notes) textsToTranslate.add(ab.notes.trim());
  if (ab.sideEffects) {
    for (const se of ab.sideEffects) {
      if (se) textsToTranslate.add(se.trim());
    }
  }
  if (ab.indications) {
    for (const ind of ab.indications) {
      if (ind) textsToTranslate.add(ind.trim());
    }
  }
}

// 2. Microbiology
for (const m of microbesData) {
  if (m.clinicalImportance) textsToTranslate.add(m.clinicalImportance.trim());
  if (m.resistanceMechanisms) textsToTranslate.add(m.resistanceMechanisms.trim());
  if (m.resistances) {
    for (const r of m.resistances) {
      if (r.mechanismNotes) textsToTranslate.add(r.mechanismNotes.trim());
    }
  }
}

// 3. Clinical Infections
for (const inf of clinicalInfectionsData) {
  if (inf.guidelines) textsToTranslate.add(inf.guidelines.trim());
  if (inf.diagnosticsNotes) textsToTranslate.add(inf.diagnosticsNotes.trim());
  if (inf.pathogens) {
    for (const p of inf.pathogens) {
      if (p.notes) textsToTranslate.add(p.notes.trim());
    }
  }
  if (inf.empirical) {
    if (inf.empirical.mild) {
      if (inf.empirical.mild.firstLine) textsToTranslate.add(inf.empirical.mild.firstLine.trim());
      if (inf.empirical.mild.alternative) textsToTranslate.add(inf.empirical.mild.alternative.trim());
      if (inf.empirical.mild.duration) textsToTranslate.add(inf.empirical.mild.duration.trim());
    }
    if (inf.empirical.severe) {
      if (inf.empirical.severe.firstLine) textsToTranslate.add(inf.empirical.severe.firstLine.trim());
      if (inf.empirical.severe.alternative) textsToTranslate.add(inf.empirical.severe.alternative.trim());
      if (inf.empirical.severe.duration) textsToTranslate.add(inf.empirical.severe.duration.trim());
    }
  }
  if (inf.targeted) {
    for (const t of inf.targeted) {
      if (t.condition) textsToTranslate.add(t.condition.trim());
      if (t.treatment) textsToTranslate.add(t.treatment.trim());
    }
  }
}

console.log(`Total unique medical text phrases found: ${textsToTranslate.size}`);

// Filter out already translated texts
const remainingTextsEn = Array.from(textsToTranslate).filter(text => !translationCache.en[text]);
const remainingTextsDe = Array.from(textsToTranslate).filter(text => !translationCache.de[text]);

console.log(`Remaining to translate for English: ${remainingTextsEn.length}`);
console.log(`Remaining to translate for German: ${remainingTextsDe.length}`);

// Function to translate a bulk list of texts with retries & delay
async function translateBulkWithRetry(chunk: string[], targetLang: string, attempt = 1): Promise<string[]> {
  const langName = targetLang === "en" ? "English" : "German";
  try {
    const prompt = `You are an expert clinical pharmacology and medical translator. Translate the following list of Hungarian medical texts into ${langName}.
Maintain strict medical term accuracy matching professional international guidelines (e.g. translate "baktericid" -> "bactericidal", "veseelégtelenség" -> "renal impairment / renal failure", "májfunkció" -> "hepatic function", "szövődményes vizeletút" -> "complicated urinary tract", "felnőtt" -> "adult", "gyermek" -> "pediatric", "terhesség" -> "pregnancy").
Keep all markdown formatting (like *, **, -, numbers, lists) exactly identical.
The input is a JSON array of strings. You MUST return a strictly valid JSON array of strings of the exact same length (${chunk.length}) and order, containing only the translated strings. Do not include any explanations, greetings, or markdown code blocks. Just return the valid JSON array of strings.

Input JSON:
${JSON.stringify(chunk)}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite",
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const parsed = JSON.parse(response.text ? response.text.trim() : "[]") as string[];
    if (!Array.isArray(parsed) || parsed.length !== chunk.length) {
      throw new Error(`Invalid response structure or length mismatch: expected ${chunk.length}, got ${parsed?.length}`);
    }
    return parsed;
  } catch (err: any) {
    if (attempt < 4) {
      const waitTime = 5000 * attempt;
      console.warn(`Bulk translation failed (${targetLang}), retrying in ${waitTime / 1000}s (attempt ${attempt + 1})... Error: ${err.message || err}`);
      await new Promise(resolve => setTimeout(resolve, waitTime));
      return translateBulkWithRetry(chunk, targetLang, attempt + 1);
    }
    console.error(`Failed to translate bulk chunk after ${attempt} attempts. Returning original texts as fallback.`);
    return chunk; // fallback to original texts for this chunk
  }
}

async function run() {
  const CHUNK_SIZE = 45;
  
  // Translate for English in chunks
  console.log(`Starting English bulk translations in chunks of ${CHUNK_SIZE}...`);
  for (let i = 0; i < remainingTextsEn.length; i += CHUNK_SIZE) {
    const chunk = remainingTextsEn.slice(i, i + CHUNK_SIZE);
    const chunkIndex = Math.floor(i / CHUNK_SIZE) + 1;
    const totalChunks = Math.ceil(remainingTextsEn.length / CHUNK_SIZE);
    console.log(`[EN] Translating chunk ${chunkIndex}/${totalChunks} (Size: ${chunk.length})`);
    
    const translatedChunk = await translateBulkWithRetry(chunk, "en");
    
    for (let j = 0; j < chunk.length; j++) {
      translationCache.en[chunk[j]] = translatedChunk[j] || chunk[j];
    }
    
    // Save cache incrementally after every chunk
    fs.writeFileSync(CACHE_FILE_PATH, JSON.stringify(translationCache, null, 2), "utf-8");
    console.log(`Saved EN chunk ${chunkIndex}/${totalChunks}. Total cached EN: ${Object.keys(translationCache.en).length}`);
    
    // Sleep to respect RPM limit of 15
    await new Promise(resolve => setTimeout(resolve, 10000));
  }

  // Translate for German in chunks
  console.log(`Starting German bulk translations in chunks of ${CHUNK_SIZE}...`);
  for (let i = 0; i < remainingTextsDe.length; i += CHUNK_SIZE) {
    const chunk = remainingTextsDe.slice(i, i + CHUNK_SIZE);
    const chunkIndex = Math.floor(i / CHUNK_SIZE) + 1;
    const totalChunks = Math.ceil(remainingTextsDe.length / CHUNK_SIZE);
    console.log(`[DE] Translating chunk ${chunkIndex}/${totalChunks} (Size: ${chunk.length})`);
    
    const translatedChunk = await translateBulkWithRetry(chunk, "de");
    
    for (let j = 0; j < chunk.length; j++) {
      translationCache.de[chunk[j]] = translatedChunk[j] || chunk[j];
    }
    
    // Save cache incrementally after every chunk
    fs.writeFileSync(CACHE_FILE_PATH, JSON.stringify(translationCache, null, 2), "utf-8");
    console.log(`Saved DE chunk ${chunkIndex}/${totalChunks}. Total cached DE: ${Object.keys(translationCache.de).length}`);
    
    // Sleep to respect RPM limit of 15
    await new Promise(resolve => setTimeout(resolve, 10000));
  }

  // Final save
  fs.writeFileSync(CACHE_FILE_PATH, JSON.stringify(translationCache, null, 2), "utf-8");
  console.log("Translation cache population complete! Saved to translation_cache.json.");
}

run().catch(err => {
  console.error("Script failed:", err);
});
