/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Antibiotic } from '../types';

export const antibioticsData_DE: any[] = [
  {
    "id": "penicillin_g",
    "name": "Benzylpenicillin (Penicillin G)",
    "abbreviation": "PEN",
    "brandNames": "Penicillin G Sandoz",
    "group": "Natürliche Penicilline",
    "halfLife": "30-45 Minuten (verlängert bei Niereninsuffizienz)",
    "pae": "Ausgeprägt bei Gram-positiven (1,5-3 Stunden), keine bei Gram-negativen",
    "effectType": "bakterizid",
    "dosage": {
      "adult": "Täglich 10-24 Millionen IE (Internationale Einheiten) i.v., aufgeteilt in 4-6 Dosen",
      "pediatric": "Täglich 100.000 - 400.000 IE/kg i.v., aufgeteilt in 4-6 Dosen",
      "renalAdjustment": "GFR < 50 ml/Min: reduzierte Dosis oder verlängertes Dosierungsintervall (z. B. 50-75 % der Dosis)"
    },
    "mechanismOfAction": "Bakterizid. Hemmt die bakterielle Zellwandsynthese: bindet irreversibel an Penicillin-Bindeproteine (PBP) und verhindert die Quervernetzung von Peptidoglykanketten (Transpeptidierung), was zur Lyse der Zellwand führt.",
    "sideEffects": [
      "Überempfindlichkeitsreaktionen (Hautausschlag, Anaphylaxie: 0,05-0,2 %)",
      "Neurotoxizität bei hohen Dosen (Krampfanfälle, insbesondere bei Niereninsuffizienz)",
      "Elektrolitstörung (Hyperkaliämie bei Kalium-Penicillin)",
      "Jarisch-Herxheimer-Reaktion bei der Behandlung von Syphilis"
    ],
    "spectrum": {
      "gramPositive": "2",
      "gramNegative": "1",
      "anaerobe": "1",
      "atypical": "0",
      "pseudomonas": "0",
      "other": "Mittel der ersten Wahl bei Treponema pallidum (Syphilis) und Borrelia burgdorferi (Lyme-Borreliose). Hervorragend wirksam gegen Streptokokken (Gruppen A, B, C, G)."
    },
    "indications": [
      "Infektiöse Endokarditis (empfindliche Streptococcus- und Enterococcus-Stämme)",
      "Meningitis (empfindliche Stämme von Neisseria meningitidis und Streptococcus pneumoniae)",
      "Syphilis (Neurosyphilis)",
      "Gasbrand (Clostridium perfringens)"
    ],
    "notes": "Nur zur parenteralen Anwendung. Säureinstabil, daher oral unwirksam."
  },
  {
    "id": "penicillin_v",
    "name": "Phenoxymethylpenicillin (Penicillin V)",
    "abbreviation": "PV",
    "brandNames": "Ospen",
    "group": "Natürliche Penicilline",
    "halfLife": "30-45 Minuten",
    "pae": "Ausgeprägt bei Gram-positiven Erregern",
    "effectType": "bakterizid",
    "dosage": {
      "adult": "3x 1-1,5 Millionen IE p.o. (aufgeteilt in 3 Tagesdosen, auf nüchternen Magen)",
      "pediatric": "50.000 - 100.000 IE/kg/Tag p.o., aufgeteilt in 3 Dosen",
      "renalAdjustment": "Dosisreduktion empfohlen bei GFR < 10 ml/Min"
    },
    "mechanismOfAction": "Identisch mit Penicillin G (bakterizider Zellwandsynthesehemmer). Hemmt die Transpeptidierung durch Bindung an PBPs.",
    "sideEffects": [
      "Gastrointestinale Beschwerden (Übelkeit, Durchfall)",
      "Allergische Reaktionen (Hautausschlag, Nesselsucht)",
      "Eosinophilie"
    ],
    "spectrum": {
      "gramPositive": "2",
      "gramNegative": "0",
      "anaerobe": "1",
      "atypical": "0",
      "pseudomonas": "0",
      "other": "Nur bei leichten, gut lokalisierten Streptokokken-Infektionen."
    },
    "indications": [
      "Streptokokken-Pharyngitis / Tonsillitis (eitrige Mandelentzündung)",
      "Leichtes Erysipel (Wundrose)",
      "Sekundärprophylaxe des rheumatischen Fiebers"
    ],
    "notes": "Säurestabil, wird oral gut resorbiert. Sollte 1 Stunde vor den Mahlzeiten eingenommen werden."
  },
  {
    "id": "amoxicillin",
    "name": "Amoxicillin",
    "abbreviation": "AMX",
    "brandNames": "Duomox, Amoxicillin-B, Moxilen",
    "group": "Aminopenicilline (Breitbandpenicilline)",
    "halfLife": "1-1,5 Stunden",
    "pae": "1,5-2 Stunden bei Gram-positiven, minimal bei Gram-negativen",
    "effectType": "bakterizid",
    "dosage": {
      "adult": "3x 500 mg - 1000 mg p.o. täglich, in schweren Fällen 3x 1000 mg",
      "pediatric": "40-90 mg/kg/Tag p.o., aufgeteilt in 2-3 Dosen",
      "renalAdjustment": "GFR < 30 ml/Min: Dosisreduktion (z. B. max. 2x 500 mg täglich)"
    },
    "mechanismOfAction": "Bakterizid. Verhindert die bakterielle Zellwandsynthese durch Hemmung der PBPs. Breiteres Spektrum als Penicillin G, da es besser durch die Porinkanäle in der äußeren Membran gramnegativer Bakterien penetriert.",
    "sideEffects": [
      "Gastrointestinale Beschwerden (Durchfall, Übelkeit)",
      "Makulopapulöses Exanthem (häufig, nicht zwingend allergisch, tritt z. B. bei EBV-Infektion/Mononukleose fast immer auf!)",
      "Allergische Reaktionen (Urtikaria, Anaphylaxie)"
    ],
    "spectrum": {
      "gramPositive": "2",
      "gramNegative": "1",
      "anaerobe": "1",
      "atypical": "0",
      "pseudomonas": "0",
      "other": "Mittel der ersten Wahl gegen Listeria monocytogenes. Instabil gegenüber Beta-Laktamase-Enzymen!"
    },
    "indications": [
      "Leichte Formen der ambulant erworbenen Pneumonie (CAP)",
      "Akute Otitis media (Mittelohrentzündung)",
      "Akute Sinusitis (Nasennebenhöhlenentzündung)",
      "Listeria-monocytogenes-Infektionen (bei Meningitis in Kombination mit Gentamicin)"
    ],
    "notes": "Hervorragende orale Resorption, kann unabhängig von den Mahlzeiten eingenommen werden. Die parenterale Form ist in Ungarn hauptsächlich in Kombination erhältlich."
  },
  {
    "id": "amoxicillin_clavulanate",
    "name": "Amoxicillin / Clavulansäure (Co-Amoxiclav)",
    "abbreviation": "AMC",
    "brandNames": "Aktil, Augmentin, Curam",
    "group": "Penicilline in Kombination mit Beta-Laktamase-Inhibitoren",
    "halfLife": "ca. 1 Stunde (beide Komponenten)",
    "pae": "1,5-2 Stunden bei Gram-positiven, gering bei Gram-negativen",
    "effectType": "bakterizid",
    "dosage": {
      "adult": "p.o.: 2x 875/125 mg oder 3x 500/125 mg; i.v.: 3x 1,2 g (1000 mg Amox + 200 mg Clav)",
      "pediatric": "40-90 mg/kg/Tag p.o. (berechnet auf Amoxicillin), aufgeteilt in 2-3 Dosen",
      "renalAdjustment": "GFR < 30 ml/Min: Die 875/125-mg-Formulierung sollte vermieden werden, stattdessen eine geringere Dosis oder 500/125 mg alle 12-24 Stunden"
    },
    "mechanismOfAction": "Bakterizid. Amoxicillin hemmt die Zellwandsynthese. Clavulansäure ist ein „Suizid“-Beta-Laktamase-Inhibitor, der irreversibel an bakterielle Beta-Laktamase-Enzyme bindet (Ambler-Klasse A, einschließlich Penicillinasen, ESBLs in gewissem Maße, jedoch nicht Carbapenemasen) und so Amoxicillin vor dem Abbau schützt.",
    "sideEffects": [
      "Diarrhö (sehr häufig, aufgrund der darmmotilitätssteigernden Wirkung von Clavulansäure)",
      "Hepatotoxizität (cholestatische Hepatitis, insbesondere bei älteren Männern, bei längerer Behandlung)",
      "Candida-Superinfektion (Mundsoor, Scheidenpilz)"
    ],
    "spectrum": {
      "gramPositive": "2",
      "gramNegative": "2",
      "anaerobe": "2",
      "atypical": "0",
      "pseudomonas": "0",
      "other": "Eines der vielseitigsten Breitband-Empirika, aber unwirksam gegen Pseudomonas, MRSA und atypische Erreger."
    },
    "indications": [
      "Ambulant erworbene Pneumonie (empirisch, bei Begleiterkrankungen)",
      "Bisswunden (menschlich oder tierisch, wegen anaerober Abdeckung!)",
      "Schwere akute Sinusitis, Otitis media",
      "Komplizierte Harnwegsinfektionen, entzündliche Erkrankungen des Beckens",
      "Aspirationspneumonie"
    ],
    "notes": "Das Risiko von Durchfall kann verringert werden, wenn die orale Darreichungsform direkt zu Beginn einer Mahlzeit eingenommen wird."
  },
  {
    "id": "piperacillin_tazobactam",
    "name": "Piperacillin / Tazobactam (Pip/Tazo)",
    "abbreviation": "TZP",
    "brandNames": "Tazocin, Pipril, Piperacillin/Tazobactam Kabi",
    "group": "Ureidopenicilline (Anti-Pseudomonas-Beta-Laktamase-Inhibitor-Kombinationen)",
    "halfLife": "ca. 1 Stunde",
    "pae": "Kurz (< 1 Stunde bei Gram-negativen, bei Pseudomonas durch kontinuierliche Infusion verlängerbar)",
    "effectType": "bakterizid",
    "dosage": {
      "adult": "3x oder 4x 4,5 g (4g Piperacillin + 0,5g Tazobactam) i.v. langsam oder als kontinuierliche (verlängerte) Infusion (über 4 Stunden)",
      "pediatric": "90-112,5 mg/kg KG i.v. alle 6-8 Stunden",
      "renalAdjustment": "GFR < 40 ml/Min: Dosisanpassung erforderlich (z. B. 3x 2,25 g oder 3x 4,5 g)"
    },
    "mechanismOfAction": "Bakterizid. Piperacillin ist ein Ureidopenicillin, das die gramnegative Zellwand hervorragend durchdringt und das PBP-3-Protein hemmt. Tazobactam ist ein Beta-Laktamase-Inhibitor, der das Spektrum auf die meisten Beta-Laktamase-bildenden Stämme erweitert (ausgenommen AmpC-dereprimierte und Carbapenemase-Bildner).",
    "sideEffects": [
      "Allergische Reaktionen, Hautausschläge",
      "Nierenversagen (zeigt insbesondere in Kombination mit Vancomycin eine erhöhte Nephrotoxizität!)",
      "Thrombozytopenie, Leukopenie (bei längerer Behandlung)",
      "Durchfall (C.-difficile-Risiko)"
    ],
    "spectrum": {
      "gramPositive": "2",
      "gramNegative": "2",
      "anaerobe": "2",
      "atypical": "0",
      "pseudomonas": "2",
      "other": "Das wichtigste klinische, empirische Breitbandantibiotikum."
    },
    "indications": [
      "Nosokomiale (krankenhauserworbene) Pneumonie (HAP, VAP)",
      "Empirische Therapie des neutropenischen Fiebers (als Monotherapie oder mit einem Aminoglykosid)",
      "Schwere intraabdominelle Sepsis",
      "Komplizierte Weichteilinfektionen (z. B. diabetischer Fuß)"
    ],
    "notes": "Nur zur intravenösen Verabreichung. Eine der am häufigsten eingesetzten 'schweren Waffen' auf Krankenhausstationen."
  },
  {
    "id": "cefazolin",
    "name": "Cefazolin",
    "abbreviation": "CZ",
    "brandNames": "Cefazolin Kabi, Sandoz Cefazolin",
    "group": "Cephalosporine der 1. Generation",
    "halfLife": "1,5 - 2 Stunden (relativ lang unter den Cephalosporinen)",
    "pae": "1,5-3 Stunden bei Gram-positiven Erregern",
    "effectType": "bakterizid",
    "dosage": {
      "adult": "3x täglich 1 g - 2 g i.v.; Zur perioperativen Prophylaxe: einmaliger i.v. Bolus von 2 g (30-60 Minuten vor dem Eingriff)",
      "pediatric": "50-100 mg/kg/Tag i.v., aufgeteilt in 3-4 Einzeldosen",
      "renalAdjustment": "GFR < 30 ml/Min: reduzierte Dosis und/oder verlängertes Intervall"
    },
    "mechanismOfAction": "Bakterizider Zellwandsynthese-Inhibitor. Bindet stark an PBP-1- und PBP-3-Proteine. Stabil gegenüber Penicillinasen, die von Staphylococcus aureus gebildet werden.",
    "sideEffects": [
      "Allergie (Kreuzreaktivität mit Penicillin ca. 1-3%)",
      "Schmerzen an der Injektionsstelle, Thrombophlebitis",
      "Nephrotoxizität (selten, kann aber bei hohen Dosen auftreten)"
    ],
    "spectrum": {
      "gramPositive": "2",
      "gramNegative": "1",
      "anaerobe": "0",
      "atypical": "0",
      "pseudomonas": "0",
      "other": "Unwirksam gegen MRSA, Enterokokken und Listerien! (Alle Cephalosporine sind unwirksam gegen Enterokokken und Listerien!)"
    },
    "indications": [
      "Chirurgische Prophylaxe (der Goldstandard bei fast allen Operationsarten)",
      "Systemische Infektionen durch MSSA (Osteomyelitis, Arthritis, Endokarditis, Sepsis)",
      "Leichte bis mittelschwere Haut- und Weichteilinfektionen"
    ],
    "notes": "Penetriert nicht die Blut-Hirn-Schranke, zur Behandlung von Meningitis ungeeignet."
  },
  {
    "id": "cefuroxime",
    "name": "Cefuroxim (Cefuroxim-Axetil)",
    "abbreviation": "CXM",
    "brandNames": "Zinnat (p.o.), Zinacef (i.v.)",
    "group": "Cephalosporine der 2. Generation",
    "halfLife": "ca. 1,2 - 1,5 Stunden",
    "pae": "Moderat bei Gram-positiven Erregern",
    "effectType": "bakterizid",
    "dosage": {
      "adult": "p.o. (Axetil): 2x 250 - 500 mg täglich; i.v.: 3x 750 mg - 1500 mg täglich",
      "pediatric": "p.o.: 20-30 mg/kg/Tag in 2 Einzeldosen; i.v.: 50-100 mg/kg/Tag in 3 Einzeldosen",
      "renalAdjustment": "GFR < 20 ml/Min: Dosisanpassung (z. B. max. 2x 750 mg i.v.)"
    },
    "mechanismOfAction": "Bakterizid. Hemmt die Transpeptidierung während der Peptidoglykansynthese der bakteriellen Zellwand. Stabiler gegenüber Gram-negativen Beta-Laktamasen als Wirkstoffe der 1. Generation.",
    "sideEffects": [
      "Gastrointestinale Beschwerden (Übelkeit, Durchfall)",
      "Vorübergehender Anstieg der Transaminasen",
      "Eosinophilie, allergische Reaktionen"
    ],
    "spectrum": {
      "gramPositive": "2",
      "gramNegative": "2",
      "anaerobe": "0",
      "atypical": "0",
      "pseudomonas": "0",
      "other": "Die orale Form (Axetil) ist ein Prodrug und wird angemessen resorbiert."
    },
    "indications": [
      "Ambulant erworbene Atemwegsinfektionen (leichte Formen von CAP, COPD-Exazerbation)",
      "Otitis media, Sinusitis, Tonsillitis",
      "Unkomplizierte Harnwegsinfektionen"
    ],
    "notes": "Es passiert die Blut-Hirn-Schranke, aber Cephalosporine der 3. Generation sind bei der Behandlung von Meningitis weitaus wirksamer und werden bevorzugt."
  },
  {
    "id": "ceftriaxone",
    "name": "Ceftriaxon",
    "abbreviation": "CRO",
    "brandNames": "Lendacin, Rocephin, Ceftriaxon Kabi",
    "group": "Cephalosporine der 3. Generation (mit Schwerpunkt auf Gram-negative Erreger)",
    "halfLife": "8 Stunden (ungewöhnlich lang, ermöglicht eine einmal tägliche Verabreichung!)",
    "pae": "Mäßig",
    "effectType": "bakterizid",
    "dosage": {
      "adult": "1g - 2g i.v. oder i.m. 1x - 2x täglich (bei Meningitis 2x täglich 2g)",
      "pediatric": "50-80 mg/kg/Tag i.v. als Einzeldosis (bei Meningitis 100 mg/kg/Tag, max. 4g)",
      "renalAdjustment": "Erfordert bei alleiniger Niereninsuffizienz keine Dosisanpassung, sondern nur in Kombination mit Leberinsuffizienz (duale Elimination: Galle + Urin!)"
    },
    "mechanismOfAction": "Bakterizider Zellwandsynthesehemmer. Äußerst stabil gegenüber den meisten Gram-negativen Beta-Laktamasen (außer ESBL, AmpC und Carbapenemasen). Hervorragende Gewebe- und Blut-Hirn-Schranken-Penetration.",
    "sideEffects": [
      "Pseudolithiasis (Bildung von Gallengries/-schlamm in der Gallenblase durch Ausfällung von Ceftriaxon-Calcium, was eine Gallenkolik imitieren kann)",
      "C. difficile-assoziierte Diarrhö (hohes Risiko!)",
      "Blutungsneigung (selten, aufgrund der Hemmung der Vitamin-K-Synthese)",
      "Erhöhtes Risiko für Kernikterus bei Neugeborenen (verdrängt Bilirubin aus der Albuminbindung, daher bei Neugeborenen bis zum Alter von 28 Tagen kontraindiziert; stattdessen sollte Cefotaxim verwendet werden!)"
    ],
    "spectrum": {
      "gramPositive": "2",
      "gramNegative": "2",
      "anaerobe": "0",
      "atypical": "0",
      "pseudomonas": "0",
      "other": "Unwirksam gegen Listeria und Enterococcus! Eine gleichzeitige Verabreichung mit calciumhaltigen Lösungen über denselben Infusionsschlauch ist wegen der Gefahr von Ausfällungen verboten!"
    },
    "indications": [
      "Stationäre Behandlung der ambulant erworbenen Pneumonie (CAP) (häufig in Kombination mit einem Makrolid)",
      "Bakterielle Meningitis (Eckpfeiler der empirischen Behandlung bei Erwachsenen ist Ceftriaxon + Vancomycin + Ampicillin)",
      "Sepsis unbekannten Fokus (empirisch)",
      "Gonorrhoe-Infektion (Einmaldosis von 1g i.m. / i.v. einmal täglich)",
      "Neuroborreliose-Stadium der Lyme-Borreliose"
    ],
    "notes": "Aufgrund der einmal täglichen Dosierung eignet es sich auch hervorragend für die ambulante parenterale Antibiotikatherapie (APAT)."
  },
  {
    "id": "ceftazidim",
    "name": "Ceftazidim",
    "abbreviation": "CAZ",
    "brandNames": "Fortum, Ceftazidim Kabi",
    "group": "Cephalosporine der 3. Generation (Pseudomonas-wirksam)",
    "halfLife": "1,5 - 2 Stunden",
    "pae": "Ca. 1 Stunde bei Gram-negativen Erregern, insbesondere Pseudomonas",
    "effectType": "bakterizid",
    "dosage": {
      "adult": "3x täglich 1g - 2g i.v.",
      "pediatric": "100-150 mg/kg/Tag i.v., aufgeteilt in 3 Dosen",
      "renalAdjustment": "GFR < 50 ml/Min: signifikante Dosisanpassung erforderlich, da die Ausscheidung ausschließlich renal erfolgt"
    },
    "mechanismOfAction": "Bakterizid. Bindet stark an das PBP-3-Protein in Gram-negativen Bakterien, insbesondere Pseudomonas aeruginosa. Weniger stabil gegenüber AmpC-Beta-Laktamasen, aber gut resistent gegen andere Beta-Laktamasen.",
    "sideEffects": [
      "Allergische Reaktionen, Phlebitis",
      "Leukopenie, Transaminasenanstieg",
      "Neurotoxizität (Krampfanfälle, Enzephalopathie bei Niereninsuffizienz ohne Dosisreduktion!)"
    ],
    "spectrum": {
      "gramPositive": "0",
      "gramNegative": "2",
      "anaerobe": "0",
      "atypical": "0",
      "pseudomonas": "2",
      "other": "Nicht wirksam gegen MRSA, Enterococcus und Listeria."
    },
    "indications": [
      "Nachgewiesene oder vermutete Pseudomonas-aeruginosa-Infektionen",
      "Empirische Therapie des neutropenischen Fiebers",
      "Systemische Behandlung von nosokomialen Infektionen"
    ],
    "notes": "Die Gram-positive Abdeckung ist unzureichend, weshalb es in der empirischen Sepsis-Therapie selten allein angewendet wird, sondern eher in Kombination mit einem Gram-positiv wirksamen Mittel."
  },
  {
    "id": "cefepime",
    "name": "Cefepim",
    "abbreviation": "FEP",
    "brandNames": "Cefepim Kabi, Maxipime",
    "group": "Cephalosporine der 4. Generation",
    "halfLife": "2 Stunden",
    "pae": "Ca. 1-1,5 Stunden bei Gram-negativen Erregern",
    "effectType": "bakterizid",
    "dosage": {
      "adult": "2- bis 3-mal täglich 1 g - 2 g i.v. (3-mal 2 g bei schwerer Infektion/Verdacht auf Pseudomonas)",
      "pediatric": "100-150 mg/kg/Tag i.v., aufgeteilt in 2-3 Einzeldosen",
      "renalAdjustment": "GFR < 50 ml/Min: strenge Dosisanpassung (Gefahr von Neurotoxizität!)"
    },
    "mechanismOfAction": "Bakterizid. Zwitterionische Struktur, wodurch es extrem schnell durch die Porinkanäle Gram-negativer Bakterien penetriert. Sehr stabil gegenüber chromosomalen AmpC-Beta-Laktamasen und resistent gegen viele plasmidvermittelte Beta-Laktamasen.",
    "sideEffects": [
      "Neurotoxizität: nicht-konvulsiver Status epilepticus, Verwirrtheit, Myoklonus (insbesondere bei Niereninsuffizienz ohne Dosisreduktion!)",
      "Allergische Reaktionen, Durchfall"
    ],
    "spectrum": {
      "gramPositive": "2",
      "gramNegative": "2",
      "anaerobe": "0",
      "atypical": "0",
      "pseudomonas": "2",
      "other": "Es hat eine weitaus bessere Gram-positive Wirkung als Ceftazidim."
    },
    "indications": [
      "Schwere nosokomiale Pneumonie",
      "Febrile Neutropenie (empirische Monotherapie)",
      "Komplizierte intraabdominelle Infektionen (in Kombination mit Metronidazol)",
      "Komplizierte Harnwegsinfektionen, Pyelonephritis"
    ],
    "notes": "Sehr sicher bei angemessener Dosierung entsprechend der Nierenfunktion, jedoch sollte der neurologische Status älterer Patienten mit Niereninsuffizienz überwacht werden."
  },
  {
    "id": "ceftaroline",
    "name": "Ceftarolin-Fosamil",
    "abbreviation": "CPT",
    "brandNames": "Zinforo",
    "group": "Cephalosporine der 5. Generation (Anti-MRSA)",
    "halfLife": "2,5 Stunden",
    "pae": "Ausgeprägt bei Gram-positiven Erregern",
    "effectType": "bakterizid",
    "dosage": {
      "adult": "2x 600 mg i.v. täglich als 1-stündige Infusion (3x 600 mg bei schweren Infektionen oder MRSA-Pneumonie)",
      "pediatric": "8–12 mg/kg KG i.v. alle 8 oder 12 Stunden",
      "renalAdjustment": "GFR < 50 ml/Min: Dosisanpassung erforderlich (z. B. 2x 400 mg)"
    },
    "mechanismOfAction": "Bakterizid. Das einzige Cephalosporin, das mit hoher Affinität an das von MRSA-Stämmen gebildete PBP-2a-Protein binden kann (an das andere Beta-Laktame nicht binden können). Es hemmt auch PBP-2x bei resistenten Streptococcus-pneumoniae-Stämmen.",
    "sideEffects": [
      "Positiver direkter Coombs-Test (in der Regel ohne hämolytische Anämie)",
      "Durchfall, Übelkeit, allergische Hautausschläge"
    ],
    "spectrum": {
      "gramPositive": "2",
      "gramNegative": "2",
      "anaerobe": "0",
      "atypical": "0",
      "pseudomonas": "0",
      "other": "Keine Wirksamkeit gegen Enterococcus faecium und Listeria, kann jedoch eine mäßige Wirksamkeit gegen Enterococcus faecalis aufweisen."
    },
    "indications": [
      "Komplizierte Haut- und Weichgewebeinfektionen (cSSTI), insbesondere bei Verdacht auf MRSA",
      "Ambulant erworbene Pneumonie (CAP), schwere Fälle mit Risiko für multiresistente S. pneumoniae"
    ],
    "notes": "Klinisch äußerst wertvolle Option als einziges Beta-Laktam mit Wirksamkeit gegen MRSA."
  },
  {
    "id": "meropenem",
    "name": "Meropenem",
    "abbreviation": "MEM",
    "brandNames": "Meronem, Meropenem Kabi, Sandoz Meropenem",
    "group": "Carbapeneme",
    "halfLife": "1 Stunde",
    "pae": "Ausgeprägt auch bei Gram-negativen Erregern (1,5-3 Stunden, auch bei Pseudomonas)",
    "effectType": "bakterizid",
    "dosage": {
      "adult": "3x 1g i.v. täglich (bei Meningitis oder schwerer Pseudomonas-Infektion 3x 2g i.v.)",
      "pediatric": "60-120 mg/kg/Tag i.v., aufgeteilt in 3 Einzeldosen",
      "renalAdjustment": "GFR < 50 ml/Min: signifikante Dosisanpassung erforderlich (z. B. 2x 1g oder 2x 500mg)"
    },
    "mechanismOfAction": "Äußerst breitspektriges bakterizides Mittel. Penetriert leicht durch Porine, extrem stabil gegenüber fast allen Beta-Laktamasen (einschließlich ESBLs und AmpC). Bindet stark an PBP-2-, PBP-3- und PBP-4-Proteine.",
    "sideEffects": [
      "Erhöhtes Risiko für Krampfanfälle (jedoch viel geringer als bei Imipenem!)",
      "Überempfindlichkeitsreaktionen (Kreuzreaktivität mit Penicillinen < 1%)",
      "Durchfall, einschließlich C. difficile"
    ],
    "spectrum": {
      "gramPositive": "2",
      "gramNegative": "2",
      "anaerobe": "2",
      "atypical": "0",
      "pseudomonas": "2",
      "other": "Nicht wirksam gegen MRSA, VRE, Listeria und Stenotrophomonas maltophilia! Carbapenemase-bildende (KPC, MBL, OXA-48) Stämme sind resistent!"
    },
    "indications": [
      "Empirische Behandlung von nosokomialer Sepsis und schweren multiresistenten Krankenhausinfektionen",
      "Systemische Infektionen durch ESBL-bildende Enterobacterales (Goldstandard)",
      "Schwere intraabdominelle Infektionen und pelvine Sepsis",
      "Nosokomiale Meningitis"
    ],
    "notes": "Meropenem erfordert keine Zugabe von Cilastatin (im Gegensatz zu Imipenem), da es gegenüber der renalen Dehydropeptidase-I (DHP-I) stabil ist."
  },
  {
    "id": "ertapenem",
    "name": "Ertapenem",
    "abbreviation": "ETP",
    "brandNames": "Invanz",
    "group": "Carbapeneme",
    "halfLife": "4 Stunden (lang, ermöglicht eine einmal tägliche Dosierung!)",
    "pae": "Ausgeprägt bei Gram-negativen Erregern",
    "effectType": "bakterizid",
    "dosage": {
      "adult": "1g einmal täglich i.v. oder i.m.",
      "pediatric": "15 mg/kg i.v. alle 12 Stunden (max. 1 g/Tag)",
      "renalAdjustment": "GFR < 30 ml/Min: reduzierte Dosis (500 mg täglich)"
    },
    "mechanismOfAction": "Bakterizides Carbapenem. Zellwandsynthese-Hemmer. Äußerst stabil gegenüber ESBL- und AmpC-Beta-Laktamasen. Aufgrund seiner chemischen Struktur (polarisierte Seitenkette) kann es die äußere Membran von Pseudomonas aeruginosa und Acinetobacter baumannii nicht durchdringen.",
    "sideEffects": [
      "Kopfschmerzen, Verwirrtheit",
      "Durchfall, Übelkeit",
      "Phlebitis an der Infusionsstelle"
    ],
    "spectrum": {
      "gramPositive": "2",
      "gramNegative": "2",
      "anaerobe": "2",
      "atypical": "0",
      "pseudomonas": "0",
      "other": "Ideal für die ambulante parenterale Antibiotikatherapie (OPAT) bei ESBL-Infektionen aufgrund der einmal täglichen Dosierung."
    },
    "indications": [
      "Häusliche/ambulante Behandlung (OPAT) von komplizierten Harnwegs- oder Weichteilinfektionen durch ESBL-bildende Enterobacterales",
      "Schwere ambulant erworbene intraabdominelle Infektionen",
      "Akute Beckeninfektionen"
    ],
    "notes": "Hervorragendes „Carbapenem-einsparendes“ Carbapenem: hilft, Meropenem für Pseudomonas-Infektionen aufzusparen."
  },
  {
    "id": "gentamicin",
    "name": "Gentamicin",
    "abbreviation": "GEN",
    "brandNames": "Gentamicin Sandoz, Gentamicin Pharmavit",
    "group": "Aminoglykoside",
    "halfLife": "2 - 3 Stunden (bei Niereninsuffizienz extrem verlängert, bis zu 50-100 Stunden!)",
    "pae": "Sehr ausgeprägt (bis zu 3-5 Stunden!), was eine einmal tägliche hochdosierte Verabreichung ermöglicht (ODA - Once Daily Aminoglycoside).",
    "effectType": "bakterizid",
    "dosage": {
      "adult": "Einmal täglich 5-7 mg/kg i.v. Infusion (oder zur Synergie 3-mal täglich 1 mg/kg, z. B. bei Endokarditis)",
      "pediatric": "3-5 mg/kg/Tag i.v. als Einzeldosis oder aufgeteilt in 3 Dosen",
      "renalAdjustment": "Therapeutisches Drug Monitoring (TDM - Serumspiegelmessung) ist obligatorisch, mit strenger Dosis-/Intervallanpassung an die Nierenfunktion!"
    },
    "mechanismOfAction": "Rasche bakterizide Wirkung. Bindet an die bakterielle 30S-Ribosomenuntereinheit, hemmt die Proteinsynthese und führt zum Einbau fehlerhafter Aminosäuren, was auch die Integrität der Zellmembran schädigt. Die Wirkung erfordert einen sauerstoffabhängigen Transport (daher in anaerober Umgebung und gegen anaerobe Bakterien völlig unwirksam!).",
    "sideEffects": [
      "Nephrotoxizität (reversible akute Tubulusnekrose, Risiko erhöht im Alter, bei Dehydratation)",
      "Ototoxizität (irreversible vestibuläre oder cochleäre Schädigung: Schwindel, Hörverlust)",
      "Neuromuskuläre Blockade (kontraindiziert bei Myasthenia gravis!)"
    ],
    "spectrum": {
      "gramPositive": "1",
      "gramNegative": "2",
      "anaerobe": "0",
      "atypical": "0",
      "pseudomonas": "2",
      "other": "Konzentrationsabhängige bakterizide Wirkung (je höher die Spitzenkonzentration, desto schneller die Bakterienabtötung)."
    },
    "indications": [
      "Schwere Gram-negative Sepsis (in empirischer Kombination, z. B. mit Beta-Laktam)",
      "Synergistische Kombination mit Beta-Laktam/Vancomycin bei Enterokokken-, Streptokokken- oder Staphylokokken-Endokarditis",
      "Behandlung von Pest und Tularämie"
    ],
    "notes": "Die Überwachung des Serumspiegels (TDM) ist unerlässlich: Der Talspiegel (Trough-Level) muss vor der nächsten Dosis gemessen werden, um Akkumulation und Toxizität zu vermeiden."
  },
  {
    "id": "amikacin",
    "name": "Amikacin",
    "abbreviation": "AMK",
    "brandNames": "Amikacin Kabi, Likacin",
    "group": "Aminoglykoside",
    "halfLife": "2 - 3 Stunden",
    "pae": "Ausgeprägt (3-5 Stunden)",
    "effectType": "bakterizid",
    "dosage": {
      "adult": "Einmal täglich 15 mg/kg i.v. (oder aufgeteilt in 2 Dosen)",
      "pediatric": "15-20 mg/kg/Tag i.v. einmal täglich",
      "renalAdjustment": "Strikte TDM und Dosisanpassung erforderlich"
    },
    "mechanismOfAction": "Ein halbsynthetisches Derivat von Kanamycin. Es hemmt die bakterielle Proteinsynthese durch Bindung an das 30S-Ribosom. Aufgrund seiner Struktur ist es gegen die meisten Aminoglykosid-modifizierenden Enzyme resistent und behält daher seine Aktivität gegen die Mehrheit der Gentamicin-resistenten Stämme bei.",
    "sideEffects": [
      "Nephrotoxizität (Nierenschädigung)",
      "Ototoxizität (hauptsächlich cochleär: Hörverlust)",
      "Neuromuskuläre Blockade"
    ],
    "spectrum": {
      "gramPositive": "1",
      "gramNegative": "2",
      "anaerobe": "0",
      "atypical": "0",
      "pseudomonas": "2",
      "other": "Auch wirksam gegen zahlreiche atypische Mykobakterien (z. B. Mycobacterium-avium-Komplex) und Mycobacterium tuberculosis."
    },
    "indications": [
      "Schwere, multiresistente gramnegative nosokomiale Infektionen (Sepsis, Pneumonie, Harnwegsinfekt)",
      "Kombinationstherapie bei multiresistenten Pseudomonas-aeruginosa-Infektionen",
      "Kombinationstherapie bei MDR-TB (multiresistente Tuberkulose)"
    ],
    "notes": "Das am stärksten gegen bakterielle Resistenzmechanismen resistente Aminoglykosid."
  },
  {
    "id": "clarithromycin",
    "name": "Clarithromycin",
    "abbreviation": "CLR",
    "brandNames": "Fromilid, Klacid, Klabax",
    "group": "Makrolide",
    "halfLife": "3 - 7 Stunden (zusammen mit dem aktiven Metaboliten länger)",
    "pae": "Ausgeprägt bei Gram-positiven Erregern (2-4 Stunden)",
    "effectType": "bakteriostatisch",
    "dosage": {
      "adult": "2x 250 mg - 500 mg p.o. oder i.v. täglich (Retardform: 1x 500 mg - 1000 mg)",
      "pediatric": "15 mg/kg/Tag p.o. aufgeteilt auf 2 Dosen",
      "renalAdjustment": "GFR < 30 ml/Min: Dosis um die Hälfte reduzieren"
    },
    "mechanismOfAction": "Bakteriostatisch. Bindet an die 23S-rRNA der bakteriellen 50S-Ribosomenuntereinheit und hemmt dadurch die Verlängerung der Peptidkette (Hemmung der Translokation). Hemmt die Proteinsynthese.",
    "sideEffects": [
      "Gastrointestinale Beschwerden (Bauchkrämpfe, Durchfall, metallischer Geschmack - wenn auch milder als bei Erythromycin)",
      "QT-Zeit-Verlängerung (Gefahr von Torsades de Pointes, insbesondere bei Kombination mit anderen QT-verlängernden Arzneimitteln oder bei Hypokaliämie!)",
      "Starke Hemmung des CYP3A4-Enzyms (zahlreiche Arzneimittelwechselwirkungen: erhöht z. B. die Spiegel von Statinen, Carbamazepin, Cyclosporin gefährlich!)",
      "Cholestatische Hepatitis (selten)"
    ],
    "spectrum": {
      "gramPositive": "2",
      "gramNegative": "1",
      "anaerobe": "1",
      "atypical": "2",
      "pseudomonas": "0",
      "other": "Hervorragend gegen Helicobacter pylori. Erstlinienpräparat für den Mycobacterium-avium-Komplex (MAC)."
    },
    "indications": [
      "Ambulant erworbene Pneumonie (bei Verdacht auf atypische Erreger in Kombination mit Ceftriaxon oder als Monotherapie)",
      "Helicobacter-pylori-Eradikation (in Kombination mit Amoxicillin/Metronidazol und PPI)",
      "Leichte Atemwegsinfektionen bei Penicillinallergie",
      "Durch Chlamydien verursachte urogenitale Infektionen (obwohl Azithromycin/Doxycyclin hier gebräuchlicher sind)"
    ],
    "notes": "Hervorragende Gewebe- und intrazelluläre Penetration (erreicht in der Lunge und in Alveolarmakrophagen eine um ein Vielfaches höhere Konzentration als im Serum)."
  },
  {
    "id": "azithromycin",
    "name": "Azithromycin",
    "abbreviation": "AZM",
    "brandNames": "Azibiot, Sumamed, Zitrocin",
    "group": "Makrolide (Azalide)",
    "halfLife": "68 Stunden (extrem lange Halbwertszeit, reichert sich im Gewebe an!)",
    "pae": "Extrem verlängerte Gewebewirkung",
    "effectType": "bakteriostatisch",
    "dosage": {
      "adult": "1x täglich 500 mg für 3 Tage (oder am 1. Tag 500 mg, dann am 2.-5. Tag 250 mg); bei Chlamydien-Urethritis 1 g als Einzeldosis p.o.",
      "pediatric": "10 mg/kg/Tag p.o. für 3 Tage (oder am 1. Tag 10 mg/kg, am 2.-5. Tag 5 mg/kg)",
      "renalAdjustment": "Keine Dosisanpassung bei Niereninsuffizienz erforderlich (Ausscheidung erfolgt hauptsächlich über die Galle)"
    },
    "mechanismOfAction": "Bakteriostatischer Proteinsynthesehemmer (bindet an die 50S-Ribosomenuntereinheit). Lange Geweberetention: reichert sich in Lysosomen und weißen Blutkörperchen an, die es zum Infektionsort transportieren.",
    "sideEffects": [
      "QT-Zeit-Verlängerung (gilt jedoch als etwas sicherer als Clarithromycin)",
      "Gastrointestinale Unverträglichkeit (milder als bei anderen Makroliden)",
      "Otitis / Hörstörung (bei Langzeitanwendung)"
    ],
    "spectrum": {
      "gramPositive": "1",
      "gramNegative": "2",
      "anaerobe": "1",
      "atypical": "2",
      "pseudomonas": "0",
      "other": "Äußerst bequeme Dosierung (eine 3-tägige Kur entspricht einer 7-10-tägigen Standardbehandlung)."
    },
    "indications": [
      "Atypische ambulant erworbene Pneumonie (CAP)",
      "Nicht-gonorrhoische Urethritis / Cervicitis verursacht durch Chlamydia trachomatis (1g stat p.o.)",
      "Erstlinienbehandlung und Prophylaxe von Pertussis (Keuchhusten)",
      "Reisedurchfall (bei Verdacht auf Campylobacter)"
    ],
    "notes": "Minimale Arzneimittelwechselwirkung im Vergleich zu anderen Makroliden, da es das CYP3A4-System nicht wesentlich hemmt."
  },
  {
    "id": "ciprofloxacin",
    "name": "Ciprofloxacin",
    "abbreviation": "CIP",
    "brandNames": "Cifran, Ciprinol, Ciprofloxacin Kabi",
    "group": "Fluorchinolone (2. Generation / Gram-negativ-dominant)",
    "halfLife": "4 Stunden",
    "pae": "Ausgeprägt bei Gram-negativen Erregern (1,5-3 Stunden)",
    "effectType": "bakterizid",
    "dosage": {
      "adult": "p.o.: 2x 250 mg - 750 mg täglich; i.v.: 2x oder 3x 400 mg täglich",
      "pediatric": "Nur bei spezieller Indikation (z. B. Pseudomonas bei Mukoviszidose): 20-30 mg/kg KG/Tag p.o. aufgeteilt in 2 Dosen oder 10-15 mg/kg KG i.v. alle 8 Stunden",
      "renalAdjustment": "GFR < 30 ml/Min: Dosis sollte halbiert werden"
    },
    "mechanismOfAction": "Rasche bakterizide Wirkung. Hemmt die bakteriellen Enzyme DNA-Topoisomerase II (DNA-Gyrase) und DNA-Topoisomerase IV, die für die DNA-Replikation, Transkription und Entwindung der Superhelix erforderlich sind. Dies führt zu DNA-Strangbrüchen und zum Zelltod.",
    "sideEffects": [
      "Schädigung von Sehnen und Bändern (Achillessehnenruptur, Tendinitis - das Risiko steigt bei der Einnahme von Kortikosteroiden oder bei älteren Menschen!)",
      "Theoretisches Risiko einer Aortenaneurysmaruptur (FDA-Warnung)",
      "Neuropsychiatrische Symptome (Schlaflosigkeit, Angstzustände, Halluzinationen, Krampfanfälle)",
      "QT-Zeit-Verlängerung",
      "Phototoxizität (Lichtempfindlichkeit)",
      "Gastrointestinale Beschwerden und C.-difficile-Risiko"
    ],
    "spectrum": {
      "gramPositive": "1",
      "gramNegative": "2",
      "anaerobe": "0",
      "atypical": "1",
      "pseudomonas": "2",
      "other": "Konzentrationsabhängig bakterizid."
    },
    "indications": [
      "Komplizierte Harnwegsinfektionen und akute Pyelonephritis",
      "Gramnegative Urosepsis",
      "Pseudomonas-aeruginosa-Infektionen (insbesondere wenn eine orale Behandlung erforderlich ist)",
      "Prostatitis (chronisch bakteriell - hervorragende Prostatapenetration!)",
      "Reisedurchfall (Shigella, Salmonella, toxische E. coli)"
    ],
    "notes": "Kationen (Calcium, Magnesium, Eisen, Aluminium - Antazida, Milchprodukte) hemmen die Resorption im Darm aufgrund von Chelatbildung!"
  },
  {
    id: "levofloxacin",
    name: "Levofloxacin",
    abbreviation: "LVX",
    brandNames: "Leflox, Levoxa, Tavanic",
    group: "Fluorchinolone (3. Generation / Atemwegs-Fluorchinolone)",
    halfLife: "6 - 8 Stunden (1x tägliche Gabe ist ausreichend)",
    pae: "Ausgeprägt (2-3 Stunden)",
    effectType: "bakterizid",
    dosage: {
      adult: "1x täglich 500 mg - 750 mg p.o. oder i.v.",
      pediatric: "Bei Kindern vermeiden (wegen Knorpelschäden, außer wenn keine Alternative besteht)",
      renalAdjustment: "GFR < 50 ml/min: Dosisanpassung erforderlich"
    },
    mechanismOfAction: "Bakterizid. Hemmt die bakterielle DNA-Gyrase und Topoisomerase IV (aktives L-Isomer von Ofloxacin). Bindet mit viel höherer Affinität an Gram-positive Topoisomerasen als Ciprofloxacin.",
    sideEffects: [
      "Gleiche Chinolon-Nebenwirkungen (Risiko von Tendinitis, Achillessehnenriss)",
      "QT-Zeit-Verlängerung (stärker als bei Ciprofloxacin)",
      "Hypoglykämie / Hyperglykämie (Blutzuckerschwankungen, besonders bei älteren Diabetikern!)"
    ],
    spectrum: {
      gramPositive: 2, // Hervorragende Gram-positive Wirkung, besonders gegen Streptococcus pneumoniae! Daher als 'Atemwegs-Chinolon' bezeichnet.
      gramNegative: 2, // Gute Gram-negative Wirkung
      anaerobe: 1, // Minimale anaerobe Wirkung
      atypical: 2, // Hervorragende atypische Abdeckung!
      pseudomonas: 1, // Wirksam gegen Pseudomonas, aber weniger aktiv als Ciprofloxacin.
      other: "Breitband-Empirika bei schweren Atemwegsinfektionen."
    },
    indications: [
      "Ambulant erworbene Pneumonie (CAP) als Alternative oder Erstlinientherapie (bei schweren Fällen oder Komorbiditäten)",
      "Akute bakterielle Exazerbation der COPD",
      "Akute Pyelonephritis und komplizierte Harnwegsinfektionen"
     ],
    notes: "Die orale Bioverfügbarkeit beträgt fast 99%, daher sind orale und intravenöse Dosen identisch."
   },
  {
    id: "moxifloxacin",
    name: "Moxifloxacin",
    abbreviation: "MXF",
    brandNames: "Avelox, Moxifloxacin Kabi, Vigamox (Augentropfen)",
    group: "Fluorchinolone (4. Generation / Atemwegs- und Anaerobier-wirksame Fluorchinolone)",
    halfLife: "12 Stunden (bequeme 1x tägliche Gabe)",
    pae: "Ausgeprägt (2-3 Stunden)",
    effectType: "bakterizid",
    dosage: {
      adult: "1x täglich 400 mg p.o. oder i.v.",
      pediatric: "Kontraindiziert",
      renalAdjustment: "Keine Dosisanpassung bei Niereninsuffizienz erforderlich (wird hauptsächlich in der Leber metabolisiert und über den Stuhl ausgeschieden!)"
    },
    mechanismOfAction: "Bakterizid. Hemmt DNA-Gyrase und Topoisomerase IV. Seine chemische Struktur (Methoxygruppe an Position C8) verringert die Wahrscheinlichkeit der Resistenzentwicklung und erweitert die Wirkung auf Anaerobier.",
    sideEffects: [
      "QT-Zeit-Verlängerung (unter den Fluorchinolonen verlängert Moxifloxacin die QT-Zeit am stärksten; Vorsicht bei schweren Herzerkrankungen!)",
      "Hepatotoxizität (selten, aber schwere Leberschäden wurden berichtet)",
      "Standard-Chinolon-Nebenwirkungen (ZNS, Sehnenentzündung)"
    ],
    spectrum: {
      gramPositive: 2, // Hervorragende Streptococcus pneumoniae-Wirkung!
      gramNegative: 2, // Gute Gram-negative Wirkung (ABER NICHT für Harnwegsinfektionen, da es kaum über den Urin ausgeschieden wird!)
      anaerobe: 2, // Das einzige Chinolon mit guter Anaerobier-Wirkung (mäßig aktiv gegen B. fragilis)
      atypical: 2, // Hervorragende atypische Wirkung
      pseudomonas: 0, // NICHT wirksam gegen Pseudomonas!
      other: "Da es sich nicht im Urin anreichert, ist es für Harnwegsinfektionen (HWI) strikt kontraindiziert und ungeeignet!"
    },
    indications: [
      "Schwere Formen der ambulanten Pneumonie (CAP)",
      "Akute bakterielle Sinusitis, Exazerbation der chronischen Bronchitis",
      "Komplizierte entzündliche Beckenerkrankungen (PID)",
      "Zweitlinientherapie bei Tuberkulose (MDR-TB)"
    ],
    notes: "Das einzige Chinolon, das aufgrund des Lebermetabolismus nicht für Zystitis oder Pyelonephritis verwendet werden kann."
  },
  {
    id: "doxycycline",
    name: "Doxycyclin",
    abbreviation: "DOX",
    brandNames: "Doxycyclin AL, Tenutan",
    group: "Tetracycline",
    halfLife: "18 - 24 Stunden (lang)",
    pae: "Ausgeprägter bakteriostatischer PAE",
    effectType: "bakteriostatisch",
    dosage: {
      adult: "1. Tag: 1x 200 mg oder 2x 100 mg, dann täglich 1x 100 mg p.o. (bei schweren Fällen täglich 200 mg)",
      pediatric: "Kontraindiziert unter 8 Jahren! (Ausnahme: Rocky-Mountain-Fleckfieber, Milzbrand); über 8 Jahren: 2-4 mg/kg/Tag in 1-2 Dosen",
      renalAdjustment: "Keine Anpassung bei Niereninsuffizienz erforderlich (wird über die Galle/Stuhl als inaktiver Chelatkomplex ausgeschieden)"
    },
    mechanismOfAction: "Bakteriostatisch. Bindet an die bakterielle 30S-Untereinheit des Ribosoms und verhindert die Bindung von Aminoacyl-tRNA an die Akzeptorstelle (A-Stelle), wodurch das Wachstum der Peptidkette gestoppt wird (Hemmung der Proteinsynthese).",
    sideEffects: [
      "Verfärbung der Zähne und Schmelzhypoplasie (kontraindiziert bei Kindern unter 8 Jahren und während der Schwangerschaft aufgrund der Bindung an Kalzium in Knochen und Zähnen!)",
      "Photosensibilisierung (Risiko schwerer Verbrennungen)",
      "Pillen-Ösophagitis (Ösophagusulkus, wenn mit wenig Wasser vor dem Hinlegen eingenommen!)",
      "Gastrointestinale Reizung, Übelkeit, epigastrische Schmerzen",
      "Pseudotumor cerebri (gutartige intrakranielle Druckerhöhung - selten)"
    ],
    spectrum: {
      gramPositive: 1, // Mäßige Wirkung gegen Streptokokken (hohe Resistenz), aber aktiv gegen community MRSA!
      gramNegative: 1, // Eng / mäßig
      anaerobe: 1,
      atypical: 2, // Hervorragende atypische Wirkung (Mycoplasma, Chlamydia, Rickettsia, Coxiella, Borrelia)
      pseudomonas: 0,
      other: "Erstlinientherapie bei Zoonosen (Lyme-Borreliose, Brucellose, Tularämie, Q-Fieber)."
    },
    indications: [
      "Frühes Stadium der Lyme-Borreliose (Erythema migrans) - 2x 100 mg p.o. für 10-14 Tage",
      "Atypische Formen der ambulanten Pneumonie",
      "Chlamydia trachomatis-Urethritis (7 Tage 2x 100 mg)",
      "Systemische Behandlung von Acne vulgaris (niedrige Dosis)",
      "Malariaprophylaxe"
    ],
    notes: "Kann mit Nahrung eingenommen werden, aber kalzium-, eisen-, magnesiumhaltige Nahrungsmittel und Medikamente (Milch, Antazida) hemmen die Aufnahme!"
  },
  {
    id: "vancomycin",
    name: "Vancomycin",
    abbreviation: "VAN",
    brandNames: "Vancomycin Kabi, Vancocin (p.o.)",
    group: "Glykopeptide",
    halfLife: "6 - 8 Stunden (bei Niereninsuffizienz extrem verlängert!)",
    pae: "~1-2 Stunden bei Gram-positiven",
    effectType: "bakterizid",
    dosage: {
      adult: "i.v.: 2x 1000 mg - 1500 mg (oder 15-20 mg/kg alle 8-12 Stunden); p.o.: 4x 125 mg - 500 mg täglich (ausschließlich bei C. difficile-Kolitis!)",
      pediatric: "40 mg/kg/Tag i.v., aufgeteilt in 3-4 Dosen",
      renalAdjustment: "Strenge Dosisanpassung und therapeutisches Drug-Monitoring (TDM) erforderlich basierend auf dem Talspiegel (Zielwert bei schweren Infektionen: 15-20 µg/ml)!"
    },
    mechanismOfAction: "Bakterizid (langsam). Hemmt die Zellwandsynthese, indem es mit hoher Affinität an das D-Ala-D-Ala-Ende der Peptidoglykan-Vorläufer bindet und so die Transpeptidierung und Polymerisation verhindert. (Wirkt an einer anderen Stelle als Beta-Laktame, daher hervorragend gegen MRSA!)",
    sideEffects: [
      "Red-Man-Syndrom: Nicht-immunologische Histaminfreisetzung, die zu Gesichtsrötung, Juckreiz und Hypotonie aufgrund zu schneller i.v.-Gabe führt! Vermeidbar durch langsame Infusion (mindestens 60 Minuten).",
      "Nephrotoxizität (Nierenschäden, besonders in Kombination mit Aminoglykosiden oder Piperacillin oder bei zu hohen Serumspiegeln)",
      "Ototoxizität (selten, hauptsächlich in Kombination mit anderen ototoxischen Substanzen)",
      "Neutropenie (bei langfristiger Behandlung)"
    ],
    spectrum: {
      gramPositive: 2, // Nur gegen Gram-positive Bakterien wirksam! Hervorragend gegen MRSA, Streptokokken, Enterokokken (außer VRE)
      gramNegative: 0, // Vollständig unwirksam gegen Gram-negative (Molekülgröße verhindert den Durchtritt durch die äußere Membranporine!)
      anaerobe: 1, // Hervorragend gegen Clostridioides difficile p.o., aber nicht Erstlinientherapie für andere Anaerobier
      atypical: 0,
      pseudomonas: 0,
      other: "Klassische Standardtherapie bei MRSA-Infektionen."
    },
    indications: [
      "Schwere systemische MRSA-Infektionen (Sepsis, Endokarditis, Osteomyelitis, Pneumonie)",
      "Schwere Clostridioides difficile-Kolitis (NUR ORAL! Oral gegebenes Vancomycin wird nicht absorbiert, wirkt also direkt im Darm. i.v. Vancomycin ist bei C. difficile-Kolitis unwirksam!)",
      "Schwere Gram-positive Infektionen bei Beta-Laktam-Allergie"
    ],
    notes: "i.v. und p.o. Vancomycin dienen aufgrund der fehlenden oralen Absorption zwei völlig unterschiedlichen Indikationen."
  },
  {
    id: "clindamycin",
    name: "Clindamycin",
    abbreviation: "CLI",
    brandNames: "Dalacin, Klimicin",
    group: "Lincosamide",
    halfLife: "2 - 3 Stunden",
    pae: "Ausgeprägt bei Gram-positiven",
    effectType: "bakteriostatisch",
    dosage: {
      adult: "p.o.: 3x oder 4x 300 mg - 450 mg täglich; i.v.: 3x oder 4x 600 mg - 900 mg täglich",
      pediatric: "20-40 mg/kg/Tag p.o. oder i.v., aufgeteilt in 3-4 Dosen",
      renalAdjustment: "Keine Dosisanpassung bei Niereninsuffizienz erforderlich (wird in der Leber metabolisiert)"
    },
    mechanismOfAction: "Bakteriostatischer Proteinsynthese-Hemmer. Bindet an die 50S-Untereinheit des Ribosoms (überlappende Bindungsstelle mit Makroliden). Hemmt auch die Toxinsynthese (z. B. TSST-1 bei Staphylococcus, streptokokkale pyrogene Exotoxine), was klinisch beim toxischen Schocksyndrom sehr wichtig ist!",
    sideEffects: [
      "Clostridioides difficile-assoziierter Durchfall / Pseudomembranöse Kolitis (Clindamycin ist eines der gefährlichsten Medikamente in dieser Hinsicht, da es die normale Darmflora auslöscht!)",
      "Übelkeit, Bauchschmerzen",
      "Allergische Hautausschläge (manchmal schwerwiegend, z. B. DRESS oder Stevens-Johnson-Syndrom)"
    ],
    spectrum: {
      gramPositive: 2, // Gute Gram-positive Wirkung (Streptokokken, MSSA, einige community MRSA-Stämme)
      gramNegative: 0, // Vollständig unwirksam gegen Gram-negative
      anaerobe: 2, // Hervorragende Anaerobier-Wirkung bei Infektionen oberhalb des Zwerchfells (Mundhöhle, Lunge, aber zunehmende Resistenz bei B. fragilis!)
      atypical: 0,
      pseudomonas: 0,
      other: "Hervorragende Gewebe- und Knochenpenetration. Reduziert die Produktion bakterieller Toxine."
    },
    indications: [
      "Haut- und Weichteilinfektionen (insbesondere bei Verdacht auf Anaerobier oder bei Penicillin-Allergie)",
      "Osteomyelitis (aufgrund hervorragender Knochenpenetration)",
      "Aspirationspneumonie und Lungenabszess (oft in Kombination mit Beta-Laktam)",
      "Toxisches Schocksyndrom (TSS) Behandlung zusätzlich zu Ceftriaxon/Penicillin, um die Toxinproduktion zu stoppen!"
    ],
    notes: "Kreuzresistenz kann zwischen Clindamycin und Makroliden auftreten (MLS_B-Phänotyp, getestet mit D-Test)."
  },
  {
    id: "metronidazole",
    name: "Metronidazol",
    abbreviation: "MTZ",
    brandNames: "Klion, Metrogyl, Metronidazol Kabi",
    group: "Nitroimidazole",
    halfLife: "8 Stunden",
    pae: "Ausgeprägt bei Gram-negativen Anaerobiern",
    effectType: "bakterizid",
    dosage: {
      adult: "3x 500 mg p.o. oder i.v. täglich",
      pediatric: "30-40 mg/kg/Tag p.o. oder i.v., aufgeteilt in 3 Dosen",
      renalAdjustment: "Bei schwerer Niereninsuffizienz (GFR < 10) Dosis um 50% reduzieren, wenn mehrmals täglich verabreicht"
    },
    mechanismOfAction: "Schnelle bakterizide Wirkung. Prodrug: Das Enzym Pyruvat-Ferredoxin-Oxidoreduktase (PFOR) anaerober Bakterien reduziert die Nitrogruppe von Metronidazol, wobei reaktive freie Radikale entstehen. Diese Radikale schädigen die bakterielle DNA direkt und verursachen Strangbrüche. Da die Reduktion nur in anaerober Umgebung stattfindet, ist es gegen aerobe Bakterien vollständig unwirksam!",
    sideEffects: [
      "Disulfiram-ähnliche Reaktion bei Alkoholkonsum (Übelkeit, Erbrechen, Flush, Tachykardie - Alkohol ist während und 48 Stunden nach der Behandlung streng verboten!)",
      "Metallischer Geschmack im Mund, belegter Zunge",
      "Periphere Neuropathie, Krampfanfälle, Ataxie (bei langfristiger oder hochdosierter Behandlung)",
      "Übelkeit, Appetitlosigkeit"
    ],
    spectrum: {
      gramPositive: 0, // Unwirksam gegen aerobe Gram-positive!
      gramNegative: 0, // Unwirksam gegen aerobe Gram-negative!
      anaerobe: 2, // Das beste verfügbare Anti-Anaerobier-Mittel! (Goldstandard gegen Bacteroides fragilis, Clostridium, Fusobacterium!)
      atypical: 0,
      pseudomonas: 0,
      other: "Hervorragende antiprotozoale Wirkung (Erstlinientherapie gegen Trichomonas vaginalis, Entamoeba histolytica, Giardia lamblia)."
    },
    indications: [
      "Intraabdominelle Infektionen (Peritonitis, Abszesse - immer in Kombination mit einem Aerobier-Mittel, z. B. Ceftriaxon + Metronidazol!)",
      "Hirnabszess (hervorragende Penetration)",
      "Leichte Fälle von Clostridioides difficile-Kolitis (obwohl orales Vancomycin heute bevorzugt wird)",
      "Trichomoniasis und bakterielle Vaginose",
      "Zahninfektionen (in Kombination mit Spiramycin, z. B. Rovamycine)"
    ],
    notes: "Orales Metronidazol hat fast 100% Bioverfügbarkeit; i.v. und p.o. Dosierung sind äquivalent."
  },
  {
    id: "linezolid",
    name: "Linezolid",
    abbreviation: "LNZ",
    brandNames: "Zyvoxid, Linezolid Kabi",
    group: "Oxazolidinone",
    halfLife: "5 - 7 Stunden",
    pae: "1-2 Stunden bei Gram-positiven",
    effectType: "bakteriostatisch",
    dosage: {
      adult: "2x 600 mg p.o. oder i.v. täglich",
      pediatric: "10 mg/kg p.o. oder i.v. alle 8 oder 12 Stunden",
      renalAdjustment: "Keine Anpassung erforderlich, aber Metaboliten können sich bei Niereninsuffizienz anreichern (Vorsicht, Blutbildkontrolle!)"
    },
    mechanismOfAction: "Bakteriostatisch (bakterizid gegen Streptokokken). Einzigartiger Wirkmechanismus: Bindet an die 23S-rRNA der 50S-Untereinheit des Ribosoms und verhindert die Bildung des funktionellen 70S-Initiationskomplexes (hemmt den ersten Schritt der Translation). Da es in einem frühen Stadium hemmt, gibt es keine Kreuzresistenz mit anderen Proteinsynthese-Hemmern.",
    sideEffects: [
      "Myelosuppression (Thrombozytopenie, Anämie, Leukopenie - besonders bei Behandlung länger als 2 Wochen! Wöchentliche Blutbildkontrolle ist obligatorisch!)",
      "Serotonin-Syndrom (da Linezolid ein schwacher, nicht-selektiver MAO-Hemmer ist. In Kombination mit SSRI/SNRI-Antidepressiva kann es gefährliche Hyperthermie, Tachykardie, Rigidität verursachen!)",
      "Laktatazidose (durch mitochondriale Toxizität bei längerer Anwendung)",
      "Periphere und optische Neuropathie (selten, bei längerer Anwendung, kann zu Sehverlust führen)"
    ],
    spectrum: {
      gramPositive: 2, // Extrem starke Gram-positive Abdeckung: MRSA, VRSA, VRE (Vancomycin-resistente Enterokokken - sowohl faecalis als auch faecium!), PRSP
      gramNegative: 0,
      anaerobe: 1,
      atypical: 0,
      pseudomonas: 0,
      other: "Reserveantibiotikum für multiresistente Gram-positive Infektionen."
    },
    indications: [
      "Bestätigte Vancomycin-resistente Enterokokken (VRE) Infektionen",
      "Nosokomiale Pneumonie durch MRSA (zeigt oft bessere Lungenpenetration als Vancomycin)",
      "Komplizierte Weichteilinfektionen mit MRSA-Verdacht (wenn Vancomycin nicht angewendet werden kann)"
    ],
    notes: "100% orale Bioverfügbarkeit. Tabletten- und Infusionsdosis sind identisch, was den Wechsel von i.v. zu p.o. (Stufentherapie) erleichtert."
  },
  {
    id: "cotrimoxazole",
    name: "Sulfamethoxazol / Trimethoprim (Co-trimoxazol)",
    abbreviation: "SXT",
    brandNames: "Sumetrolim, Cotrimel",
    group: "Sulfonamide und Trimethoprim-Kombination",
    halfLife: "10 Stunden",
    pae: "Mäßig",
    effectType: "bakterizid",
    dosage: {
      adult: "Standarddosis: 2x 960 mg (800 mg Sulfamethoxazol + 160 mg Trimethoprim) p.o. täglich. Bei schweren Pneumocystis-Infektionen sind sehr hohe i.v.-Dosen erforderlich (15-20 mg/kg/Tag basierend auf Trimethoprim, aufgeteilt in 3-4 Dosen).",
      pediatric: "30 mg/kg/Tag Sulfamethoxazol + 6 mg/kg/Tag Trimethoprim p.o. in 2 Dosen",
      renalAdjustment: "GFR < 30 ml/min: Dosis halbieren. GFR < 15 ml/min: Anwendung vermeiden."
    },
    mechanismOfAction: "Bakterizid (synergistische Kombination). Hemmt die bakterielle Folsäuresynthese an zwei verschiedenen Punkten: Sulfamethoxazol hemmt kompetitiv die Dihydropteroat-Synthetase (PABA-Analogon), während Trimethoprim die Dihydrofolat-Reduktase hemmt. Folsäuremangel hemmt die Purin- und DNA-Synthese.",
    sideEffects: [
      "Schwere Hautreaktionen (Stevens-Johnson-Syndrom, toxische epidermale Nekrolyse - selten, aber lebensbedrohlich!)",
      "Hyperkaliämie (Trimethoprim hemmt Natriumkanäle in den Sammelrohren der Niere, ähnlich wie Amilorid, und erhöht den Kaliumspiegel)",
      "Knochenmarksuppression (Folsäuremangelanämie, Leukopenie - kann durch Folsäuregabe gelindert werden)",
      "Falsch-positive Erhöhung des Kreatinin-Spiegels (hemmt die tubuläre Sekretion von Kreatinin in der Niere, ohne die tatsächliche GFR zu verringern)",
      "Kernikterus bei Neugeborenen (kontraindiziert in den letzten Schwangerschaftswochen)"
    ],
    spectrum: {
      gramPositive: 2, // Gute Gram-positive Wirkung, einschließlich community MRSA (CA-MRSA)!
      gramNegative: 2, // Gute Enterobacterales-Abdeckung, aber die Resistenzraten steigen
      anaerobe: 0,
      atypical: 1, // Aktiv gegen Nocardia
      pseudomonas: 0,
      other: "Erstlinientherapie bei Pneumocystis jirovecii (opportunistischer Pilz) und Stenotrophomonas maltophilia. Auch aktiv gegen Toxoplasma gondii."
    },
    indications: [
      "Behandlung und Prophylaxe der Pneumocystis jirovecii-Pneumonie (PCP) (insbesondere bei HIV/AIDS oder immunsupprimierten Patienten)",
      "Unkomplizierte Harnwegsinfektionen (Zystitis), wenn die lokale Resistenz niedrig ist",
      "Leichte bis mittelschwere Hautinfektionen durch CA-MRSA",
      "Nokardiose, Stenotrophomonas-Infektionen"
    ],
    notes: "Patienten sollten angewiesen werden, viel Flüssigkeit zu trinken, um Sulfonamid-Kristallurie zu vermeiden."
  },
  {
    id: "nitrofurantoin",
    name: "Nitrofurantoin",
    abbreviation: "NIT",
    brandNames: "Alpicor, Nitrofurantoin-Richter",
    group: "Nitrofuran-Derivate",
    halfLife: "20 - 30 Minuten (extrem kurz systemisch, aber hohe Konzentrationen im Urin)",
    pae: "Kein signifikanter systemischer PAE",
    effectType: "bakterizid",
    dosage: {
      adult: "2x 100 mg p.o. täglich (retardiert) oder 4x 50 mg - 100 mg p.o. für 5-7 Tage",
      pediatric: "5-7 mg/kg/Tag p.o., aufgeteilt in 4 Dosen (ab 1 Monat)",
      renalAdjustment: "Kontraindiziert bei GFR < 30 ml/min! Verursacht keine Niereninsuffizienz, aber in solchen Fällen kann es nicht über den Urin ausgeschieden werden, wodurch es in der Blase unwirksam wird, während es sich systemisch anreichert und Toxizität verursacht!"
    },
    mechanismOfAction: "Bakterizid. Bakterielle Nitroreduktasen wandeln Nitrofurantoin in reaktive Intermediate um, die bakterielle ribosomale Proteine, DNA, RNA und die Atmung angreifen. Aufgrund mehrerer Ziele fällt es Bakterien sehr schwer, Resistenzen zu entwickeln.",
    sideEffects: [
      "Gastrointestinale Beschwerden (Übelkeit, Erbrechen - sehr häufig)",
      "Lungentoxizität: akute Überempfindlichkeits-Pneumonitis (Fieber, Dyspnoe, Infiltrate) oder chronische Lungenfibrose (bei monate- bis jahrelanger Einnahme!)",
      "Periphere Neuropathie (besonders bei eingeschränkter Nierenfunktion)",
      "Hepatotoxizität (chronische aktive Hepatitis)"
    ],
    spectrum: {
      gramPositive: 2, // Gut gegen E. faecalis, E. faecium (einschließlich einiger VRE-Stämme!), Staphylococcus saprophyticus
      gramNegative: 2, // Gut gegen E. coli (Proteus, Pseudomonas, Serratia sind resistent!)
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 0,
      other: "Reichert sich nur in der Blase an. Vollständig ungeeignet für systemische Infektionen (z. B. Pyelonephritis, Sepsis)!"
    },
    indications: [
      "Erstlinientherapie bei akuter unkomplizierter unterer Harnwegsinfektion (Zystitis) bei Frauen",
      "Langfristige niedrigdosierte Prophylaxe bei wiederkehrenden Harnwegsinfektionen"
    ],
    notes: "Eines der nützlichsten Mittel bei akuter Zystitis aufgrund minimaler Resistenz."
  },
  {
    id: "fosfomycin",
    name: "Fosfomycin Trometamol",
    abbreviation: "FOS",
    brandNames: "Monural, Fosfomycin Sandoz",
    group: "Sonstige Antibiotika (Epoxid-Derivate)",
    halfLife: "4-5 Stunden (bleibt aber 36-48 Stunden im Urin auf therapeutischer Konzentration!)",
    pae: "Ausgeprägt im Urin",
    effectType: "bakterizid",
    dosage: {
      adult: "Einmalig 3 g p.o. Granulat, in Wasser aufgelöst, nüchtern, vor dem Schlafengehen (nach Entleerung der Blase)",
      pediatric: "In Ungarn wird diese Form für Kinder unter 12 Jahren allgemein nicht empfohlen",
      renalAdjustment: "Auch als Einmaldosis nicht empfohlen bei schwerer Niereninsuffizienz (GFR < 10 ml/min)"
    },
    mechanismOfAction: "Schnelle bakterizide Wirkung. Hemmt den ersten Schritt der bakteriellen Zellwandsynthese: irreversibel hemmt das Enzym UDP-N-Acetylglucosamin-Enolpyruvyl-Transferase (MurA). Aufgrund des einzigartigen Ziels gibt es keine Kreuzresistenz mit anderen Antibiotika.",
    sideEffects: [
      "Bauchbeschwerden, leichter Durchfall",
      "Kopfschmerzen, Schwindel",
      "Vaginitis"
    ],
    spectrum: {
      gramPositive: 2, // Gut gegen Enterokokken (einschließlich VRE!) und Staphylokokken
      gramNegative: 2, // Hervorragend gegen E. coli (einschließlich ESBL-Bildner!), Citrobacter, Klebsiella
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 1, // Mäßig gegen Pseudomonas (systemische Form in Kombination verwendet; orale Einmaldosis unzureichend für Pseudomonas-Zystitis)
      other: "Orales Trometamol-Salz ist nur für unkomplizierte Zystitis geeignet."
    },
    indications: [
      "Akute unkomplizierte Zystitis bei Frauen (Einmaldosis von 3 g ist extrem praktisch, fast 100% Compliance!)",
      "Prophylaxe bei diagnostischen urologischen Eingriffen"
    ],
    notes: "Muss nüchtern eingenommen werden, da Nahrung die Aufnahme deutlich verringert. Intravenöse Form (Fosfomycin-Natrium) existiert ebenfalls für schwere systemische multiresistente Infektionen als Kombinationspartner."
  },
  {
    id: "ampicillin",
    name: "Ampicillin",
    abbreviation: "AMP",
    brandNames: "Standacillin, Ampicillin Sandoz",
    group: "Aminopenicilline (Breitband-Penicilline)",
    halfLife: "1-1,5 Stunden",
    pae: "1,5-2 Stunden bei Gram-positiven, minimal bei Gram-negativen",
    effectType: "bakterizid",
    dosage: {
      adult: "2-12 g/Tag i.v., aufgeteilt in 4-6 Dosen (12 g/Tag bei schweren Infektionen)",
      pediatric: "100-200 mg/kg/Tag i.v., aufgeteilt in 4-6 Dosen",
      renalAdjustment: "GFR < 30 ml/min: Dosisreduktion oder verlängertes Dosierungsintervall (z. B. alle 12 Stunden)"
    },
    mechanismOfAction: "Bakterizid. Hemmt die bakterielle Zellwandsynthese durch Bindung an Penicillin-bindende Proteine (PBPs), was die Transpeptidierung hemmt.",
    sideEffects: [
      "Allergische Hautausschläge (besonders bei Mononukleose)",
      "Gastrointestinale Beschwerden",
      "Eosinophilie",
      "Interstitielle Nephritis"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 1,
      anaerobe: 1,
      atypical: 0,
      pseudomonas: 0,
      other: "Erstlinientherapie bei Listeria monocytogenes und Enterococcus faecalis."
    },
    indications: [
      "Listeria monocytogenes-Meningitis (in Kombination mit Gentamicin)",
      "Enterococcus faecalis-Endokarditis/Sepsis (in Kombination mit Ceftriaxon oder Gentamicin)",
      "Parenterale Behandlung von leichten bis mittelschweren Atemwegs- und Harnwegsinfektionen"
    ],
    notes: "Schlechtere orale Bioverfügbarkeit im Vergleich zu Amoxicillin, daher wird es meist parenteral (i.v.) verwendet."
  },
  {
    id: "ampicillin_sulbactam",
    name: "Ampicillin / Sulbactam",
    abbreviation: "SAM",
    brandNames: "Unasyn",
    group: "Penicilline kombiniert mit Beta-Laktamase-Hemmern",
    halfLife: "~1 Stunde",
    pae: "1,5-2 Stunden bei Gram-positiven",
    effectType: "bakterizid",
    dosage: {
      adult: "3-12 g/Tag i.v. (Ampicillin + Sulbactam), aufgeteilt in 3-4 Dosen (z. B. 4x 3 g oder 3x 1,5-3 g)",
      pediatric: "150-300 mg/kg/Tag i.v., aufgeteilt in 3-4 Dosen",
      renalAdjustment: "GFR < 30 ml/min: Dosierungsintervall auf 12-24 Stunden verlängern"
    },
    mechanismOfAction: "Bakterizid. Ampicillin hemmt die Zellwandsynthese, während Sulbactam ein Beta-Laktamase-Hemmer ist, der Ampicillin vor dem Abbau durch die häufigsten plasmidvermittelten Beta-Laktamasen (Ambler Klasse A) schützt.",
    sideEffects: [
      "Schmerzen an der Injektionsstelle",
      "Durchfall",
      "Erhöhte Leberenzyme",
      "Überempfindlichkeit"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 2,
      anaerobe: 2,
      atypical: 0,
      pseudomonas: 0,
      other: "Sulbactam-Komponente hat bei hohen Dosen intrinsische Aktivität gegen Acinetobacter baumannii!"
    },
    indications: [
      "Intraabdominelle Infektionen",
      "Gynäkologische entzündliche Beckenerkrankungen",
      "Acinetobacter baumannii-Infektionen (mit hochdosiertem Sulbactam)",
      "Bisswunden und Aspirationspneumonie"
    ],
    notes: "In Ungarn ist Unasyn die bekannteste parenterale Kombination in dieser Gruppe."
  },
  {
    id: "flucloxacillin",
    name: "Flucloxacillin",
    abbreviation: "FLU",
    brandNames: "Floxapen (im Ausland)",
    group: "Isoxazolyl-Penicilline (Beta-Laktamase-resistente Penicilline)",
    halfLife: "45-60 Minuten",
    pae: "1,5-2 Stunden bei Gram-positiven",
    effectType: "bakterizid",
    dosage: {
      adult: "4x 500 mg - 1000 mg p.o. oder i.v. (nüchtern)",
      pediatric: "50-100 mg/kg/Tag, aufgeteilt in 4 Dosen",
      renalAdjustment: "Bei schwerer Niereninsuffizienz (GFR < 10 ml/min): max. 4x 1 g täglich"
    },
    mechanismOfAction: "Bakterizid. Säurestabil und Beta-Laktamase-resistent. Die Isoxazolyl-Seitenkette behindert sterisch den Zugang der Beta-Laktamase-Enzyme zum Beta-Laktam-Ring.",
    sideEffects: [
      "Hepatotoxizität (cholestatische Hepatitis - selten, aber charakteristisch)",
      "Gastrointestinale Beschwerden",
      "Überempfindlichkeit"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 0,
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 0,
      other: "Besonders hervorragend gegen Staphylococcus aureus (MSSA) und Streptokokken. Unwirksam gegen MRSA."
    },
    indications: [
      "Haut- und Weichteilinfektionen (Cellulitis, Impetigo, Follikulitis)",
      "Osteomyelitis und Arthritis (durch Staphylococcus verursacht)",
      "Staphylococcus-Endokarditis und Sepsis"
    ],
    notes: "In Ungarn nur über Sonderimport erhältlich, aber in Westeuropa (z. B. Großbritannien) ein Erstlinien-Basisarzneimittel gegen Staphylococcus-Infektionen."
  },
  {
    id: "piperacillin",
    name: "Piperacillin",
    abbreviation: "PIP",
    brandNames: "Piperacillin (selten als Monotherapie)",
    group: "Ureidopenicilline (Pseudomonas-wirksame Penicilline)",
    halfLife: "1 Stunde",
    pae: "Kurz (<1 Stunde) bei Gram-negativen",
    effectType: "bakterizid",
    dosage: {
      adult: "3x oder 4x 4 g i.v. Infusion",
      pediatric: "100-300 mg/kg/Tag i.v., aufgeteilt in 3-4 Dosen",
      renalAdjustment: "GFR < 20 ml/min: Dosisreduktion (z. B. auf 2x oder 3x 2 g)"
    },
    mechanismOfAction: "Bakterizid. Breitband-Penicillin mit erweiterter Wirkung gegen Gram-negative Bakterien, einschließlich Pseudomonas aeruginosa, durch Hemmung der Zellwandsynthese (Hemmung von PBP-3 und PBP-1a).",
    sideEffects: [
      "Überempfindlichkeitsreaktionen",
      "Erhöhte Leberenzyme",
      "Blutungsneigung (bei hohen Dosen hemmt es die Thrombozytenaggregation)",
      "Hypokaliämie"
    ],
    spectrum: {
      gramPositive: 1,
      gramNegative: 2,
      anaerobe: 1,
      atypical: 0,
      pseudomonas: 2,
      other: "Wird leicht von Beta-Laktamase-produzierenden Stämmen abgebaut, daher selten als Monotherapie; nur in Kombination."
    },
    indications: [
      "Schwere Pseudomonas aeruginosa-Infektionen als Teil einer Kombinationstherapie",
      "Nosokomiale Infektionen",
      "Fieber bei Neutropenie (in Kombination mit Aminoglykosid)"
    ],
    notes: "Monotherapie wurde fast vollständig durch die Piperacillin/Tazobactam-Kombination ersetzt."
  },
  {
    id: "oxacillin",
    name: "Oxacillin",
    abbreviation: "OXA",
    brandNames: "Oxacillin",
    group: "Isoxazolyl-Penicilline (Beta-Laktamase-resistente Penicilline)",
    halfLife: "30-45 Minuten",
    pae: "Ausgeprägt bei Gram-positiven",
    effectType: "bakterizid",
    dosage: {
      adult: "1-2 g i.v. alle 4-6 Stunden (4-12 g/Tag bei septischen Fällen)",
      pediatric: "100-200 mg/kg/Tag i.v., aufgeteilt in 4-6 Dosen",
      renalAdjustment: "Leichte Dosisanpassung kann bei schwerer Niereninsuffizienz erforderlich sein"
    },
    mechanismOfAction: "Bakterizid. Hemmt die bakterielle Zellwandsynthese durch Bindung an PBPs. Strukturell resistent gegen das Beta-Laktamase (Penicillinase)-Enzym von Staphylococcus.",
    sideEffects: [
      "Allergische Reaktionen",
      "Interstitielle Nephritis",
      "Leberfunktionsstörung (erhöhte Transaminasen)",
      "Neutropenie (bei langfristiger Behandlung)"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 0,
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 0,
      other: "Wirksam nur gegen methicillin-empfindliche Staphylokokken (MSSA) und Streptokokken."
    },
    indications: [
      "Schwere systemische Staphylococcus aureus (MSSA)-Infektionen",
      "Endokarditis, Osteomyelitis, Sepsis",
      "Haut- und Weichteilinfektionen"
    ],
    notes: "Ähnlich wie Nafcillin und Cloxacillin. Oxacillin-Empfindlichkeit wird in MRSA-Resistenzstudien getestet."
  },
  {
    id: "temocillin",
    name: "Temocillin",
    abbreviation: "TEM",
    brandNames: "Negaban",
    group: "Beta-Laktamase-stabile Penicilline (Gram-negatives Spektrum)",
    halfLife: "4,5 - 5 Stunden (bei Niereninsuffizienz deutlich verlängert)",
    pae: "Moderat bei gramnegativen Erregern (z. B. Enterobacteriaceae, ca. 1-2 Stunden)",
    effectType: "bakterizid",
    dosage: {
      adult: "4 g i.v. täglich (z. B. 2x 2 g oder als kontinuierliche Infusion); bei schweren Infektionen 6 g täglich (3x 2 g)",
      pediatric: "100-150 mg/kg/Tag i.v., aufgeteilt in 2-3 Einzeldosen",
      renalAdjustment: "GFR 30-60 ml/min: 2 g einmal täglich; GFR 10-30 ml/min: 1 g einmal täglich; GFR < 10 ml/min: 1 g alle 48 Stunden"
    },
    mechanismOfAction: "Bakterizid. Hemmt die bakterielle Zellwandsynthese durch selektive Bindung an Penicillin-Bindeproteine (hauptsächlich PBP-3). Die 6-Alpha-Methoxy-Gruppe schützt den Wirkstoff vor der Hydrolyse durch die meisten Beta-Laktamasen, was ihn außergewöhnlich stabil gegenüber ESBL (Extended-Spectrum Beta-Laktamase) und AmpC-Enzymen macht. Er ist auch resistent gegen klassische Penicillinasen, wird jedoch von Carbapenemasen (KPC, Metallo-Beta-Laktamasen) abgebaut.",
    sideEffects: [
      "Überempfindlichkeitsreaktionen (Hautausschlag, Anaphylaxie)",
      "Lokale Reaktionen (Phlebitis an der Infusionsstelle)",
      "Gastrointestinale Beschwerden (Durchfall, Übelkeit)",
      "Neurotoxizität bei hohen Dosen (Krampfanfälle, insbesondere bei Niereninsuffizienz)",
      "Natriumüberladung (jedes Gramm Temocillin enthält ca. 4,5 mmol Natrium!)"
    ],
    spectrum: {
      gramPositive: 0,
      gramNegative: 2,
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 0,
      other: "Unwirksam gegen grampositive Bakterien, Anaerobier, Pseudomonas aeruginosa und Acinetobacter spp. Wird selektiv zur Behandlung von Beta-Laktamase-produzierenden (ESBL, AmpC) Enterobacteriaceae im Rahmen einer Carbapenem-sparenden Strategie eingesetzt."
    },
    indications: [
      "Komplizierte Harnwegsinfektionen (cUTI, Pyelonephritis)",
      "Harnwegsbedingte Sepsis (Urosepsis)",
      "Untere Atemwegsinfektionen (wenn nachweislich durch gramnegative Erreger verursacht)",
      "Haut- und Weichteilinfektionen, Wundinfektionen (bei Vorliegen gramnegativer Erreger)"
    ],
    notes: "Eine hervorragende 'Carbapenem-sparende' Alternative bei schweren systemischen Infektionen durch ESBL- und AmpC-produzierende Enterobacteriaceae, sofern Pseudomonas aeruginosa ausgeschlossen ist."
  },
  {
    id: "pivmecillinam",
    name: "Pivmecillinam",
    abbreviation: "PIV",
    brandNames: "Selexid",
    group: "Amdinocilline (Harnwegs-spezifische Penicilline)",
    halfLife: "1 Stunde",
    pae: "Mäßig bei Gram-negativen",
    effectType: "bakterizid",
    dosage: {
      adult: "3x 200 mg - 400 mg p.o. zu den Mahlzeiten, mit viel Flüssigkeit",
      pediatric: "In Ungarn wird diese Form für Kinder seltener verwendet",
      renalAdjustment: "GFR < 30 ml/min: Dosisreduktion empfohlen"
    },
    mechanismOfAction: "Bakterizid. Prodrug, das im Körper zu Mecillinam (Amdinocillin) umgewandelt wird. Bindet spezifisch an PBP-2, was dazu führt, dass Gram-negative Bakterien kugelförmig werden (Sphäroplastenbildung) und lysieren.",
    sideEffects: [
      "Übelkeit, Verdauungsstörungen",
      "Ösophagusreizung/-ulkus (wenn nicht mit ausreichend Flüssigkeit eingenommen)",
      "Karnitin-Mangel (langfristige Anwendung ist kontraindiziert!)"
    ],
    spectrum: {
      gramPositive: 0,
      gramNegative: 2,
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 0,
      other: "Besonders hervorragend gegen Enterobacterales (E. coli, Klebsiella, Proteus) im Urin. Einige ESBL-Bildner sind ebenfalls empfindlich bei Urinkonzentrationen!"
    },
    indications: [
      "Erstlinientherapie bei akuter unkomplizierter Zystitis (Blasenentzündung)",
      "Prävention von Harnwegsinfektionen"
    ],
    notes: "Muss zu den Mahlzeiten und mit viel Flüssigkeit im Sitzen oder Stehen eingenommen werden. Langfristige Anwendung ist aufgrund des Risikos eines Karnitin-Mangels verboten."
  },
  {
    id: "cephalexin",
    name: "Cephalexin",
    abbreviation: "LEX",
    brandNames: "Pyassan, Cephalexin (im Ausland Keflex)",
    group: "Cephalosporine der 1. Generation",
    halfLife: "1 Stunde",
    pae: "Ausgeprägt bei Gram-positiven",
    effectType: "bakterizid",
    dosage: {
      adult: "2-4x 250 mg - 500 mg p.o. täglich (max. 4 g/Tag)",
      pediatric: "25-50 mg/kg/Tag p.o., aufgeteilt in 3-4 Dosen",
      renalAdjustment: "GFR < 30 ml/min: Dosisreduktion oder längeres Intervall"
    },
    mechanismOfAction: "Bakterizid. Hemmt die bakterielle Zellwandsynthese durch Bindung an PBPs.",
    sideEffects: [
      "Gastrointestinale Beschwerden",
      "Leichte Hautausschläge",
      "Eosinophilie"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 1,
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 0,
      other: "Gute Gram-positive Wirkung (Streptokokken, MSSA). Begrenzte Gram-negative Wirkung (E. coli, Klebsiella, Proteus)."
    },
    indications: [
      "Leichte Haut- und Weichteilinfektionen",
      "Unkomplizierte Zystitis",
      "Infektionen der oberen Atemwege (bei Penicillin-Überempfindlichkeit)"
    ],
    notes: "Cephalosporin der 1. Generation mit hervorragender oraler Absorption."
  },
  {
    id: "cefoxitin",
    name: "Cefoxitin",
    abbreviation: "FOX",
    brandNames: "Mefoxin (im Ausland)",
    group: "Cephalosporine der 2. Generation (Cephamycine)",
    halfLife: "45-60 Minuten",
    pae: "Mäßig",
    effectType: "bakterizid",
    dosage: {
      adult: "3x oder 4x 1-2 g i.v. täglich",
      pediatric: "80-160 mg/kg/Tag i.v. auf 4-6 Gaben verteilt",
      renalAdjustment: "GFR < 50 ml/min: Dosisanpassung erforderlich"
    },
    mechanismOfAction: "Bakterizid. Ein Cephamycin-Derivat, das beta-Laktamase-stabil ist und auch gegen einige ESBL-Enzyme resistent ist.",
    sideEffects: [
      "Lokale Thrombophlebitis",
      "Allergische Reaktionen",
      "Durchfall"
    ],
    spectrum: {
      gramPositive: 1,
      gramNegative: 2,
      anaerobe: 2,
      atypical: 0,
      pseudomonas: 0,
      other: "Hervorragende anaerobe Wirkung (auch gegen Bacteroides fragilis!) und beta-Laktamase-stabile Gram-negativ-Wirkung."
    },
    indications: [
      "Chirurgische Prophylaxe (insbesondere bei Becken-, Darm- und gynäkologischen Operationen)",
      "Intraabdominelle Infektionen",
      "Entzündliche Beckenerkrankung (PID)"
    ],
    notes: "In Laboren wird die Cefoxitin-Scheibe zum Nachweis von MRSA-Resistenz verwendet, da sie zuverlässig das Vorhandensein des mecA-Gens anzeigt."
  },
  {
    id: "cefaclor",
    name: "Cefaclor",
    abbreviation: "CEC",
    brandNames: "Ceclor, Vercef",
    group: "Cephalosporine der 2. Generation",
    halfLife: "30-60 Minuten",
    pae: "1-2 Stunden bei grampositiven Bakterien",
    effectType: "bakterizid",
    dosage: {
      adult: "3x 250 mg - 500 mg p.o. täglich, oder 2x 375 mg - 750 mg Retardtablette",
      pediatric: "20-40 mg/kg/Tag p.o. auf 3 Gaben verteilt",
      renalAdjustment: "Dosisreduktion bei schwerer Niereninsuffizienz (GFR < 10)"
    },
    mechanismOfAction: "Bakterizid. Hemmt die Zellwandsynthese durch Bindung an PBPs. Stabiler gegenüber Gram-negativen beta-Laktamasen als Substanzen der 1. Generation.",
    sideEffects: [
      "Gastrointestinale Beschwerden",
      "Serumkrankheitsähnliche Reaktion (Fieber, Gelenkschmerzen, Hautausschlag - besonders bei Kindern)",
      "Allergie"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 1,
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 0,
      other: "Mäßige Wirkung gegen Haemophilus influenzae, Moraxella catarrhalis und Enterobacterales."
    },
    indications: [
      "Infektionen der oberen und unteren Atemwege (Otitis media, Sinusitis, Tonsillitis, Bronchitis)",
      "Leichte Haut- und Weichteilinfektionen",
      "Unkomplizierte Harnwegsinfektionen"
    ],
    notes: "Ein besonders in der Pädiatrie beliebtes oral einzunehmendes Cephalosporin."
  },
  {
    id: "cefotaxime",
    name: "Cefotaxim",
    abbreviation: "CTX",
    brandNames: "Cefotaxim Kabi, Sandoz Cefotaxim",
    group: "Cephalosporine der 3. Generation (Gram-negativ dominiert)",
    halfLife: "1 Stunde",
    pae: "Minimal bei gramnegativen Bakterien",
    effectType: "bakterizid",
    dosage: {
      adult: "3x oder 4x 1-2 g i.v. täglich (bei schweren Infektionen bis zu 12 g/Tag)",
      pediatric: "100-200 mg/kg/Tag i.v. auf 3-4 Gaben verteilt",
      renalAdjustment: "GFR < 20 ml/min: reduzierte Dosis (z. B. halbe Dosis oder alle 12 Stunden)"
    },
    mechanismOfAction: "Bakterizid. Hervorragende Penetration der gramnegativen Zellwand und Bindung an PBP-3. Sein aktiver Metabolit wirkt synergistisch mit der Muttersubstanz.",
    sideEffects: [
      "Allergische Reaktionen",
      "Durchfall (Risiko für C. difficile)",
      "Leukopenie, Eosinophilie"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 2,
      anaerobe: 1,
      atypical: 0,
      pseudomonas: 0,
      other: "Hervorragende Wirkung gegen Streptokokken, Neisseria meningitidis und Enterobacterales."
    },
    indications: [
      "Bakterielle Meningitis (insbesondere bei Neugeborenen, da es im Gegensatz zu Ceftriaxon keinen Kernikterus verursacht!)",
      "Sepsis",
      "Schwere Lungen- und Harnwegsinfektionen",
      "Spontan bakterielle Peritonitis (SBP)"
    ],
    notes: "Ähnlich wie Ceftriaxon, aber mit kürzerer Halbwertszeit, daher 3-4-mal täglich zu geben. In der Neonatologie absolut bevorzugt."
  },
  {
    id: "cefixime",
    name: "Cefixim",
    abbreviation: "CFM",
    brandNames: "Suprax",
    group: "Cephalosporine der 3. Generation (oral)",
    halfLife: "3-4 Stunden",
    pae: "Mäßig",
    effectType: "bakterizid",
    dosage: {
      adult: "1x 400 mg p.o. oder 2x 200 mg p.o. täglich",
      pediatric: "8 mg/kg/Tag p.o. als Suspension, auf 1 oder 2 Gaben verteilt",
      renalAdjustment: "GFR < 20 ml/min: reduzierte Dosis (z. B. 200 mg täglich)"
    },
    mechanismOfAction: "Bakterizid. Hemmt die Zellwandsynthese durch Bindung an PBPs. Stabil gegenüber den häufigsten Gram-negativen beta-Laktamasen.",
    sideEffects: [
      "Durchfall (sehr häufig)",
      "Übelkeit, Bauchschmerzen",
      "Überempfindlichkeit"
    ],
    spectrum: {
      gramPositive: 1,
      gramNegative: 2,
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 0,
      other: "Hervorragende Gram-negativ-Wirkung für ein orales Präparat. Gut gegen Streptokokken, aber schwach gegen MSSA!"
    },
    indications: [
      "Komplizierte oder rezidivierende Harnwegsinfektionen",
      "Otitis media, Sinusitis, Tonsillitis (wenn Erstlinientherapeutika unwirksam sind)",
      "Unkomplizierte Gonorrhoe (einmalig 400 mg)"
    ],
    notes: "Das bekannteste und am weitesten verschriebene orale Cephalosporin der 3. Generation in Ungarn."
  },
{
  id: "cefoperazone",
  name: "Cefoperazone",
  abbreviation: "CFP",
  brandNames: "Cefobid (im Ausland, kombiniert mit Sulbactam: Sulperazon)",
  group: "Cephalosporine der 3. Generation (anti-Pseudomonas)",
  halfLife: "2 Stunden",
  pae: "Mäßig gegen gramnegative Bakterien",
  effectType: "bakterizid",
  dosage: {
    adult: "2-4 g i.v. oder i.m. täglich, auf 2 Dosen verteilt",
    pediatric: "50-200 mg/kg/Tag i.v. auf 2-4 Dosen verteilt",
    renalAdjustment: "Bei Nierenfunktionsstörung ist keine Dosisanpassung erforderlich, da die Ausscheidung über die Galle erfolgt!"
  },
  mechanismOfAction: "Bakterizid. Hemmt die bakterielle Zellwandsynthese. Auch gegen Pseudomonas wirksam.",
  sideEffects: [
    "Disulfiramähnliche Reaktion bei Alkoholkonsum",
    "Hypoprothrombinämie und Blutungsneigung (Hemmung der Vitamin-K-Synthese)",
    "Durchfall (erhebliche biliäre Ausscheidung)"
  ],
  spectrum: {
    gramPositive: 1,
    gramNegative: 2,
    anaerobe: 1,
    atypical: 0,
    pseudomonas: 2,
    other: "Wirksam gegen Pseudomonas aeruginosa, aber weniger stabil gegenüber Beta-Laktamasen als Ceftazidim."
  },
  indications: [
    "Infektionen durch Pseudomonas aeruginosa",
    "Infektionen der Gallenwege (es werden sehr hohe Konzentrationen in der Galle erreicht!)",
    "Schwere gramnegative Sepsis"
  ],
  notes: "In der klinischen Praxis wird es vor allem in Kombination mit Sulbactam (Sulperazon) verwendet."
},
{
  id: "cefepime_tazobactam",
  name: "Cefepim / Tazobactam",
  abbreviation: "FEP-TAN",
  brandNames: "Cefepime/Tazobactam (im Ausland)",
  group: "Kombinationen aus Cephalosporin der 4. Generation und Beta-Laktamase-Inhibitor",
  halfLife: "ca. 2 Stunden",
  pae: "Mäßig",
  effectType: "bakterizid",
  dosage: {
    adult: "2x oder 3x 2 g / 0.25 g i.v. täglich",
    pediatric: "150 mg/kg/Tag i.v. auf 3 Dosen verteilt",
    renalAdjustment: "GFR < 50 ml/min: reduzierte Dosis und längeres Dosierungsintervall empfohlen"
  },
  mechanismOfAction: "Bakterizid. Cefepim der 4. Generation ist gegen AmpC-Beta-Laktamasen resistent, während Tazobactam ESBL-Enzyme hemmt, wodurch die Kombination hervorragend gegen multiresistente gramnegative Bakterien wirkt.",
  sideEffects: [
    "Neurotoxizität (Krampfanfälle, Enzephalopathie - besonders bei Nierenfunktionsstörung!)",
    "Durchfall",
    "Erhöhte Leberfunktionswerte"
  ],
  spectrum: {
    gramPositive: 2,
    gramNegative: 2,
    anaerobe: 1,
    atypical: 0,
    pseudomonas: 2,
    other: "Speziell gegen ESBL-bildende und AmpC-überproduzierende Enterobacterales-Stämme sowie gegen Pseudomonas aeruginosa entwickelt."
  },
  indications: [
    "Schwere nosokomiale Infektionen",
    "Nosokomiale Pneumonie",
    "Komplizierte intraabdominelle Infektionen",
    "Empirische Behandlung der febrilen Neutropenie"
  ],
  notes: "Eine neue Waffe gegen gramnegative Resistenz."
},
{
  id: "cefepime_enmetazobactam",
  name: "Cefepim / Enmetazobactam",
  abbreviation: "FEP-ANM",
  brandNames: "Exblifep",
  group: "Kombinationen aus Cephalosporin der 4. Generation und Beta-Laktamase-Inhibitor",
  halfLife: "ca. 2-2.5 Stunden",
  pae: "Ausgeprägt gegen gramnegative Bakterien",
  effectType: "bakterizid",
  dosage: {
    adult: "3x 2 g / 0.5 g i.v. täglich (als 4-stündige verlängerte Infusion)",
    pediatric: "Die Sicherheit bei Kindern ist bisher nur begrenzt belegt",
    renalAdjustment: "Bei GFR < 60 ml/min ist eine strenge Dosisanpassung erforderlich"
  },
  mechanismOfAction: "Bakterizid. Enmetazobactam ist ein neuer Beta-Laktamase-Inhibitor, der speziell ESBL-(Klasse A)-Enzyme hemmt und Cefepim schützt, das selbst gegen AmpC-Enzyme resistent ist.",
  sideEffects: [
    "Kopfschmerzen",
    "Nierenfunktionsstörung/Transaminasenerhöhung",
    "Neurotoxizität",
    "Durchfall"
  ],
  spectrum: {
    gramPositive: 2,
    gramNegative: 2,
    anaerobe: 1,
    atypical: 0,
    pseudomonas: 2,
    other: "Extrem wirksam gegen ESBL-bildende Enterobacterales. Schont Carbapeneme!"
  },
  indications: [
    "Komplizierte Harnwegsinfektionen einschließlich Pyelonephritis",
    "HAP/VAP und komplizierte intraabdominelle Infektionen (in Kombination)"
  ],
  notes: "Ein besonders wichtiges carbapenemsparendes Mittel in der Behandlung von ESBL-positiven Infektionen."
},
{
  id: "ceftaroline_avibactam",
  name: "Ceftarolin-Fosamil / Avibactam",
  abbreviation: "CPT-AVI",
  brandNames: "Zinforo-Kombination (Spezialentwicklung)",
  group: "Kombinationen aus Cephalosporin der 5. Generation und Beta-Laktamase-Inhibitor",
  halfLife: "2.5 - 3 Stunden",
  pae: "Ausgeprägt gegen grampositive und gramnegative Bakterien",
  effectType: "bakterizid",
  dosage: {
    adult: "2x 600 mg / 150 mg i.v. täglich",
    pediatric: "Pädiatrische Daten liegen noch nicht vor",
    renalAdjustment: "GFR < 50 ml/min: Dosisreduktion erforderlich"
  },
  mechanismOfAction: "Bakterizid. Ceftarolin ist das einzige Cephalosporin, das an PBP-2a (MRSA) bindet, während Avibactam ein Breitband-Beta-Laktamase-Inhibitor ist (Enzyme der Klassen A, C und einiger D/OXA-48).",
  sideEffects: [
    "Positiver Coombs-Test",
    "Exanthem, Fieber",
    "Durchfall"
  ],
  spectrum: {
    gramPositive: 2,
    gramNegative: 2,
    anaerobe: 1,
    atypical: 0,
    pseudomonas: 0,
    other: "Die einzige Kombination, die gleichzeitig gegen MRSA und ESBL/AmpC-bildende gramnegative Bakterien wirksam ist!"
  },
  indications: [
    "Mischinfektionen durch multiresistente (MDR) gramnegative Bakterien und MRSA",
    "Komplizierte Haut- und Weichteilinfektionen",
    "Nosokomiale Pneumonie"
  ],
  notes: "Eine Kombination mit außergewöhnlichem Spektrum, die sich in klinischer Entwicklung befindet oder in speziellen Indikationen verwendet wird."
},
{
  id: "ceftazidime_avibactam",
  name: "Ceftazidim / Avibactam",
  abbreviation: "CZA",
  brandNames: "Zavicefta",
  group: "Kombinationen aus Cephalosporin der 3. Generation und Beta-Laktamase-Inhibitor",
  halfLife: "2 Stunden",
  pae: "Mäßig gegen gramnegative Bakterien",
  effectType: "bakterizid",
  dosage: {
    adult: "3x 2 g / 0.5 g i.v. täglich, als 2-stündige Infusion",
    pediatric: "Ab einem Alter von 3 Monaten nach Körpergewicht einsetzbar",
    renalAdjustment: "GFR < 50 ml/min: strenge Dosisreduktion erforderlich!"
  },
  mechanismOfAction: "Bakterizid. Avibactam ist ein Nicht-Beta-Laktam-Inhibitor, der Enzyme der Ambler-Klasse A (ESBL, KPC), Klasse C (AmpC) und Klasse D (OXA-48) hemmt, aber nicht Klasse B (NDM, VIM, IMP)!",
  sideEffects: [
    "Serokonversion des direkten Coombs-Tests",
    "Erhöhte Leberenzymwerte",
    "Übelkeit, Durchfall",
    "Krampfanfälle"
  ],
  spectrum: {
    gramPositive: 0,
    gramNegative: 2,
    anaerobe: 1,
    atypical: 0,
    pseudomonas: 2,
    other: "Eine speziell gegen carbapenemresistente Enterobacterales (KPC-, OXA-48-bildende Stämme) und multiresistente Pseudomonas entwickelte 'Superwaffe'."
  },
  indications: [
    "Komplizierte intraabdominelle Infektionen (in Kombination mit Metronidazol)",
    "Komplizierte Harnwegsinfektionen",
    "Nosokomiale Pneumonie (HAP/VAP)",
    "Aerobe gramnegative Infektionen bei eingeschränkten Therapieoptionen"
  ],
  notes: "Darf bei carbapenemresistenten Infektionen nur unter institutionellen, streng kontrollierten Bedingungen verabreicht werden."
},
{
  id: "biapenem",
  name: "Biapenem",
  abbreviation: "BPR",
  brandNames: "Omegacin",
  group: "Carbapeneme",
  halfLife: "1 Stunde",
  pae: "Ausgeprägt gegen gramnegative Bakterien",
  effectType: "bakterizid",
  dosage: {
    adult: "2x 300 mg - 600 mg i.v. täglich als 30-60-minütige Infusion",
    pediatric: "30-60 mg/kg/Tag i.v. auf 3 Dosen verteilt",
    renalAdjustment: "GFR < 50 ml/min: Dosisreduktion empfohlen"
  },
  mechanismOfAction: "Bakterizid. Ein Carbapenem mit sehr breitem Spektrum. Es zeigt eine herausragende Stabilität gegenüber der humanen renalen Dehydropeptidase-I (DHP-I), daher ist kein Cilastatin-Schutz erforderlich.",
  sideEffects: [
    "Gastrointestinale Beschwerden",
    "Erhöhte Leberfunktionswerte",
    "Geringes Krampfrisiko (Neurotoxizität)"
  ],
  spectrum: {
    gramPositive: 2,
    gramNegative: 2,
    anaerobe: 2,
    atypical: 0,
    pseudomonas: 2,
    other: "Extrem breites Spektrum, einschließlich ESBL- und AmpC-bildender Erreger sowie Pseudomonas aeruginosa."
  },
  indications: [
    "Komplizierte Harnwegs-, intraabdominelle und Atemwegsinfektionen",
    "Sepsis",
    "Haut- und Weichteilinfektionen"
  ],
  notes: "Ein Carbapenem, das hauptsächlich in Japan und einigen asiatischen Ländern zugelassen und verwendet wird."
},
{
  id: "ceftolozane_tazobactam",
  name: "Ceftolozan / Tazobactam",
  abbreviation: "C/T",
  brandNames: "Zerbaxa",
  group: "Kombinationen aus Cephalosporin der 5. Generation und Beta-Laktamase-Inhibitor",
  halfLife: "2.5 - 3 Stunden (Ceftolozan), 1 Stunde (Tazobactam)",
  pae: "Ausgeprägt gegen gramnegative Bakterien",
  effectType: "bakterizid",
  dosage: {
    adult: "3x 1.5 g (1 g Ceftolozan + 0.5 g Tazobactam) i.v. täglich als 1-stündige Infusion; bei HAP/VAP 3x 3 g i.v.",
    pediatric: "Die pädiatrische Dosierung ist nur begrenzt definiert",
    renalAdjustment: "GFR < 50 ml/min: strenge Dosisreduktion erforderlich!"
  },
  mechanismOfAction: "Bakterizid. Ceftolozan ist ein neues Cephalosporin, das speziell gegen Pseudomonas aeruginosa optimiert wurde, und Tazobactam schützt vor ESBL-Enzymen.",
  sideEffects: [
    "Übelkeit, Durchfall",
    "Kopfschmerzen",
    "Positiver Coombs-Test",
    "Hypokaliämie"
  ],
  spectrum: {
    gramPositive: 1,
    gramNegative: 2,
    anaerobe: 1,
    atypical: 0,
    pseudomonas: 2,
    other: "Der derzeit wirksamste verfügbare Beta-Laktam-Partner für Monotherapie/Kombination gegen multiresistente Pseudomonas aeruginosa!"
  },
  indications: [
    "Komplizierte intraabdominelle Infektionen (in Kombination mit Metronidazol)",
    "Komplizierte Harnwegsinfektionen (einschließlich Pyelonephritis)",
    "Nosokomiale Pneumonie (HAP/VAP)"
  ],
  notes: "Ein besonders wertvolles Mittel in der Behandlung von Pneumonien und Urosepsis durch multiresistente (MDR) Pseudomonas."
},
{
  id: "erythromycin",
  name: "Erythromycin",
  abbreviation: "ERY",
  brandNames: "Erythromycin-Richter, Erythrocin",
  group: "Makrolide",
  halfLife: "1.5 - 2 Stunden",
  pae: "Ausgeprägt gegen grampositive Bakterien (2-4 Stunden)",
  effectType: "bakteriostatisch",
  dosage: {
    adult: "4x 250 mg - 500 mg p.o. oder 2-4x 500 mg - 1000 mg i.v. täglich",
    pediatric: "30-50 mg/kg/Tag p.o. oder i.v. auf 4 Dosen verteilt",
    renalAdjustment: "Bei Nierenfunktionsstörung ist keine Dosisanpassung erforderlich"
  },
  mechanismOfAction: "Bakteriostatisch. Bindet reversibel an die 23S-rRNA der bakteriellen 50S-Ribosomenuntereinheit und hemmt die Translokation während der Proteinsynthese.",
  sideEffects: [
    "Gastrointestinale Beschwerden (sehr häufig, Bauchkrämpfe durch Stimulation der Motilinrezeptoren)",
    "QT-Verlängerung (Risiko für ventrikuläre Torsade-de-pointes-Tachykardie)",
    "Hepatotoxizität (cholestatische Hepatitis, besonders bei dem Estolat-Salz)",
    "Starke CYP3A4-Hemmung (zahlreiche Arzneimittelinteraktionen)"
  ],
  spectrum: {
    gramPositive: 2,
    gramNegative: 1,
    anaerobe: 1,
    atypical: 2,
    pseudomonas: 0,
    other: "Hervorragende Wirksamkeit gegen atypische Erreger (Mykoplasmen, Chlamydien, Legionellen) und Bordetella pertussis."
  },
  indications: [
    "Atypische Pneumonie",
    "Behandlung und Postexpositionsprophylaxe von Bordetella pertussis (Keuchhusten)",
    "Eradikation der Diphtherie-Besiedlung",
    "Alternative bei Penicillin-allergischen Patienten mit Streptokokkeninfektionen",
    "Gastroparese (wegen der prokinetischen Wirkung, in einer nicht-infektiösen Indikation)"
  ],
  notes: "Das Prototyp-Makrolid. Heute wird es wegen der ausgeprägten gastrointestinalen Nebenwirkungen und der viermal täglichen Gabe seltener für systemische Infektionen verwendet, ist aber als Prokinetikum nützlich."
},
{
  id: "roxithromycin",
  name: "Roxithromycin",
  abbreviation: "ROX",
  brandNames: "Rulid",
  group: "Makrolide",
  halfLife: "10 - 12 Stunden",
  pae: "Ausgeprägt gegen grampositive Bakterien",
  effectType: "bakteriostatisch",
  dosage: {
    adult: "2x 150 mg p.o. täglich oder 1x 300 mg p.o. täglich (vor den Mahlzeiten)",
    pediatric: "5-8 mg/kg/Tag p.o. auf zwei Dosen verteilt",
    renalAdjustment: "Bei schwerer Niereninsuffizienz wird eine Halbierung der Dosis empfohlen (max. 150 mg täglich)"
  },
  mechanismOfAction: "Bakteriostatisches Makrolid. Bindet an die 50S-Ribosomenuntereinheit und hemmt die Proteinsynthese.",
  sideEffects: [
    "Leichte gastrointestinale Symptome (viel seltener als bei Erythromycin)",
    "QT-Verlängerung",
    "Allergische Hautreaktionen",
    "Mäßige Erhöhung der Leberenzymwerte"
  ],
  spectrum: {
    gramPositive: 2,
    gramNegative: 1,
    anaerobe: 1,
    atypical: 2,
    pseudomonas: 0,
    other: "Ähnlich wie Erythromycin, aber mit besserer Gewebepenetration und längerer Halbwertszeit."
  },
  indications: [
    "Leichte bis mittelschwere Atemwegsinfektionen (Tonsillitis, Pharyngitis, Pneumonie, Bronchitis)",
    "Haut- und Weichteilinfektionen",
    "Nicht-gonokokkenbedingte Urethritis und gynäkologische Infektionen (Chlamydien)"
  ],
  notes: "Ein halbsynthetisches Makrolid, das säurestabiler ist als Erythromycin, besser resorbiert wird und deutlich weniger gastrointestinale Nebenwirkungen verursacht."
},
{
    id: "spiramycin",
    name: "Spiramycin",
    abbreviation: "SP",
    brandNames: "Rovamycine",
    group: "Makrolide",
    halfLife: "5 - 8 Stunden (akkumuliert aber extrem lange im Gewebe)",
    pae: "Ausgeprägt",
    effectType: "bakteriostatisch",
    dosage: {
      adult: "2-3x 3.000.000 IE (Internationale Einheiten) p.o. täglich (2-3 g/Tag)",
      pediatric: "150.000 - 300.000 IE/kg/Tag p.o. auf 2-3 Gaben verteilt",
      renalAdjustment: "Bei Niereninsuffizienz ist keine Dosisanpassung erforderlich"
    },
    mechanismOfAction: "Bakteriostatisches Makrolid-Antibiotikum. Hemmt die bakterielle Proteinsynthese durch Bindung an die 50S-Ribosomenuntereinheit.",
    sideEffects: [
      "Übelkeit, Erbrechen, Durchfall",
      "Parästhesien (Taubheitsgefühl - vorübergehend)",
      "Allergische Hautausschläge",
      "Selten QT-Verlängerung"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 1,
      anaerobe: 1,
      atypical: 2,
      pseudomonas: 0,
      other: "Besonders starke Wirkung gegen Toxoplasma gondii."
    },
    indications: [
      "Behandlung der Toxoplasmose in der Schwangerschaft (verhindert die transplazentare Übertragung auf den Fetus!)",
      "Zahn- und oralchirurgische Infektionen (oft mit Metronidazol kombiniert)",
      "Atemwegsinfektionen (Tonsillitis, Otitis media, Pneumonie)"
    ],
    notes: "Spiramycin ist besonders wichtig zur Vorbeugung einer Toxoplasma-Infektion bei schwangeren Müttern, da es nicht teratogen ist, aber das Übertreten des Parasiten über die Plazenta gut hemmt."
  },
  {
    id: "fidaxomicin",
    name: "Fidaxomicin",
    abbreviation: "FDX",
    brandNames: "Dificlir",
    group: "Andere Antibiotika (makrozyklische Substanzen)",
    halfLife: "ca. 1-2 Stunden (wirkt lokal im Darm, wird nahezu nicht resorbiert)",
    pae: "Extrem ausgeprägt (bis zu 24-48 Stunden gegen Clostridioides)",
    effectType: "bakterizid",
    dosage: {
      adult: "2x 200 mg p.o. täglich für 10 Tage (unabhängig von den Mahlzeiten)",
      pediatric: "Die Wirksamkeit bei Kindern ist nur begrenzt belegt, eine körpergewichtsbasierte Dosierung existiert jedoch",
      renalAdjustment: "Keine Dosisanpassung erforderlich (wegen minimaler systemischer Absorption)"
    },
    mechanismOfAction: "Bakterizid. Hemmt selektiv die bakterielle RNA-Polymerase vor Beginn der Transkription und wirkt an einer einzigartigen Bindungsstelle. Es besitzt eine hervorragende Selektivität gegen Clostridioides difficile.",
    sideEffects: [
      "Übelkeit, Verstopfung, Blähungen",
      "Sehr selten gastrointestinale Blutungen",
      "Leichte Überempfindlichkeitsreaktionen"
    ],
    spectrum: {
      gramPositive: 1,
      gramNegative: 0,
      anaerobe: 1,
      atypical: 0,
      pseudomonas: 0,
      other: "Extrem schmalspektrig, schont die normale Darmflora (Bacteroides), wodurch das Risiko eines Rückfalls von C. difficile drastisch sinkt!"
    },
    indications: [
      "Durch Clostridioides difficile verursachte Diarrhö (CDI) bei Erwachsenen (First-Line-Mittel, besonders bei rezidivierenden oder Hochrisikofällen)"
    ],
    notes: "Ein modernes Antibiotikum der Premiumklasse mit gezielter Wirkung. Obwohl teurer als Vancomycin, ist die Rezidivrate deutlich geringer, da die nützliche anaerobe Darmflora geschont wird."
  },
  {
    id: "teicoplanin",
    name: "Teicoplanin",
    abbreviation: "TEC",
    brandNames: "Targocid",
    group: "Glykopeptide",
    halfLife: "100 - 150 Stunden (extrem lang!)",
    pae: "Ausgeprägt gegen grampositive Bakterien (2-4 Stunden)",
    effectType: "bakterizid",
    dosage: {
      adult: "Ladedosis: 3-5x 400 mg i.v. oder i.m. alle 12 Stunden, danach Erhaltungsdosis 1x 400 mg (oder 6-12 mg/kg) täglich",
      pediatric: "10-12 mg/kg alle 12 Stunden für 3 Gaben (Ladung), danach 10 mg/kg 1x täglich",
      renalAdjustment: "GFR < 80 ml/min: Reduktion der Erhaltungsdosis oder Verlängerung des Dosierungsintervalls erforderlich (z. B. alle 2-3 Tage einmal)"
    },
    mechanismOfAction: "Bakterizid (langsam). Hemmt die bakterielle Peptidoglykan-Synthese der Zellwand, indem es mit hoher Affinität an das D-Alanyl-D-Alanin-Ende der Peptidvorstufen bindet und so Transglycosylierung und Transpeptidierung verhindert.",
    sideEffects: [
      "Lokale Schmerzen an der Injektionsstelle",
      "Allergische Hautreaktionen (Exanthem, Fieber - selten)",
      "Ototoxizität und Nephrotoxizität (deutlich seltener und milder als bei Vancomycin)",
      "Thrombozytopenie, Leukopenie (bei Langzeittherapie)"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 0,
      anaerobe: 1,
      atypical: 0,
      pseudomonas: 0,
      other: "Ausgezeichnete Wirkung gegen grampositive Erreger, einschließlich MRSA-, MRSE- und Enterococcus-faecalis-Stämme. VanA-Typ-VRE ist resistent!"
    },
    indications: [
      "Schwere durch MRSA oder MRSE verursachte Infektionen (Sepsis, Osteomyelitis, Endokarditis)",
      "Haut- und Weichteilinfektionen",
      "Mit Peritonealdialyse assoziierte Peritonitis",
      "Pseudomembranöse Kolitis (Clostridioides difficile) bei oraler Gabe (wird nicht resorbiert)"
    ],
    notes: "Der große Vorteil von Teicoplanin gegenüber Vancomycin ist die einmal tägliche Gabe (nach der Aufsättigung), die intramuskuläre Verabreichbarkeit und die Tatsache, dass es kein 'Red-Man'-Syndrom verursacht."
  },
  {
    id: "imipenem_cilastatin",
    name: "Imipenem / Cilastatin",
    abbreviation: "IPM",
    brandNames: "Tienam, Imipenem/Cilastatin Kabi",
    group: "Carbapeneme",
    halfLife: "ca. 1 Stunde",
    pae: "Ausgeprägt gegen gramnegative Bakterien (1-2 Stunden)",
    effectType: "bakterizid",
    dosage: {
      adult: "3-4x 500 mg / 500 mg i.v. täglich als langsame Infusion (in schweren Fällen bis max. 4 g/Tag)",
      pediatric: "15-25 mg/kg alle 6 Stunden i.v.",
      renalAdjustment: "Strenge Dosisanpassung ist abhängig von der Nierenfunktion erforderlich, um Neurotoxizität zu vermeiden!"
    },
    mechanismOfAction: "Bakterizid. Hemmt die Zellwandsynthese durch Bindung an PBPs (insbesondere PBP-1a, PBP-1b, PBP-2, PBP-4). Cilastatin ist ein Inhibitor der renalen Dehydropeptidase-I (DHP-I), der Imipenem vor dem Abbau in der Niere schützt und die Nephrotoxizität reduziert.",
    sideEffects: [
      "Krampfanfälle (hohes Krampfrisiko - Neurotoxizität, besonders bei Niereninsuffizienz oder bestehender ZNS-Erkrankung!)",
      "Übelkeit, Erbrechen (insbesondere bei schneller i.v.-Gabe)",
      "Überempfindlichkeitsreaktionen (Hautausschlag, Fieber)",
      "Pseudomembranöse Kolitis"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 2,
      anaerobe: 2,
      atypical: 0,
      pseudomonas: 2,
      other: "Extrem stabil gegenüber den meisten Beta-Laktamasen, einschließlich ESBL- und AmpC-Enzymen. Gegen MRSA und Carbapenemase-Bildner unwirksam."
    },
    indications: [
      "Schwere gemischte nosokomiale Infektionen (intraabdominell, Becken, Pneumonie)",
      "Empirische Behandlung von Sepsis und febriler Neutropenie",
      "Multiresistente gramnegative Infektionen (z. B. ESBL)"
    ],
    notes: "Unter den Carbapenemen hat Imipenem das größte krampfauslösende Potenzial (Neurotoxizität), daher sollte es bei epileptischen oder niereninsuffizienten Patienten mit Vorsicht eingesetzt werden; Meropenem ist dann vorzuziehen."
  },
  {
    id: "imipenem_cilastatin_relebactam",
    name: "Imipenem / Cilastatin / Relebactam",
    abbreviation: "IPM-REL",
    brandNames: "Recarbrio",
    group: "Kombinationen aus Carbapenem und Beta-Laktamase-Inhibitor",
    halfLife: "ca. 1-1.2 Stunden",
    pae: "Ausgeprägt gegen gramnegative Bakterien (über 2 Stunden)",
    effectType: "bakterizid",
    dosage: {
      adult: "4x 500 mg / 500 mg / 250 mg i.v. täglich als 30-minütige Infusion",
      pediatric: "Sicherheit und Wirksamkeit bei Kindern sind noch nicht vollständig belegt",
      renalAdjustment: "Strenge Dosisanpassung ist je nach Ausmaß der Niereninsuffizienz erforderlich (Dosisreduktion bereits bei GFR < 90 ml/min!)"
    },
    mechanismOfAction: "Bakterizid. Imipenem/Cilastatin hemmt die Zellwandsynthese, während Relebactam ein neuer, nicht-beta-laktamischer (Diazabicyclooctan-) Beta-Laktamase-Inhibitor ist, der Ambler-Klasse-A-(KPC)- und Klasse-C-(AmpC)-Enzyme wirksam hemmt und so die Wirkung von Imipenem gegen resistente Stämme wiederherstellt.",
    sideEffects: [
      "Übelkeit, Durchfall, Kopfschmerzen",
      "Anstieg von Leberenzymen/Transaminasen",
      "Neurotoxizität (Krampfanfälle - aufgrund der Imipenem-Komponente)",
      "Reaktionen an der Injektionsstelle"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 2,
      anaerobe: 2,
      atypical: 0,
      pseudomonas: 2,
      other: "Extrem wirksam gegen KPC-bildende und AmpC-überproduzierende Enterobacterales- und Pseudomonas-aeruginosa-Stämme! Gegen Klasse B (Metallo-Beta-Laktamasen) und Klasse D (OXA-48) unwirksam."
    },
    indications: [
      "Komplizierte Harnwegsinfektionen (einschließlich Pyelonephritis)",
      "Komplizierte intraabdominelle Infektionen",
      "Nosokomiale und beatmungsassoziierte Pneumonie (HAP/VAP)",
      "Gramnegative Infektionen bei Patienten mit wenigen Therapieoptionen"
    ],
    notes: "Ein modernes Reserveantibiotikum. Die Zugabe von Relebactam schützt Imipenem vor KPC-Carbapenemasen und macht es zu einer hervorragenden Alternative zu Ceftazidim/Avibactam."
  },
  {
    id: "meropenem_vaborbactam",
    name: "Meropenem / Vaborbactam",
    abbreviation: "MER-VAB",
    brandNames: "Vabomere",
    group: "Kombinationen aus Carbapenem und Beta-Laktamase-Inhibitor",
    halfLife: "ca. 1-1.5 Stunden",
    pae: "Ausgeprägt gegen gramnegative Bakterien",
    effectType: "bakterizid",
    dosage: {
      adult: "3x 2 g / 2 g (insgesamt 4 g) i.v. täglich als 3-stündige verlängerte Infusion",
      pediatric: "Die Sicherheit bei Kindern unter 18 Jahren ist nicht belegt",
      renalAdjustment: "Strenge Dosisreduktion ist bei GFR < 40 ml/min erforderlich!"
    },
    mechanismOfAction: "Bakterizid. Meropenem hemmt die bakterielle Zellwandsynthese, Vaborbactam ist ein neuer boronsäurebasierter Beta-Laktamase-Inhibitor, der speziell Klasse-A- und Klasse-C-Carbapenemasen (insbesondere KPC) mit hoher Affinität hemmt.",
    sideEffects: [
      "Kopfschmerzen",
      "Durchfall, Übelkeit",
      "Lokale Reaktionen an der Infusionsstelle (Thrombophlebitis)",
      "Vorübergehender Transaminasenanstieg",
      "Hypokaliämie"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 2,
      anaerobe: 2,
      atypical: 0,
      pseudomonas: 2,
      other: "Extrem wirksam gegen Enterobacterales-Stämme mit Klebsiella-pneumoniae-Carbapenemase (KPC)! Gegen Metallo-Beta-Laktamasen (NDM, VIM - Klasse B) und OXA-48 (Klasse D) unwirksam!"
    },
    indications: [
      "Komplizierte Harnwegsinfektionen, einschließlich Pyelonephritis",
      "Komplizierte intraabdominelle Infektionen",
      "HAP/VAP (nosokomiale Pneumonie)",
      "Bakteriämie und Sepsis bei nachgewiesenen KPC-bildenden Enterobacterales"
    ],
    notes: "Eines der wirksamsten gezielten klinischen Mittel gegen KPC-bildende Klebsiella-Infektionen, das die Überlebensrate im Vergleich zu früheren toxischen Colistin-basierten Therapien deutlich verbessert hat."
  },
  {
    id: "telithromycin",
    name: "Telithromycin",
    abbreviation: "TEL",
    brandNames: "Ketek",
    group: "Ketolide (Makrolid-Derivate)",
    halfLife: "10 Stunden",
    pae: "Ausgeprägt gegen grampositive Bakterien (3-5 Stunden)",
    effectType: "bakteriostatisch",
    dosage: {
      adult: "1x 800 mg p.o. täglich (unabhängig von den Mahlzeiten)",
      pediatric: "Die Anwendung bei Kindern und Jugendlichen wird nicht empfohlen",
      renalAdjustment: "Bei schwerer Niereninsuffizienz (GFR < 30 ml/min) sollte die Dosis auf 400 mg reduziert werden"
    },
    mechanismOfAction: "Bakteriostatisch. Ein aus den Makroliden entwickeltes Ketolid. Es bindet an zwei verschiedenen Stellen an die 50S-Ribosomenuntereinheit (23S- und 9S-RNA), wodurch die Bindung zehnmal stärker ist und es auch gegen makrolidresistente Streptococcus-pneumoniae-Stämme (mit erm- oder mef-Gen) wirksam bleibt.",
    sideEffects: [
      "Schwere Hepatotoxizität (Risiko eines akuten Leberversagens - Black-Box-Warnung!)",
      "Sehstörungen (verschwommenes Sehen, Fokussierungsstörungen - hemmt nikotinische Acetylcholinrezeptoren des Ziliarganglions)",
      "Verschlechterung einer Myasthenia gravis (kann eine lebensbedrohliche Atemlähmung verursachen - streng kontraindiziert!)",
      "QT-Verlängerung"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 1,
      anaerobe: 1,
      atypical: 2,
      pseudomonas: 0,
      other: "Gezielt gegen penicillin- und makrolidresistente respiratorische Erreger entwickelt."
    },
    indications: [
      "Ambulant erworbene Pneumonie (CAP) - nur wenn kein anderes, sichereres Antibiotikum eingesetzt werden kann",
      "Akute Exazerbation einer chronischen Bronchitis, Sinusitis (nur in streng begrenzten Indikationen)"
    ],
    notes: "Aufgrund schwerer und unvorhersehbarer Lebertoxizität sowie tödlicher Atemlähmungen bei Patienten mit Myasthenia gravis ist der Einsatz weltweit stark zurückgegangen; es bleibt strikt eine Reserve der zweiten Linie."
  },
  {
    id: "tigecycline",
    name: "Tigecycline",
    abbreviation: "TGC",
    brandNames: "Tygacil, Tigecycline Kabi",
    group: "Glycylcycline (Tetracyclin-Derivate)",
    halfLife: "37 - 42 Stunden (extrem lang!)",
    pae: "Ausgeprägt (3-4 Stunden)",
    effectType: "bakteriostatisch",
    dosage: {
      adult: "Initiale (Lade-)Dosis: 100 mg i.v., dann 50 mg i.v. alle 12 Stunden als langsame Infusion (mindestens 30-60 Minuten)",
      pediatric: "8-12 Jahre: 1.2 mg/kg i.v. alle 12 Stunden (max. 50 mg pro Dosis), ab 12 Jahren Erwachsenendosis",
      renalAdjustment: "Bei Niereninsuffizienz keine Anpassung erforderlich. Bei schwerer Leberinsuffizienz (Child-Pugh C) sollte die Erhaltungsdosis auf 25 mg/Tag reduziert werden!"
    },
    mechanismOfAction: "Bakteriostatisch. Ein von Minocyclin abgeleitetes Glycylcyclin. Es bindet an die 30S-Ribosomenuntereinheit und hemmt den Einbau von Aminoacyl-tRNA in die A-Stelle. Durch die t-Butylglycylamido-Seitenkette entgeht Tigecyclin den tetracyclinspezifischen Effluxpumpen und der Resistenz durch ribosomale Schutzproteine (tetM).",
    sideEffects: [
      "Übelkeit und Erbrechen (sehr häufig, bei bis zu 30-40% der Patienten, besonders zu Therapiebeginn)",
      "Erhöhte Mortalität (Metaanalysen zeigen eine höhere Gesamtsterblichkeit bei mit Tigecyclin behandelten Patienten als bei Vergleichssubstanzen - nur bei klarer Indikation einsetzen!)",
      "Erhöhte Amylase- und Lipasewerte, Risiko einer Pankreatitis",
      "Zahnverfärbungen bei Kindern (Tetracyclin-Effekt)",
      "Photosensibilität"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 2,
      anaerobe: 2,
      atypical: 2,
      pseudomonas: 0,
      other: "Es zeichnet sich durch eine extrem ausgeprägte Gewebeverteilung aus, weshalb die Serumkonzentration niedrig ist! Bei Sepsis/Bakteriämie als Monotherapie nicht wirksam!"
    },
    indications: [
      "Komplizierte Haut- und Weichteilinfektionen (bei MRSA und Mischflora)",
      "Komplizierte intraabdominelle Infektionen",
      "Als Kombinationstherapie bei Infektionen mit multiresistentem Acinetobacter baumannii"
    ],
    notes: "Tigecyclin deckt fast alles ab außer Pseudomonas, Proteus und Providencia, verbleibt aber wegen seiner sehr großen Gewebeverteilung nicht im Blutkreislauf und ist daher zur Monotherapie der Sepsis nicht geeignet."
  },
  {
    id: "eravacycline",
    name: "Eravacycline",
    abbreviation: "ERV",
    brandNames: "Xerava",
    group: "Fluorocycline (Tetracyclin-Derivate)",
    halfLife: "ca. 20 Stunden",
    pae: "Ausgeprägt gegen gramnegative Bakterien",
    effectType: "bakteriostatisch",
    dosage: {
      adult: "1 mg/kg i.v. alle 12 Stunden als Infusion, für 7-14 Tage",
      pediatric: "Die Sicherheit bei Kindern unter 18 Jahren ist nicht belegt",
      renalAdjustment: "Bei Niereninsuffizienz ist keine Dosisanpassung erforderlich. Bei schwerer Leberinsuffizienz ist eine Dosisanpassung oder erhöhte Vorsicht angezeigt."
    },
    mechanismOfAction: "Bakteriostatisch. Vollsynthetisches Fluorocyclin (Tetracyclin-Klasse). Es bindet an die 30S-Ribosomenuntereinheit und hemmt die Proteinsynthese. Durch das Fluoratom und den Pyrrolidinring ist es gegen die häufigsten Tetracyclin-Resistenzmechanismen (Effluxpumpen und ribosomale Schutzproteine) resistent.",
    sideEffects: [
      "Übelkeit, Erbrechen (deutlich milder als bei Tigecyclin!)",
      "Lokale Reaktionen an der Infusionsstelle (Phlebitis)",
      "Transaminasenanstieg",
      "Zahnverfärbungen (bei Kindern)"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 2,
      anaerobe: 2,
      atypical: 2,
      pseudomonas: 0,
      other: "Das Spektrum ist ähnlich wie bei Tigecyclin, aber mit besserer In-vitro-Wirksamkeit und günstigerem Nebenwirkungsprofil."
    },
    indications: [
      "Komplizierte intraabdominelle Infektionen bei Erwachsenen (vor allem bei Verdacht auf multiresistente Erreger)"
    ],
    notes: "Ein Tetracyclin-Derivat der neuen Generation mit ausgezeichneter In-vitro-Wirkung gegen multiresistente Acinetobacter baumannii und KPC-bildende Enterobacterales, mit weniger Übelkeit als Tigecyclin."
  },
  {
    id: "cefiderocol",
    name: "Cefiderocol",
    abbreviation: "FDC",
    brandNames: "Fetcroja",
    group: "Siderophor-Cephalosporine (Derivat der 5. Generation)",
    halfLife: "2 - 2.5 Stunden",
    pae: "Ausgeprägt gegen gramnegative Bakterien",
    effectType: "bakterizid",
    dosage: {
      adult: "3x 2 g i.v. täglich als 3-stündige verlängerte Infusion",
      pediatric: "Sicherheit und Dosierung bei Kindern sind noch nicht etabliert",
      renalAdjustment: "Strenge Dosisanpassung ist sowohl bei Niereninsuffizienz als auch bei gesteigerter renaler Clearance (ARC, GFR > 120 ml/min, dann 4x 2 g/Tag!) erforderlich"
    },
    mechanismOfAction: "Bakterizid. Ein einzigartiger 'Trojanisches-Pferd'-Mechanismus: Cefiderocol ist ein siderophor-konjugiertes Cephalosporin, das aktiv an extrazelluläres bakterielles Eisen bindet. Das eigene aktive Eisentransportsystem des Bakteriums (TonB-abhängige Rezeptoren) schleust es in den periplasmatischen Raum ein, wo es Effluxpumpen und Porin-Mutationen umgeht und dann durch Bindung an PBP-3 die Zellwandsynthese hemmt. Es ist extrem stabil gegenüber allen Beta-Laktamasen (einschließlich Metallo-Beta-Laktamasen!).",
    sideEffects: [
      "Durchfall, Übelkeit",
      "Positiver Coombs-Test",
      "Erhöhung der Leberfunktionswerte",
      "Hypokaliämie",
      "Selten Neurotoxizität (Krampfanfälle - bei hoher Dosis)"
    ],
    spectrum: {
      gramPositive: 0,
      gramNegative: 2,
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 2,
      other: "Eine reine letzte Waffe gegen multiresistente (MDR) und panresistente (PDR) gramnegative Bakterien."
    },
    indications: [
      "Schwere aerobe gramnegative Infektionen bei Erwachsenen bei eingeschränkten Therapieoptionen",
      "Nosokomiale und beatmungsassoziierte Pneumonie (HAP/VAP)",
      "Komplizierte Harnwegsinfektionen und Urosepsis durch multiresistente gramnegative Erreger (z. B. NDM-bildende Klebsiella oder Pseudomonas)"
    ],
    notes: "Einer der größten Durchbrüche der modernen klinischen Medizin in der Behandlung multiresistenter gramnegativer Infektionen; das einzige Beta-Laktam, das zuverlässig gegen 'Superbakterien' mit Metallo-Beta-Laktamasen (z. B. NDM-1) wirkt."
  },
  {
    id: "plazomicin",
    name: "Plazomicin",
    abbreviation: "PLZ",
    brandNames: "Zemdri",
    group: "Aminoglykoside (Neue Generation)",
    halfLife: "4 Stunden (bei Niereninsuffizienz deutlich verlängert)",
    pae: "Ausgeprägt bei Gram-negativen Erregern (2-4 Stunden)",
    effectType: "bakterizid",
    dosage: {
      adult: "15 mg/kg einmal täglich als i.v. Infusion (über 30 Minuten)",
      pediatric: "Sicherheit und Wirksamkeit bei Kindern sind noch nicht vollständig etabliert",
      renalAdjustment: "ClCr 60-90 ml/min: 10 mg/kg q24h; ClCr 30-60 ml/min: 10 mg/kg q24h-q48h; ClCr 15-30 ml/min: 10 mg/kg q48h. Dosisanpassung und TDM werden dringend empfohlen."
    },
    mechanismOfAction: "Bakterizid. Ein Aminoglykosid der nächsten Generation (abgeleitet von Sisomicin). Bindet an die bakterielle 30S-Ribosomenuntereinheit, was die Proteinsynthese hemmt und die Fehlerrate bei der Translation erhöht. Speziell entwickelt, um den meisten Aminoglykosid-modifizierenden Enzymen (AME) zu widerstehen, wodurch es auch gegen viele MDR-Gram-negative Stämme wirksam ist, die gegen andere Aminoglykoside resistent sind.",
    sideEffects: [
      "Nephrotoxizität (Nierenschädigung)",
      "Ototoxizität (cochleär und vestibulär, potenziell irreversibel)",
      "Neuromuskuläre Blockade (kann Atemdepression verursachen)",
      "Überempfindlichkeitsreaktionen"
    ],
    spectrum: {
      gramPositive: 0,
      gramNegative: 2,
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 1,
      other: "Speziell gegen multiresistente Enterobacteriaceae (CRE, ESBL-Bildner) entwickelt. Weniger wirksam gegen Pseudomonas als Amikacin."
    },
    indications: [
      "Komplizierte Harnwegsinfektionen und Pyelonephritis durch multiresistente Erreger",
      "Alternative Behandlung für systemische Infektionen mit Carbapenem-resistenten Enterobacteriaceae (CRE) (meist in Kombination)"
    ],
    notes: "Erfordert ein strenges therapeutisches Drug Monitoring (TDM), insbesondere bei eingeschränkter Nierenfunktion. Das Risiko von Oto- und Nephrotoxizität ist geringer als bei älteren Aminoglykosiden, aber immer noch vorhanden."
  },
  {
    id: "tobramycin",
    name: "Tobramycin",
    abbreviation: "TOB",
    brandNames: "Bramitob, Tobi, Tobradex, Brulamycin",
    group: "Aminoglykoside",
    halfLife: "2 - 2,5 Stunden (kann sich bei Niereninsuffizienz auf 50-100 Stunden verlängern)",
    pae: "Ausgeprägt bei Gram-negativen Erregern (1,5-3 Stunden), postbiotischer Sub-MHK-Effekt",
    effectType: "bakterizid",
    dosage: {
      adult: "Einmal tägliche Dosierung: 5-7 mg/kg i.v. Infusion; herkömmliche Dosierung: 3x 1-1,7 mg/kg i.v. oder i.m.",
      pediatric: "6-7,5 mg/kg täglich i.v. aufgeteilt in 3 gleiche Dosen, oder individuell bei Neugeborenen basierend auf Gewicht/Alter",
      renalAdjustment: "Strenge Dosisanpassung erforderlich. Bei einmal täglicher Dosierung wird eine Verlängerung des Dosierungsintervalls (z. B. alle 36 oder 48 Stunden) basierend auf TDM empfohlen."
    },
    mechanismOfAction: "Schnell bakterizid. Gelangt über aktiven Transport (sauerstoffabhängiger Prozess) in bakterielle Zellen und bindet irreversibel an die 30S-Ribosomenuntereinheit. Hemmt die Proteinsynthese und stört die Integrität der Zellmembran.",
    sideEffects: [
      "Nierenschädigung (Nephrotoxizität - meist reversibel)",
      "Gehörschädigung (Ototoxizität: cochleär und vestibulär, oft irreversibel)",
      "Neuromuskuläre Blockade (kontraindiziert bei Myasthenia gravis!)",
      "Elektrolytstörungen (Hypomagnesiämie, Hypokaliämie)"
    ],
    spectrum: {
      gramPositive: 1,
      gramNegative: 2,
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 2,
      other: "Weist in Kombination mit Beta-Laktamen eine starke synergistische Aktivität gegen Pseudomonas aeruginosa auf. Wird auch als Inhalationstherapie bei chronischen Pseudomonas-Infektionen (z. B. bei Mukoviszidose) eingesetzt."
    },
    indications: [
      "Schwere Pseudomonas aeruginosa-Infektionen (Sepsis, Pneumonie, Endokarditis) in Kombination",
      "Chronische Pseudomonas-Lungeninfektion bei Mukoviszidose-Patienten (Inhalationsform)",
      "Komplizierte Harnwegs- und intraabdominelle Infektionen als Teil eines Kombinationsregimes"
    ],
    notes: "Ein strenges therapeutisches Drug Monitoring (TDM: Talspiegel < 1-2 mg/l, Spitzenkonzentration 20-30 mg/l bei einmal täglicher Dosierung) ist unerlässlich."
  },
  {
    id: "minocycline",
    name: "Minocyclin",
    abbreviation: "MIN",
    brandNames: "Minocin, Skid",
    group: "Tetracycline",
    halfLife: "11 - 22 Stunden (lang)",
    pae: "Ausgeprägter bakteriostatischer PAE (1-3 Stunden)",
    effectType: "bakteriostatisch",
    dosage: {
      adult: "Anfangsdosis: 200 mg p.o. oder i.v., gefolgt von 100 mg zweimal täglich",
      pediatric: "Streng kontraindiziert unter 8 Jahren! Über 8 Jahre: Sättigung 4 mg/kg, gefolgt von 2 mg/kg zweimal täglich",
      renalAdjustment: "Bei leichter bis mittelschwerer Niereninsuffizienz ist keine routinemäßige Dosisanpassung erforderlich, bei Niereninsuffizienz wird jedoch aufgrund der antianabolen Wirkung von Tetracyclinen erhöhte Vorsicht empfohlen."
    },
    mechanismOfAction: "Bakteriostatischer Proteinsynthesehemmer. Bindet an die BN-S-Ribosomenuntereinheit und blockiert den Zugang von Aminoacyl-tRNA zum mRNA-Ribosomen-Komplex. Hochgradig lipophil, bietet eine hervorragende Gewebepenetration und überwindet die Blut-Hirn-Schranke.",
    sideEffects: [
      "Zahnverfärbungen bei Kindern (kontraindiziert in der Schwangerschaft und unter 8 Jahren)",
      "Vestibuläre Nebenwirkungen (Schwindel, Vertigo, Ataxie - tritt aufgrund der Lipophilie häufiger auf als bei anderen Tetracyclinen)",
      "Hyperpigmentierung (graublaue Verfärbung von Haut, Nägeln, Zahnfleisch bei längerem Gebrauch)",
      "Lupus-ähnliches Syndrom und Autoimmunhepatitis (bei chronischer Anwendung)",
      "Lichtempfindlichkeit (Fotosensibilisierung)"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 1,
      anaerobe: 1,
      atypical: 2,
      pseudomonas: 0,
      other: "Hervorragende Aktivität gegen Stenotrophomonas maltophilia und Acinetobacter baumannii. Gute orale Option für MRSA (Methicillin-resistenter S. aureus)."
    },
    indications: [
      "Schwere Formen der Acne vulgaris",
      "Stenotrophomonas maltophilia- und Acinetobacter baumannii-Infektionen (meist in Kombination)",
      "Haut- und Weichteilinfektionen durch MRSA (als orale Erhaltungstherapie)",
      "Alternatives Arzneimittel bei atypischen Infektionen (Lyme-Borreliose, Chlamydien, Rickettsiosen)"
    ],
    notes: "Aufgrund der hohen Gewebepenetration und Fettlöslichkeit erreicht es hohe Konzentrationen im Zentralnervensystem, im Speichel und in den Tränendrüsen."
  },
  {
    id: "dalbavancin",
    name: "Dalbavancin",
    abbreviation: "DAL",
    brandNames: "Xydalba",
    group: "Glycopeptide und Lipoglycopeptide",
    halfLife: "Ca. 340 Stunden (extrem lang, ca. 14 Tage!)",
    pae: "Extrem verlängert bei Gram-positiven Erregern",
    effectType: "bakterizid",
    dosage: {
      adult: "Einzeldosis: 1500 mg als i.v. Infusion (über 30 Minuten) oder ein Zwei-Dosen-Regime: 1000 mg an Tag 1, gefolgt von 500 mg an Tag 8",
      pediatric: "Sicherheit und Dosierung bei Kindern sind noch nicht vollständig etabliert",
      renalAdjustment: "Schwere Niereninsuffizienz (GFR < 30 ml/min, keine Dialyse): Einzeldosis 1125 mg oder Zwei-Dosen-Regime mit 750 mg an Tag 1 und 375 mg an Tag 8. Keine Anpassung bei Dialyse erforderlich."
    },
    mechanismOfAction: "Bakterizides Lipoglycopeptid der zweiten Generation. Hemmt die Zellwandsynthese durch Bindung an den D-Ala-D-Ala-Terminus des Peptidoglycans, wodurch Transpeptidierung und Transglykosylierung verhindert werden. Seine lipophile Seitenkette verankert das Medikament in der Zellmembran, was seine Wirksamkeit vervielfacht und eine extrem lange Halbwertszeit ermöglicht.",
    sideEffects: [
      "Kopfschmerzen, Schwindel",
      "Übelkeit, Durchfall",
      "Infusionsreaktionen (Rötung, Pruritus - muss langsam infundiert werden)",
      "Moderater, vorübergehender Anstieg der Leberenzyme"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 0,
      anaerobe: 1,
      atypical: 0,
      pseudomonas: 0,
      other: "Ausschließlich gegen grampositive Bakterien wirksam, einschließlich MRSA und glycopeptid-intermediärer Stämme. Unwirksam gegen VanA-Typ-VRE!"
    },
    indications: [
      "Akute bakterielle Haut- und Weichteilinfektionen (ABSSSI) durch grampositive Erreger (einschließlich MRSA)",
      "Hervorragend geeignet für die ambulante parenterale Antibiotikatherapie (APAT), wodurch ein längerer Krankenhausaufenthalt vermieden wird"
    ],
    notes: "Die extrem lange Halbwertszeit ermöglicht es, mit einer einzigen Infusion eine komplette 10- bis 14-tägige herkömmliche i.v.-Behandlung zu ersetzen."
  },
  {
    id: "oritavancin",
    name: "Oritavancin",
    abbreviation: "ORI",
    brandNames: "Tenactiv, Orbactiv",
    group: "Glycopeptide und Lipoglycopeptide",
    halfLife: "Ca. 250 - 350 Stunden",
    pae: "Extrem verlängertiger postbiotischer Effekt bei Gram-positiven Erregern",
    effectType: "bakterizid",
    dosage: {
      adult: "Einzelne i.v. Infusion von 1200 mg (über 3 Stunden verabreicht)",
      pediatric: "Sicherheit und Wirksamkeit bei Kindern sind nicht etabliert",
      renalAdjustment: "Bei leichter oder mittelschwerer Niereninsuffizienz ist keine Dosisanpassung erforderlich. Bei schwerer Niereninsuffizienz ist Vorsicht geboten (begrenzte Daten)."
    },
    mechanismOfAction: "Schnell bakterizides Lipoglycopeptid. Dreifacher Wirkmechanismus: (1) hemmt die Transglykosylierung durch Bindung an den D-Ala-D-Ala-Terminus des Peptidoglycans; (2) hemmt die Transpeptidierung durch Bindung an die hydrophoben Brücken der Zellwand; (3) stört die bakterielle Membranintegrität, was zu Depolarisation und schneller Zelllyse führt. Wirksam gegen VanA VRE!",
    sideEffects: [
      "Erhöhtes Risiko für Osteomyelitis (in klinischen Studien beobachtet)",
      "Übelkeit, Durchfall, Kopfschmerzen",
      "Infusionsassoziierte Reaktionen (Pruritus, Rötung)",
      "Verlängert künstlich bestimmte Gerinnungstests (aPTT, PT), ohne echte Blutungen zu verursachen!"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 0,
      anaerobe: 1,
      atypical: 0,
      pseudomonas: 0,
      other: "Eines der breitesten grampositiven Spektren: wirksam gegen MRSA, VRSA und VRE (VanA- und VanB-Stämme)."
    },
    indications: [
      "Akute bakterielle Haut- und Weichteilinfektionen (ABSSSI) durch schwer zu behandelnde grampositive Erreger",
      "Einmalige ambulante Dosis, wodurch die Notwendigkeit eines Krankenhausaufenthalts minimiert wird"
    ],
    notes: "Streng kontraindiziert bei gleichzeitiger oder innerhalb von 120 Stunden (5 Tagen) erfolgter Anwendung von intravenösem unfraktioniertem Heparin, da es die aPTT-Testergebnisse künstlich verlängert!"
  },
  {
    id: "telavancin",
    name: "Telavancin",
    abbreviation: "TLV",
    brandNames: "Vibativ",
    group: "Glycopeptide und Lipoglycopeptide",
    halfLife: "Ca. 8 Stunden",
    pae: "Ausgeprägt bei Gram-positiven Erregern (1-3 Stunden)",
    effectType: "bakterizid",
    dosage: {
      adult: "10 mg/kg i.v. einmal täglich, infundiert über 60 Minuten",
      pediatric: "Sicherheit und Dosierung bei Kindern sind nicht etabliert",
      renalAdjustment: "GFR 30-50 ml/min: 7,5 mg/kg q24h; GFR 10-30 ml/min: 10 mg/kg q48h; GFR < 10 ml/min: nicht empfohlen."
    },
    mechanismOfAction: "Schnell bakterizides Lipoglycopeptid. Dualer Wirkmechanismus: (1) hemmt die Peptidoglycan-Zellwandsynthese durch Bindung an D-Ala-D-Ala; (2) depolarisiert die Bakterienmembran über seine lipophile Seitenkette, wodurch die Membranbarrierefunktion zerstört wird.",
    sideEffects: [
      "Nephrotoxicity (häufiger und schwerer als bei Vancomycin)",
      "Geschmacksstörungen (metallischer Geschmack im Mund)",
      "Übelkeit, Erbrechen, Durchfall",
      "QT-Intervall-Verlängerung (Arrhytmierisiko)",
      "Red Man Syndrome bei zu schneller Infusion"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 0,
      anaerobe: 1,
      atypical: 0,
      pseudomonas: 0,
      other: "Hauptsächlich bei grampositiven Infektionen einschließlich MRSA und VISA (intermediären) Stämmen."
    },
    indications: [
      "Nosokomiale Pneumonie (HAP/VAP), von der bekannt ist oder vermutet wird, dass sie durch MRSA verursacht wird, wenn andere Optionen ungeeignet sind",
      "Komplizierte Haut- und Weichteilinfektionen"
    ],
    notes: "Aufgrund der erhöhten Nephrotoxizität sollte es nur angewendet werden, wenn keine andere Alternative verfügbar ist. Kontraindiziert während der Schwangerschaft (teratogenes Risiko in Tierstudien)."
  },
  {
    id: "doripenem",
    name: "Doripenem",
    abbreviation: "DOR",
    brandNames: "Doribax",
    group: "Carbapeneme",
    halfLife: "Ca. 1 Stunde",
    pae: "Mäßiger postbiotischer Effekt bei Gram-negativen Erregern (insbesondere Pseudomonas)",
    effectType: "bakterizid",
    dosage: {
      adult: "500 mg i.v. alle 8 Stunden, üblicherweise als 1-stündige oder 4-stündige verlängerte Infusion verabreicht",
      pediatric: "Sicherheit und Wirksamkeit bei Kindern sind nicht etabliert",
      renalAdjustment: "GFR 30-50 ml/min: 250 mg q8h; GFR 10-30 ml/min: 250 mg q12h; GFR < 10 ml/min (unter Dialyse): 250 mg q24h (nach der Dialyse)."
    },
    mechanismOfAction: "Bakterizides Beta-Laktam (Carbapenem). Bindet an Penicillin-Bindeproteine (PBP-2, PBP-3, PBP-4) und verhindert die Zellwandsynthese. Hochgradig stabil gegen die meisten Beta-Laktamasen (ESBL, AmpC) außer Carbapenemasen. Weist eine überlegene In-vitro-Aktivität gegen Pseudomonas aeruginosa im Vergleich zu Imipenem oder Meropenem auf, mit langsamerer Resistenzentwicklung.",
    sideEffects: [
      "Übelkeit, Durchfall, Kopfschmerzen",
      "Phlebitis an der Infusionsstelle",
      "Überempfindlichkeitsreaktionen (Hautausschlag, selten Anaphylaxie)",
      "Krampfanfallrisiko (deutlich geringer als bei Imipenem!)"
    ],
    spectrum: {
      gramPositive: 1,
      gramNegative: 2,
      anaerobe: 2,
      atypical: 0,
      pseudomonas: 2,
      other: "Ähnlich wie Meropenem, zeigt jedoch eine hervorragende Stabilität und Wirksamkeit bei Pseudomonas aeruginosa-Infektionen."
    },
    indications: [
      "Nosokomiale Pneumonie (HAP/VAP)",
      "Komplizierte intraabdominelle Infektionen",
      "Komplizierte Harnwegsinfektionen und Pyelonephritis"
    ],
    notes: "Für Pseudomonas aeruginosa wird die Technik der 4-stündigen verlängerten Infusion empfohlen, um die pharmakodynamischen Ziele (T > MHK) zu optimieren."
  },
  {
    id: "omadacycline",
    name: "Omadacyclin",
    abbreviation: "OMC",
    brandNames: "Nuzyra",
    group: "Aminomethylcycline (Tetracyclinderivat der neuen Generation)",
    halfLife: "Ca. 16 - 17 Stunden",
    pae: "Ausgeprägter postbiotischer Effekt",
    effectType: "bakteriostatisch",
    dosage: {
      adult: "Pneumonie: Tag 1 Sättigung 2x 100 mg i.v., dann qd 1x 100 mg i.v. oder qd 1x 300 mg p.o. Hautinfektionen: Sättigung 2x 100 mg i.v. oder 2x 450 mg p.o. (Tag 1 & 2), dann qd 1x 100 mg i.v. oder qd 1x 300 mg p.o.",
      pediatric: "Streng kontraindiziert unter 8 Jahren!",
      renalAdjustment: "Bei Niereninsuffizienz ist keine Dosisanpassung erforderlich."
    },
    mechanismOfAction: "Bakteriostatisch. Modernes Aminomethylcyclin (Tetracyclin-Klasse). Bindet an die bakterielle 30S-Ribosomenuntereinheit, um die Proteinsynthese zu hemmen. Entwickelt, um die beiden Hauptmechanismen der Tetracyclinresistenz (Effluxpumpen und Ribosomenschutzproteine) zu überwinden.",
    sideEffects: [
      "Übelkeit, Erbrechen (relativ häufig bei oraler Verabreichung)",
      "Zahnverfärbungen bei Kindern (kontraindiziert unter 8 Jahren und während der Schwangerschaft)",
      "Erhöhung der Leberenzyme",
      "Infusionsstellenreaktionen"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 1,
      anaerobe: 1,
      atypical: 2,
      pseudomonas: 0,
      other: "Breitspektrum-Wirkstoff, der gegen resistente Gram-positive (MRSA, Penicillin-resistente S. pneumoniae, VRE) und atypische Erreger wirksam ist."
    },
    indications: [
      "Ambulant erworbene Pneumonie (CAP)",
      "Akute bakterielle Haut- und Weichteilinfektionen (ABSSSI)"
    ],
    notes: "Bietet aufgrund seiner oralen Formulierung eine hervorragende Option für eine i.v.-zu-p.o.-Umstellungstherapie (Switch-Therapie)."
  },
  {
    id: "sarecycline",
    name: "Sarecyclin",
    abbreviation: "SAR",
    brandNames: "Seysara",
    group: "Tetracycline",
    halfLife: "Ca. 21 - 22 Stunden",
    pae: "Mäßiger postbiotischer Effekt",
    effectType: "bakteriostatisch",
    dosage: {
      adult: "Basierend auf dem Körpergewicht: 33-54 kg: 60 mg p.o. qd; 55-84 kg: 100 mg p.o. qd; 85-136 kg: 150 mg p.o. qd",
      pediatric: "Nicht empfohlen unter 9 Jahren (Risiko von Zahnverfärbungen)",
      renalAdjustment: "Keine Dosisanpassung erforderlich."
    },
    mechanismOfAction: "Bakteriostatisch. Ein neuartiges, schmalspektriges Tetracyclinderivat. Bindet an das bakterielle 30S-Ribosom, um die Proteinsynthese zu hemmen. Aufgrund seiner spezifischen chemischen Struktur weist es eine deutlich geringere Aktivität gegen gramnegative Darmflora auf, wodurch Dysbiose reduziert wird.",
    sideEffects: [
      "Übelkeit, Kopfschmerzen",
      "Theoretisches Risiko von Zahnverfärbungen (während der Zahnentwicklung)",
      "Leichte Lichtempfindlichkeit (weniger häufig als bei anderen Tetracyclinen)",
      "Vulvovaginale Candidose"
    ],
    spectrum: {
      gramPositive: 1,
      gramNegative: 0,
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 0,
      other: "Ein hochgradig schmalspektriges Antibiotikum, das speziell gegen Cutibacterium acnes entwickelt wurde und die normale Darmflora schont."
    },
    indications: [
      "Behandlung von mittelschwerer bis schwerer Acne vulgaris mit entzündlichen Läsionen bei Erwachsenen und Kindern über 9 Jahren"
    ],
    notes: "Das erste von der FDA zugelassene Tetracyclinderivat, das speziell für die gezielte Schmalspektrum-Behandlung von Akne entwickelt wurde."
  },
  {
    id: "colistin",
    name: "Colistin (Colistimethat-Natrium)",
    abbreviation: "CST",
    brandNames: "Colomycin, Tadim",
    group: "Polymyxine",
    halfLife: "3 - 5 Stunden (bei Niereninsuffizienz extrem verlängert)",
    pae: "Mäßiger postbiotischer Effekt bei Gram-negativen Erregern",
    effectType: "bakterizid",
    dosage: {
      adult: "Intravenös: Sättigungsdosis von 9 Mio. IE i.v., dann Erhaltung: 2x 4,5 Mio. IE i.v. täglich (angepasst an die Nierenfunktion). Inhalation: 2-3x 1-2 Mio. IE täglich.",
      pediatric: "75.000 - 150.000 IE/kg täglich i.v. aufgeteilt in 3 Einzeldosen (max. 150.000 IE/kg täglich in schweren Fällen)",
      renalAdjustment: "Strenge Dosierungsanpassung erforderlich! GFR 30-50 ml/min: 5,5 - 7,5 Mio. IE/Tag; GFR 10-30 ml/min: 4,5 - 5,5 Mio. IE/Tag; GFR < 10 ml/min: 2,25 - 4,5 Mio. IE/Tag. Zusätzliche Dosierung während der Dialyse erforderlich."
    },
    mechanismOfAction: "Schnell bakterizid. Wirkt als kationisches Tensid: Bindet an Lipopolysaccharide (LPS) und Phospholipide in der äußeren Membran gramnegativer Bakterien und verdrängt Calcium- und Magnesiumionen. Dies stört die Integrität der äußeren und inneren Membran, was zum Austritt von Zellinhalt und zum Zelltod führt.",
    sideEffects: [
      "Schwere Nephrotoxizität (Nierenschädigung, akute Tubulusnekrose - häufig, dosisabhängig)",
      "Schwere Neurotoxizität (Parästhesie, Schwindel, Verwirrtheit, neuromuskuläre Blockade und Atemlähmung)",
      "Bronchospasmus bei Inhalation",
      "Überempfindlichkeitsreaktionen"
    ],
    spectrum: {
      gramPositive: 0,
      gramNegative: 2,
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 2,
      other: "Nur gegen gramnegative Bakterien wirksam. Unwirksam gegen Proteus-, Providencia-, Serratia- und Burkholderia-Arten (intrinsische Resistenz!)."
    },
    indications: [
      "Letzte Option bei schweren systemischen Infektionen durch multiresistente und panresistente gramnegative Erreger (CRE, MDR Pseudomonas, MDR Acinetobacter) in Kombination",
      "Chronische Pseudomonas-Lungeninfektion bei Mukoviszidose-Patienten via Inhalation"
    ],
    notes: "Colistin wird als Prodrug, Colistimethat-Natrium (CMS), verabreicht. Es wurde früher wegen schwerer Toxizität aufgegeben, erlebt aber wegen der Verbreitung von MDR-Gram-negativen Erregern eine Renaissance als Lebensretter der letzten Instanz."
  }
];