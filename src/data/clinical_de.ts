/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClinicalInfection } from '../types';

export const clinicalInfectionsData: ClinicalInfection[] = [
  {
    id: "cap",
    name: "Ambulant erworbene Pneumonie (CAP)",
    category: "respiratory",
    pathogens: [
      { name: "Streptococcus pneumoniae", frequency: "very-common", notes: "Der häufigste bakterielle Erreger in jedem Lebensalter." },
      { name: "Mycoplasma pneumoniae", frequency: "common", notes: "Häufig bei jungen Erwachsenen, atypisches klinisches Bild." },
      { name: "Haemophilus influenzae", frequency: "common", notes: "Häufiger bei COPD und im höheren Lebensalter." },
      { name: "Chlamydia pneumoniae", frequency: "common", notes: "Atypische Pneumonie." },
      { name: "Legionella pneumophila", frequency: "rare", notes: "Schwere, lobäre Pneumonie, häufig mit extrarenalen Symptomen (Hyponatriämie, Durchfall)." },
      { name: "Staphylococcus aureus", frequency: "rare", notes: "Tritt häufig als Superinfektion nach Influenza auf, kann nekrotisierend verlaufen." }
    ],
    empirical: {
      mild: {
        firstLine: "Amoxicillin 1g p.o. 3x/Tag (bei fehlenden Begleiterkrankungen und ohne Betalaktam-Allergie) ODER Doxycyclin 100 mg p.o. 2x/Tag",
        alternative: "Clarithromycin 500 mg p.o. 2x/Tag ODER Azithromycin 500 mg p.o. 1x/Tag (für 3 Tage)",
        duration: "5 - 7 Tage (nach Erreichen der klinischen Stabilität noch 48-72 Stunden fortführen)"
      },
      severe: {
        firstLine: "Ceftriaxon 2g i.v. 1x/Tag + Clarithromycin 500 mg i.v. 2x/Tag (zur Abdeckung atypischer Erreger) ODER Cefotaxim 2g i.v. 3x/Tag + Clarithromycin i.v.",
        alternative: "Monotherapie mit einem Atemwegs-Fluorchinolon: Levofloxacin 500-750 mg i.v./p.o. 1x/Tag ODER Moxifloxacin 400 mg i.v./p.o. 1x/Tag",
        duration: "7 - 10 Tage (bei Verdacht auf S. aureus oder Pseudomonas 14 Tage, bei Legionellen 10-14 Tage)"
      }
    },
    targeted: [
      { condition: "Streptococcus pneumoniae (Penicillin-empfindlich, MHK < 2 µg/ml)", treatment: "Penicillin G 2 Millionen IE i.v. 4-6x/Tag oder Amoxicillin 1g p.o. 3x/Tag." },
      { condition: "Streptococcus pneumoniae (Penicillin-resistent, PRSP)", treatment: "Ceftriaxon 2g i.v. 1x/Tag oder Levofloxacin 750mg p.o./i.v. 1x/Tag. In schweren Fällen Vancomycin." },
      { condition: "Mycoplasma / Chlamydia pneumoniae", treatment: "Doxycyclin 100 mg p.o. 2x/Tag oder Clarithromycin 500 mg p.o. 2x/Tag über 7-10 Tage." },
      { condition: "Legionella pneumophila", treatment: "Levofloxacin 750 mg i.v./p.o. 1x/Tag oder Azithromycin 500 mg i.v./p.o. 1x/Tag (Doxycyclin ist ebenfalls eine Alternative)." },
      { condition: "MRSA (Methicillin-resistenter S. aureus)", treatment: "Linezolid 600 mg i.v./p.o. 2x/Tag oder Ceftarolin 600 mg i.v. 2x/Tag (oder Vancomycin)." }
    ],
    guidelines: "BTS/NICE 2024, IDSA/ATS Pneumonia Guidelines, nationale infektiologische Fachleitlinien",
    diagnosticsNotes: "Eine Röntgenaufnahme des Thorax (p.a. + seitlich) ist zur Bestätigung des Infiltrats obligatorisch. Der CURB-65-Score hilft bei der Entscheidung über den Behandlungsort (0-1: ambulant, 2: Normalstation, ≥3: Intensivstation erwägen). In schweren Fällen werden Blutkulturen, eine Sputumkultur sowie ein Urin-Schnelltest auf Streptococcus- und Legionella-Antigen empfohlen."
  },
  {
    id: "hap_vap",
    name: "Nosokomiale und beatmungsassoziierte Pneumonie (HAP/VAP)",
    category: "respiratory",
    pathogens: [
      { name: "Pseudomonas aeruginosa", frequency: "very-common", notes: "Ein schwerer, schwer zu behandelnder, häufig multiresistenter Krankenhausstamm." },
      { name: "Klebsiella pneumoniae (und andere Enterobacterales)", frequency: "very-common", notes: "Häufig ESBL- oder Carbapenemase-bildend (KPC, MBL)." },
      { name: "Staphylococcus aureus (auch MRSA)", frequency: "common", notes: "Das MRSA-Risiko ist besonders bei vorheriger Antibiotikaanwendung und intensivmedizinischer Behandlung erhöht." },
      { name: "Acinetobacter baumannii", frequency: "common", notes: "Extrem widerstandsfähig, verursacht vor allem auf Intensivstationen Ausbrüche." }
    ],
    empirical: {
      mild: {
        firstLine: "Ceftriaxon 2g i.v. 1x/Tag ODER Cefotaxim 2g i.v. 3x/Tag (wenn kein Risikofaktor für resistente gramnegative Erreger oder MRSA vorliegt)",
        alternative: "Levofloxacin 750 mg i.v. 1x/Tag oder Moxifloxacin 400 mg i.v. 1x/Tag",
        duration: "7 Tage (bei klinischer und radiologischer Besserung wird eine kürzere Behandlungsdauer empfohlen, um Resistenzen zu vermeiden)"
      },
      severe: {
        firstLine: "Anti-pseudomonal wirksames Betalaktam: Piperacillin/Tazobactam 4,5 g i.v. 4x/Tag ODER Cefepim 2 g i.v. 3x/Tag ODER Meropenem 1-2 g i.v. 3x/Tag (bei ESBL-Verdacht). Bei zusätzlichem MRSA-Verdacht Vancomycin 1-1,5g i.v. 2x/Tag oder Linezolid 600mg i.v. 2x/Tag hinzufügen.",
        alternative: "Kombinationstherapie bei Verdacht auf extreme Resistenz: Betalaktam + Amikacin 15mg/kg i.v. 1x/Tag oder Ciprofloxacin 400mg i.v. 3x/Tag",
        duration: "7 - 14 Tage (abhängig vom Erreger und dem klinischen Ansprechen)"
      }
    },
    targeted: [
      { condition: "Pseudomonas aeruginosa (empfindlich)", treatment: "Piperacillin/Tazobactam 4,5g i.v. 4x/Tag oder Cefepim 2g i.v. 3x/Tag." },
      { condition: "Pseudomonas aeruginosa (MDR - multiresistent)", treatment: "Ceftolozan/Tazobactam 1,5g i.v. 3x/Tag oder Ceftazidim/Avibactam 2,5g i.v. 3x/Tag, bei Bedarf kombiniert mit Colistin oder Amikacin." },
      { condition: "ESBL-bildende Enterobacterales", treatment: "Ertapenem 1g i.v. 1x/Tag oder Meropenem 1g i.v. 3x/Tag." },
      { condition: "Carbapenem-resistente Klebsiella pneumoniae (KPC)", treatment: "Ceftazidim/Avibactam 2,5g i.v. 3x/Tag oder Meropenem/Vaborbactam." },
      { condition: "Staphylococcus aureus (MRSA)", treatment: "Linezolid 600 mg i.v. 2x/Tag oder Vancomycin i.v. (TDM-Zielkonzentration 15-20 µg/ml)." }
    ],
    guidelines: "IDSA/ATS HAP/VAP Guidelines, ESCMID/ERS-Leitlinien",
    diagnosticsNotes: "Röntgenaufnahme/CT des Thorax. Eine Probenentnahme der unteren Atemwege (Sputum, tracheales Aspirat oder bronchoalveoläre Lavage - BAL) zur Kultur ist vor Beginn der Antibiotikatherapie obligatorisch! Blutkulturen müssen abgenommen werden."
  },
  {
    id: "cystitis",
    name: "Akute unkomplizierte Zystitis (Blasenentzündung)",
    category: "urinary",
    pathogens: [
      { name: "Escherichia coli", frequency: "very-common", notes: "Verantwortlich für 75-90% der Fälle." },
      { name: "Staphylococcus saprophyticus", frequency: "common", notes: "Häufig bei jungen, sexuell aktiven Frauen." },
      { name: "Klebsiella pneumoniae", frequency: "common", notes: "Ein häufiger Erreger von Harnwegsinfektionen." },
      { name: "Proteus mirabilis", frequency: "common", notes: "Kann eine Alkalisierung des Urins verursachen, ureasepositiv." },
      { name: "Enterococcus faecalis", frequency: "rare", notes: "Häufiger bei komplizierten oder katheterassoziierten Fällen." }
    ],
    empirical: {
      mild: {
        firstLine: "Fosfomycin-Trometamol 3g p.o. Einmaldosis ODER Nitrofurantoin 100 mg p.o. 2x/Tag (retardiert) über 5 Tage",
        alternative: "Pivmecillinam 400 mg p.o. 3x/Tag (wo verfügbar) über 3-5 Tage ODER Sulfamethoxazol/Trimethoprim (Co-trimoxazol) 960 mg p.o. 2x/Tag über 3 Tage (nur wenn die lokale E.-coli-Resistenz < 20% beträgt)",
        duration: "1 Tag (Fosfomycin) oder 5 Tage (Nitrofurantoin) oder 3 Tage (Co-trimoxazol)"
      },
      severe: {
        // Zystitis ist normalerweise nicht schwer, bei kompliziertem Verlauf (z.B. schwanger, männlich, diabetisch) ist jedoch eine längere Behandlung nötig
        firstLine: "Amoxicillin/Clavulansäure 875/125 mg p.o. 2x/Tag über 5-7 Tage ODER Cefuroximaxetil 250-500 mg p.o. 2x/Tag über 5-7 Tage",
        alternative: "Ciprofloxacin 250 mg p.o. 2x/Tag ODER Levofloxacin 250-500 mg p.o. 1x/Tag über 3-5 Tage (nur als letzte Option, siehe Anmerkung!)",
        duration: "5 - 7 Tage"
      }
    },
    targeted: [
      { condition: "E. coli (ESBL-bildend)", treatment: "Fosfomycin 3g p.o. 1x (bei Zystitis aufgrund der Urinkonzentration wirksam) oder Nitrofurantoin 100mg p.o. 2x/Tag über 5 Tage." },
      { condition: "Enterococcus faecalis (empfindlich)", treatment: "Amoxicillin 500mg-1000mg p.o. 3x/Tag über 5 Tage." },
      { condition: "Proteus mirabilis", treatment: "Amoxicillin 500mg p.o. 3x/Tag oder Cefuroximaxetil 250mg p.o. 2x/Tag." }
    ],
    guidelines: "EAU (Europäische Gesellschaft für Urologie) Leitlinie zu Harnwegsinfektionen 2024",
    diagnosticsNotes: "Die Diagnose erfolgt klinisch (Dysurie, häufiger Harndrang, suprapubischer Schmerz, kein Fieber!). Ein Urin-Teststreifen (positiv auf Nitrit, positiv auf Leukozytenesterase) bestätigt die Diagnose. Bei jungen Frauen mit unkompliziertem Verlauf ist eine Urinkultur NICHT erforderlich. Bei Schwangeren, Männern und Rezidiven ist eine Urinkultur obligatorisch!"
  },
  {
    id: "pyelonephritis",
    name: "Akute unkomplizierte Pyelonephritis (Nierenbeckenentzündung)",
    category: "urinary",
    pathogens: [
      { name: "Escherichia coli", frequency: "very-common", notes: "Der häufigste Erreger." },
      { name: "Klebsiella pneumoniae", frequency: "common", notes: "Trägt häufig Resistenzen." },
      { name: "Proteus mirabilis", frequency: "common", notes: "Kann mit Nierensteinbildung einhergehen." },
      { name: "Pseudomonas aeruginosa", frequency: "rare", notes: "Vor allem nach vorherigem urologischem Eingriff oder Katheterisierung." },
      { name: "Enterococcus faecalis", frequency: "rare", notes: "Erfordert parenterales Aminopenicillin." }
    ],
    empirical: {
      mild: {
        // Ambulant behandelbare Fälle
        firstLine: "Ciprofloxacin 500-750 mg p.o. 2x/Tag über 7 Tage ODER Levofloxacin 750 mg p.o. 1x/Tag über 5 Tage",
        alternative: "Cefuroximaxetil 500 mg p.o. 2x/Tag über 10 Tage ODER Amoxicillin/Clavulansäure 875/125 mg p.o. 2x/Tag über 10-14 Tage (weniger wirksam als Chinolone)",
        duration: "5 - 7 Tage (Chinolone) oder 10 - 14 Tage (Betalaktame)"
      },
      severe: {
        // Systemische Fälle, die einen Krankenhausaufenthalt erfordern
        firstLine: "Ceftriaxon 1-2g i.v. 1x/Tag ODER Cefotaxim 2g i.v. 3x/Tag ODER Ciprofloxacin 400mg i.v. 2x/Tag ODER Gentamicin 5mg/kg i.v. 1x/Tag",
        alternative: "Bei schwerer komplizierter/katheterassoziierter Urosepsis oder ESBL-Risiko: Piperacillin/Tazobactam 4,5g i.v. 3-4x/Tag ODER Ertapenem 1g i.v. 1x/Tag ODER Meropenem 1g i.v. 3x/Tag",
        duration: "7 - 10 Tage (je nach klinischer Besserung Umstellung auf orale Therapie, z.B. Chinolon, möglich)"
      }
    },
    targeted: [
      { condition: "E. coli / Klebsiella (ESBL-bildend)", treatment: "Ertapenem 1g i.v. 1x/Tag oder Meropenem 1g i.v. 3x/Tag. In leichten Fällen orales Doxycyclin oder Co-trimoxazol, sofern empfindlich." },
      { condition: "Enterococcus faecalis", treatment: "Ampicillin 2g i.v. 4x/Tag (bei Urosepsis kombiniert mit Gentamicin) oder Amoxicillin 1g p.o. 3x/Tag (Step-down)." },
      { condition: "Pseudomonas aeruginosa", treatment: "Ceftazidim 2g i.v. 3x/Tag oder Cefepim 2g i.v. 3x/Tag oder Ciprofloxacin 500-750mg p.o. 2x/Tag / 400mg i.v. 2x/Tag." }
    ],
    guidelines: "EAU Guidelines on Urological Infections 2024",
    diagnosticsNotes: "Klinisches Bild: Flankenschmerz (positives Nierenlagerklopfzeichen), Fieber, Schüttelfrost, häufig Übelkeit/Erbrechen. Labor: Leukozytose, hohes CRP, Pyurie. Urinkultur und Blutkulturen sind OBLIGATORISCH! Eine Nierensonografie wird empfohlen, um eine Abflussbehinderung (Obstruktion/Hydronephrose) auszuschließen, die eine sofortige urologische Entlastung (Nephrostomie oder DJ-Katheter) erfordert!"
  },
  {
    id: "meningitis",
    name: "Akute eitrige bakterielle Meningitis (Hirnhautentzündung)",
    category: "cns",
    pathogens: [
      { name: "Streptococcus pneumoniae", frequency: "very-common", notes: "Der häufigste und schwerste Erreger der bakteriellen Meningitis bei Erwachsenen." },
      { name: "Neisseria meningitidis", frequency: "very-common", notes: "Meningokokken. Können von Petechien und Purpura begleitet werden. Übertragung durch Tröpfcheninfektion, Chemoprophylaxe (Ciprofloxacin oder Rifampicin) für Kontaktpersonen obligatorisch!" },
      { name: "Listeria monocytogenes", frequency: "common", notes: "Besonders bei Personen über 50 Jahren, Schwangeren, Alkoholikern oder Immunsupprimierten. Cephalosporinresistent!" },
      { name: "Haemophilus influenzae", frequency: "rare", notes: "Seit Einführung der Impfung (Hib) selten." }
    ],
    empirical: {
      mild: {
        // Es gibt keine 'leichte' eitrige Meningitis, sie ist immer ein lebensbedrohlicher Notfall!
        firstLine: "Sofortige i.v.-Behandlung erforderlich (siehe schwere Kategorie). Verzögerung ist nicht erlaubt!",
        alternative: "N/A",
        duration: "N/A"
      },
      severe: {
        // Empirische Behandlung bei Erwachsenen (Notfall-/Bereitschaftsdienst)
        firstLine: "Ceftriaxon 2g i.v. 2x/Tag (hohe Dosis!) + Vancomycin 15-20 mg/kg i.v. alle 8-12 Stunden + Dexamethason 10 mg i.v. (gleichzeitig mit der ersten Antibiotikagabe oder 15-20 Minuten davor!). WENN der Patient > 50 Jahre alt oder immunsupprimiert ist, Ampicillin 2g i.v. 6x/Tag zur Abdeckung von Listerien hinzufügen!",
        alternative: "Bei Betalaktam-Allergie: Meropenem 2g i.v. 3x/Tag + Vancomycin 15-20 mg/kg i.v. + Moxifloxacin oder Co-trimoxazol (gegen Listerien).",
        duration: "N. meningitidis: 7 Tage, H. influenzae: 7 Tage, S. pneumoniae: 10-14 Tage, L. monocytogenes: 21 Tage"
      }
    },
    targeted: [
      { condition: "Neisseria meningitidis (Penicillin-empfindlich)", treatment: "Penicillin G 4 Millionen IE i.v. 6x/Tag oder Ceftriaxon 2g i.v. 2x/Tag." },
      { condition: "Streptococcus pneumoniae (Penicillin-empfindlich)", treatment: "Penicillin G 4 Millionen IE i.v. 6x/Tag oder Ceftriaxon 2g i.v. 2x/Tag." },
      { condition: "Streptococcus pneumoniae (PRSP)", treatment: "Vancomycin i.v. + Ceftriaxon 2g i.v. 2x/Tag ODER Meropenem 2g i.v. 3x/Tag." },
      { condition: "Listeria monocytogenes", treatment: "Ampicillin 2g i.v. 6x/Tag + Gentamicin 1-1,5 mg/kg i.v. 3x/Tag zur Synergie! (Cephalosporine sind wirkungslos!)." }
    ],
    guidelines: "ESCMID (Europäische Gesellschaft für Klinische Mikrobiologie und Infektionskrankheiten) Meningitis-Leitlinie, IDSA Meningitis Guidelines",
    diagnosticsNotes: "Klinische Trias: Fieber, Nackensteifigkeit (Meningismus), Bewusstseinsstörung. Eine dringliche Lumbalpunktion (LP) zur Liquoruntersuchung (Zellzahl, Eiweiß, Zucker, Gram-Färbung, Kultur, PCR, Latexagglutination) ist erforderlich. WENN Anzeichen eines erhöhten Hirndrucks vorliegen (z.B. Stauungspapille, fokal-neurologisches Defizit, Krampfanfall, tiefes Koma), sollte vor der LP eine kraniale CT durchgeführt werden. Die Antibiotikagabe darf wegen der CT nicht verzögert werden: zuerst Blutkulturen abnehmen, das empirische Antibiotikum plus Dexamethason verabreichen, dann zur CT schicken und anschließend die LP durchführen!"
  },
  {
    id: "sepsis_unknown",
    name: "Sepsis und septischer Schock (unbekannter Fokus)",
    category: "sepsis",
    pathogens: [
      { name: "Escherichia coli (und andere gramnegative Erreger)", frequency: "very-common", notes: "Die häufigste Quelle einer Urosepsis oder abdominellen Sepsis." },
      { name: "Staphylococcus aureus", frequency: "very-common", notes: "Sepsis ausgehend von Weichteil-, Katheter- oder Knocheninfektionen." },
      { name: "Streptococcus pneumoniae", frequency: "common", notes: "Sepsis bei Atemwegsinfektionen oder bei splenektomierten Patienten." },
      { name: "Pseudomonas aeruginosa", frequency: "common", notes: "Vor allem bei nosokomialer Sepsis." },
      { name: "Enterococcus faecalis / faecium", frequency: "rare", notes: "Bei katheterassoziierten, urologischen oder Endokarditis-Patienten." }
    ],
    empirical: {
      mild: {
        firstLine: "Sepsis ist immer ein Notfall! Eine 'leichte' Sepsis gibt es nicht, innerhalb der 'goldenen Stunde' (1 Stunde) ist eine sofortige i.v.-Breitspektrum-Antibiotikatherapie erforderlich!",
        alternative: "N/A",
        duration: "N/A"
      },
      severe: {
        // Empirische Notfallbehandlung im Krankenhaus
        firstLine: "Piperacillin/Tazobactam 4,5g i.v. 4x/Tag (oder Cefepim 2g i.v. 3x/Tag). Bei septischem Schock oder Verdacht auf resistente gramnegative Erreger Gentamicin 5-7 mg/kg i.v. 1x/Tag hinzufügen. Bei MRSA-Verdacht (z.B. zentraler Katheter, Dialyse, Weichteilfokus, bekannte MRSA-Besiedlung) Vancomycin 15-20 mg/kg i.v. hinzufügen.",
        alternative: "Bei schwerer Betalaktam-Allergie oder Verdacht auf ESBL/nosokomiale Sepsis: Meropenem 1-2g i.v. 3x/Tag + Vancomycin i.v.",
        duration: "7 - 10 Tage (abhängig von der Fokussanierung und der klinischen Besserung)"
      }
    },
    targeted: [
      { condition: "MSSA (Methicillin-empfindlicher S. aureus) Sepsis", treatment: "Cefazolin 2g i.v. 3x/Tag oder Cloxacillin/Oxacillin 2g i.v. 4-6x/Tag. (Betalaktame sind bei MSSA-Sepsis deutlich wirksamer als Vancomycin!)." },
      { condition: "MRSA-Sepsis", treatment: "Vancomycin i.v. (TDM-Zielwert 15-20 µg/ml) oder Daptomycin 8-10 mg/kg i.v. 1x/Tag." },
      { condition: "ESBL-bildender gramnegativer Erreger", treatment: "Meropenem 1g i.v. 3x/Tag oder Ertapenem 1g i.v. 1x/Tag (wenn kein septischer Schock vorliegt)." },
      { condition: "VRE (Vancomycin-resistenter Enterococcus)", treatment: "Linezolid 600 mg i.v. 2x/Tag oder Daptomycin 10-12 mg/kg i.v. 1x/Tag." }
    ],
    guidelines: "Surviving Sepsis Campaign (SSC) Guidelines 2021/2023, ESCMID-Leitlinien",
    diagnosticsNotes: "Sofortige Erhebung des qSOFA- oder SOFA-Scores. Vor Beginn der Behandlung müssen mindestens 2 Paar Blutkulturen (1 Paar = 1 aerobe + 1 anaerobe Flasche) aus verschiedenen peripheren Venen abgenommen werden! Fokussuche: Röntgen-Thorax, Urinlabor, Abdomensonografie, chirurgisches Konsil. Als Teil des Sepsis-Bundles: Laktatmessung, Flüssigkeitssubstitution (30 ml/kg Kristalloid bei septischem Schock), bei Bedarf Noradrenalin als Vasopressor."
  },
  {
    id: "ie_native",
    name: "Infektiöse Endokarditis (Nativklappe)",
    category: "sepsis",
    pathogens: [
      { name: "Orale Streptokokken (z. B. S. mitis, S. mutans)", frequency: "very-common", notes: "Hauptsächlich nach zahnärztlichen Eingriffen; subakuter Verlauf." },
      { name: "Streptococcus gallolyticus (S. bovis)", frequency: "common", notes: "Stark mit kolorektalen Neoplasien assoziiert (Koloskopie ist obligat!)." },
      { name: "Staphylococcus aureus", frequency: "common", notes: "Akuter, hochdestruktiver Verlauf; Beteiligung des rechten Herzens bei intravenösem Drogenkonsum häufig." },
      { name: "Enterococcus faecalis", frequency: "common", notes: "Häufig nach urologischen oder gastrointestinalen Eingriffen/Infektionen bei älteren Patienten." },
      { name: "HACEK-Gruppe", frequency: "rare", notes: "Langsam wachsende, anspruchsvolle gramnegative Bakterien (Haemophilus, Aggregatibacter, Cardiobacterium, Eikenella, Kingella)." }
    ],
    empirical: {
      mild: {
        firstLine: "Ampicillin 12g/Tag i.v. in 4-6 Einzeldosen + Ceftriaxon 2g i.v. 1x/Tag (diese Kombination ist hervorragend gegen Enterokokken und Streptokokken und vermeidet die Nephrotoxizität von Aminoglykosiden)",
        alternative: "Ceftriaxon 2g i.v. 1x/Tag + Gentamicin 3 mg/kg i.v. 1x/Tag",
        duration: "4 - 6 Wochen (bei Nativklappen sind unkomplizierte Verläufe meist nach 4 Wochen therapiert)"
      },
      severe: {
        firstLine: "Ampicillin 12g/Tag i.v. in 4-6 Einzeldosen + Cloxacillin (oder Oxacillin) 12g/Tag i.v. in 4-6 Einzeldosen + Gentamicin 3 mg/kg i.v. 1x/Tag",
        alternative: "Vancomycin 30 mg/kg/Tag i.v. in 2 Einzeldosen (TDM!) + Gentamicin 3 mg/kg i.v. 1x/Tag",
        duration: "4 - 6 Wochen (6 Wochen bei komplizierten Verläufen oder S. aureus)"
      }
    },
    targeted: [
      { condition: "Penicillin-empfindliche Streptokokken (MHK <= 0,125 ug/ml)", treatment: "Penicillin G 12-18 Mio. IE/Tag i.v. in 4-6 Einzeldosen für 4 Wochen ODER Ceftriaxon 2g i.v. 1x/Tag für 4 Wochen. Bei unkomplizierter Nativklappen-Endokarditis ist ein 2-wöchiges Kurzschema in Kombination mit Gentamicin möglich." },
      { condition: "Enterococcus faecalis (empfindlich)", treatment: "Ampicillin 2g i.v. 6x/Tag + Ceftriaxon 2g i.v. 2x/Tag (nierenschonend, bevorzugt) ODER Ampicillin 2g i.v. 6x/Tag + Gentamicin 3 mg/kg i.v. 1x/Tag für 6 Wochen." },
      { condition: "Staphylococcus aureus (MSSA)", treatment: "Cloxacillin (oder Oxacillin) 2g i.v. 4-6x/Tag ODER Cefazolin 2g i.v. 3x/Tag für 4-6 Wochen." },
      { condition: "Staphylococcus aureus (MRSA / Betalaktam-Allergie)", treatment: "Vancomycin 30 mg/kg/Tag i.v. in 2 Einzeldosen (TDM!) ODER Daptomycin 10 mg/kg i.v. 1x/Tag für 4-6 Wochen." }
    ],
    guidelines: "2023 ESC-Leitlinien für das Management von Endokarditis",
    diagnosticsNotes: "Diagnose: Basierend auf den 2023 ESC- / modifizierten Duke-Kriterien. Vor Beginn der Antibiotikagabe müssen mindestens 3 Paar Blutkulturen (aus verschiedenen Venen, im Abstand von 30 Min., unabhängig von Fieberschüben) abgenommen werden! Transthorakale (TTE) und transösophageale (TEE) Echokardiographie sind dringlich. Eine TEE ist auch bei Nativklappen obligatorisch, wenn das TTE negativ ist, aber der Verdacht fortbesteht, sowie bei allen komplizierten Fällen."
  },
  {
    id: "ie_pve_early",
    name: "Frühe Kunstklappen-Endokarditis (<1 Jahr nach Operation)",
    category: "sepsis",
    pathogens: [
      { name: "Koagulase-negative Staphylokokken (hauptsächlich S. epidermidis)", frequency: "very-common", notes: "Meist Methicillin-resistent und Biofilmbildner." },
      { name: "Staphylococcus aureus", frequency: "very-common", notes: "Hochaggressiv, hohe Mortalität, kann zu früher Klappendehiszenz führen." },
      { name: "Gramnegative Stäbchen (nosokomial)", frequency: "common", notes: "Pseudomonas aeruginosa und Enterobacterales, häufig multiresistent." },
      { name: "Candida-Spezies", frequency: "rare", notes: "Pilzendokarditis, erfordert fast immer eine chirurgische Intervention." }
    ],
    empirical: {
      mild: {
        firstLine: "Eine sofortige i.v.-Therapie ist zwingend erforderlich (siehe Kategorie schwer/akut). Verzögerungen sind unzulässig!",
        alternative: "N/A",
        duration: "N/A"
      },
      severe: {
        firstLine: "Vancomycin 30 mg/kg/Tag i.v. in 2 Einzeldosen (TDM!) + Gentamicin 3 mg/kg i.v. 1x/Tag + Rifampicin 900-1200 mg/Tag i.v. oder p.o. in 2-3 Einzeldosen (Rifampicin erst 3-5 Tage nach Vancomycin und Gentamicin hinzugeben, sobald die Bakteriämie abgeklungen ist, um Resistenzbildung zu vermeiden)",
        alternative: "Daptomycin 10 mg/kg i.v. 1x/Tag + Gentamicin + Rifampicin (bei Betalaktam-Allergie oder Vancomycin-Unverträglichkeit)",
        duration: "mindestens 6 Wochen"
      }
    },
    targeted: [
      { condition: "Staphylokokken (MRSA oder Methicillin-resistente CoNS - Kunstklappe)", treatment: "Vancomycin 30 mg/kg/Tag i.v. (TDM!) + Rifampicin 300-450 mg p.o./i.v. 2-3x/Tag + Gentamicin 3 mg/kg i.v. 1x/Tag für mindestens 6 Wochen (Rifampicin darf erst nach negativen Blutkulturen begonnen werden!)." },
      { condition: "Staphylokokken (MSSA oder Methicillin-empfindliche CoNS - Kunstklappe)", treatment: "Cloxacillin (oder Oxacillin) 2g i.v. 4-6x/Tag + Rifampicin 300-450 mg p.o./i.v. 2-3x/Tag + Gentamicin 3 mg/kg i.v. 1x/Tag für mindestens 6 Wochen." },
      { condition: "Gramnegative Stäbchen (z. B. Pseudomonas)", treatment: "Kombinationstherapie: z. B. Cefepim 2g i.v. 3x/Tag ODER Meropenem 2g i.v. 3x/Tag + Tobramycin/Amikacin, angepasst an das Antibiogramm." }
    ],
    guidelines: "2023 ESC-Leitlinien für das Management von Endokarditis",
    diagnosticsNotes: "Klinisches Bild: Postoperatives Fieber, neues Herzgeräusch, Instabilität, septische Embolien. Echokardiographie: Transösophageale Echokardiographie (TEE) ist essenziell und obligat! Aufgrund von Abschattungen durch metallische/plastische Kunstklappen ist die TTE nicht empfindlich genug. Ergänzende Diagnostik: 18F-FDG-PET/CT oder Herz-CT sind äußerst nützlich, um periannuläre Entzündungen, Abszesse oder paravalvuläre Leckagen nachzuweisen."
  },
  {
    id: "ie_pve_late",
    name: "Späte Kunstklappen-Endokarditis (>=1 Jahr nach Operation)",
    category: "sepsis",
    pathogens: [
      { name: "Orale Streptokokken", frequency: "very-common", notes: "Ähnliche Erregerverteilung wie bei Nativklappen, aber die Prothese erhöht das Risiko für schwerwiegende Komplikationen erheblich." },
      { name: "Enterococcus faecalis", frequency: "common", notes: "Septische Streuung aus urologischen oder gastrointestinalen Quellen." },
      { name: "Staphylococcus aureus", frequency: "common", notes: "Schwerer, destruktiver Verlauf mit hohem Risiko für Abszessbildung." },
      { name: "Koagulase-negative Staphylokokken", frequency: "common", notes: "Langsamerer Verlauf, aber häufig Methicillin-resistent." }
    ],
    empirical: {
      mild: {
        firstLine: "Ampicillin 12g/Tag i.v. in 4-6 Einzeldosen + Ceftriaxon 2g i.v. 1x/Tag (hervorragend gegen Enterokokken und Streptokokken)",
        alternative: "Ceftriaxon 2g i.v. 1x/Tag + Gentamicin 3 mg/kg i.v. 1x/Tag (Synergismus)",
        duration: "mindestens 6 Wochen"
      },
      severe: {
        firstLine: "Ampicillin 12g/Tag i.v. in 4-6 Einzeldosen + Cloxacillin (oder Oxacillin) 12g/Tag i.v. in 4-6 Einzeldosen + Gentamicin 3 mg/kg i.v. 1x/Tag",
        alternative: "Vancomycin 30 mg/kg/Tag i.v. in 2 Einzeldosen (TDM!) + Gentamicin 3 mg/kg i.v. 1x/Tag",
        duration: "mindestens 6 Wochen"
      }
    },
    targeted: [
      { condition: "Streptokokken (MHK <= 0,125 ug/ml)", treatment: "Penicillin G 12-18 Mio. IE/Tag i.v. in 4-6 Einzeldosen ODER Ceftriaxon 2g i.v. 1x/Tag für mindestens 6 Wochen. (Kurzschema über 2 Wochen bei Kunstklappen NICHT anwendbar!)." },
      { condition: "Enterococcus faecalis", treatment: "Ampicillin 2g i.v. 6x/Tag + Ceftriaxon 2g i.v. 2x/Tag ODER Ampicillin 2g i.v. 6x/Tag + Gentamicin 3 mg/kg i.v. 1x/Tag für 6 Wochen." },
      { condition: "Staphylokokken (MSSA / Methicillin-empfindliche CoNS)", treatment: "Cloxacillin (oder Oxacillin) 2g i.v. 4-6x/Tag + Rifampicin 300-450 mg p.o./i.v. 2-3x/Tag + Gentamicin 3 mg/kg i.v. 1x/Tag für mindestens 6 Wochen." },
      { condition: "Staphylokokken (MRSA / Methicillin-resistente CoNS)", treatment: "Vancomycin 30 mg/kg/Tag i.v. in 2 Einzeldosen (TDM!) + Rifampicin 300-450 mg p.o./i.v. 2-3x/Tag + Gentamicin 3 mg/kg i.v. 1x/Tag für mindestens 6 Wochen." }
    ],
    guidelines: "2023 ESC-Leitlinien für das Management von Endokarditis",
    diagnosticsNotes: "Die Diagnose vereint Nativklappen- und frühe Kunstklappen-Ansätze. Mindestens 3 Paar Blutkulturen sind obligat! Eine TEE is obligat. Ein Herz-CT wird dringend empfohlen, um periannuläre Komplikationen (Abszess, Pseudoaneurysma, Fistel) zu erkennen. Ein 18F-FDG-PET/CT ist indiziert, wenn die Diagnose unklar bleibt."
  },
  {
    id: "primary_peritonitis",
    name: "Primäre Peritonitis (Spontane bakterielle Peritonitis - SBP)",
    category: "abdominal",
    pathogens: [
      { name: "Escherichia coli", frequency: "very-common", notes: "Der häufigste Erreger der SBP bei Patienten mit Leberzirrhose." },
      { name: "Klebsiella pneumoniae", frequency: "common", notes: "Häufiger gramnegativer Erreger." },
      { name: "Streptococcus pneumoniae (und andere Streptokokken)", frequency: "common", notes: "Grampositive monomikrobielle Infektion." },
      { name: "Enterococcus-Spezies", frequency: "rare", notes: "Meist nosokomial oder nach vorheriger Antibiotikatherapie." }
    ],
    empirical: {
      mild: {
        firstLine: "Ceftriaxon 2g i.v. 1x/Tag ODER Cefotaxim 2g i.v. 3x/Tag (hervorragende und sichere Abdeckung der häufigsten Erreger)",
        alternative: "Ciprofloxacin 400 mg i.v. 2x/Tag ODER Levofloxacin 500-750 mg i.v./p.o. 1x/Tag (bei Betalaktam-Allergie)",
        duration: "5 - 7 Tage (abhängig vom klinischen Ansprechen und dem Rückgang der Aszites-Zellzahl)"
      },
      severe: {
        firstLine: "Piperacillin/Tazobactam 4,5g i.v. 4x/Tag ODER Meropenem 1g i.v. 3x/Tag (bei nosokomialer SBP, septischem Schock oder bekannten resistenten Vorerrägern)",
        alternative: "Ceftazidim/Avibactam 2,5g i.v. 3x/Tag (bei nachgewiesener Carbapenem-resistenter gramnegativer SBP)",
        duration: "7 - 10 Tage"
      }
    },
    targeted: [
      { condition: "Fluorchinolon-empfindliche Enterobacterales", treatment: "Ciprofloxacin 500 mg p.o. 2x/Tag oder Levofloxacin 500 mg p.o. 1x/Tag (orale Sequenztherapie/Step-down)." },
      { condition: "ESBL-bildende Klebsiella oder E. coli", treatment: "Ertapenem 1g i.v. 1x/Tag oder Meropenem 1g i.v. 3x/Tag." },
      { condition: "MDR gramnegative Bakterien", treatment: "Ceftazidim/Avibactam oder Meropenem gezielt nach Antibiogramm." }
    ],
    guidelines: "EASL- und AASLD SBP-Leitlinien",
    diagnosticsNotes: "Diagnose: Eine Aszitespunktion (Parazentese) ist zwingend erforderlich! Eine Aszites-PMN-Zellzahl (polymorphkernige Granulozyten) >= 250/uL ist diagnostisch, unabhängig vom Kulturergebnis. Das Aszitessekret sollte direkt am Krankenbett in Blutkulturflaschen beimpft werden! Eine Infusion von Humanalbumin (1,5g/kg am 1. Tag, 1g/kg am 3. Tag) ist angezeigt, wenn das Serumkreatinin >1 mg/dL, der Harnstoff-Stickstoff >30 mg/dL oder das Bilirubin >4 mg/dL beträgt, um ein hepatorenales Syndrom zu verhindern."
  },
  {
    id: "secondary_peritonitis",
    name: "Sekundäre Peritonitis (Intraabdominelle Perforation/Infektion)",
    category: "abdominal",
    pathogens: [
      { name: "Polymikrobielle Flora (Aerobier + Anaerobier)", frequency: "very-common", notes: "Immer eine gemischte aerobe und anaerobe Flora aus dem Gastrointestinaltrakt bei Perforation." },
      { name: "Escherichia coli & andere Enterobacterales", frequency: "very-common", notes: "Die dominierenden gramnegativen aeroben Erreger." },
      { name: "Bacteroides fragilis (und andere Anaerobier)", frequency: "very-common", notes: "Wichtiger obligat anaerober Erreger, Betalaktamase-Bildner." },
      { name: "Enterococcus faecalis", frequency: "common", notes: "Vor allem bei distalen Darmperforationen oder nach Vorbehandlungen." },
      { name: "Pseudomonas aeruginosa", frequency: "rare", notes: "Hauptsächlich bei nosokomialer sekundärer Peritonitis." }
    ],
    empirical: {
      mild: {
        firstLine: "Amoxicillin/Clavulansäure 1,2g i.v. 3x/Tag ODER Ceftriaxon 2g i.v. 1x/Tag + Metronidazol 500 mg i.v. 3x/Tag (bei ambulant erworbener leichter bis mittelschwerer Peritonitis)",
        alternative: "Ciprofloxacin 400 mg i.v. 2x/Tag + Metronidazol 500 mg i.v. 3x/Tag ODER Moxifloxacin 400 mg i.v. 1x/Tag",
        duration: "4 - 7 Tage (nach erfolgreicher chirurgischer oder interventioneller Fokussanierung)"
      },
      severe: {
        firstLine: "Piperacillin/Tazobactam 4,5g i.v. 4x/Tag ODER Meropenem 1g i.v. 3x/Tag (oder Imipenem 500 mg i.v. 4x/Tag) - bei schwerer, septischer oder nosokomialer Peritonitis",
        alternative: "Ceftazidim 2g i.v. 3x/Tag + Metronidazol 500 mg i.v. 3x/Tag ODER Cefepim 2g i.v. 3x/Tag + Metronidazol 500 mg i.v. 3x/Tag",
        duration: "7 - 10 Tage (abhängig von Fokussanierung und klinischem Verlauf)"
      }
    },
    targeted: [
      { condition: "ESBL-bildende Enterobacterales", treatment: "Ertapenem 1g i.v. 1x/Tag oder Meropenem 1g i.v. 3x/Tag." },
      { condition: "Pseudomonas aeruginosa", treatment: "Piperacillin/Tazobactam 4,5g i.v. 4x/Tag ODER Ceftazidim 2g i.v. 3x/Tag + Metronidazol, oder Cefepim." },
      { condition: "Enterococcus faecalis (falls klinisch relevant)", treatment: "Zugabe von Ampicillin 2g i.v. 4-6x/Tag (falls das gewählte empirische Schema keine Abdeckung bietet, z. B. Cephalosporine)." }
    ],
    guidelines: "SIS und IDSA-Leitlinien für intraabdominelle Infektionen",
    diagnosticsNotes: "Die chirurgische oder interventionelle Fokussanierung (Operation, Drainage, Naht, Resektion) is die wichtigste Maßnahme bei sekundärer Peritonitis! Ohne sie ist eine reine Antibiotikatherapie wirkungslos. Diagnostik: Ein kontrastmittelgestütztes Abdomen-CT ist das Bildgebungsverfahren der Wahl. Ein Röntgenbild im Stehen kann freie Luft unter dem Zwerchfell bei Perforation zeigen. Flüssigkeitsprobenahme für aerobe/anaerobe Kulturen ist obligatorisch."
  },
  {
    id: "tertiary_peritonitis",
    name: "Tertiäre Peritonitis (Persistierende/rezidivierende intraabdominelle Infektion)",
    category: "abdominal",
    pathogens: [
      { name: "Multiresistente gramnegative Stäbchen", frequency: "very-common", notes: "ESBL, Carbapenem-resistente Klebsiellen, Pseudomonas aeruginosa, Acinetobacter." },
      { name: "Enterococcus faecium und faecalis (einschließlich VRE)", frequency: "very-common", notes: "Häufig selektiert durch vorherige Cephalosporin- oder Carbapenem-Therapien." },
      { name: "Candida-Spezies (C. albicans und non-albicans)", frequency: "common", notes: "Intraabdominelle Candidose; längere Antibiotikatherapie ist ein Hauptrisikofaktor." },
      { name: "Koagulase-negative Staphylokokken", frequency: "common", notes: "Oft Biofilmbildner auf Bauchkathetern oder Dränagen." }
    ],
    empirical: {
      mild: {
        firstLine: "Piperacillin/Tazobactam 4,5g i.v. 4x/Tag + Fluconazol 400 mg i.v. 1x/Tag (falls der Patient stabil ist und ein geringes Risiko für hochresistente Erreger besteht)",
        alternative: "N/A (Tertiäre Peritonitis ist selten mild; erfordert fast immer eine komplexe Intensivtherapie)",
        duration: "Individualisiert"
      },
      severe: {
        firstLine: "Meropenem 1-2g i.v. 3x/Tag (verlängerte Infusion) + Vancomycin 15-20 mg/kg i.v. alle 8-12 Std. (oder Linezolid 600 mg i.v. alle 12 Std. bei Verdacht auf VRE) + Echinocandin (z. B. Caspofungin 70 mg Ladedosis, dann 50 mg/Tag i.v. oder Anidulafungin)",
        alternative: "Ceftazidim/Avibactam 2,5g i.v. alle 8 Std. + Linezolid + Caspofungin (falls Carbapenem-resistente Klebsiellen oder Pseudomonas nachgewiesen)",
        duration: "Individualisiert (hängt von klinischem Verlauf, Fieberfreiheit, sinkendem CRP/PCT und vollständiger Fokussanierung ab; oft Wochen)"
      }
    },
    targeted: [
      { condition: "VRE (Vancomycin-resistent Enterokokken)", treatment: "Linezolid 600 mg i.v. 2x/Tag oder Daptomycin 10-12 mg/kg i.v. 1x/Tag." },
      { condition: "Candida albicans / tropicalis (empfindlich)", treatment: "Fluconazol 400-800 mg i.v./p.o. 1x/Tag (Deeskalation von Echinocandinen nach klinischer Stabilisierung)." },
      { condition: "Carbapenem-resistente Klebsiellen (KPC, OXA-48)", treatment: "Ceftazidim/Avibactam 2,5g i.v. 3x/Tag allein oder in Kombination." }
    ],
    guidelines: "WSES und SIS-Leitlinien",
    diagnosticsNotes: "Klinisches Bild: Trotz scheinbar erfolgreicher Behandlung der sekundären Peritonitis bessert sich der Zustand des Patienten nicht, er bleibt fiebrig, hat anhaltend erhöhte Entzündungswerte (CRP, PCT, Leukozyten) oder entwickelt ein Organversagen. Diagnostik: Dringendes Abdomen-CT/Sonografie wiederholen. Eine Relaparotomie oder CT-gestützte Drainage ist erforderlich. Die Behandlung ist äußerst schwierig und erfordert einen ansatzübergreifenden (Chirurgie, Infektiologie, Intensivmedizin) Ansatz. Hohe Sterblichkeitsrate!"
  },
  {
    id: "acute_cholecystitis",
    name: "Akute Cholezystitis (Gallenblasenentzündung - Tokio TG18)",
    category: "abdominal",
    pathogens: [
      { name: "Escherichia coli", frequency: "very-common", notes: "Der häufigste gallengängige Erreger." },
      { name: "Klebsiella-Spezies", frequency: "common", notes: "Häufiger gramnegativer Erreger in den Gallenwegen." },
      { name: "Enterococcus-Spezies", frequency: "common", notes: "Häufiger bei älteren Menschen, schweren Verläufen (Grad II/III) oder nosokomialen Fällen." },
      { name: "Anaerobier (z. B. Clostridium, Bacteroides)", frequency: "rare", notes: "Assoziiert mit gasbildender, gangränöser Cholezystitis." }
    ],
    empirical: {
      mild: {
        firstLine: "Ampicillin/Sulbactam 1,5-3g i.v. 4x/Tag ODER Ceftriaxon 2g i.v. 1x/Tag ODER Cefazolin 1-2g i.v. 3x/Tag (für Grad I)",
        alternative: "Ciprofloxacin 400 mg i.v. 2x/Tag + Metronidazol 500 mg i.v. 3x/Tag ODER Levofloxacin 500 mg i.v. 1x/Tag + Metronidazol 500 mg i.v. 3x/Tag",
        duration: "4 - 7 Tage (falls eine unkomplizierte Cholezystektomie durchgeführt wird, können Antibiotika postoperativ innerhalb von 24 Stunden abgesetzt werden!)"
      },
      severe: {
        firstLine: "Piperacillin/Tazobactam 4,5g i.v. 4x/Tag ODER Meropenem 1g i.v. 3x/Tag (falls ein ESBL-Risiko besteht oder der Patient instabil/septisch ist)",
        alternative: "Cefepim 2g i.v. 3x/Tag + Metronidazol 500 mg i.v. 3x/Tag ODER Aztreonam (Betalaktam-Allergie) + Metronidazol.",
        duration: "4 - 7 Tage (nach erfolgreicher Fokussanierung: Operation oder Gallenblasendrainage)"
      }
    },
    targeted: [
      { condition: "ESBL-bildende Enterobacterales", treatment: "Ertapenem 1g i.v. 1x/Tag oder Meropenem 1g i.v. 3x/Tag." },
      { condition: "Pseudomonas aeruginosa", treatment: "Piperacillin/Tazobactam 4,5g i.v. 4x/Tag oder Ceftazidim 2g i.v. 3x/Tag oder Cefepim 2g i.v. 3x/Tag." },
      { condition: "Enterococcus faecalis (Grad III)", treatment: "Ampicillin 2g i.v. 4-6x/Tag oder Piperacillin/Tazobactam." }
    ],
    guidelines: "Tokio-Leitlinien 2018 (TG18) für akute Cholezystitis",
    diagnosticsNotes: "Diagnose: Murphy-Zeichen, Schmerzen im rechten Oberbauch, Fieber, Leukozytose/erhöhtes CRP und typische sonografische Befunde (verdickte Wand >4mm, pericholezystische Flüssigkeit, Steine, sonografisches Murphy-Zeichen). Schweregradeinteilung (Tokio): Grad I (leicht, lokal), Grad II (mäßig: tastbare Masse, Leukozyten >18G/L, Symptomdauer >72 Std., lokale Komplikationen wie Gangrän/Abszess), Grad III (schwer, Organversagen: kardiovaskulär, neurologisch, respiratorisch, renal, hepatisch, hämatologisch). Grad III erfordert eine dringende Gallenblasendrainage (PTGBD) oder eine dringende Cholezystektomie!"
  },
  {
    id: "acute_cholangitis",
    name: "Akute Cholangitis (Gallengangsentzündung - Tokio TG18)",
    category: "abdominal",
    pathogens: [
      { name: "Escherichia coli", frequency: "very-common", notes: "Der häufigste Erreger." },
      { name: "Klebsiella-Spezies", frequency: "very-common", notes: "Häufig assoziiert mit hochgradiger biliärer Obstruktion." },
      { name: "Enterococcus faecalis", frequency: "common", notes: "Besonders häufig bei Patienten mit Gallengangsstents oder Obstruktion." },
      { name: "Pseudomonas aeruginosa", frequency: "common", notes: "Häufiger nach vorheriger Gallengangsmanipulation oder Metallstents." },
      { name: "Bacteroides fragilis & andere Anaerobier", frequency: "common", notes: "Oft Teil polymikrobieller Infektionen." }
    ],
    empirical: {
      mild: {
        firstLine: "Ceftriaxon 2g i.v. 1x/Tag ODER Ampicillin/Sulbactam 1,5-3g i.v. 4x/Tag ODER Cefotaxim 2g i.v. 3x/Tag (immer die Indikation zur Gallenwegsdränage prüfen!)",
        alternative: "Ciprofloxacin 400 mg i.v. 2x/Tag + Metronidazol 500 mg i.v. 3x/Tag ODER Levofloxacin 500 mg i.v. 1x/Tag + Metronidazol 500 mg i.v. 3x/Tag",
        duration: "4 - 7 Tage (nach erfolgreicher biliärer Dekompression/Drainage)"
      },
      severe: {
        firstLine: "Piperacillin/Tazobactam 4,5g i.v. 4x/Tag ODER Meropenem 1g i.v. 3x/Tag (gewählt für Grad III oder septischen Schock; hervorragende biliäre Penetration)",
        alternative: "Cefepim 2g i.v. 3x/Tag + Metronidazol 500 mg i.v. 3x/Tag ODER Aztreonam (Betalaktam-Allergie) + Metronidazol + Vancomycin.",
        duration: "4 - 7 Tage (falls keine Bakteriämie; mindestens 7-14 Tage bei positiven Blutkulturen, insbesondere bei grampositiven Erregern wie Enterokokken oder S. aureus)"
      }
    },
    targeted: [
      { condition: "Enterococcus faecalis", treatment: "Ampicillin 2g i.v. 4-6x/Tag oder Piperacillin/Tazobactam. (Cephalosporine sind wirkungslos!)." },
      { condition: "ESBL-bildende Enterobacterales", treatment: "Ertapenem 1g i.v. 1x/Tag oder Meropenem 1g i.v. 3x/Tag." },
      { condition: "Pseudomonas aeruginosa (empfindlich)", treatment: "Ceftazidim 2g i.v. 3x/Tag oder Piperacillin/Tazobactam." }
    ],
    guidelines: "Tokio-Leitlinien 2018 (TG18) für akute Cholangitis",
    diagnosticsNotes: "Klinisches Bild: Charcot-Trias (Fieber/Schüttelfrost, Ikterus, Schmerzen im rechten Oberbauch) oder Reynolds-Pentade (Charcot-Trias + Hypotonie und Verwirrtheit). Diagnostik (Tokio): Systemische Entzündung, Cholestase (Bilirubin >=2 mg/dL, erhöhtes AP, GGT) und Bildgebung (Sonografie, CT, MRCP) mit Nachweis einer Gallengangsdilatation oder -obstruktion. SCHLÜSSEL DER THERAPIE: Eine dringende oder frühzeitige biliäre Dekompression/Drainage (ERCP + Papillotomie/Stenting oder PTBD) is lebensrettend! Ohne Drainage liegt die Sterblichkeit nahe 100%! Blutkulturen abnehmen."
  },
  {
    id: "erysipelas",
    name: "Erysipel (Wundrose)",
    category: "sst_bone",
    pathogens: [
      { name: "Streptococcus pyogenes (Gruppe-A-Streptokokken)", frequency: "very-common", notes: "Das beta-hämolysierende Streptokokkus-Bakterium, das für die weitaus meisten Fälle verantwortlich ist." },
      { name: "Andere beta-hämolysierende Streptokokken (Gruppen B, C, G)", frequency: "common", notes: "Häufig anzutreffen, insbesondere bei chronischem Lymphödem oder venöser Insuffizienz." },
      { name: "Staphylococcus aureus", frequency: "rare", notes: "Selten bei reinem Erysipel; typischer für Zellulitis oder bullöse Formen." }
    ],
    empirical: {
      mild: {
        firstLine: "Phenoxymethylpenicillin (Penicillin V) 250-500 mg p.o. 4x/Tag ODER Amoxicillin 500 mg p.o. 3x/Tag (falls für orale Therapie geeignet)",
        alternative: "Clindamycin 300-450 mg p.o. 3x/Tag ODER Makrolide (z. B. Clarithromycin 250-500 mg p.o. 2x/Tag - hohe Resistenz möglich!) bei Betalaktam-Allergie",
        duration: "5 - 7 Tage (bei Bedarf auf 10 Tage verlängerbar)"
      },
      severe: {
        firstLine: "Benzylpenicillin (Penicillin G) 1,2-2,4 g (2-4 MIE) i.v. 4x/Tag ODER Ceftriaxon 1-2g i.v. 1x/Tag ODER Cefazolin 1-2g i.v. 3x/Tag",
        alternative: "Clindamycin 600-900 mg i.v. 3x/Tag ODER Moxifloxacin 400 mg i.v. 1x/Tag",
        duration: "7 - 10 Tage (Übergang zur oralen Sequenztherapie/Step-down nach klinischer Besserung)"
      }
    },
    targeted: [
      { condition: "Nachgewiesene Streptococcus pyogenes", treatment: "Penicillin G i.v. oder Penicillin V p.o." },
      { condition: "Assoziierter Staphylococcus aureus (MSSA)", treatment: "Cefazolin i.v., Amoxicillin/Clavulansäure i.v./p.o. oder Flucloxacillin." },
      { condition: "Betalaktam-Allergie", treatment: "Clindamycin oder Vancomycin." }
    ],
    guidelines: "IDSA SSTI-Leitlinien & Nationale Infektiologie-Leitlinien (S3-Leitlinie)",
    diagnosticsNotes: "Klinisches Bild: Scharf begrenzte, flammenförmig ausbreitende, glänzend rote, heiße, schmerzhafte Hautläsion, oft mit Schüttelfrost und hohem Fieber beginnend. Meist an den Unterschenkeln oder im Gesicht. Eintrittspforten (z. B. Interdigitalmykose, Hautrisse) müssen identifiziert und behandelt werden! Diagnostik: Primär klinisch. Laborwerte zeigen erhöhtes CRP, Leukozyten mit Linksverschiebung. Blutkulturen sind selten positiv (<5%), sollten aber bei schweren oder systemischen Verläufen abgenommen werden."
  },
  {
    id: "cellulitis",
    name: "Zellulitis (Phlegmone)",
    category: "sst_bone",
    pathogens: [
      { name: "Streptococcus pyogenes", frequency: "very-common", notes: "Der Haupterreger der nicht-purulenten Zellulitis." },
      { name: "Staphylococcus aureus (MSSA)", frequency: "very-common", notes: "Besonders bei purulenter (eitriger) Zellulitis, Abszessen oder nach Trauma." },
      { name: "Staphylococcus aureus (MRSA)", frequency: "common", notes: "Sollte bei Risikofaktoren (bekannte MRSA-Besiedlung, Krankenhausaufenthalt, i.v. Drogenkonsum) in Betracht gezogen werden." },
      { name: "Gramnegative Stäbchen (z. B. Pseudomonas)", frequency: "rare", notes: "Bei Immunsuppression, Neutropenie oder Wasserkontakt (z. B. Trauma in Süß-/Salzwasser)." }
    ],
    empirical: {
      mild: {
        firstLine: "Amoxicillin/Clavulansäure 1g p.o. 3x/Tag ODER Cephalexin 500 mg p.o. 4x/Tag (bei nicht-eitriger Phlegmone); Sulfamethoxazol/Trimethoprim (Cotrimoxazol) 960 mg p.o. 2x/Tag bei MRSA-Verdacht",
        alternative: "Clindamycin 300-450 mg p.o. 3x/Tag ODER Linezolid 600 mg p.o. 2x/Tag",
        duration: "5 - 10 Tage"
      },
      severe: {
        firstLine: "Cefazolin 1-2g i.v. 3x/Tag ODER Amoxicillin/Clavulansäure 1,2g i.v. 3x/Tag; bei MRSA-Verdacht: Vancomycin 15-20 mg/kg i.v. alle 8-12 Std. ODER Linezolid 600 mg i.v. 2x/Tag",
        alternative: "Piperacillin/Tazobactam 4,5g i.v. 4x/Tag (falls gramnegative Stäbchen oder polymikrobielle Mischinfektion vermutet, z. B. bei diabetischem Fuß oder Dekubitus)",
        duration: "7 - 14 Tage (basierend auf klinischem Verlauf und Begleiterkrankungen)"
      }
    },
    targeted: [
      { condition: "Nachgewiesene MSSA (Methicillin-sensibler S. aureus)", treatment: "Flucloxacillin 1-2g i.v./p.o. 4x/Tag oder Cefazolin 1-2g i.v. 3x/Tag." },
      { condition: "Nachgewiesene MRSA", treatment: "Vancomycin i.v., Linezolid i.v./p.o., Clindamycin i.v./p.o. oder Trimethoprim/Sulfamethoxazol p.o." },
      { condition: "Pseudomonas aeruginosa", treatment: "Ceftazidim 2g i.v. 3x/Tag ODER Piperacillin/Tazobactam 4,5g i.v. 4x/Tag ODER Ciprofloxacin." }
    ],
    guidelines: "IDSA-Praxisleitlinien für die Diagnose und das Management von Haut- und Weichteilinfektionen",
    diagnosticsNotes: "Klinisches Bild: Diffuse, unscharf begrenzte Entzündung der tieferen Haut und des Unterhautgewebes mit Rötung, Schwellung, Überwärmung und Schmerz. Häufig an Stellen von Traumata, OP-Wunden, Ödemen oder chronischen Hauterkrankungen. Diagnostik: Primär klinisch. Die Kultur von eitrigem Sekret ist obligatorisch! Eine Sonografie wird empfohlen, um einen okkulten Abszess auszuschließen, wenn eine Fluktuation oder unklare Schwellung vorliegt."
  },
  {
    id: "fasciitis_necrotisans",
    name: "Nekrotisierende Fasziitis",
    category: "sst_bone",
    pathogens: [
      { name: "Polymikrobielle Flora (Typ I)", frequency: "very-common", notes: "Mischung aus aeroben und anaeroben Erregern (Koli-Bakterien, Streptokokken, Bacteroides). Häufigster Typ, v.a. bei Diabetes oder nach Operationen." },
      { name: "Streptococcus pyogenes (Typ II - 'fleischfressende Bakterien')", frequency: "common", notes: "Monomikrobielle Infektion, kann auch bei jungen, gesunden Menschen auftreten; extrem aggressiv." },
      { name: "Clostridium perfringens ODER septicum (Typ III)", frequency: "rare", notes: "Gasbrand, der sich als anaerobe Myonekrose darstellt." },
      { name: "Staphylococcus aureus (einschließlich MRSA)", frequency: "common", notes: "Teil von monomikrobiellen Typ-II- oder polymikrobiellen Infektionen." }
    ],
    empirical: {
      mild: {
        firstLine: "N/A (Es gibt keine milden oder mittelschweren Fälle einer nekrotisierenden Fasziitis; jeder verdächtige oder bestätigte Fall ist ein sofortiger, lebensbedrohlicher multidisziplinärer Notfall!)",
        alternative: "N/A",
        duration: "N/A"
      },
      severe: {
        firstLine: "Piperacillin/Tazobactam 4,5g i.v. 4x/Tag ODER Meropenem 1g i.v. 3x/Tag + Clindamycin 900 mg i.v. 3x/Tag (zur Hemmung der bakteriellen Toxinsynthese!) + Vancomycin 15-20 mg/kg i.v. (zur MRSA-Abdeckung)",
        alternative: "Ceftriaxon 2g i.v. 1x/Tag + Metronidazol 500 mg i.v. 3x/Tag + Clindamycin 900 mg i.v. 3x/Tag + Vancomycin ODER Linezolid 600 mg i.v. 2x/Tag (kann sowohl Clindamycin als auch Vancomycin ersetzen)",
        duration: "Individualisiert (bis die chirurgischen Debridements abgeschlossen sind, der Patient seit 48-72 Std. fieberfrei ist und das Fortschreiten der Nekrose aufgehört hat)"
      }
    },
    targeted: [
      { condition: "Streptokokken der Gruppe A (Typ II nekrotisierende Fasziitis)", treatment: "Penicillin G 4 Mio. IE i.v. 4x/Tag + Clindamycin 900 mg i.v. 3x/Tag (synergistischer Effekt und Toxinsuppression)." },
      { condition: "Clostridien-Myonekrose (Gasbrand)", treatment: "Penicillin G 4 Mio. IE i.v. 4x/Tag + Clindamycin 900 mg i.v. 3x/Tag." },
      { condition: "MRSA", treatment: "Vancomycin i.v., Linezolid i.v. oder Daptomycin i.v." }
    ],
    guidelines: "IDSA SSTI-Leitlinien & WSES-Leitlinien für Haut- und Weichteilinfektionen",
    diagnosticsNotes: "SCHLÜSSEL DER THERAPIE: Sofortige, radikale chirurgische Exploration und Debridement aller nekrotischen Gewebe! Antibiotika allein sind völlig wirkungslos; eine chirurgische Verzögerung erhöht die Sterblichkeit exponentiell. Klinische Zeichen: Extreme Schmerzen, die in keinem Verhältnis zu den sichtbaren Hautbefunden stehen, rasches Fortschreiten, Blasen (insbesondere hämorrhagische), Krepitationen (Gasbildung), anästhetische Hautbereiche, Apathie, septischer Schock. Diagnostik: Ein Weichteil-CT kann Gas und fasziales Ödem zeigen. Der LRINEC-Score kann helfen, aber ein negatives Bildgebungs- oder Laborergebnis schließt die Diagnose nicht aus!"
  },
  {
    id: "osteomyelitis",
    name: "Osteomyelitis (Knochenmarkentzündung)",
    category: "sst_bone",
    pathogens: [
      { name: "Staphylococcus aureus (MSSA & MRSA)", frequency: "very-common", notes: "Der häufigste Erreger in allen Altersgruppen (hämatogene und perkontinuierliche Wege)." },
      { name: "Koagulase-negative Staphylokokken (z. B. S. epidermidis)", frequency: "common", notes: "Besonders assoziiert mit orthopädischen Implantaten, Osteosynthesematerial oder Prothesen." },
      { name: "Enterobacterales (z. B. E. coli, Klebsiella)", frequency: "common", notes: "Hauptsächlich bei älteren Patienten nach hämatogener Aussaat von Harnwegsinfektionen oder als Komplikation eines diabetischen Fußsyndroms." },
      { name: "Pseudomonas aeruginosa", frequency: "common", notes: "Typischerweise bei i.v. Drogenkonsumenten, Pfählungsverletzungen durch Schuhe oder nach nosokomialen Knocheneingriffen." }
    ],
    empirical: {
      mild: {
        firstLine: "Flucloxacillin 500-1000 mg p.o. 4x/Tag ODER Amoxicillin/Clavulansäure 1g p.o. 3x/Tag ODER Clindamycin 450 mg p.o. 3x/Tag (ausschließlich bei stabilen Patienten als chronische Suppressionstherapie oder früher oraler Step-down)",
        alternative: "Ciprofloxacin 500-750 mg p.o. 2x/Tag (falls gramnegative Abdeckung erforderlich; hat eine hervorragende Knochengängigkeit!)",
        duration: "4 - 6 Wochen (kann bei chronischer oder nicht-resezierbarer Osteomyelitis mehrere Monate dauern)"
      },
      severe: {
        firstLine: "Cefazolin 2g i.v. 3x/Tag ODER Ceftriaxon 2g i.v. 1x/Tag + Vancomycin 15-20 mg/kg i.v. alle 8-12 Std. (empirische Abdeckung für S. aureus, MRSA und gramnegative Stäbchen)",
        alternative: "Piperacillin/Tazobactam 4,5g i.v. 4x/Tag ODER Meropenem 1g i.v. 3x/Tag (falls ein Pseudomonas-Risiko oder eine diabetische Fußinfektion vorliegt)",
        duration: "Mindestens 4-6 Wochen i.v. oder hochdosierte orale Therapie nach erfolgreicher chirurgischer Fokussanierung"
      }
    },
    targeted: [
      { condition: "Nachgewiesene MSSA (Methicillin-sensibler S. aureus)", treatment: "Cefazolin 2g i.v. 3x/Tag oder Flucloxacillin 2g i.v. 4x/Tag; orales Step-down mit Amoxicillin/Clavulansäure oder Clindamycin." },
      { condition: "Nachgewiesene MRSA", treatment: "Vancomycin i.v., Daptomycin 6-8 mg/kg i.v. 1x/Tag, Linezolid 600 mg i.v./p.o. 2x/Tag oder Clindamycin." },
      { condition: "Gramnegative Stäbchen (empfindlich)", treatment: "Ciprofloxacin 750 mg p.o. 2x/Tag oder Levofloxacin 750 mg p.o. 1x/Tag (hervorragende Knochenpenetration)." }
    ],
    guidelines: "IDSA Osteomyelitis-Leitlinien & Nationale Fachleitlinien",
    diagnosticsNotes: "Schlüssel zur Diagnose: Knochenbiopsie und Kultur (chirurgisch oder CT-gesteuert)! Oberflächliche Wundabstriche sind irreführend und ersetzen keine Knochenbiopsie. Bildgebung: Das MRT ist das empfindlichste und spezifischste Bildgebungsverfahren. Ein Knochenabbau ist auf einfachen Röntgenaufnahmen erst nach 2-3 Wochen einer Infektion sichtbar. Management: Erfordert typischerweise ein kombiniertes chirurgisches (Debridement von nekrotischen Sequestren) und längerfristiges gezieltes antibiotisches Vorgehen."
  },
  {
    id: "spondylodiscitis",
    name: "Spondylodiscitis (Wirbelkörper- und Bandscheibenentzündung)",
    category: "sst_bone",
    pathogens: [
      { name: "Staphylococcus aureus", frequency: "very-common", notes: "Der häufigste Erreger bei hämatogener Spondylodiszitis (>50%)." },
      { name: "Koagulase-negative Staphylokokken", frequency: "common", notes: "Hauptsächlich nach Wirbelsäulenoperationen, Epiduralkatheterisierung oder invasiven Eingriffen." },
      { name: "Enterobacterales (z. B. E. coli)", frequency: "common", notes: "Oft eine hämatogene Komplikation von Harnwegsinfektionen, insbesondere bei älteren Patienten." },
      { name: "Mycobacterium tuberculosis (Spondylitis tuberculosa / Morbus Pott)", frequency: "rare", notes: "Bei chronischen, langsam fortschreitenden Fällen, typischerweise mit charakteristischer Senkungsabszessbildung." }
    ],
    empirical: {
      mild: {
        firstLine: "N/A (Eine empirische Antibiotikatherapie wird bei Verdacht auf Spondylodiszitis nicht empfohlen, es sei denn, der Patient ist instabil; versuchen Sie immer zuerst eine mikrobiologische Diagnose zu sichern!)",
        alternative: "N/A",
        duration: "N/A"
      },
      severe: {
        firstLine: "Cefazolin 2g i.v. 3x/Tag ODER Ceftriaxon 2g i.v. 1x/Tag + Vancomycin 15-20 mg/kg i.v. (falls der Patient eine Sepsis oder neurologische Defizite hat)",
        alternative: "Piperacillin/Tazobactam 4,5g i.v. 4x/Tag ODER Meropenem 1g i.v. 3x/Tag (bei vorheriger Wirbelsäulen-OP, nosokomialer Infektion oder vermuteter urologischer Quelle)",
        duration: "Mindestens 6 Wochen (viel länger, z. B. 6-12 Monate, bei tuberkulösen Verläufen oder Wirbelsäuleninstabilität)"
      }
    },
    targeted: [
      { condition: "Nachgewiesene MSSA (Staphylococcus aureus)", treatment: "Cefazolin 2g i.v. 3x/Tag oder Flucloxacillin 2g i.v. 4x/Tag; Step-down zu oralem Clindamycin oder Amoxicillin/Clavulansäure." },
      { condition: "Nachgewiesene MRSA", treatment: "Vancomycin i.v. (Ziel-Talspiegel 15-20 ug/mL) oder Daptomycin 8-10 mg/kg i.v. 1x/Tag." },
      { condition: "Enterobacterales (empfindlich)", treatment: "Ciprofloxacin 500-750 mg p.o. 2x/Tag oder Levofloxacin 750 mg p.o. 1x/Tag, oder Ceftriaxon i.v." }
    ],
    guidelines: "2015 IDSA-Leitlinien für die Diagnose und Behandlung der nativen vertebralen Osteomyelitis",
    diagnosticsNotes: "Klinisches Bild: Lokalisierter, dumpfer Rückenschmerz, der sich bei Bewegung verschlimmert; Fieber liegt nur in ~50% der Fälle vor! Erhöhte Entzündungswerte (CRP, Leukozyten). Neurologische Symptome (z. B. Extremitätenschwäche, Blasen-/Mastdarmstörungen) deuten auf einen spinalen epiduralen Abszess hin (erfordert dringendes neurochirurgisches Konsil!). Diagnostik: Wirbelsäulen-MRT ist die Methode der Wahl. OBLIGATORISCH: Mindestens 2 Paar Blutkulturen! Wenn die Blutkulturen negativ sind, ist eine CT-gestützte Nadelbiopsie vor Beginn der Antibiotikatherapie zwingend erforderlich (es sei denn, der Patient ist hämodynamisch instabil oder septisch)!"
  },
  {
    id: "febrile_neutropenia",
    name: "Febrile Neutropenie (Neutropenisches Fieber)",
    category: "sepsis",
    pathogens: [
      { name: "Pseudomonas aeruginosa", frequency: "very-common", notes: "Extrem gefährlich, rasch progredienter Verlauf; erfordert sofortige Pseudomonas-wirksame Therapie." },
      { name: "Escherichia coli", frequency: "very-common", notes: "Häufiger gramnegativer Translokationserreger." },
      { name: "Klebsiella pneumoniae", frequency: "very-common", notes: "Oft nosokomiale Stämme mit ESBL- oder Carbapenemase-Bildung." },
      { name: "Koagulase-negative Staphylokokken (z. B. S. epidermidis)", frequency: "common", notes: "Häufigster grampositiver Erreger, v. a. bei liegendem zentralen Venenkatheter." },
      { name: "Staphylococcus aureus", frequency: "common", notes: "Neigt zu schweren, metastatischen Infektionen und septischem Schock." },
      { name: "Viridans-Streptokokken", frequency: "common", notes: "Können insbesondere bei schwerer Mukositis ein schweres toxisches Schocksyndrom verursachen." }
    ],
    empirical: {
      mild: {
        firstLine: "N/A (In Ausnahmefällen bei Patienten mit niedrigem Risiko: Ciprofloxacin 500-750 mg p.o. 2x/Tag + Amoxicillin/Clavulansäure 1g p.o. 3x/Tag unter engmaschiger ambulanter Überwachung)",
        alternative: "N/A",
        duration: "Mindestens 48-72 Stunden nach Entfieberung UND bis die absolute Neutrophilenzahl (ANC) anhaltend > 500/µl (0,5 G/l) beträgt."
      },
      severe: {
        firstLine: "Antipseudomonale Betalaktam-Monotherapie: Piperacillin/Tazobactam 4,5g i.v. 4x/Tag ODER Cefepim 2g i.v. 3x/Tag ODER Meropenem 1g i.v. 3x/Tag (bei ESBL-Verdacht oder hämodynamischer Instabilität)",
        alternative: "Kombinationstherapie (bei Verdacht auf resistente Stämme): Piperacillin/Tazobactam oder Cefepim + Amikacin 15-20 mg/kg i.v. 1x/Tag (Vancomycin i.v. hinzufügen bei Verdacht auf Katheterinfektion, Weichteilbeteiligung oder Schock)",
        duration: "Mindestens 48-72 Stunden nach Entfieberung UND bis die absolute Neutrophilenzahl (ANC) anhaltend > 500/µl (0,5 G/l) beträgt."
      }
    },
    targeted: [
      { condition: "Gramnegative Stäbchen (z. B. nachgewiesene Pseudomonas aeruginosa)", treatment: "Gezielt Piperacillin/Tazobactam 4,5g i.v. 4x/Tag, Cefepim 2g i.v. 3x/Tag oder Ceftazidim 2g i.v. 3x/Tag, bei Bedarf kombiniert mit Amikacin." },
      { condition: "Nachgewiesene MRSA- oder Katheterinfektion", treatment: "Hinzufügen von Vancomycin i.v. (Ziel-Talspiegel 15-20 ug/mL) oder Linezolid 600 mg i.v. 2x/Tag oder Teicoplanin." },
      { condition: "Anhaltendes Fieber (nach 4-7 Tagen) trotz adäquater antibakterieller Therapie", treatment: "Empirischer Beginn einer antimykotischen Therapie: Caspofungin i.v. (oder anderes Echinocandin) ODER Voriconazol ODER liposomales Amphotericin B." }
    ],
    guidelines: "AGIHO (DGHO) Leitlinien zu febrile Neutropenie, ECIL-Leitlinien, IDSA Clinical Practice Guidelines",
    diagnosticsNotes: "DEFINITION: Fieber (einmalige orale Temperatur >38,3 °C oder >38,0 °C über mindestens 1 Stunde) UND Neutropenie (absolute Neutrophilenzahl /ANC/ < 500/µl, oder < 1000/µl mit absehbarem Abfall < 500/µl innerhalb von 48 Std.). Medizinischer Notfall! Die erste Dosis Antibiotikum muss innerhalb von 1 Stunde nach Vorstellung verabreicht werden! DIAGNOSTIK: Sofortige Abnahme von mindestens 2 Paar Blutkulturen (peripher + aus jedem Lumen des zentralen Venenkatheters), Urinkultur, Röntgen-Thorax, körperliche Untersuchung (besonders Schleimhäute, Katheter-Austrittsstellen, Perianalbereich). Risikoabschätzung mittels MASCC-Score (Score >=21: niedriges Risiko, ambulante orale Therapie möglich)."
  },
  {
    id: "salmonella_campylobacter_gastroenteritis",
    name: "Salmonellen- und Campylobacter-Gastroenteritis",
    category: "abdominal",
    pathogens: [
      { name: "Campylobacter jejuni / coli", frequency: "very-common", notes: "Häufigster bakterieller Erreger von Gastroenteritiden weltweit, meist durch Geflügel übertragen." },
      { name: "Salmonella enterica (nicht-typhoide Salmonellen)", frequency: "very-common", notes: "Klassischer Lebensmittelinfektionserreger (Eier, Fleisch), kann bei Risikogruppen eine Bakteriämie auslösen." },
      { name: "Shigellen (S. sonnei, S. flexneri)", frequency: "common", notes: "Sehr geringe Infektionsdosis ausreichend, verursacht bakterielle Ruhr, fäkal-orale Übertragung." },
      { name: "Yersinia enterocolitica", frequency: "rare", notes: "Kann eine Appendizitis imitieren (Pseudoappendizitis) mit rechtsseitigem Unterbauchschmerz und mesenterieller Lymphadenitis." }
    ],
    empirical: {
      mild: {
        firstLine: "N/A (Bei leichten/mittelschweren Verläufen sind Antibiotika kontraindiziert oder nicht empfohlen, da sie die Salmonellenausscheidung verlängern und Resistenzen fördern! Nur symptomatische Rehydration!)",
        alternative: "N/A",
        duration: "N/A"
      },
      severe: {
        firstLine: "Azithromycin 500 mg p.o. 1x/Tag für 3 Tage ODER Ciprofloxacin 500 mg p.o. 2x/Tag für 3-5 Tage (nur bei systemischen Symptomen, hohem Fieber, blutigem Stuhl, schwerer Immunsuppression oder relevanten Begleiterkrankungen)",
        alternative: "Ceftriaxon 1-2g i.v. 1x/Tag für 3-5 Tage (falls orale Einnahme nicht toleriert wird oder Verdacht auf systemische Ausbreitung besteht)",
        duration: "3 - 5 Tage (7-14 Tage bei systemischen Komplikationen)"
      }
    },
    targeted: [
      { condition: "Nachgewiesene Campylobacter jejuni (schwerer oder protrahierter Verlauf)", treatment: "Azithromycin 500 mg p.o. 1x/Tag für 3 Tage (Hinweis: Die Fluorchinolon-Resistenz bei Campylobacter is extrem hoch!)." },
      { condition: "Nachgewiesene Salmonella enterica (systemische Bakteriämie oder Risikogruppe: Säuglinge, Senioren, Immunsupprimierte, Gefäßgraft/Aneurysma)", treatment: "Ciprofloxacin 500 mg p.o. 2x/Tag ODER Ceftriaxon 1-2g i.v. 1x/Tag für 5-7 Tage (bei schwerer Immunsuppression oder endovaskulärem Infekt auf 14 Tage verlängern)." },
      { condition: "Nachgewiesene Shigellose (schwerer Verlauf oder zur Ausbruchskontrolle)", treatment: "Azithromycin 500 mg p.o. 1x/Tag für 3 Tage ODER Ciprofloxacin 500 mg p.o. 2x/Tag für 3 Tage ODER Ceftriaxon 1-2g i.v. für 3 Tage." }
    ],
    guidelines: "RKI-Ratgeber für Salmonellose / Campylobacter-Infektionen, DGVS-Leitlinie gastrointestinale Infektionen",
    diagnosticsNotes: "KLINISCHES BILD: Akuter Durchfall (wässrig oder blutig/schleimig), Bauchschmerzen, Krämpfe, Fieber, Übelkeit/Erbrechen. KOMPLIKATIONEN: Dehydration, prärenales Nierenversagen. Eine Salmonellen-Bakteriämie kann bei Gefäßerkrankungen endovaskuläre Infektionen triggern. Nach Campylobacter kann ein Guillain-Barré-Syndrom oder eine reaktive Arthritis auftreten. DIAGNOSTIK: Eine Stuhlkultur ist bei schweren, fieberhaften, blutigen Verläufen, Immunsuppression oder Ausbruchsverdacht obligatorisch. Bei systemischen Symptomen Blutkulturen abnehmen!"
  },
  {
    id: "clostridioides_difficile",
    name: "Clostridioides-difficile-Infektion (CDI)",
    category: "abdominal",
    pathogens: [
      { name: "Clostridioides difficile (toxinbildende Stämme)", frequency: "very-common", notes: "Früber Clostridium difficile. Sporenbildendes, anaerobes grampositives Stäbchen; Hauptursache für nosokomiale Diarrhöen." }
    ],
    empirical: {
      mild: {
        firstLine: "Fidaxomicin 200 mg p.o. 2x/Tag für 10 Tage ODER Vancomycin 125 mg p.o. 4x/Tag für 10 Tage (Hinweis: Orales Metronidazol 500 mg 3x/Tag für 10 Tage ist nur bei nicht-schweren Verläufen empfohlen, wenn die bevorzugten Wirkstoffe nicht verfügbar sind!)",
        alternative: "Metronidazol 500 mg p.o. 3x/Tag für 10 Tage (nur wenn Fidaxomicin/Vancomycin nicht verfügbar sind)",
        duration: "10 Tage"
      },
      severe: {
        firstLine: "Fidaxomicin 200 mg p.o. 2x/Tag für 10 Tage ODER Vancomycin 125 mg p.o. 4x/Tag für 10 Tage (Bei schweren/komplizierten Verläufen Erhöhung des oralen Vancomycins auf 250-500 mg 4x/Tag oder Gabe über Magensonde, kombiniert mit intravenösem Metronidazol 500 mg i.v. alle 8 Stunden!)",
        alternative: "Vancomycin 125-500 mg p.o. + Metronidazol 500 mg i.v. Bei schwerem Ileus kann eine rektale Vancomycin-Instillation als Zusatzbehandlung erfolgen.",
        duration: "10 Tage (bei erstem Rezidiv ausschleichendes/gepulstes Vancomycin-Schema oder Fidaxomicin)"
      }
    },
    targeted: [
      { condition: "Erstes Rezidiv", treatment: "Fidaxomicin 200 mg p.o. 2x/Tag für 10 Tage (v. a. wenn initial Vancomycin gegeben wurde) ODER ausschleichendes/gepulstes Vancomycin-Schema." },
      { condition: "Multiple Rezidive", treatment: "Vancomycin-Therapie gefolgt von Bezlotoxumab i.v. (monoklonaler Antikörper) Infusion ODER fäkaler Mikrobiomtransfer (FMT / Stuhltransplantation)." },
      { condition: "Fulminante Colitis (Schock, paralytischer Ileus, toxisches Megakolon)", treatment: "Hochdosiertes Vancomycin p.o. (500 mg 4x/Tag oder per Sonde) + Metronidazol 500 mg i.v. alle 8 Stunden + rektale Vancomycin-Instillation. Dringendes chirurgisches Konsil (Kolektomie und terminales Ileostoma) anfordern!" }
    ],
    guidelines: "S3-Leitlinie Clostridioides-difficile-Infektion, ESCMID 2021 Update Guidelines on CDI",
    diagnosticsNotes: "RISIKOFAKTOREN: Vorangehende Antibiotikatherapie (v. a. Clindamycin, Fluorchinolone, Breitband-Cephalosporine/Carbapeneme), höheres Alter, Hospitalisierung, PPI-Einnahme. KLINISCHES BILD: Reichlich wässrige Durchfälle (oft mit charakteristischem süßlich-fauligem Geruch), Bauchschmerzen, Fieber, Leukozytose. Komplikationen: pseudomembranöse Kolitis, toxisches Megakolon, Perforation, septischer Schock. DIAGNOSTIK: Nur flüssige Stuhlproben testen (geformter Stuhl ist ungeeignet, außer bei Ileus-Verdacht!). Zweistufiger Algorithmus: GDH-Antigen oder PCR-Screening, gefolgt von einem Toxin A/B Enzymimmunoassay (EIA). Nur toxinpositive Fälle entsprechen einer behandlungsbedürftigen klinischen Infektion (asymptomatische Träger werden nicht behandelt!)."
  },
  {
    id: "diverticulitis",
    name: "Akute Divertikulitis",
    category: "abdominal",
    pathogens: [
      { name: "Escherichia coli", frequency: "very-common", notes: "Häufigster gramnegativer aerober Erreger." },
      { name: "Bacteroides fragilis", frequency: "very-common", notes: "Häufigster obligat anaerober Erreger im Dickdarm." },
      { name: "Enterococcus faecalis / faecium", frequency: "common", notes: "Häufig in polymikrobiellen Mischungen vorhanden, wirkt synergistisch." },
      { name: "Klebsiella-Spezies", frequency: "common", notes: "Assoziierter gramnegativer aerober Erreger." },
      { name: "Clostridium-Spezies", frequency: "rare", notes: "Andere anaerobe Darmbakterien." }
    ],
    empirical: {
      mild: {
        firstLine: "Amoxicillin/Clavulansäure 1g p.o. 3x/Tag ODER Ciprofloxacin 500 mg p.o. 2x/Tag + Metronidazol 500 mg p.o. 3x/Tag",
        alternative: "Levofloxacin 500 mg p.o. 1x/Tag + Metronidazol 500 mg p.o. 3x/Tag ODER Moxifloxacin 400 mg p.o. 1x/Tag als Monotherapie",
        duration: "5 - 7 Tage (Hinweis: Bei milder, unkomplizierter Divertikulitis bei immunkompetenten, stabilen Patienten kann auf eine Antibiotikatherapie verzichtet werden; flüssige Kost und engmaschige Überwachung sind ausreichend!)"
      },
      severe: {
        firstLine: "Piperacillin/Tazobactam 4,5g i.v. 4x/Tag ODER Ceftriaxon 2g i.v. 1x/Tag + Metronidazol 500 mg i.v. 3x/Tag ODER Cefotaxim 2g i.v. 3x/Tag + Metronidazol 500 mg i.v. 3x/Tag",
        alternative: "Ertapenem 1g i.v. 1x/Tag ODER Meropenem 1g i.v. 3x/Tag (bei Verdacht auf ESBL-Bildner oder schwerer Sepsis)",
        duration: "4 - 7 Tage (nach erfolgreicher Herdsanierung/Drainage oder chirurgischer Resektion; längere Therapie bei nicht-resezierten oder konservativ behandelten schweren Fällen)"
      }
    },
    targeted: [
      { condition: "Nachgewiesene ESBL-bildende Enterobacterales", treatment: "Ertapenem 1g i.v. 1x/Tag oder Meropenem 1g i.v. 3x/Tag." },
      { condition: "Nachweis von Pseudomonas aeruginosa (selten, v. a. bei Immunsuppression)", treatment: "Piperacillin/Tazobactam 4,5g i.v. 4x/Tag ODER Ceftazidim 2g i.v. 3x/Tag + Metronidazol 500 mg i.v. oder p.o." },
      { condition: "Schwere Betalaktam-Allergie", treatment: "Ciprofloxacin 400 mg i.v. (oder 750 mg p.o.) 2x/Tag + Metronidazol 500 mg i.v. (oder p.o.) 3x/Tag." }
    ],
    guidelines: "WSES-Leitlinien für das Management der akuten linksseitigen Kolondivertikulitis, nationale Leitlinien zur Infektiologie und Chirurgie",
    diagnosticsNotes: "KLINISCHES BILD: Linksseitiger Unterbauchschmerz (linksseitige 'Appendizitis'), Fieber, Leukozytose, erhöhtes CRP, Obstipation oder Diarrhö. KOMPLIKATIONEN: Abszess (Hinchey I-II), freie Perforation mit eitriger/kotiger Peritonitis (Hinchey III-IV), Fistelbildung, Striktur. DIAGNOSTIK: Abdomen-/Becken-CT mit i.v.-Kontrastmittel ist die Methode der Wahl (Sensitivität >95%). IN DER AKUTPHASE ist eine Koloskopie wegen erhöhter Perforationsgefahr streng kontraindiziert! Eine Koloskopie wird 4-6 Wochen nach Abklingen empfohlen, um ein Kolonkarzinom auszuschließen."
  }
];