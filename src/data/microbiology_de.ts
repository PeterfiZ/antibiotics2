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
  }
];