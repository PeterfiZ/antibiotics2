/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { QuizQuestion } from '../types';

export const quizQuestionsData: QuizQuestion[] = [
  {
    id: "q1",
    type: "pharmacology",
    questionText: "A 62-year-old male patient is suspected of having a systemic Staphylococcus aureus infection, and culture confirms the strain is methicillin-sensitive (MSSA). Which of the following is the most appropriate first-line intravenous treatment?",
    options: [
      "Vancomycin i.v.",
      "Cefazolin i.v.",
      "Ceftazidime i.v.",
      "Piperacillin / Tazobactam i.v."
    ],
    correctAnswerIndex: 1,
    explanation: "Although Vancomycin is effective against MSSA, clinical trials clearly demonstrate that in beta-lactam-sensitive staphylococcal infections, beta-lactams (such as Cefazolin or oxacillin) exert a faster bactericidal effect and provide better clinical outcomes (lower mortality) than Vancomycin. Cefazolin is the gold standard for systemic MSSA infections. Ceftazidime is primarily a Gram-negative agent and is weak against staphylococci. Pip/Tazo has an unnecessarily broad spectrum, wasting Gram-negative and anaerobic coverage."
  },
  {
    id: "q2",
    type: "empirical",
    questionText: "A 68-year-old female patient is admitted to the emergency department with high fever, productive cough, dyspnea, and confusion. Her blood pressure is 88/50 mmHg, pulse 112/min, respiratory rate 32/min, and body temperature 38.9 °C. Chest X-ray shows right-sided lobar infiltrate. Which is the most appropriate initial empirical antibiotic treatment?",
    options: [
      "Amoxicillin 3x 1g p.o.",
      "Ceftriaxone 1x 2g i.v. + Clarithromycin 2x 500mg i.v.",
      "Ceftazidime 3x 2g i.v.",
      "Metronidazole 3x 500mg i.v."
    ],
    correctAnswerIndex: 1,
    explanation: "The patient's CURB-65 score is 4 (confusion, urea unknown but respiratory rate >= 30, low blood pressure, age > 65), which corresponds to severe community-acquired pneumonia (severe CAP), requiring immediate hospital/ICU admission and i.v. treatment. Empirical treatment must cover Streptococcus pneumoniae and atypical pathogens (Legionella, Mycoplasma). The Ceftriaxone (beta-lactam) + Clarithromycin (macrolide) combination is the accepted standard guideline. Amoxicillin p.o. is for mild cases. Ceftazidime does not act on the main pneumonia pathogens (weak against S. pneumoniae, ineffective against atypicals). Metronidazole is only an anti-anaerobic agent and is unsuitable on its own.",
    caseData: {
      age: 68,
      gender: "female",
      symptoms: ["High fever", "Productive cough", "Shortness of breath (dyspnea)", "Confusion"],
      vitals: {
        bp: "88/50 mmHg",
        hr: 112,
        temp: "38.9 °C",
        rr: 32
      },
      labs: ["Chest X-ray: right lower lobe infiltrate", "CRP: 185 mg/l", "Leukocyte: 16.4 G/l"]
    }
  },
  {
    id: "q3",
    type: "susceptibility",
    questionText: "Which statement is true regarding the intrinsic antibiotic susceptibility of Enterococcus species?",
    options: [
      "All Enterococci are susceptible to third-generation cephalosporins like Ceftriaxone.",
      "Enterococci are naturally resistant to all cephalosporins.",
      "Enterococcus faecium is generally susceptible to Ampicillin.",
      "Enterococcus faecalis is resistant to Vancomycin and can only be treated with Linezolid."
    ],
    correctAnswerIndex: 1,
    explanation: "All Enterococci (faecalis, faecium, etc.) are naturally and completely resistant to all existing cephalosporins (including Ceftriaxone and Cefepime). This is a critical pharmacological fact: Enterococcus superinfection (e.g., urinary or gastrointestinal) often develops during cephalosporin treatment. 90% of E. faecium strains show acquired resistance to ampicillin. E. faecalis generally remains susceptible to both ampicillin and vancomycin (VRE - Vancomycin-resistant enterococcus is much more common among E. faecium)."
  },
  {
    id: "q4",
    type: "pharmacology",
    questionText: "In a 74-year-old female patient with renal insufficiency (eGFR: 22 ml/min) suffering from a urinary tract infection, lower urinary tract infection (cystitis) is diagnosed. Why is the use of Nitrofurantoin contraindicated in her case?",
    options: [
      "Because Nitrofurantoin causes severe renal failure (acute tubular necrosis).",
      "Because with decreased renal function, Nitrofurantoin cannot be excreted and accumulated in the urine, making it ineffective in the bladder while causing systemic toxicity.",
      "Because Nitrofurantoin is excreted exclusively in the liver and becomes inactive in kidney patients.",
      "Because Nitrofurantoin destroys the kidney's erythropoietin production."
    ],
    correctAnswerIndex: 1,
    explanation: "Nitrofurantoin is a unique agent: to exert its effect, it must enter the urine and reach high concentrations there. If GFR < 30 ml/min, the kidney's filtration capacity is so low that Nitrofurantoin does not enter the bladder in sufficient quantities, so it will not kill the bacteria. At the same time, it accumulates in the blood (it is not excreted), which increases the risk of severe side effects (e.g., peripheral neuropathy, pulmonary fibrosis). Therefore, in kidney disease, it is forbidden not because of renal protection, but due to ineffectiveness and systemic toxicity."
  },
  {
    id: "q5",
    type: "empirical",
    questionText: "A 19-year-old university student is brought to the emergency department due to sudden onset high fever, intense headache, photophobia, and vomiting. Upon examination, marked neck stiffness (meningism) is observed, and small, non-blanching petechiae are visible on the trunk. Which is the most appropriate immediate action?",
    options: [
      "Blood collection for hemoculture, cranial CT, and LP. Antibiotics should only be started after the results arrive.",
      "Blood collection for hemoculture, followed by immediate empirical i.v. Dexamethasone and 2x 2g Ceftriaxone i.v., and then considering an urgent lumbar puncture.",
      "Prescribing outpatient Ciprofloxacin 1x 500 mg p.o. and sending the patient home with close observation.",
      "Immediate lumbar puncture, then waiting for the CSF lab result (3 hours) before antibiotics."
    ],
    correctAnswerIndex: 1,
    explanation: "The patient is suspected of having acute purulent bacterial meningitis and sepsis (suspected meningococcal infection accompanied by petechiae). In bacterial meningitis, every hour of delay in antibiotic administration significantly increases mortality and the risk of neurological damage. The correct sequence: take hemoculture, then IMMEDIATE empirical broad-spectrum antibiotic (Ceftriaxone 2g i.v. crosses the blood-brain barrier well) + Dexamethasone (inhibits the inflammatory cytokine storm that occurs during bacterial lysis and reduces hearing loss). Lumbar puncture should only be performed after patient stabilization or after exclusionary CT, so antibiotic administration must not be delayed for even a minute!",
    caseData: {
      age: 19,
      gender: "male",
      symptoms: ["High fever (39.5 °C)", "Severe headache", "Photophobia", "Vomiting", "Petechiae on the skin"],
      vitals: {
        bp: "105/65 mmHg",
        hr: 120,
        temp: "39.6 °C",
        rr: 24
      },
      labs: ["Neck stiffness: 3 finger widths", "Kernig and Brudzinski signs: positive"]
    }
  },
  {
    id: "q6",
    type: "susceptibility",
    questionText: "Which antibiotic is absolutely INEFFECTIVE against Pseudomonas aeruginosa among those listed?",
    options: [
      "Ciprofloxacin",
      "Cefepime",
      "Ertapenem",
      "Piperacillin / Tazobactam"
    ],
    correctAnswerIndex: 2,
    explanation: "Ertapenem is the only carbapenem that has absolutely no effect against Pseudomonas aeruginosa and Acinetobacter baumannii (due to its polarized structure, it cannot pass through the porin channels of these bacteria). For this reason, it is an excellent 'carbapenem-sparing' drug (e.g., excellent for ESBL E. coli infection while sparing the arsenal against Pseudomonas). Ciprofloxacin (oral/iv quinolone), Cefepime (4th gen cephalosporin), and Pip/Tazo (anti-Pseudomonas penicillin) are all effective in susceptible Pseudomonas infections."
  },
  {
    id: "q7",
    type: "pharmacology",
    questionText: "Which drug pair is responsible for the development of 'Red Man Syndrome', and how can it be prevented?",
    options: [
      "Ceftriaxone - by avoiding calcium-containing infusion.",
      "Vancomycin - by slowing the infusion rate (administered over at least 60 minutes).",
      "Linezolid - by avoiding cheeses and tyramine-rich foods.",
      "Metronidazole - by complete prohibition of alcohol."
    ],
    correctAnswerIndex: 1,
    explanation: "Red Man Syndrome is a non-immunological (not IgE-mediated) histamine release that occurs when Vancomycin is administered intravenously too quickly. It is characterized by intense flushing and itching of the neck, face, and upper body, which may be accompanied by hypotension. It is not a true allergy! It can be prevented if Vancomycin is infused slowly, diluted, in at least a 60-minute (or 10 mg/min rate) infusion. If it has already developed, stopping the infusion and administering antihistamines is recommended."
  },
  {
    id: "q8",
    type: "susceptibility",
    questionText: "Which mechanism explains why Legionella pneumophila and Mycoplasma pneumoniae are naturally resistant to all beta-lactam antibiotics (e.g., Penicillins, Cephalosporins, Carbapenems)?",
    options: [
      "Because they produce extended-spectrum beta-lactamase (ESBL) enzymes.",
      "Because they multiply intracellularly, where beta-lactams do not penetrate, and Mycoplasma does not have a peptidoglycan cell wall (the target of beta-lactams) at all.",
      "Because they have altered PBP-2a protein like MRSA.",
      "Because they immediately pump out beta-lactams with active efflux pumps."
    ],
    correctAnswerIndex: 1,
    explanation: "The mechanism of action of beta-lactams is the inhibition of the bacterial peptidoglycan cell wall synthesis (transpeptidation). Mycoplasma pneumoniae has no cell wall protein at all (it only has a three-layered cell membrane), so penicillins and cephalosporins have no target site on it! Legionella pneumophila is an intracellular bacterium that lives inside alveolar macrophages; due to their polarity, beta-lactams cannot penetrate the human cell membrane and enter the cells. Therefore, for both atypical pathogens, macrolides, tetracyclines, or fluoroquinolones must be used, which penetrate excellently into the cell."
  },
  {
    id: "q9",
    type: "empirical",
    questionText: "A 24-year-old healthy female patient presents with urgent urination, painful/stinging urination (dysuria), and suprapubic tension. She has no fever and reports no back pain. The urine dipstick is nitrite and leukocyte positive. Which is the most appropriate first-line empirical treatment according to the latest urological guidelines?",
    options: [
      "Ciprofloxacin 2x 500 mg p.o. for 3 days",
      "Fosfomycin trometamol 1x 3g p.o. single dose",
      "Amoxicillin 3x 500 mg p.o. for 7 days",
      "Ceftriaxone 1x 1g i.v. single dose"
    ],
    correctAnswerIndex: 1,
    explanation: "The patient has acute uncomplicated cystitis. According to EAU (European Association of Urology) guidelines, first-line agents are Fosfomycin trometamol (1x 3g single dose) or Nitrofurantoin (2x 100mg for 5 days). Based on strict FDA and EMA recommendations, fluoroquinolones (like Ciprofloxacin) should be avoided in uncomplicated cystitis due to possible long-term and disabling side effects (tendons, joints, nervous system); these should be reserved for pyelonephritis! Amoxicillin monotherapy is not recommended due to high E. coli resistance. Intravenous Ceftriaxone administration for cystitis is unjustified 'killing a mosquito with a cannon'."
  },
  {
    id: "q10",
    type: "pharmacology",
    questionText: "Which statement is true regarding the combined consumption of metronidazole and alcohol?",
    options: [
      "There is no interaction; alcohol can be consumed safely during the treatment.",
      "Alcohol neutralizes the effect of metronidazole, making the antibiotic ineffective.",
      "It triggers a disulfiram-like reaction (inhibits acetaldehyde dehydrogenase), causing severe nausea, vomiting, flushing, headache, and tachycardia.",
      "Alcohol prevents the absorption of metronidazole from the stomach."
    ],
    correctAnswerIndex: 2,
    explanation: "Metronidazole inhibits the acetaldehyde dehydrogenase enzyme in the liver, which is responsible for the second step of alcohol breakdown. Because of this, the highly toxic acetaldehyde intermediate accumulates in the body, which causes a so-called disulfiram-like reaction. Symptoms: intense flushing of the face and neck, throbbing headache, severe nausea, vomiting, sweating, tachycardia, and even collapse. Therefore, during the metronidazole course and for at least 48 hours after its completion, the consumption of alcoholic beverages, or even alcohol-containing mouthwashes or medicines, is strictly prohibited!"
  },
  {
    id: "q11",
    type: "susceptibility",
    questionText: "A 78-year-old immunosuppressed (kidney transplant) male patient is admitted with suspected bacterial meningitis. According to guidelines, empirical treatment after lumbar puncture is started with Ceftriaxone (2x 2g i.v.) and Vancomycin (2x 1g i.v.). What critical additional antibiotic MUST be added to this regimen in this patient group, and why?",
    options: [
      "Metronidazole, to prevent anaerobic brain abscess caused by Bacteroides fragilis.",
      "Ampicillin or Amoxicillin (or TMP-SMX), because Listeria monocytogenes, common in the immunosuppressed and elderly, is naturally resistant to all cephalosporins (including Ceftriaxone).",
      "Ciprofloxacin, because it exerts a synergistic effect against Pseudomonas aeruginosa with Ceftriaxone.",
      "Clarithromycin, to cover atypical neuro-Mycoplasma."
    ],
    correctAnswerIndex: 1,
    explanation: "Listeria monocytogenes is a Gram-positive rod that is an important pathogen of bacterial meningitis in newborns, the elderly (>50-60 years), and immunosuppressed patients. Listeria is naturally (intrinsically) resistant to ALL cephalosporins (including 1st, 2nd, 3rd, and 4th generation agents, including Ceftriaxone and Cefepime)! Therefore, empirical meningitis treatment (Ceftriaxone + Vancomycin) is completely ineffective against Listeria on its own. In this risk group, it is mandatory to add Ampicillin or Amoxicillin (i.v.) to the treatment, as this is the most active first-line agent against it (often combined with Gentamicin for synergistic bactericidal effect). In case of penicillin allergy, TMP-SMX is the chosen alternative.",
    caseData: {
      age: 78,
      gender: "male",
      symptoms: ["Fever", "Neck stiffness", "Drowsiness", "Confusion"],
      vitals: {
        bp: "120/80 mmHg",
        hr: 90,
        temp: "38.8 °C",
        rr: 20
      },
      labs: ["Transplanted kidney (Creatinine: 145 µmol/l)", "CSF: purulent, high protein, low sugar, rod-shaped Gram-positive bacteria"]
    }
  },
  {
    id: "q12",
    type: "pharmacology",
    questionText: "A 35-year-old female patient presents with recurring, painful urination. Urine lab results show remarkably high urine pH (pH: 8.2), and culture confirms Proteus mirabilis infection. What clinical complication is the patient at high risk for with this pathogen, and what explains this?",
    options: [
      "Acute renal failure due to direct obstruction of the renal tubules.",
      "Development of struvite (magnesium ammonium phosphate) stones in the renal pelvis because Proteus breaks down urea with its strong urease enzyme, alkalizing the urine.",
      "Glomerulonephritis due to immune complex formation with Proteus cell wall antigens.",
      "Interstitial nephritis due to penicillin allergy."
    ],
    correctAnswerIndex: 1,
    explanation: "A characteristic of Proteus mirabilis (and some other pathogens like Klebsiella or Pseudomonas) is that it produces large amounts of urease enzyme. The urease enzyme breaks down the urea in the urine into carbon dioxide and ammonia. Ammonia reacts with water to form ammonium hydroxide, which drastically raises urine pH (alkaline direction, often pH > 7.5-8.0). In an alkaline medium, the solubility of magnesium, ammonium, and phosphate ions decreases significantly, leading to the rapid precipitation and growth of struvite (magnesium ammonium phosphate) stones. These stones often fill the entire renal pelvis (staghorn calculi), serve as a bacterial reservoir, and require surgical removal or extensive treatment.",
    caseData: {
      age: 35,
      gender: "female",
      symptoms: ["Dysuria", "Suprapubic pain", "Cloudy, foul-smelling urine"],
      vitals: {
        bp: "115/75 mmHg",
        hr: 76,
        temp: "37.2 °C",
        rr: 14
      },
      labs: ["Urine pH: 8.2", "Urine sediment: abundant triple phosphate crystals", "Culture: Proteus mirabilis > 10^5 CFU/ml"]
    }
  },
  {
    id: "q13",
    type: "empirical",
    questionText: "In a 54-year-old patient, hemoculture confirms Enterobacter cloacae. Based on the laboratory susceptibility report (antibiogram), the bacterium is susceptible to Ceftriaxone (3rd generation cephalosporin) and Cefepime (4th generation cephalosporin). Why is Ceftriaxon monotherapy still contraindicated in this case, and what is the correct choice?",
    options: [
      "Because Ceftriaxone cannot reach an adequate blood level, so it does not work in systemic infections.",
      "Because Enterobacter cloacae possesses chromosomally encoded AmpC beta-lactamase, which can be derepressed during Ceftriaxone (or other 3rd generation cephalosporin) exposure (switched to a high level through mutation), leading to rapid resistance and therapeutic failure. Cefepime or Carbapenem should be chosen instead.",
      "Because Ceftriaxone has too strong side effects in Enterobacter.",
      "Because Enterobacter cloacae can only be cured with orally taken amoxicillin."
    ],
    correctAnswerIndex: 1,
    explanation: "Certain Gram-negative bacteria (especially the 'SPACE' or 'MYSPACE' group: Morganella, Yersinia, Serratia, Pseudomonas, Acinetobacter, Citrobacter, Enterobacter) possess a chromosomal AmpC beta-lactamase gene. In the baseline state (wild-type strains), this enzyme is produced in negligible amounts, so in vitro (in the lab test) the bacterium may appear susceptible to 3rd generation cephalosporins (e.g., Ceftriaxone). However, during Ceftriaxone treatment, some bacteria are derepressed through mutation (the inhibitor gene is switched off) and begin to produce AmpC in huge amounts, which breaks down Ceftriaxone. This results in severe therapeutic failure for the patient on the 3rd-4th day of treatment. 4th generation Cefepime or Carbapenems (Meropenem) are stable against the AmpC enzyme, so these are the agents of choice in systemic Enterobacter infections."
  },
  {
    id: "q14",
    type: "empirical",
    questionText: "A 21-year-old university student presents to the GP with dry cough, moderate fever (37.8 °C), headache, and marked weakness. There is no significant auscultatory finding over the lungs, but the chest X-ray shows surprisingly extensive, bilateral reticular (interstitial) infiltration ('dissociation' between clinical presentation and X-ray). Which pathogen is most likely, and what therapy should be started?",
    options: [
      "Streptococcus pneumoniae - Amoxicillin monotherapy.",
      "Mycoplasma pneumoniae - Macrolide (e.g., Clarithromycin) or Tetracycline (Doxycycline).",
      "Staphylococcus aureus - Cefazolin intravenously.",
      "Pseudomonas aeruginosa - Ciprofloxacin orally."
    ],
    correctAnswerIndex: 1,
    explanation: "The patient's clinical picture (young age, dry cough, moderate fever, but severe chest X-ray finding: dissociation between clinical symptoms and X-ray image) points to classic atypical pneumonia ('walking pneumonia'), the most common pathogen of which is Mycoplasma pneumoniae. Since Mycoplasma does not have a peptidoglycan cell wall, all beta-lactams (like Amoxicillin, Cefazolin, Ceftriaxone) are 100% ineffective against it! Treatment requires an antibiotic that is also effective intracellularly and inhibits protein synthesis, such as macrolides (Clarithromycin, Azithromycin) or tetracyclines (Doxycycline). In young adults, Doxycycline or macrolides are the first-line empirical agents in such a clinical picture."
  },
  {
    id: "q15",
    type: "pharmacology",
    questionText: "In a 48-year-old male sheep farmer, high fever, atypical pneumonia, and moderate hepatitis are confirmed. Due to suspected zoonosis, serology identifies Coxiella burnetii infection (Q-fever). Why is Coxiella burnetii's antibiotic susceptibility and intracellular survival special?",
    options: [
      "Because it can only multiply in the cell nucleus, so it can only be inhibited by nucleoside analogs.",
      "Because as an obligate intracellular pathogen, it lives in the acidic environment of the host cell's phagolysosome. The acidic pH inhibits Doxycycline, so in chronic cases (e.g., Q-fever endocarditis), Doxycycline + Hydroxychloroquine combination is necessary to alkalize the lysosome pH.",
      "Because it injects beta-lactamase into the extracellular space, which breaks down surrounding antibiotics.",
      "Because it has no cell membrane, so no lipophilic antibiotic can enter the bacterium."
    ],
    correctAnswerIndex: 1,
    explanation: "Coxiella burnetii is the pathogen of Q-fever, an obligate intracellular bacterium. Its specialty is that it lives and multiplies inside the phagolysosomes of macrophages, which is a specifically acidic (pH 4.5-5.0) organelle. This acidic environment inhibits the activity of most antibiotics (including Doxycycline). In acute Q-fever, Doxycycline is effective on its own, but in chronic form (which typically causes Q-fever endocarditis with negative hemoculture), Hydroxychloroquine (a weak base) must be added alongside Doxycycline. Hydroxychloroquine accumulates in the phagolysosome, raises its pH (alkalizes the environment), which restores the bactericidal activity of Doxycycline and allows the elimination of the pathogen. This combined treatment often lasts for 18-24 months."
  }
];