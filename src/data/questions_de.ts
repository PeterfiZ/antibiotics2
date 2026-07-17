/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { QuizQuestion } from '../types';

export const quizQuestionsData: QuizQuestion[] = [
  {
    id: "q1",
    type: "pharmacology",
    questionText: "Bei einem 62-jährigen männlichen Patienten besteht der Verdacht auf eine systemische Staphylococcus aureus-Infektion, und die Kultur bestätigt, dass der Stamm Methicillin-sensibel (MSSA) ist. Welche der folgenden intravenösen Behandlungen der ersten Wahl ist am besten geeignet?",
    options: [
      "Vancomycin i.v.",
      "Cefazolin i.v.",
      "Ceftazidim i.v.",
      "Piperacillin / Tazobactam i.v."
    ],
    correctAnswerIndex: 1,
    explanation: "Obwohl Vancomycin auch gegen MSSA wirksam ist, zeigen klinische Studien eindeutig, dass bei Beta-Laktam-sensiblen Staphylokokken-Infektionen Beta-Laktame (wie Cefazolin oder Oxacillin) eine schnellere bakterizide Wirkung entfalten und ein besseres klinisches Ergebnis (geringere Mortalität) liefern als Vancomycin. Cefazolin ist der Goldstandard bei systemischen MSSA-Infektionen. Ceftazidim ist ein Mittel mit Schwerpunkt auf Gram-negativen Keimen und ist gegen Staphylokokken schwach wirksam. Pip/Tazo hat ein unnötig breites Spektrum und würde den Schutz gegen Gram-negative Keime und Anaerobier unnötig verschwenden."
  },
  {
    id: "q2",
    type: "empirical",
    questionText: "Eine 68-jährige Patientin wird wegen hohem Fieber, produktivem Husten, Dyspnoe und Verwirrtheit in die Notaufnahme eingeliefert. Ihr Blutdruck beträgt 88/50 mmHg, der Puls 112/min, die Atemfrequenz 32/min und die Körpertemperatur 38,9 °C. Das Röntgenbild des Thorax zeigt ein rechtsseitiges lobäres Infiltrat. Welche ist die am besten geeignete initiale empirische Antibiotikabehandlung?",
    options: [
      "Amoxicillin 3x 1g p.o.",
      "Ceftriaxon 1x 2g i.v. + Clarithromycin 2x 500mg i.v.",
      "Ceftazidim 3x 2g i.v.",
      "Metronidazol 3x 500mg i.v."
    ],
    correctAnswerIndex: 1,
    explanation: "Der CURB-65-Score der Patientin ist 4 (Verwirrtheit, Harnstoff unbekannt, aber Atemfrequenz >= 30, niedriger Blutdruck, Alter > 65), was einer schweren ambulant erworbenen Lungenentzündung (schwere CAP) entspricht, die eine sofortige Krankenhaus-/Intensivaufnahme und i.v.-Behandlung erfordert. Die empirische Behandlung muss auch Streptococcus pneumoniae und atypische Erreger (Legionella, Mycoplasma) abdecken. Die Kombination Ceftriaxon (Beta-Laktam) + Clarithromycin (Makrolid) ist die anerkannte Standardleitlinie. Amoxicillin p.o. ist für leichte Fälle gedacht. Ceftazidim wirkt nicht auf die Hauptursachen der Lungenentzündung (schwach gegen S. pneumoniae, unwirksam gegen atypische Erreger). Metronidazol ist nur ein Mittel gegen Anaerobier und allein ungeeignet.",
    caseData: {
      age: 68,
      gender: "weiblich",
      symptoms: ["Hohes Fieber", "Produktiver Husten", "Atemnot (Dyspnoe)", "Verwirrtheit (Konfusion)"],
      vitals: {
        bp: "88/50 mmHg",
        hr: 112,
        temp: "38.9 °C",
        rr: 32
      },
      labs: ["Thorax-Röntgen: Infiltrat im rechten Unterlappen", "CRP: 185 mg/l", "Leukozyten: 16.4 G/l"]
    }
  },
  {
    id: "q3",
    type: "susceptibility",
    questionText: "Welche Aussage ist bezüglich der natürlichen (intrinsischen) Antibiotikaempfindlichkeit von Enterococcus-Arten richtig?",
    options: [
      "Alle Enterokokken sind empfindlich gegenüber Cephalosporinen der dritten Generation wie Ceftriaxon.",
      "Enterokokken sind von Natur aus gegen alle Cephalosporine resistent.",
      "Enterococcus faecium ist im Allgemeinen empfindlich gegenüber Ampicillin.",
      "Enterococcus faecalis ist resistent gegen Vancomycin und kann nur mit Linezolid behandelt werden."
    ],
    correctAnswerIndex: 1,
    explanation: "Alle Enterokokken (faecalis, faecium usw.) sind von Natur aus vollständig resistent gegen alle existierenden Cephalosporine (einschließlich Ceftriaxon und Cefepim). Dies ist ein kritischer pharmakologischer Fakt: Während einer Cephalosporin-Behandlung kommt es häufig zu einer Enterokokken-Superinfektion (z. B. Harnwegs- oder Darmtrakt). 90% der E. faecium-Stämme zeigen eine erworbene Resistenz gegenüber Ampicillin. E. faecalis bleibt in der Regel sowohl gegenüber Ampicillin als auch gegenüber Vancomycin empfindlich (VRE - Vancomycin-resistente Enterokokken sind bei E. faecium viel häufiger)."
  },
  {
    id: "q4",
    type: "pharmacology",
    questionText: "Bei einer 74-jährigen Patientin mit Niereninsuffizienz (eGFR: 22 ml/min) und Harnwegsinfekt wird eine Infektion der unteren Harnwege (Zystitis) diagnostiziert. Warum ist die Anwendung von Nitrofurantoin bei ihr kontraindiziert?",
    options: [
      "Weil Nitrofurantoin schweres Nierenversagen (akute tubuläre Nekrose) verursacht.",
      "Weil bei verminderter Nierenfunktion Nitrofurantoin nicht ausgeschieden werden kann und sich im Urin anreichert, wodurch es in der Blase unwirksam wird, während es eine systemische Toxizität verursacht.",
      "Weil Nitrofurantoin ausschließlich in der Leber ausgeschieden wird und bei Nierenpatienten inaktiv wird.",
      "Weil Nitrofurantoin die Erythropoetin-Produktion der Niere zerstört."
    ],
    correctAnswerIndex: 1,
    explanation: "Nitrofurantoin ist ein spezielles Mittel: Um seine Wirkung zu entfalten, muss es in den Urin gelangen und dort eine hohe Konzentration erreichen. Wenn die GFR < 30 ml/min ist, ist die Filterkapazität der Niere so gering, dass Nitrofurantoin nicht in ausreichender Menge in die Harnblase gelangt, sodass es die Bakterien nicht abtötet. Gleichzeitig reichert es sich im Blut an (es wird nicht ausgeschieden), was das Risiko für schwere Nebenwirkungen (z. B. periphere Neuropathie, Lungenfibrose) erhöht. Daher ist es bei Nierenerkrankungen nicht wegen des Nierenschutzes verboten, sondern wegen der Unwirksamkeit und der systemischen Toxizität."
  },
  {
    id: "q5",
    type: "empirical",
    questionText: "Ein 19-jähriger Student wird mit plötzlich einsetzendem hohem Fieber, intensiven Kopfschmerzen, Lichtscheu und Erbrechen in die Notaufnahme eingeliefert. Bei der Untersuchung zeigt sich eine ausgeprägte Nackensteifigkeit (Meningismus), und auf dem Rumpf sind kleine, nicht wegdrückbare Petechien sichtbar. Was ist die am besten geeignete sofortige Maßnahme?",
    options: [
      "Blutentnahme für Hämokultur, Schädel-CT und LP. Antibiotika sollten erst nach Erhalt der Befunde begonnen werden.",
      "Blutentnahme für Hämokultur, dann sofortige empirische i.v.-Gabe von Dexamethason und Ceftriaxon 2x 2g i.v., danach Erwägung einer dringenden Lumbalpunktion.",
      "Verschreibung von ambulantem Ciprofloxacin 1x 500 mg p.o. und Entlassung des Patienten nach Hause bei enger Beobachtung.",
      "Sofortige Lumbalpunktion, dann Warten auf das Liquorergebnis (3 Stunden) vor der Antibiotikagabe."
    ],
    correctAnswerIndex: 1,
    explanation: "Beim Patienten besteht der Verdacht auf eine akute eitrige bakterielle Meningitis und Sepsis (Verdacht auf Meningokokken mit Petechien). Bei bakterieller Meningitis erhöht jede Stunde Verzögerung bei der Antibiotikagabe die Mortalität und das Risiko für neurologische Schäden erheblich. Die richtige Reihenfolge: Hämokultur abnehmen, dann SOFORTIGES empirisches Breitbandantibiotikum (Ceftriaxon 2g i.v. ist gut blut-hirn-schrankengängig) + Dexamethason (hemmt den entzündlichen Zytokinsturm, der bei der Lyse der Bakterien entsteht, und reduziert Hörverlust). Eine Lumbalpunktion sollte erst nach Stabilisierung des Patienten oder nach Ausschluss-CT durchgeführt werden, daher darf die Antibiotikagabe keine Minute verzögert werden!",
    caseData: {
      age: 19,
      gender: "männlich",
      symptoms: ["Hohes Fieber (39.5 °C)", "Starke Kopfschmerzen", "Lichtempfindlichkeit (Photophobie)", "Erbrechen", "Petechien auf der Haut"],
      vitals: {
        bp: "105/65 mmHg",
        hr: 120,
        temp: "39.6 °C",
        rr: 24
      },
      labs: ["Nackensteifigkeit: 3 Fingerbreit", "Kernig- und Brudzinski-Zeichen: positiv"]
    }
  },
  {
    id: "q6",
    type: "susceptibility",
    questionText: "Welches Antibiotikum ist unter den aufgeführten gegen Pseudomonas aeruginosa absolut UNWIRKSAM?",
    options: [
      "Ciprofloxacin",
      "Cefepim",
      "Ertapenem",
      "Piperacillin / Tazobactam"
    ],
    correctAnswerIndex: 2,
    explanation: "Ertapenem ist das einzige Carbapenem, das überhaupt keine Wirkung gegen Pseudomonas aeruginosa und Acinetobacter baumannii hat (aufgrund seiner polarisierten Struktur kann es die Porinkanäle dieser Bakterien nicht passieren). Aus diesem Grund ist es ein hervorragendes 'carbapenem-sparendes' Medikament (z. B. ausgezeichnet bei ESBL E. coli-Infektionen, während das Arsenal gegen Pseudomonas geschont wird). Ciprofloxacin (orales/i.v. Chinolon), Cefepim (Cephalosporin der 4. Gen.) und Pip/Tazo (anti-Pseudomonas-Penicillin) sind alle wirksam bei empfindlichen Pseudomonas-Infektionen."
  },
  {
    id: "q7",
    type: "pharmacology",
    questionText: "Welche Wirkstoffpaarung ist für die Entstehung des 'Red Man Syndrome' (Red-Man-Syndrom) verantwortlich und wie kann es verhindert werden?",
    options: [
      "Ceftriaxon - durch Vermeidung kalziumhaltiger Infusionen.",
      "Vancomycin - durch Verlangsamung der Infusionsgeschwindigkeit (Verabreichung über mindestens 60 Minuten).",
      "Linezolid - durch Vermeidung von Käse und tyraminreichen Lebensmitteln.",
      "Metronidazol - durch striktes Alkoholverbot."
    ],
    correctAnswerIndex: 1,
    explanation: "Das Red-Man-Syndrom ist eine nicht-immunologische (nicht IgE-vermittelte) Histaminfreisetzung, die auftritt, wenn Vancomycin zu schnell intravenös verabreicht wird. Charakteristisch ist eine intensive Rötung und Juckreiz von Hals, Gesicht und Oberkörper, die mit Hypotonie einhergehen kann. Es ist keine echte Allergie! Es kann verhindert werden, wenn Vancomycin langsam, verdünnt, in einer Infusion von mindestens 60 Minuten (oder mit einer Geschwindigkeit von 10 mg/min) infundiert wird. Wenn es bereits aufgetreten ist, wird das Abbrechen der Infusion und die Gabe von Antihistaminika empfohlen."
  },
  {
    id: "q8",
    type: "susceptibility",
    questionText: "Welcher Mechanismus erklärt, warum Legionella pneumophila und Mycoplasma pneumoniae von Natur aus gegen alle Beta-Laktam-Antibiotika (z. B. Penicilline, Cephalosporine, Carbapeneme) resistent sind?",
    options: [
      "Weil sie Betalaktamasen mit erweitertem Spektrum (ESBL) produzieren.",
      "Weil sie intrazellulär gedeihen, wo Beta-Laktame nicht eindringen, und Mycoplasma überhaupt keine Peptidoglykan-Zellwand (den Angriffspunkt von Beta-Laktamen) besitzt.",
      "Weil sie wie MRSA ein verändertes PBP-2a-Protein besitzen.",
      "Weil sie Beta-Laktame sofort mit aktiven Efflux-Pumpen hinauspumpen."
    ],
    correctAnswerIndex: 1,
    explanation: "Der Wirkungsmechanismus von Beta-Laktamen ist die Hemmung der Peptidoglykan-Zellwandsynthese (Transpeptidierung) des Bakteriums. Mycoplasma pneumoniae hat überhaupt keine Zellwand (nur eine dreischichtige Zellmembran), sodass Penicilline und Cephalosporine keinen Angriffspunkt haben! Legionella pneumophila ist ein intrazelluläres Bakterium, das in alveolären Makrophagen lebt; aufgrund ihrer Polarität können Beta-Laktame die menschliche Zellmembran nicht durchdringen und in die Zellen gelangen. Daher müssen bei beiden atypischen Erregern Makrolide, Tetracycline oder Fluorchinolone verwendet werden, die exzellent in die Zellen eindringen."
  },
  {
    id: "q9",
    type: "empirical",
    questionText: "Eine 24-jährige gesunde Patientin stellt sich mit dringendem Harndrang, schmerzhaftem/brennendem Wasserlassen (Dysurie) und suprapubischem Druckgefühl vor. Sie hat kein Fieber und berichtet von keinen Rückenschmerzen. Der Urin-Teststreifen ist Nitrit- und Leukozyten-positiv. Welche ist die am besten geeignete empirische Behandlung der ersten Wahl gemäß den neuesten urologischen Leitlinien?",
    options: [
      "Ciprofloxacin 2x 500 mg p.o. für 3 Tage",
      "Fosfomycin-Trometamol 1x 3g p.o. Einmaldosis",
      "Amoxicillin 3x 500 mg p.o. für 7 Tage",
      "Ceftriaxon 1x 1g i.v. Einmaldosis"
    ],
    correctAnswerIndex: 1,
    explanation: "Die Patientin hat eine akute unkomplizierte Zystitis. Laut den EAU-Leitlinien (European Association of Urology) sind die Mittel der ersten Wahl Fosfomycin-Trometamol (1x 3g Einmaldosis) oder Nitrofurantoin (2x 100mg für 5 Tage). Basierend auf strengen FDA- und EMA-Empfehlungen sollten Fluorchinolone (wie Ciprofloxacin) bei unkomplizierter Zystitis aufgrund möglicher langfristiger und behindernder Nebenwirkungen (Sehnen, Gelenke, Nervensystem) vermieden werden; diese sollten für Pyelonephritis reserviert bleiben! Amoxicillin-Monotherapie wird aufgrund hoher E. coli-Resistenzen nicht empfohlen. Die intravenöse Gabe von Ceftriaxon bei Zystitis ist ein unbegründeter Einsatz von Kanonen auf Spatzen."
  },
  {
    id: "q10",
    type: "pharmacology",
    questionText: "Welche Aussage ist bezüglich des gemeinsamen Konsums von Metronidazol und Alkohol richtig?",
    options: [
      "Es gibt keine Wechselwirkungen, Alkohol kann während der Behandlung sicher konsumiert werden.",
      "Alkohol neutralisiert die Wirkung von Metronidazol, sodass das Antibiotikum unwirksam wird.",
      "Es löst eine Disulfiram-ähnliche Reaktion aus (hemmt Acetaldehyd-Dehydrogenase), was zu schwerer Übelkeit, Erbrechen, Rötung, Kopfschmerzen und Tachykardie führt.",
      "Alkohol verhindert die Aufnahme von Metronidazol aus dem Magen."
    ],
    correctAnswerIndex: 2,
    explanation: "Metronidazol hemmt das Enzym Acetaldehyd-Dehydrogenase in der Leber, das für den zweiten Schritt des Alkoholabbaus verantwortlich ist. Dadurch reichert sich das hochtoxische Acetaldehyd-Intermediat im Körper an, was eine sogenannte Disulfiram-ähnliche Reaktion auslöst. Symptome: intensive Rötung von Gesicht und Hals, pochende Kopfschmerzen, schwere Übelkeit, Erbrechen, Schwitzen, Tachykardie und sogar Kollaps. Daher ist während der Metronidazol-Kur und für mindestens 48 Stunden nach deren Abschluss der Konsum von alkoholischen Getränken oder sogar alkoholhaltigen Mundspülungen oder Medikamenten strengstens verboten!"
  },
  {
    id: "q11",
    type: "susceptibility",
    questionText: "Ein 78-jähriger immunsupprimierter (nierentransplantierter) männlicher Patient wird mit Verdacht auf bakterielle Meningitis aufgenommen. Laut Leitlinien wird die empirische Behandlung nach der Lumbalpunktion mit Ceftriaxon (2x 2g i.v.) und Vancomycin (2x 1g i.v.) begonnen. Welches kritische zusätzliche Antibiotikum MUSS in dieser Patientengruppe unbedingt diesem Schema hinzugefügt werden und warum?",
    options: [
      "Metronidazol, zur Vorbeugung von anaeroben Hirnabszessen durch Bacteroides fragilis.",
      "Ampicillin oder Amoxicillin (oder TMP-SMX), weil Listeria monocytogenes, die bei Immunsupprimierten und Älteren häufig vorkommt, von Natur aus gegen alle Cephalosporine (einschließlich Ceftriaxon) resistent ist.",
      "Ciprofloxacin, weil es eine synergistische Wirkung gegen Pseudomonas aeruginosa mit Ceftriaxon ausübt.",
      "Clarithromycin, um atypische Neuro-Mykoplasmen abzudecken."
    ],
    correctAnswerIndex: 1,
    explanation: "Listeria monocytogenes ist ein grampositives Stäbchen, das ein wichtiger Erreger der bakteriellen Meningitis bei Neugeborenen, älteren Menschen (>50-60 Jahre) und immunsupprimierten Patienten ist. Listeria ist von Natur aus (intrinsisch) resistent gegen ALLE Cephalosporine (einschließlich der 1., 2., 3. und 4. Generation, also auch Ceftriaxon und Cefepim)! Daher ist die empirische Meningitis-Behandlung (Ceftriaxon + Vancomycin) für sich allein völlig wirkungslos gegen Listerien. In dieser Risikogruppe ist es zwingend erforderlich, Ampicillin oder Amoxicillin (i.v.) zur Behandlung hinzuzufügen, da dies das aktivste Mittel der ersten Wahl dagegen ist (oft kombiniert mit Gentamicin für synergistische bakterizide Wirkung). Bei Penicillinallergie ist TMP-SMX die gewählte Alternative.",
    caseData: {
      age: 78,
      gender: "männlich",
      symptoms: ["Fieber", "Nackensteifigkeit", "Schläfrigkeit", "Verwirrtheit"],
      vitals: {
        bp: "120/80 mmHg",
        hr: 90,
        temp: "38.8 °C",
        rr: 20
      },
      labs: ["Transplantierte Niere (Kreatinin: 145 µmol/l)", "Liquor: eitrig, hoher Proteingehalt, niedriger Zucker, stäbchenförmige grampositive Bakterien"]
    }
  },
  {
    id: "q12",
    type: "pharmacology",
    questionText: "Eine 35-jährige Patientin stellt sich mit wiederkehrendem, schmerzhaftem Wasserlassen vor. Urin-Laboruntersuchungen zeigen einen auffallend hohen Urin-pH (pH: 8.2), und die Kultur bestätigt eine Proteus mirabilis-Infektion. Für welche klinische Komplikation hat die Patientin bei diesem Erreger ein besonders hohes Risiko und was erklärt dies?",
    options: [
      "Akutes Nierenversagen durch direkten Verschluss der Nierentubuli.",
      "Entwicklung von Struvitsteinen (Magnesium-Ammonium-Phosphat) im Nierenbecken, da Proteus Harnstoff mit seinem starken Urease-Enzym abbaut und den Urin alkalisiert.",
      "Glomerulonephritis aufgrund von Immunkomplexbildung mit Proteus-Zellwandantigenen.",
      "Interstitielle Nephritis aufgrund von Penicillin-Überempfindlichkeit."
    ],
    correctAnswerIndex: 1,
    explanation: "Eine Besonderheit von Proteus mirabilis (und einigen anderen Erregern wie Klebsiella oder Pseudomonas) ist, dass sie große Mengen an Urease-Enzym produzieren. Das Urease-Enzym baut den im Urin enthaltenen Harnstoff zu Kohlendioxid und Ammoniak ab. Ammoniak reagiert mit Wasser zu Ammoniumhydroxid, was den Urin-pH drastisch erhöht (in alkalische Richtung, oft pH > 7.5-8.0). In alkalischem Milieu nimmt die Löslichkeit von Magnesium-, Ammonium- und Phosphationen signifikant ab, was zur schnellen Ausfällung und zum Wachstum von Struvitsteinen (Magnesium-Ammonium-Phosphat) führt. Diese Steine füllen oft das gesamte Nierenbecken aus (Ausgusssteine - Staghorn calculi), dienen als Bakterienreservoir und erfordern chirurgische Entfernung oder umfangreiche Behandlung.",
    caseData: {
      age: 35,
      gender: "weiblich",
      symptoms: ["Dysurie", "Suprapubische Schmerzen", "Trüber, übelriechender Urin"],
      vitals: {
        bp: "115/75 mmHg",
        hr: 76,
        temp: "37.2 °C",
        rr: 14
      },
      labs: ["Urin pH: 8.2", "Urinsediment: reichlich Tripelphosphat-Kristalle", "Kultur: Proteus mirabilis > 10^5 CFU/ml"]
    }
  },
  {
    id: "q13",
    type: "empirical",
    questionText: "Bei einem 54-jährigen Patienten bestätigt die Hämokultur Enterobacter cloacae. Basierend auf dem Labor-Empfindlichkeitsbericht (Antibiogramm) ist das Bakterium sowohl empfindlich gegenüber Ceftriaxon (Cephalosporin der 3. Generation) als auch Cefepim (Cephalosporin der 4. Generation). Warum ist dennoch eine Ceftriaxon-Monotherapie in diesem Fall kontraindiziert und was ist die richtige Wahl?",
    options: [
      "Weil Ceftriaxon keinen ausreichenden Blutspiegel erreichen kann, sodass es bei systemischen Infektionen nicht wirkt.",
      "Weil Enterobacter cloacae eine chromosomal kodierte AmpC-Betalaktamase besitzt, die während der Ceftriaxon-Exposition (oder anderen Cephalosporinen der 3. Gen.) dereprimiert werden kann (durch Mutation auf ein dauerhaft hohes Niveau geschaltet), was zu schneller Resistenz und therapeutischem Versagen führt. Stattdessen sollte Cefepim oder ein Carbapenem gewählt werden.",
      "Weil Ceftriaxon zu starke Nebenwirkungen bei Enterobacter hat.",
      "Weil Enterobacter cloacae nur mit oralem Amoxicillin geheilt werden kann."
    ],
    correctAnswerIndex: 1,
    explanation: "Bestimmte gramnegative Bakterien (insbesondere die 'SPACE'- oder 'MYSPACE'-Gruppe: Morganella, Yersinia, Serratia, Pseudomonas, Acinetobacter, Citrobacter, Enterobacter) besitzen ein chromosomales AmpC-Betalaktamase-Gen. Im Basiszustand (Wildtyp-Stämme) wird dieses Enzym in vernachlässigbaren Mengen produziert, sodass das Bakterium in vitro (im Labortest) empfindlich gegenüber Cephalosporinen der 3. Generation (z. B. Ceftriaxon) erscheinen kann. Während der Ceftriaxon-Behandlung werden jedoch einige Bakterien durch Mutation dereprimiert (das Hemmgen wird abgeschaltet) und beginnen, massenhaft AmpC zu produzieren, das Ceftriaxon abbaut. Dies führt beim Patienten am 3.-4. Tag der Behandlung zu einem schweren therapeutischen Versagen. Das Cephalosporin der 4. Generation Cefepim oder die Carbapeneme (Meropenem) sind stabil gegenüber dem AmpC-Enzym, daher sind diese die Mittel der Wahl bei systemischen Enterobacter-Infektionen."
  },
  {
    id: "q14",
    type: "empirical",
    questionText: "Ein 21-jähriger Student stellt sich beim Hausarzt mit trockenem Husten, mäßigem Fieber (37.8 °C), Kopfschmerzen und ausgeprägter Schwäche vor. Über der Lunge gibt es keinen nennenswerten Auskultationsbefund, aber das Röntgenbild des Thorax zeigt erstaunlich ausgedehnte, beidseitige netzartige (interstitielle) Infiltrationen ('Dissoziation' zwischen Klinik und Röntgenbild). Welcher Erreger ist am wahrscheinlichsten und welche Therapie sollte begonnen werden?",
    options: [
      "Streptococcus pneumoniae - Amoxicillin-Monotherapie.",
      "Mycoplasma pneumoniae - Makrolid (z. B. Clarithromycin) oder Tetracyclin (Doxycyclin).",
      "Staphylococcus aureus - Cefazolin intravenös.",
      "Pseudomonas aeruginosa - Ciprofloxacin oral."
    ],
    correctAnswerIndex: 1,
    explanation: "Das klinische Bild des Patienten (junges Alter, trockener Husten, mäßiges Fieber, aber schwerer Röntgenbefund: Dissoziation zwischen klinischen Symptomen und Röntgenbild) deutet auf eine klassische atypische Lungenentzündung ('Walking Pneumonia') hin, deren häufigster Erreger Mycoplasma pneumoniae ist. Da Mycoplasma keine Peptidoglykan-Zellwand besitzt, sind alle Beta-Laktame (wie Amoxicillin, Cefazolin, Ceftriaxon) zu 100% unwirksam dagegen! Die Behandlung erfordert ein Antibiotikum, das auch intrazellulär wirksam ist und die Proteinsynthese hemmt, wie Makrolide (Clarithromycin, Azithromycin) oder Tetracycline (Doxycyclin). Bei jungen Erwachsenen sind Doxycyclin oder Makrolide bei solch einem klinischen Bild die empirischen Mittel der ersten Wahl."
  },
  {
    id: "q15",
    type: "pharmacology",
    questionText: "Bei einem 48-jährigen Schafzüchter werden hohes Fieber, atypische Lungenentzündung und moderate Hepatitis bestätigt. Aufgrund des Verdachts auf Zoonose identifiziert die Serologie eine Coxiella burnetii-Infektion (Q-Fieber). Warum sind die Antibiotikaempfindlichkeit und das intrazelluläre Überleben von Coxiella burnetii besonders?",
    options: [
      "Weil es nur im Zellkern gedeihen kann, daher nur durch Nukleosid-Analoga gehemmt werden kann.",
      "Weil es als obligat intrazellulärer Erreger im sauren Milieu des Phagolysosoms der Wirtszelle lebt. Der saure pH-Wert hemmt Doxycyclin, daher ist bei chronischen Fällen (z. B. Q-Fieber-Endokarditis) eine Doxycyclin + Hydroxychloroquin-Kombination erforderlich, um den lysosomalen pH-Wert zu alkalisieren.",
      "Weil es Betalaktamase in den extrazellulären Raum injiziert, was die umliegenden Antibiotika abbaut.",
      "Weil es keine Zellmembran besitzt, sodass kein lipophiles Antibiotikum in das Bakterium eindringen kann."
    ],
    correctAnswerIndex: 1,
    explanation: "Coxiella burnetii ist der Erreger des Q-Fiebers, ein obligat intrazelluläres Bakterium. Seine Besonderheit ist, dass es im Inneren der Phagolysosomen von Makrophagen lebt und sich dort vermehrt, was ein spezifisch saures (pH 4.5-5.0) Organell ist. Dieses saure Milieu hemmt die Aktivität der meisten Antibiotika (einschließlich Doxycyclin). Bei akutem Q-Fieber ist Doxycyclin allein wirksam, aber in chronischer Form (die typischerweise eine Q-Fieber-Endokarditis bei negativer Hämokultur verursacht), muss neben Doxycyclin Hydroxychloroquin (eine schwache Base) gegeben werden. Hydroxychloroquin reichert sich im Phagolysosom an, erhöht dessen pH-Wert (alkalisiert das Milieu), was die bakterizide Aktivität von Doxycyclin wiederherstellt und die Eliminierung des Erregers ermöglicht. Diese Kombinationsbehandlung dauert oft 18-24 Monate."
  }
];