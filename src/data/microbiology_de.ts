/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Microbe } from '../types';

export const microbesData: Microbe[] = [
  {
    id: "s_pyogenes",
    name: "Streptococcus pyogenes (Gruppe-A-Streptokokken)",
    type: "gram-positive",
    clinicalImportance: "Verursacht Tonsillopharyngitis, Scharlach, Erysipel, nekrotisierende Fasziitis und das streptokokkenbedingte toxische Schocksyndrom (STSS). Wichtige Komplikationen sind rheumatisches Fieber und poststreptokokken-Glomerulonephritis.",
    resistanceMechanisms: "Bis heute zu 100% empfindlich gegenüber Penicillin (weltweit wurde noch kein penicillinresistenter Stamm gefunden!). Gegenüber Makroliden ist jedoch eine zunehmende Resistenz zu beobachten (MLS_B-Resistenz durch erm-Gene oder die mefA-Effluxpumpe).",
    firstLineDrugs: ["penicillin_g", "penicillin_v", "amoxicillin"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "S", mechanismNotes: "Sehr empfindlich, keine bekannte Resistenz." },
      { antibioticId: "penicillin_v", antibioticName: "Phenoxymethylpenicillin", susceptibility: "S" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "S" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/Clavulansäure", susceptibility: "S" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "S" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "S", mechanismNotes: "Zu 100% empfindlich gegenüber Beta-Laktamen (einschließlich Cefuroxim), abgeleitet aus der Penicillin-Empfindlichkeit." },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "S" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S", mechanismNotes: "Hervorragende Aktivität gegen alle Beta-Laktam-empfindlichen Gram-positiven Erreger." },
      { antibioticId: "clarithromycin", antibioticName: "Clarithromycin", susceptibility: "S", mechanismNotes: "In Ungarn kann die Resistenzrate etwa 10-15% betragen." },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "S", mechanismNotes: "Bei nekrotisierender Fasziitis zur Hemmung der Toxinproduktion obligat." },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "S" }
    ]
  },
  {
    id: "s_pneumoniae_s",
    name: "Streptococcus pneumoniae (Penicillin-empfindlich)",
    type: "gram-positive",
    clinicalImportance: "Häufigster Erreger der ambulant erworbenen Pneumonie (CAP), Meningitis, Otitis media, akuten Sinusitis und Sepsis bei Erwachsenen. Bekapselter Diplokokkus.",
    resistanceMechanisms: "Penicillin-empfindliche Stämme sprechen gut auf Standard-Betalaktame an. Bei Resistenz kommt es zu einer strukturellen Veränderung der PBP-Transpeptidasen (keine Betalaktamase-Produktion!).",
    firstLineDrugs: ["amoxicillin", "penicillin_g", "ceftriaxone"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "S" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "S" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/Clavulansäure", susceptibility: "S" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "S" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "S" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S", mechanismNotes: "Penicillin-empfindliche Stämme sind ebenfalls hochgradig empfindlich gegenüber Meropenem." },
      { antibioticId: "clarithromycin", antibioticName: "Clarithromycin", susceptibility: "S" },
      { antibioticId: "levofloxacin", antibioticName: "Levofloxacin", susceptibility: "S" },
      { antibioticId: "doxycycline", antibioticName: "Doxycyclin", susceptibility: "S" },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "S" }
    ]
  },
  {
    id: "s_pneumoniae_r",
    name: "Streptococcus pneumoniae (Penicillin-resistent - PRSP)",
    type: "gram-positive",
    clinicalImportance: "Verursacht die gleichen Infektionen, die Behandlung ist jedoch schwieriger und erfordert höhere Betalaktam-Dosen oder alternative Wirkstoffe (Chinolone, Vancomycin).",
    resistanceMechanisms: "Mutation der Strukturgene der Penicillin-bindenden Proteine (vor allem PBP-2b, PBP-2x, PBP-1a) und Ausbildung von Mosaikgenen, die die Bindungsaffinität der Betalaktame verringern.",
    firstLineDrugs: ["ceftriaxone", "levofloxacin", "vancomycin"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Verringerte PBP-Affinität." },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "I", mechanismNotes: "Bei leichten Atemwegsinfektionen mit hoher Dosis (3 g/Tag p.o.) unter Umständen noch überwindbar." },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/Clavulansäure", susceptibility: "I", mechanismNotes: "Der Betalaktamase-Hemmer hilft nicht, da die Resistenz nicht betalaktamase-vermittelt ist!" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "S", mechanismNotes: "Bei Meningitis in hoher Dosierung (2x 2g i.v.) noch wirksam." },
      { antibioticId: "clarithromycin", antibioticName: "Clarithromycin", susceptibility: "R", mechanismNotes: "Kreuzresistenz ist häufig." },
      { antibioticId: "levofloxacin", antibioticName: "Levofloxacin", susceptibility: "S", mechanismNotes: "Atemwegs-Chinolone bleiben wirksam." },
      { antibioticId: "doxycycline", antibioticName: "Doxycyclin", susceptibility: "I" },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "S", mechanismNotes: "Alle Stämme sind empfindlich." }
    ]
  },
  {
    id: "s_aureus_mssa",
    name: "Staphylococcus aureus (Methicillin-empfindlich - MSSA)",
    type: "gram-positive",
    clinicalImportance: "Wichtigster Erreger von Haut- und Weichteilinfektionen (Furunkel, Zellulitis), Osteomyelitis, akuter infektiöser Endokarditis, nosokomialer Sepsis und Pneumonie.",
    resistanceMechanisms: "Viele Stämme produzieren eine plasmidvermittelte Betalaktamase (Penicillinase), die natürliche Penicilline und Aminopenicilline spaltet. Sie bleiben jedoch empfindlich gegenüber Oxacillin, Cephalosporinen der 1. Generation sowie Betalaktamase-Inhibitor-Kombinationen.",
    firstLineDrugs: ["cefazolin", "amoxicillin_clavulanate"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Resistenz durch staphylokokkäre Penicillinase-Produktion (90%+)." },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/Clavulansäure", susceptibility: "S", mechanismNotes: "Clavulansäure hemmt die staphylokokkäre Penicillinase hervorragend!" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "S", mechanismNotes: "Der erstlinige Goldstandard bei systemischen MSSA-Infektionen." },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "S", mechanismNotes: "MSSA-Stämme sind vollständig empfindlich gegenüber Cephalosporinen der 2. Generation." },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "S" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S", mechanismNotes: "Hervorragende Aktivität gegen MSSA als Beta-Laktamase-stabiles Carbapenem." },
      { antibioticId: "clarithromycin", antibioticName: "Clarithromycin", susceptibility: "S" },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "S", mechanismNotes: "Penetriert hervorragend in Knochen und Weichteile." },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "S" }
    ]
  },
  {
    id: "s_aureus_mrsa",
    name: "Staphylococcus aureus (Methicillin-resistent - MRSA)",
    type: "gram-positive",
    clinicalImportance: "Verursacht schwere nosokomiale und ambulant erworbene Infektionen (Pneumonie, Urosepsis, Wundinfektionen, Endokarditis), die multiresistent gegenüber Betalaktamen sind.",
    resistanceMechanisms: "Erwerb des chromosomalen mecA- oder mecC-Gens, das eine alternative Transpeptidase (PBP-2a / PBP-2') kodiert. Diese hat eine extrem geringe Affinität zu allen Standard-Betalaktamen (Penicilline, Cephalosporine, Carbapeneme), wodurch diese wirkungslos werden.",
    firstLineDrugs: ["vancomycin", "linezolid", "ceftaroline"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/Clavulansäure", susceptibility: "R", mechanismNotes: "Der Betalaktamase-Inhibitor ist gegen das veränderte PBP wirkungslos!" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "R", mechanismNotes: "Resistent gegenüber allen Standard-Betalaktamen!" },
      { antibioticId: "ceftaroline", antibioticName: "Ceftarolin", susceptibility: "S", mechanismNotes: "Das einzige Anti-MRSA-Cephalosporin (5. Generation), das an PBP-2a bindet." },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "I", mechanismNotes: "Bei ambulant erworbenem MRSA kann noch Empfindlichkeit bestehen." },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "S", mechanismNotes: "Seit Jahrzehnten die Standardbehandlung." },
      { antibioticId: "linezolid", antibioticName: "Linezolid", susceptibility: "S", mechanismNotes: "Hervorragend bei Pneumonie." }
    ]
  },
  {
    id: "e_faecalis",
    name: "Enterococcus faecalis",
    type: "gram-positive",
    clinicalImportance: "Erreger von Harnwegsinfektionen, Gallenwegsinfektionen, nosokomialer Sepsis und subakuter infektiöser Endokarditis. Besitzt eine natürliche Widerstandsfähigkeit gegenüber vielen Antibiotika.",
    resistanceMechanisms: "Natürliche Resistenz gegenüber allen Cephalosporinen! Mäßige natürliche Resistenz gegenüber Aminoglykosiden und Glykopeptiden, bleibt jedoch im Allgemeinen empfindlich gegenüber Ampicillin.",
    firstLineDrugs: ["amoxicillin", "vancomycin", "linezolid"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "S" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin (Ampicillin)", susceptibility: "S", mechanismNotes: "Der wichtigste Erstlinienwirkstoff." },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/Clavulansäure", susceptibility: "S" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R", mechanismNotes: "Alle Cephalosporine sind gegen Enterokokken wirkungslos!" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R", mechanismNotes: "Natürliche Resistenz." },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "I", mechanismNotes: "Mäßig aktiv." },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "I", mechanismNotes: "Allein wirkungslos, zeigt aber in Kombination mit einem Betalaktam bei Endokarditis eine synergistische bakterizide Wirkung!" },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "S", mechanismNotes: "In der Regel empfindlich (außer VRE)." },
      { antibioticId: "linezolid", antibioticName: "Linezolid", susceptibility: "S" },
      { antibioticId: "nitrofurantoin", antibioticName: "Nitrofurantoin", susceptibility: "S", mechanismNotes: "Hervorragend bei Harnwegsinfektionen." }
    ]
  },
  {
    id: "e_faecium",
    name: "Enterococcus faecium (VRE-Risiko)",
    type: "gram-positive",
    clinicalImportance: "Verursacht schwere nosokomiale Infektionen (Sepsis, Peritonitis, Endokarditis), oft mit ausgeprägter Resistenz gegenüber Ampicillin und Glykopeptiden (VRE).",
    resistanceMechanisms: "Die Betalaktam-Resistenz wird durch Überproduktion oder Mutation des PBP5-Proteins verursacht. Die Glykopeptid-Resistenz (Vancomycin) wird durch das vanA- oder vanB-Gen gesteuert, das das Ende der Peptidoglykankette von D-Ala-D-Ala zu D-Ala-D-Lac verändert, sodass Vancomycin nicht mehr binden kann.",
    firstLineDrugs: ["linezolid"],
    resistances: [
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R", mechanismNotes: "Aufgrund der PBP5-Mutation sind fast alle Stämme ampicillinresistent!" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "R" },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "R", mechanismNotes: "Bei VRE-Stämmen resistent (D-Ala-D-Lac-Modifikation)." },
      { antibioticId: "linezolid", antibioticName: "Linezolid", susceptibility: "S", mechanismNotes: "Erstlinienbehandlung bei VRE-Infektionen." },
      { antibioticId: "nitrofurantoin", antibioticName: "Nitrofurantoin", susceptibility: "S", mechanismNotes: "Kann bei Zystitis auch bei VRE noch wirksam sein." }
    ]
  },
  {
    id: "e_coli_wild",
    name: "Escherichia coli (Wildtyp / empfindlicher Stamm)",
    type: "gram-negative",
    clinicalImportance: "Häufigster Erreger von Harnwegsinfektionen (Zystitis, Pyelonephritis, Urosepsis). Wichtiger Erreger intraabdomineller Infektionen und der neonatalen Meningitis.",
    resistanceMechanisms: "Wildtyp-(empfindliche) Stämme sprechen gut auf die meisten gramnegativ wirksamen Antibiotika an, zeigen jedoch bereits eine gewisse natürliche plasmidvermittelte Resistenz gegenüber Ampicillin.",
    firstLineDrugs: ["nitrofurantoin", "fosfomycin", "co-amoxiclav", "ceftriaxone"],
    resistances: [
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "I", mechanismNotes: "Viele Stämme sind bereits durch plasmidvermittelte Betalaktamase resistent." },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/Clavulansäure", susceptibility: "S" },
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
    name: "Escherichia coli (ESBL-bildend)",
    type: "gram-negative",
    clinicalImportance: "Verursacht schwere, komplizierte Harnwegs-, Abdominal- und systemische nosokomiale Infektionen mit erweiterter Betalaktam-Resistenz.",
    resistanceMechanisms: "Produktion einer Extended-Spectrum-Betalaktamase (ESBL, z.B. CTX-M-, TEM-, SHV-Typen). Diese Enzyme spalten alle Penicilline, Cephalosporine der 1., 2., 3. und 4. Generation sowie Aztreonam. Betalaktamase-Inhibitoren (Clavulansäure, Tazobactam) hemmen sie, jedoch sind Carbapeneme gegenüber ihnen völlig stabil.",
    firstLineDrugs: ["meropenem", "ertapenem", "nitrofurantoin", "fosfomycin"],
    resistances: [
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/Clavulansäure", susceptibility: "I", mechanismNotes: "Kann in vitro empfindlich sein, jedoch bei systemischer Infektion in vivo aufgrund des hohen Inokulum-Effekts unwirksam sein!" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R", mechanismNotes: "Alle Cephalosporine der 3. Generation werden durch die ESBL gespalten!" },
      { antibioticId: "cefepime", antibioticName: "Cefepim", susceptibility: "R", mechanismNotes: "Auch die Cephalosporine der 4. Generation sind resistent." },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S", mechanismNotes: "Carbapeneme sind gegenüber ESBL stabil." },
      { antibioticId: "ertapenem", antibioticName: "Ertapenem", susceptibility: "S", mechanismNotes: "Eine hervorragende Option für die systemische Behandlung." },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "R", mechanismNotes: "ESBL-Plasmide tragen häufig auch eine Fluorchinolon-Resistenz (Multiresistenz!)." },
      { antibioticId: "nitrofurantoin", antibioticName: "Nitrofurantoin", susceptibility: "S", mechanismNotes: "In der Blase auch bei ESBL hervorragend wirksam und empfindlich." },
      { antibioticId: "fosfomycin", antibioticName: "Fosfomycin", susceptibility: "S", mechanismNotes: "Bleibt bei Zystitis auch bei ESBL empfindlich." }
    ]
  },
  {
    id: "p_aeruginosa",
    name: "Pseudomonas aeruginosa (Risiko der Multiresistenz)",
    type: "gram-negative",
    clinicalImportance: "Gefürchteter Erreger der nosokomialen Pneumonie (VAP), des febrilen Neutropenie-Syndroms, schwerer Verbrennungswundinfektionen, katheterassoziierter Urosepsis und von Lungeninfektionen bei Mukoviszidose. Gekennzeichnet durch hohe intrinsische und erworbene Resistenz.",
    resistanceMechanisms: "Natürliche Resistenz gegenüber zahlreichen Betalaktamen aufgrund extrem geringer Membranpermeabilität und aktiver Effluxpumpen (MexAB-OprM). Verfügt über eine chromosomale AmpC-Betalaktamase, die bei Betalaktam-Exposition derepremiert (verstärkt gebildet) werden kann. Als erworbene Resistenz können Carbapenemasen oder Porin-Mutationen (OprD-Verlust) auftreten.",
    firstLineDrugs: ["piperacillin_tazobactam", "cefepime", "meropenem", "amikacin", "ciprofloxacin"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Natürliche Resistenz." },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/Clavulansäure", susceptibility: "R", mechanismNotes: "Natürliche Resistenz. Die Clavulansäure hemmt AmpC nicht." },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R", mechanismNotes: "STRIKT UNWIRKSAM! Ceftriaxon und Cefotaxim wirken nicht gegen Pseudomonas!" },
      { antibioticId: "ceftazidime", antibioticName: "Ceftazidim", susceptibility: "S", mechanismNotes: "Ein anti-pseudomonal wirksames Cephalosporin." },
      { antibioticId: "cefepime", antibioticName: "Cefepim", susceptibility: "S", mechanismNotes: "4. Generation, hervorragend gegen Pseudomonas wirksam." },
      { antibioticId: "piperacillin_tazobactam", antibioticName: "Piperacillin/Tazobactam", susceptibility: "S", mechanismNotes: "Die Standard-Antipseudomonal-Penicillinkombination." },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S", mechanismNotes: "Aktiv, kann jedoch durch Porinverlust resistent werden." },
      { antibioticId: "imipenem_cilastatin", antibioticName: "Imipenem/Cilastatin", susceptibility: "I", mechanismNotes: "Gemäß den EUCAST-Richtlinien gibt es keine Standarddosierungs-Kategorie 'S' für Imipenem gegen P. aeruginosa. Wildtyp-empfindliche Stämme fallen unter 'Sensibel bei erhöhter Exposition' (I), was bedeutet, dass eine erfolgreiche Therapie eine hohe Dosierung (z. B. 1g alle 6 Std.) oder verlängerte Infusion erfordert." },
      { antibioticId: "ertapenem", antibioticName: "Ertapenem", susceptibility: "R", mechanismNotes: "STRIKT UNWIRKSAM! Durchdringt die Membran von Pseudomonas nicht!" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "S" },
      { antibioticId: "amikacin", antibioticName: "Amikacin", susceptibility: "S", mechanismNotes: "Das wirksamste Aminoglykosid dagegen." },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "S", mechanismNotes: "Die einzige orale Option gegen Pseudomonas!" }
    ]
  },
  {
    id: "b_fragilis",
    name: "Bacteroides fragilis",
    type: "anaerobe",
    clinicalImportance: "Der wichtigste anaerobe Erreger im Bauchraum. Schlüsselerreger von Peritonitis, intraabdominellen Abszessen, Aspirationspneumonie und entzündlichen Erkrankungen des kleinen Beckens.",
    resistanceMechanisms: "Nahezu alle Stämme produzieren eine Betalaktamase (Ambler-Klasse A, z.B. Cephalosporinase), die Penicillin, Ampicillin und Cephalosporine zerstört. Dadurch sind diese Wirkstoffe unwirksam. Betalaktamase-Inhibitoren, Carbapeneme und Metronidazol sind hervorragend wirksam.",
    firstLineDrugs: ["metronidazole", "amoxicillin_clavulanate", "meropenem"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Plasmidvermittelte Betalaktamase-Produktion." },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/Clavulansäure", susceptibility: "S", mechanismNotes: "Der Betalaktamase-Hemmer stellt die Wirksamkeit erfolgreich wieder her." },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R", mechanismNotes: "Cephalosporine sind gegen B. fragilis schwach wirksam." },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S", mechanismNotes: "Carbapeneme sind äußerst stabil und wirksam." },
      { antibioticId: "piperacillin_tazobactam", antibioticName: "Piperacillin/Tazobactam", susceptibility: "S" },
      { antibioticId: "metronidazole", antibioticName: "Metronidazol", susceptibility: "S", mechanismNotes: "Der wichtigste und wirksamste bakterizide Wirkstoff gegen abdominelle Anaerobier." },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "I", mechanismNotes: "Die Resistenzrate steigt auch in Ungarn (ca. 20-30%)." }
    ]
  },
  {
    id: "l_pneumophila",
    name: "Legionella pneumophila",
    type: "atypical",
    clinicalImportance: "Verursacht eine schwere, lebensbedrohliche atypische Pneumonie (Legionärskrankheit), häufig mit hohem Fieber, trockenem Husten, relativer Bradykardie, Hyponatriämie und neurologischen Symptomen (Verwirrtheit).",
    resistanceMechanisms: "Intrazellulärer Erreger (vermehrt sich innerhalb alveolärer Makrophagen). Alle Betalaktame (Penicilline, Cephalosporine, Carbapeneme) sind gegen ihn wirkungslos, da sie nicht in die Makrophagen eindringen können und die Zellwandstruktur der Bakterie ebenfalls abweichend ist. Nur Wirkstoffe mit guter Zellpenetration (Makrolide, Chinolone, Tetracycline) sind wirksam.",
    firstLineDrugs: ["levofloxacin", "clarithromycin", "azithromycin"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Keine intrazelluläre Penetration, Betalaktame sind wirkungslos!" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/Clavulansäure", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "R" },
      { antibioticId: "clarithromycin", antibioticName: "Clarithromycin", susceptibility: "S", mechanismNotes: "Hervorragende Zellpenetration." },
      { antibioticId: "azithromycin", antibioticName: "Azithromycin", susceptibility: "S" },
      { antibioticId: "levofloxacin", antibioticName: "Levofloxacin", susceptibility: "S", mechanismNotes: "In schweren Fällen der stärkste bakterizide Wirkstoff der ersten Wahl." },
      { antibioticId: "doxycycline", antibioticName: "Doxycyclin", susceptibility: "S" }
    ]
  },
  {
    id: "k_pneumoniae_wild",
    name: "Klebsiella pneumoniae (Wildtyp / empfindlicher Stamm)",
    type: "gram-negative",
    clinicalImportance: "Häufiger Erreger von Harnwegs-, Bauchhöhlen- und Lungeninfektionen (vor allem Aspirationspneumonie bei Alkoholikern oder Diabetikern mit 'gelee-/johannisbeerartigem' Sputum). Eine der Hauptursachen für nosokomiale Infektionen.",
    resistanceMechanisms: "Natürliche (intrinsische) Resistenz gegenüber Ampicillin/Amoxicillin aufgrund der chromosomalen SHV-1-Betalaktamase. Gut behandelbar mit Betalaktamase-Inhibitoren (z.B. Clavulansäure) oder Cephalosporinen.",
    firstLineDrugs: ["amoxicillin_clavulanate", "ceftriaxone"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R", mechanismNotes: "Aufgrund der natürlichen SHV-1-Betalaktamase!" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/Clavulansäure", susceptibility: "S" },
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
    name: "Klebsiella pneumoniae (Carbapenem-resistent - KPC)",
    type: "gram-negative",
    clinicalImportance: "Erreger schwerer nosokomialer Infektionen (Pneumonie, Sepsis, Harnwegsinfektion) mit extrem hoher Mortalität aufgrund der begrenzten Therapiemöglichkeiten.",
    resistanceMechanisms: "Produktion von KPC (Klebsiella-pneumoniae-Carbapenemase) oder Metallo-Betalaktamase (NDM-1, VIM, IMP). Diese spalten alle Betalaktame, einschließlich der Carbapeneme. Häufig auch mit Resistenz gegenüber Aminoglykosiden und Chinolonen verbunden (Multiresistenz).",
    firstLineDrugs: ["colistin", "ceftazidime_avibactam"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/Clavulansäure", susceptibility: "R" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "R", mechanismNotes: "Aufgrund der Carbapenemase-Produktion resistent gegenüber allen Carbapenemen!" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "R", mechanismNotes: "Aufgrund assoziierter Resistenzplasmide." },
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
    clinicalImportance: "Häufiger Erreger von Harnwegsinfektionen und Urosepsis. Seine starke Urease-Produktion spaltet Harnstoff zu Ammoniak, was den Urin alkalisiert (pH > 7,5-8) und rasch zur Bildung von Struvitsteinen (Magnesium-Ammonium-Phosphat) führt.",
    resistanceMechanisms: "Wildtyp-(empfindliche) Stämme sprechen gut auf Aminopenicilline und Cephalosporine an und besitzen keine natürliche Betalaktamase. Intrinsisch (natürlich) vollständig resistent gegenüber Nitrofurantoin, Tetracyclinen (Doxycyclin) und Colistin!",
    firstLineDrugs: ["amoxicillin", "ceftriaxone"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "S", mechanismNotes: "Im Gegensatz zu vielen anderen gramnegativen Erregern ist der Wildtyp aminopenicillinempfindlich." },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/Clavulansäure", susceptibility: "S" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "S" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "S" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "S" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S" },
      { antibioticId: "imipenem_cilastatin", antibioticName: "Imipenem/Cilastatin", susceptibility: "I", mechanismNotes: "Nach EUCAST-Richtlinien weisen Mitglieder der Tribus Proteae (Morganella, Proteus, Providencia) eine verminderte Empfindlichkeit gegenüber Imipenem auf (standardmäßig als I eingestuft: Empfindlich bei erhöhter Exposition)." },
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
    clinicalImportance: "Wichtiger Erreger nosokomial erworbener Infektionen, intensivmedizinischer Pneumonien, Urosepsis und Wundinfektionen. Birgt ein erhebliches Risiko bei Superinfektionen.",
    resistanceMechanisms: "Besitzt eine chromosomal kodierte AmpC-Betalaktamase. Dieses Enzym wird im Grundzustand nur in geringem Umfang gebildet, kann jedoch bei Betalaktam-Exposition (insbesondere durch Cephalosporine der 2.-3. Generation wie Cefuroxim, Ceftriaxon) derepremiert werden (durch Mutation dauerhaft auf hohes Niveau schalten), was zum Therapieversagen führt. Carbapeneme und das Cephalosporin der 4. Generation, Cefepim, sind dagegen stabil.",
    firstLineDrugs: ["cefepime", "meropenem"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/Clavulansäure", susceptibility: "R", mechanismNotes: "Die Clavulansäure hemmt die AmpC-Betalaktamase nicht wirksam!" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R", mechanismNotes: "Kann in vitro empfindlich erscheinen, während der Behandlung können sich jedoch Derepression und Resistenz (AmpC) entwickeln!" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S", mechanismNotes: "Carbapeneme sind gegenüber AmpC stabil." },
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
    clinicalImportance: "Opportunistischer Erreger nosokomialer Harnwegsinfektionen, Pneumonie, Sepsis, Meningitis und Wundinfektionen. Kann bei Raumtemperatur ein charakteristisches rotes Pigment (Prodigiosin) bilden.",
    resistanceMechanisms: "Trägt eine AmpC-Betalaktamase. Intrinsisch (natürlich) resistent gegenüber Colistin, Polymyxin B, Nitrofurantoin und Cephalosporinen der 1. Generation. Spricht im Allgemeinen gut auf Carbapeneme und Fluorchinolone an.",
    firstLineDrugs: ["cefepime", "meropenem", "ciprofloxacin"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/Clavulansäure", susceptibility: "R" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R", mechanismNotes: "Natürliche Resistenz." },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "S", mechanismNotes: "Erfordert Vorsicht aufgrund des Risikos einer AmpC-Derepression." },
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
    name: "Acinetobacter baumannii (MDR - Multiresistent)",
    type: "gram-negative",
    clinicalImportance: "Der wichtigste Erreger schwerer opportunistischer nosokomialer Infektionen (beatmungsassoziierte Pneumonie - VAP, katheterassoziierte Sepsis, schwere Weichteil- und Verbrennungswundinfektionen) auf Intensivstationen. Äußerst widerstandsfähig, überlebt selbst auf trockenen Oberflächen wochenlang.",
    resistanceMechanisms: "Ein extrem breites Spektrum erworbener Resistenzmechanismen: Carbapenemasen (vor allem OXA-23-Typen sowie Metallo-Betalaktamasen), Effluxpumpen, Porinverlust. Häufig resistent gegenüber nahezu allen Betalaktamen, Aminoglykosiden und Chinolonen.",
    firstLineDrugs: ["meropenem", "colistin"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/Clavulansäure", susceptibility: "R" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "R", mechanismNotes: "Die Mehrzahl der Krankenhausstämme ist heute bereits carbapenemresistent (CRAB)." },
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
    clinicalImportance: "Verursacht Tracheobronchitis und atypische Pneumonie ('walking pneumonia' - ausgeprägte radiologische Veränderungen trotz milder Symptome), am häufigsten bei Schulkindern und jungen Erwachsenen. Als extrapulmonale Komplikation können kälteagglutininbedingte hämolytische Anämie und Erythema multiforme auftreten.",
    resistanceMechanisms: "Besitzt keine Peptidoglykan-Zellwand, weshalb alle die Zellwandsynthese hemmenden Wirkstoffe (Penicilline, Cephalosporine, Carbapeneme) von Natur aus vollständig wirkungslos sind (100% resistent). Nur Proteinsynthese-Hemmer (Makrolide, Tetracycline) und DNA-Gyrase-Hemmer (Fluorchinolone) sind wirksam.",
    firstLineDrugs: ["clarithromycin", "doxycycline"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Keine Zellwand, Betalaktame sind wirkungslos!" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/Clavulansäure", susceptibility: "R" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "R" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "R" },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "R" },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "I" },
      { antibioticId: "metronidazole", antibioticName: "Metronidazol", susceptibility: "R" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "S", mechanismNotes: "Hervorragende Zellpenetration, obwohl die Atemwegs-Chinolone (Moxifloxacin) in vivo noch stärker wirken." }
    ]
  },
  {
    id: "c_pneumoniae",
    name: "Chlamydia pneumoniae",
    type: "atypical",
    clinicalImportance: "Verursacht ambulant erworbene atypische Pneumonie und Bronchitis. Gekennzeichnet durch obligat intrazelluläre Vermehrung mit einem zweiteiligen Lebenszyklus (Elementarkörperchen und Retikularkörperchen).",
    resistanceMechanisms: "Aufgrund der obligat intrazellulären Lebensweise und der abweichenden Zellwandstruktur erreichen Betalaktame keine wirksame Konzentration. Nur intrazellulär akkumulierende Wirkstoffe sind wirksam.",
    firstLineDrugs: ["doxycycline", "clarithromycin"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Intrazellulärer Erreger, Betalaktame sind wirkungslos!" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/Clavulansäure", susceptibility: "R" },
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
    clinicalImportance: "Der Erreger des Q-Fiebers. Verursacht in akuter Form grippeähnliche Symptome, Pneumonie oder Hepatitis; in chronischer Form eine lebensbedrohliche Endokarditis (mit negativer Blutkultur). Eine Zoonose, die durch Einatmen von Geburtssekret oder Staub infizierter Tiere (Schafe, Ziegen, Rinder) übertragen wird.",
    resistanceMechanisms: "Ein obligat intrazellulärer Parasit, der im sauren Milieu der Phagolysosomen lebt. Äußerst widerstandsfähig gegenüber Umwelteinflüssen. Betalaktame sind wirkungslos. Bei chronischer Infektion muss Doxycyclin mit Hydroxychloroquin kombiniert werden, um den pH-Wert der Phagolysosomen zu alkalisieren, da der saure pH-Wert das Antibiotikum sonst hemmt.",
    firstLineDrugs: ["doxycycline"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Intrazellulärer Erreger, Betalaktame sind wirkungslos!" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/Clavulansäure", susceptibility: "R" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "R" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "R" },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "R" },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "R" },
      { antibioticId: "metronidazole", antibioticName: "Metronidazol", susceptibility: "R" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "I", mechanismNotes: "Chinolone wirken nur mäßig." }
    ]
  },
  {
    id: "b_henselae",
    name: "Bartonella henselae",
    type: "atypical",
    clinicalImportance: "Der Erreger der Katzenkratzkrankheit, die eine regionale Lymphadenitis verursacht. Bei immunsupprimierten Patienten (z.B. HIV) können bazilläre Angiomatose (Hautveränderungen) und Peliosis hepatis entstehen. Ein wichtiger Erreger der atypischen, blutkulturnegativen Endokarditis.",
    resistanceMechanisms: "Ein fakultativ intrazellulärer Erreger, der in Endothelzellen und roten Blutkörperchen lebt. Obwohl er in vitro gegenüber Betalaktamen empfindlich sein kann, sind diese in vivo völlig wirkungslos (kein klinisches Ansprechen). Die Erstlinienbehandlung besteht aus einem Makrolid oder Tetracyclin.",
    firstLineDrugs: ["azithromycin", "doxycycline"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "In vivo völlig wirkungslos, klinisch als resistent zu betrachten!" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/Clavulansäure", susceptibility: "R" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "R" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "S", mechanismNotes: "Wirkt bei Endokarditis in Kombination mit Doxycyclin synergistisch." },
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
    clinicalImportance: "Verursacht lebensmittelbedingte Infektionen (z.B. durch Weichkäse, unpasteurisierte Milch, Aufschnitt). Bei Gesunden verursacht sie eine milde Gastroenteritis, bei Schwangeren (Fehlgeburt, Frühgeburt), Neugeborenen, älteren Menschen und Immunsupprimierten jedoch schwere Meningitis und Sepsis. Kann sich auch bei 4 °C (im Kühlschrank) vermehren.",
    resistanceMechanisms: "Natürliche (intrinsische) Resistenz gegenüber allen Cephalosporinen! Daher muss die empirische Ceftriaxon-Behandlung der bakteriellen Meningitis bei Verdacht auf Listerien stets durch Ampicillin ergänzt werden. Hervorragend empfindlich gegenüber Ampicillin/Amoxicillin.",
    firstLineDrugs: ["amoxicillin"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "S" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin (Ampicillin)", susceptibility: "S", mechanismNotes: "Amoxicillin/Ampicillin ist die erstlinige Goldstandard-Behandlung!" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/Clavulansäure", susceptibility: "S" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R", mechanismNotes: "Gekennzeichnet durch natürliche Resistenz gegenüber allen Cephalosporinen!" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "R", mechanismNotes: "Gekennzeichnet durch natürliche Resistenz gegenüber allen Cephalosporinen!" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R", mechanismNotes: "STRIKT UNWIRKSAM! Natürliche Cephalosporin-Resistenz." },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "S", mechanismNotes: "Liefert bei Meningitis in Kombination mit Ampicillin eine synergistische bakterizide Wirkung." },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "S" },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "I" },
      { antibioticId: "metronidazole", antibioticName: "Metronidazol", susceptibility: "R", mechanismNotes: "Nur gegen Anaerobier wirksam." },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "I" }
    ]
  },
  {
    id: "b_pertussis",
    name: "Bordetella pertussis",
    type: "atypical",
    clinicalImportance: "Erreger des Keuchhustens (Pertussis). Verursacht schwere, paroxysmale Hustenanfälle (mit typischem inspiratorischem 'Jauchzen'), besonders gefährlich für Säuglinge. Produziert Toxine (z. B. Pertussis-Toxin, tracheales Zytotoxin).",
    resistanceMechanisms: "Keine signifikante erworbene Resistenz gegen Makrolide, aber aufgrund der intrazellulären Lokalisation und Nische sind Beta-Laktame klinisch unwirksam.",
    firstLineDrugs: ["clarithromycin", "azithromycin"],
    resistances: [
      { antibioticId: "clarithromycin", antibioticName: "Clarithromycin", susceptibility: "S" },
      { antibioticId: "azithromycin", antibioticName: "Azithromycin", susceptibility: "S" },
      { antibioticId: "doxycycline", antibioticName: "Doxycyclin", susceptibility: "S" },
      { antibioticId: "cotrimoxazole", antibioticName: "Co-trimoxazol", susceptibility: "S" },
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Klinisch unwirksames Beta-Laktam-Antibiotikum." },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R" }
    ]
  },
  {
    id: "b_burgdorferi",
    name: "Borrelia burgdorferi",
    type: "atypical",
    clinicalImportance: "Erreger der Lyme-Borreliose, übertragen durch Zecken. Gekennzeichnet durch Wanderröte (Erythema migrans), kann später neurologische (Neuroborreliose), Gelenk- (Lyme-Arthritis) und kardiale Komplikationen verursachen.",
    resistanceMechanisms: "Spirochäten haben eine atypische Struktur und lassen sich nicht klassisch nach Gram färben. In vitro empfindlich gegenüber bestimmten Beta-Laktamen (Ceftriaxon, Amoxicillin) und Tetracyclinen, Makrolide sind in vivo jedoch weniger zuverlässig.",
    firstLineDrugs: ["doxycycline", "amoxicillin", "ceftriaxone"],
    resistances: [
      { antibioticId: "doxycycline", antibioticName: "Doxycyclin", susceptibility: "S", mechanismNotes: "Mittel der ersten Wahl für die orale Therapie." },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "S" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "S", mechanismNotes: "Mittel der ersten Wahl bei Neuroborreliose oder schweren Komplikationen (i.v.)." },
      { antibioticId: "clarithromycin", antibioticName: "Clarithromycin", susceptibility: "I", mechanismNotes: "Makrolide sind in vivo klinisch weniger zuverlässig." },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "R" }
    ]
  },
  {
    id: "c_jejuni",
    name: "Campylobacter jejuni",
    type: "gram-negative",
    clinicalImportance: "Einer der häufigsten Erreger von bakterieller Gastroenteritis weltweit (Zoonose, meist durch Geflügel übertragen). Verursacht blutig-schleimige Durchfälle, Fieber und Bauchkrämpfe. Wichtige Post-Infektions-Komplikationen sind das Guillain-Barré-Syndrom und reaktive Arthritis.",
    resistanceMechanisms: "Extrem hohe Resistenzrate gegenüber Fluorchinolonen (Ciprofloxacin) (oft >50-70% durch landwirtschaftlichen Einsatz) via Mutationen im gyrA-Gen. Makrolide (Azithromycin, Clarithromycin) stellen das Mittel der ersten Wahl dar.",
    firstLineDrugs: ["azithromycin", "clarithromycin"],
    resistances: [
      { antibioticId: "azithromycin", antibioticName: "Azithromycin", susceptibility: "S", mechanismNotes: "Therapie der Wahl bei klinischer Indikation." },
      { antibioticId: "clarithromycin", antibioticName: "Clarithromycin", susceptibility: "S" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "R", mechanismNotes: "Extrem hohe Resistenzrate aufgrund von gyrA-Mutationen." },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R" }
    ]
  },
  {
    id: "c_perfringens",
    name: "Clostridium perfringens",
    type: "anaerobe",
    clinicalImportance: "Erreger des Gasbrands (Gasödem, clostridiale Myonekrose) und von Lebensmittelvergiftungen. Verursacht rasch fortschreitende Wundinfektionen mit Gewebenekrose und Gasbildung, vermittelt durch Alpha-Toxin.",
    resistanceMechanisms: "Bleibt hochgradig empfindlich gegenüber Penicillin und anderen Beta-Laktamen. Bei schwerem Gasbrand wird Clindamycin kombiniert, um die Toxinsynthese zu hemmen.",
    firstLineDrugs: ["penicillin_g", "clindamycin", "metronidazole"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "S", mechanismNotes: "Hervorragende Wirksamkeit." },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/Clavulansäure", susceptibility: "S" },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "S", mechanismNotes: "Essentieller Kombinationspartner bei Gasbrand, um die Toxinproduktion zu stoppen." },
      { antibioticId: "metronidazole", antibioticName: "Metronidazol", susceptibility: "S" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "S" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "R", mechanismNotes: "Natürliche anaerobe Resistenz gegenüber Aminoglykosiden." }
    ]
  },
  {
    id: "c_botulinum",
    name: "Clostridium botulinum",
    type: "anaerobe",
    clinicalImportance: "Erreger des Botulismus. Das Botulinumtoxin (ein extrem potentes Neurotoxin) blockiert die Acetylcholin-Freisetzung an den neuromuskulären Endplatten, was zu schlaffen Lähmungen, Doppelbildern und Atemversagen führt. Meist übertragen durch unzureichend sterilisierte Konserven.",
    resistanceMechanisms: "Die Symptome werden durch das vorgefertigte Toxin verursacht, weshalb das Antitoxin (Serum) die wichtigste Maßnahme darstellt, nicht Antibiotika. Penicillin wird bei Wundbotulismus eingesetzt, um die vegetativen Erreger abzutöten.",
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
    clinicalImportance: "Erreger des Wundstarrkrampfes (Tetanus). Das Toxin Tetanospasmin blockiert die Freisetzung hemmender Neurotransmitter (GABA, Glycin) im Rückenmark und führt zu spastischen Lähmungen, Kieferklemme (Trismus), 'Risus sardonicus' und Opisthotonus. Übertragung über tiefe, erdverschmutzte Wunden.",
    resistanceMechanisms: "Im Vordergrund stehen chirurgisches Debridement, Tetanus-Immunglobulin (Antitoxin) und supportive Therapie. Metronidazol oder Penicillin werden eingesetzt, um vegetative Zellen zu eliminieren. Metronidazol wird bevorzugt, da Penicillin eine schwache GABA-antagonistische Wirkung hat.",
    firstLineDrugs: ["metronidazole", "penicillin_g"],
    resistances: [
      { antibioticId: "metronidazole", antibioticName: "Metronidazol", susceptibility: "S", mechanismNotes: "Gegenüber Penicillin bevorzugt, da Penicillin schwache GABA-antagonistische Effekte aufweist." },
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "S" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "R" }
    ]
  },
  {
    id: "c_difficile",
    name: "Clostridioides difficile (ehemals Clostridium)",
    type: "anaerobe",
    clinicalImportance: "Hauptursache für Antibiotika-assoziierte pseudomembranöse Kolitis (besonders nach Anwendung von Clindamycin, Cephalosporinen oder Fluorchinolonen). Produziert Toxin A und B, was zu schweren wässrigen Durchfällen, Fieber und toxischem Megakolon führt.",
    resistanceMechanisms: "Sporenbildner, extrem resistent gegenüber Standarddesinfektionsmitteln und Umweltbedingungen. Orales Vancomycin oder Fidaxomicin sind hochwirksam, da sie nicht resorbiert werden und lokal wirken.",
    firstLineDrugs: ["vancomycin", "metronidazole"],
    resistances: [
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "S", mechanismNotes: "NUR bei oraler Gabe (p.o.) wirksam! Intravenöses Vancomycin wird nicht in den Darm ausgeschieden." },
      { antibioticId: "metronidazole", antibioticName: "Metronidazol", susceptibility: "S", mechanismNotes: "Wird oral als Alternative bei milden oder initialen Verläufen eingesetzt." },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "R", mechanismNotes: "Häufiger Auslöser der Infektion (selbst resistent)." },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R", mechanismNotes: "Intrinsische Cephalosporin-Resistenz." }
    ]
  },
  {
    id: "f_tularensis",
    name: "Francisella tularensis",
    type: "gram-negative",
    clinicalImportance: "Erreger der Tularämie (Hasenpest). Zoonose, die von Nagetieren/Hasen durch Zecken, Fliegen, direkten Kontakt oder Inhalation übertragen wird. Tritt als ulzeroglanduläre, pulmonale oder typhöse Form auf. Hochinfektiös (als potenzielle Biowaffe klassifiziert).",
    resistanceMechanisms: "Produziert Beta-Laktamasen, was Penicilline und Cephalosporine unwirksam macht. Aminoglykoside (Streptomycin, Gentamicin), Tetracycline (Doxycyclin) oder Chinolone sind die bevorzugten Wirkstoffe.",
    firstLineDrugs: ["gentamicin", "doxycycline", "ciprofloxacin"],
    resistances: [
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "S", mechanismNotes: "Therapie der Wahl bei schweren systemischen Infektionen." },
      { antibioticId: "doxycycline", antibioticName: "Doxycyclin", susceptibility: "S", mechanismNotes: "Orale Alternative bei milden Verläufen." },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "S" },
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Natürliche Produktion von Beta-Laktamasen." },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R" }
    ]
  },
  {
    id: "h_influenzae",
    name: "Haemophilus influenzae",
    type: "gram-negative",
    clinicalImportance: "Gramnegatives Kokkobazillus, das Meningitis, Epiglottitis, Pneumonie, Otitis media und Sinusitis verursacht. Kapseltragende Stämme (Typ b, Hib) sind bei Kindern besonders invasiv (seit Einführung der Impfung seltener).",
    resistanceMechanisms: "Etwa 15-30% der Stämme produzieren Plasmid-kodierte TEM-1 oder ROB-1 Beta-Laktamasen, was zu einer Ampicillin-/Amoxicillin-Resistenz führt. Zudem gibt es Beta-Laktamase-negative, Ampicillin-resistente Stämme (BLNAR) aufgrund von Mutationen in PBP-3. Cephalosporine der 2. und 3. Generation bleiben hochwirksam.",
    firstLineDrugs: ["amoxicillin_clavulanate", "ceftriaxone", "cefuroxime"],
    resistances: [
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "I", mechanismNotes: "Häufig resistent durch Beta-Laktamase-Bildung oder BLNAR-Phänotyp." },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/Clavulansäure", susceptibility: "S", mechanismNotes: "Beta-Laktamase-Inhibitor stellt die Wirksamkeit erfolgreich wieder her, jedoch weniger wirksam bei BLNAR." },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "S" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "S", mechanismNotes: "Mittel der ersten Wahl bei Meningitis und invasiven Infektionen." },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "S" }
    ]
  },
  {
    id: "n_meningitidis",
    name: "Neisseria meningitidis (Meningokokken)",
    type: "gram-negative",
    clinicalImportance: "Verursacht epidemische bakterielle Meningitis und fulminante Sepsis (Waterhouse-Friderichsen-Syndrom). Typische Zeichen sind Fieber, Nackensteifigkeit und Hauteinblutungen (Petechien/Purpura). Kapseltragende gramnegative Diplokokken.",
    resistanceMechanisms: "Die meisten Stämme bleiben hochgradig empfindlich gegenüber Penicillin und Ceftriaxon. Eine geringgradige Penicillin-Resistenz kann durch Mutationen im penA-Gen (verändertes PBP-2) vorkommen.",
    firstLineDrugs: ["ceftriaxone", "penicillin_g"],
    resistances: [
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "S", mechanismNotes: "Eckpfeiler der empirischen und gezielten Therapie bei bakterieller Meningitis." },
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "S", mechanismNotes: "Hervorragend wirksam bei sensiblen Stämmen in hoher intravenöser Dosierung." },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "S" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "S", mechanismNotes: "Eingesetzt als orale Einmaldosis zur Chemoprophylaxe bei engen Kontaktpersonen." }
    ]
  },
  {
    id: "n_gonorrhoeae",
    name: "Neisseria gonorrhoeae (Gonokokken)",
    type: "gram-negative",
    clinicalImportance: "Erreger der Gonorrhoe (Tripper, sexuell übertragbare Infektion). Verursacht Urethritis bei Männern (eitriger Ausfluss) und Cervicitis/PID bei Frauen (Risiko von Unfruchtbarkeit). Kann bei Neugeborenen Ophthalmia neonatorum verursachen.",
    resistanceMechanisms: "Gekennzeichnet durch ausgeprägte Multiresistenz. Plasmid-vermittelte Beta-Laktamasen haben Penicillin längst obsolet gemacht. Auch Fluorchinolon-Resistenzen sind weit verbreitet. Ceftriaxon i.m. is der aktuelle Goldstandard, oft kombiniert mit Azithromycin zur Mitbehandlung einer Chlamydien-Koinfektion.",
    firstLineDrugs: ["ceftriaxone", "azithromycin"],
    resistances: [
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "S", mechanismNotes: "Therapie der ersten Wahl als i.m. Einmaldosis (1g oder 500mg) gemäß Leitlinien." },
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Resistent durch Penicillinase-Produktion (PPNG)." },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "R", mechanismNotes: "Chromosomal bedingte Resistenzen sind hochentwickelt und weit verbreitet." },
      { antibioticId: "azithromycin", antibioticName: "Azithromycin", susceptibility: "S", mechanismNotes: "Empfohlener Kombinationspartner zur Abdeckung einer potenziellen Chlamydien-Koinfektion." }
    ]
  },
  {
    id: "s_enteritidis",
    name: "Salmonella enteritidis",
    type: "gram-negative",
    clinicalImportance: "Häufigster Erreger von nicht-typhösen Salmonellosen (bakterielle Lebensmittelvergiftung). Verursacht Fieber, wässrige (selten blutige) Durchfälle, Erbrechen und Bauchkrämpfe, meist nach Verzehr von kontaminiertem Geflügel oder Eiern. Antibiotische Therapie ist bei Gesunden nicht indiziert (verlängert die Ausscheidung), wird jedoch bei Säuglingen, älteren Menschen und Immunsupprimierten zur Vermeidung einer systemischen Ausbreitung benötigt.",
    resistanceMechanisms: "Die meisten Stämme bleiben empfindlich gegenüber Ceftriaxon und Ciprofloxacin, wenn eine Behandlung erforderlich ist, obwohl Fluorchinolon-Resistenzen weltweit zunehmen.",
    firstLineDrugs: ["ceftriaxone", "ciprofloxacin", "azithromycin"],
    resistances: [
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "S", mechanismNotes: "Indiziert bei systemischen Infektionen." },
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
    clinicalImportance: "Erreger des Typhus abdominalis (Typhus). Verursacht eine systemische, lebensbedrohliche Infektion mit treppenförmigem Fieberanstieg, relativer Bradykardie, Roseolen auf dem Abdomen, Splenomegalie und Verstopfung oder 'erbsbreiartigen' Durchfällen. Darmperforation ist eine gefürchtete Komplikation.",
    resistanceMechanisms: "Multiresistente Stämme (MDR, resistent gegen Ampicillin, Co-trimoxazol, Chloramphenicol) sind häufig. Extensiv resistente Stämme (XDR) mit Fluorchinolon-Resistenz sind in Teilen Asiens aufgetreten. Ceftriaxon oder Azithromycin sind Mittel der Wahl.",
    firstLineDrugs: ["ceftriaxone", "azithromycin", "ciprofloxacin"],
    resistances: [
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "S", mechanismNotes: "Mittel der ersten Wahl für die intravenöse Therapie." },
      { antibioticId: "azithromycin", antibioticName: "Azithromycin", susceptibility: "S" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "I", mechanismNotes: "Hohe Fluorchinolon-Resistenzraten in Endemiegebieten." },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R", mechanismNotes: "Unwirksam gegen MDR-Stämme." }
    ]
  },
  {
    id: "m_morganii",
    name: "Morganella morganii",
    type: "gram-negative",
    clinicalImportance: "Opportunistischer Erreger, der nosokomiale Harnwegsinfektionen, Urosepsis, Wundinfektionen und postoperative Abdominalinfektionen verursacht. Häufig bei katheterisierten Patienten isoliert.",
    resistanceMechanisms: "Besitzt eine chromosomal kodierte AmpC-Beta-Laktamase, die eine intrinsische Resistenz gegen Aminopenicilline sowie Cephalosporine der 1. und teilweise 2. Generation vermittelt. Intrinsisch resistent gegen Colistin und Polymyxin B! Carbapeneme und Cefepim sind hochwirksam.",
    firstLineDrugs: ["cefepime", "meropenem", "ciprofloxacin"],
    resistances: [
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R", mechanismNotes: "Chromosomale AmpC-Beta-Laktamase-Produktion." },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/Clavulansäure", susceptibility: "R", mechanismNotes: "Clavulansäure schützt nicht vor AmpC-Abbau." },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxim", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "I", mechanismNotes: "Risiko einer AmpC-Derepression." },
      { antibioticId: "cefepime", antibioticName: "Cefepim", susceptibility: "S", mechanismNotes: "Stabil gegenüber AmpC." },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S" },
      { antibioticId: "imipenem_cilastatin", antibioticName: "Imipenem/Cilastatin", susceptibility: "I", mechanismNotes: "Nach EUCAST-Richtlinien weisen Mitglieder der Tribus Proteae (Morganella, Proteus, Providencia) eine verminderte Empfindlichkeit gegenüber Imipenem auf (standardmäßig als I eingestuft)." },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "S" }
    ]
  },
  {
    id: "p_jirovecii",
    name: "Pneumocystis jirovecii (ehemals P. carinii)",
    type: "atypical",
    clinicalImportance: "Ein atypischer einzelliger Pilz, der bei schwer immunsupprimierten Patienten (insbesondere unbehandelten HIV/AIDS-Patienten, Organtransplantierten, Chemotherapie-Patienten) eine schwere, lebensbedrohliche interstitielle Pneumonie (PCP) verursacht. Gekennzeichnet durch progrediente Dyspnoe, trockenen Husten, Hypoxie und beidseitige diffuse interstitielle Infiltrate.",
    resistanceMechanisms: "Als Pilz sind alle Standard-Antibiotika sowie klassische Antimykotika (wie Azole) völlig unwirksam. Die Therapie der ersten Wahl besteht in hochdosiertem Co-trimoxazol (Sulfamethoxazol-Trimethoprim), das die Folsäuresynthese hemmt.",
    firstLineDrugs: ["cotrimoxazole"],
    resistances: [
      { antibioticId: "cotrimoxazole", antibioticName: "Co-trimoxazol", susceptibility: "S", mechanismNotes: "Hochdosierte Therapie (15-20 mg/kg/Tag der Trimethoprim-Komponente) ist der absolute Goldstandard." },
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Pilze sind gegenüber Antibakteriell-wirksamen Substanzen natürlich resistent." },
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
    clinicalImportance: "Nosokomialer, opportunistischer Erreger, der schwere Pneumonien (insbesondere bei beatmeten Patienten nach vorheriger Carbapenem-Therapie) und Sepsis verursacht. Fähig zur Biofilmbildung auf Kunststoffen.",
    resistanceMechanisms: "Außergewöhnlich hohe intrinsische Resistenz gegenüber fast allen Beta-Laktamen, einschließlich aller Carbapeneme! Produziert zwei chromosomale Beta-Laktamasen: L1 (Metallo-Beta-Laktamase, spaltet Carbapeneme) und L2 (Cephalosporinase). Mittel der ersten Wahl ist Co-trimoxazol.",
    firstLineDrugs: ["cotrimoxazole", "levofloxacin"],
    resistances: [
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "R", mechanismNotes: "Ausgeprägte und intrinsische Resistenz gegen alle Carbapeneme durch die L1-Metallo-Beta-Laktamase! Selektion erfolgt häufig unter Carbapenem-Therapie." },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxon", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/Clavulansäure", susceptibility: "R" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "R" },
      { antibioticId: "cotrimoxazole", antibioticName: "Co-trimoxazol", susceptibility: "S", mechanismNotes: "Goldstandard und Mittel der ersten Wahl." },
      { antibioticId: "levofloxacin", antibioticName: "Levofloxacin", susceptibility: "S", mechanismNotes: "Fluorchinolone der Atemwege sind hochwirksame Alternativen." }
    ]
  }
];