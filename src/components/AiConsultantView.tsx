/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Brain, Sparkles, Send, RefreshCw, CheckCircle2, HelpCircle, Loader2, AlertCircle, HeartPulse, ShieldAlert, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';

interface GeneratedCase {
  age: number;
  gender: string;
  symptoms: string[];
  vitals: {
    bp: string;
    hr: number;
    temp: string;
    rr: number;
  };
  labs: string[];
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export default function AiConsultantView() {
  const { t, tg, language } = useLanguage();
  const [activeSubTab, setActiveSubTab] = useState<'consult' | 'generator'>('consult');
  
  // Custom API key states
  const [userApiKey, setUserApiKey] = useState(() => localStorage.getItem('user_gemini_api_key') || '');
  const [inputApiKey, setInputApiKey] = useState(userApiKey);
  const [isKeyFormOpen, setIsKeyFormOpen] = useState(false);
  const [keySaveSuccess, setKeySaveSuccess] = useState(false);

  // Consult Tab States
  const [consultQuestion, setConsultQuestion] = useState('');
  const [consultAnswer, setConsultAnswer] = useState('');
  const [isConsultLoading, setIsConsultLoading] = useState(false);
  const [consultError, setConsultError] = useState('');

  // Case Generator States
  const [selectedCaseCategory, setSelectedCaseCategory] = useState('pneumonia');
  const [activeGeneratedCase, setActiveGeneratedCase] = useState<GeneratedCase | null>(null);
  const [isCaseLoading, setIsCaseLoading] = useState(false);
  const [caseError, setCaseError] = useState('');
  const [selectedAnswerIdx, setSelectedAnswerIdx] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [hasSolvedSuccessfully, setHasSolvedSuccessfully] = useState<boolean | null>(null);

  // Quick Questions list for student inspiration - fully localized
  const quickQuestions = [
    { label: t('QQ_CEPHALOSPORIN_LISTERIA_LABEL'), text: t('QQ_CEPHALOSPORIN_LISTERIA_TEXT') },
    { label: t('QQ_ESBL_LABEL'), text: t('QQ_ESBL_TEXT') },
    { label: t('QQ_PK_PD_LABEL'), text: t('QQ_PK_PD_TEXT') },
    { label: t('QQ_PSEUDOMONAS_LABEL'), text: t('QQ_PSEUDOMONAS_TEXT') }
  ];

  const getExplainSystemInstruction = (lang: string) => {
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
    return systemInstruction;
  };

  const getCaseSystemInstruction = (lang: string) => {
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
    return sysInstruction;
  };

  const callGeminiDirectly = async (prompt: string, sysInst: string, isJson: boolean = false) => {
    const apiKey = localStorage.getItem('user_gemini_api_key') || userApiKey;
    if (!apiKey) {
      throw new Error("Hiányzó API kulcs. Kérjük, állítsa be a saját Gemini API kulcsát a fenti panelen.");
    }

    const modelName = "gemini-1.5-flash";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

    const payload = {
      contents: [{ parts: [{ text: prompt }] }],
      systemInstruction: { parts: [{ text: sysInst }] },
      generationConfig: isJson ? { responseMimeType: "application/json" } : undefined
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    if (!response.ok) {
      const errMsg = data?.error?.message || "Hiba történt a közvetlen Gemini API hívás során.";
      if (errMsg.includes("API key not valid")) {
        throw new Error("A megadott Gemini API kulcs érvénytelen. Kérjük, ellenőrizze a kulcsot!");
      }
      throw new Error(errMsg);
    }

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      throw new Error("Üres válasz érkezett az API-tól.");
    }

    return text;
  };

  // Call /api/gemini/explain
  const handleConsultSubmit = async (customText?: string) => {
    const questionText = customText || consultQuestion;
    if (!questionText.trim()) return;

    setIsConsultLoading(true);
    setConsultError('');
    setConsultAnswer('');

    const sysInst = getExplainSystemInstruction(language);

    if (userApiKey) {
      try {
        const text = await callGeminiDirectly(
          `Kérdés / Question: ${questionText}\n\nKontextus vagy kiválasztott antibiotikum/kórokozó: Nincs specifikus kontextus`,
          sysInst,
          false
        );
        setConsultAnswer(text);
        return;
      } catch (err: any) {
        console.error("Direct API error:", err);
        setConsultError(err.message || "Sikertelen közvetlen API hívás.");
        return;
      } finally {
        setIsConsultLoading(false);
      }
    }

    try {
      const response = await fetch('/api/gemini/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: questionText, lang: language })
      });

      if (response.status === 404 || !response.ok) {
        const isNetlify = window.location.hostname.includes('netlify.app') || response.status === 404;
        if (isNetlify) {
          throw new Error("Az alkalmazás jelenleg egy statikus szerveren (pl. Netlify) fut szerver háttér nélkül. Kérjük, állítsa be a saját Gemini API kulcsát a fenti beállítások panelen az AI funkciók használatához!");
        }
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || t('AI_EXPLAIN_ERROR') || "Hiba történt a generálás során.");
      }

      const data = await response.json();
      setConsultAnswer(data.answer);
    } catch (err: any) {
      console.error(err);
      if (err.message && err.message.includes("szerveren")) {
        setConsultError(err.message);
      } else {
        setConsultError(err.message || t('AI_CONN_ERROR') || "Sikertelen kapcsolódás a szerverhez. Ellenőrizd a hálózatot és a GEMINI_API_KEY-t.");
      }
    } finally {
      setIsConsultLoading(false);
    }
  };

  // Call /api/gemini/generate-case
  const handleGenerateCase = async () => {
    setIsCaseLoading(true);
    setCaseError('');
    setActiveGeneratedCase(null);
    setSelectedAnswerIdx(null);
    setIsAnswerSubmitted(false);
    setHasSolvedSuccessfully(null);

    const sysInst = getCaseSystemInstruction(language);
    const prompt = `Generálj egy klinikai esetet a következő kategóriában: ${selectedCaseCategory || "bármilyen infektológiai kórkép"}. Language: ${language || 'hu'}`;

    if (userApiKey) {
      try {
        const text = await callGeminiDirectly(prompt, sysInst, true);
        const parsed = JSON.parse(text);
        if (!parsed.options || !parsed.questionText) {
          throw new Error("Az AI által generált adatstruktúra hibás volt. Próbáld újra.");
        }
        setActiveGeneratedCase(parsed as GeneratedCase);
        return;
      } catch (err: any) {
        console.error("Direct API case error:", err);
        setCaseError(err.message || "Sikertelen közvetlen esetgenerálás.");
        return;
      } finally {
        setIsCaseLoading(false);
      }
    }

    try {
      const response = await fetch('/api/gemini/generate-case', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category: selectedCaseCategory, lang: language })
      });

      if (response.status === 404 || !response.ok) {
        const isNetlify = window.location.hostname.includes('netlify.app') || response.status === 404;
        if (isNetlify) {
          throw new Error("Az alkalmazás jelenleg egy statikus szerveren (pl. Netlify) fut szerver háttér nélkül. Kérjük, állítsa be a saját Gemini API kulcsát a fenti beállítások panelen az AI funkciók használatához!");
        }
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || t('AI_GEN_CASE_ERROR') || "Nem sikerült új esetet generálni.");
      }

      const data = await response.json();
      if (!data.options || !data.questionText) {
        throw new Error(t('AI_STRUCT_ERROR') || "Az AI által generált adatstruktúra hibás volt. Próbáld újra.");
      }

      setActiveGeneratedCase(data as GeneratedCase);
    } catch (err: any) {
      console.error(err);
      if (err.message && err.message.includes("szerveren")) {
        setCaseError(err.message);
      } else {
        setCaseError(err.message || t('AI_CONN_ERROR') || "Sikertelen kapcsolódás a szerverhez. Ellenőrizd a hálózatot és a GEMINI_API_KEY-t.");
      }
    } finally {
      setIsCaseLoading(false);
    }
  };

  const handleCaseAnswerSubmit = () => {
    if (selectedAnswerIdx === null || !activeGeneratedCase) return;
    setIsAnswerSubmitted(true);
    const isCorrect = selectedAnswerIdx === activeGeneratedCase.correctAnswerIndex;
    setHasSolvedSuccessfully(isCorrect);
  };

  return (
    <div id="ai-consultant-view" className="space-y-6">
      {/* Header and Capability Badges */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight flex items-center gap-2">
            <Brain className="w-6 h-6 text-blue-600 animate-pulse" />
            {t('AI_TITLE')}
            <Sparkles className="w-4.5 h-4.5 text-amber-500 fill-amber-500" />
          </h2>
          <p className="text-slate-500 text-sm mt-0.5">
            {t('AI_SUBTITLE')}
          </p>
        </div>

        {/* Mode switcher */}
        <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200/50 self-end text-xs">
          <button
            onClick={() => setActiveSubTab('consult')}
            className={`px-3 py-1.5 rounded-md font-semibold transition-all ${
              activeSubTab === 'consult' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            {t('AI_SUBTAB_CONSULT')}
          </button>
          <button
            onClick={() => setActiveSubTab('generator')}
            className={`px-3 py-1.5 rounded-md font-semibold transition-all ${
              activeSubTab === 'generator' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            {t('AI_SUBTAB_SIMULATOR')}
          </button>
        </div>
      </div>

      {/* Custom API Key Settings collapsible bar */}
      <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden">
        <button
          onClick={() => {
            setIsKeyFormOpen(!isKeyFormOpen);
            setKeySaveSuccess(false);
          }}
          className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors text-left outline-none cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <div className={`p-1.5 rounded-lg ${userApiKey ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-extrabold text-slate-800 leading-none">
                {t('AI_USER_KEY_TITLE') || 'Saját Gemini API Kulcs használata'}
              </h3>
              <p className="text-[10px] text-slate-400 mt-1 font-medium">
                {userApiKey 
                  ? '✓ Aktív (saját kulcs használatban)' 
                  : 'Alapértelmezett (központi szerver kulcs használata - korlátozott kvóta)'}
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-blue-600 hover:text-blue-700">
            {isKeyFormOpen ? (t('CLOSE') || 'Bezárás') : (userApiKey ? 'Szerkesztés' : 'Beállítás')}
          </span>
        </button>

        {isKeyFormOpen && (
          <div className="p-4 border-t border-slate-100 bg-slate-50/50 space-y-3">
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              {t('AI_USER_KEY_DESC') || 'Ha az alkalmazást Netlify-on vagy más statikus tárhelyen használod, a központi szerver hiányában megadhatod saját ingyenes Gemini API kulcsodat. A kulcsot biztonságosan, csak a saját böngésződ tárolja el.'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="password"
                value={inputApiKey}
                onChange={(e) => setInputApiKey(e.target.value)}
                placeholder={t('AI_USER_KEY_PLACEHOLDER') || "Írd be a Gemini API kulcsodat (AIzaSy...)"}
                className="flex-1 border border-slate-200 rounded-lg px-3 py-2 text-xs bg-white text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <div className="flex gap-1.5">
                <button
                  onClick={() => {
                    if (inputApiKey.trim()) {
                      localStorage.setItem('user_gemini_api_key', inputApiKey.trim());
                      setUserApiKey(inputApiKey.trim());
                      setKeySaveSuccess(true);
                      setTimeout(() => setKeySaveSuccess(false), 3000);
                    }
                  }}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs px-4 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  {t('AI_USER_KEY_SAVE') || 'Kulcs mentése'}
                </button>
                {userApiKey && (
                  <button
                    onClick={() => {
                      localStorage.removeItem('user_gemini_api_key');
                      setUserApiKey('');
                      setInputApiKey('');
                      setKeySaveSuccess(false);
                    }}
                    className="bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 font-extrabold text-xs px-3 py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    {t('AI_USER_KEY_CLEAR') || 'Törlés'}
                  </button>
                )}
              </div>
            </div>

            {keySaveSuccess && (
              <p className="text-[11px] text-emerald-600 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {t('AI_USER_KEY_SUCCESS') || 'API kulcs sikeresen elmentve! Mostantól az alkalmazás közvetlenül a te saját kulcsodat használja.'}
              </p>
            )}

            <div className="pt-1">
              <a
                href="https://aistudio.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-blue-600 hover:text-blue-500 hover:underline font-bold"
              >
                {t('AI_USER_KEY_GET') || 'Nincs még kulcsod? Szerezz egy ingyenes kulcsot itt (Google AI Studio)'} →
              </a>
            </div>
          </div>
        )}
      </div>

      {activeSubTab === 'consult' ? (
        /* CONSULT TUTOR UI */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Quick Questions left bar - 4 cols */}
          <div className="lg:col-span-4 space-y-4">
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t('AI_INSPIRATION_TITLE')}</span>
            <div className="space-y-2">
              {quickQuestions.map((qq, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setConsultQuestion(qq.text);
                    handleConsultSubmit(qq.text);
                  }}
                  disabled={isConsultLoading}
                  className="w-full text-left p-3.5 bg-white border border-slate-200 hover:border-blue-400 rounded-xl transition-all duration-150 text-xs font-bold text-slate-700 hover:bg-slate-50 leading-relaxed block"
                >
                  {qq.label}
                </button>
              ))}
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-500 leading-relaxed font-normal">
              <strong>{t('TIP') || 'Tipp'}:</strong> {t('AI_TUTOR_TIP_DESC') || 'Kattints a fenti gyors-kérdések egyikére, vagy írd be saját infektológiai, adagolási vagy rezisztencia kérdésedet az AI-nak a jobb oldalon!'}
            </div>
          </div>

          {/* Chat Window - 8 cols */}
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden min-h-[480px] flex flex-col justify-between">
              {/* Question Entry area */}
              <div className="p-5 border-b border-slate-100 space-y-4">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {t('AI_ASK_LABEL') || 'Tedd fel kérdésedet az aktív nyelven'}
                </label>
                <div className="flex gap-2">
                  <textarea
                    value={consultQuestion}
                    onChange={(e) => setConsultQuestion(e.target.value)}
                    placeholder={t('AI_PROMPT_PLACEHOLDER')}
                    disabled={isConsultLoading}
                    rows={2}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
                  />
                  <button
                    onClick={() => handleConsultSubmit()}
                    disabled={isConsultLoading || !consultQuestion.trim()}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold px-4 rounded-lg shadow-sm transition-colors flex items-center justify-center shrink-0 self-end h-11"
                  >
                    {isConsultLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Chat Response Area */}
              <div className="p-5 flex-1 overflow-y-auto bg-slate-50/50 max-h-[350px]">
                <AnimatePresence mode="wait">
                  {isConsultLoading ? (
                    <div className="flex flex-col justify-center items-center py-12 text-slate-400 space-y-2">
                      <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
                      <p className="text-xs font-semibold animate-pulse">{t('AI_LOADING_ANSWER') || 'Az AI Infektológus válaszának generálása folyamatban...'}</p>
                      <p className="text-[10px] text-slate-400 italic">{t('AI_LOADING_DESC') || 'Ez általában 2-4 másodpercet vesz igénybe.'}</p>
                    </div>
                  ) : consultError ? (
                    <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl flex gap-3 text-xs">
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <strong className="font-bold">{t('AI_ERROR_TITLE') || 'Kapcsolódási vagy Kulcs Hiba:'}</strong>
                        <p className="leading-relaxed font-medium">{consultError}</p>
                        <p className="text-[10px] text-slate-500 italic mt-2">
                          {t('AI_KEY_HELP_DESC') || 'Ha ezt a hibát látod, az azt jelenti, hogy az alkalmazáshoz nincs csatolva érvényes GEMINI_API_KEY környezeti változó a Secrets panelben, vagy a dev szerver újraindítása szükséges.'}
                        </p>
                      </div>
                    </div>
                  ) : consultAnswer ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-4"
                    >
                      <div className="flex gap-2.5 items-start">
                        <div className="w-8 h-8 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700 font-bold text-xs shrink-0 mt-0.5 shadow-sm">
                          AI
                        </div>
                        <div className="bg-white border border-slate-200 p-4 rounded-xl text-slate-700 text-xs shadow-sm leading-relaxed space-y-3 prose max-w-none w-full">
                          <p className="text-slate-500 font-bold border-b border-slate-100 pb-1.5 flex items-center gap-1.5">
                            <Sparkles className="w-4 h-4 text-blue-600" /> {t('AI_RESPONSE_TITLE')}
                          </p>
                          <div className="whitespace-pre-line font-medium text-slate-800">{consultAnswer}</div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="text-center py-16 text-slate-400 space-y-2 h-full flex flex-col justify-center items-center">
                      <Brain className="w-12 h-12 text-slate-300" />
                      <p className="font-semibold text-sm">{t('AI_WELCOME_TUTOR_TITLE') || 'Üdvözöllek az AI Konzultációban!'}</p>
                      <p className="text-xs text-slate-400 max-w-md">
                        {t('AI_WELCOME_TUTOR_DESC') || 'Kérdezz bármilyen klinikai kórképről, antibiotikum csoportról, mellékhatásról, vagy akár mikroba-érzékenységről. A mesterséges intelligencia infektológus professzori szinten válaszol neked.'}
                      </p>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* INFINITE CASE GENERATOR SOLVER */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Select Category & Generate Panel - 4 cols */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t('AI_SELECT_DIAGNOSIS_CAT')}</span>
              <div className="space-y-2">
                {[
                  { id: 'pneumonia', label: t('CAT_RESPIRATORY') + ' (Pneumonia)' },
                  { id: 'urinary', label: t('CAT_URINARY') + ' (UTI)' },
                  { id: 'meningitis', label: t('CAT_CNS') + ' (Meningitis)' },
                  { id: 'sepsis', label: t('CAT_SEPSIS') + ' (Sepsis Bundle)' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedCaseCategory(item.id)}
                    disabled={isCaseLoading}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-bold border transition-all ${
                      selectedCaseCategory === item.id
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <button
                onClick={handleGenerateCase}
                disabled={isCaseLoading}
                className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold py-3 px-4 rounded-lg text-xs shadow transition-colors flex items-center justify-center gap-2"
              >
                {isCaseLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {t('LOADING') || 'Generálás...'}
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-4 h-4" />
                    {t('AI_GEN_CASE_BTN')}
                  </>
                )}
              </button>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-500 leading-relaxed font-normal">
              <strong>{t('HOW_IT_WORKS') || 'Működése'}:</strong> {t('AI_SIM_HOW_IT_WORKS_DESC') || 'A gombra kattintva a Gemini közvetlenül a legfrissebb nemzetközi orvosi irányelvek (pl. IDSA, ESCMID, EAU) alapján generál egy teljesen egyedi klinikai szituációt, élethű laborleletekkel és vitális paraméterekkel.'}
            </div>
          </div>

          {/* Active Case & Quiz Solver - 8 cols */}
          <div className="lg:col-span-8 space-y-4">
            <AnimatePresence mode="wait">
              {isCaseLoading ? (
                <div className="bg-white border border-slate-200 rounded-xl p-16 text-center space-y-3 shadow-sm flex flex-col justify-center items-center">
                  <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
                  <p className="text-sm font-bold animate-pulse text-slate-700">{t('AI_CASE_GENERATING') || 'Klinikai eset és diagnosztikai adatok összeállítása folyamatban...'}</p>
                  <p className="text-xs text-slate-400 italic">{t('AI_CASE_GENERATING_DESC') || 'Ez a Gemini modellekkel végzett komplex JSON séma generálás miatt kb. 4-6 másodpercet vehet igénybe.'}</p>
                </div>
              ) : caseError ? (
                <div className="p-5 bg-red-50 border border-red-200 text-red-800 rounded-xl flex gap-3 text-xs">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <strong className="font-bold">{t('AI_ERROR_TITLE') || 'Esetgenerálási Hiba:'}</strong>
                    <p className="leading-relaxed font-medium">{caseError}</p>
                    <p className="text-[10px] text-slate-500 italic mt-2">
                      {t('AI_KEY_HELP_DESC') || 'Kérjük, ellenőrizd, hogy a GEMINI_API_KEY környezeti változód helyesen be van-e állítva. Ha most állítottad be, indítsd újra a fejlesztői szervert!'}
                    </p>
                  </div>
                </div>
              ) : activeGeneratedCase ? (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  {/* Case sheet display */}
                  <div className="bg-slate-900 text-slate-100 rounded-xl border border-slate-800 overflow-hidden shadow-md">
                    <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <HeartPulse className="w-5 h-5 text-blue-400" />
                        <span className="font-extrabold text-xs tracking-wider uppercase text-blue-300">{t('AI_GENERATED_CASE_TITLE')}</span>
                      </div>
                      <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2.5 py-0.5 rounded-full font-bold border border-blue-500/30">
                        {activeGeneratedCase.age} {t('YEARS_OLD_SUFFIX')} {tg(activeGeneratedCase.gender)}
                      </span>
                    </div>
                    <div className="p-4 space-y-4">
                      {/* Symptoms */}
                      <div className="text-xs space-y-1">
                        <span className="text-slate-500 font-semibold uppercase block">{t('CHIEF_COMPLAINTS')}</span>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {activeGeneratedCase.symptoms.map((sym, idx) => (
                            <span key={idx} className="bg-slate-800 text-slate-200 px-2 py-1 rounded font-medium border border-slate-700">
                              • {sym}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Vitals Dashboard */}
                      <div className="space-y-1">
                        <span className="text-xs text-slate-500 font-semibold uppercase block">{t('VITALS')}</span>
                        <div className="grid grid-cols-4 gap-2 pt-1 text-center font-mono">
                          <div className="bg-slate-800 p-2 rounded border border-slate-700/60">
                            <span className="text-[9px] text-slate-400 block uppercase">{t('BLOOD_PRESSURE')}</span>
                            <span className="text-xs font-bold text-slate-100 block mt-0.5">{activeGeneratedCase.vitals.bp}</span>
                          </div>
                          <div className="bg-slate-800 p-2 rounded border border-slate-700/60">
                            <span className="text-[9px] text-slate-400 block uppercase">{t('HEART_RATE')}</span>
                            <span className="text-xs font-bold text-red-400 block mt-0.5">{activeGeneratedCase.vitals.hr}/perc</span>
                          </div>
                          <div className="bg-slate-800 p-2 rounded border border-slate-700/60">
                            <span className="text-[9px] text-slate-400 block uppercase">{t('TEMPERATURE')}</span>
                            <span className="text-xs font-bold text-amber-400 block mt-0.5">{activeGeneratedCase.vitals.temp}</span>
                          </div>
                          <div className="bg-slate-800 p-2 rounded border border-slate-700/60">
                            <span className="text-[9px] text-slate-400 block uppercase">{t('RESPIRATION')}</span>
                            <span className="text-xs font-bold text-slate-100 block mt-0.5">{activeGeneratedCase.vitals.rr}/perc</span>
                          </div>
                        </div>
                      </div>

                      {/* Labs and diagnostics */}
                      <div className="text-xs bg-slate-950 p-3 rounded-lg border border-slate-800/80 space-y-1">
                        <span className="text-slate-500 font-semibold uppercase block">{t('CLINICAL_LABS_TESTS')}</span>
                        <ul className="space-y-1 list-disc list-inside text-slate-300 font-medium pl-1">
                          {activeGeneratedCase.labs.map((lab, idx) => (
                            <li key={idx} className="leading-relaxed">{lab}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Options & Quiz section */}
                  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
                    <h3 className="font-extrabold text-slate-800 text-sm leading-relaxed">
                      {activeGeneratedCase.questionText}
                    </h3>

                    {/* Options list */}
                    <div className="space-y-2.5">
                      {activeGeneratedCase.options.map((option, idx) => {
                        const isSelected = selectedAnswerIdx === idx;
                        const isCorrectAnswer = activeGeneratedCase.correctAnswerIndex === idx;
                        
                        let optionClass = "border-slate-200 hover:bg-slate-50 text-slate-700 hover:border-slate-300 bg-white";
                        if (isSelected && !isAnswerSubmitted) {
                          optionClass = "border-blue-500 bg-blue-50 text-blue-800 ring-2 ring-blue-500/20";
                        } else if (isAnswerSubmitted) {
                          if (isCorrectAnswer) {
                            optionClass = "border-emerald-500 bg-emerald-50 text-emerald-800 ring-2 ring-emerald-500/10";
                          } else if (isSelected) {
                            optionClass = "border-red-500 bg-red-50 text-red-800 ring-2 ring-red-500/10";
                          } else {
                            optionClass = "border-slate-100 bg-slate-50 text-slate-400 opacity-60";
                          }
                        }

                        return (
                          <button
                            key={idx}
                            onClick={() => {
                              if (!isAnswerSubmitted) setSelectedAnswerIdx(idx);
                            }}
                            disabled={isAnswerSubmitted}
                            className={`w-full text-left p-3.5 border rounded-lg text-xs font-semibold flex justify-between items-center transition-all ${optionClass}`}
                          >
                            <span className="leading-relaxed">{option}</span>
                            {isAnswerSubmitted && isCorrectAnswer && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Submit Option */}
                    <div className="flex justify-end pt-2 border-t border-slate-100">
                      {!isAnswerSubmitted && (
                        <button
                          onClick={handleCaseAnswerSubmit}
                          disabled={selectedAnswerIdx === null}
                          className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-bold py-2 px-5 rounded-lg text-xs shadow-sm transition-colors"
                        >
                          {t('SUBMIT_ANSWER') || 'Döntés beküldése'}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Response Explanation */}
                  {isAnswerSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-xl border leading-relaxed text-xs ${
                        hasSolvedSuccessfully
                          ? 'bg-emerald-50 text-emerald-900 border-emerald-200'
                          : 'bg-red-50 text-red-900 border-red-200'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 font-bold mb-1">
                        <ShieldAlert className="w-4 h-4 shrink-0" />
                        <span>{t('EXPLANATION_TITLE') || 'Klinikai és Patofiziológiai értékelés:'}</span>
                      </div>
                      <p className="font-semibold text-slate-800 leading-relaxed mb-2">
                        {hasSolvedSuccessfully 
                          ? (t('AI_SOLVED_SUCCESS') || '✓ Kiváló döntés! Helyesen választottál.') 
                          : (t('AI_SOLVED_FAILURE') || '✗ Hibás választás. Az eset megoldása az alábbi tényezőkön alapul:')}
                      </p>
                      <p className="font-medium text-slate-700 leading-relaxed">{activeGeneratedCase.explanation}</p>
                    </motion.div>
                  )}
                </motion.div>
              ) : (
                <div className="bg-slate-50 border border-dashed border-slate-200 rounded-xl py-24 text-center text-slate-400 h-full flex flex-col justify-center items-center">
                  <Brain className="w-12 h-12 text-slate-300 animate-pulse" />
                  <p className="font-semibold text-sm">{t('AI_WELCOME_SIM_TITLE') || 'Üdvözöllek az AI Eset Szimulátorban!'}</p>
                  <p className="text-xs text-slate-400 max-w-md mt-1">
                    {t('AI_WELCOME_SIM_DESC') || 'Válassz ki egy klinikai kategóriát a bal oldalon, majd kattints az "Új AI Eset Generálása" gombra, hogy a Gemini közvetlenül a legújabb klinikai protokollok szerint állítson össze neked egy egyedi beteget!'}
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
}
