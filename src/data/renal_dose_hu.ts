
export const renalDoseData_HU = [
    {
        "antibiotic_name": "Penicillin G",
        "gfr_gt_50": { "dose": "1-3 millió E", "interval": "4-6 óránként", "notes": "Nincs módosítás CrCl >30 ml/min esetén." },
        "gfr_30_50": { "dose": "1-3 millió E", "interval": "6-8 óránként", "notes": "" },
        "gfr_10_29": { "dose": "1-3 millió E", "interval": "8-12 óránként", "notes": "" },
        "gfr_lt_10": { "dose": "1-2 millió E", "interval": "12 óránként", "notes": "" },
        "hd": { "dose": "1-2 millió E", "interval": "12 óránként", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "2-4 millió E", "interval": "6 óránként", "notes": "" }
    },
    {
        "antibiotic_name": "Amoxicillin",
        "gfr_gt_50": { "dose": "250-500 mg", "interval": "8 óránként", "notes": "Nincs módosítás CrCl >30 ml/min esetén." },
        "gfr_30_50": { "dose": "250-500 mg", "interval": "12 óránként", "notes": "" },
        "gfr_10_29": { "dose": "250-500 mg", "interval": "12 óránként", "notes": "" },
        "gfr_lt_10": { "dose": "250-500 mg", "interval": "24 óránként", "notes": "" },
        "hd": { "dose": "250-500 mg", "interval": "24 óránként", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "500-1000 mg", "interval": "8-12 óránként", "notes": "" }
    },
    {
        "antibiotic_name": "Piperacillin-tazobactam",
        "gfr_gt_50": { "dose": "4.5g", "interval": "6 óránként", "notes": "CrCl >40 ml/min esetén." },
        "gfr_30_50": { "dose": "3.375g", "interval": "6 óránként", "notes": "CrCl 20-40 ml/min tartomány." },
        "gfr_10_29": { "dose": "2.25g", "interval": "6 óránként", "notes": "CrCl <20 ml/min tartomány." },
        "gfr_lt_10": { "dose": "2.25g", "interval": "8 óránként", "notes": "" },
        "hd": { "dose": "2.25g", "interval": "8 óránként", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "3.375g", "interval": "8 óránként", "notes": "" }
    },
    {
        "antibiotic_name": "Meropenem",
        "gfr_gt_50": { "dose": "1-2g", "interval": "8 óránként", "notes": "Nincs módosítás." },
        "gfr_30_50": { "dose": "1g", "interval": "12 óránként", "notes": "CrCl 26-50 ml/min tartomány." },
        "gfr_10_29": { "dose": "500mg", "interval": "12 óránként", "notes": "CrCl 10-25 ml/min tartomány." },
        "gfr_lt_10": { "dose": "500mg", "interval": "24 óránként", "notes": "" },
        "hd": { "dose": "500mg", "interval": "24 óránként", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "1g", "interval": "8-12 óránként", "notes": "" }
    },
    {
        "antibiotic_name": "Vancomycin",
        "gfr_gt_50": { "dose": "15-20 mg/kg", "interval": "8-12 óránként", "notes": "CrCl >60 ml/min esetén." },
        "gfr_30_50": { "dose": "15-20 mg/kg", "interval": "12-24 óránként", "notes": "CrCl 40-59 ml/min tartomány." },
        "gfr_10_29": { "dose": "15-20 mg/kg", "interval": "24-48 óránként", "notes": "CrCl 20-39 ml/min tartomány." },
        "gfr_lt_10": { "dose": "10-15 mg/kg", "interval": "48-72 óránként", "notes": "" },
        "hd": { "dose": "7.5-10 mg/kg", "interval": "HD után", "notes": "Telítő dózis: 20-25 mg/kg." },
        "crrt": { "dose": "7.5-10 mg/kg", "interval": "24-48 óránként", "notes": "Telítő dózis: 20-25 mg/kg." }
    },
    {
        "antibiotic_name": "Gentamicin",
        "gfr_gt_50": { "dose": "5-7 mg/kg", "interval": "24 óránként", "notes": "CrCl >60 ml/min esetén." },
        "gfr_30_50": { "dose": "4-6 mg/kg", "interval": "36 óránként", "notes": "CrCl 40-59 ml/min tartomány." },
        "gfr_10_29": { "dose": "3-4 mg/kg", "interval": "48 óránként", "notes": "CrCl 20-39 ml/min tartomány." },
        "gfr_lt_10": { "dose": "2 mg/kg", "interval": "szint szerint", "notes": "Plazmaszint monitorozás." },
        "hd": { "dose": "2 mg/kg", "interval": "HD után", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "2.5 mg/kg", "interval": "48 óránként", "notes": "" }
    },
    {
        "antibiotic_name": "Ciprofloxacin",
        "gfr_gt_50": { "dose": "400mg IV", "interval": "12 óránként", "notes": "Nincs módosítás." },
        "gfr_30_50": { "dose": "400mg IV", "interval": "12 óránként", "notes": "" },
        "gfr_10_29": { "dose": "400mg IV", "interval": "24 óránként", "notes": "" },
        "gfr_lt_10": { "dose": "200mg IV", "interval": "24 óránként", "notes": "" },
        "hd": { "dose": "200mg IV", "interval": "24 óránként", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "400mg IV", "interval": "12 óránként", "notes": "" }
    }
    ,
    {
        "antibiotic_name": "Ticarcillin-clavulanate",
        "gfr_gt_50": { "dose": "3.1g", "interval": "4 óránként", "notes": "CrCl >60 ml/min esetén." },
        "gfr_30_50": { "dose": "2g", "interval": "4 óránként", "notes": "CrCl 30-60 ml/min tartomány." },
        "gfr_10_29": { "dose": "2g", "interval": "8 óránként", "notes": "CrCl 10-30 ml/min tartomány." },
        "gfr_lt_10": { "dose": "2g", "interval": "12 óránként", "notes": "" },
        "hd": { "dose": "2g", "interval": "12 óránként", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "3.1g", "interval": "8 óránként", "notes": "" }
    }
,
    {
        "antibiotic_name": "Cefazolin",
        "gfr_gt_50": { "dose": "1-2g", "interval": "8 óránként", "notes": "Nincs módosítás." },
        "gfr_30_50": { "dose": "1-2g", "interval": "12 óránként", "notes": "" },
        "gfr_10_29": { "dose": "1g", "interval": "24 óránként", "notes": "" },
        "gfr_lt_10": { "dose": "0.5-1g", "interval": "24 óránként", "notes": "" },
        "hd": { "dose": "1-2g", "interval": "24 óránként", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "2g", "interval": "12 óránként", "notes": "" }
    },
    {
        "antibiotic_name": "Ceftriaxone",
        "gfr_gt_50": { "dose": "1-2g", "interval": "12-24 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs módosítás", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs módosítás", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Nincs módosítás", "interval": "", "notes": "" },
        "hd": { "dose": "Nincs módosítás", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs módosítás", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Cefepime",
        "gfr_gt_50": { "dose": "2g", "interval": "8-12 óránként", "notes": "Nincs módosítás." },
        "gfr_30_50": { "dose": "2g", "interval": "24 óránként", "notes": "" },
        "gfr_10_29": { "dose": "1g", "interval": "24 óránként", "notes": "" },
        "gfr_lt_10": { "dose": "500mg", "interval": "24 óránként", "notes": "" },
        "hd": { "dose": "500mg", "interval": "24 óránként", "notes": "1g telítő dózis, majd pótdózis dialízis után." },
        "crrt": { "dose": "2g", "interval": "12 óránként", "notes": "" }
    },
    {
        "antibiotic_name": "Linezolid",
        "gfr_gt_50": { "dose": "600mg", "interval": "12 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs módosítás", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs módosítás", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Nincs módosítás", "interval": "", "notes": "" },
        "hd": { "dose": "Nincs módosítás", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs módosítás", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Daptomycin",
        "gfr_gt_50": { "dose": "4-6 mg/kg", "interval": "24 óránként", "notes": "CrCl >30 ml/min esetén." },
        "gfr_30_50": { "dose": "4-6 mg/kg", "interval": "24 óránként", "notes": "" },
        "gfr_10_29": { "dose": "4-6 mg/kg", "interval": "48 óránként", "notes": "" },
        "gfr_lt_10": { "dose": "4-6 mg/kg", "interval": "48 óránként", "notes": "" },
        "hd": { "dose": "4-6 mg/kg", "interval": "48 óránként", "notes": "Dialízis után adandó." },
        "crrt": { "dose": "6 mg/kg", "interval": "24 óránként", "notes": "" }
    },
    {
        "antibiotic_name": "Metronidazol",
        "gfr_gt_50": { "dose": "500mg", "interval": "8 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs módosítás", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs módosítás", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Nincs módosítás", "interval": "", "notes": "Metabolitok felhalmozódhatnak." },
        "hd": { "dose": "Normál dózis", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs módosítás", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Trimetoprim-Sulfamethoxazole (TMP-SMX)",
        "gfr_gt_50": { "dose": "Normál dózis", "interval": "12 óránként", "notes": "CrCl >30 ml/min esetén." },
        "gfr_30_50": { "dose": "Normál dózis", "interval": "12 óránként", "notes": "" },
        "gfr_10_29": { "dose": "50% dózis", "interval": "12 óránként", "notes": "CrCl 15-30 ml/min tartomány." },
        "gfr_lt_10": { "dose": "Kerülendő", "interval": "", "notes": "" },
        "hd": { "dose": "50% dózis", "interval": "24 óránként", "notes": "" },
        "crrt": { "dose": "Normál dózis", "interval": "12 óránként", "notes": "" }
    }
,
    {
        "antibiotic_name": "Cefoxitin",
        "gfr_gt_50": { "dose": "1-2g", "interval": "6-8 óránként", "notes": "Nincs módosítás." },
        "gfr_30_50": { "dose": "1-2g", "interval": "8-12 óránként", "notes": "" },
        "gfr_10_29": { "dose": "1-2g", "interval": "12-24 óránként", "notes": "" },
        "gfr_lt_10": { "dose": "1g", "interval": "24-48 óránként", "notes": "" },
        "hd": { "dose": "1g", "interval": "24 óránként", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "1-2g", "interval": "12 óránként", "notes": "" }
    },
    {
        "antibiotic_name": "Cefalexin",
        "gfr_gt_50": { "dose": "500mg", "interval": "6 óránként", "notes": "Nincs módosítás." },
        "gfr_30_50": { "dose": "500mg", "interval": "8-12 óránként", "notes": "" },
        "gfr_10_29": { "dose": "500mg", "interval": "12 óránként", "notes": "" },
        "gfr_lt_10": { "dose": "250mg", "interval": "12-24 óránként", "notes": "" },
        "hd": { "dose": "250-500mg", "interval": "HD után", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "500mg", "interval": "8 óránként", "notes": "" }
    },
    {
        "antibiotic_name": "Cefaclor",
        "gfr_gt_50": { "dose": "250-500mg", "interval": "8 óránként", "notes": "Nincs módosítás." },
        "gfr_30_50": { "dose": "50% dózis", "interval": "8 óránként", "notes": "" },
        "gfr_10_29": { "dose": "50% dózis", "interval": "12 óránként", "notes": "" },
        "gfr_lt_10": { "dose": "25% dózis", "interval": "12 óránként", "notes": "" },
        "hd": { "dose": "250-500mg", "interval": "HD után", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "Normál dózis", "interval": "8 óránként", "notes": "" }
    },
    {
        "antibiotic_name": "Cefuroxim",
        "gfr_gt_50": { "dose": "750mg-1.5g", "interval": "8 óránként", "notes": "CrCl >20 ml/min esetén." },
        "gfr_30_50": { "dose": "750mg-1.5g", "interval": "8 óránként", "notes": "" },
        "gfr_10_29": { "dose": "750mg", "interval": "12 óránként", "notes": "" },
        "gfr_lt_10": { "dose": "750mg", "interval": "24 óránként", "notes": "" },
        "hd": { "dose": "750mg", "interval": "HD után", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "750mg", "interval": "12 óránként", "notes": "" }
    },
    {
        "antibiotic_name": "Cefotaxime",
        "gfr_gt_50": { "dose": "1-2g", "interval": "8 óránként", "notes": "Nincs módosítás." },
        "gfr_30_50": { "dose": "50% dózis", "interval": "8 óránként", "notes": "" },
        "gfr_10_29": { "dose": "50% dózis", "interval": "12 óránként", "notes": "" },
        "gfr_lt_10": { "dose": "25% dózis", "interval": "12 óránként", "notes": "" },
        "hd": { "dose": "500mg-1g", "interval": "HD után", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "1-2g", "interval": "12 óránként", "notes": "" }
    },
    {
        "antibiotic_name": "Ceftazidime",
        "gfr_gt_50": { "dose": "1-2g", "interval": "8 óránként", "notes": "Nincs módosítás." },
        "gfr_30_50": { "dose": "1g", "interval": "12 óránként", "notes": "" },
        "gfr_10_29": { "dose": "1g", "interval": "24 óránként", "notes": "" },
        "gfr_lt_10": { "dose": "500mg", "interval": "48 óránként", "notes": "" },
        "hd": { "dose": "1g", "interval": "HD után", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "1-2g", "interval": "12 óránként", "notes": "" }
    },
    {
        "antibiotic_name": "Ceftazidime-avibactam",
        "gfr_gt_50": { "dose": "2.5g", "interval": "8 óránként", "notes": "Nincs módosítás." },
        "gfr_30_50": { "dose": "1.25g", "interval": "8 óránként", "notes": "" },
        "gfr_10_29": { "dose": "0.94g", "interval": "12 óránként", "notes": "GFR 16-30 ml/min tartomány." },
        "gfr_lt_10": { "dose": "0.94g", "interval": "48 óránként", "notes": "GFR <15 ml/min tartomány." },
        "hd": { "dose": "0.94g", "interval": "HD után", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "1.25g", "interval": "8 óránként", "notes": "" }
    },
    {
        "antibiotic_name": "Ceftolozane-tazobactam",
        "gfr_gt_50": { "dose": "1.5g", "interval": "8 óránként", "notes": "Nincs módosítás." },
        "gfr_30_50": { "dose": "750mg", "interval": "8 óránként", "notes": "" },
        "gfr_10_29": { "dose": "375mg", "interval": "8 óránként", "notes": "" },
        "gfr_lt_10": { "dose": "75mg", "interval": "8 óránként", "notes": "225mg telítő dózis." },
        "hd": { "dose": "75mg", "interval": "8 óránként", "notes": "225mg telítő dózis, majd pótdózis dialízis után." },
        "crrt": { "dose": "750mg", "interval": "8 óránként", "notes": "" }
    },
    {
        "antibiotic_name": "Ceftaroline-avibactam",
        "gfr_gt_50": { "dose": "600mg", "interval": "12 óránként", "notes": "Nincs módosítás." },
        "gfr_30_50": { "dose": "400mg", "interval": "12 óránként", "notes": "" },
        "gfr_10_29": { "dose": "300mg", "interval": "12 óránként", "notes": "" },
        "gfr_lt_10": { "dose": "200mg", "interval": "12 óránként", "notes": "" },
        "hd": { "dose": "200mg", "interval": "12 óránként", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "400mg", "interval": "12 óránként", "notes": "" }
    },
    {
        "antibiotic_name": "Cefepime-taniborbactam",
        "gfr_gt_50": { "dose": "2.5g", "interval": "8 óránként", "notes": "CrCl >50 ml/min esetén." },
        "gfr_30_50": { "dose": "1.25g", "interval": "8 óránként", "notes": "CrCl 30-49 ml/min tartomány." },
        "gfr_10_29": { "dose": "0.94g", "interval": "8 óránként", "notes": "CrCl 15-29 ml/min tartomány." },
        "gfr_lt_10": { "dose": "0.625g", "interval": "8 óránként", "notes": "" },
        "hd": { "dose": "0.625g", "interval": "HD után", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "1.25g", "interval": "8 óránként", "notes": "" }
    },
    {
        "antibiotic_name": "Cefiderocol",
        "gfr_gt_50": { "dose": "2g", "interval": "8 óránként", "notes": "Nincs módosítás." },
        "gfr_30_50": { "dose": "2g", "interval": "8 óránként", "notes": "GFR 30-59 ml/min tartomány." },
        "gfr_10_29": { "dose": "1.5g", "interval": "8 óránként", "notes": "GFR 15-29 ml/min tartomány." },
        "gfr_lt_10": { "dose": "1g", "interval": "12 óránként", "notes": "" },
        "hd": { "dose": "1g", "interval": "HD után", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "2g", "interval": "8 óránként", "notes": "" }
    }
,
    {
        "antibiotic_name": "Penicillin V",
        "gfr_gt_50": { "dose": "250-500mg", "interval": "6-8 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Használata nem javasolt", "interval": "", "notes": "CrCl <10 ml/min" },
        "hd": { "dose": "Használata nem javasolt.", "interval": "", "notes": "" },
        "crrt": { "dose": "Használata nem javasolt.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Oxacillin",
        "gfr_gt_50": { "dose": "1-2g", "interval": "4-6 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "hd": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Amoxicillin-klavulánsav",
        "gfr_gt_50": { "dose": "1.2g IV", "interval": "8 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "1.2g IV", "interval": "12 óránként", "notes": "" },
        "gfr_lt_10": { "dose": "1.2g IV", "interval": "24 óránként", "notes": "CrCl <10 ml/min" },
        "hd": { "dose": "1.2g IV", "interval": "24 óránként", "notes": "pótdózis a dialízis után." },
        "crrt": { "dose": "Normál dózis adható.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Ampicillin",
        "gfr_gt_50": { "dose": "1-2g", "interval": "4-6 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Normál dózis", "interval": "8 óránként", "notes": "" },
        "gfr_10_29": { "dose": "Normál dózis", "interval": "12 óránként", "notes": "" },
        "gfr_lt_10": { "dose": "Normál dózis", "interval": "12-24 óránként", "notes": "CrCl <10 ml/min" },
        "hd": { "dose": "Pótdózis szükséges a dialízis után.", "interval": "", "notes": "" },
        "crrt": { "dose": "Normál dózis adható.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Ampicillin-sulbactam",
        "gfr_gt_50": { "dose": "1.5-3g", "interval": "6 óránként", "notes": "Nincs szükség módosításra CrCl >30 esetén." },
        "gfr_30_50": { "dose": "Nincs szükség módosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "1.5-3g", "interval": "12 óránként", "notes": "CrCl 15-29 ml/min" },
        "gfr_lt_10": { "dose": "1.5-3g", "interval": "24 óránként", "notes": "CrCl <15 ml/min" },
        "hd": { "dose": "1.5-3g", "interval": "24 óránként", "notes": "pótdózis dialízis után." },
        "crrt": { "dose": "Normál dózis adható.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Flucloxacillin",
        "gfr_gt_50": { "dose": "1-2g", "interval": "6 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "hd": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Imipenem-cilastatin",
        "gfr_gt_50": { "dose": "500mg", "interval": "6 óránként", "notes": "Nincs szükség módosításra CrCl >50 esetén." },
        "gfr_30_50": { "dose": "500mg", "interval": "8 óránként", "notes": "CrCl 30-50 ml/min" },
        "gfr_10_29": { "dose": "500mg", "interval": "12 óránként", "notes": "CrCl 10-29 ml/min" },
        "gfr_lt_10": { "dose": "250mg", "interval": "12 óránként", "notes": "CrCl <10 ml/min" },
        "hd": { "dose": "250-500mg", "interval": "12 óránként", "notes": "pótdózis dialízis után." },
        "crrt": { "dose": "Dózismódosítás szükséges.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Ertapenem",
        "gfr_gt_50": { "dose": "1g", "interval": "24 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "500mg", "interval": "24 óránként", "notes": "CrCl <30 ml/min" },
        "gfr_lt_10": { "dose": "500mg", "interval": "24 óránként", "notes": "CrCl <30 ml/min" },
        "hd": { "dose": "Pótdózis szükséges a dialízis után", "interval": "", "notes": "ha az utolsó adag 6 órán belül volt." },
        "crrt": { "dose": "Normál dózis adható.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Doripenem",
        "gfr_gt_50": { "dose": "500mg", "interval": "8 óránként", "notes": "Nincs szükség módosításra CrCl >50 esetén." },
        "gfr_30_50": { "dose": "250mg", "interval": "8 óránként", "notes": "CrCl 30-50 ml/min" },
        "gfr_10_29": { "dose": "250mg", "interval": "12 óránként", "notes": "CrCl <30 ml/min" },
        "gfr_lt_10": { "dose": "250mg", "interval": "12 óránként", "notes": "CrCl <30 ml/min" },
        "hd": { "dose": "250mg", "interval": "12 óránként", "notes": "pótdózis dialízis után." },
        "crrt": { "dose": "Dózismódosítás szükséges.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Imipenem-cilastatin-relebactam",
        "gfr_gt_50": { "dose": "500mg/250mg/250mg", "interval": "6 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "400mg/200mg/100mg", "interval": "", "notes": "GFR 30-59 ml/min" },
        "gfr_10_29": { "dose": "300mg/150mg/75mg", "interval": "", "notes": "GFR 15-29 ml/min" },
        "gfr_lt_10": { "dose": "200mg/100mg/50mg", "interval": "", "notes": "GFR <15 ml/min" },
        "hd": { "dose": "Pótdózis szükséges a dialízis után.", "interval": "", "notes": "" },
        "crrt": { "dose": "Dózismódosítás szükséges.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Meropenem-vaborbactam",
        "gfr_gt_50": { "dose": "4g", "interval": "8 óránként", "notes": "Nincs szükség módosításra CrCl >50 esetén." },
        "gfr_30_50": { "dose": "2g", "interval": "8 óránként", "notes": "CrCl 30-49 ml/min" },
        "gfr_10_29": { "dose": "1g", "interval": "8 óránként", "notes": "CrCl 15-29 ml/min" },
        "gfr_lt_10": { "dose": "1g", "interval": "12 óránként", "notes": "CrCl <15 ml/min" },
        "hd": { "dose": "1g", "interval": "12 óránként", "notes": "pótdózis dialízis után." },
        "crrt": { "dose": "Dózismódosítás szükséges.", "interval": "", "notes": "" }
    }
,
    {
        "antibiotic_name": "Nalidixic acid",
        "gfr_gt_50": { "dose": "1g", "interval": "6 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Használata nem javasolt.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Használata nem javasolt.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Használata nem javasolt.", "interval": "", "notes": "" },
        "hd": { "dose": "Használata nem javasolt.", "interval": "", "notes": "" },
        "crrt": { "dose": "Használata nem javasolt.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Ofloxacin",
        "gfr_gt_50": { "dose": "200-400mg", "interval": "12 óránként", "notes": "Nincs szükség módosításra CrCl >50 esetén." },
        "gfr_30_50": { "dose": "200-400mg", "interval": "24 óránként", "notes": "CrCl 10-50 ml/min" },
        "gfr_10_29": { "dose": "200-400mg", "interval": "24 óránként", "notes": "CrCl 10-50 ml/min" },
        "gfr_lt_10": { "dose": "100-200mg", "interval": "24 óránként", "notes": "CrCl <10 ml/min" },
        "hd": { "dose": "100-200mg", "interval": "24 óránként", "notes": "dialízis után." },
        "crrt": { "dose": "Dózismódosítás szükséges.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Levofloxacin",
        "gfr_gt_50": { "dose": "750mg", "interval": "24 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "750mg kezdő, majd 750mg", "interval": "48 óránként", "notes": "GFR 20-49 ml/min" },
        "gfr_10_29": { "dose": "750mg kezdő, majd 500mg", "interval": "48 óránként", "notes": "GFR <20 ml/min" },
        "gfr_lt_10": { "dose": "750mg kezdő, majd 500mg", "interval": "48 óránként", "notes": "GFR <20 ml/min" },
        "hd": { "dose": "500mg kezdő, majd 250mg", "interval": "48 óránként", "notes": "dialízis után." },
        "crrt": { "dose": "Dózismódosítás szükséges.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Moxifloxacin",
        "gfr_gt_50": { "dose": "400mg", "interval": "24 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "hd": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Delafloxacin",
        "gfr_gt_50": { "dose": "300mg IV", "interval": "12 óránként", "notes": "Nincs szükség módosításra CrCl >30 esetén." },
        "gfr_30_50": { "dose": "Nincs szükség módosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "200mg IV", "interval": "12 óránként", "notes": "CrCl 15-29 ml/min" },
        "gfr_lt_10": { "dose": "150mg IV", "interval": "12 óránként", "notes": "CrCl <15 ml/min" },
        "hd": { "dose": "150mg IV", "interval": "12 óránként", "notes": "pótdózis dialízis után." },
        "crrt": { "dose": "Dózismódosítás szükséges.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Telavancin",
        "gfr_gt_50": { "dose": "10mg/kg", "interval": "24 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "7.5mg/kg", "interval": "24 óránként", "notes": "GFR 30-50 ml/min" },
        "gfr_10_29": { "dose": "10mg/kg", "interval": "48 óránként", "notes": "GFR <30 ml/min" },
        "gfr_lt_10": { "dose": "10mg/kg", "interval": "48 óránként", "notes": "GFR <30 ml/min" },
        "hd": { "dose": "10mg/kg", "interval": "48 óránként", "notes": "dialízis után." },
        "crrt": { "dose": "Dózismódosítás szükséges.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Dalbavancin",
        "gfr_gt_50": { "dose": "1500mg egyszeri, vagy 1000mg majd 500mg 1 hét múlva", "interval": "", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "750mg egyszeri, majd 375mg 1 hét múlva", "interval": "", "notes": "GFR <30 ml/min" },
        "gfr_lt_10": { "dose": "750mg egyszeri, majd 375mg 1 hét múlva", "interval": "", "notes": "GFR <30 ml/min" },
        "hd": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Oritavancin",
        "gfr_gt_50": { "dose": "1200mg", "interval": "egyszeri dózis", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "hd": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" }
    }
,
    {
        "antibiotic_name": "Piperacillin",
        "gfr_gt_50": { "dose": "4g", "interval": "6 óránként", "notes": "Nincs szükség módosításra CrCl >40 esetén." },
        "gfr_30_50": { "dose": "4g", "interval": "8 óránként", "notes": "CrCl 20-40 ml/min" },
        "gfr_10_29": { "dose": "4g", "interval": "8 óránként", "notes": "CrCl 20-40 ml/min" },
        "gfr_lt_10": { "dose": "4g", "interval": "12 óránként", "notes": "CrCl <20 ml/min" },
        "hd": { "dose": "2g", "interval": "8 óránként", "notes": "pótdózis dialízis után." },
        "crrt": { "dose": "Dózismódosítás szükséges.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Aztreonam",
        "gfr_gt_50": { "dose": "1-2g", "interval": "8-12 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "50-75% dózis.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "50-75% dózis.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "25% dózis", "interval": "", "notes": "CrCl <10 ml/min" },
        "hd": { "dose": "25% pótdózis dialízis után.", "interval": "", "notes": "" },
        "crrt": { "dose": "Dózismódosítás szükséges.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Amikacin",
        "gfr_gt_50": { "dose": "15 mg/kg", "interval": "24 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Dóziscsökkentés vagy intervallum növelése", "interval": "", "notes": "plazmaszint alapján." },
        "gfr_10_29": { "dose": "Dóziscsökkentés vagy intervallum növelése", "interval": "", "notes": "plazmaszint alapján." },
        "gfr_lt_10": { "dose": "Dóziscsökkentés vagy intervallum növelése", "interval": "", "notes": "plazmaszint alapján." },
        "hd": { "dose": "10-15 mg/kg pótdózis dialízis után.", "interval": "", "notes": "" },
        "crrt": { "dose": "Dózismódosítás szükséges", "interval": "", "notes": "plazmaszint monitorozás javasolt." }
    },
    {
        "antibiotic_name": "Plazomicin",
        "gfr_gt_50": { "dose": "15 mg/kg", "interval": "24 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Dóziscsökkentés vagy intervallum növelése", "interval": "", "notes": "plazmaszint alapján." },
        "gfr_10_29": { "dose": "Dóziscsökkentés vagy intervallum növelése", "interval": "", "notes": "plazmaszint alapján." },
        "gfr_lt_10": { "dose": "Dóziscsökkentés vagy intervallum növelése", "interval": "", "notes": "plazmaszint alapján." },
        "hd": { "dose": "7.5 mg/kg pótdózis dialízis után.", "interval": "", "notes": "" },
        "crrt": { "dose": "Dózismódosítás szükséges", "interval": "", "notes": "plazmaszint monitorozás javasolt." }
    },
    {
        "antibiotic_name": "Teicoplanin",
        "gfr_gt_50": { "dose": "6-12 mg/kg", "interval": "12 óránként 3 dózis, majd 24 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "50% dózis", "interval": "", "notes": "GFR 30-80 ml/min" },
        "gfr_10_29": { "dose": "33% dózis", "interval": "", "notes": "GFR <30 ml/min" },
        "gfr_lt_10": { "dose": "33% dózis", "interval": "", "notes": "GFR <30 ml/min" },
        "hd": { "dose": "10. napon 33% dózis.", "interval": "", "notes": "" },
        "crrt": { "dose": "Normál dózis adható.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Erythromycin",
        "gfr_gt_50": { "dose": "250-500mg", "interval": "6 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "50-75% dózis", "interval": "", "notes": "CrCl <10 ml/min" },
        "hd": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Azithromycin",
        "gfr_gt_50": { "dose": "500mg", "interval": "24 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "hd": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Clarithromycin",
        "gfr_gt_50": { "dose": "500mg", "interval": "12 óránként", "notes": "Nincs szükség módosításra CrCl >30 esetén." },
        "gfr_30_50": { "dose": "Nincs szükség módosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "50% dózis", "interval": "", "notes": "CrCl <30 ml/min" },
        "gfr_lt_10": { "dose": "50% dózis", "interval": "", "notes": "CrCl <30 ml/min" },
        "hd": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Roxithromycin",
        "gfr_gt_50": { "dose": "150-300mg", "interval": "12 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "50% dózis", "interval": "", "notes": "CrCl <10 ml/min" },
        "hd": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Spiramycin",
        "gfr_gt_50": { "dose": "1-2g", "interval": "8-12 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "hd": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Clindamycin",
        "gfr_gt_50": { "dose": "600-900mg", "interval": "8 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "hd": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Doxycycline",
        "gfr_gt_50": { "dose": "100mg", "interval": "12 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "hd": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Tigecycline",
        "gfr_gt_50": { "dose": "100mg telítő, majd 50mg", "interval": "12 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "hd": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Minocycline",
        "gfr_gt_50": { "dose": "200mg telítő, majd 100mg", "interval": "12 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "hd": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Eravacycline",
        "gfr_gt_50": { "dose": "1 mg/kg", "interval": "12 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "hd": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Sarecycline",
        "gfr_gt_50": { "dose": "60-150mg", "interval": "24 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "hd": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Omadacycline",
        "gfr_gt_50": { "dose": "100mg IV 12 óránként 2 dózis, majd 100mg IV 24 óránként", "interval": "", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "hd": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Tedizolid",
        "gfr_gt_50": { "dose": "200mg", "interval": "24 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "hd": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Quinupristin-dalfopristin",
        "gfr_gt_50": { "dose": "7.5 mg/kg", "interval": "8-12 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "hd": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Chloramphenicol",
        "gfr_gt_50": { "dose": "50 mg/kg/nap", "interval": "4 részre osztva", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "hd": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Fosfomycin",
        "gfr_gt_50": { "dose": "4-6g", "interval": "8 óránként", "notes": "Nincs szükség módosításra CrCl >40 esetén." },
        "gfr_30_50": { "dose": "70-80% dózis", "interval": "", "notes": "CrCl 20-39 ml/min" },
        "gfr_10_29": { "dose": "60-70% dózis", "interval": "", "notes": "CrCl 10-19 ml/min" },
        "gfr_lt_10": { "dose": "50% dózis", "interval": "", "notes": "CrCl <10 ml/min" },
        "hd": { "dose": "Pótdózis szükséges a dialízis után.", "interval": "", "notes": "" },
        "crrt": { "dose": "Dózismódosítás szükséges.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Nitrofurantoin",
        "gfr_gt_50": { "dose": "50-100mg", "interval": "6 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Kerülendő", "interval": "", "notes": "GFR <30 ml/min" },
        "gfr_lt_10": { "dose": "Kerülendő", "interval": "", "notes": "GFR <30 ml/min" },
        "hd": { "dose": "Kerülendő.", "interval": "", "notes": "" },
        "crrt": { "dose": "Kerülendő.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Rifampin",
        "gfr_gt_50": { "dose": "600mg", "interval": "24 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "hd": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Rifabutin",
        "gfr_gt_50": { "dose": "300mg", "interval": "24 óránként", "notes": "Nincs szükség módosításra CrCl >50 esetén." },
        "gfr_30_50": { "dose": "50% dózis", "interval": "", "notes": "CrCl <50 ml/min" },
        "gfr_10_29": { "dose": "50% dózis", "interval": "", "notes": "CrCl <50 ml/min" },
        "gfr_lt_10": { "dose": "50% dózis", "interval": "", "notes": "CrCl <50 ml/min" },
        "hd": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Rifaximin",
        "gfr_gt_50": { "dose": "200-550mg", "interval": "8-12 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "hd": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Polymyxin B",
        "gfr_gt_50": { "dose": "1.25-1.5 mg/kg", "interval": "12 óránként", "notes": "Nincs szükség módosításra CrCl >80 esetén." },
        "gfr_30_50": { "dose": "1 mg/kg", "interval": "12 óránként", "notes": "CrCl 20-49 ml/min" },
        "gfr_10_29": { "dose": "1 mg/kg", "interval": "12 óránként", "notes": "CrCl 20-49 ml/min" },
        "gfr_lt_10": { "dose": "1 mg/kg", "interval": "24 óránként", "notes": "CrCl <20 ml/min" },
        "hd": { "dose": "1 mg/kg", "interval": "48 óránként", "notes": "pótdózis dialízis után." },
        "crrt": { "dose": "Dózismódosítás szükséges.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Bacitracin",
        "gfr_gt_50": { "dose": "Nincs szükség dózismódosításra (topikális).", "interval": "", "notes": "" },
        "gfr_30_50": { "dose": "Nincs szükség dózismódosításra (topikális).", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs szükség dózismódosításra (topikális).", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Nincs szükség dózismódosításra (topikális).", "interval": "", "notes": "" },
        "hd": { "dose": "Nincs szükség dózismódosításra (topikális).", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs szükség dózismódosításra (topikális).", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Colistin",
        "gfr_gt_50": { "dose": "2.5-5 mg/kg/nap", "interval": "2-4 részre osztva", "notes": "Nincs szükség módosításra CrCl >80 esetén." },
        "gfr_30_50": { "dose": "1.5 mg/kg", "interval": "12 óránként", "notes": "CrCl 30-49 ml/min" },
        "gfr_10_29": { "dose": "1.5 mg/kg", "interval": "24 óránként", "notes": "CrCl <30 ml/min" },
        "gfr_lt_10": { "dose": "1.5 mg/kg", "interval": "24 óránként", "notes": "CrCl <30 ml/min" },
        "hd": { "dose": "1.5 mg/kg", "interval": "48 óránként", "notes": "pótdózis dialízis után." },
        "crrt": { "dose": "Dózismódosítás szükséges.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Fluconazole",
        "gfr_gt_50": { "dose": "200-800mg", "interval": "24 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "50% dózis.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "50% dózis.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "50% dózis.", "interval": "", "notes": "" },
        "hd": { "dose": "Normál dózis dialízis után.", "interval": "", "notes": "" },
        "crrt": { "dose": "Normál dózis adható.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Voriconazole",
        "gfr_gt_50": { "dose": "6 mg/kg telítő, majd 4 mg/kg", "interval": "12 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "hd": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Caspofungin",
        "gfr_gt_50": { "dose": "70mg telítő, majd 50mg", "interval": "24 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "hd": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Amphotericin B",
        "gfr_gt_50": { "dose": "0.25-1.5 mg/kg/nap", "interval": "", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "hd": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Vancomycin (inhalációs)",
        "gfr_gt_50": { "dose": "125-250mg", "interval": "12 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "hd": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Tobramycin (inhalációs)",
        "gfr_gt_50": { "dose": "300mg", "interval": "12 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "hd": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Lefamulin",
        "gfr_gt_50": { "dose": "150mg IV 12 óránként vagy 600mg PO 12 óránként", "interval": "", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "hd": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Mupirocin",
        "gfr_gt_50": { "dose": "Nincs szükség dózismódosításra (topikális).", "interval": "", "notes": "" },
        "gfr_30_50": { "dose": "Nincs szükség dózismódosításra (topikális).", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs szükség dózismódosításra (topikális).", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Nincs szükség dózismódosításra (topikális).", "interval": "", "notes": "" },
        "hd": { "dose": "Nincs szükség dózismódosításra (topikális).", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs szükség dózismódosításra (topikális).", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Fusidinsav",
        "gfr_gt_50": { "dose": "500mg", "interval": "8 óránként", "notes": "Nincs szükség dózismódosításra." },
        "gfr_30_50": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "hd": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs szükség dózismódosításra.", "interval": "", "notes": "" }
    }
]
