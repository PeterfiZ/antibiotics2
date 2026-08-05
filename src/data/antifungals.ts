/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface AntifungalData {
  id: string;
  name: string;
  group: { hu: string; en: string; de: string };
  halfLife: { hu: string; en: string; de: string };
  effectType: { hu: string; en: string; de: string };
  pae: { hu: string; en: string; de: string };
  spectrum: { hu: string; en: string; de: string };
  specialFeature: { hu: string; en: string; de: string };
  mechanismOfAction: { hu: string; en: string; de: string };
  dosage: {
    adult: { hu: string; en: string; de: string };
    pediatric: { hu: string; en: string; de: string };
    renal: { hu: string; en: string; de: string };
    hepatic: { hu: string; en: string; de: string };
  };
  indications: { hu: string[]; en: string[]; de: string[] };
  sideEffects: { hu: string[]; en: string[]; de: string[] };
  practicalTips: { hu: string[]; en: string[]; de: string[] };
}

export const antifungalsData: AntifungalData[] = [
  {
    id: 'fluconazole',
    name: 'Fluconazol',
    group: {
      hu: 'Azolok (Első generációs triazol)',
      en: 'Azoles (First-generation triazole)',
      de: 'Azole (Triazol der ersten Generation)'
    },
    halfLife: {
      hu: 'kb. 30 óra (hosszú, napi egyszeri adagolás elegendő)',
      en: 'approx. 30 hours (long, supports once-daily dosing)',
      de: 'ca. 30 Stunden (lang, ermöglicht einmal tägliche Gabe)'
    },
    effectType: {
      hu: 'Fungisztatikus (Candida és Cryptococcus fajok ellen)',
      en: 'Fungistatic (against Candida and Cryptococcus species)',
      de: 'Fungistatisch (gegen Candida- und Kryptokokken-Spezies)'
    },
    pae: {
      hu: 'Kifejezett és tartós (különösen Candida fajok esetén)',
      en: 'Pronounced and prolonged (especially against Candida species)',
      de: 'Ausgeprägt und langanhaltend (insbesondere bei Candida-Spezies)'
    },
    spectrum: {
      hu: 'Candida albicans, Candida parapsilosis, Candida tropicalis, Cryptococcus neoformans, Dermatophyták. (Megjegyzés: C. krusei eleve rezisztens, C. glabrata dózisfüggően érzékeny/rezisztens).',
      en: 'Candida albicans, Candida parapsilosis, Candida tropicalis, Cryptococcus neoformans, Dermatophytes. (Note: C. krusei is intrinsically resistant, C. glabrata is dose-dependent susceptible/resistant).',
      de: 'Candida albicans, Candida parapsilosis, Candida tropicalis, Cryptococcus neoformans, Dermatophyten. (Hinweis: C. krusei ist intrinsisch resistent, C. glabrata ist dosisabhängig empfindlich/resistent).'
    },
    specialFeature: {
      hu: 'Kiválóan bejut a liquorba (agy-gerincvelői folyadékba) és a vizeletbe; rendkívül magas (>90%) orális biohasznosulás, amit a gyomorsav nem befolyásol.',
      en: 'Excellent penetration into cerebrospinal fluid (CSF) and urine; exceptionally high (>90%) oral bioavailability, unaffected by gastric pH.',
      de: 'Hervorragende Penetration in Liquor (Gehirn-Rückenmarks-Flüssigkeit) und Urin; extrem hohe (>90%) orale Bioverfügbarkeit, die nicht vom Magen-pH beeinflusst wird.'
    },
    mechanismOfAction: {
      hu: 'A lanoszterol 14-alfa-demetiláz (egy gombás CYP450 enzim) gátlása révén megakadályozza az ergoszterol szintézisét, ami a gomba sejtmembránjának károsodásához és permeabilitás-növekedéséhez vezet.',
      en: 'Inhibits lanosterol 14-alpha-demethylase (a fungal CYP450 enzyme), blocking ergosterol synthesis, which impairs fungal cell membrane integrity and increases permeability.',
      de: 'Hemmt die Lanosterol-14-alpha-Demethylase (ein pilzliches CYP450-Enzym) und blockiert so die Ergosterolsynthese, was zu einer Schädigung der Zellmembran und erhöhter Permeabilität führt.'
    },
    dosage: {
      adult: {
        hu: '200-400 mg naponta p.o. vagy i.v. (az első napon 400-800 mg telítő dózis után). Súlyos fertőzésekben akár 800 mg/nap.',
        en: '200-400 mg daily p.o. or i.v. (after a loading dose of 400-800 mg on day 1). Up to 800 mg/day in severe infections.',
        de: '200-400 mg täglich p.o. oder i.v. (nach einer Sättigungsdosis von 400-800 mg am 1. Tag). Bei schweren Infektionen bis zu 800 mg/Tag.'
      },
      pediatric: {
        hu: '3-12 mg/ttkg naponta egyszer (telítő dózis: 12 mg/ttkg az első napon). Újszülötteknél elhúzódó adagolási időközök szükségesek.',
        en: '3-12 mg/kg once daily (loading dose: 12 mg/kg on day 1). Neonates require prolonged dosing intervals.',
        de: '3-12 mg/kg einmal täglich (Sättigungsdosis: 12 mg/kg am 1. Tag). Neugeborene benötigen verlängerte Dosierungsintervalle.'
      },
      renal: {
        hu: 'GFR < 50 ml/perc esetén (hemodialízis nélkül) a fenntartó adagot 50%-kal csökkenteni kell (a normál telítő dózis után). Dialízis után teljes napi adag adandó.',
        en: 'If GFR < 50 mL/min (without hemodialysis), reduce maintenance dose by 50% (after standard loading dose). Administer a full dose after each dialysis session.',
        de: 'Bei einer GFR < 50 ml/min (ohne Hämodialyse) ist die Erhaltungsdosis um 50 % zu reduzieren (nach normaler Sättigungsdosis). Nach der Dialyse ist eine volle Dosis zu geben.'
      },
      hepatic: {
        hu: 'Nem igényel rutinszerű adagmódosítást, de májenzim-emelkedés vagy sárgaság esetén óvatosság és klinikai/laboratóriumi monitorozás szükséges.',
        en: 'No routine dose adjustment required, but use with caution and perform clinical/laboratory monitoring in case of elevated transaminases or jaundice.',
        de: 'Keine routinemäßige Dosisanpassung erforderlich, aber bei erhöhten Leberenzymen oder Ikterus ist Vorsicht und klinische/laborchemische Überwachung ratsam.'
      }
    },
    indications: {
      hu: [
        'Invazív szisztémás candidiasis (nem neutropéniás betegekben)',
        'Cryptococcus meningitis fenntartó/profilaktikus kezelése',
        'Nyálkahártya-candidiasis (oropharyngealis, oesophagealis és vulvovaginalis candidiasis)',
        'Gomba-profilaxis csontvelő-transzplantált vagy immunszupprimált betegeknél'
      ],
      en: [
        'Invasive systemic candidiasis (in non-neutropenic patients)',
        'Maintenance/prophylactic treatment of Cryptococcal meningitis',
        'Mucosal candidiasis (oropharyngeal, esophageal, and vulvovaginal candidiasis)',
        'Fungal prophylaxis in bone marrow transplant or immunocompromised patients'
      ],
      de: [
        'Invasive systemische Candidose (bei nicht-neutropenischen Patienten)',
        'Erhaltungs- und Prophylaxetherapie der Kryptokokken-Meningitis',
        'Mukokutane Candidose (oropharyngeale, ösophageale und vulvovaginale Candidose)',
        'Pilzprophylaxe bei Knochenmarktransplantationen oder immungeschwächten Patienten'
      ]
    },
    sideEffects: {
      hu: [
        'Gastrointestinalis panaszok (hányinger, hasi fájdalom, hasmenés)',
        'Hepatotoxicitás (májenzimek átmeneti vagy súlyos emelkedése, sárgaság)',
        'QT-intervallum megnyúlása (ritmuszavar-veszély, főleg interakciók esetén)',
        'Fejfájás, bőrkiütések, ritkán alopecia (hosszú távú szedésnél)'
      ],
      en: [
        'Gastrointestinal complaints (nausea, abdominal pain, diarrhea)',
        'Hepatotoxicity (transient or severe elevation of liver enzymes, jaundice)',
        'QT interval prolongation (risk of arrhythmia, especially with drug interactions)',
        'Headache, skin rashes, rarely alopecia (during long-term therapy)'
      ],
      de: [
        'Gastrointestinale Beschwerden (Übelkeit, Bauchschmerzen, Durchfall)',
        'Hepatotoxizität (vorübergehender oder schwerer Anstieg der Leberenzyme, Ikterus)',
        'QT-Intervall-Verlängerung (Arrhythmierisiko, insbesondere bei Wechselwirkungen)',
        'Kopfschmerzen, Hautausschläge, selten Alopezie (bei Langzeittherapie)'
      ]
    },
    practicalTips: {
      hu: [
        'A Candida krusei eleve rezisztens rá, a Candida glabrata pedig gyakran csökkent érzékenységű (dózisfüggő). Ilyenkor váltsunk echinokandinra!',
        'Gyenge CYP3A4 gátló, de erős CYP2C9 és CYP2C19 gátló! Fokozza a warfarin, phenytoin, sulfonylureák és egyes statinok szintjét - ellenőrizzük a gyógyszerinterakciókat!',
        'A vizeletben kiemelkedően magas koncentrációt ér el, így Candida cystitis és húgyúti fertőzések esetén ez az elsőként választandó szer.'
      ],
      en: [
        'Candida krusei is intrinsically resistant, and Candida glabrata often has reduced susceptibility (dose-dependent). Switch to echinocandins in these cases!',
        'Weak CYP3A4 inhibitor, but strong inhibitor of CYP2C9 and CYP2C19! Increases levels of warfarin, phenytoin, sulfonylureas, and certain statins - check interactions!',
        'Achieves outstandingly high concentrations in urine, making it the drug of choice for Candida cystitis and urinary tract infections.'
      ],
      de: [
        'Candida krusei ist intrinsisch resistent, und Candida glabrata hat oft eine reduzierte Empfindlichkeit (dosisabhängig). In diesen Fällen auf Echinocandine wechseln!',
        'Schwacher CYP3A4-Inhibitor, aber starker Inhibitor von CYP2C9 und CYP2C19! Erhöht die Spiegel von Warfarin, Phenytoin, Sulfonylharnstoffen und bestimmten Statinen - Wechselwirkungen prüfen!',
        'Erreicht hervorragende Konzentrationen im Urin, weshalb es das Mittel der Wahl bei Candida-Cystitis und Harnwegsinfektionen ist.'
      ]
    }
  },
  {
    id: 'voriconazole',
    name: 'Voriconazol',
    group: {
      hu: 'Azolok (Második generációs széles spektrumú triazol)',
      en: 'Azoles (Second-generation broad-spectrum triazole)',
      de: 'Azole (Breitspektrum-Triazol der zweiten Generation)'
    },
    halfLife: {
      hu: 'Nem-lineáris farmakokinetika (dózisfüggő), felnőtteknél átlagosan kb. 6 óra.',
      en: 'Non-linear pharmacokinetics (dose-dependent), averages approx. 6 hours in adults.',
      de: 'Nicht-lineare Pharmakokinetik (dosisabhängig), im Durchschnitt ca. 6 Stunden bei Erwachsenen.'
    },
    effectType: {
      hu: 'Fungicid (Aspergillus, Scedosporium és Fusarium ellen); Fungisztatikus (Candida ellen)',
      en: 'Fungicidal (against Aspergillus, Scedosporium, Fusarium); Fungistatic (against Candida)',
      de: 'Fungizid (gegen Aspergillus, Scedosporium, Fusarium); Fungistatisch (gegen Candida)'
    },
    pae: {
      hu: 'Candida esetén rövid, de Aspergillus fajok esetén kifejezett és elhúzódó.',
      en: 'Short for Candida, but highly pronounced and prolonged for Aspergillus species.',
      de: 'Kurz bei Candida, aber sehr ausgeprägt und langanhaltend bei Aspergillus-Spezies.'
    },
    spectrum: {
      hu: 'Aspergillus fajok, Candida fajok (beleértve a Fluconazol-rezisztens C. krusei és C. glabrata törzseket is), Scedosporium, Fusarium, Cryptococcus neoformans. (Mucorales ellen hatástalan!).',
      en: 'Aspergillus species, Candida species (including Fluconazole-resistant C. krusei and C. glabrata), Scedosporium, Fusarium, Cryptococcus neoformans. (No activity against Mucorales!).',
      de: 'Aspergillus-Spezies, Candida-Spezies (einschließlich Fluconazol-resistenter C. krusei und C. glabrata), Scedosporium, Fusarium, Cryptococcus neoformans. (Keine Wirkung gegen Mucorales!).'
    },
    specialFeature: {
      hu: 'Az invazív aspergillosis kezelésének elsővonalbeli "gold standard" szere; átmeneti látászavarokat és hallucinációkat okozhat; kiváló (>95%) oralis felszívódás.',
      en: 'The "gold standard" first-line agent for invasive aspergillosis; can cause transient visual disturbances and hallucinations; excellent (>95%) oral absorption.',
      de: 'Der "Goldstandard" als First-Line-Therapie bei invasiver Aspergillose; kann vorübergehende Sehstörungen und Halluzinationen verursachen; hervorragende (>95%) orale Resorption.'
    },
    mechanismOfAction: {
      hu: 'Szelektíven gátolja a gomba lanoszterol 14-alfa-demetiláz enzimét, blokkolva az ergoszterol szintézisét. Szélesebb spektrumú és erősebb affinitású, mint az első generációs triazolok.',
      en: 'Selectively inhibits fungal lanosterol 14-alpha-demethylase, blocking ergosterol synthesis. It features wider spectrum and stronger affinity than first-generation triazoles.',
      de: 'Hemmt selektiv die pilzliche Lanosterol-14-alpha-Demethylase und blockiert die Ergosterolsynthese. Zeigt ein breiteres Spektrum und eine stärkere Affinität als Triazole der ersten Generation.'
    },
    dosage: {
      adult: {
        hu: 'i.v.: első nap 2x 6 mg/ttkg, majd 2x 4 mg/ttkg/nap fenntartó. p.o.: első nap 2x 400 mg, majd 2x 200 mg/nap fenntartó (étkezéstől függetlenítve).',
        en: 'i.v.: 6 mg/kg q12h on day 1 (loading), then 4 mg/kg q12h maintenance. p.o.: 400 mg q12h on day 1, then 200 mg q12h maintenance (taken on empty stomach).',
        de: 'i.v.: 1. Tag 2x 6 mg/kg (Sättigung), danach 2x 4 mg/kg Erhaltung. p.o.: 1. Tag 2x 400 mg, danach 2x 200 mg Erhaltung (nüchtern einnehmen).'
      },
      pediatric: {
        hu: '2-12 év között és 12-14 év között (<50 kg): i.v. 2x 9 mg/ttkg, p.o. 2x 9 mg/ttkg (maximum 350 mg adagonként). Gyermekekben gyorsabb az elimináció, ezért nagyobb súlyarányos dózisok kellenek.',
        en: 'Ages 2 to 12 & ages 12-14 (<50 kg): i.v. 9 mg/kg q12h, p.o. 9 mg/kg q12h (maximum 350 mg per dose). Children eliminate the drug faster, requiring higher weight-based doses.',
        de: 'Alter 2-12 Jahre & 12-14 Jahre (<50 kg): i.v. 2x 9 mg/kg, p.o. 2x 9 mg/kg (maximal 350 mg pro Dosis). Kinder eliminieren den Wirkstoff schneller, weshalb höhere gewichtsbezogene Dosen nötig sind.'
      },
      renal: {
        hu: 'Orális adagolásnál nincs szükség módosításra. Az i.v. forma hordozóanyaga (SBECD) felhalmozódik veseelégtelenségben: ha GFR < 50 ml/perc, az i.v. adása kerülendő, váltsunk orális terápiára.',
        en: 'Oral dosing: No adjustment required. The IV vehicle (SBECD) accumulates in renal impairment: if GFR < 50 mL/min, avoid IV administration and switch to oral therapy.',
        de: 'Orale Gabe: Keine Anpassung erforderlich. Der Trägerstoff der i.v.-Form (SBECD) akkumuliert bei Niereninsuffizienz: Bei einer GFR < 50 ml/min ist die i.v.-Gabe zu vermeiden; auf orale Gabe umstellen.'
      },
      hepatic: {
        hu: 'Enyhe-középsúlyos májcirrózisban (Child-Pugh A és B) a szokásos telítő dózis adandó, de a fenntartó adagot 50%-kal csökkenteni kell. Súlyos cirrózisban csak előny/kockázat szigorú mérlegelésével.',
        en: 'In mild-to-moderate hepatic cirrhosis (Child-Pugh A & B), administer standard loading doses but reduce maintenance doses by 50%. In severe cirrhosis, use only if benefits outweigh risks.',
        de: 'Bei leichter bis mittelschwerer Leberzirrhose (Child-Pugh A und B) ist die normale Sättigungsdosis zu geben, die Erhaltungsdosis jedoch um 50 % zu reduzieren. Bei schwerer Zirrhose nur nach strenger Nutzen-Risiko-Abwägung.'
      }
    },
    indications: {
      hu: [
        'Invazív aspergillosis szisztémás kezelése (elsővonalbeli választás)',
        'Súlyos invazív Candida fertőzések (főleg Fluconazol-rezisztens esetekben)',
        'Scedosporium és Fusarium fajok okozta súlyos, disszeminált gombás fertőzések',
        'Gomba-profilaxis nagy kockázatú allogén hematológiai transzplantáltaknál'
      ],
      en: [
        'Systemic treatment of invasive aspergillosis (first-line choice)',
        'Severe invasive Candida infections (especially Fluconazole-resistant cases)',
        'Severe, disseminated fungal infections caused by Scedosporium and Fusarium species',
        'Fungal prophylaxis in high-risk allogeneic hematological transplant recipients'
      ],
      de: [
        'Systemische Behandlung der invasiven Aspergillose (Mittel der ersten Wahl)',
        'Schwere invasive Candida-Infektionen (insbesondere bei Fluconazol-Resistenz)',
        'Schwere, disseminierte Pilzinfektionen durch Scedosporium- und Fusarium-Spezies',
        'Pilzprophylaxe bei allogenen hämatologischen Transplantationspatienten mit hohem Risiko'
      ]
    },
    sideEffects: {
      hu: [
        'Átmeneti látászavarok (~30%-ban: homályos látás, megváltozott színérzékelés, fényérzékenység az infúzió után közvetlenül, magától múlik)',
        'Hepatotoxicitás (májenzimek jelentős emelkedése, monitorozás kötelező)',
        'Neurológiai tünetek (hallucinációk, zavartság, fejfájás)',
        'Bőrreakciók (fényérzékenység, fototoxikus dermatitis - hosszas szedésnél bőrrák kockázatot hordoz)',
        'QT-intervallum megnyúlása és fluorosis (hosszú távú kezelésnél csontfájdalmak)'
      ],
      en: [
        'Transient visual disturbances (in ~30%: blurred vision, altered color perception, photophobia immediately after infusion; self-limiting)',
        'Hepatotoxicity (significant liver enzyme elevations, routine monitoring required)',
        'Neurological symptoms (hallucinations, confusion, headache)',
        'Skin reactions (photosensitivity, phototoxic dermatitis - long-term use carries skin cancer risk)',
        'QT interval prolongation and fluorosis (bone pain in very long-term therapies)'
      ],
      de: [
        'Vorübergehende Sehstörungen (bei ~30 %: verschwommenes Sehen, verändertes Farbsehen, Lichtempfindlichkeit direkt nach der Infusion; selbstbegrenzend)',
        'Hepatotoxizität (deutlicher Anstieg der Leberenzyme, regelmäßige Überwachung zwingend erforderlich)',
        'Neurologische Symptome (Halluzinationen, Verwirrtheit, Kopfschmerzen)',
        'Hautreaktionen (Lichtüberempfindlichkeit, fototoxische Dermatitis - birgt bei Langzeitanwendung Hautkrebsrisiko)',
        'QT-Intervall-Verlängerung und Fluorose (Knochenschmerzen bei sehr langer Anwendung)'
      ]
    },
    practicalTips: {
      hu: [
        'Rendkívül fontos a terápiás gyógyszerszint-monitorozás (TDM)! Cél völgykoncentráció: 1.0 - 5.5 mg/l (toxicitás és terápia-hatékonyság optimalizálására).',
        'Nagyon erős CYP3A4 gátló! Rengeteg kontraindikált gyógyszerinterakciója van (pl. rifampicin, carbamazepin, quinidin jelentősen csökkentik a szintjét, míg ő emeli a sirolimus, tacrolimus szintjét).',
        'Az orális tablettát éhgyomorra kell bevenni (étkezés előtt legalább 1 órával vagy utána 1 órával), mert a zsíros ételek jelentősen rontják a felszívódását.'
      ],
      en: [
        'Therapeutic Drug Monitoring (TDM) is highly recommended! Target trough concentration: 1.0 - 5.5 mg/L (to prevent toxicity and ensure efficacy).',
        'Extremely potent CYP3A4 inhibitor! It has numerous contraindicated drug interactions (e.g., rifampicin, carbamazepine, quinidine reduce its levels; voriconazole significantly increases sirolimus and tacrolimus levels).',
        'Take oral tablets on an empty stomach (at least 1 hour before or 1 hour after meals) as high-fat food significantly decreases absorption.'
      ],
      de: [
        'Therapeutisches Drug Monitoring (TDM) dringend empfohlen! Ziel-Talspiegel: 1,0 - 5,5 mg/l (zur Vermeidung von Toxizität und zur Gewährleistung der Wirksamkeit).',
        'Sehr starker CYP3A4-Inhibitor! Weist zahlreiche kontraindizierte Wechselwirkungen auf (z. B. Rifampicin, Carbamazepin, Quinidin senken seinen Spiegel; Voriconazol erhöht Sirolimus- und Tacrolimus-Spiegel drastisch).',
        'Orale Tabletten auf nüchternen Magen einnehmen (mindestens 1 Stunde vor oder 1 Stunde nach dem Essen), da fettreiche Nahrung die Resorption stark vermindert.'
      ]
    }
  },
  {
    id: 'caspofungin',
    name: 'Caspofungin',
    group: {
      hu: 'Echinokandinok (Lipopeptid származék)',
      en: 'Echinocandins (Lipopeptide derivative)',
      de: 'Echinocandine (Lipopeptid-Derivat)'
    },
    halfLife: {
      hu: 'Többfázisú elimináció: béta-fázis kb. 9-11 óra (napi egyszeri i.v. adás), terminális felezési idő ~40-50 óra.',
      en: 'Multiphasic elimination: beta-phase approx. 9-11 hours (supports once-daily i.v. dosing), terminal half-life is ~40-50 hours.',
      de: 'Mehrphasige Elimination: Beta-Phase ca. 9-11 Stunden (ermöglicht einmal tägliche i.v.-Gabe), terminale Halbwertszeit ca. 40-50 Stunden.'
    },
    effectType: {
      hu: 'Fungicid (Candida fajok ellen); Fungisztatikus (Aspergillus ellen)',
      en: 'Fungicidal (against Candida species); Fungistatic (against Aspergillus)',
      de: 'Fungizid (gegen Candida-Spezies); Fungistatisch (gegen Aspergillus)'
    },
    pae: {
      hu: 'Kifejezett és rendkívül tartós mind Candida, mind Aspergillus fajok esetén.',
      en: 'Highly pronounced and prolonged against both Candida and Aspergillus species.',
      de: 'Sehr ausgeprägt und langanhaltend sowohl bei Candida als auch bei Aspergillus.'
    },
    spectrum: {
      hu: 'Candida fajok (beleértve az összes Fluconazol-rezisztens C. glabrata és C. krusei, valamint az MDR C. auris törzset is), Aspergillus fajok. (Cryptococcus neoformans, Mucorales és Fusarium ellen teljesen hatástalan!).',
      en: 'Candida species (including all Fluconazole-resistant C. glabrata and C. krusei, and MDR C. auris strains), Aspergillus species. (Entirely inactive against Cryptococcus, Mucorales, or Fusarium!).',
      de: 'Candida-Spezies (einschließlich aller Fluconazol-resistenter C. glabrata und C. krusei sowie MDR C. auris-Stämme), Aspergillus-Spezies. (Völlig unwirksam gegen Kryptokokken, Mucorales oder Fusarium!).'
    },
    specialFeature: {
      hu: 'Kiváló biztonsági profil humán sejtfal-hiány miatt; minimális gyógyszerinterakció; kizárólag i.v. infúzióban alkalmazható; neutropéniás láz empirikus elsővonalbeli szere.',
      en: 'Excellent safety profile due to absence of cell walls in human cells; minimal drug interactions; strictly intravenous infusion; first-line empirical agent for neutropenic fever.',
      de: 'Hervorragendes Sicherheitsprofil, da menschliche Zellen keine Zellwand besitzen; minimale Wechselwirkungen; nur als i.v. Infusion; First-Line-Mittel bei neutropenischem Fieber.'
    },
    mechanismOfAction: {
      hu: 'Gátolja a béta-(1,3)-D-glükán-szintetáz enzimet, ezáltal szelektíven blokkolja a gomba sejtfalának alapvető szerkezeti elemét képező béta-glükán szintézisét. Ez ozmotikus instabilitást és sejtlízist okoz.',
      en: 'Inhibits beta-(1,3)-D-glucan synthase, selectively blocking the synthesis of beta-glucan, an essential component of the fungal cell wall, leading to osmotic instability and cell lysis.',
      de: 'Hemmt die Beta-(1,3)-D-Glucan-Synthase und blockiert so selektiv die Synthese von Beta-Glucan, einem essenziellen Bestandteil der Pilzzellwand. Dies führt zu osmotischer Instabilität und Zelllyse.'
    },
    dosage: {
      adult: {
        hu: '1. nap: 70 mg i.v. egyszeri telítő dózis, majd naponta 1x 50 mg i.v. fenntartó adag. Súlyos betegeknél vagy >80 kg testtömeg esetén naponta 70 mg fenntartó adag javasolt.',
        en: 'Day 1: Single loading dose of 70 mg i.v., followed by 50 mg i.v. once daily maintenance. In patients >80 kg or severe cases, 70 mg daily maintenance is recommended.',
        de: '1. Tag: Einmalige Sättigungsdosis von 70 mg i.v., danach 50 mg i.v. einmal täglich als Erhaltung. Bei Patienten >80 kg oder schweren Verläufen werden 70 mg täglich empfohlen.'
      },
      pediatric: {
        hu: '3 hónapostól 17 éves korig: 1. nap 70 mg/m² i.v. telítő adag (maximum 70 mg), majd naponta 50 mg/m² i.v. (maximum 70 mg/nap).',
        en: 'From 3 months to 17 years: 70 mg/m² i.v. loading dose on day 1 (max 70 mg), then 50 mg/m² i.v. once daily (max 70 mg/day).',
        de: 'Von 3 Monaten bis 17 Jahren: Sättigungsdosis am 1. Tag 70 mg/m² i.v. (max. 70 mg), danach einmal täglich 50 mg/m² i.v. (max. 70 mg/Tag).'
      },
      renal: {
        hu: 'Semmilyen fokú veseelégtelenségben nem igényel adagmódosítást. Hemodialízis vagy peritoneális dialízis során sem eliminálódik, nem igényel pótdózist.',
        en: 'No dosage adjustment required in any degree of renal impairment. It is not cleared by hemodialysis or peritoneal dialyis, no supplemental doses needed.',
        de: 'Keine Dosisanpassung bei Niereninsuffizienz jeglichen Grades erforderlich. Wird durch Hämodialyse oder Peritonealdialyse nicht eliminiert, keine Zusatzdosis nötig.'
      },
      hepatic: {
        hu: 'Középsúlyos májkárosodásban (Child-Pugh pontszám 7-9): a normál 70 mg telítő dózis után a fenntartó adagot napi 35 mg i.v.-re kell csökkenteni. Súlyos májkárosodásban nincs elég klinikai adat.',
        en: 'Moderate hepatic impairment (Child-Pugh score 7-9): after standard 70 mg loading dose, reduce maintenance dose to 35 mg i.v. daily. No clinical data for severe impairment.',
        de: 'Mäßige Leberfunktionsstörung (Child-Pugh-Score 7-9): Nach der normalen 70-mg-Sättigungsdosis ist die Erhaltungsdosis auf 35 mg i.v. täglich zu senken. Bei schwerer Störung keine ausreichenden Daten.'
      }
    },
    indications: {
      hu: [
        'Invazív candidiasis és candidemia kezelése (elsővonalbeli empirikus szer)',
        'Feltételezett szisztémás gombás fertőzés empirikus kezelése neutropéniás lázas betegeknél',
        'Invazív aspergillosis mentőöv-terápiája (salvage therapy) más szerek (pl. amfotericin, vorikonazol) hatástalansága esetén'
      ],
      en: [
        'Treatment of invasive candidiasis and candidemia (first-line empirical choice)',
        'Empirical therapy for presumed fungal infections in febrile neutropenic patients',
        'Salvage therapy for invasive aspergillosis in patients refractory to or intolerant of other agents (e.g., amphotericin, voriconazole)'
      ],
      de: [
        'Behandlung der invasiven Candidose und Candidämie (First-Line empirisch)',
        'Empirische Therapie bei vermuteten Pilzinfektionen bei febrilem neutropenischem Fieber',
        'Salvage-Therapie bei invasiver Aspergillose bei Patienten, die auf andere Therapeutika nicht ansprechen oder diese nicht vertragen'
      ]
    },
    sideEffects: {
      hu: [
        'Infúziós szövődmények (lokális phlebitis, thrombophlebitis a beadás helyén)',
        'Hisztamin-felszabadulási reakciók (kipirulás, arcduzzanat, viszketés, melegségérzet, ritkán bronchospasmus)',
        'Láz, hidegrázás, fejfájás',
        'Laboratóriumi eltérések (enyhe transzamináz-emelkedés, hypokalaemia, anaemia)'
      ],
      en: [
        'Infusion-site complications (local phlebitis, thrombophlebitis)',
        'Histamine-mediated symptoms (flushing, facial swelling, pruritus, warmth, rarely bronchospasm)',
        'Fever, chills, headache',
        'Laboratory abnormalities (mild transaminase elevation, hypokalemia, anemia)'
      ],
      de: [
        'Komplikationen an der Infusionsstelle (lokale Phlebitis, Thrombophlebitis)',
        'Histaminvermittelte Symptome (Flushing, Gesichtsschwellung, Juckreiz, Wärmegefühl, selten Bronchospasmus)',
        'Fieber, Schüttelfrost, Kopfschmerzen',
        'Laborabweichungen (leichter Transaminasenanstieg, Hypokaliämie, Anämie)'
      ]
    },
    practicalTips: {
      hu: [
        'Soha ne hígítsuk vagy keverjük dextróz (szőlőcukor) tartalmú oldatokkal, mert a hatóanyag instabillá válik és kicsapódik! Kizárólag fiziológiás sóoldat (0.9% NaCl) vagy Ringer-laktát használható.',
        'Mivel a sejtmembrán helyett a sejtfalat támadja (ami az emberi sejtekben nincs), mellékhatásspektruma a legkedvezőbb az összes szisztémás gombaellenes szer közül.',
        'Nem penetrál kielégítően a vizeletbe és az agy-gerincvelői folyadékba (liquor), ezért Candida cystitis, pyelonephritis, endophthalmitis vagy meningitis kezelésére alkalmatlan!'
      ],
      en: [
        'Do NOT dilute or mix with dextrose (glucose) containing solutions, as the active substance becomes unstable and precipitates! Use only 0.9% NaCl or Ringer\'s Lactate.',
        'Since it targets the cell wall (absent in human cells) rather than the cell membrane, it has the most favorable side effect profile among systemic antifungals.',
        'Does not penetrate sufficiently into urine, CSF, or eye tissues. Unsuitable for Candida cystitis, pyelonephritis, endophthalmitis, or meningitis!'
      ],
      de: [
        'NIEMALS mit glucosehaltigen Lösungen verdünnen oder mischen, da der Wirkstoff instabil wird und ausfällt! Nur 0,9 % NaCl oder Ringer-Laktat verwenden.',
        'Da es die Zellwand (in menschlichen Zellen nicht vorhanden) anstelle der Zellmembran angreift, hat es das günstigste Nebenwirkungsprofil aller systemischen Antimykotika.',
        'Dringt nicht ausreichend in Urin, Liquor oder Augengewebe ein. Ungeeignet zur Behandlung von Candida-Cystitis, Pyelonephritis, Endophthalmitis oder Meningitis!'
      ]
    }
  },
  {
    id: 'amphotericin_b',
    name: 'Liposomalis Amphotericin B',
    group: {
      hu: 'Polienek (Természetes makrolid polien antibiotikum)',
      en: 'Polyenes (Natural macrolide polyene antibiotic)',
      de: 'Polyene (Natürliches Makrolid-Polyene-Antibiotikum)'
    },
    halfLife: {
      hu: 'Kezdeti fázisban kb. 24 óra, de a szövetekben való rendkívül erős felhalmozódás miatt a terminális felezési idő akár 15 nap is lehet.',
      en: 'Initial phase approx. 24 hours, but due to extremely high tissue accumulation, the terminal half-life is up to 15 days.',
      de: 'In der Anfangsphase ca. 24 Stunden, aber aufgrund extrem starker Gewebeakkumulation beträgt die terminale Halbwertszeit bis zu 15 Tage.'
    },
    effectType: {
      hu: 'Fungicid (Gyors és rendkívül széles spektrumú gombaölő hatás)',
      en: 'Fungicidal (rapid and exceptionally broad-spectrum fungicidal activity)',
      de: 'Fungizid (schnelle und extrem breite pilztötende Wirkung)'
    },
    pae: {
      hu: 'Kifejezett és rendkívül hosszan tartó poszt-antifungális effektus (PAE) jellemzi.',
      en: 'Characterized by highly pronounced and extremely prolonged post-antifungal effect (PAE).',
      de: 'Gekennzeichnet durch einen sehr ausgeprägten und extrem langanhaltenden Post-Antimykotischen Effekt (PAE).'
    },
    spectrum: {
      hu: 'Szinte minden Candida faj (néhány C. lusitaniae kivételével), Aspergillus fajok, Cryptococcus neoformans, Mucorales (járomspórás fonalasgombák, pl. Rhizopus, Lichtheimia, Mucor), dimorf endémiás gombák (Histoplasma, Coccidioides, Blastomyces). (Aspergillus terreus rezisztens lehet).',
      en: 'Almost all Candida species (except some C. lusitaniae), Aspergillus species, Cryptococcus neoformans, Mucorales (zygomycetes - e.g., Rhizopus, Lichtheimia, Mucor), dimorphic endemic fungi (Histoplasma, Coccidioides, Blastomyces). (Aspergillus terreus may be resistant).',
      de: 'Fast alle Candida-Spezies (außer einigen C. lusitaniae), Aspergillus-Spezies, Cryptococcus neoformans, Mucorales (Zygomyzeten - z. B. Rhizopus, Lichtheimia, Mucor), dimorphe endemische Pilze. (Aspergillus terreus kann resistent sein).'
    },
    specialFeature: {
      hu: 'Az infektológia "legnagyobb kaliberű fegyvere" gombák ellen. A liposzómás forma (L-AmB) drasztikusan csökkenti a nephrotoxicitást a régi konvencionális dezoxikoláthoz képest; elsővonalbeli szer mucormycosisban.',
      en: 'The "heavy artillery" of infectiology against fungi. The liposomal formulation (L-AmB) drastically reduces nephrotoxicity compared to the old conventional deoxycholate form; first-line drug for mucormycosis.',
      de: 'Das "schwerste Geschütz" der Infektiologie gegen Pilze. Die liposomale Formulierung (L-AmB) reduziert die Nephrotoxizität im Vergleich zur alten konventionellen Desoxycholat-Form drastisch; First-Line-Mittel bei Mukormykose.'
    },
    mechanismOfAction: {
      hu: 'Közvetlenül és erősen kötődik a gomba sejtmembránjában lévő ergoszterolhoz. Transzmembrán pórusokat (ioncsatornákat) hoz létre, amin keresztül az alapvető intracelluláris ionok (K+, Mg2+) kiáramlanak, ami gyors sejthalálhoz vezet.',
      en: 'Binds directly and strongly to ergosterol in the fungal cell membrane, forming transmembrane pores (ion channels) that cause leakage of essential intracellular ions (K+, Mg2+), leading to rapid cell death.',
      de: 'Bindet direkt und stark an Ergosterol in der Pilzzellmembran. Bildet Transmembranporen (Ionenkanäle), durch die essenzielle intrazelluläre Ionen (K+, Mg2+) austreten, was zum raschen Zelltod führt.'
    },
    dosage: {
      adult: {
        hu: '3-5 mg/ttkg naponta egyszer i.v. infúzióban (1-2 óra alatt beadva). Mucormycosis vagy központi idegrendszeri fertőzések esetén akár napi 5-10 mg/ttkg is szükséges lehet.',
        en: '3-5 mg/kg once daily i.v. infusion (administered over 1-2 hours). Up to 5-10 mg/kg daily may be required for mucormycosis or CNS infections.',
        de: '3-5 mg/kg einmal täglich als i.v. Infusion (über 1-2 Stunden verabreicht). Bei Mukormykose oder ZNS-Infektionen können bis zu 5-10 mg/kg täglich erforderlich sein.'
      },
      pediatric: {
        hu: '1 hónapos kortól 18 éves korig: 3-5 mg/ttkg naponta egyszer i.v. infúzióban. Súlyos szisztémás fertőzésekben a tolerálhatóság függvényében emelhető.',
        en: 'Ages 1 month to 18 years: 3-5 mg/kg once daily i.v. infusion. In severe systemic infections, can be escalated based on tolerability.',
        de: 'Alter 1 Monat bis 18 Jahre: 3-5 mg/kg einmal täglich als i.v. Infusion. Bei schweren systemischen Infektionen je nach Verträglichkeit steigerbar.'
      },
      renal: {
        hu: 'Nem igényel rutinszerű adagcsökkentést veseelégtelenségben, de szoros vesefunkció-monitorozás (GFR, szérum kreatinin) kötelező. Kreatinin-duplázódás esetén átmeneti leállítás v. dóziscsökkentés mérlegelendő. Az infúzió előtt és után bőséges só-hidrálás javasolt.',
        en: 'No routine dose reduction required in renal impairment, but close monitoring of renal function (GFR, creatinine) is mandatory. If creatinine doubles, consider temporary suspension or dose reduction. Copious saline hydration before and after infusion is strongly advised.',
        de: 'Keine routinemäßige Dosisreduktion bei Niereninsuffizienz erforderlich, aber eine engmaschige Überwachung der Nierenfunktion (GFR, Kreatinin) ist zwingend. Bei Verdoppelung des Kreatinins ist eine Pause oder Dosisreduktion zu erwägen. Vor und nach der Infusion wird eine reichliche Kochsalz-Hydratation empfohlen.'
      },
      hepatic: {
        hu: 'Nem igényel adagmódosítást, de hepatotoxicitás esetén a klinikai/laboratóriumi paramétereket szorosan követni kell.',
        en: 'No dose adjustment required, but clinical and laboratory parameters must be closely monitored in case of hepatotoxicity.',
        de: 'Keine Dosisanpassung erforderlich, aber bei Hepatotoxizität müssen klinische und laborchemische Parameter engmaschig überwacht werden.'
      }
    },
    indications: {
      hu: [
        'Súlyos, életveszélyes szisztémás gombás fertőzések (disszeminált candidiasis, invazív aspergillosis, cryptococcus meningitis)',
        'Mucormycosis és más zygomycosisok kezelése (elsővonalbeli szer, gyakran műtéti debridementtel kombinálva)',
        'Empirikus terápia súlyos neutropéniás lázban, ha bakteriális fertőzés nem igazolódik',
        'Visceralis leishmaniasis (parazita fertőzés) és súlyos endémiás mycosisok'
      ],
      en: [
        'Severe, life-threatening systemic fungal infections (disseminated candidiasis, invasive aspergillosis, cryptococcal meningitis)',
        'Treatment of mucormycosis and other zygomycoses (first-line agent, often combined with surgical debridement)',
        'Empirical therapy in severe febrile neutropenia when bacterial infection is ruled out',
        'Visceral leishmaniasis (protozoal infection) and severe endemic mycoses'
      ],
      de: [
        'Schwere, lebensbedrohliche systemische Pilzinfektionen (disseminierte Candidose, invasive Aspergillose, Kryptokokken-Meningitis)',
        'Behandlung der Mukormykose und anderer Zygomykosen (First-Line, oft kombiniert mit chirurgischem Debridement)',
        'Empirische Therapie bei schwerem febrilem neutropenischem Fieber nach Ausschluss bakterieller Infektionen',
        'Viszeralleishmaniose (Protozoeninfektion) und schwere endemische Mykosen'
      ]
    },
    sideEffects: {
      hu: [
        'Infúzióval kapcsolatos akut szisztémás reakciók (láz, hidegrázás, rigor, hányinger, hányás, hypotensio, fejfájás - szinte minden betegnél jelentkezik az első napokban, premedikáció javasolt!)',
        'Nephrotoxicitás (vese-arteriolák vazokonstrukciója és közvetlen tubuláris sejtpusztulás, kreatinin-emelkedés, ami a kumulatív dózissal arányos)',
        'Kifejezett elektrolit-vesztés (hipokalémia, hipomagnezémia - pótlást igényel)',
        'Anaemia (a vese károsodása miatt csökken az erythropoetin termelés)'
      ],
      en: [
        'Infusion-related acute systemic reactions (fever, chills, rigors, nausea, vomiting, hypotension, headache - occurs in almost all patients in the first days; premedication recommended!)',
        'Nephrotoxicity (renal arteriole vasoconstriction and direct tubular cell injury, rising creatinine; proportional to cumulative dose)',
        'Severe electrolyte wasting (hypokalemia, hypomagnesemia - requires aggressive supplementation)',
        'Anemia (decreased erythropoietin production secondary to renal tubular damage)'
      ],
      de: [
        'Infusionsbedingte akute systemische Reaktionen (Fieber, Schüttelfrost, Rigor, Übelkeit, Erbrechen, Hypotonie, Kopfschmerzen - tritt bei fast allen Patienten in den ersten Tagen auf; Prämedikation empfohlen!)',
        'Nephrotoxizität (Vasokonstriktion der Nierenarteriolen und direkte tubuläre Zellschädigung, Kreatininanstieg; proportional zur kumulativen Dosis)',
        'Schwerer Elektrolytverlust (Hypokaliämie, Hypomagnesiämie - erfordert aggressive Substitution)',
        'Anämie (verminderte Erythropoetin-Produktion infolge von Nierentubulusschäden)'
      ]
    },
    practicalTips: {
      hu: [
        'Az infúzióval kapcsolatos szisztémás reakciók megelőzésére kötelező a premedikáció: Paracetamol p.o./i.v. + Antihisztamin i.v. + hidrokortizon i.v. szükség szerint.',
        'A nephrotoxicitás kockázatának jelentős csökkentésére az infúzió előtt és után 500-1000 ml fiziológiás sóoldat (0.9% NaCl) adandó infúzióban ("sóterhelés").',
        'SOHA ne oldjuk fel vagy hígítsuk fiziológiás sóoldattal közvetlenül az infúziós üvegben, mert a hatóanyag azonnal kicsapódik! A por feloldása és hígítása kizárólag 5%-os glucose (szőlőcukor) oldattal történhet. (A beteg vénájának előtte/utána való hidrálása azonban sóoldattal történjen!)'
      ],
      en: [
        'Premedication is highly recommended to prevent infusion-related reactions: Paracetamol + Antihistamine + i.v. Hydrocortisone if necessary.',
        'To significantly reduce nephrotoxicity risk, administer 500-1000 mL of normal saline (0.9% NaCl) as a "saline load" immediately before and after the infusion.',
        'NEVER dissolve or dilute with saline in the infusion bottle as it precipitates immediately! Reconstitution and dilution must only be done using 5% Dextrose (glucose) solution. (However, the patient\'s hydration flush before/after should use normal saline!)'
      ],
      de: [
        'Zur Vorbeugung infusionsbedingter Reaktionen ist eine Prämedikation dringend empfohlen: Paracetamol + Antihistaminikum + i.v. Hydrocortison falls nötig.',
        'Zur deutlichen Reduzierung der Nephrotoxizität vor und nach der Infusion 500-1000 ml normale Kochsalzlösung (0,9 % NaCl) als "Kochsalzbelastung" verabreichen.',
        'In der Infusionsflasche NIEMALS mit Kochsalzlösung auflösen oder verdünnen, da der Wirkstoff sofort ausfällt! Auflösung und Verdünnung dürfen nur mit 5%iger Glucose-Lösung erfolgen. (Die Spülung/Hydratation des Patienten vor und nachher sollte jedoch mit Kochsalzlösung erfolgen!)'
      ]
    }
  }
];
