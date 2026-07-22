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
      { antibioticId: "imipenem_cilastatin", antibioticName: "Imipenem/cilasztatin", susceptibility: "I", mechanismNotes: "Az EUCAST irányelvek alapján a Proteae tribus tagjai (Morganella, Proteus, Providencia) csökkent érzékenységet mutatnak imipenemre (alapértelmezetten I kategória: mérsékelt érzékenység / fokozott expozíció szükséges)." },
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
  },
  {
    id: "b_pertussis",
    name: "Bordetella pertussis",
    type: "atypical",
    clinicalImportance: "A szamárköhögés (pertussis) kórokozója. Súlyos, paroxizmális köhögési rohamokat (húzásos belégzéssel) okoz, különösen veszélyes csecsemőkre. Toxinokat (pl. pertussis toxin, trachealis citotoxin) termel.",
    resistanceMechanisms: "Nincs jelentős szerzett rezisztenciája a makrolidokkal szemben, de intracelluláris elhelyezkedése miatt a béta-laktámok klinikailag kevéssé hatékonyak.",
    firstLineDrugs: ["clarithromycin", "azithromycin"],
    resistances: [
      { antibioticId: "clarithromycin", antibioticName: "Clarithromycin", susceptibility: "S" },
      { antibioticId: "azithromycin", antibioticName: "Azithromycin", susceptibility: "S" },
      { antibioticId: "doxycycline", antibioticName: "Doxycyclin", susceptibility: "S" },
      { antibioticId: "cotrimoxazole", antibioticName: "Co-trimoxazol", susceptibility: "S" },
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Klinikailag hatástalan béta-laktám." },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R" }
    ]
  },
  {
    id: "b_burgdorferi",
    name: "Borrelia burgdorferi",
    type: "atypical",
    clinicalImportance: "A kullancsok által terjesztett Lyme-kór kórokozója. Jellegzetes tünete a kokárda-szerű bőrkiütés (erythema migrans), később idegrendszeri (neuroborreliosis), ízületi (Lyme-arthritis) és szívizom-szövődményeket okozhat.",
    resistanceMechanisms: "A spirochéták atípusos szerkezetűek, nincs klasszikus Gram-szerinti festődésük. In vitro érzékenyek bizonyos béta-laktámokra (ceftriaxon, amoxicillin) és tetracyclinekre, de a makrolidok in vivo kevésbé megbízhatóak.",
    firstLineDrugs: ["doxycycline", "amoxicillin", "ceftriaxone"],
    resistances: [
      { antibioticId: "doxycycline", antibioticName: "Doxycyclin", susceptibility: "S", mechanismNotes: "Az elsővonalbeli szájon át adható kezelés." },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "S" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "S", mechanismNotes: "Neuroborreliosis vagy súlyos szövődmények esetén az elsővonalbeli intravénás választás." },
      { antibioticId: "clarithromycin", antibioticName: "Clarithromycin", susceptibility: "I", mechanismNotes: "Makrolidok in vivo kevésbé megbízhatóak." },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "R" }
    ]
  },
  {
    id: "c_jejuni",
    name: "Campylobacter jejuni",
    type: "gram-negative",
    clinicalImportance: "A bakteriális gastroenteritisek egyik leggyakoribb okozója világszerte (baromfi közvetítette zoonózis). Véres, nyákos hasmenést, lázat, hasi görcsöket okoz. Fontos post-infectiosus szövődménye a Guillain-Barré szindróma és a reaktív arthritis.",
    resistanceMechanisms: "A fluorokinolonokkal (ciprofloxacin) szembeni rezisztencia rendkívül magas (gyakran >50-70% a mezőgazdasági használat miatt) a gyrA gén mutációja révén. A makrolidok (clarithromycin, azithromycin) jelentik az elsővonalbeli terápiát.",
    firstLineDrugs: ["azithromycin", "clarithromycin"],
    resistances: [
      { antibioticId: "azithromycin", antibioticName: "Azithromycin", susceptibility: "S", mechanismNotes: "Elsővonalbeli kezelés szükség esetén." },
      { antibioticId: "clarithromycin", antibioticName: "Clarithromycin", susceptibility: "S" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "R", mechanismNotes: "Magyarországon is rendkívül magas rezisztencia-arány (gyrA mutáció)." },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R" }
    ]
  },
  {
    id: "c_perfringens",
    name: "Clostridium perfringens",
    type: "anaerobe",
    clinicalImportance: "Gázgangréna (clostridialis myonecrosis) és ételmérgezés okozója. Gyorsan progresszív, szövetelhalással és gázképződéssel járó sebfertőzést okoz, melyet alfa-toxin termelése kísér.",
    resistanceMechanisms: "A penicillinre és más béta-laktámokra kiválóan érzékeny marad. Súlyos myonecrosisban clindamycinnel kombinálják a toxin-szintézis gátlása céljából.",
    firstLineDrugs: ["penicillin_g", "clindamycin", "metronidazole"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "S", mechanismNotes: "Kiváló hatékonyság." },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/klavulánsav", susceptibility: "S" },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "S", mechanismNotes: "A toxin termelés gátlására kötelező kombinációs partner gázgangrénában." },
      { antibioticId: "metronidazole", antibioticName: "Metronidazol", susceptibility: "S" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "S" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "R", mechanismNotes: "Természetes anaerob rezisztencia aminoglikozidokra." }
    ]
  },
  {
    id: "c_botulinum",
    name: "Clostridium botulinum",
    type: "anaerobe",
    clinicalImportance: "A botulizmus (kolbászmérgezés) okozója. A botulinum toxin (egy rendkívül erős neurotoxin) gátolja az acetilkolin felszabadulását a neuromuscularis synapsisokban, petyhüdt bénulást, kettőslátást, légzésbénulást okozva. Leggyakrabban nem megfelelően sterilizált konzervek közvetítik.",
    resistanceMechanisms: "A betegség tüneteit a preformált toxin okozza, így a kezelés alapja az antitoxin (savó) adása, nem az antibiotikum. Seb-botulizmusban penicillint használnak a baktériumok elpusztítására.",
    firstLineDrugs: ["penicillin_g", "metronidazole"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "S" },
      { antibioticId: "metronidazole", antibioticName: "Metronidazol", susceptibility: "S" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "R" }
    ]
  },
  {
    id: "c_tetani",
    name: "Clostridium tetani",
    type: "anaerobe",
    clinicalImportance: "A tetanusz (merevgörcs) okozója. A tetanospasmin toxin gátolja a gátló neurotranszmitterek (GABA, glicin) felszabadulását a gerincvelőben, spasticus bénulást, szájzárat (trismus), 'risus sardonicust' és opisthotonust okozva. Mély, földdel szennyezett sebek útján fertőz.",
    resistanceMechanisms: "A kezelés lényege a sebészi tisztítás, tetanusz immunglobulin (antitoxin) és szupportív terápia. A baktérium elpusztítására metronidazol v. penicillin javasolt. Nincs ismert rezisztencia metronidazolra.",
    firstLineDrugs: ["metronidazole", "penicillin_g"],
    resistances: [
      { antibioticId: "metronidazole", antibioticName: "Metronidazol", susceptibility: "S", mechanismNotes: "Metronidazol preferált a penicillinhez képest, mert a penicillin gyenge GABA-antagonista hatással bír." },
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "S" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "R" }
    ]
  },
  {
    id: "c_difficile",
    name: "Clostridioides difficile (korábban Clostridium)",
    type: "anaerobe",
    clinicalImportance: "Az antibiotikum-asszociált pseudomembranosus colitis legfőbb okozója (különösen clindamycin, cephalosporinok vagy fluorokinolonok használata után). Toxint (A és B toxin) termel, súlyos vizes hasmenést, lázat és toxicus megacolon-t okozva.",
    resistanceMechanisms: "Spóraképző, így rendkívül ellenálló a fertőtlenítőszerekkel és a környezeti hatásokkal szemben. A szájon át adott vancomycin vagy fidaxomicin hatásos, mert ezek nem szívódnak fel a bélből és lokálisan koncentrálódnak.",
    firstLineDrugs: ["vancomycin", "metronidazole"],
    resistances: [
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "S", mechanismNotes: "KIZÁRÓLAG szájon át (p.o.) adva hatásos CDI-ben! Szisztémásan (i.v.) adva nem választódik ki a bélbe." },
      { antibioticId: "metronidazole", antibioticName: "Metronidazol", susceptibility: "S", mechanismNotes: "Enyhe vagy első esetekben alternatívaként p.o. adható." },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "R", mechanismNotes: "Gyakori kiváltó ágens (rezisztens)." },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R", mechanismNotes: "Természetes cephalosporin rezisztencia." }
    ]
  },
  {
    id: "f_tularensis",
    name: "Francisella tularensis",
    type: "gram-negative",
    clinicalImportance: "A tularémia (nyúlpestis) kórokozója. Zoonózis, rágcsálók, nyulak közvetítik kullancsok, legyek útján vagy direkt kontaktussal, belégzéssel. Ulceroglandularis (fekélyes seb és duzzadt nyirokcsomók), pneumoniás és typhoid formái vannak. Rendkívül fertőző (biológiai fegyverként is számontartják).",
    resistanceMechanisms: "Béta-laktamázokat termel, így az összes penicillin és cephalosporin hatástalan ellene. Elsőként választandók az aminoglikozidok (streptomycin, gentamicin), tetracyclinek (doxycyclin) vagy kinolonok.",
    firstLineDrugs: ["gentamicin", "doxycycline", "ciprofloxacin"],
    resistances: [
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "S", mechanismNotes: "Súlyos szisztémás fertőzésben az elsőként választandó szer." },
      { antibioticId: "doxycycline", antibioticName: "Doxycyclin", susceptibility: "S", mechanismNotes: "Enyhe esetekben orális alternatíva." },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "S" },
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Természetes béta-laktamáz termelés." },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R" }
    ]
  },
  {
    id: "h_influenzae",
    name: "Haemophilus influenzae",
    type: "gram-negative",
    clinicalImportance: "Meningitist, epiglottitist, pneumoniát, otitis mediát és sinusitist okozó Gram-negatív pálca. Különösen a tokos (b-típus, Hib) törzsek okoznak invazív betegséget gyermekeknél (a vakcina bevezetése óta ritkább).",
    resistanceMechanisms: "A törzsek kb. 15-30%-a plazmid-kódolt TEM-1 vagy ROB-1 béta-laktamázt termel, ami ampicillin/amoxicillin rezisztenciát okoz. Emellett léteznek béta-laktamáz negatív ampicillin-rezisztens (BLNAR) törzsek is a PBP-3 mutációja miatt. Másod- és harmadgenerációs cephalosporinok jól hatnak.",
    firstLineDrugs: ["amoxicillin_clavulanate", "ceftriaxone", "cefuroxime"],
    resistances: [
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "I", mechanismNotes: "Béta-laktamáz termelés vagy BLNAR fenotípus miatt gyakran rezisztens." },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/klavulánsav", susceptibility: "S", mechanismNotes: "A béta-laktamáz gátló kiválóan kivédi a béta-laktamázokat, de BLNAR ellen kevésbé hatásos." },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "S" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "S", mechanismNotes: "Meningitis és invazív fertőzés esetén az elsőként választandó szer." },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "S" }
    ]
  },
  {
    id: "n_meningitidis",
    name: "Neisseria meningitidis (Meningococcus)",
    type: "gram-negative",
    clinicalImportance: "Járványos agyhártyagyulladás (meningitis purulenta) és fulmináns sepsis (Waterhouse-Friderichsen szindróma) kórokozója. Jellegzetes tünete a láz, tarkómerevség mellett a bőrön megjelenő petechiák/purpurák. Tokos Gram-negatív diplococcus.",
    resistanceMechanisms: "A legtöbb törzs még mindig nagyon érzékeny a penicillinre és a ceftriaxonra. Alacsony szintű penicillin rezisztencia előfordulhat a penA gén mutációja (módosult PBP-2) miatt.",
    firstLineDrugs: ["ceftriaxone", "penicillin_g"],
    resistances: [
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "S", mechanismNotes: "A bakteriális meningitis empirikus és célzott kezelésének alapköve." },
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "S", mechanismNotes: "Magas dózisban i.v. érzékeny törzsekre továbbra is kiváló." },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "S" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "S", mechanismNotes: "Egyetlen 500 mg-os orális adag ciprofloxacin a kontakt személyek kemoprofilaxisára alkalmas." }
    ]
  },
  {
    id: "n_gonorrhoeae",
    name: "Neisseria gonorrhoeae (Gonococcus)",
    type: "gram-negative",
    clinicalImportance: "A gonorrhoea (kankó, tripper) nevű nemi betegség okozója. Férfiakban urethritist (bőséges sárgás folyás), nőkben cervicitist, kismedencei gyulladást (PID, meddőség) okoz. Újszülöttekben ophthalmia neonatorumot (vakságot) idézhet elő.",
    resistanceMechanisms: "Kiemelkedő multirezisztencia jellemzi. Plazmid-mediált béta-laktázok miatt a penicillin már régen hatástalan. A fluorokinolon-rezisztencia is elterjedt. Jelenleg a Ceftriaxon i.m. az elsővonalbeli kezelés, gyakran Azithromycinnel kombinálva az atípusos kísérőfertőzések (Chlamydia) lefedésére.",
    firstLineDrugs: ["ceftriaxone", "azithromycin"],
    resistances: [
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "S", mechanismNotes: "Az EUCAST ajánlása szerint az elsővonalbeli kezelés 1x 1g vagy 500 mg i.m. egyszeri adagban." },
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "PPNG (penicillinase-producing N. gonorrhoeae) miatt rezisztens." },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "R", mechanismNotes: "Gyakori a kromoszómális mutáció miatti rezisztencia." },
      { antibioticId: "azithromycin", antibioticName: "Azithromycin", susceptibility: "S", mechanismNotes: "Kombinációs partnerként javasolt a kísérő Chlamydia fertőzések lefedésére." }
    ]
  },
  {
    id: "s_enteritidis",
    name: "Salmonella enteritidis",
    type: "gram-negative",
    clinicalImportance: "A salmonellosis (bakteriális ételmérgezés) leggyakoribb okozója. Lázat, vizes (ritkán véres) hasmenést, hányást, hasi fájdalmat okoz, általában fertőzött tojás vagy baromfihús fogyasztása után. Egészségesekben antibiotikus kezelést nem igényel (nyújtja a hordozást), de csecsemőkben, idősekben és immunszupprimáltakban szisztémás fertőzést/sepsist okozhat.",
    resistanceMechanisms: "A legtöbb törzs jól reagál ceftriaxonra vagy ciprofloxacinra szisztémás fertőzés esetén, de a fluorokinolon rezisztencia világszerte emelkedik.",
    firstLineDrugs: ["ceftriaxone", "ciprofloxacin", "azithromycin"],
    resistances: [
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "S", mechanismNotes: "Szisztémás fertőzések esetén választandó." },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "S" },
      { antibioticId: "azithromycin", antibioticName: "Azithromycin", susceptibility: "S" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "S" },
      { antibioticId: "cotrimoxazole", antibioticName: "Co-trimoxazol", susceptibility: "S" }
    ]
  },
  {
    id: "s_typhi",
    name: "Salmonella Typhi",
    type: "gram-negative",
    clinicalImportance: "A hastífusz (typhus abdominalis) kórokozója. Szisztémás, életveszélyes fertőzést okoz magas, lépcsőzetesen emelkedő lázzal, bradycardiával, rózsahimlővel (roseola) a hason, splenomegaliával, leukopeniával és székrekedéssel vagy borsópüré-szerű hasmenéssel. Súlyos szövődménye a bélperforáció.",
    resistanceMechanisms: "Gyakoriak a multirezisztens (MDR) törzsek, amelyek rezisztensek ampicillinre, trimetoprim-szulfametoxazolra és kloramfenikolra. Egyes területeken (pl. Pakisztán) kiterjedten rezisztens (XDR) törzsek is megjelentek. A ceftriaxon vagy azithromycin az elsővonalbeli szer.",
    firstLineDrugs: ["ceftriaxone", "azithromycin", "ciprofloxacin"],
    resistances: [
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "S", mechanismNotes: "Szisztémás fertőzés elsővonalbeli i.v. kezelése." },
      { antibioticId: "azithromycin", antibioticName: "Azithromycin", susceptibility: "S" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "I", mechanismNotes: "Endémiás területeken magas a fluorokinolon rezisztencia aránya." },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R", mechanismNotes: "MDR törzseknél hatástalan." }
    ]
  },
  {
    id: "m_morganii",
    name: "Morganella morganii",
    type: "gram-negative",
    clinicalImportance: "Húgyúti fertőzések, urosepsis, sebfertőzések és postoperatív hasi fertőzések opportunista kórokozója kórházi környezetben. Gyakran érintett katéterezett betegekben.",
    resistanceMechanisms: "Kromoszómálisan kódolt AmpC béta-laktamázzal rendelkezik, ezért természetes módon rezisztens az aminopenicillinekre, az 1. és részben a 2. generációs cephalosporinokra. Intrinsic (természetes) módon rezisztens colistinre és polymyxin B-re is! Carbapenemek és cefepim hatásosak.",
    firstLineDrugs: ["cefepime", "meropenem", "ciprofloxacin"],
    resistances: [
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R", mechanismNotes: "Kromoszómális AmpC béta-laktamáz miatt." },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/klavulánsav", susceptibility: "R", mechanismNotes: "A klavulánsav nem védi meg az AmpC lebontástól." },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "I", mechanismNotes: "AmpC derepresszió veszélye áll fenn." },
      { antibioticId: "cefepime", antibioticName: "Cefepim", susceptibility: "S", mechanismNotes: "Stabil az AmpC-vel szemben." },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S" },
      { antibioticId: "imipenem_cilastatin", antibioticName: "Imipenem/cilasztatin", susceptibility: "I", mechanismNotes: "Az EUCAST irányelvek alapján a Proteae tribus tagjai (Morganella, Proteus, Providencia) csökkent érzékenységet mutatnak imipenemre (alapértelmezetten I kategória)." },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "S" }
    ]
  },
  {
    id: "p_jirovecii",
    name: "Pneumocystis jirovecii (korábban P. carinii)",
    type: "atypical",
    clinicalImportance: "Egy atípusos unicelluláris gomba, amely súlyos, életveszélyes interstitialis tüdőgyulladást (PCP - Pneumocystis pneumonia) okoz súlyosan immunszupprimáltakban (különösen kezeletlen HIV/AIDS betegekben, szervtranszplantáltakban, kemoterápiában részesülőkben). Jellegzetes tünete a progresszív nehézlégzés, száraz köhögés, hipoxia és a kétoldali finom interstitialis infiltrátum a röntgenen.",
    resistanceMechanisms: "Mivel gomba, az összes hagyományos antibakteriális szer és a klasszikus gombaellenes szerek (pl. azolok) is teljesen hatástalanok ellene. Az elsővonalbeli kezelése a folsavszintézist gátló nagy dózisú Co-trimoxazol (szulfametoxazol-trimetoprim).",
    firstLineDrugs: ["cotrimoxazole"],
    resistances: [
      { antibioticId: "cotrimoxazole", antibioticName: "Co-trimoxazol", susceptibility: "S", mechanismNotes: "Nagy dózisban (15-20 mg/ttkg/nap trimetoprim komponensre számolva) az abszolút elsővonalbeli kezelés." },
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Gomba ellen hatástalan." },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "R" },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "R" },
      { antibioticId: "metronidazole", antibioticName: "Metronidazol", susceptibility: "R" }
    ]
  },
  {
    id: "s_maltophilia",
    name: "Stenotrophomonas maltophilia",
    type: "gram-negative",
    clinicalImportance: "Kórházi, opportunista kórokozó, amely súlyos pneumoniát (különösen lélegeztetett, korábban széles spektrumú carbapenem kezelésben részesült betegekben) és sepsist okoz. Képes műanyag felszíneken biofilmet képezni.",
    resistanceMechanisms: "Rendkívül magas belső (intrinsic) rezisztencia jellemzi szinte az összes béta-laktámmal, köztük az összes carbapenemmel szemben! Két kromoszómális béta-laktamázzal rendelkezik: L1 (metallo-béta-laktamáz, lebontja a carbapenemeket) és L2 (cephalosporináz). Az elsővonalbeli kezelés a Co-trimoxazol.",
    firstLineDrugs: ["cotrimoxazole", "levofloxacin"],
    resistances: [
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "R", mechanismNotes: "Kifejezetten és belsőleg rezisztens minden carbapenemre az L1 metallo-béta-laktamáz miatt! Carbapenem kezelés alatt szelektálódik." },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/klavulánsav", susceptibility: "R" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "R" },
      { antibioticId: "cotrimoxazole", antibioticName: "Co-trimoxazol", susceptibility: "S", mechanismNotes: "Az elsőként választandó arany standard kezelés." },
      { antibioticId: "levofloxacin", antibioticName: "Levofloxacin", susceptibility: "S", mechanismNotes: "Légúti kinolonok alternatívaként használhatók." }
    ]
  },
  {
    id: "prevotella_spp",
    name: "Prevotella spp. (pl. P. melaninogenica, P. bivia)",
    type: "anaerobe",
    clinicalImportance: "Gram-negatív anaerob pálcák, a szájüreg, a felső légutak és a női genitalis traktus normál flórájának tagjai. Kevert anaerob fertőzésekben játszanak kulcsszerepet: aspirációs pneumonia, tüdőtályog, empyema, periapicalis fogászati tályogok, kismedencei gyulladások (PID) és nőgyógyászati/postoperatív sebfertőzések.",
    resistanceMechanisms: "A törzsek 30-80%-a plazmid- és kromoszóma-kódolt béta-laktamázokat (pl. CbxA, CfxA) termel, emiatt penicillinnel és amoxicillinnel szemben rezisztensek! Béta-laktamáz inhibitoros kombinációk (amoxicillin/klavulánsav, ampicillin/sulbactam), metronidazol, carbapenemek és clindamycin hatásosak (bár a clindamycin-rezisztencia emelkedő tendenciát mutat).",
    firstLineDrugs: ["amoxicillin_clavulanate", "metronidazole", "meropenem"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Gyakori béta-laktamáz termelés (CbxA, CfxA) miatti rezisztencia." },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/klavulánsav", susceptibility: "S", mechanismNotes: "A klavulánsav hatékonyan gátolja a Prevotella béta-laktamázokat." },
      { antibioticId: "metronidazole", antibioticName: "Metronidazol", susceptibility: "S", mechanismNotes: "Kiváló anaerob aktivitás, az elsővonalbeli kezelés része." },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S", mechanismNotes: "Súlyos, kevert anaerob/aerob kismedencei vagy thoracalis fertőzésekben elsőként választandó." },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "S", mechanismNotes: "Használható, de az emelkedő rezisztencia miatt megfontolás tárgya." },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "I", mechanismNotes: "Ingadozó béta-laktamáz érzékenység." },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "R", mechanismNotes: "Belső anaerob rezisztencia aminoglikozidokra." },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "R", mechanismNotes: "Gram-negatív sejtfal-struktúra miatt hatástalan." }
    ]
  },
  {
    id: "veillonella_spp",
    name: "Veillonella spp. (pl. V. parvula)",
    type: "anaerobe",
    clinicalImportance: "Gram-negatív anaerob coccusok, a szájüreg, a tápcsatorna és a felső légutak normál flórájának kommenzális tagjai. Általában polimikrobás kevert fertőzésekben (fogászati és periapicalis tályogok, aspirációs pneumonia, sinusitis, osteomyelitis, ritkán endocarditis vagy sepsis) vesznek részt.",
    resistanceMechanisms: "A legtöbb Veillonella törzs továbbra is érzékeny penicillinre, amoxicillin/klavulánsavra, metronidazolra, clindamycinre és carbapenemekre. Béta-laktamáz termelés ritkább, mint a Prevotella vagy Bacteroides fajoknál. Belsőleg (intrinsic) rezisztensek vancomycinre és aminoglikozidokra.",
    firstLineDrugs: ["penicillin_g", "amoxicillin_clavulanate", "metronidazole"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "S", mechanismNotes: "A legtöbb törzs jól reagál penicillinre." },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "S" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/klavulánsav", susceptibility: "S", mechanismNotes: "Kevert szájüregi/anaerob fertőzésekben kiváló választás." },
      { antibioticId: "metronidazole", antibioticName: "Metronidazol", susceptibility: "S", mechanismNotes: "Alapvető anaerob szer, kiváló hatásosság." },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S" },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "S", mechanismNotes: "Jól alkalmazható szájüregi és lágyrész-eredetű fertőzésekben." },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "S" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "R", mechanismNotes: "Belső anaerob rezisztencia aminoglikozidokra." },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "R", mechanismNotes: "Gram-negatív sejtfal miatt hatástalan." }
    ]
  }
];

