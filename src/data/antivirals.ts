/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface AntiviralData {
  id: string;
  name: string;
  group: { hu: string; en: string; de: string };
  targetViruses: { hu: string; en: string; de: string };
  halfLife: { hu: string; en: string; de: string };
  effectType: { hu: string; en: string; de: string };
  specialFeature: { hu: string; en: string; de: string };
  mechanismOfAction: { hu: string; en: string; de: string };
  dosage: {
    adult: { hu: string; en: string; de: string };
    pediatric: { hu: string; en: string; de: string };
    prophylaxis: { hu: string; en: string; de: string };
    renal: { hu: string; en: string; de: string };
    hepatic: { hu: string; en: string; de: string };
  };
  indications: { hu: string[]; en: string[]; de: string[] };
  sideEffects: { hu: string[]; en: string[]; de: string[] };
  practicalTips: { hu: string[]; en: string[]; de: string[] };
}

export const antiviralsData: AntiviralData[] = [
  {
    id: 'aciclovir_valaciclovir',
    name: 'Aciclovir / Valaciclovir',
    group: {
      hu: 'Herpesvírus-ellenes szerek (Nukleozid analógok)',
      en: 'Anti-herpesvirus agents (Nucleoside analogues)',
      de: 'Antiherpes-Wirkstoffe (Nukleosid-Analoga)'
    },
    targetViruses: {
      hu: 'HSV-1, HSV-2, Varicella-Zoster Vírus (VZV), ritkábban EBV',
      en: 'HSV-1, HSV-2, Varicella-Zoster Virus (VZV), rarely EBV',
      de: 'HSV-1, HSV-2, Varicella-Zoster-Virus (VZV), selten EBV'
    },
    halfLife: {
      hu: 'Plazma felezési idő: kb. 2.5 - 3 óra (veseelégtelenségben akár 20 óra)',
      en: 'Plasma half-life: approx. 2.5 - 3 hours (up to 20 hours in ESRD)',
      de: 'Plasmahalbwertszeit: ca. 2,5 - 3 Stunden (bei Nierenversagen bis zu 20 Stunden)'
    },
    effectType: {
      hu: 'Virosztatikus (Szelektív viral DNS-szintézis és polimeráz gátló)',
      en: 'Virostatic (Selective viral DNA synthesis & polymerase inhibitor)',
      de: 'Virostatisch (Selektiver viraler DNA-Synthese- und Polymerase-Hemmer)'
    },
    specialFeature: {
      hu: 'Magas fokú virológiai szelektivitás: csak a vírussal fertőzött sejtekben aktíválódik a vírusi timidin-kináz (TK) enzim jelenlétében. A Valaciclovir az Aciclovir prodrugja, orális biohasznosulása 3-5-szöröse (55%).',
      en: 'High virological selectivity: activated only in virus-infected cells by viral thymidine kinase (TK). Valaciclovir is an ester prodrug with 3-5x higher oral bioavailability (55%).',
      de: 'Hohe virologische Selektivität: Aktivierung nur in infizierten Zellen durch virale Thymidinkinase (TK). Valaciclovir ist ein Prodrug mit 3-5-fach höherer oraler Bioverfügbarkeit (55%).'
    },
    mechanismOfAction: {
      hu: 'A vírusi timidin-kináz (TK) monofoszfáttá alakítja, majd a celluláris kinázok trifoszfáttá foszforilálják. Az aciclovir-trifoszfát gátolja a vírusi DNS-polimerázt és lánczáróként (chain terminator) beépül a vírusi DNS-be.',
      en: 'Phosphorylated to monophosphate by viral thymidine kinase (TK), then to triphosphate by cellular kinases. Aciclovir triphosphate inhibits viral DNA polymerase and acts as an obligate chain terminator.',
      de: 'Wird durch virale Thymidinkinase (TK) zum Monophosphat und durch zelluläre Kinasen zum Triphosphat phosphoryliert. Aciclovir-Triphosphat hemmt die virale DNA-Polymerase und wirkt als Kettenabbrecher.'
    },
    dosage: {
      adult: {
        hu: 'Aciclovir: HSV 5x 200 mg p.o. vagy 3x 5-10 mg/ttkg i.v.; VZV 5x 800 mg p.o. vagy 3x 10 mg/ttkg i.v. Valaciclovir: HSV 2x 500 mg p.o.; VZV / Herpes Zoster 3x 1000 mg p.o.',
        en: 'Aciclovir: HSV 200 mg 5x/day p.o. or 5-10 mg/kg q8h i.v.; VZV 800 mg 5x/day p.o. or 10 mg/kg q8h i.v. Valaciclovir: HSV 500 mg b.i.d. p.o.; VZV 1000 mg t.i.d. p.o.',
        de: 'Aciclovir: HSV 5x 200 mg p.o. oder 3x 5-10 mg/kg i.v.; VZV 5x 800 mg p.o. oder 3x 10 mg/kg i.v. Valaciclovir: HSV 2x 500 mg p.o.; VZV 3x 1000 mg p.o.'
      },
      pediatric: {
        hu: 'Aciclovir: HSV 20 mg/ttkg 4x/nap p.o. (max 800 mg adagonként); VZV 20 mg/ttkg 4x/nap. Újszülöttkori HSV: 20 mg/ttkg 8 óránként i.v. 14-21 napig.',
        en: 'Aciclovir: HSV 20 mg/kg 4x/day p.o. (max 800 mg/dose); VZV 20 mg/kg 4x/day. Neonatal HSV: 20 mg/kg q8h i.v. for 14-21 days.',
        de: 'Aciclovir: HSV 20 mg/kg 4x/Tag p.o. (max. 800 mg/Dosis); VZV 20 mg/kg 4x/Tag. Neonatales HSV: 20 mg/kg 8-stündlich i.v. für 14-21 Tage.'
      },
      prophylaxis: {
        hu: 'Recidiváló HSV szuppresszió: Aciclovir 2x 400 mg p.o. vagy Valaciclovir 1x 500 mg p.o. naponta. Immunhiányos profilaxis: Aciclovir 2-4x 400 mg p.o.',
        en: 'Recurrent HSV suppression: Aciclovir 400 mg b.i.d. p.o. or Valaciclovir 500 mg q.d. p.o. Immunocompromised prophylaxis: Aciclovir 400 mg 2-4x/day.',
        de: 'Rezidivierende HSV-Suppression: Aciclovir 2x 400 mg p.o. oder Valaciclovir 1x 500 mg p.o. täglich. Prophylaxe bei Immundefizienz: Aciclovir 400 mg 2-4x/Tag.'
      },
      renal: {
        hu: 'GFR 25-50 ml/perc: VZV adagolási időköz növelése (12 órára); GFR 10-25 ml/perc: 2x 500 mg Valaciclovir; GFR <10 ml/perc / Hemodialízis: Aciclovir 2.5-5 mg/ttkg 24 óránként, HD után pótadag.',
        en: 'GFR 25-50 mL/min: Extend VZV interval; GFR 10-25 mL/min: Valaciclovir 500 mg b.i.d.; GFR <10 mL/min / HD: Aciclovir 2.5-5 mg/kg q24h, redose after HD.',
        de: 'GFR 25-50 ml/min: VZV-Intervall verlängern; GFR 10-25 ml/min: Valaciclovir 500 mg 2x/Tag; GFR <10 ml/min / HD: Aciclovir 2,5-5 mg/kg 24-stündlich, Dosis nach HD.'
      },
      hepatic: {
        hu: 'Nem igényel rutinszerű adagmódosítást. Súlyos májelégtelenségben a Valaciclovir aciclovirrá alakulása elhúzódhat, de a plazmaszintek nem változnak szignifikánsan.',
        en: 'No routine dose adjustment required. Conversion of Valaciclovir to Aciclovir may be slowed in severe liver cirrhosis, but overall exposure remains similar.',
        de: 'Keine routinemäßige Dosisanpassung erforderlich. Bei schwerer Leberzirrhose kann die Umwandlung von Valaciclovir verlangsamt sein.'
      }
    },
    indications: {
      hu: [
        'Herpes Simplex vírus (HSV-1, HSV-2) primer és recidiváló mukokután fertőzései, beleértve a genitalis herpest',
        'Herpes zoster (övömbor) és varicella (bárányhimlő) kezelése felnőttekben és immunhiányosakban',
        'HSV Encephalitis és súlyos, disszeminált újszülöttkori HSV fertőzés (kizárólag i.v. Aciclovir!)',
        'Súlyos felnőttkori VZV pneumonia és ocularis herpes zoster ophthalmicus'
      ],
      en: [
        'Primary and recurrent mucocutaneous Herpes Simplex (HSV-1, HSV-2) infections, including genital herpes',
        'Herpes zoster (shingles) and varicella (chickenpox) in adults and immunocompromised hosts',
        'HSV Encephalitis and severe neonatal HSV infections (strictly i.v. Aciclovir!)',
        'Severe VZV pneumonia in adults and herpes zoster ophthalmicus'
      ],
      de: [
        'Primäre und rezidivierende mukokutane HSV-1/HSV-2-Infektionen inkl. Genitalherpes',
        'Herpes Zoster (Gürtelrose) und Varizellen (Windpocken) bei Erwachsenen und Immungeschwächten',
        'HSV-Enzephalitis und schwere neonatale HSV-Infektionen (ausschließlich i.v. Aciclovir!)',
        'Schwere VZV-Pneumonie bei Erwachsenen und Herpes Zoster ophthalmicus'
      ]
    },
    sideEffects: {
      hu: [
        'Kristály-nephropathia és akut vesekárosodás (magas i.v. dózisok gyors infundálásakor aciclovir kristályok csapódnak ki a tubulusokban - bőséges hidrálás kötelező!)',
        'Neurotoxicitás (morfózis, zavartság, hallucinációk, tremor, encephalopathia - főleg vesebetegekben nem korrigált dózis esetén)',
        'Gastrointestinalis tünetek (hányinger, hányás, hasmenés, hasi diszkomfort p.o. adagolásnál)',
        'Tromboticus thrombocytopenias purpura (TTP/HUS) ritkán előfordulhat súlyosan immunszupprimált betegek nagy dózisú valaciclovir kezelése során'
      ],
      en: [
        'Crystal nephropathy and acute kidney injury (precipitation of aciclovir crystals in renal tubules during rapid i.v. infusion - copious hydration mandatory!)',
        'Neurotoxicity (confusion, hallucinations, tremors, encephalopathy - especially in renal impairment if dose unadjusted)',
        'Gastrointestinal upset (nausea, vomiting, diarrhea with oral therapy)',
        'Thrombotic thrombocytopenic purpura (TTP/HUS) reported rarely in severely immunocompromised patients on high-dose valaciclovir'
      ],
      de: [
        'Kristall-Nephropathie und akutes Nierenversagen (Ausfall von Aciclovir-Kristallen in den Nierentubuli bei schneller i.v.-Infusion - reichlich Hydratation zwingend!)',
        'Neurotoxizität (Verwirrtheit, Halluzinationen, Tremor, Enzephalopathie - bes. bei Niereninsuffizienz ohne Dosisanpassung)',
        'Gastrointestinale Beschwerden (Übelkeit, Erbrechen, Durchfall bei oraler Gabe)',
        'Thrombotisch-thrombozytopenische Purpura (TTP/HUS) selten bei schwer immungeschwächten Patienten unter hochdosiertem Valaciclovir'
      ]
    },
    practicalTips: {
      hu: [
        'A vénás aciclovir infúziót LASSAN, legalább 1 óra alatt kell beadni, és bőséges kísérő hidrálást (fiziológiás sóoldat) kell biztosítani a kristály-nephropathia megelőzésére!',
        'Herpes zosterben a kezelést a kiütések megjelenésétől számított 72 órán belül meg kell kezdeni a posztherpeses neuralgia (PHN) kockázatának és a fájdalom tartamának csökkentésére.',
        'Soha ne adjunk Aciclovirt i.m. vagy s.c. formában! Kizárólag lassú i.v. cseppinfúzióként vagy orálisan alkalmazható.'
      ],
      en: [
        'Administer i.v. aciclovir SLOWLY over at least 1 hour with generous concurrent hydration (0.9% NaCl) to prevent tubular crystal precipitation!',
        'Initiate therapy in Herpes Zoster within 72 hours of rash onset to significantly reduce pain duration and postherpetic neuralgia (PHN) risk.',
        'NEVER administer Aciclovir via i.m. or s.c. routes! Strictly use slow i.v. infusion or oral formulation.'
      ],
      de: [
        'i.v.-Aciclovir-Infusion LANGSAM über mindestens 1 Stunde unter reichlicher Hydratation (0,9% NaCl) verabreichen, um Kristallausfällungen zu verhindern!',
        'Die Behandlung bei Herpes Zoster sollte innerhalb von 72 Stunden nach Auftreten des Exanthems begonnen werden, um das Risiko einer Post-Zoster-Neuralgie (PZN) zu senken.',
        'Aciclovir NIEMALS i.m. oder s.c. verabreichen! Nur als langsame i.v.-Infusion oder oral anwenden.'
      ]
    }
  },
  {
    id: 'ganciclovir_valganciclovir',
    name: 'Ganciclovir / Valganciclovir',
    group: {
      hu: 'Cytomegalovírus (CMV) ellenes szerek (Nukleozid analógok)',
      en: 'Anti-CMV agents (Nucleoside analogues)',
      de: 'Anti-CMV-Wirkstoffe (Nukleosid-Analoga)'
    },
    targetViruses: {
      hu: 'Cytomegalovírus (CMV), HSV-1, HSV-2, VZV, HHV-6',
      en: 'Cytomegalovirus (CMV), HSV-1, HSV-2, VZV, HHV-6',
      de: 'Cytomegalievirus (CMV), HSV-1, HSV-2, VZV, HHV-6'
    },
    halfLife: {
      hu: 'Plazma felezési idő: kb. 3.5 - 4.5 óra; Intracelluláris felezési idő: >24 óra',
      en: 'Plasma half-life: approx. 3.5 - 4.5 hours; Intracellular half-life: >24 hours',
      de: 'Plasmahalbwertszeit: ca. 3,5 - 4,5 Stunden; Intrazelluläre Halbwertszeit: >24 Stunden'
    },
    effectType: {
      hu: 'Virosztatikus (Erős CMV DNS-szintézis gátló)',
      en: 'Virostatic (Potent CMV DNA synthesis inhibitor)',
      de: 'Virostatisch (Starker CMV-DNA-Synthese-Hemmer)'
    },
    specialFeature: {
      hu: 'A CMV fertőzés arany standard kezelése. A Valganciclovir a Ganciclovir L-valil észtere (prodrug), aminek orális biohasznosulása tízszerese (60%), így szisztémás terápiás plazmaszintet biztosít tablettás formában.',
      en: 'Gold standard for CMV disease. Valganciclovir is an L-valyl ester prodrug with 10x higher oral bioavailability (60%), delivering i.v.-equivalent systemic exposure in oral form.',
      de: 'Goldstandard zur Behandlung von CMV-Infektionen. Valganciclovir ist ein L-Valylester-Prodrug mit 10-fach höherer oraler Bioverfügbarkeit (60%).'
    },
    mechanismOfAction: {
      hu: 'CMV fertőzött sejtekben a vírusi UL97 fehérjekináz enzim monofoszfáttá alakítja, majd celluláris kinázok trifoszfáttá foszforilálják. A ganciclovir-trifoszfát gátolja a vírusi DNS-polimerázt (UL54).',
      en: 'In CMV-infected cells, viral UL97 protein kinase phosphorylates it to monophosphate, then cellular enzymes convert it to triphosphate, which inhibits viral DNA polymerase (UL54).',
      de: 'In CMV-infizierten Zellen wird es durch die virale UL97-Proteinkinase zum Monophosphat und anschließend zum Triphosphat phosphoryliert, welches die virale DNA-Polymerase (UL54) hemmt.'
    },
    dosage: {
      adult: {
        hu: 'Indukciós terápia: Ganciclovir 2x 5 mg/ttkg/nap i.v. vagy Valganciclovir 2x 900 mg/nap p.o. 14-21 napig. Fenntartó terápia: Ganciclovir 1x 5 mg/ttkg/nap i.v. vagy Valganciclovir 1x 900 mg/nap p.o.',
        en: 'Induction: Ganciclovir 5 mg/kg q12h i.v. or Valganciclovir 900 mg b.i.d. p.o. for 14-21 days. Maintenance: Ganciclovir 5 mg/kg q24h i.v. or Valganciclovir 900 mg q.d. p.o.',
        de: 'Induktion: Ganciclovir 2x 5 mg/kg/Tag i.v. oder Valganciclovir 2x 900 mg/Tag p.o. für 14-21 Tage. Erhaltung: Ganciclovir 1x 5 mg/kg/Tag i.v. oder Valganciclovir 1x 900 mg/Tag p.o.'
      },
      pediatric: {
        hu: 'Kongenitális CMV fertőzés csecsemőkben: Valganciclovir 2x 16 mg/ttkg/nap p.o. 6 hónapig. Gyermek dózisvese-funkció és testfelület alapján számítandó (Pediatric Valganciclovir Dosing Algorithm).',
        en: 'Congenital CMV in neonates/infants: Valganciclovir 16 mg/kg b.i.d. p.o. for 6 months. Pediatric dosing calculated based on BSA and CrCl via modified Schwartz formula.',
        de: 'Kongenitale CMV-Infektion bei Säuglingen: Valganciclovir 2x 16 mg/kg/Tag p.o. für 6 Monate. Kinderdosierung nach KOF und CrCl berechnen.'
      },
      prophylaxis: {
        hu: 'Szervtranszplantált (SOT) és csontvelő-transzplantált (HSCT) betegek CMV profilaxisa: Valganciclovir 1x 900 mg/nap p.o. a transzplantáció után 100-200 napig.',
        en: 'CMV prophylaxis in solid organ (SOT) and stem cell (HSCT) transplant recipients: Valganciclovir 900 mg q.d. p.o. for 100-200 days post-transplant.',
        de: 'CMV-Prophylaxe bei Organtransplantierten (SOT) und Stammzelltransplantierten (HSCT): Valganciclovir 1x 900 mg/Tag p.o. für 100-200 Tage.'
      },
      renal: {
        hu: 'Rendkívül szigorú adagmódosítást igényel! GFR 39-59: 2x 450 mg; GFR 25-38: 1x 450 mg; GFR 10-24: 1x 450 mg 2 naponta; GFR <10 / Dialízis: Ganciclovir 1.25 mg/ttkg 3x/hét dialízis után.',
        en: 'Requires strict dose adjustment! CrCl 39-59: 450 mg b.i.d.; CrCl 25-38: 450 mg q.d.; CrCl 10-24: 450 mg q48h; CrCl <10 / HD: Ganciclovir 1.25 mg/kg 3x/week post-HD.',
        de: 'Erfordert strikte Dosisanpassung! CrCl 39-59: 2x 450 mg; CrCl 25-38: 1x 450 mg; CrCl 10-24: 1x 450 mg alle 48h; CrCl <10 / HD: Ganciclovir 1,25 mg/kg 3x/Woche nach HD.'
      },
      hepatic: {
        hu: 'Nem igényel rutinszerű adagmódosítást, de májenzimek és vérkép szoros monitorozása szükséges.',
        en: 'No routine dose adjustment required; monitor liver function tests and complete blood counts regularly.',
        de: 'Keine routinemäßige Dosisanpassung erforderlich; Leberwerte und Blutbild regelmäßig kontrollieren.'
      }
    },
    indications: {
      hu: [
        'Cytomegalovírus (CMV) reaktiváció és invazív szervfertőzések (pneumonitis, colitis, hepatitis, encephalitis, retinitis) szerv- és csontvelő-transzplantált vagy AIDS betegségben',
        'Súlyos, szisztémás congenitalis CMV fertőzés újszülöttekben',
        'CMV fertőzés és megbetegedés megelőzése (profilaxis) nagy kockázatú szervtranszplantáltaknál (Donor+/Receptiens-)'
      ],
      en: [
        'CMV reactivation and end-organ disease (pneumonitis, colitis, hepatitis, encephalitis, retinitis) in transplant recipients and AIDS patients',
        'Severe systemic congenital CMV infection in newborns',
        'Prophylaxis of CMV disease in high-risk solid organ transplant recipients (D+/R-)'
      ],
      de: [
        'CMV-Reaktivierung und Endorgan-Erkrankungen (Pneumonie, Kolitis, Hepatitis, Enzephalitis, Retinitis) bei Transplantierten und AIDS-Patienten',
        'Schwere systemische kongenitale CMV-Infektion bei Neugeborenen',
        'Prophylaxe von CMV-Erkrankungen bei Hochrisiko-Transplantatempfängern (D+/R-)'
      ]
    },
    sideEffects: {
      hu: [
        'Súlyos csontvelő-szuppresszió és myelotoxicitás (neutropenia, leukopenia, thrombocytopenia, anaemia - dózisfüggő és reverzibilis, G-CSF adását igényelheti)',
        'Mutagenitás, teratogenitás és lehetséges karcinogenitás (a spermatogenesist és az oogenesist tartósan károsíthatja)',
        'Központi idegrendszeri mellékhatások (fejfájás, tremor, görcsrohamok, zavartság, pszichózis)',
        'Gastrointestinalis tünetek (hányinger, hasmenés, étvágytalanság, hasi fájdalom)'
      ],
      en: [
        'Severe bone marrow suppression and myelosuppression (neutropenia, leukopenia, thrombocytopenia, anemia - dose-dependent, may require G-CSF)',
        'Mutagenicity, teratogenicity, and potential carcinogenicity (may impair spermatogenesis and fertility permanently)',
        'Central nervous system toxicity (headache, tremors, seizures, confusion, psychosis)',
        'Gastrointestinal side effects (nausea, diarrhea, abdominal pain, anorexia)'
      ],
      de: [
        'Schwere Knochenmarksuppression (Neutropenie, Leukopenie, Thrombozytopenie, Anämie - dosisabhängig, erfordert evtl. G-CSF)',
        'Mutagenität, Teratogenität und potenzielles Karzinogen (kann die Fertilität dauerhaft beeinträchtigen)',
        'ZNS-Toxizität (Kopfschmerzen, Tremor, Krampfanfälle, Verwirrtheit)',
        'Gastrointestinale Beschwerden (Übelkeit, Durchfall, Bauchschmerzen)'
      ]
    },
    practicalTips: {
      hu: [
        'A kezelés alatt hetente legalább 1-2 alkalommal kötelező a teljes vérkép (főleg abszolút neutrophilszám / ANC) és a veseakár-funkció monitorozása!',
        'Ha az abszolút neutrophilszám (ANC) 500/µl alá esik, a ganciclovir adását fel kell függeszteni vagy G-CSF támogatást kell indítani.',
        'A Valganciclovir tablettát étkezés közben kell bevenni a felszívódás és a biohasznosulás maximalizálása érdekében.'
      ],
      en: [
        'Perform complete blood counts (especially absolute neutrophil count / ANC) and renal function tests 1-2 times weekly during active therapy!',
        'Suspend therapy or initiate G-CSF support if absolute neutrophil count (ANC) drops below 500/µL.',
        'Administer Valganciclovir tablets with food to maximize gastrointestinal absorption and bioavailability.'
      ],
      de: [
        'Während der aktiven Therapie 1-2 Mal wöchentlich engmaschige Blutbild- (insb. ANC) und Nierenfunktionskontrollen durchführen!',
        'Bei Abfall der absoluten Neutrophilenzahl (ANC) unter 500/µl Therapie pausieren oder G-CSF verabreichen.',
        'Valganciclovir-Tabletten zusammen mit Mahlzeiten einnehmen, um die Resorption zu optimieren.'
      ]
    }
  },
  {
    id: 'oseltamivir',
    name: 'Oseltamivir',
    group: {
      hu: 'Influenza-ellenes szerek (Neuraminidáz gátlók)',
      en: 'Anti-influenza agents (Neuraminidase inhibitors)',
      de: 'Anti-Influenza-Wirkstoffe (Neuraminidase-Hemmer)'
    },
    targetViruses: {
      hu: 'Influenza A és Influenza B vírusok',
      en: 'Influenza A and Influenza B viruses',
      de: 'Influenza-A- und Influenza-B-Viren'
    },
    halfLife: {
      hu: 'Oseltamivir-karboxilát (aktív metabolit) felezési ideje: kb. 6 - 10 óra',
      en: 'Oseltamivir carboxylate (active metabolite) half-life: approx. 6 - 10 hours',
      de: 'Oseltamivir-Carboxylat (aktiver Metabolit) Halbwertszeit: ca. 6 - 10 Stunden'
    },
    effectType: {
      hu: 'Virosztatikus (Vírusi terjedést és kiszabadulást gátló)',
      en: 'Virostatic (Inhibits viral release and dissemination)',
      de: 'Virostatisch (Hemmt virale Freisetzung und Ausbreitung)'
    },
    specialFeature: {
      hu: 'Prodrug, mely a májban és bélben oseltamivir-karboxiláttá hidrolizálódik. Hatásossága akkor a legkifejezettebb, ha a tünetek kezdetétől számított 48 órán belül elindítják.',
      en: 'Prodrug extensively converted to active oseltamivir carboxylate by hepatic esterases. Maximum efficacy achieved when initiated within 48 hours of symptom onset.',
      de: 'Prodrug, das in der Leber enzymatisch zum aktiven Carboxylat umgewandelt wird. Höchste Wirksamkeit bei Beginn innerhalb von 48 Stunden nach Symptombeginn.'
    },
    mechanismOfAction: {
      hu: 'Szelektíven gátolja az Influenza A és B vírusok felületi neuraminidáz (NA) enzimjét. Ez megakadályozza az újonnan képződött virionok kiszabadulását a fertőzött gazdasejtből és a légúti nyákban való terjedésüket.',
      en: 'Selectively inhibits influenza A and B viral surface neuraminidase (NA), preventing the cleavage of sialic acid residues and blocking virion release from infected host cells.',
      de: 'Hemmt selektiv die virale Neuraminidase (NA) von Influenza A und B. Verhindert die Abspaltung von Sialinsäure und blockiert die Freisetzung neuer Virionen.'
    },
    dosage: {
      adult: {
        hu: 'Kezelés: 2x 75 mg/nap p.o. 5 napig (súlyos/kritikus állapotú betegekben 10-14 napig megnyújtható).',
        en: 'Treatment: 75 mg b.i.d. p.o. for 5 days (can be extended to 10-14 days in severe/critically ill patients).',
        de: 'Behandlung: 2x 75 mg/Tag p.o. für 5 Tage (bei schweren Verläufen auf 10-14 Tage verlängerbar).'
      },
      pediatric: {
        hu: '1-12 éves kor között testsúly alapján 5 napig: ≤15 kg: 2x 30 mg; 15-23 kg: 2x 45 mg; 23-40 kg: 2x 60 mg; >40 kg: 2x 75 mg/nap.',
        en: 'Ages 1-12 years based on body weight for 5 days: ≤15 kg: 30 mg b.i.d.; 15-23 kg: 45 mg b.i.d.; 23-40 kg: 60 mg b.i.d.; >40 kg: 75 mg b.i.d.',
        de: 'Alter 1-12 Jahre nach Körpergewicht für 5 Tage: ≤15 kg: 2x 30 mg; 15-23 kg: 2x 45 mg; 23-40 kg: 2x 60 mg; >40 kg: 2x 75 mg.'
      },
      prophylaxis: {
        hu: 'Post-expozíciós profilaxis: 1x 75 mg/nap p.o. 10 napig (igazolt influenzás beteggel való szoros érintkezést követően 48 órán belül indítva).',
        en: 'Post-exposure prophylaxis: 75 mg q.d. p.o. for 10 days (initiated within 48 hours of close contact with confirmed case).',
        de: 'Postexpositionsprophylaxe: 1x 75 mg/Tag p.o. für 10 Tage (Beginn innerhalb von 48 Stunden nach Kontakt).'
      },
      renal: {
        hu: 'GFR 30-60 ml/perc: 2x 30 mg/nap; GFR 10-30 ml/perc: 1x 30 mg/nap; GFR <10 ml/perc / Hemodialízis: 30 mg egyszeri adag dialízis után.',
        en: 'CrCl 30-60 mL/min: 30 mg b.i.d.; CrCl 10-30 mL/min: 30 mg q.d.; CrCl <10 mL/min / HD: 30 mg single dose post-dialysis.',
        de: 'CrCl 30-60 ml/min: 2x 30 mg/Tag; CrCl 10-30 ml/min: 1x 30 mg/Tag; CrCl <10 ml/min / HD: 30 mg Einzeldosis nach Dialyse.'
      },
      hepatic: {
        hu: 'Májinsufficienciában nem igényel adagmódosítást (az aktív metabolit képződése és expozíciója nem változik klinikailag jelentős mértékben).',
        en: 'No dose adjustment required in hepatic impairment.',
        de: 'Keine Dosisanpassung bei Leberfunktionsstörung erforderlich.'
      }
    },
    indications: {
      hu: [
        'Influenza A és B fertőzés akut kezelése szövődménymentes és súlyos, kórházi ápolást igénylő betegekben',
        'Influenza post-expozíciós profilaxisa nagy kockázatú (immunszupprimált, idős, krónikus beteg) egyénekben',
        'Influenza járványos terjedésének megelőzése zárt közösségekben (pl. ápolási otthonokban)'
      ],
      en: [
        'Acute treatment of uncomplicated and severe Influenza A and B infections in hospitalized or high-risk patients',
        'Post-exposure prophylaxis of influenza in vulnerable, immunocompromised, or elderly individuals',
        'Outbreak control in institutional settings (e.g. long-term care facilities)'
      ],
      de: [
        'Akutbehandlung von Influenza A und B bei unkomplizierten sowie schweren hospitalisierten Verläufen',
        'Postexpositionsprophylaxe von Influenza bei Hochrisikopatienten und Senioren',
        'Ausbruchskontrolle in Pflegeheimen und medizinischen Einrichtungen'
      ]
    },
    sideEffects: {
      hu: [
        'Hányinger és hányás (~10-15%-ban jelentkezik, főleg az első adagok bevétele után, étkezéssel bevéve jelentősen csökken)',
        'Fejfájás, szédülés, fáradékonyság',
        'Neuropszichiátriai események (főleg gyermekekben és serdülőkben ritkán leírt zavartság, hallucinációk, szokatlan viselkedés)',
        'Ritkán túlérzékenységi reakciók, kiütések, Stevens-Johnson szindróma'
      ],
      en: [
        'Nausea and vomiting (occurs in ~10-15%, mainly during first few doses; significantly attenuated if taken with food)',
        'Headache, fatigue, dizziness',
        'Neuropsychiatric events (rarely reported abnormal behavior, confusion, hallucinations, primarily in pediatric/adolescent patients)',
        'Rare hypersensitivity reactions, rash, Stevens-Johnson syndrome'
      ],
      de: [
        'Übelkeit und Erbrechen (~10-15%, vor allem bei den ersten Dosen; durch Einnahme mit Nahrung deutlich reduzierbar)',
        'Kopfschmerzen, Schwindel, Müdigkeit',
        'Neuropsychiatrische Ereignisse (selten Verwirrtheit, Halluzinationen, auffälliges Verhalten, v. a. bei Kindern/Jugendlichen)',
        'Seltene Überempfindlichkeitsreaktionen, Hautausschlag'
      ]
    },
    practicalTips: {
      hu: [
        'A kapszula tartalmát étkezés közben (pl. étellel vagy tejjel) véve a gyomorirritáció és a hányinger esélye drasztikusan csökkenthető!',
        'Súlyos, kórházban ápolt vagy progresszív influenzás betegeknél a kezelést akkor is meg kell kezdeni, ha a tünetek kezdete óta több mint 48 óra telt el.',
        'Gyermekeknél vagy nyelési nehézség esetén a kapszula tartalma felnyitható és édes sziruppal elkeverhető.'
      ],
      en: [
        'Take oseltamivir with meals or milk to drastically reduce gastrointestinal upset and nausea!',
        'In hospitalized, severely ill, or progressive influenza cases, initiate treatment even if >48 hours have elapsed since symptom onset.',
        'Capsules can be opened and mixed with sweetened liquids for pediatric patients or adults with dysphagia.'
      ],
      de: [
        'Oseltamivir zusammen mit Mahlzeiten oder Milch einnehmen, um Übelkeit deutlich zu verringern!',
        'Bei schweren oder progredienten Influenza-Verläufen im Krankenhaus die Therapie auch dann beginnen, wenn mehr als 48 Stunden vergangen sind.',
        'Kapseln können geöffnet und mit gesüßter Flüssigkeit für Kinder gemischt werden.'
      ]
    }
  },
  {
    id: 'remdesivir',
    name: 'Remdesivir',
    group: {
      hu: 'RNS-vírus ellenes szerek (Nukleotid analóg RNS-polimeráz gátló)',
      en: 'Anti-RNA virus agents (Nucleotide analogue RdRp inhibitor)',
      de: 'Anti-RNA-Virus-Wirkstoffe (Nukleotid-Analogon RdRp-Hemmer)'
    },
    targetViruses: {
      hu: 'SARS-CoV-2 (COVID-19), Filovírusok (Ebola, Marburg), MERS-CoV',
      en: 'SARS-CoV-2 (COVID-19), Filoviruses (Ebola, Marburg), MERS-CoV',
      de: 'SARS-CoV-2 (COVID-19), Filoviren (Ebola, Marburg), MERS-CoV'
    },
    halfLife: {
      hu: 'Remdesivir (prodrug): ~1 óra; GS-441524 (fő nukleozid metabolit): ~27 óra; GS-443902 (intracelluláris trifoszfát): ~35-40 óra',
      en: 'Remdesivir (parent): ~1 hour; GS-441524 (main metabolite): ~27 hours; Intracellular active triphosphate: ~35-40 hours',
      de: 'Remdesivir: ~1 Stunde; GS-441524 (Hauptmetabolit): ~27 Stunden; Intrazelluläres Triphosphat: ~35-40 Stunden'
    },
    effectType: {
      hu: 'Virosztatikus (Késleltetett vírusi RNS-lánczáró)',
      en: 'Virostatic (Delayed viral RNA chain terminator)',
      de: 'Virostatisch (Verzögerter viraler RNA-Kettenabbrecher)'
    },
    specialFeature: {
      hu: 'Mono-foszforamidát prodrug, mely széles spektrumú aktivitást mutat RNS-vírusok ellen. Csak intravénásan adható. Szoftveres/enzimatikus exoribonukleáz javító mechanizmusok ellenére is hatásos marad.',
      en: 'Monophosphoramidate prodrug with broad-spectrum RNA virus activity. Strictly i.v. administration. Evades viral proofreading exoribonuclease (ExoN).',
      de: 'Monophosphoramidat-Prodrug mit breiter Aktivität gegen RNA-Viren. Nur i.v. anwendbar. Umgeht das virale Korrekturlesen der Exoribonuklease (ExoN).'
    },
    mechanismOfAction: {
      hu: 'Bejut a fertőzött sejtekbe, ahol az aktív GS-443902 trifoszfáttá alakul. Az RNS-függő RNS-polimeráz (RdRp) kompetitíven beépíti a készülő vírusi RNS-láncba, ahol 3 nukleotid hozzáadása után késleltetett lánczáródást (delayed chain termination) okoz.',
      en: 'Converted intracellularly to active triphosphate derivative. Competes with ATP for incorporation by RdRp, causing delayed chain termination 3-5 nucleotides downstream, stalling replication.',
      de: 'Wird intrazellulär zum aktiven Triphosphat umgewandelt. Konkurriert mit ATP um den Einbau durch die RdRp und führt nach 3-5 Nukleotiden zum verzögerten Kettenabbruch.'
    },
    dosage: {
      adult: {
        hu: 'Kórházi COVID-19: 1. nap 200 mg i.v. (telítő dózis), majd naponta 1x 100 mg i.v. 5 napig (súlyos esetben 10 napig). Korai ambuláns magas kockázatú COVID-19: 200 mg 1. nap, majd 100 mg/nap a 2. és 3. napon (összesen 3 nap).',
        en: 'Hospitalized COVID-19: Day 1 loading dose of 200 mg i.v., then 100 mg q.d. i.v. for 5 days (up to 10 days if critically ill). Early outpatient: 200 mg Day 1, 100 mg Days 2-3 (3 days total).',
        de: 'Stationär COVID-19: Tag 1 Sättigungsdosis 200 mg i.v., dann 100 mg 1x/Tag i.v. für 5 Tage. Frühes ambulantes COVID-19: 200 mg Tag 1, 100 mg Tag 2-3 (3 Tage gesamt).'
      },
      pediatric: {
        hu: '≥40 kg: felnőtt adagolás. <40 kg (legalább 28 napos és ≥1.5 kg újszülöttek): 1. nap 5 mg/ttkg i.v., majd 2. naptól 2.5 mg/ttkg/nap i.v. 3-5 napig.',
        en: '≥40 kg: adult dosing. <40 kg (neonates ≥28 days and ≥1.5 kg): Day 1 loading 5 mg/kg i.v., then 2.5 mg/kg q.d. i.v. for 3-5 days.',
        de: '≥40 kg: Erwachsenendosis. <40 kg (Neugeborene ≥28 Tage und ≥1,5 kg): Tag 1 5 mg/kg i.v., ab Tag 2 2,5 mg/kg/Tag i.v. für 3-5 Tage.'
      },
      prophylaxis: {
        hu: 'Klasszikus post-expozíciós profilaxisra nem javallt, de korai fertőzésben 3 napos rövid kúra alkalmazható a súlyosbodás megelőzésére.',
        en: 'Not routinely used for post-exposure prophylaxis, but 3-day early outpatient course prevents progression to severe disease.',
        de: 'Nicht für die Postexpositionsprophylaxe zugelassen, aber als 3-Tage-Kur zur Verhinderung schwerer Verläufe.'
      },
      renal: {
        hu: 'A szilárd liofilizált formula SBECD hordozóanyagot tartalmaz. Korábban eGFR <30 ml/perc esetén nem javasolták, de az újabb klinikai adatok és közlemények alapján súlyos vesebetegekben és dializáltakban is biztonságosan alkalmazható előny/kockázat mérlegelésével.',
        en: 'Contains SBECD excipient. Previously restricted if eGFR <30 mL/min; however, recent clinical trials and updated guidelines demonstrate safety even in severe renal impairment and ESRD/dialysis without dose adjustment.',
        de: 'Enthält SBECD als Hilfsstoff. Früher bei eGFR <30 ml/min nicht empfohlen; neuere Daten belegen jedoch die Sicherheit auch bei schwerer Niereninsuffizienz und Dialyse.'
      },
      hepatic: {
        hu: 'ALT/AST vizsgálata szükséges a kezelés előtt. Ha az ALT a normál felső határ (ULN) 5-szöröse alá emelkedik, fokozott óvatosság; ha >5x ULN vagy sárgaság lép fel, a kezelést fel kell függeszteni.',
        en: 'Check ALT/AST prior to initiation. Discontinue if ALT exceeds 5x ULN during therapy or if clinical jaundice/hepatitis symptoms develop.',
        de: 'Transaminasen vor Beginn kontrollieren. Absetzen bei ALT >5-fachem oberen Normwert oder bei Ikterus.'
      }
    },
    indications: {
      hu: [
        'COVID-19 fertőzés kezelése oxigénterápiát igénylő vagy magas kockázatú (idős, krónikus beteg, immunszupprimált) felnőttekben és gyermekekben',
        'Ambuláns korai COVID-19 kezelés 7 napon belüli tünetekkel rendelkező, magas progressziós kockázatú betegekben (3 napos iv. kúra)'
      ],
      en: [
        'Treatment of COVID-19 in patients requiring supplemental oxygen or high-risk outpatients with mild-to-moderate symptoms',
        'Early outpatient 3-day i.v. therapy for patients with symptoms <7 days at high risk of disease progression'
      ],
      de: [
        'Behandlung von COVID-19 bei Patienten mit Sauerstoffbedarf oder mit hohem Progressionsrisiko',
        'Frühe ambulante 3-Tage-i.v.-Therapie bei Symptomdauer <7 Tage und hohem Risikoprofil'
      ]
    },
    sideEffects: {
      hu: [
        'Májenzim-emelkedés (ALT, AST transzaminázok átmeneti növekedése)',
        'Túlérzékenységi és infúziós reakciók (hypotensio, nausea, diaphoreticushő hullámok, bradycardia az infúzió alatt)',
        'Protrombin-idő megnyúlása és véralvadási zavarok ritkán',
        'Gastrointestinalis panaszok (hányinger, émelygés)'
      ],
      en: [
        'Transaminase elevations (transient ALT/AST increases)',
        'Infusion-related hypersensitivity reactions (hypotension, flushing, diaphoresis, bradycardia during administration)',
        'Prolonged prothrombin time reported in some patients',
        'Gastrointestinal symptoms (nausea, metallic taste)'
      ],
      de: [
        'Transaminasenanstieg (vorübergehender ALT/AST-Anstieg)',
        'Infusionsbedingte Überempfindlichkeitsreaktionen (Hypotonie, Flush, Bradykardie)',
        'Prothrombinzeit-Verlängerung',
        'Gastrointestinale Beschwerden (Übelkeit)'
      ]
    },
    practicalTips: {
      hu: [
        'Az infúziót 30-120 perc alatt kell beadni; infúziós reakció esetén a beadási sebességet csökkenteni kell vagy fel kell függeszteni.',
        'A kezelés előtt és alatt rendszeresen ellenőrizni kell az ALT, AST szintet és a vesefunkciós paramétereket.',
        'Súlyos immunhiányos betegekben elhúzódó vírusürítés esetén a 10 napos kúra javasolt.'
      ],
      en: [
        'Infuse over 30 to 120 minutes; slow down or halt infusion if hypersensitivity reactions occur.',
        'Monitor ALT, AST, and renal parameters prior to starting and periodically throughout treatment.',
        'In severely immunocompromised patients with prolonged viral shedding, consider a 10-day treatment duration.'
      ],
      de: [
        'Infusion über 30 bis 120 Minuten verabreichen; bei Reaktionen Infusionsgeschwindigkeit verringern.',
        'Transaminasen und Nierenfunktion vor Beginn es regelmäßigen Verlaufs kontrollieren.',
        'Bei schwer immungeschwächten Patienten mit langem Viral Shedding 10-Tage-Kur erwägen.'
      ]
    }
  },
  {
    id: 'paxlovid',
    name: 'Paxlovid (Nirmatrelvir / Ritonavir)',
    group: {
      hu: 'COVID-19 ellenes szerek (Proteáz gátló + CYP3A4 inhibitor booster)',
      en: 'Anti-COVID-19 agents (Protease inhibitor + CYP3A4 booster)',
      de: 'Anti-COVID-19-Wirkstoffe (Protease-Hemmer + CYP3A4-Booster)'
    },
    targetViruses: {
      hu: 'SARS-CoV-2 (COVID-19)',
      en: 'SARS-CoV-2 (COVID-19)',
      de: 'SARS-CoV-2 (COVID-19)'
    },
    halfLife: {
      hu: 'Nirmatrelvir (ritonavirrel együtt): ~6 óra; Ritonavir: ~3-5 óra',
      en: 'Nirmatrelvir (co-administered with ritonavir): ~6 hours; Ritonavir: ~3-5 hours',
      de: 'Nirmatrelvir (mit Ritonavir): ~6 Stunden; Ritonavir: ~3-5 Stunden'
    },
    effectType: {
      hu: 'Virosztatikus (Szelektív fő vírus-proteáz / Mpro gátló)',
      en: 'Virostatic (Selective viral main protease / Mpro inhibitor)',
      de: 'Virostatisch (Selektiver Hauptprotease- / Mpro-Hemmer)'
    },
    specialFeature: {
      hu: 'Orális peptidomimetikus 3CL/Mpro proteáz gátló (Nirmatrelvir) kombinálva alacsony dózisú Ritonavirrel mint farmakokinetikai boosterrrel, ami gátolja a Nirmatrelvir CYP3A által közvetített lebomlását. Rendkívül sok gyógyszerinterakcióval bír!',
      en: 'Oral peptidomimetic main protease (3CLpro/Mpro) inhibitor co-packaged with low-dose Ritonavir as a pharmacokinetic enhancer. Has an extensive list of major drug-drug interactions!',
      de: 'Oraler Hauptprotease-Hemmer (Mpro) kombiniert mit niedrig dosiertem Ritonavir als PK-Booster. Weist extrem zahlreiche Arzneimittelwechselwirkungen auf!'
    },
    mechanismOfAction: {
      hu: 'A Nirmatrelvir kovalensen kötődik a SARS-CoV-2 3CL proteáz (Mpro) aktív helyéhez, meggátolva a vírusi poliproteinek feldolgozását és a replikációt. A Ritonavir gátolja a máj CYP3A4 enzimjét, így fenntartja a Nirmatrelvir terápiás plazmaszintjét.',
      en: 'Nirmatrelvir reversibly inhibits SARS-CoV-2 main protease (Mpro/3CLpro), preventing polyprotein cleavage. Ritonavir inhibits CYP3A-mediated metabolism of nirmatrelvir, boosting its systemic levels.',
      de: 'Nirmatrelvir hemmt die SARS-CoV-2-Hauptprotease (Mpro) und blockiert die Spaltung viraler Polyproteine. Ritonavir hemmt CYP3A und erhöht so die Nirmatrelvir-Spiegel.'
    },
    dosage: {
      adult: {
        hu: '2x 300 mg Nirmatrelvir (2x 150 mg rózsaszín tabletta) + 1x 100 mg Ritonavir (1x 100 mg fehér tabletta) = 3 tabletta naponta kétszer, 5 napig egymás után.',
        en: '300 mg Nirmatrelvir (two 150 mg tablets) + 100 mg Ritonavir (one 100 mg tablet) taken together b.i.d. p.o. for 5 consecutive days.',
        de: '300 mg Nirmatrelvir (zwei 150-mg-Tabletten) + 100 mg Ritonavir (eine 100-mg-Tablette) zusammen 2x/Tag p.o. für 5 Tage.'
      },
      pediatric: {
        hu: '≥12 éves kor felett és ≥40 kg testsúly esetén a felnőtt adagolással egyezik meg. Ennél kisebb gyermekeknél jelenleg nem javallt.',
        en: 'Approved for pediatric patients aged ≥12 years weighing at least 40 kg (same as adult dose). Not currently indicated for younger children.',
        de: 'Zugelassen ab 12 Jahren mit mindestens 40 kg Körpergewicht (gleiche Dosis wie Erwachsene).'
      },
      prophylaxis: {
        hu: 'Post-expozíciós vagy pre-expozíciós profilaxisra jelenleg NEM engedélyezett; kizárólag igazolt akut fertőzésben alkalmazandó.',
        en: 'NOT authorized for post-exposure or pre-exposure prophylaxis; strictly indicated for acute confirmed COVID-19 infection.',
        de: 'Nicht für die Prophylaxe zugelassen; nur bei nachgewiesener akuter COVID-19-Infektion.'
      },
      renal: {
        hu: 'Normál (eGFR ≥60): szokásos adag. Mérsékelt vesekárosodás (eGFR 30-59 ml/perc): dóziscsökkentés: 1x 150 mg Nirmatrelvir + 1x 100 mg Ritonavir naponta kétszer! Súlyos vesekárosodás (eGFR <30 ml/perc / dialízis): NEM JAVALLT!',
        en: 'Normal (eGFR ≥60): standard dose. Moderate renal impairment (eGFR 30-59 mL/min): reduce dose to 150 mg Nirmatrelvir + 100 mg Ritonavir b.i.d.! Severe impairment (eGFR <30 mL/min / ESRD): NOT RECOMMENDED!',
        de: 'Normal (eGFR ≥60): Standarddosis. Mäßige Niereninsuffizienz (eGFR 30-59 ml/min): Reduktion auf 150 mg Nirmatrelvir + 100 mg Ritonavir 2x/Tag! Schwere Niereninsuffizienz (eGFR <30 ml/min): NICHT EMPFOHLEN!'
      },
      hepatic: {
        hu: 'Enyhe és középsúlyos májelégtelenségben (Child-Pugh A, B) nem igényel adagmódosítást. Súlyos májelégtelenségben (Child-Pugh C) NEM JAVALLT.',
        en: 'No dose adjustment for mild-to-moderate hepatic impairment (Child-Pugh A or B). NOT RECOMMENDED in severe hepatic impairment (Child-Pugh C).',
        de: 'Keine Dosisanpassung bei leichter/mäßiger Leberinsuffizienz (Child-Pugh A/B). Bei schwerer Leberinsuffizienz (Child-Pugh C) NICHT EMPFOHLEN.'
      }
    },
    indications: {
      hu: [
        'Enyhe és középsúlyos COVID-19 fertőzés kezelése felnőttekben és 12 év feletti (≥40 kg) serdülőkben, akiknél magas a súlyos betegség/kórházi felvétel kockázata',
        'Tünetek kezdete óta legfeljebb 5 nap telt el (minél korábbi kezdés, annál jobb hatékonyság)'
      ],
      en: [
        'Treatment of mild-to-moderate COVID-19 in adults and pediatric patients (12+ years, ≥40 kg) at high risk for progression to severe disease/hospitalization',
        'Must be initiated within 5 days of symptom onset'
      ],
      de: [
        'Behandlung von mildem bis moderatem COVID-19 bei Erwachsenen und Jugendlichen (ab 12 Jahren, ≥40 kg) mit hohem Risiko für schweren Verlauf',
        'Beginn innerhalb von 5 Tagen nach Symptombeginn erforderlich'
      ]
    },
    sideEffects: {
      hu: [
        'Dysgeusia / ízérzékelési zavar (fémes, keserű szájíz - a betegek >5-10%-ánál jelentkezik)',
        'Hasmenés, hányinger, dyspepsia',
        'Vérnyomás-emelkedés (transzient hypertensio)',
        'Súlyos, életveszélyes gyógyszerinterakciók CYP3A4 szubsztrátokkal (statinok, kalcium-csatorna blokkolók, antikoagulánsok, szedatívumok, immunszuppresszánsok)'
      ],
      en: [
        'Dysgeusia / altered taste (bitter, metallic taste in >5-10% of patients)',
        'Diarrhea, nausea, dyspepsia',
        'Transient elevation in blood pressure',
        'Severe, potentially life-threatening drug-drug interactions with CYP3A substrates (statin, NOACs, immunosuppressants, sedatives)'
      ],
      de: [
        'Dysgeusie / Geschmacksstörung (bitterer, metallischer Geschmack bei >5-10%)',
        'Durchfall, Übelkeit, Dyspepsie',
        'Vorübergehender Blutdruckanstieg',
        'Schwere Wechselwirkungen mit CYP3A-Substraten (Statine, NOAKs, Immunsuppressiva)'
      ]
    },
    practicalTips: {
      hu: [
        'KÖTELEZŐ a beteg összes szedett gyógyszerét ellenőrizni CYP3A4 interakciókra a felírás előtt! (Pl. rivaroxaban, simvastatin, fentanyl, amiodaron, carbamazepin egyidejű adása ellenjavallt).',
        'A kezelést a COVID-19 tünetek megjelenését követő 5 napon belül el KELL indítani.',
        'A tablettákat egészben kell lenyelni, nem szabad összerágni vagy összetörni. Étkezéstől függetlenül bevehető.'
      ],
      en: [
        'MANDATORY interaction check before prescribing due to CYP3A inhibition! (Contraindicated with rivaroxaban, simvastatin, fentanyl, amiodarone, carbamazepine, etc.).',
        'Initiate therapy within 5 days of symptom onset for clinical efficacy.',
        'Tablets must be swallowed whole with or without food; do not chew or crush.'
      ],
      de: [
        'Zwingende Interaktionsprüfung aller Medikamente vor Verschreibung! Kontraindiziert mit Rivaroxaban, Simvastatin, Amiodaron etc.',
        'Beginn innerhalb von 5 Tagen nach Symptombeginn für volle Wirksamkeit.',
        'Tabletten im Ganzen einnehmen; nicht kauen oder zerstoßen.'
      ]
    }
  },
  {
    id: 'tenofovir_entecavir',
    name: 'Tenofovir (TDF / TAF) / Entecavir',
    group: {
      hu: 'Hepatitis B ellenes szerek (Nukleotid / Nukleozid analógok - NRTIs)',
      en: 'Anti-Hepatitis B agents (Nucleotide / Nucleoside analogues - NRTIs)',
      de: 'Anti-Hepatitis-B-Wirkstoffe (Nukleotid- / Nukleosid-Analoga - NRTIs)'
    },
    targetViruses: {
      hu: 'Hepatitis B Vírus (HBV), Tenofovir esetén HIV-1 is',
      en: 'Hepatitis B Virus (HBV), Tenofovir also covers HIV-1',
      de: 'Hepatitis-B-Virus (HBV), Tenofovir wirkt auch gegen HIV-1'
    },
    halfLife: {
      hu: 'Entecavir: ~128-149 óra; Tenofovir (intracelluláris diphosphat): ~150-180 óra (hosszú, napi 1x adagolás)',
      en: 'Entecavir: ~128-149 hours; Tenofovir intracellular diphosphate: ~150-180 hours (supports q.d. dosing)',
      de: 'Entecavir: ~128-149 Stunden; Tenofovir intrazellulär: ~150-180 Stunden (1x täglich)'
    },
    effectType: {
      hu: 'Virosztatikus (Erős vírusi reverz transzkriptáz / DNS-polimeráz gátló)',
      en: 'Virostatic (Potent viral reverse transcriptase / DNA polymerase inhibitor)',
      de: 'Virostatisch (Starker viraler Reversetranskriptase- / DNA-Polymerase-Hemmer)'
    },
    specialFeature: {
      hu: 'Magas genetikai korlát a rezisztenciával szemben (különösen a Tenofovir TDF/TAF esetében, ahol a rezisztencia elhanyagolható). A TAF (Tenofovir Alafenamide) újabb prodrug, ami lényegesen kisebb nephro- és csonttoxicitást mutat, mint a régebbi TDF (Tenofovir Disoproxil).',
      en: 'High genetic barrier to resistance (especially Tenofovir TDF/TAF with negligible resistance rate). TAF is a newer prodrug offering significantly lower renal and bone toxicity than TDF.',
      de: 'Hohe genetische Barriere gegen Resistenzen (besonders Tenofovir). TAF ist ein neueres Prodrug mit deutlich geringerer Nieren- und Knochen-Toxizität als TDF.'
    },
    mechanismOfAction: {
      hu: 'Intracellulárisan aktív trifoszfáttá/difoszfáttá alakulnak, kompetitíven gátolják a HBV DNS-polimeráz reverz transzkriptáz aktivitását és beépülve korai lánczáródást okoznak.',
      en: 'Phosphorylated intracellularly to active forms, competing with natural nucleotides for HBV DNA polymerase, leading to chain termination.',
      de: 'Werden intrazellulär phosphoryliert, hemmend kompetitiv die HBV-DNA-Polymerase und führen zum Kettenabbruch.'
    },
    dosage: {
      adult: {
        hu: 'Entecavir: 1x 0.5 mg/nap p.o. (Lamivudin-rezisztens esetben 1x 1.0 mg/nap éhgyomorra). Tenofovir Disoproxil (TDF): 1x 245 mg/nap p.o. Tenofovir Alafenamide (TAF): 1x 25 mg/nap p.o.',
        en: 'Entecavir: 0.5 mg q.d. p.o. (1.0 mg q.d. if lamivudine-refractory, on empty stomach). TDF: 245 mg q.d. p.o. TAF: 25 mg q.d. p.o.',
        de: 'Entecavir: 1x 0,5 mg/Tag p.o. (1x 1,0 mg/Tag bei Lamivudin-Resistenz nüchtern). TDF: 1x 245 mg/Tag p.o. TAF: 1x 25 mg/Tag p.o.'
      },
      pediatric: {
        hu: 'Entecavir: ≥2 éves kortól testsúly szerint (0.015 mg/ttkg/nap). TDF: ≥12 éves kortól (≥35 kg) 245 mg/nap. TAF: ≥12 éves kortól (≥35 kg) 25 mg/nap.',
        en: 'Entecavir: ≥2 years weight-based (0.015 mg/kg q.d.). TDF: ≥12 years (≥35 kg) 245 mg q.d. TAF: ≥12 years (≥35 kg) 25 mg q.d.',
        de: 'Entecavir: ab 2 Jahren gewichtsadaptiert. TDF: ab 12 Jahren (≥35 kg) 245 mg/Tag. TAF: ab 12 Jahren (≥35 kg) 25 mg/Tag.'
      },
      prophylaxis: {
        hu: 'HBV reaktiváció megelőzése immunszuppresszív / kemoterápia alatt: Entecavir vagy TDF/TAF 1x/nap az immunszuppresszió megkezdésétől a befejezést követő 12-18 hónapig.',
        en: 'HBV reactivation prophylaxis during chemotherapy/immunosuppression: Entecavir or TDF/TAF q.d. continued for 12-18 months post-chemotherapy.',
        de: 'Prophylaxe der HBV-Reaktivierung unter Chemotherapie/Immunsuppression: Entecavir oder TDF/TAF 1x/Tag für 12-18 Monate nach Chemotherapie.'
      },
      renal: {
        hu: 'TDF és Entecavir esetén GFR <50 ml/perc alatt dóziscsökkentés vagy adagolási időköz növelés szükséges. TAF esetén GFR ≥15 ml/perc felett nem szükséges módosítás (dialízis alatt nem javasolt, kivéve ha elengedhetetlen).',
        en: 'TDF and Entecavir require dose reduction / extended interval if CrCl <50 mL/min. TAF requires no dose adjustment if eGFR ≥15 mL/min.',
        de: 'Bei TDF und Entecavir Dosisanpassung bei CrCl <50 ml/min. TAF erfordert keine Anpassung bei eGFR ≥15 ml/min.'
      },
      hepatic: {
        hu: 'Dekompenzált cirrózisban is alkalmazhatók szoros monitorozás mellett; adagmódosítást a májkárosodás önmagában nem igényel.',
        en: 'Can be used in decompensated cirrhosis with close clinical monitoring; no dose adjustment required for hepatic impairment alone.',
        de: 'Anwendbar auch bei dekompensierter Zirrhose unter enger Kontrolle; keine Dosisanpassung rein wegen Leberfunktion.'
      }
    },
    indications: {
      hu: [
        'Krónikus Hepatitis B fertőzés (kompenzált és dekompenzált májbetegségben, HBeAg pozitív és negatív betegekben)',
        'HBV reaktiváció megelőzése biológiai terápia, immunszuppresszió vagy kemoterápia alatt (HBsAg+ vagy anti-HBc+ betegek)',
        'Tenofovir (TDF/TAF): HIV-1 fertőzés antiretrovirális kombinált kezelése (ART)'
      ],
      en: [
        'Chronic Hepatitis B infection in adults and pediatrics with compensated or decompensated liver disease',
        'Prophylaxis of HBV reactivation during immunosuppressive or oncological chemotherapy',
        'Tenofovir: Combination antiretroviral therapy (ART) for HIV-1 infection'
      ],
      de: [
        'Chronische Hepatitis-B-Infektion bei kompensierter oder dekompensierter Lebererkrankung',
        'Prophylaxe der HBV-Reaktivierung unter Immunsuppression oder Chemotherapie',
        'Tenofovir: Kombinationstherapie bei HIV-1-Infektion'
      ]
    },
    sideEffects: {
      hu: [
        'TDF (Tenofovir Disoproxil): Nephrotoxicitás (Proximalis tubulopathia, Fanconi szindróma, kreatinin-emelkedés) és csontmineralizáció csökkenése (osteopenia/osteoporosis)',
        'TAF: Kedvezőbb vese- és csontbiztonság, de mérsékelt lipidszint-emelkedést és súlygyarapodást okozhat',
        'Tejsav-acidózis és súlyos hepatomegalia steatossal (ritka, de potenciálisan életveszélyes NRTI osztálymellékhatás)',
        'Súlyos akut Hepatitis B fellángolás (flare) a kezelés hirtelen abbahagyásakor!'
      ],
      en: [
        'TDF: Nephrotoxicity (proximal tubulopathy, Fanconi syndrome, increased creatinine) and bone mineral density loss (osteopenia/osteoporosis)',
        'TAF: Improved renal and bone safety profile, but mild lipid elevation and weight gain reported',
        'Lactic acidosis and severe hepatomegaly with steatosis (rare NRTI class effect)',
        'Severe acute exacerbation (flare) of hepatitis B upon abrupt discontinuation of therapy!'
      ],
      de: [
        'TDF: Nephrotoxizität (proximale Tubulopathie, Fanconi-Syndrom) und Abnahme der Knochendichte',
        'TAF: Deutlich bessere Nieren- und Knochensicherheit, evtl. leichtes Lipid-Plus',
        'Laktatazidose und Hepatomegalie mit Steatose (seltene NRTI-Klassennebenwirkung)',
        'Schwere akute Hepatitis-B-Exazerbation (Flare) bei abruptem Absetzen!'
      ]
    },
    practicalTips: {
      hu: [
        'A kezelést SOHASEM szabad hirtelen abbahagyni, mert az funebrális májelégtelenséggel járó acut hepatitis B fellángolást (flare-t) válthat ki!',
        'Entecavirt éhgyomorra kell bevenni (legalább 2 órával étkezés előtt vagy után), mert az étel jelentősen csökkenti a felszívódását.',
        'TDF-et kapó betegeknél rendszeres vese- (eGFR, proteinuria, foszfát) és csontsűrűség-ellenőrzés javasolt. Vesebetegeknél váltsunk TAF-ra vagy Entecavirre!'
      ],
      en: [
        'NEVER discontinue therapy abruptly due to the risk of severe, life-threatening hepatitis B exacerbations (flares)!',
        'Take Entecavir on an empty stomach (at least 2 hours before or after meals) as food significantly reduces its bioavailability.',
        'Monitor renal function (eGFR, urine protein, serum phosphate) regularly on TDF. Consider switching to TAF or Entecavir in renal impairment.'
      ],
      de: [
        'Therapie NIEMALS abrupt absetzen wegen des Risikos fulminanter Hepatitis-B-Flares!',
        'Entecavir auf nüchternen Magen einnehmen (mindestens 2 Stunden vor oder nach dem Essen).',
        'Unter TDF regelmäßige Nieren- und Phosphatkontrollen. Bei Nierenproblemen Wechsel zu TAF oder Entecavir.'
      ]
    }
  },
  {
    id: 'sofosbuvir_velpatasvir',
    name: 'Sofosbuvir / Velpatasvir',
    group: {
      hu: 'Hepatitis C ellenes szerek (Közvetlen hatású antivirális szerek - DAA)',
      en: 'Anti-Hepatitis C agents (Direct-acting antivirals - DAA)',
      de: 'Anti-Hepatitis-C-Wirkstoffe (Direkt wirkende Antiviraltag - DAA)'
    },
    targetViruses: {
      hu: 'Hepatitis C Vírus (HCV pangenotípusos: 1, 2, 3, 4, 5, 6)',
      en: 'Hepatitis C Virus (HCV pangenotypic: genotypes 1-6)',
      de: 'Hepatitis-C-Virus (HCV pangenotypisch: Genotypen 1-6)'
    },
    halfLife: {
      hu: 'Sofosbuvir: ~0.5-1 óra (GS-331007 metabolit: ~15 óra); Velpatasvir: ~15 óra',
      en: 'Sofosbuvir: ~0.5-1 hour (GS-331007 active metabolite: ~15 hours); Velpatasvir: ~15 hours',
      de: 'Sofosbuvir: ~0,5-1 Stunde (Metabolit GS-331007: ~15 Stunden); Velpatasvir: ~15 Stunden'
    },
    effectType: {
      hu: 'Virocid / Erős vírusi eradikáció (SVR12 >95-99%)',
      en: 'Virocidal / Sustained virological response (SVR12 >95-99%)',
      de: 'Virozidal / Nachhaltiges virologisches Ansprechen (SVR12 >95-99%)'
    },
    specialFeature: {
      hu: 'Pangenotípusos, egyszeri napi 1 tablettás fix dózisú kombináció (SOF/VEL), ami Ribavirin és Interferon nélkül gyógyítja a krónikus HCV fertőzést 12 hetes kúrával. Közel 100%-os SVR12 arány!',
      en: 'Pangenotypic single-tablet regimen (SOF/VEL) offering complete interferon- and ribavirin-free cure of chronic HCV in a 12-week oral course. >95-99% SVR12 rates!',
      de: 'Pangenotypische Ein-Tabletten-Kombination (SOF/VEL) zur interferon- und ribavirinfreien Heilung der chronischen HCV in 12 Wochen.'
    },
    mechanismOfAction: {
      hu: 'Sofosbuvir: a HCV NS5B RNS-függő RNS-polimeráz nukleotid analóg gátlója. Velpatasvir: a HCV NS5A fehérje gátlója, ami blokkolja a vírusi RNS replikációját és az új virionok összeépülését.',
      en: 'Sofosbuvir is a nucleotide analogue inhibitor of HCV NS5B RNA-dependent RNA polymerase. Velpatasvir is a potent inhibitor of HCV NS5A replication complex protein.',
      de: 'Sofosbuvir hemmt die HCV-NS5B-RNA-Polymerase. Velpatasvir hemmt das HCV-NS5A-Protein und blockiert Replikation und Assembly.'
    },
    dosage: {
      adult: {
        hu: 'Napi 1 tabletta p.o. (400 mg Sofosbuvir / 100 mg Velpatasvir) étkezéssel vagy anélkül, pontosan 12 héten keresztül.',
        en: '1 tablet (400 mg Sofosbuvir / 100 mg Velpatasvir) q.d. p.o. with or without food for exactly 12 weeks.',
        de: '1 Tablette (400 mg Sofosbuvir / 100 mg Velpatasvir) 1x/Tag p.o. mit oder ohne Nahrung für genau 12 Wochen.'
      },
      pediatric: {
        hu: '≥3 éves kortól testsúlyalapú adagolás (pellet vagy csökkentett dózisú tabletta formájában): ≥30 kg: 400/100 mg; 17-30 kg: 200/50 mg; 17 kg alatt: 150/37.5 mg.',
        en: 'Ages ≥3 years weight-based dosing: ≥30 kg: 400/100 mg; 17-30 kg: 200/50 mg; <17 kg: 150/37.5 mg daily for 12 weeks.',
        de: 'Ab 3 Jahren gewichtsadaptiert: ≥30 kg: 400/100 mg; 17-30 kg: 200/50 mg; <17 kg: 150/37,5 mg täglich für 12 Wochen.'
      },
      prophylaxis: {
        hu: 'Profilaxisra nem használatos; kizárólag igazolt krónikus vagy akut Hepatitis C fertőzés eradikációjára adható.',
        en: 'Not indicated for prophylaxis; strictly used for curative therapy of active HCV infection.',
        de: 'Nicht zur Prophylaxe; rein zur kurativen Therapie nachgewiesener HCV-Infektionen.'
      },
      renal: {
        hu: 'Bármilyen fokú veseelégtelenségben (beleértve az eGFR <30 ml/perc értéket és a hemodialízist is) biztonságosan adható adagmódosítás nélkül!',
        en: 'Safe and effective across all degrees of renal impairment, including eGFR <30 mL/min and ESRD on hemodialysis, without dose adjustment!',
        de: 'Sicher bei jeder Niereninsuffizienz (inkl. eGFR <30 ml/min und Hämodialyse) ohne Dosisanpassung!'
      },
      hepatic: {
        hu: 'Kompenzált és dekompenzált cirrózisban (Child-Pugh B és C) is alkalmazható. Dekompenzált cirrózisban Ribavirinnel kombinálva javasolt 12 hétig.',
        en: 'Approved for compensated and decompensated cirrhosis (Child-Pugh B/C). Combined with Ribavirin in decompensated cirrhosis.',
        de: 'Anwendbar bei kompensierter und dekompensierter Zirrhose (Child-Pugh B/C). Bei Dekompensation kombiniert mit Ribavirin.'
      }
    },
    indications: {
      hu: [
        'Krónikus Hepatitis C vírus (HCV) fertőzés gyógyító kezelése felnőttekben és 3 év feletti gyermekekben (pangenotípusos: Genotípus 1-6)',
        'HCV fertőzött betegek kompenzált vagy dekompenzált májcirrózissal, illetve veseelégtelenséggel'
      ],
      en: [
        'Curative treatment of chronic Hepatitis C virus (HCV) infection in adults and pediatric patients ≥3 years (Genotypes 1-6)',
        'HCV-infected patients with compensated or decompensated cirrhosis and/or renal failure'
      ],
      de: [
        'Kurative Behandlung der chronischen Hepatitis C (HCV Genotypen 1-6) bei Erwachsenen und Kindern ab 3 Jahren',
        'HCV-Patienten mit kompensierter oder dekompensierter Zirrhose sowie Niereninsuffizienz'
      ]
    },
    sideEffects: {
      hu: [
        'Fejfájás, fáradékonyság, gyengeségérzet',
        'Hányinger, álmatlanság',
        'Súlyos, életveszélyes bradycardia Amiodaron egyidejű adása esetén! (Amiodaronnal kombinálni Szigorúan Tilos!)',
        'HBV reaktiváció kockázata HCV/HBV ko-fertőzött betegekben (szűrés kötelező)'
      ],
      en: [
        'Headache, fatigue, asthenia',
        'Nausea, insomnia',
        'Severe, life-threatening symptomatic bradycardia when co-administered with Amiodarone! (STRICTLY CONTRAINDICATED!)',
        'Risk of Hepatitis B (HBV) reactivation in HBV/HCV co-infected patients'
      ],
      de: [
        'Kopfschmerzen, Müdigkeit, Asthenie',
        'Übelkeit, Schlafstörungen',
        'Schwere, lebensbedrohliche Bradykardie bei gleichzeitiger Gabe von Amiodaron! (STRENG KONTRAINDIZIERT!)',
        'Risiko der HBV-Reaktivierung bei HBV/HCV-Koinfektion'
      ]
    },
    practicalTips: {
      hu: [
        'Soha ne adjuk együtt Amiodaronnal a súlyos, életveszélyes bradycardia és szívmegállás kockázata miatt!',
        'Protonpumpa-gátlók (PPI) és H2-receptor blokkolók csökkentik a Velpatasvir felszívódását. PPI adása esetén a Sofosbuvir/Velpatasvir-t étkezéssel kell bevenni 4 órával a PPI előtt.',
        'A kezelés megkezdése előtt minden betegnél kötelező a HBsAg és anti-HBc szűrés a HBV reaktiváció megelőzésére.'
      ],
      en: [
        'NEVER co-administer with Amiodarone due to severe risk of fatal symptomatic bradycardia and cardiac arrest!',
        'Proton pump inhibitors (PPIs) reduce Velpatasvir solubility. If PPI cannot be avoided, administer SOF/VEL with food 4 hours before PPI.',
        'Screen all patients for HBsAg and anti-HBc before starting DAA therapy to identify risk of HBV reactivation.'
      ],
      de: [
        'NIEMALS zusammen mit Amiodaron verabreichen wegen Gefahr tödlicher Bradykardien!',
        'Protonenpumpenhemmer (PPI) mindern die Velpatasvir-Löslichkeit. Bei Anwendungsbedarf SOF/VEL mit Nahrung 4 Stunden vor PPI einnehmen.',
        'Vor Beginn alle Patienten auf HBsAg und anti-HBc testen.'
      ]
    }
  },
  {
    id: 'letermovir',
    name: 'Letermovir',
    group: {
      hu: 'CMV profilaktikus szerek (Vírusi termináz komplex gátló)',
      en: 'CMV prophylactic agents (Viral terminase complex inhibitor)',
      de: 'CMV-Prophylaxe-Wirkstoffe (Viraler Terminase-Komplex-Hemmer)'
    },
    targetViruses: {
      hu: 'Cytomegalovírus (CMV szelektív)',
      en: 'Cytomegalovirus (CMV selective)',
      de: 'Cytomegalievirus (CMV-selektiv)'
    },
    halfLife: {
      hu: 'Plazma felezési idő: kb. 10 - 12 óra (napi egyszeri adagolást tesz lehetővé)',
      en: 'Plasma half-life: approx. 10 - 12 hours (supports once-daily dosing)',
      de: 'Plasmahalbwertszeit: ca. 10 - 12 Stunden (1x täglich)'
    },
    effectType: {
      hu: 'Virosztatikus (Újszerű nem-nukleozid CMV DNS termináz gátló)',
      en: 'Virostatic (Novel non-nucleoside CMV DNA terminase inhibitor)',
      de: 'Virostatisch (Neuartiger Nicht-Nukleosid CMV-DNA-Terminase-Hemmer)'
    },
    specialFeature: {
      hu: 'NINCS csontvelő-szuppresszív hatása és NEM nephrotoxikus! Kizárólag a CMV vírusra hat, keresztrezisztenciája sincs a ganciclovirrel vagy foscarnettel.',
      en: 'NO bone marrow suppression and NO nephrotoxicity! Completely unique mode of action with zero cross-resistance to ganciclovir, foscarnet, or cidofovir.',
      de: 'KEINE Knochenmarksuppression und KEINE Nephrotoxizität! Völlig neuartiger Wirkmechanismus ohne Kreuzresistenz zu Ganciclovir oder Foscarnet.'
    },
    mechanismOfAction: {
      hu: 'Gátolja a CMV pUL56, pUL89 és pUL51 alegységekből álló vírusi termináz komplexét. Ez megakadályozza a genomikusan hosszú konkatemer vírusi DNS feldarabolását és a virionok érését.',
      en: 'Inhibits the viral CMV DNA terminase complex (pUL56 sub-unit), blocking proper viral DNA cleavage and packaging into capsids.',
      de: 'Hemmt den viralen CMV-DNA-Terminase-Komplex (pUL56) und blockiert die Spaltung und Verpackung der viralen DNA.'
    },
    dosage: {
      adult: {
        hu: '480 mg naponta egyszer p.o. vagy i.v. Ha Ciklosporin A-val együtt adják, a Letermovir dózisát 240 mg/nap p.o./i.v.-re kell csökkenteni!',
        en: '480 mg q.d. p.o. or i.v. If co-administered with Cyclosporine A, reduce Letermovir dose to 240 mg q.d.!',
        de: '480 mg 1x/Tag p.o. oder i.v. Bei gleichzeitiger Gabe von Ciclosporin A Dosis auf 240 mg/Tag reduzieren!'
      },
      pediatric: {
        hu: 'Gyermekeknél történő alkalmazásának biztonságossága és hatásossága 18 éves kor alatt jelenleg nem igazolt.',
        en: 'Safety and efficacy in pediatric patients <18 years not yet established.',
        de: 'Sicherheit und Wirksamkeit bei Kindern und Jugendlichen <18 Jahren noch nicht belegt.'
      },
      prophylaxis: {
        hu: 'CMV profilaxis allogén haematopoeticus őssejt-transzplantált (HSCT) és vesetranszplantált (SOT) R+ betegekben a transzplantáció napjától a 100-200. napig.',
        en: 'Primary CMV prophylaxis in CMV-seropositive recipients [R+] of allogeneic HSCT or kidney transplant through day 100-200 post-transplant.',
        de: 'Primäre CMV-Prophylaxe bei CMV-seropositiven Empfängern [R+] nach allogener HSCT oder Nierentransplantation bis Tag 100-200.'
      },
      renal: {
        hu: 'Enyhe, mérsékelt és súlyos vesekárosodásban (még hemodialízis esetén is) nem igényel adagmódosítást. Az i.v. kiszerelés SBECD hordozót tartalmaz.',
        en: 'No dose adjustment required for mild, moderate, or severe renal impairment (including ESRD on hemodialysis). IV formulation contains SBECD.',
        de: 'Keine Dosisanpassung bei leichter, mäßiger oder schwerer Niereninsuffizienz (inkl. Dialyse).'
      },
      hepatic: {
        hu: 'Enyhe és középsúlyos májkárosodásban (Child-Pugh A, B) nem igényel módosítást. Súlyos májkárosodásban (Child-Pugh C) NEM JAVALLT.',
        en: 'No dose adjustment for mild-to-moderate hepatic impairment (Child-Pugh A/B). NOT RECOMMENDED in severe hepatic impairment (Child-Pugh C).',
        de: 'Keine Dosisanpassung bei Child-Pugh A/B. Bei schwerer Leberinsuffizienz (Child-Pugh C) NICHT EMPFOHLEN.'
      }
    },
    indications: {
      hu: [
        'CMV reaktiváció és megbetegedés megelőzése (profilaxis) CMV-szeropozitív allogén őssejt-transzplantált (HSCT) felnőttekben',
        'CMV betegség megelőzése vesetranszplantáción átesett felnőtt betegekben (high-risk D+/R- vagy R+)'
      ],
      en: [
        'Prophylaxis of CMV reactivation and disease in CMV-seropositive recipients of allogeneic HSCT',
        'Prophylaxis of CMV disease in adult kidney transplant recipients'
      ],
      de: [
        'Prophylaxe von CMV-Reaktivierung und -Erkrankung bei CMV-seropositiven allogenen HSCT-Empfängern',
        'Prophylaxe von CMV-Erkrankungen bei erwachsenen Nierentransplantatempfängern'
      ]
    },
    sideEffects: {
      hu: [
        'Gastrointestinalis tünetek (hányinger, hasmenés, hányás)',
        'Peripheralis oedema, fejfájás, fáradékonyság',
        'Mérsékelt májenzim-emelkedés',
        'Gyógyszerinterakciók: Ciklosporin emeli a Letermovir szintjét, míg a Letermovir emeli a Voriconazol, Tacrolimus, Sirolimus szintjét!'
      ],
      en: [
        'Gastrointestinal symptoms (nausea, diarrhea, vomiting)',
        'Peripheral edema, headache, fatigue',
        'Mild elevation in liver enzymes',
        'Drug interactions: Cyclosporine increases letermovir levels; Letermovir increases levels of tacrolimus, sirolimus, voriconazole!'
      ],
      de: [
        'Gastrointestinale Störungen (Übelkeit, Durchfall, Erbrechen)',
        'Periphere Ödeme, Kopfschmerzen, Müdigkeit',
        'Mäßiger Transaminasenanstieg',
        'Wechselwirkungen: Ciclosporin erhöht Letermovir-Spiegel; Letermovir erhöht Tacrolimus-/Sirolimus-Spiegel!'
      ]
    },
    practicalTips: {
      hu: [
        'Ha a beteg Ciklosporin A-t kap, a Letermovir adagját KÖTELEZŐ felére (240 mg/nap-ra) csökkenteni a jelentős plazmaszint-emelkedés miatt!',
        'Óriási előnye a Ganciclovirrel szemben, hogy nem okoz neutropeniát és vesekárosodást, így a transzplantátum elhúzódó tapadását nem gátolja.',
        'Nem alkalmas manifeszt, aktív CMV szervfertőzés (pl. CMV pneumonia, retinitis) terápiajaként, kizárólag PROFILAXISRA javasolt!'
      ],
      en: [
        'MANDATORY 50% dose reduction (to 240 mg q.d.) when co-administered with Cyclosporine A due to OATP1B1/3 inhibition!',
        'Major advantage over Ganciclovir: zero bone marrow toxicity, avoiding delayed engraftment in stem cell transplant recipients.',
        'NOT indicated for treatment of active, established CMV end-organ disease; strictly for PROPHYLAXIS!'
      ],
      de: [
        'Bei gleichzeitiger Gabe von Ciclosporin A Dosis ZWINGEND auf 240 mg/Tag halbieren!',
        'Großer Vorteil gegenüber Ganciclovir: keine Knochenmarktoxizität, behindert nicht das Engraftment.',
        'NICHT zur Behandlung manifester CMV-Erkrankungen geeignet; rein zur PROPHYLAXE!'
      ]
    }
  },
  {
    id: 'biktarvy_dolutegravir',
    name: 'Biktarvy / Dolutegravir (INSTI)',
    group: {
      hu: 'HIV / Retrovírus-ellenes szerek (Integráz szálátviteli gátlók - INSTI)',
      en: 'Anti-HIV agents (Integrase strand transfer inhibitors - INSTI)',
      de: 'Anti-HIV-Wirkstoffe (Integrase-Strand-Transfer-Inhibitoren - INSTI)'
    },
    targetViruses: {
      hu: 'Human Immunodeficientia Vírus 1 és 2 (HIV-1, HIV-2)',
      en: 'Human Immunodeficiency Virus 1 and 2 (HIV-1, HIV-2)',
      de: 'Humanes Immundefizienzvirus 1 und 2 (HIV-1, HIV-2)'
    },
    halfLife: {
      hu: 'Bictegravir: ~17.3 óra; Dolutegravir: ~14 óra (napi egyszeri orális adagolás)',
      en: 'Bictegravir: ~17.3 hours; Dolutegravir: ~14 hours (supports q.d. dosing)',
      de: 'Bictegravir: ~17,3 Stunden; Dolutegravir: ~14 Stunden (1x täglich)'
    },
    effectType: {
      hu: 'Virosztatikus (Gyors vírusterhelés-csökkenést eredményező INSTI)',
      en: 'Virostatic (Rapid viral load suppression INSTI class)',
      de: 'Virostatisch (Rasche Viruslastsenkung)'
    },
    specialFeature: {
      hu: 'A modern HIV terápia (ART) elsővonalbeli alapelemei. Magas genetikai barrier a rezisztenciával szemben, kiváló tolerálhatóság és minimális gyógyszerinterakció. A Biktarvy egyetlen tablettában tartalmazza a Bictegravir + Emtricitabin + TAF hatóanyagokat.',
      en: 'First-line backbone of modern HIV antiretroviral therapy (ART). High genetic barrier to resistance, superb tolerability. Biktarvy offers a single-tablet regimen (Bictegravir/FTC/TAF).',
      de: 'Erstlinien-Standard der modernen HIV-Therapie (ART). Hohe genetische Barriere, hervorragende Verträglichkeit. Biktarvy ist ein Single-Tablet-Regimen.'
    },
    mechanismOfAction: {
      hu: 'Kötődnek a vírusi integráz enzim aktív helyén található Mg2+ kationokhoz, megakadályozva a vírusi provirális DNS beépülését a gazdasejt (CD4+ T-lymphocyta) genomjába.',
      en: 'Inhibits HIV integrase by binding to essential divalent magnesium cations in the active site, blocking viral DNA integration into host genome.',
      de: 'Hemmt die HIV-Integrase durch Bindung an Magnesiumkationen im aktiven Zentrum und blockiert die Integration der viralen DNA.'
    },
    dosage: {
      adult: {
        hu: 'Biktarvy: napi 1 tabletta p.o. (50 mg Bictegravir / 200 mg Emtricitabin / 25 mg TAF). Dolutegravir (Tivicay): 1x 50 mg/nap p.o. (INSTI rezisztencia esetén 2x 50 mg/nap).',
        en: 'Biktarvy: 1 tablet q.d. p.o. (50 mg Bictegravir / 200 mg FTC / 25 mg TAF). Dolutegravir: 50 mg q.d. p.o. (50 mg b.i.d. if INSTI-resistant).',
        de: 'Biktarvy: 1 Tablette 1x/Tag p.o. Dolutegravir: 1x 50 mg/Tag p.o. (2x 50 mg/Tag bei INSTI-Resistenz).'
      },
      pediatric: {
        hu: 'Biktarvy: ≥2 éves és ≥14 kg gyermekeknél javallt (testsúlyalapú alacsonyabb dózisú tablettákkal). Dolutegravir: ≥4 hetes és ≥3 kg csecsemőktől adható.',
        en: 'Biktarvy: Approved for children ≥2 years weighing ≥14 kg. Dolutegravir: Approved for infants ≥4 weeks and ≥3 kg.',
        de: 'Biktarvy: Ab 2 Jahren und ≥14 kg. Dolutegravir: Ab 4 Wochen und ≥3 kg.'
      },
      prophylaxis: {
        hu: 'PEP (Post-expozíciós profilaxis): Dolutegravir + Tenofovir/FTC 28 napig tűszúrásos vagy szexuális expozíciót követően 72 órán belül elindítva.',
        en: 'Post-exposure prophylaxis (PEP): Dolutegravir + TDF/FTC for 28 days initiated within 72 hours of occupational or non-occupational exposure.',
        de: 'Postexpositionsprophylaxe (PEP): Dolutegravir + TDF/FTC für 28 Tage bei Exposition innerhalb von 72 Stunden.'
      },
      renal: {
        hu: 'Biktarvy: eGFR ≥30 ml/perc felett nem igényel adagmódosítást (krónikus hemodialízis alatt álló betegekben is alkalmazható, ha a vírusterhelés szupprimált).',
        en: 'Biktarvy: No dose adjustment if eGFR ≥30 mL/min (can be used in ESRD on hemodialysis if suppressed).',
        de: 'Biktarvy: Keine Dosisanpassung bei eGFR ≥30 ml/min.'
      },
      hepatic: {
        hu: 'Enyhe és középsúlyos májelégtelenségben (Child-Pugh A, B) nem igényel adagmódosítást. Súlyos májelégtelenségben nem javasolt.',
        en: 'No dose adjustment required for mild-to-moderate hepatic impairment (Child-Pugh A/B).',
        de: 'Keine Dosisanpassung bei Child-Pugh A/B.'
      }
    },
    indications: {
      hu: [
        'HIV-1 fertőzés kezelése felnőttekben és gyermekekben kombinált antiretrovirális terápia (ART) keretében',
        'HIV post-expozíciós profilaxis (PEP) kombinációban 28 napig',
        'Anya-magzati HIV átvitel megelőzése terhesség alatt'
      ],
      en: [
        'Treatment of HIV-1 infection in treatment-naïve and virologically suppressed adults and children',
        'HIV Post-exposure prophylaxis (PEP) regimens for 28 days',
        'Prevention of mother-to-child HIV transmission during pregnancy'
      ],
      de: [
        'Behandlung von HIV-1-Infektionen bei Erwachsenen und Kindern im Rahmen einer ART',
        'HIV-Postexpositionsprophylaxe (PEP) für 28 Tage',
        'Prävention der Mutter-Kind-Übertragung während der Schwangerschaft'
      ]
    },
    sideEffects: {
      hu: [
        'Testsúlygyarapodás és metabolikus változások (az INSTI osztályra jellemző testsúlynövekedés)',
        'Fejfájás, álmatlanság, szorongás, szédülés',
        'Gastrointestinalis panaszok (háborult gyomor, hányinger, hasmenés)',
        'Szérum kreatinin jóindulatú, kismértékű emelkedése (az OCT2 / MATE1 tubuláris szekréció gátlása miatt, valódi GFR csökkenés nélkül)'
      ],
      en: [
        'Weight gain and metabolic changes (recognized INSTI class effect)',
        'Headache, insomnia, dizziness, abnormal dreams',
        'Gastrointestinal complaints (nausea, diarrhea, flatulence)',
        'Benign, mild increase in serum creatinine due to inhibition of OCT2/MATE1 tubular secretion without affecting actual GFR'
      ],
      de: [
        'Gewichtszunahme und metabolische Veränderungen (INSTI-Klasseneffekt)',
        'Kopfschmerzen, Schlafstörungen, Schwindel',
        'Gastrointestinale Beschwerden (Übelkeit, Durchfall)',
        'Benigner milder Serumkreatinin-Anstieg durch OCT2-Hemmung ohne reale GFR-Minderung'
      ]
    },
    practicalTips: {
      hu: [
        'Polivalens kationokat tartalmazó gyógyszereket (Al/Mg tartalmú antacidok, kalcium, vas, magnézium pótlók) a Biktarvy / Dolutegravir bevétele előtt 2 órával vagy utána 6 órával kell bevenni complexképződés miatt!',
        'Ne tévessze meg a kezelés elején látható kismértékű kreatinin-emelkedés (~10-15 µmol/l): ez a tubuláris transzporterek gátlása miatt van, nem valódi vesekárosodás.',
        'A kombinált ART terápia sikerének kulcsa a szigorú, >95%-os gyógyszerszedési addíció (adherence).'
      ],
      en: [
        'Separate administration from polyvalent cations (aluminum/magnesium antacids, iron, calcium supplements) by taking INSTI 2 hours before or 6 hours after!',
        'Do not mistake the initial mild creatinine rise (~0.1 mg/dL) for renal failure; it reflects benign OCT2 inhibition.',
        'Strict medication adherence (>95%) is paramount to prevent viral rebound and resistance development.'
      ],
      de: [
        'Polyvalente Kationen (Magnesium-, Aluminium-Antazida, Eisen, Calcium) 2 Stunden vor oder 6 Stunden nach der Einnahme verabreichen!',
        'Der leichte Kreatinin-Anstieg zu Beginn ist harmlos (OCT2-Hemmung) und stellt kein echtes Nierenversagen dar.',
        'Möglichst strikte Adhärenz (>95%) einhalten, um Resistenzentwicklungen zu verhindern.'
      ]
    }
  },
  {
    id: 'baloxavir',
    name: 'Baloxavir marboxil',
    group: {
      hu: 'Influenza-ellenes szerek (Cap-dependens endonukleáz gátló)',
      en: 'Anti-influenza agents (Cap-dependent endonuclease inhibitor)',
      de: 'Anti-Influenza-Wirkstoffe (Cap-abhängiger Endonuklease-Hemmer)'
    },
    targetViruses: {
      hu: 'Influenza A és Influenza B vírusok (beleértve az Oseltamivir-rezisztens törzseket is)',
      en: 'Influenza A and Influenza B viruses (including oseltamivir-resistant strains)',
      de: 'Influenza-A- und Influenza-B-Viren (inkl. Oseltamivir-resistenter Stämme)'
    },
    halfLife: {
      hu: 'Plazma felezési idő: kb. 79 - 96 óra (rendkívül hosszú, egyetlen dózis elegendő)',
      en: 'Plasma half-life: approx. 79 - 96 hours (supports single-dose regimen)',
      de: 'Plasmahalbwertszeit: ca. 79 - 96 Stunden (Einzeldosis-Therapie)'
    },
    effectType: {
      hu: 'Virosztatikus (Újszerű vírusi mRNS transzkripció gátló)',
      en: 'Virostatic (Novel viral mRNA transcription inhibitor)',
      de: 'Virostatisch (Hemmt virale mRNA-Transkription)'
    },
    specialFeature: {
      hu: 'Egyetlen orális adagból (single dose) álló teljes kezelési kúra! A vírusi replikáció korábbi fázisában hat, mint a neuraminidáz-gátlók, így gyorsabb vírus-címke csökkenést ér el.',
      en: 'Complete course delivered as a single oral dose! Acts at an earlier stage of viral replication than neuraminidase inhibitors, leading to faster decline in viral titers.',
      de: 'Vollständige Therapie als orale Einzeldosis! Wirkt in einer früheren Phase der Virusreplikation als Neuraminidase-Hemmer.'
    },
    mechanismOfAction: {
      hu: 'Szelektíven gátolja az Influenza A és B polimeráz komplexének PA alegységében lévő cap-dependens endonukleáz enzimet. Ez blokkolja a gazdasejt mRNS cap-szerkezetének kihasítását (cap-snatching) és a vírusi RNS transzkripcióját.',
      en: 'Inhibits cap-dependent endonuclease activity of viral RNA polymerase PA subunit, blocking host pre-mRNA cap-snatching and preventing viral mRNA synthesis.',
      de: 'Hemmt selektiv die Cap-abhängige Endonuklease der PA-Subeinheit der viralen RNA-Polymerase und blockiert das Cap-Snatching.'
    },
    dosage: {
      adult: {
        hu: 'Egyszeri orális adag (single dose): <80 kg testsúly esetén 1x 40 mg p.o.; ≥80 kg testsúly esetén 1x 80 mg p.o.',
        en: 'Single oral dose: <80 kg body weight: 40 mg once p.o.; ≥80 kg body weight: 80 mg once p.o.',
        de: 'Einzeldosis oral: <80 kg Körpergewicht: 1x 40 mg p.o.; ≥80 kg Körpergewicht: 1x 80 mg p.o.'
      },
      pediatric: {
        hu: '≥12 év felett a felnőtt adagolás szerint (<80 kg: 40 mg, ≥80 kg: 80 mg). 1-12 év között testsúlyalapú egyszeri adag: <20 kg: 10 mg; 20-40 kg: 20 mg; ≥40 kg: 40 mg.',
        en: 'Ages ≥12 years: adult dosing (<80 kg: 40 mg, ≥80 kg: 80 mg). Ages 1-12 years single dose: <20 kg: 10 mg; 20-40 kg: 20 mg; ≥40 kg: 40 mg.',
        de: 'Ab 12 Jahren: Erwachsenendosis. 1-12 Jahre Einzeldosis: <20 kg: 10 mg; 20-40 kg: 20 mg; ≥40 kg: 40 mg.'
      },
      prophylaxis: {
        hu: 'Post-expozíciós profilaxis: megegyezik a kezelési adaggal (egyszeri orális dózis a fertőzött személlyel való érintkezést követően 48 órán belül).',
        en: 'Post-exposure prophylaxis: Same as treatment dose (single oral dose within 48 hours of exposure).',
        de: 'Postexpositionsprophylaxe: Gleiche Dosis wie bei Behandlung (Einzeldosis innerhalb von 48 Stunden).'
      },
      renal: {
        hu: 'Enyhe és középsúlyos vesekárosodásban (eGFR ≥50 ml/perc) nem igényel adagmódosítást. Súlyos vesekárosodásban klinikai adatok korlátozottak.',
        en: 'No dose adjustment needed for mild or moderate renal impairment. Limited data in severe renal failure.',
        de: 'Keine Dosisanpassung bei leichter oder mäßiger Niereninsuffizienz.'
      },
      hepatic: {
        hu: 'Enyhe és középsúlyos májelégtelenségben (Child-Pugh A, B) nem igényel adagmódosítást.',
        en: 'No dose adjustment required in mild-to-moderate hepatic impairment (Child-Pugh A or B).',
        de: 'Keine Dosisanpassung bei leichter/mäßiger Leberinsuffizienz.'
      }
    },
    indications: {
      hu: [
        'Akut szövődménymentes Influenza A és B fertőzés kezelése 1 éves vagy annál idősebb betegekben (a tünetek megjelenésétől számított 48 órán belül)',
        'Post-expozíciós influenza profilaxis igazolt influenzás beteggel való szoros érintkezést követően'
      ],
      en: [
        'Treatment of acute uncomplicated Influenza A and B in patients aged ≥1 year within 48 hours of symptom onset',
        'Post-exposure prophylaxis of influenza following close contact with an infected individual'
      ],
      de: [
        'Behandlung von akuter unkomplizierter Influenza A und B ab 1 Jahr innerhalb von 48 Stunden nach Symptombeginn',
        'Postexpositionsprophylaxe nach engem Kontakt mit einem Influenza-Patienten'
      ]
    },
    sideEffects: {
      hu: [
        'Hasmenés, bronchitis, nasopharyngitis, hányinger',
        'Fejfájás, szédülés',
        'Túlérzékenységi reakciók (urticaria, rash, angioedema, anaphylaxia - ritkán)',
        'Májenzim-szint emelkedése (ALT, AST transzaminázok átmeneti növekedése)'
      ],
      en: [
        'Diarrhea, bronchitis, nasopharyngitis, nausea',
        'Headache, dizziness',
        'Hypersensitivity reactions (urticaria, rash, angioedema, anaphylaxis)',
        'Transaminase elevations (ALT, AST)'
      ],
      de: [
        'Durchfall, Bronchitis, Nasopharyngitis, Übelkeit',
        'Kopfschmerzen, Schwindel',
        'Überempfindlichkeitsreaktionen (Urtikaria, Angioödem, Anaphylaxie)',
        'Transaminasenanstieg'
      ]
    },
    practicalTips: {
      hu: [
        'A Baloxavirt SOHA ne adjuk polivalens kationokat tartalmazó készítményekkel (kalcium, vas, magnézium, alumínium tartalmú antacidok, laxatívumok, tejtermékek/kalk-dús italok) egyidejűleg, mert ezek komplexet képeznek a gyógyszerrel és drasztikusan lecsökkentik annak felszívódását!',
        'Legfőbb klinikai előnye az Oseltamivirrel szemben az egyetlen adagból álló kezelés, ami garantálja a 100%-os beteg-együttműködést (adherence).',
        'A kezelést az influenza tüneteinek megjelenésétől számított 48 órán belül el KELL indítani a maximális klinikai hatékonyság érdekében.'
      ],
      en: [
        'DO NOT co-administer with polyvalent cation-containing products (calcium, iron, magnesium, aluminum antacids, dairy products/calcium-fortified beverages) as chelation markedly reduces baloxavir absorption!',
        'Major clinical advantage over Oseltamivir is single-dose convenience, eliminating adherence failure.',
        'Must be administered within 48 hours of symptom onset for optimal clinical benefit.'
      ],
      de: [
        'NIEMALS zusammen mit kationenhaltigen Produkten (Calcium, Eisen, Magnesium, Antazida, Milchprodukte) einnehmen wegen Chelatbildung!',
        'Großer klinischer Vorteil gegenüber Oseltamivir: Einzeldosis sichert 100% Adhärenz.',
        'Einnahme innerhalb von 48 Stunden nach Symptombeginn erforderlich.'
      ]
    }
  },
  {
    id: 'abacavir_lamivudine_emtricitabine',
    name: 'Abacavir / Lamivudin / Emtricitabin (NRTI-k)',
    group: {
      hu: 'HIV / Retrovírus-ellenes szerek (Nukleozid reverz transzkriptáz gátlók - NRTI-k)',
      en: 'Anti-HIV agents (Nucleoside reverse transcriptase inhibitors - NRTIs)',
      de: 'Anti-HIV-Wirkstoffe (Nukleosidische Reverse-Transkriptase-Inhibitoren - NRTIs)'
    },
    targetViruses: {
      hu: 'Human Immunodeficientia Vírus 1 és 2 (HIV-1, HIV-2), Lamivudin/Emtricitabin esetén HBV is',
      en: 'Human Immunodeficiency Virus 1 and 2 (HIV-1, HIV-2), also HBV for Lamivudine/Emtricitabine',
      de: 'Humanes Immundefizienzvirus 1 und 2 (HIV-1, HIV-2), bei Lamivudin/Emtricitabin auch HBV'
    },
    halfLife: {
      hu: 'Plazma felezési idő: 1.5 - 3 óra; Intracelluláris aktív trifoszfát felezési idő: 12 - 20 óra (napi 1x adagolást tesz lehetővé)',
      en: 'Plasma half-life: 1.5 - 3 hours; Intracellular active triphosphate half-life: 12 - 20 hours (supports q.d. dosing)',
      de: 'Plasmahalbwertszeit: 1,5 - 3 Stunden; Intrazelluläres Triphosphat: 12 - 20 Stunden (1x täglich)'
    },
    effectType: {
      hu: 'Virosztatikus (Vírusi lánczáró NRTI alapelemek)',
      en: 'Virostatic (Obligate chain-terminating NRTI backbone)',
      de: 'Virostatisch (Kettenabbrechende NRTI-Rückgratkomponenten)'
    },
    specialFeature: {
      hu: 'A kombinált antiretrovirális terápia (ART) klasszikus gerince ("backbone"). Az Abacavir adása előtt KÖTELEZŐ a HLA-B*5701 genetikai szűrés az életveszélyes túlérzékenységi reakció (HSR) megelőzésére! Kettős kombinációk: Dovato (DTG/3TC), Truvada (TDF/FTC), Descovy (TAF/FTC), Kivexa (ABC/3TC).',
      en: 'Essential nucleoside backbone of combination ART. MANDATORY HLA-B*5701 genetic screening prior to initiating Abacavir to prevent fatal hypersensitivity reaction (HSR)! Common fixed-dose duos: Dovato (DTG/3TC), Descovy (TAF/FTC).',
      de: 'Essentielles NRTI-Rückgrat der ART. ZWINGENDE HLA-B*5701-Testung vor Abacavir-Gabe zur Vermeidung lebensbedrohlicher Überempfindlichkeitsreaktionen (HSR)!'
    },
    mechanismOfAction: {
      hu: 'Intracellulárisan aktív trifoszfáttá foszforilálódnak, kompetitíven gátolják a vírusi reverz transzkriptáz (RT) enzimet, és minthogy hiányzik róluk a 3\'-OH csoport, lánczáróként beépülve leállítják a vírusi DNS-lánc nyúlását.',
      en: 'Phosphorylated intracellularly to active triphosphates, competing with natural dNTPs for HIV reverse transcriptase (RT) and causing obligate chain termination.',
      de: 'Werden intrazellulär zu Triphosphaten phosphoryliert, hemmend kompetitiv die HIV-Reverse-Transkriptase und bewirken einen Kettenabbruch.'
    },
    dosage: {
      adult: {
        hu: 'Dovato (Dolutegravir 50 mg / Lamivudin 300 mg): 1x 1 tbl/nap p.o. Descovy (Emtricitabin 200 mg / TAF 25 mg): 1x 1 tbl/nap p.o. Kivexa (Abacavir 600 mg / Lamivudin 300 mg): 1x 1 tbl/nap p.o.',
        en: 'Dovato (Dolutegravir 50 mg / Lamivudine 300 mg): 1 tab q.d. Descovy (FTC 200 mg / TAF 25 mg): 1 tab q.d. Kivexa (Abacavir 600 mg / Lamivudine 300 mg): 1 tab q.d.',
        de: 'Dovato (Dolutegravir 50 mg / Lamivudin 300 mg): 1x 1 Tabl/Tag. Descovy (FTC 200 mg / TAF 25 mg): 1x 1 Tabl/Tag.'
      },
      pediatric: {
        hu: 'Testsúly szerint adagolandó orális oldat vagy csökkentett dózisú kombinált tabletták formájában (pl. Abacavir/Lamivudine ≥3 hónapos kortól).',
        en: 'Weight-based dosing utilizing oral solution or pediatric fixed-dose combination tablets (e.g., Abacavir/Lamivudine from ≥3 months).',
        de: 'Gewichtsadaptierte Dosierung mit Lösung oder Kinder-Kombinationstabletten.'
      },
      prophylaxis: {
        hu: 'PrEP (Pre-expozíciós profilaxis): Truvada vagy Descovy (TDF/FTC vagy TAF/FTC) napi 1x 1 tabletta folyamatosan a HIV fertőzés megelőzésére magas kockázatú egyénekben.',
        en: 'PrEP (Pre-exposure prophylaxis): Truvada or Descovy 1 tab q.d. continuously to prevent HIV acquisition in high-risk individuals.',
        de: 'PrEP (Präexpositionsprophylaxe): Truvada oder Descovy 1x 1 Tabl/Tag kontinuierlich zur Verhinderung einer HIV-Infektion.'
      },
      renal: {
        hu: 'Lamivudin és Emtricitabin vesén át ürül: eGFR <50 ml/perc alatt dózisszűkítés szükséges. Abacavir májban metabolizálódik, vesekárosodásban nem igényel módosítást.',
        en: 'Lamivudine and Emtricitabine require dose reduction if CrCl <50 mL/min due to renal excretion. Abacavir is hepatically metabolized, no renal dose adjustment needed.',
        de: 'Lamivudin und Emtricitabin erfordern Dosisanpassung bei CrCl <50 ml/min. Abacavir wird hepatisch metabolisiert.'
      },
      hepatic: {
        hu: 'Abacavir: enyhe májelégtelenségben (Child-Pugh A) csökkentett adag (2x 200 mg orális oldat); középsúlyos és súlyos májkárosodásban ELLENJAVALLT!',
        en: 'Abacavir: reduced dose in mild hepatic impairment (Child-Pugh A); CONTRAINDICATED in moderate-to-severe hepatic impairment.',
        de: 'Abacavir: reduzierte Dosis bei Child-Pugh A; KONTRAINDIZIERT bei mäßiger/schwerer Leberinsuffizienz.'
      }
    },
    indications: {
      hu: [
        'HIV-1 fertőzés antiretrovirális kombinált kezelése (ART) felnőttekben és gyermekekben',
        'HIV Pre-expozíciós profilaxis (PrEP) nem fertőzött, de magas kockázatú személyeknél (TDF/FTC vagy TAF/FTC)',
        'HIV Post-expozíciós profilaxis (PEP) 28 napos kombinált sémák része'
      ],
      en: [
        'Combination antiretroviral therapy (ART) of HIV-1 infection in adults and pediatrics',
        'HIV Pre-exposure prophylaxis (PrEP) in uninfected individuals at high risk (TDF/FTC or TAF/FTC)',
        'HIV Post-exposure prophylaxis (PEP) as part of 28-day combination regimens'
      ],
      de: [
        'Antiretrovirale Kombinationstherapie (ART) der HIV-1-Infektion bei Erwachsenen und Kindern',
        'HIV-Präexpositionsprophylaxe (PrEP) bei Personen mit hohem Infektionsrisiko',
        'HIV-Postexpositionsprophylaxe (PEP) als Teil von 28-Tage-Regimen'
      ]
    },
    sideEffects: {
      hu: [
        'Abacavir Túlérzékenységi Reakció (HSR): láz, kiütés, gastrointestinalis tünetek, nehézlégzés, lethargia – HLA-B*5701 pozitívakban életveszélyes, re-challenge HALÁLOS lehet!',
        'Laktát-acidózis és máj-steatosis (a mitochondriális DNS-polimeráz gamma gátlása miatt - ritkább az újabb NRTI-knél)',
        'Fejfájás, émelygés, hasmenés, alvászavarok',
        'Bőrpigmentáció (hiperpigmentáció a tenyereken/talpakon Emtricitabin esetén)'
      ],
      en: [
        'Abacavir Hypersensitivity Reaction (HSR): fever, rash, GI distress, dyspnea, fatigue – potentially fatal upon re-challenge in HLA-B*5701+ patients!',
        'Lactic acidosis and severe hepatomegaly with steatosis (mitochondrial toxicity due to DNA pol-gamma inhibition)',
        'Headache, nausea, diarrhea, insomnia',
        'Skin hyperpigmentation (palms/soles reported with Emtricitabine)'
      ],
      de: [
        'Abacavir-Überempfindlichkeitsreaktion (HSR): Fieber, Exanthem, Dyspnoe – bei HLA-B*5701+ potenziell tödlich bei Re-Exposition!',
        'Laktatazidose und Hepatomegalie mit Steatose (Mitochondriale Toxizität)',
        'Kopfschmerzen, Übelkeit, Durchfall',
        'Hauthyperpigmentierung unter Emtricitabin'
      ]
    },
    practicalTips: {
      hu: [
        'ABACAVIR KEZDÉSE ELŐTT KÖTELEZŐ A HLA-B*5701 GENETIKAI TESZT! Pozitív eredmény esetén az Abacavir örökre ellenjavallt. Ha Abacavir HSR gyanúja miatt leállítják, SOHA nem szabad újrakezdeni!',
        'Lamivudint és Emtricitabint tartalmazó sémák hirtelen leállítása HBV ko-fertőzött betegekben súlyos Hepatitis B fellángolást (flare) okozhat.',
        'A Dovato (Dolutegravir/Lamivudin) 2-gyógyszeres séma (2-drug regimen) kiváló hatékonyságú elsővonalbeli lehetőség, ami megkíméli a beteget a 3. gyógyszer toxicitásától.'
      ],
      en: [
        'MANDATORY HLA-B*5701 screening prior to starting Abacavir! If positive, Abacavir is strictly contraindicated forever. NEVER re-challenge if HSR is suspected!',
        'Abrupt discontinuation of Lamivudine or Emtricitabine in HBV co-infected patients can precipitate severe acute hepatitis B flare.',
        'Dovato (DTG/3TC) is a highly potent 2-drug regimen for initial therapy, sparing patients third-agent long-term toxicity.'
      ],
      de: [
        'ZWINGENDER HLA-B*5701-Test vor Abacavir-Start! Bei positivem Testergebnis Abacavir lebenslang kontraindiziert. Bei HSR-Verdacht NIEMALS erneut anwenden!',
        'Abruptes Absetzen bei HBV-Koinfektion kann schwere Hepatitis-B-Flares auslösen.',
        'Dovato (DTG/3TC) ist ein hochwirksames 2-Medikamente-Regimen der Erstlinie.'
      ]
    }
  },
  {
    id: 'darunavir_cobicistat',
    name: 'Darunavir / Cobicistat (vagy Ritonavir)',
    group: {
      hu: 'HIV / Retrovírus-ellenes szerek (Proteáz gátlók - PI)',
      en: 'Anti-HIV agents (Protease inhibitors - PI)',
      de: 'Anti-HIV-Wirkstoffe (Protease-Inhibitoren - PI)'
    },
    targetViruses: {
      hu: 'Human Immunodeficientia Vírus 1 és 2 (HIV-1, HIV-2)',
      en: 'Human Immunodeficiency Virus 1 and 2 (HIV-1, HIV-2)',
      de: 'Humanes Immundefizienzvirus 1 und 2 (HIV-1, HIV-2)'
    },
    halfLife: {
      hu: 'Darunavir (cobicistattal/ritonavirrel boostolva): ~15 óra (napi 1x orális adagolást biztosít)',
      en: 'Darunavir (boosted with cobicistat or ritonavir): ~15 hours (supports q.d. dosing)',
      de: 'Darunavir (mit Cobicistat/Ritonavir geboostet): ~15 Stunden (1x täglich)'
    },
    effectType: {
      hu: 'Virosztatikus (Érett, fertőző virionok képződését gátló PI)',
      en: 'Virostatic (Inhibits maturation into infectious virions)',
      de: 'Virostatisch (Hemmt die Ausreifung zu infektiösen Virionen)'
    },
    specialFeature: {
      hu: 'A legmagasabb genetikai barrierrel rendelkező antiretrovirális szer, rezisztencia kialakulása rendkívül ritka. A Cobicistat vagy Ritonavir mint PK-booster gátolja a Darunavir CYP3A általi lebomlását. Elérhető fix dózisú 1-tablettás kombinációban is: Symtuza (DRV/c/FTC/TAF).',
      en: 'Highest genetic barrier to resistance among all antiretrovirals. Requires a PK booster (cobicistat or ritonavir) to inhibit CYP3A metabolism. Available in single-tablet regimen Symtuza (DRV/c/FTC/TAF).',
      de: 'Höchste genetische Barriere gegen Resistenzen unter allen Antiretroviralia. Benötigt PK-Booster (Cobicistat oder Ritonavir).'
    },
    mechanismOfAction: {
      hu: 'Kompakt molekulaszerkezetével rugalmasan és szelektíven kötődik a HIV-1 proteáz enzim aktív helyéhez, meggátolva a gag-pol poliprotein hasítását. Ez megakadályozza a nem-fertőző éretlen virionok érett, fertőző vírusrészecskévé alakulását.',
      en: 'Reversibly inhibits HIV-1 protease, preventing cleavage of gag-pol polyproteins, resulting in the formation of immature, non-infectious viral particles.',
      de: 'Hemmt selektiv die HIV-1-Protease und blockiert die Spaltung viraler Polyproteine, wodurch unreife, nicht-infektiöse Partikel entstehen.'
    },
    dosage: {
      adult: {
        hu: 'Kezelés-náív vagy rezisztencia-mentes betegekben: 1x 800 mg Darunavir + 1x 150 mg Cobicistat (Rezolsta) vagy 1x 100 mg Ritonavir naponta 1x étkezés közben. Symtuza: 1x 1 tbl/nap. PI-rezisztens betegekben: 2x 600 mg DRV + 2x 100 mg Ritonavir/nap!',
        en: 'Treatment-naïve or PI-unexposed: Darunavir 800 mg + Cobicistat 150 mg (Rezolsta) q.d. with food, or Symtuza 1 tab q.d. PI-resistant cases: Darunavir 600 mg + Ritonavir 100 mg b.i.d.!',
        de: 'Therapienaiv: Darunavir 800 mg + Cobicistat 150 mg 1x/Tag mit Nahrung. Bei PI-Resistenz: Darunavir 600 mg + Ritonavir 100 mg 2x/Tag!'
      },
      pediatric: {
        hu: '≥3 éves és ≥10 kg gyermekeknél adható (ritonavirrel boostolva, testsúlyalapú adagolással). Cobicistat boostolással ≥12 éves kor és ≥35 kg felett engedélyezett.',
        en: 'Approved for children ≥3 years weighing ≥10 kg (boosted with ritonavir, weight-based). Boosted with cobicistat approved for ages ≥12 years and ≥35 kg.',
        de: 'Ab 3 Jahren und ≥10 kg (mit Ritonavir gewichtsadaptiert). Mit Cobicistat ab 12 Jahren und ≥35 kg.'
      },
      prophylaxis: {
        hu: 'PEP (Post-expozíciós profilaxis): alternatív harmadik szerként adható Dolutegravir intolerancia esetén (DRV/c + TDF/FTC 28 napig).',
        en: 'PEP: Alternative third agent in post-exposure prophylaxis if INSTI-based regimens are not tolerated (DRV/c + TDF/FTC for 28 days).',
        de: 'PEP: Alternativer dritter Wirkstoff bei INSTI-Unverträglichkeit (DRV/c + TDF/FTC für 28 Tage).'
      },
      renal: {
        hu: 'Darunavir önmagában nem igényel adagmódosítást. Cobicistat jelenlétében eGFR <30 ml/perc alatt a kombináció elindítása nem javasolt (a Cobicistat gátolja a kreatinin tubuláris szekrécióját).',
        en: 'Darunavir alone requires no renal adjustment. Cobicistat-boosted combinations should not be initiated if eGFR <30 mL/min.',
        de: 'Darunavir allein erfordert keine Dosisanpassung. Cobicistat-Kombinationen bei eGFR <30 ml/min nicht neu ansetzen.'
      },
      hepatic: {
        hu: 'Enyhe és középsúlyos májkárosodásban (Child-Pugh A, B) nem igényel adagmódosítást. Súlyos májelégtelenségben (Child-Pugh C) ELLENJAVALLT.',
        en: 'No dose adjustment for mild-to-moderate hepatic impairment (Child-Pugh A/B). CONTRAINDICATED in severe hepatic impairment (Child-Pugh C).',
        de: 'Keine Dosisanpassung bei Child-Pugh A/B. KONTRAINDIZIERT bei schwerer Leberinsuffizienz (Child-Pugh C).'
      }
    },
    indications: {
      hu: [
        'HIV-1 fertőzés antiretrovirális kezelése (ART) felnőttekben és gyermekekben, különösen többszörösen kezelt, gyógyszer-rezisztens törzsek esetén',
        'Elsővonalbeli opció olyan betegeknél, akiknél a terápia-hűség (adherence) ingadozó, mivel a magas genetikai gát véd a rezisztencia ellen'
      ],
      en: [
        'Antiretroviral therapy (ART) for HIV-1 infection in treatment-naïve and heavily treatment-experienced patients with drug-resistant strains',
        'Preferred choice for patients with erratic adherence owing to its exceptionally high barrier to resistance'
      ],
      de: [
        'Antiretrovirale Therapie (ART) der HIV-1-Infektion bei therapienaiven und stark vorbehandelten Patienten',
        'Bevorzugte Wahl bei schwankender Adhärenz aufgrund der sehr hohen Resistenzbarriere'
      ]
    },
    sideEffects: {
      hu: [
        'Szulfonamid túlérzékenység! A Darunavir szulfonamid szerkezetű: kiütések (rash), Stevens-Johnson szindróma előfordulhat szulfonamid-allergiás betegekben',
        'Metabolikus zavarok: dyslipidemia (triglicerid- és koleszterinszint-emelkedés), lipodystrophia, inzulinrezisztencia / hyperglicemia',
        'Gastrointestinalis panaszok (hasmenés, hányinger, hányás, flatulentia)',
        'Számos gyógyszerinterakció a Cobicistat / Ritonavir erős CYP3A4 és P-gp gátlása miatt!'
      ],
      en: [
        'Sulfa allergy risk! Darunavir contains a sulfonamide moiety: rash, Stevens-Johnson syndrome reported in sulfa-allergic individuals',
        'Metabolic complications: dyslipidemia (elevated triglycerides and LDL), lipodystrophy, insulin resistance/hyperglycemia',
        'Gastrointestinal distress (diarrhea, nausea, vomiting, flatulence)',
        'Extensive drug-drug interactions due to potent CYP3A4/P-gp inhibition by Cobicistat/Ritonavir booster'
      ],
      de: [
        'Sulfonamid-Allergierisiko! Darunavir enthält eine Sulfonamid-Gruppe: Exanthem, Stevens-Johnson-Syndrom möglich',
        'Metabolische Störungen: Dyslipidämie, Lipodystrophie, Insulinresistenz',
        'Gastrointestinale Beschwerden (Durchfall, Übelkeit)',
        'Zahlreiche Wechselwirkungen durch CYP3A-Hemmung des Boosters'
      ]
    },
    practicalTips: {
      hu: [
        'A Darunavirt MINDIG ÉTKEZÉS KÖZBEN kell bevenni a plazmaszint és a biohasznosulás maximalizálása érdekében!',
        'A boosterelt Darunavir terápia megkezdése előtt kötelező ellenőrizni a beteg összes gyógyszerét gyógyszerinterakciókra (pl. simvastatin, lovastatin, alfuzosin, dronedaron, rifampicin egyidejű adása ELLENJAVALLT)!',
        'Szulfonamid-érzékeny betegekben fokozott óvatossággal adható; kiütések megjelenésekor a terápiát fel kell függeszteni.'
      ],
      en: [
        'ALWAYS take Darunavir WITH FOOD to ensure optimal absorption and systemic exposure!',
        'Comprehensive drug-drug interaction check mandatory before prescribing boosted DRV (contraindicated with simvastatin, alfuzosin, dronedarone, rifampin, etc.)!',
        'Use with caution in patients with known sulfonamide allergy; discontinue immediately if severe rash develops.'
      ],
      de: [
        'Darunavir IMMER ZUSAMMEN MIT MAHLZEITEN einnehmen zur Optimierung der Bioverfügbarkeit!',
        'Zwingende Interaktionsprüfung aller Medikamente vor Verschreibung (kontraindiziert mit Simvastatin, Alfuzosin, Rifampicin etc.)!',
        'Vorsicht bei bekannter Sulfonamid-Allergie; bei schwerem Exanthem absetzen.'
      ]
    }
  },
  {
    id: 'nnrti_doravirine_rilpivirine',
    name: 'Doravirin / Rilpivirin (NNRTI-k)',
    group: {
      hu: 'HIV / Retrovírus-ellenes szerek (Nem-nukleozid reverz transzkriptáz gátlók - NNRTI-k)',
      en: 'Anti-HIV agents (Non-nucleoside reverse transcriptase inhibitors - NNRTIs)',
      de: 'Anti-HIV-Wirkstoffe (Nicht-nukleosidische Reverse-Transkriptase-Inhibitoren - NNRTIs)'
    },
    targetViruses: {
      hu: 'Human Immunodeficientia Vírus 1 (HIV-1)',
      en: 'Human Immunodeficiency Virus 1 (HIV-1)',
      de: 'Humanes Immundefizienzvirus 1 (HIV-1)'
    },
    halfLife: {
      hu: 'Doravirin: ~15 óra; Rilpivirin: ~45 óra (napi 1x orális adagolás)',
      en: 'Doravirine: ~15 hours; Rilpivirine: ~45 hours (supports q.d. dosing)',
      de: 'Doravirin: ~15 Stunden; Rilpivirin: ~45 Stunden (1x täglich)'
    },
    effectType: {
      hu: 'Virosztatikus (Alloszterikus HIV-1 reverz transzkriptáz gátlók)',
      en: 'Virostatic (Allosteric HIV-1 reverse transcriptase inhibitors)',
      de: 'Virostatisch (Allosterische HIV-1-Reverse-Transkriptase-Hemmer)'
    },
    specialFeature: {
      hu: 'Második és harmadik generációs NNRTI-k. A Doravirin kedvező lipidprofilú, nem igényel étkezési megkötést, és ritkán okoz CNS mellékhatásokat. Fix dózisú 1-tablettás kombinációk: Delstrigo (DOR/TDF/3TC), Juluca (DTG/RPV), Odefsey (RPV/TAF/FTC).',
      en: 'Modern 2nd/3rd generation NNRTIs with improved tolerability. Doravirine has a neutral lipid profile and low CNS toxicity. Available in single-tablet regimens Delstrigo (DOR/TDF/3TC) and Juluca (DTG/RPV).',
      de: 'Moderne NNRTIs der 2./3. Generation mit verbesserter Verträglichkeit. Doravirin ist neutral bezüglich Lipidprofil und zeigt geringe ZNS-Toxizität.'
    },
    mechanismOfAction: {
      hu: 'Nem-kompetitív módon kötődnek a HIV-1 reverz transzkriptáz (RT) enzim alloszterikus, nem-katalitikus kötőhelyéhez ("NNRTI pocket"), ami konformációváltozást idéz elő és gátolja a vírusi RNS/DNS szintézist.',
      en: 'Binds non-competitively to an allosteric hydrophobic pocket near the active site of HIV-1 reverse transcriptase, inducing a conformational change that halts DNA synthesis.',
      de: 'Bindet nicht-kompetitiv an eine allosterische Tasche der HIV-1-Reversen-Transkriptase und blockiert die DNA-Synthese durch Konformationsänderung.'
    },
    dosage: {
      adult: {
        hu: 'Doravirin (Pifeltro / Delstrigo): 1x 100 mg/nap p.o. étkezéstől függetlenül. Rilpivirin (Edurant / Odefsey / Juluca): 1x 25 mg/nap p.o. KÖTELEZŐEN kiadós, kalóriadús étkezéssel bevenni!',
        en: 'Doravirine (Pifeltro / Delstrigo): 100 mg q.d. p.o. with or without food. Rilpivirine (Edurant / Odefsey / Juluca): 25 mg q.d. p.o. MUST be taken with a heavy meal!',
        de: 'Doravirin (Pifeltro / Delstrigo): 1x 100 mg/Tag p.o. unabhängig von Mahlzeiten. Rilpivirin: 1x 25 mg/Tag p.o. ZWINGEND mit einer reichhaltigen Mahlzeit einnehmen!'
      },
      pediatric: {
        hu: 'Doravirin: ≥35 kg serdülőkben és felnőttekben engedélyezett. Rilpivirin: ≥12 éves kor felett és ≥35 kg testsúly esetén adható.',
        en: 'Doravirine: Approved for adolescents weighing ≥35 kg. Rilpivirine: Approved for ages ≥12 years weighing ≥35 kg.',
        de: 'Doravirin: Zugelassen ab 35 kg. Rilpivirin: Zugelassen ab 12 Jahren und ≥35 kg.'
      },
      prophylaxis: {
        hu: 'Profilaxisra (PrEP/PEP) nem elsővonalbeli szer alacsonyabb genetikai gátjuk miatt; elsősorban krónikus ART fenntartó terápiában alkalmazzák őket.',
        en: 'Not routinely used for PrEP or PEP due to lower genetic barrier compared to INSTIs or PIs; strictly utilized in chronic ART.',
        de: 'Nicht für PrEP oder PEP empfohlen; Anwendung in der chronischen ART.'
      },
      renal: {
        hu: 'Doravirin és Rilpivirin önmagában nem igényel adagmódosítást bármilyen fokú vesekárosodás esetén.',
        en: 'No dose adjustment required for Doravirine or Rilpivirine alone in renal impairment.',
        de: 'Keine Dosisanpassung bei Niereninsuffizienz für Doravirin oder Rilpivirin allein.'
      },
      hepatic: {
        hu: 'Enyhe és középsúlyos májelégtelenségben (Child-Pugh A, B) nem igényel módosítást. Súlyos májkárosodásban (Child-Pugh C) nem tanulmányozták.',
        en: 'No dose adjustment needed for mild-to-moderate hepatic impairment (Child-Pugh A/B). Not studied in severe hepatic impairment.',
        de: 'Keine Dosisanpassung bei Child-Pugh A/B. Bei schwerer Leberinsuffizienz nicht untersucht.'
      }
    },
    indications: {
      hu: [
        'HIV-1 fertőzés kezelése felnőttekben és serdülőkben kombinált antiretrovirális terápia (ART) keretében',
        'Viroilag szupprimált HIV fertőzött betegek terápia-egyszerűsítése (simplification, pl. Juluca 2-drug regimen)'
      ],
      en: [
        'Treatment of HIV-1 infection in adults and adolescents as part of combination antiretroviral therapy (ART)',
        'Regimen simplification in virologically suppressed HIV patients (e.g. Juluca 2-drug regimen)'
      ],
      de: [
        'Behandlung der HIV-1-Infektion bei Erwachsenen und Jugendlichen im Rahmen einer kombinierten ART',
        'Therapievereinfachung bei virologisch supprimierten HIV-Patienten (z. B. Juluca)'
      ]
    },
    sideEffects: {
      hu: [
        'Depresszió, hangulatzavarok, szorongás, alvászavarok (a régebbi Efavirenznél jóval ritkábbak)',
        'Fejfájás, szédülés, fáradékonyság',
        'Gastrointestinalis panaszok (háborult gyomor, hányinger)',
        'QTo-megnyúlás magasabb Rilpivirin dózisoknál'
      ],
      en: [
        'Depression, mood changes, anxiety, sleep disturbances (significantly less frequent than with older Efavirenz)',
        'Headache, dizziness, fatigue',
        'Gastrointestinal upset (nausea, abdominal pain)',
        'QTc prolongation with supratherapeutic Rilpivirine doses'
      ],
      de: [
        'Depression, Stimmungsschwankungen, Schlafstörungen (deutlich seltener als unter Efavirenz)',
        'Kopfschmerzen, Schwindel, Müdigkeit',
        'Gastrointestinale Beschwerden',
        'QTc-Verlängerung bei höheren Rilpivirin-Dosen'
      ]
    },
    practicalTips: {
      hu: [
        'A Rilpivirt KÖTELEZŐ normál, kalóriadús étkezéssel bevenni (nem elegendő egy könnyű snack vagy proteinturmix), különben a felszívódása 50%-kal csökken és terápia-elégtelenség lép fel!',
        'Protonpumpa-gátlók (PPI) adása Rilpivirinnel SZIGORÚAN ELLENJAVALLT a gyomornedv pH-emelkedése miatti felszívódási elégtelenség miatt.',
        'A Doravirin étkezéstől függetlenül bevehető, PPI-kel nem lép interakcióba, és kedvező metabolikus/lipid profilt mutat.'
      ],
      en: [
        'Rilpivirine MUST be taken with a meal containing sufficient calories (not just a snack or protein shake), otherwise oral absorption drops by 50% causing virological failure!',
        'Co-administration of Proton Pump Inhibitors (PPIs) with Rilpivirine is STRICTLY CONTRAINDICATED due to pH-dependent bioavailability loss.',
        'Doravirine can be taken with or without food, does not interact with PPIs, and exhibits an excellent lipid profile.'
      ],
      de: [
        'Rilpivirin ZWINGEND mit einer vollständigen kalorienreichen Mahlzeit einnehmen, sonst sinkt die Resorption um 50%!',
        'Protonenpumpenhemmer (PPI) zusammen mit Rilpivirin STRENG KONTRAINDIZIERT wegen pH-abhängiger Resorptionseinbuße.',
        'Doravirin kann unabhängig von Mahlzeiten und PPIs eingenommen werden.'
      ]
    }
  },
  {
    id: 'long_acting_hiv_cabotegravir_lenacapavir',
    name: 'Cabotegravir / Lenacapavir (Hosszú hatású ART)',
    group: {
      hu: 'HIV / Retrovírus-ellenes szerek (Hosszú hatású injekciós INSTI & Capsid gátlók)',
      en: 'Anti-HIV agents (Long-acting injectable INSTI & Capsid inhibitors)',
      de: 'Anti-HIV-Wirkstoffe (Langwirksame injizierbare INSTIs & Capsid-Hemmer)'
    },
    targetViruses: {
      hu: 'Human Immunodeficientia Vírus 1 (HIV-1, beleértve a multirezisztens törzseket is)',
      en: 'Human Immunodeficiency Virus 1 (HIV-1, including multi-drug resistant strains)',
      de: 'Humanes Immundefizienzvirus 1 (HIV-1, inkl. multiresistenter Stämme)'
    },
    halfLife: {
      hu: 'Cabotegravir (intramuscularis depot): ~5.6 - 11.5 hét; Lenacapavir (subcutan depot): ~8 - 12 hét (2 havonta ill. 6 havonta adandó!)',
      en: 'Cabotegravir LA (i.m. depot): ~5.6 - 11.5 weeks; Lenacapavir (s.c. depot): ~8 - 12 weeks (supports q2m or q6m dosing!)',
      de: 'Cabotegravir LA (i.m. Depot): ~5,6 - 11,5 Wochen; Lenacapavir (s.c. Depot): ~8 - 12 Wochen (alle 2 bzw. 6 Monate!)'
    },
    effectType: {
      hu: 'Virosztatikus (Ultralong-acting orális tabletta-mentes HIV elnyomás)',
      en: 'Virostatic (Ultra long-acting pill-free viral suppression)',
      de: 'Virostatisch (Ultralange tablettenfreie HIV-Suppression)'
    },
    specialFeature: {
      hu: 'Forradalmi tabletta-mentes HIV kezelés! Cabotegravir + Rilpivirin (Vocabria + Rekambys / Cabenuva): 2 havonta adandó i.m. glutealis injekció. Lenacapavir (Sunlenca): az első félévente (6 havonta!) subcutan adandó kapszid gátló multirezisztens HIV-re és PrEP-re.',
      en: 'Revolutionary long-acting pill-free therapy! Cabotegravir + Rilpivirine (Cabenuva): intramuscular injections administered every 2 months. Lenacapavir (Sunlenca): first-in-class capsid inhibitor given subQ every 6 months!',
      de: 'Revolutionäre tablettenfreie Langzeittherapie! Cabotegravir + Rilpivirin (Cabenuva): i.m. Injektion alle 2 Monate. Lenacapavir (Sunlenca): s.c. Injektion alle 6 Monate!'
    },
    mechanismOfAction: {
      hu: 'Cabotegravir: másodgenerációs INSTI, megakadályozza a vírusi DNS beépülését. Lenacapavir: többfunkciós kapszid gátló, ami blokkolja a HIV kapszid összeépülését, a magi transzportot és a virionok felszabadulását.',
      en: 'Cabotegravir: 2nd-gen INSTI blocking viral DNA integration. Lenacapavir: multistage capsid inhibitor disrupting capsid assembly, nuclear transport, and viral release.',
      de: 'Cabotegravir: 2. Gen. INSTI. Lenacapavir: Multistage Capsid-Inhibitor, der Assembly, Kerntransport und Freisetzung blockiert.'
    },
    dosage: {
      adult: {
        hu: 'Cabenuva (Cabotegravir 600 mg + Rilpivirin 900 mg i.m.): 2 havonta 1-1 glutealis injekció (2 mL). Lenacapavir (Sunlenca): orális feltöltés után 927 mg (2x 1.5 mL) subcutan injekció 6 havonta (26 hetente egyszer)!',
        en: 'Cabenuva (Cabotegravir 600 mg + Rilpivirine 900 mg i.m.): 2 gluteal injections every 2 months. Lenacapavir (Sunlenca): after oral lead-in, 927 mg s.c. every 6 months (26 weeks)!',
        de: 'Cabenuva: 2 i.m.-Glutealinjektionen alle 2 Monate. Lenacapavir (Sunlenca): nach oraler Einleitung 927 mg s.c. alle 6 Monate (26 Wochen)!'
      },
      pediatric: {
        hu: 'Cabotegravir/Rilpivirine LA: ≥12 éves kor felett és ≥35 kg testsúly esetén adható. Lenacapavir: jelenleg ≥35 kg felnőtt és serdülőkben javallt.',
        en: 'Cabotegravir/Rilpivirine LA: Approved for ages ≥12 years weighing ≥35 kg. Lenacapavir: Approved for adults and adolescents ≥35 kg.',
        de: 'Cabotegravir/Rilpivirin LA: Ab 12 Jahren und ≥35 kg. Lenacapavir: Ab 35 kg zugelassen.'
      },
      prophylaxis: {
        hu: 'PrEP (Pre-expozíciós profilaxis): Cabotegravir LA (Apretude) 2 havonta 1 i.m. injekció; Lenacapavir 6 havonta 1 s.c. injekció (100%-os védelmet mutató klinikai vizsgálatokkal).',
        en: 'PrEP: Cabotegravir LA (Apretude) 1 i.m. injection every 2 months; Lenacapavir s.c. every 6 months (showing near 100% efficacy in phase 3 trials).',
        de: 'PrEP: Cabotegravir LA (Apretude) 1 i.m. Injektion alle 2 Monate; Lenacapavir s.c. alle 6 Monate.'
      },
      renal: {
        hu: 'Enyhe, mérsékelt és súlyos vesekárosodásban nem igényel adagmódosítást (dializált betegekben gondos monitorozás).',
        en: 'No dose adjustment required for mild, moderate, or severe renal impairment.',
        de: 'Keine Dosisanpassung bei leichten, mäßigen oder schweren Nierenschäden.'
      },
      hepatic: {
        hu: 'Enyhe és középsúlyos májelégtelenségben (Child-Pugh A, B) nem igényel adagmódosítást.',
        en: 'No dose adjustment needed for mild-to-moderate hepatic impairment (Child-Pugh A/B).',
        de: 'Keine Dosisanpassung bei Child-Pugh A/B.'
      }
    },
    indications: {
      hu: [
        'Virológiailag szupprimált HIV-1 fertőzött felnőttek és serdülők (≥35 kg) terápia-váltása orális tablettákról hosszú hatású injekcióra',
        'Lenacapavir: Többszörösen kezelt, multirezisztens (MDR) HIV-1 fertőzött felnőttek kezelése kombinált ART részeként',
        'HIV Pre-expozíciós profilaxis (PrEP) hosszú hatású injekció formájában'
      ],
      en: [
        'Maintenance treatment of virologically suppressed HIV-1 infection in adults and adolescents (≥35 kg) switching from oral ART',
        'Lenacapavir: Heavily treatment-experienced adults with multidrug-resistant (MDR) HIV-1 infection',
        'Long-acting HIV Pre-exposure prophylaxis (PrEP)'
      ],
      de: [
        'Erhaltungstherapie der virologisch supprimierten HIV-1-Infektion bei Umstellung von oraler ART auf Langzeit-Injektionen',
        'Lenacapavir: Stark vorbehandelte Erwachsene mit multiresistentem (MDR) HIV-1',
        'Langwirksame HIV-Präexpositionsprophylaxe (PrEP)'
      ]
    },
    sideEffects: {
      hu: [
        'Injekciós helyi reakciók (ISR - fájdalom, duzzanat, erythema, induráció a glutealis/abdominalis szúrás helyén az esetek >70-80%-ában, de átmeneti)',
        'Láz, fáradékonyság, fejfájás, myalgia',
        'Súlygyarapodás és alvászavarok',
        'A hosszú elnyújtott plazma-felezési idő ("pharmacokinetic tail") miatt az injekciók elmaradása esetén rezisztencia alakulhat ki!'
      ],
      en: [
        'Injection site reactions (ISR: pain, swelling, erythema, nodule/induration in >70-80%, mostly mild/transient)',
        'Pyrexia, fatigue, headache, myalgia',
        'Weight gain and sleep disturbances',
        'Risk of viral resistance during the prolonged sub-therapeutic pharmacokinetic tail if scheduled doses are missed!'
      ],
      de: [
        'Reaktionen an der Injektionsstelle (Schmerzen, Schwellung, Rötung bei >70-80%, meist vorübergehend)',
        'Fieber, Müdigkeit, Kopfschmerzen, Myalgie',
        'Gewichtszunahme und Schlafstörungen',
        'Resistenzrisiko im "PK-Tail" bei versäumten Injektionsterminen!'
      ]
    },
    practicalTips: {
      hu: [
        'Szigorúan be kell tartani az injekciós időpontokat (±7 napos ablak az injekciók között)! Az injekció elmaradása esetén az elhúzódó szubterápiás plazmaszint ("PK tail") rezisztens törzsek kiszelektálódásához vezet.',
        'Ha az injekció beadása elmarad vagy késik, orális áthidaló terápiát (oral lead-in/bridging) kell kezdeni!',
        'Az injekciókat gluteálisan (Cabotegravir/Rilpivirine) vagy abdominálisan subcutan (Lenacapavir) kell szakképzett egészségügyi személyzetnek beadnia.'
      ],
      en: [
        'Strict adherence to injection windows (±7 days) is mandatory! Missed doses leave a prolonged sub-therapeutic "PK tail" leading to resistance selection.',
        'If an injection appointment is missed or delayed, oral bridging therapy MUST be initiated immediately!',
        'Injections must be administered by healthcare professionals via deep i.m. gluteal injection (Cabenuva) or s.c. abdominal injection (Lenacapavir).'
      ],
      de: [
        'Strikte Einhaltung des Injektionsfensters (±7 Tage) zwingend! Versäumte Dosen führen im "PK-Tail" zu Resistenzen.',
        'Bei Terminversäumnis orale Überbrückungstherapie (Oral Bridging) einleiten!',
        'Injektionen müssen durch medizinisches Fachpersonal verabreicht werden.'
      ]
    }
  },
  {
    id: 'fostemsavir_ibalizumab',
    name: 'Fostemsavir / Ibalizumab (Belépés- & Kötődésgátlók)',
    group: {
      hu: 'HIV / Retrovírus-ellenes szerek (Belépés- és attachment-gátlók - MDR HIV-re)',
      en: 'Anti-HIV agents (Entry & attachment inhibitors for MDR HIV)',
      de: 'Anti-HIV-Wirkstoffe (Eintritts- & Attachment-Hemmer für MDR-HIV)'
    },
    targetViruses: {
      hu: 'Multirezisztens (MDR) Human Immunodeficientia Vírus 1 (HIV-1)',
      en: 'Multidrug-resistant (MDR) Human Immunodeficiency Virus 1 (HIV-1)',
      de: 'Multiresistentes (MDR) Humanes Immundefizienzvirus 1 (HIV-1)'
    },
    halfLife: {
      hu: 'Fostemsavir (prodrug -> Temsavir): ~11 óra (napi 2x p.o.); Ibalizumab (mAB i.v.): ~3 - 3.5 hét (2 hetente infúzió)',
      en: 'Fostemsavir (prodrug -> Temsavir): ~11 hours (b.i.d. p.o.); Ibalizumab (i.v. mAb): ~3 - 3.5 weeks (q2w IV infusion)',
      de: 'Fostemsavir (Temsavir): ~11 Stunden (2x täglich p.o.); Ibalizumab (AK i.v.): ~3 - 3,5 Wochen (alle 2 Wochen)'
    },
    effectType: {
      hu: 'Virosztatikus (Újszerű mentő-terápiás belépésgátlók heavy treatment-experienced betegeknek)',
      en: 'Virostatic (Novel salvage entry inhibitors for heavily treatment-experienced patients)',
      de: 'Virostatisch (Neuartige Eintrittsinhibitoren für stark vorbehandelte Patienten)'
    },
    specialFeature: {
      hu: 'Legújabb guideline mentőterápiák (salvage therapy) többszörösen kezelt, multirezisztens HIV fertőzötteknek! Fostemsavir (Rukobia): az első gp120 attachment gátló pro-drug. Ibalizumab (Trogarzo): humán monoklonális ellenanyag (mAb), ami a CD4 receptor 2. doménjéhez kötődve megakadályozza a HIV konformációváltozását.',
      en: 'Latest guideline-recommended salvage therapies for heavily treatment-experienced patients with multidrug-resistant HIV! Fostemsavir (Rukobia) is a first-in-class gp120 attachment inhibitor. Ibalizumab (Trogarzo) is a humanized monoclonal antibody targeting CD4 domain 2.',
      de: 'Neueste Leitlinien-Empfehlung zur Salvage-Therapie bei multiresistentem HIV! Fostemsavir (Rukobia) als gp120-Attachment-Hemmer und Ibalizumab (Trogarzo) als monoklonaler Anti-CD4-Antikörper.'
    },
    mechanismOfAction: {
      hu: 'Fostemsavir: Temsavirrá alakulva közvetlenül a vírusi gp120 glikoproteinhez kötődik, megakadályozva a vírusi kapcsolódást a CD4 receptorhoz. Ibalizumab: a CD4 receptor 2. doménjéhez kötődve sterikus gátlással megakadályozza a gp120/CD4 komplex konformációs változását, így blokkolja a co-receptor (CCR5/CXCR4) kötődést és a membránfúziót.',
      en: 'Fostemsavir binds directly to viral gp120, preventing interaction with host CD4 receptors. Ibalizumab binds CD4 extracellular domain 2, sterically preventing HIV entry without causing immunosuppressive CD4 depletion or interfering with MHC II binding.',
      de: 'Fostemsavir bindet an virales gp120 und blockiert die CD4-Anheftung. Ibalizumab bindet an Domäne 2 des CD4-Receptors und verhindert sterisch den viralen Eintritt.'
    },
    dosage: {
      adult: {
        hu: 'Fostemsavir (Rukobia): 2x 600 mg/nap p.o. nyújtott hatóanyagleadású tabletta étkezéstől függetlenül. Ibalizumab (Trogarzo): telítő adag 2000 mg i.v. infúzió, majd 2 hetente 800 mg i.v. fenntartó infúzió.',
        en: 'Fostemsavir (Rukobia): 600 mg b.i.d. p.o. extended-release tablets with or without food. Ibalizumab (Trogarzo): loading dose 2000 mg IV infusion, followed by 800 mg IV every 2 weeks.',
        de: 'Fostemsavir (Rukobia): 2x 600 mg/Tag p.o. Retardtabletten. Ibalizumab (Trogarzo): Sättigungsdosis 2000 mg i.v., danach 800 mg i.v. alle 2 Wochen.'
      },
      pediatric: {
        hu: 'Jelenleg felnőttekben (≥18 év) javalltak multirezisztens HIV-1 fertőzésben.',
        en: 'Currently approved for adults (≥18 years) with multidrug-resistant HIV-1.',
        de: 'Derzeit für Erwachsene (≥18 Jahre) mit MDR-HIV-1 zugelassen.'
      },
      prophylaxis: {
        hu: 'Profilaxisra nem alkalmazhatók; kizárólag multirezisztens HIV törzsekkel fertőzött, egyéb kezelésre nem reagáló betegek mentőterápiájára szolgálnak.',
        en: 'Not indicated for prophylaxis; strictly reserved for salvage therapy in multidrug-resistant HIV.',
        de: 'Nicht zur Prophylaxe; ausschließlich zur Salvage-Therapie bei multiresistentem HIV.'
      },
      renal: {
        hu: 'Vesekárosodásban (beleértve a hemodialízist is) nem igényelnek adagmódosítást.',
        en: 'No dose adjustment required for renal impairment or hemodialysis.',
        de: 'Keine Dosisanpassung bei Niereninsuffizienz oder Hämodialyse.'
      },
      hepatic: {
        hu: 'Enyhe és középsúlyos májelégtelenségben nem igényelnek módosítást.',
        en: 'No dose adjustment needed for mild or moderate hepatic impairment.',
        de: 'Keine Dosisanpassung bei leichter bis mäßiger Leberfunktionsstörung.'
      }
    },
    indications: {
      hu: [
        'Többszörösen kezelt (heavily treatment-experienced), multirezisztens (MDR) HIV-1 fertőzött felnőttek kezelése, akiknél a jelenlegi ART séma virológiai elégtelensége miatt nem állítható össze hatékony kezelés',
        'Optimális háttérterápiával (optimised background regimen - OBR) kombinálva adandó'
      ],
      en: [
        'Treatment of heavily treatment-experienced adults with multidrug-resistant HIV-1 infection failing their current antiretroviral regimen',
        'Must be combined with an optimized background regimen (OBR)'
      ],
      de: [
        'Behandlung von stark vorbehandelten Erwachsenen mit multiresistenter HIV-1-Infektion bei Therapieversagen',
        'Kombination mit einem optimierten Hintergrundregimen (OBR) erforderlich'
      ]
    },
    sideEffects: {
      hu: [
        'Gastrointestinalis panaszok (háborult gyomor, hányinger, diaré)',
        'Immunrekonstrukciós Gyulladásos Szindróma (IRIS) súlyos immunszupprimáltakban',
        'QTo-megnyúlás supra-therapeutiás Fostemsavir dózisoknál',
        'Infúziós reakciók és kiütések (Ibalizumab esetén)'
      ],
      en: [
        'Gastrointestinal distress (nausea, diarrhea, dyspepsia)',
        'Immune Reconstitution Inflammatory Syndrome (IRIS) in severely immunocompromised patients',
        'QTc interval prolongation with supratherapeutic Fostemsavir doses',
        'Infusion-related reactions and rash (Ibalizumab)'
      ],
      de: [
        'Gastrointestinale Störungen (Übelkeit, Durchfall)',
        'Immunrekonstitutionssyndrom (IRIS) bei schwerer Immunsuppression',
        'QTc-Verlängerung unter Fostemsavir',
        'Infusionsreaktionen und Exanthem (Ibalizumab)'
      ]
    },
    practicalTips: {
      hu: [
        'Ezek a legújabb guideline-ok szerinti utolsó mentőöv (salvage) szerek olyan betegeknek, akiknél szinte az összes standard gyógyszercsoportra (NRTI, NNRTI, PI, INSTI) rezisztencia alakult ki.',
        'A Fostemsavir erős CYP3A induktorokkal (pl. Rifampicin, Orbáncfű, Carbamazepin) EGYÜTT NEM ADHATÓ, mert hatása megszűnik!',
        'Az Ibalizumab nem okoz CD4 sejtdeplekciót és nem gátolja az MHC II funkciót, így biztonságosan adható más immunszuppresszív állapotokban is.'
      ],
      en: [
        'These serve as the last-line salvage options in latest guidelines for patients with broad resistance across classical classes (NRTI, NNRTI, PI, INSTI).',
        'Fostemsavir is CONTRAINDICATED with strong CYP3A inducers (e.g. rifampin, St. John\'s wort, carbamazepine) as temsavir levels plummet.',
        'Ibalizumab does not deplete CD4 cells or block MHC-II interaction, maintaining safety in immunocompromised hosts.'
      ],
      de: [
        'Letzte Salvage-Optionen laut aktuellen Leitlinien bei breiter Resistenz gegen klassische Substanzklassen.',
        'Fostemsavir mit starken CYP3A-Induktoren (Rifampicin, Johanniskraut) KONTRAINDIZIERT!',
        'Ibalizumab führt nicht zur CD4-Zelldepletion und beeinträchtigt MHC-II nicht.'
      ]
    }
  }
];
