/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Antibiotic } from '../types';

export const antibioticsData_HU: any[] = [
  {
    id: "penicillin_g",
    name: "Benzylpenicillin (Penicillin G)",
    abbreviation: "PEN",
    brandNames: "Penicillin G Sandoz",
    group: "Természetes penicillinek",
    halfLife: "30-45 perc (veseelégtelenségben megnyúlik)",
    pae: "Gram-pozitívaknál kifejezett (1.5-3 óra), Gram-negatívaknál nincs",
    effectType: "bactericid",
    dosage: {
      adult: "Napi 10-24 millió NE (Nemzetközi Egység) i.v., 4-6 részre osztva",
      pediatric: "Napi 100 000 - 400 000 NE/ttkg i.v., 4-6 részre osztva",
      renalAdjustment: "GFR < 50 ml/perc: csökkentett adag vagy nyújtott adagolási időköz (pl. 50-75%-os dózis)"
    },
    mechanismOfAction: "Baktericid. Gátolja a bakteriális sejtfal szintézisét: irreverzibilisen kötődik a penicillin-kötő fehérjékhez (PBP), megakadályozva a peptidoglikán láncok keresztkötését (transzpeptidáció), ami a sejtfal líziséhez vezet.",
    sideEffects: [
      "Túlérzékenységi reakciók (bőrkiütés, anaphylaxia: 0.05-0.2%)",
      "Magas dózisban neurotoxicitás (görcsrohamok, különösen veseelégtelenségben)",
      "Elektrolit-zavar (kálium-penicillin esetén hyperkalaemia)",
      "Jarisch-Herxheimer reakció szifilisz kezelésekor"
    ],
    spectrum: {
      gramPositive: 2, // Kiváló
      gramNegative: 1, // Mérsékelt / szűk (pl. Neisseria meningitidis, de sok rezisztens)
      anaerobe: 1, // Szájüregi anaerobok (Peptostreptococcus, Actinomyces), de B. fragilis rezisztens!
      atypical: 0,
      pseudomonas: 0,
      other: "A Treponema pallidum (szifilisz) és a Borrelia burgdorferi (Lyme-kór) elsővonalbeli szere. Streptococcusok (A, B, C, G csoportok) ellen kiváló."
    },
    indications: [
      "Infectív endocarditis (Streptococcus, Enterococcus érzékeny törzsek)",
      "Meningitis (Neisseria meningitidis, Streptococcus pneumoniae érzékeny törzsei)",
      "Szifilisz (Neurosyphilis)",
      "Gázgangréna (Clostridium perfringens)"
    ],
    notes: "Kizárólag parenterálisan adható. Savas közegben instabil, így szájon át nem hatékony."
  },
  {
    id: "penicillin_v",
    name: "Phenoxymethylpenicillin (Penicillin V)",
    abbreviation: "PV",
    brandNames: "Ospen",
    group: "Természetes penicillinek",
    halfLife: "30-45 perc",
    pae: "Gram-pozitívaknál kifejezett",
    effectType: "bactericid",
    dosage: {
      adult: "3x 1-1.5 millió NE p.o. (naponta 3 részre osztva, éhgyomorra)",
      pediatric: "50 000 - 100 000 NE/ttkg/nap p.o., 3 részre osztva",
      renalAdjustment: "GFR < 10 ml/perc esetén adagcsökkentés javasolt"
    },
    mechanismOfAction: "Megegyezik a Penicillin G-vel (baktericid sejtfalszintézis-gátló). PBP-khez kötődve gátolja a transzpeptidációt.",
    sideEffects: [
      "Gastrointestinalis panaszok (hányinger, hasmenés)",
      "Allergiás reakciók (bőrkiütés, csalánkiütés)",
      "Eozinofília"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 0, // Gyenge / nem klinikailag releváns gram-negatív hatás
      anaerobe: 1, // Csak szájüregi anaerobok
      atypical: 0,
      pseudomonas: 0,
      other: "Kizárólag enyhe, jól lokalizált Streptococcus fertőzésekre."
    },
    indications: [
      "Streptococcus pharyngitis / tonsillitis (Tüszős mandulagyulladás)",
      "Enyhe orbánc (Erysipelas)",
      "Rheumás láz szekunder profilaxisa"
    ],
    notes: "Savstabil, szájon át jól szívódik fel. Étkezés előtt 1 órával kell bevenni."
  },
  {
    id: "amoxicillin",
    name: "Amoxicillin",
    abbreviation: "AMX",
    brandNames: "Duomox, Amoxicillin-B, Moxilen",
    group: "Aminopenicillinek (szélesített spektrumú penicillinek)",
    halfLife: "1-1.5 óra",
    pae: "Gram-pozitívaknál 1.5-2 óra, Gram-negatívaknál minimális",
    effectType: "bactericid",
    dosage: {
      adult: "3x 500mg - 1000mg p.o. naponta, súlyos esetben 3x 1000mg",
      pediatric: "40-90 mg/ttkg/nap p.o., 2-3 részben osztva",
      renalAdjustment: "GFR < 30 ml/perc: adagcsökkentés (pl. max 2x 500mg naponta)"
    },
    mechanismOfAction: "Baktericid. A PBP-k gátlásán keresztül megakadályozza a bakteriális sejtfal szintézist. Szélesebb spektrumú, mint a Penicillin G, mivel jobban penetrál a Gram-negatív baktériumok külső membránján lévő porin csatornákon.",
    sideEffects: [
      "Gastrointestinalis panaszok (hasmenés, émelygés)",
      "Makulopapulózus bőrkiütés (gyakori, nem feltétlenül allergiás, pl. EBV fertőzés/mononucleosis esetén szinte mindig kialakul!)",
      "Allergiás reakciók (csalánkiütés, anaphylaxia)"
    ],
    spectrum: {
      gramPositive: 2, // Jó hatás Streptococcusok, Enterococcus faecalis, Listeria monocytogenes ellen
      gramNegative: 1, // Mérsékelt (E. coli vadvíz, H. influenzae, Proteus mirabilis - de magas a rezisztencia!)
      anaerobe: 1, // Nem-béta-laktamáz termelő anaerobok
      atypical: 0,
      pseudomonas: 0,
      other: "Listeria monocytogenes ellen az elsőként választandó szer. Béta-laktamáz enzimekkel szemben instabil!"
    },
    indications: [
      "Közösségben szerzett pneumonia (CAP) enyhe formái",
      "Akut otitis media (Középfülgyulladás)",
      "Akut sinusitis (Arcüreggyulladás)",
      "Listeria monocytogenes fertőzések (meningitis esetén Gentamicinnel kombinálva)"
    ],
    notes: "Szájon át kiválóan felszívódik, étkezéstől függetlenül bevehető. Parenterális formája Magyarországon főleg kombinációban érhető el."
  },
  {
    id: "amoxicillin_clavulanate",
    name: "Amoxicillin / klavulánsav (Co-amoxiclav)",
    abbreviation: "AMC",
    brandNames: "Aktil, Augmentin, Curam",
    group: "Béta-laktamáz inhibitorral kombinált penicillinek",
    halfLife: "kb. 1 óra (mindkét komponens)",
    pae: "Gram-pozitívaknál 1.5-2 óra, Gram-negatívaknál enyhe",
    effectType: "bactericid",
    dosage: {
      adult: "p.o.: 2x 875/125 mg vagy 3x 500/125 mg; i.v.: 3x 1.2 g (1000 mg amox + 200 mg clav)",
      pediatric: "40-90 mg/ttkg/nap p.o. (amoxicillinre számolva), 2-3 részben",
      renalAdjustment: "GFR < 30 ml/perc: Kerülendő a 875/125 mg-os forma, helyette kisebb dózis vagy 500/125 mg 12-24 óránként"
    },
    mechanismOfAction: "Baktericid. Az amoxicillin gátolja a sejtfalszintézist. A klavulánsav egy 'öngyilkos' béta-laktamáz inhibitor, amely irreverzibilisen kötődik a baktériumok béta-laktamáz enzimjeihez (Ambler Class A, beleértve a penicillinázokat, ESBL-eket bizonyos mértékig, de nem a carbapenemázokat), megvédve az amoxicillint a lebontástól.",
    sideEffects: [
      "Hasmenés (nagyon gyakori, a klavulánsav bélmotilitást fokozó hatása miatt)",
      "Hepatotoxicitás (kolesztatikus hepatitis, különösen idősebb férfiaknál, elhúzódó kezelésnél)",
      "Candida felülfertőződés (szájpenész, hüvelygomba)"
    ],
    spectrum: {
      gramPositive: 2, // Streptococcus, MSSA (meticillin-érzékeny S. aureus), Enterococcus faecalis
      gramNegative: 2, // E. coli, Klebsiella spp., H. influenzae, Moraxella catarrhalis (béta-laktamáz termelők is!)
      anaerobe: 2, // Kiváló anaerob hatás (Bacteroides fragilis ellen is!)
      atypical: 0,
      pseudomonas: 0,
      other: "Az egyik legsokoldalúbb széles spektrumú empirikus szer, de Pseudomonas, MRSA és atypusos kórokozók ellen nem hat."
    },
    indications: [
      "Közösségben szerzett pneumonia (empirikus, társbetegségek esetén)",
      "Harapott sebek (humán vagy állati, anaerob védelem miatt!)",
      "Súlyos akut sinusitis, otitis media",
      "Szövődményes húgyúti fertőzések, kismedencei gyulladások",
      "Aspirációs pneumonia"
    ],
    notes: "A hasmenés kockázata csökkenthető, ha a szájon át szedhető formát közvetlenül az étkezés kezdetén veszik be."
  },
  {
    id: "piperacillin_tazobactam",
    name: "Piperacillin / tazobaktam (Pip/Tazo)",
    abbreviation: "TZP",
    brandNames: "Tazocin, Pipril, Piperacillin/Tazobactam Kabi",
    group: "Ureidopenicillinek (Pseudomonas-ellenes béta-laktamáz inhibitor kombinációk)",
    halfLife: "kb. 1 óra",
    pae: "Rövid (Gram-negatívaknál < 1 óra, Pseudomonasnál megnyújtható folyamatos infúzióval)",
    effectType: "bactericid",
    dosage: {
      adult: "3x vagy 4x 4.5 g (4g Piperacillin + 0.5g Tazobaktam) i.v. lassan vagy folyamatos (nyújtott) infúzióban (4 óra alatt)",
      pediatric: "90-112.5 mg/ttkg i.v. 6-8 óránként",
      renalAdjustment: "GFR < 40 ml/perc: adagcsökkentés szükséges (pl. 3x 2.25 g vagy 3x 4.5 g)"
    },
    mechanismOfAction: "Baktericid. A piperacillin egy ureidopenicillin, amely kiválóan penetrál a Gram-negatív sejtfalon és gátolja a PBP-3 fehérjét. A tazobaktam egy béta-laktamáz gátló, amely kiterjeszti a spektrumot a legtöbb béta-laktamáz termelő törzsre (kivéve AmpC derepresszált és carbapenemáz termelők).",
    sideEffects: [
      "Allergiás reakciók, bőrkiütések",
      "Veseelégtelenség (különösen Vancomycinnel kombinálva fokozott nephrotoxicitást mutat!)",
      "Thrombocytopenia, leukopenia (hosszabb kezelésnél)",
      "Hasmenés (C. difficile kockázat)"
    ],
    spectrum: {
      gramPositive: 2, // Streptococcusok, Enterococcus faecalis (érzékeny), MSSA
      gramNegative: 2, // Enterobacterales (többségében ESBL termelők ellen is, ha a MIC alacsony)
      anaerobe: 2, // Kiváló (Bacteroides fragilis és más anaerobok ellen is)
      atypical: 0,
      pseudomonas: 2, // Kiváló Pseudomonas aeruginosa ellen!
      other: "A legfontosabb kórházi, empirikus, széles spektrumú antibiotikum."
    },
    indications: [
      "Nosocomialis (kórházi) pneumonia (HAP, VAP)",
      "Neutropéniás láz empirikus kezelése (monoterápiában vagy aminoglikoziddal)",
      "Súlyos intraabdominalis szepszis",
      "Szövődményes lágyrészfertőzések (pl. diabeteses láb)"
    ],
    notes: "Kizárólag intravénásan adható. Kórházi osztályokon az egyik leggyakrabban alkalmazott 'nehézfegyver'."
  },
  {
    id: "cefazolin",
    name: "Cefazolin",
    abbreviation: "CZ",
    brandNames: "Cefazolin Kabi, Sandoz Cefazolin",
    group: "1. generációs Cephalosporinok",
    halfLife: "1.5 - 2 óra (cephalosporinok közt viszonylag hosszú)",
    pae: "Gram-pozitívaknál 1.5-3 óra",
    effectType: "bactericid",
    dosage: {
      adult: "3x 1g - 2g i.v. naponta; Műtéti profilaxisra: 2g egyszeri i.v. bolus (műtét előtt 30-60 perccel)",
      pediatric: "50-100 mg/ttkg/nap i.v., 3-4 részre osztva",
      renalAdjustment: "GFR < 30 ml/perc: csökkentett dózis és/vagy megnyújtott időköz"
    },
    mechanismOfAction: "Baktericid sejtfalszintézis-gátló. Erősen kötődik a PBP-1 és PBP-3 fehérjékhez. Stabil a Staphylococcus aureus által termelt penicillinázokkal szemben.",
    sideEffects: [
      "Allergia (keresztreakció penicillinnel kb. 1-3%)",
      "Fájdalom az injekció helyén, thrombophlebitis",
      "Nephrotoxicitás (ritka, de nagy dózisban előfordulhat)"
    ],
    spectrum: {
      gramPositive: 2, // Kiváló MSSA és Streptococcusok ellen!
      gramNegative: 1, // Szűk spektrum (vadvíz E. coli, Klebsiella pneumoniae, Proteus mirabilis)
      anaerobe: 0, // Gyenge anaerob hatás (B. fragilis rezisztens)
      atypical: 0,
      pseudomonas: 0,
      other: "MRSA, Enterococcusok és Listeria ellen hatástalan! (Minden cephalosporin hatástalan Enterococcus és Listeria ellen!)"
    },
    indications: [
      "Sebészi profilaxis (szinte minden műtéttípusnál az arany standard)",
      "MSSA okozta szisztémás fertőzések (osteomyelitis, arthritis, endocarditis, szepszis)",
      "Enyhe-középsúlyos bőr- és lágyrészfertőzések"
    ],
    notes: "Nem penetrál a vér-agy gáton, meningitis kezelésére alkalmatlan."
  },
  {
    id: "cefuroxime",
    name: "Cefuroxim (cefuroxim-axetil)",
    abbreviation: "CXM",
    brandNames: "Zinnat (p.o.), Zinacef (i.v.)",
    group: "2. generációs Cephalosporinok",
    halfLife: "kb. 1.2 - 1.5 óra",
    pae: "Gram-pozitívaknál mérsékelt",
    effectType: "bactericid",
    dosage: {
      adult: "p.o. (axetil): 2x 250 - 500 mg naponta; i.v.: 3x 750mg - 1500mg naponta",
      pediatric: "p.o.: 20-30 mg/ttkg/nap 2 részben; i.v.: 50-100 mg/ttkg/nap 3 részben",
      renalAdjustment: "GFR < 20 ml/perc: adagcsökkentés (pl. max 2x 750mg i.v.)"
    },
    mechanismOfAction: "Baktericid. Gátolja a transzpeptidációt a bakteriális sejtfal peptidoglikán szintézise során. Stabilabb a Gram-negatív béta-laktamázokkal szemben, mint az 1. generációs szerek.",
    sideEffects: [
      "Gastrointestinalis panaszok (hányinger, hasmenés)",
      "Átmeneti transzamináz-emelkedés",
      "Eozinofília, allergiás reakciók"
    ],
    spectrum: {
      gramPositive: 2, // Jó Streptococcus, MSSA ellen (de gyengébb, mint a Cefazolin)
      gramNegative: 2, // Jobb Gram-negatív hatás (H. influenzae, M. catarrhalis, E. coli, Klebsiella ellen is)
      anaerobe: 0, // Nincs érdemi anaerob hatása
      atypical: 0,
      pseudomonas: 0,
      other: "A szájon át szedhető forma (axetil) egy prodrug, észszerűen szívódik fel."
    },
    indications: [
      "Közösségben szerzett légúti fertőzések (CAP enyhe formái, exacerbált COPD)",
      "Otitis media, sinusitis, tonsillitis",
      "Nem szövődményes húgyúti fertőzések"
    ],
    notes: "Átjut a vér-agy gáton, de meningitis kezelésében a 3. generációs cephalosporinok sokkal hatékonyabbak és preferáltak."
  },
  {
    id: "ceftriaxone",
    name: "Ceftriaxon",
    abbreviation: "CRO",
    brandNames: "Lendacin, Rocephin, Ceftriaxone Kabi",
    group: "3. generációs Cephalosporinok (Gram-negatív túlsúlyúak)",
    halfLife: "8 óra (szokatlanul hosszú, napi 1-szeri adagolást tesz lehetővé!)",
    pae: "Mérsékelt",
    effectType: "bactericid",
    dosage: {
      adult: "Napi 1x - 2x 1g - 2g i.v. vagy i.m. (Meningitisben napi 2x 2g)",
      pediatric: "50-80 mg/ttkg/nap i.v. egyszerre (Meningitisben 100 mg/ttkg/nap, max 4g)",
      renalAdjustment: "Veseelégtelenségben önmagában nem igényel adagmódosítást, csak ha májelégtelenséggel társul (kettős elimináció: epe + vizelet!)"
    },
    mechanismOfAction: "Baktericid sejtfalszintézis-gátló. Kiemelkedően stabil a legtöbb Gram-negatív béta-laktamáz enzimmel szemben (kivéve ESBL, AmpC és carbapenemázok). Kiváló szöveti és vér-agy gát penetráció.",
    sideEffects: [
      "Pseudolithiasis (biliáris iszap/homok képződés az epehólyagban a ceftriaxon-kalcium kicsapódása miatt, ami epegörcsöt imitálhat)",
      "C. difficile asszociált hasmenés (magas kockázat!)",
      "Vérzékenység (K-vitamin szintézis gátlása miatt ritkán)",
      "Újszülötteknél magbél-icterus fokozott kockázata (kiszorítja a bilirubint az albumin kötőhelyről, ezért újszülötteknek 28 napos korig tilos adni, náluk Cefotaxim használandó!)"
    ],
    spectrum: {
      gramPositive: 2, // Kiváló Streptococcusok (beleértve a részben penicillin-rezisztens S. pneumoniae-t is) és mérsékelt MSSA ellen
      gramNegative: 2, // Kiváló Enterobacterales (E. coli, Klebsiella, Proteus, Salmonella, Shigella stb.), Neisseria meningitidis és gonorrhoeae ellen
      anaerobe: 0, // Minimális anaerob hatás
      atypical: 0,
      pseudomonas: 0, // Pseudomonas aeruginosa ellen teljesen hatástalan!
      other: "Listeria és Enterococcus ellen hatástalan! Kalcium tartalmú oldatokkal egy szerelékben tilos beadni a precipitáció veszélye miatt!"
    },
    indications: [
      "Közösségben szerzett pneumonia (CAP) kórházi kezelése (gyakran Macroliddal kombinálva)",
      "Bakteriális meningitis (empirikus kezelés alapköve felnőtteknél Ceftriaxon + Vancomycin + Ampicillin)",
      "Sepsis ismeretlen fókuszból (empirikus)",
      "Gonorrhoea fertőzés (napi 1x 1g i.m. / i.v. egyszeri adag)",
      "Lyme-kór neuroborreliosis stádiuma"
    ],
    notes: "Napi egyszeri adagolása miatt ambuláns parenterális kezelésre (OPAT) is kiválóan alkalmas."
  },
  {
    id: "ceftazidime",
    name: "Ceftazidim",
    abbreviation: "CAZ",
    brandNames: "Fortum, Ceftazidim Kabi",
    group: "3. generációs Cephalosporinok (Pseudomonas-ellenes)",
    halfLife: "1.5 - 2 óra",
    pae: "Gram-negatívaknál, különösen Pseudomonasnál kb. 1 óra",
    effectType: "bactericid",
    dosage: {
      adult: "3x 1g - 2g i.v. naponta",
      pediatric: "100-150 mg/ttkg/nap i.v., 3 részre osztva",
      renalAdjustment: "GFR < 50 ml/perc: jelentős dóziscsökkentés szükséges, mivel kizárólag a vesén át ürül"
    },
    mechanismOfAction: "Baktericid. Erősen kötődik a PBP-3 fehérjéhez Gram-negatív baktériumokban, különösen Pseudomonas aeruginosában. Kevésbé stabil az AmpC béta-laktamázokkal szemben, de jól ellenáll más béta-laktamázoknak.",
    sideEffects: [
      "Allergiás reakciók, phlebitis",
      "Leukopenia, transzamináz-emelkedés",
      "Neurotoxicitás (görcsrohamok, encephalopathia veseelégtelenségben nem csökkentett dózisnál!)"
    ],
    spectrum: {
      gramPositive: 0, // Nagyon gyenge Gram-pozitív hatás! Streptococcusok és MSSA ellen sokkal gyengébb, mint a Ceftriaxon!
      gramNegative: 2, // Enterobacterales ellen jó, de béta-laktamáz érzékeny
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 2, // Kiváló Pseudomonas aeruginosa hatékonyság!
      other: "Nem hat MRSA, Enterococcus és Listeria ellen."
    },
    indications: [
      "Bizonyított vagy gyanított Pseudomonas aeruginosa fertőzések",
      "Neutropéniás láz empirikus kezelése",
      "Nosocomialis fertőzések szisztémás kezelése"
    ],
    notes: "Gram-pozitív lefedettsége nem kielégítő, ezért empirikus szepszis kezelésben önmagában ritkán alkalmazzák, inkább Gram-pozitív elleni szerrel kombinálva."
  },
  {
    id: "cefepime",
    name: "Cefepim",
    abbreviation: "FEP",
    brandNames: "Cefepim Kabi, Maxipime",
    group: "4. generációs Cephalosporinok",
    halfLife: "2 óra",
    pae: "Gram-negatívaknál kb. 1-1.5 óra",
    effectType: "bactericid",
    dosage: {
      adult: "2x vagy 3x 1g - 2g i.v. naponta (Súlyos fertőzésben/Pseudomonas gyanúban 3x 2g)",
      pediatric: "100-150 mg/ttkg/nap i.v., 2-3 részre osztva",
      renalAdjustment: "GFR < 50 ml/perc: szigorú dóziscsökkentés (neurotoxicitás veszélye!)"
    },
    mechanismOfAction: "Baktericid. Zwitterion szerkezetű, emiatt rendkívül gyorsan penetrál a Gram-negatív baktériumok porin csatornáin. Nagyon stabil a kromoszómális AmpC béta-laktamázokkal szemben és ellenáll sok plazmid-mediált béta-laktamáznak.",
    sideEffects: [
      "Neurotoxicitás: non-konvulzív status epilepticus, zavartság, myoclonus (különösen veseelégtelenségben nem csökkentett dózisnál!)",
      "Allergiás reakciók, hasmenés"
    ],
    spectrum: {
      gramPositive: 2, // Kiváló Gram-pozitív hatás (Streptococcusok, MSSA ellen olyan jó, mint a Cefazolin)",
      gramNegative: 2, // Kiváló és széles Enterobacterales hatás
      anaerobe: 0, // Anaerobok ellen nem hat
      atypical: 0,
      pseudomonas: 2, // Kiváló Pseudomonas aeruginosa hatás!
      other: "A Ceftazidimnél sokkal jobb Gram-pozitív hatással rendelkezik."
    },
    indications: [
      "Súlyos nosocomialis pneumonia",
      "Febrile neutropenia (empirikus monoterápia)",
      "Szövődményes intraabdominalis fertőzések (Metronidazollal kombinálva)",
      "Szövődményes húgyúti fertőzések, pyelonephritis"
    ],
    notes: "Nagyon biztonságos, ha a vesefunkcióhoz megfelelően adagolják, de az idős, veseelégtelen betegek neurológiai státuszát monitorozni kell."
  },
  {
    id: "ceftaroline",
    name: "Ceftarolin foszamil",
    abbreviation: "CPT",
    brandNames: "Zinforo",
    group: "5. generációs Cephalosporinok (MRSA-ellenes)",
    halfLife: "2.5 óra",
    pae: "Gram-pozitívaknál kifejezett",
    effectType: "bactericid",
    dosage: {
      adult: "2x 600 mg i.v. naponta, 1 órás infúzióban (Súlyos fertőzésben vagy MRSA pneumonia esetén 3x 600 mg)",
      pediatric: "8-12 mg/ttkg i.v. 8 vagy 12 óránként",
      renalAdjustment: "GFR < 50 ml/perc: dóziscsökkentés szükséges (pl. 2x 400 mg)"
    },
    mechanismOfAction: "Baktericid. Az egyetlen cephalosporin, amely képes nagy affinitással kötődni a PBP-2a fehérjéhez, amelyet az MRSA törzsek termelnek (és amelyhez a többi béta-laktám nem tud kötődni). Gátolja a PBP-2x-et is a rezisztens Streptococcus pneumoniae törzsekben.",
    sideEffects: [
      "Direct Coombs-teszt pozitivitás (hemolitikus anaemia nélkül általában)",
      "Hasmenés, hányinger, allergiás bőrkiütések"
    ],
    spectrum: {
      gramPositive: 2, // Kiemelkedő: MRSA, VRSA, Multirezisztens Streptococcus pneumoniae ellen!
      gramNegative: 2, // Megegyezik a Ceftriaxonéval (Enterobacterales), de béta-laktamáz érzékeny (ESBL ellen nem hat!)
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 0, // Pseudomonas ellen hatástalan!
      other: "Enterococcus faecium és Listeria ellen nem hat, de Enterococcus faecalis ellen mérsékelt hatása lehet."
    },
    indications: [
      "Szövődményes bőr- és lágyrészfertőzések (cCSSTI), különösen ha MRSA gyanú áll fenn",
      "Közösségben szerzett pneumonia (CAP), súlyos, multirezisztens S. pneumoniae kockázatú esetek"
    ],
    notes: "Klinikailag rendkívül értékes opció, mint az egyetlen MRSA-ellenes béta-laktám."
  },
  {
    id: "meropenem",
    name: "Meropenem",
    abbreviation: "MEM",
    brandNames: "Meronem, Meropenem Kabi, Sandoz Meropenem",
    group: "Carbapenemek",
    halfLife: "1 óra",
    pae: "Kifejezett Gram-negatívaknál is (1.5-3 óra, Pseudomonasnál is)",
    effectType: "bactericid",
    dosage: {
      adult: "3x 1g i.v. naponta (Meningitis vagy súlyos Pseudomonas fertőzés esetén 3x 2g i.v.)",
      pediatric: "60-120 mg/ttkg/nap i.v., 3 részre osztva",
      renalAdjustment: "GFR < 50 ml/perc: jelentős dózismódosítás szükséges (pl. 2x 1g vagy 2x 500mg)"
    },
    mechanismOfAction: "Rendkívül széles spektrumú baktericid szer. Könnyen penetrál a porinokon, rendkívül stabil szinte minden béta-laktamázzal szemben (beleértve az ESBL-eket és az AmpC-ket is). Erősen kötődik a PBP-2, PBP-3 és PBP-4 fehérjékhez.",
    sideEffects: [
      "Görcsrohamok fokozott kockázata (de sokkal kisebb, mint az Imipenemnél!)",
      "Túlérzékenységi reakciók (keresztreakció penicillinekkel < 1%)",
      "Hasmenés, beleértve a C. difficile-t"
    ],
    spectrum: {
      gramPositive: 2, // Streptococcusok, MSSA (Enterococcus faecalis ellen mérsékelt, E. faecium ellen hatástalan)
      gramNegative: 2, // Kiemelkedő: Szinte minden Enterobacterales (beleértve a multirezisztens ESBL-termelőket is)
      anaerobe: 2, // Kiváló anaerob hatás (B. fragilis ellen is)
      atypical: 0,
      pseudomonas: 2, // Kiváló Pseudomonas aeruginosa ellen!
      other: "Nem hat MRSA, VRE, Listeria és Stenotrophomonas maltophilia ellen! Carbapenemáz (KPC, MBL, OXA-48) termelő törzsek rezisztensek!"
    },
    indications: [
      "Nosocomialis szepszis és súlyos multirezisztens kórházi fertőzések empirikus kezelése",
      "ESBL-termelő Enterobacterales által okozott szisztémás fertőzések (arany standard)",
      "Súlyos intraabdominalis fertőzések és kismedencei szepszis",
      "Nosocomialis meningitis"
    ],
    notes: "A meropenem nem igényli cilasztatin hozzáadását (ellentétben az imipenemmel), mert stabil a vese dehidropeptidáz-I (DHP-I) enzimmel szemben."
  },
  {
    id: "ertapenem",
    name: "Ertapenem",
    abbreviation: "ETP",
    brandNames: "Invanz",
    group: "Carbapenemek",
    halfLife: "4 óra (hosszú, napi 1-szeri adagolást tesz lehetővé!)",
    pae: "Gram-negatívaknál kifejezett",
    effectType: "bactericid",
    dosage: {
      adult: "Napi 1x 1g i.v. vagy i.m.",
      pediatric: "15 mg/ttkg i.v. 12 óránként (max 1g/nap)",
      renalAdjustment: "GFR < 30 ml/perc: csökkentett adag (napi 500 mg)"
    },
    mechanismOfAction: "Baktericid carbapenem. Sejtfalszintézis-gátló. Rendkívül stabil ESBL és AmpC béta-laktamázokkal szemben. Kémiai szerkezete miatt (polarizált oldallánc) nem képes áthatolni a Pseudomonas aeruginosa és Acinetobacter baumannii külső membránján.",
    sideEffects: [
      "Fejfájás, zavartság",
      "Hasmenés, hányinger",
      "Phlebitis az infúzió helyén"
    ],
    spectrum: {
      gramPositive: 2, // Streptococcus, MSSA
      gramNegative: 2, // Kiváló ESBL Enterobacterales hatás!
      anaerobe: 2, // Kiváló anaerob hatás
      atypical: 0,
      pseudomonas: 0, // SZIGORÚAN HATÁSTALAN Pseudomonas és Acinetobacter ellen! (Ez az 'ER-TA-nem' = Pseudomonasra nem hat mnemonic!)",
      other: "Ideális ' outpatient parenteral antimicrobial therapy ' (OPAT) célra ESBL fertőzéseknél, napi 1x adagolása miatt."
    },
    indications: [
      "ESBL-termelő Enterobacterales okozta szövődményes húgyúti vagy lágyrészfertőzések otthoni/ambuláns kezelése (OPAT)",
      "Közösségben szerzett súlyos intraabdominalis fertőzések",
      "Akut kismedencei fertőzések"
    ],
    notes: "Kiváló 'carbapenem-spóroló' carbapenem: segít megőrizni a Meropenemet a Pseudomonas fertőzésekre."
  },
  {
    id: "gentamicin",
    name: "Gentamicin",
    abbreviation: "GEN",
    brandNames: "Gentamicin Sandoz, Gentamicin Pharmavit",
    group: "Aminoglikozidok",
    halfLife: "2 - 3 óra (veseelégtelenségben extrém módon megnyúlik, akár 50-100 órára!)",
    pae: "Igen kifejezett (akár 3-5 óra!), ami lehetővé teszi a napi egyszeri magas dózisú adagolást (ODA - Once Daily Aminoglycoside).",
    effectType: "bactericid",
    dosage: {
      adult: "Napi egyszeri 5-7 mg/ttkg i.v. infúzióban (vagy szinergizmus céljából napi 3x 1 mg/ttkg pl. endocarditisben)",
      pediatric: "3-5 mg/ttkg/nap i.v. egyszerre vagy 3 részben",
      renalAdjustment: "Kötelező terápiás drogmonitorozás (TDM - szérumszint mérés) és szigorú vesefunkció szerinti adagolás/időköz nyújtás!"
    },
    mechanismOfAction: "Gyors baktericid hatás. Kötődik a bakteriális 30S riboszóma alegységhez, gátolja a fehérjeszintézist és hibás aminosavak beépülését okozza, ami károsítja a sejtmembrán integritását is. Hatásához oxigénfüggő transzport szükséges (ezért anaerob környezetben és anaerob baktériumok ellen teljesen hatástalan!).",
    sideEffects: [
      "Nephrotoxicitás (reverzibilis akut tubuláris nekrózis, kockázata nő idős korban, dehydratióban)",
      "Ototoxicitás (irreverzibilis vestibularis vagy cochlearis károsodás: szédülés, halláscsökkenés)",
      "Neuromuscularis blokád (myasthenia gravisban kontraindikált!)"
    ],
    spectrum: {
      gramPositive: 1, // Önmagában nem hatékony, de béta-laktámmal szinergizmusban kiváló Enterococcus és Streptococcus endocarditisben!
      gramNegative: 2, // Kiváló aerob Gram-negatív hatás (Enterobacterales)
      anaerobe: 0, // Abszolút hatástalan anaerobok ellen!
      atypical: 0,
      pseudomonas: 2, // Jó Pseudomonas aeruginosa hatás (de Tobramycin/Amikacin jobb nálánál)
      other: "Koncentráció-függő baktericid hatás (minél nagyobb a csúcskoncentráció, annál gyorsabb a baktériumölés)."
    },
    indications: [
      "Súlyos Gram-negatív szepszis (empirikus kombinációban, pl. béta-laktámmal)",
      "Szinergisztikus kombináció béta-laktámmal/Vancomycinnel Enterococcus, Streptococcus vagy Staphylococcus endocarditisben",
      "Plague (pestis) és tularémia kezelése"
    ],
    notes: "A szérumszint monitorozás (TDM) elengedhetetlen: a mélyponti (trough) szintet a következő adag előtt kell mérni, hogy elkerüljük az akkumulációt és toxicitást."
  },
  {
    id: "amikacin",
    name: "Amikacin",
    abbreviation: "AMK",
    brandNames: "Amikacin Kabi, Likacin",
    group: "Aminoglikozidok",
    halfLife: "2 - 3 óra",
    pae: "Kifejezett (3-5 óra)",
    effectType: "bactericid",
    dosage: {
      adult: "Napi egyszeri 15 mg/ttkg i.v. (vagy 2 részre osztva)",
      pediatric: "15-20 mg/ttkg/nap i.v. egyszerre",
      renalAdjustment: "Szigorú TDM és adagmódosítás szükséges"
    },
    mechanismOfAction: "A kanamycin félszintetikus származéka. Gátolja a bakteriális fehérjeszintézist a 30S riboszómához kötődve. Szerkezete miatt ellenáll a legtöbb aminoglikozid-módosító enzimnek, így megőrzi aktivitását a Gentamicin-rezisztens törzsek többségével szemben is.",
    sideEffects: [
      "Nephrotoxicitás (vesekárosodás)",
      "Ototoxicitás (főleg cochlearis: hallásvesztés)",
      "Neuromuscularis blokád"
    ],
    spectrum: {
      gramPositive: 1, // Hasonló a Gentamicinhez (csak szinergizmusra)
      gramNegative: 2, // A legszélesebb spektrumú aminoglikozid!
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 2, // Kiváló Pseudomonas aeruginosa aktivitás!
      other: "Aktív számos atipusos mikobaktérium (pl. Mycobacterium avium complex) és Mycobacterium tuberculosis ellen is."
    },
    indications: [
      "Súlyos, multirezisztens Gram-negatív nosocomialis fertőzések (szepszis, pneumonia, UTI)",
      "Multirezisztens Pseudomonas aeruginosa fertőzések kombinációs kezelése",
      "MDR-TB (multirezisztens tuberkulózis) kombinációs terápiája"
    ],
    notes: "Az aminoglikozidok közül a legellenállóbb a bakteriális rezisztencia-mechanizmusokkal szemben."
  },
  {
    id: "clarithromycin",
    name: "Clarithromycin",
    abbreviation: "CLR",
    brandNames: "Fromilid, Klacid, Klabax",
    group: "Makrolidok",
    halfLife: "3 - 7 óra (aktív metabolitjával együtt hosszabb)",
    pae: "Kifejezett Gram-pozitívaknál (2-4 óra)",
    effectType: "bacteriostaticus",
    dosage: {
      adult: "2x 250 mg - 500 mg p.o. vagy i.v. naponta (nyújtott hatású formában 1x 500mg - 1000mg)",
      pediatric: "15 mg/ttkg/nap p.o. 2 részben",
      renalAdjustment: "GFR < 30 ml/perc: az adagot felére kell csökkenteni"
    },
    mechanismOfAction: "Bakteriosztatikus. Kötődik a bakteriális 50S riboszóma alegység 23S RNS-éhez, ezáltal gátolja a peptid láncmeghosszabbodást (transzlokáció gátlása). Gátolja a fehérjeszintézist.",
    sideEffects: [
      "Gastrointestinalis panaszok (hasi görcsök, hasmenés, fémes szájíz - bár enyhébb, mint az erythromycin)",
      "QT-idő megnyúlás (Torsades de Pointes veszélye, különösen más QT-nyújtó szerekkel vagy hypokalaemiában!)",
      "CYP3A4 enzim erős gátlása (számos gyógyszerinterakció: pl. statinok, carbamazepin, cyclosporin szintjét veszélyesen megemeli!)",
      "Kolesztatikus hepatitis (ritka)"
    ],
    spectrum: {
      gramPositive: 2, // Jó Streptococcusok ellen (de növekvő rezisztencia!), MSSA (mérsékelt)
      gramNegative: 1, // Szűk (H. influenzae ellen mérsékelt hatás, Moraxella catarrhalis ellen jó)
      anaerobe: 1, // Szájüregi anaerobok
      atypical: 2, // Kiemelkedő: Mycoplasma pneumoniae, Chlamydia pneumoniae, Legionella pneumophila!
      pseudomonas: 0,
      other: "Helicobacter pylori ellen kiváló. Mycobacterium avium complex (MAC) elsővonalbeli szere."
    },
    indications: [
      "Közösségben szerzett pneumonia (atípusos kórokozók gyanúja esetén Ceftriaxonnal kombinálva vagy monoterápiában)",
      "Helicobacter pylori eradikáció (Amoxicillinnel/Metronidazollal és PPI-vel kombinálva)",
      "Enyhe légúti fertőzések penicillin-allergia esetén",
      "Chlamydia okozta urogenitális fertőzések (bár itt az Azithromycin/Doxycyclin elterjedtebb)"
    ],
    notes: "Kiváló szöveti és intracelluláris penetráció (a tüdőben és alveolaris makrofágokban sokszoros koncentrációt ér el, mint a szérumban)."
  },
  {
    id: "azithromycin",
    name: "Azithromycin",
    abbreviation: "AZM",
    brandNames: "Azibiot, Sumamed, Zitrocin",
    group: "Makrolidok (Azalidok)",
    halfLife: "68 óra (extrém hosszú felezési idő, szövetekben raktározódik!)",
    pae: "Rendkívül elhúzódó szöveti hatás",
    effectType: "bacteriostaticus",
    dosage: {
      adult: "Napi 1x 500 mg 3 napig (vagy első nap 500 mg, majd 2-5. nap 250 mg); Chlamydia urethritisre 1 g egyszeri dózis p.o.",
      pediatric: "10 mg/ttkg/nap p.o. 3 napig (vagy 1. nap 10 mg/ttkg, 2-5. nap 5 mg/ttkg)",
      renalAdjustment: "Veseelégtelenségben nem igényel dózismódosítást (főleg az epével ürül)"
    },
    mechanismOfAction: "Bakteriosztatikus fehérjeszintézis gátló (50S riboszóma alegységhez kötődik). Hosszú szöveti retenció: a lizoszómákban és fehérvérsejtekben halmozódik fel, melyek elszállítják a fertőzés helyére.",
    sideEffects: [
      "QT-idő megnyúlás (bár kissé biztonságosabbnak tartják, mint a clarithromycint)",
      "Gastrointestinalis intolerancia (enyhébb, mint a többi makrolid)",
      "Otitis / hallászavar (hosszú távú alkalmazásnál)"
    ],
    spectrum: {
      gramPositive: 1, // Kissé gyengébb Gram-pozitív hatás, mint a Clarithromyciné
      gramNegative: 2, // Jobb Gram-negatív hatás (H. influenzae, Moraxella, Campylobacter ellen is)
      anaerobe: 1,
      atypical: 2, // Kiváló atípusos hatás!
      pseudomonas: 0, // Nem öl Pseudomonas-t (bár biofilm-gátló hatása miatt krónikus Pseudomonas fertőzött cystic fibrosisban alacsony dózisban adják immunmodulánsként!)",
      other: "Rendkívül kényelmes adagolás (3 napos kúra megfelel egy 7-10 napos standard kezelésnek)."
    },
    indications: [
      "Atípusos közösségi tüdőgyulladás (CAP)",
      "Chlamydia trachomatis okozta nem-gonorrhoeás urethritis / cervicitis (1g stat p.o.)",
      "Pertussis (Szamárköhögés) elsővonalbeli kezelése és profilaxisa",
      "Utazók hasmenése (Campylobacter gyanú esetén)"
    ],
    notes: "Minimális gyógyszerinterakció a többi makrolidhoz képest, mivel nem gátolja érdemben a CYP3A4 rendszert."
  },
  {
    id: "ciprofloxacin",
    name: "Ciprofloxacin",
    abbreviation: "CIP",
    brandNames: "Cifran, Ciprinol, Ciprofloxacin Kabi",
    group: "Fluorokinolonok (2. generáció / Gram-negatív túlsúlyú)",
    halfLife: "4 óra",
    pae: "Gram-negatívaknál kifejezett (1.5-3 óra)",
    effectType: "bactericid",
    dosage: {
      adult: "p.o.: 2x 250 mg - 750 mg naponta; i.v.: 2x vagy 3x 400 mg naponta",
      pediatric: "Csak speciális javallatra (pl. Pseudomonas cystic fibrosisban): 20-30 mg/ttkg/nap p.o. 2 részben vagy 10-15 mg/ttkg i.v. 8 óránként",
      renalAdjustment: "GFR < 30 ml/perc: az adag felére csökkentendő"
    },
    mechanismOfAction: "Gyors baktericid hatás. Gátolja a bakteriális DNS-topizomeráz II (DNS-giráz) és DNS-topizomeráz IV enzimeket, amelyek a DNS replikációhoz, transzkripcióhoz és szuperspirál kicsavarásához szükségesek. Ez a DNS lánc megszakadásához és sejthalálhoz vezet.",
    sideEffects: [
      "Inak és szalagok károsodása (Achilles-ín szakadás, tendinitis - kockázata nő kortikoszteroid szedésekor vagy időseknél!)",
      "Aorta aneurysma repedésének elméleti kockázata (FDA figyelmeztetés)",
      "Neuropszichiátriai tünetek (álmatlanság, szorongás, hallucináció, görcsrohamok)",
      "QT-idő megnyúlás",
      "Fototoxicitás (fényérzékenység)",
      "Gastrointestinalis panaszok és C. difficile kockázat"
    ],
    spectrum: {
      gramPositive: 1, // Gyenge Gram-pozitív hatás! Streptococcus pneumoniae ellen nem elégséges (nem 'légúti' kinolon!)",
      gramNegative: 2, // Kiemelkedő Gram-negatív hatás (Enterobacterales, Neisseria, Haemophilus)",
      anaerobe: 0, // Anaerobok ellen teljesen hatástalan!
      atypical: 1, // Mérsékelt atípusos hatás (Legionella ellen jó, de Mycoplasmára kevésbé)
      pseudomonas: 2, // Kiváló Pseudomonas aeruginosa hatás (az egyetlen orálisan is adható Pseudomonas-ellenes szer!)",
      other: "Koncentráció-függő baktericid."
    },
    indications: [
      "Szövődményes húgyúti fertőzések és akut pyelonephritis",
      "Gram-negatív urosepsis",
      "Pseudomonas aeruginosa fertőzések (különösen ha per os kezelés szükséges)",
      "Prostatitis (krónikus bakteriális - kiváló prosztata penetráció!)",
      "Utazók hasmenése ( Shigella, Salmonella, toxikus E. coli)"
    ],
    notes: "Kationok (kalcium, magnézium, vas, alumínium - antacidok, tejtermékek) gátolják a felszívódását a bélben a kelátképződés miatt!"
  },
  {
    id: "levofloxacin",
    name: "Levofloxacin",
    abbreviation: "LVX",
    brandNames: "Leflox, Levoxa, Tavanic",
    group: "Fluorokinolonok (3. generáció / Légúti kinolonok)",
    halfLife: "6 - 8 óra (napi 1x adagolás elegendő)",
    pae: "Kifejezett (2-3 óra)",
    effectType: "bactericid",
    dosage: {
      adult: "Napi 1x 500 mg - 750 mg p.o. vagy i.v.",
      pediatric: "Gyermekeknél kerülendő (porckárosító hatás miatt, kivéve ha nincs alternatíva)",
      renalAdjustment: "GFR < 50 ml/perc: adagmódosítás szükséges"
    },
    mechanismOfAction: "Baktericid DNS-giráz és topizomeráz IV gátló (az ofloxacin aktív L-izomerje). Sokkal nagyobb affinitással kötődik a Gram-pozitív topizomerázokhoz, mint a ciprofloxacin.",
    sideEffects: [
      "Ugyanazok a kinolon-mellékhatások (tendinitis, Achilles-ín szakadás veszélye)",
      "QT-idő megnyúlás (erősebb, mint a ciprofloxacinnál)",
      "Hypoglykaemia / hyperglykaemia (vércukorszint-ingadozás, különösen idős cukorbetegeknél!)"
    ],
    spectrum: {
      gramPositive: 2, // Kiváló Gram-pozitív hatás, különösen Streptococcus pneumoniae ellen! Ezért hívják 'légúti kinolonnak'.
      gramNegative: 2, // Jó Gram-negatív hatás
      anaerobe: 1, // Minimális anaerob hatás
      atypical: 2, // Kiváló atípusos lefedettség!
      pseudomonas: 1, // Pseudomonas ellen hatékony, de kevésbé aktív, mint a ciprofloxacin.
      other: "Széles spektrumú empirikus szer súlyos légúti fertőzésekben."
    },
    indications: [
      "Közösségben szerzett pneumonia (CAP) alternatív vagy elsővonalbeli kezelése (súlyos esetben vagy társbetegségekkel)",
      "COPD akut bakteriális exacerbációja",
      "Akut pyelonephritis és szövődményes húgyúti fertőzések"
    ],
    notes: "Szájon át adva a biohasznosulása közel 99%, így az orális és az intravénás adag megegyezik."
  },
  {
    id: "moxifloxacin",
    name: "Moxifloxacin",
    abbreviation: "MXF",
    brandNames: "Avelox, Moxifloxacin Kabi, Vigamox (szemcsepp)",
    group: "Fluorokinolonok (4. generáció / Légúti és anaerob-ellenes kinolon)",
    halfLife: "12 óra (kényelmes napi 1x adagolás)",
    pae: "Kifejezett (2-3 óra)",
    effectType: "bactericid",
    dosage: {
      adult: "Napi 1x 400 mg p.o. vagy i.v.",
      pediatric: "Kontraindikált",
      renalAdjustment: "Veseelégtelenségben nem igényel adagmódosítást (főleg a májban metabolizálódik és a széklettel ürül!)"
    },
    mechanismOfAction: "Baktericid. Gátolja a DNS-giráz és topizomeráz IV enzimeket. Kémiai szerkezete (metoxicsoport a C8 pozíción) csökkenti a rezisztencia kialakulásának esélyét és kiterjeszti a hatást az anaerobokra.",
    sideEffects: [
      "QT-idő megnyúlás (a fluorokinolonok közül a moxifloxacin nyújtja meg leginkább a QT-t, súlyos szívbetegeknél óvatosság!)",
      "Hepatotoxicitás (ritka, de súlyos májkárosodást jelentettek)",
      "Standard kinolon mellékhatások (inak, központi idegrendszer)"
    ],
    spectrum: {
      gramPositive: 2, // Kiváló Streptococcus pneumoniae hatás!
      gramNegative: 2, // Jó Gram-negatív hatás (de húgyúti fertőzésekre NEM jó, mert alig választódik ki a vizeletbe!)
      anaerobe: 2, // Az egyetlen kinolon, amely jó anaerob hatással bír (B. fragilis ellen is mérsékelten aktív)
      atypical: 2, // Kiváló atípusos hatás
      pseudomonas: 0, // Pseudomonas ellen NEM hatékony!
      other: "Mivel nem koncentrálódik a vizeletben, húgyúti fertőzésekre (UTI) szigorúan tilos és alkalmatlan alkalmazni!"
    },
    indications: [
      "Közösségben szerzett pneumonia (CAP) súlyos formái",
      "Akut bakteriális sinusitis, krónikus bronchitis exacerbációja",
      "Szövődményes kismedencei gyulladások (PID)",
      "Másodvonalbeli szer tuberkulózisban (MDR-TB)"
    ],
    notes: "Az egyetlen kinolon, amely májmetabolizmusa miatt nem alkalmazható cystitis vagy pyelonephritis kezelésére."
  },
  {
    id: "doxycycline",
    name: "Doxycyclin",
    abbreviation: "DOX",
    brandNames: "Doxycyclin AL, Tenutan",
    group: "Tetracyclinek",
    halfLife: "18 - 24 óra (hosszú)",
    pae: "Kifejezett bakteriosztatikus PAE",
    effectType: "bacteriostaticus",
    dosage: {
      adult: "Első nap 1x 200 mg vagy 2x 100 mg, majd napi 1x 100 mg p.o. (súlyos esetben napi 200 mg végig)",
      pediatric: "8 év alatt kontraindikált! (Kivétel: Sziklás-hegységi foltos láz, anthrax); 8 év felett: 2-4 mg/ttkg/nap 1-2 részben",
      renalAdjustment: "Nem igényel módosítást veseelégtelenségben (az epével/széklettel ürül inaktív kelát formájában)"
    },
    mechanismOfAction: "Bakteriosztatikus. Kötődik a bakteriális 30S riboszóma alegységhez, megakadályozva az aminoacil-tRNS kötődését az akceptor (A) helyhez, ezáltal leállítja a peptid lánc növekedését (fehérjeszintézis gátlás).",
    sideEffects: [
      "Fogak elszíneződése és fogzománc-hypoplasia (8 év alatti gyermekeknél és terhességben a csontokban és fogakban lévő kalciumhoz kötődik, ezért náluk szigorúan kontraindikált!)",
      "Fotoszenzibilizáció (fényérzékenység, súlyos leégés kockázata)",
      "Pillbox nyelőcsőgyulladás (nyelőcső fekély, ha kevés vízzel veszik be lefekvés előtt!)",
      "Gastrointestinalis irritáció, hányinger, epigastrialis fájdalom",
      "Pseudotumor cerebri (jóindulatú koponyaűri nyomásfokozódás - ritka)"
    ],
    spectrum: {
      gramPositive: 1, // Streptococcusok ellen mérsékelt (magas rezisztencia), de aktív közösségi MRSA ellen!
      gramNegative: 1, // Szűk / mérsékelt
      anaerobe: 1,
      atypical: 2, // Kiváló atípusos hatás (Mycoplasma, Chlamydia, Rickettsia, Coxiella, Borrelia)
      pseudomonas: 0,
      other: "Elsővonalbeli szer zoonózisokban (Lyme-kór, brucellosis, tularémia, Q-láz)."
    },
    indications: [
      "Lyme-kór korai stádiuma (erythema migrans) - 2x 100 mg p.o. 10-14 napig",
      "Közösségben szerzett pneumonia atípusos formái",
      "Chlamydia trachomatis okozta urethritis (7 napig 2x 100 mg)",
      "Acne vulgaris szisztémás kezelése (alacsony dózisban)",
      "Malária profilaxis"
    ],
    notes: "Bevehető étkezés közben, de kalciumot, vasat, magnéziumot tartalmazó élelmiszerek és gyógyszerek (tej, antacidok) gátolják a felszívódását!"
  },
  {
    id: "vancomycin",
    name: "Vancomycin",
    abbreviation: "VAN",
    brandNames: "Vancomycin Kabi, Vancocin (p.o.)",
    group: "Glycopeptidek",
    halfLife: "6 - 8 óra (veseelégtelenségben extrém módon megnyúlik!)",
    pae: "Gram-pozitívaknál kb. 1-2 óra",
    effectType: "bactericid",
    dosage: {
      adult: "i.v.: 2x 1000 mg - 1500 mg (vagy 15-20 mg/ttkg 8-12 óránként); p.o.: 4x 125 mg - 500 mg naponta (kizárólag C. difficile colitisre!)",
      pediatric: "40 mg/ttkg/nap i.v. 3-4 részre osztva",
      renalAdjustment: "Szigorú dózismódosítás és terápiás drogmonitorozás (TDM) szükséges a mélyponti (trough) szérumszint alapján (célérték súlyos fertőzésben: 15-20 ug/ml)!"
    },
    mechanismOfAction: "Baktericid (lassú). Gátolja a sejtfal szintézist azáltal, hogy nagy affinitással kötődik a peptidoglikán prekurzorok D-Ala-D-Ala végéhez. Ezzel megakadályozza a transzpeptidációt és a polimerizációt. (A béta-laktámoktól eltérő helyen hat, így MRSA ellen is kiváló!).",
    sideEffects: [
      "Red Man Syndrome (Vörös ember szindróma): nem-immunológiai hisztamin-felszabadulás miatti arcpír, viszketés, hipotónia a túl gyors intravénás beadás miatt! Lassú, legalább 60 perces infúzióval megelőzhető.",
      "Nephrotoxicitás (vesekárosodás, különösen ha aminoglikoziddal vagy Piperacillinnel kombinálják, vagy ha a szérumszint túl magas)",
      "Ototoxicitás (ritka, főleg más ototoxikus szerekkel társítva)",
      "Neutropenia (hosszú távú kezelésnél)"
    ],
    spectrum: {
      gramPositive: 2, // Kizárólag Gram-pozitív baktériumok ellen hatékony! Kiváló MRSA, Streptococcusok, Enterococcusok ellen (kivéve VRE)
      gramNegative: 0, // Gram-negatívak ellen teljesen hatástalan (molekulamérete miatt nem fér át a külső membrán porinjain!)",
      anaerobe: 1, // Clostridioides difficile ellen kiváló p.o., de más anaerobokra nem elsővonalbeli
      atypical: 0,
      pseudomonas: 0,
      other: "Az MRSA fertőzések klasszikus standard kezelése."
    },
    indications: [
      "MRSA okozta súlyos szisztémás fertőzések (szepszis, endocarditis, osteomyelitis, pneumonia)",
      "Súlyos Clostridioides difficile okozta colitis (KIZÁRÓLAG SZÁJON ÁT! Szájon át szedve nem szívódik fel, így közvetlenül a bélben fejti ki hatását. Az i.v. vancomycin hatástalan C. difficile colitisben!)",
      "Béta-laktám allergiás betegek súlyos Gram-pozitív fertőzései"
    ],
    notes: "Az i.v. és p.o. Vancomycin két teljesen különböző indikációt szolgál a felszívódás hiánya miatt."
  },
  {
    id: "clindamycin",
    name: "Clindamycin",
    abbreviation: "CLI",
    brandNames: "Dalacin, Klimicin",
    group: "Lincosamidok",
    halfLife: "2 - 3 óra",
    pae: "Gram-pozitívaknál kifejezett",
    effectType: "bacteriostaticus",
    dosage: {
      adult: "p.o.: 3x vagy 4x 300 mg - 450 mg naponta; i.v.: 3x vagy 4x 600 mg - 900 mg naponta",
      pediatric: "20-40 mg/ttkg/nap p.o. vagy i.v., 3-4 részre osztva",
      renalAdjustment: "Nem igényel adagmódosítást veseelégtelenségben (májban metabolizálódik)"
    },
    mechanismOfAction: "Bakteriosztatikus fehérjeszintézis gátló. Kötődik az 50S riboszóma alegységhez (átfedő kötőhelyen a makrolidokkal). Gátolja a toxinok (pl. TSST-1 Staphylococcusban, streptococcus pirogén exotoxinok) szintézisét is, ami klinikailag nagyon fontos toxikus shock szindrómában!",
    sideEffects: [
      "Clostridioides difficile asszociált hasmenés / Pseudomembranosus colitis (A clindamycin az egyik legveszélyesebb szer ebből a szempontból, mivel kiirtja a normál bélflórát!)",
      "Hányinger, hasi fájdalmak",
      "Allergiás bőrkiütések (néha súlyos, pl. DRESS vagy Stevens-Johnson szindróma)"
    ],
    spectrum: {
      gramPositive: 2, // Jó Gram-pozitív hatás (Streptococcus, MSSA, közösségi MRSA törzsek egy része)
      gramNegative: 0, // Teljesen hatástalan Gram-negatívak ellen
      anaerobe: 2, // Kiváló anaerob hatás rekesz feletti fertőzéseknél (szájüreg, tüdő, de B. fragilis esetén növekvő rezisztencia!)",
      atypical: 0,
      pseudomonas: 0,
      other: "Kiváló szöveti és csont penetráció. Csökkenti a bakteriális toxinok termelését."
    },
    indications: [
      "Bőr- és lágyrészfertőzések (különösen ha anaerob gyanú van, vagy penicillin allergia esetén)",
      "Osteomyelitis (csontgyulladás) - kiváló csontpenetráció miatt",
      "Aspirációs pneumonia és tüdőtályog (gyakran béta-laktámmal kombinálva)",
      "Toxikus Shock Szindróma (TSS) kezelése Ceftriaxon/Penicillin mellé adva a toxin-termelés leállítása céljából!"
    ],
    notes: "A clindamycin és makrolidok között keresztrezisztencia léphet fel (MLS_B fenotípus, melyet D-teszttel vizsgálnak)."
  },
  {
    id: "metronidazole",
    name: "Metronidazol",
    abbreviation: "MTZ",
    brandNames: "Klion, Metrogyl, Metronidazole Kabi",
    group: "Nitroimidazolok",
    halfLife: "8 óra",
    pae: "Gram-negatív anaeroboknál kifejezett",
    effectType: "bactericid",
    dosage: {
      adult: "3x 500 mg p.o. vagy i.v. naponta",
      pediatric: "30-40 mg/ttkg/nap p.o. vagy i.v., 3 részre osztva",
      renalAdjustment: "Súlyos veseelégtelenségben (GFR < 10) az adagot 50%-kal csökkenteni kell, ha naponta többször adják"
    },
    mechanismOfAction: "Gyors baktericid hatás. Prodrug: az anaerob baktériumok piruvát-ferredoxin-oxidoreduktáz (PFOR) enzimje redukálja a metronidazol nitro-csoportját, aminek során reaktív szabad gyökök keletkeznek. Ezek a gyökök közvetlenül károsítják a bakteriális DNS-t, láncszakadásokat idézve elő. Mivel a redukció csak anaerob környezetben megy végbe, aerob baktériumokra teljesen hatástalan!",
    sideEffects: [
      "Diszulfirám-szerű reakció alkohol fogyasztásakor (hányinger, hányás, kipirulás, tachycardia - a kezelés alatt és utána 48 óráig az alkohol szigorúan tilos!)",
      "Fémes íz a szájban, lepedékes nyelv",
      "Perifériás neuropathia, görcsrohamok, ataxia (hosszú távú vagy nagy dózisú kezelésnél)",
      "Hányinger, étvágytalanság"
    ],
    spectrum: {
      gramPositive: 0, // Aerob Gram-pozitívak ellen hatástalan!
      gramNegative: 0, // Aerob Gram-negatívak ellen hatástalan!
      anaerobe: 2, // A létező legjobb anaerob-ellenes szer! (Bacteroides fragilis, Clostridiums, Fusobacteriums ellen arany standard!)",
      atypical: 0,
      pseudomonas: 0,
      other: "Kiváló protozoon-ellenes hatás (Trichomonas vaginalis, Entamoeba histolytica, Giardia lamblia ellen is elsővonalbeli)."
    },
    indications: [
      "Intraabdominalis fertőzések (peritonitis, tályogok - mindig aerob elleni szerrel kombinálva, pl. Ceftriaxon + Metronidazol!)",
      "Agytályog (kiváló penetráció)",
      "Clostridioides difficile colitis enyhébb esetei (bár a Vancomycin p.o. ma már preferáltabb)",
      "Trichomoniasis és bakteriális vaginosis",
      "Fogászati fertőzések (Spiramycinnel kombinálva pl. Rovamycine)"
    ],
    notes: "A szájon át szedett metronidazol felszívódása szinte 100%-os, az i.v. és p.o. adagolás egyenértékű."
  },
  {
    id: "linezolid",
    name: "Linezolid",
    abbreviation: "LNZ",
    brandNames: "Zyvoxid, Linezolid Kabi",
    group: "Oxazolidinonok",
    halfLife: "5 - 7 óra",
    pae: "Gram-pozitívaknál 1-2 óra",
    effectType: "bacteriostaticus",
    dosage: {
      adult: "2x 600 mg p.o. vagy i.v. naponta",
      pediatric: "10 mg/ttkg p.o. vagy i.v. 8 vagy 12 óránként",
      renalAdjustment: "Nem igényel módosítást, de metabolitjai felhalmozódhatnak veseelégtelenségben (óvatosság, vérkép-ellenőrzés!)"
    },
    mechanismOfAction: "Bakteriosztatikus (Streptococcusok ellen baktericid). Egyedi hatásmechanizmus: kötődik az 50S riboszóma alegység 23S RNS-éhez, megakadályozva a funkcionális 70S iniciációs komplex kialakulását (gátolja a transzláció kezdeti lépését). Mivel korai stádiumban gátol, nincs keresztrezisztencia más fehérjeszintézis gátlókkal.",
    sideEffects: [
      "Myeloszuppresszió (Thrombocytopenia, anaemia, leukopenia - különösen 2 hétnél hosszabb kezelés esetén! Hetente vérkép-ellenőrzés kötelező!)",
      "Szerotonin szindróma (mivel a linezolid egy gyenge, nem-szelektív MAO-gátló. SSRI/SNRI antidepresszánsokkal együtt szedve veszélyes hyperthermiát, tachycardiát, rigiditást okozhat!)",
      "Laktát-acidózis (mitokondriális toxicitás miatt elhúzódó kezelésnél)",
      "Perifériás és optikus neuropathia (ritka, tartós szedésnél, látásromlást okozhat)"
    ],
    spectrum: {
      gramPositive: 2, // Rendkívül erős Gram-pozitív lefedettség: MRSA, VRSA, VRE (vancomycin-rezisztens Enterococcusok - mind faecalis, mind faecium!), PRSP
      gramNegative: 0,
      anaerobe: 1,
      atypical: 0,
      pseudomonas: 0,
      other: "Tartalék antibiotikum ('reserve drug') multirezisztens Gram-pozitív fertőzésekre."
    },
    indications: [
      "Bizonyítottan Vancomycin-rezisztens Enterococcus (VRE) fertőzések",
      "MRSA okozta nosocomialis pneumonia (gyakran jobb tüdőpenetrációt mutat, mint a Vancomycin)",
      "Szövődményes lágyrészfertőzések MRSA gyanúval (ha a Vancomycin nem alkalmazható)"
    ],
    notes: "100%-os orális biohasznosulás. A tabletta és az infúzió adagja teljesen azonos, így könnyű az i.v.-ről p.o.-ra váltás (step-down terápia)."
  },
  {
    id: "cotrimoxazole",
    name: "Sulfamethoxazol / Trimethoprim (Co-trimoxazol)",
    abbreviation: "SXT",
    brandNames: "Sumetrolim, Cotrimel",
    group: "Szulfonamidok és trimethoprim kombinációja",
    halfLife: "10 óra",
    pae: "Mérsékelt",
    effectType: "bactericid",
    dosage: {
      adult: "Standard adag: 2x 960 mg (800 mg sulfamethoxazole + 160 mg trimethoprim) p.o. naponta. Súlyos Pneumocystis fertőzésben nagyon magas i.v. adagok (15-20 mg/ttkg/nap trimethoprimre számolva, 3-4 részben) szükségesek.",
      pediatric: "30 mg/ttkg/nap szulfametoxazol + 6 mg/ttkg/nap trimethoprim p.o. 2 részben",
      renalAdjustment: "GFR < 30 ml/perc: az adagot felére kell csökkenteni. GFR < 15 ml/perc: alkalmazása kerülendő."
    },
    mechanismOfAction: "Baktericid (szinergisztikus kombináció). Két különböző ponton gátolja a bakteriális folsav-szintézist: a sulfamethoxazol kompetitív módon gátolja a dihidropteroát-szintetázt (PABA analóg), míg a trimethoprim gátolja a dihidrofolát-reduktáz enzimet. A folsavhiány gátolja a purin- és DNS-szintézist.",
    sideEffects: [
      "Súlyos bőrreakciók (Stevens-Johnson szindróma, Toxicus Epidermalis Necrolysis - ritka, de életveszélyes!)",
      "Hyperkalaemia (a trimethoprim gátolja a nátrium-csatornákat a vese gyűjtőcsatornáiban, hasonlóan az amiloridhoz, emelve a káliumszintet)",
      "Csontvelő-szuppresszió (folsavhiányos anaemia, leukopenia - folsav adásával enyhíthető)",
      "Kreatinin-szint álpozitív emelkedése (gátolja a kreatinin tubuláris szekrécióját a vesében anélkül, hogy a valódi GFR-t csökkentené)",
      "Újszülötteknél magbél-icterus (terhesség utolsó heteiben kontraindikált)"
    ],
    spectrum: {
      gramPositive: 2, // Jó Gram-pozitív hatás, beleértve a közösségi MRSA-t (CA-MRSA) is!
      gramNegative: 2, // Jó Enterobacterales lefedettség, de a rezisztencia aránya növekszik
      anaerobe: 0,
      atypical: 1, // Aktív Nocardia ellen
      pseudomonas: 0,
      other: "Pneumocystis jirovecii (opportunista gomba) és Stenotrophomonas maltophilia elsővonalbeli szere. Toxoplasma gondii ellen is aktív."
    },
    indications: [
      "Pneumocystis jirovecii pneumonia (PCP) kezelése és profilaxisa (különösen HIV/AIDS vagy immunszupprimált betegeknél)",
      "Nem szövődményes húgyúti fertőzések (cystitis), ha a helyi rezisztencia alacsony",
      "CA-MRSA okozta enyhe-középsúlyos bőrfertőzések",
      "Nocardiosis, Stenotrophomonas fertőzések"
    ],
    notes: "A betegeket figyelmeztetni kell a bőséges folyadékfogyasztásra a szulfonamid-kristályvizelés (crystalluria) megelőzése érdekében."
  },
  {
    id: "nitrofurantoin",
    name: "Nitrofurantoin",
    abbreviation: "NIT",
    brandNames: "Alpicor, Nitrofurantoin-Richter",
    group: "Nitrofurán származékok",
    halfLife: "20 - 30 perc (extrém rövid szisztémásan, de a vizeletben magas koncentrációt ér el)",
    pae: "Nincs érdemi szisztémás PAE",
    effectType: "bactericid",
    dosage: {
      adult: "2x 100 mg p.o. naponta (nyújtott hatású forma) vagy 4x 50 mg - 100 mg p.o. 5-7 napig",
      pediatric: "5-7 mg/ttkg/nap p.o., 4 részre osztva (1 hónapos kor felett)",
      renalAdjustment: "GFR < 30 ml/perc esetén kontraindikált! Nem veseelégtelenséget okoz, hanem ilyenkor nem képes kiválasztódni a vizeletbe, így hatástalan lesz a húgyhólyagban, miközben szisztémásan akkumulálódik és toxicitást okoz!"
    },
    mechanismOfAction: "Baktericid. A bakteriális nitroreduktázok reaktív intermedierekké alakítják a nitrofurantoint, amelyek megtámadják a bakteriális riboszomális fehérjéket, a DNS-t, az RNS-t és a sejtlégzést. Mivel több támadáspontja van, a baktériumok nagyon nehezen tudnak rezisztenciát fejleszteni ellene.",
    sideEffects: [
      "Gastrointestinalis panaszok (hányinger, hányás - nagyon gyakori)",
      "Tüdőtoxicitás: akut túlérzékenységi tüdőreakció (láz, dyspnoe, beszűrődés) vagy krónikus tüdőfibrosis (hónapokig-évekig tartó szedésnél!)",
      "Perifériás neuropathia (különösen csökkent vesefunkció esetén)",
      "Hepatotoxicitás (krónikus aktív hepatitis)"
    ],
    spectrum: {
      gramPositive: 2, // Jó E. faecalis, E. faecium (VRE törzsek egy része is!), Staphylococcus saprophyticus ellen
      gramNegative: 2, // Jó E. coli ellen. (Proteus, Pseudomonas, Serratia rezisztensek!)
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 0,
      other: "Kizárólag a húgyhólyagban koncentrálódik. Szisztémás fertőzésekre (pl. pyelonephritis, szepszis) teljesen alkalmatlan!"
    },
    indications: [
      "Akut szövődménymentes alsó húgyúti fertőzés (cystitis) elsővonalbeli kezelése nőknél",
      "Recidiváló húgyúti fertőzések hosszú távú alacsony dózisú profilaxisa"
    ],
    notes: "Az akut cystitis kezelésében a leghasznosabb szerek egyike, a minimális rezisztencia miatt."
  },
  {
    id: "fosfomycin",
    name: "Fosfomycin trometamol",
    abbreviation: "FOS",
    brandNames: "Monural, Fosfomycin Sandoz",
    group: "Egyéb antibiotikumok (Epoxid származékok)",
    halfLife: "4-5 óra (de a vizeletben 36-48 órán át terápiás koncentráció felett marad!)",
    pae: "Kifejezett vizeletben",
    effectType: "bactericid",
    dosage: {
      adult: "Egyszeri 3 g p.o. granulátum, vízben feloldva, éhgyomorra, lefekvés előtt (húgyhólyag kiürítése után)",
      pediatric: "Magyarországon gyermekeknek ebben a formában általában nem javasolt 12 év alatt",
      renalAdjustment: "Súlyos veseelégtelenségben (GFR < 10 ml/perc) egyszeri adagként sem ajánlott"
    },
    mechanismOfAction: "Gyors baktericid hatás. Gátolja a bakteriális sejtfal szintézis legelső lépését: irreverzibilisen gátolja a UDP-N-acetilglükózamin-enolpiruvil-transzferáz (MurA) enzimet. Mivel teljesen egyedi a támadáspontja, nincs keresztrezisztencia más antibiotikumokkal.",
    sideEffects: [
      "Hasi diszkomfort, enyhe hasmenés",
      "Fejfájás, szédülés",
      "Vaginitis (hüvelygyulladás)"
    ],
    spectrum: {
      gramPositive: 2, // Jó Enterococcus (VRE is!) és Staphylococcusok ellen
      gramNegative: 2, // Kiváló E. coli (beleértve az ESBL-termelőket is!), Citrobacter, Klebsiella ellen
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 1, // Pseudomonas ellen mérsékelt (szisztémás formájában kombinációban használják, orális egyszeri adagban nem elégséges Pseudomonas cystitisre)
      other: "Kizárólag nem szövődményes cystitisre alkalmas az orális trometamol só."
    },
    indications: [
      "Akut, szövődménymentes cystitis nőknél (egyszeri 3g adag rendkívül kényelmes, szinte 100%-os compliance!)",
      "Húgyúti diagnosztikus beavatkozások profilaxisa"
    ],
    notes: "Éhgyomorra kell bevenni, mert az étel jelentősen csökkenti a felszívódását. Intravénás formája (Fosfomycin nátrium) súlyos szisztémás multirezisztens fertőzésekben kombinációs partnerként szintén létezik."
  },
  {
    id: "ampicillin",
    name: "Ampicillin",
    abbreviation: "AMP",
    brandNames: "Standacillin, Ampicillin Sandoz",
    group: "Aminopenicillinek (szélesített spektrumú penicillinek)",
    halfLife: "1-1.5 óra",
    pae: "Gram-pozitívaknál 1.5-2 óra, Gram-negatívaknál minimális",
    effectType: "bactericid",
    dosage: {
      adult: "2-12 g/nap i.v., 4-6 részre osztva (súlyos fertőzésben napi 12g)",
      pediatric: "100-200 mg/ttkg/nap i.v. 4-6 részre osztva",
      renalAdjustment: "GFR < 30 ml/perc: csökkentett adag vagy nyújtott adagolási időköz (pl. 12 óránként)"
    },
    mechanismOfAction: "Baktericid. Gátolja a bakteriális sejtfal szintézisét a penicillin-kötő fehérjékhez (PBP) való kötődéssel, ami gátolja a transzpeptidációt.",
    sideEffects: [
      "Allergiás bőrkiütések (különösen mononucleosisban)",
      "Gastrointestinalis panaszok",
      "Eosinophilia",
      "Interstitialis nephritis"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 1,
      anaerobe: 1,
      atypical: 0,
      pseudomonas: 0,
      other: "Listeria monocytogenes és Enterococcus faecalis ellen elsővonalbeli szer."
    },
    indications: [
      "Listeria monocytogenes meningitis (Gentamicinnel kombinálva)",
      "Enterococcus faecalis endocarditis/sepsis (Ceftriaxonnal vagy Gentamicinnel kombinálva)",
      "Enyhe vagy közepesen súlyos légúti és húgyúti fertőzések parenterális kezelése"
    ],
    notes: "Szájon át rosszabb a biohasznosulása, mint az amoxicillinnek, ezért parenterálisan (i.v.) használják leginkább."
  },
  {
    id: "ampicillin_sulbactam",
    name: "Ampicillin / sulbactam",
    abbreviation: "SAM",
    brandNames: "Unasyn",
    group: "Béta-laktamáz inhibitorral kombinált penicillinek",
    halfLife: "kb. 1 óra",
    pae: "Gram-pozitívaknál 1.5-2 óra",
    effectType: "bactericid",
    dosage: {
      adult: "3-12 g/nap i.v. (ampicillin + sulbactam) 3-4 részre osztva (pl. 4x 3 g vagy 3x 1.5-3 g)",
      pediatric: "150-300 mg/ttkg/nap i.v. 3-4 részre osztva",
      renalAdjustment: "GFR < 30 ml/perc: adagolási időköz megnyújtása 12-24 órára"
    },
    mechanismOfAction: "Baktericid. Az ampicillin gátolja a sejtfalszintézist, míg a sulbactam egy béta-laktamáz inhibitor, amely megvédi az ampicillint a leggyakoribb plazmid-mediált béta-laktamázok (Ambler Class A) általi degradációtól.",
    sideEffects: [
      "Fájdalom az injekció helyén",
      "Hasmenés",
      "Májenzim-emelkedés",
      "Túlérzékenység"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 2,
      anaerobe: 2,
      atypical: 0,
      pseudomonas: 0,
      other: "Acinetobacter baumannii ellen önálló hatással bír a sulbactam komponens magas dózisban!"
    },
    indications: [
      "Intraabdominalis fertőzések",
      "Nőgyógyászati kismedencei gyulladások",
      "Acinetobacter baumannii fertőzések (magas dózisú sulbactam részként)",
      "Harapott sebek és aspirációs pneumonia"
    ],
    notes: "Magyarországon az Unasyn márka a legismertebb parenterális kombináció ebben a csoportban."
  },
  {
    id: "flucloxacillin",
    name: "Flucloxacillin",
    abbreviation: "FLU",
    brandNames: "Floxapen (külföldön)",
    group: "Izoxazolil-penicillinek (béta-laktamáz-stabil penicillinek)",
    halfLife: "45-60 perc",
    pae: "Gram-pozitívaknál 1.5-2 óra",
    effectType: "bactericid",
    dosage: {
      adult: "4x 500mg - 1000mg p.o. vagy i.v. (éhgyomorra)",
      pediatric: "50-100 mg/ttkg/nap 4 részre osztva",
      renalAdjustment: "Veseelégtelenségben súlyos esetben adagmódosítás szükséges (GFR < 10 ml/perc: max 4x 1g naponta)"
    },
    mechanismOfAction: "Baktericid. Savstabil és béta-laktamáz-rezisztens penicillin. A penicillin-maghoz kapcsolódó izoxazolil oldallánc térbelileg gátolja a béta-laktamáz enzim hozzáférését a béta-laktám gyűrűhöz.",
    sideEffects: [
      "Hepatotoxicitás (kolesztatikus hepatitis - ritka, de jellemző)",
      "Gastrointestinalis panaszok",
      "Túlérzékenység"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 0,
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 0,
      other: "Kifejezetten Staphylococcus aureus (MSSA) és Streptococcusok ellen kiváló. MRSA ellen hatástalan."
    },
    indications: [
      "Bőr- és lágyrészfertőzések (cellulitis, impetigo, folliculitis)",
      "Osteomyelitis és arthritis (Staphylococcus okozta)",
      "Staphylococcus endocarditis és sepsis"
    ],
    notes: "Magyarországon egyedi importtal érhető el, de Nyugat-Európában (pl. Egyesült Királyság) a Staphylococcus fertőzések elsővonalbeli alapgyógyszere."
  },
  {
    id: "piperacillin",
    name: "Piperacillin",
    abbreviation: "PIP",
    brandNames: "Piperacillin (monoterápiában ritka)",
    group: "Ureidopenicillinek (Pseudomonas-ellenes penicillinek)",
    halfLife: "1 óra",
    pae: "Gram-negatívaknál rövid (<1 óra)",
    effectType: "bactericid",
    dosage: {
      adult: "3x vagy 4x 4 g i.v. infúzióban",
      pediatric: "100-300 mg/ttkg/nap i.v. 3-4 részre osztva",
      renalAdjustment: "GFR < 20 ml/perc: adagcsökkentés (pl. 2x vagy 3x 2 g-ra)"
    },
    mechanismOfAction: "Baktericid. Széles spektrumú penicillin, amely kiterjedt hatással bír Gram-negatív baktériumokra, beleértve a Pseudomonas aeruginosát is, azáltal, hogy gátolja a sejtfalszintézist (PBP-3 és PBP-1a gátlásával).",
    sideEffects: [
      "Túlérzékenységi reakciók",
      "Májenzim-emelkedés",
      "Vérzékenységi hajlam (magas dózisban gátolja a thrombocyta aggregációt)",
      "Hypokalaemia"
    ],
    spectrum: {
      gramPositive: 1,
      gramNegative: 2,
      anaerobe: 1,
      atypical: 0,
      pseudomonas: 2,
      other: "Béta-laktamáz termelő törzsek könnyen elbontják, ezért monoterápiában ritkán használják, csak kombinációban."
    },
    indications: [
      "Súlyos Pseudomonas aeruginosa fertőzések kombinációs tagjaként",
      "Kórházi szerzett fertőzések",
      "Neutropéniás láz (aminoglikoziddal kombinálva)"
    ],
    notes: "Monoterápiában szinte teljesen kiszorította a Piperacillin/Tazobactam kombináció."
  },
  {
    id: "oxacillin",
    name: "Oxacillin",
    abbreviation: "OXA",
    brandNames: "Oxacillin",
    group: "Izoxazolil-penicillinek (béta-laktamáz-stabil penicillinek)",
    halfLife: "30-45 perc",
    pae: "Gram-pozitívaknál kifejezett",
    effectType: "bactericid",
    dosage: {
      adult: "1-2 g i.v. 4-6 óránként (napi 4-12 g szeptikus esetekben)",
      pediatric: "100-200 mg/ttkg/nap i.v. 4-6 részre osztva",
      renalAdjustment: "Súlyos veseelégtelenségben enyhe adagmódosítás szükséges lehet"
    },
    mechanismOfAction: "Baktericid. Gátolja a bakteriális sejtfalszintézist a PBP-khez kötődve. Szerkezetileg ellenáll a Staphylococcusok béta-laktamáz (penicillináz) enzimjének.",
    sideEffects: [
      "Allergiás reakciók",
      "Interstitialis nephritis",
      "Májfunkció-károsodás (transzamináz emelkedés)",
      "Neutropenia (hosszú távú kezelésnél)"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 0,
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 0,
      other: "Kizárólag meticillin-érzékeny Staphylococcusok (MSSA) és Streptococcusok ellen hatékony."
    },
    indications: [
      "Súlyos szisztémás Staphylococcus aureus (MSSA) fertőzések",
      "Endocarditis, osteomyelitis, sepsis",
      "Bőr- és lágyrészfertőzések"
    ],
    notes: "Hasonló a nafcillinhez és a cloxacillinhez. Az MRSA rezisztencia-vizsgálatok során az oxacillin-érzékenységet tesztelik."
  },
  {
    id: "pivmecillinam",
    name: "Pivmecillinam",
    abbreviation: "PIV",
    brandNames: "Selexid",
    group: "Amdinocillinek (vizelet-specifikus penicillinek)",
    halfLife: "1 óra",
    pae: "Gram-negatívaknál mérsékelt",
    effectType: "bactericid",
    dosage: {
      adult: "3x 200mg - 400mg p.o. étkezés közben, bőséges folyadékkal",
      pediatric: "Magyarországon gyermekeknek ritkábban alkalmazott ebben a formában",
      renalAdjustment: "GFR < 30 ml/perc: csökkentett dózis javasolt"
    },
    mechanismOfAction: "Baktericid. Prodrug, amely a szervezetben mecillinammá (amdinocillin) alakul. Kifejezetten a PBP-2-höz kötődik, ami a Gram-negatív baktériumok gömbalakúvá válását (spheroplast képződés) és lízisét okozza.",
    sideEffects: [
      "Hányinger, emésztési zavarok",
      "Nyelőcső irritáció/fekély (ha nem elegendő folyadékkal veszik be)",
      "Karnitin depléció (hosszan tartó szedés esetén kontraindikált!)"
    ],
    spectrum: {
      gramPositive: 0,
      gramNegative: 2,
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 0,
      other: "Kifejezetten az Enterobacterales (E. coli, Klebsiella, Proteus) ellen kiváló vizeletben. ESBL termelők egy része ellen is hatékony vizelet-koncentrációban!"
    },
    indications: [
      "Akut nem szövődményes cystitis (húgyhólyag-gyulladás) elsővonalbeli p.o. kezelése",
      "Húgyúti fertőzések megelőzése"
    ],
    notes: "Étkezés közben és sok folyadékkal kell bevenni, ülő vagy álló helyzetben. Hosszan tartó szedése tilos a karnitinvesztés veszélye miatt."
  },
  {
    id: "cephalexin",
    name: "Cephalexin",
    abbreviation: "LEX",
    brandNames: "Pyassan, Cephalexin (külföldön Keflex)",
    group: "1. generációs Cephalosporinok",
    halfLife: "1 óra",
    pae: "Gram-pozitívaknál kifejezett",
    effectType: "bactericid",
    dosage: {
      adult: "2-4x 250mg - 500mg p.o. naponta (max. 4g/nap)",
      pediatric: "25-50 mg/ttkg/nap p.o. 3-4 részre osztva",
      renalAdjustment: "GFR < 30 ml/perc: csökkentett adag vagy hosszabb időköz"
    },
    mechanismOfAction: "Baktericid. Gátolja a bakteriális sejtfal szintézisét a PBP-khez való kötődéssel.",
    sideEffects: [
      "Emésztőrendszeri panaszok",
      "Enyhe bőrkiütések",
      "Eozinofília"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 1,
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 0,
      other: "Jó Gram-pozitív hatás (Streptococcus, MSSA). Korlátozott Gram-negatív hatás (E. coli, Klebsiella, Proteus)."
    },
    indications: [
      "Enyhe bőr- és lágyrészfertőzések",
      "Nem szövődményes cystitis",
      "Felső légúti fertőzések (ha penicillin túlérzékenység áll fenn)"
    ],
    notes: "Szájon át kiválóan felszívódó 1. generációs cephalosporin."
  },
  {
    id: "cefoxitin",
    name: "Cefoxitin",
    abbreviation: "FOX",
    brandNames: "Mefoxin (külföldön)",
    group: "2. generációs Cephalosporinok (Cephamycinek)",
    halfLife: "45-60 perc",
    pae: "Mérsékelt",
    effectType: "bactericid",
    dosage: {
      adult: "3x vagy 4x 1-2 g i.v. naponta",
      pediatric: "80-160 mg/ttkg/nap i.v. 4-6 részre osztva",
      renalAdjustment: "GFR < 50 ml/perc: adagmódosítás szükséges"
    },
    mechanismOfAction: "Baktericid. Cephamycin származék, amely béta-laktamáz-stabil és ellenáll egyes ESBL enzimeknek is.",
    sideEffects: [
      "Lokális thrombophlebitis",
      "Allergiás reakciók",
      "Hasmenés"
    ],
    spectrum: {
      gramPositive: 1,
      gramNegative: 2,
      anaerobe: 2,
      atypical: 0,
      pseudomonas: 0,
      other: "Kiemelkedő az anaerob (Bacteroides fragilis is!) és béta-laktamáz stabil Gram-negatív hatása."
    },
    indications: [
      "Műtéti profilaxis (különösen kismedencei, bél- és nőgyógyászati műtétekben)",
      "Intraabdominalis fertőzések",
      "Kismedencei gyulladásos betegség (PID)"
    ],
    notes: "A laboratóriumokban a cefoxitin korongot használják az MRSA rezisztencia kimutatására, mert megbízhatóan jelzi a mecA gén jelenlétét."
  },
  {
    id: "cefaclor",
    name: "Cefaclor",
    abbreviation: "CEC",
    brandNames: "Ceclor, Vercef",
    group: "2. generációs Cephalosporinok",
    halfLife: "30-60 perc",
    pae: "Gram-pozitívaknál 1-2 óra",
    effectType: "bactericid",
    dosage: {
      adult: "3x 250mg - 500mg p.o. naponta, vagy 2x 375mg - 750mg nyújtott hatású tabletta",
      pediatric: "20-40 mg/ttkg/nap p.o. 3 részben osztva",
      renalAdjustment: "Súlyos veseelégtelenségben (GFR < 10) adagcsökkentés"
    },
    mechanismOfAction: "Baktericid. Gátolja a sejtfalszintézist a PBP-khez kötődve. Stabilabb a Gram-negatív béta-laktamázokkal szemben, mint az 1. generációs szerek.",
    sideEffects: [
      "Emésztési panaszok",
      "Szérumbetegség-szerű reakció (láz, ízületi fájdalom, bőrkiütés - különösen gyermekeknél)",
      "Allergia"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 1,
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 0,
      other: "Mérsékelt hatás Haemophilus influenzae, Moraxella catarrhalis és Enterobacterales ellen."
    },
    indications: [
      "Felső és alsó légúti fertőzések (középfül-, arcüreg-, mandulagyulladás, bronchitis)",
      "Enyhe bőr- és lágyrészfertőzések",
      "Szövődménymentes húgyúti fertőzések"
    ],
    notes: "Kifejezetten gyermekgyógyászatban népszerű szájon át szedhető cephalosporin."
  },
  {
    id: "cefotaxime",
    name: "Cefotaxim",
    abbreviation: "CTX",
    brandNames: "Cefotaxim Kabi, Sandoz Cefotaxim",
    group: "3. generációs Cephalosporinok (Gram-negatív túlsúlyúak)",
    halfLife: "1 óra",
    pae: "Gram-negatívaknál minimális",
    effectType: "bactericid",
    dosage: {
      adult: "3x vagy 4x 1-2 g i.v. naponta (súlyos fertőzésben akár napi 12 g)",
      pediatric: "100-200 mg/ttkg/nap i.v. 3-4 részre osztva",
      renalAdjustment: "GFR < 20 ml/perc: csökkentett adag (pl. felezett dózis vagy 12 óránként)"
    },
    mechanismOfAction: "Baktericid. Kiváló Gram-negatív sejtfal-penetráció és PBP-3 kötődés. Aktív metabolitja szinergizál az anyavegyülettel.",
    sideEffects: [
      "Allergiás reakciók",
      "Hasmenés (C. difficile kockázat)",
      "Leukopenia, eosinophilia"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 2,
      anaerobe: 1,
      atypical: 0,
      pseudomonas: 0,
      other: "Kiváló hatás Streptococcusok, Neisseria meningitidis és Enterobacterales ellen."
    },
    indications: [
      "Bakteriális meningitis (különösen újszülötteknél, mert nem okoz magsárgát, szemben a Ceftriaxonnal!)",
      "Sepsis",
      "Súlyos tüdő- és húgyúti fertőzések",
      "Spontán bakteriális peritonitis (SBP)"
    ],
    notes: "Hasonló a Ceftriaxonhoz, de rövidebb a felezési ideje, így napi 3-4 alkalommal kell adni. Újszülöttgyógyászatban abszolút preferált."
  },
  {
    id: "cefixime",
    name: "Cefixim",
    abbreviation: "CFM",
    brandNames: "Suprax",
    group: "3. generációs Cephalosporinok (Orális)",
    halfLife: "3-4 óra",
    pae: "Mérsékelt",
    effectType: "bactericid",
    dosage: {
      adult: "1x 400 mg p.o. vagy 2x 200 mg p.o. naponta",
      pediatric: "8 mg/ttkg/nap p.o. szuszpenzióban, 1 vagy 2 részre osztva",
      renalAdjustment: "GFR < 20 ml/perc: csökkentett adag (pl. 200 mg naponta)"
    },
    mechanismOfAction: "Baktericid. Gátolja a sejtfalszintézist a PBP-khez kötődve. Stabil a leggyakoribb Gram-negatív béta-laktamázokkal szemben.",
    sideEffects: [
      "Hasmenés (nagyon gyakori)",
      "Hányinger, hasi fájdalom",
      "Túlérzékenység"
    ],
    spectrum: {
      gramPositive: 1,
      gramNegative: 2,
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 0,
      other: "Kiváló Gram-negatív hatás p.o. szerhez képest. Streptococcusok ellen jó, de MSSA ellen gyenge!"
    },
    indications: [
      "Húgyúti fertőzések szövődményes vagy visszatérő esetei",
      "Középfülgyulladás, sinusitis, tonsillitis (ha az elsővonalbeli szerek hatástalanok)",
      "Nem szövődményes gonorrhoea (egyszeri 400mg)"
    ],
    notes: "A legismertebb és legszélesebb körben felírt 3. generációs orális cephalosporin Magyarországon."
  },
  {
    id: "cefoperazone",
    name: "Cefoperazon",
    abbreviation: "CFP",
    brandNames: "Cefobid (külföldön, Sulbactammal kombinálva: Sulperazon)",
    group: "3. generációs Cephalosporinok (Pseudomonas-ellenes)",
    halfLife: "2 óra",
    pae: "Gram-negatívaknál mérsékelt",
    effectType: "bactericid",
    dosage: {
      adult: "2-4 g i.v. vagy i.m. naponta, 2 részre osztva",
      pediatric: "50-200 mg/ttkg/nap i.v. 2-4 részre osztva",
      renalAdjustment: "Nem igényel veseelégtelenségben adagmódosítást, mert az epével választódik ki!"
    },
    mechanismOfAction: "Baktericid. Gátolja a bakteriális sejtfalszintézist. Pseudomonas ellen is hatékony.",
    sideEffects: [
      "Disulfiram-szerű reakció alkohol fogyasztásakor",
      "Hypoprothrombinaemia és vérzékenység (K-vitamin szintézis gátlása)",
      "Hasmenés (jelentős epés kiválasztás)"
    ],
    spectrum: {
      gramPositive: 1,
      gramNegative: 2,
      anaerobe: 1,
      atypical: 0,
      pseudomonas: 2,
      other: "Pseudomonas aeruginosa ellen hatékony, de kevésbé stabil a béta-laktamázokkal szemben, mint a Ceftazidim."
    },
    indications: [
      "Pseudomonas aeruginosa okozta fertőzések",
      "Epeúti fertőzések (kiemelkedően magas koncentrációt ér el az epében!)",
      "Súlyos Gram-negatív szepszis"
    ],
    notes: "Főként sulbactammal kombinálva használják a klinikai gyakorlatban (Sulperazon)."
  },
  {
    id: "cefepime_tazobactam",
    name: "Cefepim / tazobaktam",
    abbreviation: "FEP-TAN",
    brandNames: "Cefepime/Tazobactam (külföldön)",
    group: "4. generációs Cephalosporin és béta-laktamáz inhibitor kombinációk",
    halfLife: "kb. 2 óra",
    pae: "Mérsékelt",
    effectType: "bactericid",
    dosage: {
      adult: "2x vagy 3x 2 g / 0.25 g i.v. naponta",
      pediatric: "150 mg/ttkg/nap i.v. 3 részre osztva",
      renalAdjustment: "GFR < 50 ml/perc: csökkentett dózis és növelt időköz javasolt"
    },
    mechanismOfAction: "Baktericid. A 4. generációs cefepim ellenáll az AmpC béta-laktamázoknak, míg a tazobaktam gátolja az ESBL enzimeket, így kiválóak a multirezisztens Gram-negatívok ellen.",
    sideEffects: [
      "Neurotoxicitás (görcsrohamok, encephalopathia - különösen veseelégtelenségben!)",
      "Hasmenés",
      "Májfunkció emelkedés"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 2,
      anaerobe: 1,
      atypical: 0,
      pseudomonas: 2,
      other: "Kifejezetten az ESBL-termelő és AmpC-overproducer Enterobacterales törzsek, valamint Pseudomonas aeruginosa ellen fejlesztették."
    },
    indications: [
      "Súlyos kórházi fertőzések",
      "Nosocomialis pneumonia",
      "Szövődményes intraabdominalis fertőzések",
      "Neutropéniás láz empirikus kezelése"
    ],
    notes: "Új generációs fegyver a Gram-negatív rezisztencia ellen."
  },
  {
    id: "cefepime_enmetazobactam",
    name: "Cefepim / enmetazobaktam",
    abbreviation: "FEP-ANM",
    brandNames: "Exblifep",
    group: "4. generációs Cephalosporin és béta-laktamáz inhibitor kombinációk",
    halfLife: "kb. 2-2.5 óra",
    pae: "Kifejezett Gram-negatívaknál",
    effectType: "bactericid",
    dosage: {
      adult: "3x 2 g / 0.5 g i.v. naponta (4 órás nyújtott infúzióban)",
      pediatric: "Biztonságossága gyermekeknél még korlátozottan bizonyított",
      renalAdjustment: "GFR < 60 ml/perc esetén szigorú adagmódosítás szükséges"
    },
    mechanismOfAction: "Baktericid. Az enmetazobaktam egy új béta-laktamáz gátló, amely kifejezetten az ESBL (Class A) enzimeket gátolja, megvédve a cefepimet, amely önmagában is ellenáll az AmpC enzimeknek.",
    sideEffects: [
      "Fejfájás",
      "Veseelégtelenség/transzamináz emelkedés",
      "Neurotoxicitás",
      "Hasmenés"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 2,
      anaerobe: 1,
      atypical: 0,
      pseudomonas: 2,
      other: "Rendkívül hatékony ESBL-termelő Enterobacterales ellen. Kíméli a carbapenemeket!"
    },
    indications: [
      "Szövődményes húgyúti fertőzések, beleértve a pyelonephritist",
      "HAP/VAP és szövődményes intraabdominalis fertőzések (kombinációban)"
    ],
    notes: "Kifejezetten a carbapenem-takarékossági stratégiák (carbapenem-sparing) fontos eszköze az ESBL-pozitív fertőzések kezelésében."
  },
  {
    id: "ceftaroline_avibactam",
    name: "Ceftarolin foszamil / avibaktam",
    abbreviation: "CPT-AVI",
    brandNames: "Zinforo kombináció (speciális fejlesztés)",
    group: "5. generációs Cephalosporin és béta-laktamáz inhibitor kombinációk",
    halfLife: "2.5 - 3 óra",
    pae: "Gram-pozitívaknál és negatívaknál is kifejezett",
    effectType: "bactericid",
    dosage: {
      adult: "2x 600 mg / 150 mg i.v. naponta",
      pediatric: "Gyermekgyógyászati adatok még nem állnak rendelkezésre",
      renalAdjustment: "GFR < 50 ml/perc: dóziscsökkentés szükséges"
    },
    mechanismOfAction: "Baktericid. A ceftarolin az egyetlen cephalosporin, amely kötődik a PBP-2a-hoz (MRSA), míg az avibaktam egy kiterjesztett hatású béta-laktamáz inhibitor (Class A, C, és egyes D/OXA-48 enzimek).",
    sideEffects: [
      "Coombs-teszt pozitivitás",
      "Bőrkiütés, láz",
      "Hasmenés"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 2,
      anaerobe: 1,
      atypical: 0,
      pseudomonas: 0,
      other: "Az egyetlen olyan kombináció, amely egyszerre hatékony MRSA és ESBL/AmpC-termelő Gram-negatívok ellen!"
    },
    indications: [
      "Multirezisztens (MDR) Gram-negatív és MRSA által okozott kevert fertőzések",
      "Szövődményes bőr- és lágyrészfertőzések",
      "Kórházi pneumonia"
    ],
    notes: "Klinikai fejlesztés alatt álló vagy speciális indikációban alkalmazott kiemelkedő spektrumú kombináció."
  },
  {
    id: "ceftazidime_avibactam",
    name: "Ceftazidim / avibaktam",
    abbreviation: "CZA",
    brandNames: "Zavicefta",
    group: "3. generációs Cephalosporin és béta-laktamáz inhibitor kombinációk",
    halfLife: "2 óra",
    pae: "Gram-negatívaknál mérsékelt",
    effectType: "bactericid",
    dosage: {
      adult: "3x 2 g / 0.5 g i.v. naponta, 2 órás infúzióban",
      pediatric: "3 hónapos kor felett alkalmazható testtömegre számolva",
      renalAdjustment: "GFR < 50 ml/perc: szigorú dóziscsökkentés szükséges!"
    },
    mechanismOfAction: "Baktericid. Az avibaktam egy nem béta-laktám szerkezetű inhibitor, amely gátolja az Ambler Class A (ESBL, KPC), Class C (AmpC) és Class D (OXA-48) enzimeket, de a Class B-t (NDM, VIM, IMP) NEM!",
    sideEffects: [
      "Közvetlen Coombs-teszt szerokonverzió",
      "Májenzim-emelkedés",
      "Hányinger, hasmenés",
      "Görcsrohamok"
    ],
    spectrum: {
      gramPositive: 0,
      gramNegative: 2,
      anaerobe: 1,
      atypical: 0,
      pseudomonas: 2,
      other: "Kifejezetten a carbapenem-rezisztens Enterobacterales (KPC, OXA-48 termelők) és multirezisztens Pseudomonas ellen kifejlesztett 'szuperfegyver'."
    },
    indications: [
      "Szövődményes intraabdominalis fertőzések (metronidazollal kombinálva)",
      "Szövődményes húgyúti fertőzések",
      "Nosocomialis pneumonia (HAP/VAP)",
      "Aerob Gram-negatív fertőzések korlátozott kezelési opciók esetén"
    ],
    notes: "Kizárólag intézeti, szigorúan ellenőrzött körülmények között adható carbapenem-rezisztens fertőzésekben."
  },
  {
    id: "biapenem",
    name: "Biapenem",
    abbreviation: "BPR",
    brandNames: "Omegacin",
    group: "Carbapenemek",
    halfLife: "1 óra",
    pae: "Gram-negatívaknál kifejezett",
    effectType: "bactericid",
    dosage: {
      adult: "2x 300 mg - 600 mg i.v. naponta 30-60 perces infúzióban",
      pediatric: "30-60 mg/ttkg/nap i.v. 3 részre osztva",
      renalAdjustment: "GFR < 50 ml/perc: dóziscsökkentés javasolt"
    },
    mechanismOfAction: "Baktericid. Nagyon széles spektrumú carbapenem. Kiemelkedő stabilitást mutat az emberi vese dehidropeptidáz-I (DHP-I) enzimével szemben, így nem igényel cilasztatin védelmet.",
    sideEffects: [
      "Gastrointestinalis panaszok",
      "Májfunkciós értékek emelkedése",
      "Alacsony görcshajlam (neurotoxicitás)"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 2,
      anaerobe: 2,
      atypical: 0,
      pseudomonas: 2,
      other: "Rendkívül széles spektrum, beleértve az ESBL, AmpC termelőket és Pseudomonas aeruginosát."
    },
    indications: [
      "Szövődményes húgyúti, intraabdominalis és légúti fertőzések",
      "Sepsis",
      "Bőr- és lágyrészfertőzések"
    ],
    notes: "Elsősorban Japánban és néhány ázsiai országban engedélyezett és használt carbapenem."
  },
  {
    id: "ceftolozane_tazobactam",
    name: "Ceftolozan / tazobaktam",
    abbreviation: "C/T",
    brandNames: "Zerbaxa",
    group: "5. generációs Cephalosporin és béta-laktamáz inhibitor kombinációk",
    halfLife: "2.5 - 3 óra (ceftolozan), 1 óra (tazobaktam)",
    pae: "Gram-negatívaknál kifejezett",
    effectType: "bactericid",
    dosage: {
      adult: "3x 1.5 g (1g ceftolozan + 0.5g tazobaktam) i.v. naponta 1 órás infúzióban; HAP/VAP esetén 3x 3 g i.v.",
      pediatric: "Gyermekgyógyászati adagolás korlátozottan meghatározott",
      renalAdjustment: "GFR < 50 ml/perc: szigorú dóziscsökkentés szükséges!"
    },
    mechanismOfAction: "Baktericid. A ceftolozan egy új cephalosporin, amelyet kifejezetten a Pseudomonas aeruginosa ellen optimalizáltak, a tazobaktam pedig védi az ESBL enzimektől.",
    sideEffects: [
      "Hányinger, hasmenés",
      "Fejfájás",
      "Coombs-teszt pozitivitás",
      "Hypokalaemia"
    ],
    spectrum: {
      gramPositive: 1,
      gramNegative: 2,
      anaerobe: 1,
      atypical: 0,
      pseudomonas: 2,
      other: "A jelenleg elérhető leghatékonyabb béta-laktám monoterápiás/kombinációs partner a multirezisztens Pseudomonas aeruginosa ellen!"
    },
    indications: [
      "Szövődményes intraabdominalis fertőzések (Metronidazollal kombinálva)",
      "Szövődményes húgyúti fertőzések (pyelonephritis is)",
      "Nosocomialis pneumonia (HAP/VAP)"
    ],
    notes: "Különösen értékes fegyver a multirezisztens (MDR) Pseudomonas okozta tüdőgyulladások és uroszepszis kezelésében."
  },
  {
    id: "erythromycin",
    name: "Erythromycin",
    abbreviation: "ERY",
    brandNames: "Erythromycin-Richter, Erythrocin",
    group: "Makrolidok",
    halfLife: "1.5 - 2 óra",
    pae: "Gram-pozitívaknál kifejezett (2-4 óra)",
    effectType: "bacteriostaticus",
    dosage: {
      adult: "4x 250 mg - 500 mg p.o. vagy 2-4x 500 mg - 1000 mg i.v. naponta",
      pediatric: "30-50 mg/ttkg/nap p.o. vagy i.v. 4 részre osztva",
      renalAdjustment: "Nem igényel adagmódosítást veseelégtelenségben"
    },
    mechanismOfAction: "Bakteriosztatikus. Reverzibilisen kötődik a bakteriális 50S riboszóma-alegység 23S RNS-éhez, gátolva a transzlokációt a fehérjeszintézis során.",
    sideEffects: [
      "Gastrointestinalis panaszok (nagyon gyakori, motilin-receptor stimuláció miatt hasi görcsök)",
      "QT-szakasz megnyúlása (torsades de pointes kamrai tachycardia veszélye)",
      "Hepatotoxicitás (kolesztatikus hepatitis, különösen az esztolát sóval)",
      "Erős CYP3A4 enzim-gátlás (számos gyógyszerinterakció)"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 1,
      anaerobe: 1,
      atypical: 2,
      pseudomonas: 0,
      other: "Kiváló hatás atípusos kórokozókra (Mycoplasma, Chlamydia, Legionella) és Bordetella pertussisra."
    },
    indications: [
      "Atípusos pneumonia",
      "Bordetella pertussis (szamárköhögés) kezelése és expozíció utáni profilaxisa",
      "Diphtheria hordozó állapot felszámolása",
      "Penicillin-allergiás betegek alternatív szere Streptococcus fertőzésekben",
      "Gasztroparezis (prokinetikus hatás miatt, nem-infektív indikációban)"
    ],
    notes: "A makrolidok prototípusa. Ma már ritkábban használják szisztémás fertőzésekre a kifejezett gastrointestinalis mellékhatások és a napi négyszeri adagolás miatt, de prokinetikumként hasznos."
  },
  {
    id: "roxithromycin",
    name: "Roxithromycin",
    abbreviation: "ROX",
    brandNames: "Rulid",
    group: "Makrolidok",
    halfLife: "10 - 12 óra",
    pae: "Kifejezett Gram-pozitívaknál",
    effectType: "bacteriostaticus",
    dosage: {
      adult: "2x 150 mg p.o. naponta vagy 1x 300 mg p.o. naponta (étkezés előtt)",
      pediatric: "5-8 mg/ttkg/nap p.o. két részre osztva",
      renalAdjustment: "Súlyos veseelégtelenségben az adag felezése javasolt (max. 150 mg naponta)"
    },
    mechanismOfAction: "Bakteriosztatikus makrolid. Kötődik az 50S riboszóma-alegységhez, gátolva a fehérjeszintézist.",
    sideEffects: [
      "Enyhe gastrointestinalis tünetek (sokkal ritkább, mint az erythromycinnél)",
      "QT-megnyúlás",
      "Allergiás bőrreakciók",
      "Májenzim-szintek mérsékelt emelkedése"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 1,
      anaerobe: 1,
      atypical: 2,
      pseudomonas: 0,
      other: "Hasonló az erythromycinhez, de jobb szöveti penetrációt és hosszabb felezési időt mutat."
    },
    indications: [
      "Enyhe-középsúlyos légúti fertőzések (tonsillitis, pharyngitis, pneumonia, bronchitis)",
      "Bőr- és lágyrészfertőzések",
      "Nemgonococcális urethritis és nőgyógyászati fertőzések (Chlamydia)"
    ],
    notes: "Félszintetikus makrolid, amely savstabilabb, mint az erythromycin, jobb a felszívódása, és lényegesen kevesebb emésztőrendszeri mellékhatást okoz."
  },
  {
    id: "spiramycin",
    name: "Spiramycin",
    abbreviation: "SP",
    brandNames: "Rovamycine",
    group: "Makrolidok",
    halfLife: "5 - 8 óra (de a szövetekben rendkívül hosszan felhalmozódik)",
    pae: "Kifejezett",
    effectType: "bacteriostaticus",
    dosage: {
      adult: "2-3x 3.000.000 NE (Nemzetközi Egység) p.o. naponta (2-3 g/nap)",
      pediatric: "150.000 - 300.000 NE/ttkg/nap p.o. 2-3 részre osztva",
      renalAdjustment: "Nem igényel adagmódosítást veseelégtelenségben"
    },
    mechanismOfAction: "Bakteriosztatikus makrolid antibiotikum. Gátolja a bakteriális fehérjeszintézist az 50S riboszóma alegységhez kötődve.",
    sideEffects: [
      "Hányinger, hányás, hasmenés",
      "Paresthesia (zsibbadás - átmeneti)",
      "Allergiás bőrkiütések",
      "Ritkán QT-megnyúlás"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 1,
      anaerobe: 1,
      atypical: 2,
      pseudomonas: 0,
      other: "Különösen erős hatása van Toxoplasma gondii ellen."
    },
    indications: [
      "Terhességi toxoplasmosis kezelése (megakadályozza a transzplacentáris transzmissziót a magzatra!)",
      "Fogászati és szájsebészeti fertőzések (gyakran metronidazollal kombinálva)",
      "Légúti fertőzések (tonsillitis, otitis media, pneumonia)"
    ],
    notes: "A Spiramycin különösen fontos a terhes anyák Toxoplasma fertőzésének megelőzésében, mivel nem teratogén, de jól gátolja a parazita placentán való átjutását."
  },
  {
    id: "fidaxomicin",
    name: "Fidaxomicin",
    abbreviation: "FDX",
    brandNames: "Dificlir",
    group: "Egyéb antibiotikumok (Makrociklusos szerek)",
    halfLife: "kb. 1-2 óra (helyileg hat a bélben, szinte egyáltalán nem szívódik fel)",
    pae: "Rendkívül kifejezett (akár 24-48 óra Clostridioides ellen)",
    effectType: "bactericid",
    dosage: {
      adult: "2x 200 mg p.o. naponta 10 napig (étkezéstől függetlenül)",
      pediatric: "Hatásossága gyermekeknél korlátozottan igazolt, de testtömeg-alapú adagolás létezik",
      renalAdjustment: "Nem igényel adagmódosítást (minimális szisztémás abszorpció miatt)"
    },
    mechanismOfAction: "Baktericid. Szelektíven gátolja a bakteriális RNS-polimerázt a transzkripció megkezdése előtt, egyedi helyen hatva. Kiváló szelektivitással rendelkezik Clostridioides difficile ellen.",
    sideEffects: [
      "Hányinger, székrekedés, puffadás",
      "Nagyon ritkán gastrointestinalis vérzés",
      "Enyhe túlérzékenységi reakciók"
    ],
    spectrum: {
      gramPositive: 1,
      gramNegative: 0,
      anaerobe: 1,
      atypical: 0,
      pseudomonas: 0,
      other: "Rendkívül szűk spektrumú, kíméli a normál bélflórát (bakteroidokat), ami drasztikusan csökkenti a C. difficile visszatérésének (recidíva) kockázatát!"
    },
    indications: [
      "Clostridioides difficile okozta hasmenés (CDI) felnőtteknél (elsővonalbeli szer, különösen visszatérő vagy nagy kockázatú esetekben)"
    ],
    notes: "Modern, prémium kategóriájú célzott antibiotikum. Bár drágább, mint a Vancomycin, a kiújulási ráta lényegesen kisebb a használatával, mivel megkíméli a jótékony anaerob bélflórát."
  },
  {
    id: "teicoplanin",
    name: "Teicoplanin",
    abbreviation: "TEC",
    brandNames: "Targocid",
    group: "Glikopeptidek",
    halfLife: "100 - 150 óra (rendkívül hosszú!)",
    pae: "Gram-pozitívaknál kifejezett (2-4 óra)",
    effectType: "bactericid",
    dosage: {
      adult: "Telítő dózis: 3-5x 400 mg i.v. vagy i.m. 12 óránként, majd fenntartó adagként 1x 400 mg (vagy 6-12 mg/ttkg) naponta",
      pediatric: "10-12 mg/ttkg 12 óránként 3 alkalommal (telítés), majd napi 1x 10 mg/ttkg",
      renalAdjustment: "GFR < 80 ml/perc: fenntartó adag csökkentése vagy az adagolási időköz megnyújtása szükséges (pl. 2-3 naponta egyszer)"
    },
    mechanismOfAction: "Baktericid (lassú). Gátolja a bakteriális sejtfal peptidoglikán szintézisét azáltal, hogy nagy affinitással kötődik a peptid-prekurzorok D-alanil-D-alanin láncvégéhez, így megakadályozza a transzglikozilációt és transzpeptidációt.",
    sideEffects: [
      "Lokális fájdalom az injekció helyén",
      "Allergiás bőrreakciók (kiütés, láz - ritka)",
      "Ototoxicitás és nephrotoxicitás (lényegesen ritkább és enyhébb, mint a vancomycinnél)",
      "Thrombocytopenia, leukopenia (hosszú távú kezelésnél)"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 0,
      anaerobe: 1,
      atypical: 0,
      pseudomonas: 0,
      other: "Kiváló Gram-pozitív hatás, beleértve az MRSA, MRSE és Enterococcus faecalis törzseket is. VanA-típusú VRE rezisztens rá!"
    },
    indications: [
      "Súlyos MRSA vagy MRSE okozta fertőzések (sepsis, osteomyelitis, endocarditis)",
      "Bőr- és lágyrészfertőzések",
      "Peritoneális dialízissel összefüggő peritonitis",
      "Pseudomembranosus colitis (Clostridioides difficile) szájon át adagolva (nem szívódik fel)"
    ],
    notes: "A teicoplanin nagy előnye a vancomycinnel szemben a napi egyszeri adagolás (telítés után), az intramuszkuláris adhatóság, és az, hogy nem okoz 'Red Man' szindrómát."
  },
  {
    id: "imipenem_cilastatin",
    name: "Imipenem / cilastatin",
    abbreviation: "IPM",
    brandNames: "Tienam, Imipenem/Cilastatin Kabi",
    group: "Carbapenemek",
    halfLife: "kb. 1 óra",
    pae: "Gram-negatívaknál kifejezett (1-2 óra)",
    effectType: "bactericid",
    dosage: {
      adult: "3-4x 500 mg / 500 mg i.v. naponta lassú infúzióban (súlyos esetben max. 4 g/nap)",
      pediatric: "15-25 mg/ttkg 6 óránként i.v.",
      renalAdjustment: "Szigorú dózismódosítás szükséges a vesefunkció függvényében a neurotoxicitás elkerülésére!"
    },
    mechanismOfAction: "Baktericid. Gátolja a sejtfalszintézist a PBP-khez (különösen PBP-1a, PBP-1b, PBP-2, PBP-4) kötődve. A cilasztatin egy vese dehidropeptidáz-I (DHP-I) inhibitor, amely megvédi az imipenemet a vesében történő degradációtól és csökkenti a nephrotoxicitást.",
    sideEffects: [
      "Görcsrohamok (magas görcshajlam - neurotoxicitás, különösen veseelégtelenségben vagy meglévő KIR betegségben!)",
      "Hányinger, hányás (különösen gyors i.v. beadás esetén)",
      "Túlérzékenységi reakciók (bőrkiütés, láz)",
      "Pseudomembranosus colitis"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 2,
      anaerobe: 2,
      atypical: 0,
      pseudomonas: 2,
      other: "Rendkívül stabil a legtöbb béta-laktamázzal, köztük az ESBL és AmpC enzimekkel szemben. MRSA és Carbapenemáz-termelők ellen hatástalan."
    },
    indications: [
      "Súlyos, kevert nosocomialis fertőzések (intraabdominalis, medencei, tüdőgyulladás)",
      "Sepsis és neutropéniás láz empirikus kezelése",
      "Multirezisztens Gram-negatív fertőzések (pl. ESBL)"
    ],
    notes: "A carbapenemek közül az imipenem rendelkezik a legnagyobb görcskeltő potenciállal (neurotoxicitás), ezért epilepsziás vagy veseelégtelen betegeknél óvatosan alkalmazandó, meropenem preferálható helyette."
  },
  {
    id: "imipenem_cilastatin_relebactam",
    name: "Imipenem / cilastatin / relebaktam",
    abbreviation: "IPM-REL",
    brandNames: "Recarbrio",
    group: "Carbapenem és béta-laktamáz inhibitor kombinációk",
    halfLife: "kb. 1-1.2 óra",
    pae: "Gram-negatívaknál kifejezett (2 óra felett)",
    effectType: "bactericid",
    dosage: {
      adult: "4x 500 mg / 500 mg / 250 mg i.v. naponta 30 perces infúzióban",
      pediatric: "Biztonságossága és hatásossága gyermekeknél még nem teljesen megalapozott",
      renalAdjustment: "Szigorú dózismódosítás szükséges a veseelégtelenség mértéke alapján (GFR < 90 ml/perc esetén már csökken az adag!)"
    },
    mechanismOfAction: "Baktericid. Az imipenem/cilasztatin gátolja a sejtfalszintézist, míg a relebaktam egy új, nem-béta-laktám szerkezetű (diazabiciklooktán) béta-laktamáz inhibitor, amely hatékonyan gátolja az Ambler Class A (KPC) és Class C (AmpC) enzimeket, visszaállítva az imipenem hatását a rezisztens törzsek ellen.",
    sideEffects: [
      "Hányinger, hasmenés, fejfájás",
      "Májenzim-transzaminázok emelkedése",
      "Neurotoxicitás (görcsrohamok - imipenem komponens miatt)",
      "Injekció helyén fellépő reakciók"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 2,
      anaerobe: 2,
      atypical: 0,
      pseudomonas: 2,
      other: "Rendkívül hatékony a KPC-termelő és AmpC-t túltermelő Enterobacterales és Pseudomonas aeruginosa törzsek ellen! Class B (metallo-béta-laktamázok) és Class D (OXA-48) ellen hatástalan."
    },
    indications: [
      "Szövődményes húgyúti fertőzések (beleértve a pyelonephritist)",
      "Szövődményes intraabdominalis fertőzések",
      "Nosocomialis és lélegeztetőgéppel összefüggő pneumonia (HAP/VAP)",
      "Kevés kezelési lehetőséggel rendelkező betegek Gram-negatív fertőzései"
    ],
    notes: "Modern rezerv gyógyszer. A relebaktam hozzáadása megvédi az imipenemet a KPC carbapenemázoktól, így kiváló alternatívája a Ceftazidim/Avibaktamnak."
  },
  {
    id: "meropenem_vaborbactam",
    name: "Meropenem / vaborbaktam",
    abbreviation: "MER-VAB",
    brandNames: "Vabomere",
    group: "Carbapenem és béta-laktamáz inhibitor kombinációk",
    halfLife: "kb. 1-1.5 óra",
    pae: "Kifejezett Gram-negatívaknál",
    effectType: "bactericid",
    dosage: {
      adult: "3x 2 g / 2 g (összesen 4 g) i.v. naponta 3 órás nyújtott infúzióban",
      pediatric: "Biztonságossága 18 év alatti gyermekeknél nem bizonyított",
      renalAdjustment: "Szigorú dóziscsökkentés szükséges GFR < 40 ml/perc esetén!"
    },
    mechanismOfAction: "Baktericid. A meropenem gátolja a bakteriális sejtfalszintézist, a vaborbaktam egy új, boronsav-alapú béta-laktamáz gátló, amely kifejezetten a Class A és Class C carbapenemázokat (különösen a KPC-t) gátolja nagy affinitással.",
    sideEffects: [
      "Fejfájás",
      "Hasmenés, hányinger",
      "Infúziós helyi reakciók (thrombophlebitis)",
      "Átmeneti transzamináz emelkedés",
      "Hypokalaemia"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 2,
      anaerobe: 2,
      atypical: 0,
      pseudomonas: 2,
      other: "Rendkívül hatékony a Klebsiella pneumoniae carbapenemase (KPC) termelő Enterobacterales törzsek ellen! Metallo-béta-laktamázok (NDM, VIM - Class B) és OXA-48 (Class D) ellen hatástalan!"
    },
    indications: [
      "Szövődményes húgyúti fertőzések, beleértve a pyelonephritist",
      "Szövődményes intraabdominalis fertőzések",
      "HAP/VAP (kórházi tüdőgyulladás)",
      "Bakterémia és szepszis, ha KPC-termelő Enterobacterales igazolódott"
    ],
    notes: "A KPC-termelő Klebsiella fertőzések egyik leghatékonyabb, célzott klinikai fegyvere, amely jelentősen javította a túlélést a korábbi toxikus Colistin-alapú terápiákhoz képest."
  },
  {
    id: "telithromycin",
    name: "Telithromycin",
    abbreviation: "TEL",
    brandNames: "Ketek",
    group: "Ketolidok (makrolid származékok)",
    halfLife: "10 óra",
    pae: "Gram-pozitívaknál kifejezett (3-5 óra)",
    effectType: "bacteriostaticus",
    dosage: {
      adult: "1x 800 mg p.o. naponta (étkezéstől függetlenül)",
      pediatric: "Alkalmazása gyermekeknél és serdülőknél nem javasolt",
      renalAdjustment: "Súlyos veseelégtelenségben (GFR < 30 ml/perc) az adagot 400 mg-ra kell csökkenteni"
    },
    mechanismOfAction: "Bakteriosztatikus. A makrolidokból kifejlesztett ketolid. Két különböző helyen kötődik az 50S riboszóma alegységhez (23S és 9S RNS), így tízszer erősebb a kötődése, és hatásos marad a makrolid-rezisztens (erm vagy mef génnel rendelkező) Streptococcus pneumoniae törzsek ellen is.",
    sideEffects: [
      "Súlyos hepatotoxicitás (akut májelégtelenség veszélye - fekete dobozos figyelmeztetés!)",
      "Látászavarok (homályos látás, fókuszálási nehézség - gátolja a ciliáris ganglion nikotinos acetilkolin receptorait)",
      "Myasthenia gravis súlyosbodása (életveszélyes légzésbénulást okozhat - szigorúan kontraindikált!)",
      "QT-megnyúlás"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 1,
      anaerobe: 1,
      atypical: 2,
      pseudomonas: 0,
      other: "Kimondottan a penicillin- és makrolid-rezisztens légúti kórokozók ellen tervezték."
    },
    indications: [
      "Közösségben szerzett pneumonia (CAP) - kizárólag ha más, biztonságosabb antibiotikum nem alkalmazható",
      "Krónikus bronchitis akut exacerbációja, sinusitis (szigorúan korlátozott indikációban)"
    ],
    notes: "Súlyos és kiszámíthatatlan májtoxicitása és a Myasthenia gravisos betegeknél okozott halálos kimenetelű légzésbénulások miatt alkalmazása világszerte rendkívül visszaszorult, szigorúan másodvonalbeli tartalék."
  },
  {
    id: "tigecycline",
    name: "Tigecycline",
    abbreviation: "TGC",
    brandNames: "Tygacil, Tigecycline Kabi",
    group: "Glicilciklinek (tetraciklin származékok)",
    halfLife: "37 - 42 óra (rendkívül hosszú!)",
    pae: "Kifejezett (3-4 óra)",
    effectType: "bacteriostaticus",
    dosage: {
      adult: "Kezdő (telítő) dózis: 100 mg i.v., majd 12 óránként 50 mg i.v. lassú infúzióban (legalább 30-60 perc)",
      pediatric: "8-12 év között: 1.2 mg/ttkg 12 óránként i.v. (max 50 mg adag), 12 év felett felnőtt adag",
      renalAdjustment: "Nem igényel módosítást veseelégtelenségben. Súlyos májelégtelenségben (Child-Pugh C) a fenntartó adagot napi 25 mg-ra kell csökkenteni!"
    },
    mechanismOfAction: "Bakteriosztatikus. A minociklinből származtatott glicilciklin. Kötődik a 30S riboszóma alegységhez, gátolva az aminoacil-tRNS beépülését az A-helyre. A molekulához adott t-butilglíciamido oldallánc miatt a tigeciklin elkerüli a tetraciklin-specifikus efflux pumpákat és a riboszómavédő fehérjék (tetM) miatti rezisztenciát.",
    sideEffects: [
      "Hányinger és hányás (nagyon gyakori, a betegek akár 30-40%-ánál, különösen a kezelés elején)",
      "Fokozott mortalitás (metanalízisek alapján a tigeciklinnel kezelteknél magasabb az összhalálozás, mint az összehasonlító szereknél - csak indokolt esetben adható!)",
      "Amiláz- és lipázszint emelkedése, pancreatitis veszélye",
      "Fogelszíneződés gyermekeknél (tetraciklin hatás)",
      "Fényérzékenység"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 2,
      anaerobe: 2,
      atypical: 2,
      pseudomonas: 0,
      other: "Rendkívül kiterjedt szöveti eloszlás jellemzi, emiatt a szérumkoncentrációja alacsony! Sepsisben/bakterémiában önmagában nem hatékony!"
    },
    indications: [
      "Szövődményes bőr- és lágyrészfertőzések (MRSA és kevert flóra esetén)",
      "Szövődményes intraabdominalis fertőzések",
      "Multirezisztens Acinetobacter baumannii fertőzések kombinációs tagjaként"
    ],
    notes: "A tigeciklin 'mindent visz' a Pseudomonas, a Proteus és a Providencia kivételével, de rendkívül nagy szöveti eloszlása miatt nem marad a véráramban, így szepszis kezelésére monoterápiában nem alkalmas."
  },
  {
    id: "eravacycline",
    name: "Eravacycline",
    abbreviation: "ERV",
    brandNames: "Xerava",
    group: "Fluorociklinek (tetraciklin származékok)",
    halfLife: "kb. 20 óra",
    pae: "Gram-negatívaknál kifejezett",
    effectType: "bacteriostaticus",
    dosage: {
      adult: "1 mg/ttkg i.v. 12 óránként infúzióban, 7-14 napig",
      pediatric: "18 év alatti gyermekeknél biztonságossága nem igazolt",
      renalAdjustment: "Nem igényel adagmódosítást veseelégtelenségben. Súlyos májelégtelenségben adagmódosítás vagy fokozott óvatosság indokolt."
    },
    mechanismOfAction: "Bakteriosztatikus. Teljesen szintetikus fluorociklin (tetraciklin-osztály). Kötődik a 30S riboszóma alegységhez, gátolva a fehérjeszintézist. A fluoridatom és a pirrolidin gyűrű jelenléte miatt ellenáll a leggyakoribb tetraciklin-rezisztencia mechanizmusoknak (efflux pumpák és riboszomális védőfehérjék).",
    sideEffects: [
      "Hányinger, hányás (lényegesen enyhébb, mint a tigeciklinnél!)",
      "Infúziós helyi reakciók (phlebitis)",
      "Transzamináz-emelkedés",
      "Fogelszíneződés (gyermekeknél)"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 2,
      anaerobe: 2,
      atypical: 2,
      pseudomonas: 0,
      other: "Hasonló spektrumú, mint a tigeciklin, de jobb in vitro hatékonysággal és kedvezőbb mellékhatás-profillal rendelkezik."
    },
    indications: [
      "Szövődményes intraabdominalis fertőzések felnőtteknél (főleg ha multirezisztens kórokozók gyanúja áll fenn)"
    ],
    notes: "Egy új generációs tetraciklin származék, amely kiváló in vitro hatást mutat a multirezisztens Acinetobacter baumannii és KPC-termelő Enterobacterales ellen, kevesebb hányingerrel, mint a tigeciklin."
  },
  {
    id: "cefiderocol",
    name: "Cefiderocol",
    abbreviation: "FDC",
    brandNames: "Fetcroja",
    group: "Siderophor Cephalosporinok (5. generációs származék)",
    halfLife: "2 - 2.5 óra",
    pae: "Gram-negatívaknál kifejezett",
    effectType: "bactericid",
    dosage: {
      adult: "3x 2 g i.v. naponta 3 órás nyújtott infúzióban",
      pediatric: "Biztonságossága és adagolása gyermekeknél még nem megalapozott",
      renalAdjustment: "Szigorú adagmódosítás szükséges mind veseelégtelenségben, mind fokozott vesetisztulás (ARC, GFR > 120 ml/perc, ilyenkor napi 4x 2g!) esetén!"
    },
    mechanismOfAction: "Baktericid. Egyedülálló 'Trójai faló' mechanizmus: a cefiderokol egy sziderofor-konjugált cephalosporin, amely aktívan kötődik a bakteriális extracelluláris vashoz. A baktérium saját aktív vastranszport-rendszere (tonB-dependens receptorok) juttatja be a periplazmatikus térbe, ahol kikerüli az efflux pumpákat és a porin-mutációkat, majd gátolja a sejtfalszintézist a PBP-3-hoz kötődve. Rendkívül stabil az összes béta-laktamázzal (köztük a metallo-béta-laktamázokkal!) szemben.",
    sideEffects: [
      "Hasmenés, hányinger",
      "Coombs-teszt pozitivitás",
      "Májfunkciós értékek emelkedése",
      "Hypokalaemia",
      "Ritkán neurotoxicitás (görcsök - magas dózisnál)"
    ],
    spectrum: {
      gramPositive: 0,
      gramNegative: 2,
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 2,
      other: "Kizárólag multirezisztens (MDR) és pánrezisztens (PDR) Gram-negatív baktériumok elleni végső fegyver."
    },
    indications: [
      "Súlyos aerob Gram-negatív fertőzések felnőtteknél, korlátozott kezelési lehetőségek esetén",
      "Kórházi és lélegeztetőgéppel összefüggő tüdőgyulladás (HAP/VAP)",
      "Szövődményes húgyúti fertőzések és uroszepszis multirezisztens Gram-negatív kórokozókkal (pl. NDM-termelő Klebsiella vagy Pseudomonas)"
    ],
    notes: "A jelenlegi klinikai orvoslás egyik legnagyobb áttörése a multirezisztens Gram-negatív fertőzések kezelésében, az egyetlen béta-laktám, amely megbízhatóan hat a metallo-béta-laktamázokat (pl. NDM-1) hordozó 'szuperbaktériumok' ellen is."
  }
];

