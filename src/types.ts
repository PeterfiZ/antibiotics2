/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface AntibioticSpectrum {
  gramPositive: number; // 0: Nincs hatás, 1: Mérsékelt / szűkített, 2: Kiváló / elsővonalbeli
  gramNegative: number;
  anaerobe: number;
  atypical: number;
  pseudomonas: number;
  other: string; // Szöveges megjegyzés, pl. "MRSA ellen hatékony", "VRE", "csak vizeletben koncentrálódik"
}

export interface Antibiotic {
  id: string;
  name: string; // Hatóanyag neve, pl. "Amoxicillin"
  abbreviation?: string; // Nemzetközi mikrobiológiai rövidítés, pl. "AMX", "AMP"
  brandNames?: string; // Gyári nevek Magyarországon, pl. "Duomox"
  group: string; // Csoport, pl. "Aminopenicillinek"
  halfLife: string; // Felezési idő, pl. "1-1.5 óra"
  pae: string; // Post-Antibiotic Effect, pl. "Gram-pozitívaknál kifejezett, Gram-negatívaknál elhanyagolható"
  effectType: 'bactericid' | 'bacteriostaticus'; // bactericid vagy bacteriostaticus hatású-e
  dosage: {
    adult: string; // Felnőtt adagolás, pl. "3x 500mg - 1000mg p.o. vagy i.v."
    pediatric?: string; // Gyermek adagolás, pl. "40-90 mg/ttkg/nap 2-3 részben"
    renalAdjustment?: string; // Veseelégtelenségben adagolás
  };
  mechanismOfAction: string; // Hatásmechanizmus részletesen
  sideEffects: string[]; // Mellékhatások listája
  spectrum: AntibioticSpectrum;
  indications: string[]; // Főbb indikációk
  notes?: string; // Egyéb fontos megjegyzés
}

export interface Pathogen {
  name: string; // Kórokozó neve, pl. "Streptococcus pneumoniae"
  frequency: 'very-common' | 'common' | 'rare'; // Gyakoriság az adott kórképben
  notes?: string;
}

export interface EmpiricalTherapy {
  firstLine: string; // Elsővonalbeli kezelés
  alternative: string; // Alternatív kezelés
  duration: string; // Javasolt kezelési időtartam
}

export interface TargetedTherapy {
  condition: string; // Pl. "Ha Penicillin-rezisztens (PRSP)"
  treatment: string; // Pl. "Ceftriaxone v. Vancomycin"
}

export interface ClinicalInfection {
  id: string;
  name: string; // Kórkép neve, pl. "Közösségben szerzett pneumonia (CAP)"
  category: 'respiratory' | 'urinary' | 'cns' | 'sepsis' | 'abdominal' | 'skin_soft_tissue' | 'sst_bone'; // Kategória
  pathogens: Pathogen[]; // Leggyakoribb kórokozók
  empirical: {
    mild: EmpiricalTherapy;
    severe: EmpiricalTherapy;
  };
  targeted: TargetedTherapy[];
  guidelines: string; // Guideline források
  diagnosticsNotes: string; // Diagnosztikai tanácsok
}

export interface MicrobeResistance {
  antibioticId: string;
  antibioticName: string;
  susceptibility: 'S' | 'I' | 'R'; // S: Érzékeny, I: Mérsékelten érzékeny (Mérsékelt dózisnöveléssel), R: Rezisztens
  mechanismNotes?: string; // Rezisztencia mechanizmus megjegyzés, pl. "Béta-laktamáz termelés"
}

export interface Microbe {
  id: string;
  name: string; // Pl. "Staphylococcus aureus (MRSA)"
  type: 'gram-positive' | 'gram-negative' | 'anaerobe' | 'atypical';
  clinicalImportance: string; // Miért fontos klinikailag
  resistances: MicrobeResistance[];
  firstLineDrugs: string[]; // Elsőként választandó szerek ID-ja vagy neve
  resistanceMechanisms: string; // Főbb rezisztencia mechanizmusok (pl. mecA gén)
}

export interface QuizQuestion {
  id: string;
  type: 'susceptibility' | 'empirical' | 'pharmacology';
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  caseData?: {
    age: number;
    gender: 'férfi' | 'nő' | 'male' | 'female' | 'männlich' | 'weiblich';
    symptoms: string[];
    vitals: {
      bp: string;
      hr: number;
      temp: string;
      rr: number;
    };
    labs?: string[];
  };
}
