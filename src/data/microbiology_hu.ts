/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Microbe } from '../types';

export const microbesData: Microbe[] = [
  {
    id: "s_pyogenes",
    name: "Streptococcus pyogenes (Group A Streptococcus)",
    type: "gram-positive",
    clinicalImportance: "Tonsillopharyngitist, skarlátot, orbáncot (erysipelas), necrotizáló fasciitist és toxikus shock szindrómát (STSS) okoz. Fontos szövődménye a rheumás láz és a poststreptococcalis glomerulonephritis.",
    resistanceMechanisms: "A penicillinre mai napig 100%-ban érzékeny (világszerte egyetlen penicillin-rezisztens törzset sem találtak!). A makrolidokkal szemben azonban növekvő rezisztencia figyelhető meg (erm gének általi MLS_B rezisztencia v. mefA transzport pumpa).",
    firstLineDrugs: ["penicillin_g", "penicillin_v", "amoxicillin"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "S", mechanismNotes: "Kifejezetten érzékeny, nincs ismert rezisztencia." },
      { antibioticId: "penicillin_v", antibioticName: "Phenoxymethylpenicillin", susceptibility: "S" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "S" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/klavulánsav", susceptibility: "S" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "S" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "S", mechanismNotes: "A béta-laktámokra (köztük a cefuroximra) 100%-ban érzékeny, a penicillin-érzékenység alapján." },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "S" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S", mechanismNotes: "Kiváló aktivitás az összes béta-laktám-érzékeny Gram-pozitív ellen." },
      { antibioticId: "clarithromycin", antibioticName: "Clarithromycin", susceptibility: "S", mechanismNotes: "Magyarországon kb. 10-15%-ban rezisztens lehet." },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "S", mechanismNotes: "Necrotizáló fasciitisben kötelező adni a toxin-termelés gátlása miatt." },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "S" }
    ]
  },
  {
    id: "s_pneumoniae_s",
    name: "Streptococcus pneumoniae (Penicillin-érzékeny)",
    type: "gram-positive",
    clinicalImportance: "Közösségi pneumonia (CAP), meningitis, otitis media, akut sinusitis és sepsis leggyakoribb kórokozója felnőttekben. Tokkal rendelkező, diplococcus.",
    resistanceMechanisms: "A penicillin-érzékeny törzsek jól reagálnak standard béta-laktámokra. Rezisztencia esetén a PBP transzpeptidázok szerkezeti módosulása történik (nem béta-laktamáz termelés!).",
    firstLineDrugs: ["amoxicillin", "penicillin_g", "ceftriaxone"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "S" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "S" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/klavulánsav", susceptibility: "S" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "S" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "S" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S", mechanismNotes: "A penicillin-érzékeny törzsek rendkívül érzékenyek meropenemre is." },
      { antibioticId: "clarithromycin", antibioticName: "Clarithromycin", susceptibility: "S" },
      { antibioticId: "levofloxacin", antibioticName: "Levofloxacin", susceptibility: "S" },
      { antibioticId: "doxycycline", antibioticName: "Doxycyclin", susceptibility: "S" },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "S" }
    ]
  },
  {
    id: "s_pneumoniae_r",
    name: "Streptococcus pneumoniae (Penicillin-rezisztens - PRSP)",
    type: "gram-positive",
    clinicalImportance: "Ugyanazokat a fertőzéseket okozza, de a kezelés nehezebb, magasabb béta-laktám dózisokat vagy alternatív szereket (kinolonok, vancomycin) igényel.",
    resistanceMechanisms: "PBP (Penicillin-kötő fehérje, főleg PBP-2b, PBP-2x, PBP-1a) szerkezeti génjeinek mutációja és mozaik-gének kialakulása, mely csökkenti a béta-laktámok kötődési affinitását.",
    firstLineDrugs: ["ceftriaxone", "levofloxacin", "vancomycin"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "PBP affinitás-csökkenés." },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "I", mechanismNotes: "Magas dózissal (napi 3g p.o.) még leküzdhető lehet enyhe légúti fertőzésben." },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/klavulánsav", susceptibility: "I", mechanismNotes: "A béta-laktamáz gátló nem segít, mert nem béta-laktamázzal rezisztens!" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "S", mechanismNotes: "Meningitisben magas dózisban (2x 2g i.v.) még hatásos." },
      { antibioticId: "clarithromycin", antibioticName: "Clarithromycin", susceptibility: "R", mechanismNotes: "Gyakori a keresztrezisztencia." },
      { antibioticId: "levofloxacin", antibioticName: "Levofloxacin", susceptibility: "S", mechanismNotes: "A légúti kinolonok hatékonyak maradnak." },
      { antibioticId: "doxycycline", antibioticName: "Doxycyclin", susceptibility: "I" },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "S", mechanismNotes: "Minden törzs érzékeny rá." }
    ]
  },
  {
    id: "s_aureus_mssa",
    name: "Staphylococcus aureus (Meticillin-érzékeny - MSSA)",
    type: "gram-positive",
    clinicalImportance: "Bőr- és lágyrészfertőzések (furunculus, cellulitis), osteomyelitis, acut infectiv endocarditis, nosocomialis sepsis és pneumonia legfőbb kórokozója.",
    resistanceMechanisms: "Sok törzs plazmid-mediált béta-laktamázt (penicillinázt) termel, ami lebontja a természetes penicillineket és aminopenicillineket. De érzékeny az oxacillinre és az 1. generációs cephalosporinokra, valamint béta-laktamáz inhibitoros kombinációkra.",
    firstLineDrugs: ["cefazolin", "amoxicillin_clavulanate"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Staphylococcalis penicillináz termelés miatti rezisztencia (90%+)." },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/klavulánsav", susceptibility: "S", mechanismNotes: "A klavulánsav kiválóan gátolja a staphylococcus penicillinázt!" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "S", mechanismNotes: "Szisztémás MSSA fertőzésekben az elsővonalbeli arany standard." },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "S", mechanismNotes: "Az MSSA törzsek teljesen érzékenyek a 2. generációs cephalosporinokra." },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "S" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S", mechanismNotes: "Kiváló aktivitás béta-laktamáz-stabil carbapenemként az MSSA ellen." },
      { antibioticId: "clarithromycin", antibioticName: "Clarithromycin", susceptibility: "S" },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "S", mechanismNotes: "Kiválóan penetrál csontokba és lágyrészekbe." },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "S" }
    ]
  },
  {
    id: "s_aureus_mrsa",
    name: "Staphylococcus aureus (Meticillin-rezisztens - MRSA)",
    type: "gram-positive",
    clinicalImportance: "Súlyos kórházi és közösségi fertőzések (pneumonia, urosepsis, sebfertőzések, endocarditis), melyek béta-laktámokkal szemben multirezisztensek.",
    resistanceMechanisms: "A kromoszómális mecA vagy mecC gén szerzése, amely egy alternatív transzpeptidázt (PBP-2a / PBP-2') kódol. Ennek rendkívül alacsony az affinitása az összes standard béta-laktámhoz (penicillinek, cephalosporinok, carbapenemek), így azok hatástalanok.",
    firstLineDrugs: ["vancomycin", "linezolid", "ceftaroline"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/klavulánsav", susceptibility: "R", mechanismNotes: "A béta-laktamáz inhibitor hatástalan a megváltozott PBP-re!" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "R", mechanismNotes: "Minden standard béta-laktámmal szemben rezisztens!" },
      { antibioticId: "ceftaroline", antibioticName: "Ceftarolin", susceptibility: "S", mechanismNotes: "Az egyetlen MRSA-ellenes cephalosporin (5. generáció), mely kötődik a PBP-2a-hoz." },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "I", mechanismNotes: "Közösségi MRSA-nál még érzékeny lehet." },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "S", mechanismNotes: "Évtizedek óta a standard kezelés." },
      { antibioticId: "linezolid", antibioticName: "Linezolid", susceptibility: "S", mechanismNotes: "Kiváló tüdőgyulladásban." }
    ]
  },
  {
    id: "e_faecalis",
    name: "Enterococcus faecalis",
    type: "gram-positive",
    clinicalImportance: "Húgyúti fertőzések, epeúti fertőzések, nosocomialis sepsis és subacut infectiv endocarditis kórokozója. Természetes ellenálló képességgel bír sok antibiotikummal szemben.",
    resistanceMechanisms: "Minden cephalosporinnal szemben természetes rezisztencia! Mérsékelt természetes rezisztencia aminoglikozidokkal és glycopeptidekkel szemben, de az ampicillinre általában érzékeny marad.",
    firstLineDrugs: ["amoxicillin", "vancomycin", "linezolid"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "S" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin (Ampicillin)", susceptibility: "S", mechanismNotes: "A legfontosabb elsővonalbeli szer." },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/klavulánsav", susceptibility: "S" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R", mechanismNotes: "Minden cephalosporin hatástalan az Enterococcusokra!" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R", mechanismNotes: "Természetes rezisztencia." },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "I", mechanismNotes: "Mérsékelten aktív." },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "I", mechanismNotes: "Önmagában hatástalan, de béta-laktámmal kombinálva szinergisztikus baktericid hatást mutat endocarditisben!" },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "S", mechanismNotes: "Általában érzékeny (kivéve VRE)." },
      { antibioticId: "linezolid", antibioticName: "Linezolid", susceptibility: "S" },
      { antibioticId: "nitrofurantoin", antibioticName: "Nitrofurantoin", susceptibility: "S", mechanismNotes: "Húgyúti fertőzésekben kiváló." }
    ]
  },
  {
    id: "e_faecium",
    name: "Enterococcus faecium (VRE kockázat)",
    type: "gram-positive",
    clinicalImportance: "Súlyos kórházi fertőzések (sepsis, peritonitis, endocarditis), gyakran rendkívül ellenálló az ampicillinre és glycopeptidekre (VRE) is.",
    resistanceMechanisms: "A béta-laktám rezisztenciát a PBP5 fehérje túltermelése vagy mutációja okozza. A glycopeptid (vancomycin) rezisztenciát a vanA vagy vanB gén szabályozza, amely a peptidoglikán lánc végét D-Ala-D-Ala-ról D-Ala-D-Lac-ra módosítja, így a vancomycin nem tud kötődni.",
    firstLineDrugs: ["linezolid"],
    resistances: [
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R", mechanismNotes: "PBP5 mutáció miatt szinte minden törzs ampicillin-rezisztens!" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "R" },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "R", mechanismNotes: "VRE törzsek esetén rezisztens (D-Ala-D-Lac módosulás)." },
      { antibioticId: "linezolid", antibioticName: "Linezolid", susceptibility: "S", mechanismNotes: "A VRE fertőzések elsővonalbeli kezelése." },
      { antibioticId: "nitrofurantoin", antibioticName: "Nitrofurantoin", susceptibility: "S", mechanismNotes: "Cystitisben VRE esetén is hatásos maradhat." }
    ]
  },
  {
    id: "e_coli_wild",
    name: "Escherichia coli (Vad típus / érzékeny törzs)",
    type: "gram-negative",
    clinicalImportance: "Húgyúti fertőzések (cystitis, pyelonephritis, urosepsis) leggyakoribb kórokozója. Intraabdominalis fertőzések és neonatális meningitis fontos ágense.",
    resistanceMechanisms: "A vad típusú (érzékeny) törzsek jól reagálnak a legtöbb Gram-negatív ellenes antibiotikumra, de az ampicillinre már természetesen is mutat bizonyos mértékű plazmid rezisztenciát.",
    firstLineDrugs: ["nitrofurantoin", "fosfomycin", "co-amoxiclav", "ceftriaxone"],
    resistances: [
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "I", mechanismNotes: "Sok törzs már plazmid béta-laktamázzal rezisztens." },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/klavulánsav", susceptibility: "S" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "S" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "S" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "S" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "S" },
      { antibioticId: "cotrimoxazole", antibioticName: "Co-trimoxazol", susceptibility: "S" },
      { antibioticId: "nitrofurantoin", antibioticName: "Nitrofurantoin", susceptibility: "S" },
      { antibioticId: "fosfomycin", antibioticName: "Fosfomycin", susceptibility: "S" }
    ]
  },
  {
    id: "e_coli_esbl",
    name: "Escherichia coli (ESBL-termelő)",
    type: "gram-negative",
    clinicalImportance: "Súlyos szövődményes húgyúti, hasi és szisztémás kórházi fertőzések kiterjesztett spektrumú béta-laktám rezisztenciával.",
    resistanceMechanisms: "Kiterjesztett Spektrumú Béta-laktamáz (ESBL, pl. CTX-M, TEM, SHV típusok) termelése. Ezek az enzimek lebontják az összes penicillint, az 1., 2., 3. és 4. generációs cephalosporinokat, valamint az aztreonamot is. A béta-laktamáz gátlók (klavulánsav, tazobaktam) gátolják őket, de a carbapenemek teljesen stabilak velük szemben.",
    firstLineDrugs: ["meropenem", "ertapenem", "nitrofurantoin", "fosfomycin"],
    resistances: [
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/klavulánsav", susceptibility: "I", mechanismNotes: "In vitro érzékeny lehet, de szisztémás fertőzésben in vivo hatástalan lehet a nagy inokulum-effektus miatt!" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R", mechanismNotes: "Minden 3. generációs cephalosporint lebont az ESBL!" },
      { antibioticId: "cefepime", antibioticName: "Cefepim", susceptibility: "R", mechanismNotes: "A 4. generációs cephalosporinok is rezisztensek." },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S", mechanismNotes: "A carbapenemek stabilak az ESBL-lel szemben." },
      { antibioticId: "ertapenem", antibioticName: "Ertapenem", susceptibility: "S", mechanismNotes: "Kiváló opció szisztémás kezelésre." },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "R", mechanismNotes: "Az ESBL plazmidok gyakran hordoznak fluorokinolon rezisztenciát is (multirezisztencia!)." },
      { antibioticId: "nitrofurantoin", antibioticName: "Nitrofurantoin", susceptibility: "S", mechanismNotes: "Húgyhólyagban ESBL esetén is kiváló és érzékeny." },
      { antibioticId: "fosfomycin", antibioticName: "Fosfomycin", susceptibility: "S", mechanismNotes: "Cystitisben ESBL esetén is érzékeny marad." }
    ]
  },
  {
    id: "p_aeruginosa",
    name: "Pseudomonas aeruginosa (Multirezisztens kockázat)",
    type: "gram-negative",
    clinicalImportance: "Nosocomialis pneumonia (VAP), neutropéniás láz, súlyos égési sebfertőzések, katéteres urosepsis és cystás fibrosisos tüdőfertőzések rettegett kórokozója. Magas intrinsic és szerzett rezisztencia jellemzi.",
    resistanceMechanisms: "Számos béta-laktámmal szemben természetes rezisztencia a rendkívül alacsony membrán-permeabilitás és az aktív efflux pumpák (MexAB-OprM) miatt. Kromoszómális AmpC béta-laktamázzal rendelkezik, amely béta-laktám expozícióra derepresszálódhat (fokozottan termelődhet). Szerzett rezisztenciaként carbapenemázokat vagy porin-mutációkat (OprD hiány) mutathat.",
    firstLineDrugs: ["piperacillin_tazobactam", "cefepime", "meropenem", "amikacin", "ciprofloxacin"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Természetes rezisztencia." },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/klavulánsav", susceptibility: "R", mechanismNotes: "Természetes rezisztencia. A klavulánsav nem gátolja az AmpC-t." },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R", mechanismNotes: "SZIGORÚAN HATÁSTALAN! A Ceftriaxon és Cefotaxim nem hat Pseudomonasra!" },
      { antibioticId: "ceftazidime", antibioticName: "Ceftazidim", susceptibility: "S", mechanismNotes: "Pseudomonas-ellenes cephalosporin." },
      { antibioticId: "cefepime", antibioticName: "Cefepim", susceptibility: "S", mechanismNotes: "4. generáció, kiváló Pseudomonas ellen." },
      { antibioticId: "piperacillin_tazobactam", antibioticName: "Piperacillin/Tazobactam", susceptibility: "S", mechanismNotes: "Standard Pseudomonas-ellenes penicillin kombináció." },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S", mechanismNotes: "Aktív, de porin-vesztéssel rezisztenssé válhat." },
      { antibioticId: "imipenem_cilastatin", antibioticName: "Imipenem/cilasztatin", susceptibility: "I", mechanismNotes: "Az EUCAST irányelvek szerint nincs standard dózisú (S) kategória; a vad típusú érzékeny törzsek 'Érzékeny, fokozott expozíció' (I) kategóriába esnek, azaz kizárólag nagy dózisú kezeléssel (pl. 4x1g naponta) vagy nyújtott infúzióval alkalmazható sikeresen." },
      { antibioticId: "ertapenem", antibioticName: "Ertapenem", susceptibility: "R", mechanismNotes: "SZIGORÚAN HATÁSTALAN! Nem jut át a Pseudomonas membránján!" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "S" },
      { antibioticId: "amikacin", antibioticName: "Amikacin", susceptibility: "S", mechanismNotes: "A leghatékonyabb aminoglikozid ellene." },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "S", mechanismNotes: "Az egyetlen orális opció Pseudomonas ellen!" }
    ]
  },
  {
    id: "b_fragilis",
    name: "Bacteroides fragilis",
    type: "anaerobe",
    clinicalImportance: "A legfontosabb hasüregi anaerob kórokozó. Peritonitis, intraabdominalis tályogok, aspirációs pneumonia és kismedencei gyulladások kulcsfontosságú ágense.",
    resistanceMechanisms: "Szinte minden törzs béta-laktamázt termel (Ambler Class A, pl. cepalosporináz), ami tönkreteszi a penicillint, ampicillint és cephalosporinokat. Emiatt ezek a szerek hatástalanok. A béta-laktamáz gátlók, a carbapenemek és a metronidazol kiválóan hatékonyak.",
    firstLineDrugs: ["metronidazole", "amoxicillin_clavulanate", "meropenem"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Plazmid-mediált béta-laktamáz termelés." },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/klavulánsav", susceptibility: "S", mechanismNotes: "A béta-laktamáz gátló sikeresen helyreállítja a hatást." },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R", mechanismNotes: "A cephalosporinok gyengék B. fragilis ellen." },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S", mechanismNotes: "A carbapenemek rendkívül stabilak és hatásosak." },
      { antibioticId: "piperacillin_tazobactam", antibioticName: "Piperacillin/Tazobactam", susceptibility: "S" },
      { antibioticId: "metronidazole", antibioticName: "Metronidazol", susceptibility: "S", mechanismNotes: "A legfontosabb és leghatékonyabb baktericid szer hasi anaerobokra." },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "I", mechanismNotes: "A rezisztencia aránya növekszik Magyarországon is (kb. 20-30%)." }
    ]
  },
  {
    id: "l_pneumophila",
    name: "Legionella pneumophila",
    type: "atypical",
    clinicalImportance: "Súlyos, életveszélyes atípusos tüdőgyulladást (Legionárius betegség) okoz, gyakran magas lázzal, száraz köhögéssel, relatív bradycardiával, hyponatremiával és neurológiai tünetekkel (zavartság).",
    resistanceMechanisms: "Intracelluláris kórokozó (alveolaris makrofágok belsejében szaporodik). Minden béta-laktám (penicillinek, cephalosporinok, carbapenemek) hatástalan ellene, mert nem képesek bejutni a makrofágokba és a baktérium sejtfalszerkezete is eltérő. Csak a sejtekbe jól penetráló szerek (makrolidok, kinolonok, tetracyclinek) hatásosak.",
    firstLineDrugs: ["levofloxacin", "clarithromycin", "azithromycin"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Nincs sejten belüli penetráció, a béta-laktámok hatástalanok!" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/klavulánsav", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "R" },
      { antibioticId: "clarithromycin", antibioticName: "Clarithromycin", susceptibility: "S", mechanismNotes: "Kiváló sejtpenetráció." },
      { antibioticId: "azithromycin", antibioticName: "Azithromycin", susceptibility: "S" },
      { antibioticId: "levofloxacin", antibioticName: "Levofloxacin", susceptibility: "S", mechanismNotes: "Súlyos esetekben az elsőként választandó legerősebb baktericid szer." },
      { antibioticId: "doxycycline", antibioticName: "Doxycyclin", susceptibility: "S" }
    ]
  },
  {
    id: "k_pneumoniae_wild",
    name: "Klebsiella pneumoniae (Vad típus / érzékeny törzs)",
    type: "gram-negative",
    clinicalImportance: "Gyakori húgyúti, hasüregi és tüdőfertőzések (főleg aspirációs tüdőgyulladás alkoholistákban vagy diabetesesekben: 'zselészerű/currant jelly' köpet) kórokozója. Kórházi fertőzések egyik fő okozója.",
    resistanceMechanisms: "Természetes (intrinsic) rezisztencia ampicillinre/amoxicillinre a kromoszómális SHV-1 béta-laktamáz miatt. Béta-laktamáz gátlókkal (pl. klavulánsav) vagy cephalosporinokkal jól kezelhető.",
    firstLineDrugs: ["amoxicillin_clavulanate", "ceftriaxone"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R", mechanismNotes: "Természetes SHV-1 béta-laktamáz miatt!" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/klavulánsav", susceptibility: "S" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "S" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "S" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "S" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "S" },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "R" },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "R" },
      { antibioticId: "metronidazole", antibioticName: "Metronidazol", susceptibility: "R" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "S" }
    ]
  },
  {
    id: "k_pneumoniae_kpc",
    name: "Klebsiella pneumoniae (Carbapenem-rezisztens - KPC)",
    type: "gram-negative",
    clinicalImportance: "Súlyos kórházi fertőzések (pneumonia, sepsis, húgyúti) kórokozója, rendkívül magas mortalitással a korlátozott terápiás lehetőségek miatt.",
    resistanceMechanisms: "KPC (Klebsiella pneumoniae carbapenemase) vagy metallo-béta-laktamáz (NDM-1, VIM, IMP) termelése. Ezek lebontják az összes béta-laktámot, beleértve a carbapenemeket is. Gyakran hordoznak rezisztenciát aminoglikozidokra és kinolonokra is (multirezisztencia).",
    firstLineDrugs: ["colistin", "ceftazidime_avibactam"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/klavulánsav", susceptibility: "R" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "R", mechanismNotes: "Carbapenemáz termelés miatt az összes carbapenemre rezisztens!" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "R", mechanismNotes: "Társult rezisztencia plazmidok miatt." },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "R" },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "R" },
      { antibioticId: "metronidazole", antibioticName: "Metronidazol", susceptibility: "R" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "R" }
    ]
  },
  {
    id: "p_mirabilis",
    name: "Proteus mirabilis",
    type: "gram-negative",
    clinicalImportance: "Húgyúti fertőzések és urosepsis gyakori okozója. Erős ureáz-termelő képessége lebontja a karbamidot ammóniává, ami lúgosítja a vizeletet (pH > 7.5-8), és struvit kövek (magnézium-ammónium-foszfát) gyors kialakulásához vezet.",
    resistanceMechanisms: "A vad típusú (érzékeny) törzsek jól reagálnak az aminopenicillinekre és cephalosporinokra, nincs természetes béta-laktamázuk. Intrinsic (természetes) módon teljesen rezisztensek nitrofurantoinra, tetracyclinekre (doxycyclin) és colistinre!",
    firstLineDrugs: ["amoxicillin", "ceftriaxone"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "S", mechanismNotes: "Sok más Gram-negatívval ellentétben a vad típus aminopenicillin-érzékeny." },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/klavulánsav", susceptibility: "S" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "S" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "S" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "S" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S" },
      { antibioticId: "imipenem_cilastatin", antibioticName: "Imipenem/cilasztatin", susceptibility: "R", mechanismNotes: "Intrinsic (természetes) alacsony érzékenység/rezisztencia az imipenemmel szemben az imipenem PBP-khez való gyenge affinitása miatt. Az EUCAST irányelvek szerint az imipenemet Proteus fajok esetén rezisztensnek (R) kell jelenteni." },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "S" },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "R" },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "R" },
      { antibioticId: "metronidazole", antibioticName: "Metronidazol", susceptibility: "R" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "S" }
    ]
  },
  {
    id: "e_cloacae",
    name: "Enterobacter cloacae",
    type: "gram-negative",
    clinicalImportance: "Kórházi szerzett fertőzések, intenzív osztályos pneumoniák, urosepsis, sebfertőzések fontos kórokozója. Jelentős rizikójú szuperinfekciókban.",
    resistanceMechanisms: "Kromoszómálisan kódolt AmpC béta-laktamázzal rendelkezik. Ez az enzim alapállapotban alacsony szinten termelődik, de béta-laktám expozíció (különösen 2-3. generációs cephalosporinok, mint pl. cefuroxim, ceftriaxon) hatására derepresszálódhat (mutáció révén tartósan magas szintre kapcsolhat), ami terápiás kudarchoz vezet. Carbapenemek és a 4. generációs cefepim stabilak ellene.",
    firstLineDrugs: ["cefepime", "meropenem"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/klavulánsav", susceptibility: "R", mechanismNotes: "A klavulánsav nem gátolja hatásosan az AmpC béta-laktamázt!" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R", mechanismNotes: "In vitro érzékenynek tűnhet, de kezelés közben derepresszió és rezisztencia alakulhat ki (AmpC)!" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S", mechanismNotes: "A carbapenemek stabilak az AmpC-vel szemben." },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "S" },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "R" },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "R" },
      { antibioticId: "metronidazole", antibioticName: "Metronidazol", susceptibility: "R" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "S" }
    ]
  },
  {
    id: "s_marcescens",
    name: "Serratia marcescens",
    type: "gram-negative",
    clinicalImportance: "Nosocomialis húgyúti fertőzések, pneumonia, sepsis, meningitis és sebfertőzések opportunista kórokozója. Jellegzetes vörös pigmentet (prodigiozin) termelhet szobahőmérsékleten.",
    resistanceMechanisms: "AmpC béta-laktamázt hordoz. Intrinsic (természetes) rezisztens colistinre, polymyxin B-re, nitrofurantoinra és az első generációs cephalosporinokra. Carbapenemekre és fluorokinolonokra általában jól reagál.",
    firstLineDrugs: ["cefepime", "meropenem", "ciprofloxacin"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/klavulánsav", susceptibility: "R" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R", mechanismNotes: "Természetes rezisztencia." },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "S", mechanismNotes: "AmpC derepresszió rizikója miatt óvatosságot igényel." },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "S" },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "R" },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "R" },
      { antibioticId: "metronidazole", antibioticName: "Metronidazol", susceptibility: "R" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "S" }
    ]
  },
  {
    id: "a_baumannii_mdr",
    name: "Acinetobacter baumannii (MDR - Multirezisztens)",
    type: "gram-negative",
    clinicalImportance: "Súlyos opportunista kórházi fertőzések (lélegeztetőgép-asszociált pneumonia - VAP, katéteres sepsis, súlyos lágyrész- és égési sebfertőzések) legfőbb kórokozója intenzív osztályokon. Rendkívül szívós, száraz felszíneken is hetekig túlél.",
    resistanceMechanisms: "Rendkívül széles körű szerzett rezisztencia-mechanizmusok: carbapenemázok (főleg OXA-23 típusok, valamint metallo-béta-laktázok), efflux pumpák, porin-vesztés. Gyakran rezisztens szinte az összes béta-laktámra, aminoglikozidra és kinolonra.",
    firstLineDrugs: ["meropenem", "colistin"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/klavulánsav", susceptibility: "R" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "R", mechanismNotes: "A kórházi törzsek többsége ma már carbapenem-rezisztens (CRAB)." },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "R" },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "R" },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "R" },
      { antibioticId: "metronidazole", antibioticName: "Metronidazol", susceptibility: "R" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "R" }
    ]
  },
  {
    id: "m_pneumoniae",
    name: "Mycoplasma pneumoniae",
    type: "atypical",
    clinicalImportance: "Tracheobronchitist és atípusos tüdőgyulladást ('walking pneumonia' - mérsékelt tünetek ellenére kiterjedt röntgeneltérés) okoz, leggyakrabban iskoláskorúakban és fiatal felnőttekben. Extrapulmonális szövődményként hideg-agglutinin okozta hemolitikus anaemia és erythema multiforme alakulhat ki.",
    resistanceMechanisms: "Nincs peptidoglikán sejtfala, ezért az összes sejtfalszintézist gátló szer (penicillinek, cephalosporinok, carbapenemek) természetes módon teljesen hatástalan (100% rezisztens). Csak fehérjeszintézis-gátlók (makrolidok, tetracyclinek) és DNS-gyráz gátlók (fluorokinolonok) hatásosak.",
    firstLineDrugs: ["clarithromycin", "doxycycline"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Nincs sejtfal, a béta-laktámok hatástalanok!" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/klavulánsav", susceptibility: "R" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "R" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "R" },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "R" },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "I" },
      { antibioticId: "metronidazole", antibioticName: "Metronidazol", susceptibility: "R" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "S", mechanismNotes: "Kiváló sejtpenetráció, bár a légúti kinolonok (moxifloxacin) in vivo még erősebbek." }
    ]
  },
  {
    id: "c_pneumoniae",
    name: "Chlamydia pneumoniae",
    type: "atypical",
    clinicalImportance: "Közösségben szerzett atípusos tüdőgyulladást, bronchitist okoz. Sejten belüli (obligát intracelluláris) szaporodás jellemzi, kétrészes életciklusa van (elemi test és hálózatos test).",
    resistanceMechanisms: "Obligát intracelluláris életmódja és eltérő sejtfalszerkezete miatt a béta-laktámok nem jutnak el hozzá hatásos koncentrációban. Csak a sejten belül felhalmozódó szerek hatékonyak.",
    firstLineDrugs: ["doxycycline", "clarithromycin"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Sejten belüli kórokozó, béta-laktámok hatástalanok!" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/klavulánsav", susceptibility: "R" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "R" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "R" },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "R" },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "R" },
      { antibioticId: "metronidazole", antibioticName: "Metronidazol", susceptibility: "R" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "S" }
    ]
  },
  {
    id: "c_burnetii",
    name: "Coxiella burnetii",
    type: "atypical",
    clinicalImportance: "A Q-láz kórokozója. Akut formában influenzaszerű tüneteket, tüdőgyulladást vagy hepatitist okoz; krónikus formában életveszélyes endocarditist (negatív hemokultúrával). Zoonózis, fertőzött állatok (juh, kecske, marha) szülési váladékának, porának belégzésével terjed.",
    resistanceMechanisms: "Obligát intracelluláris parazita, amely a fagolizoszómák savas környezetében él. Rendkívül ellenálló a környezeti hatásokkal szemben. Béta-laktámok hatástalanok. Krónikus fertőzésben a Doxycyclint hidroxi-klorokinnal kell kombinálni a fagolizoszóma pH-jának lúgosítására, különben a savas pH gátolja az antibiotikumot.",
    firstLineDrugs: ["doxycycline"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Sejten belüli kórokozó, béta-laktámok hatástalanok!" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/klavulánsav", susceptibility: "R" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "R" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "R" },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "R" },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "R" },
      { antibioticId: "metronidazole", antibioticName: "Metronidazol", susceptibility: "R" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "I", mechanismNotes: "A kinolonok mérsékelt hatásúak." }
    ]
  },
  {
    id: "b_henselae",
    name: "Bartonella henselae",
    type: "atypical",
    clinicalImportance: "A macskakarmolási betegség kórokozója, amely regionális lymphadenitist okoz. Immunszupprimáltakban (pl. HIV) bacilláris angiomatosis (bőrelváltozások) és peliosis hepatis alakulhat ki. Atípusos, negatív hemokultúrás endocarditis fontos ágense.",
    resistanceMechanisms: "Facultatív intracelluláris kórokozó, endothelsejtekben és vörösvértestekben él. Bár in vitro érzékeny lehet béta-laktámokra, in vivo ezek teljesen hatástalanok (nincs klinikai válasz). Az elsővonalbeli kezelés makrolid vagy tetracyclin.",
    firstLineDrugs: ["azithromycin", "doxycycline"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "In vivo teljesen hatástalan, klinikailag rezisztensnek tekintendő!" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/klavulánsav", susceptibility: "R" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "R" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "S", mechanismNotes: "Endocarditisben Doxycyclinnel kombinálva szinergista módon hat." },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "R" },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "I" },
      { antibioticId: "metronidazole", antibioticName: "Metronidazol", susceptibility: "R" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "S" }
    ]
  },
  {
    id: "l_monocytogenes",
    name: "Listeria monocytogenes",
    type: "gram-positive",
    clinicalImportance: "Élelmiszer-közvetítette fertőzést (pl. lágy sajtok, pasztörizálatlan tej, felvágottak útján) okoz. Egészségesekben enyhe gastroenteritist okoz, de terhesekben (vetélés, koraszülés), újszülöttekben, idősekben és immunszupprimáltakban súlyos meningitist és sepsist okoz. Képes 4 °C-on (hűtőszekrényben) is szaporodni.",
    resistanceMechanisms: "Minden cephalosporinnal szemben természetes (intrinsic) rezisztencia! Emiatt a bakteriális meningitis empirikus ceftriaxon kezelése Listeria gyanú esetén mindig ki kell egészüljön ampicillinnel. Kiválóan érzékeny ampicillinre/amoxicillinre.",
    firstLineDrugs: ["amoxicillin"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "S" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin (Ampicillin)", susceptibility: "S", mechanismNotes: "Az amoxicillin/ampicillin az elsővonalbeli arany standard kezelés!" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/klavulánsav", susceptibility: "S" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R", mechanismNotes: "Minden cephalosporinnal szemben természetes rezisztencia jellemzi!" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "R", mechanismNotes: "Minden cephalosporinnal szemben természetes rezisztencia jellemzi!" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R", mechanismNotes: "SZIGORÚAN HATÁSTALAN! Természetes cephalosporin rezisztencia." },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "S", mechanismNotes: "Meningitis esetén ampicillinnel kombinálva szinergista baktericid hatást nyújt." },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "S" },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "I" },
      { antibioticId: "metronidazole", antibioticName: "Metronidazol", susceptibility: "R", mechanismNotes: "Csak anaerobokra hatékony." },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "I" }
    ]
  }
];

