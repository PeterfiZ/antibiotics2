/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClinicalInfection } from '../types';

export const clinicalInfectionsData: ClinicalInfection[] = [
  {
    id: "cap",
    name: "Community-acquired pneumonia (CAP)",
    category: "respiratory",
    pathogens: [
      { name: "Streptococcus pneumoniae", frequency: "very-common", notes: "The most common bacterial pathogen at any age." },
      { name: "Mycoplasma pneumoniae", frequency: "common", notes: "Common in young adults, presents an atypical clinical picture." },
      { name: "Haemophilus influenzae", frequency: "common", notes: "More common in COPD and in older age." },
      { name: "Chlamydia pneumoniae", frequency: "common", notes: "Atypical pneumonia." },
      { name: "Legionella pneumophila", frequency: "rare", notes: "Severe, lobar pneumonia, often with extrarenal symptoms (hyponatremia, diarrhea)." },
      { name: "Staphylococcus aureus", frequency: "rare", notes: "Often occurs as a superinfection following influenza, may follow a necrotizing course." }
    ],
    empirical: {
      mild: {
        firstLine: "Amoxicillin 1g p.o. 3x/day (if no comorbidities and no beta-lactam allergy) OR Doxycycline 100 mg p.o. 2x/day",
        alternative: "Clarithromycin 500 mg p.o. 2x/day OR Azithromycin 500 mg p.o. 1x/day (for 3 days)",
        duration: "5 - 7 days (an additional 48-72 hours after clinical stability is reached)"
      },
      severe: {
        firstLine: "Ceftriaxone 2g i.v. 1x/day + Clarithromycin 500 mg i.v. 2x/day (to cover atypical pathogens) OR Cefotaxime 2g i.v. 3x/day + Clarithromycin i.v.",
        alternative: "Respiratory fluoroquinolone monotherapy: Levofloxacin 500-750 mg i.v./p.o. 1x/day OR Moxifloxacin 400 mg i.v./p.o. 1x/day",
        duration: "7 - 10 days (14 days if S. aureus or Pseudomonas is suspected, 10-14 days for Legionella)"
      }
    },
    targeted: [
      { condition: "Streptococcus pneumoniae (Penicillin-susceptible, MIC < 2 ug/ml)", treatment: "Penicillin G 2 million units i.v. 4-6x/day or Amoxicillin 1g p.o. 3x/day." },
      { condition: "Streptococcus pneumoniae (Penicillin-resistant, PRSP)", treatment: "Ceftriaxone 2g i.v. 1x/day or Levofloxacin 750mg p.o./i.v. 1x/day. Vancomycin in severe cases." },
      { condition: "Mycoplasma / Chlamydia pneumoniae", treatment: "Doxycycline 100 mg p.o. 2x/day or Clarithromycin 500 mg p.o. 2x/day for 7-10 days." },
      { condition: "Legionella pneumophila", treatment: "Levofloxacin 750 mg i.v./p.o. 1x/day or Azithromycin 500 mg i.v./p.o. 1x/day (doxycycline is also an alternative)." },
      { condition: "MRSA (Methicillin-resistant S. aureus)", treatment: "Linezolid 600 mg i.v./p.o. 2x/day or Ceftaroline 600 mg i.v. 2x/day (or vancomycin)." }
    ],
    guidelines: "BTS/NICE 2024, IDSA/ATS Pneumonia Guidelines, National Infectious Disease Professional Guidelines",
    diagnosticsNotes: "Chest X-ray (PA + lateral) is mandatory to confirm the infiltrate. The CURB-65 scoring system helps determine patient placement (0-1: home, 2: ward, ≥3: intensive care should be considered). In severe cases, blood cultures, sputum culture, and rapid urine Streptococcus and Legionella antigen tests are recommended."
  },
  {
    id: "hap_vap",
    name: "Hospital-acquired and ventilator-associated pneumonia (HAP/VAP)",
    category: "respiratory",
    pathogens: [
      { name: "Pseudomonas aeruginosa", frequency: "very-common", notes: "A severe, difficult-to-treat, often multidrug-resistant hospital strain." },
      { name: "Klebsiella pneumoniae (and other Enterobacterales)", frequency: "very-common", notes: "Frequently produces ESBL or carbapenemase (KPC, MBL)." },
      { name: "Staphylococcus aureus (including MRSA)", frequency: "common", notes: "MRSA risk is particularly high with prior antibiotic use and ICU treatment." },
      { name: "Acinetobacter baumannii", frequency: "common", notes: "Extremely resistant, causes outbreaks mainly in intensive care units." }
    ],
    empirical: {
      mild: {
        firstLine: "Ceftriaxone 2g i.v. 1x/day OR Cefotaxime 2g i.v. 3x/day (if there is no risk factor for resistant Gram-negatives or MRSA)",
        alternative: "Levofloxacin 750 mg i.v. 1x/day or Moxifloxacin 400 mg i.v. 1x/day",
        duration: "7 days (a shorter course is recommended in case of clinical and radiological improvement, to avoid resistance)"
      },
      severe: {
        firstLine: "Anti-pseudomonal beta-lactam: Piperacillin/tazobactam 4.5 g i.v. 4x/day OR Cefepime 2 g i.v. 3x/day OR Meropenem 1-2 g i.v. 3x/day (if ESBL is suspected). If MRSA is also suspected, add vancomycin 1-1.5g i.v. 2x/day or linezolid 600mg i.v. 2x/day.",
        alternative: "Combination therapy if extreme resistance is suspected: beta-lactam + amikacin 15mg/kg i.v. 1x/day or ciprofloxacin 400mg i.v. 3x/day",
        duration: "7 - 14 days (depending on the pathogen and clinical response)"
      }
    },
    targeted: [
      { condition: "Pseudomonas aeruginosa (susceptible)", treatment: "Piperacillin/tazobactam 4.5g i.v. 4x/day or cefepime 2g i.v. 3x/day." },
      { condition: "Pseudomonas aeruginosa (MDR - multidrug-resistant)", treatment: "Ceftolozane/tazobactam 1.5g i.v. 3x/day or ceftazidime/avibactam 2.5g i.v. 3x/day, combined with colistin or amikacin if needed." },
      { condition: "ESBL-producing Enterobacterales", treatment: "Ertapenem 1g i.v. 1x/day or meropenem 1g i.v. 3x/day." },
      { condition: "Carbapenem-resistant Klebsiella pneumoniae (KPC)", treatment: "Ceftazidime/avibactam 2.5g i.v. 3x/day or meropenem/vaborbactam." },
      { condition: "Staphylococcus aureus (MRSA)", treatment: "Linezolid 600 mg i.v. 2x/day or vancomycin i.v. (TDM target concentration 15-20 ug/ml)." }
    ],
    guidelines: "IDSA/ATS HAP/VAP Guidelines, ESCMID/ERS guidelines",
    diagnosticsNotes: "Chest X-ray/CT. Lower respiratory tract sampling (sputum, tracheal aspirate, or bronchoalveolar lavage - BAL) for culture is mandatory before starting antibiotics! Blood cultures must be obtained."
  },
  {
    id: "cystitis",
    name: "Acute uncomplicated cystitis (bladder infection)",
    category: "urinary",
    pathogens: [
      { name: "Escherichia coli", frequency: "very-common", notes: "The causative agent in 75-90% of cases." },
      { name: "Staphylococcus saprophyticus", frequency: "common", notes: "Common in young, sexually active women." },
      { name: "Klebsiella pneumoniae", frequency: "common", notes: "A common urinary pathogen." },
      { name: "Proteus mirabilis", frequency: "common", notes: "May cause alkalinization of the urine, urease-positive." },
      { name: "Enterococcus faecalis", frequency: "rare", notes: "More common in complicated or catheter-associated cases." }
    ],
    empirical: {
      mild: {
        firstLine: "Fosfomycin trometamol 3g p.o. single dose OR Nitrofurantoin 100 mg p.o. 2x/day (extended-release) for 5 days",
        alternative: "Pivmecillinam 400 mg p.o. 3x/day (where available) for 3-5 days OR Sulfamethoxazole/trimethoprim (co-trimoxazole) 960 mg p.o. 2x/day for 3 days (only if local E. coli resistance is < 20%)",
        duration: "1 day (fosfomycin) or 5 days (nitrofurantoin) or 3 days (co-trimoxazole)"
      },
      severe: {
        // Cystitis is not usually severe, but if complicated (e.g. pregnant, male, diabetic), longer treatment is needed
        firstLine: "Amoxicillin/clavulanic acid 875/125 mg p.o. 2x/day for 5-7 days OR cefuroxime axetil 250-500 mg p.o. 2x/day for 5-7 days",
        alternative: "Ciprofloxacin 250 mg p.o. 2x/day OR levofloxacin 250-500 mg p.o. 1x/day for 3-5 days (only as a last resort, see note!)",
        duration: "5 - 7 days"
      }
    },
    targeted: [
      { condition: "E. coli (ESBL-producing)", treatment: "Fosfomycin 3g p.o. 1x/day (effective in cystitis due to urine concentration) or nitrofurantoin 100mg p.o. 2x/day for 5 days." },
      { condition: "Enterococcus faecalis (susceptible)", treatment: "Amoxicillin 500mg-1000mg p.o. 3x/day for 5 days." },
      { condition: "Proteus mirabilis", treatment: "Amoxicillin 500mg p.o. 3x/day or cefuroxime axetil 250mg p.o. 2x/day." }
    ],
    guidelines: "EAU (European Association of Urology) Guidelines on Urological Infections 2024",
    diagnosticsNotes: "The diagnosis is clinical (dysuria, urinary frequency, suprapubic pain, absence of fever!). A urine dipstick (positive nitrite, positive leukocyte esterase) confirms it. Urine culture is NOT required in young, uncomplicated women. Urine culture is mandatory in pregnant women, men, and recurrent cases!"
  },
  {
    id: "pyelonephritis",
    name: "Acute uncomplicated pyelonephritis (kidney infection)",
    category: "urinary",
    pathogens: [
      { name: "Escherichia coli", frequency: "very-common", notes: "The most common causative agent." },
      { name: "Klebsiella pneumoniae", frequency: "common", notes: "Frequently carries resistance." },
      { name: "Proteus mirabilis", frequency: "common", notes: "May be associated with kidney stone formation." },
      { name: "Pseudomonas aeruginosa", frequency: "rare", notes: "Mainly after prior urological intervention or catheterization." },
      { name: "Enterococcus faecalis", frequency: "rare", notes: "Requires parenteral aminopenicillin." }
    ],
    empirical: {
      mild: {
        // Cases manageable on an outpatient basis
        firstLine: "Ciprofloxacin 500-750 mg p.o. 2x/day for 7 days OR levofloxacin 750 mg p.o. 1x/day for 5 days",
        alternative: "Cefuroxime axetil 500 mg p.o. 2x/day for 10 days OR amoxicillin/clavulanic acid 875/125 mg p.o. 2x/day for 10-14 days (less effective than quinolones)",
        duration: "5 - 7 days (quinolones) or 10 - 14 days (beta-lactams)"
      },
      severe: {
        // Systemic cases requiring hospital admission
        firstLine: "Ceftriaxone 1-2g i.v. 1x/day OR cefotaxime 2g i.v. 3x/day OR ciprofloxacin 400mg i.v. 2x/day OR gentamicin 5mg/kg i.v. 1x/day",
        alternative: "In severe complicated/catheter-associated urosepsis or if ESBL risk is present: piperacillin/tazobactam 4.5g i.v. 3-4x/day OR ertapenem 1g i.v. 1x/day OR meropenem 1g i.v. 3x/day",
        duration: "7 - 10 days (may switch to oral therapy, e.g. a quinolone, depending on clinical improvement)"
      }
    },
    targeted: [
      { condition: "E. coli / Klebsiella (ESBL-producing)", treatment: "Ertapenem 1g i.v. 1x/day or meropenem 1g i.v. 3x/day. In mild cases, oral doxycycline or co-trimoxazole if susceptible." },
      { condition: "Enterococcus faecalis", treatment: "Ampicillin 2g i.v. 4x/day (combined with gentamicin in urosepsis) or amoxicillin 1g p.o. 3x/day (step-down)." },
      { condition: "Pseudomonas aeruginosa", treatment: "Ceftazidime 2g i.v. 3x/day or cefepime 2g i.v. 3x/day or ciprofloxacin 500-750mg p.o. 2x/day / 400mg i.v. 2x/day." }
    ],
    guidelines: "EAU Guidelines on Urological Infections 2024",
    diagnosticsNotes: "Clinical picture: flank pain (positive Pasternacki/costovertebral angle tenderness), fever, chills, frequently nausea/vomiting. Labs: leukocytosis, elevated CRP, pyuria. Urine culture and blood cultures are MANDATORY! A renal ultrasound is recommended to rule out obstruction (obstruction/hydronephrosis), which requires immediate urological decompression (nephrostomy or DJ stent)!"
  },
  {
    id: "meningitis",
    name: "Acute purulent bacterial meningitis",
    category: "cns",
    pathogens: [
      { name: "Streptococcus pneumoniae", frequency: "very-common", notes: "The most common and most severe cause of bacterial meningitis in adults." },
      { name: "Neisseria meningitidis", frequency: "very-common", notes: "Meningococcus. May be accompanied by petechiae and purpura. Spreads by droplet transmission; chemoprophylaxis (ciprofloxacin or rifampicin) is mandatory for contacts!" },
      { name: "Listeria monocytogenes", frequency: "common", notes: "Particularly in patients over 50, pregnant women, alcoholics, or the immunosuppressed. Cephalosporin-resistant!" },
      { name: "Haemophilus influenzae", frequency: "rare", notes: "Rare since the introduction of Hib vaccination." }
    ],
    empirical: {
      mild: {
        // There is no 'mild' purulent meningitis, it is always a life-threatening emergency!
        firstLine: "Immediate i.v. treatment is required (see severe category). Delay is not permitted!",
        alternative: "N/A",
        duration: "N/A"
      },
      severe: {
        // Adult empirical treatment (emergency/urgent care)
        firstLine: "Ceftriaxone 2g i.v. 2x/day (high dose!) + vancomycin 15-20 mg/kg i.v. every 8-12 hours + dexamethasone 10 mg i.v. (given at the same time as the first antibiotic dose, or 15-20 minutes before it!). IF the patient is > 50 years old or immunosuppressed, add ampicillin 2g i.v. 6x/day to cover Listeria!",
        alternative: "In case of beta-lactam allergy: meropenem 2g i.v. 3x/day + vancomycin 15-20 mg/kg i.v. + moxifloxacin or co-trimoxazole (against Listeria).",
        duration: "N. meningitidis: 7 days, H. influenzae: 7 days, S. pneumoniae: 10-14 days, L. monocytogenes: 21 days"
      }
    },
    targeted: [
      { condition: "Neisseria meningitidis (Penicillin-susceptible)", treatment: "Penicillin G 4 million units i.v. 6x/day or ceftriaxone 2g i.v. 2x/day." },
      { condition: "Streptococcus pneumoniae (Penicillin-susceptible)", treatment: "Penicillin G 4 million units i.v. 6x/day or ceftriaxone 2g i.v. 2x/day." },
      { condition: "Streptococcus pneumoniae (PRSP)", treatment: "Vancomycin i.v. + ceftriaxone 2g i.v. 2x/day OR meropenem 2g i.v. 3x/day." },
      { condition: "Listeria monocytogenes", treatment: "Ampicillin 2g i.v. 6x/day + gentamicin 1-1.5 mg/kg i.v. 3x/day for synergy! (Cephalosporins are ineffective!)." }
    ],
    guidelines: "ESCMID (European Society of Clinical Microbiology and Infectious Diseases) Meningitis Guideline, IDSA Meningitis Guidelines",
    diagnosticsNotes: "Clinical triad: fever, nuchal rigidity (meningismus), altered mental status. Urgent lumbar puncture (LP) is required to examine the CSF (cell count, protein, glucose, Gram stain, culture, PCR, latex agglutination). IF there are signs of raised intracranial pressure (e.g. papilledema, focal neurological deficit, seizure, deep coma), a head CT should be performed before LP. Antibiotic administration must not be delayed because of the CT: blood cultures should be drawn first, the empirical antibiotic plus dexamethasone given, then the patient sent for CT, followed by LP!"
  },
  {
    id: "sepsis_unknown",
    name: "Sepsis and septic shock (unknown source)",
    category: "sepsis",
    pathogens: [
      { name: "Escherichia coli (and other Gram-negatives)", frequency: "very-common", notes: "The most common source of urosepsis or abdominal sepsis." },
      { name: "Staphylococcus aureus", frequency: "very-common", notes: "Sepsis originating from soft-tissue, catheter, or bone infections." },
      { name: "Streptococcus pneumoniae", frequency: "common", notes: "Sepsis in respiratory infections or in splenectomized patients." },
      { name: "Pseudomonas aeruginosa", frequency: "common", notes: "Mainly in nosocomial sepsis." },
      { name: "Enterococcus faecalis / faecium", frequency: "rare", notes: "Catheter-associated, urological, or endocarditis patients." }
    ],
    empirical: {
      mild: {
        firstLine: "Sepsis is always an emergency! There is no such thing as 'mild' sepsis; immediate i.v. broad-spectrum antibiotics are required within the 'golden hour' (1 hour)!",
        alternative: "N/A",
        duration: "N/A"
      },
      severe: {
        // Emergency empirical treatment in hospital
        firstLine: "Piperacillin/tazobactam 4.5g i.v. 4x/day (or cefepime 2g i.v. 3x/day). If septic shock is present or resistant Gram-negatives are suspected, add gentamicin 5-7 mg/kg i.v. 1x/day. If MRSA is suspected (e.g. central catheter, dialysis, soft-tissue source, known MRSA carriage), add vancomycin 15-20 mg/kg i.v.",
        alternative: "In case of severe beta-lactam allergy or suspected ESBL/nosocomial sepsis: meropenem 1-2g i.v. 3x/day + vancomycin i.v.",
        duration: "7 - 10 days (depending on source control and clinical improvement)"
      }
    },
    targeted: [
      { condition: "MSSA (Methicillin-susceptible S. aureus) sepsis", treatment: "Cefazolin 2g i.v. 3x/day or cloxacillin/oxacillin 2g i.v. 4-6x/day. (Beta-lactams are far more effective than vancomycin in MSSA sepsis!)." },
      { condition: "MRSA sepsis", treatment: "Vancomycin i.v. (TDM target 15-20 ug/ml) or daptomycin 8-10 mg/kg i.v. 1x/day." },
      { condition: "ESBL-producing Gram-negative", treatment: "Meropenem 1g i.v. 3x/day or ertapenem 1g i.v. 1x/day (if no septic shock)." },
      { condition: "VRE (Vancomycin-resistant Enterococcus)", treatment: "Linezolid 600 mg i.v. 2x/day or daptomycin 10-12 mg/kg i.v. 1x/day." }
    ],
    guidelines: "Surviving Sepsis Campaign (SSC) Guidelines 2021/2023, ESCMID Guidelines",
    diagnosticsNotes: "Immediate qSOFA or SOFA score assessment. At least 2 sets of blood cultures (1 set = 1 aerobic + 1 anaerobic bottle) must be drawn from different peripheral veins before starting treatment! Source search: chest X-ray, urinalysis, abdominal ultrasound, surgical consultation. As part of the Sepsis Bundle: lactate measurement, fluid resuscitation (30 ml/kg crystalloid in septic shock), noradrenaline vasopressor if needed."
  },
  {
    id: "ie_native",
    name: "Infective Endocarditis (Native Valve)",
    category: "sepsis",
    pathogens: [
      { name: "Oral Streptococci (e.g. S. mitis, S. mutans)", frequency: "very-common", notes: "Mainly after dental procedures; subacute presentation." },
      { name: "Streptococcus gallolyticus (S. bovis)", frequency: "common", notes: "Strongly associated with colorectal neoplasms (colonoscopy is mandatory!)." },
      { name: "Staphylococcus aureus", frequency: "common", notes: "Acute, highly destructive course; right-sided involvement is common in intravenous drug users." },
      { name: "Enterococcus faecalis", frequency: "common", notes: "Often after urinary or gastrointestinal interventions/infections in elderly patients." },
      { name: "HACEK group", frequency: "rare", notes: "Slow-growing, fastidious Gram-negative bacteria (Haemophilus, Aggregatibacter, Cardiobacterium, Eikenella, Kingella)." }
    ],
    empirical: {
      mild: {
        firstLine: "Ampicillin 12g/day i.v. in 4-6 divided doses + Ceftriaxone 2g i.v. once daily (this combination is excellent against Enterococcus and Streptococcus, avoiding aminoglycoside nephrotoxicity)",
        alternative: "Ceftriaxone 2g i.v. once daily + Gentamicin 3 mg/kg i.v. once daily",
        duration: "4 - 6 weeks (for native valves, 4 weeks is usually sufficient if uncomplicated)"
      },
      severe: {
        firstLine: "Ampicillin 12g/day i.v. in 4-6 divided doses + Cloxacillin (or Oxacillin) 12g/day i.v. in 4-6 divided doses + Gentamicin 3 mg/kg i.v. once daily",
        alternative: "Vancomycin 30 mg/kg/day i.v. in 2 divided doses (TDM!) + Gentamicin 3 mg/kg i.v. once daily",
        duration: "4 - 6 weeks (6 weeks for complicated cases or S. aureus)"
      }
    },
    targeted: [
      { condition: "Penicillin-susceptible Streptococci (MIC <= 0.125 ug/ml)", treatment: "Penicillin G 12-18 million IU/day i.v. in 4-6 divided doses for 4 weeks OR Ceftriaxone 2g i.v. once daily for 4 weeks. A 2-week short course combined with Gentamicin is possible in uncomplicated native valve cases." },
      { condition: "Enterococcus faecalis (susceptible)", treatment: "Ampicillin 2g i.v. 6x/day + Ceftriaxone 2g i.v. 2x/day (renal-sparing, preferred) OR Ampicillin 2g i.v. 6x/day + Gentamicin 3 mg/kg i.v. once daily for 6 weeks." },
      { condition: "Staphylococcus aureus (MSSA)", treatment: "Cloxacillin (or Oxacillin) 2g i.v. 4-6x/day OR Cefazolin 2g i.v. 3x/day for 4-6 weeks." },
      { condition: "Staphylococcus aureus (MRSA / beta-lactam allergy)", treatment: "Vancomycin 30 mg/kg/day i.v. in 2 divided doses (TDM!) OR Daptomycin 10 mg/kg i.v. once daily for 4-6 weeks." }
    ],
    guidelines: "2023 ESC Guidelines for the Management of Endocarditis",
    diagnosticsNotes: "Diagnosis: Based on the 2023 ESC / modified Duke criteria. It is crucial to draw at least 3 sets of blood cultures (from different veins, 30 min apart, regardless of fever) before starting antibiotics! Transthoracic (TTE) and Transesophageal (TEE) echocardiography are urgent. TEE is mandatory even for native valves if TTE is negative but suspicion remains high, as well as in all complicated cases."
  },
  {
    id: "ie_pve_early",
    name: "Early Prosthetic Valve Endocarditis (<1 year post-surgery)",
    category: "sepsis",
    pathogens: [
      { name: "Coagulate-negative Staphylococci (primarily S. epidermidis)", frequency: "very-common", notes: "Mostly methicillin-resistant and biofilm producers." },
      { name: "Staphylococcus aureus", frequency: "very-common", notes: "Highly aggressive, high mortality, can cause early valvular dehiscence." },
      { name: "Gram-negative bacilli (nosocomial)", frequency: "common", notes: "Pseudomonas aeruginosa and Enterobacterales, often multidrug-resistant." },
      { name: "Candida species", frequency: "rare", notes: "Fungal endocarditis, almost always requires surgical intervention." }
    ],
    empirical: {
      mild: {
        firstLine: "Immediate i.v. therapy is mandatory (see severe/acute category). Delay is forbidden!",
        alternative: "N/A",
        duration: "N/A"
      },
      severe: {
        firstLine: "Vancomycin 30 mg/kg/day i.v. in 2 divided doses (TDM!) + Gentamicin 3 mg/kg i.v. once daily + Rifampicin 900-1200 mg/day i.v. or p.o. in 2-3 divided doses (add Rifampicin 3-5 days after Vancomycin and Gentamicin, once bacteremia has cleared, to prevent resistance)",
        alternative: "Daptomycin 10 mg/kg i.v. once daily + Gentamicin + Rifampicin (in case of beta-lactam allergy or Vancomycin intolerance)",
        duration: "at least 6 weeks"
      }
    },
    targeted: [
      { condition: "Staphylococci (MRSA or methicillin-resistant CoNS - prosthetic valve)", treatment: "Vancomycin 30 mg/kg/day i.v. (TDM!) + Rifampicin 300-450 mg p.o./i.v. 2-3x/day + Gentamicin 3 mg/kg i.v. once daily for at least 6 weeks (Rifampicin must be started only after blood cultures turn negative!)." },
      { condition: "Staphylococci (MSSA or methicillin-susceptible CoNS - prosthetic valve)", treatment: "Cloxacillin (or Oxacillin) 2g i.v. 4-6x/day + Rifampicin 300-450 mg p.o./i.v. 2-3x/day + Gentamicin 3 mg/kg i.v. once daily for at least 6 weeks." },
      { condition: "Gram-negative bacilli (e.g. Pseudomonas)", treatment: "Combination therapy: e.g., Cefepime 2g i.v. 3x/day OR Meropenem 2g i.v. 3x/day + Tobramycin/Amikacin, adjusted based on susceptibilities." }
    ],
    guidelines: "2023 ESC Guidelines for the Management of Endocarditis",
    diagnosticsNotes: "Clinical picture: Postoperative fever, new heart murmur, instability, septic emboli. Echocardiography: Transesophageal (TEE) is essential and mandatory! Due to shadowing from metallic/plastic prosthetic valves, TTE is not sensitive enough. Complementary diagnostics: 18F-FDG PET/CT or cardiac CT are highly useful to confirm periannular inflammation, abscesses, or paravalvular leaks."
  },
  {
    id: "ie_pve_late",
    name: "Late Prosthetic Valve Endocarditis (>=1 year post-surgery)",
    category: "sepsis",
    pathogens: [
      { name: "Oral Streptococci", frequency: "very-common", notes: "Similar to native valve distribution, but prosthetic valve increases risk of serious complications." },
      { name: "Enterococcus faecalis", frequency: "common", notes: "Septic dissemination from urinary or gastrointestinal sources." },
      { name: "Staphylococcus aureus", frequency: "common", notes: "Severe, destructive course with a high risk of abscess formation." },
      { name: "Coagulate-negative Staphylococci", frequency: "common", notes: "Slower course, but frequently methicillin-resistant." }
    ],
    empirical: {
      mild: {
        firstLine: "Ampicillin 12g/day i.v. in 4-6 divided doses + Ceftriaxone 2g i.v. once daily (excellent against Enterococcus and Streptococcus)",
        alternative: "Ceftriaxone 2g i.v. once daily + Gentamicin 3 mg/kg i.v. once daily (synergism)",
        duration: "at least 6 weeks"
      },
      severe: {
        firstLine: "Ampicillin 12g/day i.v. in 4-6 divided doses + Cloxacillin (or Oxacillin) 12g/day i.v. in 4-6 divided doses + Gentamicin 3 mg/kg i.v. once daily",
        alternative: "Vancomycin 30 mg/kg/day i.v. in 2 divided doses (TDM!) + Gentamicin 3 mg/kg i.v. once daily",
        duration: "at least 6 weeks"
      }
    },
    targeted: [
      { condition: "Streptococci (MIC <= 0.125 ug/ml)", treatment: "Penicillin G 12-18 million IU/day i.v. in 4-6 divided doses OR Ceftriaxone 2g i.v. once daily for at least 6 weeks. (Shortened 2-week course is NOT applicable for prosthetic valves!)." },
      { condition: "Enterococcus faecalis", treatment: "Ampicillin 2g i.v. 6x/day + Ceftriaxone 2g i.v. 2x/day OR Ampicillin 2g i.v. 6x/day + Gentamicin 3 mg/kg i.v. once daily for 6 weeks." },
      { condition: "Staphylococci (MSSA / methicillin-susceptible CoNS)", treatment: "Cloxacillin (or Oxacillin) 2g i.v. 4-6x/day + Rifampicin 300-450 mg p.o./i.v. 2-3x/day + Gentamicin 3 mg/kg i.v. once daily for at least 6 weeks." },
      { condition: "Staphylococci (MRSA / methicillin-resistant CoNS)", treatment: "Vancomycin 30 mg/kg/day i.v. in 2 divided doses (TDM!) + Rifampicin 300-450 mg p.o./i.v. 2-3x/day + Gentamicin 3 mg/kg i.v. once daily for at least 6 weeks." }
    ],
    guidelines: "2023 ESC Guidelines for the Management of Endocarditis",
    diagnosticsNotes: "Diagnosis combines native and early prosthetic valve approaches. At least 3 sets of blood cultures are mandatory! TEE is mandatory. Cardiac CT is strongly recommended to detect periannular complications (abscess, pseudoaneurysm, fistula). 18F-FDG PET/CT is indicated if the diagnosis remains uncertain."
  },
  {
    id: "primary_peritonitis",
    name: "Primary Peritonitis (Spontaneous Bacterial Peritonitis - SBP)",
    category: "abdominal",
    pathogens: [
      { name: "Escherichia coli", frequency: "very-common", notes: "The most common pathogen in SBP among patients with liver cirrhosis." },
      { name: "Klebsiella pneumoniae", frequency: "common", notes: "Common Gram-negative pathogen." },
      { name: "Streptococcus pneumoniae (and other Streptococci)", frequency: "common", notes: "Gram-positive monomicrobial infection." },
      { name: "Enterococcus species", frequency: "rare", notes: "Usually nosocomial or after prior antibiotic treatment." }
    ],
    empirical: {
      mild: {
        firstLine: "Ceftriaxone 2g i.v. once daily OR Cefotaxime 2g i.v. 3x/day (excellent and safe coverage against most common pathogens)",
        alternative: "Ciprofloxacin 400 mg i.v. 2x/day OR Levofloxacin 500-750 mg i.v./p.o. once daily (in case of beta-lactam allergy)",
        duration: "5 - 7 days (depending on clinical response and ascites cell count decrease)"
      },
      severe: {
        firstLine: "Piperacillin/Tazobactam 4.5g i.v. 4x/day OR Meropenem 1g i.v. 3x/day (for nosocomial SBP, septic shock, or known prior resistant pathogens)",
        alternative: "Ceftazidime/Avibactam 2.5g i.v. 3x/day (if confirmed carbapenem-resistant Gram-negative SBP)",
        duration: "7 - 10 days"
      }
    },
    targeted: [
      { condition: "Fluoroquinolone-susceptible Enterobacterales", treatment: "Ciprofloxacin 500 mg p.o. 2x/day or Levofloxacin 500 mg p.o. once daily (oral step-down)." },
      { condition: "ESBL-producing Klebsiella or E. coli", treatment: "Ertapenem 1g i.v. once daily or Meropenem 1g i.v. 3x/day." },
      { condition: "MDR Gram-negative bacteria", treatment: "Ceftazidime/Avibactam or Meropenem based on susceptibilities." }
    ],
    guidelines: "EASL and AASLD SBP Guidelines",
    diagnosticsNotes: "Diagnosis: Ascites tap (paracentesis) is mandatory! Ascitic PMN (polymorphonuclear) cell count >= 250/uL is diagnostic, regardless of culture result. Inoculate ascitic fluid into blood culture bottles at the bedside. Human albumin infusion (1.5g/kg on day 1, 1g/kg on day 3) is indicated if serum creatinine >1 mg/dL, BUN >30 mg/dL, or bilirubin >4 mg/dL to prevent hepatorenal syndrome."
  },
  {
    id: "secondary_peritonitis",
    name: "Secondary Peritonitis (Intra-abdominal perforation/infection)",
    category: "abdominal",
    pathogens: [
      { name: "Polymicrobial flora (aerobes + anaerobes)", frequency: "very-common", notes: "Always a mixed aerobic and anaerobic flora arising from gastrointestinal perforation." },
      { name: "Escherichia coli & other Enterobacterales", frequency: "very-common", notes: "The dominant Gram-negative aerobic pathogens." },
      { name: "Bacteroides fragilis (and other anaerobes)", frequency: "very-common", notes: "Key obligate anaerobic pathogen, beta-lactamase producer." },
      { name: "Enterococcus faecalis", frequency: "common", notes: "Mainly in distal bowel perforations or after prior treatments." },
      { name: "Pseudomonas aeruginosa", frequency: "rare", notes: "Mainly in hospital-acquired/nosocomial secondary peritonitis." }
    ],
    empirical: {
      mild: {
        firstLine: "Amoxicillin/clavulanate 1.2g i.v. 3x/day OR Ceftriaxone 2g i.v. once daily + Metronidazole 500 mg i.v. 3x/day (for community-acquired mild-to-moderate cases)",
        alternative: "Ciprofloxacin 400 mg i.v. 2x/day + Metronidazole 500 mg i.v. 3x/day OR Moxifloxacin 400 mg i.v. once daily",
        duration: "4 - 7 days (after successful surgical or interventional source control)"
      },
      severe: {
        firstLine: "Piperacillin/Tazobactam 4.5g i.v. 4x/day OR Meropenem 1g i.v. 3x/day (or Imipenem 500 mg i.v. 4x/day) - for severe, septic, or nosocomial peritonitis",
        alternative: "Ceftazidime 2g i.v. 3x/day + Metronidazole 500 mg i.v. 3x/day OR Cefepime 2g i.v. 3x/day + Metronidazole 500 mg i.v. 3x/day",
        duration: "7 - 10 days (depending on source control and clinical progress)"
      }
    },
    targeted: [
      { condition: "ESBL-producing Enterobacterales", treatment: "Ertapenem 1g i.v. once daily or Meropenem 1g i.v. 3x/day." },
      { condition: "Pseudomonas aeruginosa", treatment: "Piperacillin/Tazobactam 4.5g i.v. 4x/day OR Ceftazidime 2g i.v. 3x/day + Metronidazole, or Cefepime." },
      { condition: "Enterococcus faecalis (if clinically significant)", treatment: "Add Ampicillin 2g i.v. 4-6x/day (if the chosen empirical regimen lacks coverage, e.g., Cephalosporins)." }
    ],
    guidelines: "SIS and IDSA Guidelines for Intra-abdominal Infections",
    diagnosticsNotes: "Surgical or interventional source control (operation, drainage, suture, resection) is the single most important intervention in secondary peritonitis! Without it, antibiotics alone will fail. Diagnostics: Contrast-enhanced abdominal CT is the imaging method of choice. Erect chest or abdominal X-ray can show free air under the diaphragm in perforation. Fluid sampling for aerobic/anaerobic cultures is mandatory."
  },
  {
    id: "tertiary_peritonitis",
    name: "Tertiary Peritonitis (Persistent/recurrent intra-abdominal infection)",
    category: "abdominal",
    pathogens: [
      { name: "Multidrug-resistant Gram-negative rods", frequency: "very-common", notes: "ESBL, carbapenem-resistant Klebsiella, Pseudomonas aeruginosa, Acinetobacter." },
      { name: "Enterococcus faecium and faecalis (including VRE)", frequency: "very-common", notes: "Frequently selected out by previous cephalosporin or carbapenem treatments." },
      { name: "Candida species (C. albicans and non-albicans)", frequency: "common", notes: "Intra-abdominal candidiasis; prolonged antibiotic therapy is a major risk factor." },
      { name: "Coagulate-negative Staphylococci", frequency: "common", notes: "Often biofilm-producers on abdominal catheters or drains." }
    ],
    empirical: {
      mild: {
        firstLine: "Piperacillin/Tazobactam 4.5g i.v. 4x/day + Fluconazole 400 mg i.v. once daily (if the patient is stable and has low risk for highly resistant pathogens)",
        alternative: "N/A (Tertiary peritonitis is rarely mild; almost always requires complex, ICU-level treatment)",
        duration: "Individualized"
      },
      severe: {
        firstLine: "Meropenem 1-2g i.v. 3x/day (prolonged infusion) + Vancomycin 15-20 mg/kg i.v. q8-12h (or Linezolid 600 mg i.v. q12h if VRE suspected) + Echinocandin (e.g., Caspofungin 70 mg loading, then 50 mg/day i.v. or Anidulafungin)",
        alternative: "Ceftazidime/Avibactam 2.5g i.v. q8h + Linezolid + Caspofungin (if carbapenem-resistant Klebsiella or Pseudomonas confirmed)",
        duration: "Individualized (depends on clinical response, resolution of fever, decreasing CRP/PCT, and complete source control; often weeks)"
      }
    },
    targeted: [
      { condition: "VRE (Vancomycin-resistant Enterococcus)", treatment: "Linezolid 600 mg i.v. 2x/day or Daptomycin 10-12 mg/kg i.v. once daily." },
      { condition: "Candida albicans / tropicalis (susceptible)", treatment: "Fluconazole 400-800 mg i.v./p.o. once daily (step-down from Echinocandins after clinical stabilization)." },
      { condition: "Carbapenem-resistant Klebsiella (KPC, OXA-48)", treatment: "Ceftazidim/Avibactam 2.5g i.v. 3x/day alone or in combination." }
    ],
    guidelines: "WSES and SIS Guidelines",
    diagnosticsNotes: "Clinical picture: Despite apparently successful treatment of secondary peritonitis, the patient does not improve, remains febrile, has persistently elevated inflammatory markers (CRP, PCT, WBC), or develops organ failure. Diagnostics: Urgent repeat abdominal CT/US. Relaparotomy or CT-guided drainage is required. Treatment is extremely difficult and requires a multidisciplinary approach (surgery, ID, ICU). High mortality rate!"
  },
  {
    id: "acute_cholecystitis",
    name: "Acute Cholecystitis (Gallbladder inflammation - Tokyo TG18)",
    category: "abdominal",
    pathogens: [
      { name: "Escherichia coli", frequency: "very-common", notes: "The most common biliary pathogen." },
      { name: "Klebsiella species", frequency: "common", notes: "Frequent Gram-negative biliary pathogen." },
      { name: "Enterococcus species", frequency: "common", notes: "More common in elderly, severe (Grade II/III), or nosocomial cases." },
      { name: "Anaerobes (e.g. Clostridium, Bacteroides)", frequency: "rare", notes: "Associated with gas-forming, gangrenous cholecystitis." }
    ],
    empirical: {
      mild: {
        firstLine: "Ampicillin/Sulbactam 1.5-3g i.v. 4x/day OR Ceftriaxone 2g i.v. once daily OR Cefazolin 1-2g i.v. 3x/day (for Grade I)",
        alternative: "Ciprofloxacin 400 mg i.v. 2x/day + Metronidazole 500 mg i.v. 3x/day OR Levofloxacin 500 mg i.v. once daily + Metronidazole 500 mg i.v. 3x/day",
        duration: "4 - 7 days (if cholecystectomy is performed and uncomplicated, antibiotics can be discontinued within 24 hours post-operatively!)"
      },
      severe: {
        firstLine: "Piperacillin/Tazobactam 4.5g i.v. 4x/day OR Meropenem 1g i.v. 3x/day (if ESBL risk exists or patient is unstable/septic)",
        alternative: "Cefepime 2g i.v. 3x/day + Metronidazole 500 mg i.v. 3x/day OR Aztreonam (beta-lactam allergy) + Metronidazole.",
        duration: "4 - 7 days (after successful source control: surgery or gallbladder drainage)"
      }
    },
    targeted: [
      { condition: "ESBL-producing Enterobacterales", treatment: "Ertapenem 1g i.v. once daily or Meropenem 1g i.v. 3x/day." },
      { condition: "Pseudomonas aeruginosa", treatment: "Piperacillin/Tazobactam 4.5g i.v. 4x/day or Ceftazidime 2g i.v. 3x/day or Cefepime 2g i.v. 3x/day." },
      { condition: "Enterococcus faecalis (Grade III)", treatment: "Ampicillin 2g i.v. 4-6x/day or Piperacillin/Tazobactam." }
    ],
    guidelines: "Tokyo Guidelines 2018 (TG18) for Acute Cholecystitis",
    diagnosticsNotes: "Diagnosis: Murphy's sign, RUQ pain/tenderness, fever, leukocytosis/elevated CRP, and characteristic US findings (thickened wall >4mm, pericholecystic fluid, stones, sonographic Murphy's). Severity grading (Tokyo): Grade I (mild, local), Grade II (moderate: palpable RUQ mass, WBC >18G/L, duration >72h, local complications like gangrene/abscess), Grade III (severe, organ dysfunction: cardiovascular, neurological, respiratory, renal, hepatic, hematological). Grade III requires urgent gallbladder drainage (PTGBD) or urgent cholecystectomy!"
  },
  {
    id: "acute_cholangitis",
    name: "Acute Cholangitis (Biliary tract inflammation - Tokyo TG18)",
    category: "abdominal",
    pathogens: [
      { name: "Escherichia coli", frequency: "very-common", notes: "The most common pathogen." },
      { name: "Klebsiella species", frequency: "very-common", notes: "Frequently associated with high-grade biliary obstruction." },
      { name: "Enterococcus faecalis", frequency: "common", notes: "Particularly common in patients with biliary stents or obstruction." },
      { name: "Pseudomonas aeruginosa", frequency: "common", notes: "More common after previous biliary manipulation or metal stents." },
      { name: "Bacteroides fragilis & other anaerobes", frequency: "common", notes: "Often part of polymicrobial infections." }
    ],
    empirical: {
      mild: {
        firstLine: "Ceftriaxone 2g i.v. once daily OR Ampicillin/Sulbactam 1.5-3g i.v. 4x/day OR Cefotaxime 2g i.v. 3x/day (always evaluate the need for biliary drainage!)",
        alternative: "Ciprofloxacin 400 mg i.v. 2x/day + Metronidazole 500 mg i.v. 3x/day OR Levofloxacin 500 mg i.v. once daily + Metronidazole 500 mg i.v. 3x/day",
        duration: "4 - 7 days (after successful biliary decompression/drainage)"
      },
      severe: {
        firstLine: "Piperacillin/Tazobactam 4.5g i.v. 4x/day OR Meropenem 1g i.v. 3x/day (chosen for Grade III or septic shock; excellent biliary penetration)",
        alternative: "Cefepime 2g i.v. 3x/day + Metronidazole 500 mg i.v. 3x/day OR Aztreonam (beta-lactam allergy) + Metronidazole + Vancomycin.",
        duration: "4 - 7 days (if no bacteremia; at least 7-14 days for positive blood cultures, especially Gram-positive like Enterococcus or S. aureus)"
      }
    },
    targeted: [
      { condition: "Enterococcus faecalis", treatment: "Ampicillin 2g i.v. 4-6x/day or Piperacillin/Tazobactam. (Cephalosporins are resistant!)." },
      { condition: "ESBL-producing Enterobacterales", treatment: "Ertapenem 1g i.v. once daily or Meropenem 1g i.v. 3x/day." },
      { condition: "Pseudomonas aeruginosa (susceptible)", treatment: "Ceftazidime 2g i.v. 3x/day or Piperacillin/Tazobactam." }
    ],
    guidelines: "Tokyo Guidelines 2018 (TG18) for Acute Cholangitis",
    diagnosticsNotes: "Clinical picture: Charcot's triad (fever/chills, jaundice, RUQ pain) or Reynolds' pentad (Charcot's triad + hypotension and confusion). Diagnostics (Tokyo): Systemic inflammation, cholestasis (bilirubin >=2 mg/dL, elevated ALP, GGT), and imaging (US, CT, MRCP) showing biliary dilatation or etiology. TREATMENT KEYSTONE: Urgent or early biliary decompression/drainage (ERCP + papillotomy/stenting or PTBD) is life-saving! Mortality is near 100% without drainage! Draw blood cultures."
  },
  {
    id: "erysipelas",
    name: "Erysipelas",
    category: "sst_bone",
    pathogens: [
      { name: "Streptococcus pyogenes (Group A Streptococcus)", frequency: "very-common", notes: "The beta-hemolytic Streptococcus responsible for the vast majority of cases." },
      { name: "Other beta-hemolytic Streptococci (Groups B, C, G)", frequency: "common", notes: "Commonly seen, especially in patients with chronic lymphedema or venous insufficiency." },
      { name: "Staphylococcus aureus", frequency: "rare", notes: "Rare in pure erysipelas; more typical of cellulitis or bullous forms." }
    ],
    empirical: {
      mild: {
        firstLine: "Phenoxymethylpenicillin (Penicillin V) 250-500 mg p.o. 4x/day OR Amoxicillin 500 mg p.o. 3x/day (if suitable for oral therapy)",
        alternative: "Clindamycin 300-450 mg p.o. 3x/day OR Macrolides (e.g., Clarithromycin 250-500 mg p.o. 2x/day - high resistance possible!) in case of beta-lactam allergy",
        duration: "5 - 7 days (can be extended to 10 days if necessary)"
      },
      severe: {
        firstLine: "Benzylpenicillin (Penicillin G) 1.2-2.4 g (2-4 MU) i.v. 4x/day OR Ceftriaxone 1-2g i.v. once daily OR Cefazolin 1-2g i.v. 3x/day",
        alternative: "Clindamycin 600-900 mg i.v. 3x/day OR Moxifloxacin 400 mg i.v. once daily",
        duration: "7 - 10 days (transitioning to oral step-down therapy upon clinical improvement)"
      }
    },
    targeted: [
      { condition: "Confirmed Streptococcus pyogenes", treatment: "Penicillin G i.v. or Penicillin V p.o." },
      { condition: "Associated Staphylococcus aureus (MSSA)", treatment: "Cefazolin i.v., Amoxicillin/clavulanate i.v./p.o., or Flucloxacillin." },
      { condition: "Beta-lactam allergy", treatment: "Clindamycin or Vancomycin." }
    ],
    guidelines: "IDSA Skin and Soft Tissue Infections (SSTI) Guidelines & National Infectious Disease Guidelines",
    diagnosticsNotes: "Clinical picture: Sharply demarcated, spreading, fiery red, hot, painful skin lesion, often starting with chills and high fever. Most commonly affects the lower extremities or face. Entry portals (e.g., interdigital tinea pedis, skin tears) must be identified and treated! Diagnosis: Primarily clinical. Lab tests show elevated CRP, WBC count with left shift. Blood cultures are rarely positive (<5%) but should be drawn in severe or systemic cases."
  },
  {
    id: "cellulitis",
    name: "Cellulitis",
    category: "sst_bone",
    pathogens: [
      { name: "Streptococcus pyogenes", frequency: "very-common", notes: "The primary pathogen of non-purulent cellulitis." },
      { name: "Staphylococcus aureus (MSSA)", frequency: "very-common", notes: "Especially in purulent (pus-forming) cellulitis, abscesses, or after trauma." },
      { name: "Staphylococcus aureus (MRSA)", frequency: "common", notes: "Should be suspected in the presence of risk factors (prior MRSA, healthcare exposure, IV drug use)." },
      { name: "Gram-negative rods (e.g., Pseudomonas)", frequency: "rare", notes: "In immunosuppression, neutropenia, or water exposure (e.g., trauma in fresh/salt water)." }
    ],
    empirical: {
      mild: {
        firstLine: "Amoxicillin/clavulanate 1g p.o. 3x/day OR Cephalexin 500 mg p.o. 4x/day (for non-purulent); Sulfamethoxazole/Trimethoprim (Co-trimoxazole) 960 mg p.o. 2x/day if MRSA is suspected",
        alternative: "Clindamycin 300-450 mg p.o. 3x/day OR Linezolid 600 mg p.o. 2x/day",
        duration: "5 - 10 days"
      },
      severe: {
        firstLine: "Cefazolin 1-2g i.v. 3x/day OR Amoxicillin/clavulanate 1.2g i.v. 3x/day; if MRSA suspected: Vancomycin 15-20 mg/kg i.v. q8-12h OR Linezolid 600 mg i.v. 2x/day",
        alternative: "Piperacillin/Tazobactam 4.5g i.v. 4x/day (if Gram-negative or polymicrobial mix suspected, e.g., diabetic foot or decubitus ulcers)",
        duration: "7 - 14 days (based on clinical course and comorbidities)"
      }
    },
    targeted: [
      { condition: "Confirmed MSSA (methicillin-susceptible S. aureus)", treatment: "Flucloxacillin 1-2g i.v./p.o. 4x/day or Cefazolin 1-2g i.v. 3x/day." },
      { condition: "Confirmed MRSA", treatment: "Vancomycin i.v., Linezolid i.v./p.o., Clindamycin i.v./p.o., or Trimethoprim/Sulfamethoxazole p.o." },
      { condition: "Pseudomonas aeruginosa", treatment: "Ceftazidime 2g i.v. 3x/day OR Piperacillin/Tazobactam 4.5g i.v. 4x/day OR Ciprofloxacin." }
    ],
    guidelines: "IDSA Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections",
    diagnosticsNotes: "Clinical picture: Diffuse, poorly demarcated, deeper skin and subcutaneous tissue inflammation, presenting with erythema, swelling, warmth, and pain. Often arises at the site of trauma, surgical incisions, edema, or chronic skin conditions. Diagnosis: Primarily clinical. Culture of purulent drainage is mandatory! Ultrasound is recommended to rule out occult abscess if fluctuance or questionable swelling is present."
  },
  {
    id: "fasciitis_necrotisans",
    name: "Necrotizing Fasciitis",
    category: "sst_bone",
    pathogens: [
      { name: "Polymicrobial flora (Type I)", frequency: "very-common", notes: "Mixed aerobic and anaerobic flora (coliforms, Streptococci, Bacteroides). Most common type, especially in diabetes or post-surgery." },
      { name: "Streptococcus pyogenes (Type II - 'flesh-eating bacteria')", frequency: "common", notes: "Monomikrobieller Infektion, can occur in young, healthy individuals; extremely aggressive." },
      { name: "Clostridium perfringens OR septicum (Type III)", frequency: "rare", notes: "Gas gangrene, presenting as anaerobic myonecrosis." },
      { name: "Staphylococcus aureus (including MRSA)", frequency: "common", notes: "Part of monomicrobial Type II or polymicrobial infections." }
    ],
    empirical: {
      mild: {
        firstLine: "N/A (There are no mild or moderate cases of necrotizing fasciitis; any suspected or confirmed case is an immediate, life-threatening multidisciplinary emergency!)",
        alternative: "N/A",
        duration: "N/A"
      },
      severe: {
        firstLine: "Piperacillin/Tazobactam 4.5g i.v. 4x/day OR Meropenem 1g i.v. 3x/day + Clindamycin 900 mg i.v. 3x/day (to inhibit bacterial toxin production!) + Vancomycin 15-20 mg/kg i.v. (to cover MRSA)",
        alternative: "Ceftriaxone 2g i.v. once daily + Metronidazole 500 mg i.v. 3x/day + Clindamycin 900 mg i.v. 3x/day + Vancomycin OR Linezolid 600 mg i.v. 2x/day (can replace both Clindamycin and Vancomycin)",
        duration: "Individualized (until surgical debridement is complete, the patient has been afebrile for 48-72 hours, and necrosis progression has stopped)"
      }
    },
    targeted: [
      { condition: "Group A Streptococcus (Type II necrotizing fasciitis)", treatment: "Penicillin G 4 MU i.v. 4x/day + Clindamycin 900 mg i.v. 3x/day (synergistic effect and toxin suppression)." },
      { condition: "Clostridium myonecrosis (gas gangrene)", treatment: "Penicillin G 4 MU i.v. 4x/day + Clindamycin 900 mg i.v. 3x/day." },
      { condition: "MRSA", treatment: "Vancomycin i.v., Linezolid i.v., or Daptomycin i.v." }
    ],
    guidelines: "IDSA SSTI Guidelines & WSES Guidelines for Skin and Soft Tissue Infections",
    diagnosticsNotes: "KEY TO MANAGEMENT: Immediate, radical surgical exploration and debridement of all necrotic tissue! Antibiotics alone are completely ineffective; surgical delay increases mortality exponentially. Clinical signs: Severe pain disproportionate to visible skin findings, rapid progression, bullae (especially hemorrhagic), crepitus (gas formation), anesthetic skin, lethargy, septic shock. Diagnostics: Abdominal/soft tissue CT can show gas and fascial edema. The LRINEC score can assist, but a negative imaging or lab result does not rule out the diagnosis!"
  },
  {
    id: "osteomyelitis",
    name: "Osteomyelitis",
    category: "sst_bone",
    pathogens: [
      { name: "Staphylococcus aureus (MSSA & MRSA)", frequency: "very-common", notes: "The most common pathogen across all age groups (hematogenous and contiguous routes)." },
      { name: "Coagulase-negative Staphylococci (e.g., S. epidermidis)", frequency: "common", notes: "Particularly associated with orthopaedic implants, hardware, or prostheses." },
      { name: "Enterobacterales (e.g., E. coli, Klebsiella)", frequency: "common", notes: "Mainly in elderly patients after hematogenous seeding from UTIs or as a complication of diabetic foot ulcers." },
      { name: "Pseudomonas aeruginosa", frequency: "common", notes: "Typically in IV drug users, puncture wounds through sneakers, or after nosocomial bone procedures." }
    ],
    empirical: {
      mild: {
        firstLine: "Flucloxacillin 500-1000 mg p.o. 4x/day OR Amoxicillin/clavulanate 1g p.o. 3x/day OR Clindamycin 450 mg p.o. 3x/day (exclusively in stable patients, as chronic suppressive therapy or early oral step-down)",
        alternative: "Ciprofloxacin 500-750 mg p.o. 2x/day (if Gram-negative coverage is required; has excellent bone penetration!)",
        duration: "4 - 6 weeks (can last several months for chronic or non-resectable osteomyelitis)"
      },
      severe: {
        firstLine: "Cefazolin 2g i.v. 3x/day OR Ceftriaxone 2g i.v. once daily + Vancomycin 15-20 mg/kg i.v. q8-12h (empirical coverage for S. aureus, MRSA, and Gram-negative rods)",
        alternative: "Piperacillin/Tazobactam 4.5g i.v. 4x/day OR Meropenem 1g i.v. 3x/day (if Pseudomonas risk or diabetic foot infection is present)",
        duration: "At least 4-6 weeks of i.v. or high-dose oral therapy following effective surgical source control"
      }
    },
    targeted: [
      { condition: "MSSA (methicillin-susceptible S. aureus)", treatment: "Cefazolin 2g i.v. 3x/day or Flucloxacillin 2g i.v. 4x/day; oral step-down with Amoxicillin/clavulanate or Clindamycin." },
      { condition: "MRSA", treatment: "Vancomycin i.v., Daptomycin 6-8 mg/kg i.v. once daily, Linezolid 600 mg i.v./p.o. 2x/day, or Clindamycin." },
      { condition: "Gram-negative rods (susceptible)", treatment: "Ciprofloxacin 750 mg p.o. 2x/day or Levofloxacin 750 mg p.o. once daily (excellent bone penetration)." }
    ],
    guidelines: "IDSA Osteomyelitis Guidelines & National Guidelines",
    diagnosticsNotes: "Key to diagnosis: Bone biopsy and culture (surgical or CT-guided)! Superficial wound swab cultures are misleading and do not substitute for a bone biopsy. Imaging: MRI is the most sensitive and specific imaging modality. Bone destruction is visible on plain X-rays only after 2-3 weeks of infection. Management: Typically requires a combined surgical (debridement of necrotic sequestra) and prolonged targeted antibiotic approach."
  },
  {
    id: "spondylodiscitis",
    name: "Spondylodiscitis (Vertebral Osteomyelitis & Discitis)",
    category: "sst_bone",
    pathogens: [
      { name: "Staphylococcus aureus", frequency: "very-common", notes: "The most common pathogen in hematogenous spondylodiscitis (>50%)." },
      { name: "Coagulase-negative Staphylococci", frequency: "common", notes: "Mainly after spinal surgery, epidural catheterization, or invasive procedures." },
      { name: "Enterobacterales (e.g., E. coli)", frequency: "common", notes: "Often a hematogenous complication of urinary tract infections, especially in elderly patients." },
      { name: "Mycobacterium tuberculosis (Pott's disease)", frequency: "rare", notes: "In chronic, slowly progressive cases, typically with characteristic cold abscess formation." }
    ],
    empirical: {
      mild: {
        firstLine: "N/A (Empirical antibiotics are not recommended in suspected spondylodiscitis unless the patient is unstable; always attempt a microbiological diagnosis first!)",
        alternative: "N/A",
        duration: "N/A"
      },
      severe: {
        firstLine: "Cefazolin 2g i.v. 3x/day OR Ceftriaxone 2g i.v. once daily + Vancomycin 15-20 mg/kg i.v. (if the patient has sepsis or neurological deficits)",
        alternative: "Piperacillin/Tazobactam 4.5g i.v. 4x/day OR Meropenem 1g i.v. 3x/day (in case of prior spinal surgery, nosocomial infection, or suspected urinary source)",
        duration: "Minimum of 6 weeks (much longer, e.g., 6-12 months, in tuberculous cases or if spinal instability exists)"
      }
    },
    targeted: [
      { condition: "MSSA (Staphylococcus aureus)", treatment: "Cefazolin 2g i.v. 3x/day or Flucloxacillin 2g i.v. 4x/day; step-down to oral Clindamycin or Amoxicillin/clavulanate." },
      { condition: "MRSA", treatment: "Vancomycin i.v. (target trough 15-20 ug/mL) or Daptomycin 8-10 mg/kg i.v. once daily." },
      { condition: "Enterobacterales (susceptible)", treatment: "Ciprofloxacin 500-750 mg p.o. 2x/day or Levofloxacin 750 mg p.o. once daily, or Ceftriaxone i.v." }
    ],
    guidelines: "2015 IDSA Clinical Practice Guidelines for the Diagnosis and Treatment of Native Vertebral Osteomyelitis",
    diagnosticsNotes: "Clinical picture: Localized, dull back pain worsening with movement; fever is present in only ~50% of cases! Elevated CRP and WBC. Neurological symptoms (e.g., limb weakness, bowel/bladder incontinence) suggest spinal epidural abscess (requires urgent neurosurgical consult!). Diagnosis: Spinal MRI is the modality of choice. MANDATORY: Draw at least 2 sets of blood cultures! If blood cultures are negative, a CT-guided needle biopsy is mandatory before starting antibiotics (unless the patient is hemodynamically unstable or septic)!"
  },
  {
    id: "febrile_neutropenia",
    name: "Febrile Neutropenia",
    category: "sepsis",
    pathogens: [
      { name: "Pseudomonas aeruginosa", frequency: "very-common", notes: "Extremely dangerous, rapidly progressive, requires immediate antipseudomonal coverage." },
      { name: "Escherichia coli", frequency: "very-common", notes: "Common Gram-negative translocation pathogen." },
      { name: "Klebsiella pneumoniae", frequency: "very-common", notes: "Often hospital-acquired strains that may produce ESBL or carbapenemases." },
      { name: "Coagulase-negative Staphylococci (e.g., S. epidermidis)", frequency: "common", notes: "Most common Gram-positive pathogen, particularly in patients with central venous catheters." },
      { name: "Staphylococcus aureus", frequency: "common", notes: "Prone to severe, metastatic infections and septic shock." },
      { name: "Viridans Streptococci", frequency: "common", notes: "Can cause severe toxic shock-like syndrome, especially in patients with severe mucositis." }
    ],
    empirical: {
      mild: {
        firstLine: "N/A (In exceptionally low-risk cases: Ciprofloxacin 500-750 mg p.o. 2x/day + Amoxicillin/clavulanate 1g p.o. 3x/day under close outpatient monitoring)",
        alternative: "N/A",
        duration: "Until the patient has been afebrile for at least 48-72 hours, AND the absolute neutrophil count (ANC) is consistently > 500/uL (0.5 x 10^9/L)."
      },
      severe: {
        firstLine: "Antipseudomonal beta-lactam monotherapy: Piperacillin/Tazobactam 4.5g i.v. 4x/day OR Cefepime 2g i.v. 3x/day OR Meropenem 1g i.v. 3x/day (if ESBL suspected or hemodynamically unstable)",
        alternative: "Combination therapy (if resistant strains suspected): Piperacillin/Tazobactam or Cefepime + Amikacin 15-20 mg/kg i.v. once daily (add Vancomycin i.v. for catheter site infection, soft tissue involvement, or shock)",
        duration: "Until the patient has been afebrile for at least 48-72 hours, AND the absolute neutrophil count (ANC) is consistently > 500/uL (0.5 x 10^9/L)."
      }
    },
    targeted: [
      { condition: "Gram-negative rods (e.g., confirmed Pseudomonas aeruginosa)", treatment: "Targeted Piperacillin/Tazobactam 4.5g i.v. 4x/day, Cefepime 2g i.v. 3x/day, or Ceftazidime 2g i.v. 3x/day, combined with Amikacin if clinically indicated." },
      { condition: "Confirmed MRSA or catheter-related infection", treatment: "Add Vancomycin i.v. (target trough 15-20 ug/mL) or Linezolid 600 mg i.v. 2x/day or Teicoplanin." },
      { condition: "Persistent fever (after 4-7 days) despite broad-spectrum antibacterial coverage", treatment: "Initiate empiric antifungal therapy: Caspofungin i.v. (or other echinocandin) OR Voriconazole OR Liposomal Amphotericin B." }
    ],
    guidelines: "ECIL-4 / ECIL-9 Guidelines for Febrile Neutropenia, IDSA Clinical Practice Guideline for the Use of Antimicrobial Agents in Neutropenic Patients with Cancer",
    diagnosticsNotes: "DEFINITION: Fever (single oral temperature >38.3 °C or >38.0 °C sustained over 1 hour) AND Neutropenia (absolute neutrophil count /ANC/ < 500/uL, or < 1000/uL and expected to fall below 500/uL within 48 hours). Medical emergency! Administer the first dose of empiric antibiotics within 1 hour of presentation! DIAGNOSTICS: Immediate draw of 2 sets of blood cultures (one from peripheral vein and one from each lumen of central venous catheter), urine culture, chest X-ray, physical exam (especially perineum, catheter exit sites). Risk stratification can be performed using the MASCC score (score >= 21 indicates low risk, suitable for oral therapy)."
  },
  {
    id: "salmonella_campylobacter_gastroenteritis",
    name: "Salmonella and Campylobacter Gastroenteritis",
    category: "abdominal",
    pathogens: [
      { name: "Campylobacter jejuni / coli", frequency: "very-common", notes: "A major cause of bacterial enteritis worldwide, often transmitted via undercooked poultry." },
      { name: "Salmonella enterica (non-typhoidal strains)", frequency: "very-common", notes: "Common foodborne pathogen (eggs, poultry, meat), can cause bacteremia in high-risk patients." },
      { name: "Shigella species (S. sonnei, S. flexneri)", frequency: "common", notes: "Highly infectious (very low inoculum required), causes bacillary dysentery, spread by person-to-person contact." },
      { name: "Yersinia enterocolitica", frequency: "rare", notes: "Can mimic appendicitis (pseudoappendicitis) with right lower quadrant pain and mesenteric lymphadenitis." }
    ],
    empirical: {
      mild: {
        firstLine: "N/A (In mild/moderate cases, antibiotics are contraindicated or not recommended as they prolong Salmonella shedding and increase resistance! Symptomatic rehydration and supportive care only!)",
        alternative: "N/A",
        duration: "N/A"
      },
      severe: {
        firstLine: "Azithromycin 500 mg p.o. once daily for 3 days OR Ciprofloxacin 500 mg p.o. 2x/day for 3-5 days (only if systemic symptoms, high fever, bloody stool, or severe comorbidities/immunosuppression are present)",
        alternative: "Ceftriaxone 1-2g i.v. once daily for 3-5 days (if oral intake is not tolerated, or if systemic dissemination is suspected)",
        duration: "3 - 5 days (7-14 days if systemic complications arise)"
      }
    },
    targeted: [
      { condition: "Confirmed Campylobacter jejuni (severe or prolonged course)", treatment: "Azithromycin 500 mg p.o. once daily for 3 days (Note: Fluoroquinolone resistance in Campylobacter is extremely high!)." },
      { condition: "Confirmed Salmonella enterica (systemic bacteremia or high-risk: infants, elderly, immunocompromised, vascular graft/aneurysm)", treatment: "Ciprofloxacin 500 mg p.o. 2x/day OR Ceftriaxone 1-2g i.v. once daily for 5-7 days (extend to 14 days in severe immunosuppression or suspected endovascular infection)." },
      { condition: "Confirmed Shigellosis (severe cases or outbreak risk)", treatment: "Azithromycin 500 mg p.o. once daily for 3 days OR Ciprofloxacin 500 mg p.o. 2x/day for 3 days OR Ceftriaxone 1-2g i.v. for 3 days." }
    ],
    guidelines: "IDSA Infectious Diarrhea Guidelines, National Clinical Practice Guidelines",
    diagnosticsNotes: "CLINICAL PICTURE: Acute diarrhea (watery or bloody/mucoid), abdominal pain, cramps, fever, nausea/vomiting. COMPLICATIONS: Dehydration, prerenal renal failure. Salmonella bacteremia can cause endovascular infection in patients with vascular disease. Campylobacter may be followed by Guillain-Barré syndrome or reactive arthritis. DIAGNOSTICS: Stool culture is mandatory in severe, febrile, or bloody diarrhea, in immunocompromised patients, or in suspected outbreaks. Draw blood cultures for systemic symptoms!"
  },
  {
    id: "clostridioides_difficile",
    name: "Clostridioides difficile Infection (CDI)",
    category: "abdominal",
    pathogens: [
      { name: "Clostridioides difficile (toxin-producing strains)", frequency: "very-common", notes: "Formerly Clostridium difficile. Spore-forming, anaerobic Gram-positive rod; the leading cause of healthcare-associated diarrhea." }
    ],
    empirical: {
      mild: {
        firstLine: "Fidaxomicin 200 mg p.o. 2x/day for 10 days OR Vancomycin 125 mg p.o. 4x/day for 10 days (Note: Oral Metronidazole 500 mg 3x/day for 10 days is only recommended in non-severe cases if the preferred agents are unavailable!)",
        alternative: "Metronidazole 500 mg p.o. 3x/day for 10 days (only if Fidaxomicin/Vancomycin are not available)",
        duration: "10 days"
      },
      severe: {
        firstLine: "Fidaxomicin 200 mg p.o. 2x/day for 10 days OR Vancomycin 125 mg p.o. 4x/day for 10 days (For severe/complicated cases, increase oral Vancomycin to 250-500 mg 4x/day or administer via nasogastric tube, combined with intravenous Metronidazole 500 mg i.v. every 8 hours!)",
        alternative: "Vancomycin 125-500 mg p.o. + Metronidazole 500 mg i.v. In the presence of severe ileus, rectal Vancomycin instillation can be used as an adjunct.",
        duration: "10 days (for first recurrence, use a tapered/pulsed oral Vancomycin regimen or Fidaxomicin)"
      }
    },
    targeted: [
      { condition: "First recurrence", treatment: "Fidaxomicin 200 mg p.o. 2x/day for 10 days (especially if Vancomycin was used initially) OR tapered/pulsed oral Vancomycin regimen." },
      { condition: "Multiple recurrences", treatment: "Oral Vancomycin course, followed by Bezlotoxumab i.v. (monoclonal antibody) infusion OR Fecal Microbiota Transplantation (FMT)." },
      { condition: "Fulminant colitis (shock, paralytic ileus, toxic megacolon)", treatment: "High-dose oral Vancomycin (500 mg p.o. 4x/day or via tube) + Metronidazole 500 mg i.v. every 8 hours + rectal Vancomycin instillation. Request immediate surgical consultation (subtotal colectomy and end ileostomy)!" }
    ],
    guidelines: "ESCMA/ESGCD 2021 Update on Clostridioides difficile infection, 2021 IDSA/SHEA Guidelines on Clostridioides difficile Infection",
    diagnosticsNotes: "RISK FACTORS: Prior antibiotic exposure (especially clindamycin, fluoroquinolones, broad-spectrum beta-lactams), older age, hospitalization, PPI use. CLINICAL PICTURE: Copious watery diarrhea (often with a characteristic foul smell), abdominal pain, fever, leukocytosis. Complications include pseudomembranous colitis, toxic megacolon, perforation, and shock. DIAGNOSTICS: Only test diarrheal stools (do not test formed stools unless ileus is suspected!). Two-step algorithm: GDH antigen or PCR screening, followed by toxin A/B enzyme immunoassay (EIA). Only toxin-positive cases represent active clinical infection (asymptomatic carriers should not be treated!)."
  },
  {
    id: "diverticulitis",
    name: "Acute Diverticulitis",
    category: "abdominal",
    pathogens: [
      { name: "Escherichia coli", frequency: "very-common", notes: "The most common Gram-negative aerobic pathogen." },
      { name: "Bacteroides fragilis", frequency: "very-common", notes: "The most common obligate anaerobic pathogen in the colon." },
      { name: "Enterococcus faecalis / faecium", frequency: "common", notes: "Often present in polymicrobial mixtures, plays a synergistic role." },
      { name: "Klebsiella species", frequency: "common", notes: "Associated Gram-negative aerobic pathogen." },
      { name: "Clostridium species", frequency: "rare", notes: "Other anaerobic colonic bacteria." }
    ],
    empirical: {
      mild: {
        firstLine: "Amoxicillin/clavulanate 1g p.o. 3x/day OR Ciprofloxacin 500 mg p.o. 2x/day + Metronidazole 500 mg p.o. 3x/day",
        alternative: "Levofloxacin 500 mg p.o. once daily + Metronidazole 500 mg p.o. 3x/day OR Moxifloxacin 400 mg p.o. once daily as monotherapy",
        duration: "5 - 7 days (Note: In mild, uncomplicated diverticulitis in immunocompetent, stable patients, antibiotic therapy can be safely omitted; fluid diet and close observation only are recommended!)"
      },
      severe: {
        firstLine: "Piperacillin/Tazobactam 4.5g i.v. 4x/day OR Ceftriaxone 2g i.v. once daily + Metronidazole 500 mg i.v. 3x/day OR Cefotaxime 2g i.v. 3x/day + Metronidazole 500 mg i.v. 3x/day",
        alternative: "Ertapenem 1g i.v. once daily OR Meropenem 1g i.v. 3x/day (if ESBL-producing organisms are suspected or severe sepsis is present)",
        duration: "4 - 7 days (following successful source control/drainage or surgical resection; longer therapy may be required in un-resected or conservatively managed severe cases)"
      }
    },
    targeted: [
      { condition: "Confirmed ESBL-producing Enterobacterales", treatment: "Ertapenem 1g i.v. once daily or Meropenem 1g i.v. 3x/day." },
      { condition: "Presence of Pseudomonas aeruginosa (rare, mainly in immunocompromised)", treatment: "Piperacillin/Tazobactam 4.5g i.v. 4x/day OR Ceftazidime 2g i.v. 3x/day + Metronidazole 500 mg i.v. or p.o." },
      { condition: "Severe beta-lactam allergy", treatment: "Ciprofloxacin 400 mg i.v. (or 750 mg p.o.) 2x/day + Metronidazole 500 mg i.v. (or p.o.) 3x/day." }
    ],
    guidelines: "WSES guidelines for the management of acute left-sided colonic diverticulitis, National Infectious Disease & Surgical Guidelines",
    diagnosticsNotes: "CLINICAL PICTURE: Left lower quadrant abdominal pain (left-sided 'appendicitis'), fever, leukocytosis, elevated CRP, constipation or diarrhea. COMPLICATIONS: Abscess (Hinchey I-II), free perforation and purulent/fecal peritonitis (Hinchey III-IV), fistula, stricture. DIAGNOSTICS: Abdominal/pelvic CT with IV contrast is the modality of choice (sensitivity >95%). IN THE ACUTE PHASE, colonoscopy is strictly contraindicated due to increased risk of perforation! Colonoscopy is recommended 4-6 weeks after resolution to rule out colon malignancy."
  }
];