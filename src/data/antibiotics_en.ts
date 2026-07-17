/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Antibiotic } from '../types';

export const antibioticsData_EN: any[] = [
  {
    "id": "penicillin_g",
    "name": "Benzylpenicillin (Penicillin G)",
    "abbreviation": "PEN",
    "brandNames": "Penicillin G Sandoz",
    "group": "Natural penicillins",
    "halfLife": "30-45 minutes (prolonged in renal failure)",
    "pae": "Pronounced in Gram-positives (1.5-3 hours), absent in Gram-negatives",
    "effectType": "bactericidal",
    "dosage": {
      "adult": "10-24 million IU (International Units) daily i.v., divided into 4-6 doses",
      "pediatric": "100,000 - 400,000 IU/kg daily i.v., divided into 4-6 doses",
      "renalAdjustment": "GFR < 50 ml/min: reduced dose or prolonged dosing interval (e.g., 50-75% dose)"
    },
    "mechanismOfAction": "Bactericidal. Inhibits bacterial cell wall synthesis: irreversibly binds to penicillin-binding proteins (PBPs), preventing the cross-linking of peptidoglycan chains (transpeptidation), which leads to cell wall lysis.",
    "sideEffects": [
      "Hypersensitivity reactions (skin rash, anaphylaxis: 0.05-0.2%)",
      "Neurotoxicity at high doses (seizures, especially in renal failure)",
      "Electrolyte imbalance (hyperkalemia in the case of potassium penicillin)",
      "Jarisch-Herxheimer reaction during syphilis treatment"
    ],
    "spectrum": {
      "gramPositive": "2",
      "gramNegative": "1",
      "anaerobe": "1",
      "atypical": "0",
      "pseudomonas": "0",
      "other": "First-line agent for Treponema pallidum (syphilis) and Borrelia burgdorferi (Lyme disease). Excellent against Streptococci (groups A, B, C, G)."
    },
    "indications": [
      "Infective endocarditis (susceptible Streptococcus and Enterococcus strains)",
      "Meningitis (susceptible strains of Neisseria meningitidis and Streptococcus pneumoniae)",
      "Syphilis (Neurosyphilis)",
      "Gas gangrene (Clostridium perfringens)"
    ],
    "notes": "For parenteral administration only. Acid-labile, therefore ineffective orally."
  },
  {
    "id": "penicillin_v",
    "name": "Phenoxymethylpenicillin (Penicillin V)",
    "abbreviation": "PV",
    "brandNames": "Ospen",
    "group": "Natural penicillins",
    "halfLife": "30-45 minutes",
    "pae": "Pronounced in Gram-positives",
    "effectType": "bactericidal",
    "dosage": {
      "adult": "3x 1-1.5 million IU p.o. (divided into 3 daily doses, on an empty stomach)",
      "pediatric": "50,000 - 100,000 IU/kg/day p.o., divided into 3 doses",
      "renalAdjustment": "Dose reduction is recommended for GFR < 10 ml/min"
    },
    "mechanismOfAction": "Same as Penicillin G (bactericidal cell wall synthesis inhibitor). Inhibits transpeptidation by binding to PBPs.",
    "sideEffects": [
      "Gastrointestinal complaints (nausea, diarrhea)",
      "Allergic reactions (skin rash, urticaria)",
      "Eosinophilia"
    ],
    "spectrum": {
      "gramPositive": "2",
      "gramNegative": "0",
      "anaerobe": "1",
      "atypical": "0",
      "pseudomonas": "0",
      "other": "Only for mild, well-localized Streptococcus infections."
    },
    "indications": [
      "Streptococcal pharyngitis / tonsillitis (follicular tonsillitis)",
      "Mild erysipelas",
      "Secondary prophylaxis of rheumatic fever"
    ],
    "notes": "Acid-stable, well absorbed orally. Should be taken 1 hour before meals."
  },
  {
    "id": "amoxicillin",
    "name": "Amoxicillin",
    "abbreviation": "AMX",
    "brandNames": "Duomox, Amoxicillin-B, Moxilen",
    "group": "Aminopenicillins (broad-spectrum penicillins)",
    "halfLife": "1-1.5 hours",
    "pae": "1.5-2 hours for Gram-positives, minimal for Gram-negatives",
    "effectType": "bactericidal",
    "dosage": {
      "adult": "3x 500mg - 1000mg p.o. daily, in severe cases 3x 1000mg",
      "pediatric": "40-90 mg/kg/day p.o., divided into 2-3 doses",
      "renalAdjustment": "GFR < 30 ml/min: dose reduction (e.g., max 2x 500mg daily)"
    },
    "mechanismOfAction": "Bactericidal. Prevents bacterial cell wall synthesis through inhibition of PBPs. Broader spectrum than Penicillin G, as it penetrates better through the porin channels in the outer membrane of Gram-negative bacteria.",
    "sideEffects": [
      "Gastrointestinal complaints (diarrhea, nausea)",
      "Maculopapular rash (common, not necessarily allergic, e.g., almost always develops in case of EBV infection/mononucleosis!)",
      "Allergic reactions (urticaria, anaphylaxis)"
    ],
    "spectrum": {
      "gramPositive": "2",
      "gramNegative": "1",
      "anaerobe": "1",
      "atypical": "0",
      "pseudomonas": "0",
      "other": "Drug of choice against Listeria monocytogenes. Unstable against beta-lactamase enzymes!"
    },
    "indications": [
      "Mild forms of community-acquired pneumonia (CAP)",
      "Acute otitis media (Middle ear infection)",
      "Acute sinusitis",
      "Listeria monocytogenes infections (combined with Gentamicin in case of meningitis)"
    ],
    "notes": "Excellent oral absorption, can be taken with or without food. Its parenteral form is mainly available in combination in Hungary."
  },
  {
    "id": "amoxicillin_clavulanate",
    "name": "Amoxicillin / clavulanic acid (Co-amoxiclav)",
    "abbreviation": "AMC",
    "brandNames": "Aktil, Augmentin, Curam",
    "group": "Penicillins combined with beta-lactamase inhibitors",
    "halfLife": "approx. 1 hour (both components)",
    "pae": "1.5-2 hours for Gram-positives, mild for Gram-negatives",
    "effectType": "bactericidal",
    "dosage": {
      "adult": "p.o.: 2x 875/125 mg or 3x 500/125 mg; i.v.: 3x 1.2 g (1000 mg amox + 200 mg clav)",
      "pediatric": "40-90 mg/kg/day p.o. (calculated for amoxicillin), in 2-3 divided doses",
      "renalAdjustment": "GFR < 30 ml/min: Avoid the 875/125 mg formulation, use a lower dose or 500/125 mg every 12-24 hours instead"
    },
    "mechanismOfAction": "Bactericidal. Amoxicillin inhibits cell wall synthesis. Clavulanic acid is a 'suicide' beta-lactamase inhibitor that irreversibly binds to bacterial beta-lactamase enzymes (Ambler Class A, including penicillinases, ESBLs to some extent, but not carbapenemases), protecting amoxicillin from degradation.",
    "sideEffects": [
      "Diarrhea (very common, due to the effect of clavulanic acid on increasing intestinal motility)",
      "Hepatotoxicity (cholestatic hepatitis, especially in older men, with prolonged treatment)",
      "Candida superinfection (oral thrush, vaginal yeast infection)"
    ],
    "spectrum": {
      "gramPositive": "2",
      "gramNegative": "2",
      "anaerobe": "2",
      "atypical": "0",
      "pseudomonas": "0",
      "other": "One of the most versatile broad-spectrum empirical agents, but ineffective against Pseudomonas, MRSA, and atypical pathogens."
    },
    "indications": [
      "Community-acquired pneumonia (empirical, in case of comorbidities)",
      "Bite wounds (human or animal, due to anaerobic coverage!)",
      "Severe acute sinusitis, otitis media",
      "Complicated urinary tract infections, pelvic inflammatory diseases",
      "Aspiration pneumonia"
    ],
    "notes": "The risk of diarrhea can be reduced if the oral formulation is taken immediately at the start of a meal."
  },
  {
    "id": "piperacillin_tazobactam",
    "name": "Piperacillin / tazobactam (Pip/Tazo)",
    "abbreviation": "TZP",
    "brandNames": "Tazocin, Pipril, Piperacillin/Tazobactam Kabi",
    "group": "Ureidopenicillins (anti-Pseudomonal beta-lactamase inhibitor combinations)",
    "halfLife": "approx. 1 hour",
    "pae": "Short (< 1 hour for Gram-negatives, can be prolonged for Pseudomonas with continuous infusion)",
    "effectType": "bactericidal",
    "dosage": {
      "adult": "3x or 4x 4.5 g (4g Piperacillin + 0.5g Tazobactam) i.v. slowly or as a continuous (prolonged) infusion (over 4 hours)",
      "pediatric": "90-112.5 mg/kg i.v. every 6-8 hours",
      "renalAdjustment": "GFR < 40 ml/min: dose reduction required (e.g., 3x 2.25 g or 3x 4.5 g)"
    },
    "mechanismOfAction": "Bactericidal. Piperacillin is an ureidopenicillin that penetrates the Gram-negative cell wall excellently and inhibits the PBP-3 protein. Tazobactam is a beta-lactamase inhibitor that extends the spectrum to most beta-lactamase-producing strains (except AmpC derepressed and carbapenemase producers).",
    "sideEffects": [
      "Allergic reactions, skin rashes",
      "Renal failure (especially in combination with Vancomycin, it shows increased nephrotoxicity!)",
      "Thrombocytopenia, leukopenia (with prolonged treatment)",
      "Diarrhea (C. difficile risk)"
    ],
    "spectrum": {
      "gramPositive": "2",
      "gramNegative": "2",
      "anaerobe": "2",
      "atypical": "0",
      "pseudomonas": "2",
      "other": "The most important hospital-based, empirical, broad-spectrum antibiotic."
    },
    "indications": [
      "Nosocomial (hospital-acquired) pneumonia (HAP, VAP)",
      "Empiric treatment of neutropenic fever (as monotherapy or with an aminoglycoside)",
      "Severe intra-abdominal sepsis",
      "Complicated soft tissue infections (e.g., diabetic foot)"
    ],
    "notes": "For intravenous administration only. One of the most commonly used 'heavy weapons' in hospital wards."
  },
  {
    "id": "cefazolin",
    "name": "Cefazolin",
    "abbreviation": "CZ",
    "brandNames": "Cefazolin Kabi, Sandoz Cefazolin",
    "group": "1st generation Cephalosporins",
    "halfLife": "1.5 - 2 hours (relatively long among cephalosporins)",
    "pae": "1.5-3 hours for Gram-positives",
    "effectType": "bactericidal",
    "dosage": {
      "adult": "1g - 2g i.v. 3 times daily; For surgical prophylaxis: 2g single i.v. bolus (30-60 minutes before surgery)",
      "pediatric": "50-100 mg/kg/day i.v., divided into 3-4 doses",
      "renalAdjustment": "GFR < 30 ml/min: reduced dose and/or prolonged interval"
    },
    "mechanismOfAction": "Bactericidal cell wall synthesis inhibitor. Binds strongly to PBP-1 and PBP-3 proteins. Stable against penicillinases produced by Staphylococcus aureus.",
    "sideEffects": [
      "Allergy (cross-reactivity with penicillin approx. 1-3%)",
      "Pain at the injection site, thrombophlebitis",
      "Nephrotoxicity (rare, but may occur at high doses)"
    ],
    "spectrum": {
      "gramPositive": "2",
      "gramNegative": "1",
      "anaerobe": "0",
      "atypical": "0",
      "pseudomonas": "0",
      "other": "Ineffective against MRSA, Enterococci, and Listeria! (All cephalosporins are ineffective against Enterococcus and Listeria!)"
    },
    "indications": [
      "Surgical prophylaxis (the gold standard for almost all types of surgery)",
      "Systemic infections caused by MSSA (osteomyelitis, arthritis, endocarditis, sepsis)",
      "Mild-to-moderate skin and soft tissue infections"
    ],
    "notes": "Does not penetrate the blood-brain barrier; unsuitable for the treatment of meningitis."
  },
  {
    "id": "cefuroxime",
    "name": "Cefuroxime (cefuroxime axetil)",
    "abbreviation": "CXM",
    "brandNames": "Zinnat (p.o.), Zinacef (i.v.)",
    "group": "2nd generation Cephalosporins",
    "halfLife": "approx. 1.2 - 1.5 hours",
    "pae": "Moderate for Gram-positives",
    "effectType": "bactericidal",
    "dosage": {
      "adult": "p.o. (axetil): 2x 250 - 500 mg daily; i.v.: 3x 750 mg - 1500 mg daily",
      "pediatric": "p.o.: 20-30 mg/kg/day in 2 divided doses; i.v.: 50-100 mg/kg/day in 3 divided doses",
      "renalAdjustment": "GFR < 20 ml/min: dose reduction (e.g., max. 2x 750 mg i.v.)"
    },
    "mechanismOfAction": "Bactericidal. Inhibits transpeptidation during bacterial cell wall peptidoglycan synthesis. More stable against Gram-negative beta-lactamases than 1st generation agents.",
    "sideEffects": [
      "Gastrointestinal complaints (nausea, diarrhea)",
      "Transient increase in transaminases",
      "Eosinophilia, allergic reactions"
    ],
    "spectrum": {
      "gramPositive": "2",
      "gramNegative": "2",
      "anaerobe": "0",
      "atypical": "0",
      "pseudomonas": "0",
      "other": "The oral form (axetil) is a prodrug and is reasonably absorbed."
    },
    "indications": [
      "Community-acquired respiratory tract infections (mild forms of CAP, acute exacerbation of COPD)",
      "Otitis media, sinusitis, tonsillitis",
      "Uncomplicated urinary tract infections"
    ],
    "notes": "It crosses the blood-brain barrier, but 3rd generation cephalosporins are much more effective and preferred for the treatment of meningitis."
  },
  {
    "id": "ceftriaxone",
    "name": "Ceftriaxone",
    "abbreviation": "CRO",
    "brandNames": "Lendacin, Rocephin, Ceftriaxone Kabi",
    "group": "3rd generation Cephalosporins (predominantly Gram-negative)",
    "halfLife": "8 hours (unusually long, allowing once-daily dosing!)",
    "pae": "Moderate",
    "effectType": "bactericidal",
    "dosage": {
      "adult": "1g - 2g i.v. or i.m. 1x - 2x daily (2g 2x daily in meningitis)",
      "pediatric": "50-80 mg/kg/day i.v. as a single dose (100 mg/kg/day in meningitis, max 4g)",
      "renalAdjustment": "Does not require dose adjustment in renal impairment alone, only if associated with hepatic impairment (dual elimination: bile + urine!)"
    },
    "mechanismOfAction": "Bactericidal cell wall synthesis inhibitor. Highly stable against most Gram-negative beta-lactamase enzymes (except ESBL, AmpC, and carbapenemases). Excellent tissue and blood-brain barrier penetration.",
    "sideEffects": [
      "Pseudolithiasis (biliary sludge/sand formation in the gallbladder due to precipitation of ceftriaxone-calcium, which can mimic biliary colic)",
      "C. difficile-associated diarrhea (high risk!)",
      "Bleeding tendency (rarely, due to inhibition of vitamin K synthesis)",
      "Increased risk of kernicterus in neonates (displaces bilirubin from albumin binding sites, therefore contraindicated in neonates up to 28 days of age; cefotaxime should be used instead!)"
    ],
    "spectrum": {
      "gramPositive": "2",
      "gramNegative": "2",
      "anaerobe": "0",
      "atypical": "0",
      "pseudomonas": "0",
      "other": "Ineffective against Listeria and Enterococcus! Co-administration with calcium-containing solutions in the same line is prohibited due to the risk of precipitation!"
    },
    "indications": [
      "Inpatient treatment of community-acquired pneumonia (CAP) (often combined with a macrolide)",
      "Bacterial meningitis (cornerstone of empirical treatment in adults is Ceftriaxone + Vancomycin + Ampicillin)",
      "Sepsis of unknown origin (empirical)",
      "Gonorrhea infection (single dose of 1g i.m. / i.v. once daily)",
      "Neuroborreliosis stage of Lyme disease"
    ],
    "notes": "Due to its once-daily dosing, it is also highly suitable for outpatient parenteral antimicrobial therapy (OPAT)."
  },
  {
    "id": "ceftazidime",
    "name": "Ceftazidime",
    "abbreviation": "CAZ",
    "brandNames": "Fortum, Ceftazidime Kabi",
    "group": "3rd generation Cephalosporins (anti-Pseudomonal)",
    "halfLife": "1.5 - 2 hours",
    "pae": "Approx. 1 hour for Gram-negatives, especially Pseudomonas",
    "effectType": "bactericidal",
    "dosage": {
      "adult": "1g - 2g i.v. 3 times daily",
      "pediatric": "100-150 mg/kg/day i.v., divided into 3 doses",
      "renalAdjustment": "GFR < 50 ml/min: significant dose reduction required, as it is excreted exclusively via the kidneys"
    },
    "mechanismOfAction": "Bactericidal. Binds strongly to the PBP-3 protein in Gram-negative bacteria, especially Pseudomonas aeruginosa. Less stable against AmpC beta-lactamases, but highly resistant to other beta-lactamases.",
    "sideEffects": [
      "Allergic reactions, phlebitis",
      "Leukopenia, elevated transaminases",
      "Neurotoxicity (seizures, encephalopathy in renal failure if dose is not reduced!)"
    ],
    "spectrum": {
      "gramPositive": "0",
      "gramNegative": "2",
      "anaerobe": "0",
      "atypical": "0",
      "pseudomonas": "2",
      "other": "Not active against MRSA, Enterococcus, and Listeria."
    },
    "indications": [
      "Proven or suspected Pseudomonas aeruginosa infections",
      "Empiric treatment of neutropenic fever",
      "Systemic treatment of nosocomial infections"
    ],
    "notes": "Its Gram-positive coverage is insufficient, so it is rarely used alone for empiric sepsis treatment; it is preferably combined with an agent active against Gram-positive bacteria."
  },
  {
    "id": "cefepime",
    "name": "Cefepime",
    "abbreviation": "FEP",
    "brandNames": "Cefepim Kabi, Maxipime",
    "group": "4th generation Cephalosporins",
    "halfLife": "2 hours",
    "pae": "Approx. 1-1.5 hours for Gram-negatives",
    "effectType": "bactericidal",
    "dosage": {
      "adult": "1g - 2g i.v. 2 or 3 times daily (3x 2g in severe infection/suspected Pseudomonas)",
      "pediatric": "100-150 mg/kg/day i.v., divided into 2-3 doses",
      "renalAdjustment": "GFR < 50 ml/min: strict dose reduction (risk of neurotoxicity!)"
    },
    "mechanismOfAction": "Bactericidal. It has a zwitterionic structure, allowing extremely rapid penetration through the porin channels of Gram-negative bacteria. It is highly stable against chromosomal AmpC beta-lactamases and resistant to many plasmid-mediated beta-lactamases.",
    "sideEffects": [
      "Neurotoxicity: non-convulsive status epilepticus, confusion, myoclonus (especially in renal impairment if the dose is not reduced!)",
      "Allergic reactions, diarrhea"
    ],
    "spectrum": {
      "gramPositive": "2",
      "gramNegative": "2",
      "anaerobe": "0",
      "atypical": "0",
      "pseudomonas": "2",
      "other": "It has a much better Gram-positive activity than ceftazidime."
    },
    "indications": [
      "Severe nosocomial pneumonia",
      "Febrile neutropenia (empirical monotherapy)",
      "Complicated intra-abdominal infections (combined with metronidazole)",
      "Complicated urinary tract infections, pyelonephritis"
    ],
    "notes": "Very safe when dosed appropriately for renal function, but the neurological status of elderly patients with renal impairment should be monitored."
  },
  {
    "id": "ceftaroline",
    "name": "Ceftaroline fosamil",
    "abbreviation": "CPT",
    "brandNames": "Zinforo",
    "group": "5th generation cephalosporins (anti-MRSA)",
    "halfLife": "2.5 hours",
    "pae": "Pronounced in Gram-positives",
    "effectType": "bactericidal",
    "dosage": {
      "adult": "2x 600 mg i.v. daily, as a 1-hour infusion (3x 600 mg in severe infections or MRSA pneumonia)",
      "pediatric": "8-12 mg/kg i.v. every 8 or 12 hours",
      "renalAdjustment": "GFR < 50 ml/min: dose reduction required (e.g., 2x 400 mg)"
    },
    "mechanismOfAction": "Bactericidal. The only cephalosporin capable of binding with high affinity to the PBP-2a protein produced by MRSA strains (to which other beta-lactams cannot bind). It also inhibits PBP-2x in resistant Streptococcus pneumoniae strains.",
    "sideEffects": [
      "Direct Coombs test positivity (usually without hemolytic anemia)",
      "Diarrhea, nausea, allergic skin rashes"
    ],
    "spectrum": {
      "gramPositive": "2",
      "gramNegative": "2",
      "anaerobe": "0",
      "atypical": "0",
      "pseudomonas": "0",
      "other": "No activity against Enterococcus faecium and Listeria, but may have moderate activity against Enterococcus faecalis."
    },
    "indications": [
      "Complicated skin and soft tissue infections (cSSTI), especially if MRSA is suspected",
      "Community-acquired pneumonia (CAP), severe cases with risk of multi-drug resistant S. pneumoniae"
    ],
    "notes": "Clinically highly valuable option as the only anti-MRSA beta-lactam."
  },
  {
    "id": "meropenem",
    "name": "Meropenem",
    "abbreviation": "MEM",
    "brandNames": "Meronem, Meropenem Kabi, Sandoz Meropenem",
    "group": "Carbapenems",
    "halfLife": "1 hour",
    "pae": "Pronounced also against Gram-negatives (1.5-3 hours, including Pseudomonas)",
    "effectType": "bactericidal",
    "dosage": {
      "adult": "3x 1g i.v. daily (3x 2g i.v. in case of meningitis or severe Pseudomonas infection)",
      "pediatric": "60-120 mg/kg/day i.v., divided into 3 doses",
      "renalAdjustment": "GFR < 50 ml/min: significant dose adjustment required (e.g., 2x 1g or 2x 500mg)"
    },
    "mechanismOfAction": "Extremely broad-spectrum bactericidal agent. Penetrates easily through porins, highly stable against almost all beta-lactamases (including ESBLs and AmpC). Binds strongly to PBP-2, PBP-3, and PBP-4 proteins.",
    "sideEffects": [
      "Increased risk of seizures (but much lower than with Imipenem!)",
      "Hypersensitivity reactions (cross-reactivity with penicillins < 1%)",
      "Diarrhea, including C. difficile"
    ],
    "spectrum": {
      "gramPositive": "2",
      "gramNegative": "2",
      "anaerobe": "2",
      "atypical": "0",
      "pseudomonas": "2",
      "other": "Not active against MRSA, VRE, Listeria, and Stenotrophomonas maltophilia! Carbapenemase-producing (KPC, MBL, OXA-48) strains are resistant!"
    },
    "indications": [
      "Empiric treatment of nosocomial sepsis and severe multidrug-resistant hospital-acquired infections",
      "Systemic infections caused by ESBL-producing Enterobacterales (gold standard)",
      "Severe intra-abdominal infections and pelvic sepsis",
      "Nosocomial meningitis"
    ],
    "notes": "Meropenem does not require the addition of cilastatin (unlike imipenem) because it is stable against renal dehydropeptidase-I (DHP-I)."
  },
  {
    "id": "ertapenem",
    "name": "Ertapenem",
    "abbreviation": "ETP",
    "brandNames": "Invanz",
    "group": "Carbapenems",
    "halfLife": "4 hours (long, allows once-daily dosing!)",
    "pae": "Pronounced in Gram-negatives",
    "effectType": "bactericidal",
    "dosage": {
      "adult": "1g once daily i.v. or i.m.",
      "pediatric": "15 mg/kg i.v. every 12 hours (max 1g/day)",
      "renalAdjustment": "GFR < 30 ml/min: reduced dose (500 mg daily)"
    },
    "mechanismOfAction": "Bactericidal carbapenem. Cell wall synthesis inhibitor. Highly stable against ESBL and AmpC beta-lactamases. Due to its chemical structure (polarized side chain), it cannot penetrate the outer membrane of Pseudomonas aeruginosa and Acinetobacter baumannii.",
    "sideEffects": [
      "Headache, confusion",
      "Diarrhea, nausea",
      "Phlebitis at the infusion site"
    ],
    "spectrum": {
      "gramPositive": "2",
      "gramNegative": "2",
      "anaerobe": "2",
      "atypical": "0",
      "pseudomonas": "0",
      "other": "Ideal for 'outpatient parenteral antimicrobial therapy' (OPAT) in ESBL infections due to once-daily dosing."
    },
    "indications": [
      "Home/outpatient treatment (OPAT) of complicated urinary tract or soft tissue infections caused by ESBL-producing Enterobacterales",
      "Severe community-acquired intra-abdominal infections",
      "Acute pelvic infections"
    ],
    "notes": "Excellent 'carbapenem-sparing' carbapenem: helps preserve Meropenem for Pseudomonas infections."
  },
  {
    "id": "gentamicin",
    "name": "Gentamicin",
    "abbreviation": "GEN",
    "brandNames": "Gentamicin Sandoz, Gentamicin Pharmavit",
    "group": "Aminoglycosides",
    "halfLife": "2 - 3 hours (extremely prolonged in renal failure, up to 50-100 hours!)",
    "pae": "Very pronounced (up to 3-5 hours!), allowing once-daily high-dose administration (ODA - Once Daily Aminoglycoside).",
    "effectType": "bactericidal",
    "dosage": {
      "adult": "Once daily 5-7 mg/kg i.v. infusion (or 1 mg/kg 3 times daily for synergism, e.g., in endocarditis)",
      "pediatric": "3-5 mg/kg/day i.v. as a single dose or divided into 3 doses",
      "renalAdjustment": "Therapeutic drug monitoring (TDM - serum level measurement) is mandatory, with strict dosing/interval adjustment based on renal function!"
    },
    "mechanismOfAction": "Rapid bactericidal effect. Binds to the bacterial 30S ribosomal subunit, inhibiting protein synthesis and causing misincorporation of amino acids, which also damages cell membrane integrity. Its action requires oxygen-dependent transport (therefore, it is completely ineffective in anaerobic environments and against anaerobic bacteria!).",
    "sideEffects": [
      "Nephrotoxicity (reversible acute tubular necrosis, risk increases in old age, dehydration)",
      "Ototoxicity (irreversible vestibular or cochlear damage: dizziness, hearing loss)",
      "Neuromuscular blockade (contraindicated in myasthenia gravis!)"
    ],
    "spectrum": {
      "gramPositive": "1",
      "gramNegative": "2",
      "anaerobe": "0",
      "atypical": "0",
      "pseudomonas": "2",
      "other": "Concentration-dependent bactericidal effect (the higher the peak concentration, the faster the bacterial killing)."
    },
    "indications": [
      "Severe Gram-negative sepsis (in empirical combination, e.g., with beta-lactam)",
      "Synergistic combination with beta-lactam/vancomycin in Enterococcus, Streptococcus, or Staphylococcus endocarditis",
      "Treatment of plague and tularemia"
    ],
    "notes": "Serum level monitoring (TDM) is essential: the trough level must be measured before the next dose to avoid accumulation and toxicity."
  },
  {
    "id": "amikacin",
    "name": "Amikacin",
    "abbreviation": "AMK",
    "brandNames": "Amikacin Kabi, Likacin",
    "group": "Aminoglycosides",
    "halfLife": "2 - 3 hours",
    "pae": "Pronounced (3-5 hours)",
    "effectType": "bactericidal",
    "dosage": {
      "adult": "Once daily 15 mg/kg i.v. (or divided into 2 doses)",
      "pediatric": "15-20 mg/kg/day i.v. once daily",
      "renalAdjustment": "Strict TDM and dose adjustment required"
    },
    "mechanismOfAction": "A semisynthetic derivative of kanamycin. It inhibits bacterial protein synthesis by binding to the 30S ribosome. Due to its structure, it is resistant to most aminoglycoside-modifying enzymes, thereby retaining its activity against the majority of gentamicin-resistant strains.",
    "sideEffects": [
      "Nephrotoxicity (kidney damage)",
      "Ototoxicity (mainly cochlear: hearing loss)",
      "Neuromuscular blockade"
    ],
    "spectrum": {
      "gramPositive": "1",
      "gramNegative": "2",
      "anaerobe": "0",
      "atypical": "0",
      "pseudomonas": "2",
      "other": "Also active against several atypical mycobacteria (e.g., Mycobacterium avium complex) and Mycobacterium tuberculosis."
    },
    "indications": [
      "Severe, multidrug-resistant Gram-negative nosocomial infections (sepsis, pneumonia, UTI)",
      "Combination therapy for multidrug-resistant Pseudomonas aeruginosa infections",
      "Combination therapy for MDR-TB (multidrug-resistant tuberculosis)"
    ],
    "notes": "The most resistant of the aminoglycosides to bacterial resistance mechanisms."
  },
  {
    "id": "clarithromycin",
    "name": "Clarithromycin",
    "abbreviation": "CLR",
    "brandNames": "Fromilid, Klacid, Klabax",
    "group": "Macrolides",
    "halfLife": "3 - 7 hours (longer with its active metabolite)",
    "pae": "Pronounced against Gram-positives (2-4 hours)",
    "effectType": "bacteriostatic",
    "dosage": {
      "adult": "250 mg - 500 mg p.o. or i.v. twice daily (extended-release formulation: 500 mg - 1000 mg once daily)",
      "pediatric": "15 mg/kg/day p.o. in 2 divided doses",
      "renalAdjustment": "GFR < 30 mL/min: reduce dose by half"
    },
    "mechanismOfAction": "Bacteriostatic. Binds to the 23S RNA of the bacterial 50S ribosomal subunit, thereby inhibiting peptide chain elongation (inhibition of translocation). Inhibits protein synthesis.",
    "sideEffects": [
      "Gastrointestinal complaints (abdominal cramps, diarrhea, metallic taste - although milder than erythromycin)",
      "QT prolongation (risk of Torsades de Pointes, especially with other QT-prolonging drugs or in hypokalemia!)",
      "Strong inhibition of CYP3A4 enzyme (numerous drug interactions: e.g., dangerously increases levels of statins, carbamazepine, cyclosporine!)",
      "Cholestatic hepatitis (rare)"
    ],
    "spectrum": {
      "gramPositive": "2",
      "gramNegative": "1",
      "anaerobe": "1",
      "atypical": "2",
      "pseudomonas": "0",
      "other": "Excellent against Helicobacter pylori. First-line agent for Mycobacterium avium complex (MAC)."
    },
    "indications": [
      "Community-acquired pneumonia (in combination with Ceftriaxone if atypical pathogens are suspected, or as monotherapy)",
      "Helicobacter pylori eradication (in combination with Amoxicillin/Metronidazole and PPI)",
      "Mild respiratory tract infections in case of penicillin allergy",
      "Urogenital infections caused by Chlamydia (although Azithromycin/Doxycycline is more common here)"
    ],
    "notes": "Excellent tissue and intracellular penetration (reaches concentrations in the lungs and alveolar macrophages many times higher than in serum)."
  },
  {
    "id": "azithromycin",
    "name": "Azithromycin",
    "abbreviation": "AZM",
    "brandNames": "Azibiot, Sumamed, Zitrocin",
    "group": "Macrolides (Azalides)",
    "halfLife": "68 hours (extremely long half-life, accumulates in tissues!)",
    "pae": "Extremely prolonged tissue effect",
    "effectType": "bacteriostatic",
    "dosage": {
      "adult": "500 mg once daily for 3 days (or 500 mg on day 1, then 250 mg on days 2-5); for Chlamydia urethritis, a single dose of 1 g p.o.",
      "pediatric": "10 mg/kg/day p.o. for 3 days (or 10 mg/kg on day 1, then 5 mg/kg on days 2-5)",
      "renalAdjustment": "No dosage adjustment required in renal impairment (primarily excreted in bile)"
    },
    "mechanismOfAction": "Bacteriostatic protein synthesis inhibitor (binds to the 50S ribosomal subunit). Long tissue retention: accumulates in lysosomes and white blood cells, which transport it to the site of infection.",
    "sideEffects": [
      "QT interval prolongation (although considered slightly safer than clarithromycin)",
      "Gastrointestinal intolerance (milder than other macrolides)",
      "Otitis / hearing impairment (with long-term use)"
    ],
    "spectrum": {
      "gramPositive": "1",
      "gramNegative": "2",
      "anaerobe": "1",
      "atypical": "2",
      "pseudomonas": "0",
      "other": "Extremely convenient dosing (a 3-day course corresponds to a 7-10 day standard treatment)."
    },
    "indications": [
      "Atypical community-acquired pneumonia (CAP)",
      "Non-gonococcal urethritis / cervicitis caused by Chlamydia trachomatis (1g stat p.o.)",
      "First-line treatment and prophylaxis of pertussis (whooping cough)",
      "Traveler's diarrhea (in case of suspected Campylobacter)"
    ],
    "notes": "Minimal drug interaction compared to other macrolides, as it does not significantly inhibit the CYP3A4 system."
  },
  {
    "id": "ciprofloxacin",
    "name": "Ciprofloxacin",
    "abbreviation": "CIP",
    "brandNames": "Cifran, Ciprinol, Ciprofloxacin Kabi",
    "group": "Fluoroquinolones (2nd generation / Gram-negative predominant)",
    "halfLife": "4 hours",
    "pae": "Pronounced in Gram-negatives (1.5-3 hours)",
    "effectType": "bactericidal",
    "dosage": {
      "adult": "p.o.: 2x 250 mg - 750 mg daily; i.v.: 2x or 3x 400 mg daily",
      "pediatric": "Only for special indications (e.g., Pseudomonas in cystic fibrosis): 20-30 mg/kg/day p.o. in 2 divided doses or 10-15 mg/kg i.v. every 8 hours",
      "renalAdjustment": "GFR < 30 ml/min: dose should be reduced by half"
    },
    "mechanismOfAction": "Rapid bactericidal effect. Inhibits bacterial DNA topoisomerase II (DNA gyrase) and DNA topoisomerase IV enzymes, which are required for DNA replication, transcription, and supercoiling relaxation. This leads to DNA strand breaks and cell death.",
    "sideEffects": [
      "Damage to tendons and ligaments (Achilles tendon rupture, tendinitis - risk increases with corticosteroid use or in the elderly!)",
      "Theoretical risk of aortic aneurysm rupture (FDA warning)",
      "Neuropsychiatric symptoms (insomnia, anxiety, hallucination, seizures)",
      "QT interval prolongation",
      "Phototoxicity (photosensitivity)",
      "Gastrointestinal complaints and C. difficile risk"
    ],
    "spectrum": {
      "gramPositive": "1",
      "gramNegative": "2",
      "anaerobe": "0",
      "atypical": "1",
      "pseudomonas": "2",
      "other": "Concentration-dependent bactericidal."
    },
    "indications": [
      "Complicated urinary tract infections and acute pyelonephritis",
      "Gram-negative urosepsis",
      "Pseudomonas aeruginosa infections (especially if oral treatment is required)",
      "Prostatitis (chronic bacterial - excellent prostate penetration!)",
      "Traveler's diarrhea (Shigella, Salmonella, toxic E. coli)"
    ],
    "notes": "Cations (calcium, magnesium, iron, aluminum - antacids, dairy products) inhibit its absorption in the gut due to chelation!"
  },
  {
    id: "levofloxacin",
    name: "Levofloxacin",
    abbreviation: "LVX",
    brandNames: "Leflox, Levoxa, Tavanic",
    group: "Fluoroquinolones (3rd generation / Respiratory fluoroquinolones)",
    halfLife: "6 - 8 hours (once daily dosing is sufficient)",
    pae: "Pronounced (2-3 hours)",
    effectType: "bactericidal",
    dosage: {
      adult: "Once daily 500 mg - 750 mg p.o. or i.v.",
      pediatric: "Avoid in children (due to cartilage damage, except when no alternative exists)",
      renalAdjustment: "GFR < 50 ml/min: dose adjustment required"
    },
    mechanismOfAction: "Bactericidal. Inhibits bacterial DNA gyrase and topoisomerase IV (active L-isomer of ofloxacin). Binds with much higher affinity to Gram-positive topoisomerases than ciprofloxacin.",
    sideEffects: [
      "Same quinolone side effects (risk of tendinitis, Achilles tendon rupture)",
      "QT interval prolongation (stronger than ciprofloxacin)",
      "Hypoglycemia / hyperglycemia (blood sugar fluctuations, especially in elderly diabetics!)"
    ],
    spectrum: {
      gramPositive: 2, // Excellent Gram-positive activity, especially against Streptococcus pneumoniae! Hence called 'respiratory quinolone'.
      gramNegative: 2, // Good Gram-negative activity
      anaerobe: 1, // Minimal anaerobic activity
      atypical: 2, // Excellent atypical coverage!
      pseudomonas: 1, // Effective against Pseudomonas, but less active than ciprofloxacin.
      other: "Broad-spectrum empirical agent for severe respiratory infections."
    },
    indications: [
      "Community-acquired pneumonia (CAP) as alternative or first-line treatment (in severe cases or with comorbidities)",
      "Acute bacterial exacerbation of COPD",
      "Acute pyelonephritis and complicated urinary tract infections"
    ],
    notes: "Oral bioavailability is nearly 99%, so oral and intravenous doses are identical."
  },
  {
    id: "moxifloxacin",
    name: "Moxifloxacin",
    abbreviation: "MXF",
    brandNames: "Avelox, Moxifloxacin Kabi, Vigamox (eye drops)",
    group: "Fluoroquinolones (4th generation / Respiratory and anaerobic fluoroquinolones)",
    halfLife: "12 hours (convenient once-daily dosing)",
    pae: "Pronounced (2-3 hours)",
    effectType: "bactericidal",
    dosage: {
      adult: "Once daily 400 mg p.o. or i.v.",
      pediatric: "Contraindicated",
      renalAdjustment: "No dose adjustment required in renal impairment (primarily metabolized in the liver and excreted in feces!)"
    },
    mechanismOfAction: "Bactericidal. Inhibits DNA gyrase and topoisomerase IV. Its chemical structure (methoxy group at C8 position) reduces the likelihood of resistance development and extends activity to anaerobes.",
    sideEffects: [
      "QT interval prolongation (among fluoroquinolones, moxifloxacin prolongs QT the most; caution in severe heart disease!)",
      "Hepatotoxicity (rare, but severe liver damage has been reported)",
      "Standard quinolone side effects (CNS, tendinitis)"
    ],
    spectrum: {
      gramPositive: 2, // Excellent Streptococcus pneumoniae activity!
      gramNegative: 2, // Good Gram-negative activity (but NOT for urinary tract infections, as it is barely excreted in urine!)
      anaerobe: 2, // The only quinolone with good anaerobic activity (moderately active against B. fragilis)
      atypical: 2, // Excellent atypical activity
      pseudomonas: 0, // NOT effective against Pseudomonas!
      other: "Since it does not concentrate in urine, it is strictly contraindicated and unsuitable for urinary tract infections (UTI)!"
    },
    indications: [
      "Severe forms of community-acquired pneumonia (CAP)",
      "Acute bacterial sinusitis, chronic bronchitis exacerbation",
      "Complicated pelvic inflammatory disease (PID)",
      "Second-line agent in tuberculosis (MDR-TB)"
    ],
    notes: "The only quinolone that cannot be used for cystitis or pyelonephritis due to liver metabolism."
  },
  {
    id: "doxycycline",
    name: "Doxycycline",
    abbreviation: "DOX",
    brandNames: "Doxycycline AL, Tenutan",
    group: "Tetracyclines",
    halfLife: "18 - 24 hours (long)",
    pae: "Pronounced bacteriostatic PAE",
    effectType: "bacteriostatic",
    dosage: {
      adult: "First day: 1x 200 mg or 2x 100 mg, then daily 1x 100 mg p.o. (200 mg daily in severe cases)",
      pediatric: "Contraindicated under 8 years! (Exception: Rocky Mountain spotted fever, anthrax); over 8 years: 2-4 mg/kg/day in 1-2 divided doses",
      renalAdjustment: "No adjustment required in renal impairment (excreted in bile/feces as inactive chelate)"
    },
    mechanismOfAction: "Bacteriostatic. Binds to the bacterial 30S ribosomal subunit, preventing aminoacyl-tRNA binding to the acceptor (A) site, thus stopping peptide chain growth (protein synthesis inhibition).",
    sideEffects: [
      "Tooth discoloration and enamel hypoplasia (contraindicated in children under 8 and during pregnancy due to calcium binding in bones and teeth!)",
      "Photosensitivity (risk of severe burns)",
      "Pill esophagitis (esophageal ulcer if taken with little water before lying down!)",
      "Gastrointestinal irritation, nausea, epigastric pain",
      "Pseudotumor cerebri (benign intracranial hypertension - rare)"
    ],
    spectrum: {
      gramPositive: 1, // Moderate against Streptococcus (high resistance), but active against community MRSA!
      gramNegative: 1, // Narrow / moderate
      anaerobe: 1,
      atypical: 2, // Excellent atypical activity (Mycoplasma, Chlamydia, Rickettsia, Coxiella, Borrelia)
      pseudomonas: 0,
      other: "First-line agent for zoonoses (Lyme disease, brucellosis, tularemia, Q fever)."
    },
    indications: [
      "Early stage of Lyme disease (erythema migrans) - 2x 100 mg p.o. for 10-14 days",
      "Atypical forms of community-acquired pneumonia",
      "Chlamydia trachomatis urethritis (7 days of 2x 100 mg)",
      "Systemic treatment of acne vulgaris (low dose)",
      "Malaria prophylaxis"
    ],
    notes: "Can be taken with food, but calcium, iron, magnesium-containing foods and drugs (milk, antacids) inhibit absorption!"
  },
  {
    id: "vancomycin",
    name: "Vancomycin",
    abbreviation: "VAN",
    brandNames: "Vancomycin Kabi, Vancocin (p.o.)",
    group: "Glycopeptides",
    halfLife: "6 - 8 hours (greatly prolonged in renal failure!)",
    pae: "~1-2 hours in Gram-positives",
    effectType: "bactericidal",
    dosage: {
      adult: "i.v.: 2x 1000 mg - 1500 mg (or 15-20 mg/kg every 8-12 hours); p.o.: 4x 125 mg - 500 mg daily (exclusively for C. difficile colitis!)",
      pediatric: "40 mg/kg/day i.v. divided into 3-4 doses",
      renalAdjustment: "Strict dose adjustment and therapeutic drug monitoring (TDM) required based on trough serum levels (target: 15-20 µg/ml in severe infections)!"
    },
    mechanismOfAction: "Bactericidal (slow). Inhibits cell wall synthesis by binding with high affinity to the D-Ala-D-Ala terminus of peptidoglycan precursors, preventing transpeptidation and polymerization. (Acts at a different site than beta-lactams, hence excellent against MRSA!)",
    sideEffects: [
      "Red Man Syndrome: non-immunological histamine release causing facial flushing, itching, hypotension due to rapid i.v. administration! Preventable with slow infusion (at least 60 minutes).",
      "Nephrotoxicity (kidney damage, especially when combined with aminoglycosides or Piperacillin, or if serum levels are too high)",
      "Ototoxicity (rare, mainly when combined with other ototoxic drugs)",
      "Neutropenia (with long-term treatment)"
    ],
    spectrum: {
      gramPositive: 2, // Effective only against Gram-positive bacteria! Excellent against MRSA, Streptococcus, Enterococcus (except VRE)
      gramNegative: 0, // Completely ineffective against Gram-negatives (molecular size prevents passage through outer membrane porins!)
      anaerobe: 1, // Excellent against Clostridioides difficile p.o., but not first-line for other anaerobes
      atypical: 0,
      pseudomonas: 0,
      other: "Classic standard treatment for MRSA infections."
    },
    indications: [
      "Severe systemic MRSA infections (sepsis, endocarditis, osteomyelitis, pneumonia)",
      "Severe Clostridioides difficile colitis (ONLY ORALLY! Orally administered vancomycin is not absorbed, so it acts directly in the gut. i.v. vancomycin is ineffective for C. difficile colitis!)",
      "Severe Gram-positive infections in beta-lactam allergic patients"
    ],
    notes: "i.v. and p.o. Vancomycin serve two completely different indications due to lack of oral absorption."
  },
  {
    id: "clindamycin",
    name: "Clindamycin",
    abbreviation: "CLI",
    brandNames: "Dalacin, Klimicin",
    group: "Lincosamides",
    halfLife: "2 - 3 hours",
    pae: "Pronounced in Gram-positives",
    effectType: "bacteriostatic",
    dosage: {
      adult: "p.o.: 3x or 4x 300 mg - 450 mg daily; i.v.: 3x or 4x 600 mg - 900 mg daily",
      pediatric: "20-40 mg/kg/day p.o. or i.v., divided into 3-4 doses",
      renalAdjustment: "No dose adjustment required in renal impairment (metabolized in the liver)"
    },
    mechanismOfAction: "Bacteriostatic protein synthesis inhibitor. Binds to the 50S ribosomal subunit (overlapping binding site with macrolides). Also inhibits toxin synthesis (e.g., TSST-1 in Staphylococcus, streptococcal pyrogenic exotoxins), which is clinically very important in toxic shock syndrome!",
    sideEffects: [
      "Clostridioides difficile-associated diarrhea / Pseudomembranous colitis (Clindamycin is one of the most dangerous drugs in this regard, as it eradicates normal gut flora!)",
      "Nausea, abdominal pain",
      "Allergic skin rashes (sometimes severe, e.g., DRESS or Stevens-Johnson syndrome)"
    ],
    spectrum: {
      gramPositive: 2, // Good Gram-positive activity (Streptococcus, MSSA, some community MRSA strains)
      gramNegative: 0, // Completely ineffective against Gram-negatives
      anaerobe: 2, // Excellent anaerobic activity in infections above the diaphragm (oral cavity, lungs, but increasing resistance in B. fragilis!)
      atypical: 0,
      pseudomonas: 0,
      other: "Excellent tissue and bone penetration. Reduces bacterial toxin production."
    },
    indications: [
      "Skin and soft tissue infections (especially if anaerobic suspicion or penicillin allergy)",
      "Osteomyelitis (due to excellent bone penetration)",
      "Aspiration pneumonia and lung abscess (often combined with beta-lactam)",
      "Toxic Shock Syndrome (TSS) treatment in addition to Ceftriaxone/Penicillin to stop toxin production!"
    ],
    notes: "Cross-resistance may occur between clindamycin and macrolides (MLS_B phenotype, tested with D-test)."
  },
  {
    id: "metronidazole",
    name: "Metronidazole",
    abbreviation: "MTZ",
    brandNames: "Klion, Metrogyl, Metronidazole Kabi",
    group: "Nitroimidazoles",
    halfLife: "8 hours",
    pae: "Pronounced in Gram-negative anaerobes",
    effectType: "bactericidal",
    dosage: {
      adult: "3x 500 mg p.o. or i.v. daily",
      pediatric: "30-40 mg/kg/day p.o. or i.v., divided into 3 doses",
      renalAdjustment: "In severe renal impairment (GFR < 10), reduce dose by 50% if administered multiple times daily"
    },
    mechanismOfAction: "Rapid bactericidal effect. Prodrug: the pyruvate-ferredoxin oxidoreductase (PFOR) enzyme of anaerobic bacteria reduces the nitro group of metronidazole, producing reactive free radicals. These radicals directly damage bacterial DNA, causing strand breaks. Since reduction only occurs in anaerobic environments, it is completely ineffective against aerobic bacteria!",
    sideEffects: [
      "Disulfiram-like reaction with alcohol consumption (nausea, vomiting, flushing, tachycardia - alcohol is strictly forbidden during and 48 hours after treatment!)",
      "Metallic taste in mouth, furry tongue",
      "Peripheral neuropathy, seizures, ataxia (with long-term or high-dose treatment)",
      "Nausea, loss of appetite"
    ],
    spectrum: {
      gramPositive: 0, // Ineffective against aerobic Gram-positives!
      gramNegative: 0, // Ineffective against aerobic Gram-negatives!
      anaerobe: 2, // The best available anti-anaerobic agent! (Gold standard against Bacteroides fragilis, Clostridium, Fusobacterium!)
      atypical: 0,
      pseudomonas: 0,
      other: "Excellent antiprotozoal activity (first-line against Trichomonas vaginalis, Entamoeba histolytica, Giardia lamblia)."
    },
    indications: [
      "Intra-abdominal infections (peritonitis, abscesses - always combined with an aerobic agent, e.g., Ceftriaxone + Metronidazole!)",
      "Brain abscess (excellent penetration)",
      "Mild cases of Clostridioides difficile colitis (though oral Vancomycin is now preferred)",
      "Trichomoniasis and bacterial vaginosis",
      "Dental infections (combined with Spiramycin, e.g., Rovamycine)"
    ],
    notes: "Oral metronidazole has almost 100% bioavailability; i.v. and p.o. dosing are equivalent."
  },
  {
    id: "linezolid",
    name: "Linezolid",
    abbreviation: "LNZ",
    brandNames: "Zyvoxid, Linezolid Kabi",
    group: "Oxazolidinones",
    halfLife: "5 - 7 hours",
    pae: "1-2 hours in Gram-positives",
    effectType: "bacteriostatic",
    dosage: {
      adult: "2x 600 mg p.o. or i.v. daily",
      pediatric: "10 mg/kg p.o. or i.v. every 8 or 12 hours",
      renalAdjustment: "No adjustment required, but metabolites may accumulate in renal impairment (caution, monitor blood counts!)"
    },
    mechanismOfAction: "Bacteriostatic (bactericidal against Streptococcus). Unique mechanism: binds to the 23S rRNA of the 50S ribosomal subunit, preventing the formation of the functional 70S initiation complex (inhibits the initial step of translation). Since it inhibits at an early stage, there is no cross-resistance with other protein synthesis inhibitors.",
    sideEffects: [
      "Myelosuppression (Thrombocytopenia, anemia, leukopenia - especially with treatment longer than 2 weeks! Weekly blood count monitoring is mandatory!)",
      "Serotonin syndrome (as linezolid is a weak, non-selective MAO inhibitor. When combined with SSRI/SNRI antidepressants, it can cause dangerous hyperthermia, tachycardia, rigidity!)",
      "Lactic acidosis (due to mitochondrial toxicity with prolonged use)",
      "Peripheral and optic neuropathy (rare, with prolonged use, may cause vision loss)"
    ],
    spectrum: {
      gramPositive: 2, // Extremely strong Gram-positive coverage: MRSA, VRSA, VRE (vancomycin-resistant Enterococcus - both faecalis and faecium!), PRSP
      gramNegative: 0,
      anaerobe: 1,
      atypical: 0,
      pseudomonas: 0,
      other: "Reserve antibiotic for multidrug-resistant Gram-positive infections."
    },
    indications: [
      "Confirmed Vancomycin-resistant Enterococcus (VRE) infections",
      "Nosocomial pneumonia caused by MRSA (often shows better lung penetration than Vancomycin)",
      "Complicated soft tissue infections with suspected MRSA (if Vancomycin cannot be used)"
    ],
    notes: "100% oral bioavailability. Tablet and infusion doses are identical, making it easy to switch from i.v. to p.o. (step-down therapy)."
  },
  {
    id: "cotrimoxazole",
    name: "Sulfamethoxazole / Trimethoprim (Co-trimoxazole)",
    abbreviation: "SXT",
    brandNames: "Sumetrolim, Cotrimel",
    group: "Sulfonamides and trimethoprim combination",
    halfLife: "10 hours",
    pae: "Moderate",
    effectType: "bactericidal",
    dosage: {
      adult: "Standard dose: 2x 960 mg (800 mg sulfamethoxazole + 160 mg trimethoprim) p.o. daily. For severe Pneumocystis infections, very high i.v. doses (15-20 mg/kg/day based on trimethoprim, divided into 3-4 doses) are required.",
      pediatric: "30 mg/kg/day sulfamethoxazole + 6 mg/kg/day trimethoprim p.o. in 2 divided doses",
      renalAdjustment: "GFR < 30 ml/min: reduce dose by half. GFR < 15 ml/min: avoid use."
    },
    mechanismOfAction: "Bactericidal (synergistic combination). Inhibits bacterial folate synthesis at two different points: sulfamethoxazole competitively inhibits dihydropteroate synthetase (PABA analog), while trimethoprim inhibits dihydrofolate reductase. Folate deficiency inhibits purine and DNA synthesis.",
    sideEffects: [
      "Severe skin reactions (Stevens-Johnson syndrome, Toxic Epidermal Necrolysis - rare but life-threatening!)",
      "Hyperkalemia (trimethoprim inhibits sodium channels in the kidney's collecting ducts, similar to amiloride, increasing potassium levels)",
      "Bone marrow suppression (folate-deficient anemia, leukopenia - can be mitigated with folate supplementation)",
      "False-positive increase in creatinine levels (inhibits tubular secretion of creatinine in the kidney without reducing actual GFR)",
      "Kernicterus in newborns (contraindicated in the last weeks of pregnancy)"
    ],
    spectrum: {
      gramPositive: 2, // Good Gram-positive activity, including community MRSA (CA-MRSA)!
      gramNegative: 2, // Good Enterobacterales coverage, but resistance rates are increasing
      anaerobe: 0,
      atypical: 1, // Active against Nocardia
      pseudomonas: 0,
      other: "First-line agent for Pneumocystis jirovecii (opportunistic fungus) and Stenotrophomonas maltophilia. Also active against Toxoplasma gondii."
    },
    indications: [
      "Treatment and prophylaxis of Pneumocystis jirovecii pneumonia (PCP) (especially in HIV/AIDS or immunocompromised patients)",
      "Uncomplicated urinary tract infections (cystitis) if local resistance is low",
      "Mild to moderate skin infections caused by CA-MRSA",
      "Nocardiosis, Stenotrophomonas infections"
    ],
    notes: "Patients should be advised to drink plenty of fluids to prevent sulfonamide crystalluria."
  },
  {
    id: "nitrofurantoin",
    name: "Nitrofurantoin",
    abbreviation: "NIT",
    brandNames: "Alpicor, Nitrofurantoin-Richter",
    group: "Nitrofuran derivatives",
    halfLife: "20 - 30 minutes (extremely short systemically, but achieves high concentrations in urine)",
    pae: "No significant systemic PAE",
    effectType: "bactericidal",
    dosage: {
      adult: "2x 100 mg p.o. daily (extended-release) or 4x 50 mg - 100 mg p.o. for 5-7 days",
      pediatric: "5-7 mg/kg/day p.o., divided into 4 doses (over 1 month of age)",
      renalAdjustment: "Contraindicated if GFR < 30 ml/min! Does not cause renal failure, but in such cases, it cannot be excreted in urine, rendering it ineffective in the bladder while accumulating systemically and causing toxicity!"
    },
    mechanismOfAction: "Bactericidal. Bacterial nitroreductases convert nitrofurantoin into reactive intermediates that attack bacterial ribosomal proteins, DNA, RNA, and respiration. Due to multiple targets, bacteria find it very difficult to develop resistance.",
    sideEffects: [
      "Gastrointestinal complaints (nausea, vomiting - very common)",
      "Pulmonary toxicity: acute hypersensitivity pneumonitis (fever, dyspnea, infiltrates) or chronic pulmonary fibrosis (with months to years of use!)",
      "Peripheral neuropathy (especially with reduced renal function)",
      "Hepatotoxicity (chronic active hepatitis)"
    ],
    spectrum: {
      gramPositive: 2, // Good against E. faecalis, E. faecium (including some VRE strains!), Staphylococcus saprophyticus
      gramNegative: 2, // Good against E. coli (Proteus, Pseudomonas, Serratia are resistant!)
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 0,
      other: "Concentrates only in the bladder. Completely unsuitable for systemic infections (e.g., pyelonephritis, sepsis)!"
    },
    indications: [
      "First-line treatment for acute uncomplicated lower urinary tract infection (cystitis) in women",
      "Long-term low-dose prophylaxis for recurrent urinary tract infections"
    ],
    notes: "One of the most useful agents for acute cystitis due to minimal resistance."
  },
  {
    id: "fosfomycin",
    name: "Fosfomycin trometamol",
    abbreviation: "FOS",
    brandNames: "Monural, Fosfomycin Sandoz",
    group: "Other antibiotics (Epoxide derivatives)",
    halfLife: "4-5 hours (but remains at therapeutic concentrations in urine for 36-48 hours!)",
    pae: "Pronounced in urine",
    effectType: "bactericidal",
    dosage: {
      adult: "Single 3 g p.o. granule, dissolved in water, on an empty stomach, before bedtime (after emptying the bladder)",
      pediatric: "In Hungary, this form is generally not recommended for children under 12 years",
      renalAdjustment: "Not recommended even as a single dose in severe renal impairment (GFR < 10 ml/min)"
    },
    mechanismOfAction: "Rapid bactericidal effect. Inhibits the first step of bacterial cell wall synthesis: irreversibly inhibits the UDP-N-acetylglucosamine-enolpyruvyl-transferase (MurA) enzyme. Due to its unique target, there is no cross-resistance with other antibiotics.",
    sideEffects: [
      "Abdominal discomfort, mild diarrhea",
      "Headache, dizziness",
      "Vaginitis"
    ],
    spectrum: {
      gramPositive: 2, // Good against Enterococcus (including VRE!) and Staphylococcus
      gramNegative: 2, // Excellent against E. coli (including ESBL producers!), Citrobacter, Klebsiella
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 1, // Moderate against Pseudomonas (systemic form used in combination; oral single dose insufficient for Pseudomonas cystitis)
      other: "Oral trometamol salt is only suitable for uncomplicated cystitis."
    },
    indications: [
      "Acute uncomplicated cystitis in women (single 3g dose is extremely convenient, almost 100% compliance!)",
      "Prophylaxis for diagnostic urological procedures"
    ],
    notes: "Must be taken on an empty stomach, as food significantly reduces absorption. Intravenous form (Fosfomycin sodium) also exists for severe systemic multidrug-resistant infections as a combination partner."
  },
  {
    id: "ampicillin",
    name: "Ampicillin",
    abbreviation: "AMP",
    brandNames: "Standacillin, Ampicillin Sandoz",
    group: "Aminopenicillins (Broad-spectrum penicillins)",
    halfLife: "1-1.5 hours",
    pae: "1.5-2 hours in Gram-positives, minimal in Gram-negatives",
    effectType: "bactericidal",
    dosage: {
      adult: "2-12 g/day i.v., divided into 4-6 doses (12 g/day in severe infections)",
      pediatric: "100-200 mg/kg/day i.v., divided into 4-6 doses",
      renalAdjustment: "GFR < 30 ml/min: reduced dose or extended dosing interval (e.g., every 12 hours)"
    },
    mechanismOfAction: "Bactericidal. Inhibits bacterial cell wall synthesis by binding to penicillin-binding proteins (PBPs), which inhibits transpeptidation.",
    sideEffects: [
      "Allergic skin rashes (especially in mononucleosis)",
      "Gastrointestinal complaints",
      "Eosinophilia",
      "Interstitial nephritis"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 1,
      anaerobe: 1,
      atypical: 0,
      pseudomonas: 0,
      other: "First-line agent for Listeria monocytogenes and Enterococcus faecalis."
    },
    indications: [
      "Listeria monocytogenes meningitis (combined with Gentamicin)",
      "Enterococcus faecalis endocarditis/sepsis (combined with Ceftriaxone or Gentamicin)",
      "Parenteral treatment of mild to moderately severe respiratory and urinary tract infections"
    ],
    notes: "Poor oral bioavailability compared to amoxicillin, so it is mostly used parenterally (i.v.)."
  },
  {
    id: "ampicillin_sulbactam",
    name: "Ampicillin / sulbactam",
    abbreviation: "SAM",
    brandNames: "Unasyn",
    group: "Penicillins combined with beta-lactamase inhibitors",
    halfLife: "~1 hour",
    pae: "1.5-2 hours in Gram-positives",
    effectType: "bactericidal",
    dosage: {
      adult: "3-12 g/day i.v. (ampicillin + sulbactam), divided into 3-4 doses (e.g., 4x 3 g or 3x 1.5-3 g)",
      pediatric: "150-300 mg/kg/day i.v., divided into 3-4 doses",
      renalAdjustment: "GFR < 30 ml/min: extend dosing interval to 12-24 hours"
    },
    mechanismOfAction: "Bactericidal. Ampicillin inhibits cell wall synthesis, while sulbactam is a beta-lactamase inhibitor that protects ampicillin from degradation by the most common plasmid-mediated beta-lactamases (Ambler Class A).",
    sideEffects: [
      "Pain at injection site",
      "Diarrhea",
      "Elevated liver enzymes",
      "Hypersensitivity"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 2,
      anaerobe: 2,
      atypical: 0,
      pseudomonas: 0,
      other: "Sulbactam component has intrinsic activity against Acinetobacter baumannii at high doses!"
    },
    indications: [
      "Intra-abdominal infections",
      "Gynecological pelvic inflammatory diseases",
      "Acinetobacter baumannii infections (with high-dose sulbactam)",
      "Animal bite wounds and aspiration pneumonia"
    ],
    notes: "In Hungary, Unasyn is the most well-known parenteral combination in this group."
  },
  {
    id: "flucloxacillin",
    name: "Flucloxacillin",
    abbreviation: "FLU",
    brandNames: "Floxapen (abroad)",
    group: "Isoxazolyl-penicillins (Beta-lactamase-resistant penicillins)",
    halfLife: "45-60 minutes",
    pae: "1.5-2 hours in Gram-positives",
    effectType: "bactericidal",
    dosage: {
      adult: "4x 500 mg - 1000 mg p.o. or i.v. (on an empty stomach)",
      pediatric: "50-100 mg/kg/day, divided into 4 doses",
      renalAdjustment: "In severe renal impairment (GFR < 10 ml/min): max 4x 1 g daily"
    },
    mechanismOfAction: "Bactericidal. Acid-stable and beta-lactamase-resistant penicillin. The isoxazolyl side chain sterically hinders beta-lactamase enzyme access to the beta-lactam ring.",
    sideEffects: [
      "Hepatotoxicity (cholestatic hepatitis - rare but characteristic)",
      "Gastrointestinal complaints",
      "Hypersensitivity"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 0,
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 0,
      other: "Specifically excellent against Staphylococcus aureus (MSSA) and Streptococcus. Ineffective against MRSA."
    },
    indications: [
      "Skin and soft tissue infections (cellulitis, impetigo, folliculitis)",
      "Osteomyelitis and arthritis (Staphylococcus-induced)",
      "Staphylococcus endocarditis and sepsis"
    ],
    notes: "Available in Hungary only through special import, but it is a first-line basic drug for Staphylococcus infections in Western Europe (e.g., UK)."
  },
  {
    id: "piperacillin",
    name: "Piperacillin",
    abbreviation: "PIP",
    brandNames: "Piperacillin (rarely used as monotherapy)",
    group: "Ureidopenicillins (Pseudomonas-active penicillins)",
    halfLife: "1 hour",
    pae: "Short (<1 hour) in Gram-negatives",
    effectType: "bactericidal",
    dosage: {
      adult: "3x or 4x 4 g i.v. infusion",
      pediatric: "100-300 mg/kg/day i.v., divided into 3-4 doses",
      renalAdjustment: "GFR < 20 ml/min: dose reduction (e.g., to 2x or 3x 2 g)"
    },
    mechanismOfAction: "Bactericidal. Broad-spectrum penicillin with extended activity against Gram-negative bacteria, including Pseudomonas aeruginosa, by inhibiting cell wall synthesis (inhibiting PBP-3 and PBP-1a).",
    sideEffects: [
      "Hypersensitivity reactions",
      "Elevated liver enzymes",
      "Bleeding tendency (at high doses, inhibits platelet aggregation)",
      "Hypokalemia"
    ],
    spectrum: {
      gramPositive: 1,
      gramNegative: 2,
      anaerobe: 1,
      atypical: 0,
      pseudomonas: 2,
      other: "Easily degraded by beta-lactamase-producing strains, so rarely used as monotherapy; only in combination."
    },
    indications: [
      "Severe Pseudomonas aeruginosa infections as part of combination therapy",
      "Nosocomial infections",
      "Febrile neutropenia (combined with aminoglycoside)"
    ],
    notes: "Monotherapy has been almost completely replaced by Piperacillin/Tazobactam combination."
  },
  {
    id: "oxacillin",
    name: "Oxacillin",
    abbreviation: "OXA",
    brandNames: "Oxacillin",
    group: "Isoxazolyl-penicillins (Beta-lactamase-resistant penicillins)",
    halfLife: "30-45 minutes",
    pae: "Pronounced in Gram-positives",
    effectType: "bactericidal",
    dosage: {
      adult: "1-2 g i.v. every 4-6 hours (4-12 g/day in septic cases)",
      pediatric: "100-200 mg/kg/day i.v., divided into 4-6 doses",
      renalAdjustment: "Mild dose adjustment may be required in severe renal impairment"
    },
    mechanismOfAction: "Bactericidal. Inhibits bacterial cell wall synthesis by binding to PBPs. Structurally resistant to the beta-lactamase (penicillinase) enzyme of Staphylococcus.",
    sideEffects: [
      "Allergic reactions",
      "Interstitial nephritis",
      "Liver function impairment (elevated transaminases)",
      "Neutropenia (with long-term treatment)"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 0,
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 0,
      other: "Effective only against methicillin-susceptible Staphylococcus (MSSA) and Streptococcus."
    },
    indications: [
      "Severe systemic Staphylococcus aureus (MSSA) infections",
      "Endocarditis, osteomyelitis, sepsis",
      "Skin and soft tissue infections"
    ],
    notes: "Similar to nafcillin and cloxacillin. Oxacillin susceptibility is tested in MRSA resistance studies."
  },
  {
    id: "pivmecillinam",
    name: "Pivmecillinam",
    abbreviation: "PIV",
    brandNames: "Selexid",
    group: "Amdinocillins (Urinary-specific penicillins)",
    halfLife: "1 hour",
    pae: "Moderate in Gram-negatives",
    effectType: "bactericidal",
    dosage: {
      adult: "3x 200 mg - 400 mg p.o. with meals, with plenty of fluids",
      pediatric: "In Hungary, this form is rarely used for children",
      renalAdjustment: "GFR < 30 ml/min: reduced dose recommended"
    },
    mechanismOfAction: "Bactericidal. Prodrug converted to mecillinam (amdinocillin) in the body. Specifically binds to PBP-2, causing Gram-negative bacteria to become spherical (spheroplast formation) and lyse.",
    sideEffects: [
      "Nausea, digestive disorders",
      "Esophageal irritation/ulcer (if not taken with sufficient fluids)",
      "Carnitine depletion (long-term use is contraindicated!)"
    ],
    spectrum: {
      gramPositive: 0,
      gramNegative: 2,
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 0,
      other: "Specifically excellent against Enterobacterales (E. coli, Klebsiella, Proteus) in urine. Some ESBL producers are also susceptible at urine concentrations!"
    },
    indications: [
      "First-line oral treatment for acute uncomplicated cystitis (bladder inflammation)",
      "Prevention of urinary tract infections"
    ],
    notes: "Must be taken with meals and plenty of fluids, in a sitting or standing position. Long-term use is prohibited due to the risk of carnitine depletion."
  },
  {
    id: "cephalexin",
    name: "Cephalexin",
    abbreviation: "LEX",
    brandNames: "Pyassan, Cephalexin (Keflex abroad)",
    group: "1st generation Cephalosporins",
    halfLife: "1 hour",
    pae: "Pronounced in Gram-positives",
    effectType: "bactericidal",
    dosage: {
      adult: "2-4x 250 mg - 500 mg p.o. daily (max. 4 g/day)",
      pediatric: "25-50 mg/kg/day p.o., divided into 3-4 doses",
      renalAdjustment: "GFR < 30 ml/min: reduced dose or longer interval"
    },
    mechanismOfAction: "Bactericidal. Inhibits bacterial cell wall synthesis by binding to PBPs.",
    sideEffects: [
      "Gastrointestinal complaints",
      "Mild skin rashes",
      "Eosinophilia"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 1,
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 0,
      other: "Good Gram-positive activity (Streptococcus, MSSA). Limited Gram-negative activity (E. coli, Klebsiella, Proteus)."
    },
    indications: [
      "Mild skin and soft tissue infections",
      "Uncomplicated cystitis",
      "Upper respiratory tract infections (if penicillin hypersensitivity exists)"
    ],
    notes: "First-generation cephalosporin with excellent oral absorption."
  },
   {
    id: "cefoxitin",
    name: "Cefoxitin",
    abbreviation: "FOX",
    brandNames: "Mefoxin (abroad)",
    group: "2nd-generation cephalosporins (cephamycins)",
    halfLife: "45-60 minutes",
    pae: "Moderate",
    effectType: "bactericidal",
    dosage: {
      adult: "3x or 4x 1-2 g i.v. daily",
      pediatric: "80-160 mg/kg/day i.v. divided into 4-6 doses",
      renalAdjustment: "GFR < 50 ml/min: dose adjustment required"
    },
    mechanismOfAction: "Bactericidal. A cephamycin derivative that is beta-lactamase-stable and also resistant to some ESBL enzymes.",
    sideEffects: [
      "Local thrombophlebitis",
      "Allergic reactions",
      "Diarrhea"
    ],
    spectrum: {
      gramPositive: 1,
      gramNegative: 2,
      anaerobe: 2,
      atypical: 0,
      pseudomonas: 0,
      other: "Outstanding anaerobic (including Bacteroides fragilis!) and beta-lactamase-stable Gram-negative activity."
    },
    indications: [
      "Surgical prophylaxis (especially in pelvic, bowel, and gynecological surgery)",
      "Intra-abdominal infections",
      "Pelvic inflammatory disease (PID)"
    ],
    notes: "In laboratories, the cefoxitin disk is used to detect MRSA resistance because it reliably indicates the presence of the mecA gene."
  },
  {
    id: "cefaclor",
    name: "Cefaclor",
    abbreviation: "CEC",
    brandNames: "Ceclor, Vercef",
    group: "2nd-generation cephalosporins",
    halfLife: "30-60 minutes",
    pae: "1-2 hours against Gram-positive bacteria",
    effectType: "bactericidal",
    dosage: {
      adult: "3x 250 mg - 500 mg p.o. daily, or 2x 375 mg - 750 mg extended-release tablet",
      pediatric: "20-40 mg/kg/day p.o. divided into 3 doses",
      renalAdjustment: "Dose reduction in severe renal impairment (GFR < 10)"
    },
    mechanismOfAction: "Bactericidal. Inhibits cell wall synthesis by binding to PBPs. More stable against Gram-negative beta-lactamases than first-generation agents.",
    sideEffects: [
      "Gastrointestinal complaints",
      "Serum sickness-like reaction (fever, joint pain, rash - especially in children)",
      "Allergy"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 1,
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 0,
      other: "Moderate activity against Haemophilus influenzae, Moraxella catarrhalis, and Enterobacterales."
    },
    indications: [
      "Upper and lower respiratory tract infections (otitis media, sinusitis, tonsillitis, bronchitis)",
      "Mild skin and soft tissue infections",
      "Uncomplicated urinary tract infections"
    ],
    notes: "A particularly popular oral cephalosporin in pediatrics."
  },
  {
    id: "cefotaxime",
    name: "Cefotaxime",
    abbreviation: "CTX",
    brandNames: "Cefotaxim Kabi, Sandoz Cefotaxim",
    group: "3rd-generation cephalosporins (Gram-negative predominant)",
    halfLife: "1 hour",
    pae: "Minimal against Gram-negative bacteria",
    effectType: "bactericidal",
    dosage: {
      adult: "3x or 4x 1-2 g i.v. daily (up to 12 g/day in severe infection)",
      pediatric: "100-200 mg/kg/day i.v. divided into 3-4 doses",
      renalAdjustment: "GFR < 20 ml/min: reduced dose (e.g. half dose or every 12 hours)"
    },
    mechanismOfAction: "Bactericidal. Excellent Gram-negative cell wall penetration and PBP-3 binding. Its active metabolite acts synergistically with the parent compound.",
    sideEffects: [
      "Allergic reactions",
      "Diarrhea (risk of C. difficile)",
      "Leukopenia, eosinophilia"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 2,
      anaerobe: 1,
      atypical: 0,
      pseudomonas: 0,
      other: "Excellent activity against streptococci, Neisseria meningitidis, and Enterobacterales."
    },
    indications: [
      "Bacterial meningitis (especially in newborns, because it does not cause kernicterus, unlike ceftriaxone!)",
      "Sepsis",
      "Severe pulmonary and urinary tract infections",
      "Spontaneous bacterial peritonitis (SBP)"
    ],
    notes: "Similar to ceftriaxone, but with a shorter half-life, so it must be given 3-4 times daily. Absolutely preferred in neonatology."
  },
  {
    id: "cefixime",
    name: "Cefixime",
    abbreviation: "CFM",
    brandNames: "Suprax",
    group: "3rd-generation cephalosporins (oral)",
    halfLife: "3-4 hours",
    pae: "Moderate",
    effectType: "bactericidal",
    dosage: {
      adult: "1x 400 mg p.o. or 2x 200 mg p.o. daily",
      pediatric: "8 mg/kg/day p.o. in suspension, divided into 1 or 2 doses",
      renalAdjustment: "GFR < 20 ml/min: reduced dose (e.g. 200 mg daily)"
    },
    mechanismOfAction: "Bactericidal. Inhibits cell wall synthesis by binding to PBPs. Stable against the most common Gram-negative beta-lactamases.",
    sideEffects: [
      "Diarrhea (very common)",
      "Nausea, abdominal pain",
      "Hypersensitivity"
    ],
    spectrum: {
      gramPositive: 1,
      gramNegative: 2,
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 0,
      other: "Excellent Gram-negative activity for an oral agent. Good against streptococci, but weak against MSSA!"
    },
    indications: [
      "Complicated or recurrent urinary tract infections",
      "Otitis media, sinusitis, tonsillitis (if first-line agents are ineffective)",
      "Uncomplicated gonorrhea (single 400 mg dose)"
    ],
    notes: "The best-known and most widely prescribed 3rd-generation oral cephalosporin in Hungary."
  },
  {
    id: "cefoperazone",
    name: "Cefoperazone",
    abbreviation: "CFP",
    brandNames: "Cefobid (abroad, combined with sulbactam: Sulperazon)",
    group: "3rd-generation cephalosporins (anti-Pseudomonas)",
    halfLife: "2 hours",
    pae: "Moderate against Gram-negative bacteria",
    effectType: "bactericidal",
    dosage: {
      adult: "2-4 g i.v. or i.m. daily, divided into 2 doses",
      pediatric: "50-200 mg/kg/day i.v. divided into 2-4 doses",
      renalAdjustment: "No dose adjustment is needed in renal impairment because it is excreted via bile!"
    },
    mechanismOfAction: "Bactericidal. Inhibits bacterial cell wall synthesis. Also effective against Pseudomonas.",
    sideEffects: [
      "Disulfiram-like reaction with alcohol consumption",
      "Hypoprothrombinemia and bleeding tendency (inhibition of vitamin K synthesis)",
      "Diarrhea (significant biliary excretion)"
    ],
    spectrum: {
      gramPositive: 1,
      gramNegative: 2,
      anaerobe: 1,
      atypical: 0,
      pseudomonas: 2,
      other: "Effective against Pseudomonas aeruginosa, but less stable against beta-lactamases than ceftazidime."
    },
    indications: [
      "Infections caused by Pseudomonas aeruginosa",
      "Biliary tract infections (very high concentrations are achieved in bile!)",
      "Severe Gram-negative sepsis"
    ],
    notes: "In clinical practice it is mainly used in combination with sulbactam (Sulperazon)."
  },
  {
    id: "cefepime_tazobactam",
    name: "Cefepime / tazobactam",
    abbreviation: "FEP-TAN",
    brandNames: "Cefepime/Tazobactam (abroad)",
    group: "4th-generation cephalosporin and beta-lactamase inhibitor combinations",
    halfLife: "approx. 2 hours",
    pae: "Moderate",
    effectType: "bactericidal",
    dosage: {
      adult: "2x or 3x 2 g / 0.25 g i.v. daily",
      pediatric: "150 mg/kg/day i.v. divided into 3 doses",
      renalAdjustment: "GFR < 50 ml/min: reduced dose and longer dosing interval recommended"
    },
    mechanismOfAction: "Bactericidal. Fourth-generation cefepime is resistant to AmpC beta-lactamases, while tazobactam inhibits ESBL enzymes, making the combination excellent against multidrug-resistant Gram-negative bacteria.",
    sideEffects: [
      "Neurotoxicity (seizures, encephalopathy - especially in renal impairment!)",
      "Diarrhea",
      "Elevated liver function tests"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 2,
      anaerobe: 1,
      atypical: 0,
      pseudomonas: 2,
      other: "Specifically developed against ESBL-producing and AmpC-overproducing Enterobacterales strains, as well as Pseudomonas aeruginosa."
    },
    indications: [
      "Severe hospital-acquired infections",
      "Nosocomial pneumonia",
      "Complicated intra-abdominal infections",
      "Empiric treatment of febrile neutropenia"
    ],
    notes: "A new-generation weapon against Gram-negative resistance."
  },
  {
    id: "cefepime_enmetazobactam",
    name: "Cefepime / enmetazobactam",
    abbreviation: "FEP-ANM",
    brandNames: "Exblifep",
    group: "4th-generation cephalosporin and beta-lactamase inhibitor combinations",
    halfLife: "approx. 2-2.5 hours",
    pae: "Marked against Gram-negative bacteria",
    effectType: "bactericidal",
    dosage: {
      adult: "3x 2 g / 0.5 g i.v. daily (as a 4-hour extended infusion)",
      pediatric: "Safety in children has only been limitedly demonstrated",
      renalAdjustment: "Strict dose adjustment is required when GFR < 60 ml/min"
    },
    mechanismOfAction: "Bactericidal. Enmetazobactam is a new beta-lactamase inhibitor that specifically inhibits ESBL (Class A) enzymes, protecting cefepime, which itself is resistant to AmpC enzymes.",
    sideEffects: [
      "Headache",
      "Renal impairment/transaminase elevation",
      "Neurotoxicity",
      "Diarrhea"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 2,
      anaerobe: 1,
      atypical: 0,
      pseudomonas: 2,
      other: "Extremely effective against ESBL-producing Enterobacterales. Spares carbapenems!"
    },
    indications: [
      "Complicated urinary tract infections, including pyelonephritis",
      "HAP/VAP and complicated intra-abdominal infections (in combination)"
    ],
    notes: "A particularly important carbapenem-sparing tool in the treatment of ESBL-positive infections."
  },
  {
    id: "ceftaroline_avibactam",
    name: "Ceftaroline fosamil / avibactam",
    abbreviation: "CPT-AVI",
    brandNames: "Zinforo combination (special development)",
    group: "5th-generation cephalosporin and beta-lactamase inhibitor combinations",
    halfLife: "2.5 - 3 hours",
    pae: "Marked against both Gram-positive and Gram-negative bacteria",
    effectType: "bactericidal",
    dosage: {
      adult: "2x 600 mg / 150 mg i.v. daily",
      pediatric: "Pediatric data are not yet available",
      renalAdjustment: "GFR < 50 ml/min: dose reduction required"
    },
    mechanismOfAction: "Bactericidal. Ceftaroline is the only cephalosporin that binds to PBP-2a (MRSA), while avibactam is a broad-spectrum beta-lactamase inhibitor (Class A, C, and some D/OXA-48 enzymes).",
    sideEffects: [
      "Positive Coombs test",
      "Rash, fever",
      "Diarrhea"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 2,
      anaerobe: 1,
      atypical: 0,
      pseudomonas: 0,
      other: "The only combination that is effective against MRSA and ESBL/AmpC-producing Gram-negative bacteria at the same time!"
    },
    indications: [
      "Mixed infections caused by multidrug-resistant (MDR) Gram-negative bacteria and MRSA",
      "Complicated skin and soft tissue infections",
      "Hospital-acquired pneumonia"
    ],
    notes: "An outstanding-spectrum combination under clinical development or used in special indications."
  },
  {
    id: "ceftazidime_avibactam",
    name: "Ceftazidime / avibactam",
    abbreviation: "CZA",
    brandNames: "Zavicefta",
    group: "3rd-generation cephalosporin and beta-lactamase inhibitor combinations",
    halfLife: "2 hours",
    pae: "Moderate against Gram-negative bacteria",
    effectType: "bactericidal",
    dosage: {
      adult: "3x 2 g / 0.5 g i.v. daily, as a 2-hour infusion",
      pediatric: "Usable from 3 months of age based on body weight",
      renalAdjustment: "GFR < 50 ml/min: strict dose reduction required!"
    },
    mechanismOfAction: "Bactericidal. Avibactam is a non-beta-lactam inhibitor that inhibits Ambler Class A (ESBL, KPC), Class C (AmpC), and Class D (OXA-48) enzymes, but not Class B (NDM, VIM, IMP)!",
    sideEffects: [
      "Direct Coombs test seroconversion",
      "Elevated liver enzymes",
      "Nausea, diarrhea",
      "Seizures"
    ],
    spectrum: {
      gramPositive: 0,
      gramNegative: 2,
      anaerobe: 1,
      atypical: 0,
      pseudomonas: 2,
      other: "A 'superweapon' specifically developed against carbapenem-resistant Enterobacterales (KPC, OXA-48 producers) and multidrug-resistant Pseudomonas."
    },
    indications: [
      "Complicated intra-abdominal infections (combined with metronidazole)",
      "Complicated urinary tract infections",
      "Nosocomial pneumonia (HAP/VAP)",
      "Aerobic Gram-negative infections when treatment options are limited"
    ],
    notes: "Can only be administered in institutional, strictly controlled settings for carbapenem-resistant infections."
  },
  {
    id: "biapenem",
    name: "Biapenem",
    abbreviation: "BPR",
    brandNames: "Omegacin",
    group: "Carbapenems",
    halfLife: "1 hour",
    pae: "Marked against Gram-negative bacteria",
    effectType: "bactericidal",
    dosage: {
      adult: "2x 300 mg - 600 mg i.v. daily as a 30-60 minute infusion",
      pediatric: "30-60 mg/kg/day i.v. divided into 3 doses",
      renalAdjustment: "GFR < 50 ml/min: dose reduction recommended"
    },
    mechanismOfAction: "Bactericidal. A very broad-spectrum carbapenem. It shows outstanding stability against human renal dehydropeptidase-I (DHP-I), so it does not require cilastatin protection.",
    sideEffects: [
      "Gastrointestinal complaints",
      "Elevated liver function tests",
      "Low seizure risk (neurotoxicity)"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 2,
      anaerobe: 2,
      atypical: 0,
      pseudomonas: 2,
      other: "Extremely broad spectrum, including ESBL and AmpC producers and Pseudomonas aeruginosa."
    },
    indications: [
      "Complicated urinary, intra-abdominal, and respiratory infections",
      "Sepsis",
      "Skin and soft tissue infections"
    ],
    notes: "A carbapenem approved and used primarily in Japan and some Asian countries."
  },
  {
    id: "ceftolozane_tazobactam",
    name: "Ceftolozane / tazobactam",
    abbreviation: "C/T",
    brandNames: "Zerbaxa",
    group: "5th-generation cephalosporin and beta-lactamase inhibitor combinations",
    halfLife: "2.5 - 3 hours (ceftolozane), 1 hour (tazobactam)",
    pae: "Marked against Gram-negative bacteria",
    effectType: "bactericidal",
    dosage: {
      adult: "3x 1.5 g (1 g ceftolozane + 0.5 g tazobactam) i.v. daily in a 1-hour infusion; for HAP/VAP 3x 3 g i.v.",
      pediatric: "Pediatric dosing is only limitedly defined",
      renalAdjustment: "GFR < 50 ml/min: strict dose reduction required!"
    },
    mechanismOfAction: "Bactericidal. Ceftolozane is a new cephalosporin optimized specifically against Pseudomonas aeruginosa, and tazobactam protects against ESBL enzymes.",
    sideEffects: [
      "Nausea, diarrhea",
      "Headache",
      "Positive Coombs test",
      "Hypokalaemia"
    ],
    spectrum: {
      gramPositive: 1,
      gramNegative: 2,
      anaerobe: 1,
      atypical: 0,
      pseudomonas: 2,
      other: "The most effective currently available beta-lactam monotherapy/combination partner against multidrug-resistant Pseudomonas aeruginosa!"
    },
    indications: [
      "Complicated intra-abdominal infections (combined with metronidazole)",
      "Complicated urinary tract infections (including pyelonephritis)",
      "Nosocomial pneumonia (HAP/VAP)"
    ],
    notes: "A particularly valuable weapon in the treatment of pneumonia and urosepsis caused by multidrug-resistant (MDR) Pseudomonas."
  },
  {
    id: "erythromycin",
    name: "Erythromycin",
    abbreviation: "ERY",
    brandNames: "Erythromycin-Richter, Erythrocin",
    group: "Macrolides",
    halfLife: "1.5 - 2 hours",
    pae: "Marked against Gram-positive bacteria (2-4 hours)",
    effectType: "bacteriostatic",
    dosage: {
      adult: "4x 250 mg - 500 mg p.o. or 2-4x 500 mg - 1000 mg i.v. daily",
      pediatric: "30-50 mg/kg/day p.o. or i.v. divided into 4 doses",
      renalAdjustment: "No dose adjustment is needed in renal impairment"
    },
    mechanismOfAction: "Bacteriostatic. Reversibly binds to the 23S rRNA of the bacterial 50S ribosomal subunit, inhibiting translocation during protein synthesis.",
    sideEffects: [
      "Gastrointestinal complaints (very common, abdominal cramps due to motilin receptor stimulation)",
      "QT prolongation (risk of torsades de pointes ventricular tachycardia)",
      "Hepatotoxicity (cholestatic hepatitis, especially with the estolate salt)",
      "Strong CYP3A4 inhibition (numerous drug interactions)"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 1,
      anaerobe: 1,
      atypical: 2,
      pseudomonas: 0,
      other: "Excellent activity against atypical pathogens (Mycoplasma, Chlamydia, Legionella) and Bordetella pertussis."
    },
    indications: [
      "Atypical pneumonia",
      "Treatment and post-exposure prophylaxis of Bordetella pertussis (whooping cough)",
      "Eradication of diphtheria carriage",
      "Alternative agent in penicillin-allergic patients with Streptococcus infections",
      "Gastroparesis (for its prokinetic effect, in a non-infectious indication)"
    ],
    notes: "The prototype macrolide. It is now used less often for systemic infections because of pronounced gastrointestinal side effects and four-times-daily dosing, but it is useful as a prokinetic."
  },
  {
    id: "roxithromycin",
    name: "Roxithromycin",
    abbreviation: "ROX",
    brandNames: "Rulid",
    group: "Macrolides",
    halfLife: "10 - 12 hours",
    pae: "Marked against Gram-positive bacteria",
    effectType: "bacteriostatic",
    dosage: {
      adult: "2x 150 mg p.o. daily or 1x 300 mg p.o. daily (before meals)",
      pediatric: "5-8 mg/kg/day p.o. divided into two doses",
      renalAdjustment: "In severe renal impairment, halving the dose is recommended (max. 150 mg daily)"
    },
    mechanismOfAction: "Bacteriostatic macrolide. Binds to the 50S ribosomal subunit, inhibiting protein synthesis.",
    sideEffects: [
      "Mild gastrointestinal symptoms (much rarer than with erythromycin)",
      "QT prolongation",
      "Allergic skin reactions",
      "Moderate elevation of liver enzyme levels"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 1,
      anaerobe: 1,
      atypical: 2,
      pseudomonas: 0,
      other: "Similar to erythromycin, but with better tissue penetration and a longer half-life."
    },
    indications: [
      "Mild to moderate respiratory infections (tonsillitis, pharyngitis, pneumonia, bronchitis)",
      "Skin and soft tissue infections",
      "Non-gonococcal urethritis and gynecological infections (Chlamydia)"
    ],
    notes: "A semisynthetic macrolide that is more acid-stable than erythromycin, is better absorbed, and causes significantly fewer gastrointestinal adverse effects."
  },
  {
    id: "spiramycin",
    name: "Spiramycin",
    abbreviation: "SP",
    brandNames: "Rovamycine",
    group: "Macrolides",
    halfLife: "5 - 8 hours (but accumulates extremely long in tissues)",
    pae: "Marked",
    effectType: "bacteriostatic",
    dosage: {
      adult: "2-3x 3,000,000 IU (International Units) p.o. daily (2-3 g/day)",
      pediatric: "150,000 - 300,000 IU/kg/day p.o. divided into 2-3 doses",
      renalAdjustment: "No dose adjustment is needed in renal impairment"
    },
    mechanismOfAction: "Bacteriostatic macrolide antibiotic. Inhibits bacterial protein synthesis by binding to the 50S ribosomal subunit.",
    sideEffects: [
      "Nausea, vomiting, diarrhea",
      "Paresthesia (numbness - transient)",
      "Allergic skin rashes",
      "Rare QT prolongation"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 1,
      anaerobe: 1,
      atypical: 2,
      pseudomonas: 0,
      other: "Especially strong activity against Toxoplasma gondii."
    },
    indications: [
      "Treatment of toxoplasmosis during pregnancy (prevents transplacental transmission to the fetus!)",
      "Dental and oral surgery infections (often combined with metronidazole)",
      "Respiratory infections (tonsillitis, otitis media, pneumonia)"
    ],
    notes: "Spiramycin is especially important for preventing Toxoplasma infection in pregnant mothers, because it is not teratogenic but effectively inhibits the parasite's passage across the placenta."
  },
  {
    id: "fidaxomicin",
    name: "Fidaxomicin",
    abbreviation: "FDX",
    brandNames: "Dificlir",
    group: "Other antibiotics (macrocyclic agents)",
    halfLife: "approx. 1-2 hours (acts locally in the intestine, with almost no systemic absorption)",
    pae: "Extremely marked (up to 24-48 hours against Clostridioides)",
    effectType: "bactericidal",
    dosage: {
      adult: "2x 200 mg p.o. daily for 10 days (regardless of meals)",
      pediatric: "Its effectiveness in children has only been limitedly demonstrated, but body-weight-based dosing exists",
      renalAdjustment: "No dose adjustment is required (due to minimal systemic absorption)"
    },
    mechanismOfAction: "Bactericidal. Selectively inhibits bacterial RNA polymerase before transcription begins, acting at a unique site. It has excellent selectivity against Clostridioides difficile.",
    sideEffects: [
      "Nausea, constipation, bloating",
      "Very rarely gastrointestinal bleeding",
      "Mild hypersensitivity reactions"
    ],
    spectrum: {
      gramPositive: 1,
      gramNegative: 0,
      anaerobe: 1,
      atypical: 0,
      pseudomonas: 0,
      other: "Extremely narrow spectrum, sparing the normal gut flora (bacteroides), which dramatically reduces the risk of C. difficile recurrence!"
    },
    indications: [
      "Clostridioides difficile-associated diarrhea (CDI) in adults (first-line agent, especially in recurrent or high-risk cases)"
    ],
    notes: "A modern, premium targeted antibiotic. Although more expensive than vancomycin, the recurrence rate is significantly lower with its use, because it spares the beneficial anaerobic gut flora."
  },
  {
    id: "teicoplanin",
    name: "Teicoplanin",
    abbreviation: "TEC",
    brandNames: "Targocid",
    group: "Glycopeptides",
    halfLife: "100 - 150 hours (extremely long!)",
    pae: "Marked against Gram-positive bacteria (2-4 hours)",
    effectType: "bactericidal",
    dosage: {
      adult: "Loading dose: 3-5x 400 mg i.v. or i.m. every 12 hours, then maintenance dose 1x 400 mg (or 6-12 mg/kg) daily",
      pediatric: "10-12 mg/kg every 12 hours for 3 doses (loading), then 10 mg/kg once daily",
      renalAdjustment: "GFR < 80 ml/min: maintenance dose reduction or prolongation of the dosing interval is required (e.g. once every 2-3 days)"
    },
    mechanismOfAction: "Bactericidal (slow). It inhibits bacterial cell wall peptidoglycan synthesis by binding with high affinity to the D-alanyl-D-alanine terminus of peptide precursors, thereby preventing transglycosylation and transpeptidation.",
    sideEffects: [
      "Local pain at the injection site",
      "Allergic skin reactions (rash, fever - rare)",
      "Ototoxicity and nephrotoxicity (significantly rarer and milder than with vancomycin)",
      "Thrombocytopenia, leukopenia (with long-term treatment)"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 0,
      anaerobe: 1,
      atypical: 0,
      pseudomonas: 0,
      other: "Excellent Gram-positive activity, including MRSA, MRSE, and Enterococcus faecalis strains. It is resistant to VanA-type VRE!"
    },
    indications: [
      "Severe infections caused by MRSA or MRSE (sepsis, osteomyelitis, endocarditis)",
      "Skin and soft tissue infections",
      "Peritoneal dialysis-associated peritonitis",
      "Pseudomembranous colitis (Clostridioides difficile) when given orally (not absorbed)"
    ],
    notes: "The big advantage of teicoplanin over vancomycin is once-daily dosing (after loading), intramuscular administration, and the fact that it does not cause 'Red Man' syndrome."
  },
  {
    id: "imipenem_cilastatin",
    name: "Imipenem / cilastatin",
    abbreviation: "IPM",
    brandNames: "Tienam, Imipenem/Cilastatin Kabi",
    group: "Carbapenems",
    halfLife: "approx. 1 hour",
    pae: "Marked against Gram-negative bacteria (1-2 hours)",
    effectType: "bactericidal",
    dosage: {
      adult: "3-4x 500 mg / 500 mg i.v. daily in slow infusion (up to 4 g/day in severe cases)",
      pediatric: "15-25 mg/kg every 6 hours i.v.",
      renalAdjustment: "Strict dose adjustment is required depending on renal function to avoid neurotoxicity!"
    },
    mechanismOfAction: "Bactericidal. Inhibits cell wall synthesis by binding to PBPs (especially PBP-1a, PBP-1b, PBP-2, PBP-4). Cilastatin is a renal dehydropeptidase-I (DHP-I) inhibitor that protects imipenem from degradation in the kidney and reduces nephrotoxicity.",
    sideEffects: [
      "Seizures (high seizure risk - neurotoxicity, especially in renal impairment or pre-existing CNS disease!)",
      "Nausea, vomiting (especially with rapid i.v. administration)",
      "Hypersensitivity reactions (rash, fever)",
      "Pseudomembranous colitis"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 2,
      anaerobe: 2,
      atypical: 0,
      pseudomonas: 2,
      other: "Extremely stable against most beta-lactamases, including ESBL and AmpC enzymes. Ineffective against MRSA and carbapenemase producers."
    },
    indications: [
      "Severe mixed nosocomial infections (intra-abdominal, pelvic, pneumonia)",
      "Empiric treatment of sepsis and febrile neutropenia",
      "Multidrug-resistant Gram-negative infections (e.g. ESBL)"
    ],
    notes: "Among carbapenems, imipenem has the highest seizure-inducing potential (neurotoxicity), so it should be used with caution in epileptic patients or those with renal impairment; meropenem is preferred instead."
  },
  {
    id: "imipenem_cilastatin_relebactam",
    name: "Imipenem / cilastatin / relebactam",
    abbreviation: "IPM-REL",
    brandNames: "Recarbrio",
    group: "Carbapenem and beta-lactamase inhibitor combinations",
    halfLife: "approx. 1-1.2 hours",
    pae: "Marked against Gram-negative bacteria (over 2 hours)",
    effectType: "bactericidal",
    dosage: {
      adult: "4x 500 mg / 500 mg / 250 mg i.v. daily in a 30-minute infusion",
      pediatric: "Its safety and efficacy in children have not yet been fully established",
      renalAdjustment: "Strict dose adjustment is required based on the degree of renal impairment (dose reduction already when GFR < 90 ml/min!)"
    },
    mechanismOfAction: "Bactericidal. Imipenem/cilastatin inhibits cell wall synthesis, while relebactam is a new non-beta-lactam (diazabicyclooctane) beta-lactamase inhibitor that effectively inhibits Ambler Class A (KPC) and Class C (AmpC) enzymes, restoring imipenem activity against resistant strains.",
    sideEffects: [
      "Nausea, diarrhea, headache",
      "Elevation of liver enzymes/transaminases",
      "Neurotoxicity (seizures - due to the imipenem component)",
      "Injection-site reactions"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 2,
      anaerobe: 2,
      atypical: 0,
      pseudomonas: 2,
      other: "Extremely effective against KPC-producing and AmpC-overproducing Enterobacterales and Pseudomonas aeruginosa strains! Ineffective against Class B (metallo-beta-lactamases) and Class D (OXA-48)."
    },
    indications: [
      "Complicated urinary tract infections (including pyelonephritis)",
      "Complicated intra-abdominal infections",
      "Nosocomial and ventilator-associated pneumonia (HAP/VAP)",
      "Gram-negative infections in patients with few treatment options"
    ],
    notes: "A modern reserve drug. Adding relebactam protects imipenem from KPC carbapenemases, making it an excellent alternative to ceftazidime/avibactam."
  },
  {
    id: "meropenem_vaborbactam",
    name: "Meropenem / vaborbactam",
    abbreviation: "MER-VAB",
    brandNames: "Vabomere",
    group: "Carbapenem and beta-lactamase inhibitor combinations",
    halfLife: "approx. 1-1.5 hours",
    pae: "Marked against Gram-negative bacteria",
    effectType: "bactericidal",
    dosage: {
      adult: "3x 2 g / 2 g (total 4 g) i.v. daily in a 3-hour extended infusion",
      pediatric: "Its safety in children under 18 has not been established",
      renalAdjustment: "Strict dose reduction is required when GFR < 40 ml/min!"
    },
    mechanismOfAction: "Bactericidal. Meropenem inhibits bacterial cell wall synthesis, while vaborbactam is a new boronic-acid-based beta-lactamase inhibitor that specifically inhibits Class A and Class C carbapenemases (especially KPC) with high affinity.",
    sideEffects: [
      "Headache",
      "Diarrhea, nausea",
      "Infusion-site local reactions (thrombophlebitis)",
      "Transient transaminase elevation",
      "Hypokalaemia"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 2,
      anaerobe: 2,
      atypical: 0,
      pseudomonas: 2,
      other: "Extremely effective against Klebsiella pneumoniae carbapenemase (KPC)-producing Enterobacterales strains! Ineffective against metallo-beta-lactamases (NDM, VIM - Class B) and OXA-48 (Class D)!"
    },
    indications: [
      "Complicated urinary tract infections, including pyelonephritis",
      "Complicated intra-abdominal infections",
      "HAP/VAP (hospital-acquired pneumonia)",
      "Bacteremia and sepsis when KPC-producing Enterobacterales have been confirmed"
    ],
    notes: "One of the most effective targeted clinical weapons against KPC-producing Klebsiella infections, which has significantly improved survival compared with earlier toxic colistin-based therapies."
  },
  {
    id: "telithromycin",
    name: "Telithromycin",
    abbreviation: "TEL",
    brandNames: "Ketek",
    group: "Ketolides (macrolide derivatives)",
    halfLife: "10 hours",
    pae: "Marked against Gram-positive bacteria (3-5 hours)",
    effectType: "bacteriostatic",
    dosage: {
      adult: "1x 800 mg p.o. daily (regardless of meals)",
      pediatric: "Its use is not recommended in children and adolescents",
      renalAdjustment: "In severe renal impairment (GFR < 30 ml/min), the dose should be reduced to 400 mg"
    },
    mechanismOfAction: "Bacteriostatic. A ketolide developed from macrolides. It binds to the 50S ribosomal subunit at two different sites (23S and 9S RNA), giving it tenfold stronger binding and activity against macrolide-resistant Streptococcus pneumoniae strains (with erm or mef genes).",
    sideEffects: [
      "Severe hepatotoxicity (risk of acute liver failure - black box warning!)",
      "Visual disturbances (blurred vision, difficulty focusing - inhibits nicotinic acetylcholine receptors of the ciliary ganglion)",
      "Worsening of myasthenia gravis (can cause life-threatening respiratory paralysis - strictly contraindicated!)",
      "QT prolongation"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 1,
      anaerobe: 1,
      atypical: 2,
      pseudomonas: 0,
      other: "Specifically designed against penicillin- and macrolide-resistant respiratory pathogens."
    },
    indications: [
      "Community-acquired pneumonia (CAP) - only if no other, safer antibiotic can be used",
      "Acute exacerbation of chronic bronchitis, sinusitis (in strictly limited indications)"
    ],
    notes: "Because of severe and unpredictable liver toxicity and fatal respiratory paralysis in patients with myasthenia gravis, its use has been drastically reduced worldwide; it remains strictly a second-line reserve."
  },
  {
    id: "tigecycline",
    name: "Tigecycline",
    abbreviation: "TGC",
    brandNames: "Tygacil, Tigecycline Kabi",
    group: "Glycylcyclines (tetracycline derivatives)",
    halfLife: "37 - 42 hours (extremely long!)",
    pae: "Marked (3-4 hours)",
    effectType: "bacteriostatic",
    dosage: {
      adult: "Starting (loading) dose: 100 mg i.v., then 50 mg i.v. every 12 hours as a slow infusion (at least 30-60 minutes)",
      pediatric: "Ages 8-12: 1.2 mg/kg i.v. every 12 hours (max 50 mg per dose), adult dose from age 12",
      renalAdjustment: "No adjustment is needed in renal impairment. In severe hepatic impairment (Child-Pugh C), the maintenance dose should be reduced to 25 mg/day!"
    },
    mechanismOfAction: "Bacteriostatic. A glycylcycline derived from minocycline. It binds to the 30S ribosomal subunit, inhibiting aminoacyl-tRNA entry into the A site. Because of the t-butylglycylamido side chain, tigecycline avoids tetracycline-specific efflux pumps and resistance caused by ribosomal protection proteins (tetM).",
    sideEffects: [
      "Nausea and vomiting (very common, in up to 30-40% of patients, especially early in therapy)",
      "Increased mortality (meta-analyses show higher all-cause mortality in tigecycline-treated patients than in comparator drugs - use only when justified!)",
      "Elevated amylase and lipase levels, risk of pancreatitis",
      "Tooth discoloration in children (tetracycline effect)",
      "Photosensitivity"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 2,
      anaerobe: 2,
      atypical: 2,
      pseudomonas: 0,
      other: "It has extremely extensive tissue distribution, which means serum concentrations are low! It is not effective alone in sepsis/bacteremia!"
    },
    indications: [
      "Complicated skin and soft tissue infections (with MRSA and mixed flora)",
      "Complicated intra-abdominal infections",
      "As part of combination therapy for multidrug-resistant Acinetobacter baumannii infections"
    ],
    notes: "Tigecycline covers almost everything except Pseudomonas, Proteus, and Providencia, but because of its very large tissue distribution it does not remain in the bloodstream, so it is not suitable as monotherapy for sepsis."
  },
  {
    id: "eravacycline",
    name: "Eravacycline",
    abbreviation: "ERV",
    brandNames: "Xerava",
    group: "Fluorocyclines (tetracycline derivatives)",
    halfLife: "approx. 20 hours",
    pae: "Marked against Gram-negative bacteria",
    effectType: "bacteriostatic",
    dosage: {
      adult: "1 mg/kg i.v. every 12 hours by infusion, for 7-14 days",
      pediatric: "Its safety has not been established in children under 18",
      renalAdjustment: "No dose adjustment is needed in renal impairment. In severe hepatic impairment, dose adjustment or increased caution is warranted."
    },
    mechanismOfAction: "Bacteriostatic. A fully synthetic fluorocycline (tetracycline class). It binds to the 30S ribosomal subunit, inhibiting protein synthesis. Because of the fluorine atom and pyrrolidine ring, it is resistant to the most common tetracycline resistance mechanisms (efflux pumps and ribosomal protection proteins).",
    sideEffects: [
      "Nausea, vomiting (significantly milder than with tigecycline!)",
      "Infusion-site local reactions (phlebitis)",
      "Transaminase elevation",
      "Tooth discoloration (in children)"
    ],
    spectrum: {
      gramPositive: 2,
      gramNegative: 2,
      anaerobe: 2,
      atypical: 2,
      pseudomonas: 0,
      other: "Its spectrum is similar to tigecycline, but it has better in vitro activity and a more favorable side-effect profile."
    },
    indications: [
      "Complicated intra-abdominal infections in adults (especially when multidrug-resistant pathogens are suspected)"
    ],
    notes: "A new-generation tetracycline derivative that shows excellent in vitro activity against multidrug-resistant Acinetobacter baumannii and KPC-producing Enterobacterales, with less nausea than tigecycline."
  },
  {
    id: "cefiderocol",
    name: "Cefiderocol",
    abbreviation: "FDC",
    brandNames: "Fetcroja",
    group: "Siderophore cephalosporins (5th-generation derivative)",
    halfLife: "2 - 2.5 hours",
    pae: "Marked against Gram-negative bacteria",
    effectType: "bactericidal",
    dosage: {
      adult: "3x 2 g i.v. daily in a 3-hour extended infusion",
      pediatric: "Its safety and dosing in children are not yet established",
      renalAdjustment: "Strict dose adjustment is required both in renal impairment and in augmented renal clearance (ARC, GFR > 120 ml/min, in which case 4x 2 g/day!)"
    },
    mechanismOfAction: "Bactericidal. A unique 'Trojan horse' mechanism: cefiderocol is a siderophore-conjugated cephalosporin that actively binds extracellular bacterial iron. The bacterium's own active iron transport system (tonB-dependent receptors) brings it into the periplasmic space, where it bypasses efflux pumps and porin mutations, then inhibits cell wall synthesis by binding to PBP-3. It is extremely stable against all beta-lactamases (including metallo-beta-lactamases!).",
    sideEffects: [
      "Diarrhea, nausea",
      "Positive Coombs test",
      "Elevation of liver function tests",
      "Hypokalaemia",
      "Rare neurotoxicity (seizures - at high doses)"
    ],
    spectrum: {
      gramPositive: 0,
      gramNegative: 2,
      anaerobe: 0,
      atypical: 0,
      pseudomonas: 2,
      other: "A last-resort weapon exclusively against multidrug-resistant (MDR) and pandrug-resistant (PDR) Gram-negative bacteria."
    },
    indications: [
      "Severe aerobic Gram-negative infections in adults when treatment options are limited",
      "Hospital-acquired and ventilator-associated pneumonia (HAP/VAP)",
      "Complicated urinary tract infections and urosepsis caused by multidrug-resistant Gram-negative pathogens (e.g. NDM-producing Klebsiella or Pseudomonas)"
    ],
    notes: "One of the greatest breakthroughs in modern clinical medicine for the treatment of multidrug-resistant Gram-negative infections; the only beta-lactam that reliably works against 'superbugs' carrying metallo-beta-lactamases (e.g. NDM-1)."
  }
];
