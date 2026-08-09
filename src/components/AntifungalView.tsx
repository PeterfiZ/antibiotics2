/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { antifungalsData, AntifungalData } from '../data/antifungals';
import { 
  Search, 
  Filter, 
  Pill, 
  Clock, 
  Zap, 
  Activity, 
  AlertTriangle, 
  Info, 
  Shield, 
  BookOpen, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Bookmark, 
  Flame,
  X,
  Layers,
  Sparkles
} from 'lucide-react';

// Multilingual labels for the Antifungal View
const labels = {
  hu: {
    title: 'Gombaellenes Kezelés (Antifungális szerek)',
    subtitle: 'Szisztémás antimykotikumok farmakológiai tulajdonságai, spektruma és klinikai alkalmazása',
    searchPlaceholder: 'Keresés hatóanyag, gyári név, rövidítés, csoport vagy gomba szerint...',
    allGroups: 'Összes csoport',
    groupAzoles: 'Azolok',
    groupEchinocandins: 'Echinokandinok',
    groupPolyenes: 'Polienek',
    halfLife: 'Felezési idő',
    effectType: 'Hatás típusa',
    pae: 'Post-Antifungális Effektus (PAE)',
    spectrum: 'Hatásspektrum (Érzékeny gombák)',
    specialFeature: 'Különleges tulajdonság',
    mechanismOfAction: 'Hatásmechanizmus',
    brandNames: 'Gyári készítmények',
    abbreviation: 'Nemzetközi rövidítés',
    dosageAdult: 'Felnőtt adagolás',
    dosagePediatric: 'Gyermek adagolás',
    dosageRenal: 'Veseelégtelenségben',
    dosageHepatic: 'Májkárosodásban',
    indications: 'Főbb javallatok',
    sideEffects: 'Mellékhatások',
    practicalTips: 'Gyakorlati tanácsok',
    secGeneral: 'Alapinfók',
    secDosage: 'Adagolás',
    secIndications: 'Spektrum & Javallatok',
    secSafety: 'Mellékhatások & Tanácsok',
    noResults: 'Nincs találat a keresési feltételeknek megfelelően.',
    quickSummary: 'Főbb jellemzők',
    dosageGuidelines: 'Adagolási irányelvew',
    fungicide: 'Fungicid',
    fungistatic: 'Fungisztatikus',
    activeFilters: 'Aktív szűrők',
    clearFilters: 'Szűrők törlése',
    bookmarked: 'Mentve',
    bookmark: 'Mentés könyvjelzőbe',
    details: 'Részletek megnyitása',
    
    // Antifungal Matrix Specific
    tabAgents: 'Antifungális szerek',
    tabMatrix: 'Érzékenységi mátrix',
    matrixPathogen: 'Gomba kórokozó',
    matrixOldNomenclature: 'Korábbi elnevezés',
    matrixNewNomenclature: 'Új nómenklatúra (Taxonómia)',
    matrixLegend: 'Jelmagyarázat',
    matrixS: 'Érzékeny (S)',
    matrixI: 'Mérsékelten / Dózisfüggően érzékeny (I/S-DD)',
    matrixR: 'Rezisztens (R)',
    matrixSD: 'Nincs adat / Hatástalan (-)',
    yeasts: 'Élesztőgombák',
    moulds: 'Penészgombák',
    allTypes: 'Összes típus',
    pathogenDetails: 'Kórokozó részletei',
    pathogenType: 'Gomba típus',
    clinicalNotes: 'Klinikai megjegyzések',
    searchPathogenPlaceholder: 'Keresés gombafaj vagy korábbi név szerint...',
    clickForDetails: 'Kattints egy sorra a részletes klinikai megjegyzésekért!',
    selectedPathogenInfo: 'Kiválasztott kórokozó részletes elemzése',
    intrinsicResistanceAlert: 'Figyelem: Eredendő (intrinsic) rezisztencia áll fenn!',
    fluShort: 'FLU',
    vorShort: 'VOR',
    posShort: 'POS',
    isaShort: 'ISA',
    echShort: 'ECH',
    ambShort: 'L-AmB',
    fluFull: 'Fluconazol',
    vorFull: 'Voriconazol',
    posFull: 'Posaconazol',
    isaFull: 'Isavuconazol',
    echFull: 'Echinokandinok',
    ambFull: 'Liposomalis Amphotericin B'
  },
  en: {
    title: 'Antifungal Treatment',
    subtitle: 'Pharmacological properties, spectrum, and clinical application of systemic antifungals',
    searchPlaceholder: 'Search by agent, brand name, abbreviation, group, or pathogen...',
    allGroups: 'All Groups',
    groupAzoles: 'Azoles',
    groupEchinocandins: 'Echinocandins',
    groupPolyenes: 'Polyenes',
    halfLife: 'Half-life',
    effectType: 'Effect type',
    pae: 'Post-Antifungal Effect (PAE)',
    spectrum: 'Antifungal Spectrum',
    specialFeature: 'Special Feature',
    mechanismOfAction: 'Mechanism of Action',
    brandNames: 'Brand Names',
    abbreviation: 'International Abbreviation',
    dosageAdult: 'Adult Dosing',
    dosagePediatric: 'Pediatric Dosing',
    dosageRenal: 'Renal Impairment',
    dosageHepatic: 'Hepatic Impairment',
    indications: 'Main Indications',
    sideEffects: 'Side Effects',
    practicalTips: 'Practical Tips',
    secGeneral: 'General Info',
    secDosage: 'Dosage',
    secIndications: 'Spectrum & Indications',
    secSafety: 'Side Effects & Tips',
    noResults: 'No matches found for your search criteria.',
    quickSummary: 'Key Features',
    dosageGuidelines: 'Dosage Guidelines',
    fungicide: 'Fungicidal',
    fungistatic: 'Fungistatic',
    activeFilters: 'Active filters',
    clearFilters: 'Clear filters',
    bookmarked: 'Bookmarked',
    bookmark: 'Add bookmark',
    details: 'View details',

    // Antifungal Matrix Specific
    tabAgents: 'Antifungal Agents',
    tabMatrix: 'Susceptibility Matrix',
    matrixPathogen: 'Fungal Pathogen',
    matrixOldNomenclature: 'Previous Nomenclature',
    matrixNewNomenclature: 'New Nomenclature (Taxonomy)',
    matrixLegend: 'Legend',
    matrixS: 'Susceptible (S)',
    matrixI: 'Intermediate / Dose-Dependent (I/S-DD)',
    matrixR: 'Resistant (R)',
    matrixSD: 'No data / Inactive (-)',
    yeasts: 'Yeasts',
    moulds: 'Moulds (Filamentous)',
    allTypes: 'All Types',
    pathogenDetails: 'Pathogen Details',
    pathogenType: 'Pathogen Type',
    clinicalNotes: 'Clinical Notes',
    searchPathogenPlaceholder: 'Search fungal species or previous name...',
    clickForDetails: 'Click a row to view detailed clinical notes!',
    selectedPathogenInfo: 'Detailed Analysis of Selected Pathogen',
    intrinsicResistanceAlert: 'Warning: Intrinsic resistance exists!',
    fluShort: 'FLU',
    vorShort: 'VOR',
    posShort: 'POS',
    isaShort: 'ISA',
    echShort: 'ECH',
    ambShort: 'L-AmB',
    fluFull: 'Fluconazole',
    vorFull: 'Voriconazole',
    posFull: 'Posaconazole',
    isaFull: 'Isavuconazole',
    echFull: 'Echinocandins',
    ambFull: 'Liposomal Amphotericin B'
  },
  de: {
    title: 'Antimykotische Behandlung',
    subtitle: 'Pharmakologische Eigenschaften, Spektrum und klinische Anwendung systemischer Antimykotika',
    searchPlaceholder: 'Suche nach Wirkstoff, Handelsname, Abkürzung, Gruppe oder Erreger...',
    allGroups: 'Alle Gruppen',
    groupAzoles: 'Azole',
    groupEchinocandins: 'Echinocandine',
    groupPolyenes: 'Polyene',
    halfLife: 'Halbwertszeit',
    effectType: 'Wirkungstyp',
    pae: 'Post-Antimykotischer Effekt (PAE)',
    spectrum: 'Antimykotisches Spektrum',
    specialFeature: 'Besondere Eigenschaft',
    mechanismOfAction: 'Wirkungsmechanismus',
    brandNames: 'Handelsnamen',
    abbreviation: 'Internationale Abkürzung',
    dosageAdult: 'Dosierung Erwachsene',
    dosagePediatric: 'Dosierung Kinder',
    dosageRenal: 'Niereninsuffizienz',
    dosageHepatic: 'Leberfunktionsstörung',
    indications: 'Hauptindikationen',
    sideEffects: 'Nebenwirkungen',
    practicalTips: 'Praktische Ratschläge',
    secGeneral: 'Allg. Infos',
    secDosage: 'Dosierung',
    secIndications: 'Spektrum & Indikationen',
    secSafety: 'Nebenwirkungen & Tipps',
    noResults: 'Keine Übereinstimmungen für Ihre Suchkriterien gefunden.',
    quickSummary: 'Hauptmerkmale',
    dosageGuidelines: 'Dosierungsrichtlinien',
    fungicide: 'Fungizid',
    fungistatic: 'Fungistatisch',
    activeFilters: 'Aktive Filter',
    clearFilters: 'Filter löschen',
    bookmarked: 'Gespeichert',
    bookmark: 'Als Lesezeichen speichern',
    details: 'Details anzeigen',

    // Antifungal Matrix Specific
    tabAgents: 'Antimykotische Wirkstoffe',
    tabMatrix: 'Resistenzmatrix',
    matrixPathogen: 'Pilzerreger',
    matrixOldNomenclature: 'Frühere Nomenklatur',
    matrixNewNomenclature: 'Neue Nomenklatur (Taxonomie)',
    matrixLegend: 'Legende',
    matrixS: 'Empfindlich (S)',
    matrixI: 'Intermediär / Dosisabhängig (I/S-DD)',
    matrixR: 'Resistent (R)',
    matrixSD: 'Keine Daten / Unwirksam (-)',
    yeasts: 'Hefepilze (Sprosszilze)',
    moulds: 'Schimmelpilze',
    allTypes: 'Alle Typen',
    pathogenDetails: 'Erregerdetails',
    pathogenType: 'Pilztyp',
    clinicalNotes: 'Klinische Hinweise',
    searchPathogenPlaceholder: 'Suche Pilzart oder frühere Bezeichnung...',
    clickForDetails: 'Klicken Sie auf eine Zeile für detaillierte klinische Hinweise!',
    selectedPathogenInfo: 'Detaillierte Analyse des ausgewählten Erregers',
    intrinsicResistanceAlert: 'Achtung: Intrinsische Resistenz liegt vor!',
    fluShort: 'FLU',
    vorShort: 'VOR',
    posShort: 'POS',
    isaShort: 'ISA',
    echShort: 'ECH',
    ambShort: 'L-AmB',
    fluFull: 'Fluconazol',
    vorFull: 'Voriconazol',
    posFull: 'Posaconazol',
    isaFull: 'Isavuconazol',
    echFull: 'Echinocandine',
    ambFull: 'Liposomales Amphotericin B'
  }
};

// Interface for Pathogen data in the susceptibility matrix
interface MatrixPathogen {
  id: string;
  name: string; // Current or new taxonomical name
  oldName?: string; // Former common name
  type: 'yeast' | 'mould';
  susceptibilities: {
    flu: 'S' | 'I' | 'R' | '-';
    vor: 'S' | 'I' | 'R' | '-';
    pos: 'S' | 'I' | 'R' | '-';
    isa: 'S' | 'I' | 'R' | '-';
    ech: 'S' | 'I' | 'R' | '-';
    amb: 'S' | 'I' | 'R' | '-';
  };
  notes: {
    hu: string;
    en: string;
    de: string;
  };
  hasIntrinsicResistance?: boolean;
}

// Medically accurate, expert-vetted antifungal susceptibility data (incorporating taxonomy changes)
const matrixData: MatrixPathogen[] = [
  {
    id: 'c_albicans',
    name: 'Candida albicans',
    type: 'yeast',
    susceptibilities: { flu: 'S', vor: 'S', pos: 'S', isa: 'S', ech: 'S', amb: 'S' },
    notes: {
      hu: 'Általában kiválóan érzékeny az összes antifungális szerre. Rezisztencia ritka, leggyakrabban tartós, ismételt azol-profilaxis vagy kezelés után alakul ki.',
      en: 'Generally highly susceptible to all antifungal agents. Resistance is rare and typically develops after prolonged or repeated azole prophylaxis or therapy.',
      de: 'Generell sehr empfindlich gegenüber allen Antimykotika. Resistenzen sind selten und entwickeln sich meist nach längerer oder wiederholter Azol-Prophylaxe oder -Therapie.'
    }
  },
  {
    id: 'c_glabrata',
    name: 'Nakaseomyces glabrata',
    oldName: 'Candida glabrata',
    type: 'yeast',
    susceptibilities: { flu: 'I', vor: 'I', pos: 'I', isa: 'I', ech: 'S', amb: 'S' },
    notes: {
      hu: 'Hatóanyag-érzékenysége csökkent a legtöbb azolra. A Fluconazol dózisfüggően hatásos (S-DD) vagy rezisztens (I/R), emiatt az echinokandinok az elsővonalbeli választandó szerek szisztémás fertőzésben.',
      en: 'Reduced susceptibility to most azoles. Fluconazole is dose-dependent susceptible (S-DD) or resistant (I/R). Echinocandins are first-line agents for systemic infections.',
      de: 'Reduzierte Empfindlichkeit gegenüber den meisten Azolen. Fluconazol ist dosisabhängig empfindlich (S-DD) oder resistent (I/R). Echinocandine sind die bevorzugte Erstlinientherapie bei systemischen Infektionen.'
    }
  },
  {
    id: 'c_krusei',
    name: 'Pichia kudriavzevii',
    oldName: 'Candida krusei',
    type: 'yeast',
    susceptibilities: { flu: 'R', vor: 'S', pos: 'S', isa: 'S', ech: 'S', amb: 'S' },
    hasIntrinsicResistance: true,
    notes: {
      hu: 'Fluconazolra ELEVE (inherens módon) REZISZTENS kórokozó! Más azolok (Voriconazol), echinokandinok és Amphotericin B általában megbízhatóan és jól hatnak rá.',
      en: 'INTRINSICALLY RESISTANT to Fluconazole! Other azoles (Voriconazole), echinocandins, and Amphotericin B are usually reliable and highly active.',
      de: 'INTRINSISCH RESISTENT gegen Fluconazol! Andere Azole (Voriconazol), Echinocandine und Amphotericin B sind in der Regel zuverlässig und gut wirksam.'
    }
  },
  {
    id: 'c_parapsilosis',
    name: 'Candida parapsilosis',
    type: 'yeast',
    susceptibilities: { flu: 'S', vor: 'S', pos: 'S', isa: 'S', ech: 'I', amb: 'S' },
    notes: {
      hu: 'Gyakran magasabb echinokandin MIC (minimális gátló koncentráció) értékekkel rendelkezik (melyet mérsékelten érzékenyként / I-ként jelölünk), de klinikailag sokszor hatásos. Azolokra és Amphotericin B-re kiválóan érzékeny.',
      en: 'Often exhibits higher echinocandin MICs (often classified as intermediate or S-DD), but remains clinically active in many cases. Excellent susceptibility to azoles and Amphotericin B.',
      de: 'Zeigt oft höhere Echinocandin-MHK-Werte (häufig als intermediär eingestuft), bleibt aber klinisch oft wirksam. Hervorragende Empfindlichkeit gegenüber Azolen und Amphotericin B.'
    }
  },
  {
    id: 'c_tropicalis',
    name: 'Candida tropicalis',
    type: 'yeast',
    susceptibilities: { flu: 'S', vor: 'S', pos: 'S', isa: 'S', ech: 'S', amb: 'S' },
    notes: {
      hu: 'Általában jó érzékenység jellemzi, de az azol-rezisztens törzsek aránya világszerte fokozatosan növekszik (főleg onkohematológiai osztályokon).',
      en: 'Generally shows good susceptibility, but the prevalence of azole-resistant strains is increasing worldwide, particularly in oncology and hematology wards.',
      de: 'Zeigt im Allgemeinen eine gute Empfindlichkeit, aber die Häufigkeit Azol-resistenter Stämme nimmt weltweit zu, insbesondere auf onkologischen und hämatologischen Stationen.'
    }
  },
  {
    id: 'c_lusitaniae',
    name: 'Clavispora lusitaniae',
    oldName: 'Candida lusitaniae',
    type: 'yeast',
    susceptibilities: { flu: 'S', vor: 'S', pos: 'S', isa: 'S', ech: 'S', amb: 'R' },
    hasIntrinsicResistance: true,
    notes: {
      hu: 'Különlegessége, hogy nagyon könnyen fejleszt ki rezisztenciát Amphotericin B-re, vagy eleve csökkent érzékenységet mutat rá. Azolok és echinokandinok az elsővonalbeli szerek.',
      en: 'Uniquely prone to developing rapid resistance to Amphotericin B, or can even be intrinsically resistant. Azoles and echinocandins are preferred first-line choices.',
      de: 'Neigt in einzigartiger Weise zur schnellen Entwicklung von Resistenzen gegen Amphotericin B oder kann sogar intrinsisch resistent sein. Azole und Echinocandine sind die bevorzugte Wahl.'
    }
  },
  {
    id: 'c_auris',
    name: 'Candida auris',
    type: 'yeast',
    susceptibilities: { flu: 'R', vor: 'I', pos: 'I', isa: 'I', ech: 'S', amb: 'I' },
    hasIntrinsicResistance: true,
    notes: {
      hu: 'Világszerte terjedő, multirezisztens (MDR) kórokozó. Fluconazolra szinte mindig teljesen rezisztens. Amphotericin B-re és más azolokra is gyakran erősen csökkent érzékenységű. Elsővonalban echinokandinok adandók.',
      en: 'Globally emerging multidrug-resistant (MDR) pathogen. Nearly always fully resistant to Fluconazole. Often shows reduced susceptibility to Amphotericin B and other azoles. Echinocandins are first-line.',
      de: 'Weltweit aufstrebender, multiresistenter (MDR) Erreger. Fast immer vollständig resistent gegen Fluconazol. Zeigt oft eine verminderte Empfindlichkeit gegenüber Amphotericin B und anderen Azolen. Echinocandine sind First-Line.'
    }
  },
  {
    id: 'cryptococcus',
    name: 'Cryptococcus neoformans',
    type: 'yeast',
    susceptibilities: { flu: 'S', vor: 'S', pos: 'S', isa: 'S', ech: 'R', amb: 'S' },
    hasIntrinsicResistance: true,
    notes: {
      hu: 'Echinokandinokra ELEVE REZISZTENS (nincs célpont sejtfal-glükán)! Súlyos meningitisben Liposomalis Amphotericin B + Flucytosin kombináció az arany standard indukció, majd Fluconazol fenntartás.',
      en: 'INTRINSICALLY RESISTANT to echinocandins (lacks target cell wall glucan)! Gold standard induction for severe meningitis is Liposomal Amphotericin B + Flucytosine, followed by Fluconazole maintenance.',
      de: 'INTRINSISCH RESISTENT gegen Echinocandine (kein Ziel-Zellwand-Glucan vorhanden)! Goldstandard-Induktion bei schwerer Meningitis ist liposomales Amphotericin B + Flucytosin, gefolgt von einer Fluconazol-Erhaltungstherapie.'
    }
  },
  {
    id: 'a_fumigatus',
    name: 'Aspergillus fumigatus',
    type: 'mould',
    susceptibilities: { flu: 'R', vor: 'S', pos: 'S', isa: 'S', ech: 'I', amb: 'S' },
    hasIntrinsicResistance: true,
    notes: {
      hu: 'A leggyakoribb fonalas gomba. Fluconazolra teljesen hatástalan (minden Aspergillus rezisztens rá!). Elsővonalbeli kezelése Voriconazol, alternatívaként Isavuconazol, Posaconazol vagy L-AmB.',
      en: 'The most common filamentous fungus. Fluconazole is completely inactive (all Aspergillus are resistant!). First-line treatment is Voriconazole; alternatives include Isavuconazole, Posaconazole, or L-AmB.',
      de: 'Der häufigste Schimmelpilz. Fluconazol ist völlig unwirksam (alle Aspergillus-Arten sind dagegen resistent!). Erstlinientherapie ist Voriconazol; Alternativen sind Isavuconazol, Posaconazol oder L-AmB.'
    }
  },
  {
    id: 'a_terreus',
    name: 'Aspergillus terreus',
    type: 'mould',
    susceptibilities: { flu: 'R', vor: 'S', pos: 'S', isa: 'S', ech: 'I', amb: 'R' },
    hasIntrinsicResistance: true,
    notes: {
      hu: 'Klinikailag kiemelten fontos, hogy Amphotericin B-re ELEVE REZISZTENS! Voriconazol vagy Isavuconazol / Posaconazol az elsőként választandó szer.',
      en: 'Clinically crucial: INTRINSICALLY RESISTANT to Amphotericin B! Voriconazole, Isavuconazole, or Posaconazole are the primary drugs of choice.',
      de: 'Klinisch extrem wichtig: INTRINSISCH RESISTENT gegen Amphotericin B! Voriconazol, Isavuconazol oder Posaconazol sind die primäre Wahl.'
    }
  },
  {
    id: 'mucorales',
    name: 'Mucorales (Rhizopus, Mucor spp.)',
    type: 'mould',
    susceptibilities: { flu: 'R', vor: 'R', pos: 'S', isa: 'S', ech: 'R', amb: 'S' },
    hasIntrinsicResistance: true,
    notes: {
      hu: 'Igen agresszív penészgombák (mucormycosis). Kizárólag Liposomalis Amphotericin B, Posaconazol és Isavuconazol hatékonyak ellenük. Voriconazolra és echinokandinokra teljesen hatástalanok!',
      en: 'Very aggressive moulds causing mucormycosis. Only Liposomal Amphotericin B, Posaconazole, and Isavuconazole are active. Completely resistant to Voriconazole and echinocandins!',
      de: 'Sehr aggressive Schimmelpilze (Mukormykose). Nur liposomales Amphotericin B, Posaconazol und Isavuconazol sind wirksam. Völlig resistent gegen Voriconazol und Echinocandine!'
    }
  },
  {
    id: 'fusarium',
    name: 'Fusarium species',
    type: 'mould',
    susceptibilities: { flu: 'R', vor: 'I', pos: 'R', isa: 'R', ech: 'R', amb: 'I' },
    hasIntrinsicResistance: true,
    notes: {
      hu: 'Kiemelkedően ellenálló gombafajok. Az azolok és az Amphotericin B hatékonysága is korlátozott és változó. Gyakran magas dózisú Voriconazolt és L-AmB-t kombinálnak.',
      en: 'Highly resistant fungi. Susceptibility to azoles and Amphotericin B is limited and highly variable. Often managed with high-dose Voriconazole and L-AmB, sometimes in combination.',
      de: 'Extrem resistente Pilze. Die Empfindlichkeit gegenüber Azolen und Amphotericin B ist begrenzt und sehr variabel. Häufig wird mit hochdosiertem Voriconazol und L-AmB (oft kombiniert) therapiert.'
    }
  },
  {
    id: 'scedosporium',
    name: 'Scedosporium species',
    type: 'mould',
    susceptibilities: { flu: 'R', vor: 'S', pos: 'I', isa: 'I', ech: 'R', amb: 'R' },
    hasIntrinsicResistance: true,
    notes: {
      hu: 'Amphotericin B-re rezisztens! A Voriconazol az elsővonalbeli "gold standard" terápia (Scedosporium apiospermum esetén). Súlyos fertőzések kezelése kihívást jelent.',
      en: 'Resistant to Amphotericin B! Voriconazole is the first-line gold standard therapy (especially for Scedosporium apiospermum). Treatment of severe infections is highly challenging.',
      de: 'Resistent gegen Amphotericin B! Voriconazol ist der First-Line-Goldstandard (insbesondere bei Scedosporium apiospermum). Die Behandlung schwerer Infektionen ist eine große Herausforderung.'
    }
  }
];

export default function AntifungalView() {
  const { language } = useLanguage();
  const currentLabels = labels[language] || labels.hu;

  const [viewMode, setViewMode] = useState<'agents' | 'matrix'>('agents');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [activeCardTabs, setActiveCardTabs] = useState<Record<string, 'general' | 'spectrum' | 'dosage' | 'safety'>>({});
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    const saved = localStorage.getItem('antifungal_bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  // Antifungal Matrix specific states
  const [matrixSearchQuery, setMatrixSearchQuery] = useState('');
  const [matrixTypeFilter, setMatrixTypeFilter] = useState<'all' | 'yeast' | 'mould'>('all');
  const [selectedPathogen, setSelectedPathogen] = useState<MatrixPathogen | null>(matrixData[0]);

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarks(prev => {
      const updated = prev.includes(id) ? prev.filter(bId => bId !== id) : [...prev, id];
      localStorage.setItem('antifungal_bookmarks', JSON.stringify(updated));
      return updated;
    });
  };

  const getCardTab = (drugId: string) => {
    return activeCardTabs[drugId] || 'general';
  };

  const setCardTab = (drugId: string, tab: 'general' | 'spectrum' | 'dosage' | 'safety') => {
    setActiveCardTabs(prev => ({ ...prev, [drugId]: tab }));
  };

  // Check if group is matched (for drug list)
  const matchesGroup = (drug: AntifungalData, groupKey: string) => {
    if (groupKey === 'all') return true;
    const lowerGroup = drug.group.en.toLowerCase();
    if (groupKey === 'azoles') return lowerGroup.includes('azole');
    if (groupKey === 'echinocandins') return lowerGroup.includes('echinocandin');
    if (groupKey === 'polyenes') return lowerGroup.includes('polyene');
    return true;
  };

  // Filter antifungals based on search and selected group
  const filteredAntifungals = antifungalsData.filter(drug => {
    const query = searchQuery.toLowerCase().trim();
    const groupMatch = matchesGroup(drug, selectedGroup);
    
    if (!query) return groupMatch;

    const nameMatch = drug.name.toLowerCase().includes(query);
    const abbrMatch = drug.abbreviation ? drug.abbreviation.toLowerCase().includes(query) : false;
    const brandMatch = drug.brandNames ? drug.brandNames.toLowerCase().includes(query) : false;
    const groupNameMatch = (drug.group[language] || '').toLowerCase().includes(query);
    const spectrumMatch = (drug.spectrum[language] || '').toLowerCase().includes(query);
    const indicationsMatch = drug.indications[language]?.some(ind => ind.toLowerCase().includes(query)) || false;
    const mechanismMatch = (drug.mechanismOfAction[language] || '').toLowerCase().includes(query);

    return groupMatch && (nameMatch || abbrMatch || brandMatch || groupNameMatch || spectrumMatch || indicationsMatch || mechanismMatch);
  });

  // Filter matrix pathogens based on search and type
  const filteredPathogens = matrixData.filter(pathogen => {
    const query = matrixSearchQuery.toLowerCase().trim();
    const matchesType = matrixTypeFilter === 'all' || pathogen.type === matrixTypeFilter;
    if (!query) return matchesType;

    const nameMatch = pathogen.name.toLowerCase().includes(query);
    const oldNameMatch = pathogen.oldName ? pathogen.oldName.toLowerCase().includes(query) : false;
    const notesMatch = pathogen.notes[language].toLowerCase().includes(query);

    return matchesType && (nameMatch || oldNameMatch || notesMatch);
  });

  // Get active effect type string & color
  const getEffectTypeDetails = (effectStr: string) => {
    const lower = effectStr.toLowerCase();
    const isFungicidal = lower.includes('fungicid') || lower.includes('fungicidal');
    return {
      label: isFungicidal ? currentLabels.fungicide : currentLabels.fungistatic,
      className: isFungicidal 
        ? 'bg-rose-50 text-rose-700 border-rose-200' 
        : 'bg-amber-50 text-amber-700 border-amber-200'
    };
  };

  // Helper to render colored badges for susceptibility scores
  const renderSusceptibilityCell = (score: 'S' | 'I' | 'R' | '-') => {
    switch (score) {
      case 'S':
        return (
          <span className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs bg-emerald-50 text-emerald-700 border border-emerald-200/60 shadow-xs" title={currentLabels.matrixS}>
            S
          </span>
        );
      case 'I':
        return (
          <span className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs bg-amber-50 text-amber-700 border border-amber-200/60 shadow-xs" title={currentLabels.matrixI}>
            I
          </span>
        );
      case 'R':
        return (
          <span className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs bg-rose-50 text-rose-700 border border-rose-200/60 shadow-xs animate-pulse" title={currentLabels.matrixR}>
            R
          </span>
        );
      case '-':
      default:
        return (
          <span className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs bg-slate-50 text-slate-400 border border-slate-200/40" title={currentLabels.matrixSD}>
            -
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* View Header */}
      <div className="border-b border-slate-100 pb-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <span className="p-1.5 bg-blue-50 text-blue-600 rounded-lg border border-blue-100 inline-block">
                <Flame className="w-5.5 h-5.5 fill-blue-100 animate-pulse" />
              </span>
              {currentLabels.title}
            </h2>
            <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-3xl">
              {currentLabels.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Primary Sub-navigation Tabs: Switcher between Drug Cards and Interactive Matrix */}
      <div className="flex border-b border-slate-200">
        <button
          onClick={() => setViewMode('agents')}
          className={`flex items-center gap-2 px-5 py-3 text-xs font-bold border-b-2 transition-all duration-150 cursor-pointer ${
            viewMode === 'agents'
              ? 'border-blue-600 text-blue-600 font-extrabold bg-blue-50/10'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Pill className="w-4 h-4" />
          {currentLabels.tabAgents}
        </button>
        <button
          onClick={() => setViewMode('matrix')}
          className={`flex items-center gap-2 px-5 py-3 text-xs font-bold border-b-2 transition-all duration-150 cursor-pointer ${
            viewMode === 'matrix'
              ? 'border-blue-600 text-blue-600 font-extrabold bg-blue-50/10'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Layers className="w-4 h-4" />
          {currentLabels.tabMatrix}
        </button>
      </div>

      {/* RENDER MODE: AGENTS (Original Drug Cards) */}
      {viewMode === 'agents' && (
        <>
          {/* Control Panel: Search & Filters */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center bg-slate-50/60 p-4 rounded-2xl border border-slate-200/60">
            {/* Search Bar */}
            <div className="relative lg:col-span-6">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={currentLabels.searchPlaceholder}
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none shadow-xs text-slate-800"
              />
            </div>

            {/* Group Filter Pills */}
            <div className="lg:col-span-6 flex flex-wrap gap-1.5 justify-start lg:justify-end">
              {[
                { id: 'all', label: currentLabels.allGroups },
                { id: 'azoles', label: currentLabels.groupAzoles },
                { id: 'echinocandins', label: currentLabels.groupEchinocandins },
                { id: 'polyenes', label: currentLabels.groupPolyenes }
              ].map(group => (
                <button
                  key={group.id}
                  onClick={() => setSelectedGroup(group.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all duration-150 cursor-pointer ${
                    selectedGroup === group.id
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {group.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Filters Summary */}
          {(searchQuery || selectedGroup !== 'all') && (
            <div className="flex items-center justify-between text-xs bg-blue-50/40 px-4 py-2.5 rounded-xl border border-blue-100/60">
              <div className="flex items-center gap-2 text-slate-600">
                <span className="font-bold text-[10px] uppercase tracking-wider text-slate-400">{currentLabels.activeFilters}:</span>
                {selectedGroup !== 'all' && (
                  <span className="bg-white border border-slate-200 px-2.5 py-0.5 rounded-lg font-bold text-slate-700">
                    {selectedGroup === 'azoles' && currentLabels.groupAzoles}
                    {selectedGroup === 'echinocandins' && currentLabels.groupEchinocandins}
                    {selectedGroup === 'polyenes' && currentLabels.groupPolyenes}
                  </span>
                )}
                {searchQuery && (
                  <span className="bg-white border border-slate-200 px-2.5 py-0.5 rounded-lg font-bold text-slate-700 max-w-[150px] truncate">
                    &ldquo;{searchQuery}&rdquo;
                  </span>
                )}
              </div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedGroup('all');
                }}
                className="text-blue-600 hover:text-blue-500 font-bold transition-colors cursor-pointer"
              >
                {currentLabels.clearFilters}
              </button>
            </div>
          )}

          {/* Drugs Content Grid */}
          {filteredAntifungals.length > 0 ? (
            <div className="space-y-6">
              {filteredAntifungals.map(drug => {
                const currentTab = getCardTab(drug.id);
                const isBookmarked = bookmarks.includes(drug.id);
                const effectInfo = getEffectTypeDetails(drug.effectType[language]);

                return (
                  <div 
                    key={drug.id}
                    className="bg-white border border-slate-200/80 rounded-2xl shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden"
                  >
                    {/* Drug Header */}
                    <div className="p-4 md:p-5 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">
                            <Pill className="w-4.5 h-4.5" />
                          </span>
                          <h3 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2 flex-wrap">
                            {drug.name}
                            {drug.abbreviation && (
                              <span className="bg-blue-100 text-blue-700 font-mono text-xs px-2 py-0.5 rounded border border-blue-200 uppercase font-extrabold">
                                {drug.abbreviation}
                              </span>
                            )}
                          </h3>
                          {/* Effect Type Badge */}
                          <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider border ${effectInfo.className}`}>
                            {effectInfo.label}
                          </span>
                        </div>
                        {drug.brandNames && (
                          <p className="text-xs text-slate-500 font-medium italic pl-8">
                            {currentLabels.brandNames}: <span className="font-semibold text-slate-700">{drug.brandNames}</span>
                          </p>
                        )}
                        <p className="text-xs text-slate-400 font-bold tracking-wide pl-8">
                          {drug.group[language]}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-center">
                        {/* Bookmark trigger */}
                        <button
                          onClick={(e) => toggleBookmark(drug.id, e)}
                          title={isBookmarked ? currentLabels.bookmarked : currentLabels.bookmark}
                          className={`p-2 rounded-xl border transition-all duration-150 cursor-pointer active:scale-95 ${
                            isBookmarked 
                              ? 'bg-amber-50 text-amber-500 border-amber-200' 
                              : 'bg-white text-slate-400 border-slate-200 hover:bg-slate-50 hover:text-slate-600'
                          }`}
                        >
                          <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400' : ''}`} />
                        </button>
                      </div>
                    </div>

                    {/* Card Inner Tabs Navigation */}
                    <div className="border-b border-slate-100 flex overflow-x-auto bg-white/70">
                      {[
                        { id: 'general', label: currentLabels.secGeneral, icon: Info },
                        { id: 'spectrum', label: currentLabels.secIndications, icon: BookOpen },
                        { id: 'dosage', label: currentLabels.secDosage, icon: Zap },
                        { id: 'safety', label: currentLabels.secSafety, icon: Shield }
                      ].map(tab => {
                        const TabIcon = tab.icon;
                        const isActive = currentTab === tab.id;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => setCardTab(drug.id, tab.id as any)}
                            className={`flex items-center gap-1.5 px-4 py-3 border-b-2 text-xs font-bold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                              isActive
                                ? 'border-blue-600 text-blue-600 bg-blue-50/10'
                                : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50/40'
                            }`}
                          >
                            <TabIcon className="w-3.5 h-3.5" />
                            {tab.label}
                          </button>
                        );
                      })}
                    </div>

                    {/* Card Content Based on Active Inner Tab */}
                    <div className="p-5 min-h-[180px]">
                      {/* General Tab */}
                      {currentTab === 'general' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
                          <div className="space-y-4">
                            {drug.brandNames && (
                              <div className="space-y-1">
                                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                                  {currentLabels.brandNames}
                                </span>
                                <p className="font-bold text-slate-800 italic">
                                  {drug.brandNames}
                                </p>
                              </div>
                            )}

                            <div className="space-y-1">
                              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                                {currentLabels.halfLife}
                              </span>
                              <p className="font-semibold text-slate-700 flex items-center gap-1.5">
                                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                                {drug.halfLife[language]}
                              </p>
                            </div>

                            <div className="space-y-1">
                              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                                {currentLabels.effectType}
                              </span>
                              <p className="font-semibold text-slate-700 flex items-center gap-1.5">
                                <Activity className="w-4 h-4 text-slate-400 shrink-0" />
                                {drug.effectType[language]}
                              </p>
                            </div>

                            <div className="space-y-1">
                              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                                {currentLabels.pae}
                              </span>
                              <p className="font-semibold text-slate-700 leading-relaxed">
                                {drug.pae[language]}
                              </p>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div className="bg-blue-50/40 border border-blue-100/50 rounded-xl p-3.5 space-y-1.5">
                              <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-wider block flex items-center gap-1">
                                <Zap className="w-3.5 h-3.5 fill-blue-50" />
                                {currentLabels.specialFeature}
                              </span>
                              <p className="font-bold text-slate-700 leading-relaxed">
                                {drug.specialFeature[language]}
                              </p>
                            </div>

                            <div className="space-y-1">
                              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                                {currentLabels.mechanismOfAction}
                              </span>
                              <p className="font-semibold text-slate-600 leading-relaxed text-justify">
                                {drug.mechanismOfAction[language]}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Spectrum & Indications Tab */}
                      {currentTab === 'spectrum' && (
                        <div className="space-y-5 text-xs">
                          <div className="space-y-1.5 bg-emerald-50/30 border border-emerald-100/40 p-4 rounded-xl">
                            <span className="text-[10px] font-extrabold text-emerald-600 uppercase tracking-wider block">
                              {currentLabels.spectrum}
                            </span>
                            <p className="font-bold text-slate-700 leading-relaxed">
                              {drug.spectrum[language]}
                            </p>
                          </div>

                          <div className="space-y-2">
                            <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                              {currentLabels.indications}
                            </span>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {drug.indications[language]?.map((ind, idx) => (
                                <div key={idx} className="flex items-start gap-2 bg-slate-50 border border-slate-100 p-2.5 rounded-lg">
                                  <span className="mt-0.5 bg-blue-100 text-blue-700 w-4 h-4 rounded-full flex items-center justify-center shrink-0 font-bold text-[9px]">
                                    {idx + 1}
                                  </span>
                                  <span className="font-semibold text-slate-700">{ind}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Dosage Guidelines Tab */}
                      {currentTab === 'dosage' && (
                        <div className="space-y-4 text-xs">
                          <div className="flex items-center gap-1.5 border-b border-slate-100 pb-2">
                            <span className="font-bold text-[10px] uppercase tracking-wider text-slate-400">
                              {currentLabels.dosageGuidelines}
                            </span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Adult */}
                            <div className="space-y-1 bg-slate-50 border border-slate-100 p-3 rounded-xl">
                              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                                {currentLabels.dosageAdult}
                              </span>
                              <p className="font-bold text-slate-700 leading-relaxed">
                                {drug.dosage.adult[language]}
                              </p>
                            </div>

                            {/* Pediatric */}
                            <div className="space-y-1 bg-slate-50 border border-slate-100 p-3 rounded-xl">
                              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                                {currentLabels.dosagePediatric}
                              </span>
                              <p className="font-semibold text-slate-700 leading-relaxed">
                                {drug.dosage.pediatric[language]}
                              </p>
                            </div>

                            {/* Renal */}
                            <div className="space-y-1 bg-amber-50/20 border border-amber-100 p-3 rounded-xl">
                              <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-wider block flex items-center gap-1">
                                <AlertTriangle className="w-3.5 h-3.5" />
                                {currentLabels.dosageRenal}
                              </span>
                              <p className="font-semibold text-slate-700 leading-relaxed">
                                {drug.dosage.renal[language]}
                              </p>
                            </div>

                            {/* Hepatic */}
                            <div className="space-y-1 bg-amber-50/20 border border-amber-100 p-3 rounded-xl">
                              <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-wider block flex items-center gap-1">
                                <AlertTriangle className="w-3.5 h-3.5" />
                                {currentLabels.dosageHepatic}
                              </span>
                              <p className="font-semibold text-slate-700 leading-relaxed">
                                {drug.dosage.hepatic[language]}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Safety & Side Effects Tab */}
                      {currentTab === 'safety' && (
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 text-xs">
                          {/* Side Effects */}
                          <div className="md:col-span-6 space-y-2">
                            <span className="text-[10px] font-extrabold text-red-500 uppercase tracking-wider block">
                              {currentLabels.sideEffects}
                            </span>
                            <div className="space-y-1.5">
                              {drug.sideEffects[language]?.map((effect, idx) => (
                                <div key={idx} className="flex items-start gap-2 bg-rose-50/30 border border-rose-100/40 p-2.5 rounded-lg">
                                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                                  <span className="font-semibold text-slate-700">{effect}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Practical Tips */}
                          <div className="md:col-span-6 space-y-2">
                            <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-wider block">
                              {currentLabels.practicalTips}
                            </span>
                            <div className="space-y-1.5">
                              {drug.practicalTips[language]?.map((tip, idx) => (
                                <div key={idx} className="flex items-start gap-2 bg-blue-50/30 border border-blue-100/40 p-2.5 rounded-lg">
                                  <span className="mt-0.5 text-blue-600 shrink-0">
                                    <Check className="w-4 h-4" />
                                  </span>
                                  <span className="font-semibold text-slate-700 leading-relaxed">{tip}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-12 bg-slate-50 border border-slate-200/50 rounded-2xl">
              <Info className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h3 className="font-extrabold text-sm text-slate-700 mb-1">{currentLabels.noResults}</h3>
              <p className="text-xs text-slate-400">{labels[language]?.searchPlaceholder || labels.hu.searchPlaceholder}</p>
            </div>
          )}
        </>
      )}

      {/* RENDER MODE: MATRIX (Antifungal Susceptibility Matrix) */}
      {viewMode === 'matrix' && (
        <div className="space-y-6">
          {/* Matrix Controls & Filters */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center bg-slate-50/60 p-4 rounded-2xl border border-slate-200/60">
            {/* Pathogen Search Bar */}
            <div className="relative lg:col-span-6">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={matrixSearchQuery}
                onChange={(e) => setMatrixSearchQuery(e.target.value)}
                placeholder={currentLabels.searchPathogenPlaceholder}
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none shadow-xs text-slate-800"
              />
            </div>

            {/* Pathogen Type Filter */}
            <div className="lg:col-span-6 flex flex-wrap gap-1.5 justify-start lg:justify-end">
              {[
                { id: 'all', label: currentLabels.allTypes },
                { id: 'yeast', label: currentLabels.yeasts },
                { id: 'mould', label: currentLabels.moulds }
              ].map(type => (
                <button
                  key={type.id}
                  onClick={() => setMatrixTypeFilter(type.id as any)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all duration-150 cursor-pointer ${
                    matrixTypeFilter === type.id
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Matrix Table */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <Info className="w-4 h-4 text-slate-400" />
                {currentLabels.clickForDetails}
              </span>
              <div className="flex flex-wrap gap-3 text-[10px] font-bold text-slate-500">
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center text-[8px] font-black">S</span>
                  <span>{currentLabels.matrixS}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center text-[8px] font-black">I</span>
                  <span>{currentLabels.matrixI}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded bg-rose-50 text-rose-700 border border-rose-200 flex items-center justify-center text-[8px] font-black">R</span>
                  <span>{currentLabels.matrixR}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded bg-slate-50 text-slate-400 border border-slate-200 flex items-center justify-center text-[8px] font-black">-</span>
                  <span>{currentLabels.matrixSD}</span>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100/55 border-b border-slate-200 text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">
                    <th className="py-3.5 px-4 min-w-[200px]">{currentLabels.matrixPathogen}</th>
                    <th className="py-3.5 px-3 text-center w-16" title={currentLabels.fluFull}>{currentLabels.fluShort}</th>
                    <th className="py-3.5 px-3 text-center w-16" title={currentLabels.vorFull}>{currentLabels.vorShort}</th>
                    <th className="py-3.5 px-3 text-center w-16" title={currentLabels.posFull}>{currentLabels.posShort}</th>
                    <th className="py-3.5 px-3 text-center w-16" title={currentLabels.isaFull}>{currentLabels.isaShort}</th>
                    <th className="py-3.5 px-3 text-center w-16" title={currentLabels.echFull}>{currentLabels.echShort}</th>
                    <th className="py-3.5 px-3 text-center w-16" title={currentLabels.ambFull}>{currentLabels.ambShort}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {filteredPathogens.length > 0 ? (
                    filteredPathogens.map((pathogen) => {
                      const isSelected = selectedPathogen?.id === pathogen.id;
                      return (
                        <tr
                          key={pathogen.id}
                          onClick={() => setSelectedPathogen(pathogen)}
                          className={`hover:bg-blue-50/20 cursor-pointer transition-colors ${
                            isSelected ? 'bg-blue-50/40 font-bold' : ''
                          }`}
                        >
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              {pathogen.hasIntrinsicResistance && (
                                <span className="p-0.5 bg-amber-50 text-amber-500 rounded border border-amber-200 inline-block" title={currentLabels.intrinsicResistanceAlert}>
                                  <AlertTriangle className="w-3 h-3" />
                                </span>
                              )}
                              <div>
                                <span className="italic font-bold text-slate-800 block">{pathogen.name}</span>
                                {pathogen.oldName && (
                                  <span className="text-[10px] text-slate-400 block font-normal">
                                    {currentLabels.matrixOldNomenclature}: <span className="italic font-semibold">{pathogen.oldName}</span>
                                  </span>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-3 text-center">{renderSusceptibilityCell(pathogen.susceptibilities.flu)}</td>
                          <td className="py-3 px-3 text-center">{renderSusceptibilityCell(pathogen.susceptibilities.vor)}</td>
                          <td className="py-3 px-3 text-center">{renderSusceptibilityCell(pathogen.susceptibilities.pos)}</td>
                          <td className="py-3 px-3 text-center">{renderSusceptibilityCell(pathogen.susceptibilities.isa)}</td>
                          <td className="py-3 px-3 text-center">{renderSusceptibilityCell(pathogen.susceptibilities.ech)}</td>
                          <td className="py-3 px-3 text-center">{renderSusceptibilityCell(pathogen.susceptibilities.amb)}</td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={7} className="py-8 text-center text-slate-400 font-semibold">
                        {currentLabels.noResults}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Detailed Selected Pathogen Clinical Information Panel */}
          {selectedPathogen && (
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4 shadow-xs animate-fadeIn">
              <div className="flex items-start justify-between border-b border-slate-200/60 pb-3">
                <div className="space-y-1">
                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-md inline-block">
                    {selectedPathogen.type === 'yeast' ? currentLabels.yeasts : currentLabels.moulds}
                  </span>
                  <h4 className="text-base font-black text-slate-900 tracking-tight italic flex items-center gap-2">
                    {selectedPathogen.name}
                    {selectedPathogen.oldName && (
                      <span className="text-xs text-slate-400 not-italic font-bold">
                        (ex: {selectedPathogen.oldName})
                      </span>
                    )}
                  </h4>
                </div>
                <button
                  onClick={() => setSelectedPathogen(null)}
                  className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/50 transition-all cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Grid of Drug profiles for this Pathogen */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                {[
                  { key: 'flu', full: currentLabels.fluFull, short: currentLabels.fluShort },
                  { key: 'vor', full: currentLabels.vorFull, short: currentLabels.vorShort },
                  { key: 'pos', full: currentLabels.posFull, short: currentLabels.posShort },
                  { key: 'isa', full: currentLabels.isaFull, short: currentLabels.isaShort },
                  { key: 'ech', full: currentLabels.echFull, short: currentLabels.echShort },
                  { key: 'amb', full: currentLabels.ambFull, short: currentLabels.ambShort }
                ].map(drug => {
                  const val = selectedPathogen.susceptibilities[drug.key as keyof typeof selectedPathogen.susceptibilities];
                  let bgCol = 'bg-slate-100 border-slate-200 text-slate-500';
                  let status = currentLabels.matrixSD;
                  if (val === 'S') { bgCol = 'bg-emerald-50 border-emerald-200 text-emerald-800'; status = currentLabels.matrixS; }
                  else if (val === 'I') { bgCol = 'bg-amber-50 border-amber-200 text-amber-800'; status = currentLabels.matrixI; }
                  else if (val === 'R') { bgCol = 'bg-rose-50 border-rose-200 text-rose-800'; status = currentLabels.matrixR; }

                  return (
                    <div key={drug.key} className={`border p-2.5 rounded-xl flex flex-col justify-between h-18 transition-all ${bgCol}`}>
                      <span className="text-[10px] font-black block truncate leading-none mb-1">{drug.short}</span>
                      <div className="flex items-baseline justify-between gap-1 mt-auto">
                        <span className="text-base font-extrabold leading-none">{val}</span>
                        <span className="text-[8px] font-bold opacity-80 max-w-[55px] truncate">{status.split('(')[0].trim()}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Expert Clinical Notes */}
              <div className="bg-white border border-slate-200/80 p-4 rounded-xl space-y-2">
                <h5 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                  {currentLabels.clinicalNotes}
                </h5>
                <p className="text-xs font-semibold text-slate-700 leading-relaxed text-justify">
                  {selectedPathogen.notes[language]}
                </p>
                {selectedPathogen.hasIntrinsicResistance && (
                  <div className="mt-2.5 flex items-start gap-2 bg-amber-50 border border-amber-200/60 p-2.5 rounded-lg text-[11px] font-bold text-amber-800 leading-relaxed">
                    <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>{currentLabels.intrinsicResistanceAlert} {language === 'hu' ? 'Különösen figyeljen az S/I/R besorolásra a fenti sorban!' : 'Pay close attention to S/I/R listings.'}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
