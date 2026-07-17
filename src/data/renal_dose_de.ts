export const renalDoseData_DE = [
    {
        "antibiotic_name": "Penicillin G",
        "gfr_gt_50": { "dose": "1-3 Millionen IE", "interval": "q4-6h", "notes": "Keine Anpassung für CrCl >30 ml/min." },
        "gfr_30_50": { "dose": "1-3 Millionen IE", "interval": "q6-8h", "notes": "" },
        "gfr_10_29": { "dose": "1-3 Millionen IE", "interval": "q8-12h", "notes": "" },
        "gfr_lt_10": { "dose": "1-2 Millionen IE", "interval": "q12h", "notes": "" },
        "hd": { "dose": "1-2 Millionen IE", "interval": "q12h", "notes": "Dosis nach Dialyse." },
        "crrt": { "dose": "2-4 Millionen IE", "interval": "q6h", "notes": "" }
    },
    {
        "antibiotic_name": "Amoxicillin",
        "gfr_gt_50": { "dose": "250-500 mg", "interval": "q8h", "notes": "Keine Anpassung für CrCl >30 ml/min." },
        "gfr_30_50": { "dose": "250-500 mg", "interval": "q12h", "notes": "" },
        "gfr_10_29": { "dose": "250-500 mg", "interval": "q12h", "notes": "" },
        "gfr_lt_10": { "dose": "250-500 mg", "interval": "q24h", "notes": "" },
        "hd": { "dose": "250-500 mg", "interval": "q24h", "notes": "Dosis nach Dialyse." },
        "crrt": { "dose": "500-1000 mg", "interval": "q8-12h", "notes": "" }
    },
    {
        "antibiotic_name": "Piperacillin-Tazobactam",
        "gfr_gt_50": { "dose": "4.5g", "interval": "q6h", "notes": "Für CrCl >40 ml/min." },
        "gfr_30_50": { "dose": "3.375g", "interval": "q6h", "notes": "CrCl 20-40 ml/min Bereich." },
        "gfr_10_29": { "dose": "2.25g", "interval": "q6h", "notes": "CrCl <20 ml/min Bereich." },
        "gfr_lt_10": { "dose": "2.25g", "interval": "q8h", "notes": "" },
        "hd": { "dose": "2.25g", "interval": "q8h", "notes": "Dosis nach Dialyse." },
        "crrt": { "dose": "3.375g", "interval": "q8h", "notes": "" }
    },
    {
        "antibiotic_name": "Meropenem",
        "gfr_gt_50": { "dose": "1-2g", "interval": "q8h", "notes": "Keine Anpassung." },
        "gfr_30_50": { "dose": "1g", "interval": "q12h", "notes": "CrCl 26-50 ml/min Bereich." },
        "gfr_10_29": { "dose": "500mg", "interval": "q12h", "notes": "CrCl 10-25 ml/min Bereich." },
        "gfr_lt_10": { "dose": "500mg", "interval": "q24h", "notes": "" },
        "hd": { "dose": "500mg", "interval": "q24h", "notes": "Dosis nach Dialyse." },
        "crrt": { "dose": "1g", "interval": "q8-12h", "notes": "" }
    },
    {
        "antibiotic_name": "Vancomycin",
        "gfr_gt_50": { "dose": "15-20 mg/kg", "interval": "q8-12h", "notes": "Für CrCl >60 ml/min." },
        "gfr_30_50": { "dose": "15-20 mg/kg", "interval": "q12-24h", "notes": "CrCl 40-59 ml/min Bereich." },
        "gfr_10_29": { "dose": "15-20 mg/kg", "interval": "q24-48h", "notes": "CrCl 20-39 ml/min Bereich." },
        "gfr_lt_10": { "dose": "10-15 mg/kg", "interval": "q48-72h", "notes": "" },
        "hd": { "dose": "7.5-10 mg/kg", "interval": "nach HD", "notes": "Aufsättigungsdosis: 20-25 mg/kg." },
        "crrt": { "dose": "7.5-10 mg/kg", "interval": "q24-48h", "notes": "Aufsättigungsdosis: 20-25 mg/kg." }
    },
    {
        "antibiotic_name": "Gentamicin",
        "gfr_gt_50": { "dose": "5-7 mg/kg", "interval": "q24h", "notes": "Für CrCl >60 ml/min." },
        "gfr_30_50": { "dose": "4-6 mg/kg", "interval": "q36h", "notes": "CrCl 40-59 ml/min Bereich." },
        "gfr_10_29": { "dose": "3-4 mg/kg", "interval": "q48h", "notes": "CrCl 20-39 ml/min Bereich." },
        "gfr_lt_10": { "dose": "2 mg/kg", "interval": "spiegel-basiert", "notes": "Plasmaspiegel-Monitoring." },
        "hd": { "dose": "2 mg/kg", "interval": "nach HD", "notes": "Dosis nach Dialyse." },
        "crrt": { "dose": "2.5 mg/kg", "interval": "q48h", "notes": "" }
    },
    {
        "antibiotic_name": "Ciprofloxacin",
        "gfr_gt_50": { "dose": "400mg IV", "interval": "q12h", "notes": "Keine Anpassung." },
        "gfr_30_50": { "dose": "400mg IV", "interval": "q12h", "notes": "" },
        "gfr_10_29": { "dose": "400mg IV", "interval": "q24h", "notes": "" },
        "gfr_lt_10": { "dose": "200mg IV", "interval": "q24h", "notes": "" },
        "hd": { "dose": "200mg IV", "interval": "q24h", "notes": "Dosis nach Dialyse." },
        "crrt": { "dose": "400mg IV", "interval": "q12h", "notes": "" }
    },
    {
        "antibiotic_name": "Ticarcillin-Clavulansäure",
        "gfr_gt_50": { "dose": "3.1g", "interval": "q4h", "notes": "Für CrCl >60 ml/min." },
        "gfr_30_50": { "dose": "2g", "interval": "q4h", "notes": "CrCl 30-60 ml/min Bereich." },
        "gfr_10_29": { "dose": "2g", "interval": "q8h", "notes": "CrCl 10-30 ml/min Bereich." },
        "gfr_lt_10": { "dose": "2g", "interval": "q12h", "notes": "" },
        "hd": { "dose": "2g", "interval": "q12h", "notes": "Dosis nach Dialyse." },
        "crrt": { "dose": "3.1g", "interval": "q8h", "notes": "" }
    },
    {
        "antibiotic_name": "Cefazolin",
        "gfr_gt_50": { "dose": "1-2g", "interval": "q8h", "notes": "Keine Anpassung." },
        "gfr_30_50": { "dose": "1-2g", "interval": "q12h", "notes": "" },
        "gfr_10_29": { "dose": "1g", "interval": "q24h", "notes": "" },
        "gfr_lt_10": { "dose": "0.5-1g", "interval": "q24h", "notes": "" },
        "hd": { "dose": "1-2g", "interval": "q24h", "notes": "Dosis nach Dialyse." },
        "crrt": { "dose": "2g", "interval": "q12h", "notes": "" }
    },
    {
        "antibiotic_name": "Ceftriaxon",
        "gfr_gt_50": { "dose": "1-2g", "interval": "q12-24h", "notes": "Keine Anpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Anpassung", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Keine Anpassung", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Keine Anpassung", "interval": "", "notes": "" },
        "hd": { "dose": "Keine Anpassung", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Anpassung", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Cefepim",
        "gfr_gt_50": { "dose": "2g", "interval": "q8-12h", "notes": "Keine Anpassung." },
        "gfr_30_50": { "dose": "2g", "interval": "q24h", "notes": "" },
        "gfr_10_29": { "dose": "1g", "interval": "q24h", "notes": "" },
        "gfr_lt_10": { "dose": "500mg", "interval": "q24h", "notes": "" },
        "hd": { "dose": "500mg", "interval": "q24h", "notes": "1g Aufsättigungsdosis, dann Dosis nach Dialyse." },
        "crrt": { "dose": "2g", "interval": "q12h", "notes": "" }
    },
    {
        "antibiotic_name": "Linezolid",
        "gfr_gt_50": { "dose": "600mg", "interval": "q12h", "notes": "Keine Anpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Anpassung", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Keine Anpassung", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Keine Anpassung", "interval": "", "notes": "" },
        "hd": { "dose": "Keine Anpassung", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Anpassung", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Daptomycin",
        "gfr_gt_50": { "dose": "4-6 mg/kg", "interval": "q24h", "notes": "Für CrCl >30 ml/min." },
        "gfr_30_50": { "dose": "4-6 mg/kg", "interval": "q24h", "notes": "" },
        "gfr_10_29": { "dose": "4-6 mg/kg", "interval": "q48h", "notes": "" },
        "gfr_lt_10": { "dose": "4-6 mg/kg", "interval": "q48h", "notes": "" },
        "hd": { "dose": "4-6 mg/kg", "interval": "q48h", "notes": "Nach Dialyse verabreichen." },
        "crrt": { "dose": "6 mg/kg", "interval": "q24h", "notes": "" }
    },
    {
        "antibiotic_name": "Metronidazol",
        "gfr_gt_50": { "dose": "500mg", "interval": "q8h", "notes": "Keine Anpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Anpassung", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Keine Anpassung", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Keine Anpassung", "interval": "", "notes": "Metaboliten können sich anreichern." },
        "hd": { "dose": "Normale Dosis", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Anpassung", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Trimethoprim -Sulfamethoxazole (TMP-SMX)",
        "gfr_gt_50": { "dose": "Normale Dosis", "interval": "q12h", "notes": "Für CrCl >30 ml/min." },
        "gfr_30_50": { "dose": "Normale Dosis", "interval": "q12h", "notes": "" },
        "gfr_10_29": { "dose": "50% Dosis", "interval": "q12h", "notes": "CrCl 15-30 ml/min Bereich." },
        "gfr_lt_10": { "dose": "Vermeiden", "interval": "", "notes": "" },
        "hd": { "dose": "50% Dosis", "interval": "q24h", "notes": "" },
        "crrt": { "dose": "Normale Dosis", "interval": "q12h", "notes": "" }
    },
    {
        "antibiotic_name": "Cefoxitin",
        "gfr_gt_50": { "dose": "1-2g", "interval": "q6-8h", "notes": "Keine Anpassung." },
        "gfr_30_50": { "dose": "1-2g", "interval": "q8-12h", "notes": "" },
        "gfr_10_29": { "dose": "1-2g", "interval": "q12-24h", "notes": "" },
        "gfr_lt_10": { "dose": "1g", "interval": "q24-48h", "notes": "" },
        "hd": { "dose": "1g", "interval": "q24h", "notes": "Dosis nach Dialyse." },
        "crrt": { "dose": "1-2g", "interval": "q12h", "notes": "" }
    },
    {
        "antibiotic_name": "Cefalexin",
        "gfr_gt_50": { "dose": "500mg", "interval": "q6h", "notes": "Keine Anpassung." },
        "gfr_30_50": { "dose": "500mg", "interval": "q8-12h", "notes": "" },
        "gfr_10_29": { "dose": "500mg", "interval": "q12h", "notes": "" },
        "gfr_lt_10": { "dose": "250mg", "interval": "q12-24h", "notes": "" },
        "hd": { "dose": "250-500mg", "interval": "nach HD", "notes": "Dosis nach Dialyse." },
        "crrt": { "dose": "500mg", "interval": "q8h", "notes": "" }
    },
    {
        "antibiotic_name": "Cefaclor",
        "gfr_gt_50": { "dose": "250-500mg", "interval": "q8h", "notes": "Keine Anpassung." },
        "gfr_30_50": { "dose": "50% Dosis", "interval": "q8h", "notes": "" },
        "gfr_10_29": { "dose": "50% Dosis", "interval": "q12h", "notes": "" },
        "gfr_lt_10": { "dose": "25% Dosis", "interval": "q12h", "notes": "" },
        "hd": { "dose": "250-500mg", "interval": "nach HD", "notes": "Dosis nach Dialyse." },
        "crrt": { "dose": "Normale Dosis", "interval": "q8h", "notes": "" }
    },
    {
        "antibiotic_name": "Cefuroxim",
        "gfr_gt_50": { "dose": "750mg-1.5g", "interval": "q8h", "notes": "Für CrCl >20 ml/min." },
        "gfr_30_50": { "dose": "750mg-1.5g", "interval": "q8h", "notes": "" },
        "gfr_10_29": { "dose": "750mg", "interval": "q12h", "notes": "" },
        "gfr_lt_10": { "dose": "750mg", "interval": "q24h", "notes": "" },
        "hd": { "dose": "750mg", "interval": "nach HD", "notes": "Dosis nach Dialyse." },
        "crrt": { "dose": "750mg", "interval": "q12h", "notes": "" }
    },
    {
        "antibiotic_name": "Cefotaxim",
        "gfr_gt_50": { "dose": "1-2g", "interval": "q8h", "notes": "Keine Anpassung." },
        "gfr_30_50": { "dose": "50% Dosis", "interval": "q8h", "notes": "" },
        "gfr_10_29": { "dose": "50% Dosis", "interval": "q12h", "notes": "" },
        "gfr_lt_10": { "dose": "25% Dosis", "interval": "q12h", "notes": "" },
        "hd": { "dose": "500mg-1g", "interval": "nach HD", "notes": "Dosis nach Dialyse." },
        "crrt": { "dose": "1-2g", "interval": "q12h", "notes": "" }
    },
    {
        "antibiotic_name": "Ceftazidim",
        "gfr_gt_50": { "dose": "1-2g", "interval": "q8h", "notes": "Keine Anpassung." },
        "gfr_30_50": { "dose": "1g", "interval": "q12h", "notes": "" },
        "gfr_10_29": { "dose": "1g", "interval": "q24h", "notes": "" },
        "gfr_lt_10": { "dose": "500mg", "interval": "q48h", "notes": "" },
        "hd": { "dose": "1g", "interval": "nach HD", "notes": "Dosis nach Dialyse." },
        "crrt": { "dose": "1-2g", "interval": "q12h", "notes": "" }
    },
    {
        "antibiotic_name": "Ceftazidim-Avibactam",
        "gfr_gt_50": { "dose": "2.5g", "interval": "q8h", "notes": "Keine Anpassung." },
        "gfr_30_50": { "dose": "1.25g", "interval": "q8h", "notes": "" },
        "gfr_10_29": { "dose": "0.94g", "interval": "q12h", "notes": "GFR 16-30 ml/min Bereich." },
        "gfr_lt_10": { "dose": "0.94g", "interval": "q48h", "notes": "GFR <15 ml/min Bereich." },
        "hd": { "dose": "0.94g", "interval": "nach HD", "notes": "Dosis nach Dialyse." },
        "crrt": { "dose": "1.25g", "interval": "q8h", "notes": "" }
    },
    {
        "antibiotic_name": "Ceftolozan-Tazobactam",
        "gfr_gt_50": { "dose": "1.5g", "interval": "q8h", "notes": "Keine Anpassung." },
        "gfr_30_50": { "dose": "750mg", "interval": "q8h", "notes": "" },
        "gfr_10_29": { "dose": "375mg", "interval": "q8h", "notes": "" },
        "gfr_lt_10": { "dose": "75mg", "interval": "q8h", "notes": "225mg Aufsättigungsdosis." },
        "hd": { "dose": "75mg", "interval": "q8h", "notes": "225mg Aufsättigungsdosis, dann Dosis nach Dialyse." },
        "crrt": { "dose": "750mg", "interval": "q8h", "notes": "" }
    },
    {
        "antibiotic_name": "Ceftarolin-Avibactam",
        "gfr_gt_50": { "dose": "600mg", "interval": "q12h", "notes": "Keine Anpassung." },
        "gfr_30_50": { "dose": "400mg", "interval": "q12h", "notes": "" },
        "gfr_10_29": { "dose": "300mg", "interval": "q12h", "notes": "" },
        "gfr_lt_10": { "dose": "200mg", "interval": "q12h", "notes": "" },
        "hd": { "dose": "200mg", "interval": "q12h", "notes": "Dosis nach Dialyse." },
        "crrt": { "dose": "400mg", "interval": "q12h", "notes": "" }
    },
    {
        "antibiotic_name": "Cefepim-Taniborbactam",
        "gfr_gt_50": { "dose": "2.5g", "interval": "q8h", "notes": "Für CrCl >50 ml/min." },
        "gfr_30_50": { "dose": "1.25g", "interval": "q8h", "notes": "CrCl 30-49 ml/min Bereich." },
        "gfr_10_29": { "dose": "0.94g", "interval": "q8h", "notes": "CrCl 15-29 ml/min Bereich." },
        "gfr_lt_10": { "dose": "0.625g", "interval": "q8h", "notes": "" },
        "hd": { "dose": "0.625g", "interval": "nach HD", "notes": "Dosis nach Dialyse." },
        "crrt": { "dose": "1.25g", "interval": "q8h", "notes": "" }
    },
    {
        "antibiotic_name": "Cefiderocol",
        "gfr_gt_50": { "dose": "2g", "interval": "q8h", "notes": "Keine Anpassung." },
        "gfr_30_50": { "dose": "2g", "interval": "q8h", "notes": "GFR 30-59 ml/min Bereich." },
        "gfr_10_29": { "dose": "1.5g", "interval": "q8h", "notes": "GFR 15-29 ml/min Bereich." },
        "gfr_lt_10": { "dose": "1g", "interval": "q12h", "notes": "" },
        "hd": { "dose": "1g", "interval": "nach HD", "notes": "Dosis nach Dialyse." },
        "crrt": { "dose": "2g", "interval": "q8h", "notes": "" }
    },
    {
        "antibiotic_name": "Penicillin V",
        "gfr_gt_50": { "dose": "250-500mg", "interval": "q6-8h", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Anwendung nicht empfohlen (CrCl <10 ml/min).", "interval": "", "notes": "" },
        "hd": { "dose": "Anwendung nicht empfohlen.", "interval": "", "notes": "" },
        "crrt": { "dose": "Anwendung nicht empfohlen.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Oxacillin",
        "gfr_gt_50": { "dose": "1-2g", "interval": "q4-6h", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "hd": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Amoxicillin-Clavulansäure",
        "gfr_gt_50": { "dose": "1.2g IV", "interval": "alle 8 Stunden", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "1.2g IV", "interval": "alle 12 Stunden", "notes": "" },
        "gfr_lt_10": { "dose": "1.2g IV", "interval": "alle 24 Stunden", "notes": "CrCl <10 ml/min" },
        "hd": { "dose": "1.2g IV", "interval": "alle 24 Stunden", "notes": "Zusatzdosis nach Dialyse." },
        "crrt": { "dose": "Normale Dosis kann gegeben werden.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Ampicillin",
        "gfr_gt_50": { "dose": "1-2g", "interval": "alle 4-6 Stunden", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Normale Dosis", "interval": "alle 8 Stunden", "notes": "" },
        "gfr_10_29": { "dose": "Normale Dosis", "interval": "alle 12 Stunden", "notes": "" },
        "gfr_lt_10": { "dose": "Normale Dosis", "interval": "alle 12-24 Stunden", "notes": "CrCl <10 ml/min" },
        "hd": { "dose": "Zusatzdosis nach Dialyse erforderlich.", "interval": "", "notes": "" },
        "crrt": { "dose": "Normale Dosis kann gegeben werden.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Ampicillin-Sulbactam",
        "gfr_gt_50": { "dose": "1.5-3g", "interval": "alle 6 Stunden", "notes": "Keine Anpassung für CrCl >30 erforderlich." },
        "gfr_30_50": { "dose": "Keine Anpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "1.5-3g", "interval": "alle 12 Stunden", "notes": "CrCl 15-29 ml/min" },
        "gfr_lt_10": { "dose": "1.5-3g", "interval": "alle 24 Stunden", "notes": "CrCl <15 ml/min" },
        "hd": { "dose": "1.5-3g", "interval": "alle 24 Stunden", "notes": "Zusatzdosis nach Dialyse." },
        "crrt": { "dose": "Normale Dosis kann gegeben werden.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Flucloxacillin",
        "gfr_gt_50": { "dose": "1-2g", "interval": "q6h", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "hd": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Imipenem-Cilastatin",
        "gfr_gt_50": { "dose": "500mg", "interval": "alle 6 Stunden", "notes": "Keine Anpassung für CrCl >50 erforderlich." },
        "gfr_30_50": { "dose": "500mg", "interval": "alle 8 Stunden", "notes": "CrCl 30-50 ml/min" },
        "gfr_10_29": { "dose": "500mg", "interval": "alle 12 Stunden", "notes": "CrCl 10-29 ml/min" },
        "gfr_lt_10": { "dose": "250mg", "interval": "alle 12 Stunden", "notes": "CrCl <10 ml/min" },
        "hd": { "dose": "250-500mg", "interval": "alle 12 Stunden", "notes": "Zusatzdosis nach Dialyse." },
        "crrt": { "dose": "Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Ertapenem",
        "gfr_gt_50": { "dose": "1g", "interval": "alle 24 Stunden", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "500mg", "interval": "alle 24 Stunden", "notes": "CrCl <30 ml/min" },
        "gfr_lt_10": { "dose": "500mg", "interval": "alle 24 Stunden", "notes": "CrCl <30 ml/min" },
        "hd": { "dose": "Zusatzdosis nach Dialyse erforderlich (wenn letzte Dosis innerhalb von 6 Stunden).", "interval": "", "notes": "" },
        "crrt": { "dose": "Normale Dosis kann gegeben werden.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Doripenem",
        "gfr_gt_50": { "dose": "500mg", "interval": "alle 8 Stunden", "notes": "Keine Anpassung für CrCl >50 erforderlich." },
        "gfr_30_50": { "dose": "250mg", "interval": "alle 8 Stunden", "notes": "CrCl 30-50 ml/min" },
        "gfr_10_29": { "dose": "250mg", "interval": "alle 12 Stunden", "notes": "CrCl <30 ml/min" },
        "gfr_lt_10": { "dose": "250mg", "interval": "alle 12 Stunden", "notes": "CrCl <30 ml/min" },
        "hd": { "dose": "250mg", "interval": "alle 12 Stunden", "notes": "Zusatzdosis nach Dialyse." },
        "crrt": { "dose": "Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Imipenem-Cilastatin-Relebactam",
        "gfr_gt_50": { "dose": "500mg/250mg/250mg", "interval": "q6h", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "400mg/200mg/100mg", "interval": "", "notes": "GFR 30-59 ml/min" },
        "gfr_10_29": { "dose": "300mg/150mg/75mg", "interval": "", "notes": "GFR 15-29 ml/min" },
        "gfr_lt_10": { "dose": "200mg/100mg/50mg", "interval": "", "notes": "GFR <15 ml/min" },
        "hd": { "dose": "Zusatzdosis nach Dialyse erforderlich.", "interval": "", "notes": "" },
        "crrt": { "dose": "Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Meropenem-Vaborbactam",
        "gfr_gt_50": { "dose": "4g", "interval": "alle 8 Stunden", "notes": "Keine Anpassung für CrCl >50 erforderlich." },
        "gfr_30_50": { "dose": "2g", "interval": "alle 8 Stunden", "notes": "CrCl 30-49 ml/min" },
        "gfr_10_29": { "dose": "1g", "interval": "alle 8 Stunden", "notes": "CrCl 15-29 ml/min" },
        "gfr_lt_10": { "dose": "1g", "interval": "alle 12 Stunden", "notes": "CrCl <15 ml/min" },
        "hd": { "dose": "1g", "interval": "alle 12 Stunden", "notes": "Zusatzdosis nach Dialyse." },
        "crrt": { "dose": "Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Nalidixinsäure",
        "gfr_gt_50": { "dose": "1g", "interval": "q6h", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Anwendung nicht empfohlen.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Anwendung nicht empfohlen.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Anwendung nicht empfohlen.", "interval": "", "notes": "" },
        "hd": { "dose": "Anwendung nicht empfohlen.", "interval": "", "notes": "" },
        "crrt": { "dose": "Anwendung nicht empfohlen.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Ofloxacin",
        "gfr_gt_50": { "dose": "200-400mg", "interval": "alle 12 Stunden", "notes": "Keine Anpassung für CrCl >50 erforderlich." },
        "gfr_30_50": { "dose": "200-400mg", "interval": "alle 24 Stunden", "notes": "CrCl 10-50 ml/min" },
        "gfr_10_29": { "dose": "200-400mg", "interval": "alle 24 Stunden", "notes": "CrCl 10-50 ml/min" },
        "gfr_lt_10": { "dose": "100-200mg", "interval": "alle 24 Stunden", "notes": "CrCl <10 ml/min" },
        "hd": { "dose": "100-200mg", "interval": "alle 24 Stunden", "notes": "nach Dialyse." },
        "crrt": { "dose": "Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Levofloxacin",
        "gfr_gt_50": { "dose": "750mg", "interval": "alle 24 Stunden", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "750mg initial, dann 750mg", "interval": "alle 48 Stunden", "notes": "GFR 20-49 ml/min" },
        "gfr_10_29": { "dose": "750mg initial, dann 500mg", "interval": "alle 48 Stunden", "notes": "GFR <20 ml/min" },
        "gfr_lt_10": { "dose": "750mg initial, dann 500mg", "interval": "alle 48 Stunden", "notes": "GFR <20 ml/min" },
        "hd": { "dose": "500mg initial, dann 250mg", "interval": "alle 48 Stunden", "notes": "nach Dialyse." },
        "crrt": { "dose": "Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Moxifloxacin",
        "gfr_gt_50": { "dose": "400mg", "interval": "alle 24 Stunden", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "hd": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Delafloxacin",
        "gfr_gt_50": { "dose": "300mg IV", "interval": "alle 12 Stunden", "notes": "Keine Anpassung für CrCl >30 erforderlich." },
        "gfr_30_50": { "dose": "Keine Anpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "200mg IV", "interval": "alle 12 Stunden", "notes": "CrCl 15-29 ml/min" },
        "gfr_lt_10": { "dose": "150mg IV", "interval": "alle 12 Stunden", "notes": "CrCl <15 ml/min" },
        "hd": { "dose": "150mg IV", "interval": "alle 12 Stunden", "notes": "Zusatzdosis nach Dialyse." },
        "crrt": { "dose": "Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Telavancin",
        "gfr_gt_50": { "dose": "10mg/kg", "interval": "alle 24 Stunden", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "7.5mg/kg", "interval": "alle 24 Stunden", "notes": "GFR 30-50 ml/min" },
        "gfr_10_29": { "dose": "10mg/kg", "interval": "alle 48 Stunden", "notes": "GFR <30 ml/min" },
        "gfr_lt_10": { "dose": "10mg/kg", "interval": "alle 48 Stunden", "notes": "GFR <30 ml/min" },
        "hd": { "dose": "10mg/kg", "interval": "alle 48 Stunden", "notes": "nach Dialyse." },
        "crrt": { "dose": "Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Dalbavancin",
        "gfr_gt_50": { "dose": "1500mg Einzeldosis, oder 1000mg dann 500mg nach 1 Woche", "interval": "", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "750mg Einzeldosis, dann 375mg nach 1 Woche", "interval": "", "notes": "GFR <30 ml/min" },
        "gfr_lt_10": { "dose": "750mg Einzeldosis, dann 375mg nach 1 Woche", "interval": "", "notes": "GFR <30 ml/min" },
        "hd": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Oritavancin",
        "gfr_gt_50": { "dose": "1200mg", "interval": "Einzeldosis", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "hd": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Piperacillin",
        "gfr_gt_50": { "dose": "4g", "interval": "alle 6 Stunden", "notes": "Keine Anpassung für CrCl >40 erforderlich." },
        "gfr_30_50": { "dose": "4g", "interval": "alle 8 Stunden", "notes": "CrCl 20-40 ml/min" },
        "gfr_10_29": { "dose": "4g", "interval": "alle 8 Stunden", "notes": "CrCl 20-40 ml/min" },
        "gfr_lt_10": { "dose": "4g", "interval": "alle 12 Stunden", "notes": "CrCl <20 ml/min" },
        "hd": { "dose": "2g", "interval": "alle 8 Stunden", "notes": "Zusatzdosis nach Dialyse." },
        "crrt": { "dose": "Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Aztreonam",
        "gfr_gt_50": { "dose": "1-2g", "interval": "q8-12h", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "50-75% Dosis.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "50-75% Dosis.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "25% Dosis", "interval": "", "notes": "CrCl <10 ml/min" },
        "hd": { "dose": "25% Zusatzdosis nach Dialyse.", "interval": "", "notes": "" },
        "crrt": { "dose": "Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Amikacin",
        "gfr_gt_50": { "dose": "15 mg/kg", "interval": "q24h", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Dosisreduktion oder Intervallverlängerung", "interval": "", "notes": "basierend auf Plasmaspiegel." },
        "gfr_10_29": { "dose": "Dosisreduktion oder Intervallverlängerung", "interval": "", "notes": "basierend auf Plasmaspiegel." },
        "gfr_lt_10": { "dose": "Dosisreduktion oder Intervallverlängerung", "interval": "", "notes": "basierend auf Plasmaspiegel." },
        "hd": { "dose": "10-15 mg/kg Zusatzdosis nach Dialyse.", "interval": "", "notes": "" },
        "crrt": { "dose": "Dosisanpassung erforderlich", "interval": "", "notes": "Plasmaspiegel-Monitoring empfohlen." }
    },
    {
        "antibiotic_name": "Plazomicin",
        "gfr_30_50": { "dose": "Dosisreduktion oder Intervallverlängerung", "interval": "", "notes": "basierend auf Plasmaspiegel." },
        "gfr_10_29": { "dose": "Dosisreduktion oder Intervallverlängerung", "interval": "", "notes": "basierend auf Plasmaspiegel." },
        "gfr_lt_10": { "dose": "Dosisreduktion oder Intervallverlängerung", "interval": "", "notes": "basierend auf Plasmaspiegel." },
        "hd": { "dose": "7.5 mg/kg Zusatzdosis nach Dialyse.", "interval": "", "notes": "" },
        "crrt": { "dose": "Dosisanpassung erforderlich", "interval": "", "notes": "Plasmaspiegel-Monitoring empfohlen." }
    },
    {
        "antibiotic_name": "Isoniazid",
        "gfr_gt_50": { "dose": "6-12 mg/kg", "interval": "q12h für 3 Dosen, dann q24h", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "50% Dosis", "interval": "", "notes": "GFR 30-80 ml/min" },
        "gfr_10_29": { "dose": "33% Dosis", "interval": "", "notes": "GFR <30 ml/min" },
        "gfr_lt_10": { "dose": "33% Dosis", "interval": "", "notes": "GFR <30 ml/min" },
        "hd": { "dose": "33% Dosis an Tag 10.", "interval": "", "notes": "" },
        "crrt": { "dose": "Normale Dosis kann gegeben werden.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Erythromycin",
        "gfr_gt_50": { "dose": "250-500mg", "interval": "q6h", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "50-75% Dosis", "interval": "", "notes": "CrCl <10 ml/min" },
        "hd": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Azithromycin",
        "gfr_gt_50": { "dose": "500mg", "interval": "q24h", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "hd": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Clarithromycin",
        "gfr_gt_50": { "dose": "500mg", "interval": "q12h", "notes": "Keine Anpassung für CrCl >30 erforderlich." },
        "gfr_30_50": { "dose": "Keine Anpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "50% Dosis", "interval": "", "notes": "CrCl <30 ml/min" },
        "gfr_lt_10": { "dose": "50% Dosis", "interval": "", "notes": "CrCl <30 ml/min" },
        "hd": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Roxithromycin",
        "gfr_gt_50": { "dose": "150-300mg", "interval": "q12h", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "50% Dosis", "interval": "", "notes": "CrCl <10 ml/min" },
        "hd": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Spiramycin",
        "gfr_gt_50": { "dose": "1-2g", "interval": "q8-12h", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "hd": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Clindamycin",
        "gfr_gt_50": { "dose": "600-900mg", "interval": "q8h", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "hd": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Doxycyclin",
        "gfr_gt_50": { "dose": "100mg", "interval": "q12h", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "hd": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Tigecyclin",
        "gfr_gt_50": { "dose": "100mg Ladedosis, dann 50mg", "interval": "q12h", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "hd": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Minocyclin",
        "gfr_gt_50": { "dose": "200mg Ladedosis, dann 100mg", "interval": "q12h", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "hd": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Eravacyclin",
        "gfr_gt_50": { "dose": "1 mg/kg", "interval": "q12h", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "hd": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Sarecyclin",
        "gfr_gt_50": { "dose": "60-150mg", "interval": "q24h", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "hd": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Omadacyclin",
        "gfr_gt_50": { "dose": "100mg IV q12h für 2 Dosen, dann 100mg IV q24h", "interval": "", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "hd": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Tedizolid",
        "gfr_gt_50": { "dose": "200mg", "interval": "q24h", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "hd": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Quinupristin-Dalfopristin",
        "gfr_gt_50": { "dose": "7.5 mg/kg", "interval": "q8-12h", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "hd": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Chloramphenicol",
        "gfr_gt_50": { "dose": "50 mg/kg/Tag", "interval": "in 4 geteilten Dosen", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "hd": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Fosfomycin",
        "gfr_gt_50": { "dose": "4-6g", "interval": "q8h", "notes": "Keine Anpassung für CrCl >40 erforderlich." },
        "gfr_30_50": { "dose": "70-80% Dosis", "interval": "", "notes": "CrCl 20-39 ml/min" },
        "gfr_10_29": { "dose": "60-70% Dosis", "interval": "", "notes": "CrCl 10-19 ml/min" },
        "gfr_lt_10": { "dose": "50% Dosis", "interval": "", "notes": "CrCl <10 ml/min" },
        "hd": { "dose": "Zusatzdosis nach Dialyse erforderlich.", "interval": "", "notes": "" },
        "crrt": { "dose": "Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Nitrofurantoin",
        "gfr_gt_50": { "dose": "50-100mg", "interval": "q6h", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Vermeiden", "interval": "", "notes": "GFR <30 ml/min" },
        "gfr_lt_10": { "dose": "Vermeiden", "interval": "", "notes": "GFR <30 ml/min" },
        "hd": { "dose": "Vermeiden.", "interval": "", "notes": "" },
        "crrt": { "dose": "Vermeiden.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Rifampin",
        "gfr_gt_50": { "dose": "600mg", "interval": "q24h", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "hd": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Rifabutin",
        "gfr_gt_50": { "dose": "300mg", "interval": "q24h", "notes": "Keine Anpassung für CrCl >50 erforderlich." },
        "gfr_30_50": { "dose": "50% Dosis", "interval": "", "notes": "CrCl <50 ml/min" },
        "gfr_10_29": { "dose": "50% Dosis", "interval": "", "notes": "CrCl <50 ml/min" },
        "gfr_lt_10": { "dose": "50% Dosis", "interval": "", "notes": "CrCl <50 ml/min" },
        "hd": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Rifaximin",
        "gfr_gt_50": { "dose": "200-550mg", "interval": "q8-12h", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "hd": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Polymyxin B",
        "gfr_gt_50": { "dose": "1.25-1.5 mg/kg", "interval": "alle 12 Stunden", "notes": "Keine Anpassung für CrCl >80 erforderlich." },
        "gfr_30_50": { "dose": "1 mg/kg", "interval": "alle 12 Stunden", "notes": "CrCl 20-49 ml/min" },
        "gfr_10_29": { "dose": "1 mg/kg", "interval": "alle 12 Stunden", "notes": "CrCl 20-49 ml/min" },
        "gfr_lt_10": { "dose": "1 mg/kg", "interval": "alle 24 Stunden", "notes": "CrCl <20 ml/min" },
        "hd": { "dose": "1 mg/kg", "interval": "alle 48 Stunden", "notes": "Zusatzdosis nach Dialyse." },
        "crrt": { "dose": "Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Bacitracin",
        "gfr_gt_50": { "dose": "Keine Dosisanpassung erforderlich (topisch).", "interval": "", "notes": "" },
        "gfr_30_50": { "dose": "Keine Dosisanpassung erforderlich (topisch).", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Keine Dosisanpassung erforderlich (topisch).", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Keine Dosisanpassung erforderlich (topisch).", "interval": "", "notes": "" },
        "hd": { "dose": "Keine Dosisanpassung erforderlich (topisch).", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Dosisanpassung erforderlich (topisch).", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Colistin",
        "gfr_gt_50": { "dose": "2.5-5 mg/kg/Tag", "interval": "in 2-4 geteilten Dosen", "notes": "Keine Anpassung für CrCl >80 erforderlich." },
        "gfr_30_50": { "dose": "1.5 mg/kg", "interval": "alle 12 Stunden", "notes": "CrCl 30-49 ml/min" },
        "gfr_10_29": { "dose": "1.5 mg/kg", "interval": "alle 24 Stunden", "notes": "CrCl <30 ml/min" },
        "gfr_lt_10": { "dose": "1.5 mg/kg", "interval": "alle 24 Stunden", "notes": "CrCl <30 ml/min" },
        "hd": { "dose": "1.5 mg/kg", "interval": "alle 48 Stunden", "notes": "Zusatzdosis nach Dialyse." },
        "crrt": { "dose": "Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Fluconazol",
        "gfr_gt_50": { "dose": "200-800mg", "interval": "q24h", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "50% Dosis.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "50% Dosis.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "50% Dosis.", "interval": "", "notes": "" },
        "hd": { "dose": "Normale Dosis nach Dialyse.", "interval": "", "notes": "" },
        "crrt": { "dose": "Normale Dosis kann gegeben werden.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Voriconazol",
        "gfr_gt_50": { "dose": "6 mg/kg Ladedosis, dann 4 mg/kg", "interval": "q12h", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "hd": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Caspofungin",
        "gfr_gt_50": { "dose": "70mg Ladedosis, dann 50mg", "interval": "q24h", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "hd": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Amphotericin B",
        "gfr_gt_50": { "dose": "0.25-1.5 mg/kg/Tag", "interval": "", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "hd": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Vancomycin (Inhalation)",
        "gfr_gt_50": { "dose": "125-250mg", "interval": "q12h", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "hd": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Tobramycin (Inhalation)",
        "gfr_gt_50": { "dose": "300mg", "interval": "q12h", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "hd": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Lefamulin",
        "gfr_gt_50": { "dose": "150mg IV q12h oder 600mg PO q12h", "interval": "", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "hd": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Mupirocin",
        "gfr_gt_50": { "dose": "Keine Dosisanpassung erforderlich (topisch).", "interval": "", "notes": "" },
        "gfr_30_50": { "dose": "Keine Dosisanpassung erforderlich (topisch).", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Keine Dosisanpassung erforderlich (topisch).", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Keine Dosisanpassung erforderlich (topisch).", "interval": "", "notes": "" },
        "hd": { "dose": "Keine Dosisanpassung erforderlich (topisch).", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Dosisanpassung erforderlich (topisch).", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Fusidinsäure",
        "gfr_gt_50": { "dose": "500mg", "interval": "q8h", "notes": "Keine Dosisanpassung erforderlich." },
        "gfr_30_50": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "hd": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" },
        "crrt": { "dose": "Keine Dosisanpassung erforderlich.", "interval": "", "notes": "" }
    }
]