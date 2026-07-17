export const renalDoseData_EN = [
    {
        "antibiotic_name": "Penicillin G",
        "gfr_gt_50": { "dose": "1-3 million U", "interval": "q4-6h", "notes": "No adjustment for CrCl >30 ml/min." },
        "gfr_30_50": { "dose": "1-3 million U", "interval": "q6-8h", "notes": "" },
        "gfr_10_29": { "dose": "1-3 million U", "interval": "q8-12h", "notes": "" },
        "gfr_lt_10": { "dose": "1-2 million U", "interval": "q12h", "notes": "" },
        "hd": { "dose": "1-2 million U", "interval": "q12h", "notes": "Post-dialysis dose." },
        "crrt": { "dose": "2-4 million U", "interval": "q6h", "notes": "" }
    },
    {
        "antibiotic_name": "Amoxicillin",
        "gfr_gt_50": { "dose": "250-500 mg", "interval": "q8h", "notes": "No adjustment for CrCl >30 ml/min." },
        "gfr_30_50": { "dose": "250-500 mg", "interval": "q12h", "notes": "" },
        "gfr_10_29": { "dose": "250-500 mg", "interval": "q12h", "notes": "" },
        "gfr_lt_10": { "dose": "250-500 mg", "interval": "q24h", "notes": "" },
        "hd": { "dose": "250-500 mg", "interval": "q24h", "notes": "Post-dialysis dose." },
        "crrt": { "dose": "500-1000 mg", "interval": "q8-12h", "notes": "" }
    },
    {
        "antibiotic_name": "Piperacillin-tazobactam",
        "gfr_gt_50": { "dose": "4.5g", "interval": "q6h", "notes": "For CrCl >40 ml/min." },
        "gfr_30_50": { "dose": "3.375g", "interval": "q6h", "notes": "CrCl 20-40 ml/min range." },
        "gfr_10_29": { "dose": "2.25g", "interval": "q6h", "notes": "CrCl <20 ml/min range." },
        "gfr_lt_10": { "dose": "2.25g", "interval": "q8h", "notes": "" },
        "hd": { "dose": "2.25g", "interval": "q8h", "notes": "Post-dialysis dose." },
        "crrt": { "dose": "3.375g", "interval": "q8h", "notes": "" }
    },
    {
        "antibiotic_name": "Meropenem",
        "gfr_gt_50": { "dose": "1-2g", "interval": "q8h", "notes": "No adjustment." },
        "gfr_30_50": { "dose": "1g", "interval": "q12h", "notes": "CrCl 26-50 ml/min range." },
        "gfr_10_29": { "dose": "500mg", "interval": "q12h", "notes": "CrCl 10-25 ml/min range." },
        "gfr_lt_10": { "dose": "500mg", "interval": "q24h", "notes": "" },
        "hd": { "dose": "500mg", "interval": "q24h", "notes": "Post-dialysis dose." },
        "crrt": { "dose": "1g", "interval": "q8-12h", "notes": "" }
    },
    {
        "antibiotic_name": "Vancomycin",
        "gfr_gt_50": { "dose": "15-20 mg/kg", "interval": "q8-12h", "notes": "For CrCl >60 ml/min." },
        "gfr_30_50": { "dose": "15-20 mg/kg", "interval": "q12-24h", "notes": "CrCl 40-59 ml/min range." },
        "gfr_10_29": { "dose": "15-20 mg/kg", "interval": "q24-48h", "notes": "CrCl 20-39 ml/min range." },
        "gfr_lt_10": { "dose": "10-15 mg/kg", "interval": "q48-72h", "notes": "" },
        "hd": { "dose": "7.5-10 mg/kg", "interval": "after HD", "notes": "Loading dose: 20-25 mg/kg." },
        "crrt": { "dose": "7.5-10 mg/kg", "interval": "q24-48h", "notes": "Loading dose: 20-25 mg/kg." }
    },
    {
        "antibiotic_name": "Gentamicin",
        "gfr_gt_50": { "dose": "5-7 mg/kg", "interval": "q24h", "notes": "For CrCl >60 ml/min." },
        "gfr_30_50": { "dose": "4-6 mg/kg", "interval": "q36h", "notes": "CrCl 40-59 ml/min range." },
        "gfr_10_29": { "dose": "3-4 mg/kg", "interval": "q48h", "notes": "CrCl 20-39 ml/min range." },
        "gfr_lt_10": { "dose": "2 mg/kg", "interval": "level-based", "notes": "Plasma level monitoring." },
        "hd": { "dose": "2 mg/kg", "interval": "after HD", "notes": "Post-dialysis dose." },
        "crrt": { "dose": "2.5 mg/kg", "interval": "q48h", "notes": "" }
    },
    {
        "antibiotic_name": "Ciprofloxacin",
        "gfr_gt_50": { "dose": "400mg IV", "interval": "q12h", "notes": "No adjustment." },
        "gfr_30_50": { "dose": "400mg IV", "interval": "q12h", "notes": "" },
        "gfr_10_29": { "dose": "400mg IV", "interval": "q24h", "notes": "" },
        "gfr_lt_10": { "dose": "200mg IV", "interval": "q24h", "notes": "" },
        "hd": { "dose": "200mg IV", "interval": "q24h", "notes": "Post-dialysis dose." },
        "crrt": { "dose": "400mg IV", "interval": "q12h", "notes": "" }
    },
    {
        "antibiotic_name": "Ticarcillin-clavulanate",
        "gfr_gt_50": { "dose": "3.1g", "interval": "q4h", "notes": "For CrCl >60 ml/min." },
        "gfr_30_50": { "dose": "2g", "interval": "q4h", "notes": "CrCl 30-60 ml/min range." },
        "gfr_10_29": { "dose": "2g", "interval": "q8h", "notes": "CrCl 10-30 ml/min range." },
        "gfr_lt_10": { "dose": "2g", "interval": "q12h", "notes": "" },
        "hd": { "dose": "2g", "interval": "q12h", "notes": "Post-dialysis dose." },
        "crrt": { "dose": "3.1g", "interval": "q8h", "notes": "" }
    },
    {
        "antibiotic_name": "Cefazolin",
        "gfr_gt_50": { "dose": "1-2g", "interval": "q8h", "notes": "No adjustment." },
        "gfr_30_50": { "dose": "1-2g", "interval": "q12h", "notes": "" },
        "gfr_10_29": { "dose": "1g", "interval": "q24h", "notes": "" },
        "gfr_lt_10": { "dose": "0.5-1g", "interval": "q24h", "notes": "" },
        "hd": { "dose": "1-2g", "interval": "q24h", "notes": "Post-dialysis dose." },
        "crrt": { "dose": "2g", "interval": "q12h", "notes": "" }
    },
    {
        "antibiotic_name": "Ceftriaxone",
        "gfr_gt_50": { "dose": "1-2g", "interval": "q12-24h", "notes": "No adjustment needed." },
        "gfr_30_50": { "dose": "No adjustment", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "No adjustment", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "No adjustment", "interval": "", "notes": "" },
        "hd": { "dose": "No adjustment", "interval": "", "notes": "" },
        "crrt": { "dose": "No adjustment", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Cefepime",
        "gfr_gt_50": { "dose": "2g", "interval": "q8-12h", "notes": "No adjustment." },
        "gfr_30_50": { "dose": "2g", "interval": "q24h", "notes": "" },
        "gfr_10_29": { "dose": "1g", "interval": "q24h", "notes": "" },
        "gfr_lt_10": { "dose": "500mg", "interval": "q24h", "notes": "" },
        "hd": { "dose": "500mg", "interval": "q24h", "notes": "1g loading dose, then post-dialysis dose." },
        "crrt": { "dose": "2g", "interval": "q12h", "notes": "" }
    },
    {
        "antibiotic_name": "Linezolid",
        "gfr_gt_50": { "dose": "600mg", "interval": "q12h", "notes": "No adjustment needed." },
        "gfr_30_50": { "dose": "No adjustment", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "No adjustment", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "No adjustment", "interval": "", "notes": "" },
        "hd": { "dose": "No adjustment", "interval": "", "notes": "" },
        "crrt": { "dose": "No adjustment", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Daptomycin",
        "gfr_gt_50": { "dose": "4-6 mg/kg", "interval": "q24h", "notes": "For CrCl >30 ml/min." },
        "gfr_30_50": { "dose": "4-6 mg/kg", "interval": "q24h", "notes": "" },
        "gfr_10_29": { "dose": "4-6 mg/kg", "interval": "q48h", "notes": "" },
        "gfr_lt_10": { "dose": "4-6 mg/kg", "interval": "q48h", "notes": "" },
        "hd": { "dose": "4-6 mg/kg", "interval": "q48h", "notes": "Administer after dialysis." },
        "crrt": { "dose": "6 mg/kg", "interval": "q24h", "notes": "" }
    },
    {
        "antibiotic_name": "Metronidazole",
        "gfr_gt_50": { "dose": "500mg", "interval": "q8h", "notes": "No adjustment needed." },
        "gfr_30_50": { "dose": "No adjustment", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "No adjustment", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "No adjustment", "interval": "", "notes": "Metabolites may accumulate." },
        "hd": { "dose": "Normal dose", "interval": "", "notes": "" },
        "crrt": { "dose": "No adjustment", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Trimethoprim -Sulfamethoxazole (TMP-SMX)",
        "gfr_gt_50": { "dose": "Normal dose", "interval": "q12h", "notes": "For CrCl >30 ml/min." },
        "gfr_30_50": { "dose": "Normal dose", "interval": "q12h", "notes": "" },
        "gfr_10_29": { "dose": "50% dose", "interval": "q12h", "notes": "CrCl 15-30 ml/min range." },
        "gfr_lt_10": { "dose": "Avoid", "interval": "", "notes": "" },
        "hd": { "dose": "50% dose", "interval": "q24h", "notes": "" },
        "crrt": { "dose": "Normal dose", "interval": "q12h", "notes": "" }
    },
    {
        "antibiotic_name": "Cefoxitin",
        "gfr_gt_50": { "dose": "1-2g", "interval": "q6-8h", "notes": "No adjustment." },
        "gfr_30_50": { "dose": "1-2g", "interval": "q8-12h", "notes": "" },
        "gfr_10_29": { "dose": "1-2g", "interval": "q12-24h", "notes": "" },
        "gfr_lt_10": { "dose": "1g", "interval": "q24-48h", "notes": "" },
        "hd": { "dose": "1g", "interval": "q24h", "notes": "Post-dialysis dose." },
        "crrt": { "dose": "1-2g", "interval": "q12h", "notes": "" }
    },
    {
        "antibiotic_name": "Cefalexin",
        "gfr_gt_50": { "dose": "500mg", "interval": "q6h", "notes": "No adjustment." },
        "gfr_30_50": { "dose": "500mg", "interval": "q8-12h", "notes": "" },
        "gfr_10_29": { "dose": "500mg", "interval": "q12h", "notes": "" },
        "gfr_lt_10": { "dose": "250mg", "interval": "q12-24h", "notes": "" },
        "hd": { "dose": "250-500mg", "interval": "after HD", "notes": "Post-dialysis dose." },
        "crrt": { "dose": "500mg", "interval": "q8h", "notes": "" }
    },
    {
        "antibiotic_name": "Cefaclor",
        "gfr_gt_50": { "dose": "250-500mg", "interval": "q8h", "notes": "No adjustment." },
        "gfr_30_50": { "dose": "50% dose", "interval": "q8h", "notes": "" },
        "gfr_10_29": { "dose": "50% dose", "interval": "q12h", "notes": "" },
        "gfr_lt_10": { "dose": "25% dose", "interval": "q12h", "notes": "" },
        "hd": { "dose": "250-500mg", "interval": "after HD", "notes": "Post-dialysis dose." },
        "crrt": { "dose": "Normal dose", "interval": "q8h", "notes": "" }
    },
    {
        "antibiotic_name": "Cefuroxime",
        "gfr_gt_50": { "dose": "750mg-1.5g", "interval": "q8h", "notes": "For CrCl >20 ml/min." },
        "gfr_30_50": { "dose": "750mg-1.5g", "interval": "q8h", "notes": "" },
        "gfr_10_29": { "dose": "750mg", "interval": "q12h", "notes": "" },
        "gfr_lt_10": { "dose": "750mg", "interval": "q24h", "notes": "" },
        "hd": { "dose": "750mg", "interval": "after HD", "notes": "Post-dialysis dose." },
        "crrt": { "dose": "750mg", "interval": "q12h", "notes": "" }
    },
    {
        "antibiotic_name": "Cefotaxime",
        "gfr_gt_50": { "dose": "1-2g", "interval": "q8h", "notes": "No adjustment." },
        "gfr_30_50": { "dose": "50% dose", "interval": "q8h", "notes": "" },
        "gfr_10_29": { "dose": "50% dose", "interval": "q12h", "notes": "" },
        "gfr_lt_10": { "dose": "25% dose", "interval": "q12h", "notes": "" },
        "hd": { "dose": "500mg-1g", "interval": "after HD", "notes": "Post-dialysis dose." },
        "crrt": { "dose": "1-2g", "interval": "q12h", "notes": "" }
    },
    {
        "antibiotic_name": "Ceftazidime",
        "gfr_gt_50": { "dose": "1-2g", "interval": "q8h", "notes": "No adjustment." },
        "gfr_30_50": { "dose": "1g", "interval": "q12h", "notes": "" },
        "gfr_10_29": { "dose": "1g", "interval": "q24h", "notes": "" },
        "gfr_lt_10": { "dose": "500mg", "interval": "q48h", "notes": "" },
        "hd": { "dose": "1g", "interval": "after HD", "notes": "Post-dialysis dose." },
        "crrt": { "dose": "1-2g", "interval": "q12h", "notes": "" }
    },
    {
        "antibiotic_name": "Ceftazidime-avibactam",
        "gfr_gt_50": { "dose": "2.5g", "interval": "q8h", "notes": "No adjustment." },
        "gfr_30_50": { "dose": "1.25g", "interval": "q8h", "notes": "" },
        "gfr_10_29": { "dose": "0.94g", "interval": "q12h", "notes": "GFR 16-30 ml/min range." },
        "gfr_lt_10": { "dose": "0.94g", "interval": "q48h", "notes": "GFR <15 ml/min range." },
        "hd": { "dose": "0.94g", "interval": "after HD", "notes": "Post-dialysis dose." },
        "crrt": { "dose": "1.25g", "interval": "q8h", "notes": "" }
    },
    {
        "antibiotic_name": "Ceftolozane-tazobactam",
        "gfr_gt_50": { "dose": "1.5g", "interval": "q8h", "notes": "No adjustment." },
        "gfr_30_50": { "dose": "750mg", "interval": "q8h", "notes": "" },
        "gfr_10_29": { "dose": "375mg", "interval": "q8h", "notes": "" },
        "gfr_lt_10": { "dose": "75mg", "interval": "q8h", "notes": "225mg loading dose." },
        "hd": { "dose": "75mg", "interval": "q8h", "notes": "225mg loading dose, then post-dialysis dose." },
        "crrt": { "dose": "750mg", "interval": "q8h", "notes": "" }
    },
    {
        "antibiotic_name": "Ceftaroline-avibactam",
        "gfr_gt_50": { "dose": "600mg", "interval": "q12h", "notes": "No adjustment." },
        "gfr_30_50": { "dose": "400mg", "interval": "q12h", "notes": "" },
        "gfr_10_29": { "dose": "300mg", "interval": "q12h", "notes": "" },
        "gfr_lt_10": { "dose": "200mg", "interval": "q12h", "notes": "" },
        "hd": { "dose": "200mg", "interval": "q12h", "notes": "Post-dialysis dose." },
        "crrt": { "dose": "400mg", "interval": "q12h", "notes": "" }
    },
    {
        "antibiotic_name": "Cefepime-taniborbactam",
        "gfr_gt_50": { "dose": "2.5g", "interval": "q8h", "notes": "For CrCl >50 ml/min." },
        "gfr_30_50": { "dose": "1.25g", "interval": "q8h", "notes": "CrCl 30-49 ml/min range." },
        "gfr_10_29": { "dose": "0.94g", "interval": "q8h", "notes": "CrCl 15-29 ml/min range." },
        "gfr_lt_10": { "dose": "0.625g", "interval": "q8h", "notes": "" },
        "hd": { "dose": "0.625g", "interval": "after HD", "notes": "Post-dialysis dose." },
        "crrt": { "dose": "1.25g", "interval": "q8h", "notes": "" }
    },
    {
        "antibiotic_name": "Cefiderocol",
        "gfr_gt_50": { "dose": "2g", "interval": "q8h", "notes": "No adjustment." },
        "gfr_30_50": { "dose": "2g", "interval": "q8h", "notes": "GFR 30-59 ml/min range." },
        "gfr_10_29": { "dose": "1.5g", "interval": "q8h", "notes": "GFR 15-29 ml/min range." },
        "gfr_lt_10": { "dose": "1g", "interval": "q12h", "notes": "" },
        "hd": { "dose": "1g", "interval": "after HD", "notes": "Post-dialysis dose." },
        "crrt": { "dose": "2g", "interval": "q8h", "notes": "" }
    },
    {
        "antibiotic_name": "Penicillin V",
        "gfr_gt_50": { "dose": "250-500mg", "interval": "q6-8h", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Use not recommended (CrCl <10 ml/min).", "interval": "", "notes": "" },
        "hd": { "dose": "Use not recommended.", "interval": "", "notes": "" },
        "crrt": { "dose": "Use not recommended.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Oxacillin",
        "gfr_gt_50": { "dose": "1-2g", "interval": "q4-6h", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "hd": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "crrt": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Amoxicillin-clavulanic acid",
        "gfr_gt_50": { "dose": "1.2g IV", "interval": "every 8 hours", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "1.2g IV", "interval": "every 12 hours", "notes": "" },
        "gfr_lt_10": { "dose": "1.2g IV", "interval": "every 24 hours", "notes": "CrCl <10 ml/min" },
        "hd": { "dose": "1.2g IV", "interval": "every 24 hours", "notes": "supplemental dose after dialysis." },
        "crrt": { "dose": "Normal dose can be given.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Ampicillin",
        "gfr_gt_50": { "dose": "1-2g", "interval": "every 4-6 hours", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "Normal dose", "interval": "every 8 hours", "notes": "" },
        "gfr_10_29": { "dose": "Normal dose", "interval": "every 12 hours", "notes": "" },
        "gfr_lt_10": { "dose": "Normal dose", "interval": "every 12-24 hours", "notes": "CrCl <10 ml/min" },
        "hd": { "dose": "Supplemental dose needed after dialysis.", "interval": "", "notes": "" },
        "crrt": { "dose": "Normal dose can be given.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Ampicillin-sulbactam",
        "gfr_gt_50": { "dose": "1.5-3g", "interval": "every 6 hours", "notes": "No adjustment needed for CrCl >30." },
        "gfr_30_50": { "dose": "No adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "1.5-3g", "interval": "every 12 hours", "notes": "CrCl 15-29 ml/min" },
        "gfr_lt_10": { "dose": "1.5-3g", "interval": "every 24 hours", "notes": "CrCl <15 ml/min" },
        "hd": { "dose": "1.5-3g", "interval": "every 24 hours", "notes": "supplemental dose after dialysis." },
        "crrt": { "dose": "Normal dose can be given.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Flucloxacillin",
        "gfr_gt_50": { "dose": "1-2g", "interval": "q6h", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "hd": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "crrt": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Imipenem-cilastatin",
        "gfr_gt_50": { "dose": "500mg", "interval": "every 6 hours", "notes": "No adjustment needed for CrCl >50." },
        "gfr_30_50": { "dose": "500mg", "interval": "every 8 hours", "notes": "CrCl 30-50 ml/min" },
        "gfr_10_29": { "dose": "500mg", "interval": "every 12 hours", "notes": "CrCl 10-29 ml/min" },
        "gfr_lt_10": { "dose": "250mg", "interval": "every 12 hours", "notes": "CrCl <10 ml/min" },
        "hd": { "dose": "250-500mg", "interval": "every 12 hours", "notes": "supplemental dose after dialysis." },
        "crrt": { "dose": "Dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Ertapenem",
        "gfr_gt_50": { "dose": "1g", "interval": "every 24 hours", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "500mg", "interval": "every 24 hours", "notes": "CrCl <30 ml/min" },
        "gfr_lt_10": { "dose": "500mg", "interval": "every 24 hours", "notes": "CrCl <30 ml/min" },
        "hd": { "dose": "Supplemental dose needed after dialysis (if last dose was within 6 hours).", "interval": "", "notes": "" },
        "crrt": { "dose": "Normal dose can be given.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Doripenem",
        "gfr_gt_50": { "dose": "500mg", "interval": "every 8 hours", "notes": "No adjustment needed for CrCl >50." },
        "gfr_30_50": { "dose": "250mg", "interval": "every 8 hours", "notes": "CrCl 30-50 ml/min" },
        "gfr_10_29": { "dose": "250mg", "interval": "every 12 hours", "notes": "CrCl <30 ml/min" },
        "gfr_lt_10": { "dose": "250mg", "interval": "every 12 hours", "notes": "CrCl <30 ml/min" },
        "hd": { "dose": "250mg", "interval": "every 12 hours", "notes": "supplemental dose after dialysis." },
        "crrt": { "dose": "Dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Imipenem-cilastatin-relebactam",
        "gfr_gt_50": { "dose": "500mg/250mg/250mg", "interval": "q6h", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "400mg/200mg/100mg", "interval": "", "notes": "GFR 30-59 ml/min" },
        "gfr_10_29": { "dose": "300mg/150mg/75mg", "interval": "", "notes": "GFR 15-29 ml/min" },
        "gfr_lt_10": { "dose": "200mg/100mg/50mg", "interval": "", "notes": "GFR <15 ml/min" },
        "hd": { "dose": "Supplemental dose needed after dialysis.", "interval": "", "notes": "" },
        "crrt": { "dose": "Dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Meropenem-vaborbactam",
        "gfr_gt_50": { "dose": "4g", "interval": "every 8 hours", "notes": "No adjustment needed for CrCl >50." },
        "gfr_30_50": { "dose": "2g", "interval": "every 8 hours", "notes": "CrCl 30-49 ml/min" },
        "gfr_10_29": { "dose": "1g", "interval": "every 8 hours", "notes": "CrCl 15-29 ml/min" },
        "gfr_lt_10": { "dose": "1g", "interval": "every 12 hours", "notes": "CrCl <15 ml/min" },
        "hd": { "dose": "1g", "interval": "every 12 hours", "notes": "supplemental dose after dialysis." },
        "crrt": { "dose": "Dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Nalidixic acid",
        "gfr_gt_50": { "dose": "1g", "interval": "q6h", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "Use not recommended.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Use not recommended.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Use not recommended.", "interval": "", "notes": "" },
        "hd": { "dose": "Use not recommended.", "interval": "", "notes": "" },
        "crrt": { "dose": "Use not recommended.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Ofloxacin",
        "gfr_gt_50": { "dose": "200-400mg", "interval": "every 12 hours", "notes": "No adjustment needed for CrCl >50." },
        "gfr_30_50": { "dose": "200-400mg", "interval": "every 24 hours", "notes": "CrCl 10-50 ml/min" },
        "gfr_10_29": { "dose": "200-400mg", "interval": "every 24 hours", "notes": "CrCl 10-50 ml/min" },
        "gfr_lt_10": { "dose": "100-200mg", "interval": "every 24 hours", "notes": "CrCl <10 ml/min" },
        "hd": { "dose": "100-200mg", "interval": "every 24 hours", "notes": "after dialysis." },
        "crrt": { "dose": "Dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Levofloxacin",
        "gfr_gt_50": { "dose": "750mg", "interval": "every 24 hours", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "750mg initial, then 750mg", "interval": "every 48 hours", "notes": "GFR 20-49 ml/min" },
        "gfr_10_29": { "dose": "750mg initial, then 500mg", "interval": "every 48 hours", "notes": "GFR <20 ml/min" },
        "gfr_lt_10": { "dose": "750mg initial, then 500mg", "interval": "every 48 hours", "notes": "GFR <20 ml/min" },
        "hd": { "dose": "500mg initial, then 250mg", "interval": "every 48 hours", "notes": "after dialysis." },
        "crrt": { "dose": "Dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Moxifloxacin",
        "gfr_gt_50": { "dose": "400mg", "interval": "every 24 hours", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "hd": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "crrt": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Delafloxacin",
        "gfr_gt_50": { "dose": "300mg IV", "interval": "every 12 hours", "notes": "No adjustment needed for CrCl >30." },
        "gfr_30_50": { "dose": "No adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "200mg IV", "interval": "every 12 hours", "notes": "CrCl 15-29 ml/min" },
        "gfr_lt_10": { "dose": "150mg IV", "interval": "every 12 hours", "notes": "CrCl <15 ml/min" },
        "hd": { "dose": "150mg IV", "interval": "every 12 hours", "notes": "supplemental dose after dialysis." },
        "crrt": { "dose": "Dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Telavancin",
        "gfr_gt_50": { "dose": "10mg/kg", "interval": "every 24 hours", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "7.5mg/kg", "interval": "every 24 hours", "notes": "GFR 30-50 ml/min" },
        "gfr_10_29": { "dose": "10mg/kg", "interval": "every 48 hours", "notes": "GFR <30 ml/min" },
        "gfr_lt_10": { "dose": "10mg/kg", "interval": "every 48 hours", "notes": "GFR <30 ml/min" },
        "hd": { "dose": "10mg/kg", "interval": "every 48 hours", "notes": "after dialysis." },
        "crrt": { "dose": "Dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Dalbavancin",
        "gfr_gt_50": { "dose": "1500mg single dose, or 1000mg then 500mg after 1 week", "interval": "", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "750mg single dose, then 375mg after 1 week", "interval": "", "notes": "GFR <30 ml/min" },
        "gfr_lt_10": { "dose": "750mg single dose, then 375mg after 1 week", "interval": "", "notes": "GFR <30 ml/min" },
        "hd": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "crrt": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Oritavancin",
        "gfr_gt_50": { "dose": "1200mg", "interval": "single dose", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "hd": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "crrt": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Piperacillin",
        "gfr_gt_50": { "dose": "4g", "interval": "every 6 hours", "notes": "No adjustment needed for CrCl >40." },
        "gfr_30_50": { "dose": "4g", "interval": "every 8 hours", "notes": "CrCl 20-40 ml/min" },
        "gfr_10_29": { "dose": "4g", "interval": "every 8 hours", "notes": "CrCl 20-40 ml/min" },
        "gfr_lt_10": { "dose": "4g", "interval": "every 12 hours", "notes": "CrCl <20 ml/min" },
        "hd": { "dose": "2g", "interval": "every 8 hours", "notes": "supplemental dose after dialysis." },
        "crrt": { "dose": "Dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Aztreonam",
        "gfr_gt_50": { "dose": "1-2g", "interval": "q8-12h", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "50-75% dose.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "50-75% dose.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "25% dose", "interval": "", "notes": "CrCl <10 ml/min" },
        "hd": { "dose": "25% supplemental dose after dialysis.", "interval": "", "notes": "" },
        "crrt": { "dose": "Dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Amikacin",
        "gfr_gt_50": { "dose": "15 mg/kg", "interval": "q24h", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "Dose reduction or interval extension", "interval": "", "notes": "based on plasma levels." },
        "gfr_10_29": { "dose": "Dose reduction or interval extension", "interval": "", "notes": "based on plasma levels." },
        "gfr_lt_10": { "dose": "Dose reduction or interval extension", "interval": "", "notes": "based on plasma levels." },
        "hd": { "dose": "10-15 mg/kg supplemental dose after dialysis.", "interval": "", "notes": "" },
        "crrt": { "dose": "Dose adjustment needed", "interval": "", "notes": "plasma level monitoring recommended." }
    },
    {
        "antibiotic_name": "Plazomicin",
        "gfr_gt_50": { "dose": "15 mg/kg", "interval": "q24h", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "Dose reduction or interval extension", "interval": "", "notes": "based on plasma levels." },
        "gfr_10_29": { "dose": "Dose reduction or interval extension", "interval": "", "notes": "based on plasma levels." },
        "gfr_lt_10": { "dose": "Dose reduction or interval extension", "interval": "", "notes": "based on plasma levels." },
        "hd": { "dose": "7.5 mg/kg supplemental dose after dialysis.", "interval": "", "notes": "" },
        "crrt": { "dose": "Dose adjustment needed", "interval": "", "notes": "plasma level monitoring recommended." }
    },
    {
        "antibiotic_name": "Teicoplanin",
        "gfr_gt_50": { "dose": "6-12 mg/kg", "interval": "q12h for 3 doses, then q24h", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "50% dose", "interval": "", "notes": "GFR 30-80 ml/min" },
        "gfr_10_29": { "dose": "33% dose", "interval": "", "notes": "GFR <30 ml/min" },
        "gfr_lt_10": { "dose": "33% dose", "interval": "", "notes": "GFR <30 ml/min" },
        "hd": { "dose": "33% dose on day 10.", "interval": "", "notes": "" },
        "crrt": { "dose": "Normal dose can be given.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Erythromycin",
        "gfr_gt_50": { "dose": "250-500mg", "interval": "q6h", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "50-75% dose", "interval": "", "notes": "CrCl <10 ml/min" },
        "hd": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "crrt": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Azithromycin",
        "gfr_gt_50": { "dose": "500mg", "interval": "q24h", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "hd": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "crrt": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Clarithromycin",
        "gfr_gt_50": { "dose": "500mg", "interval": "q12h", "notes": "No adjustment needed for CrCl >30." },
        "gfr_30_50": { "dose": "No adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "50% dose", "interval": "", "notes": "CrCl <30 ml/min" },
        "gfr_lt_10": { "dose": "50% dose", "interval": "", "notes": "CrCl <30 ml/min" },
        "hd": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "crrt": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Roxithromycin",
        "gfr_gt_50": { "dose": "150-300mg", "interval": "q12h", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "50% dose", "interval": "", "notes": "CrCl <10 ml/min" },
        "hd": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "crrt": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Spiramycin",
        "gfr_gt_50": { "dose": "1-2g", "interval": "q8-12h", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "hd": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "crrt": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Clindamycin",
        "gfr_gt_50": { "dose": "600-900mg", "interval": "q8h", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "hd": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "crrt": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Doxycycline",
        "gfr_gt_50": { "dose": "100mg", "interval": "q12h", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "hd": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "crrt": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Tigecycline",
        "gfr_gt_50": { "dose": "100mg loading, then 50mg", "interval": "q12h", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "hd": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "crrt": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Minocycline",
        "gfr_gt_50": { "dose": "200mg loading, then 100mg", "interval": "q12h", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "hd": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "crrt": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Eravacycline",
        "gfr_gt_50": { "dose": "1 mg/kg", "interval": "q12h", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "hd": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "crrt": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Sarecycline",
        "gfr_gt_50": { "dose": "60-150mg", "interval": "q24h", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "hd": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "crrt": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Omadacycline",
        "gfr_gt_50": { "dose": "100mg IV q12h for 2 doses, then 100mg IV q24h", "interval": "", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "hd": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "crrt": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Tedizolid",
        "gfr_gt_50": { "dose": "200mg", "interval": "q24h", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "hd": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "crrt": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Quinupristin-dalfopristin",
        "gfr_gt_50": { "dose": "7.5 mg/kg", "interval": "q8-12h", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "hd": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "crrt": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Chloramphenicol",
        "gfr_gt_50": { "dose": "50 mg/kg/day", "interval": "in 4 divided doses", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "hd": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "crrt": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Fosfomycin",
        "gfr_gt_50": { "dose": "4-6g", "interval": "q8h", "notes": "No adjustment needed for CrCl >40." },
        "gfr_30_50": { "dose": "70-80% dose", "interval": "", "notes": "CrCl 20-39 ml/min" },
        "gfr_10_29": { "dose": "60-70% dose", "interval": "", "notes": "CrCl 10-19 ml/min" },
        "gfr_lt_10": { "dose": "50% dose", "interval": "", "notes": "CrCl <10 ml/min" },
        "hd": { "dose": "Supplemental dose needed after dialysis.", "interval": "", "notes": "" },
        "crrt": { "dose": "Dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Nitrofurantoin",
        "gfr_gt_50": { "dose": "50-100mg", "interval": "q6h", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Avoid", "interval": "", "notes": "GFR <30 ml/min" },
        "gfr_lt_10": { "dose": "Avoid", "interval": "", "notes": "GFR <30 ml/min" },
        "hd": { "dose": "Avoid.", "interval": "", "notes": "" },
        "crrt": { "dose": "Avoid.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Rifampin",
        "gfr_gt_50": { "dose": "600mg", "interval": "q24h", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "hd": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "crrt": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Rifabutin",
        "gfr_gt_50": { "dose": "300mg", "interval": "q24h", "notes": "No adjustment needed for CrCl >50." },
        "gfr_30_50": { "dose": "50% dose", "interval": "", "notes": "CrCl <50 ml/min" },
        "gfr_10_29": { "dose": "50% dose", "interval": "", "notes": "CrCl <50 ml/min" },
        "gfr_lt_10": { "dose": "50% dose", "interval": "", "notes": "CrCl <50 ml/min" },
        "hd": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "crrt": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Rifaximin",
        "gfr_gt_50": { "dose": "200-550mg", "interval": "q8-12h", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "hd": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "crrt": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Polymyxin B",
        "gfr_gt_50": { "dose": "1.25-1.5 mg/kg", "interval": "every 12 hours", "notes": "No adjustment needed for CrCl >80." },
        "gfr_30_50": { "dose": "1 mg/kg", "interval": "every 12 hours", "notes": "CrCl 20-49 ml/min" },
        "gfr_10_29": { "dose": "1 mg/kg", "interval": "every 12 hours", "notes": "CrCl 20-49 ml/min" },
        "gfr_lt_10": { "dose": "1 mg/kg", "interval": "every 24 hours", "notes": "CrCl <20 ml/min" },
        "hd": { "dose": "1 mg/kg", "interval": "every 48 hours", "notes": "supplemental dose after dialysis." },
        "crrt": { "dose": "Dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Bacitracin",
        "gfr_gt_50": { "dose": "No dose adjustment needed (topical).", "interval": "", "notes": "" },
        "gfr_30_50": { "dose": "No dose adjustment needed (topical).", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "No dose adjustment needed (topical).", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "No dose adjustment needed (topical).", "interval": "", "notes": "" },
        "hd": { "dose": "No dose adjustment needed (topical).", "interval": "", "notes": "" },
        "crrt": { "dose": "No dose adjustment needed (topical).", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Colistin",
        "gfr_gt_50": { "dose": "2.5-5 mg/kg/day", "interval": "in 2-4 divided doses", "notes": "No adjustment needed for CrCl >80." },
        "gfr_30_50": { "dose": "1.5 mg/kg", "interval": "every 12 hours", "notes": "CrCl 30-49 ml/min" },
        "gfr_10_29": { "dose": "1.5 mg/kg", "interval": "every 24 hours", "notes": "CrCl <30 ml/min" },
        "gfr_lt_10": { "dose": "1.5 mg/kg", "interval": "every 24 hours", "notes": "CrCl <30 ml/min" },
        "hd": { "dose": "1.5 mg/kg", "interval": "every 48 hours", "notes": "supplemental dose after dialysis." },
        "crrt": { "dose": "Dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Fluconazole",
        "gfr_gt_50": { "dose": "200-800mg", "interval": "q24h", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "50% dose.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "50% dose.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "50% dose.", "interval": "", "notes": "" },
        "hd": { "dose": "Normal dose after dialysis.", "interval": "", "notes": "" },
        "crrt": { "dose": "Normal dose can be given.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Voriconazole",
        "gfr_gt_50": { "dose": "6 mg/kg loading, then 4 mg/kg", "interval": "q12h", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "hd": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "crrt": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Caspofungin",
        "gfr_gt_50": { "dose": "70mg loading, then 50mg", "interval": "q24h", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "hd": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "crrt": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Amphotericin B",
        "gfr_gt_50": { "dose": "0.25-1.5 mg/kg/day", "interval": "", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "hd": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "crrt": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Vancomycin (inhalation)",
        "gfr_gt_50": { "dose": "125-250mg", "interval": "q12h", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "hd": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "crrt": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Tobramycin (inhalation)",
        "gfr_gt_50": { "dose": "300mg", "interval": "q12h", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "hd": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "crrt": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Lefamulin",
        "gfr_gt_50": { "dose": "150mg IV q12h or 600mg PO q12h", "interval": "", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "hd": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "crrt": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Mupirocin",
        "gfr_gt_50": { "dose": "No dose adjustment needed (topical).", "interval": "", "notes": "" },
        "gfr_30_50": { "dose": "No dose adjustment needed (topical).", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "No dose adjustment needed (topical).", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "No dose adjustment needed (topical).", "interval": "", "notes": "" },
        "hd": { "dose": "No dose adjustment needed (topical).", "interval": "", "notes": "" },
        "crrt": { "dose": "No dose adjustment needed (topical).", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Fusidic acid",
        "gfr_gt_50": { "dose": "500mg", "interval": "q8h", "notes": "No dose adjustment needed." },
        "gfr_30_50": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "hd": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" },
        "crrt": { "dose": "No dose adjustment needed.", "interval": "", "notes": "" }
    }
]