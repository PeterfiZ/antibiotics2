/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { uiTranslations, medicalGlossary } from './translations';
import { Antibiotic, ClinicalInfection, Microbe, QuizQuestion } from '../types';

import { antibioticsData_HU } from '../data/antibiotics_hu';
import { antibioticsData_EN } from '../data/antibiotics_en';
import { antibioticsData_DE } from '../data/antibiotics_de';

import { clinicalInfectionsData as clinicalInfectionsData_HU } from '../data/clinical_hu';
import { clinicalInfectionsData as clinicalInfectionsData_EN } from '../data/clinical_en';
import { clinicalInfectionsData as clinicalInfectionsData_DE } from '../data/clinical_de';

import { microbesData as microbesData_HU } from '../data/microbiology_hu';
import { microbesData as microbesData_EN } from '../data/microbiology_en';
import { microbesData as microbesData_DE } from '../data/microbiology_de';

import { quizQuestionsData as quizQuestionsData_HU } from '../data/questions_hu';
import { quizQuestionsData as quizQuestionsData_EN } from '../data/questions_en';
import { quizQuestionsData as quizQuestionsData_DE } from '../data/questions_de';

export type Language = 'hu' | 'en' | 'de';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tg: (term: string) => string;
  translateText: (text: string, targetLang: Language) => Promise<string>;
  antibioticsData: Antibiotic[];
  clinicalInfectionsData: ClinicalInfection[];
  microbesData: Microbe[];
  quizQuestionsData: QuizQuestion[];
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const normalizeAntibiotic = (ab: any): Antibiotic => {
  let effectType: 'bactericid' | 'bacteriostaticus' = 'bactericid';
  const rawType = String(ab.effectType || '').toLowerCase();
  if (rawType.includes('bacteriostatic') || rawType.includes('bakteriostatisch') || rawType.includes('bacteriostaticus')) {
    effectType = 'bacteriostaticus';
  }

  return {
    ...ab,
    effectType,
    spectrum: {
      ...ab.spectrum,
      gramPositive: Number(ab.spectrum?.gramPositive ?? 0),
      gramNegative: Number(ab.spectrum?.gramNegative ?? 0),
      anaerobe: Number(ab.spectrum?.anaerobe ?? 0),
      atypical: Number(ab.spectrum?.atypical ?? 0),
      pseudomonas: Number(ab.spectrum?.pseudomonas ?? 0),
      other: ab.spectrum?.other || '',
    }
  };
};

const normalizedAntibioticsHU = antibioticsData_HU.map(normalizeAntibiotic);
const normalizedAntibioticsEN = antibioticsData_EN.map(normalizeAntibiotic);
const normalizedAntibioticsDE = antibioticsData_DE.map(normalizeAntibiotic);

// Load in-memory cache from localStorage
const translationCache: Record<string, Record<string, string>> = (() => {
  try {
    const saved = localStorage.getItem('ab_translation_cache');
    return saved ? JSON.parse(saved) : { en: {}, de: {} };
  } catch {
    return { en: {}, de: {} };
  }
})();

const saveCache = () => {
  try {
    localStorage.setItem('ab_translation_cache', JSON.stringify(translationCache));
  } catch (e) {
    console.warn("Failed to save translation cache:", e);
  }
};

// Local translation helper for common simple medical terms to offload the Gemini API
const localTranslate = (text: string, lang: Language): string => {
  if (lang === 'hu' || !text) return text;
  const tText = text.trim();

  // Exact matches for common phrases
  const exactEn: Record<string, string> = {
    "Nincs": "None",
    "Nincs adat": "No data",
    "Nincs adató": "No data",
    "Nincs specifikus adat": "No specific data",
    "Nem igényel": "Not required",
    "Nem igényel adaptációt": "No adjustment required",
    "Mérsékelt": "Moderate",
    "Kifejezett": "Pronounced",
    "Rövid": "Short",
    "férfi": "male",
    "nő": "female",
    "év": "years",
    "nap": "days",
    "óra": "hours",
    "perc": "minutes",
    "Gram-pozitívaknál kifejezett": "Pronounced for Gram-positives",
    "Gram-pozitívaknál mérsékelt": "Moderate for Gram-positives",
    "Gram-negatívaknál kifejezett": "Pronounced for Gram-negatives",
    "Gram-negatívaknál mérsékelt": "Moderate for Gram-negatives",
    "Gram-negatívaknál minimális": "Minimal for Gram-negatives",
    "Mérsékelt.": "Moderate.",
    "Kifejezett.": "Pronounced.",
    "Nincs.": "None.",
  };

  const exactDe: Record<string, string> = {
    "Nincs": "Keine",
    "Nincs adat": "Keine Daten",
    "Nincs adató": "Keine Daten",
    "Nincs specifikus adat": "Keine spezifischen Daten",
    "Nem igényel": "Nicht erforderlich",
    "Nem igényel adaptációt": "Keine Anpassung erforderlich",
    "Mérsékelt": "Mäßig",
    "Kifejezett": "Ausgeprägt",
    "Rövid": "Kurz",
    "férfi": "männlich",
    "nő": "weiblich",
    "év": "Jahre",
    "nap": "Tage",
    "óra": "Stunden",
    "perc": "Minuten",
    "Gram-pozitívaknál kifejezett": "Ausgeprägt bei Gram-positiven",
    "Gram-pozitívaknál mérsékelt": "Mäßig bei Gram-positiven",
    "Gram-negatívaknál kifejezett": "Ausgeprägt bei Gram-negativen",
    "Gram-negatívaknál mérsékelt": "Mäßig bei Gram-negativen",
    "Gram-negatívaknál minimális": "Minimal bei Gram-negativen",
    "Mérsékelt.": "Mäßig.",
    "Kifejezett.": "Ausgeprägt.",
    "Nincs.": "Keine.",
  };

  const map = lang === 'en' ? exactEn : exactDe;
  if (map[tText]) return map[tText];

  // Simple regex matching for dynamic time values (e.g. felezési idő)
  if (/^\d+-\d+\s+perc$/.test(tText)) {
    return tText.replace("perc", lang === 'en' ? "min" : "Min.");
  }
  if (/^\d+-\d+\s+óra$/.test(tText)) {
    return tText.replace("óra", lang === 'en' ? "hours" : "Std.");
  }
  if (/^kb\.\s+\d+-\d+\s+óra$/.test(tText)) {
    return tText.replace("kb.", lang === 'en' ? "approx." : "ca.").replace("óra", lang === 'en' ? "hours" : "Std.");
  }
  if (/^kb\.\s+\d+\s+óra$/.test(tText)) {
    return tText.replace("kb.", lang === 'en' ? "approx." : "ca.").replace("óra", lang === 'en' ? "hours" : "Std.");
  }
  if (/^\d+(\.\d+)?\s*-\s*\d+(\.\d+)?\s+óra$/.test(tText)) {
    return tText.replace("óra", lang === 'en' ? "hours" : "Std.");
  }
  if (/^\d+\s+óra$/.test(tText)) {
    return tText.replace("óra", lang === 'en' ? "hours" : "Std.");
  }
  if (/^\d+\s+nap$/.test(tText)) {
    return tText.replace("nap", lang === 'en' ? "days" : "Tage");
  }

  return text;
};

// Client-side sequential translation queue to throttle parallel API requests and avoid Gemini Rate Limits
interface QueueItem {
  text: string;
  targetLang: Language;
  resolve: (value: string) => void;
  reject: (err: any) => void;
}

const translationQueue: QueueItem[] = [];
let isProcessingQueue = false;

const fetchTranslation = async (text: string, targetLang: Language): Promise<string> => {
  const response = await fetch('/api/translate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, targetLang })
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || 'Translation failed');
  }
  return data.translatedText || text;
};

const processQueue = async () => {
  if (isProcessingQueue || translationQueue.length === 0) return;
  isProcessingQueue = true;

  while (translationQueue.length > 0) {
    const item = translationQueue.shift();
    if (!item) continue;

    try {
      const translated = await fetchTranslation(item.text, item.targetLang);
      item.resolve(translated);
    } catch (err) {
      item.reject(err);
    }

    // Wait 350ms between requests to gracefully avoid Gemini API rate limits (RPM)
    await new Promise((resolve) => setTimeout(resolve, 350));
  }

  isProcessingQueue = false;
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('ab_language');
    return (saved as Language) || 'hu';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('ab_language', lang);
  };

  // Load entire translation cache from server on startup
  useEffect(() => {
    fetch('/api/translations')
      .then(res => res.json())
      .then(serverCache => {
        if (serverCache && typeof serverCache === 'object') {
          let updated = false;
          for (const lang of ['en', 'de'] as const) {
            if (serverCache[lang] && typeof serverCache[lang] === 'object') {
              if (!translationCache[lang]) {
                translationCache[lang] = {};
              }
              for (const [key, val] of Object.entries(serverCache[lang])) {
                if (key && val && typeof val === 'string' && !translationCache[lang][key]) {
                  translationCache[lang][key] = val;
                  updated = true;
                }
              }
            }
          }
          if (updated) {
            saveCache();
            // Trigger state change to force rerender
            setLanguageState(lang => lang);
          }
        }
      })
      .catch(err => console.warn("Failed to load server translation cache:", err));
  }, []);

  // UI translate helper
  const t = (key: string): string => {
    const item = uiTranslations[key];
    if (!item) return key;
    return item[language] || item['hu'] || key;
  };

  // Medical Glossary translate helper (instant lookup)
  const tg = (term: string): string => {
    if (language === 'hu' || !term) return term;
    const cleanTerm = term.trim();
    const match = medicalGlossary[cleanTerm];
    if (match && match[language]) {
      return match[language];
    }
    return term;
  };

  // Live translator using backend endpoint (Gemini-powered)
  const translateText = async (text: string, targetLang: Language): Promise<string> => {
    if (targetLang === 'hu' || !text || !text.trim()) return text;

    // Check cache first
    if (!translationCache[targetLang]) {
      translationCache[targetLang] = {};
    }
    if (translationCache[targetLang][text]) {
      return translationCache[targetLang][text];
    }

    // Try local translations first
    const local = localTranslate(text, targetLang);
    if (local !== text) {
      translationCache[targetLang][text] = local;
      saveCache();
      return local;
    }

    // Queue the API translation request to prevent concurrent rate limits
    return new Promise<string>((resolve) => {
      translationQueue.push({
        text,
        targetLang,
        resolve: (translated) => {
          translationCache[targetLang][text] = translated;
          saveCache();
          resolve(translated);
        },
        reject: (err) => {
          console.warn("Translation failed, falling back to original:", err);
          resolve(text); // resolve with original text on failure to degrade gracefully
        }
      });
      processQueue();
    });
  };

  const antibioticsData = (() => {
    switch (language) {
      case 'en': return normalizedAntibioticsEN;
      case 'de': return normalizedAntibioticsDE;
      default: return normalizedAntibioticsHU;
    }
  })();

  const clinicalInfectionsData = (() => {
    switch (language) {
      case 'en': return clinicalInfectionsData_EN;
      case 'de': return clinicalInfectionsData_DE;
      default: return clinicalInfectionsData_HU;
    }
  })();

  const microbesData = (() => {
    switch (language) {
      case 'en': return microbesData_EN;
      case 'de': return microbesData_DE;
      default: return microbesData_HU;
    }
  })();

  const quizQuestionsData = (() => {
    switch (language) {
      case 'en': return quizQuestionsData_EN;
      case 'de': return quizQuestionsData_DE;
      default: return quizQuestionsData_HU;
    }
  })();

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      t, 
      tg, 
      translateText,
      antibioticsData,
      clinicalInfectionsData,
      microbesData,
      quizQuestionsData
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

interface TransTextProps {
  text: string;
  className?: string;
}

export function TransText({ text, className = "" }: TransTextProps) {
  return <span className={className}>{text || ''}</span>;
}
