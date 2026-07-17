/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClinicalInfection } from '../types';

export const clinicalInfectionsData: ClinicalInfection[] = [
  {
    id: "cap",
    name: "Közösségben szerzett pneumonia (CAP)",
    category: "respiratory",
    pathogens: [
      { name: "Streptococcus pneumoniae", frequency: "very-common", notes: "A leggyakoribb bakteriális kórokozó minden életkorban." },
      { name: "Mycoplasma pneumoniae", frequency: "common", notes: "Fiatal felnőtteknél gyakori, atípusos klinikai kép." },
      { name: "Haemophilus influenzae", frequency: "common", notes: "Gyakoribb COPD-ben és idős korban." },
      { name: "Chlamydia pneumoniae", frequency: "common", notes: "Atípusos pneumonia." },
      { name: "Legionella pneumophila", frequency: "rare", notes: "Súlyos, lobaris pneumonia, gyakran extrarenalis tünetekkel (hyponatremia, hasmenés)." },
      { name: "Staphylococcus aureus", frequency: "rare", notes: "Gyakran influenza felülfertőződéseként jelentkezik, necrotizáló lefolyású lehet." }
    ],
    empirical: {
      mild: {
        firstLine: "Amoxicillin 3x 1g p.o. (ha nincs társbetegség és nincs béta-laktám allergia) VAGY Doxycyclin 2x 100 mg p.o.",
        alternative: "Clarithromycin 2x 500 mg p.o. VAGY Azithromycin 1x 500 mg p.o. (3 napig)",
        duration: "5 - 7 nap (klinikai stabilitás elérése után még 48-72 óráig)"
      },
      severe: {
        firstLine: "Ceftriaxon 1x 2g i.v. + Clarithromycin 2x 500 mg i.v. (az atípusos lefedettség miatt) VAGY Cefotaxim 3x 2g i.v. + Clarithromycin i.v.",
        alternative: "Légúti fluorokinolon monoterápia: Levofloxacin 1x 500-750 mg i.v./p.o. VAGY Moxifloxacin 1x 400 mg i.v./p.o.",
        duration: "7 - 10 nap (S. aureus v. Pseudomonas gyanúban 14 nap, Legionella esetén 10-14 nap)"
      }
    },
    targeted: [
      { condition: "Streptococcus pneumoniae (Penicillin-érzékeny, MIC < 2 ug/ml)", treatment: "Penicillin G 4-6x 2 millió NE i.v. vagy Amoxicillin 3x 1g p.o." },
      { condition: "Streptococcus pneumoniae (Penicillin-rezisztens, PRSP)", treatment: "Ceftriaxon 1x 2g i.v. vagy Levofloxacin 1x 750mg p.o./i.v. Súlyos esetben Vancomycin." },
      { condition: "Mycoplasma / Chlamydia pneumoniae", treatment: "Doxycyclin 2x 100 mg p.o. vagy Clarithromycin 2x 500 mg p.o. 7-10 napig." },
      { condition: "Legionella pneumophila", treatment: "Levofloxacin 1x 750 mg i.v./p.o. vagy Azithromycin 1x 500 mg i.v./p.o. (Doxycyclin is alternatíva)." },
      { condition: "MRSA (Meticillin-rezisztens S. aureus)", treatment: "Linezolid 2x 600 mg i.v./p.o. vagy Ceftarolin 2x 600 mg i.v. (vagy Vancomycin)." }
    ],
    guidelines: "BTS/NICE 2024, IDSA/ATS Pneumonia Guidelines, Hazai Infektológiai Szakmai Irányelvek",
    diagnosticsNotes: "Mellkas röntgen (PA + oldalirány) kötelező az infiltrátum igazolására. CURB-65 pontrendszer segít a beteg elhelyezésében (0-1: otthon, 2: osztály, >=3: intenzív osztály megfontolandó). Súlyos esetben hemokultúra, köpet tenyésztés, vizelet Streptococcus és Legionella antigén gyorsteszt javasolt."
  },
  {
    id: "hap_vap",
    name: "Kórházban szerzett és lélegeztetéssel összefüggő pneumonia (HAP/VAP)",
    category: "respiratory",
    pathogens: [
      { name: "Pseudomonas aeruginosa", frequency: "very-common", notes: "Súlyos, nehezen kezelhető, gyakran multirezisztens kórházi törzs." },
      { name: "Klebsiella pneumoniae (és más Enterobacterales)", frequency: "very-common", notes: "Gyakran ESBL vagy carbapenemáz (KPC, MBL) termelő." },
      { name: "Staphylococcus aureus (MRSA is)", frequency: "common", notes: "MRSA kockázat különösen korábbi antibiotikum használat és intenzív osztályos kezelés esetén." },
      { name: "Acinetobacter baumannii", frequency: "common", notes: "Extrém ellenálló, főleg intenzív osztályokon okoz járványokat." }
    ],
    empirical: {
      mild: {
        firstLine: "Ceftriaxon 1x 2g i.v. VAGY Cefotaxim 3x 2g i.v. (ha nincs kockázati tényező rezisztens Gram-negatívra vagy MRSA-ra)",
        alternative: "Levofloxacin 1x 750 mg i.v. vagy Moxifloxacin 1x 400 mg i.v.",
        duration: "7 nap (klinikai és radiológiai javulás esetén rövidebb kúra javasolt a rezisztencia elkerülésére)"
      },
      severe: {
        firstLine: "Pseudomonas-ellenes béta-laktám: Piperacillin/Tazobactam 4x 4.5 g i.v. VAGY Cefepim 3x 2 g i.v. VAGY Meropenem 3x 1-2 g i.v. (ha ESBL gyanú van). Ha MRSA gyanú is fennáll, adjunk hozzá Vancomycint 2x 1-1.5g i.v. vagy Linezolidot 2x 600mg i.v.",
        alternative: "Kombinációs terápia extrém rezisztencia gyanúban: béta-laktám + Amikacin 1x 15mg/ttkg i.v. vagy Ciprofloxacin 3x 400mg i.v.",
        duration: "7 - 14 nap (kórokozótól és klinikai választól függően)"
      }
    },
    targeted: [
      { condition: "Pseudomonas aeruginosa (érzékeny)", treatment: "Piperacillin/Tazobactam 4x 4.5g i.v. vagy Cefepim 3x 2g i.v." },
      { condition: "Pseudomonas aeruginosa (MDR - multirezisztens)", treatment: "Ceftolozan/Tazobactam 3x 1.5g i.v. vagy Ceftazidim/Avibactam 3x 2.5g i.v., szükség esetén Colistinnel vagy Amikacinnel kombinálva." },
      { condition: "ESBL-termelő Enterobacterales", treatment: "Ertapenem 1x 1g i.v. vagy Meropenem 3x 1g i.v." },
      { condition: "Carbapenem-rezisztens Klebsiella pneumoniae (KPC)", treatment: "Ceftazidim/Avibactam 3x 2.5g i.v. vagy Meropenem/Vaborbactam." },
      { condition: "Staphylococcus aureus (MRSA)", treatment: "Linezolid 2x 600 mg i.v. vagy Vancomycin i.v. (TDM célkoncentráció 15-20 ug/ml)." }
    ],
    guidelines: "IDSA/ATS HAP/VAP Guidelines, ESCMID/ERS guidelines",
    diagnosticsNotes: "Mellkas röntgen/CT. Alsó légúti mintavétel (köpet, trachealis aspirátum vagy bronchoalveolaris lavage - BAL) tenyésztésre kötelező az antibiotikum megkezdése előtt! Hemokultúrák levétele szükséges."
  },
  {
    id: "cystitis",
    name: "Akut szövődménymentes cystitis (húgyhólyaggyulladás)",
    category: "urinary",
    pathogens: [
      { name: "Escherichia coli", frequency: "very-common", notes: "Az esetek 75-90%-áért felelős kórokozó." },
      { name: "Staphylococcus saprophyticus", frequency: "common", notes: "Fiatal, szexuálisan aktív nőkben gyakori." },
      { name: "Klebsiella pneumoniae", frequency: "common", notes: "Gyakori húgyúti kórokozó." },
      { name: "Proteus mirabilis", frequency: "common", notes: "Vizelet lúgosodását okozhatja, ureáz-pozitív." },
      { name: "Enterococcus faecalis", frequency: "rare", notes: "Gyakrabban szövődményes vagy katéteres esetekben." }
    ],
    empirical: {
      mild: {
        firstLine: "Fosfomycin trometamol 1x 3g p.o. egyszeri adag VAGY Nitrofurantoin 2x 100 mg p.o. (nyújtott hatású) 5 napig",
        alternative: "Pivmecillinam 3x 400 mg p.o. (ahol elérhető) 3-5 napig VAGY Sulfamethoxazol/Trimethoprim (Co-trimoxazol) 2x 960 mg p.o. 3 napig (csak ha a helyi E. coli rezisztencia < 20%)",
        duration: "1 nap (Fosfomycin) vagy 5 nap (Nitrofurantoin) vagy 3 nap (Co-trimoxazol)"
      },
      severe: {
        // Cystitis nem szokott súlyos lenni, de ha szövődményes (pl. terhes, férfi, diabeteses), akkor hosszabb kezelés kell
        firstLine: "Amoxicillin/klavulánsav 2x 875/125 mg p.o. 5-7 napig VAGY Cefuroxim-axetil 2x 250-500 mg p.o. 5-7 napig",
        alternative: "Ciprofloxacin 2x 250 mg p.o. VAGY Levofloxacin 1x 250-500 mg p.o. 3-5 napig (csak végső esetben, ld. megjegyzés!)",
        duration: "5 - 7 nap"
      }
    },
    targeted: [
      { condition: "E. coli (ESBL-termelő)", treatment: "Fosfomycin 1x 3g p.o. (cystitisben hatékony a vizeletkoncentráció miatt) vagy Nitrofurantoin 2x 100mg p.o. 5 napig." },
      { condition: "Enterococcus faecalis (érzékeny)", treatment: "Amoxicillin 3x 500mg - 1000mg p.o. 5 napig." },
      { condition: "Proteus mirabilis", treatment: "Amoxicillin 3x 500mg p.o. vagy Cefuroxim-axetil 2x 250mg p.o." }
    ],
    guidelines: "EAU (Európai Urológus Társaság) Húgyúti Fertőzések Irányelve 2024",
    diagnosticsNotes: "A diagnózis klinikai (dysuria, gyakori vizelési inger, suprapubicus fájdalom, láz hiánya!). Vizelet tesztcsík (nitrit pozitív, leukocyta észteráz pozitív) megerősíti. Fiatal, szövődménymentes nőknél vizelettenyésztés NEM kötelező. Terheseknél, férfiaknál, recidiváló esetekben vizelettenyésztés kötelező!"
  },
  {
    id: "pyelonephritis",
    name: "Akut szövődménymentes pyelonephritis (vesemedence-gyulladás)",
    category: "urinary",
    pathogens: [
      { name: "Escherichia coli", frequency: "very-common", notes: "A leggyakoribb kórokozó." },
      { name: "Klebsiella pneumoniae", frequency: "common", notes: "Gyakran hordoz rezisztenciát." },
      { name: "Proteus mirabilis", frequency: "common", notes: "Vese kőképződéssel társulhat." },
      { name: "Pseudomonas aeruginosa", frequency: "rare", notes: "Főleg korábbi urológiai beavatkozás, katéterezés után." },
      { name: "Enterococcus faecalis", frequency: "rare", notes: "Parenterális aminopenicillint igényel." }
    ],
    empirical: {
      mild: {
        // Ambulánsan kezelhető esetek
        firstLine: "Ciprofloxacin 2x 500-750 mg p.o. 7 napig VAGY Levofloxacin 1x 750 mg p.o. 5 napig",
        alternative: "Cefuroxim-axetil 2x 500 mg p.o. 10 napig VAGY Amoxicillin/klavulánsav 2x 875/125 mg p.o. 10-14 napig (kevésbé hatékonyak, mint a kinolonok)",
        duration: "5 - 7 nap (kinolonok) vagy 10 - 14 nap (béta-laktámok)"
      },
      severe: {
        // Kórházi felvételt igénylő szisztémás esetek
        firstLine: "Ceftriaxon 1x 1-2g i.v. VAGY Cefotaxim 3x 2g i.v. VAGY Ciprofloxacin 2x 400mg i.v. VAGY Gentamicin 1x 5mg/ttkg i.v.",
        alternative: "Súlyos szövődményes/katéteres urosepsis vagy ESBL kockázat esetén: Piperacillin/Tazobactam 3-4x 4.5g i.v. VAGY Ertapenem 1x 1g i.v. VAGY Meropenem 3x 1g i.v.",
        duration: "7 - 10 nap (klinikai javulástól függően orális terápiára váltható, pl. kinolonra)"
      }
    },
    targeted: [
      { condition: "E. coli / Klebsiella (ESBL-termelő)", treatment: "Ertapenem 1x 1g i.v. vagy Meropenem 3x 1g i.v. Enyhe esetben orális Doxycyclin vagy Co-trimoxazol, ha érzékeny." },
      { condition: "Enterococcus faecalis", treatment: "Ampicillin 4x 2g i.v. (Gentamicinnel kombinálva urosepsisben) vagy Amoxicillin 3x 1g p.o. (step-down)." },
      { condition: "Pseudomonas aeruginosa", treatment: "Ceftazidim 3x 2g i.v. vagy Cefepim 3x 2g i.v. vagy Ciprofloxacin 2x 500-750mg p.o. / 2x 400mg i.v." }
    ],
    guidelines: "EAU Guidelines on Urological Infections 2024",
    diagnosticsNotes: "Klinikai kép: deréktáji fájdalom (Pasternacki-jel pozitív), láz, borzongás, gyakran hányinger/hányás. Labor: leukocytosis, magas CRP, pyuria. Vizelettenyésztés és hemokultúra levétele KÖTELEZŐ! Vesék ultrahang vizsgálata javasolt az elzáródás (obstrukció/hydronephrosis) kizárására, ami azonnali urológiai tehermentesítést (nephrostoma v. DJ katéter) igényel!"
  },
  {
    id: "meningitis",
    name: "Akut purulens bakteriális meningitis (agyhártyagyulladás)",
    category: "cns",
    pathogens: [
      { name: "Streptococcus pneumoniae", frequency: "very-common", notes: "A leggyakoribb és legsúlyosabb lefolyású felnőtt bakteriális meningitis." },
      { name: "Neisseria meningitidis", frequency: "very-common", notes: "Meningococcus. Petechiák és purpurák kísérhetik. Cseppfertőzéssel terjed, kontaktusoknál chemoprofilaxis (Ciprofloxacin v. Rifampicin) kötelező!" },
      { name: "Listeria monocytogenes", frequency: "common", notes: "Különösen 50 év felett, terheseknél, alkoholistáknál vagy immunszupprimáltaknál. Cephalosporin-rezisztens!" },
      { name: "Haemophilus influenzae", frequency: "rare", notes: "A védőoltások (Hib) bevezetése óta ritka." }
    ],
    empirical: {
      mild: {
        // Nincs 'enyhe' purulens meningitis, ez mindig életveszélyes vészhelyzet!
        firstLine: "Azonnali i.v. kezelés szükséges (ld. súlyos kategória). Késlekedés tilos!",
        alternative: "N/A",
        duration: "N/A"
      },
      severe: {
        // Felnőtt empirikus kezelés (orvosi ügyelet / sürgősségi)
        firstLine: "Ceftriaxon 2x 2g i.v. (magas dózis!) + Vancomycin 15-20 mg/ttkg i.v. 8-12 óránként + Dexamethason 10 mg i.v. (az első antibiotikum adaggal egy időben, vagy 15-20 perccel előtte!). HA a beteg > 50 éves vagy immunszupprimált, adjunk hozzá Ampicillint 6x 2g i.v. a Listeria lefedésére!",
        alternative: "Béta-laktám allergia esetén: Meropenem 3x 2g i.v. + Vancomycin 15-20 mg/ttkg i.v. + Moxifloxacin v. Co-trimoxazol (Listeria ellen).",
        duration: "N. meningitidis: 7 nap, H. influenzae: 7 nap, S. pneumoniae: 10-14 nap, L. monocytogenes: 21 nap"
      }
    },
    targeted: [
      { condition: "Neisseria meningitidis (Penicillin-érzékeny)", treatment: "Penicillin G 6x 4 millió NE i.v. vagy Ceftriaxon 2x 2g i.v." },
      { condition: "Streptococcus pneumoniae (Penicillin-érzékeny)", treatment: "Penicillin G 6x 4 millió NE i.v. vagy Ceftriaxon 2x 2g i.v." },
      { condition: "Streptococcus pneumoniae (PRSP)", treatment: "Vancomycin i.v. + Ceftriaxon 2x 2g i.v. VAGY Meropenem 3x 2g i.v." },
      { condition: "Listeria monocytogenes", treatment: "Ampicillin 6x 2g i.v. + Gentamicin 3x 1-1.5 mg/ttkg i.v. szinergizmus céljából! (Cephalosporinok hatástalanok!)." }
    ],
    guidelines: "ESC (Európai Klinikai Mikrobiológiai és Infektológiai Társaság) Meningitis Guideline, IDSA Meningitis Guidelines",
    diagnosticsNotes: "Klinikai triász: láz, tarkómerevség (meningizmus), tudatzavar. Sürgős lumbálpunkció (LP) elvégzése szükséges a liquor vizsgálatára (sejtszám, fehérje, cukor, Gram-festés, tenyésztés, PCR, latex agglutináció). HA koponyaűri nyomásfokozódásra utaló tünet van (pl. papilledema, gócos neurológiai deficit, görcsroham, mély kóma), LP előtt koponya CT végzendő. CT miatt az antibiotikum beadása nem késhet: előtte hemokultúrát kell venni, beadni az empirikus antibiotikumot + dexamethasont, majd elküldeni CT-re, és utána LP!"
  },
  {
    id: "sepsis_unknown",
    name: "Szepszis és szeptikus sokk (ismeretlen fókusz)",
    category: "sepsis",
    pathogens: [
      { name: "Escherichia coli (és más Gram-negatívak)", frequency: "very-common", notes: "Urosepsis vagy hasi szepszis leggyakoribb forrása." },
      { name: "Staphylococcus aureus", frequency: "very-common", notes: "Lágyrész, katéter, csont fertőzésekből kiinduló szepszis." },
      { name: "Streptococcus pneumoniae", frequency: "common", notes: "Légúti vagy splenectomizált betegek szepszise." },
      { name: "Pseudomonas aeruginosa", frequency: "common", notes: "Főleg nosocomialis szepszis esetén." },
      { name: "Enterococcus faecalis / faecium", frequency: "rare", notes: "Katéteres, urológiai, endocarditises betegek." }
    ],
    empirical: {
      mild: {
        firstLine: "A szepszis mindig vészhelyzet! Enyhe szepszis nem létezik, azonnali i.v. széles spektrumú antibiotikum szükséges az 'arany órán' (1 órán) belül!",
        alternative: "N/A",
        duration: "N/A"
      },
      severe: {
        // Sürgősségi empirikus kezelés kórházban
        firstLine: "Piperacillin/Tazobactam 4x 4.5g i.v. (vagy Cefepim 3x 2g i.v.). Ha szeptikus sokk van vagy rezisztens Gram-negatív gyanúja, adjunk hozzá Gentamicint 1x 5-7 mg/ttkg i.v.-t. Ha MRSA gyanú van (pl. centrális katéter, dialízis, lágyrész fókusz, ismert MRSA hordozás), adjunk hozzá Vancomycint 15-20 mg/ttkg i.v.",
        alternative: "Súlyos béta-laktám allergia vagy ESBL gyanú/nosocomialis szepszis esetén: Meropenem 3x 1-2g i.v. + Vancomycin i.v.",
        duration: "7 - 10 nap (a fókusz szanálásától és klinikai javulástól függően)"
      }
    },
    targeted: [
      { condition: "MSSA (Meticillin-érzékeny S. aureus) szepszis", treatment: "Cefazolin 3x 2g i.v. vagy Cloxacillin/Oxacillin 4-6x 2g i.v. (A béta-laktámok sokkal hatékonyabbak MSSA szepszisben, mint a Vancomycin!)." },
      { condition: "MRSA szepszis", treatment: "Vancomycin i.v. (TDM célérték 15-20 ug/ml) vagy Daptomycin 1x 8-10 mg/ttkg i.v." },
      { condition: "ESBL-termelő Gram-negatív", treatment: "Meropenem 3x 1g i.v. vagy Ertapenem 1x 1g i.v. (ha nincs szeptikus sokk)." },
      { condition: "VRE (Vancomycin-rezisztens Enterococcus)", treatment: "Linezolid 2x 600 mg i.v. vagy Daptomycin 1x 10-12 mg/ttkg i.v." }
    ],
    guidelines: "Surviving Sepsis Campaign (SSC) Guidelines 2021/2023, ESCMID Guidelines",
    diagnosticsNotes: "Azonnali qSOFA vagy SOFA pontszám felmérés. Minimálisan 2 pár hemokultúra (1 pár = 1 aerob + 1 anaerob palack) levétele különböző perifériás vénákból a kezelés megkezdése előtt! Fókuszkeresés: mellkas rtg, vizelet labor, hasi ultrahang, sebészeti konzílium. A Sepsis Bundle részeként: laktát mérés, folyadékpótlás (30 ml/ttkg krisztalloid szeptikus sokk esetén), szükség esetén noradrenalin vazopresszor."
  },
  {
    id: "ie_native",
    name: "Infektív endocarditis (Natív billentyű)",
    category: "sepsis",
    pathogens: [
      { name: "Oralis Streptococcusok (pl. S. mitis, S. mutans)", frequency: "very-common", notes: "Főleg fogászati beavatkozások után, szubakut lefolyás." },
      { name: "Streptococcus gallolyticus (S. bovis)", frequency: "common", notes: "Erősen társul vastagbél daganatokkal, malignitásokkal (colonoscopia kötelező!)." },
      { name: "Staphylococcus aureus", frequency: "common", notes: "Akut, rendkívül destruktív lefolyás, intravénás kábítószer-használóknál jobb szívfél érintettség gyakori." },
      { name: "Enterococcus faecalis", frequency: "common", notes: "Gyakran húgyúti vagy hasi beavatkozások/fertőzések után idős betegekben." },
      { name: "HACEK csoport", frequency: "rare", notes: "Lassan növekedő, nehezen tenyészthető Gram-negatív baktériumok (Haemophilus, Aggregatibacter, Cardiobacterium, Eikenella, Kingella)." }
    ],
    empirical: {
      mild: {
        firstLine: "Ampicillin 4x 3g i.v. VAGY 6x 2g i.v. + Ceftriaxon 1x 2g i.v. (ez a kombináció kiváló Enterococcus és Streptococcus ellen, elkerülve az aminoglikozid nephrotoxicitást)",
        alternative: "Ceftriaxon 1x 2g i.v. + Gentamicin 3 mg/ttkg/nap i.v. (egyszerre beadva)",
        duration: "4 - 6 hét (natív billentyűnél általában 4 hét elég, ha nincs szövődmény)"
      },
      severe: {
        firstLine: "Ampicillin 12g/nap i.v. 4-6 részletben + Cloxacillin (vagy Oxacillin) 12g/nap i.v. 4-6 részletben + Gentamicin 3 mg/ttkg/nap i.v. (1 adagban)",
        alternative: "Vancomycin 30 mg/ttkg/nap i.v. 2 részre osztva (TDM!) + Gentamicin 3 mg/ttkg/nap i.v. (1 adagban)",
        duration: "4 - 6 hét (szövődményes vagy Staph. aureus esetén 6 hét)"
      }
    },
    targeted: [
      { condition: "Penicillin-érzékeny Streptococcusok (MIC <= 0.125 ug/ml)", treatment: "Penicillin G 12-18 millió NE/nap i.v. 4-6 részben 4 hétig VAGY Ceftriaxon 1x 2g i.v. 4 hétig. Szövődménymentes esetben 2 hetes rövid kúra is lehetséges Gentamicinnel kombinálva." },
      { condition: "Enterococcus faecalis (szinergizmusra alkalmas)", treatment: "Ampicillin 6x 2g i.v. + Ceftriaxon 2x 2g i.v. (vesekímélő, preferált) VAGY Ampicillin 6x 2g i.v. + Gentamicin 3 mg/ttkg/nap i.v. 1 adagban 6 hétig." },
      { condition: "Staphylococcus aureus (MSSA)", treatment: "Cloxacillin (vagy Oxacillin) 12g/nap i.v. 4-6 részben VAGY Cefazolin 3x 2g i.v. 4-6 hétig." },
      { condition: "Staphylococcus aureus (MRSA / béta-laktám allergia)", treatment: "Vancomycin 30 mg/ttkg/nap i.v. 2 részben (TDM!) VAGY Daptomycin 1x 10 mg/ttkg i.v. 4-6 hétig." }
    ],
    guidelines: "2023 ESC Guidelines for the Management of Endocarditis",
    diagnosticsNotes: "Diagnózis: 2023 ESC / módosított Duke kritériumok alapján. Kulcsfontosságú legalább 3 pár hemokultúra vétele (külön vénákból, 30 perc különbséggel, láztól függetlenül) az antibiotikum megkezdése előtt! Transthoracalis (TTE) és Transesophagealis (TEE) echocardiographia elvégzése sürgős. TEE kötelező natív billentyűnél is, ha a TTE negatív, de a gyanú erős, illetve minden szövődményes esetben."
  },
  {
    id: "ie_pve_early",
    name: "Korai műbillentyű endocarditis (<1 év a műtét után)",
    category: "sepsis",
    pathogens: [
      { name: "Coagulase-negatív Staphylococcusok (főleg S. epidermidis)", frequency: "very-common", notes: "Többnyire meticillin-rezisztensek és biofilm képzők." },
      { name: "Staphylococcus aureus", frequency: "very-common", notes: "Rendkívül agresszív, magas halálozású, korai szelep-leválást okozhat." },
      { name: "Gram-negatív pálcák (nosocomialis)", frequency: "common", notes: "Pseudomonas aeruginosa és Enterobacterales, gyakran multirezisztensek." },
      { name: "Candida fajok", frequency: "rare", notes: "Gombás endocarditis, szinte mindig sebészeti indikációt jelent." }
    ],
    empirical: {
      mild: {
        firstLine: "Azonnali i.v. kezelés szükséges (ld. súlyos/akut kategória). Késlekedés tilos!",
        alternative: "N/A",
        duration: "N/A"
      },
      severe: {
        firstLine: "Vancomycin 30 mg/ttkg/nap i.v. 2 részletben (TDM!) + Gentamicin 3 mg/ttkg/nap i.v. 1 adagban + Rifampicin 900-1200 mg/nap i.v. vagy p.o. 2-3 részben (a Rifampicint a bakteriémia szanálása után, 3-5. napon javasolt bevezetni a rezisztencia megelőzésére)",
        alternative: "Daptomycin 1x 10 mg/ttkg i.v. + Gentamicin + Rifampicin (béta-laktám allergia vagy Vancomycin intolerancia esetén)",
        duration: "legalább 6 hét"
      }
    },
    targeted: [
      { condition: "Staphylococci (MRSA vagy meticillin-rezisztens CoNS - műbillentyű)", treatment: "Vancomycin 30 mg/ttkg/nap i.v. (TDM!) + Rifampicin 2-3x 300-450 mg p.o./i.v. + Gentamicin 3 mg/ttkg/nap i.v. legalább 6 hétig (a Rifampicint csak a hemokultúrák negativizálódása után szabad elindítani!)." },
      { condition: "Staphylococci (MSSA vagy meticillin-érzékeny CoNS - műbillentyű)", treatment: "Cloxacillin (vagy Oxacillin) 12g/nap i.v. 4-6 részben + Rifampicin 2-3x 300-450 mg p.o./i.v. + Gentamicin 3 mg/ttkg/nap i.v. legalább 6 hétig." },
      { condition: "Gram-negatív baktériumok (pl. Pseudomonas)", treatment: "Kombinációs terápia: pl. Cefepim 3x 2g i.v. VAGY Meropenem 3x 2g i.v. + Tobramycin/Amikacin, a rezisztencia alapján módosítva." }
    ],
    guidelines: "2023 ESC Guidelines for the Management of Endocarditis",
    diagnosticsNotes: "Klinikai kép: műtét utáni láz, új szívzörej, instabilitás, szeptikus embolizációk. Echocardiographia: Transesophagealis (TEE) elengedhetetlen és kötelező! A fém/műanyag műbillentyű árnyékolása miatt a TTE nem elég szenzitív. Kiegészítő diagnosztika: 18F-FDG PET/CT vagy szív-CT rendkívül hasznos a periannularis gyulladás, tályogok vagy paravalvularis szivárgás igazolására."
  },
  {
    id: "ie_pve_late",
    name: "Késői műbillentyű endocarditis (>=1 év a műtét után)",
    category: "sepsis",
    pathogens: [
      { name: "Oralis Streptococcusok", frequency: "very-common", notes: "Hasonló a natív billentyűs eloszláshoz, de a protézis miatt komolyabb szövődményekkel jár." },
      { name: "Enterococcus faecalis", frequency: "common", notes: "Húgyúti és gastrointestinalis fókuszból eredő szeptikus szórás." },
      { name: "Staphylococcus aureus", frequency: "common", notes: "Súlyos, destruktív lefolyás, tályogképződés veszélye magas." },
      { name: "Coagulase-negatív Staphylococcusok", frequency: "common", notes: "Lassabb lefolyás, de gyakran meticillin-rezisztensek." }
    ],
    empirical: {
      mild: {
        firstLine: "Ampicillin 4x 3g i.v. VAGY 6x 2g i.v. + Ceftriaxon 1x 2g i.v. (Enterococcus és Streptococcus ellen kiváló)",
        alternative: "Ceftriaxon 1x 2g i.v. + Gentamicin 3 mg/ttkg/nap i.v. (szinergizmus)",
        duration: "legalább 6 hét"
      },
      severe: {
        firstLine: "Ampicillin 12g/nap i.v. 4-6 részletben + Cloxacillin (vagy Oxacillin) 12g/nap i.v. 4-6 részletben + Gentamicin 3 mg/ttkg/nap i.v. (1 adagban)",
        alternative: "Vancomycin 30 mg/ttkg/nap i.v. 2 részletben (TDM!) + Gentamicin 3 mg/ttkg/nap i.v. (1 adagban)",
        duration: "legalább 6 hét"
      }
    },
    targeted: [
      { condition: "Streptococcusok (MIC <= 0.125 ug/ml)", treatment: "Penicillin G 12-18 millió NE/nap i.v. 4-6 részben VAGY Ceftriaxon 1x 2g i.v. legalább 6 hétig. (Műbillentyű esetén a 2 hetes rövidített kúra NEM alkalmazható!)." },
      { condition: "Enterococcus faecalis", treatment: "Ampicillin 6x 2g i.v. + Ceftriaxon 2x 2g i.v. VAGY Ampicillin 6x 2g i.v. + Gentamicin 3 mg/ttkg/nap i.v. 6 hétig." },
      { condition: "Staphylococci (MSSA / meticillin-érzékeny CoNS)", treatment: "Cloxacillin (vagy Oxacillin) 12g/nap i.v. 4-6 részben + Rifampicin 2-3x 300-450 mg p.o./i.v. + Gentamicin 3 mg/ttkg/nap i.v. legalább 6 hétig." },
      { condition: "Staphylococci (MRSA / meticillin-rezisztens CoNS)", treatment: "Vancomycin 30 mg/ttkg/nap i.v. 2 részben (TDM!) + Rifampicin 2-3x 300-450 mg p.o./i.v. + Gentamicin 3 mg/ttkg/nap i.v. legalább 6 hétig." }
    ],
    guidelines: "2023 ESC Guidelines for the Management of Endocarditis",
    diagnosticsNotes: "A diagnózis menete a natív és korai műbillentyűs formák keveréke. Legalább 3 pár hemokultúra kötelező! TEE echocardiographia kötelező. Periannularis szövődmények (tályog, pseudoaneurysma, fistula) kimutatására a szív-CT kiemelten javasolt. 18F-FDG PET/CT elvégzendő bizonytalan diagnózis esetén."
  },
  {
    id: "primary_peritonitis",
    name: "Primer peritonitis (Spontán bakteriális peritonitis - SBP)",
    category: "abdominal",
    pathogens: [
      { name: "Escherichia coli", frequency: "very-common", notes: "A leggyakoribb kórokozó májcirrhosisos SBP-ben." },
      { name: "Klebsiella pneumoniae", frequency: "common", notes: "Gyakori Gram-negatív kórokozó." },
      { name: "Streptococcus pneumoniae (és egyéb Streptococcusok)", frequency: "common", notes: "Gram-pozitív monomikrobiális fertőzés." },
      { name: "Enterococcus fajok", frequency: "rare", notes: "Általában nosocomialis vagy korábbi antibiotikum-kezelés után." }
    ],
    empirical: {
      mild: {
        firstLine: "Ceftriaxon 1x 2g i.v. VAGY Cefotaxim 3x 2g i.v. (kiváló és biztonságos lefedettség a leggyakoribb kórokozók ellen)",
        alternative: "Ciprofloxacin 2x 400 mg i.v. VAGY Levofloxacin 1x 500-750 mg i.v./p.o. (béta-laktám allergia esetén)",
        duration: "5 - 7 nap (klinikai javulás és ascites sejtszám csökkenés esetén)"
      },
      severe: {
        firstLine: "Piperacillin/Tazobactam 4x 4.5g i.v. VAGY Meropenem 3x 1g i.v. (nosocomialis SBP, szeptikus sokk vagy korábbi rezisztens kórokozó esetén)",
        alternative: "Ceftazidim/Avibactam 3x 2.5g i.v. (ha igazolt karbapenem-rezisztens Gram-negatív áll a háttérben)",
        duration: "7 - 10 nap"
      }
    },
    targeted: [
      { condition: "Fluorokinolon-érzékeny Enterobacterales", treatment: "Ciprofloxacin 2x 500 mg p.o. vagy Levofloxacin 1x 500 mg p.o. (orális váltás/step-down)." },
      { condition: "ESBL-termelő Klebsiella vagy E. coli", treatment: "Ertapenem 1x 1g i.v. vagy Meropenem 3x 1g i.v." },
      { condition: "MDR Gram-negatív baktérium", treatment: "Ceftazidim/Avibactam vagy Meropenem célzottan, a rezisztencia alapján." }
    ],
    guidelines: "EASL és AASLD SBP Irányelvek",
    diagnosticsNotes: "Diagnózis: Ascites punkció (paracentesis) kötelező! Ascites PMN (polimorfonukleáris granulocyta) sejtszám >= 250/ul (0.25G/l) diagnosztikus, tenyésztési eredménytől függetlenül! Az ascites folyadékot ágy mellett közvetlenül hemokultúrás palackokba kell oltani! Humán albumin infúzió (1.5g/ttkg az 1. napon, 1g/ttkg a 3. napon) adása indokolt, ha a szérum kreatinin >1 mg/dl, BUN >30 mg/dl vagy bilirubin >4 mg/dl, a hepatorenalis szindróma megelőzésére."
  },
  {
    id: "secondary_peritonitis",
    name: "Szekunder peritonitis (hasi perforatio/fertőzés)",
    category: "abdominal",
    pathogens: [
      { name: "Polimikrobiális flóra (aerob + anaerob)", frequency: "very-common", notes: "Mindig vegyes aerob és anaerob flóra jelenik meg a bélrendszerből származó perforációknál." },
      { name: "Escherichia coli & egyéb Enterobacterales", frequency: "very-common", notes: "A domináns Gram-negatív aerob kórokozók." },
      { name: "Bacteroides fragilis (és más anaerobok)", frequency: "very-common", notes: "Kulcsfontosságú obligát anaerob kórokozó, béta-laktamázt termel." },
      { name: "Enterococcus faecalis", frequency: "common", notes: "Főleg distalis bélperforációknál vagy korábbi kezelések után." },
      { name: "Pseudomonas aeruginosa", frequency: "rare", notes: "Főleg kórházi/nosocomialis szekunder peritonitisben." }
    ],
    empirical: {
      mild: {
        firstLine: "Amoxicillin/klavulánsav 3x 1.2g i.v. VAGY Ceftriaxon 1x 2g i.v. + Metronidazol 3x 500 mg i.v. (közösségben szerzett, enyhe-mérsékelt esetek)",
        alternative: "Ciprofloxacin 2x 400 mg i.v. + Metronidazol 3x 500 mg i.v. VAGY Moxifloxacin 1x 400 mg i.v.",
        duration: "4 - 7 nap (sikeres sebészi/intervenciós fókuszszanálás után)"
      },
      severe: {
        firstLine: "Piperacillin/Tazobactam 4x 4.5g i.v. VAGY Meropenem 3x 1g i.v. (vagy Imipenem 4x 500 mg i.v.) - súlyos, szeptikus, vagy nosocomialis peritonitis esetén",
        alternative: "Ceftazidim 3x 2g i.v. + Metronidazol 3x 500 mg i.v. VAGY Cefepim 3x 2g i.v. + Metronidazol 3x 500 mg i.v.",
        duration: "7 - 10 nap (fókuszszanálástól és klinikai javulástól függően)"
      }
    },
    targeted: [
      { condition: "ESBL-termelő Enterobacterales", treatment: "Ertapenem 1x 1g i.v. vagy Meropenem 3x 1g i.v." },
      { condition: "Pseudomonas aeruginosa", treatment: "Piperacillin/Tazobactam 4x 4.5g i.v. vagy Ceftazidim 3x 2g i.v. + Metronidazol, vagy Cefepim." },
      { condition: "Enterococcus faecalis (ha klinikailag jelentős)", treatment: "Ampicillin 4x 2g i.v. hozzáadása (ha a választott empirikus szer nem fedi, pl. Cephalosporinok)." }
    ],
    guidelines: "SIS és IDSA Intra-abdominalis Fertőzések Irányelvei",
    diagnosticsNotes: "Szekunder peritonitisben a legfontosabb a sebészeti vagy intervenciós fókuszszanálás (forráskontroll: műtét, drainage, varrat, resectio)! Enélkül az antibiotikum önmagában hatástalan. Diagnosztika: hasi CT (kontrasztos) a választandó vizsgálat. Natív hasi rtg szabad levegőt mutathat ki a rekesz alatt perforációban. Mintavétel (peritonealis folyadék tenyésztése aerob és anaerob palackokba) kötelező."
  },
  {
    id: "tertiary_peritonitis",
    name: "Tercier peritonitis (perzisztáló/recidiváló hasi fertőzés)",
    category: "abdominal",
    pathogens: [
      { name: "Multirezisztens Gram-negatív pálcák", frequency: "very-common", notes: "ESBL, karbapenem-rezisztens Klebsiella, Pseudomonas aeruginosa, Acinetobacter." },
      { name: "Enterococcus faecium és faecalis (VRE is)", frequency: "very-common", notes: "Gyakran szelektálódnak ki a korábbi cephalosporin/karbapenem kezelések hatására." },
      { name: "Candida fajok (C. albicans és non-albicans)", frequency: "common", notes: "Intraabdominalis candidiasis, komoly rizikótényező az elhúzódó antibiotikum használat." },
      { name: "Coagulase-negatív Staphylococcusok", frequency: "common", notes: "Gyakran biofilm-képzők hasi katétereken, dréneken." }
    ],
    empirical: {
      mild: {
        firstLine: "Piperacillin/Tazobactam 4x 4.5g i.v. + Fluconazol 1x 400 mg i.v. (ha a beteg stabil és alacsony a rezisztens kórokozók kockázata)",
        alternative: "N/A (Tercier peritonitisben enyhe eset szinte nincs, mindig komplex, intenzív osztályos szintű kezelést igényel)",
        duration: "Egyénre szabott"
      },
      severe: {
        firstLine: "Meropenem 3x 1-2g i.v. (nyújtott infúzióban) + Vancomycin 15-20 mg/ttkg i.v. 8-12 óránként (vagy Linezolid 2x 600 mg i.v., ha VRE gyanú áll fenn) + Echinocandin (pl. Caspofungin 70 mg telítő, majd 50 mg/nap i.v. vagy Anidulafungin)",
        alternative: "Ceftazidim/Avibactam 3x 2.5g i.v. + Linezolid + Caspofungin (ha multirezisztens Klebsiella vagy Pseudomonas igazolt)",
        duration: "Egyénre szabott (klinikai javulástól, láztalanságtól, CRP csökkenéstől és a fókusz teljes szanálásától függ, gyakran hetekig tart)"
      }
    },
    targeted: [
      { condition: "VRE (Vancomycin-rezisztens Enterococcus)", treatment: "Linezolid 2x 600 mg i.v. vagy Daptomycin 1x 10-12 mg/ttkg i.v." },
      { condition: "Candida albicans / tropicalis (érzékeny)", treatment: "Fluconazol 1x 400-800 mg i.v./p.o. (ha korábban Echinocandint kapott és stabilizálódott)." },
      { condition: "Karbapenem-rezisztens Klebsiella (KPC, OXA-48)", treatment: "Ceftazidim/Avibactam 3x 2.5g i.v. önmagában vagy kombinációban." }
    ],
    guidelines: "WSES és SIS Irányelvek",
    diagnosticsNotes: "Klinikai kép: Sikeresnek hitt szekunder peritonitis műtét után a beteg állapota nem javul, lázas marad, gyulladásos paraméterei (CRP, PCT, fvs) magasak, vagy szervi elégtelenség lép fel. Diagnosztika: Sürgős ismételt hasi CT, ultrahang. Relaparotomia vagy célzott CT-vezérelt mintavétel szükséges. A tercier peritonitis kezelése rendkívül nehéz, multidiszciplináris (sebész, infektológus, intenzíves) megközelítést igényel, magas mortalitású kórkép!"
  },
  {
    id: "acute_cholecystitis",
    name: "Akut cholecystitis (epehólyag-gyulladás - Tokyo TG18)",
    category: "abdominal",
    pathogens: [
      { name: "Escherichia coli", frequency: "very-common", notes: "A leggyakoribb epeúti kórokozó." },
      { name: "Klebsiella fajok", frequency: "common", notes: "Gyakori Gram-negatív epeúti kórokozó." },
      { name: "Enterococcus fajok", frequency: "common", notes: "Gyakrabban idős korban, súlyos (Grade II/III) vagy nosocomialis fertőzésben." },
      { name: "Anaerobok (pl. Clostridium, Bacteroides)", frequency: "rare", notes: "Gyakran gázképző, gangrenosus cholecystitis hátterében állnak." }
    ],
    empirical: {
      mild: {
        firstLine: "Ampicillin/Sulbactam 4x 1.5-3g i.v. VAGY Ceftriaxon 1x 2g i.v. VAGY Cefazolin 3x 1-2g i.v. (Grade I esetén)",
        alternative: "Ciprofloxacin 2x 400 mg i.v. + Metronidazol 3x 500 mg i.v. VAGY Levofloxacin 1x 500 mg i.v. + Metronidazol 3x 500 mg i.v.",
        duration: "4 - 7 nap (ha elvégzik az epehólyag-eltávolítást - cholecystectomy - és nincs szövődmény, az antibiotikum a műtét után 24 órán belül leállítható!)"
      },
      severe: {
        firstLine: "Piperacillin/Tazobactam 4x 4.5g i.v. VAGY Meropenem 3x 1g i.v. (ha ESBL rizikó áll fenn, vagy a beteg instabil/szeptikus)",
        alternative: "Cefepim 3x 2g i.v. + Metronidazol 3x 500 mg i.v. VAGY Aztreonam (béta-laktám allergia) + Metronidazol.",
        duration: "4 - 7 nap (a fókuszszanálástól/műtéttől vagy drénezéstől számítva)"
      }
    },
    targeted: [
      { condition: "ESBL-termelő Enterobacterales", treatment: "Ertapenem 1x 1g i.v. vagy Meropenem 3x 1g i.v." },
      { condition: "Pseudomonas aeruginosa", treatment: "Piperacillin/Tazobactam 4x 4.5g i.v. vagy Ceftazidim 3x 2g i.v. vagy Cefepim 3x 2g i.v." },
      { condition: "Enterococcus faecalis (Grade III)", treatment: "Ampicillin 4x 2g i.v. vagy Piperacillin/Tazobactam." }
    ],
    guidelines: "Tokyo Guidelines 2018 (TG18) for Acute Cholecystitis",
    diagnosticsNotes: "Diagnózis: Murphy-jel, jobb bordaív alatti fájdalom/érzékenység, láz, leukocytosis/emelkedett CRP és ultrahangon látható jelek (epehólyagfal megvastagodás >4mm, pericholecystás folyadék, epekövesség, szonografikus Murphy-jel). Súlyossági osztályozás (Tokyo): Grade I (enyhe, lokális), Grade II (mérsékelt, palpálható massza, fvs >18G/l, >72h tünetek, gangrena/tályog), Grade III (súlyos, szervi elégtelenség: cardiovascularis, neurológiai, respiratoricus, renalis, hepaticus, hematológiai). Grade III esetén sürgős epehólyag drénezés (PTGBD) vagy sürgős cholecystectomy javasolt!"
  },
  {
    id: "acute_cholangitis",
    name: "Akut cholangitis (epeút-gyulladás - Tokyo TG18)",
    category: "abdominal",
    pathogens: [
      { name: "Escherichia coli", frequency: "very-common", notes: "A leggyakoribb kórokozó." },
      { name: "Klebsiella fajok", frequency: "very-common", notes: "Gyakran társul magas bélcsatorna-elzáródással." },
      { name: "Enterococcus faecalis", frequency: "common", notes: "Különösen gyakori epeúti obstrukció és stentek jelenlétében." },
      { name: "Pseudomonas aeruginosa", frequency: "common", notes: "Gyakoribb korábbi epeúti manipulációk, fémstentek után." },
      { name: "Bacteroides fragilis & egyéb anaerobok", frequency: "common", notes: "Gyakran polimikrobiális fertőzések részese." }
    ],
    empirical: {
      mild: {
        firstLine: "Ceftriaxon 1x 2g i.v. VAGY Ampicillin/Sulbactam 4x 1.5-3g i.v. VAGY Cefotaxim 3x 2g i.v. (mindig ellenőrizni kell az epeúti drénezés szükségességét!)",
        alternative: "Ciprofloxacin 2x 400 mg i.v. + Metronidazol 3x 500 mg i.v. VAGY Levofloxacin 1x 500 mg i.v. + Metronidazol 3x 500 mg i.v.",
        duration: "4 - 7 nap (a sikeres epeúti dekompresszió/drénezés után)"
      },
      severe: {
        firstLine: "Piperacillin/Tazobactam 4x 4.5g i.v. VAGY Meropenem 3x 1g i.v. (Grade III-ban vagy szeptikus sokkban választandó, kiváló epeúti kiválasztódás)",
        alternative: "Cefepim 3x 2g i.v. + Metronidazol 3x 500 mg i.v. VAGY Aztreonam (béta-laktám allergia) + Metronidazol + Vancomycin.",
        duration: "4 - 7 nap (ha nincs bakteriémia; pozitív hemokultúra esetén legalább 7-14 napos kezelés javasolt)"
      }
    },
    targeted: [
      { condition: "Enterococcus faecalis", treatment: "Ampicillin 4x 2g i.v. vagy Piperacillin/Tazobactam. (Cephalosporinok ellenállók!)." },
      { condition: "ESBL-termelő Enterobacterales", treatment: "Ertapenem 1x 1g i.v. vagy Meropenem 3x 1g i.v." },
      { condition: "Pseudomonas aeruginosa (érzékeny)", treatment: "Ceftazidim 3x 2g i.v. vagy Piperacillin/Tazobactam." }
    ],
    guidelines: "Tokyo Guidelines 2018 (TG18) for Acute Cholangitis",
    diagnosticsNotes: "Klinikai kép: Charcot-triász (láz/hidegrázás, sárgaság, jobb bordaív alatti hasi fájdalom) vagy Reynolds-pentád (Charcot-triász + hypotensio és zavartság). Diagnosztikai kritériumok (Tokyo): szisztémás gyulladás, cholestasis (bilirubin >=2 mg/dl, ALP, GGT emelkedett) és képalkotó (UH, CT, MRCP) lelet: tágult epeút vagy obstrukció (pl. kő, tumor, stent). KEZELÉSI KULCS: Azonnali vagy sürgős epeúti dekompresszió/drénezés (ERCP + papillotomia/stentelés v. ENBD drén, v. PTBD)! Drénezés nélkül a halálozás közel 100%! Hemokultúra levétele kötelező, gyakran pozitív!"
  },
  {
    id: "erysipelas",
    name: "Erysipelas (Orbánc)",
    category: "sst_bone",
    pathogens: [
      { name: "Streptococcus pyogenes (A-csoportú Streptococcus)", frequency: "very-common", notes: "Az esetek túlnyomó többségéért felelős béta-hemolizáló Streptococcus." },
      { name: "Egyéb béta-hemolizáló Streptococcusok (B, C, G csoport)", frequency: "common", notes: "Gyakoriak, különösen nyirokkeringési zavar vagy vénás elégtelenség mellett." },
      { name: "Staphylococcus aureus", frequency: "rare", notes: "Ritka tiszta erysipelasban, inkább cellulitisben vagy bullosus formában fordul elő." }
    ],
    empirical: {
      mild: {
        firstLine: "Phenoxymethylpenicillin (Penicillin V) 4x 250-500 mg p.o. VAGY Amoxicillin 3x 500 mg p.o. (ha orálisan kezelhető)",
        alternative: "Clindamycin 3x 300-450 mg p.o. VAGY Macrolidok (pl. Clarithromycin 2x 250-500 mg p.o. - magas rezisztencia lehetséges!) béta-laktám allergia esetén",
        duration: "5 - 7 nap (szükség esetén 10 napra hosszabbítható)"
      },
      severe: {
        firstLine: "Benzylpenicillin (Penicillin G) 4x 1.2-2.4 g (2-4 ME) i.v. VAGY Ceftriaxon 1x 1-2g i.v. VAGY Cefazolin 3x 1-2g i.v.",
        alternative: "Clindamycin 3x 600-900 mg i.v. VAGY Moxifloxacin 1x 400 mg i.v.",
        duration: "7 - 10 nap (klinikai javulástól függően orális step-downra váltva)"
      }
    },
    targeted: [
      { condition: "Igazolt Streptococcus pyogenes", treatment: "Penicillin G i.v. vagy Penicillin V p.o." },
      { condition: "Társuló Staphylococcus aureus (nem-MRSA)", treatment: "Cefazolin i.v., Amoxicillin/klavulánsav i.v./p.o., vagy Flucloxacillin." },
      { condition: "Béta-laktám allergia", treatment: "Clindamycin vagy Vancomycin célzottan." }
    ],
    guidelines: "IDSA Skin and Soft Tissue Infections (SSTI) Guidelines & Hazai Infektológiai Útmutatók",
    diagnosticsNotes: "Klinikai kép: Éles határú, lángnyelvszerűen terjedő, intenzív vörös, meleg, fájdalmas bőrpír, gyakran hidegrázással és magas lázzal kezdődik. Leggyakrabban az alsó végtagon vagy az arcon jelentkezik. Belépési kaput (pl. gombás interdigitalis fissura, sérülés) keresni és kezelni kell! Diagnózis: Elsősorban klinikai diagnózis. Laborban magas CRP, fvs és balratolt vérkép. Hemokultúra ritkán pozitív (<5%), de súlyos vagy szisztémás tüneteknél leveendő."
  },
  {
    id: "cellulitis",
    name: "Cellulitis (Kötőszövet-gyulladás)",
    category: "sst_bone",
    pathogens: [
      { name: "Streptococcus pyogenes", frequency: "very-common", notes: "A nem-purulens cellulitisek fő kórokozója." },
      { name: "Staphylococcus aureus (MSSA)", frequency: "very-common", notes: "Különösen purulens (gennyesedő) cellulitis, tályog vagy trauma után." },
      { name: "Staphylococcus aureus (MRSA)", frequency: "common", notes: "Rizikótényezők (korábbi MRSA, egészségügyi kontaktus, intravénás droghasználat) esetén gondolni kell rá." },
      { name: "Gram-negatív pálcák (pl. Pseudomonas)", frequency: "rare", notes: "Immunszuppresszió, neutropenia, vagy vízzel való érintkezés (pl. sérülés édes/sós vízben) esetén." }
    ],
    empirical: {
      mild: {
        firstLine: "Amoxicillin/klavulánsav 3x 1g VAGY Cephalexin 4x 500 mg p.o. (ha nem gennyes); Sulfamethoxazol/Trimethoprim (Cotrimoxazol) 2x 960 mg p.o. ha MRSA gyanú áll fenn",
        alternative: "Clindamycin 3x 300-450 mg p.o. VAGY Linezolid 2x 600 mg p.o.",
        duration: "5 - 10 nap"
      },
      severe: {
        firstLine: "Cefazolin 3x 1-2g i.v. VAGY Amoxicillin/klavulánsav 3x 1.2g i.v.; MRSA gyanú esetén Vancomycin 15-20 mg/ttkg i.v. 8-12 óránként VAGY Linezolid 2x 600 mg i.v.",
        alternative: "Piperacillin/Tazobactam 4x 4.5g i.v. (ha felmerül Gram-negatív vagy polimikrobiális keverék, pl. diabeteses láb vagy decubitus talaján kialakuló cellulitis)",
        duration: "7 - 14 nap (klinikai lefutás és társuló betegségek alapján)"
      }
    },
    targeted: [
      { condition: "Igazolt MSSA (methicillin-érzékeny S. aureus)", treatment: "Flucloxacillin 4x 1-2g i.v. / p.o. vagy Cefazolin 3x 1-2g i.v." },
      { condition: "Igazolt MRSA", treatment: "Vancomycin i.v., Linezolid i.v./p.o., Clindamycin i.v./p.o. vagy Trimethoprim/Sulfamethoxazole p.o." },
      { condition: "Pseudomonas aeruginosa", treatment: "Ceftazidim 3x 2g i.v. vagy Piperacillin/Tazobactam 4x 4.5g i.v. vagy Ciprofloxacin." }
    ],
    guidelines: "IDSA Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections",
    diagnosticsNotes: "Klinikai kép: Diffúz, nem éles határú, mélyebb bőr- és subcutan szöveti gyulladás, bőrpír, duzzanat, melegség és fájdalom. Gyakran társul lokális trauma, műtéti seb, ödéma vagy krónikus bőrbetegség talaján. Diagnosztika: Klinikai kép alapján. Gennyes váladékból tenyésztés vétel kötelező! Ultrahang javasolt rejtett tályog kizárására, ha fluktuáció vagy bizonytalan duzzanat észlelhető."
  },
  {
    id: "fasciitis_necrotisans",
    name: "Nekrotizáló fasciitis (Fasciitis necrotisans)",
    category: "sst_bone",
    pathogens: [
      { name: "Polimikrobiális flóra (I. típus)", frequency: "very-common", notes: "Vegyes aerob és anaerob flóra (bélbaktériumok, Streptococcusok, Bacteroides). Leggyakoribb törzs, főleg diabetesben és műtétek után." },
      { name: "Streptococcus pyogenes (II. típus - 'húsevő baktérium')", frequency: "common", notes: "Monomikrobiális fertőzés, fiatal, egészséges egyéneknél is előfordul, rendkívül agresszív." },
      { name: "Clostridium perfringens VAGY septicum (III. típus)", frequency: "rare", notes: "Gázgangréna, anaerob mionekrózis képében jelentkezik." },
      { name: "Staphylococcus aureus (MRSA is)", frequency: "common", notes: "Monomikrobiális II. típus részeként vagy polimikrobiális formában." }
    ],
    empirical: {
      mild: {
        firstLine: "N/A (Nekrotizáló fasciitisben enyhe vagy közepes eset nincs, minden gyanús vagy igazolt eset azonnali, életmentő multidiszciplináris vészhelyzet!)",
        alternative: "N/A",
        duration: "N/A"
      },
      severe: {
        firstLine: "Piperacillin/Tazobactam 4x 4.5g i.v. VAGY Meropenem 3x 1g i.v. + Clindamycin 3x 900 mg i.v. (a toxin-termelés gátlására!) + Vancomycin 15-20 mg/ttkg i.v. (MRSA lefedésére)",
        alternative: "Ceftriaxon 1x 2g i.v. + Metronidazol 3x 500 mg i.v. + Clindamycin 3x 900 mg i.v. + Vancomycin VAGY Linezolid 2x 600 mg i.v. (helyettesítheti a Clindamycint és a Vancomycint)",
        duration: "Egyénre szabott (a sebészi debridement-ek befejezéséig, a láztalanság után még legalább 48-72 óráig, és amíg a necrosis terjedése meg nem áll)"
      }
    },
    targeted: [
      { condition: "A-csoportú Streptococcus (II. típusú necrotising fasciitis)", treatment: "Penicillin G 4x 4 ME i.v. + Clindamycin 3x 900 mg i.v. (szinergista hatás és toxin szupresszió)." },
      { condition: "Clostridium myonecrosis (gázgangréna)", treatment: "Penicillin G 4x 4 ME i.v. + Clindamycin 3x 900 mg i.v." },
      { condition: "MRSA", treatment: "Vancomycin i.v., Linezolid i.v. vagy Daptomycin i.v." }
    ],
    guidelines: "IDSA SSTI Guidelines & WSES Guidelines for skin and soft tissue infections",
    diagnosticsNotes: "KEZELÉSI KULCS: Azonnali, radikális sebészi feltárás és debridement (minden elhalt szövet eltávolítása)! Az antibiotikum önmagában teljesen hatástalan, a sebészi késlekedés óránként növeli a halálozást. Klinikai jelek: A látható bőrpírhoz képest aránytalanul heves, kibírhatatlan fájdalom, gyors progresszió, bullák (főleg hemorrhagiás), krepitáció (gázképződés), érzéketlen bőrfelszínek, fásultság, szeptikus sokk. Diagnosztika: Hasi/lágyrész CT gázt és fasciális ödémát mutathat. LRINEC pontrendszer segíthet, de negatív képalkotó vagy labor nem zárja ki a diagnózist!"
  },
  {
    id: "osteomyelitis",
    name: "Osteomyelitis (Csontvelőgyulladás)",
    category: "sst_bone",
    pathogens: [
      { name: "Staphylococcus aureus (MSSA & MRSA)", frequency: "very-common", notes: "A leggyakoribb kórokozó minden korosztályban (hematogén és kontakt úton is)." },
      { name: "Coagulase-negatív Staphylococcusok (pl. S. epidermidis)", frequency: "common", notes: "Különösen implantátumok, protézisek jelenléte esetén." },
      { name: "Enterobacterales (pl. E. coli, Klebsiella)", frequency: "common", notes: "Főleg időseknél, húgyúti fertőzések hematogén szórása után vagy diabeteses láb szövődményeként." },
      { name: "Pseudomonas aeruginosa", frequency: "common", notes: "Intravénás droghasználók, talptájéki szúrt sérülések vagy nosocomialis beavatkozások után." }
    ],
    empirical: {
      mild: {
        firstLine: "Flucloxacillin 4x 500-1000 mg p.o. VAGY Amoxicillin/klavulánsav 3x 1g p.o. VAGY Clindamycin 3x 450 mg p.o. (kizárólag stabil betegben, krónikus fenntartó kezelésként vagy korai orális váltásként)",
        alternative: "Ciprofloxacin 2x 500-750 mg p.o. (ha Gram-negatív lefedettség szükséges, csontpenetrációja kiváló!)",
        duration: "4 - 6 hét (krónikus vagy nem-resecálható osteomyelitis esetén akár hónapokig is tarthat)"
      },
      severe: {
        firstLine: "Cefazolin 3x 2g i.v. VAGY Ceftriaxon 1x 2g i.v. + Vancomycin 15-20 mg/ttkg i.v. q8-12h (empirikus lefedettség S. aureusra és MRSA-ra, valamint Gram-negatívokra)",
        alternative: "Piperacillin/Tazobactam 4x 4.5g i.v. VAGY Meropenem 3x 1g i.v. (ha Pseudomonas kockázat vagy diabeteses láb fertőzés áll fenn)",
        duration: "Hatékony sebészi fókuszszanálás után legalább 4-6 hét i.v. vagy nagy dózisú orális terápia"
      }
    },
    targeted: [
      { condition: "MSSA (methicillin-érzékeny S. aureus)", treatment: "Cefazolin 3x 2g i.v. vagy Flucloxacillin 4x 2g i.v., step-downként orális Amoxicillin/klavulánsav vagy Clindamycin." },
      { condition: "MRSA", treatment: "Vancomycin i.v., Daptomycin 1x 6-8 mg/ttkg i.v., Linezolid 2x 600 mg i.v./p.o. vagy Clindamycin." },
      { condition: "Gram-negatív pálcák (érzékeny)", treatment: "Ciprofloxacin 2x 750 mg p.o. vagy Levofloxacin 1x 750 mg p.o. (kiváló csontpenetráció!)" }
    ],
    guidelines: "IDSA Osteomyelitis Guidelines & Hazai Szakmai Irányelvek",
    diagnosticsNotes: "Diagnózis kulcsa: Csontbiopszia és csonttenyésztés (műtéti vagy CT-vezérelt)! Felületes sebtampon tenyésztése félrevezető és nem helyettesíti a csontbiopsziát. Képalkotás: Az MRI a legérzékenyebb és legspecifikusabb képalkotó módszer. Röntgenen a csontdestrukció csak 2-3 hét után válik láthatóvá. Kezelés: Gyakran kombinált sebészi (elhalt szekveszterek eltávolítása, csontvágás) és hosszas célzott antibiotikus kezelést igényel."
  },
  {
    id: "spondylodiscitis",
    name: "Spondylodiscitis (Csigolyatest- és porckoronggyulladás)",
    category: "sst_bone",
    pathogens: [
      { name: "Staphylococcus aureus", frequency: "very-common", notes: "A hematogén spondylodiscitisek leggyakoribb kórokozója (>50%)." },
      { name: "Coagulase-negatív Staphylococcusok", frequency: "common", notes: "Főleg korábbi gerincműtétek, epiduralis katéterezés után." },
      { name: "Enterobacterales (pl. E. coli)", frequency: "common", notes: "Gyakran húgyúti fertőzések, szepszis hematogén szövődménye, különösen idős korban." },
      { name: "Mycobacterium tuberculosis (Pott-kór)", frequency: "rare", notes: "Krónikus, lassan progrediáló esetekben, jellegzetes hidegtályog képződéssel." }
    ],
    empirical: {
      mild: {
        firstLine: "N/A (Spondylodiscitis gyanúja esetén az antibiotikum empirikus elkezdése nem javasolt, kivéve ha a beteg instabil! Mindig törekedni kell az előzetes mikrobiológiai diagnózisra.)",
        alternative: "N/A",
        duration: "N/A"
      },
      severe: {
        firstLine: "Cefazolin 3x 2g i.v. VAGY Ceftriaxon 1x 2g i.v. + Vancomycin 15-20 mg/ttkg i.v. (ha a beteg szepszisben van vagy neurológiai kiesései vannak)",
        alternative: "Piperacillin/Tazobactam 4x 4.5g i.v. VAGY Meropenem 3x 1g i.v. (korábbi gerincműtét, nosocomialis vagy húgyúti fókusz gyanúja esetén)",
        duration: "Minimum 6 hét (teljesen dekompenzált vagy tuberculosisos esetben jóval hosszabb, akár 6-12 hónap)"
      }
    },
    targeted: [
      { condition: "MSSA (Staphylococcus aureus)", treatment: "Cefazolin 3x 2g i.v. vagy Flucloxacillin 4x 2g i.v., step-downként orális Clindamycin vagy Amoxicillin/klavulánsav." },
      { condition: "MRSA", treatment: "Vancomycin i.v. (célkoncentráció 15-20 ug/ml) vagy Daptomycin 1x 8-10 mg/ttkg i.v." },
      { condition: "Enterobacterales (érzékeny)", treatment: "Ciprofloxacin 2x 500-750 mg p.o. vagy Levofloxacin 1x 750 mg p.o., vagy Ceftriaxon i.v." }
    ],
    guidelines: "2015 IDSA Clinical Practice Guidelines for the Diagnosis and Treatment of Native Vertebral Osteomyelitis",
    diagnosticsNotes: "Klinikai kép: Lokális, tompa, terhelésre fokozódó gerincfájdalom, láz (csak az esetek ~50%-ában van jelen!), emelkedett CRP és fvs. Neurológiai tünetek (pl. végtaggyengeség, vizelet-széklet incontinentia) epiduralis tályog gyanúját keltik (sürgős idegsebészeti konzílium!). Diagnosztika: Gerinc MRI (választandó vizsgálat). KÖTELEZŐ: Legalább 2 pár hemokultúra! Ha a hemokultúra negatív, CT-vezérelt tűbiopszia elvégzése kötelező az antibiotikum megkezdése előtt (kivéve instabilitás/sokk)!"
  },
  {
    id: "febrile_neutropenia",
    name: "Neutropeniás láz",
    category: "sepsis",
    pathogens: [
      { name: "Pseudomonas aeruginosa", frequency: "very-common", notes: "Rendkívül veszélyes, gyors lefolyású, azonnali lefedettséget igényel." },
      { name: "Escherichia coli", frequency: "very-common", notes: "Gyakori Gram-negatív transzlokációs kórokozó." },
      { name: "Klebsiella pneumoniae", frequency: "very-common", notes: "Gyakran ESBL vagy carbapenemáz-termelő kórházi törzsek." },
      { name: "Koaguláz-negatív Staphylococcusok (pl. S. epidermidis)", frequency: "common", notes: "Leggyakoribb Gram-pozitív kórokozó, főleg centrális vénás katéter jelenlétében." },
      { name: "Staphylococcus aureus", frequency: "common", notes: "Súlyos, metastatikus fertőzésekre és szepszisre hajlamosít." },
      { name: "Viridans Streptococcusok", frequency: "common", notes: "Súlyos mucositis esetén okozhatnak súlyos toxicus szindrómát." }
    ],
    empirical: {
      mild: {
        firstLine: "N/A (Alacsony rizikójú betegeknél kivételes esetben: Ciprofloxacin 2x 500-750 mg p.o. + Amoxicillin/klavulánsav 3x 1g p.o. szoros otthoni monitorozás mellett)",
        alternative: "N/A",
        duration: "A lázmentesség után még legalább 48-72 óráig, ÉS amíg az abszolút neutrophilszám (ANC) tartósan > 500/ul (0.5 G/l) nem lesz."
      },
      severe: {
        firstLine: "Pseudomonas-ellenes béta-laktám monoterápia: Piperacillin/Tazobactam 4x 4.5g i.v. VAGY Cefepim 3x 2g i.v. VAGY Meropenem 3x 1g i.v. (ha ESBL gyanú v. hemodinamikai instabilitás áll fenn)",
        alternative: "Kombinációs kezelés (ha rezisztens törzs gyanúja áll fenn): Piperacillin/Tazobactam v. Cefepim + Amikacin 1x 15-20 mg/ttkg i.v. (Katéter-gyanú, lágyrész-fertőzés v. sokk esetén Vancomycin i.v. hozzáadása javasolt)",
        duration: "A lázmentesség után még legalább 48-72 óráig, ÉS amíg az abszolút neutrophilszám (ANC) tartósan > 500/ul (0.5 G/l) nem lesz."
      }
    },
    targeted: [
      { condition: "Gram-negatív pálca (pl. igazolt Pseudomonas aeruginosa)", treatment: "Célzottan Piperacillin/Tazobactam 4x 4.5g i.v., Cefepim 3x 2g i.v. v. Ceftazidim 3x 2g i.v., szükség szerint Amikacinnal kombinálva." },
      { condition: "Igazolt MRSA vagy katéter-fertőzés", treatment: "Vancomycin i.v. (célkoncentráció 15-20 ug/ml) vagy Linezolid 2x 600 mg i.v. vagy Teicoplanin." },
      { condition: "Perzisztáló láz (4-7. nap után) széles spektrumú antibakteriális kezelés ellenére", treatment: "Empirikus gombaellenes lefedettség indítása: Caspofungin i.v. (vagy más echinocandin) VAGY Voriconazol VAGY Liposomalis Amphotericin B." }
    ],
    guidelines: "ECIL-4 / ECIL-9 Guidelines for Febrile Neutropenia, IDSA Clinical Practice Guideline for the Use of Antimicrobial Agents in Neutropenic Patients with Cancer",
    diagnosticsNotes: "DEFINÍCIÓ: Láz (egyszeri szájüregi hőmérséklet >38.3 °C vagy tartósan >38.0 °C legalább 1 órán át) ÉS Neutropenia (abszolút neutrophilszám /ANC/ < 500/ul, vagy < 1000/ul és várhatóan <500/ul-re esik 48 órán belül). Sürgősségi állapot! Az első dózis antibiotikumot a jelentkezéstől számított 1 órán belül be kell adni! DIAGNOSZTIKA: Azonnali 2 pár hemokultúra (perifériás + centrális vénás katéterből egyaránt), vizelettenyésztés, mellkas röntgen, fizikális vizsgálat (különös tekintettel a gáttájékra, katéter belépési pontokra). MASCC index alapján rizikóbecslés végezhető (score >=21: alacsony rizikó, hazaküldhető orális terápiával)."
  },
  {
    id: "salmonella_campylobacter_gastroenteritis",
    name: "Salmonella és Campylobacter gastroenteritis",
    category: "abdominal",
    pathogens: [
      { name: "Campylobacter jejuni / coli", frequency: "very-common", notes: "A bakteriális enteritisek egyik leggyakoribb okozója, gyakran baromfi közvetíti." },
      { name: "Salmonella enterica (nem-typhi törzsek)", frequency: "very-common", notes: "Gyakori ételmérgezéses kórokozó (tojás, húsfélék), bacteremiát okozhat veszélyeztetett csoportokban." },
      { name: "Shigella fajok (S. sonnei, S. flexneri)", frequency: "common", notes: "Igen alacsony fertőző ágens szám is elegendő, vérhas képe, kontakt úton terjed." },
      { name: "Yersinia enterocolitica", frequency: "rare", notes: "Pseudoappendicitist okozhat (jobb alhasi fájdalom, mesenterialis lymphadenitis)." }
    ],
    empirical: {
      mild: {
        firstLine: "N/A (Enyhe/közepes esetekben antibiotikum adása kontraindikált vagy nem javasolt, mert Salmonella esetén nyújtja a hordozást és növeli a rezisztenciát! Kizárólag rehidrálás és tüneti terápia javasolt!)",
        alternative: "N/A",
        duration: "N/A"
      },
      severe: {
        firstLine: "Azithromycin 1x 500 mg p.o. 3 napig VAGY Ciprofloxacin 2x 500 mg p.o. 3-5 napig (kizárólag ha szisztémás tünetek, magas láz, véres széklet, vagy súlyos társbetegség /immunszuppresszió/ áll fenn)",
        alternative: "Ceftriaxon 1x 1-2g i.v. 3-5 napig (ha a beteg nem tolerálja az orális bevitelt, vagy szisztémás szóródás gyanúja áll fenn)",
        duration: "3 - 5 nap (szisztémás szövődmények esetén 7-14 nap)"
      }
    },
    targeted: [
      { condition: "Igazolt Campylobacter jejuni (súlyos vagy elhúzódó lefolyás)", treatment: "Azithromycin 1x 500 mg p.o. 3 napig (Campylobacter esetén a fluorokinolon rezisztencia Magyarországon rendkívül magas!)." },
      { condition: "Igazolt Salmonella enterica (szisztémás szóródás vagy rizikócsoport - csecsemő, idős, immunszupprimált, vaszkuláris graft/aneurysma)", treatment: "Ciprofloxacin 2x 500 mg p.o. vagy Ceftriaxon 1-2g i.v. 5-7 napig (súlyos immunszuppresszió vagy endovascularis fertőzés gyanújakor 14 napig, esetenként hetekig)." },
      { condition: "Igazolt Shigellosis (súlyos eset vagy járványügyi kockázat)", treatment: "Azithromycin 1x 500 mg p.o. 3 napig VAGY Ciprofloxacin 2x 500 mg p.o. 3 napig VAGY Ceftriaxon 1-2g i.v. 3 napig." }
    ],
    guidelines: "IDSA Infectious Diarrhea Guidelines, Hazai Infektológiai Szakmai Útmutatók",
    diagnosticsNotes: "KLINIKAI KÉP: Akut hasmenés (vizes vagy véres/nyákos), hasi fájdalom, görcsök, láz, hányinger/hányás. SZÖVŐDMÉNYEK: Kiszáradás, prerenalis veseelégtelenség. Salmonella bacteremia érbetegeknél endovasculáris fertőzést okozhat. Campylobacter után Guillain-Barré-szindróma vagy reaktív arthritis léphet fel. DIAGNOSZTIKA: Széklettenyésztés kötelező súlyos, lázas, véres székletű betegeknél, immunszuppresszióban, vagy járványgyanú esetén. Szisztémás tüneteknél hemokultúra vétele kötelező!"
  },
  {
    id: "clostridioides_difficile",
    name: "Clostridioides difficile fertőzés (CDI)",
    category: "abdominal",
    pathogens: [
      { name: "Clostridioides difficile (toxintermelő törzsek)", frequency: "very-common", notes: "Korábban Clostridium difficile. Spóraképző, anaerob Gram-pozitív pálca, nozocomiális hasmenések fő oka." }
    ],
    empirical: {
      mild: {
        firstLine: "Fidaxomicin 2x 200 mg p.o. 10 napig VAGY Vancomycin 4x 125 mg p.o. 10 napig (Megjegyzés: A Metronidazol 3x 500 mg p.o. 10 napig kizárólag nem-súlyos esetben és akkor javasolt, ha a fenti szerek nem elérhetők!)",
        alternative: "Metronidazol 3x 500 mg p.o. 10 napig (csak ha Fidaxomicin/Vancomycin nem hozzáférhető)",
        duration: "10 nap"
      },
      severe: {
        firstLine: "Fidaxomicin 2x 200 mg p.o. 10 napig VAGY Vancomycin 4x 125 mg p.o. 10 napig (Súlyos/komplikált esetben Vancomycin 4x 250-500 mg p.o. vagy nasogastricus szondán át, intravénás Metronidazol 3x 500 mg i.v. kezeléssel kombinálva!)",
        alternative: "Vancomycin 4x 125-500 mg p.o. + Metronidazol 3x 500 mg i.v. Súlyos ileus esetén rektális Vancomycin instilláció (beöntés) is alkalmazható.",
        duration: "10 nap (első kiújulás esetén elhúzódó/csökkenő adagolású /tapered/ v. pulzáló Vancomycin séma, vagy Fidaxomicin)"
      }
    },
    targeted: [
      { condition: "Első kiújulás (first recurrence)", treatment: "Fidaxomicin 2x 200 mg p.o. 10 napig (különösen ha korábban Vancomycint kapott), VAGY csökkenő/pulzáló dózisú Vancomycin séma (tapered and pulsed Vancomycin)." },
      { condition: "Többszörös kiújulás (multiple recurrences)", treatment: "Orális Vancomycin kúra, majd Bezlotoxumab i.v. (antitest) infúzió VAGY széklettranszplantáció (FMT - Fecal Microbiota Transplant) elvégzése." },
      { condition: "Fulmináns colitis (sokk, paralyticus ileus, toxicus megacolon)", treatment: "Nagy dózisú orális Vancomycin (4x 500 mg p.o. v. szondán) + Metronidazol 3x 500 mg i.v. + rektális Vancomycin beöntés. Azonnali sebészi konzílium (szubtotális kolektómia és ileostomia) szükséges!" }
    ],
    guidelines: "ESCMA/ESGCD 2021 Update on Clostridioides difficile infection, 2021 IDSA/SHEA Guidelines on Clostridioides difficile Infection",
    diagnosticsNotes: "KOCKÁZATI TÉNYEZŐK: Megelőző antibiotikum-kezelés (különösen klindamicin, fluorokinolonok, széles spektrumú béta-laktámok), idős kor, kórházi tartózkodás, protonpumpa-gátlók (PPI) használata. KLINIKAI KÉP: Bő, vizes hasmenés (gyakran jellegzetes rothadásos szagú), hasi fájdalom, láz, leukocytosis. Súlyos esetben pseudomembranosus colitis, toxicus megacolon, perforatio, szepszis. DIAGNOSZTIKA: Csak hasmenéses székletből szabad vizsgálni (formált székletből nem, kivéve ileus gyanú!). Kétlépcsős diagnosztikai algoritmus: GDH antigén v. PCR szűrés, majd pozitív esetben toxin A/B szabad toxin kimutatása (EIA). Csak a toxin-pozitív esetek tekintendők valódi infekciónak (a puszta hordozás nem kezelendő!)."
  },
  {
    id: "diverticulitis",
    name: "Akut diverticulitis",
    category: "abdominal",
    pathogens: [
      { name: "Escherichia coli", frequency: "very-common", notes: "A leggyakoribb Gram-negatív aerob kórokozó." },
      { name: "Bacteroides fragilis", frequency: "very-common", notes: "A leggyakoribb obligát anaerob kórokozó a vastagbélben." },
      { name: "Enterococcus faecalis / faecium", frequency: "common", notes: "Gyakran jelen van polimikrobiális keverékben, szinergista szerepe van." },
      { name: "Klebsiella fajok", frequency: "common", notes: "Társuló Gram-negatív aerob kórokozó." },
      { name: "Clostridium fajok", frequency: "rare", notes: "Egyéb anaerob bélbaktériumok." }
    ],
    empirical: {
      mild: {
        firstLine: "Amoxicillin/klavulánsav 3x 1g p.o. VAGY Ciprofloxacin 2x 500 mg p.o. + Metronidazol 3x 500 mg p.o.",
        alternative: "Levofloxacin 1x 500 mg p.o. + Metronidazol 3x 500 mg p.o. VAGY önmagában Moxifloxacin 1x 400 mg p.o.",
        duration: "5 - 7 nap (Megjegyzés: Enyhe, szövődménymentes diverticulitis esetén immunkompetens, stabil betegeknél az antibiotikum adása el is hagyható, kizárólag folyékony diéta és szoros obszerváció javasolt!)"
      },
      severe: {
        firstLine: "Piperacillin/Tazobactam 4x 4.5g i.v. VAGY Ceftriaxon 1x 2g i.v. + Metronidazol 3x 500 mg i.v. VAGY Cefotaxim 3x 2g i.v. + Metronidazol 3x 500 mg i.v.",
        alternative: "Ertapenem 1x 1g i.v. VAGY Meropenem 3x 1g i.v. (ha felmerül ESBL-termelő kórokozó gyanúja v. súlyos szepszis áll fenn)",
        duration: "4 - 7 nap (sikeres forráskontroll/drainage v. sebészi rezekció után; nem resecált vagy konzervatív úton kezelt súlyos esetekben hosszabb terápia szükséges lehet)"
      }
    },
    targeted: [
      { condition: "Igazolt ESBL-termelő bélbaktérium", treatment: "Ertapenem 1x 1g i.v. vagy Meropenem 3x 1g i.v." },
      { condition: "Pseudomonas aeruginosa jelenléte (ritka, főleg immunszupprimáltaknál)", treatment: "Piperacillin/Tazobactam 4x 4.5g i.v. vagy Ceftazidim 3x 2g i.v. + Metronidazol 3x 500 mg i.v. (vagy p.o.)." },
      { condition: "Béta-laktám allergia (súlyos)", treatment: "Ciprofloxacin 2x 400 mg i.v. (vagy 2x 750 mg p.o.) + Metronidazol 3x 500 mg i.v. (vagy p.o.)." }
    ],
    guidelines: "WSES guidelines for the management of acute left-sided colonic diverticulitis, Hazai Infektológiai és Sebészeti Irányelvek",
    diagnosticsNotes: "KLINIKAI KÉP: Bal alsó hasi fájdalom (bal oldali 'appendicitis'), láz, leukocytosis, emelkedett CRP, székrekedés vagy hasmenés. SZÖVŐDMÉNYEK: Tályog (Hinchey I-II), szabad perforatio és purulens/fekális peritonitis (Hinchey III-IV), fistula, strictura. DIAGNOSZTIKA: Hasi/kismedencei kontrasztanyagos CT a választandó képalkotó (szenzitivitás >95%). AKUT SZAKBAN kolonoszkópia végzése kontraindikált a megnövekedett perforációs veszély miatt! A lezajlás után 4-6 héttel kolonoszkópia elvégzése kötelező a colon malignitás kizárására."
  }
];
