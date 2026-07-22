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
    clinicalImportance: "Causes tonsillopharyngitis, scarlet fever, erysipelas, necrotizing fasciitis and streptococcal toxic shock syndrome (STSS). Important complications include rheumatic fever and post-streptococcal glomerulonephritis.",
    resistanceMechanisms: "Still 100% susceptible to penicillin to this day (no penicillin-resistant strain has ever been found worldwide!). However, increasing resistance to macrolides is being observed (MLS_B resistance via erm genes or the mefA efflux pump).",
    firstLineDrugs: ["penicillin_g", "penicillin_v", "amoxicillin"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "S", mechanismNotes: "Highly susceptible, no known resistance." },
      { antibioticId: "penicillin_v", antibioticName: "Phenoxymethylpenicillin", susceptibility: "S" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "S" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/clavulanic acid", susceptibility: "S" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "S" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxime", susceptibility: "S", mechanismNotes: "100% susceptible to beta-lactams (including cefuroxime) inferred from penicillin susceptibility." },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "S" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S", mechanismNotes: "Excellent activity against all beta-lactam-susceptible Gram-positives." },
      { antibioticId: "clarithromycin", antibioticName: "Clarithromycin", susceptibility: "S", mechanismNotes: "In Hungary, resistance may occur in about 10-15% of cases." },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "S", mechanismNotes: "Mandatory in necrotizing fasciitis to suppress toxin production." },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "S" }
    ]
  },
  {
    id: "s_pneumoniae_s",
    name: "Streptococcus pneumoniae (Penicillin-susceptible)",
    type: "gram-positive",
    clinicalImportance: "The most common causative agent of community-acquired pneumonia (CAP), meningitis, otitis media, acute sinusitis, and sepsis in adults. An encapsulated diplococcus.",
    resistanceMechanisms: "Penicillin-susceptible strains respond well to standard beta-lactams. When resistance occurs, it arises from structural modification of PBP transpeptidases (not beta-lactamase production!).",
    firstLineDrugs: ["amoxicillin", "penicillin_g", "ceftriaxone"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "S" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "S" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/clavulanic acid", susceptibility: "S" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxime", susceptibility: "S" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "S" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S", mechanismNotes: "Penicillin-susceptible strains are highly susceptible to meropenem as well." },
      { antibioticId: "clarithromycin", antibioticName: "Clarithromycin", susceptibility: "S" },
      { antibioticId: "levofloxacin", antibioticName: "Levofloxacin", susceptibility: "S" },
      { antibioticId: "doxycycline", antibioticName: "Doxycycline", susceptibility: "S" },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "S" }
    ]
  },
  {
    id: "s_pneumoniae_r",
    name: "Streptococcus pneumoniae (Penicillin-resistant - PRSP)",
    type: "gram-positive",
    clinicalImportance: "Causes the same infections, but treatment is more difficult, requiring higher beta-lactam doses or alternative agents (quinolones, vancomycin).",
    resistanceMechanisms: "Mutation of the structural genes of penicillin-binding proteins (mainly PBP-2b, PBP-2x, PBP-1a) and the development of mosaic genes, which reduce the binding affinity of beta-lactams.",
    firstLineDrugs: ["ceftriaxone", "levofloxacin", "vancomycin"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Reduced PBP affinity." },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "I", mechanismNotes: "May still be overcome with a high dose (3g/day p.o.) in mild respiratory tract infections." },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/clavulanic acid", susceptibility: "I", mechanismNotes: "The beta-lactamase inhibitor does not help, because the resistance is not beta-lactamase-mediated!" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxime", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "S", mechanismNotes: "Still effective at high doses (2x2g IV) in meningitis." },
      { antibioticId: "clarithromycin", antibioticName: "Clarithromycin", susceptibility: "R", mechanismNotes: "Cross-resistance is common." },
      { antibioticId: "levofloxacin", antibioticName: "Levofloxacin", susceptibility: "S", mechanismNotes: "Respiratory quinolones remain effective." },
      { antibioticId: "doxycycline", antibioticName: "Doxycycline", susceptibility: "I" },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "S", mechanismNotes: "All strains are susceptible to it." }
    ]
  },
  {
    id: "s_aureus_mssa",
    name: "Staphylococcus aureus (Methicillin-susceptible - MSSA)",
    type: "gram-positive",
    clinicalImportance: "The leading cause of skin and soft-tissue infections (furuncle, cellulitis), osteomyelitis, acute infective endocarditis, nosocomial sepsis, and pneumonia.",
    resistanceMechanisms: "Many strains produce a plasmid-mediated beta-lactamase (penicillinase), which breaks down natural penicillins and aminopenicillins. However, they remain susceptible to oxacillin, 1st-generation cephalosporins, and beta-lactamase inhibitor combinations.",
    firstLineDrugs: ["cefazolin", "amoxicillin_clavulanate"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Resistance due to staphylococcal penicillinase production (90%+)." },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/clavulanic acid", susceptibility: "S", mechanismNotes: "Clavulanic acid excellently inhibits staphylococcal penicillinase!" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "S", mechanismNotes: "The first-line gold standard for systemic MSSA infections." },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxime", susceptibility: "S", mechanismNotes: "MSSA strains are fully susceptible to second-generation cephalosporins." },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "S" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S", mechanismNotes: "Excellent activity against MSSA as a beta-lactamase-stable carbapenem." },
      { antibioticId: "clarithromycin", antibioticName: "Clarithromycin", susceptibility: "S" },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "S", mechanismNotes: "Penetrates bone and soft tissue excellently." },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "S" }
    ]
  },
  {
    id: "s_aureus_mrsa",
    name: "Staphylococcus aureus (Methicillin-resistant - MRSA)",
    type: "gram-positive",
    clinicalImportance: "Causes severe hospital- and community-acquired infections (pneumonia, urosepsis, wound infections, endocarditis) that are multidrug-resistant to beta-lactams.",
    resistanceMechanisms: "Acquisition of the chromosomal mecA or mecC gene, which encodes an alternative transpeptidase (PBP-2a / PBP-2'). This has extremely low affinity for all standard beta-lactams (penicillins, cephalosporins, carbapenems), rendering them ineffective.",
    firstLineDrugs: ["vancomycin", "linezolid", "ceftaroline"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/clavulanic acid", susceptibility: "R", mechanismNotes: "The beta-lactamase inhibitor is ineffective against the altered PBP!" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "R" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "R", mechanismNotes: "Resistant to all standard beta-lactams!" },
      { antibioticId: "ceftaroline", antibioticName: "Ceftaroline", susceptibility: "S", mechanismNotes: "The only anti-MRSA cephalosporin (5th generation), which binds to PBP-2a." },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "I", mechanismNotes: "May still be susceptible in community-acquired MRSA." },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "S", mechanismNotes: "The standard treatment for decades." },
      { antibioticId: "linezolid", antibioticName: "Linezolid", susceptibility: "S", mechanismNotes: "Excellent in pneumonia." }
    ]
  },
  {
    id: "e_faecalis",
    name: "Enterococcus faecalis",
    type: "gram-positive",
    clinicalImportance: "Causative agent of urinary tract infections, biliary tract infections, nosocomial sepsis, and subacute infective endocarditis. Has natural resistance to many antibiotics.",
    resistanceMechanisms: "Natural resistance to all cephalosporins! Moderate natural resistance to aminoglycosides and glycopeptides, but generally remains susceptible to ampicillin.",
    firstLineDrugs: ["amoxicillin", "vancomycin", "linezolid"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "S" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin (Ampicillin)", susceptibility: "S", mechanismNotes: "The most important first-line agent." },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/clavulanic acid", susceptibility: "S" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R", mechanismNotes: "All cephalosporins are ineffective against Enterococcus!" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "R", mechanismNotes: "Natural resistance." },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "I", mechanismNotes: "Moderately active." },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "I", mechanismNotes: "Ineffective on its own, but shows synergistic bactericidal activity when combined with a beta-lactam in endocarditis!" },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "S", mechanismNotes: "Generally susceptible (except VRE)." },
      { antibioticId: "linezolid", antibioticName: "Linezolid", susceptibility: "S" },
      { antibioticId: "nitrofurantoin", antibioticName: "Nitrofurantoin", susceptibility: "S", mechanismNotes: "Excellent for urinary tract infections." }
    ]
  },
  {
    id: "e_faecium",
    name: "Enterococcus faecium (VRE risk)",
    type: "gram-positive",
    clinicalImportance: "Causes severe hospital-acquired infections (sepsis, peritonitis, endocarditis), often highly resistant to ampicillin and glycopeptides as well (VRE).",
    resistanceMechanisms: "Beta-lactam resistance is caused by overproduction or mutation of the PBP5 protein. Glycopeptide (vancomycin) resistance is governed by the vanA or vanB gene, which modifies the terminus of the peptidoglycan chain from D-Ala-D-Ala to D-Ala-D-Lac, preventing vancomycin from binding.",
    firstLineDrugs: ["linezolid"],
    resistances: [
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R", mechanismNotes: "Due to PBP5 mutation, almost all strains are ampicillin-resistant!" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "R" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "R" },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "R", mechanismNotes: "Resistant in VRE strains (D-Ala-D-Lac modification)." },
      { antibioticId: "linezolid", antibioticName: "Linezolid", susceptibility: "S", mechanismNotes: "First-line treatment for VRE infections." },
      { antibioticId: "nitrofurantoin", antibioticName: "Nitrofurantoin", susceptibility: "S", mechanismNotes: "May remain effective in cystitis even in VRE cases." }
    ]
  },
  {
    id: "e_coli_wild",
    name: "Escherichia coli (Wild type / susceptible strain)",
    type: "gram-negative",
    clinicalImportance: "The most common causative agent of urinary tract infections (cystitis, pyelonephritis, urosepsis). An important agent of intra-abdominal infections and neonatal meningitis.",
    resistanceMechanisms: "Wild-type (susceptible) strains respond well to most anti-Gram-negative antibiotics, but already show a certain degree of natural plasmid-mediated resistance to ampicillin.",
    firstLineDrugs: ["nitrofurantoin", "fosfomycin", "co-amoxiclav", "ceftriaxone"],
    resistances: [
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "I", mechanismNotes: "Many strains are already resistant due to plasmid-mediated beta-lactamase." },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/clavulanic acid", susceptibility: "S" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxime", susceptibility: "S" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "S" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "S" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "S" },
      { antibioticId: "cotrimoxazole", antibioticName: "Co-trimoxazole", susceptibility: "S" },
      { antibioticId: "nitrofurantoin", antibioticName: "Nitrofurantoin", susceptibility: "S" },
      { antibioticId: "fosfomycin", antibioticName: "Fosfomycin", susceptibility: "S" }
    ]
  },
  {
    id: "e_coli_esbl",
    name: "Escherichia coli (ESBL-producing)",
    type: "gram-negative",
    clinicalImportance: "Causes severe, complicated urinary tract, abdominal, and systemic hospital-acquired infections with extended-spectrum beta-lactam resistance.",
    resistanceMechanisms: "Production of Extended-Spectrum Beta-Lactamase (ESBL, e.g. CTX-M, TEM, SHV types). These enzymes break down all penicillins, 1st-, 2nd-, 3rd-, and 4th-generation cephalosporins, as well as aztreonam. Beta-lactamase inhibitors (clavulanic acid, tazobactam) inhibit them, but carbapenems are completely stable against them.",
    firstLineDrugs: ["meropenem", "ertapenem", "nitrofurantoin", "fosfomycin"],
    resistances: [
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/clavulanic acid", susceptibility: "I", mechanismNotes: "May be susceptible in vitro, but may be ineffective in vivo in systemic infections due to the high inoculum effect!" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxime", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "R", mechanismNotes: "All 3rd-generation cephalosporins are broken down by the ESBL!" },
      { antibioticId: "cefepime", antibioticName: "Cefepime", susceptibility: "R", mechanismNotes: "4th-generation cephalosporins are also resistant." },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S", mechanismNotes: "Carbapenems are stable against ESBL." },
      { antibioticId: "ertapenem", antibioticName: "Ertapenem", susceptibility: "S", mechanismNotes: "An excellent option for systemic treatment." },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "R", mechanismNotes: "ESBL plasmids frequently also carry fluoroquinolone resistance (multidrug resistance!)." },
      { antibioticId: "nitrofurantoin", antibioticName: "Nitrofurantoin", susceptibility: "S", mechanismNotes: "Excellent and remains susceptible in the bladder even in ESBL cases." },
      { antibioticId: "fosfomycin", antibioticName: "Fosfomycin", susceptibility: "S", mechanismNotes: "Remains susceptible in cystitis even in ESBL cases." }
    ]
  },
  {
    id: "p_aeruginosa",
    name: "Pseudomonas aeruginosa (Multidrug-resistance risk)",
    type: "gram-negative",
    clinicalImportance: "A feared causative agent of nosocomial pneumonia (VAP), febrile neutropenia, severe burn wound infections, catheter-associated urosepsis, and lung infections in cystic fibrosis patients. Characterized by high intrinsic and acquired resistance.",
    resistanceMechanisms: "Natural resistance to numerous beta-lactams due to extremely low membrane permeability and active efflux pumps (MexAB-OprM). Possesses a chromosomal AmpC beta-lactamase, which can be derepressed (overproduced) upon beta-lactam exposure. As acquired resistance, it may show carbapenemases or porin mutations (loss of OprD).",
    firstLineDrugs: ["piperacillin_tazobactam", "cefepime", "meropenem", "amikacin", "ciprofloxacin"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Natural resistance." },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/clavulanic acid", susceptibility: "R", mechanismNotes: "Natural resistance. Clavulanic acid does not inhibit AmpC." },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxime", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "R", mechanismNotes: "STRICTLY INEFFECTIVE! Ceftriaxone and cefotaxime have no activity against Pseudomonas!" },
      { antibioticId: "ceftazidime", antibioticName: "Ceftazidime", susceptibility: "S", mechanismNotes: "An anti-Pseudomonal cephalosporin." },
      { antibioticId: "cefepime", antibioticName: "Cefepime", susceptibility: "S", mechanismNotes: "4th generation, excellent against Pseudomonas." },
      { antibioticId: "piperacillin_tazobactam", antibioticName: "Piperacillin/tazobactam", susceptibility: "S", mechanismNotes: "The standard anti-Pseudomonal penicillin combination." },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S", mechanismNotes: "Active, but can become resistant via porin loss." },
      { antibioticId: "imipenem_cilastatin", antibioticName: "Imipenem/cilastatin", susceptibility: "I", mechanismNotes: "According to EUCAST guidelines, there is no standard dosing 'S' category for imipenem against P. aeruginosa. Wild-type susceptible strains are categorized as 'Susceptible, increased exposure' (I), meaning successful therapy requires high dosing (e.g., 1g q6h) or extended infusion." },
      { antibioticId: "ertapenem", antibioticName: "Ertapenem", susceptibility: "R", mechanismNotes: "STRICTLY INEFFECTIVE! Does not penetrate the Pseudomonas membrane!" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "S" },
      { antibioticId: "amikacin", antibioticName: "Amikacin", susceptibility: "S", mechanismNotes: "The most effective aminoglycoside against it." },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "S", mechanismNotes: "The only oral option against Pseudomonas!" }
    ]
  },
{
    id: "b_fragilis",
    name: "Bacteroides fragilis",
    type: "anaerobe",
    clinicalImportance: "The most important anaerobic pathogen of the abdominal cavity. A key agent of peritonitis, intra-abdominal abscesses, aspiration pneumonia, and pelvic inflammatory disease.",
    resistanceMechanisms: "Almost all strains produce a beta-lactamase (Ambler Class A, e.g. cephalosporinase), which destroys penicillin, ampicillin, and cephalosporins. As a result, these agents are ineffective. Beta-lactamase inhibitors, carbapenems, and metronidazole are highly effective.",
    firstLineDrugs: ["metronidazole", "amoxicillin_clavulanate", "meropenem"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Plasmid-mediated beta-lactamase production." },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/clavulanic acid", susceptibility: "S", mechanismNotes: "The beta-lactamase inhibitor successfully restores activity." },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "R", mechanismNotes: "Cephalosporins are weak against B. fragilis." },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S", mechanismNotes: "Carbapenems are extremely stable and effective." },
      { antibioticId: "piperacillin_tazobactam", antibioticName: "Piperacillin/tazobactam", susceptibility: "S" },
      { antibioticId: "metronidazole", antibioticName: "Metronidazole", susceptibility: "S", mechanismNotes: "The most important and most effective bactericidal agent against abdominal anaerobes." },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "I", mechanismNotes: "Resistance rates are increasing in Hungary as well (approx. 20-30%)." }
    ]
  },
  {
    id: "l_pneumophila",
    name: "Legionella pneumophila",
    type: "atypical",
    clinicalImportance: "Causes severe, life-threatening atypical pneumonia (Legionnaires' disease), often with high fever, dry cough, relative bradycardia, hyponatremia, and neurological symptoms (confusion).",
    resistanceMechanisms: "An intracellular pathogen (multiplies inside alveolar macrophages). All beta-lactams (penicillins, cephalosporins, carbapenems) are ineffective against it, because they cannot penetrate macrophages and the bacterium's cell wall structure is also atypical. Only agents with good intracellular penetration (macrolides, quinolones, tetracyclines) are effective.",
    firstLineDrugs: ["levofloxacin", "clarithromycin", "azithromycin"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "No intracellular penetration, beta-lactams are ineffective!" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/clavulanic acid", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "R" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "R" },
      { antibioticId: "clarithromycin", antibioticName: "Clarithromycin", susceptibility: "S", mechanismNotes: "Excellent intracellular penetration." },
      { antibioticId: "azithromycin", antibioticName: "Azithromycin", susceptibility: "S" },
      { antibioticId: "levofloxacin", antibioticName: "Levofloxacin", susceptibility: "S", mechanismNotes: "In severe cases, the strongest bactericidal agent of first choice." },
      { antibioticId: "doxycycline", antibioticName: "Doxycycline", susceptibility: "S" }
    ]
  },
  {
    id: "k_pneumoniae_wild",
    name: "Klebsiella pneumoniae (Wild type / susceptible strain)",
    type: "gram-negative",
    clinicalImportance: "A common causative agent of urinary tract, abdominal, and pulmonary infections (especially aspiration pneumonia in alcoholics or diabetics, presenting with 'currant jelly' sputum). One of the leading causes of hospital-acquired infections.",
    resistanceMechanisms: "Natural (intrinsic) resistance to ampicillin/amoxicillin due to the chromosomal SHV-1 beta-lactamase. Responds well to beta-lactamase inhibitors (e.g. clavulanic acid) or cephalosporins.",
    firstLineDrugs: ["amoxicillin_clavulanate", "ceftriaxone"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R", mechanismNotes: "Due to natural SHV-1 beta-lactamase!" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/clavulanic acid", susceptibility: "S" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "S" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxime", susceptibility: "S" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "S" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "S" },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "R" },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "R" },
      { antibioticId: "metronidazole", antibioticName: "Metronidazole", susceptibility: "R" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "S" }
    ]
  },
  {
    id: "k_pneumoniae_kpc",
    name: "Klebsiella pneumoniae (Carbapenem-resistant - KPC)",
    type: "gram-negative",
    clinicalImportance: "Causative agent of severe hospital-acquired infections (pneumonia, sepsis, urinary tract), with extremely high mortality due to limited therapeutic options.",
    resistanceMechanisms: "Production of KPC (Klebsiella pneumoniae carbapenemase) or metallo-beta-lactamase (NDM-1, VIM, IMP). These break down all beta-lactams, including carbapenems. Often also carry resistance to aminoglycosides and quinolones (multidrug resistance).",
    firstLineDrugs: ["colistin", "ceftazidime_avibactam"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/clavulanic acid", susceptibility: "R" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxime", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "R" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "R", mechanismNotes: "Resistant to all carbapenems due to carbapenemase production!" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "R", mechanismNotes: "Due to associated resistance plasmids." },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "R" },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "R" },
      { antibioticId: "metronidazole", antibioticName: "Metronidazole", susceptibility: "R" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "R" }
    ]
  },
  {
    id: "p_mirabilis",
    name: "Proteus mirabilis",
    type: "gram-negative",
    clinicalImportance: "A common cause of urinary tract infections and urosepsis. Its strong urease-producing capacity breaks down urea into ammonia, which alkalinizes the urine (pH > 7.5-8) and leads to rapid formation of struvite stones (magnesium ammonium phosphate).",
    resistanceMechanisms: "Wild-type (susceptible) strains respond well to aminopenicillins and cephalosporins, having no natural beta-lactamase. Intrinsically (naturally) fully resistant to nitrofurantoin, tetracyclines (doxycycline), and colistin!",
    firstLineDrugs: ["amoxicillin", "ceftriaxone"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "S", mechanismNotes: "Unlike many other Gram-negatives, the wild type is aminopenicillin-susceptible." },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/clavulanic acid", susceptibility: "S" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "S" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxime", susceptibility: "S" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "S" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S" },
      { antibioticId: "imipenem_cilastatin", antibioticName: "Imipenem/cilastatin", susceptibility: "I", mechanismNotes: "According to EUCAST guidelines, members of the Proteae tribe (Morganella, Proteus, Providencia) show reduced susceptibility to imipenem (categorized as I by default: Susceptible, increased exposure)." },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "S" },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "R" },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "R" },
      { antibioticId: "metronidazole", antibioticName: "Metronidazole", susceptibility: "R" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "S" }
    ]
  },
  {
    id: "e_cloacae",
    name: "Enterobacter cloacae",
    type: "gram-negative",
    clinicalImportance: "An important causative agent of hospital-acquired infections, ICU pneumonias, urosepsis, and wound infections. Poses a significant risk in superinfections.",
    resistanceMechanisms: "Carries a chromosomally encoded AmpC beta-lactamase. This enzyme is produced at a low baseline level, but can become derepressed upon beta-lactam exposure (especially 2nd-3rd generation cephalosporins such as cefuroxime, ceftriaxone), permanently switching to a high level of production via mutation, leading to therapeutic failure. Carbapenems and the 4th-generation cefepime remain stable against it.",
    firstLineDrugs: ["cefepime", "meropenem"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/clavulanic acid", susceptibility: "R", mechanismNotes: "Clavulanic acid does not effectively inhibit AmpC beta-lactamase!" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxime", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "R", mechanismNotes: "May appear susceptible in vitro, but derepression and resistance (AmpC) can develop during treatment!" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S", mechanismNotes: "Carbapenems are stable against AmpC." },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "S" },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "R" },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "R" },
      { antibioticId: "metronidazole", antibioticName: "Metronidazole", susceptibility: "R" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "S" }
    ]
  },
  {
    id: "s_marcescens",
    name: "Serratia marcescens",
    type: "gram-negative",
    clinicalImportance: "An opportunistic causative agent of nosocomial urinary tract infections, pneumonia, sepsis, meningitis, and wound infections. May produce a characteristic red pigment (prodigiosin) at room temperature.",
    resistanceMechanisms: "Carries an AmpC beta-lactamase. Intrinsically (naturally) resistant to colistin, polymyxin B, nitrofurantoin, and 1st-generation cephalosporins. Generally responds well to carbapenems and fluoroquinolones.",
    firstLineDrugs: ["cefepime", "meropenem", "ciprofloxacin"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/clavulanic acid", susceptibility: "R" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R", mechanismNotes: "Natural resistance." },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxime", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "S", mechanismNotes: "Requires caution due to the risk of AmpC derepression." },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "S" },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "R" },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "R" },
      { antibioticId: "metronidazole", antibioticName: "Metronidazole", susceptibility: "R" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "S" }
    ]
  },
  {
    id: "a_baumannii_mdr",
    name: "Acinetobacter baumannii (MDR - Multidrug-resistant)",
    type: "gram-negative",
    clinicalImportance: "The leading causative agent of severe opportunistic hospital-acquired infections (ventilator-associated pneumonia - VAP, catheter-related sepsis, severe soft-tissue and burn wound infections) in intensive care units. Extremely hardy, surviving for weeks even on dry surfaces.",
    resistanceMechanisms: "An extremely broad range of acquired resistance mechanisms: carbapenemases (mainly OXA-23 types, as well as metallo-beta-lactamases), efflux pumps, and porin loss. Often resistant to nearly all beta-lactams, aminoglycosides, and quinolones.",
    firstLineDrugs: ["meropenem", "colistin"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/clavulanic acid", susceptibility: "R" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxime", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "R" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "R", mechanismNotes: "Most hospital strains today are already carbapenem-resistant (CRAB)." },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "R" },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "R" },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "R" },
      { antibioticId: "metronidazole", antibioticName: "Metronidazole", susceptibility: "R" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "R" }
    ]
  },
  {
    id: "m_pneumoniae",
    name: "Mycoplasma pneumoniae",
    type: "atypical",
    clinicalImportance: "Causes tracheobronchitis and atypical pneumonia ('walking pneumonia' - extensive radiographic changes despite mild symptoms), most commonly in school-age children and young adults. Extrapulmonary complications may include cold-agglutinin hemolytic anemia and erythema multiforme.",
    resistanceMechanisms: "Lacks a peptidoglycan cell wall, so all cell-wall-synthesis-inhibiting agents (penicillins, cephalosporins, carbapenems) are naturally and completely ineffective (100% resistant). Only protein synthesis inhibitors (macrolides, tetracyclines) and DNA gyrase inhibitors (fluoroquinolones) are effective.",
    firstLineDrugs: ["clarithromycin", "doxycycline"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "No cell wall, beta-lactams are ineffective!" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/clavulanic acid", susceptibility: "R" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxime", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "R" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "R" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "R" },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "R" },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "I" },
      { antibioticId: "metronidazole", antibioticName: "Metronidazole", susceptibility: "R" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "S", mechanismNotes: "Excellent intracellular penetration, although respiratory quinolones (moxifloxacin) are even stronger in vivo." }
    ]
  },
  {
    id: "c_pneumoniae",
    name: "Chlamydia pneumoniae",
    type: "atypical",
    clinicalImportance: "Causes community-acquired atypical pneumonia and bronchitis. Characterized by obligate intracellular replication, with a two-stage life cycle (elementary body and reticulate body).",
    resistanceMechanisms: "Due to its obligate intracellular lifestyle and atypical cell wall structure, beta-lactams cannot reach it at an effective concentration. Only agents that accumulate intracellularly are effective.",
    firstLineDrugs: ["doxycycline", "clarithromycin"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Intracellular pathogen, beta-lactams are ineffective!" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/clavulanic acid", susceptibility: "R" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxime", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "R" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "R" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "R" },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "R" },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "R" },
      { antibioticId: "metronidazole", antibioticName: "Metronidazole", susceptibility: "R" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "S" }
    ]
  },
  {
    id: "c_burnetii",
    name: "Coxiella burnetii",
    type: "atypical",
    clinicalImportance: "The causative agent of Q fever. In its acute form causes influenza-like symptoms, pneumonia, or hepatitis; in its chronic form causes life-threatening endocarditis (with negative blood cultures). A zoonosis, transmitted by inhaling dust or birth products from infected animals (sheep, goats, cattle).",
    resistanceMechanisms: "An obligate intracellular parasite that lives within the acidic environment of the phagolysosome. Extremely resistant to environmental stress. Beta-lactams are ineffective. In chronic infection, doxycycline must be combined with hydroxychloroquine to alkalinize the phagolysosomal pH, otherwise the acidic pH inhibits the antibiotic.",
    firstLineDrugs: ["doxycycline"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Intracellular pathogen, beta-lactams are ineffective!" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/clavulanic acid", susceptibility: "R" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxime", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "R" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "R" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "R" },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "R" },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "R" },
      { antibioticId: "metronidazole", antibioticName: "Metronidazole", susceptibility: "R" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "I", mechanismNotes: "Quinolones have moderate activity." }
    ]
  },
  {
    id: "b_henselae",
    name: "Bartonella henselae",
    type: "atypical",
    clinicalImportance: "The causative agent of cat-scratch disease, which causes regional lymphadenitis. In immunosuppressed patients (e.g. HIV) may lead to bacillary angiomatosis (skin lesions) and peliosis hepatis. An important agent of atypical, blood-culture-negative endocarditis.",
    resistanceMechanisms: "A facultative intracellular pathogen that lives within endothelial cells and red blood cells. Although it may be susceptible to beta-lactams in vitro, these are completely ineffective in vivo (no clinical response). First-line treatment is a macrolide or tetracycline.",
    firstLineDrugs: ["azithromycin", "doxycycline"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Completely ineffective in vivo, should be considered clinically resistant!" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/clavulanic acid", susceptibility: "R" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxime", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "R" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "R" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "S", mechanismNotes: "In endocarditis, acts synergistically when combined with doxycycline." },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "R" },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "I" },
      { antibioticId: "metronidazole", antibioticName: "Metronidazole", susceptibility: "R" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "S" }
    ]
  },
  {
    id: "l_monocytogenes",
    name: "Listeria monocytogenes",
    type: "gram-positive",
    clinicalImportance: "Causes foodborne infection (e.g. via soft cheeses, unpasteurized milk, deli meats). Causes mild gastroenteritis in healthy individuals, but severe meningitis and sepsis in pregnant women (miscarriage, preterm birth), newborns, the elderly, and the immunosuppressed. Able to multiply even at 4°C (in the refrigerator).",
    resistanceMechanisms: "Natural (intrinsic) resistance to all cephalosporins! For this reason, empiric ceftriaxone treatment of bacterial meningitis must always be supplemented with ampicillin whenever Listeria is suspected. Highly susceptible to ampicillin/amoxicillin.",
    firstLineDrugs: ["amoxicillin"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "S" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin (Ampicillin)", susceptibility: "S", mechanismNotes: "Amoxicillin/ampicillin is the first-line gold-standard treatment!" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/clavulanic acid", susceptibility: "S" },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R", mechanismNotes: "Characterized by natural resistance to all cephalosporins!" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxime", susceptibility: "R", mechanismNotes: "Characterized by natural resistance to all cephalosporins!" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "R", mechanismNotes: "STRICTLY INEFFECTIVE! Natural cephalosporin resistance." },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "S", mechanismNotes: "In meningitis, provides synergistic bactericidal activity when combined with ampicillin." },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "S" },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "I" },
      { antibioticId: "metronidazole", antibioticName: "Metronidazole", susceptibility: "R", mechanismNotes: "Only effective against anaerobes." },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "I" }
    ]
  },
  {
    id: "b_pertussis",
    name: "Bordetella pertussis",
    type: "atypical",
    clinicalImportance: "The causative agent of whooping cough (pertussis). Causes severe, paroxysmal coughing fits (with an inspiratory 'whoop'), especially dangerous for infants. Produces toxins (e.g., pertussis toxin, tracheal cytotoxin).",
    resistanceMechanisms: "No significant acquired resistance to macrolides, but due to its intracellular presence and niche, beta-lactams are clinically ineffective.",
    firstLineDrugs: ["clarithromycin", "azithromycin"],
    resistances: [
      { antibioticId: "clarithromycin", antibioticName: "Clarithromycin", susceptibility: "S" },
      { antibioticId: "azithromycin", antibioticName: "Azithromycin", susceptibility: "S" },
      { antibioticId: "doxycycline", antibioticName: "Doxycycline", susceptibility: "S" },
      { antibioticId: "cotrimoxazole", antibioticName: "Co-trimoxazole", susceptibility: "S" },
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Clinically ineffective beta-lactam." },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "R" }
    ]
  },
  {
    id: "b_burgdorferi",
    name: "Borrelia burgdorferi",
    type: "atypical",
    clinicalImportance: "Causative agent of Lyme disease transmitted by ticks. Characterized by a bull's-eye rash (erythema migrans), later causing neurological (neuroborreliosis), joint (Lyme arthritis), and cardiac complications.",
    resistanceMechanisms: "Spirochetes have an atypical structure, lacking classic Gram staining. In vitro susceptible to certain beta-lactams (ceftriaxone, amoxicillin) and tetracyclines, but macrolides are less reliable in vivo.",
    firstLineDrugs: ["doxycycline", "amoxicillin", "ceftriaxone"],
    resistances: [
      { antibioticId: "doxycycline", antibioticName: "Doxycycline", susceptibility: "S", mechanismNotes: "First-line oral treatment." },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "S" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "S", mechanismNotes: "First-line intravenous choice for neuroborreliosis or severe complications." },
      { antibioticId: "clarithromycin", antibioticName: "Clarithromycin", susceptibility: "I", mechanismNotes: "Macrolides are less reliable in vivo." },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "R" }
    ]
  },
  {
    id: "c_jejuni",
    name: "Campylobacter jejuni",
    type: "gram-negative",
    clinicalImportance: "One of the most common causes of bacterial gastroenteritis worldwide (zoonosis transmitted via poultry). Causes bloody, mucoid diarrhea, fever, abdominal cramps. Key post-infectious complications include Guillain-Barré syndrome and reactive arthritis.",
    resistanceMechanisms: "Extremely high resistance to fluoroquinolones (ciprofloxacin) (often >50-70% due to agricultural use) via mutations in the gyrA gene. Macrolides (azithromycin, clarithromycin) represent the first-line therapy.",
    firstLineDrugs: ["azithromycin", "clarithromycin"],
    resistances: [
      { antibioticId: "azithromycin", antibioticName: "Azithromycin", susceptibility: "S", mechanismNotes: "First-line treatment when clinically indicated." },
      { antibioticId: "clarithromycin", antibioticName: "Clarithromycin", susceptibility: "S" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "R", mechanismNotes: "Extremely high resistance rate due to gyrA mutations." },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "R" }
    ]
  },
  {
    id: "c_perfringens",
    name: "Clostridium perfringens",
    type: "anaerobe",
    clinicalImportance: "Causes gas gangrene (clostridial myonecrosis) and food poisoning. Leads to rapidly progressive wound infections with tissue necrosis and gas production, mediated by alpha-toxin.",
    resistanceMechanisms: "Remains highly susceptible to penicillin and other beta-lactams. Combined with clindamycin in severe myonecrosis to inhibit toxin synthesis.",
    firstLineDrugs: ["penicillin_g", "clindamycin", "metronidazole"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "S", mechanismNotes: "Excellent efficacy." },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/clavulanate", susceptibility: "S" },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "S", mechanismNotes: "Essential combination partner in gas gangrene to halt toxin production." },
      { antibioticId: "metronidazole", antibioticName: "Metronidazole", susceptibility: "S" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "S" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "R", mechanismNotes: "Natural anaerobic resistance to aminoglycosides." }
    ]
  },
  {
    id: "c_botulinum",
    name: "Clostridium botulinum",
    type: "anaerobe",
    clinicalImportance: "Causes botulism. Botulinum toxin (an extremely potent neurotoxin) blocks acetylcholine release at neuromuscular junctions, causing flaccid paralysis, diplopia, and respiratory failure. Most commonly transmitted via poorly sterilized canned foods.",
    resistanceMechanisms: "Symptoms are caused by preformed toxin, making antitoxin (serum) the cornerstone of therapy, not antibiotics. Penicillin is used in wound botulism to eradicate the vegetative bacteria.",
    firstLineDrugs: ["penicillin_g", "metronidazole"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "S" },
      { antibioticId: "metronidazole", antibioticName: "Metronidazole", susceptibility: "S" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "R" }
    ]
  },
  {
    id: "c_tetani",
    name: "Clostridium tetani",
    type: "anaerobe",
    clinicalImportance: "Causes tetanus (lockjaw). Tetanospasmin toxin blocks the release of inhibitory neurotransmitters (GABA, glycine) in the spinal cord, causing spastic paralysis, lockjaw (trismus), 'risus sardonicus', and opisthotonus. Transmitted via deep, soil-contaminated wounds.",
    resistanceMechanisms: "Treatment centers on surgical debridement, tetanus immunoglobulin (antitoxin), and supportive care. Metronidazole or penicillin is used to eliminate vegetative cells. Metronidazole is preferred over penicillin because penicillin has weak GABA-antagonist activity.",
    firstLineDrugs: ["metronidazole", "penicillin_g"],
    resistances: [
      { antibioticId: "metronidazole", antibioticName: "Metronidazole", susceptibility: "S", mechanismNotes: "Preferred over penicillin due to penicillin's weak GABA-antagonistic effects." },
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "S" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "R" }
    ]
  },
  {
    id: "c_difficile",
    name: "Clostridioides difficile (formerly Clostridium)",
    type: "anaerobe",
    clinicalImportance: "Major cause of antibiotic-associated pseudomembranous colitis (especially after use of clindamycin, cephalosporins, or fluoroquinolones). Produces Toxin A and B, causing severe watery diarrhea, fever, and toxic megacolon.",
    resistanceMechanisms: "Spore-former, highly resistant to standard disinfectants and environmental conditions. Oral vancomycin or fidaxomicin is effective as they are not absorbed from the gut, concentrating locally.",
    firstLineDrugs: ["vancomycin", "metronidazole"],
    resistances: [
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "S", mechanismNotes: "ONLY effective when given orally (p.o.) for CDI! Intravenous (i.v.) vancomycin is not excreted into the bowel." },
      { antibioticId: "metronidazole", antibioticName: "Metronidazole", susceptibility: "S", mechanismNotes: "Used orally as an alternative for mild or initial cases." },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "R", mechanismNotes: "Common precipitating agent (resistant)." },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "R", mechanismNotes: "Intrinsic cephalosporin resistance." }
    ]
  },
  {
    id: "f_tularensis",
    name: "Francisella tularensis",
    type: "gram-negative",
    clinicalImportance: "Causative agent of tularemia (rabbit fever). Zoonosis transmitted by rodents/rabbits via ticks, flies, direct contact, or inhalation. Presents as ulceroglandular, pneumonic, or typhoidal forms. Highly infectious (classified as a potential bioweapon).",
    resistanceMechanisms: "Produces beta-lactamases, rendering penicillins and cephalosporins ineffective. Aminoglycosides (streptomycin, gentamicin), tetracyclines (doxycycline), or quinolones are the preferred agents.",
    firstLineDrugs: ["gentamicin", "doxycycline", "ciprofloxacin"],
    resistances: [
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "S", mechanismNotes: "Drug of choice for severe systemic infections." },
      { antibioticId: "doxycycline", antibioticName: "Doxycycline", susceptibility: "S", mechanismNotes: "Oral alternative for mild cases." },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "S" },
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Natural beta-lactamase production." },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "R" }
    ]
  },
  {
    id: "h_influenzae",
    name: "Haemophilus influenzae",
    type: "gram-negative",
    clinicalImportance: "Gram-negative coccobacillus causing meningitis, epiglottitis, pneumonia, otitis media, and sinusitis. Encapsulated strains (type b, Hib) are especially invasive in children (less common since vaccine introduction).",
    resistanceMechanisms: "About 15-30% of strains produce plasmid-encoded TEM-1 or ROB-1 beta-lactamases, causing ampicillin/amoxicillin resistance. Additionally, beta-lactamase-negative ampicillin-resistant (BLNAR) strains exist due to mutations in PBP-3. Second- and third-generation cephalosporins remain highly effective.",
    firstLineDrugs: ["amoxicillin_clavulanate", "ceftriaxone", "cefuroxime"],
    resistances: [
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "I", mechanismNotes: "Frequently resistant due to beta-lactamase production or BLNAR phenotype." },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/clavulanate", susceptibility: "S", mechanismNotes: "Beta-lactamase inhibitor successfully restores activity, but less effective against BLNAR." },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxime", susceptibility: "S" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "S", mechanismNotes: "First-line drug of choice for meningitis and invasive infections." },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "S" }
    ]
  },
  {
    id: "n_meningitidis",
    name: "Neisseria meningitidis (Meningococcus)",
    type: "gram-negative",
    clinicalImportance: "Causes epidemic bacterial meningitis and fulminant sepsis (Waterhouse-Friderichsen syndrome). Key signs include fever, neck stiffness, and petechiae/purpura on the skin. Encapsulated Gram-negative diplococcus.",
    resistanceMechanisms: "Most strains remain highly susceptible to penicillin and ceftriaxone. Low-level penicillin resistance can occur due to mutations in the penA gene (altered PBP-2).",
    firstLineDrugs: ["ceftriaxone", "penicillin_g"],
    resistances: [
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "S", mechanismNotes: "Cornerstone of empiric and targeted treatment for bacterial meningitis." },
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "S", mechanismNotes: "Remains excellent for susceptible strains in high intravenous doses." },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "S" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "S", mechanismNotes: "Used as a single oral dose for chemoprophylaxis of close contacts." }
    ]
  },
  {
    id: "n_gonorrhoeae",
    name: "Neisseria gonorrhoeae (Gonococcus)",
    type: "gram-negative",
    clinicalImportance: "Causative agent of gonorrhea (sexually transmitted infection). Causes urethritis in men (purulent discharge) and cervicitis/PID in women (risk of infertility). Can cause ophthalmia neonatorum in newborns.",
    resistanceMechanisms: "Marked by extensive multidrug resistance. Plasmid-mediated beta-lactamases have long rendered penicillin obsolete. Fluoroquinolone resistance is also widespread. Ceftriaxone i.m. is the current gold standard, often combined with azithromycin to also cover co-infecting Chlamydia.",
    firstLineDrugs: ["ceftriaxone", "azithromycin"],
    resistances: [
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "S", mechanismNotes: "First-line treatment as a single i.m. dose (1g or 500mg) per guidelines." },
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Resistant due to penicillinase production (PPNG)." },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "R", mechanismNotes: "Chromosomal mutation-mediated resistance is highly prevalent." },
      { antibioticId: "azithromycin", antibioticName: "Azithromycin", susceptibility: "S", mechanismNotes: "Recommended combination partner to cover potential Chlamydia co-infection." }
    ]
  },
  {
    id: "s_enteritidis",
    name: "Salmonella enteritidis",
    type: "gram-negative",
    clinicalImportance: "Most common cause of non-typhoidal salmonellosis (bacterial food poisoning). Causes fever, watery (rarely bloody) diarrhea, vomiting, abdominal cramps, usually after consuming contaminated poultry or eggs. Antibiotic therapy is not indicated in healthy individuals (prolongs shedding) but is required in infants, the elderly, and the immunocompromised to prevent systemic spread.",
    resistanceMechanisms: "Most strains remain susceptible to ceftriaxone and ciprofloxacin when treatment is required, though fluoroquinolone resistance is on the rise globally.",
    firstLineDrugs: ["ceftriaxone", "ciprofloxacin", "azithromycin"],
    resistances: [
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "S", mechanismNotes: "Indicated for systemic infections." },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "S" },
      { antibioticId: "azithromycin", antibioticName: "Azithromycin", susceptibility: "S" },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "S" },
      { antibioticId: "cotrimoxazole", antibioticName: "Co-trimoxazole", susceptibility: "S" }
    ]
  },
  {
    id: "s_typhi",
    name: "Salmonella Typhi",
    type: "gram-negative",
    clinicalImportance: "The causative agent of typhoid fever. Causes a systemic, life-threatening infection with high step-ladder fever, relative bradycardia, rose spots on the abdomen, splenomegaly, and constipation or 'pea-soup' diarrhea. Intestinal perforation is a severe complication.",
    resistanceMechanisms: "Multidrug-resistant (MDR) strains (resistant to ampicillin, co-trimoxazole, chloramphenicol) are common. Extensively drug-resistant (XDR) strains resistant to fluoroquinolones have emerged in parts of Asia. Ceftriaxone or azithromycin is the treatment of choice.",
    firstLineDrugs: ["ceftriaxone", "azithromycin", "ciprofloxacin"],
    resistances: [
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "S", mechanismNotes: "First-line intravenous drug of choice." },
      { antibioticId: "azithromycin", antibioticName: "Azithromycin", susceptibility: "S" },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "I", mechanismNotes: "Fluoroquinolone resistance rate is high in endemic regions." },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R", mechanismNotes: "Ineffective against MDR strains." }
    ]
  },
  {
    id: "m_morganii",
    name: "Morganella morganii",
    type: "gram-negative",
    clinicalImportance: "Opportunistic pathogen causing urinary tract infections, urosepsis, wound infections, and post-operative abdominal infections in hospital settings. Often isolated in catheterized patients.",
    resistanceMechanisms: "Possesses chromosomally encoded AmpC beta-lactamase, conferring intrinsic resistance to aminopenicillins, 1st, and partly 2nd generation cephalosporins. Intrinsically resistant to colistin and polymyxin B! Carbapenems and cefepime are highly effective.",
    firstLineDrugs: ["cefepime", "meropenem", "ciprofloxacin"],
    resistances: [
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R", mechanismNotes: "Chromosomal AmpC beta-lactamase production." },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/clavulanate", susceptibility: "R", mechanismNotes: "Clavulanate does not protect against AmpC degradation." },
      { antibioticId: "cefazolin", antibioticName: "Cefazolin", susceptibility: "R" },
      { antibioticId: "cefuroxime", antibioticName: "Cefuroxime", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "I", mechanismNotes: "Risk of AmpC derepression." },
      { antibioticId: "cefepime", antibioticName: "Cefepime", susceptibility: "S", mechanismNotes: "Stable against AmpC." },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S" },
      { antibioticId: "imipenem_cilastatin", antibioticName: "Imipenem/cilastatin", susceptibility: "I", mechanismNotes: "According to EUCAST guidelines, members of the Proteae tribe (Morganella, Proteus, Providencia) show reduced susceptibility to imipenem (categorized as I by default)." },
      { antibioticId: "ciprofloxacin", antibioticName: "Ciprofloxacin", susceptibility: "S" }
    ]
  },
  {
    id: "p_jirovecii",
    name: "Pneumocystis jirovecii (formerly P. carinii)",
    type: "atypical",
    clinicalImportance: "An atypical unicellular fungus that causes severe, life-threatening interstitial pneumonia (PCP) in severely immunocompromised patients (especially untreated HIV/AIDS patients, organ transplant recipients, chemotherapy patients). Characterized by progressive dyspnea, dry cough, hypoxia, and bilateral diffuse interstitial infiltrates.",
    resistanceMechanisms: "As a fungus, all standard antibacterial agents and classic antifungals (such as azoles) are completely ineffective. First-line therapy is high-dose co-trimoxazole (sulfamethoxazole-trimethoprim) which inhibits folic acid synthesis.",
    firstLineDrugs: ["cotrimoxazole"],
    resistances: [
      { antibioticId: "cotrimoxazole", antibioticName: "Co-trimoxazole", susceptibility: "S", mechanismNotes: "High-dose therapy (15-20 mg/kg/day of trimethoprim component) is the absolute first-line standard." },
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Fungus is naturally resistant to antibacterial agents." },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "R" },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "R" },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "R" },
      { antibioticId: "metronidazole", antibioticName: "Metronidazole", susceptibility: "R" }
    ]
  },
  {
    id: "s_maltophilia",
    name: "Stenotrophomonas maltophilia",
    type: "gram-negative",
    clinicalImportance: "Nosocomial, opportunistic pathogen causing severe pneumonia (particularly in ventilated patients previously treated with broad-spectrum carbapenems) and sepsis. Capable of biofilm formation on plastic devices.",
    resistanceMechanisms: "Remarkable high intrinsic resistance to almost all beta-lactams, including all carbapenems! Produces two chromosomal beta-lactamases: L1 (metallo-beta-lactamase, degrades carbapenems) and L2 (cephalosporinase). First-line treatment is co-trimoxazole.",
    firstLineDrugs: ["cotrimoxazole", "levofloxacin"],
    resistances: [
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "R", mechanismNotes: "Highly and intrinsically resistant to all carbapenems due to the L1 metallo-beta-lactamase! Frequently selected during carbapenem therapy." },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/clavulanate", susceptibility: "R" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "R" },
      { antibioticId: "cotrimoxazole", antibioticName: "Co-trimoxazole", susceptibility: "S", mechanismNotes: "Gold-standard first-line drug of choice." },
      { antibioticId: "levofloxacin", antibioticName: "Levofloxacin", susceptibility: "S", mechanismNotes: "Respiratory fluoroquinolones are highly useful alternatives." }
    ]
  },
  {
    id: "prevotella_spp",
    name: "Prevotella spp. (e.g., P. melaninogenica, P. bivia)",
    type: "anaerobe",
    clinicalImportance: "Gram-negative anaerobic bacilli, part of the normal flora of the oral cavity, upper respiratory tract, and female genital tract. Key pathogens in mixed anaerobic infections: aspiration pneumonia, lung abscess, empyema, periapical dental abscesses, pelvic inflammatory disease (PID), and gynecological or postoperative wound infections.",
    resistanceMechanisms: "30-80% of strains produce plasmid- and chromosomally encoded beta-lactamases (e.g., CbxA, CfxA), making them resistant to penicillin G and amoxicillin! Beta-lactamase inhibitor combinations (amoxicillin/clavulanate, ampicillin/sulbactam), metronidazole, carbapenems, and clindamycin are effective (although clindamycin resistance is increasing).",
    firstLineDrugs: ["amoxicillin_clavulanate", "metronidazole", "meropenem"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "R", mechanismNotes: "Resistance due to prevalent beta-lactamase production (CbxA, CfxA)." },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "R" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/clavulanic acid", susceptibility: "S", mechanismNotes: "Clavulanate effectively restores activity by inhibiting Prevotella beta-lactamases." },
      { antibioticId: "metronidazole", antibioticName: "Metronidazole", susceptibility: "S", mechanismNotes: "Excellent anaerobic activity, part of first-line therapy." },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S", mechanismNotes: "First-line choice in severe mixed anaerobic/aerobic pelvic or thoracic infections." },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "S", mechanismNotes: "Effective, but local susceptibility testing is recommended due to rising resistance." },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "I", mechanismNotes: "Variable susceptibility due to beta-lactamase inactivation." },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "R", mechanismNotes: "Intrinsic resistance to aminoglycosides in obligate anaerobes." },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "R", mechanismNotes: "Inactive due to Gram-negative outer membrane." }
    ]
  },
  {
    id: "veillonella_spp",
    name: "Veillonella spp. (e.g., V. parvula)",
    type: "anaerobe",
    clinicalImportance: "Gram-negative anaerobic cocci, commensal members of the oral, gastrointestinal, and upper respiratory tract flora. Typically involved in polymicrobial mixed infections (dental and periapical abscesses, aspiration pneumonia, sinusitis, osteomyelitis, rarely endocarditis or sepsis).",
    resistanceMechanisms: "Most Veillonella strains remain susceptible to penicillin, amoxicillin/clavulanate, metronidazole, clindamycin, and carbapenems. Beta-lactamase production is less frequent than in Prevotella or Bacteroides species. Intrinsically resistant to vancomycin and aminoglycosides.",
    firstLineDrugs: ["penicillin_g", "amoxicillin_clavulanate", "metronidazole"],
    resistances: [
      { antibioticId: "penicillin_g", antibioticName: "Benzylpenicillin", susceptibility: "S", mechanismNotes: "Most strains remain susceptible to penicillin." },
      { antibioticId: "amoxicillin", antibioticName: "Amoxicillin", susceptibility: "S" },
      { antibioticId: "amoxicillin_clavulanate", antibioticName: "Amoxicillin/clavulanic acid", susceptibility: "S", mechanismNotes: "Excellent option for mixed oral/anaerobic infections." },
      { antibioticId: "metronidazole", antibioticName: "Metronidazole", susceptibility: "S", mechanismNotes: "Core anaerobic agent with excellent efficacy." },
      { antibioticId: "meropenem", antibioticName: "Meropenem", susceptibility: "S" },
      { antibioticId: "clindamycin", antibioticName: "Clindamycin", susceptibility: "S", mechanismNotes: "Well suited for oral and soft tissue infections." },
      { antibioticId: "ceftriaxone", antibioticName: "Ceftriaxone", susceptibility: "S" },
      { antibioticId: "gentamicin", antibioticName: "Gentamicin", susceptibility: "R", mechanismNotes: "Intrinsic anaerobic resistance to aminoglycosides." },
      { antibioticId: "vancomycin", antibioticName: "Vancomycin", susceptibility: "R", mechanismNotes: "Inactive due to Gram-negative cell wall structure." }
    ]
  }
];