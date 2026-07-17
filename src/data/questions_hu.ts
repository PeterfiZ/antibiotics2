/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { QuizQuestion } from '../types';

export const quizQuestionsData: QuizQuestion[] = [
  {
    id: "q1",
    type: "pharmacology",
    questionText: "Egy 62 éves férfi betegnél szisztémás Staphylococcus aureus fertőzés gyanúja áll fenn, és a tenyésztés igazolja, hogy a törzs meticillin-érzékeny (MSSA). Melyik a legmegfelelőbb elsővonalbeli intravénás kezelés a felsoroltak közül?",
    options: [
      "Vancomycin i.v.",
      "Cefazolin i.v.",
      "Ceftazidim i.v.",
      "Piperacillin / Tazobactam i.v."
    ],
    correctAnswerIndex: 1,
    explanation: "Bár a Vancomycin is hatékony az MSSA ellen, klinikai vizsgálatok egyértelműen bizonyítják, hogy béta-laktám-érzékeny staphylococcus fertőzésben a béta-laktámok (mint a Cefazolin, vagy oxacillin) gyorsabb baktericid hatást fejtenek ki és jobb klinikai kimenetelt biztosítanak (kisebb a mortalitás), mint a Vancomycin. A Cefazolin az MSSA szisztémás fertőzések arany standardja. A Ceftazidim Gram-negatív túlsúlyú szer, staphylococcusok ellen gyenge. A Pip/Tazo túl széles spektrumú, feleslegesen pazarolná a Gram-negatív és anaerob védelmet."
  },
  {
    id: "q2",
    type: "empirical",
    questionText: "Egy 68 éves nőbeteget vesznek fel a sürgősségi osztályra magas láz, produktív köhögés, dyspnoe és zavartság miatt. Vérnyomása 88/50 Hgmm, pulzusa 112/perc, légzésszáma 32/perc, testhőmérséklete 38.9 °C. A mellkas röntgen jobb oldali lobaris infiltrátumot mutat. Melyik a legmegfelelőbb kezdeti empirikus antibiotikum kezelés?",
    options: [
      "Amoxicillin 3x 1g p.o.",
      "Ceftriaxon 1x 2g i.v. + Clarithromycin 2x 500mg i.v.",
      "Ceftazidim 3x 2g i.v.",
      "Metronidazol 3x 500mg i.v."
    ],
    correctAnswerIndex: 1,
    explanation: "A beteg CURB-65 pontszáma 4 (zavartság, urea nem ismert de a légzésszám >= 30, alacsony vérnyomás, életkor > 65), ami súlyos közösségben szerzett tüdőgyulladásnak (súlyos CAP) felel meg, azonnali kórházi/intenzív elhelyezéssel és i.v. kezeléssel. Az empirikus kezelésnek le kell fednie a Streptococcus pneumoniae-t és az atípusos kórokozókat (Legionella, Mycoplasma) is. A Ceftriaxon (béta-laktám) + Clarithromycin (makrolid) kombináció az elfogadott standard irányelv. Az Amoxicillin p.o. enyhe esetekre való. A Ceftazidim nem hat a tüdőgyulladás fő kórokozóira (S. pneumoniae-re gyenge, atípusosra hatástalan). A Metronidazol csak anaerob ellenes szer, önmagában alkalmatlan.",
    caseData: {
      age: 68,
      gender: "nő",
      symptoms: ["Magas láz", "Produktív köhögés", "Légszomj (dyspnoe)", "Zavartság (konfúzió)"],
      vitals: {
        bp: "88/50 Hgmm",
        hr: 112,
        temp: "38.9 °C",
        rr: 32
      },
      labs: ["Mellkas rtg: jobb alsó lebenyi infiltrátum", "CRP: 185 mg/l", "Leukocyta: 16.4 G/l"]
    }
  },
  {
    id: "q3",
    type: "susceptibility",
    questionText: "Melyik állítás igaz az Enterococcus fajok természetes (intrinsic) antibiotikum érzékenységével kapcsolatban?",
    options: [
      "Minden Enterococcus érzékeny a harmadik generációs cephalosporinokra, mint a Ceftriaxon.",
      "Az Enterococcusok természetesen rezisztensek az összes cephalosporinra.",
      "Az Enterococcus faecium általában érzékeny az Ampicillinre.",
      "Az Enterococcus faecalis rezisztens a Vancomycinre és csak Linezoliddal kezelhető."
    ],
    correctAnswerIndex: 1,
    explanation: "Minden Enterococcus (faecalis, faecium stb.) természetesen és teljesen rezisztens az összes létező cephalosporinra (beleértve a Ceftriaxont és Cefepimet is). Ez egy kritikus farmakológiai tény: cephalosporin kezelés mellett gyakran alakul ki Enterococcus felülfertőződés (pl. húgyúti vagy bélrendszeri). Az E. faecium törzsek 90%-a szerzett rezisztenciát mutat ampicillinnel szemben. Az E. faecalis általában érzékeny marad ampicillinre és vancomycinre is (a VRE - Vancomycin rezisztens enterococcus - az E. faecium körében sokkal gyakoribb)."
  },
  {
    id: "q4",
    type: "pharmacology",
    questionText: "Egy 74 éves veseelégtelenségben szenvedő (eGFR: 22 ml/perc) húgyúti fertőzésben szenvedő nőbetegnél alsó húgyúti fertőzést (cystitis) diagnosztizálnak. Miért kontraindikált nála a Nitrofurantoin alkalmazása?",
    options: [
      "Mivel a Nitrofurantoin súlyos veseelégtelenséget (akut tubuláris nekrózist) okoz.",
      "Mivel csökkent vesefunkció mellett a Nitrofurantoin nem képes kiválasztódni és felhalmozódni a vizeletben, így hatástalan lesz a húgyhólyagban, miközben szisztémás toxicitást okoz.",
      "Mivel a Nitrofurantoin kizárólag a májban választódik ki és vesebetegekben inaktívvá válik.",
      "Mivel a Nitrofurantoin tönkreteszi a vese erythropoetin termelését."
    ],
    correctAnswerIndex: 1,
    explanation: "A Nitrofurantoin egy különleges szer: hatásának kifejtéséhez be kell jutnia a vizeletbe és ott nagy koncentrációt kell elérnie. Ha a GFR < 30 ml/perc, a vese szűrési kapacitása olyan alacsony, hogy a Nitrofurantoin nem jut be elegendő mennyiségben a húgyhólyagba, így nem fogja megölni a baktériumokat. Ezzel egy időben a vérben felhalmozódik (nem ürül ki), ami növeli a súlyos mellékhatások (pl. perifériás neuropathia, tüdőfibrosis) kockázatát. Ezért vesebetegségben nem a vese védelme, hanem a hatástalanság és a szisztémás toxicitás miatt tilos adni."
  },
  {
    id: "q5",
    type: "empirical",
    questionText: "Egy 19 éves egyetemi hallgatót szállítanak be a sürgősségi osztályra hirtelen fellépő magas láz, intenzív fejfájás, fényérzékenység és hányás miatt. Vizsgálatkor kifejezett tarkómerevség (meningizmus) észlelhető, a bőrén pedig apró, el nem nyomható petechiák láthatók a törzsén. Melyik a legmegfelelőbb azonnali teendő?",
    options: [
      "Vérvétel hemokultúrára, koponya CT, és LP elvégzése. Antibiotikumot csak a leletek megérkezése után szabad elkezdeni.",
      "Vérvétel hemokultúrára, majd azonnali empirikus Dexamethason i.v. és Ceftriaxon 2x 2g i.v. beadása, és ezt követően sürgős lumbálpunkció megfontolása.",
      "Ambuláns Ciprofloxacin 1x 500 mg p.o. felírása és a beteg hazaküldése szoros megfigyeléssel.",
      "Azonnali lumbálpunkció, majd megvárni a liquor laboreredményét (3 óra) az antibiotikum előtt."
    ],
    correctAnswerIndex: 1,
    explanation: "A betegnél akut purulens bakteriális meningitis és szepszis gyanúja áll fenn (petechiákkal kísért meningococcus gyanú). Bakteriális meningitisben minden óra késlekedés az antibiotikum beadásával jelentősen növeli a mortalitást és a neurológiai károsodás esélyét. A helyes sorrend: hemokultúra levétele, majd AZONNALI empirikus széles spektrumú antibiotikum (Ceftriaxon 2g i.v. bőségesen átjut a vér-agy gáton) + Dexamethason (gátolja a gyulladásos citokin-vihart, ami a baktériumok lízisekor keletkezik és csökkenti a hallásvesztést). Lumbálpunkciót csak a beteg stabilizálása után vagy a kizáró CT után kell végezni, az antibiotikum beadása emiatt egy percet sem késhet!",
    caseData: {
      age: 19,
      gender: "férfi",
      symptoms: ["Magas láz (39.5 °C)", "Súlyos fejfájás", "Fényérzékenység (photophobia)", "Hányás", "Petechiák a bőrön"],
      vitals: {
        bp: "105/65 Hgmm",
        hr: 120,
        temp: "39.6 °C",
        rr: 24
      },
      labs: ["Tarkómerevség: 3 ujjnyira", "Kernig és Brudzinski jelek: pozitívak"]
    }
  },
  {
    id: "q6",
    type: "susceptibility",
    questionText: "Melyik antibiotikum abszolút HATÁSTALAN a Pseudomonas aeruginosa ellen a felsoroltak közül?",
    options: [
      "Ciprofloxacin",
      "Cefepim",
      "Ertapenem",
      "Piperacillin / Tazobactam"
    ],
    correctAnswerIndex: 2,
    explanation: "Az Ertapenem az egyetlen carbapenem, amelynek egyáltalán nincs hatása a Pseudomonas aeruginosa és az Acinetobacter baumannii ellen (polarizált szerkezete miatt nem tud átjutni ezeknek a baktériumoknak a porin csatornáin). Emiatt kiváló 'carbapenem-spóroló' gyógyszer (pl. ESBL E. coli fertőzésre kiváló, miközben kíméli a Pseudomonas elleni arzenált). A Ciprofloxacin (orális/iv kinolon), Cefepim (4. gen cephalosporin) és a Pip/Tazo (Pseudomonas-ellenes penicillin) mind hatékonyak érzékeny Pseudomonas fertőzésekben."
  },
  {
    id: "q7",
    type: "pharmacology",
    questionText: "Melyik gyógyszerhatóanyag párosítás felelős a 'Red Man Syndrome' (Vörös ember szindróma) kialakulásáért, és hogyan előzhető meg?",
    options: [
      "Ceftriaxon - kalcium tartalmú infúzió elkerülésével.",
      "Vancomycin - az infúzió beadási sebességének lassításával (legalább 60 perc alatt beadva).",
      "Linezolid - sajtok és tiramin-gazdag ételek elkerülésével.",
      "Metronidazol - alkohol teljes tilalmával."
    ],
    correctAnswerIndex: 1,
    explanation: "A Red Man Syndrome a Vancomycin túl gyors intravénás beadásakor jelentkező, nem-immunológiai (nem IgE-mediált) hisztamin-felszabadulás. Jellemzője a nyak, arc és felsőtest intenzív kipirulása, viszketése, melyet hypotonia is kísérhet. Nem valódi allergia! Megelőzhető, ha a Vancomycint lassan, hígítva, legalább 60 perces (vagy 10 mg/perc sebességű) infúzióban csepegtetjük be. Ha már kialakult, az infúzió leállítása és antihisztamin adása javasolt."
  },
  {
    id: "q8",
    type: "susceptibility",
    questionText: "Melyik mechanizmus magyarázza meg, hogy a Legionella pneumophila és a Mycoplasma pneumoniae miért rezisztensek természetes módon az összes béta-laktám antibiotikumra (pl. Penicillinek, Cephalosporinok, Carbapenemek)?",
    options: [
      "Mivel kiterjedt spektrumú béta-laktamáz (ESBL) enzimeket termelnek.",
      "Mivel intracellulárisan szaporodnak, ahová a béta-laktámok nem penetrálnak, illetve a Mycoplasma egyáltalán nem rendelkezik peptidoglikán sejtfallal (a béta-laktámok támadáspontjával).",
      "Mivel megváltozott PBP-2a fehérjével rendelkeznek, mint az MRSA.",
      "Mivel aktív efflux pumpákkal azonnal kipumpálják a béta-laktámokat."
    ],
    correctAnswerIndex: 1,
    explanation: "A béta-laktámok hatásmechanizmusa a baktérium peptidoglikán sejtfalszintézisének (transzpeptidáció) gátlása. A Mycoplasma pneumoniae-nak egyáltalán nincs sejtfehérje-sejtfala (csak háromrétegű sejtmembránja van), így nincs rajta támadáspontja a penicillineknek és cephalosporinoknak! A Legionella pneumophila egy intracelluláris baktérium, amely alveolaris makrofágok belsejében él, a béta-laktámok polaritásuk miatt nem képesek áthatolni az emberi sejtmembránon és bejutni a sejtekbe. Ezért mindkét atípusos kórokozóra makrolidokat, tetracyclineket vagy fluorokinolonokat kell használni, melyek kiválóan penetrálnak sejten belülre."
  },
  {
    id: "q9",
    type: "empirical",
    questionText: "Egy 24 éves egészséges nőbeteg sürgős vizelési inger, fájdalmas, csípő vizelés (dyspnoe) és suprapubicus feszülés miatt jelentkezik. Láza nincs, deréktáji fájdalmat nem jelez. A vizelet tesztcsík nitrit és leukocyta pozitív. Melyik a legmegfelelőbb elsővonalbeli empirikus kezelés a legújabb urológiai irányelveknek megfelelően?",
    options: [
      "Ciprofloxacin 2x 500 mg p.o. 3 napig",
      "Fosfomycin trometamol 1x 3g p.o. egyszeri dózis",
      "Amoxicillin 3x 500 mg p.o. 7 napig",
      "Ceftriaxon 1x 1g i.v. egyszeri adag"
    ],
    correctAnswerIndex: 1,
    explanation: "A betegnek akut szövődménymentes cystitise van. Az EAU (Európai Urológus Társaság) irányelvei szerint az elsővonalbeli szerek a Fosfomycin trometamol (1x 3g egyszeri adag) vagy a Nitrofurantoin (2x 100mg 5 napig). A fluorokinolonokat (mint a Ciprofloxacin) az FDA és az EMA szigorú ajánlása alapján el kell kerülni nem szövődményes cystitisben a lehetséges tartós és rokkantságot okozó mellékhatások (inak, ízületek, idegrendszer) miatt, ezeket tartalékolni kell pyelonephritisre! Az Amoxicillin monoterápiában nem javasolt a magas E. coli rezisztencia miatt. Intravénás Ceftriaxon adása cystitisre indokolatlan ágyúval verébre lőni."
  },
  {
    id: "q10",
    type: "pharmacology",
    questionText: "Melyik állítás igaz a metronidazol és az alkohol együttes fogyasztásával kapcsolatban?",
    options: [
      "Nincs semmilyen interakció, nyugodtan fogyasztható alkohol a kúra alatt.",
      "Az alkohol semlegesíti a metronidazol hatását, így az antibiotikum hatástalan lesz.",
      "Diszulfirám-szerű reakciót vált ki (gátolja az acetaldehid-dehidrogenázt), ami súlyos hányingert, hányást, kipirulást, fejfájást és tachycardiát okoz.",
      "Az alkohol megakadályozza a metronidazol felszívódását a gyomorból."
    ],
    correctAnswerIndex: 2,
    explanation: "A metronidazol gátolja az acetaldehid-dehidrogenáz enzimet a májban, amely az alkohol lebontásának második lépéséért felelős. Emiatt a szervezetben felhalmozódik a rendkívül toxikus acetaldehid intermedier, ami úgynevezett diszulfirám-szerű reakciót (disulfiram-like reaction) okoz. Tünetei: arc és nyak intenzív kipirulása, lüktető fejfájás, súlyos hányinger, hányás, verítékezés, tachycardia és akár kollapszus. Ezért a metronidazol kúra alatt és annak befejezése után még legalább 48 óráig az alkoholos italok, de még az alkoholtartalmú szájvizek vagy gyógyszerek fogyasztása is szigorúan tilos!"
  },
  {
    id: "q11",
    type: "susceptibility",
    questionText: "Egy 78 éves, immunszupprimált (vesetranszplantált) férfi beteget vesznek fel bakteriális meningitis gyanújával. Az irányelvek szerint a lumbálpunkció után az empirikus kezelést Ceftriaxon (2x 2g i.v.) és Vancomycin (2x 1g i.v.) adásával kezdik meg. Milyen kritikus kiegészítő antibiotikumot KELL mindenképpen hozzáadni ehhez a sémához ebben a betegcsoportban, és miért?",
    options: [
      "Metronidazolt, a Bacteroides fragilis okozta anaerob agytályog megelőzésére.",
      "Ampicillint vagy Amoxicillint (vagy TMP-SMX-et), mert az immunszupprimáltakban és idősekben gyakori Listeria monocytogenes természetes módon rezisztens az összes cephalosporinra (köztük a Ceftriaxonra is).",
      "Ciprofloxacint, mert a Pseudomonas aeruginosa ellen szinergista hatást fejt ki a Ceftriaxonnal.",
      "Clarithromycint, hogy az atípusos neuro-Mycoplasmát is lefedjük."
    ],
    correctAnswerIndex: 1,
    explanation: "A Listeria monocytogenes egy Gram-pozitív pálca, amely az újszülöttek, az idősek (>50-60 év) és az immunszupprimált betegek bakteriális meningitisének fontos kórokozója. A Listeria természetes (intrinsic) módon rezisztens az ÖSSZES cephalosporinnal (beleértve az 1., 2., 3. és 4. generációs szereket, így a Ceftriaxont és Cefepimet is) szemben! Ezért az empirikus meningitis kezelés (Ceftriaxon + Vancomycin) önmagában teljesen hatástalan Listeria ellen. Ebben a kockázati csoportban kötelező Ampicillint vagy Amoxicillint (i.v.) hozzáadni a kezeléshez, mivel ez a legaktívabb elsővonalbeli szer ellene (gyakran Gentamicinnel kombinálva a szinergista baktericid hatásért). Penicillin-allergia esetén a TMP-SMX a választandó alternatíva.",
    caseData: {
      age: 78,
      gender: "férfi",
      symptoms: ["Láz", "Tarkómerevség", "Aluszékonyság", "Zavartság"],
      vitals: {
        bp: "120/80 Hgmm",
        hr: 90,
        temp: "38.8 °C",
        rr: 20
      },
      labs: ["Transzplantált vese (Kreatinin: 145 µmol/l)", "Liquor: purulens, magas fehérje, alacsony cukor, pálca alakú Gram-pozitív baktériumok"]
    }
  },
  {
    id: "q12",
    type: "pharmacology",
    questionText: "Egy 35 éves nőbeteg visszatérő, fájdalmas vizeléssel jelentkezik. A vizelet laborvizsgálata feltűnően magas vizelet pH-t (pH: 8.2) mutat, és a tenyésztés Proteus mirabilis fertőzést igazol. Milyen klinikai szövődményre van a betegnek kiemelkedő kockázata ennél a kórokozónál, és mi magyarázza ezt?",
    options: [
      "Akut veseelégtelenségre a vese tubulusok közvetlen elzáródása miatt.",
      "Struvit (magnézium-ammónium-foszfát) kövek kialakulására a vesemedencében, mert a Proteus erős ureáz enzimmel bontja a karbamidot, lúgosítva a vizeletet.",
      "Glomerulonephritisre a Proteus sejtfal antigének immun-komplex képződése miatt.",
      "Intersticiális nephritisre a penicillin-érzékenység miatt."
    ],
    correctAnswerIndex: 1,
    explanation: "A Proteus mirabilis (és néhány más kórokozó, mint a Klebsiella vagy a Pseudomonas) jellegzetessége, hogy nagy mennyiségű ureáz (urease) enzimet termel. Az ureáz enzim lebontja a vizeletben lévő karbamidot (urea) szén-dioxidra és ammóniára. Az ammónia vízzel reagálva ammónium-hidroxidot képez, ami drasztikusan megemeli a vizelet pH-ját (lúgos irányba, gyakran pH > 7.5-8.0). Lúgos közegben a magnézium, ammónium és foszfát ionok oldhatósága jelentősen lecsökken, ami struvit (magnézium-ammónium-foszfát, 'struvite') kövek gyors kicsapódásához és növekedéséhez vezet. Ezek a kövek gyakran kitöltik az egész vesemedencét (korallkövek - staghorn calculi), baktérium-rezervoárként szolgálnak, és sebészi eltávolítást vagy kiterjedt kezelést igényelnek.",
    caseData: {
      age: 35,
      gender: "nő",
      symptoms: ["Dysuria", "Suprapubicus fájdalom", "Homályos, kellemetlen szagú vizelet"],
      vitals: {
        bp: "115/75 Hgmm",
        hr: 76,
        temp: "37.2 °C",
        rr: 14
      },
      labs: ["Vizelet pH: 8.2", "Vizelet üledék: bőséges trippelfoszfát kristályok", "Tenyésztés: Proteus mirabilis > 10^5 CFU/ml"]
    }
  },
  {
    id: "q13",
    type: "empirical",
    questionText: "Egy 54 éves betegnél a hemokultúra Enterobacter cloacae-t igazol. A laboratóriumi érzékenységi lelet (antibiogram) alapján a baktérium érzékeny a Ceftriaxonra (3. generációs cephalosporin) és a Cefepimre (4. generációs cephalosporin) is. Miért ellenjavallt mégis a Ceftriaxon monoterápia ebben az esetben, és mi a helyes választás?",
    options: [
      "Mivel a Ceftriaxon nem képes megfelelő vérszintet elérni, így nem hat a szisztémás fertőzésekben.",
      "Mivel az Enterobacter cloacae kromoszómálisan kódolt AmpC béta-laktamázzal rendelkezik, amely Ceftriaxon (vagy más 3. generációs cephalosporin) expozíció során derepresszálódhat (mutációval állandósult magas szintre kapcsolhat), ami gyors rezisztenciához és terápiás kudarchoz vezet. Helyette Cefepim vagy Carbapenem választandó.",
      "Mivel a Ceftriaxon túl erős mellékhatásokkal bír az Enterobacter esetén.",
      "Mivel az Enterobacter cloacae kizárólag szájon át szedhető amoxicillinnel gyógyítható."
    ],
    correctAnswerIndex: 1,
    explanation: "Bizonyos Gram-negatív baktériumok (főleg az 'SPACE' vagy 'MYSPACE' csoport: Morganella, Yersinia, Serratia, Pseudomonas, Acinetobacter, Citrobacter, Enterobacter) rendelkeznek kromoszómális AmpC béta-laktamáz génnel. Alaphelyzetben (vad típusú törzseknél) ez az enzim elenyésző mennyiségben termelődik, ezért in vitro (a laboratóriumi tesztben) a baktérium érzékenynek tűnhet a 3. generációs cephalosporinokra (pl. Ceftriaxon). Azonban a Ceftriaxon kezelés során a baktériumok egy része mutáció révén derepresszálódik (a gátló gén kikapcsol), és hatalmas mennyiségben kezdi el termelni az AmpC-t, ami lebontja a Ceftriaxont. Ez súlyos terápiás kudarcot eredményez a betegnél a kezelés 3-4. napján. A 4. generációs Cefepim vagy a Carbapenemek (Meropenem) stabilak az AmpC enzimmel szemben, így ezek az elsőként választandó szerek szisztémás Enterobacter fertőzésben."
  },
  {
    id: "q14",
    type: "empirical",
    questionText: "Egy 21 éves egyetemi hallgató száraz köhögés, mérsékelt láz (37.8 °C), fejfájás és kifejezett gyengeség miatt jelentkezik a háziorvosnál. A tüdő felett érdemi hallgatózási eltérés nincs, de a mellkas röntgen meglepően kiterjedt, kétoldali hálózatos (intersticiális) infiltrációt mutat ('disszociáció' a klinikum és a röntgen között). Melyik kórokozó a legvalószínűbb, és milyen terápiát kell kezdeni?",
    options: [
      "Streptococcus pneumoniae - Amoxicillin monoterápia.",
      "Mycoplasma pneumoniae - Macrolid (pl. Clarithromycin) vagy Tetracyclin (Doxycyclin).",
      "Staphylococcus aureus - Cefazolin intravénásan.",
      "Pseudomonas aeruginosa - Ciprofloxacin orálisan."
    ],
    correctAnswerIndex: 1,
    explanation: "A beteg klinikai képe (fiatal életkor, száraz köhögés, mérsékelt láz, de súlyos tüdő-rtg lelet: a klinikai tünetek és a röntgenkép disszociációja) klasszikus atípusos tüdőgyulladásra (atypical pneumonia, 'walking pneumonia') utal, melynek leggyakoribb kórokozója a Mycoplasma pneumoniae. Mivel a Mycoplasma nem rendelkezik peptidoglikán sejtfallal, az összes béta-laktám (mint az Amoxicillin, Cefazolin, Ceftriaxon) 100%-ban hatástalan ellene! A kezelésre sejten belül is hatékony, fehérjeszintézist gátló antibiotikumot kell alkalmazni, mint a makrolidok (Clarithromycin, Azithromycin) vagy a tetracyclinek (Doxycyclin). Fiatal felnőttekben a Doxycyclin vagy a makrolidok az elsővonalbeli empirikus szerek ilyen kép esetén."
  },
  {
    id: "q15",
    type: "pharmacology",
    questionText: "Egy 48 éves juhtenyésztő férfi betegnél magas láz, atípusos tüdőgyulladás és mérsékelt hepatitis igazolódik. A zoonózis gyanúja miatt végzett szerológia Coxiella burnetii fertőzést (Q-láz) állapít meg. Miért különleges a Coxiella burnetii antibiotikum-érzékenysége és intracellularis túlélése?",
    options: [
      "Mivel kizárólag a sejtmagban képes szaporodni, ezért csak nukleozid analógokkal gátolható.",
      "Mivel obligát intracelluláris kórokozóként a gazdasejt fagolizoszómájának savas környezetében él. A savas pH gátolja a Doxycyclint, ezért krónikus esetben (pl. Q-láz endocarditis) Doxycyclin + Hidroxi-klorokin kombináció szükséges a lizoszóma pH-jának lúgosítására.",
      "Mivel béta-laktamázt fecskendez ki a sejten kívüli térbe, ami lebontja a környező antibiotikumokat.",
      "Mivel nincs sejtmembránja, így semmilyen lipofil antibiotikum nem tud bejutni a baktériumba."
    ],
    correctAnswerIndex: 1,
    explanation: "A Coxiella burnetii a Q-láz kórokozója, egy obligát intracelluláris baktérium. Különlegessége, hogy a makrofágok fagolizoszómáinak belsejében él és szaporodik, ami egy kifejezetten savas kémhatású (pH 4.5-5.0) organellum. Ez a savas környezet gátolja a legtöbb antibiotikum (köztük a Doxycyclin) aktivitását. Akut Q-lázban a Doxycyclin önmagában is hatásos, de krónikus formában (amely jellemzően Q-láz endocarditist okoz negatív hemokultúrával) a Doxycyclin mellé Hidroxi-klorokint (egy gyenge bázist) kell adni. A hidroxi-klorokin felhalmozódik a fagolizoszómában, megemeli annak pH-ját (lúgosítja a környezetet), ami helyreállítja a Doxycyclin baktericid aktivitását, és lehetővé teszi a kórokozó eliminálását. Ez a kombinált kezelés gyakran 18-24 hónapig is eltart."
  }
];

