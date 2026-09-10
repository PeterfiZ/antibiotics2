/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PregnancyLactationInfo {
  pregnancySafe: boolean; // Permitted in pregnancy (FDA B or clinical guideline recommended)
  lactationSafe: boolean; // Permitted during lactation (compatible with breastfeeding)
  fdaCategory: 'B' | 'C' | 'D' | 'N/A';
  pregnancyStatus: 'safe' | 'caution' | 'contraindicated';
  lactationStatus: 'safe' | 'caution' | 'contraindicated';
  pregnancySummary: {
    hu: string;
    en: string;
    de: string;
  };
  lactationSummary: {
    hu: string;
    en: string;
    de: string;
  };
}

export const PREGNANCY_LACTATION_DATA: Record<string, PregnancyLactationInfo> = {
  // 1. PENICILLINS
  penicillin_g: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B. Terhességben biztonságos és megengedett. Szifilisz és Streptococcus agalactiae (GBS) profilaxis arany standardja.',
      en: 'FDA B. Safe and permitted in pregnancy. Gold standard for syphilis and GBS prophylaxis.',
      de: 'FDA B. In der Schwangerschaft sicher und zugelassen. Goldstandard bei Syphilis und GBS-Prophylaxe.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható. Csak minimális mennyiségben választódik ki az anyatejbe.',
      en: 'Compatible with breastfeeding. Excreted into breast milk in trace amounts.',
      de: 'Mit dem Stillen vereinbar. Geht nur in minimalen Spuren in die Muttermilch über.'
    }
  },
  penicillin_v: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B. Terhességben biztonságos, elsővonalbeli szer streptococcus pharyngitisben.',
      en: 'FDA B. Safe in pregnancy; first-line agent for streptococcal pharyngitis.',
      de: 'FDA B. Sicher in der Schwangerschaft; Erstlinienmittel bei Streptokokken-Pharyngitis.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható. Minimális anyateji kiválasztódás.',
      en: 'Compatible with breastfeeding. Minimal excretion in breast milk.',
      de: 'Mit dem Stillen vereinbar. Minimale Ausscheidung in die Muttermilch.'
    }
  },
  amoxicillin: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B. Terhességben széles körben alkalmazott és biztonságos (légúti, fül-orr-gégészeti és húgyúti fertőzésekben).',
      en: 'FDA B. Widely used and safe throughout pregnancy for respiratory and urinary infections.',
      de: 'FDA B. Weit verbreitet und sicher in der Schwangerschaft bei Atemwegs- und Harnwegsinfektionen.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható. Csecsemőnél ritkán enyhe hasmenés előfordulhat, de a szoptatás folytatható.',
      en: 'Compatible with breastfeeding. Mild loose stools occasionally reported in infant, but nursing can continue.',
      de: 'Mit dem Stillen vereinbar. Gelegentlich weicher Stuhl beim Säugling, Stillen kann fortgesetzt werden.'
    }
  },
  amoxicillin_clavulanate: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B. Terhességben megengedett és biztonságos (koraszülés / PPROM esetén óvatossággal javasolt).',
      en: 'FDA B. Permitted and safe in pregnancy (use with caution in preterm rupture of membranes).',
      de: 'FDA B. In der Schwangerschaft erlaubt und sicher (Vorsicht bei vorzeitigem Blasensprung).'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható. Elhanyagolható anyateji szint.',
      en: 'Compatible with breastfeeding. Insignificant levels in breast milk.',
      de: 'Mit dem Stillen vereinbar. Vernachlässigbare Konzentration in der Muttermilch.'
    }
  },
  ampicillin: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B. Terhességben biztonságos és megengedett. Listeria monocytogenes fertőzésben 1. választás.',
      en: 'FDA B. Safe in pregnancy. First-line therapy for Listeria monocytogenes infections.',
      de: 'FDA B. Sicher in der Schwangerschaft. Erstlinientherapie bei Listeria monocytogenes.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható.',
      en: 'Compatible with breastfeeding.',
      de: 'Mit dem Stillen vereinbar.'
    }
  },
  ampicillin_sulbactam: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B. Terhességben megengedett és biztonságos parenterális béta-laktám kombináció.',
      en: 'FDA B. Permitted and safe parenteral beta-lactam combination in pregnancy.',
      de: 'FDA B. Zugelassene und sichere parenterale Beta-Lactam-Kombination in der Schwangerschaft.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható.',
      en: 'Compatible with breastfeeding.',
      de: 'Mit dem Stillen vereinbar.'
    }
  },
  flucloxacillin: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B. Terhességben megengedett és biztonságos MSSA fertőzésekben.',
      en: 'FDA B. Safe and permitted in pregnancy for MSSA infections.',
      de: 'FDA B. Sicher und erlaubt in der Schwangerschaft bei MSSA-Infektionen.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható (mastitis kezelésében gyakran választott szer).',
      en: 'Compatible with breastfeeding (frequently chosen agent for puerperal mastitis).',
      de: 'Mit dem Stillen vereinbar (oft erste Wahl bei Puerperalmastitis).'
    }
  },
  oxacillin: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B. Terhességben megengedett és biztonságos staphylococcus fertőzésekben.',
      en: 'FDA B. Permitted and safe in pregnancy for staphylococcal infections.',
      de: 'FDA B. Erlaubt und sicher in der Schwangerschaft bei Staphylokokken-Infektionen.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható.',
      en: 'Compatible with breastfeeding.',
      de: 'Mit dem Stillen vereinbar.'
    }
  },
  piperacillin: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B. Terhességben megengedett Pseudomonas és egyéb Gram-negatív fertőzésekben.',
      en: 'FDA B. Permitted in pregnancy for Pseudomonas and Gram-negative infections.',
      de: 'FDA B. In der Schwangerschaft bei Pseudomonas und gramnegativen Infektionen erlaubt.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható.',
      en: 'Compatible with breastfeeding.',
      de: 'Mit dem Stillen vereinbar.'
    }
  },
  piperacillin_tazobactam: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B. Terhességben megengedett és biztonságos súlyos, polimikrobiális vagy nosocomialis fertőzésekben.',
      en: 'FDA B. Permitted and safe in pregnancy for severe polymicrobial or hospital-acquired infections.',
      de: 'FDA B. In der Schwangerschaft bei schweren nosokomialen Infektionen erlaubt und sicher.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható.',
      en: 'Compatible with breastfeeding.',
      de: 'Mit dem Stillen vereinbar.'
    }
  },
  temocillin: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'EMA SmPC: Terhességben megengedett. Nincs foetotoxikus vagy teratogén hatás.',
      en: 'EMA SmPC: Permitted in pregnancy. No embryotoxic or teratogenic effects.',
      de: 'EMA Fachinformation: In der Schwangerschaft erlaubt. Keine teratogenen Effekte.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható.',
      en: 'Compatible with breastfeeding.',
      de: 'Mit dem Stillen vereinbar.'
    }
  },
  pivmecillinam: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B / EMA: Terhességben megengedett, akut cystitisben és tünetmentes bacteriuriában európai 1. vonalbeli szer.',
      en: 'FDA B / EMA: Permitted in pregnancy; European first-line agent for acute cystitis and asymptomatic bacteriuria.',
      de: 'FDA B / EMA: In der Schwangerschaft zugelassen; europäisches Erstlinienmittel bei akuter Zystitis.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható.',
      en: 'Compatible with breastfeeding.',
      de: 'Mit dem Stillen vereinbar.'
    }
  },

  // 2. CEPHALOSPORINS (1st - 5th gen)
  cephalexin: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B. Terhességben biztonságos és megengedett (húgyúti és bőrfertőzések 1. vonala).',
      en: 'FDA B. Safe and permitted in pregnancy (first-line for UTI and skin infections).',
      de: 'FDA B. Sicher und zugelassen in der Schwangerschaft (erste Wahl bei HWI und Hautinfektionen).'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható.',
      en: 'Compatible with breastfeeding.',
      de: 'Mit dem Stillen vereinbar.'
    }
  },
  cefazolin: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B. Terhességben biztonságos és megengedett; császármetszés perioperatív profilaxisának aranystandardja.',
      en: 'FDA B. Safe and permitted in pregnancy; gold standard perioperative prophylaxis in cesarean section.',
      de: 'FDA B. Sicher und zugelassen in der Schwangerschaft; Goldstandard zur Kaiserschnittprophylaxe.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható.',
      en: 'Compatible with breastfeeding.',
      de: 'Mit dem Stillen vereinbar.'
    }
  },
  cefaclor: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B. Terhességben megengedett és biztonságos 2. generációs cephalosporin.',
      en: 'FDA B. Permitted and safe 2nd generation cephalosporin in pregnancy.',
      de: 'FDA B. Zugelassenes und sicheres Cephalosporin der 2. Generation in der Schwangerschaft.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható.',
      en: 'Compatible with breastfeeding.',
      de: 'Mit dem Stillen vereinbar.'
    }
  },
  cefuroxime: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B. Terhességben széles körben alkalmazott, biztonságos és megengedett (orálisan és parenterálisan is).',
      en: 'FDA B. Widely used, safe and permitted throughout pregnancy (both oral and IV).',
      de: 'FDA B. Weit verbreitet, sicher und erlaubt in der gesamten Schwangerschaft (oral und i.v.).'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható.',
      en: 'Compatible with breastfeeding.',
      de: 'Mit dem Stillen vereinbar.'
    }
  },
  cefoxitin: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B. Terhességben megengedett és biztonságos kismedencei és anaerob fedést igénylő fertőzésekben.',
      en: 'FDA B. Safe and permitted in pregnancy for pelvic infections requiring anaerobic coverage.',
      de: 'FDA B. Sicher und erlaubt bei Beckeninfektionen mit Anaerobier-Beteiligung.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható.',
      en: 'Compatible with breastfeeding.',
      de: 'Mit dem Stillen vereinbar.'
    }
  },
  cefotaxime: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B. Terhességben biztonságos és megengedett; súlyos sepsisben és pyelonephritisben 1. választás.',
      en: 'FDA B. Safe and permitted in pregnancy; preferred 3rd gen cephalosporin for maternal sepsis and pyelonephritis.',
      de: 'FDA B. Sicher und zugelassen; bevorzugtes Cephalosporin bei Sepsis und Pyelonephritis in der Schwangerschaft.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható.',
      en: 'Compatible with breastfeeding.',
      de: 'Mit dem Stillen vereinbar.'
    }
  },
  ceftriaxone: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B. Terhességben biztonságos és megengedett. (Közvetlenül szülés előtt/újszülöttnél kernicterus rizikó miatt óvatosság).',
      en: 'FDA B. Safe and permitted in pregnancy (avoid in neonates/delivery due to bilirubin displacement).',
      de: 'FDA B. Sicher und erlaubt in der Schwangerschaft (Vorsicht unmittelbar peripartal wegen Kernikterus-Risiko beim Neugeborenen).'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható. Csak csekély mennyiségben választódik ki az anyatejbe.',
      en: 'Compatible with breastfeeding. Excreted into milk in very low concentrations.',
      de: 'Mit dem Stillen vereinbar. Geht nur in geringen Mengen in die Muttermilch über.'
    }
  },
  ceftazidime: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B. Terhességben megengedett és biztonságos Pseudomonas fertőzések esetén.',
      en: 'FDA B. Permitted and safe in pregnancy for Pseudomonas infections.',
      de: 'FDA B. In der Schwangerschaft bei Pseudomonas-Infektionen erlaubt und sicher.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható.',
      en: 'Compatible with breastfeeding.',
      de: 'Mit dem Stillen vereinbar.'
    }
  },
  cefixime: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B. Terhességben megengedett és biztonságos orális 3. generációs cephalosporin.',
      en: 'FDA B. Permitted and safe oral 3rd generation cephalosporin in pregnancy.',
      de: 'FDA B. Zugelassenes und sicheres orales Cephalosporin der 3. Generation in der Schwangerschaft.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható.',
      en: 'Compatible with breastfeeding.',
      de: 'Mit dem Stillen vereinbar.'
    }
  },
  cefoperazone: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B. Terhességben megengedett 3. generációs szer.',
      en: 'FDA B. Permitted in pregnancy.',
      de: 'FDA B. In der Schwangerschaft erlaubt.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható.',
      en: 'Compatible with breastfeeding.',
      de: 'Mit dem Stillen vereinbar.'
    }
  },
  cefepime: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B. Terhességben megengedett és biztonságos 4. generációs antipseudomonas cephalosporin.',
      en: 'FDA B. Permitted and safe in pregnancy (4th gen anti-pseudomonal cephalosporin).',
      de: 'FDA B. In der Schwangerschaft erlaubt und sicher (4. Generation Cephalosporin).'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható.',
      en: 'Compatible with breastfeeding.',
      de: 'Mit dem Stillen vereinbar.'
    }
  },
  ceftaroline: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B. Terhességben megengedett MRSA lefedésére alkalmas 5. generációs cephalosporin.',
      en: 'FDA B. Permitted in pregnancy; MRSA-active 5th generation cephalosporin.',
      de: 'FDA B. In der Schwangerschaft erlaubt; MRSA-wirksames Cephalosporin der 5. Generation.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható.',
      en: 'Compatible with breastfeeding.',
      de: 'Mit dem Stillen vereinbar.'
    }
  },
  ceftolozane_tazobactam: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B. Terhességben megengedett rezisztens Pseudomonas és Gram-negatív fertőzésekben.',
      en: 'FDA B. Permitted in pregnancy for MDR Pseudomonas and Gram-negative infections.',
      de: 'FDA B. In der Schwangerschaft bei MDR-Pseudomonas erlaubt.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható.',
      en: 'Compatible with breastfeeding.',
      de: 'Mit dem Stillen vereinbar.'
    }
  },
  ceftazidime_avibactam: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B. Terhességben megengedett carbapenem-rezisztens Enterobacterales (KPC, OXA-48) esetén.',
      en: 'FDA B. Permitted in pregnancy for carbapenem-resistant pathogens (KPC, OXA-48).',
      de: 'FDA B. In der Schwangerschaft bei Carbapenem-resistenten Keimen erlaubt.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható.',
      en: 'Compatible with breastfeeding.',
      de: 'Mit dem Stillen vereinbar.'
    }
  },
  cefepime_tazobactam: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B. Terhességben megengedett kiterjesztett spektrumú kombináció.',
      en: 'FDA B. Permitted in pregnancy.',
      de: 'FDA B. In der Schwangerschaft erlaubt.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható.',
      en: 'Compatible with breastfeeding.',
      de: 'Mit dem Stillen vereinbar.'
    }
  },
  cefepime_enmetazobactam: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'EMA / FDA jóváhagyott. Terhességben szükség esetén alkalmazható.',
      en: 'EMA / FDA approved. Permitted in pregnancy when clinically indicated.',
      de: 'EMA / FDA zugelassen. Bei klinischer Indikation in der Schwangerschaft erlaubt.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható.',
      en: 'Compatible with breastfeeding.',
      de: 'Mit dem Stillen vereinbar.'
    }
  },
  ceftaroline_avibactam: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B. Terhességben megengedett összetett rezisztens fertőzésekben.',
      en: 'FDA B. Permitted in pregnancy for complex resistant infections.',
      de: 'FDA B. In der Schwangerschaft erlaubt.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható.',
      en: 'Compatible with breastfeeding.',
      de: 'Mit dem Stillen vereinbar.'
    }
  },
  cefiderocol: {
    pregnancySafe: false,
    lactationSafe: false,
    fdaCategory: 'C',
    pregnancyStatus: 'caution',
    lactationStatus: 'caution',
    pregnancySummary: {
      hu: 'FDA C. Terhességben humán adatok korlátozottak; csak életveszélyes, más szerrel nem kezelhető multirezisztens fertőzésben adható.',
      en: 'FDA C. Limited human data; reserve for life-threatening XDR infections without safer alternatives.',
      de: 'FDA C. Begrenzte Daten; nur bei lebensbedrohlichen XDR-Infektionen ohne Alternativen.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt kellő adat hiányában nem javasolt.',
      en: 'Not recommended during breastfeeding due to insufficient data.',
      de: 'Während der Stillzeit mangels Daten nicht empfohlen.'
    }
  },

  // 3. CARBAPENEMS
  meropenem: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B. Terhességben megengedett és biztonságos. A carbapenemek közül a legbiztonságosabb, preferált szer terhességi súlyos sepsisben.',
      en: 'FDA B. Permitted and safe in pregnancy; preferred carbapenem for severe maternal sepsis.',
      de: 'FDA B. In der Schwangerschaft erlaubt und sicher; bevorzugtes Carbapenem bei schwerer Sepsis.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható. Anyatejbe alig jut át és a csecsemő bélrendszeréből nem szívódik fel.',
      en: 'Compatible with breastfeeding. Excreted in trace amounts; poorly absorbed from infant GI tract.',
      de: 'Mit dem Stillen vereinbar. Nur minimale Spuren in der Milch; wird oral kaum resorbiert.'
    }
  },
  ertapenem: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B. Terhességben megengedett és biztonságos ESBL fertőzésekben.',
      en: 'FDA B. Permitted and safe in pregnancy for ESBL infections.',
      de: 'FDA B. In der Schwangerschaft erlaubt und sicher bei ESBL-Infektionen.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható.',
      en: 'Compatible with breastfeeding.',
      de: 'Mit dem Stillen vereinbar.'
    }
  },
  imipenem_cilastatin: {
    pregnancySafe: false,
    lactationSafe: false,
    fdaCategory: 'C',
    pregnancyStatus: 'caution',
    lactationStatus: 'caution',
    pregnancySummary: {
      hu: 'FDA C. Terhességben a meropenem preferálandó (a cilastatin miatt állatkísérletben embriotoxicitás igazolódott).',
      en: 'FDA C. Meropenem is preferred in pregnancy due to cilastatin embryotoxicity concerns in animals.',
      de: 'FDA C. Meropenem ist in der Schwangerschaft vorzuziehen (Toxizitätsdaten für Cilastatin).'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt kellő adat hiányában a meropenem preferált.',
      en: 'Meropenem preferred during lactation.',
      de: 'Meropenem während der Stillzeit bevorzugt.'
    }
  },
  imipenem_cilastatin_relebactam: {
    pregnancySafe: false,
    lactationSafe: false,
    fdaCategory: 'C',
    pregnancyStatus: 'caution',
    lactationStatus: 'caution',
    pregnancySummary: {
      hu: 'FDA C. Terhességben adatok korlátozottak, csak egyéb alternatíva hiányában adható.',
      en: 'FDA C. Limited data; use only if alternative therapy is unavailable.',
      de: 'FDA C. Begrenzte Daten; nur bei Mangel an Alternativen.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt nem javasolt.',
      en: 'Not recommended during breastfeeding.',
      de: 'Während der Stillzeit nicht empfohlen.'
    }
  },
  meropenem_vaborbactam: {
    pregnancySafe: false,
    lactationSafe: false,
    fdaCategory: 'C',
    pregnancyStatus: 'caution',
    lactationStatus: 'caution',
    pregnancySummary: {
      hu: 'FDA C. Terhességben a vaborbaktám humán adatai korlátozottak.',
      en: 'FDA C. Limited human data for vaborbactam in pregnancy.',
      de: 'FDA C. Begrenzte Daten für Vaborbactam in der Schwangerschaft.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt óvatossággal adható.',
      en: 'Use with caution during breastfeeding.',
      de: 'Während der Stillzeit mit Vorsicht anwenden.'
    }
  },
  biapenem: {
    pregnancySafe: false,
    lactationSafe: false,
    fdaCategory: 'C',
    pregnancyStatus: 'caution',
    lactationStatus: 'caution',
    pregnancySummary: {
      hu: 'Terhességben korlátozott humán adat.',
      en: 'Limited pregnancy data.',
      de: 'Begrenzte Daten in der Schwangerschaft.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt óvatossággal.',
      en: 'Use with caution during lactation.',
      de: 'Vorsicht in der Stillzeit.'
    }
  },
  doripenem: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B. Terhességben megengedett.',
      en: 'FDA B. Permitted in pregnancy.',
      de: 'FDA B. In der Schwangerschaft erlaubt.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható.',
      en: 'Compatible with breastfeeding.',
      de: 'Mit dem Stillen vereinbar.'
    }
  },

  // 4. MACROLIDES & LINCOSAMIDES
  azithromycin: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B. Terhességben biztonságos és megengedett (Chlamydia trachomatis és atípusos pneumonia 1. választása).',
      en: 'FDA B. Safe and permitted in pregnancy (first-line for maternal Chlamydia and atypical pneumonia).',
      de: 'FDA B. Sicher und zugelassen (erste Wahl bei maternaler Chlamydia und atypischer Pneumonie).'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható.',
      en: 'Compatible with breastfeeding.',
      de: 'Mit dem Stillen vereinbar.'
    }
  },
  erythromycin: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B. Terhességben megengedett és biztonságos (kivéve az esztolát só, amely anyai májkárosodást okozhat).',
      en: 'FDA B. Permitted and safe in pregnancy (avoid estolate salt due to maternal hepatotoxicity risk).',
      de: 'FDA B. Erlaubt und sicher (außer Estolatsalz wegen hepatotoxischem Risiko der Mutter).'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható (csecsemőnél a pylorus stenosis tüneteit érdemes figyelni).',
      en: 'Compatible with breastfeeding (monitor infant for infantile hypertrophic pyloric stenosis).',
      de: 'Mit dem Stillen vereinbar (auf Symptome einer Pylorusstenose beim Säugling achten).'
    }
  },
  spiramycin: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B / EMA: Terhességben biztonságos és megengedett. Toxoplasma gondii transzplacentáris fertőzés megelőzésének 1. választása!',
      en: 'FDA B / EMA: Safe and permitted in pregnancy. First-line agent to prevent congenital Toxoplasmosis!',
      de: 'FDA B / EMA: Sicher und zugelassen. Mittel der 1. Wahl zur Verhinderung der kongenitalen Toxoplasmose!'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható.',
      en: 'Compatible with breastfeeding.',
      de: 'Mit dem Stillen vereinbar.'
    }
  },
  clarithromycin: {
    pregnancySafe: false,
    lactationSafe: false,
    fdaCategory: 'C',
    pregnancyStatus: 'caution',
    lactationStatus: 'caution',
    pregnancySummary: {
      hu: 'FDA C. Terhességben kerülendő, állatkísérletben magzati károsodás igazolódott. Azithromycin választandó helyette.',
      en: 'FDA C. Avoid in pregnancy; embryofetal harm shown in animals. Azithromycin is preferred.',
      de: 'FDA C. In der Schwangerschaft meiden; teratogene Effekte im Tierversuch. Azithromycin bevorzugt.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt nem elsővonalbeli (azithromycin preferált).',
      en: 'Not first-line in lactation (azithromycin preferred).',
      de: 'Während der Stillzeit nicht erste Wahl (Azithromycin bevorzugt).'
    }
  },
  roxithromycin: {
    pregnancySafe: false,
    lactationSafe: false,
    fdaCategory: 'B',
    pregnancyStatus: 'caution',
    lactationStatus: 'caution',
    pregnancySummary: {
      hu: 'FDA B/C. Korlátozott humán adat terhességben; azithromycin preferált.',
      en: 'Limited pregnancy data; azithromycin preferred.',
      de: 'Begrenzte Daten; Azithromycin ist vorzuziehen.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt kellő adat hiányában óvatosság indokolt.',
      en: 'Use with caution during breastfeeding.',
      de: 'In der Stillzeit mit Vorsicht anwenden.'
    }
  },
  telithromycin: {
    pregnancySafe: false,
    lactationSafe: false,
    fdaCategory: 'C',
    pregnancyStatus: 'contraindicated',
    lactationStatus: 'contraindicated',
    pregnancySummary: {
      hu: 'FDA C. Súlyos hepatotoxicitás és cardiotoxicitás veszélye miatt terhességben ellenjavallt.',
      en: 'FDA C. Contraindicated in pregnancy due to severe hepatotoxicity risks.',
      de: 'FDA C. Wegen Hepatotoxizitätsrisiko in der Schwangerschaft kontraindiziert.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt ellenjavallt.',
      en: 'Contraindicated during lactation.',
      de: 'In der Stillzeit kontraindiziert.'
    }
  },
  clindamycin: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B. Terhességben biztonságos és megengedett (kulcsfontosságú béta-laktám allergia esetén, GBS profilaxisban és bakteriális vaginosisban).',
      en: 'FDA B. Safe and permitted in pregnancy (essential for beta-lactam allergic patients, GBS prophylaxis, and BV).',
      de: 'FDA B. Sicher und zugelassen in der Schwangerschaft (wichtig bei Penicillinallergie, GBS und bakterieller Vaginose).'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható (csecsemő székletét figyelni kell C. difficile / hasmenés miatt).',
      en: 'Compatible with breastfeeding (monitor infant stool for loose stools/diarrhea).',
      de: 'Mit dem Stillen vereinbar (Stuhl des Säuglings auf Diarrhoe überwachen).'
    }
  },
  fidaxomicin: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B. Terhességben megengedett C. difficile fertőzésben (szisztémás felszívódása elhanyagolható).',
      en: 'FDA B. Permitted in pregnancy for C. difficile colitis (systemic absorption is negligible).',
      de: 'FDA B. Bei C. difficile-Enterokolitis in der Schwangerschaft erlaubt (kaum systemische Resorption).'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható (nem szívódik fel szisztémásan).',
      en: 'Compatible with breastfeeding (minimal systemic absorption).',
      de: 'Mit dem Stillen vereinbar (praktisch keine Resorption).'
    }
  },

  // 5. URINARY & SPECIAL DRUGS
  fosfomycin: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'safe',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA B. Terhességben biztonságos és megengedett; terhességi tünetmentes bacteriuria és akut cystitis 1. vonalbeli szere (3 g egyszeri adag).',
      en: 'FDA B. Safe and permitted in pregnancy; first-line single-dose (3 g) therapy for gestational bacteriuria and cystitis.',
      de: 'FDA B. Sicher und zugelassen; Erstlinien-Einzeldosistherapie (3 g) bei asymptomatischer Bakteriurie und Zystitis.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható. Csak csekély mértékben választódik ki az anyatejbe.',
      en: 'Compatible with breastfeeding. Excreted in breast milk in negligible amounts.',
      de: 'Mit dem Stillen vereinbar. Geht nur in geringen Mengen in die Muttermilch über.'
    }
  },
  nitrofurantoin: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'caution',
    lactationStatus: 'caution',
    pregnancySummary: {
      hu: 'FDA B. Az I. és II. trimeszterben megengedett és hatékony. FIGYELEM: A 36-42. héten (terminus környékén) ellenjavallt az újszülöttkori haemolyticus anaemia veszélye miatt!',
      en: 'FDA B. Permitted and effective in 1st & 2nd trimesters. NOTE: Contraindicated at term (weeks 36-42) due to neonatal hemolysis risk!',
      de: 'FDA B. Im 1. und 2. Trimenon erlaubt und wirksam. ACHTUNG: Ab der 36. SSW (Terminnähe) wegen Gefahr von Neugeborenenhämolyse kontraindiziert!'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható 1 hónaposnál idősebb csecsemő esetén (G6PD hiányos vagy koraszülött csecsemőnél kerülendő).',
      en: 'Compatible with breastfeeding in healthy infants > 1 month (avoid if infant has G6PD deficiency).',
      de: 'Mit dem Stillen vereinbar bei gesunden Säuglingen > 1 Monat (meiden bei G6PD-Mangel).'
    }
  },
  metronidazole: {
    pregnancySafe: true,
    lactationSafe: true,
    fdaCategory: 'B',
    pregnancyStatus: 'caution',
    lactationStatus: 'caution',
    pregnancySummary: {
      hu: 'FDA B. Terhességben megengedett (különösen a II-III. trimeszterben; Trichomoniasisban és bakteriális vaginosisban 1. választás).',
      en: 'FDA B. Permitted in pregnancy (especially 2nd & 3rd trimester; first-line for Trichomoniasis and BV).',
      de: 'FDA B. In der Schwangerschaft erlaubt (insbesondere 2. und 3. Trimenon; 1. Wahl bei Trichomoniasis und BV).'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt alkalmazható. Átjut az anyatejbe és keserű ízt adhat; nagy dózis után 12 órás szoptatási szünet megfontolható.',
      en: 'Compatible with breastfeeding. Excreted in milk and may impart bitter taste; temporary pause optional after high single doses.',
      de: 'Mit dem Stillen vereinbar. Geht in Milch über (bitterer Geschmack); nach hoher Einzeldosis kurze Stillpause erwägen.'
    }
  },

  // 6. GLYCOPEPTIDES & LIPOGLYCOPEPTIDES
  vancomycin: {
    pregnancySafe: false,
    lactationSafe: true,
    fdaCategory: 'C',
    pregnancyStatus: 'caution',
    lactationStatus: 'safe',
    pregnancySummary: {
      hu: 'FDA C (IV) / B (per os). Terhességben csak szigorú vitális indikációban (MRSA sepsis, endocarditis) adható szoros szérumszint monitorozás (TDM) mellett.',
      en: 'FDA C (IV) / B (oral). In pregnancy, reserved for serious/life-threatening MRSA infections with mandatory TDM.',
      de: 'FDA C (i.v.) / B (oral). In der Schwangerschaft nur bei strenger Indikation (MRSA-Sepsis) unter TDM-Monitoring.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt megengedett (anyatejbe alig jut át és a csecsemő bélrendszeréből nem szívódik fel).',
      en: 'Compatible with breastfeeding (poorly excreted in milk and not absorbed orally by infant).',
      de: 'Mit dem Stillen vereinbar (geht kaum in die Milch über und wird enteral nicht resorbiert).'
    }
  },
  teicoplanin: {
    pregnancySafe: false,
    lactationSafe: false,
    fdaCategory: 'C',
    pregnancyStatus: 'caution',
    lactationStatus: 'caution',
    pregnancySummary: {
      hu: 'FDA C. Terhességben korlátozott adatok; vancomycin szorosabb tapasztalattal rendelkezik.',
      en: 'FDA C. Limited data in pregnancy; vancomycin has more established clinical safety data.',
      de: 'FDA C. Begrenzte Daten; Vancomycin ist besser untersucht.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt kellő adat hiányában óvatosság indokolt.',
      en: 'Use with caution during lactation.',
      de: 'In der Stillzeit mit Vorsicht anwenden.'
    }
  },
  dalbavancin: {
    pregnancySafe: false,
    lactationSafe: false,
    fdaCategory: 'C',
    pregnancyStatus: 'contraindicated',
    lactationStatus: 'contraindicated',
    pregnancySummary: {
      hu: 'FDA C. Rendkívül hosszú felezési idő (14 nap) és humán adatok hiánya miatt terhességben kerülendő.',
      en: 'FDA C. Avoid in pregnancy due to extremely long half-life (~14 days) and lack of human safety data.',
      de: 'FDA C. Wegen extrem langer Halbwertszeit (14 Tage) in der Schwangerschaft meiden.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt ellenjavallt.',
      en: 'Contraindicated during breastfeeding.',
      de: 'In der Stillzeit kontraindiziert.'
    }
  },
  oritavancin: {
    pregnancySafe: false,
    lactationSafe: false,
    fdaCategory: 'C',
    pregnancyStatus: 'contraindicated',
    lactationStatus: 'contraindicated',
    pregnancySummary: {
      hu: 'FDA C. Rendkívül hosszú felezési idő miatt terhességben nem javasolt.',
      en: 'FDA C. Not recommended in pregnancy due to prolonged elimination half-life.',
      de: 'FDA C. Wegen langer Halbwertszeit in der Schwangerschaft nicht empfohlen.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt nem javasolt.',
      en: 'Not recommended during lactation.',
      de: 'Während der Stillzeit nicht empfohlen.'
    }
  },
  telavancin: {
    pregnancySafe: false,
    lactationSafe: false,
    fdaCategory: 'C',
    pregnancyStatus: 'contraindicated',
    lactationStatus: 'contraindicated',
    pregnancySummary: {
      hu: 'FDA C (Black Box figyelmeztetés). Állatkísérletben igazolt teratogenitás; terhességben szigorúan ellenjavallt!',
      en: 'FDA C (Black Box Warning). Demonstrated teratogenicity in animals; strictly contraindicated in pregnancy!',
      de: 'FDA C (Black-Box-Warnung). Teratogen im Tierversuch; in der Schwangerschaft streng kontraindiziert!'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt ellenjavallt.',
      en: 'Contraindicated during lactation.',
      de: 'In der Stillzeit kontraindiziert.'
    }
  },

  // 7. FLUOROQUINOLONES (CONTRAINDICATED IN PREGNANCY)
  ciprofloxacin: {
    pregnancySafe: false,
    lactationSafe: false,
    fdaCategory: 'C',
    pregnancyStatus: 'contraindicated',
    lactationStatus: 'contraindicated',
    pregnancySummary: {
      hu: 'FDA C. Terhességben KERÜLENDŐ / ELLENJAVALLT az ízületi porc fejlődési rendellenessége (arthropathia) és ínkárosodás veszélye miatt.',
      en: 'FDA C. AVOID / CONTRAINDICATED in pregnancy due to cartilage damage and arthropathy in developing fetus.',
      de: 'FDA C. In der Schwangerschaft KONTRAINDIZIERT wegen Gefahr von Knorpel- und Gelenkschäden beim Fetus.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt nem javasolt (átjut az anyatejbe, porckárosodási kockázat).',
      en: 'Not recommended during breastfeeding due to potential infant arthropathy.',
      de: 'Während der Stillzeit wegen Arthropathierisiko nicht empfohlen.'
    }
  },
  levofloxacin: {
    pregnancySafe: false,
    lactationSafe: false,
    fdaCategory: 'C',
    pregnancyStatus: 'contraindicated',
    lactationStatus: 'contraindicated',
    pregnancySummary: {
      hu: 'FDA C. Terhességben KERÜLENDŐ / ELLENJAVALLT a magzati porckárosodás és arthropathia kockázata miatt.',
      en: 'FDA C. AVOID / CONTRAINDICATED in pregnancy due to potential fetal arthropathy and tendon toxicity.',
      de: 'FDA C. In der Schwangerschaft KONTRAINDIZIERT wegen Knorpelschäden beim Fetus.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt ellenjavallt.',
      en: 'Contraindicated during breastfeeding.',
      de: 'In der Stillzeit kontraindiziert.'
    }
  },
  moxifloxacin: {
    pregnancySafe: false,
    lactationSafe: false,
    fdaCategory: 'C',
    pregnancyStatus: 'contraindicated',
    lactationStatus: 'contraindicated',
    pregnancySummary: {
      hu: 'FDA C. Terhességben KERÜLENDŐ / ELLENJAVALLT a fejlődő porcszövet károsodása miatt.',
      en: 'FDA C. CONTRAINDICATED in pregnancy due to potential cartilage damage.',
      de: 'FDA C. In der Schwangerschaft KONTRAINDIZIERT.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt ellenjavallt.',
      en: 'Contraindicated during lactation.',
      de: 'In der Stillzeit kontraindiziert.'
    }
  },

  // 8. TETRACYCLINES (CONTRAINDICATED IN PREGNANCY - FDA D)
  doxycycline: {
    pregnancySafe: false,
    lactationSafe: false,
    fdaCategory: 'D',
    pregnancyStatus: 'contraindicated',
    lactationStatus: 'contraindicated',
    pregnancySummary: {
      hu: 'FDA D. Terhességben SZIGORÚAN ELLENJAVALLT! Csontnövekedés gátlása, tej- és maradófogak végleges sárgásbarna elszíneződése, zománchipoplázia.',
      en: 'FDA D. STRICTLY CONTRAINDICATED in pregnancy! Inhibition of bone growth, permanent yellow-brown tooth discoloration, and enamel hypoplasia.',
      de: 'FDA D. In der Schwangerschaft STRENG KONTRAINDIZIERT! Hemmung des Knochenwachstums und dauerhafte Zahnverfärbung.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt tartós adagolása ellenjavallt (fogzománc károsodás veszélye).',
      en: 'Contraindicated for prolonged use during breastfeeding (risk of tooth staining).',
      de: 'Bei längerer Einnahme während der Stillzeit kontraindiziert.'
    }
  },
  minocycline: {
    pregnancySafe: false,
    lactationSafe: false,
    fdaCategory: 'D',
    pregnancyStatus: 'contraindicated',
    lactationStatus: 'contraindicated',
    pregnancySummary: {
      hu: 'FDA D. Terhességben ellenjavallt a csontfejlődés és a fogak maradandó károsítása miatt.',
      en: 'FDA D. Contraindicated in pregnancy due to bone and tooth toxicity.',
      de: 'FDA D. In der Schwangerschaft kontraindiziert.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt ellenjavallt.',
      en: 'Contraindicated during lactation.',
      de: 'In der Stillzeit kontraindiziert.'
    }
  },
  tigecycline: {
    pregnancySafe: false,
    lactationSafe: false,
    fdaCategory: 'D',
    pregnancyStatus: 'contraindicated',
    lactationStatus: 'contraindicated',
    pregnancySummary: {
      hu: 'FDA D. Terhességben ellenjavallt (tetraciklin-szerű csont- és fogkárosodás).',
      en: 'FDA D. Contraindicated in pregnancy (tetracycline-class fetal toxicity).',
      de: 'FDA D. In der Schwangerschaft kontraindiziert.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt ellenjavallt.',
      en: 'Contraindicated during lactation.',
      de: 'In der Stillzeit kontraindiziert.'
    }
  },
  eravacycline: {
    pregnancySafe: false,
    lactationSafe: false,
    fdaCategory: 'D',
    pregnancyStatus: 'contraindicated',
    lactationStatus: 'contraindicated',
    pregnancySummary: {
      hu: 'FDA D. Terhességben ellenjavallt (fogelszíneződés és csontnövekedés gátlása).',
      en: 'FDA D. Contraindicated in pregnancy.',
      de: 'FDA D. In der Schwangerschaft kontraindiziert.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt ellenjavallt.',
      en: 'Contraindicated during lactation.',
      de: 'In der Stillzeit kontraindiziert.'
    }
  },
  omadacycline: {
    pregnancySafe: false,
    lactationSafe: false,
    fdaCategory: 'D',
    pregnancyStatus: 'contraindicated',
    lactationStatus: 'contraindicated',
    pregnancySummary: {
      hu: 'FDA D. Terhességben ellenjavallt.',
      en: 'FDA D. Contraindicated in pregnancy.',
      de: 'FDA D. In der Schwangerschaft kontraindiziert.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt ellenjavallt.',
      en: 'Contraindicated during lactation.',
      de: 'In der Stillzeit kontraindiziert.'
    }
  },
  sarecycline: {
    pregnancySafe: false,
    lactationSafe: false,
    fdaCategory: 'D',
    pregnancyStatus: 'contraindicated',
    lactationStatus: 'contraindicated',
    pregnancySummary: {
      hu: 'FDA D. Terhességben ellenjavallt.',
      en: 'FDA D. Contraindicated in pregnancy.',
      de: 'FDA D. In der Schwangerschaft kontraindiziert.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt ellenjavallt.',
      en: 'Contraindicated during lactation.',
      de: 'In der Stillzeit kontraindiziert.'
    }
  },

  // 9. AMINOGLYCOSIDES (CONTRAINDICATED IN PREGNANCY - FDA D)
  gentamicin: {
    pregnancySafe: false,
    lactationSafe: false,
    fdaCategory: 'D',
    pregnancyStatus: 'contraindicated',
    lactationStatus: 'caution',
    pregnancySummary: {
      hu: 'FDA D. Terhességben KERÜLENDŐ / ELLENJAVALLT a magzati ototoxicitás (VIII. agyideg károsodás, veleszületett kétoldali süketség) és nefrotoxicitás kockázata miatt.',
      en: 'FDA D. AVOID / CONTRAINDICATED in pregnancy due to risk of congenital ototoxicity (cranial nerve VIII damage, irreversible bilateral deafness) and nephrotoxicity.',
      de: 'FDA D. In der Schwangerschaft KONTRAINDIZIERT wegen Gefahr kongenitaler Ototoxizität (Taubheit) und Nephrotoxizität.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt óvatossággal alkalmazható (minimális anyateji kiválasztódás és nem szívódik fel per os, de a bélflórát módosíthatja).',
      en: 'Use with caution during breastfeeding (poorly absorbed orally by infant, but may alter infant gut flora).',
      de: 'In der Stillzeit mit Vorsicht anwendbar (orale Resorption beim Säugling vernachlässigbar).'
    }
  },
  amikacin: {
    pregnancySafe: false,
    lactationSafe: false,
    fdaCategory: 'D',
    pregnancyStatus: 'contraindicated',
    lactationStatus: 'caution',
    pregnancySummary: {
      hu: 'FDA D. Terhességben ellenjavallt a magzati irreverzibilis belsőfül- és vesekárosodás veszélye miatt.',
      en: 'FDA D. Contraindicated in pregnancy due to risk of irreversible fetal ototoxicity and nephrotoxicity.',
      de: 'FDA D. In der Schwangerschaft kontraindiziert (Ototoxizität beim Fetus).'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt óvatossággal adható.',
      en: 'Use with caution during lactation.',
      de: 'In der Stillzeit mit Vorsicht.'
    }
  },
  tobramycin: {
    pregnancySafe: false,
    lactationSafe: false,
    fdaCategory: 'D',
    pregnancyStatus: 'contraindicated',
    lactationStatus: 'caution',
    pregnancySummary: {
      hu: 'FDA D. Terhességben szisztémásan ellenjavallt (magzati halláskárosodás rizikója).',
      en: 'FDA D. Systemic use contraindicated in pregnancy (fetal ototoxicity risk).',
      de: 'FDA D. Systemisch in der Schwangerschaft kontraindiziert.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt óvatossággal.',
      en: 'Use with caution during lactation.',
      de: 'In der Stillzeit mit Vorsicht.'
    }
  },
  plazomicin: {
    pregnancySafe: false,
    lactationSafe: false,
    fdaCategory: 'D',
    pregnancyStatus: 'contraindicated',
    lactationStatus: 'caution',
    pregnancySummary: {
      hu: 'FDA D. Újabb aminoglikozid; terhességben magzati károsodás kockázata miatt ellenjavallt.',
      en: 'FDA D. Contraindicated in pregnancy due to aminoglycoside-class fetal risks.',
      de: 'FDA D. In der Schwangerschaft kontraindiziert.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt óvatossággal.',
      en: 'Use with caution during lactation.',
      de: 'In der Stillzeit mit Vorsicht.'
    }
  },

  // 10. SULFONAMIDES & TRIMETHOPRIM
  cotrimoxazole: {
    pregnancySafe: false,
    lactationSafe: false,
    fdaCategory: 'D',
    pregnancyStatus: 'contraindicated',
    lactationStatus: 'contraindicated',
    pregnancySummary: {
      hu: 'FDA D / C. Terhességben KERÜLENDŐ / ELLENJAVALLT! I. trimeszterben folsav-antagonizmus miatt velőcsőzáródási rendellenességet (spina bifida) okozhat. A III. trimeszter végén/terminusban súlyos magzati/újszülöttkori kernicterust és hyperbilirubinaemiát vált ki.',
      en: 'FDA D / C. AVOID / CONTRAINDICATED in pregnancy! 1st trimester: antifolate teratogenicity (neural tube defects). 3rd trimester / near term: neonatal kernicterus and severe hyperbilirubinemia.',
      de: 'FDA D / C. In der Schwangerschaft KONTRAINDIZIERT! 1. Trimenon: Folsäureantagonismus (Neuralrohrdefekte). 3. Trimenon: Gefahr von Kernikterus und schwerer Hyperbilirubinämie beim Neugeborenen.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt ELLENJAVALLT (újszülöttnél kernicterus és G6PD hiányos haemolysis rizikója).',
      en: 'CONTRAINDICATED during breastfeeding in neonates and G6PD-deficient infants (kernicterus risk).',
      de: 'In der Stillzeit KONTRAINDIZIERT (Kernikterus- und Hämolysegefahr beim Säugling).'
    }
  },

  // 11. OXAZOLIDINONES & OTHERS
  linezolid: {
    pregnancySafe: false,
    lactationSafe: false,
    fdaCategory: 'C',
    pregnancyStatus: 'caution',
    lactationStatus: 'caution',
    pregnancySummary: {
      hu: 'FDA C. Terhességben humán biztonságossági adatok korlátozottak; csak szigorú vitális indikációban (rezisztens Gram-pozitív fertőzés) adható.',
      en: 'FDA C. Limited human data; reserve for severe infections with no safer alternatives.',
      de: 'FDA C. Begrenzte Daten; nur bei schweren Infektionen ohne sicherere Alternativen.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt az alkalmazása nem javasolt (átjut az anyatejbe).',
      en: 'Not recommended during breastfeeding (passes into breast milk).',
      de: 'Während der Stillzeit nicht empfohlen.'
    }
  },
  colistin: {
    pregnancySafe: false,
    lactationSafe: false,
    fdaCategory: 'C',
    pregnancyStatus: 'caution',
    lactationStatus: 'caution',
    pregnancySummary: {
      hu: 'FDA C. Terhességben anyai és magzati nefro- és neurotoxicitás kockázata; kizárólag pan-rezisztens Gram-negatív fertőzésben adható.',
      en: 'FDA C. Risk of maternal/fetal nephro- and neurotoxicity; reserve for pan-drug resistant Gram-negative infections.',
      de: 'FDA C. Nephro- und Neurotoxizitätsrisiko; nur bei Pan-Resistenz als Ultima Ratio.'
    },
    lactationSummary: {
      hu: 'Szoptatás alatt óvatossággal, szoros megfigyeléssel.',
      en: 'Use with extreme caution during lactation.',
      de: 'In der Stillzeit mit äußerster Vorsicht.'
    }
  }
};

/**
 * Returns pregnancy and lactation safety profile for an antibiotic ID
 */
export function getPregnancyLactationInfo(drugId: string | undefined): PregnancyLactationInfo | null {
  if (!drugId) return null;
  const cleanId = drugId.toLowerCase().replace(/_\d+$/, '').trim();
  return PREGNANCY_LACTATION_DATA[cleanId] || null;
}
