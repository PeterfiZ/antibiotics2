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
      { antibioticId: "imipenem_cilastatin", antibioticName: "Imipenem/cilastatin", susceptibility: "R", mechanismNotes: "Intrinsic low susceptibility/resistance to imipenem due to poor affinity of its penicillin-binding proteins (PBPs). According to EUCAST guidelines, imipenem must be reported as resistant (R) for Proteus species." },
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
  }
];