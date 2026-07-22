/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MdrDefinition {
  category: string;
  definition: {
    hu: string;
    en: string;
    de: string;
  };
  badgeColor: string;
}

export interface EskapePathogen {
  id: string;
  letter: string;
  code: string;
  name: string;
  mdrDefinition: string;
  majorGenes: string;
  firstLineTreatment: {
    hu: string;
    en: string;
    de: string;
  };
  detailsKey: string;
}

export interface AmblerClass {
  ambler: 'A' | 'B' | 'C' | 'D';
  type: {
    hu: string;
    en: string;
    de: string;
  };
  genes: string;
  substrate: {
    hu: string;
    en: string;
    de: string;
  };
  inhibitors: {
    hu: string;
    en: string;
    de: string;
  };
  color: string;
}

export interface MdrDrugOption {
  drug: string;
  dose: string;
  indication: {
    hu: string;
    en: string;
    de: string;
  };
  sideEffectsOrWarnings: {
    hu: string;
    en: string;
    de: string;
  };
  evidenceLevel?: string;
}

export interface PathogenMdrModule {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  mechanisms: {
    hu: string[];
    en: string[];
    de: string[];
  };
  drugOptions: MdrDrugOption[];
  clinicalAlerts: {
    hu: string[];
    en: string[];
    de: string[];
  };
  algorithm?: {
    scenario: { hu: string; en: string; de: string };
    approach: { hu: string; en: string; de: string };
  }[];
}

export interface CarbapenemaseMatrixItem {
  id: string;
  enzyme: string;
  amblerClass: string;
  prevalence: { hu: string; en: string; de: string };
  effectiveDrugs: { hu: string[]; en: string[]; de: string[] };
  ineffectiveDrugs: { hu: string[]; en: string[]; de: string[] };
  notes: { hu: string; en: string; de: string };
}

export const mdrDefinitions: MdrDefinition[] = [
  {
    category: "MDR (Multidrug-Resistant)",
    definition: {
      hu: "≥1 ágens nem érzékeny ≥3 antibiotikum-osztályban (ECDC/CDC 2012 konszenzus)",
      en: "Non-susceptible to ≥1 agent in ≥3 antimicrobial categories (ECDC/CDC 2012 consensus)",
      de: "Nicht empfindlich gegenüber ≥1 Wirkstoff in ≥3 Antibiotikaklassen (ECDC/CDC 2012)"
    },
    badgeColor: "bg-amber-100 text-amber-800 border-amber-300"
  },
  {
    category: "XDR (Extensively Drug-Resistant)",
    definition: {
      hu: "Csak 1-2 osztályban érzékeny (csaknem panrezisztens)",
      en: "Susceptible to only 1 or 2 antimicrobial categories (almost pan-resistant)",
      de: "Empfindlich in nur 1-2 Antibiotikaklassen (beinahe panresistent)"
    },
    badgeColor: "bg-orange-100 text-orange-800 border-orange-300"
  },
  {
    category: "PDR (Pan-Drug Resistant)",
    definition: {
      hu: "Minden tesztelt antibiotikum-osztályra rezisztens (panrezisztens)",
      en: "Resistant to all tested antimicrobial categories in all classes",
      de: "Resistent gegen alle getesteten Antibiotikaklassen (panresistent)"
    },
    badgeColor: "bg-rose-100 text-rose-800 border-rose-300"
  }
];

export const eskapePathogens: EskapePathogen[] = [
  {
    id: "vre",
    letter: "E",
    code: "VRE",
    name: "Enterococcus faecium",
    mdrDefinition: "Vancomycin-rezisztens",
    majorGenes: "vanA, vanB (VanA/VanB ligáz: D-Ala→D-Lac/Ser)",
    firstLineTreatment: {
      hu: "Linezolid, Daptomycin, Tigecyclin",
      en: "Linezolid, Daptomycin, Tigecycline",
      de: "Linezolid, Daptomycin, Tigecyclin"
    },
    detailsKey: "vre"
  },
  {
    id: "mrsa",
    letter: "S",
    code: "MRSA",
    name: "Staphylococcus aureus",
    mdrDefinition: "Methicillin-rezisztens",
    majorGenes: "mecA/mecC (PBP2a - módosított beta-laktám kötőhely)",
    firstLineTreatment: {
      hu: "Vancomycin, Daptomycin, Linezolid, Ceftarolin",
      en: "Vancomycin, Daptomycin, Linezolid, Ceftaroline",
      de: "Vancomycin, Daptomycin, Linezolid, Ceftarolin"
    },
    detailsKey: "mrsa"
  },
  {
    id: "cre",
    letter: "K",
    code: "CRE / KPC",
    name: "Klebsiella pneumoniae",
    mdrDefinition: "Karbapenem-rezisztens Enterobacterales",
    majorGenes: "blaKPC, blaNDM, blaOXA-48, blaVIM",
    firstLineTreatment: {
      hu: "Ceftazidim-Avibactam, Meropenem-Vaborbactam, Cefiderokol, Aztreonam-Avibactam",
      en: "Ceftazidime-Avibactam, Meropenem-Vaborbactam, Cefiderocol, Aztreonam-Avibactam",
      de: "Ceftazidim-Avibactam, Meropenem-Vaborbactam, Cefiderocol, Aztreonam-Avibactam"
    },
    detailsKey: "cre"
  },
  {
    id: "crab",
    letter: "A",
    code: "CRAB",
    name: "Acinetobacter baumannii",
    mdrDefinition: "Karbapenem-rezisztens Acinetobacter",
    majorGenes: "blaOXA-23/24/51/58, blaNDM; AdeABC efflux",
    firstLineTreatment: {
      hu: "Sulbactam-Durlobactam (SUL-DUR), Cefiderokol, Colistin kombó",
      en: "Sulbactam-Durlobactam (SUL-DUR), Cefiderocol, Colistin combo",
      de: "Sulbactam-Durlobactam (SUL-DUR), Cefiderocol, Colistin-Kombi"
    },
    detailsKey: "crab"
  },
  {
    id: "crpa",
    letter: "P",
    code: "CRPA",
    name: "Pseudomonas aeruginosa",
    mdrDefinition: "Karbapenem-rezisztens / MDR Pseudomonas",
    majorGenes: "blaVIM, blaIMP, oprD veszteség, MexAB-OprM efflux, AmpC derepression",
    firstLineTreatment: {
      hu: "Ceftolozán-Tazobactam, Imipenem-Relebactam, Cefiderokol",
      en: "Ceftolozane-Tazobactam, Imipenem-Relebactam, Cefiderocol",
      de: "Ceftolozan-Tazobactam, Imipenem-Relebactam, Cefiderocol"
    },
    detailsKey: "crpa"
  },
  {
    id: "esbl",
    letter: "E",
    code: "ESBL / AmpC",
    name: "Enterobacter spp. / E. coli",
    mdrDefinition: "ESBL / Derepresszált AmpC / CRE",
    majorGenes: "blaCTX-M-15, AmpC derepresszió, blaKPC / blaNDM",
    firstLineTreatment: {
      hu: "CRE: mint K. pneumoniae | ESBL: Ertapenem (Bacteremia 1. választás)",
      en: "CRE: same as K. pneumoniae | ESBL: Ertapenem (1st choice for bacteremia)",
      de: "CRE: wie K. pneumoniae | ESBL: Ertapenem (1. Wahl bei Bakteriämie)"
    },
    detailsKey: "esbl"
  }
];

export const amblerClasses: AmblerClass[] = [
  {
    ambler: 'A',
    type: {
      hu: "Szerin-β-laktamáz",
      en: "Serine-β-lactamase",
      de: "Serin-β-Lactamase"
    },
    genes: "blaSHV, blaTEM, blaCTX-M (ESBL); blaKPC (karbapenemáz)",
    substrate: {
      hu: "Penicillinek, cephalosporinok, karbapenemek (KPC)",
      en: "Penicillins, cephalosporins, carbapenems (KPC)",
      de: "Penicilline, Cephalosporine, Carbapeneme (KPC)"
    },
    inhibitors: {
      hu: "Klavulánsav, Tazobactam, Avibactam, Vaborbactam, Relebactam",
      en: "Clavulanic acid, Tazobactam, Avibactam, Vaborbactam, Relebactam",
      de: "Clavulansäure, Tazobactam, Avibactam, Vaborbactam, Relebactam"
    },
    color: "border-blue-300 bg-blue-50/50 text-blue-900"
  },
  {
    ambler: 'B',
    type: {
      hu: "Metallo-β-laktamáz (MBL)",
      en: "Metallo-β-lactamase (MBL)",
      de: "Metallo-β-Lactamase (MBL)"
    },
    genes: "blaNDM, blaVIM, blaIMP",
    substrate: {
      hu: "Csaknem minden β-laktám (KIVÉVE aztreonam!)",
      en: "Almost all β-lactams (EXCEPT aztreonam!)",
      de: "Fast alle β-Lactame (AUSSER Aztreonam!)"
    },
    inhibitors: {
      hu: "EDTA (in vitro), Aztreonam-Avibactam kombináció",
      en: "EDTA (in vitro), Aztreonam-Avibactam combination",
      de: "EDTA (in vitro), Aztreonam-Avibactam Kombination"
    },
    color: "border-rose-300 bg-rose-50/50 text-rose-900"
  },
  {
    ambler: 'C',
    type: {
      hu: "AmpC cephalosporinase",
      en: "AmpC cephalosporinase",
      de: "AmpC-Cephalosporinase"
    },
    genes: "blaACC, blaFOX, kromoszomális ampC (Enterobacter, Citrobacter, Serratia, Morganella)",
    substrate: {
      hu: "Cephalosporinok (1-3. gen), részben monobaktámok",
      en: "Cephalosporins (1st-3rd gen), partially monobactams",
      de: "Cephalosporine (1.-3. Gen.), teilweise Monobactame"
    },
    inhibitors: {
      hu: "Avibactam (kiváló), Relebactam, Cefepim (stabil az AmpC hidrolízissel szemben)",
      en: "Avibactam (excellent), Relebactam, Cefepime (stable against AmpC hydrolysis)",
      de: "Avibactam (ausgezeichnet), Relebactam, Cefepim (stabil gegen AmpC-Hydrolyse)"
    },
    color: "border-amber-300 bg-amber-50/50 text-amber-900"
  },
  {
    ambler: 'D',
    type: {
      hu: "OXA-típusú (oxacillinase)",
      en: "OXA-type (oxacillinase)",
      de: "OXA-Typ (Oxacillinase)"
    },
    genes: "blaOXA-23, blaOXA-24/40, blaOXA-48, blaOXA-51, blaOXA-58",
    substrate: {
      hu: "Karbapenemek (egyes OXA-típusok, pl. OXA-48 Enterobacterales-ben, OXA-23 Acinetobacter-ben)",
      en: "Carbapenems (certain OXA types, e.g. OXA-48 in Enterobacterales, OXA-23 in Acinetobacter)",
      de: "Carbapeneme (einige OXA-Typen, z.B. OXA-48 bei Enterobacterales, OXA-23 bei Acinetobacter)"
    },
    inhibitors: {
      hu: "Avibactam (OXA-48-ra hatékony), Durlobactam (SUL-DUR CRAB esetén)",
      en: "Avibactam (effective vs OXA-48), Durlobactam (SUL-DUR in CRAB)",
      de: "Avibactam (wirksam gegen OXA-48), Durlobactam (SUL-DUR bei CRAB)"
    },
    color: "border-purple-300 bg-purple-50/50 text-purple-900"
  }
];

export const carbapenemaseMatrix: CarbapenemaseMatrixItem[] = [
  {
    id: "kpc",
    enzyme: "KPC (Klebsiella pneumoniae carbapenemase)",
    amblerClass: "Ambler A (Szerin)",
    prevalence: {
      hu: "USA, Olaszország, Görögország, Kína, Magyarországon is terjedőben",
      en: "USA, Italy, Greece, China, spreading in Central Europe",
      de: "USA, Italien, Griechenland, China, verbreitet in Mitteleuropa"
    },
    effectiveDrugs: {
      hu: ["Ceftazidim-Avibactam", "Meropenem-Vaborbactam", "Imipenem-Relebactam", "Cefiderokol"],
      en: ["Ceftazidime-Avibactam", "Meropenem-Vaborbactam", "Imipenem-Relebactam", "Cefiderocol"],
      de: ["Ceftazidim-Avibactam", "Meropenem-Vaborbactam", "Imipenem-Relebactam", "Cefiderocol"]
    },
    ineffectiveDrugs: {
      hu: ["Hagyományos karbapenemek", "Piperacillin-Tazobactam", "Cephalosporinok"],
      en: ["Standard carbapenems", "Piperacillin-Tazobactam", "Cephalosporins"],
      de: ["Standard-Carbapeneme", "Piperacillin-Tazobactam", "Cephalosporine"]
    },
    notes: {
      hu: "Ceftazidim-Avibactam és Meropenem-Vaborbactam elsővonalbeli. blaKPC pontmutációk esetén Ceftazidim-Avibactam rezisztencia kialakulhat.",
      en: "Ceftazidime-Avibactam and Meropenem-Vaborbactam are first-line. blaKPC point mutations can cause Ceftazidime-Avibactam resistance.",
      de: "Ceftazidim-Avibactam und Meropenem-Vaborbactam sind 1. Wahl. blaKPC-Punktmutationen können Ceftazidim-Avibactam-Resistenz verursachen."
    }
  },
  {
    id: "ndm",
    enzyme: "NDM / VIM / IMP (Metallo-β-laktamázok)",
    amblerClass: "Ambler B (MBL)",
    prevalence: {
      hu: "Dél-Ázsia, Afrika, Balkán, Mediterráneum (endemikus)",
      en: "South Asia, Africa, Balkans, Mediterranean (endemic)",
      de: "Südindien, Afrika, Balkan, Mittelmeerraum (endemisch)"
    },
    effectiveDrugs: {
      hu: ["Aztreonam-Avibactam (kombo)", "Cefiderokol", "Colistin (kombinációban)"],
      en: ["Aztreonam-Avibactam (combo)", "Cefiderocol", "Colistin (in combination)"],
      de: ["Aztreonam-Avibactam (Kombi)", "Cefiderocol", "Colistin (in Kombination)"]
    },
    ineffectiveDrugs: {
      hu: ["Ceftazidim-Avibactam monoterápia", "Meropenem-Vaborbactam", "Imipenem-Relebactam", "Minden egyéb beta-laktám"],
      en: ["Ceftazidime-Avibactam monotherapy", "Meropenem-Vaborbactam", "Imipenem-Relebactam", "All other beta-lactams"],
      de: ["Ceftazidim-Avibactam Monotherapie", "Meropenem-Vaborbactam", "Imipenem-Relebactam", "Alle anderen Beta-Lactame"]
    },
    notes: {
      hu: "FONTOS: A béta-laktamáz gátlók (Avibactam, Vaborbactam, Relebactam) NEM gátolják az MBL-t! Aztreonam önmagában rezisztens az MBL-re, de az MBL törzsek szinte mindig hordoznak ESBL/AmpC-t is, ezért az Avibactam szükséges mellé gátlónak.",
      en: "CRITICAL: Beta-lactamase inhibitors (Avi/Vabor/Rele) DO NOT inhibit MBLs! Aztreonam itself resists MBL hydrolysis, but co-carried ESBL/AmpC degrades aztreonam without Avibactam.",
      de: "WICHTIG: Beta-Lactamase-Inhibitoren (Avi/Vabor/Rele) hemen MBLs NICHT! Aztreonam ist von Natur aus MBL-stabil, benötigt aber Avibactam gegen kookzipierte ESBL/AmpC."
    }
  },
  {
    id: "oxa48",
    enzyme: "OXA-48-like (OXA-48, OXA-162)",
    amblerClass: "Ambler D (Oxacillinase)",
    prevalence: {
      hu: "Mediterráneum, Törökország, Nyugat- és Közép-Európa",
      en: "Mediterranean, Turkey, Western & Central Europe",
      de: "Mittelmeerraum, Türkei, West- und Mitteleuropa"
    },
    effectiveDrugs: {
      hu: ["Ceftazidim-Avibactam", "Cefiderokol"],
      en: ["Ceftazidime-Avibactam", "Cefiderocol"],
      de: ["Ceftazidim-Avibactam", "Cefiderocol"]
    },
    ineffectiveDrugs: {
      hu: ["Meropenem-Vaborbactam (gyenge válasz)", "Imipenem-Relebactam", "Karbapenemek önmagukban"],
      en: ["Meropenem-Vaborbactam (weak response)", "Imipenem-Relebactam", "Carbapenems alone"],
      de: ["Meropenem-Vaborbactam (schwaches Ansprechen)", "Imipenem-Relebactam", "Carbapeneme allein"]
    },
    notes: {
      hu: "Az OXA-48 gyengén hidrolizálja a cephalosporinokat (a törzs látszólag ceftriaxon-érzékeny lehet!), de erős karbapenemáz. Ceftazidim-Avibactam az elsővonalbeli választás.",
      en: "OXA-48 weakly hydrolyzes cephalosporins (strain may appear ceftriaxone-susceptible!), but is a potent carbapenemase. Ceftazidime-Avibactam is 1st line.",
      de: "OXA-48 hydrolysiert Cephalosporine nur schwach, ist aber eine potente Carbapenemase. Ceftazidim-Avibactam ist die 1. Wahl."
    }
  },
  {
    id: "oxa_crab",
    enzyme: "OXA-23 / OXA-24/40 / OXA-58 / OXA-51 (Acinetobacter baumannii)",
    amblerClass: "Ambler D (CRAB karbapenemázok)",
    prevalence: {
      hu: "Globálisan elterjedt CRAB törzsekben (WHO Priority 1)",
      en: "Globally widespread in CRAB strains (WHO Priority 1)",
      de: "Weltweit verbreitet in CRAB-Stämmen (WHO Priority 1)"
    },
    effectiveDrugs: {
      hu: ["Sulbactam-Durlobactam (SUL-DUR, XACDURO®)", "Cefiderokol", "Colistin kombó"],
      en: ["Sulbactam-Durlobactam (SUL-DUR, XACDURO®)", "Cefiderocol", "Colistin combo"],
      de: ["Sulbactam-Durlobactam (SUL-DUR, XACDURO®)", "Cefiderocol", "Colistin-Kombi"]
    },
    ineffectiveDrugs: {
      hu: ["Ceftazidim-Avibactam", "Meropenem-Vaborbactam", "Imipenem-Relebactam", "Karbapenem monoterápia"],
      en: ["Ceftazidime-Avibactam", "Meropenem-Vaborbactam", "Imipenem-Relebactam", "Carbapenem monotherapy"],
      de: ["Ceftazidim-Avibactam", "Meropenem-Vaborbactam", "Imipenem-Relebactam", "Carbapenem-Monotherapie"]
    },
    notes: {
      hu: "ÚJ DÖNTŐ ÁTTÖRÉS (FDA 2023): A Sulbactam-Durlobactam kifejezetten a CRAB D-osztályú karbapenemázai ellen lett kifejlesztve. A Durlobactam (DBO inhibitor) védi a Sulbactamot az OXA-23/24/58 hidrolízistől.",
      en: "FDA 2023 BREAKTHROUGH: Sulbactam-Durlobactam is specifically engineered for CRAB D-class carbapenemases. Durlobactam protects Sulbactam from OXA hydrolysis.",
      de: "FDA 2023 DURCHBRUCH: Sulbactam-Durlobactam wurde speziell gegen D-Klasse-Carbapenemasen von CRAB entwickelt. Durlobactam schützt Sulbactam vor OXA-Hydrolyse."
    }
  }
];

export const pathogenMdrModules: Record<string, PathogenMdrModule> = {
  mrsa: {
    id: "mrsa",
    title: "Methicillin-Rezisztens Staphylococcus aureus (MRSA)",
    subtitle: "PBP2a (mecA/mecC) által közvetített széleskörű béta-laktám rezisztencia",
    badge: "Gram-pozitív MDR",
    mechanisms: {
      hu: [
        "A mecA vagy mecC gén az SCCmec (Staphylococcal Cassette Chromosome mec) mobil genetikai elemen öröklődik.",
        "A módosított penicillin-kötő fehérje (PBP2a) rendkívül alacsony affinitással bír valamennyi hagyományos béta-laktám iránt.",
        "Klonális típusok: CA-MRSA (USA300 - PVL-termelő, súlyos bőr-lágyrész és necrotisáló pneumonia), HA-MRSA (USA100/200 - kórházi törzsek), LA-MRSA (CC398 - állattartás), USA600 (tobramycin-rezisztens).",
        "Heteroresistentia (hVISA), VISA (Vancomycin-Intermedier S. aureus) és VRSA (Vancomycin-Rezisztens S. aureus, vanA transzfer Enterococcusból) ritkán előfordulhat."
      ],
      en: [
        "mecA or mecC gene carried on SCCmec cassette encodes modified PBP2a with low binding affinity for all standard beta-lactams.",
        "Clones: CA-MRSA (USA300 - PVL producer, severe SSTI & necrotizing pneumonia), HA-MRSA (USA100/200 - nosocomial), LA-MRSA (CC398 - livestock).",
        "Heteroresistance (hVISA), VISA (Vancomycin-Intermediate S. aureus) and VRSA (Vancomycin-Resistant S. aureus via vanA transfer) can occur."
      ],
      de: [
        "mecA oder mecC Gen auf SCCmec kodiert modifiziertes PBP2a mit geringer Affinität für alle Standard-Beta-Lactame.",
        "Klone: CA-MRSA (USA300 - PVL-Bildner, schwere Haut-Weichteilinfekte & nekrotisierende Pneumonie), HA-MRSA (USA100/200 - nosokomial), LA-MRSA (CC398).",
        "Heteroresistenz (hVISA), VISA und VRSA (Vancomycin-Resistenz via vanA) sind seltene Sonderformen."
      ]
    },
    drugOptions: [
      {
        drug: "Vancomycin",
        dose: "15-20 mg/kg q8-12h i.v. (AUC/MIC 400-600 TDM vezérelt)",
        indication: {
          hu: "Bacteremia, endocarditis, pneumonia, meningitis, csont-ízületi fertőzések",
          en: "Bacteremia, endocarditis, pneumonia, meningitis, bone/joint infections",
          de: "Bakteriämie, Endokarditis, Pneumonie, Meningitis, Knochen/Gelenkinfektionen"
        },
        sideEffectsOrWarnings: {
          hu: "Nephrotoxicitás (különösen aminoglikoziddal vagy piperacillin-tazobactammal kombózva), ototoxicitás, Red Man szindróma (lassú infúzió szükséges).",
          en: "Nephrotoxicity (especially with aminoglycosides or pip-tazo), ototoxicty, Red Man Syndrome (slow infusion required).",
          de: "Nephrotoxizität (besonders mit Pip-Tazo), Ototoxizität, Red Man Syndrom (langsame Infusion)."
        }
      },
      {
        drug: "Daptomycin",
        dose: "6-10 mg/kg/nap i.v. (Sepsis/Endocarditis esetén 8-10 mg/kg)",
        indication: {
          hu: "Súlyos bőr/lágyrész fertőzések (cSSTI), MRSA bacteremia, jobb szívfél endocarditis. FIGYELEM: NEM alkalmazható pneumoniában!",
          en: "cSSTI, MRSA bacteremia, right-sided endocarditis. CRITICAL: DO NOT use in pneumonia!",
          de: "cSSTI, MRSA-Bakteriämie, Rechtsherzendokarditis. WICHTIG: NICHT bei Pneumonie anwenden!"
        },
        sideEffectsOrWarnings: {
          hu: "SZURFAKTÁNS INAKTIVÁLJA A TÜDŐBEN! Heti CPK (kreatin-kináz) monitorozás szükséges (myopathia, rhabdomyolisis veszély).",
          en: "INACTIVATED BY SURFACTANT IN LUNGS! Monitor weekly CPK levels due to risk of myopathy/rhabdomyolysis.",
          de: "WIRD DURCH SURFACTANT IN DER LUNGE INAKTIVIERT! Wöchentliche CPK-Kontrolle wegen Myopathie-Risiko."
        }
      },
      {
        drug: "Linezolid",
        dose: "600 mg q12h i.v. / p.o. (100% oralis biohasznosulás)",
        indication: {
          hu: "MRSA pneumonia (HAP/VAP), bőr/lágyrész fertőzések, csontfertőzések",
          en: "MRSA pneumonia (HAP/VAP), cSSTI, osteomyelitis",
          de: "MRSA-Pneumonie (HAP/VAP), Haut-Weichteilinfektionen, Osteomyelitis"
        },
        sideEffectsOrWarnings: {
          hu: "Reverzibilis myelosuppressio (>14 napos kezelésnél trombocytopenia, anaemia), perifériás/opticus neuropathia (>28 nap), Szerotonin szindróma veszélye (gyenge MAO-inhibitor!).",
          en: "Reversible myelosuppression (>14 days), peripheral/optic neuropathy (>28 days), Serotonin syndrome risk (weak MAO-inhibitor!).",
          de: "Reversible Myelosuppression (>14 Tage), periphere/optische Neuropathie (>28 Tage), Serotonin-Syndrom-Risiko (MAO-Hemmer!)."
        }
      },
      {
        drug: "Ceftarolin-fosamil",
        dose: "600 mg q8-12h i.v. (prolongált infúzió)",
        indication: {
          hu: "5. generációs MRSA-aktív cephalosporin. cSSTI, közösségben szerzett pneumonia (CAP), salvage bacteremia",
          en: "5th gen MRSA-active cephalosporin. cSSTI, CAP, salvage bacteremia",
          de: "5. Gen. MRSA-aktives Cephalosporin. cSSTI, CAP, Salvage-Bakteriämie"
        },
        sideEffectsOrWarnings: {
          hu: "Célzottan kötődik a PBP2a-hoz. Tartós kezelésnél neutropenia alakulhat ki.",
          en: "Specifically binds PBP2a. Neutropenia can occur with prolonged therapy.",
          de: "Bindet spezifisch an PBP2a. Neutropenie bei Langzeittherapie möglich."
        }
      },
      {
        drug: "Tedizolid",
        dose: "200 mg 1x naponta i.v. / p.o. (6 napos kúra)",
        indication: {
          hu: "Bőr és lágyrész fertőzések (SSTI); kevesebb hematológiai mellékhatás, mint a Linezolidnál",
          en: "SSTI; fewer hematologic side effects compared to Linezolid",
          de: "Haut- und Weichteilinfektionen; weniger hämatologische Nebenwirkungen als Linezolid"
        },
        sideEffectsOrWarnings: {
          hu: "Rövidebb (6 napos) kezelési kúra elegendő; kevesebb MAO-gátló kölcsönhatás.",
          en: "Shorter 6-day course required; lower MAO-inhibition interaction.",
          de: "Kürzere 6-Tage-Behandlung ausreichend; geringere MAO-Hemmung."
        }
      }
    ],
    clinicalAlerts: {
      hu: [
        "MRSA Endocarditis: Daptomycin (8-10 mg/kg/nap) vagy Vancomycin (AUC/MIC 400-600 vezérelt).",
        "MRSA Meningitis: Vancomycin + Rifampicin (adjuváns).",
        "Enyhe/Mérsékelt MRSA SSTI (ambuláns): Trimethoprim-sulfamethoxazole (TMP-SMX), Doxycyclin vagy Clindamycin (ha D-teszt negatív)."
      ],
      en: [
        "MRSA Endocarditis: Daptomycin (8-10 mg/kg/day) or Vancomycin (AUC/MIC 400-600 target).",
        "MRSA Meningitis: Vancomycin + Rifampicin (adjuvant).",
        "Mild/Moderate MRSA SSTI (outpatient): TMP-SMX, Doxycycline, or Clindamycin (if D-test negative)."
      ],
      de: [
        "MRSA-Endokarditis: Daptomycin (8-10 mg/kg/Tag) oder Vancomycin (AUC/MIC 400-600 Ziel).",
        "MRSA-Meningitis: Vancomycin + Rifampicin (adjuvant).",
        "Milde MRSA-SSTI (ambulant): TMP-SMX, Doxycyclin oder Clindamycin (falls D-Test negativ)."
      ]
    }
  },

  vre: {
    id: "vre",
    title: "Vancomycin-Rezisztens Enterococcus (VRE)",
    subtitle: "D-Ala-D-Ala végződés módosulása D-Ala-D-Lac vagy D-Ala-D-Ser szubsztitúcióval",
    badge: "Gram-pozitív MDR",
    mechanisms: {
      hu: [
        "A van operonok (vanA, vanB, vanC) átkódolják a peptidoglikán prekurzor végződését, így a glycopeptidek kötési affinitása 1000-szeresére csökken.",
        "vanA genotype: E. faecium és E. faecalis; vancomycin MIC ≥ 64 mg/L ÉS teicoplanin MIC ≥ 16 mg/L (mindkét glycopeptidre rezisztens). Tn1546 transzpozon.",
        "vanB genotype: vancomycin-rezisztens (MIC 4-1024 mg/L), DE teicoplaninra ÉRZÉKENY marad! Tn1547 transzpozon.",
        "vanC genotype: E. gallinarum / E. casseliflavus natív (kromoszomális) alacsony szintű vancomycin rezisztenciája (MIC 2-32 mg/L), teicoplanin érzékeny."
      ],
      en: [
        "van operons modify peptidoglycan precursor termination, reducing glycopeptide binding affinity 1000-fold.",
        "vanA genotype: E. faecium/faecalis resistant to BOTH vancomycin (MIC ≥64) AND teicoplanin (MIC ≥16). Tn1546 transposon.",
        "vanB genotype: vancomycin-resistant (MIC 4-1024), BUT remains SUSCEPTIBLE to teicoplanin! Tn1547 transposon.",
        "vanC genotype: intrinsic chromosomal low-level vancomycin resistance in E. gallinarum/casseliflavus."
      ],
      de: [
        "van-Operons verändern die Peptidoglykan-Precursor-Endung, was die Glycopeptid-Bindungsaffinität um das 1000-fache verringert.",
        "vanA-Genotyp: Resistent gegen SOWOHL Vancomycin (MIC ≥64) ALS AUCH Teicoplanin (MIC ≥16).",
        "vanB-Genotyp: Vancomycin-resistent, BLEIBT ABER EMPFINDLICH für Teicoplanin!",
        "vanC-Genotyp: Intrinsische chromosomale niedrige Vancomycin-Resistenz bei E. gallinarum."
      ]
    },
    drugOptions: [
      {
        drug: "Linezolid",
        dose: "600 mg q12h i.v. / p.o.",
        indication: {
          hu: "VRE húgyúti fertőzések (UTI), bacteremia, endocarditis, intraabdominalis fertőzések",
          en: "VRE UTI, bacteremia, endocarditis, intraabdominal infections",
          de: "VRE HWI, Bakteriämie, Endokarditis, intraabdominelle Infektionen"
        },
        sideEffectsOrWarnings: {
          hu: "Figyelmeztetés: cfr vagy optrA gének jelenléte plazmid-mediált Linezolid rezisztenciát okoz!",
          en: "Warning: Presence of cfr or optrA genes confers plasmid-mediated Linezolid resistance!",
          de: "Achtung: Das Vorhandensein von cfr- oder optrA-Genen verursacht Linezolid-Resistenz!"
        }
      },
      {
        drug: "Daptomycin",
        dose: "8-12 mg/kg/nap i.v. (emelt dózis szükséges VRE esetén)",
        indication: {
          hu: "VRE bacteremia, endocarditis, lágyrész fertőzések",
          en: "VRE bacteremia, endocarditis, soft tissue infections",
          de: "VRE-Bakteriämie, Endokarditis, Weichteilinfektionen"
        },
        sideEffectsOrWarnings: {
          hu: "VRE esetén a standard 6 mg/kg dózis elégtelen; liaFSR regulátor mutáció Daptomycin rezisztenciához vezethet.",
          en: "Standard 6 mg/kg is inadequate for VRE; liaFSR mutations cause Daptomycin resistance.",
          de: "Standard 6 mg/kg reicht bei VRE nicht aus; liaFSR-Mutationen führen zu Daptomycin-Resistenz."
        }
      },
      {
        drug: "Tigecyclin",
        dose: "200 mg telítő dózis, majd 100 mg q12h i.v.",
        indication: {
          hu: "Intraabdominalis (IAI) és lágyrész VRE fertőzések. BACTEREMIA-BAN KERÜLENDŐ!",
          en: "Intraabdominal and soft tissue VRE infections. AVOID IN BACTEREMIA!",
          de: "Intraabdominelle und Weichteil-VRE-Infektionen. BEI BAKTERIÄMIE ZU VERMEIDEN!"
        },
        sideEffectsOrWarnings: {
          hu: "Alacsony szérumszint miatt bacteremiában és pyelonephritisben elégtelen terápiás válasz.",
          en: "Low serum levels lead to therapeutic failure in bacteremia and pyelonephritis.",
          de: "Niedrige Serumspiegel führen zu Versagen bei Bakteriämie und Pyelonephritis."
        }
      },
      {
        drug: "Quinupristin-Dalfopristin",
        dose: "7.5 mg/kg q8h i.v.",
        indication: {
          hu: "KIZÁRÓLAG Enterococcus faecium VRE fertőzésre! (Enterococcus faecalis-ra hatástalan!)",
          en: "ONLY for Enterococcus faecium VRE! (Inactive against Enterococcus faecalis!)",
          de: "NUR für Enterococcus faecium VRE! (Unwirksam gegen Enterococcus faecalis!)"
        },
        sideEffectsOrWarnings: {
          hu: "Súlyos arthralgia, myalgia, venas irritáció (centrális vénás katéter szükséges).",
          en: "Severe arthralgia, myalgia, venous irritation (central line required).",
          de: "Schwere Arthralgien, Myalgien, Venenreizungen (zentraler Katheter erforderlich)."
        }
      }
    ],
    clinicalAlerts: {
      hu: [
        "Enterococcus faecium vs faecalis elkülönítés döntő: E. faecalis általában ampicillin-érzékeny (Ampicillin 1. választás), míg E. faecium szinte mindig ampicillin-rezisztens.",
        "vanB genotípusú VRE esetén Teicoplanin terápia még mérlegelhető, de vanA esetén szigorúan tilos."
      ],
      en: [
        "E. faecium vs E. faecalis distinction is critical: E. faecalis is usually ampicillin-susceptible (Ampicillin 1st choice), while E. faecium is almost always ampicillin-resistant.",
        "Teicoplanin can still be considered in vanB VRE, but is strictly ineffective in vanA VRE."
      ],
      de: [
        "Unterscheidung E. faecium vs. E. faecalis kritisch: E. faecalis meist Ampicillin-empfindlich, E. faecium fast immer Ampicillin-resistent.",
        "Teicoplanin kann bei vanB-VRE erwogen werden, bei vanA-VRE jedoch streng unwirksam."
      ]
    }
  },

  esbl: {
    id: "esbl",
    title: "ESBL-termelő Enterobacterales (E. coli, K. pneumoniae, Proteus)",
    subtitle: "Extended-Spectrum Beta-Lactamase termelés (blaCTX-M, blaSHV, blaTEM)",
    badge: "Gram-negatív MDR",
    mechanisms: {
      hu: [
        "Az ESBL-ek hidrolizálják a penicillineket, az 1-4. generációs cephalosporinokat és az aztreonamot.",
        "A blaCTX-M-15 a leggyakoribb, plazmidon gyorsan terjedő globális ESBL-típus.",
        "A karbapenemekre (Ertapenem, Meropenem, Imipenem) az ESBL törzsek alapesetben érzékenyek maradnak.",
        "A Piperacillin-Tazobactam in vitro érzékeny lehet, de in vivo bacteremiában inferiőr a karbapenemekhez képest (MERINO trial!)."
      ],
      en: [
        "ESBLs hydrolyze penicillins, 1st-4th generation cephalosporins, and aztreonam.",
        "blaCTX-M-15 is the most common globally dominant plasmid-mediated ESBL.",
        "Carbapenems (Ertapenem, Meropenem, Imipenem) remain the gold standard against ESBLs.",
        "Piperacillin-Tazobactam may test susceptible in vitro, but is inferior in vivo in ESBL bacteremia (MERINO trial!)."
      ],
      de: [
        "ESBLs hydrolysieren Penicilline, Cephalosporine der 1.-4. Gen. und Aztreonam.",
        "blaCTX-M-15 ist der weltweit vorherrschende plasmidcodierte ESBL-Typ.",
        "Carbapeneme (Ertapenem, Meropenem, Imipenem) bleiben der Goldstandard gegen ESBL.",
        "Piperacillin-Tazobactam ist in vivo bei ESBL-Bakteriämie inferior (MERINO-Studie!)."
      ]
    },
    drugOptions: [
      {
        drug: "Ertapenem",
        dose: "1 g 1x naponta i.v. (1 órás infúzió)",
        indication: {
          hu: "ESBL E. coli / K. pneumoniae bacteremia és súlyos fertőzések 1. VÁLASZTÁSÚ Arany Standardja",
          en: "GOLD STANDARD 1st choice for ESBL E. coli / K. pneumoniae bacteremia and severe infections",
          de: "GOLDSTANDARD 1. Wahl bei ESBL E. coli / K. pneumoniae Bakteriämie"
        },
        sideEffectsOrWarnings: {
          hu: "Kényelmes napi 1x adagolás (ambuláns parenteralilag is adható). Pseudomonas és Acinetobacter ellen HATÁSTALAN!",
          en: "Convenient once-daily dosing. INEFFECTIVE against Pseudomonas and Acinetobacter!",
          de: "Bequeme 1x tägliche Dosierung. UNWIRKSAM gegen Pseudomonas und Acinetobacter!"
        }
      },
      {
        drug: "Meropenem / Imipenem",
        dose: "Meropenem 1-2 g q8h (EI 3h) / Imipenem 500mg-1g q6h",
        indication: {
          hu: "Súlyos ESBL sepsis, septic shock, neutropeniás láz",
          en: "Severe ESBL sepsis, septic shock, febrile neutropenia",
          de: "Schwere ESBL-Sepsis, septischer Schock, febriles Neutropenie"
        },
        sideEffectsOrWarnings: {
          hu: "Széles spektrumú védelem, elnyújtott infúzióban (EI 3h) javasolt.",
          en: "Broad spectrum coverage, extended 3-hour infusion recommended.",
          de: "Breites Spektrum, verlängerte Infusion (3 Std.) empfohlen."
        }
      },
      {
        drug: "Piperacillin-Tazobactam",
        dose: "4.5 g q6h i.v. (4 órás elnyújtott infúzió)",
        indication: {
          hu: "Enyhe/mérsékelt ESBL húgyúti vagy hajlamosító tényező nélküli fertőzések. BACTEREMIA-BAN KERÜLENDŐ!",
          en: "Mild/moderate ESBL UTI or non-bacteremic infections. AVOID IN BACTEREMIA!",
          de: "Milde/moderate ESBL HWI. BEI BAKTERIÄMIE ZU VERMEIDEN!"
        },
        sideEffectsOrWarnings: {
          hu: "Klinikai figyelmeztetés: MERINO trial kimutatta a 30 napos mortalitás növekedését ESBL bacteremiában Ertapenemhez képest!",
          en: "Clinical Alert: MERINO trial proved higher 30-day mortality in ESBL bacteremia vs Ertapenem!",
          de: "Klinischer Warnhinweis: MERINO-Studie zeigte höhere 30-Tage-Mortalität bei ESBL-Bakteriämie vs. Ertapenem!"
        }
      },
      {
        drug: "Temocillin",
        dose: "2 g q8h i.v. (prolongált infúzió)",
        indication: {
          hu: "ESBL húgyúti fertőzések (UTI/pyelonephritis) karbapenem-spóroló alternatívája Európában",
          en: "Carbapenem-sparing alternative for ESBL UTI/pyelonephritis in Europe",
          de: "Carbapenem-sparende Alternative für ESBL-HWI in Europa"
        },
        sideEffectsOrWarnings: {
          hu: "Stabil az ESBL és AmpC hidrolízissel szemben; Gram-pozitívak és anaerobok ellen hatástalan.",
          en: "Stable against ESBL and AmpC; inactive against Gram-positives and anaerobes.",
          de: "Stabil gegen ESBL und AmpC; unwirksam gegen Gram-positive und Anaerobier."
        }
      }
    ],
    clinicalAlerts: {
      hu: [
        "ESBL Bacteremia esetén az Ertapenem az elsővonalbeli szer.",
        "Ceftolozán-Tazobactam és Ceftazidim-Avibactam is hatékony ESBL-re, de tartalékolandók karbapenem-rezisztens kórokozókra."
      ],
      en: [
        "Ertapenem is the first-line agent for ESBL Bacteremia.",
        "Ceftolozane-Tazobactam and Ceftazidime-Avibactam are effective for ESBL, but should be reserved for carbapenem-resistant pathogens."
      ],
      de: [
        "Ertapenem ist das Mittel der 1. Wahl bei ESBL-Bakteriämie.",
        "Ceftolozan-Tazobactam und Ceftazidim-Avibactam sind wirksam, sollten aber für Carbapenem-resistente Erreger reserviert werden."
      ]
    }
  },

  cre: {
    id: "cre",
    title: "Karbapenem-Rezisztens Enterobacterales (CRE / KPC / MBL / OXA-48)",
    subtitle: "Karbapenemáz-termelés (Ambler A, B, D) vagy ESBL/AmpC + porinkiesés",
    badge: "Kritikus Prioritású MDR",
    mechanisms: {
      hu: [
        "Ambler A osztály (Szerin-karbapenemáz): blaKPC-2, blaKPC-3. Gátolható Avibactam, Vaborbactam, Relebactam által.",
        "Ambler B osztály (Metallo-beta-laktamáz - MBL): blaNDM-1..5, blaVIM-1/2, blaIMP. Csak Aztreonam-Avibactam és Cefiderokol hatásos ellenük!",
        "Ambler D osztály (Oxacillinase): blaOXA-48, blaOXA-162. Avibactam gátolja, Vaborbactam/Relebactam nem.",
        "KULCSSZABÁLY: CRE kezelése előtt kötelező a karbapenemáz-típus meghatározása (PCR vagy fenotípusos teszt)!"
      ],
      en: [
        "Ambler Class A (Serine): blaKPC. Inhibited by Avibactam, Vaborbactam, Relebactam.",
        "Ambler Class B (MBL): blaNDM, blaVIM, blaIMP. ONLY Aztreonam-Avibactam and Cefiderocol are effective!",
        "Ambler Class D: blaOXA-48. Inhibited by Avibactam.",
        "KEY RULE: Mandatory carbapenemase typing (PCR or phenotypic) before initiating CRE treatment!"
      ],
      de: [
        "Ambler Klasse A (Serin): blaKPC. Gehemmt durch Avibactam, Vaborbactam, Relebactam.",
        "Ambler Klasse B (MBL): blaNDM, blaVIM, blaIMP. NUR Aztreonam-Avibactam und Cefiderocol sind wirksam!",
        "Ambler Klasse D: blaOXA-48. Gehemmt durch Avibactam.",
        "SCHLÜSSELREGEL: Obligatorische Carbapenemase-Typisierung vor Beginn der CRE-Behandlung!"
      ]
    },
    drugOptions: [
      {
        drug: "Ceftazidim-Avibactam",
        dose: "2.5 g q8h i.v. (3 órás elnyújtott infúzió)",
        indication: {
          hu: "KPC és OXA-48 termelő CRE törzsek 1. VÁLASZTÁSA. MBL (NDM/VIM) ellen HATÁSTALAN!",
          en: "1st CHOICE for KPC and OXA-48 producing CRE. INEFFECTIVE against MBL (NDM/VIM)!",
          de: "1. WAHL für KPC und OXA-48 bildende CRE. UNWIRKSAM gegen MBL (NDM/VIM)!"
        },
        sideEffectsOrWarnings: {
          hu: "blaKPC mutációk esetén ceftazidim-avibactam rezisztencia alakulhat ki.",
          en: "blaKPC point mutations can confer ceftazidime-avibactam resistance.",
          de: "blaKPC-Punktmutationen können Ceftazidim-Avibactam-Resistenz verursachen."
        }
      },
      {
        drug: "Meropenem-Vaborbactam",
        dose: "4 g (2g Meropenem + 2g Vaborbactam) q8h i.v. (3 órás infúzió)",
        indication: {
          hu: "KPC-termelő CRE törzsekre rendkívül hatékony; nem fenyegeti a Ceftazidim-Avibactam-nál leírt KPC-mutációs rezisztencia",
          en: "Highly effective for KPC-producing CRE; not affected by KPC point mutation resistance",
          de: "Hochwirksam bei KPC-bildenden CRE; nicht betroffen von KPC-Punktmutationsresistenz"
        },
        sideEffectsOrWarnings: {
          hu: "MBL (NDM) és OXA-48 ellen HATÁSTALAN!",
          en: "INEFFECTIVE against MBL (NDM) and OXA-48!",
          de: "UNWIRKSAM gegen MBL (NDM) und OXA-48!"
        }
      },
      {
        drug: "Aztreonam-Avibactam",
        dose: "6.25 g q8h i.v. (prolongált infúzió)",
        indication: {
          hu: "Metallo-beta-laktamáz (MBL: NDM, VIM, IMP) termelő CRE törzsek KIZÁRÓLAGOS BÉTA-LAKTÁM OPCIÓJA!",
          en: "EXCLUSIVE B-LACTAM OPTION for Metallo-beta-lactamase (MBL: NDM, VIM, IMP) producing CRE!",
          de: "EXKLUSIVE BETA-LACTAM-OPTION für Metallo-beta-lactamase (MBL: NDM, VIM, IMP) bildende CRE!"
        },
        sideEffectsOrWarnings: {
          hu: "Az Aztreonam rezisztens az MBL hidrolízisre, míg az Avibactam semlegesíti a törzs által egyidejűleg hordozott ESBL/AmpC enzimeket.",
          en: "Aztreonam resists MBL hydrolysis, while Avibactam neutralizes co-carried ESBL/AmpC enzymes.",
          de: "Aztreonam widersteht der MBL-Hydrolyse, während Avibactam ko-existierende ESBL/AmpC neutralisiert."
        }
      },
      {
        drug: "Cefiderokol",
        dose: "2 g q8h i.v. (3 órás elnyújtott infúzió)",
        indication: {
          hu: "Pan-spektrumú sziderofór cephalosporin. KPC, MBL és OXA-48 ellen egyaránt aktív!",
          en: "Pan-spectrum siderophore cephalosporin. Active against KPC, MBL, and OXA-48!",
          de: "Pan-Spektrum Siderophor-Cephalosporin. Wirksam gegen KPC, MBL und OXA-48!"
        },
        sideEffectsOrWarnings: {
          hu: "Különleges 'Trójai faló' mechanizmus: a bakteriális vasfelvevő (ferri-siderophore) csatornákon jut be a sejtbe.",
          en: "'Trojan horse' mechanism: enters bacterial cells via iron transporter systems.",
          de: "'Trojanisches Pferd'-Mechanismus: gelangt über Eisen-Transporter-Systeme in die Zelle."
        }
      }
    ],
    clinicalAlerts: {
      hu: [
        "KPC fenotípus -> Ceftazidim-Avibactam vagy Meropenem-Vaborbactam 1. választás.",
        "MBL (NDM/VIM) fenotípus -> Aztreonam-Avibactam vagy Cefiderokol 1. választás.",
        "OXA-48 fenotípus -> Ceftazidim-Avibactam vagy Cefiderokol 1. választás."
      ],
      en: [
        "KPC phenotype -> Ceftazidime-Avibactam or Meropenem-Vaborbactam 1st choice.",
        "MBL (NDM/VIM) phenotype -> Aztreonam-Avibactam or Cefiderocol 1st choice.",
        "OXA-48 phenotype -> Ceftazidime-Avibactam or Cefiderocol 1st choice."
      ],
      de: [
        "KPC-Phänotyp -> Ceftazidim-Avibactam oder Meropenem-Vaborbactam 1. Wahl.",
        "MBL (NDM/VIM)-Phänotyp -> Aztreonam-Avibactam oder Cefiderocol 1. Wahl.",
        "OXA-48-Phänotyp -> Ceftazidim-Avibactam oder Cefiderocol 1. Wahl."
      ]
    }
  },

  crab: {
    id: "crab",
    title: "Karbapenem-Rezisztens Acinetobacter baumannii (CRAB)",
    subtitle: "WHO Priority-1 Életveszélyes Opportunista Patogén (OXA-23/24/51/58, AdeABC efflux)",
    badge: "WHO Priority 1 MDR",
    mechanisms: {
      hu: [
        "D-osztályú karbapenemázok (OXA-23, OXA-24/40, OXA-58; a blaOXA-51 natív az A. baumannii-ban, IS Aba1 promóterrel felszabályozva).",
        "AdeABC RND-típusú efflux pumpák aktivációja (tetracyclinek, béta-laktámok, aminoglikozidok ellen).",
        "Porin veszteség (CarO, OmpA) és PBP1a/PBP2 módosítások.",
        "Extrém erős biofilm-képzés (ventilátor-asszociált pneumonia, ICU invazív eszközök).",
        "Lipid A módosítás (PmrA/PmrB mutáció) -> Colistin rezisztencia."
      ],
      en: [
        "Class D carbapenemases (OXA-23, OXA-24/40, OXA-58; blaOXA-51 intrinsic, overexpressed via IS Aba1).",
        "AdeABC efflux pump overexpression (multidrug efflux).",
        "Porin loss (CarO, OmpA) and PBP modifications.",
        "Extremely strong biofilm formation on ventilator tubes and ICU devices.",
        "Lipid A modification (PmrA/B) conferring Colistin resistance."
      ],
      de: [
        "Klasse D Carbapenemasen (OXA-23, OXA-24/40, OXA-58; blaOXA-51 intrinsisch).",
        "AdeABC Efflux-Pumpen Überexpressur.",
        "Porinverlust (CarO, OmpA) und PBP-Modifikationen.",
        "Extrem starke Biofilmbildung auf Beatmungsschläuchen.",
        "Lipid A Modifikation (PmrA/B) -> Colistin-Resistenz."
      ]
    },
    drugOptions: [
      {
        drug: "Sulbactam-Durlobactam (SUL-DUR, XACDURO®)",
        dose: "4 g (1g Sulbactam + 1g Durlobactam + ampicillin) q6h i.v. (4 órás prolongált infúzió)",
        indication: {
          hu: "FDA 2023 JÓVÁHAGYOTT ELSŐVÁLASZTANDÓ ÚJ STANDARD TERÁPIA CRAB HAP/VAP és sepsis esetén!",
          en: "FDA 2023 APPROVED FIRST-LINE NEW STANDARD THERAPY for CRAB HAP/VAP and sepsis!",
          de: "FDA 2023 ZUGELASSENE ERSTE WAHL NEUER STANDARD bei CRAB HAP/VAP und Sepsis!"
        },
        sideEffectsOrWarnings: {
          hu: "ATTACK klinikai vizsgálat igazolta a Colistinhez képest kedvezőbb vesevédelmi profilt. A Sulbactam önmagában is antibakteriális (PBP1/PBP2 kötés A. baumannii-ban), a Durlobactam pedig megvédi az OXA-hidrolízistől.",
          en: "ATTACK trial proved superior renal safety profile vs Colistin. Sulbactam possesses direct antibacterial activity via PBP1/PBP2; Durlobactam inhibits D-class OXA enzymes.",
          de: "ATTACK-Studie zeigte überlegene Nierensicherheit vs. Colistin. Sulbactam hat direkte antibakterielle Aktivität; Durlobactam hemmt D-Klasse OXA-Enzyme."
        }
      },
      {
        drug: "Cefiderokol",
        dose: "2 g q8h i.v. (3 órás infúzió)",
        indication: {
          hu: "CRAB fertőzések elfogadott 2. vonalbeli vagy MBL+ törzsek esetén elsővonalbeli opciója",
          en: "Accepted 2nd line option for CRAB, or 1st line if co-producing MBL (NDM)",
          de: "Akzeptierte 2. Wahl bei CRAB, oder 1. Wahl bei MBL (NDM) Ko-Produktion"
        },
        sideEffectsOrWarnings: {
          hu: "CREDIBLE-CR és APEKS-NP vizsgálatok alapján egyenértékű hatékonyság.",
          en: "CREDIBLE-CR and APEKS-NP trials demonstrated non-inferiority.",
          de: "CREDIBLE-CR und APEKS-NP Studien zeigten Gleichwertigkeit."
        }
      },
      {
        drug: "Colistin (Polymyxin E) kombó",
        dose: "9 MNE telítő dózis, majd 4.5 MNE q12h i.v.",
        indication: {
          hu: "Salvage terápia KIZÁRÓLAG kombinációban (Meropenem-el, Sulbactammal vagy Rifampicinnel)",
          en: "Salvage therapy ONLY in combination (with Meropenem, Sulbactam, or Rifampicin)",
          de: "Salvage-Therapie NUR in Kombination (mit Meropenem, Sulbactam oder Rifampicin)"
        },
        sideEffectsOrWarnings: {
          hu: "Súlyos nephrotoxicitás és neurotoxicitás. Monoterápiában KERÜLENDŐ (gyors rezisztencia-szelekció)!",
          en: "Severe nephrotoxicity and neurotoxicity. DO NOT use as monotherapy!",
          de: "Schwere Nephrotoxizität und Neurotoxizität. NICHT als Monotherapie anwenden!"
        }
      }
    ],
    clinicalAlerts: {
      hu: [
        "CRAB HAP/VAP (MBL-negatív): Sulbactam-Durlobactam 1+1 g q6h IV (EI 4h) – ELSŐVÁLASZTÁS.",
        "CRAB HAP/VAP (MBL-pozitív NDM): Cefiderocol 2 g q8h IV ± Aztreonam-Avibactam.",
        "Salvage / PDR CRAB: Polymyxin B + Rifampicin + Fosfomycin; Minocycline IV kombó."
      ],
      en: [
        "CRAB HAP/VAP (MBL-negative): Sulbactam-Durlobactam 1+1 g q6h IV (EI 4h) – FIRST CHOICE.",
        "CRAB HAP/VAP (MBL-positive NDM): Cefiderocol 2 g q8h IV ± Aztreonam-Avibactam.",
        "Salvage / PDR CRAB: Polymyxin B + Rifampicin + Fosfomycin; Minocycline IV combo."
      ],
      de: [
        "CRAB HAP/VAP (MBL-negativ): Sulbactam-Durlobactam 1+1 g q6h IV (EI 4h) – ERSTE WAHL.",
        "CRAB HAP/VAP (MBL-positiv NDM): Cefiderocol 2 g q8h IV ± Aztreonam-Avibactam.",
        "Salvage / PDR CRAB: Polymyxin B + Rifampicin + Fosfomycin; Minocycline IV Kombi."
      ]
    },
    algorithm: [
      {
        scenario: {
          hu: "HAP/VAP – CRAB (OXA típus, MBL-negatív)",
          en: "HAP/VAP – CRAB (OXA type, MBL-negative)",
          de: "HAP/VAP – CRAB (OXA Typ, MBL-negativ)"
        },
        approach: {
          hu: "Sulbactam-Durlobactam 1+1 g q6h IV (EI 4h) – ELSŐVÁLASZTÁS",
          en: "Sulbactam-Durlobactam 1+1 g q6h IV (EI 4h) – FIRST CHOICE",
          de: "Sulbactam-Durlobactam 1+1 g q6h IV (EI 4h) – ERSTE WAHL"
        }
      },
      {
        scenario: {
          hu: "HAP/VAP – CRAB (MBL-pozitív: NDM)",
          en: "HAP/VAP – CRAB (MBL-positive: NDM)",
          de: "HAP/VAP – CRAB (MBL-positiv: NDM)"
        },
        approach: {
          hu: "Cefiderokol 2 g q8h (EI 3h) ± Aztreonam-Avibactam (ha egyidejű ESBL van)",
          en: "Cefiderocol 2 g q8h (EI 3h) ± Aztreonam-Avibactam (if co-carried ESBL)",
          de: "Cefiderocol 2 g q8h (EI 3h) ± Aztreonam-Avibactam (bei ESBL-Koproduktion)"
        }
      },
      {
        scenario: {
          hu: "Bacteremia / Sepsis – CRAB",
          en: "Bacteremia / Sepsis – CRAB",
          de: "Bakteriämie / Sepsis – CRAB"
        },
        approach: {
          hu: "SUL-DUR vagy Cefiderokol (+ adjuváns Colistin IV ha szükséges); Dózisemelés ICU betegben",
          en: "SUL-DUR or Cefiderocol (+ adjuvant Colistin IV if needed); Dose escalation in ICU",
          de: "SUL-DUR oder Cefiderocol (+ adjuvantes Colistin IV); Dosiserhöhung auf der Intensivstation"
        }
      },
      {
        scenario: {
          hu: "Salvage / PDR CRAB",
          en: "Salvage / PDR CRAB",
          de: "Salvage / PDR CRAB"
        },
        approach: {
          hu: "Polymyxin B + Rifampicin + Fosfomycin; Minocycline IV kombóban; Fagoterápia (klinikai vizsgálat)",
          en: "Polymyxin B + Rifampicin + Fosfomycin; Minocycline IV combo; Phage therapy (clinical trial)",
          de: "Polymyxin B + Rifampicin + Fosfomycin; Minocyclin IV Kombi; Phagentherapie (Studie)"
        }
      }
    ]
  },

  crpa: {
    id: "crpa",
    title: "Karbapenem-Rezisztens Pseudomonas aeruginosa (CRPA)",
    subtitle: "Multifaktoriális rezisztencia: MBL-ek (VIM/IMP), oprD porinkiesés, MexAB-OprM efflux, AmpC derepresszió",
    badge: "Kritikus Prioritású MDR",
    mechanisms: {
      hu: [
        "Metallo-beta-laktamázok (blaVIM, blaIMP, blaNDM): Európában a leggyakoribb szerzett karbapenemázok P. aeruginosa-ban; az aztreonam kivételével minden béta-laktámra rezisztenssé teszik a törzset.",
        "oprD porin veszteség: Az imipenem/meropenem behatolásához szükséges karbapenem-specifikus porin elvesztése -> izolált karbapenem-rezisztencia.",
        "MexAB-OprM és MexXY-OprM RND efflux pumpák felszabályozása (karbapenemek, fluorochinolonok, aminoglikozidok, cephalosporinok ellen).",
        "Kromoszomális ampC derepresszió: Cephalosporin rezisztencia; Ceftolozán-tazobactam rezisztencia is adódhat belőle."
      ],
      en: [
        "MBLs (blaVIM, blaIMP, blaNDM): Most common acquired carbapenemases in P. aeruginosa in Europe.",
        "oprD porin loss: Loss of carbapenem-specific outer membrane porin causes isolated carbapenem resistance.",
        "MexAB-OprM & MexXY-OprM efflux pump overexpression conferring multidrug resistance.",
        "Chromosomal ampC derepression: Causes cephalosporin and potential ceftolozane-tazobactam resistance."
      ],
      de: [
        "MBLs (blaVIM, blaIMP, blaNDM): Häufigste erworbene Carbapenemasen bei P. aeruginosa in Europa.",
        "oprD Porin-Verlust: Führt zu isolierter Carbapenem-Resistenz.",
        "MexAB-OprM & MexXY-OprM Efflux-Pumpen Überexpressur.",
        "Chromosomale ampC-Derepression: Verursacht Cephalosporin-Resistenz."
      ]
    },
    drugOptions: [
      {
        drug: "Ceftolozán-Tazobactam",
        dose: "3 g (2g Ceftolozán + 1g Tazobactam) q8h i.v. (3 órás elnyújtott infúzió)",
        indication: {
          hu: "CRPA HAP/VAP és cUTI/cAII 1. VÁLASZTANDÓ SZERE (MBL-negatív törzsek esetén). ASPECT-NP trial.",
          en: "1st CHOICE DRUG for CRPA HAP/VAP and cUTI (MBL-negative strains). ASPECT-NP trial.",
          de: "1. WAHL bei CRPA HAP/VAP und cUTI (MBL-negative Stämme). ASPECT-NP-Studie."
        },
        sideEffectsOrWarnings: {
          hu: "Kifejezetten Pseudomonas ellen optimalizált molekula. MBL (VIM/IMP) ellen HATÁSTALAN!",
          en: "Specifically optimized for Pseudomonas. INEFFECTIVE against MBL (VIM/IMP)!",
          de: "Speziell für Pseudomonas optimiert. UNWIRKSAM gegen MBL (VIM/IMP)!"
        }
      },
      {
        drug: "Imipenem-Cilastatin-Relebactam",
        dose: "1.25 g q6h i.v. (30 perces infúzió)",
        indication: {
          hu: "MBL-negatív CRPA fertőzések; kiválóan hat az oprD porin-veszteséggel rendelkező karbapenem-rezisztens törzsekre",
          en: "MBL-negative CRPA; highly effective against oprD porin-loss carbapenem-resistant strains",
          de: "MBL-negativer CRPA; hochwirksam gegen oprD-Porinverlust-Carbapenem-resistente Stämme"
        },
        sideEffectsOrWarnings: {
          hu: "A Relebactam gátolja az AmpC-t és a KPC-t. MBL ellen HATÁSTALAN!",
          en: "Relebactam inhibits AmpC and KPC. INEFFECTIVE against MBL!",
          de: "Relebactam hemmt AmpC und KPC. UNWIRKSAM gegen MBL!"
        }
      },
      {
        drug: "Ceftazidim-Avibactam",
        dose: "2.5 g q8h i.v. (3 órás infúzió)",
        indication: {
          hu: "Szerin-karbapenemáz pozitív P. aeruginosa. MBL-negatív törzsekre hatásos.",
          en: "Serine-carbapenemase positive P. aeruginosa. Effective for MBL-negative strains.",
          de: "Serin-Carbapenemase positiver P. aeruginosa. Wirksam bei MBL-negativen Stämmen."
        },
        sideEffectsOrWarnings: {
          hu: "MBL (VIM/IMP) ellen rezisztens.",
          en: "Resistant to MBL (VIM/IMP).",
          de: "Resistent gegen MBL (VIM/IMP)."
        }
      },
      {
        drug: "Cefiderokol",
        dose: "2 g q8h i.v. (3 órás infúzió)",
        indication: {
          hu: "MBL-pozitív (VIM, IMP, NDM) CRPA fertőzések KIZÁRÓLAGOS BÉTA-LAKTÁM UTOLSÓ LEHETŐSÉGE!",
          en: "EXCLUSIVE BETA-LACTAM LAST RESORT for MBL-positive (VIM, IMP, NDM) CRPA infections!",
          de: "EXKLUSIVE BETA-LACTAM LETZTE OPTION für MBL-positive (VIM, IMP, NDM) CRPA Infektionen!"
        },
        sideEffectsOrWarnings: {
          hu: "Sziderofór transzport révén MBL jelenlétében is bejut a Pseudomonas sejtbe.",
          en: "Enters Pseudomonas via siderophore transport even in the presence of MBL.",
          de: "Gelangt über Siderophor-Transport auch bei MBL-Anwesenheit in die Pseudomonas-Zelle."
        }
      }
    ],
    clinicalAlerts: {
      hu: [
        "MBL-státusz döntő! MBL-negatív: Ceftolozán-Tazobactam / Imipenem-Relebactam 1. választás.",
        "MBL-pozitív (VIM/IMP): Cefiderokol vagy Aztreonam-Avibactam az egyetlen hatásos opció."
      ],
      en: [
        "MBL status is decisive! MBL-negative: Ceftolozane-Tazobactam / Imipenem-Relebactam 1st choice.",
        "MBL-positive (VIM/IMP): Cefiderocol or Aztreonam-Avibactam are the only effective options."
      ],
      de: [
        "MBL-Status entscheidend! MBL-negativ: Ceftolozan-Tazobactam / Imipenem-Relebactam 1. Wahl.",
        "MBL-positiv (VIM/IMP): Cefiderocol oder Aztreonam-Avibactam sind die einzigen wirksamen Optionen."
      ]
    }
  }
};

export const mdrStewardshipPrinciples = {
  pkpd: {
    title: {
      hu: "PK/PD Optimalizálás Beta-laktámoknál",
      en: "PK/PD Optimization for Beta-lactams",
      de: "PK/PD-Optimierung bei Beta-Lactamen"
    },
    items: [
      {
        hu: "Prolongált (EI: 3-4 órás) vagy Folyamatos (CI) infúzió: Időfüggő antibiotikumoknál (beta-laktámok) az fT > MIC maximális fenntartása érdekében a kritikus állapotú MDR fertőzések alapterápiája.",
        en: "Extended (EI: 3-4h) or Continuous (CI) Infusion: Standard of care for beta-lactams in critical MDR infections to maximize fT > MIC.",
        de: "Verlängerte (EI: 3-4 Std.) oder Kontinuierliche (CI) Infusion: Standardversorgung bei Beta-Lactamen zur Maximierung von fT > MIC."
      },
      {
        hu: "Terapeutikus Drug Monitoring (TDM): Kötelező Vancomycin esetén (AUC/MIC 400-600 cél), Aminoglikozidoknál (Cmax/MIC gátlás) és Colistin technikai adagolásánál.",
        en: "Therapeutic Drug Monitoring (TDM): Mandatory for Vancomycin (target AUC/MIC 400-600), Aminoglycosides (Cmax/MIC), and Colistin.",
        de: "Therapeutisches Drug Monitoring (TDM): Obligatorisch für Vancomycin (AUC/MIC 400-600), Aminoglykoside und Colistin."
      },
      {
        hu: "Magas dózisú protokollok: Tigecyclin esetén a standard 50mg q12h elégtelen; MDR törzsekre 200mg telítő dózis, majd 100mg q12h szükséges! Daptomycin esetén VRE/sepsisben 8-10-12 mg/kg/nap.",
        en: "High-dose protocols: Standard Tigecycline 50mg q12h is insufficient; 200mg loading then 100mg q12h required! Daptomycin 8-12 mg/kg/day in VRE/sepsis.",
        de: "Hochdosis-Protokolle: Standard-Tigecyclin ist unzureichend; 200mg Ladedosis dann 100mg q12h erforderlich! Daptomycin 8-12 mg/kg/Tag bei VRE."
      }
    ]
  },
  stewardship: {
    title: {
      hu: "Antibiotic Stewardship & Forráskontroll",
      en: "Antibiotic Stewardship & Source Control",
      de: "Antibiotic Stewardship & Herdsanierung"
    },
    items: [
      {
        hu: "Célzott Deeszkaláció: Amint a mikrobiológiai szenzitivitás és béta-laktamáz gén (PCR) ismert -> haladéktalanul a legszűkebb spektrumú hatékony szerre kell váltani.",
        en: "Targeted De-escalation: Switch to the narrowest effective spectrum agent as soon as PCR/sensitivity results arrive.",
        de: "Gezielte Deeskalation: Sobald PCR/Resistenzdaten vorliegen, sofort auf das schmalste wirksame Agenz umstellen."
      },
      {
        hu: "Kezelési időtartam minimalizálása: HAP/VAP esetén 7-8 nap; SSTI esetén 5-7 nap; szövődménymentes bacteremia esetén 7-14 nap.",
        en: "Duration Optimization: HAP/VAP 7-8 days; SSTI 5-7 days; uncomplicated bacteremia 7-14 days.",
        de: "Behandlungsdauer: HAP/VAP 7-8 Tage; SSTI 5-7 Tage; unkomplizierte Bakteriämie 7-14 Tage."
      },
      {
        hu: "Sebészi forráskontroll: Elengedhetetlen! Tályog drainálás, elhalt szövet debridement, fertőzött katéterek azonnali eltávolítása nélkül az antibiotikum-terápia önmagában sikertelen marad.",
        en: "Surgical Source Control: Mandatory! Abscess drainage, debridement, and immediate infected catheter removal are critical.",
        de: "Chirurgische Herdsanierung: Unerlässlich! Abszessdrainage, Debridement und Entfernung infizierter Katheter."
      }
    ]
  }
};
