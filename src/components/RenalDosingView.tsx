import React, { useState, useMemo } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { getGroupOrderWeight } from './PharmacologyView';
import { antibioticsData_HU } from '../data/antibiotics_hu';
import { antibioticsData_EN } from '../data/antibiotics_en';
import { antibioticsData_DE } from '../data/antibiotics_de';
import { renalDoseData_HU } from '../data/renal_dose_hu';
import { renalDoseData_EN } from '../data/renal_dose_en';
import { renalDoseData_DE } from '../data/renal_dose_de';
import {
  Activity,
  Calculator,
  Search,
  Info,
  ShieldAlert,
  AlertTriangle,
  CheckCircle,
  TrendingDown,
  ChevronDown,
  ChevronUp,
  Filter,
  User,
  Zap,
  BookOpen
} from 'lucide-react';

interface LocalizedField {
  hu: string;
  en: string;
  de: string;
}

interface LocalizedAntibioticRenalDose {
  id: string;
  name: string;
  brandNames: string;
  group: LocalizedField;
  normalDose: LocalizedField;
  gfrGt50: LocalizedField;
  gfr30to50: LocalizedField;
  gfr10to29: LocalizedField;
  gfrLt10: LocalizedField;
  hd: LocalizedField;
  crrt: LocalizedField;
  notes: LocalizedField;
  categoryNotes?: {
    hu: { gfrGt50: string; gfr30to50: string; gfr10to29: string; gfrLt10: string; hd: string; crrt: string };
    en: { gfrGt50: string; gfr30to50: string; gfr10to29: string; gfrLt10: string; hd: string; crrt: string };
    de: { gfrGt50: string; gfr30to50: string; gfr10to29: string; gfrLt10: string; hd: string; crrt: string };
  };
}

const normalizeName = (name: string) => name.toLowerCase().replace(/[^a-z0-9]/g, '');

const defaultGroups: Record<string, { hu: string; en: string; de: string }> = {
  "penicillin g": { hu: "Természetes penicillinek", en: "Natural penicillins", de: "Natürliche Penicilline" },
  "amoxicillin": { hu: "Aminopenicillinek", en: "Aminopenicillins", de: "Aminopenicilline" },
  "piperacillin-tazobactam": { hu: "Ureidopenicillinek + béta-laktamáz gátló", en: "Ureidopenicillins + beta-lactamase inhibitor", de: "Ureidopenicilline + Beta-Laktamase-Inhibitor" },
  "meropenem": { hu: "Carbapenemek", en: "Carbapenems", de: "Carbapeneme" },
  "vancomycin": { hu: "Glycopeptidek", en: "Glycopeptides", de: "Glykopeptide" },
  "gentamicin": { hu: "Aminoglikozidok", en: "Aminoglycosides", de: "Aminoglykoside" },
  "ciprofloxacin": { hu: "Fluoroquinolonok", en: "Fluoroquinolones", de: "Fluorchinolone" },
  "ticarcillin-clavulanate": { hu: "Penicillinek + béta-laktamáz gátló", en: "Penicillins + beta-lactamase inhibitor", de: "Penicilline + Beta-Laktamase-Inhibitor" },
  "cefazolin": { hu: "Első generációs cephalosporinok", en: "First-generation cephalosporins", de: "Cephalosporine der 1. Generation" },
  "ceftriaxone": { hu: "Harmadik generációs cephalosporinok", en: "Third-generation cephalosporins", de: "Cephalosporine der 3. Generation" },
  "cefepime": { hu: "Negyedik generációs cephalosporinok", en: "Fourth-generation cephalosporins", de: "Cephalosporine der 4. Generation" },
  "linezolid": { hu: "Oxazolidinonok", en: "Oxazolidinones", de: "Oxazolidinone" },
  "daptomycin": { hu: "Lipopeptidek", en: "Lipopeptides", de: "Lipopeptide" },
  "metronidazol": { hu: "Nitroimidazolok", en: "Nitroimidazoles", de: "Nitroimidazole" },
  "trimetoprim-sulfamethoxazole (tmp-smx)": { hu: "Szulfonamidok és trimetoprim", en: "Sulfonamides and trimethoprim", de: "Sulfonamide und Trimethoprim" },
  "cefoxitin": { hu: "Második generációs cephalosporinok", en: "Second-generation cephalosporins", de: "Cephalosporine der 2. Generation" },
  "cefalexin": { hu: "Első generációs cephalosporinok", en: "First-generation cephalosporins", de: "Cephalosporine der 1. Generation" },
  "cefaclor": { hu: "Második generációs cephalosporinok", en: "Second-generation cephalosporins", de: "Cephalosporine der 2. Generation" },
  "cefuroxim": { hu: "Második generációs cephalosporinok", en: "Second-generation cephalosporins", de: "Cephalosporine der 2. Generation" },
  "cefotaxime": { hu: "Harmadik generációs cephalosporinok", en: "Third-generation cephalosporins", de: "Cephalosporine der 3. Generation" },
  "ceftazidime": { hu: "Harmadik generációs cephalosporinok (Pseudomonas ellenes)", en: "Third-generation cephalosporins (antipseudomonal)", de: "Cephalosporine der 3. Generation (antipseudomonal)" },
  "ceftazidime-avibactam": { hu: "Cephalosporin + béta-laktamáz gátló", en: "Cephalosporin + beta-lactamase inhibitor", de: "Cephalosporin + Beta-Laktamase-Inhibitor" },
  "ceftolozane-tazobactam": { hu: "Cephalosporin + béta-laktamáz gátló", en: "Cephalosporin + beta-lactamase inhibitor", de: "Cephalosporin + Beta-Laktamase-Inhibitor" },
  "ceftaroline-avibactam": { hu: "Cephalosporin + béta-laktamáz gátló", en: "Cephalosporin + beta-lactamase inhibitor", de: "Cephalosporin + Beta-Laktamase-Inhibitor" },
  "cefepime-taniborbactam": { hu: "Cephalosporin + béta-laktamáz gátló", en: "Cephalosporin + beta-lactamase inhibitor", de: "Cephalosporin + Beta-Laktamase-Inhibitor" },
  "cefiderocol": { hu: "Siderophor cephalosporin", en: "Siderophore cephalosporin", de: "Siderophor-Cephalosporin" },
  "penicillin v": { hu: "Természetes penicillinek", en: "Natural penicillins", de: "Natürliche Penicilline" }
};

export default function RenalDosingView() {
  const { language } = useLanguage();
  const currentLang = (language === 'hu' || language === 'en' || language === 'de') ? language : 'hu';

  // Local translations for high-fidelity self-contained rendering
  const lt = {
    hu: {
      title: "Antibiotikum Dózismódosítás Veseelégtelenségben",
      subtitle: "Gyors, klinikai GFR-alapú adagolási útmutató és személyre szabott kalkulátor",
      tab_table: "Adagolási Táblázat",
      tab_calc: "Interaktív Dózis Kalkulátor",
      search_placeholder: "Keress hatóanyagra vagy csoportra...",
      filter_group: "Csoport szűrés",
      all_groups: "Összes csoport",
      gfr_range_label: "Kijelölt veseelégtelenségi tartomány",
      normal: "Normál / Enyhe (>50 GFR)",
      moderate: "Középsúlyos (30-50 GFR)",
      severe: "Súlyos (10-29 GFR)",
      esrd: "Végstádium (<10 GFR)",
      hd_short: "Hemodialízis (HD)",
      crrt_short: "CCRT / CRRT",
      ab_name: "Hatóanyag / Gyári név",
      normal_dose_header: "Normál adag",
      notes_header: "Klinikai megjegyzés / Figyelmeztetés",
      calc_title: "Betegspecifikus GFR & Dózis kalkulátor",
      calc_desc: "Számítsd ki a beteg GFR-ét / Kreatinin-clearance-ét, és kapj azonnali egyéni adagolási javaslatot az összes elérhető antibiotikumra.",
      age: "Életkor (év)",
      weight: "Testtömeg (kg)",
      gender: "Nem",
      male: "Férfi",
      female: "Nő",
      creatinine: "Szérum Kreatinin",
      calculate: "GFR Számítása és Dózis Ajánlása",
      gfr_result: "Számított értékek",
      cg_crcl: "Cockcroft-Gault clearance (dózisokhoz javasolt)",
      ckd_epi: "CKD-EPI GFR (2021-es formula)",
      renal_cat_label: "Vesefunkciós besorolás",
      recommend_title: "Személyre szabott gyógyszeradagoló asszisztens",
      select_drug: "Válassz ki egy antibiotikumot",
      rec_dose_label: "Javasolt adagolási séma ennél a betegnél",
      rec_reason: "Miért ez az adagolás?",
      disclaimer: "Figyelem: A kalkulátor tájékoztató jellegű klinikai segédeszköz. A végső adagolás meghatározása mindig az egyedi beteg állapota, a fertőzés súlyossága és a helyi irányelvek figyelembevételével, orvosi felelősségre történik.",
      no_results: "Nem található a keresési feltételnek megfelelő antibiotikum.",
      details: "Részletek",
      hide_details: "Összecsukás",
      clinical_pearl: "Klinikai Gyöngyszem",
      no_change: "Nincs szükség dózismódosításra.",
      warning_high_risk: "Fokozott toxicitási veszély veseelégtelenségben!",
      prefer_oral: "Perorális adagolás javasolt a hordozóanyag felhalmozódásának elkerülésére.",
      double_elimination: "Kettős elimináció (máj + vese), önmagában vesebetegségben nem igényel módosítást.",
      nephrotoxic_warning: "Nefrotoxikus gyógyszer! Szigorú vesefunkció- és TDM monitorozás szükséges."
    },
    en: {
      title: "Antibiotic Renal Dose Adjustment Guide",
      subtitle: "Quick clinical GFR-based dosing reference & personalized calculator",
      tab_table: "Dosing Table Reference",
      tab_calc: "Interactive Dose Calculator",
      search_placeholder: "Search by drug name or class...",
      filter_group: "Filter by class",
      all_groups: "All classes",
      gfr_range_label: "Selected renal function range",
      normal: "Normal / Mild (>50 GFR)",
      moderate: "Moderate (30-50 GFR)",
      severe: "Severe (10-29 GFR)",
      esrd: "End Stage (<10 GFR)",
      hd_short: "Hemodialysis (HD)",
      crrt_short: "CCRT / CRRT",
      ab_name: "Active Agent / Brand Name",
      normal_dose_header: "Normal Dose",
      notes_header: "Clinical Notes / Warnings",
      calc_title: "Patient-Specific GFR & Dose Calculator",
      calc_desc: "Calculate patient GFR / Creatinine Clearance and instantly obtain customized dosage recommendations for all listed antibiotics.",
      age: "Age (years)",
      weight: "Weight (kg)",
      gender: "Gender",
      male: "Male",
      female: "Female",
      creatinine: "Serum Creatinine",
      calculate: "Calculate GFR & Recommend Dose",
      gfr_result: "Calculated Values",
      cg_crcl: "Cockcroft-Gault Clearance (FDA-preferred for dosing)",
      ckd_epi: "CKD-EPI GFR (2021 equation)",
      renal_cat_label: "Renal Function Category",
      recommend_title: "Personalized Dosing Recommendation",
      select_drug: "Select an antibiotic",
      rec_dose_label: "Recommended dosage regimen for this patient",
      rec_reason: "Rationale for this dose",
      disclaimer: "Disclaimer: This calculator is a clinical support tool. Final dosing decisions must take into account the patient's individual clinical status, severity of infection, and local guidelines under medical responsibility.",
      no_results: "No antibiotics matching your search criteria were found.",
      details: "Details",
      hide_details: "Collapse",
      clinical_pearl: "Clinical Pearl",
      no_change: "No dosage adjustment needed.",
      warning_high_risk: "Increased risk of toxicity in renal impairment!",
      prefer_oral: "Oral administration preferred to avoid carrier accumulation.",
      double_elimination: "Dual elimination (hepatic + renal); renal impairment alone does not require adjustment.",
      nephrotoxic_warning: "Nephrotoxic drug! Strict renal monitoring and TDM are required."
    },
    de: {
      title: "Dosisanpassung von Antibiotika bei Niereninsuffizienz",
      subtitle: "Schnelle klinische GFR-basierte Dosierungsreferenz & personalisierter Rechner",
      tab_table: "Dosierungstabelle",
      tab_calc: "Interaktiver Dosis-Rechner",
      search_placeholder: "Nach Wirkstoff oder Gruppe suchen...",
      filter_group: "Klasse filtern",
      all_groups: "Alle Klassen",
      gfr_range_label: "Ausgewählter Nierenfunktionsbereich",
      normal: "Normal / Leicht (>50 GFR)",
      moderate: "Mittelschwer (30-50 GFR)",
      severe: "Schwer (10-29 GFR)",
      esrd: "Terminal (<10 GFR)",
      hd_short: "Hämodialyse (HD)",
      crrt_short: "CCRT / CRRT",
      ab_name: "Wirkstoff / Handelsname",
      normal_dose_header: "Normale Dosis",
      notes_header: "Klinische Anmerkungen / Warnungen",
      calc_title: "Patientenspezifischer GFR- & Dosis-Rechner",
      calc_desc: "Berechnen Sie die GFR / Kreatinin-Clearance des Patienten und erhalten Sie sofort maßgeschneiderte Dosierungsempfehlungen für alle aufgeführten Antibiotika.",
      age: "Alter (Jahre)",
      weight: "Gewicht (kg)",
      gender: "Geschlecht",
      male: "Männlich",
      female: "Weiblich",
      creatinine: "Serum-Kreatinin",
      calculate: "GFR berechnen & Dosis empfehlen",
      gfr_result: "Berechnete Werte",
      cg_crcl: "Cockcroft-Gault Clearance (empfohlen für die Dosierung)",
      ckd_epi: "CKD-EPI GFR (2021 Gleichung)",
      renal_cat_label: "Nierenfunktionskategorie",
      recommend_title: "Personalisierter Dosierungsassistent",
      select_drug: "Wählen Sie ein Antibiotikum",
      rec_dose_label: "Empfohlenes Dosierungsschema für diesen Patienten",
      rec_reason: "Begründung für diese Dosis",
      disclaimer: "Haftungsausschluss: Dieser Rechner dient als klinisches Hilfsmittel. Die endgültige Dosierungsentscheidung muss immer unter ärztlicher Verantwortung getroffen werden.",
      no_results: "Keine Antibiotika gefunden, die Ihren Kriterien entsprechen.",
      details: "Details",
      hide_details: "Zuklappen",
      clinical_pearl: "Klinischer Tipp",
      no_change: "Keine Dosisanpassung erforderlich.",
      warning_high_risk: "Erhöhte Toxizität bei Niereninsuffizienz!",
      prefer_oral: "Orale Gabe bevorzugt, um Trägerakkumulation zu vermeiden.",
      double_elimination: "Duale Elimination (hepatisch + renal); Niereninsuffizienz allein erfordert keine Anpassung.",
      nephrotoxic_warning: "Nephrotoxische Substanz! Strenges Nierenmonitoring und TDM erforderlich."
    }
  };

  const t = lt[currentLang];

  // Database of Antibiotic Renal Dose Adjustments
  const staticRenalDosingDatabase: LocalizedAntibioticRenalDose[] = [];
  /*
  const staticRenalDosingDatabase_old: LocalizedAntibioticRenalDose[] = [
    {
      id: "amoxicillin_clavulanate",
      name: "Amoxicillin / Clavulanate",
      brandNames: "Augmentin, Aktil",
      group: { hu: "Aminopenicillinek + béta-laktamáz gátló", en: "Aminopenicillins + beta-lactamase inhibitor", de: "Aminopenicilline + Beta-Laktamase-Inhibitor" },
      normalDose: { hu: "3x 1.2g i.v. / 3x 1g p.o.", en: "1.2g IV q8h / 1g PO q8h", de: "1,2g i.v. q8h / 1g p.o. q8h" },
      gfrGt50: { hu: "Változatlan: 3x 1.2g i.v. / 3x 1g p.o.", en: "No change: 1.2g IV q8h / 1g PO q8h", de: "Keine Anpassung: 1,2g i.v. q8h / 1g p.o. q8h" },
      gfr30to50: { hu: "i.v.: 3x 1.2g; p.o.: nincs változás (3x 1g)", en: "IV: 1.2g q8h; PO: No change (1g q8h)", de: "i.v.: 1,2g q8h; p.o.: Keine Anpassung (1g q8h)" },
      gfr10to29: { hu: "i.v.: 2x 1.2g; p.o.: 2x 500/125mg", en: "IV: 1.2g q12h; PO: 500/125mg q12h", de: "i.v.: 1,2g q12h; p.o.: 500/125mg q12h" },
      gfrLt10: { hu: "i.v.: 1x 1.2g (vagy 1x 600mg q12h); p.o.: 1x 500/125mg naponta", en: "IV: 1.2g q24h (or 600mg q12h); PO: 500/125mg q24h", de: "i.v.: 1,2g q24h (oder 600mg q12h); p.o.: 500/125mg q24h" },
      hd: { hu: "1x 1.2g i.v. / 1x 500/125mg p.o. q24h, plusz 1 pótdózis minden HD kezelés után.", en: "1.2g IV / 500/125mg PO q24h, plus 1 extra supplement dose after each HD session.", de: "1,2g i.v. / 500/125mg p.o. q24h, plus 1 Zusatzdosis nach jeder Hämodialyse." },
      crrt: { hu: "2x 1.2g i.v. (q12h)", en: "1.2g IV q12h", de: "1,2g i.v. q12h" },
      notes: {
        hu: "A klavulánsav clearance-e is jelentősen csökken. Súlyos veseelégtelenségben az amoxicillin felhalmozódása görcshajlamot okozhat.",
        en: "Clavulanate clearance is also significantly decreased. Accumulation of amoxicillin in severe renal failure may lower seizure threshold.",
        de: "Die Clearance von Clavulansäure ist ebenfalls deutlich verringert. Die Akkumulation von Amoxicillin bei schwerer Niereninsuffizienz kann die Krampfschwelle senken."
      }
    },
    {
      id: "piperacillin_tazobactam",
      name: "Piperacillin / Tazobactam",
      brandNames: "Zopac, Tazocin, Pipril",
      group: { hu: "Ureidopenicillinek + béta-laktamáz gátló", en: "Ureidopenicillins + beta-lactamase inhibitor", de: "Ureidopenicilline + Beta-Laktamase-Inhibitor" },
      normalDose: { hu: "4x 4.5g i.v. vagy 3x 4.5g (nyújtott infúzióban 4 óra alatt)", en: "4.5g IV q6h or 4.5g q8h as extended 4-hour infusion", de: "4,5g i.v. q6h oder 4,5g q8h als verlängerte Infusion (über 4h)" },
      gfrGt50: { hu: "Változatlan: 4x 4.5g i.v.", en: "No change: 4.5g IV q6h", de: "Keine Anpassung: 4,5g i.v. q6h" },
      gfr30to50: { hu: "3x 4.5g i.v. (vagy 4x 3.375g i.v.)", en: "4.5g IV q8h (or 3.375g IV q6h)", de: "4,5g i.v. q8h (oder 3,375g i.v. q6h)" },
      gfr10to29: { hu: "2x 4.5g i.v. (vagy 3x 3.375g i.v.)", en: "4.5g IV q12h (or 3.375g IV q8h)", de: "4,5g i.v. q12h (oder 3,375g i.v. q8h)" },
      gfrLt10: { hu: "2x 2.25g i.v. (q12h)", en: "2.25g IV q12h", de: "2,25g i.v. q12h" },
      hd: { hu: "2x 2.25g i.v., plusz 0.75g (vagy 1/3-ad ampulla) kiegészítő adag minden dialízis után.", en: "2.25g IV q12h, plus 0.75g supplementary dose after each dialysis session.", de: "2,25g i.v. q12h, plus 0,75g Zusatzdosis nach jeder Dialyse." },
      crrt: { hu: "3x 3.375g i.v. vagy 3x 4.5g i.v. (súlyos szepszisben)", en: "3.375g IV q8h or 4.5g IV q8h in severe sepsis", de: "3,375g i.v. q8h oder 4,5g i.v. q8h bei schwerer Sepsis" },
      notes: {
        hu: "Veseelégtelenségben megnő a thrombocytopenia és a neutropenia kockázata. Görcsrohamokat okozhat extrém szinteknél.",
        en: "Risk of neutropenia and thrombocytopenia increases in renal impairment. Extreme levels can cause neurotoxicity and seizures.",
        de: "Das Risiko für Neutropenie und Thrombozytopenie steigt bei Niereninsuffizienz. Extrem hohe Spiegel können Krampfanfälle auslösen."
      }
    },
    {
      id: "ceftriaxone",
      name: "Ceftriaxone",
      brandNames: "Lendacin, Rocephin, Ceftriaxone Kabi",
      group: { hu: "Harmadik generációs cephalosporinok", en: "Third-generation cephalosporins", de: "Cephalosporine der 3. Generation" },
      normalDose: { hu: "1x 1-2g i.v. naponta (meningitisben 2x 2g)", en: "1-2g IV once daily (2g q12h in meningitis)", de: "1-2g i.v. einmal täglich (2g q12h bei Meningitis)" },
      gfrGt50: { hu: "Változatlan: 1-2g q24h", en: "No change: 1-2g IV q24h", de: "Keine Anpassung: 1-2g i.v. q24h" },
      gfr30to50: { hu: "Változatlan: 1-2g q24h", en: "No change: 1-2g IV q24h", de: "Keine Anpassung: 1-2g i.v. q24h" },
      gfr10to29: { hu: "Változatlan: 1-2g q24h", en: "No change: 1-2g IV q24h", de: "Keine Anpassung: 1-2g i.v. q24h" },
      gfrLt10: { hu: "Változatlan: 1-2g q24h (max 2g/nap)", en: "No change: 1-2g IV q24h (max 2g/day)", de: "Keine Anpassung: 1-2g i.v. q24h (max. 2g/Tag)" },
      hd: { hu: "Változatlan: 1-2g q24h. Nem dializálható, nem szükséges kiegészítő dózis.", en: "No change: 1-2g IV q24h. Not significantly dialyzed; no supplement needed.", de: "Keine Anpassung: 1-2g i.v. q24h. Nicht dialysierbar; keine Zusatzdosis nötig." },
      crrt: { hu: "Változatlan: 1-2g q24h", en: "No change: 1-2g IV q24h", de: "Keine Anpassung: 1-2g i.v. q24h" },
      notes: {
        hu: "Kettős eliminációjú szer (máj és vese). Csak együttes máj- és veseelégtelenség esetén szükséges a dózis csökkentése (max 2g/nap).",
        en: "Dual hepatic and renal elimination. Dose reduction is only necessary in combined severe renal and hepatic impairment (max 2g/day).",
        de: "Duale hepatische und renale Elimination. Eine Dosisreduktion ist nur bei gleichzeitig schwerer Nieren- und Leberinsuffizienz erforderlich (max. 2g/Tag)."
      }
    },
    {
      id: "ceftazidime",
      name: "Ceftazidime",
      brandNames: "Fortum, Ceftazidim Kabi",
      group: { hu: "Harmadik generációs cephalosporinok (Pseudomonas ellenes)", en: "Third-generation cephalosporins (antipseudomonal)", de: "Cephalosporine der 3. Generation (antipseudomonal)" },
      normalDose: { hu: "3x 2g i.v. naponta", en: "2g IV q8h", de: "2g i.v. q8h" },
      gfrGt50: { hu: "Változatlan: 3x 2g i.v.", en: "No change: 2g IV q8h", de: "Keine Anpassung: 2g i.v. q8h" },
      gfr30to50: { hu: "2x 1g i.v. (q12h)", en: "1g IV q12h", de: "1g i.v. q12h" },
      gfr10to29: { hu: "1x 1g i.v. q24h (vagy 1x 2g q48h)", en: "1g IV q24h (or 2g IV q48h)", de: "1g i.v. q24h (oder 2g i.v. q48h)" },
      gfrLt10: { hu: "1x 500mg - 1g i.v. q48h", en: "500mg to 1g IV q48h", de: "500mg bis 1g i.v. q48h" },
      hd: { hu: "1g telítő dózis, majd 1g minden HD után. HD napokon a kezelés végén adandó be.", en: "1g loading dose, then 1g after each HD session. Administer at the end of dialysis on HD days.", de: "1g Ladedosis, dann 1g nach jeder Hämodialyse. An Dialysetagen am Ende der Dialyse verabreichen." },
      crrt: { hu: "2x 1g i.v. vagy 2x 2g i.v. (magas ultrafiltrációnál)", en: "1g IV q12h or 2g IV q12h (with high-volume CVVHDF)", de: "1g i.v. q12h oder 2g i.v. q12h (bei High-Volume-CVVHDF)" },
      notes: {
        hu: "Szinte teljesen a vesén át ürül (glomeruláris filtráció). Súlyos felhalmozódás esetén encephalopathia, myoclonus és görcsrohamok léphetnek fel.",
        en: "Eliminated almost entirely by renal filtration. Severe accumulation can lead to encephalopathy, myoclonus, and seizures.",
        de: "Ausscheidung fast ausschließlich renal durch glomeruläre Filtration. Schwere Akkumulation kann zu Enzephalopathie, Myoklonus und Krampfanfällen führen."
      }
    },
    {
      id: "cefepime",
      name: "Cefepime",
      brandNames: "Maxipime, Cefepim Kabi",
      group: { hu: "Negyedik generációs cephalosporinok", en: "Fourth-generation cephalosporins", de: "Cephalosporine der 4. Generation" },
      normalDose: { hu: "2x 2g i.v. (neutropeniás láz vagy súlyos sepsis esetén 3x 2g)", en: "2g IV q12h (3g IV q8h for neutropenic fever or severe sepsis)", de: "2g i.v. q12h (3g i.v. q8h bei neutropenischem Fieber oder schwerer Sepsis)" },
      gfrGt50: { hu: "Változatlan: 2x 2g i.v. (vagy 3x 2g)", en: "No change: 2g IV q12h (or q8h)", de: "Keine Anpassung: 2g i.v. q12h (oder q8h)" },
      gfr30to50: { hu: "2x 1g i.v. vagy 2x 2g i.v. (súlyos fertőzésben)", en: "1g to 2g IV q12h", de: "1g bis 2g i.v. q12h" },
      gfr10to29: { hu: "1x 1g v. 2g i.v. q24h", en: "1g to 2g IV q24h", de: "1g bis 2g i.v. q24h" },
      gfrLt10: { hu: "1x 500mg - 1g i.v. q24h", en: "500mg to 1g IV q24h", de: "500mg bis 1g i.v. q24h" },
      hd: { hu: "1g telítő dózis az 1. napon, majd 500mg-1g naponta, a HD napokon a dialízis után beadva.", en: "1g loading dose on Day 1, then 500mg-1g IV q24h, administered after HD on dialysis days.", de: "1g Ladedosis an Tag 1, dann 500mg-1g i.v. q24h, an Dialysetagen nach der HD verabreichen." },
      crrt: { hu: "2x 1g v. 2x 2g i.v. (q12h)", en: "1g to 2g IV q12h", de: "1g bis 2g i.v. q12h" },
      notes: {
        hu: "KRITIKUS: A nem megfelelően módosított cefepime neurotoxicitást (zavartság, stupor, non-convulsiv status epilepticus) okoz idős vagy vesebeteg egyéneknél!",
        en: "CRITICAL: Under-dosed cefepime clearance causes severe neurotoxicity (confusion, stupor, non-convulsive status epilepticus) in elderly or renal patients!",
        de: "KRITISCH: Eine unzureichend angepasste Cefepim-Clearance verursacht schwere Neurotoxizität (Verwirrtheit, Stupor, nicht-konvulsiver Status epilepticus) bei älteren oder niereninsuffizienten Patienten!"
      }
    },
    {
      id: "meropenem",
      name: "Meropenem",
      brandNames: "Meronem, Meropenem Kabi",
      group: { hu: "Carbapenemek", en: "Carbapenems", de: "Carbapeneme" },
      normalDose: { hu: "3x 1g i.v. (meningitisben 3x 2g)", en: "1g IV q8h (2g IV q8h in meningitis)", de: "1g i.v. q8h (2g i.v. q8h bei Meningitis)" },
      gfrGt50: { hu: "Változatlan: 3x 1g i.v.", en: "No change: 1g IV q8h", de: "Keine Anpassung: 1g i.v. q8h" },
      gfr30to50: { hu: "2x 1g i.v. (q12h) vagy 3x 500mg i.v.", en: "1g IV q12h (or 500mg IV q8h)", de: "1g i.v. q12h (oder 500mg i.v. q8h)" },
      gfr10to29: { hu: "2x 500mg i.v. (q12h)", en: "500mg IV q12h", de: "500mg i.v. q12h" },
      gfrLt10: { hu: "1x 500mg i.v. q24h", en: "500mg IV q24h", de: "500mg i.v. q24h" },
      hd: { hu: "500mg i.v. q24h, plusz 500mg kiegészítő dózis közvetlenül a HD után.", en: "500mg IV q24h, plus 500mg supplement dose immediately after each HD session.", de: "500mg i.v. q24h, plus 500mg Zusatzdosis direkt nach jeder HD-Sitzung." },
      crrt: { hu: "2x 1g i.v. vagy 3x 500mg - 1g i.v. (súlyos fertőzés / rezisztens kórokozó esetén)", en: "1g IV q12h or 500mg-1g IV q8h (for severe or resistant pathogens)", de: "1g i.v. q12h oder 500mg-1g i.v. q8h (bei schweren/resistenten Erregern)" },
      notes: {
        hu: "Kevésbé görcskeltő hatású, mint az imipenem. Súlyos Pseudomonas fertőzéseknél nyújtott infúzióban (3 óra alatt) is adható.",
        en: "Significantly lower seizure risk compared to imipenem. Can be administered as extended 3-hour infusion for pseudomonal infections.",
        de: "Deutlich geringeres Krampfanfallsrisiko im Vergleich zu Imipenem. Kann bei Pseudomonas-Infektionen als verlängerte Infusion (über 3h) verabreicht werden."
      }
    },
    {
      id: "imipenem_cilastatin",
      name: "Imipenem / Cilastatin",
      brandNames: "Tienam",
      group: { hu: "Carbapenemek", en: "Carbapenems", de: "Carbapeneme" },
      normalDose: { hu: "4x 500mg i.v. vagy 3x 1g i.v.", en: "500mg IV q6h or 1g IV q8h", de: "500mg i.v. q6h oder 1g i.v. q8h" },
      gfrGt50: { hu: "Változatlan: 4x 500mg i.v.", en: "No change: 500mg IV q6h", de: "Keine Anpassung: 500mg i.v. q6h" },
      gfr30to50: { hu: "3x 500mg i.v. (q8h) vagy 3x 250mg", en: "500mg IV q8h (or 250mg IV q8h for moderate severity)", de: "500mg i.v. q8h (oder 250mg i.v. q8h bei mittlerer Schwere)" },
      gfr10to29: { hu: "2x 250mg - 500mg i.v. (q12h)", en: "250mg to 500mg IV q12h", de: "250mg bis 500mg i.v. q12h" },
      gfrLt10: { hu: "2x 250mg i.v. (q12h) vagy 1x 500mg q24h", en: "250mg IV q12h or 500mg IV q24h", de: "250mg i.v. q12h oder 500mg i.v. q24h" },
      hd: { hu: "2x 250mg i.v. q12h, plusz 1 extra dózis HD után.", en: "250mg IV q12h, plus 1 extra supplement dose after HD.", de: "250mg i.v. q12h, plus 1 Zusatzdosis nach der HD." },
      crrt: { hu: "3x 500mg i.v. (q8h)", en: "500mg IV q8h", de: "500mg i.v. q8h" },
      notes: {
        hu: "A vesében felhalmozódó imipenem és cilastatin metabolitok közvetlenül növelik a görcshajlamot, különösen veseelégtelenségben!",
        en: "Imipenem and cilastatin metabolites accumulate in renal failure and directly increase the risk of seizures and CNS toxicity!",
        de: "Die Akkumulation von Imipenem- und Cilastatin-Metaboliten bei Niereninsuffizienz erhöht direkt das Risiko von Krampfanfällen!"
      }
    },
    {
      id: "ciprofloxacin",
      name: "Ciprofloxacin",
      brandNames: "Ciprinol, Ciflox, Cipro",
      group: { hu: "Fluoroquinolonok", en: "Fluoroquinolones", de: "Fluorchinolone" },
      normalDose: { hu: "2x 400mg i.v. / 2x 500-750mg p.o.", en: "400mg IV q12h / 500-750mg PO q12h", de: "400mg i.v. q12h / 500-750mg p.o. q12h" },
      gfrGt50: { hu: "Változatlan: 2x 400mg i.v. / 2x 500-750mg p.o.", en: "No change: q12h", de: "Keine Anpassung: q12h" },
      gfr30to50: { hu: "p.o.: 2x 250-500mg; i.v.: 2x 200-400mg", en: "PO: 250-500mg q12h; IV: 200-400mg q12h", de: "p.o.: 250-500mg q12h; i.v.: 200-400mg q12h" },
      gfr10to29: { hu: "p.o.: 1x 500-750mg q24h; i.v.: 1x 400mg q24h", en: "PO: 500-750mg q24h; IV: 400mg q24h", de: "p.o.: 500-750mg q24h; i.v.: 400mg q24h" },
      gfrLt10: { hu: "p.o.: 1x 250-500mg q24h; i.v.: 1x 200-300mg q24h", en: "PO: 250-500mg q24h; IV: 200-300mg q24h", de: "p.o.: 250-500mg q24h; i.v.: 200-300mg q24h" },
      hd: { hu: "1x 500mg p.o. vagy 1x 400mg i.v. q24h, a HD kezelések után.", en: "500mg PO or 400mg IV q24h, administered after HD.", de: "500mg p.o. oder 400mg i.v. q24h, nach der Hämodialyse." },
      crrt: { hu: "2x 400mg i.v. (q12h)", en: "400mg IV q12h", de: "400mg i.v. q12h" },
      notes: {
        hu: "Részben a májon át és a széklettel is ürül, de veseelégtelenségben mégis szükséges az adagcsökkentés a neurotoxicitás (delírium, hallucináció) elkerülésére.",
        en: "Partially eliminated via hepatic and biliary routes, but dose adjustment is still required to prevent neurotoxicity (confusion, hallucinations).",
        de: "Teilweise hepatisch und biliär eliminiert, dennoch ist eine Dosisanpassung erforderlich, um Neurotoxizität (Verwirrtheit, Halluzinationen) zu vermeiden."
      }
    },
    {
      id: "levofloxacin",
      name: "Levofloxacin",
      brandNames: "Tavanic, Leflox, Levofloxacin Kabi",
      group: { hu: "Fluoroquinolonok", en: "Fluoroquinolones", de: "Fluorchinolone" },
      normalDose: { hu: "1x 500mg - 2x 500mg i.v. vagy p.o.", en: "500mg once or twice daily PO/IV", de: "500mg ein- oder zweimal täglich p.o./i.v." },
      gfrGt50: { hu: "Változatlan: 1x vagy 2x 500mg naponta", en: "No change: q24h or q12h", de: "Keine Anpassung: q24h oder q12h" },
      gfr30to50: { hu: "500mg kezdő (loading), majd 250mg q24h (vagy 500mg q48h)", en: "500mg loading dose, then 250mg q24h (or 500mg q48h)", de: "500mg Ladedosis, dann 250mg q24h (oder 500mg q48h)" },
      gfr10to29: { hu: "500mg kezdő, majd 250mg q48h", en: "500mg loading dose, then 250mg q48h", de: "500mg Ladedosis, dann 250mg q48h" },
      gfrLt10: { hu: "500mg kezdő, majd 250mg q48h", en: "500mg loading dose, then 250mg q48h", de: "500mg Ladedosis, dann 250mg q48h" },
      hd: { hu: "500mg kezdő, majd 250mg q48h. HD után pótlást nem igényel.", en: "500mg loading dose, then 250mg q48h. No supplement needed after HD.", de: "500mg Ladedosis, dann 250mg q48h. Keine Zusatzdosis nach HD erforderlich." },
      crrt: { hu: "500mg kezdő, majd 250mg-500mg q24h", en: "500mg loading dose, then 250-500mg q24h", de: "500mg Ladedosis, dann 250-500mg q24h" },
      notes: {
        hu: "A levofloxacin szinte tisztán a vesén át ürül változatlan formában. Veseelégtelenségben az elimináció rendkívüli módon lelassul.",
        en: "Levofloxacin is cleared almost entirely unchanged by the kidneys. Elimination is profoundly prolonged in renal failure.",
        de: "Levofloxacin wird fast vollständig unverändert renal ausgeschieden. Die Elimination ist bei Niereninsuffizienz massiv verlängert."
      }
    },
    {
      id: "moxifloxacin",
      name: "Moxifloxacin",
      brandNames: "Avelox, Moxifloxacin Kabi",
      group: { hu: "Fluoroquinolonok", en: "Fluoroquinolones", de: "Fluorchinolone" },
      normalDose: { hu: "1x 400mg i.v. vagy p.o. naponta", en: "400mg PO/IV once daily", de: "400mg p.o./i.v. einmal täglich" },
      gfrGt50: { hu: "Változatlan: 1x 400mg naponta", en: "No change: 400mg q24h", de: "Keine Anpassung: 400mg q24h" },
      gfr30to50: { hu: "Változatlan: 1x 400mg naponta", en: "No change: 400mg q24h", de: "Keine Anpassung: 400mg q24h" },
      gfr10to29: { hu: "Változatlan: 1x 400mg naponta", en: "No change: 400mg q24h", de: "Keine Anpassung: 400mg q24h" },
      gfrLt10: { hu: "Változatlan: 1x 400mg naponta", en: "No change: 400mg q24h", de: "Keine Anpassung: 400mg q24h" },
      hd: { hu: "Változatlan: 1x 400mg. Nem dializálható, kiegészítő dózis nem kell.", en: "No change: 400mg q24h. Not dialyzed; no supplement needed.", de: "Keine Anpassung: 400mg q24h. Nicht dialysierbar; keine Zusatzdosis nötig." },
      crrt: { hu: "Változatlan: 1x 400mg naponta", en: "No change: 400mg q24h", de: "Keine Anpassung: 400mg q24h" },
      notes: {
        hu: "FONTOS: Májban metabolizálódik és a széklettel ürül. Vizeletfertőzésekre éppen ezért NEM alkalmas (nem ér el terápiás koncentrációt a húgyutakban)!",
        en: "IMPORTANT: Hepatically metabolized and excreted via feces. Consequently, it is NOT suitable for UTIs (does not concentrate in urine)!",
        de: "WICHTIG: Wird hepatisch metabolisiert und über den Stuhl ausgeschieden. Daher für Harnwegsinfektionen NICHT geeignet (konzentriert sich nicht im Urin)!"
      }
    },
    {
      id: "gentamicin_renal",
      name: "Gentamicin",
      brandNames: "Gentamicin Pharmavit, Garamycin",
      group: { hu: "Aminoglikozidok", en: "Aminoglycosides", de: "Aminoglykoside" },
      normalDose: { hu: "Egyszeri napi adag (ODD): 5-7 mg/kg i.v. q24h (szinergizmusra endocarditisben: 3x 1-1.5 mg/kg)", en: "Once Daily Dosing (ODD): 5-7 mg/kg IV q24h (synergy in endocarditis: 1-1.5 mg/kg q8h)", de: "Einmal tägliche Gabe (ODD): 5-7 mg/kg i.v. q24h (Synergie bei Endokarditis: 1-1,5 mg/kg q8h)" },
      gfrGt50: { hu: "ODD: 5 mg/kg q24h", en: "ODD: 5 mg/kg IV q24h", de: "ODD: 5 mg/kg i.v. q24h" },
      gfr30to50: { hu: "Nyújtsa meg az időközöket: 5 mg/kg q36h - q48h. TDM kötelező!", en: "Extend interval: 5 mg/kg IV q36h to q48h. TDM mandatory!", de: "Intervall verlängern: 5 mg/kg i.v. q36h bis q48h. TDM zwingend erforderlich!" },
      gfr10to29: { hu: "2.5 - 3 mg/kg q48h vagy pulse-dosing (csak ha völgy < 0.5-1.0 mg/L).", en: "2.5 to 3 mg/kg IV q48h or pulse-dosing (administer only when trough drops below 0.5-1.0 mg/L).", de: "2,5 bis 3 mg/kg i.v. q48h oder Pulse-Dosing (Gabe erst, wenn Talschnitt < 0,5-1,0 mg/L)." },
      gfrLt10: { hu: "Kizárólag pulse-dosing: 2-2.5 mg/kg telítő, majd újabb adag csak ha a mért szint < 0.5-1.0 mg/L.", en: "Pulse-dosing only: 2-2.5 mg/kg loading, re-dose only when measured trough is < 0.5-1.0 mg/L.", de: "Nur Pulse-Dosing: 2-2,5 mg/kg Ladedosis, erneute Gabe erst, wenn gemessener Spiegel < 0,5-1,0 mg/L." },
      hd: { hu: "1.5 - 2 mg/kg telítő, majd 1-1.5 mg/kg minden dialízis után (vagy szintvezérelten).", en: "1.5 to 2 mg/kg loading, then 1-1.5 mg/kg after each HD session (or guided by TDM).", de: "1,5 bis 2 mg/kg Ladedosis, dann 1-1,5 mg/kg nach jeder HD-Sitzung (oder TDM-gesteuert)." },
      crrt: { hu: "2.5 - 3 mg/kg q24h - q48h, szigorú TDM és völgy/csúcsszint mérés mellett.", en: "2.5 to 3 mg/kg IV q24h to q48h, guided strictly by TDM (trough/peak).", de: "2,5 bis 3 mg/kg i.v. q24h bis q48h, streng TDM-gesteuert (Tal/Spitze)." },
      notes: {
        hu: "Kifejezetten nefrotoxikus és ototoxikus. A veseelégtelenséget fokozza. Mindig mérni kell a völgy- (<0.5-1 mg/L) és csúcsszintet (ODD-nél: 15-20 mg/L).",
        en: "Highly nephrotoxic and ototoxic. Accumulation worsens renal failure. Monitor trough (<0.5-1 mg/L) and peak (15-20 mg/L for ODD) strictly.",
        de: "Stark nephrotoxisch und ototoxisch. Akkumulation verschlimmert Niereninsuffizienz. Überwachen Sie streng Tal- (<0,5-1 mg/L) und Spitzenwerte (15-20 mg/L bei ODD)."
      }
    },
    {
      id: "amikacin_renal",
      name: "Amikacin",
      brandNames: "Amikacin Kabi, Likacin",
      group: { hu: "Aminoglikozidok", en: "Aminoglycosides", de: "Aminoglykoside" },
      normalDose: { hu: "Egyszeri napi adag (ODD): 15-20 mg/kg i.v. q24h (hagyományos: 2-3x 7.5 mg/kg)", en: "Once Daily Dosing (ODD): 15-20 mg/kg IV q24h (conventional: 7.5 mg/kg q8h-q12h)", de: "Einmal tägliche Gabe (ODD): 15-20 mg/kg i.v. q24h (konventionell: 7,5 mg/kg q8h-q12h)" },
      gfrGt50: { hu: "ODD: 15 mg/kg q24h", en: "ODD: 15 mg/kg IV q24h", de: "ODD: 15 mg/kg i.v. q24h" },
      gfr30to50: { hu: "Nyújtsa meg az időközöket: 15 mg/kg q36h - q48h. TDM szigorúan ajánlott!", en: "Extend interval: 15 mg/kg IV q36h to q48h. TDM highly recommended!", de: "Intervall verlängern: 15 mg/kg i.v. q36h bis q48h. TDM dringend empfohlen!" },
      gfr10to29: { hu: "7.5 - 10 mg/kg q48h vagy pulse-dosing (csak ha völgy < 2-4 mg/L).", en: "7.5 to 10 mg/kg IV q48h or pulse-dosing (administer only when trough drops below 2-4 mg/L).", de: "7,5 bis 10 mg/kg i.v. q48h oder Pulse-Dosing (Gabe erst, wenn Talschnitt < 2-4 mg/L)." },
      gfrLt10: { hu: "Kizárólag pulse-dosing: 7.5 mg/kg telítő, majd újabb adag csak ha a szint < 2-4 mg/L.", en: "Pulse-dosing only: 7.5 mg/kg loading, re-dose only when measured trough is < 2-4 mg/L.", de: "Nur Pulse-Dosing: 7,5 mg/kg Ladedosis, erneute Gabe erst, wenn gemessener Spiegel < 2-4 mg/L." },
      hd: { hu: "5 - 7.5 mg/kg minden dialízis után (vagy szintvezérelten).", en: "5 to 7.5 mg/kg after each HD session (or guided by TDM).", de: "5 bis 7,5 mg/kg nach jeder HD-Sitzung (oder TDM-gesteuert)." },
      crrt: { hu: "10 - 15 mg/kg q24h - q48h, szigorú TDM-mel.", en: "10 to 15 mg/kg IV q24h to q48h, strictly guided by TDM.", de: "10 bis 15 mg/kg i.v. q24h bis q48h, streng TDM-gesteuert." },
      notes: {
        hu: "Nefro- és ototoxikus. Cél völgykoncentráció ODD-nél: < 2 mg/L (hagyományosnál < 5-8 mg/L). Cél csúcs ODD-nél: 50-60 mg/L.",
        en: "Nephrotoxic and ototoxic. Target trough for ODD: < 2 mg/L (conventional: < 5-8 mg/L). Target peak for ODD: 50-60 mg/L.",
        de: "Nephrotoxisch und ototoxisch. Ziel-Talspiegel bei ODD: < 2 mg/L (konventionell: < 5-8 mg/L). Ziel-Spitzenspiegel bei ODD: 50-60 mg/L."
      }
    },
    {
      id: "vancomycin_renal",
      name: "Vancomycin",
      brandNames: "Vancocin, Vancomycin Kabi",
      group: { hu: "Glycopeptidek", en: "Glycopeptides", de: "Glykopeptide" },
      normalDose: { hu: "2x 1-1.5g i.v. naponta (q12h) vagy 15-20 mg/kg q12h", en: "1g to 1.5g IV q12h or 15-20 mg/kg q12h", de: "1g bis 1,5g i.v. q12h oder 15-20 mg/kg q12h" },
      gfrGt50: { hu: "1g q12h - q24h (vesefunkciótól függően)", en: "1g IV q12h to q24h (depending on exact clearance)", de: "1g i.v. q12h bis q24h (je nach genauer Clearance)" },
      gfr30to50: { hu: "1g i.v. q24h - q48h (TDM javasolt a 3. napon)", en: "1g IV q24h to q48h (TDM recommended on Day 3)", de: "1g i.v. q24h bis q48h (TDM an Tag 3 empfohlen)" },
      gfr10to29: { hu: "1g i.v. q48h - q96h (TDM szükséges)", en: "1g IV q48h to q96h (TDM required)", de: "1g i.v. q48h bis q96h (TDM erforderlich)" },
      gfrLt10: { hu: "Pulse-dosing: 1000-1500mg telítő, majd újabb adag (pl. 500-1000mg) csak ha szint < 15 mg/L.", en: "Pulse-dosing: 1000-1500mg loading, then re-dose (500-1000mg) only when trough drops below 15 mg/L.", de: "Pulse-Dosing: 1000-1500mg Ladedosis, dann erneute Gabe (500-1000mg) erst, wenn Spiegel < 15 mg/L." },
      hd: { hu: "1000-1500mg telítő, majd 500-1000mg a HD után, amikor a szint < 15 mg/L. Szigorú TDM.", en: "1000-1500mg loading, then 500-1000mg after HD only when level drops below 15 mg/L. Strict TDM.", de: "1000-1500mg Ladedosis, dann 500-1000mg nach HD erst, wenn Spiegel < 15 mg/L. Strenges TDM." },
      crrt: { hu: "1000-1500mg telítő, majd 500-1000mg q24h-q48h szigorúan a TDM szint alapján (CVVHDF-nél jelentős kiürülés!).", en: "1000-1500mg loading, then 500-1000mg q24h-q48h strictly based on TDM (high clearance in CVVHDF!).", de: "1000-1500mg Ladedosis, dann 500-1000mg q24h-q48h streng nach TDM (hohe Clearance bei CVVHDF!)." },
      notes: {
        hu: "Fokozottan nefrotoxikus aminoglikozidokkal együtt adva. Cél völgykoncentráció súlyos szepszisben/pneumoniában: 15-20 mg/L.",
        en: "Synergistic nephrotoxicity when combined with aminoglycosides. Target trough in severe infections/sepsis: 15-20 mg/L.",
        de: "Synergistische Nephrotoxizität bei Kombination mit Aminoglykosiden. Ziel-Talspiegel bei schweren Infektionen/Sepsis: 15-20 mg/L."
      }
    },
    {
      id: "fluconazole_renal",
      name: "Fluconazole",
      brandNames: "Diflucan, Fluconazol Kabi, Mycosyst",
      group: { hu: "Gombaellenes szerek (Azolok)", en: "Antifungals (Azoles)", de: "Antimykotika (Azole)" },
      normalDose: { hu: "1x 200mg - 400mg (súlyos fertőzésben 1x 800mg) p.o. vagy i.v. naponta", en: "200-400mg PO/IV once daily (800mg daily for severe candidemia)", de: "200-400mg p.o./i.v. einmal täglich (800mg täglich bei schwerer Candidämie)" },
      gfrGt50: { hu: "Változatlan: 1x 200-400mg naponta", en: "No change: 200-400mg q24h", de: "Keine Anpassung: 200-400mg q24h" },
      gfr30to50: { hu: "50%-os dóziscsökkentés (pl. 100-200mg naponta) az első napi 100%-os telítő adag után.", en: "50% dose reduction (e.g., 100-200mg daily) after a 100% loading dose on Day 1.", de: "50% Dosisreduktion (z. B. 100-200mg täglich) nach einer 100% Ladedosis an Tag 1." },
      gfr10to29: { hu: "50%-os dóziscsökkentés (pl. 100-200mg naponta) a telítő adag után.", en: "50% dose reduction (e.g., 100-200mg daily) after a loading dose.", de: "50% Dosisreduktion (z. B. 100-200mg täglich) nach einer Ladedosis." },
      gfrLt10: { hu: "50%-os dóziscsökkentés, esetleg q48h adagolás.", en: "50% dose reduction or q48h administration.", de: "50% Dosisreduktion oder q48h-Gabe." },
      hd: { hu: "Adjon 100% dózist minden HD kezelés után (mivel a dialízis hatékonyan eltávolítja a szert).", en: "Administer 100% of the normal dose after each HD session (effectively cleared by dialysis).", de: "Verabreichen Sie 100% der normalen Dosis nach jeder HD (wird durch Dialyse effektiv eliminiert)." },
      crrt: { hu: "1x 200-400mg naponta. Nem szükséges csökkenteni.", en: "200-400mg IV once daily. No reduction needed in CRRT.", de: "200-400mg i.v. einmal täglich. Keine Reduktion bei CRRT erforderlich." },
      notes: {
        hu: "A hidrofil azolok közé tartozik, szinte teljesen a vesén át ürül. Jól átjut a liquorba és kiválóan koncentrálódik a vizeletben.",
        en: "Hydrophilic azole, cleared almost completely by the kidneys. Excellent CSF penetration and high urinary concentration.",
        de: "Hydrophiles Azol, wird fast vollständig renal ausgeschieden. Gute Liquorpenetration und hohe Konzentration im Urin."
      }
    },
    {
      id: "colistin_renal",
      name: "Colistin (Colistimethate sodium)",
      brandNames: "Coly-Mycin, Colistin TEVA",
      group: { hu: "Polymyxinek (Multirezisztens Gram-negatívak ellen)", en: "Polymyxins (for MDR Gram-negatives)", de: "Polymyxine (bei MDR Gram-negativen)" },
      normalDose: { hu: "9 millió NE i.v. naponta, 2-3 részre osztva (vagy egyszerre). Kezdő telítő adag: 9-12 millió NE.", en: "9 million IU IV daily, divided in 2-3 doses. Loading dose: 9-12 million IU.", de: "9 Millionen IE i.v. täglich, aufgeteilt auf 2-3 Gaben. Ladedosis: 9-12 Millionen IE." },
      gfrGt50: { hu: "Napi 9 millió NE i.v.", en: "9 million IU daily IV", de: "9 Millionen IE i.v. täglich" },
      gfr30to50: { hu: "Napi 5.5 - 7.5 millió NE i.v., 2 részre osztva.", en: "5.5 to 7.5 million IU daily IV, divided in 2 doses.", de: "5,5 bis 7,5 Millionen IE i.v. täglich, aufgeteilt auf 2 Gaben." },
      gfr10to29: { hu: "Napi 4.5 - 5.5 millió NE i.v., 1-2 részre osztva.", en: "4.5 to 5.5 million IU daily IV, divided in 1-2 doses.", de: "4,5 bis 5,5 Millionen IE i.v. täglich, aufgeteilt auf 1-2 Gaben." },
      gfrLt10: { hu: "Napi 2.25 - 3.5 millió NE i.v. naponta.", en: "2.25 to 3.5 million IU daily IV.", de: "2,25 bis 3,5 Millionen IE i.v. täglich." },
      hd: { hu: "HD napokon: 2.25-3 millió NE, a dialízis után. HD-mentes napokon: 2.25 millió NE.", en: "On HD days: 2.25-3 million IU after dialysis. On non-HD days: 2.25 million IU daily.", de: "An Dialysetagen: 2,25-3 Millionen IE nach der Dialyse. An dialysefreien Tagen: 2,25 Millionen IE täglich." },
      crrt: { hu: "Magas dózis: 2x 4.5 millió NE i.v. naponta (mivel a CRRT szűrők rendkívül nagy mértékben kiszűrik).", en: "High dose: 4.5 million IU IV q12h (9 million IU/day), as CRRT filters clear it highly efficiently.", de: "Hohe Dosis: 4,5 Millionen IE i.v. q12h (9 Millionen IE/Tag), da CRRT-Filter Colistin sehr effektiv eliminieren." },
      notes: {
        hu: "Súlyosan nefrotoxikus (akut tubuláris necrosis) és neurotoxikus (paresthesia, neuromuscularis blokád). Mindig adjon telítő dózist!",
        en: "Highly nephrotoxic (acute tubular necrosis) and neurotoxic (paresthesia, neuromuscular blockade). Always use a loading dose!",
        de: "Stark nephrotoxisch (akute Tubulusnekrose) und neurotoxisch (Parästhesien, neuromuskuläre Blockade). Immer eine Ladedosis verabreichen!"
      }
    }
  ];
  */

  // Dynamically combine static renal database with all other pharmacology antibiotics
  const renalDosingDatabase = useMemo(() => {
    return renalDoseData_HU.map((huEntry, index) => {
      const enEntry = renalDoseData_EN[index] || renalDoseData_EN.find(en => normalizeName(en.antibiotic_name) === normalizeName(huEntry.antibiotic_name)) || huEntry;
      const deEntry = renalDoseData_DE[index] || renalDoseData_DE.find(de => normalizeName(de.antibiotic_name) === normalizeName(huEntry.antibiotic_name)) || huEntry;
      
      const normHuName = normalizeName(huEntry.antibiotic_name);
      
      const pharmHU = antibioticsData_HU.find(p => {
        const normPName = normalizeName(p.name);
        const normPId = normalizeName(p.id);
        const normPAbbr = p.abbreviation ? normalizeName(p.abbreviation) : '';
        return normPName === normHuName || normPId === normHuName || normPAbbr === normHuName ||
               normPName.includes(normHuName) || normHuName.includes(normPName);
      });
      
      const pharmEN = pharmHU ? antibioticsData_EN.find(p => p.id === pharmHU.id) : null;
      const pharmDE = pharmHU ? antibioticsData_DE.find(p => p.id === pharmHU.id) : null;

      const id = pharmHU?.id || huEntry.antibiotic_name.toLowerCase().replace(/[^a-z0-9]+/g, '_');
      const name = currentLang === 'en' ? enEntry.antibiotic_name : (currentLang === 'de' ? deEntry.antibiotic_name : huEntry.antibiotic_name);
      const brandNames = pharmHU?.brandNames || '';
      
      const groupVal = {
        hu: pharmHU?.group || defaultGroups[normHuName]?.hu || "Antibiotikum",
        en: pharmEN?.group || defaultGroups[normHuName]?.en || "Antibiotic",
        de: pharmDE?.group || defaultGroups[normHuName]?.de || "Antibiotikum"
      };

      const formatCategory = (cat: any) => {
        if (!cat) return '';
        const d = (cat.dose || '').trim();
        const i = (cat.interval || '').trim();
        if (!d) return '-';
        if (!i) return d;
        return `${d} (${i})`;
      };

      const collectCategoryNotes = (item: any) => {
        const notesList: string[] = [];
        if (item.gfr_gt_50?.notes) notesList.push(item.gfr_gt_50.notes);
        if (item.gfr_30_50?.notes) notesList.push(item.gfr_30_50.notes);
        if (item.gfr_10_29?.notes) notesList.push(item.gfr_10_29.notes);
        if (item.gfr_lt_10?.notes) notesList.push(item.gfr_lt_10.notes);
        if (item.hd?.notes) notesList.push(item.hd.notes);
        if (item.crrt?.notes) notesList.push(item.crrt.notes);
        return notesList.filter(Boolean).join('; ');
      };

      const huCatNotes = collectCategoryNotes(huEntry);
      const enCatNotes = collectCategoryNotes(enEntry);
      const deCatNotes = collectCategoryNotes(deEntry);

      const notesVal = {
        hu: [pharmHU?.dosage.renalAdjustment, huCatNotes].filter(Boolean).join(' | ') || "Nem igényel különleges dózismódosítást veseelégtelenségben.",
        en: [pharmEN?.dosage.renalAdjustment, enCatNotes].filter(Boolean).join(' | ') || "No special dose adjustment required in renal impairment.",
        de: [pharmDE?.dosage.renalAdjustment, deCatNotes].filter(Boolean).join(' | ') || "Keine besondere Dosisanpassung bei Niereninsuffizienz erforderlich."
      };

      return {
        id,
        name,
        brandNames,
        group: groupVal,
        normalDose: {
          hu: formatCategory(huEntry.gfr_gt_50),
          en: formatCategory(enEntry.gfr_gt_50),
          de: formatCategory(deEntry.gfr_gt_50)
        },
        gfrGt50: {
          hu: formatCategory(huEntry.gfr_gt_50),
          en: formatCategory(enEntry.gfr_gt_50),
          de: formatCategory(deEntry.gfr_gt_50)
        },
        gfr30to50: {
          hu: formatCategory(huEntry.gfr_30_50),
          en: formatCategory(enEntry.gfr_30_50),
          de: formatCategory(deEntry.gfr_30_50)
        },
        gfr10to29: {
          hu: formatCategory(huEntry.gfr_10_29),
          en: formatCategory(enEntry.gfr_10_29),
          de: formatCategory(deEntry.gfr_10_29)
        },
        gfrLt10: {
          hu: formatCategory(huEntry.gfr_lt_10),
          en: formatCategory(enEntry.gfr_lt_10),
          de: formatCategory(deEntry.gfr_lt_10)
        },
        hd: {
          hu: formatCategory(huEntry.hd),
          en: formatCategory(enEntry.hd),
          de: formatCategory(deEntry.hd)
        },
        crrt: {
          hu: formatCategory(huEntry.crrt),
          en: formatCategory(enEntry.crrt),
          de: formatCategory(deEntry.crrt)
        },
        notes: notesVal,
        categoryNotes: {
          hu: {
            gfrGt50: huEntry.gfr_gt_50?.notes || '',
            gfr30to50: huEntry.gfr_30_50?.notes || '',
            gfr10to29: huEntry.gfr_10_29?.notes || '',
            gfrLt10: huEntry.gfr_lt_10?.notes || '',
            hd: huEntry.hd?.notes || '',
            crrt: huEntry.crrt?.notes || ''
          },
          en: {
            gfrGt50: enEntry.gfr_gt_50?.notes || '',
            gfr30to50: enEntry.gfr_30_50?.notes || '',
            gfr10to29: enEntry.gfr_10_29?.notes || '',
            gfrLt10: enEntry.gfr_lt_10?.notes || '',
            hd: enEntry.hd?.notes || '',
            crrt: enEntry.crrt?.notes || ''
          },
          de: {
            gfrGt50: deEntry.gfr_gt_50?.notes || '',
            gfr30to50: deEntry.gfr_30_50?.notes || '',
            gfr10to29: deEntry.gfr_10_29?.notes || '',
            gfrLt10: deEntry.gfr_lt_10?.notes || '',
            hd: deEntry.hd?.notes || '',
            crrt: deEntry.crrt?.notes || ''
          }
        }
      };
    });
  }, [currentLang]);

  // State management
  const [activeTab, setActiveTab] = useState<'table' | 'calculator'>('table');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('all');
  const [expandedDrugId, setExpandedDrugId] = useState<string | null>(null);

  // Calculator inputs
  const [patient, setPatient] = useState({
    age: '65',
    weight: '75',
    gender: 'male' as 'male' | 'female',
    creatinine: '95',
    creatinineUnit: 'umol' as 'umol' | 'mgdl'
  });

  const [calcResults, setCalcResults] = useState<{
    crcl: number;
    gfr: number;
    category: 'normal' | 'moderate' | 'severe' | 'esrd';
  } | null>(null);

  const [selectedCalcDrugId, setSelectedCalcDrugId] = useState<string>('amoxicillin_clavulanate');

  // Extract unique drug groups for filter dropdown
  const uniqueGroups = useMemo(() => {
    const groups = new Set<string>();
    renalDosingDatabase.forEach(item => {
      groups.add(item.group[currentLang]);
    });
    return Array.from(groups).sort((a, b) => getGroupOrderWeight(a) - getGroupOrderWeight(b));
  }, [currentLang]);

  // Handle Search & Filter
  const filteredAntibiotics = useMemo(() => {
    const filtered = renalDosingDatabase.filter(item => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.brandNames && item.brandNames.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.group[currentLang].toLowerCase().includes(searchQuery.toLowerCase());

      const matchesGroup = selectedGroup === 'all' || item.group[currentLang] === selectedGroup;

      return matchesSearch && matchesGroup;
    });

    return [...filtered].sort((a, b) => {
      const weightA = getGroupOrderWeight(a.group[currentLang]);
      const weightB = getGroupOrderWeight(b.group[currentLang]);
      if (weightA !== weightB) {
        return weightA - weightB;
      }
      return a.name.localeCompare(b.name);
    });
  }, [searchQuery, selectedGroup, currentLang]);

  // Calculate renal function (CG CrCl & simplified CKD-EPI 2021)
  const handleCalculate = () => {
    const age = parseFloat(patient.age);
    const weight = parseFloat(patient.weight);
    const scr_val = parseFloat(patient.creatinine);

    if (isNaN(age) || isNaN(weight) || isNaN(scr_val) || scr_val <= 0) {
      return;
    }

    // Convert Scr to mg/dL for standardized math
    const scr_mgdl = patient.creatinineUnit === 'umol' ? scr_val / 88.4 : scr_val;

    // 1. Cockcroft-Gault Clearance
    let crcl = ((140 - age) * weight) / (72 * scr_mgdl);
    if (patient.gender === 'female') {
      crcl *= 0.85;
    }
    crcl = Math.round(crcl * 10) / 10;

    // 2. CKD-EPI 2021 creatinine equation (race-free)
    const k = patient.gender === 'female' ? 0.7 : 0.9;
    const alpha = patient.gender === 'female' ? -0.241 : -0.302;
    const gender_factor = patient.gender === 'female' ? 1.012 : 1.0;
    
    const term1 = Math.min(scr_mgdl / k, 1);
    const term2 = Math.max(scr_mgdl / k, 1);
    
    let gfr = 142 * Math.pow(term1, alpha) * Math.pow(term2, -1.200) * Math.pow(0.9938, age) * gender_factor;
    gfr = Math.round(gfr * 10) / 10;

    // Use CrCl (or GFR) to categorize for antibiotic dosing
    let category: 'normal' | 'moderate' | 'severe' | 'esrd' = 'normal';
    if (crcl >= 50) {
      category = 'normal';
    } else if (crcl >= 30) {
      category = 'moderate';
    } else if (crcl >= 10) {
      category = 'severe';
    } else {
      category = 'esrd';
    }

    setCalcResults({
      crcl,
      gfr,
      category
    });
  };

  const getCategoryColor = (cat: 'normal' | 'moderate' | 'severe' | 'esrd') => {
    switch (cat) {
      case 'normal': return 'bg-emerald-50 border-emerald-200 text-emerald-800';
      case 'moderate': return 'bg-blue-50 border-blue-200 text-blue-800';
      case 'severe': return 'bg-amber-50 border-amber-200 text-amber-800';
      case 'esrd': return 'bg-red-50 border-red-200 text-red-800';
    }
  };

  const getCategoryLabel = (cat: 'normal' | 'moderate' | 'severe' | 'esrd') => {
    switch (cat) {
      case 'normal': return t.normal;
      case 'moderate': return t.moderate;
      case 'severe': return t.severe;
      case 'esrd': return t.esrd;
    }
  };

  // Selected drug recommendations based on current calculation
  const recommendedDoseInfo = useMemo(() => {
    if (!calcResults) return null;

    const drug = renalDosingDatabase.find(d => d.id === selectedCalcDrugId);
    if (!drug) return null;

    let doseText = '';
    let reason = '';

    switch (calcResults.category) {
      case 'normal':
        doseText = drug.gfrGt50[currentLang];
        reason = currentLang === 'hu'
          ? "A beteg számított klírensze >50 mL/perc. Nincs vagy csak minimális vesefunkció-csökkenés áll fenn, ezért a normál terápiás dózis adása javasolt."
          : currentLang === 'de'
          ? "Die berechnete Clearance des Patienten liegt bei >50 mL/min. Es liegt keine oder nur eine minimale Einschränkung vor, daher wird die normale Dosis empfohlen."
          : "Calculated clearance is >50 mL/min. No or minimal renal impairment detected; standard therapeutic dosing is recommended.";
        break;
      case 'moderate':
        doseText = drug.gfr30to50[currentLang];
        reason = currentLang === 'hu'
          ? "A beteg számított klírensze 30-50 mL/perc között van (középsúlyos beszűkülés). Az elimináció lassul, így az akkumuláció elkerülésére a dózis vagy az időköz mérsékelt csökkentése szükséges."
          : currentLang === 'de'
          ? "Die Clearance des Patienten liegt im Bereich von 30-50 mL/min (mittelschwere Einschränkung). Um Akkumulation zu vermeiden, ist eine moderate Dosis- oder Intervallsanpassung erforderlich."
          : "Calculated clearance is 30-50 mL/min (moderate impairment). Slower elimination requires moderate dose reduction or interval extension to prevent accumulation.";
        break;
      case 'severe':
        doseText = drug.gfr10to29[currentLang];
        reason = currentLang === 'hu'
          ? "A beteg klírensze 10-29 mL/perc között van (súlyos beszűkülés). A hatóanyag felezési ideje drasztikusan megnyúlt. Jelentős dóziscsökkentés vagy az időköz megnyújtása szükséges a toxicitás elkerülésére."
          : currentLang === 'de'
          ? "Die Clearance liegt bei 10-29 mL/min (schwere Einschränkung). Die Halbwertszeit ist drastisch verlängert. Eine erhebliche Reduktion der Dosis oder Verlängerung des Intervalls ist zwingend erforderlich."
          : "Calculated clearance is 10-29 mL/min (severe impairment). Drug half-life is dramatically prolonged. Significant dose reduction or interval extension is vital to prevent toxic side effects.";
        break;
      case 'esrd':
        doseText = drug.gfrLt10[currentLang];
        reason = currentLang === 'hu'
          ? "A beteg klírensze <10 mL/perc (végstádiumú veseelégtelenség). Minimális vagy nulla vese-kiválasztás. Minimális fenntartó adag adható, vagy pulse-dosing (szintvezérelt terápia) javasolt."
          : currentLang === 'de'
          ? "Die Clearance liegt bei <10 mL/min (terminale Niereninsuffizienz). Minimale renale Ausscheidung. Sehr niedrige Erhaltungsdosen oder Spiegel-gesteuerte Gabe (Pulse-Dosing) erforderlich."
          : "Calculated clearance is <10 mL/min (end-stage renal disease). Renal excretion is nearly zero. Minimal maintenance dosing or pulse-dosing guided by drug levels is advised.";
        break;
    }

    return {
      drugName: drug.name,
      doseText,
      reason,
      notes: drug.notes[currentLang],
      hdDose: drug.hd[currentLang],
      crrtDose: drug.crrt[currentLang],
      brand: drug.brandNames
    };
  }, [calcResults, selectedCalcDrugId, currentLang]);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2 text-slate-800">
          <TrendingDown className="w-6 h-6 text-indigo-600" />
          <h2 className="text-lg font-extrabold tracking-tight">{t.title}</h2>
        </div>
        <p className="text-xs text-slate-500 mt-1">{t.subtitle}</p>
      </div>

      {/* Navigation Subtabs */}
      <div className="flex border-b border-slate-200">
        <button
          onClick={() => setActiveTab('table')}
          className={`py-2 px-4 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
            activeTab === 'table'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          {t.tab_table}
        </button>
        <button
          onClick={() => setActiveTab('calculator')}
          className={`py-2 px-4 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
            activeTab === 'calculator'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Calculator className="w-4 h-4" />
          {t.tab_calc}
        </button>
      </div>

      {/* VIEW 1: DOSING TABLE REFERENCE */}
      {activeTab === 'table' && (
        <div className="space-y-4">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-4 h-4 text-slate-400" />
              </span>
              <input
                type="text"
                placeholder={t.search_placeholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-xl text-xs bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 placeholder-slate-400"
              />
            </div>

            {/* Class Filter */}
            <div className="sm:w-64 flex items-center gap-2">
              <span className="text-[11px] font-bold text-slate-400 whitespace-nowrap uppercase tracking-wider">{t.filter_group}:</span>
              <select
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
                className="w-full border border-slate-200 rounded-xl p-2 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 font-semibold text-slate-700"
              >
                <option value="all">{t.all_groups}</option>
                {uniqueGroups.map(grp => (
                  <option key={grp} value={grp}>{grp}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Table / Cards List */}
          {filteredAntibiotics.length > 0 ? (
            <div className="border border-slate-200/80 rounded-xl overflow-hidden bg-white shadow-sm">
              {/* Desktop Header Row (Hidden on Mobile) */}
              <div className="hidden lg:grid lg:grid-cols-12 bg-slate-50 border-b border-slate-200 text-[10px] font-bold text-slate-500 uppercase tracking-wider p-3">
                <div className="col-span-3">{t.ab_name}</div>
                <div className="col-span-1.5 text-center bg-indigo-50/50 text-indigo-700 rounded py-0.5">{t.normal}</div>
                <div className="col-span-1.5 text-center bg-blue-50/50 text-blue-700 rounded py-0.5">{t.moderate}</div>
                <div className="col-span-1.5 text-center bg-amber-50/50 text-amber-700 rounded py-0.5">{t.severe}</div>
                <div className="col-span-1.5 text-center bg-red-50/50 text-red-700 rounded py-0.5">{t.esrd}</div>
                <div className="col-span-1 text-center bg-slate-100/80 rounded py-0.5">{t.hd_short}</div>
                <div className="col-span-1 text-center bg-teal-50/70 text-teal-800 rounded py-0.5">{t.crrt_short}</div>
              </div>

              {/* Grid rows */}
              <div className="divide-y divide-slate-100">
                {filteredAntibiotics.map(ab => {
                  const isExpanded = expandedDrugId === ab.id;
                  return (
                    <div key={ab.id} className="transition-colors hover:bg-slate-50/50">
                      {/* Desktop layout row */}
                      <div className="hidden lg:grid lg:grid-cols-12 items-center p-4 gap-2 text-xs">
                        {/* Name & Class */}
                        <div className="col-span-3 space-y-1">
                          <h4 className="font-extrabold text-slate-800 text-[13px]">{ab.name}</h4>
                          <p className="text-[10px] text-slate-400 font-medium italic">{ab.brandNames}</p>
                          <span className="inline-block px-2 py-0.5 bg-slate-100 text-[9px] font-bold text-slate-500 rounded-full">
                            {ab.group[currentLang]}
                          </span>
                        </div>

                        {/* GFR > 50 */}
                        <div className="col-span-1.5 text-center font-bold text-slate-700 px-1 bg-indigo-50/10 border-l border-indigo-100/30">
                          {ab.gfrGt50[currentLang]}
                        </div>

                        {/* GFR 30-50 */}
                        <div className="col-span-1.5 text-center font-bold text-slate-700 px-1 bg-blue-50/10 border-l border-blue-100/30">
                          {ab.gfr30to50[currentLang]}
                        </div>

                        {/* GFR 10-29 */}
                        <div className="col-span-1.5 text-center font-bold text-slate-700 px-1 bg-amber-50/10 border-l border-amber-100/30">
                          {ab.gfr10to29[currentLang]}
                        </div>

                        {/* GFR < 10 */}
                        <div className="col-span-1.5 text-center font-extrabold text-slate-700 px-1 bg-red-50/10 border-l border-red-100/30">
                          {ab.gfrLt10[currentLang]}
                        </div>

                        {/* HD */}
                        <div className="col-span-1 text-center font-medium text-slate-600 px-1 border-l border-slate-100">
                          {ab.hd[currentLang]}
                        </div>

                        {/* CRRT */}
                        <div className="col-span-1 text-center font-medium text-slate-600 px-1 border-l border-slate-100">
                          {ab.crrt[currentLang]}
                        </div>

                        {/* Expand chevron */}
                        <div className="col-span-1 flex justify-end">
                          <button
                            onClick={() => setExpandedDrugId(isExpanded ? null : ab.id)}
                            className="p-1.5 hover:bg-slate-200/50 rounded-full text-slate-400 hover:text-slate-700 transition-colors"
                          >
                            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      {/* Mobile view card (Hidden on Desktop) */}
                      <div className="block lg:hidden p-4 space-y-3">
                        <div className="flex justify-between items-start">
                          <div className="space-y-0.5">
                            <h4 className="font-extrabold text-slate-800 text-sm">{ab.name}</h4>
                            <p className="text-[10px] text-slate-400 font-medium italic">{ab.brandNames}</p>
                            <span className="inline-block px-2 py-0.5 bg-slate-100 text-[9px] font-bold text-slate-500 rounded-full mt-1">
                              {ab.group[currentLang]}
                            </span>
                          </div>
                          <button
                            onClick={() => setExpandedDrugId(isExpanded ? null : ab.id)}
                            className="p-1 bg-slate-100 text-slate-600 rounded"
                          >
                            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </button>
                        </div>

                        {/* Small summary GFR boxes for mobile */}
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="bg-indigo-50/50 p-2 border border-indigo-100/40 rounded-lg">
                            <span className="text-[9px] text-indigo-500 font-bold block uppercase">{t.normal}</span>
                            <span className="font-bold text-slate-700">{ab.gfrGt50[currentLang]}</span>
                          </div>
                          <div className="bg-blue-50/50 p-2 border border-blue-100/40 rounded-lg">
                            <span className="text-[9px] text-blue-500 font-bold block uppercase">{t.moderate}</span>
                            <span className="font-bold text-slate-700">{ab.gfr30to50[currentLang]}</span>
                          </div>
                          <div className="bg-amber-50/50 p-2 border border-amber-100/40 rounded-lg">
                            <span className="text-[9px] text-amber-500 font-bold block uppercase">{t.severe}</span>
                            <span className="font-bold text-slate-700">{ab.gfr10to29[currentLang]}</span>
                          </div>
                          <div className="bg-red-50/50 p-2 border border-red-100/40 rounded-lg">
                            <span className="text-[9px] text-red-500 font-bold block uppercase">{t.esrd}</span>
                            <span className="font-extrabold text-slate-700">{ab.gfrLt10[currentLang]}</span>
                          </div>
                        </div>

                        {/* Extra HD / CRRT summary */}
                        <div className="grid grid-cols-2 gap-2 text-xs border-t border-slate-100 pt-2">
                          <div>
                            <span className="text-[9px] text-slate-400 font-bold block uppercase">{t.hd_short}</span>
                            <span className="text-slate-600 text-[11px] font-medium block leading-tight">{ab.hd[currentLang]}</span>
                          </div>
                          <div>
                            <span className="text-[9px] text-slate-400 font-bold block uppercase">{t.crrt_short}</span>
                            <span className="text-slate-600 text-[11px] font-medium block leading-tight">{ab.crrt[currentLang]}</span>
                          </div>
                        </div>
                      </div>

                      {/* Expanded Clinical Notes (Both mobile and desktop) */}
                      {isExpanded && (
                        <div className="bg-slate-50/80 p-4 border-t border-slate-100 space-y-2 text-xs">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Standard Dose */}
                            <div>
                              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                                {t.normal_dose_header}
                              </span>
                              <p className="font-extrabold text-slate-700 bg-white border border-slate-200/50 px-2 py-1.5 rounded-lg inline-block">
                                {ab.normalDose[currentLang]}
                              </p>
                            </div>

                            {/* Clinical Notes */}
                            <div>
                              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5 flex items-center gap-1">
                                <Info className="w-3.5 h-3.5 text-indigo-500" />
                                {t.notes_header}
                              </span>
                              <div className="bg-white border border-slate-200/50 p-3 rounded-lg text-slate-600 leading-relaxed text-[11px]">
                                {ab.notes[currentLang]}
                              </div>
                            </div>

                            {/* Category Specific Clinical Notes & Warnings */}
                            {ab.categoryNotes && Object.values(ab.categoryNotes[currentLang]).some(Boolean) && (
                              <div className="col-span-1 md:col-span-2 border-t border-slate-200/60 pt-3">
                                <span className="text-[10px] font-bold text-rose-500 uppercase tracking-wider block mb-2 flex items-center gap-1">
                                  <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
                                  {currentLang === 'hu' ? 'Klinikai megjegyzések és figyelmeztetések (GFR / dialízis kategóriák szerint)' : 
                                   currentLang === 'de' ? 'Klinische Hinweise und Warnungen (nach GFR / Dialysekategorie)' : 
                                   'Clinical Notes & Warnings (by GFR / Dialysis Category)'}
                                </span>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                                  {/* GFR > 50 Note */}
                                  {ab.categoryNotes[currentLang].gfrGt50 && (
                                    <div className="bg-white border border-slate-200/50 p-2.5 rounded-lg">
                                      <span className="text-[9px] font-bold text-indigo-500 block uppercase mb-0.5">{t.normal}</span>
                                      <p className="text-slate-600 text-[11px] leading-relaxed font-medium">{ab.categoryNotes[currentLang].gfrGt50}</p>
                                    </div>
                                  )}
                                  {/* GFR 30-50 Note */}
                                  {ab.categoryNotes[currentLang].gfr30to50 && (
                                    <div className="bg-white border border-slate-200/50 p-2.5 rounded-lg">
                                      <span className="text-[9px] font-bold text-amber-500 block uppercase mb-0.5">{t.moderate}</span>
                                      <p className="text-slate-600 text-[11px] leading-relaxed font-medium">{ab.categoryNotes[currentLang].gfr30to50}</p>
                                    </div>
                                  )}
                                  {/* GFR 10-29 Note */}
                                  {ab.categoryNotes[currentLang].gfr10to29 && (
                                    <div className="bg-white border border-slate-200/50 p-2.5 rounded-lg">
                                      <span className="text-[9px] font-bold text-orange-500 block uppercase mb-0.5">{t.severe}</span>
                                      <p className="text-slate-600 text-[11px] leading-relaxed font-medium">{ab.categoryNotes[currentLang].gfr10to29}</p>
                                    </div>
                                  )}
                                  {/* GFR < 10 Note */}
                                  {ab.categoryNotes[currentLang].gfrLt10 && (
                                    <div className="bg-white border border-slate-200/50 p-2.5 rounded-lg">
                                      <span className="text-[9px] font-bold text-rose-500 block uppercase mb-0.5">{t.esrd}</span>
                                      <p className="text-slate-600 text-[11px] leading-relaxed font-medium">{ab.categoryNotes[currentLang].gfrLt10}</p>
                                    </div>
                                  )}
                                  {/* HD Note */}
                                  {ab.categoryNotes[currentLang].hd && (
                                    <div className="bg-white border border-slate-200/50 p-2.5 rounded-lg">
                                      <span className="text-[9px] font-bold text-teal-600 block uppercase mb-0.5">{t.hd_short}</span>
                                      <p className="text-slate-600 text-[11px] leading-relaxed font-medium">{ab.categoryNotes[currentLang].hd}</p>
                                    </div>
                                  )}
                                  {/* CRRT Note */}
                                  {ab.categoryNotes[currentLang].crrt && (
                                    <div className="bg-white border border-slate-200/50 p-2.5 rounded-lg">
                                      <span className="text-[9px] font-bold text-cyan-600 block uppercase mb-0.5">{t.crrt_short}</span>
                                      <p className="text-slate-600 text-[11px] leading-relaxed font-medium">{ab.categoryNotes[currentLang].crrt}</p>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="bg-white border border-slate-100 rounded-xl p-8 text-center flex flex-col items-center justify-center space-y-2 min-h-[250px]">
              <Search className="w-10 h-10 text-slate-300" />
              <p className="text-slate-500 font-medium text-xs">{t.no_results}</p>
            </div>
          )}
        </div>
      )}

      {/* VIEW 2: INTERACTIVE DOSE CALCULATOR */}
      {activeTab === 'calculator' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left panel: patient inputs */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-4 space-y-4">
              <div className="flex items-center gap-1.5 text-indigo-800 border-b border-indigo-100/50 pb-2">
                <User className="w-4 h-4 text-indigo-600" />
                <h3 className="text-xs font-bold uppercase tracking-wider">{t.calc_title}</h3>
              </div>
              <p className="text-[11px] text-slate-500 leading-normal">{t.calc_desc}</p>

              {/* Age */}
              <div>
                <label className="text-[11px] font-semibold text-slate-500 block mb-1">{t.age}</label>
                <input
                  type="number"
                  value={patient.age}
                  onChange={(e) => setPatient({ ...patient, age: e.target.value })}
                  className="w-full border border-slate-200 rounded-lg p-2 text-xs focus:ring-1 focus:ring-indigo-500 outline-none bg-white"
                  placeholder="e.g. 65"
                />
              </div>

              {/* Weight */}
              <div>
                <label className="text-[11px] font-semibold text-slate-500 block mb-1">{t.weight}</label>
                <input
                  type="number"
                  value={patient.weight}
                  onChange={(e) => setPatient({ ...patient, weight: e.target.value })}
                  className="w-full border border-slate-200 rounded-lg p-2 text-xs focus:ring-1 focus:ring-indigo-500 outline-none bg-white"
                  placeholder="e.g. 75"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="text-[11px] font-semibold text-slate-500 block mb-1">{t.gender}</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setPatient({ ...patient, gender: 'male' })}
                    className={`py-1.5 rounded-lg text-xs font-bold border transition-colors ${
                      patient.gender === 'male'
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {t.male}
                  </button>
                  <button
                    onClick={() => setPatient({ ...patient, gender: 'female' })}
                    className={`py-1.5 rounded-lg text-xs font-bold border transition-colors ${
                      patient.gender === 'female'
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {t.female}
                  </button>
                </div>
              </div>

              {/* Creatinine */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-[11px] font-semibold text-slate-500">{t.creatinine}</label>
                  <div className="flex gap-1">
                    <button
                      onClick={() => setPatient({ ...patient, creatinineUnit: 'umol' })}
                      className={`text-[9px] px-1.5 py-0.5 rounded ${
                        patient.creatinineUnit === 'umol' ? 'bg-slate-700 text-white font-bold' : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      µmol/L
                    </button>
                    <button
                      onClick={() => setPatient({ ...patient, creatinineUnit: 'mgdl' })}
                      className={`text-[9px] px-1.5 py-0.5 rounded ${
                        patient.creatinineUnit === 'mgdl' ? 'bg-slate-700 text-white font-bold' : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      mg/dL
                    </button>
                  </div>
                </div>
                <input
                  type="number"
                  step="any"
                  value={patient.creatinine}
                  onChange={(e) => setPatient({ ...patient, creatinine: e.target.value })}
                  className="w-full border border-slate-200 rounded-lg p-2 text-xs focus:ring-1 focus:ring-indigo-500 outline-none bg-white font-semibold"
                  placeholder={patient.creatinineUnit === 'umol' ? 'e.g. 95' : 'e.g. 1.1'}
                />
              </div>

              <button
                onClick={handleCalculate}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold py-2.5 rounded-lg flex items-center justify-center gap-1.5 shadow-sm transition-colors"
              >
                <Calculator className="w-4 h-4" />
                {t.calculate}
              </button>
            </div>
          </div>

          {/* Right panel: results & recommendation */}
          <div className="lg:col-span-7 space-y-4">
            {calcResults ? (
              <div className="space-y-4">
                {/* Calculations Summary Card */}
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm space-y-3">
                  <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">{t.gfr_result}</h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Cockcroft Gault */}
                    <div className="bg-slate-50 border border-slate-100 p-3 rounded-lg space-y-1">
                      <span className="text-[10px] text-slate-400 font-bold block">{t.cg_crcl}</span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xl font-extrabold text-slate-800">{calcResults.crcl}</span>
                        <span className="text-xs text-slate-500 font-bold">mL/min</span>
                      </div>
                    </div>

                    {/* CKD EPI */}
                    <div className="bg-slate-50 border border-slate-100 p-3 rounded-lg space-y-1">
                      <span className="text-[10px] text-slate-400 font-bold block">{t.ckd_epi}</span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xl font-extrabold text-slate-800">{calcResults.gfr}</span>
                        <span className="text-xs text-slate-500 font-bold">mL/min/1.73m²</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlight Tag */}
                  <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t.renal_cat_label}:</span>
                    <div className={`px-2.5 py-1 rounded text-xs font-extrabold border ${getCategoryColor(calcResults.category)}`}>
                      {getCategoryLabel(calcResults.category)}
                    </div>
                  </div>
                </div>

                {/* Personalized Dosing Assistant */}
                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
                  <div className="border-b border-slate-100 pb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h4 className="text-sm font-extrabold text-indigo-900 flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-amber-500" />
                      {t.recommend_title}
                    </h4>

                    {/* Antibiotic selector */}
                    <select
                      value={selectedCalcDrugId}
                      onChange={(e) => setSelectedCalcDrugId(e.target.value)}
                      className="border border-slate-200 rounded-lg p-1.5 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 font-bold text-slate-700"
                    >
                      {renalDosingDatabase.map(drug => (
                        <option key={drug.id} value={drug.id}>{drug.name}</option>
                      ))}
                    </select>
                  </div>

                  {recommendedDoseInfo && (
                    <div className="space-y-4 text-xs">
                      {/* Name of drug */}
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase">{t.ab_name}:</span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-base font-extrabold text-slate-800">{recommendedDoseInfo.drugName}</span>
                          <span className="text-xs text-slate-400 italic">({recommendedDoseInfo.brand})</span>
                        </div>
                      </div>

                      {/* Suggested Dose */}
                      <div className="bg-indigo-50/50 border border-indigo-100/50 p-4 rounded-xl space-y-1">
                        <span className="text-[10px] text-indigo-500 font-bold uppercase tracking-wider block">{t.rec_dose_label}</span>
                        <p className="text-base font-black text-indigo-950 leading-tight">
                          {recommendedDoseInfo.doseText}
                        </p>
                      </div>

                      {/* Rationale and Details */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        {/* Rationale */}
                        <div className="bg-slate-50 border border-slate-100 p-3 rounded-lg space-y-1">
                          <span className="text-[10px] text-slate-400 font-bold block">{t.rec_reason}</span>
                          <p className="text-slate-600 text-[11px] leading-relaxed font-medium">
                            {recommendedDoseInfo.reason}
                          </p>
                        </div>

                        {/* Extra dialyis data */}
                        <div className="bg-slate-50 border border-slate-100 p-3 rounded-lg space-y-2">
                          <div>
                            <span className="text-[9px] text-slate-400 font-bold block uppercase">{t.hd_short}</span>
                            <span className="text-slate-700 text-[11px] font-bold leading-tight">{recommendedDoseInfo.hdDose}</span>
                          </div>
                          <div className="border-t border-slate-200/50 pt-1.5">
                            <span className="text-[9px] text-slate-400 font-bold block uppercase">{t.crrt_short}</span>
                            <span className="text-slate-700 text-[11px] font-bold leading-tight">{recommendedDoseInfo.crrtDose}</span>
                          </div>
                        </div>
                      </div>

                      {/* Clinical Pearl Box */}
                      <div className="bg-amber-50/50 border border-amber-100/40 p-4 rounded-xl flex gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                        <div className="space-y-0.5">
                          <h5 className="text-xs font-extrabold text-amber-800">{t.clinical_pearl}</h5>
                          <p className="text-[11px] text-slate-600 leading-relaxed font-medium">{recommendedDoseInfo.notes}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white border border-slate-100 rounded-xl p-8 text-center flex flex-col items-center justify-center space-y-3 min-h-[300px]">
                <Calculator className="w-12 h-12 text-slate-300 animate-bounce" />
                <p className="text-slate-500 font-medium text-xs">
                  {currentLang === 'hu'
                    ? "Add meg a beteg adatait a bal oldalon, majd kattints a 'GFR Számítása' gombra a személyre szabott javaslatokért."
                    : currentLang === 'de'
                    ? "Geben Sie die Patientendaten links ein und klicken Sie auf 'GFR berechnen' für personalisierte Empfehlungen."
                    : "Enter the patient parameters on the left and click 'Calculate GFR' to generate personalized dosing guidance."}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Clinical Disclaimer footer */}
      <div className="bg-slate-100/60 border border-slate-200/60 rounded-xl p-3 flex gap-2.5 text-slate-500">
        <ShieldAlert className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
        <p className="text-[10px] leading-relaxed font-medium">
          {t.disclaimer}
        </p>
      </div>
    </div>
  );
}
