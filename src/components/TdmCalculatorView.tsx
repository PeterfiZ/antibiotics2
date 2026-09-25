import React, { useState, useMemo } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import {
  Calculator,
  Info,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  Activity,
  ShieldAlert,
  User,
  Sliders
} from 'lucide-react';

interface PatientParams {
  age: string;
  weight: string;
  gender: 'male' | 'female';
  creatinine: string;
  creatinineUnit: 'umol' | 'mgdl';
  rrt: 'none' | 'hd' | 'crrt';
}

interface TdmParams {
  drugId: 'gentamicin' | 'amikacin' | 'vancomycin' | 'voriconazole';
  weight: string;
  currentDose: string;
  currentInterval: string; // hours
  measuredTrough: string;
  measuredPeak: string; // optional for aminoglycosides
  rrt: 'none' | 'hd' | 'crrt';
}

export default function TdmCalculatorView() {
  const { language, t } = useLanguage();
  const [activeSubTab, setActiveSubTab] = useState<'initial' | 'tdm'>('initial');

  // Local translations dictionary to maintain high performance and self-containment
  const localT = {
    hu: {
      title: "TDM & Dózis Tervező",
      subtitle: "Terápiás gyógyszerszint-monitorozás (TDM) és kezdődózis kalkulátor",
      tab_initial: "Kezdődózis Tervező",
      tab_tdm: "TDM Értékelés (Völgy/Csúcs & AUC)",
      patient_params: "Beteg paraméterei",
      age: "Életkor (év)",
      weight: "Testtömeg (kg)",
      gender: "Biológiai nem",
      male: "Férfi",
      female: "Nő",
      creatinine: "Szérum kreatinin",
      calculate: "Számítás és Tervezés",
      reset: "Alaphelyzet",
      crcl_result: "Számított Kreatinin-clearance (Cockcroft-Gault)",
      normal_renal: "Normál vesefunkció",
      mild_renal: "Enyhe veseelégtelenség",
      mod_renal: "Középsúlyos veseelégtelenség",
      sev_renal: "Súlyos veseelégtelenség",
      end_stage: "Végstádiumú veseelégtelenség",
      select_drug: "Válassz gyógyszert",
      loading_dose: "Kezdő / Telítő dózis (Loading Dose)",
      maintenance_dose: "Fenntartó dózis (Maintenance Dose)",
      dosing_interval: "Adagolási időköz (Interval)",
      clinical_tips: "Klinikai tanácsok & Figyelmeztetések",
      tdm_title: "Aktuális terápia és mért szintek",
      patient_weight_label: "Beteg testtömege (kg)",
      current_dose: "Aktuális dózis (mg)",
      interval_hrs: "Aktuális időköz (óra)",
      measured_trough: "Mért völgykoncentráció (Trough) [mg/L vagy µg/mL]",
      measured_peak: "Mért csúcskoncentráció (Peak) (opcionális) [mg/L]",
      evaluate: "Gyógyszerszint Kiértékelése",
      target_range: "Cél tartomány",
      measured_value: "Mért érték",
      evaluation_result: "TDM Kiértékelés Eredménye",
      status_sub: "Szubterápiás szint (Alacsony)",
      status_therapeutic: "Terápiás tartományban (Optimális)",
      status_toxic: "Toxikus tartományban (Magas veszély!)",
      recommendation: "Klinikai javaslat és módosítás",
      model_note_title: "Alkalmazott farmakokinetikai modell (PK/PD)",
      model_note_desc: "A TDM kalkulátor 1-kompartmentes lineáris farmakokinetikai modellt alkalmaz (Sawchuk-Zaske módszer / Matzke-féle elsőrendű eliminációs kinetika), a vesefunkció és elimináció becslésére a Cockcroft-Gault kreatinin-clearance (CrCl) képletet használva. Vancomycin (AUC24/MIC 400–600 mg·h/L) és Aminoglikozidok (IDSA 2026 konszenzus: Gentamicin AUC24 80–120 mg·h/L, Amikacin AUC24 200–300 mg·h/L) esetén a terápiavezérlés aranystandardja az AUC-vezérelt monitorozás az optimális hatékonyság elérése és a nefro/ototoxicitás (AKI) minimalizálása érdekében.",
      tips_vancomycin: "Vancomycin esetében a figyelmeztetésekhez és a terápiavezérléshez az AUC/MIC meghatározása és a megfelelő tartomány a cél (a nemzetközi guideline-ok [ASHP/IDSA/PIDS/SIDP 2020] alapján megfelelőnek tartott tartomány: AUC24/MIC 400–600 mg·h/L, feltételezve, hogy a MIC = 1 mg/L). A korábbi kizárólagos völgykoncentráció-cél (15–20 mg/L súlyos, vagy 10–15 mg/L enyhe fertőzésben) szurrogátumként szolgálhat, de az AUC-vezérelt monitorozás igazoltan minimalizálja az akut vesekárosodás (AKI) és nefrotoxicitás kockázatát. 600 mg·h/L feletti AUC (vagy > 20 mg/L völgy) esetén a nefrotoxicitás rizikója drasztikusan megnő, míg < 400 mg·h/L esetén kezelési kudarc léphet fel. Mintavétel: közvetlenül a 4. vagy 5. dózis előtt (steady state).",
      tips_gentamicin: "Gentamicin esetén az IDSA 2026-os konszenzus irányelv alapján az elsődleges terápiás cél az AUC24 80–120 mg·h/L céltartomány elérése (völgykoncentráció < 1.0 mg/L, ideálisan < 0.5 mg/L mellett). 120 mg·h/L feletti AUC24 expozíció vagy magas völgykoncentráció esetén szignifikánsan nő az akut vesekárosodás (AKI) és a belsőfül-károsodás (ototoxicitás) kockázata, míg < 80 mg·h/L expozíció esetén mikrobiológiai és terápiás kudarc léphet fel. Egyszeri napi adagolásnál (ODD, 5-7 mg/kg) a csúcskoncentráció ideálisan 16-20 mg/L.",
      tips_amikacin: "Amikacin esetén az IDSA 2026-os irányelv szerint a terápiás cél az AUC24 200–300 mg·h/L tartomány biztosítása (völgykoncentráció < 5.0 mg/L, ideálisan < 2.5–4.0 mg/L mellett). 300 mg·h/L feletti AUC24 expozíció esetén a cochleáris/vesztibuláris ototoxicitás és nefrotoxicitás veszélye kifejezetten magas, míg < 200 mg·h/L expozíció mellett elégtelen a baktericid hatás. ODD adagolásnál (15-20 mg/kg) a csúcsszint 50-60 mg/L.",
      tips_voriconazole: "Voriconazolnál a TDM rendkívül fontos a nem-lineáris farmakokinetika és az egyéni különbségek miatt. A céltartomány szigorúan 1.5 - 5.0 mg/L. 5.5 - 6.0 mg/L felett kifejezett neurotoxicitás, látászavar és májkárosodás léphet fel.",
      rrt_label: "Vesehelyettesítő kezelés",
      rrt_none: "Nincs dialízis",
      rrt_hd: "Hemodialízis (HD)",
      rrt_crrt: "CRRT (folyamatos)",
      action_plan_title: "Dózis-módosítási Akcióterv",
      skip_doses_label: "Kihagyandó dózisok száma",
      new_dose_label: "Javasolt új fenntartó dózis",
      booster_dose_label: "Booster (plusz) dózis",
      new_interval_label: "Javasolt új időköz",
      yes: "Igen",
      no: "Nem",
      rrt_info_banner: "Vesehelyettesítő kezelés miatt az adagolás a dialízis modalitásán alapul, nem a Cockcroft-Gault clearance-en."
    },
    en: {
      title: "TDM & Dose Planner",
      subtitle: "Therapeutic Drug Monitoring (TDM) and initial dosing calculator",
      tab_initial: "Initial Dose Planner",
      tab_tdm: "TDM Evaluation (Trough/Peak & AUC)",
      patient_params: "Patient Parameters",
      age: "Age (years)",
      weight: "Weight (kg)",
      gender: "Biological Gender",
      male: "Male",
      female: "Female",
      creatinine: "Serum Creatinine",
      calculate: "Calculate & Plan",
      reset: "Reset",
      crcl_result: "Calculated Creatinine Clearance (Cockcroft-Gault)",
      normal_renal: "Normal renal function",
      mild_renal: "Mild renal impairment",
      mod_renal: "Moderate renal impairment",
      sev_renal: "Severe renal impairment",
      end_stage: "End-stage renal disease",
      select_drug: "Select Drug",
      loading_dose: "Loading Dose",
      maintenance_dose: "Maintenance Dose",
      dosing_interval: "Dosing Interval",
      clinical_tips: "Clinical Tips & Warnings",
      tdm_title: "Current Regimen & Measured Levels",
      patient_weight_label: "Patient Weight (kg)",
      current_dose: "Current Dose (mg)",
      interval_hrs: "Current Interval (hours)",
      measured_trough: "Measured Trough Concentration [mg/L or µg/mL]",
      measured_peak: "Measured Peak Concentration (optional) [mg/L]",
      evaluate: "Evaluate TDM Levels",
      target_range: "Target Range",
      measured_value: "Measured Value",
      evaluation_result: "TDM Evaluation Result",
      status_sub: "Subtherapeutic Level (Low)",
      status_therapeutic: "Therapeutic Range (Optimal)",
      status_toxic: "Toxic Range (High Danger!)",
      recommendation: "Clinical Recommendation",
      model_note_title: "Pharmacokinetic Model Used (PK/PD)",
      model_note_desc: "The TDM calculator applies a 1-compartment linear pharmacokinetic model (Sawchuk-Zaske method / Matzke first-order elimination kinetics), estimating renal function and clearance with the Cockcroft-Gault formula. For Vancomycin (AUC24/MIC 400–600 mg·h/L) and Aminoglycosides (IDSA 2026 guidelines: Gentamicin AUC24 80–120 mg·h/L, Amikacin AUC24 200–300 mg·h/L), AUC-guided monitoring is the clinical gold standard to balance efficacy and minimize nephrotoxicity (AKI) and ototoxicity.",
      tips_vancomycin: "For Vancomycin, clinical warnings and monitoring emphasize that determining the AUC/MIC ratio and achieving the appropriate target range is the primary goal (guideline-recommended target range [ASHP/IDSA/PIDS/SIDP 2020]: AUC24/MIC 400–600 mg·h/L, assuming MIC = 1 mg/L). Surrogate trough levels (15–20 mg/L for severe infections, 10–15 mg/L for mild infections) can serve if AUC tools are unavailable, but AUC-guided dosing significantly minimizes acute kidney injury (AKI) and nephrotoxicity. Levels of AUC > 600 mg·h/L (or trough > 20 mg/L) sharply increase nephrotoxicity, whereas AUC < 400 mg·h/L risks microbiological failure. Draw trough levels immediately prior to the 4th or 5th dose (steady state).",
      tips_gentamicin: "For Gentamicin, per the IDSA 2026 consensus guidelines, the primary therapeutic target is an AUC24 of 80–120 mg·h/L (with trough < 1.0 mg/L, ideally < 0.5 mg/L). AUC24 exposures exceeding 120 mg·h/L or elevated trough levels significantly increase nephrotoxicity (AKI) and irreversible ototoxicity risks, while AUC24 < 80 mg·h/L carries a risk of clinical failure. In once-daily dosing (ODD, 5-7 mg/kg), target peak is 16-20 mg/L.",
      tips_amikacin: "For Amikacin, according to the IDSA 2026 guidelines, the target AUC24 range is 200–300 mg·h/L (with trough < 5.0 mg/L, ideally < 2.5–4.0 mg/L). AUC24 exposures above 300 mg·h/L significantly increase cochlear/vestibular ototoxicity and nephrotoxicity, whereas AUC24 < 200 mg·h/L risks microbiological underdosing and treatment failure. For once-daily dosing (15-20 mg/kg), target peak is 50-60 mg/L.",
      tips_voriconazole: "For Voriconazole, TDM is highly recommended due to non-linear pharmacokinetics. Target trough is strictly 1.5 - 5.0 mg/L. Levels above 5.5 - 6.0 mg/L are associated with neurotoxicity, visual disturbances, and hepatotoxicity.",
      rrt_label: "Renal Replacement Therapy",
      rrt_none: "No dialysis",
      rrt_hd: "Hemodialysis (HD)",
      rrt_crrt: "CRRT (continuous)",
      action_plan_title: "Dose Modification Action Plan",
      skip_doses_label: "Doses to skip",
      new_dose_label: "Suggested new maintenance dose",
      booster_dose_label: "Booster (extra) dose",
      new_interval_label: "Suggested new interval",
      yes: "Yes",
      no: "No",
      rrt_info_banner: "Due to renal replacement therapy, dosing is based on dialysis modality, not on Cockcroft-Gault clearance."
    },
    de: {
      title: "TDM & Dosisplaner",
      subtitle: "Therapeutisches Drug Monitoring (TDM) und Initialdosis-Rechner",
      tab_initial: "Initialdosis-Planer",
      tab_tdm: "TDM-Auswertung (Tal/Spitze & AUC)",
      patient_params: "Patientenparameter",
      age: "Alter (Jahre)",
      weight: "Gewicht (kg)",
      gender: "Biologisches Geschlecht",
      male: "Männlich",
      female: "Weiblich",
      creatinine: "Serum-Kreatinin",
      calculate: "Berechnen & Planen",
      reset: "Zurücksetzen",
      crcl_result: "Berechnete Kreatinin-Clearance (Cockcroft-Gault)",
      normal_renal: "Normale Nierenfunktion",
      mild_renal: "Leichte Niereninsuffizienz",
      mod_renal: "Mittelschwere Niereninsuffizienz",
      sev_renal: "Schwere Niereninsuffizienz",
      end_stage: "Terminale Niereninsuffizienz",
      select_drug: "Medikament auswählen",
      loading_dose: "Anfangsdosis (Loading Dose)",
      maintenance_dose: "Erhaltungsdosis (Maintenance Dose)",
      dosing_interval: "Dosierungsintervall (Interval)",
      clinical_tips: "Klinische Tipps & Warnungen",
      tdm_title: "Aktuelle Therapie & gemessene Spiegel",
      patient_weight_label: "Patientengewicht (kg)",
      current_dose: "Aktuelle Dosis (mg)",
      interval_hrs: "Aktuelles Intervall (Stunden)",
      measured_trough: "Gemessene Talkonzentration (Trough) [mg/L oder µg/mL]",
      measured_peak: "Gemessene Spitzenkonzentration (Peak) (optional) [mg/L]",
      evaluate: "Spiegel Auswerten",
      target_range: "Zielbereich",
      measured_value: "Gemessener Wert",
      evaluation_result: "TDM-Auswertungsergebnis",
      status_sub: "Subtherapeutischer Spiegel (Niedrig)",
      status_therapeutic: "Im therapeutischen Bereich (Optimal)",
      status_toxic: "Toxischer Bereich (Hohe Gefahr!)",
      recommendation: "Klinische Empfehlung",
      model_note_title: "Verwendetes pharmakokinetisches Modell (PK/PD)",
      model_note_desc: "Der TDM-Rechner verwendet ein 1-Kompartiment-lineares pharmakokinetisches Modell (Sawchuk-Zaske-Methode / Matzke-Eliminationskinetik erster Ordnung) unter Verwendung der Cockcroft-Gault-Formel für die Nierenfunktion. Bei Vancomycin (AUC24/MHK 400–600 mg·h/L) und Aminoglykosiden (IDSA 2026-Leitlinie: Gentamicin AUC24 80–120 mg·h/L, Amikacin AUC24 200–300 mg·h/L) ist das AUC-gesteuerte TDM der klinische Goldstandard zur Optimierung der Wirksamkeit und Vermeidung von Nephro- und Ototoxizität.",
      tips_vancomycin: "Bei Vancomycin ist für die Warnhinweise und Dosissteuerung die Bestimmung von AUC/MHK und das Halten im adäquaten Zielbereich das primäre Ziel (leitlinienkonformer Zielbereich [ASHP/IDSA/PIDS/SIDP 2020]: AUC24/MHK 400–600 mg·h/L bei MHK = 1 mg/L). Die frühere alleinige Talspiegelsteuerung (15–20 mg/L bei schweren bzw. 10–15 mg/L bei leichten Infektionen) dient als Surrogat; AUC-gesteuertes TDM senkt nachweislich das Risiko einer akuten Nierenschädigung (AKI) und Nephrotoxizität. AUC > 600 mg·h/L (oder Talspiegel > 20 mg/L) steigert das Nephrotoxizitätsrisiko drastisch. Talspiegelentnahme unmittelbar vor der 4. oder 5. Dosis (Steady State).",
      tips_gentamicin: "Für Gentamicin gilt gemäß der IDSA 2026-Konsensusleitlinie ein primärer 24h-AUC-Zielbereich (AUC24) von 80–120 mg·h/L (bei einem Talspiegel < 1,0 mg/L, ideal < 0,5 mg/L). Eine AUC24 > 120 mg·h/L oder erhöhte Talspiegel steigern das Risiko für akute Nierenschädigung (AKI) und Ototoxizität drastisch, während < 80 mg·h/L das Therapieversagen begünstigt. Bei Einmaldosierung (ODD, 5-7 mg/kg) beträgt die Ziel-Spitze 16-20 mg/L.",
      tips_amikacin: "Für Amikacin liegt der Zielbereich gemäß der IDSA 2026-Leitlinie bei einer AUC24 von 200–300 mg·h/L (bei einem Talspiegel < 5,0 mg/L, ideal < 2,5–4,0 mg/L). Eine AUC24 > 300 mg·h/L steigert das Risiko für cochleäre/vestibuläre Ototoxizität und Nephrotoxizität erheblich, während < 200 mg·h/L unzureichende bakterizide Wirkung bedeutet. Bei Einmaldosierung (15-20 mg/kg) liegt die Ziel-Spitze bei 50-60 mg/L.",
      tips_voriconazole: "Bei Voriconazol ist ein TDM aufgrund der nichtlinearen Pharmakokinetik dringend erforderlich. Der Ziel-Talspiegel liegt streng bei 1,5 - 5,0 mg/L. Werte über 5,5 - 6,0 mg/L sind mit Neurotoxizität, Sehstörungen und Leberschäden assoziiert.",
      rrt_label: "Nierenersatztherapie",
      rrt_none: "Keine Dialyse",
      rrt_hd: "Hämodialyse (HD)",
      rrt_crrt: "CRRT (kontinuierlich)",
      action_plan_title: "Dosisanpassungs-Aktionsplan",
      skip_doses_label: "Auszulassende Dosen",
      new_dose_label: "Empfohlene neue Erhaltungsdosis",
      booster_dose_label: "Ladedosis (Zusatzdosis)",
      new_interval_label: "Empfohlenes neues Intervall",
      yes: "Ja",
      no: "Nein",
      rrt_info_banner: "Aufgrund einer Nierenersatztherapie basiert die Dosierung auf der Dialysemodalität, nicht auf der Cockcroft-Gault-Clearance."
    }
  };

  const currentLang = (language === 'hu' || language === 'en' || language === 'de') ? language : 'hu';
  const lt = localT[currentLang];

  const [hasCalculated, setHasCalculated] = useState(false);

  // State for initial dose planner
  const [patient, setPatient] = useState<PatientParams>({
    age: '65',
    weight: '75',
    gender: 'male',
    creatinine: '90',
    creatinineUnit: 'umol',
    rrt: 'none'
  });

  const [selectedInitialDrug, setSelectedInitialDrug] = useState<'gentamicin' | 'amikacin' | 'vancomycin' | 'voriconazole'>('vancomycin');
  const [calculatedCrCl, setCalculatedCrCl] = useState<number | null>(null);

  // State for TDM evaluation
  const [tdm, setTdm] = useState<TdmParams>({
    drugId: 'vancomycin',
    weight: '75',
    currentDose: '1000',
    currentInterval: '12',
    measuredTrough: '8.5',
    measuredPeak: '',
    rrt: 'none'
  });

  const [tdmResult, setTdmResult] = useState<{
    status: 'sub' | 'therapeutic' | 'toxic';
    interpretation: string;
    action: string;
    skipDoses: string | number;
    newDose: string;
    newInterval: string;
    boosterDose?: string;
    estimatedAuc24?: number;
  } | null>(null);

  // Calculate Creatinine Clearance (Cockcroft-Gault)
  const handleCalculateCrCl = () => {
    setHasCalculated(true);
    const ageNum = parseFloat(patient.age);
    const weightNum = parseFloat(patient.weight);
    const creatNum = parseFloat(patient.creatinine);

    if (patient.rrt !== 'none') {
      if (!isNaN(ageNum) && !isNaN(weightNum) && !isNaN(creatNum) && creatNum > 0) {
        let crcl = 0;
        if (patient.creatinineUnit === 'umol') {
          if (patient.gender === 'male') {
            crcl = ((140 - ageNum) * weightNum * 1.23) / creatNum;
          } else {
            crcl = ((140 - ageNum) * weightNum * 1.04) / creatNum;
          }
        } else {
          crcl = ((140 - ageNum) * weightNum) / (creatNum * 72);
          if (patient.gender === 'female') {
            crcl *= 0.85;
          }
        }
        setCalculatedCrCl(Math.round(crcl * 10) / 10);
      } else {
        setCalculatedCrCl(0);
      }
      return;
    }

    if (isNaN(ageNum) || isNaN(weightNum) || isNaN(creatNum) || creatNum <= 0) {
      return;
    }

    let crcl = 0;
    if (patient.creatinineUnit === 'umol') {
      // Cockcroft-Gault with micromol/L directly
      if (patient.gender === 'male') {
        crcl = ((140 - ageNum) * weightNum * 1.23) / creatNum;
      } else {
        crcl = ((140 - ageNum) * weightNum * 1.04) / creatNum;
      }
    } else {
      // with mg/dL
      crcl = ((140 - ageNum) * weightNum) / (creatNum * 72);
      if (patient.gender === 'female') {
        crcl *= 0.85;
      }
    }

    setCalculatedCrCl(Math.round(crcl * 10) / 10);
  };

  // Reset Initial Dosing inputs
  const handleResetInitial = () => {
    setPatient({
      age: '65',
      weight: '75',
      gender: 'male',
      creatinine: '90',
      creatinineUnit: 'umol',
      rrt: 'none'
    });
    setCalculatedCrCl(null);
    setHasCalculated(false);
  };

  // Renal impairment category helper
  const getRenalCategory = (crcl: number) => {
    if (crcl >= 90) return { label: lt.normal_renal, color: 'text-emerald-600 bg-emerald-50 border-emerald-200' };
    if (crcl >= 60) return { label: lt.mild_renal, color: 'text-blue-600 bg-blue-50 border-blue-200' };
    if (crcl >= 30) return { label: lt.mod_renal, color: 'text-amber-600 bg-amber-50 border-amber-200' };
    if (crcl >= 15) return { label: lt.sev_renal, color: 'text-orange-600 bg-orange-50 border-orange-200' };
    return { label: lt.end_stage, color: 'text-red-600 bg-red-50 border-red-200' };
  };

  // Initial dose planning results based on CrCl and Drug
  const initialSuggestions = useMemo(() => {
    if (calculatedCrCl === null && !hasCalculated) return null;

    const crcl = calculatedCrCl ?? 0;
    const wt = parseFloat(patient.weight) || 75;
    const rrtMode = patient.rrt;

    if (rrtMode === 'hd') {
      switch (selectedInitialDrug) {
        case 'vancomycin':
          let loadDose = Math.round((wt * 20) / 250) * 250;
          if (loadDose < 1000) loadDose = 1000;
          if (loadDose > 2250) loadDose = 2250;
          return {
            loading: currentLang === 'hu' 
              ? `${loadDose} mg IV (kb. 15-20 mg/kg)` 
              : currentLang === 'de'
              ? `${loadDose} mg i.v. (ca. 15-20 mg/kg)`
              : `${loadDose} mg IV (approx. 15-20 mg/kg)`,
            maintenance: "500 - 1000 mg IV",
            interval: currentLang === 'hu'
              ? "Minden HD kezelés után (post-dialízis)"
              : currentLang === 'de'
              ? "Nach jeder HD-Sitzung (Post-Dialyse)"
              : "After each HD session (post-dialysis)",
            notes: currentLang === 'hu'
              ? "Hemodialízis esetén a Vancomycin csak kismértékben eliminálódik hagyományos membránokon keresztül. A figyelmeztetések alapján az AUC/MIC meghatározása és a megfelelő tartomány a cél (guideline-ok alapján megfelelőnek tartott tartomány: AUC24/MIC 400–600 mg·h/L; hemodialízisnél a pre-HD szurrogátum völgykoncentráció 15–20 mg/L). Javasolt adagolás: telítő dózis után 500-1000 mg minden HD kezelés végén (post-dialízis)."
              : currentLang === 'de'
              ? "Vancomycin wird durch Standard-Dialysemembranen nur minimal eliminiert. Ziel der Warnhinweise ist die Bestimmung von AUC/MHK und das Erreichen des Zielbereichs (leitliniengerechter Zielbereich: AUC24/MHK 400–600 mg·h/L; Prä-HD-Surrogat 15–20 mg/L). Empfohlen: Nach Ladedosis 500-1000 mg nach jeder HD-Sitzung (Post-Dialyse)."
              : "Vancomycin is only minimally cleared by standard dialysis membranes. Clinical warnings emphasize that determining AUC/MIC and achieving the target range is the primary goal (guideline-recommended target range: AUC24/MIC 400–600 mg·h/L; pre-HD surrogate trough 15–20 mg/L). Suggested regimen: after loading, administer 500-1000 mg after each HD session (post-dialysis)."
          };
        case 'gentamicin':
          return {
            loading: currentLang === 'hu'
              ? `${Math.round(wt * 2)} mg IV (szinergizmus esetén: 1-1.5 mg/kg, súlyos szepszisben: 3-5 mg/kg)`
              : currentLang === 'de'
              ? `${Math.round(wt * 2)} mg i.v. (Synergie: 1-1,5 mg/kg, schwere Sepsis: 3-5 mg/kg)`
              : `${Math.round(wt * 2)} mg IV (synergy: 1-1.5 mg/kg, severe sepsis: 3-5 mg/kg)`,
            maintenance: currentLang === 'hu' ? "1.0 - 1.5 mg/kg IV" : currentLang === 'de' ? "1,0 - 1,5 mg/kg i.v." : "1.0 - 1.5 mg/kg IV",
            interval: currentLang === 'hu'
              ? "Minden HD kezelés után (post-dialízis)"
              : currentLang === 'de'
              ? "Nach jeder HD-Sitzung (Post-Dialyse)"
              : "After each HD session (post-dialysis)",
            notes: currentLang === 'hu'
              ? "Hemodialízis során az aminoglikozidok jelentős része (akár 50%-a) kiürül. Kezdő telítő adag után adjon 1.0-1.5 mg/kg-ot minden dialízis kezelés végén. TDM mérése javasolt a következő HD előtt (cél völgykoncentráció < 1.5-2.0 mg/L)."
              : currentLang === 'de'
              ? "Aminoglykoside werden während der Hämodialyse signifikant (bis zu 50 %) eliminiert. Nach einer Ladedosis 1,0-1,5 mg/kg nach jeder Dialysesitzung verabreichen. TDM sollte vor der nächsten HD gemessen werden (Ziel-Talspiegel < 1,5-2,0 mg/L)."
              : "Aminoglycosides are significantly cleared (up to 50%) during hemodialysis. Following a loading dose, administer 1.0-1.5 mg/kg after each dialysis session. TDM should be measured before the next HD (target trough < 1.5-2.0 mg/L)."
          };
        case 'amikacin':
          return {
            loading: currentLang === 'hu'
              ? `${Math.round(wt * 10)} mg IV (kb. 10-15 mg/kg)`
              : currentLang === 'de'
              ? `${Math.round(wt * 10)} mg i.v. (ca. 10-15 mg/kg)`
              : `${Math.round(wt * 10)} mg IV (approx. 10-15 mg/kg)`,
            maintenance: currentLang === 'hu' ? "5.0 - 7.5 mg/kg IV" : currentLang === 'de' ? "5,0 - 7,5 mg/kg i.v." : "5.0 - 7.5 mg/kg IV",
            interval: currentLang === 'hu'
              ? "Minden HD kezelés után (post-dialízis)"
              : currentLang === 'de'
              ? "Nach jeder HD-Sitzung (Post-Dialyse)"
              : "After each HD session (post-dialysis)",
            notes: currentLang === 'hu'
              ? "Az Amikacin hatékonyan dializálható. Kezdő telítő dózis (10-15 mg/kg) után a fenntartó adag 5.0-7.5 mg/kg minden dialízis kezelés végén (post-dialízis). TDM ellenőrzése szükséges a következő HD előtt (cél völgykoncentráció < 5-8 mg/L)."
              : currentLang === 'de'
              ? "Amikacin wird durch Hämodialyse effizient eliminiert. Nach einer Ladedosis (10-15 mg/kg) beträgt die Erhaltungsdosis 5,0-7,5 mg/kg nach jeder Dialysesitzung (Post-Dialyse). TDM ist vor der nächsten HD erforderlich (Ziel-Talspiegel < 5-8 mg/L)."
              : "Amikacin is efficiently cleared by hemodialysis. Following a loading dose (10-15 mg/kg), the maintenance dose is 5.0-7.5 mg/kg administered after each dialysis session (post-dialysis). TDM is required before the next HD (target trough < 5-8 mg/L)."
          };
        case 'voriconazole':
          return {
            loading: currentLang === 'hu'
              ? "6 mg/kg IV q12h (2 adag) VAGY 400 mg p.o. q12h (2 adag)"
              : currentLang === 'de'
              ? "6 mg/kg i.v. q12h (2 Dosen) ODER 400 mg p.o. q12h (2 Dosen)"
              : "6 mg/kg IV q12h (2 doses) OR 400 mg p.o. q12h (2 doses)",
            maintenance: currentLang === 'hu'
              ? "200 mg p.o. q12h (orális forma preferált)"
              : currentLang === 'de'
              ? "200 mg p.o. q12h (orale Form bevorzugt)"
              : "200 mg p.o. q12h (oral form is highly preferred)",
            interval: "12h",
            notes: currentLang === 'hu'
              ? "Hemodialízis nem távolítja el érdemben a voriconazolt, és nem igényel pótlást. Ugyanakkor az intravénás hordozóanyag (SBECD) felhalmozódik dialízisben, ezért a perorális (p.o.) adagolás kiemelten javasolt!"
              : currentLang === 'de'
              ? "Die Hämodialyse eliminiert Voriconazol nicht signifikant; eine Zusatzdosis ist nicht erforderlich. Der i.v.-Hilfsstoff SBECD akkumuliert jedoch bei Nierenversagen/Dialyse, weshalb die orale Gabe dringend bevorzugt wird!"
              : "Hemodialysis does not significantly clear voriconazole, and no supplementary dose is needed. However, the IV vehicle SBECD accumulates during renal failure/dialysis, hence oral (p.o.) dosing is highly preferred!"
          };
      }
    }

    if (rrtMode === 'crrt') {
      switch (selectedInitialDrug) {
        case 'vancomycin':
          let loadDose = Math.round((wt * 20) / 250) * 250;
          if (loadDose < 1000) loadDose = 1000;
          if (loadDose > 2250) loadDose = 2250;
          return {
            loading: currentLang === 'hu' 
              ? `${loadDose} mg IV (kb. 15-20 mg/kg)` 
              : currentLang === 'de'
              ? `${loadDose} mg i.v. (ca. 15-20 mg/kg)`
              : `${loadDose} mg IV (approx. 15-20 mg/kg)`,
            maintenance: currentLang === 'hu' ? "1000 mg q24h VAGY 750 mg q12h-q24h" : currentLang === 'de' ? "1000 mg q24h ODER 750 mg q12h-q24h" : "1000 mg q24h OR 750 mg q12h-q24h",
            interval: "12h - 24h",
            notes: currentLang === 'hu'
              ? "Folyamatos vesehelyettesítő kezelés (CRRT) során a Vancomycin clearance-e jelentős. A figyelmeztetések alapján az AUC/MIC meghatározása és a megfelelő tartomány a cél (guideline-ok alapján megfelelőnek tartott tartomány: AUC24/MIC 400–600 mg·h/L; folyamatos hemofiltráció mellett szurrogátumként 15–20 mg/L szint javasolt). Kezdő telítő dózis (15-20 mg/kg) után fenntartó adagként napi 1000 mg (vagy 500-750 mg q12h) javasolt, szigorú TDM követéssel."
              : currentLang === 'de'
              ? "Die Vancomycin-Clearance ist unter CRRT signifikant. Ziel der Warnhinweise ist die Bestimmung von AUC/MHK und das Erreichen des Zielbereichs (leitliniengerechter Zielbereich: AUC24/MHK 400–600 mg·h/L; Surrogat-Talspiegel: 15–20 mg/L). Nach Ladedosis von 15-20 mg/kg wird 1000 mg täglich (oder 500-750 mg q12h) empfohlen, begleitet von engmaschigem TDM."
              : "Vancomycin clearance is significant during CRRT. Clinical warnings emphasize that determining the AUC/MIC ratio and achieving the target range is the primary goal (guideline-recommended target range: AUC24/MIC 400–600 mg·h/L; surrogate trough: 15–20 mg/L). After loading (15-20 mg/kg), maintenance of 1000 mg daily (or 500-750 mg q12h) is suggested, guided by strict TDM."
          };
        case 'gentamicin':
          return {
            loading: currentLang === 'hu'
              ? `${Math.round(wt * 5)} mg IV (kb. 5-7 mg/kg ODD)`
              : currentLang === 'de'
              ? `${Math.round(wt * 5)} mg i.v. (ca. 5-7 mg/kg ODD)`
              : `${Math.round(wt * 5)} mg IV (approx. 5-7 mg/kg ODD)`,
            maintenance: currentLang === 'hu' ? "2.0 - 3.0 mg/kg IV" : currentLang === 'de' ? "2,0 - 3,0 mg/kg i.v." : "2.0 - 3.0 mg/kg IV",
            interval: currentLang === 'hu' ? "24h - 48h (TDM alapján)" : currentLang === 'de' ? "24h - 48h (basierend auf TDM)" : "24h - 48h (based on TDM)",
            notes: currentLang === 'hu'
              ? "CRRT mellett az aminoglikozidok clearance-e magas és változékony. Megfelelő kezdő telítő adag (5-7 mg/kg) után napi 2.0-3.0 mg/kg fenntartó adag adható q24h-q48h időközönként. TDM elengedhetetlen (ajánlott völgykoncentráció < 1 mg/L)."
              : currentLang === 'de'
              ? "Die Aminoglykosid-Clearance während einer CRRT ist hoch und sehr variabel. Nach einer angemessenen Ladedosis (5-7 mg/kg) kann alle 24 bis 48 Stunden eine Erhaltungsdosis von 2,0-3,0 mg/kg verabreicht werden. TDM ist zwingend erforderlich (Ziel-Talspiegel < 1 mg/L)."
              : "Aminoglycoside clearance during CRRT is high and highly variable. After an appropriate loading dose (5-7 mg/kg), a maintenance dose of 2.0-3.0 mg/kg can be given every 24 to 48 hours. TDM is mandatory (target trough level < 1 mg/L)."
          };
        case 'amikacin':
          return {
            loading: currentLang === 'hu'
              ? `${Math.round(wt * 15)} mg IV (15 mg/kg)`
              : currentLang === 'de'
              ? `${Math.round(wt * 15)} mg i.v. (15 mg/kg)`
              : `${Math.round(wt * 15)} mg IV (15 mg/kg)`,
            maintenance: currentLang === 'hu' ? "7.5 - 10 mg/kg IV" : currentLang === 'de' ? "7,5 - 10 mg/kg i.v." : "7.5 - 10 mg/kg IV",
            interval: currentLang === 'hu' ? "24h - 48h (TDM alapján)" : currentLang === 'de' ? "24h - 48h (basierend auf TDM)" : "24h - 48h (based on TDM)",
            notes: currentLang === 'hu'
              ? "CRRT mellett az Amikacin hatékonyan eliminálódik. Megfelelő kezdő telítő dózis (15 mg/kg) után napi 7.5-10 mg/kg fenntartó adag javasolt q24h vagy q48h gyakorisággal. Szigorú TDM követés szükséges (cél völgykoncentráció < 4-5 mg/L)."
              : currentLang === 'de'
              ? "Amikacin wird durch CRRT effektiv eliminiert. Nach einer Ladedosis (15 mg/kg) wird eine Erhaltungsdosis von 7,5-10 mg/kg täglich oder alle 48 Stunden empfohlen. Strenges TDM-Follow-up ist erforderlich (Ziel-Talspiegel < 4-5 mg/L)."
              : "Amikacin is cleared effectively by CRRT. After a loading dose (15 mg/kg), a maintenance dose of 7.5-10 mg/kg daily or every 48 hours is recommended. Strict TDM follow-up is necessary (target trough level < 4-5 mg/L)."
          };
        case 'voriconazole':
          return {
            loading: currentLang === 'hu'
              ? "6 mg/kg IV q12h (2 adag) VAGY 400 mg p.o. q12h (2 adag)"
              : currentLang === 'de'
              ? "6 mg/kg i.v. q12h (2 Dosen) ODER 400 mg p.o. q12h (2 Dosen)"
              : "6 mg/kg IV q12h (2 doses) OR 400 mg p.o. q12h (2 doses)",
            maintenance: currentLang === 'hu' ? "4 mg/kg IV q12h VAGY 200 mg p.o. q12h" : currentLang === 'de' ? "4 mg/kg i.v. q12h ODER 200 mg p.o. q12h" : "4 mg/kg IV q12h OR 200 mg p.o. q12h",
            interval: "12h",
            notes: currentLang === 'hu'
              ? "A voriconazol eliminációja CRRT során kismértékű, de az intravénás hordozóanyag (SBECD) a folyamatos hemofiltrációval kiürül, így az intravénás adagolás biztonságosabb, mint HD vagy egyéb veseelégtelenség esetén. Mindazonáltal a TDM rendkívül fontos (céltartomány: 1.5-5.0 mg/L)."
              : currentLang === 'de'
              ? "Die Voriconazol-Clearance durch CRRT ist gering, aber der i.v.-Hilfsstoff SBECD wird durch kontinuierliche Ultrafiltration eliminiert, was die i.v.-Gabe sicherer macht als bei HD. TDM wird dringend empfohlen (Zielbereich: 1,5-5,0 mg/L)."
              : "Voriconazole clearance via CRRT is low, but the IV vehicle SBECD is cleared by continuous ultrafiltration, making IV dosing safer than in HD. TDM is highly recommended (target range: 1.5-5.0 mg/L)."
          };
      }
    }

    switch (selectedInitialDrug) {
      case 'vancomycin':
        // Loading dose: 15-25 mg/kg (usually round to nearest 250mg)
        let loadDose = Math.round((wt * 20) / 250) * 250;
        if (loadDose < 1000) loadDose = 1000;
        if (loadDose > 2250) loadDose = 2250;

        let maintDose = "1000 mg";
        let interval = "12h";
        let comment = "";

        if (crcl >= 90) {
          maintDose = `${Math.round((wt * 15) / 250) * 250} mg`;
          interval = "12h";
          comment = currentLang === 'hu'
            ? "Normál elimináció. A terápiás cél az AUC/MIC meghatározása és a megfelelő tartomány elérése (guideline-ok alapján megfelelőnek tartott tartomány: AUC24/MIC 400–600 mg·h/L, feltételezett MIC = 1 mg/L; szurrogátum völgykoncentráció: 15–20 mg/L súlyos, vagy 10–15 mg/L enyhe fertőzésekben)."
            : currentLang === 'de'
            ? "Normale Elimination. Primäres Ziel ist die Bestimmung von AUC/MHK und das Erreichen des Zielbereichs (leitliniengerechter Zielbereich: AUC24/MHK 400–600 mg·h/L bei MHK = 1 mg/L; Surrogat-Talspiegel: 15–20 mg/L bei schweren oder 10–15 mg/L bei milden Infektionen)."
            : "Normal elimination. The clinical goal is determining the AUC/MIC ratio and maintaining the target range (guideline-recommended target range: AUC24/MIC 400–600 mg·h/L, assuming MIC = 1 mg/L; surrogate trough: 15–20 mg/L for severe, or 10–15 mg/L for mild infections).";
        } else if (crcl >= 60) {
          maintDose = "1000 mg";
          interval = "12h";
          comment = currentLang === 'hu'
            ? "Enyhén csökkent vesefunkció. Cél az AUC/MIC meghatározása és a megfelelő tartományban tartása (guideline-ok alapján megfelelőnek tartott tartomány: AUC24/MIC 400–600 mg·h/L). Fokozott figyelem a 3-4. napon végzett TDM esetében az AKI megelőzésére."
            : currentLang === 'de'
            ? "Leicht eingeschränkte Nierenfunktion. Ziel ist die Bestimmung von AUC/MHK und die Einstellung im Zielbereich (leitliniengerechter Zielbereich: AUC24/MHK 400–600 mg·h/L). Erhöhte Aufmerksamkeit für TDM am 3.-4. Tag."
            : "Mildly impaired renal function. The target is determining the AUC/MIC ratio and keeping it in range (guideline-recommended target range: AUC24/MIC 400–600 mg·h/L). Close monitoring on day 3-4.";
        } else if (crcl >= 30) {
          maintDose = "1000 mg";
          interval = "24h";
          comment = currentLang === 'hu'
            ? "Középsúlyos veseelégtelenség. Megnyúlt felezési idő. Cél az AUC/MIC meghatározása és megfelelő tartomány elérése (guideline-ok alapján megfelelőnek tartott tartomány: AUC24/MIC 400–600 mg·h/L). Szoros TDM szükséges az akkumuláció és nefrotoxicitás kivédésére."
            : currentLang === 'de'
            ? "Mittelschwere Niereninsuffizienz. Deutlich verlängerte Halbwertszeit. Ziel ist die Bestimmung von AUC/MHK und die Einstellung im Zielbereich (leitliniengerechter Zielbereich: AUC24/MHK 400–600 mg·h/L). Engmaschiges TDM erforderlich."
            : "Moderate renal impairment. Prolonged half-life. The goal is AUC/MIC determination and staying in range (guideline-recommended target range: AUC24/MIC 400–600 mg·h/L). Strict TDM required to avoid accumulation.";
        } else if (crcl >= 15) {
          maintDose = "500 - 750 mg";
          interval = "24h - 48h";
          comment = currentLang === 'hu'
            ? "Súlyos veseelégtelenség. Cél az AUC/MIC meghatározása és megfelelő tartomány biztosítása (guideline-ok alapján megfelelőnek tartott tartomány: AUC24/MIC 400–600 mg·h/L). Megfontolandó telítő dózis után kizárólag TDM-vezérelt (pulse-dosing) adagolás: újabb adag csak ha a völgy < 15 mg/L."
            : currentLang === 'de'
            ? "Schwere Niereninsuffizienz. Ziel ist die Bestimmung von AUC/MHK und die Einstellung im Zielbereich (leitliniengerechter Zielbereich: AUC24/MHK 400–600 mg·h/L). Nach Ladedosis wird pulsweises TDM-gesteuertes Dosieren empfohlen (neue Dosis erst bei Spiegel < 15 mg/L)."
            : "Severe renal impairment. The goal is determining AUC/MIC and achieving the target range (guideline-recommended target range: AUC24/MIC 400–600 mg·h/L). Consider pulse-dosing based strictly on TDM after loading: next dose only when trough < 15 mg/L.";
        } else {
          maintDose = "500 mg";
          interval = "TDM vezérelt (pulse-dosing)";
          comment = currentLang === 'hu'
            ? "Végstádiumú veseelégtelenség vagy dialízis. Cél az AUC/MIC meghatározása és megfelelő tartomány fenntartása (guideline-ok alapján megfelelőnek tartott tartomány: AUC24/MIC 400–600 mg·h/L; szurrogátum völgy: 15–20 mg/L). Adagolás kizárólag a mért szintek alapján."
            : currentLang === 'de'
            ? "Terminale Niereninsuffizienz oder Dialyse. Ziel ist die Bestimmung von AUC/MHK und die Einstellung im Zielbereich (leitliniengerechter Zielbereich: AUC24/MHK 400–600 mg·h/L; Surrogat: 15–20 mg/L). Dosierung ausschließlich basierend auf gemessenen Spiegeln."
            : "End-stage renal disease or dialysis. The goal is determining AUC/MIC and maintaining the target window (guideline-recommended target range: AUC24/MIC 400–600 mg·h/L; surrogate trough: 15–20 mg/L). Dosing strictly guided by measured levels.";
        }

        return {
          loading: `${loadDose} mg IV (kb. 15-20 mg/kg)`,
          maintenance: maintDose,
          interval: interval,
          notes: comment
        };

      case 'gentamicin':
        let gLoad = Math.round((wt * 5) / 40) * 40; // ~5-7 mg/kg for ODD
        let gMaint = `${gLoad} mg`;
        let gInt = "24h";
        let gNotes = "";

        if (crcl >= 60) {
          gInt = "24h";
          gNotes = currentLang === 'hu'
            ? "Optimális vesefunkció egyszeri napi adagoláshoz (ODD). Ez maximalizálja a csúcsszintet és minimalizálja a nefrotoxicitást."
            : currentLang === 'de'
            ? "Optimale Nierenfunktion für einmal tägliche Gabe (ODD). Dies maximiert die Spitze und minimiert die Nephrotoxizität."
            : "Optimal renal function for once-daily dosing (ODD). This maximizes the peak and minimizes nephrotoxicity.";
        } else if (crcl >= 40) {
          gInt = "36h - 48h";
          gNotes = currentLang === 'hu'
            ? "Enyhe-középsúlyos veseelégtelenség. Megnyúlt adagolási időköz szükséges az akkumuláció elkerülésére."
            : currentLang === 'de'
            ? "Leichte bis mittelschwere Niereninsuffizienz. Verlängertes Dosierungsintervall erforderlich, um Akkumulation zu vermeiden."
            : "Mild-to-moderate renal impairment. Prolonged interval required to prevent accumulation.";
        } else {
          gMaint = "Egyéni / csökkentett dózis";
          gInt = "TDM vezérelt";
          gNotes = currentLang === 'hu'
            ? "Súlyos veseelégtelenségben aminoglikozid adása lehetőség szerint kerülendő. Ha elkerülhetetlen, hagyományos napi többszöri séma szerint, rendkívül szoros TDM mellett."
            : currentLang === 'de'
            ? "Bei schwerer Niereninsuffizienz sollten Aminoglykoside nach Möglichkeit vermieden werden. Wenn unvermeidbar, konventionelles Schema unter extrem engmaschigem TDM."
            : "Aminoglycosides should be avoided in severe renal impairment. If unavoidable, use conventional lower dosing with extremely close TDM.";
        }

        return {
          loading: `${Math.round(wt * 2)} mg IV (szinergia / endocarditis esetén: 1-1.5 mg/kg)`,
          maintenance: gMaint,
          interval: gInt,
          notes: gNotes
        };

      case 'amikacin':
        let aLoad = Math.round((wt * 15) / 100) * 100; // ~15 mg/kg
        let aMaint = `${aLoad} mg`;
        let aInt = "24h";
        let aNotes = "";

        if (crcl >= 60) {
          aInt = "24h";
          aNotes = currentLang === 'hu'
            ? "Normál elimináció egyszeri napi adagoláshoz (ODD)."
            : currentLang === 'de'
            ? "Normale Elimination für einmal tägliche Gabe (ODD)."
            : "Normal elimination for once-daily dosing (ODD).";
        } else if (crcl >= 30) {
          aInt = "36h - 48h";
          aNotes = currentLang === 'hu'
            ? "Középsúlyos veseelégtelenség. Fokozott ototoxicity és nephrotoxicity veszély. Szigorúan ellenőrizze a völgykoncentrációt (< 4 mg/L)."
            : currentLang === 'de'
            ? "Mittelschwere Niereninsuffizienz. Erhöhtes Risiko für Oto- und Nephrotoxizität. Überwachen Sie streng den Talspiegel (< 4 mg/L)."
            : "Moderate renal impairment. High risk of oto- and nephrotoxicity. Strictly monitor trough level (< 4 mg/L).";
        } else {
          aMaint = "Egyéni / TDM alapján";
          aInt = "TDM vezérelt";
          aNotes = currentLang === 'hu'
            ? "Súlyos veseelégtelenség. Kizárólag abszolút vitális indikáció esetén, fokozott óvatossággal adható."
            : currentLang === 'de'
            ? "Schwere Niereninsuffizienz. Nur bei absolut vitaler Indikation und mit äußerster Vorsicht anwenden."
            : "Severe renal impairment. Use only under life-threatening circumstances with extreme caution.";
        }

        return {
          loading: `${aLoad} mg IV (15 mg/kg)`,
          maintenance: aMaint,
          interval: aInt,
          notes: aNotes
        };

      case 'voriconazole':
        let vLoad = "6 mg/kg IV q12h (2 adag) VAGY 400 mg p.o. q12h (2 adag)";
        let vMaint = "4 mg/kg IV q12h VAGY 200 mg p.o. q12h";
        let vInt = "12h";
        let vNotes = "";

        if (crcl < 50) {
          vNotes = currentLang === 'hu'
            ? "FIGYELEM: i.v. voriconazol esetén a hordozóanyag (SBECD) felhalmozódik < 50 ml/perc clearance esetén. Perorális adagolás preferált!"
            : currentLang === 'de'
            ? "ACHTUNG: Bei i.v. Voriconazol reichert sich der Hilfsstoff (SBECD) bei einer Clearance < 50 ml/min an. Orale Gabe bevorzugt!"
            : "WARNING: For IV voriconazole, the excipient SBECD accumulates in patients with CrCl < 50 mL/min. Oral formulation is highly preferred!";
        } else {
          vNotes = currentLang === 'hu'
            ? "Normál elimináció. Szigorú TDM javasolt a kezelés 4-5. napján a telítés után."
            : currentLang === 'de'
            ? "Normale Elimination. Strenges TDM am 4.-5. Tag nach Therapiestart empfohlen."
            : "Normal elimination. Strict TDM recommended on day 4-5 of therapy.";
        }

        return {
          loading: vLoad,
          maintenance: vMaint,
          interval: vInt,
          notes: vNotes
        };

      default:
        return null;
    }
  }, [calculatedCrCl, hasCalculated, selectedInitialDrug, patient.weight, patient.rrt, currentLang]);

  // Handle TDM level evaluation
  const handleEvaluateTdm = () => {
    const val = parseFloat(tdm.measuredTrough);
    const peakVal = parseFloat(tdm.measuredPeak);

    if (isNaN(val)) {
      return;
    }

    let status: 'sub' | 'therapeutic' | 'toxic' = 'therapeutic';
    let interp = "";
    let act = "";
    let skipDoses: string | number = 0;
    let newDose = "";
    let newInterval = "";
    let boosterDose: string | undefined = undefined;
    let estimatedAuc24: number | undefined = undefined;

    const rrt = tdm.rrt;

    switch (tdm.drugId) {
      case 'vancomycin': {
        const doseNum = parseFloat(tdm.currentDose) || 1000;
        const intNum = parseFloat(tdm.currentInterval) || 12;
        if (val > 0 && doseNum > 0 && intNum > 0) {
          const vdEst = 50;
          const peakEst = val + (doseNum / vdEst);
          const tInf = 1.5;
          const keEst = Math.log(Math.max(peakEst, val + 0.5) / Math.max(0.1, val)) / Math.max(1, intNum - tInf);
          const clEst = Math.max(0.5, keEst * vdEst);
          const dailyDose = doseNum * (24 / intNum);
          estimatedAuc24 = Math.round(dailyDose / clEst);
        }

        if (rrt === 'none') {
          if (val < 10.0) {
            status = 'sub';
            interp = currentLang === 'hu'
              ? `A mért völgykoncentráció (${val} mg/L) szubterápiás (< 10 mg/L). FIGYELMEZTETÉS: Vancomycin esetében az AUC/MIC meghatározása és megfelelő tartomány a cél (a nemzetközi guideline-ok alapján megfelelőnek tartott tartomány: AUC24/MIC 400–600 mg·h/L, feltételezett MIC = 1 mg/L esetén; szurrogátumként a 15–20 mg/L völgykoncentráció súlyos fertőzésben). Jelenlegi alacsony expozíció mellett fokozott a terápiás kudarc és rezisztencia kialakulásának kockázata.`
              : currentLang === 'de'
              ? `Der gemessene Talspiegel (${val} mg/L) ist subtherapeutisch (< 10 mg/L). WARNUNG: Bei Vancomycin ist die Bestimmung von AUC/MHK und das Erreichen des Zielbereichs das Ziel (leitliniengerechter Zielbereich: AUC24/MHK 400–600 mg·h/L bei MHK = 1 mg/L; Surrogat-Talspiegel 15–20 mg/L bei schweren Infektionen). Erhöhtes Risiko für Therapieversagen und Resistenzentwicklung.`
              : `The measured trough level (${val} mg/L) is subtherapeutic (< 10 mg/L). WARNING: For vancomycin, determining the AUC/MIC ratio and achieving the target range is the primary goal (guideline-recommended target range: AUC24/MIC 400–600 mg·h/L, assuming MIC = 1 mg/L; surrogate trough 15–20 mg/L in severe infections). Current low exposure elevates risk of treatment failure.`;
            
            skipDoses = 0;
            const currentDoseNum = parseFloat(tdm.currentDose) || 1000;
            const suggestedDose = Math.round((currentDoseNum * 1.3) / 250) * 250;
            newDose = `${suggestedDose} mg`;
            newInterval = `q${tdm.currentInterval}h`;
            if (val < 7.0) {
              boosterDose = "500 - 1000 mg IV egyszeri alkalommal";
            }
            act = currentLang === 'hu'
              ? `Javasolt a napi fenntartó dózis megemelése kb. 25-50%-kal (pl. ${tdm.currentDose} mg-ról ${suggestedDose} mg-ra), vagy az adagolási időköz csökkentése (pl. 24 óráról 12 órára). Kontroll TDM a 3. új dózis előtt.`
              : currentLang === 'de'
              ? `Empfohlen wird eine Erhöhung der Tageserhaltungsdosis um ca. 25-50% (z. B. von ${tdm.currentDose} mg auf ${suggestedDose} mg) oder eine Verkürzung des Intervalls. Kontroll-TDM vor der 3. neuen Dosis.`
              : `It is recommended to increase the daily maintenance dose by approximately 25-50% (e.g., from ${tdm.currentDose} mg to ${suggestedDose} mg) or shorten the interval. Recheck before 3rd dose.`;
          } else if (val <= 20.0) {
            status = 'therapeutic';
            interp = currentLang === 'hu'
              ? `Megfelelő terápiás szint (${val} mg/L). Vancomycin esetében az AUC/MIC meghatározása és megfelelő tartomány a cél (a guideline-ok alapján megfelelőnek tartott tartomány: AUC24/MIC 400–600 mg·h/L, feltételezett MIC = 1 mg/L esetén; szurrogátumként a 15–20 mg/L völgykoncentráció javasolt súlyos MRSA fertőzésben, enyhébb fertőzésben 10–15 mg/L is elegendő).`
              : currentLang === 'de'
              ? `Guter therapeutischer Spiegel (${val} mg/L). Bei Vancomycin ist die Bestimmung von AUC/MHK und das Halten im Zielbereich das Ziel (leitliniengerechter Zielbereich: AUC24/MHK 400–600 mg·h/L bei MHK = 1 mg/L; Surrogat-Talspiegel 15–20 mg/L bei schweren Infektionen, 10–15 mg/L bei milden).`
              : `Therapeutic level (${val} mg/L). For vancomycin, determining the AUC/MIC ratio and maintaining the target range is the primary goal (guideline-recommended target range: AUC24/MIC 400–600 mg·h/L, assuming MIC = 1 mg/L; surrogate trough 15–20 mg/L for severe MRSA, 10–15 mg/L for mild infections).`;

            skipDoses = 0;
            newDose = `${tdm.currentDose} mg`;
            newInterval = `q${tdm.currentInterval}h`;
            act = currentLang === 'hu'
              ? "Az adagolás folytatása változatlan dózissal és időközzel. Stabil vesefunkció mellett heti 1x kontroll TDM elegendő."
              : currentLang === 'de'
              ? "Fortführung der Therapie mit unveränderter Dosis und Intervall. Bei stabiler Nierenfunktion reicht eine wöchentliche TDM-Kontrolle aus."
              : "Continue current regimen. Weekly TDM monitoring is sufficient as long as renal function remains stable.";
          } else {
            status = 'toxic';
            interp = currentLang === 'hu'
              ? `FIGYELMEZTETÉS: A mért szint (${val} mg/L) a toxikus tartományban van (> 20 mg/L). Vancomycin esetében az AUC/MIC meghatározása és megfelelő tartomány a cél (a guideline-ok alapján megfelelőnek tartott tartomány: AUC24/MIC 400–600 mg·h/L; az AUC > 600 mg·h/L vagy völgy > 20 mg/L esetén a nefrotoxicitás és az akut vesekárosodás [AKI] kockázata szignifikánsan megugrik).`
              : currentLang === 'de'
              ? `WARNUNG: Der gemessene Spiegel (${val} mg/L) liegt im toxischen Bereich (> 20 mg/L). Bei Vancomycin ist die Bestimmung von AUC/MHK und das Halten im Zielbereich das Ziel (leitliniengerechter Zielbereich: AUC24/MHK 400–600 mg·h/L; bei AUC > 600 mg·h/L oder Talspiegel > 20 mg/L steigt das Risiko für Nephrotoxizität und akutes Nierenversagen [AKI] drastisch).`
              : `WARNING: The measured level (${val} mg/L) is in the toxic range (> 20 mg/L). For vancomycin, determining the AUC/MIC ratio and maintaining the target range is the primary goal (guideline-recommended target range: AUC24/MIC 400–600 mg·h/L; AUC > 600 mg·h/L or trough > 20 mg/L sharply increases the risk of nephrotoxicity and acute kidney injury [AKI]).`;

            skipDoses = val > 25.0 ? 2 : 1;
            const currentDoseNum = parseFloat(tdm.currentDose) || 1000;
            const suggestedDose = Math.round((currentDoseNum * 0.7) / 250) * 250;
            newDose = `${Math.max(500, suggestedDose)} mg`;
            const currentIntervalNum = parseInt(tdm.currentInterval) || 12;
            newInterval = `q${currentIntervalNum * 2}h (vagy q24h/q48h)`;
            act = currentLang === 'hu'
              ? `A következő dózis kihagyása (withhold) javasolt. Hagyjon ki ${skipDoses} dózist! Mérje vissza a szérumszintet naponta, és csak akkor adja meg a következő (csökkentett, pl. ${newDose} mg) fenntartó adagot, ha a szint 15 mg/L alá süllyedt. Vizsgálja felül a vesefunkciót.`
              : currentLang === 'de'
              ? `Die nächste Dosis sollte ausgelassen (withhold) werden. Lassen Sie ${skipDoses} Dosis(en) aus! Messen Sie den Serumspiegel täglich und verabreichen Sie die nächste (reduzierte, z. B. ${newDose} mg) Erhaltungsdosis erst, wenn der Spiegel unter 15 mg/L gesunken ist. Nierenfunktion überprüfen.`
              : `Withhold the next dose. Skip ${skipDoses} dose(s)! Monitor serum levels daily and resume at a reduced dose (e.g., ${newDose} mg) only once the level drops below 15 mg/L. Re-evaluate renal function.`;
          }
        } else if (rrt === 'hd') {
          if (val < 10.0) {
            status = 'sub';
            interp = currentLang === 'hu'
              ? `Hemodialízis mellett a völgykoncentráció (${val} mg/L) nem elegendő. FIGYELMEZTETÉS: Vancomycin esetén az AUC/MIC meghatározása és megfelelő tartomány a cél (a guideline-ok alapján megfelelőnek tartott tartomány: AUC24/MIC 400–600 mg·h/L; hemodialízisnél a pre-HD szurrogátum céltartomány: 15–20 mg/L).`
              : currentLang === 'de'
              ? `Unter Hämodialyse ist die Talkonzentration (${val} mg/L) unzureichend. WARNUNG: Bei Vancomycin ist die Bestimmung von AUC/MHK und das Erreichen des Zielbereichs das Ziel (leitliniengerechter Zielbereich: AUC24/MHK 400–600 mg·h/L; Prä-HD-Surrogat-Zielbereich: 15–20 mg/L).`
              : `Under hemodialysis, the trough level (${val} mg/L) is subtherapeutic. WARNING: For vancomycin, determining the AUC/MIC ratio and achieving the target range is the primary goal (guideline-recommended target range: AUC24/MIC 400–600 mg·h/L; pre-dialysis surrogate target: 15–20 mg/L).`;

            skipDoses = 0;
            boosterDose = "500 - 1000 mg IV a következő HD végén (booster)";
            newDose = "500 - 1000 mg";
            newInterval = "Minden dialízis után (HD végén)";
            act = currentLang === 'hu'
              ? "Javasolt booster dózis beadása a következő HD kezelés végén. Ezután növelje a fenntartó dózist minden dialízis után."
              : currentLang === 'de'
              ? "Empfohlen wird die Gabe einer Booster-Dosis nach der nächsten Dialyse. Danach die Erhaltungsdosis nach jeder Sitzung erhöhen."
              : "Recommended to administer a booster dose at the end of the next HD session, then increase the maintenance dose given after each HD.";
          } else if (val <= 20.0) {
            status = 'therapeutic';
            interp = currentLang === 'hu'
              ? `Megfelelő pre-dialízis terápiás szint (${val} mg/L) hemodializált betegnél. Vancomycin esetén az AUC/MIC meghatározása és megfelelő tartomány a cél (a guideline-ok alapján megfelelőnek tartott tartomány: AUC24/MIC 400–600 mg·h/L; pre-dialízis szurrogátum céltartomány: 15–20 mg/L).`
              : currentLang === 'de'
              ? `Optimaler Prä-Dialyse-Spiegel (${val} mg/L) bei Hämodialyse-Patienten. Bei Vancomycin ist die Bestimmung von AUC/MHK und das Halten im Zielbereich das Ziel (leitliniengerechter Zielbereich: AUC24/MHK 400–600 mg·h/L; Prä-Dialyse-Surrogat: 15–20 mg/L).`
              : `Appropriate pre-dialysis therapeutic level (${val} mg/L) in HD patient. For vancomycin, determining the AUC/MIC ratio and maintaining the target range is the primary goal (guideline-recommended target range: AUC24/MIC 400–600 mg·h/L; pre-dialysis surrogate target: 15–20 mg/L).`;

            skipDoses = 0;
            newDose = "500 mg";
            newInterval = "Minden dialízis után (HD végén)";
            act = currentLang === 'hu'
              ? "Folytassa az adagolást változatlan formában: 500 mg IV minden HD kezelés után."
              : currentLang === 'de'
              ? "Therapie unverändert fortsetzen: 500 mg i.v. nach jeder HD-Sitzung."
              : "Continue current regimen: 500 mg IV after each HD session.";
          } else {
            status = 'toxic';
            interp = currentLang === 'hu'
              ? `FIGYELMEZTETÉS: Magas, toxikus pre-dialízis szint (${val} mg/L) HD mellett. Vancomycin esetén az AUC/MIC meghatározása és megfelelő tartomány a cél (a guideline-ok alapján megfelelőnek tartott tartomány: AUC24/MIC 400–600 mg·h/L; 20 mg/L feletti szinteknél súlyos akkumulációs és ototoxicitási veszély áll fenn).`
              : currentLang === 'de'
              ? `WARNUNG: Toxischer Prä-Dialyse-Spiegel (${val} mg/L) unter HD. Bei Vancomycin ist die Bestimmung von AUC/MHK und das Halten im Zielbereich das Ziel (leitliniengerechter Zielbereich: AUC24/MHK 400–600 mg·h/L; Kumulations- und Toxizitätsgefahr).`
              : `WARNING: Toxic pre-dialysis level (${val} mg/L) in HD patient. For vancomycin, determining the AUC/MIC ratio and maintaining the target range is the primary goal (guideline-recommended target range: AUC24/MIC 400–600 mg·h/L; high risk of accumulation).`;

            skipDoses = "Következő 1-2 dialízis ciklus alatt ne adjon Vancomycint";
            newDose = "250 - 500 mg";
            newInterval = "Minden dialízis után (HD végén, ha a völgy < 15 mg/L)";
            act = currentLang === 'hu'
              ? "A következő 1-2 dialízis után hagyja ki a Vancomycin adását. Csak akkor indítsa újra csökkentett (250-500 mg) adaggal, ha a szint < 15 mg/L alá csökkent."
              : currentLang === 'de'
              ? "Vancomycin-Gabe nach den nächsten 1-2 Dialysen auslassen. Mit reduzierter Dosis (250-500 mg) erst fortfahren, wenn Spiegel < 15 mg/L."
              : "Skip Vancomycin after the next 1-2 dialysis sessions. Resume with a reduced dose (250-500 mg) only once level drops below 15 mg/L.";
          }
        } else {
          // CRRT
          if (val < 15.0) {
            status = 'sub';
            interp = currentLang === 'hu'
              ? `CRRT mellett a ${val} mg/L szint alacsony. FIGYELMEZTETÉS: Vancomycin esetén az AUC/MIC meghatározása és megfelelő tartomány a cél (a guideline-ok alapján megfelelőnek tartott tartomány: AUC24/MIC 400–600 mg·h/L; CRRT alatt folyamatos 15–20 mg/L szint javasolt).`
              : currentLang === 'de'
              ? `Unter CRRT ist der Spiegel von ${val} mg/L zu niedrig. WARNUNG: Bei Vancomycin ist die Bestimmung von AUC/MHK und das Erreichen des Zielbereichs das Ziel (leitliniengerechter Zielbereich: AUC24/MHK 400–600 mg·h/L; Zielspiegel: 15-20 mg/L).`
              : `In CRRT, the level of ${val} mg/L is low. WARNING: For vancomycin, determining the AUC/MIC ratio and achieving the target range is the primary goal (guideline-recommended target range: AUC24/MIC 400–600 mg·h/L; CRRT target: 15-20 mg/L).`;

            skipDoses = 0;
            boosterDose = "500 - 750 mg IV egyszeri alkalommal";
            newDose = "1000 - 1250 mg";
            newInterval = "q24h (vagy q12h)";
            act = currentLang === 'hu'
              ? "Adjon egy egyszeri booster dózist, majd emelje a fenntartó adagot a CRRT áramlási sebességétől függően."
              : currentLang === 'de'
              ? "Geben Sie eine einmalige Ladedosis (Booster), gefolgt von einer Erhöhung der Erhaltungsdosis."
              : "Administer a single booster dose, then increase the maintenance dose depending on CRRT flow.";
          } else if (val <= 25.0) {
            status = 'therapeutic';
            interp = currentLang === 'hu'
              ? `Terápiás és stabil szint CRRT mellett (${val} mg/L). Vancomycin esetén az AUC/MIC meghatározása és megfelelő tartomány a cél (a guideline-ok alapján megfelelőnek tartott tartomány: AUC24/MIC 400–600 mg·h/L).`
              : currentLang === 'de'
              ? `Therapeutischer und stabiler Spiegel unter CRRT (${val} mg/L). Bei Vancomycin ist die Bestimmung von AUC/MHK und das Halten im Zielbereich das Ziel (leitliniengerechter Zielbereich: AUC24/MHK 400–600 mg·h/L).`
              : `Therapeutic and stable level in CRRT patient (${val} mg/L). For vancomycin, determining the AUC/MIC ratio and maintaining the target range is the primary goal (guideline-recommended target range: AUC24/MIC 400–600 mg·h/L).`;

            skipDoses = 0;
            newDose = "1000 mg";
            newInterval = "q24h";
            act = currentLang === 'hu'
              ? "Folytassa az adagolást változatlanul (pl. 1000 mg q24h). Ellenőrizze a szintet 2 naponta."
              : currentLang === 'de'
              ? "Therapie unverändert fortsetzen (z. B. 1000 mg q24h). Alle 2 Tage Spiegel kontrollieren."
              : "Continue current regimen (e.g., 1000 mg q24h). Monitor levels every 2 days.";
          } else {
            status = 'toxic';
            interp = currentLang === 'hu'
              ? `FIGYELMEZTETÉS: Magas, toxikus szint CRRT mellett (${val} mg/L). Vancomycin esetén az AUC/MIC meghatározása és megfelelő tartomány a cél (a guideline-ok alapján megfelelőnek tartott tartomány: AUC24/MIC 400–600 mg·h/L; > 600 felett súlyos nefrotoxicitás és akkumuláció veszélye áll fenn).`
              : currentLang === 'de'
              ? `WARNUNG: Hoher, toxischer Spiegel unter CRRT (${val} mg/L). Bei Vancomycin ist die Bestimmung von AUC/MHK und das Halten im Zielbereich das Ziel (leitliniengerechter Zielbereich: AUC24/MHK 400–600 mg·h/L; Kumulations- und Toxizitätsgefahr).`
              : `WARNING: High, toxic level in CRRT patient (${val} mg/L). For vancomycin, determining the AUC/MIC ratio and maintaining the target range is the primary goal (guideline-recommended target range: AUC24/MIC 400–600 mg·h/L; elevated accumulation risk).`;

            skipDoses = 1;
            newDose = "500 - 750 mg";
            newInterval = "q24h - q48h";
            act = currentLang === 'hu'
              ? "Függessze fel az adagolást 24 órára. Indítsa újra csökkentett dózissal, ha a völgykoncentráció < 15 mg/L alá csökkent."
              : currentLang === 'de'
              ? "Therapie für 24 Stunden aussetzen. Mit reduzierter Dosis fortsetzen, sobald der Spiegel < 15 mg/L liegt."
              : "Withhold therapy for 24 hours. Restart at a reduced dose once the trough level drops below 15 mg/L.";
          }
        }
        break;
      }

      case 'gentamicin':
        {
          const isOdd = parseInt(tdm.currentInterval) >= 24;
          const targetTrough = isOdd ? 1.0 : 2.0;
          const currentDoseNum = parseFloat(tdm.currentDose) || 350;
          const currentIntervalNum = parseFloat(tdm.currentInterval) || 24;
          const ptWeight = parseFloat(tdm.weight) || parseFloat(patient.weight) || 75;

          // IDSA 2026 AUC calculation (Sawchuk-Zaske 2-point or 1-compartment clearance model)
          if (val > 0 && currentDoseNum > 0 && currentIntervalNum > 0) {
            const vdPop = 0.26 * ptWeight;
            if (!isNaN(peakVal) && peakVal > val && peakVal > 0) {
              const deltaT = Math.max(1.0, currentIntervalNum - 1.0);
              const ke = Math.log(peakVal / Math.max(0.05, val)) / deltaT;
              const cMaxEst = peakVal * Math.exp(ke * 0.5);
              let vdEst = (currentDoseNum * (1 - Math.exp(-ke * 0.5))) / (0.5 * ke * Math.max(1, cMaxEst - val * Math.exp(-ke * 0.5)));
              if (isNaN(vdEst) || vdEst < 0.15 * ptWeight || vdEst > 0.6 * ptWeight) {
                vdEst = vdPop;
              }
              const cl = Math.max(0.3, ke * vdEst);
              const dailyDose = currentDoseNum * (24 / currentIntervalNum);
              estimatedAuc24 = Math.round(dailyDose / cl);
            } else {
              const peakEst = val + (currentDoseNum / vdPop);
              const deltaT = Math.max(1.0, currentIntervalNum - 1.0);
              const ke = Math.log(peakEst / Math.max(0.05, val)) / deltaT;
              const cl = Math.max(0.3, ke * vdPop);
              const dailyDose = currentDoseNum * (24 / currentIntervalNum);
              estimatedAuc24 = Math.round(dailyDose / cl);
            }
          }

          if (rrt === 'none') {
            const isAucToxic = estimatedAuc24 !== undefined && estimatedAuc24 > 120;
            const isTroughToxic = val > targetTrough;
            const isAucSub = estimatedAuc24 !== undefined && estimatedAuc24 < 80;
            const isPeakSub = !isNaN(peakVal) && peakVal > 0 && peakVal < (isOdd ? 15.0 : 5.0);

            if (isAucToxic || isTroughToxic) {
              status = 'toxic';
              interp = currentLang === 'hu'
                ? `FIGYELMEZTETÉS: A mért Gentamicin expozíció meghaladja az IDSA 2026-os biztonsági határértéket (Becsült AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L [IDSA 2026 irányelv célértéke: 80–120 mg·h/L], mért völgykoncentráció: ${val} mg/L [cél: < ${targetTrough} mg/L]). A 120 mg·h/L feletti expozíció szignifikánsan növeli az akut vesekárosodás (AKI / nefrotoxicitás) és a belső fül irreverzibilis károsodásának (ototoxicitás) kockázatát!`
                : currentLang === 'de'
                ? `WARNUNG: Die gemessene Gentamicin-Exposition überschreitet die IDSA 2026-Sicherheitsgrenze (Geschätzte AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L [IDSA 2026-Ziel: 80–120 mg·h/L], Talspiegel: ${val} mg/L [Ziel: < ${targetTrough} mg/L]). Deutlich erhöhtes Risiko für akute Nierenschädigung (AKI/Nephrotoxizität) und irreversible Ototoxizität!`
                : `WARNING: Measured Gentamicin exposure exceeds the IDSA 2026 safety limit (Estimated AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L [IDSA 2026 target: 80–120 mg·h/L], trough: ${val} mg/L [target: < ${targetTrough} mg/L]). Exposure exceeding 120 mg·h/L sharply increases nephrotoxicity (AKI) and irreversible ototoxicity risks!`;

              skipDoses = (val > 2.0 || (estimatedAuc24 && estimatedAuc24 > 160)) ? 2 : 1;
              const aucVal = estimatedAuc24 || 150;
              const targetRatio = 100 / Math.max(120, aucVal);
              const suggestedDose = Math.max(80, Math.round((currentDoseNum * targetRatio) / 20) * 20);
              newDose = `${suggestedDose} mg`;
              newInterval = isOdd ? "q36h - q48h" : "q24h";
              act = currentLang === 'hu'
                ? `Az IDSA 2026-os irányelv alapján azonnali dóziskihagyás szükséges: hagyjon ki ${skipDoses} dózist! Mérje vissza a szérumszintet, és csak akkor adja be a következő fenntartó adagot, ha a völgykoncentráció < 0.5–1.0 mg/L alá csökkent. Az új javasolt fenntartó adag a céltartomány (AUC24 80–120 mg·h/L) eléréséhez: ${newDose} (szükség esetén q36h vagy q48h megnyújtott időközzel).`
                : currentLang === 'de'
                ? `Gemäß IDSA 2026-Leitlinie ${skipDoses} Dosis(en) auslassen! Serumspiegel nachmessen und erst fortfahren, wenn Talspiegel < 0,5–1,0 mg/L liegt. Empfohlene neue Erhaltungsdosis zur Erreichung des AUC24-Ziels von 80–120 mg·h/L: ${newDose} (bei verlängerter Clearance q36h/q48h Intervall).`
                : `Per IDSA 2026 guidelines, withhold ${skipDoses} dose(s)! Monitor serum levels and resume only once the trough drops below 0.5–1.0 mg/L. Recommended new maintenance dose to achieve target AUC24 80–120 mg·h/L: ${newDose} (extend interval to q36h/q48h if elimination is delayed).`;
            } else if (isAucSub || isPeakSub || (isOdd && val < 0.2)) {
              status = 'sub';
              interp = currentLang === 'hu'
                ? `Szubterápiás Gentamicin expozíció az IDSA 2026-os irányelv szerint (Becsült AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L [IDSA 2026 célérték: 80–120 mg·h/L], mért völgy: ${val} mg/L). Az alacsony expozíció elégtelen baktericid hatást, terápiás kudarcot és baktérium-rezisztenciát eredményezhet.`
                : currentLang === 'de'
                ? `Subtherapeutische Gentamicin-Exposition gemäß IDSA 2026-Leitlinie (Geschätzte AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L [IDSA 2026-Ziel: 80–120 mg·h/L], Talspiegel: ${val} mg/L). Erhöhtes Risiko für Therapieversagen und Resistenzentwicklung.`
                : `Subtherapeutic Gentamicin exposure per IDSA 2026 guidelines (Estimated AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L [IDSA 2026 target: 80–120 mg·h/L], trough: ${val} mg/L). Subtherapeutic exposure risks clinical failure and resistance selection.`;

              skipDoses = 0;
              const aucVal = estimatedAuc24 || 60;
              const targetRatio = 100 / Math.min(80, Math.max(30, aucVal));
              const suggestedDose = Math.round((currentDoseNum * targetRatio) / 20) * 20;
              newDose = `${suggestedDose} mg`;
              newInterval = `q${tdm.currentInterval}h`;
              if (isOdd && (aucVal < 60 || val < 0.15)) {
                boosterDose = `${Math.round(currentDoseNum * 0.4 / 20) * 20} mg IV egyszeri booster`;
              }
              act = currentLang === 'hu'
                ? `Dózis kihagyása NEM indokolt. Az IDSA 2026-os cél (AUC24: 80–120 mg·h/L) eléréséhez emelje a fenntartó adagot ${currentDoseNum} mg-ról ${newDose}-ra. Súlyos szepszisben vagy bakterémiában egyszeri booster dózis adása javasolt. Kontroll TDM a 2-3. új dózis előtt.`
                : currentLang === 'de'
                ? `Kein Auslassen indiziert. Um das IDSA 2026-Ziel (AUC24: 80–120 mg·h/L) zu erreichen, Erhaltungsdosis von ${currentDoseNum} mg auf ${newDose} erhöhen. Bei schwerer Sepsis Booster erwägen. TDM-Kontrolle vor der 2.-3. Dosis.`
                : `Do not skip doses. To achieve the IDSA 2026 target (AUC24: 80–120 mg·h/L), increase maintenance dose from ${currentDoseNum} mg to ${newDose}. Consider a single booster in severe sepsis. Recheck TDM before 2nd-3rd new dose.`;
            } else {
              status = 'therapeutic';
              interp = currentLang === 'hu'
                ? `Optimális terápiás expozíció az IDSA 2026-os irányelv szerint (Becsült AUC24: ~${estimatedAuc24} mg·h/L [IDSA 2026 cél: 80–120 mg·h/L], mért völgykoncentráció: ${val} mg/L [cél: < 1.0 mg/L]). Maximális baktericid hatékonyság minimális toxicitási rizikó mellett.`
                : currentLang === 'de'
                ? `Optimaler therapeutischer Bereich nach IDSA 2026-Leitlinie (Geschätzte AUC24: ~${estimatedAuc24} mg·h/L [IDSA 2026-Ziel: 80–120 mg·h/L], Talspiegel: ${val} mg/L [< 1,0 mg/L]). Hervorragende bakterizide Wirksamkeit bei minimalem Toxizitätsrisiko.`
                : `Optimal therapeutic exposure per IDSA 2026 guidelines (Estimated AUC24: ~${estimatedAuc24} mg·h/L [IDSA 2026 target: 80–120 mg·h/L], trough: ${val} mg/L [target: < 1.0 mg/L]). Excellent bactericidal efficacy with minimal toxicity risk.`;

              skipDoses = 0;
              newDose = `${tdm.currentDose} mg`;
              newInterval = `q${tdm.currentInterval}h`;
              act = currentLang === 'hu'
                ? "Az adagolás folytatható változatlan dózissal és időközzel az IDSA 2026-os célértékeknek megfelelően. Stabil vesefunkció mellett heti 1-2 alkalommal TDM és kreatinin ellenőrzés szükséges."
                : currentLang === 'de'
                ? "Therapie mit unveränderter Dosis und Intervall gemäß IDSA 2026 fortsetzen. Wöchentlich 1-2x TDM- und Nierenfunktionskontrolle bei stabilen Parametern."
                : "Continue current regimen unchanged in accordance with IDSA 2026 targets. Perform TDM and creatinine monitoring 1-2 times weekly if renal function remains stable.";
            }
          } else if (rrt === 'hd') {
            if (val > 1.5 || (estimatedAuc24 && estimatedAuc24 > 120)) {
              status = 'toxic';
              interp = currentLang === 'hu'
                ? `Magas dialízis előtti Gentamicin szint (${val} mg/L, cél: < 1.5 mg/L; becsült AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L, IDSA 2026 cél: 80–120 mg·h/L). Akkumulációs és nefro/ototoxicitási veszély áll fenn.`
                : currentLang === 'de'
                ? `Hoher Prä-Dialyse-Spiegel (${val} mg/L, Ziel: < 1,5 mg/L; geschätzte AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L, IDSA 2026-Ziel: 80–120 mg·h/L) unter HD. Kumulationsgefahr.`
                : `High pre-dialysis Gentamicin level (${val} mg/L, target: < 1.5 mg/L; estimated AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L, IDSA 2026 target: 80–120 mg·h/L) in HD patient. Accumulation and toxicity risk.`;

              skipDoses = "Következő HD utáni dózist hagyja ki";
              newDose = "1.0 - 1.2 mg/kg (pl. 70-80 mg)";
              newInterval = "Minden dialízis után (HD végén)";
              act = currentLang === 'hu'
                ? "A magas expozíció miatt hagyja ki a következő HD utáni dózist. Indítsa újra csökkentett adaggal, ha a szint < 1 mg/L alá csökken (cél AUC24: 80–120 mg·h/L)."
                : currentLang === 'de'
                ? "Nächste Dosis nach HD auslassen. Mit reduzierter Dosis fortfahren, wenn Spiegel < 1 mg/L (Ziel-AUC24: 80–120 mg·h/L)."
                : "Skip the next post-dialysis dose. Resume at a reduced dose only once the pre-dialysis level drops below 1 mg/L (target AUC24: 80–120 mg·h/L).";
            } else if (val < 1.0 || (estimatedAuc24 && estimatedAuc24 < 80)) {
              status = 'sub';
              interp = currentLang === 'hu'
                ? `Alacsony dialízis előtti Gentamicin szint (${val} mg/L, cél: 1.0 - 1.5 mg/L; becsült AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L, IDSA 2026 cél: 80–120 mg·h/L). Nem biztosít kellő terápiás hatást.`
                : currentLang === 'de'
                ? `Niedriger Prä-Dialyse-Spiegel (${val} mg/L, Ziel: 1,0 - 1,5 mg/L; geschätzte AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L, IDSA 2026-Ziel: 80–120 mg·h/L). Unzureichende therapeutische Wirkung.`
                : `Low pre-dialysis Gentamicin level (${val} mg/L, target: 1.0 - 1.5 mg/L; estimated AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L, IDSA 2026 target: 80–120 mg·h/L). May fail to achieve clinical cure.`;

              skipDoses = 0;
              boosterDose = "1.0 - 1.5 mg/kg IV booster a következő HD végén";
              newDose = "2.0 - 2.5 mg/kg (pl. 140-160 mg)";
              newInterval = "Minden dialízis után (HD végén)";
              act = currentLang === 'hu'
                ? "Dózis kihagyása nem javasolt. Adjon be egy booster dózist a következő HD végén, majd emelje a fenntartó adagokat az IDSA 2026 célértékek eléréséhez."
                : currentLang === 'de'
                ? "Kein Auslassen empfohlen. Verabreichen Sie eine Booster-Dosis nach der nächsten HD und erhöhen Sie die Folgedosen."
                : "Dose skipping not recommended. Administer a booster dose at the end of the next HD session, then increase subsequent maintenance doses.";
            } else {
              status = 'therapeutic';
              interp = currentLang === 'hu'
                ? `Megfelelő dialízis előtti terápiás szint (${val} mg/L, becsült AUC24: ~${estimatedAuc24 ?? '100'} mg·h/L, IDSA 2026 cél: 80–120 mg·h/L) HD mellett.`
                : currentLang === 'de'
                ? `Angemessener Prä-Dialyse-Spiegel (${val} mg/L, geschätzte AUC24: ~${estimatedAuc24 ?? '100'} mg·h/L, IDSA 2026-Ziel: 80–120 mg·h/L) unter HD.`
                : `Appropriate pre-dialysis level (${val} mg/L, estimated AUC24: ~${estimatedAuc24 ?? '100'} mg·h/L, IDSA 2026 target: 80–120 mg·h/L) in HD patient.`;

              skipDoses = 0;
              newDose = "1.5 - 2.0 mg/kg (pl. 100-120 mg)";
              newInterval = "Minden dialízis után (HD végén)";
              act = currentLang === 'hu'
                ? "Folytassa az adagolást változatlanul minden dialízis után standard post-dialízis dózissal."
                : currentLang === 'de'
                ? "Post-Dialyse-Dosis nach jeder HD-Sitzung unverändert fortsetzen."
                : "Continue standard post-dialysis dosing (1.5-2.0 mg/kg) after each HD session.";
            }
          } else {
            // CRRT
            if (val > 1.5 || (estimatedAuc24 && estimatedAuc24 > 120)) {
              status = 'toxic';
              interp = currentLang === 'hu'
                ? `Emelkedett Gentamicin expozíció CRRT mellett (${val} mg/L, becsült AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L, IDSA 2026 cél: 80–120 mg·h/L). Toxicitás veszélye.`
                : currentLang === 'de'
                ? `Erhöhter Spiegel unter CRRT (${val} mg/L, geschätzte AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L, IDSA 2026: 80–120 mg·h/L). Toxizitätsrisiko.`
                : `Elevated Gentamicin exposure in CRRT patient (${val} mg/L, estimated AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L, IDSA 2026: 80–120 mg·h/L). Risk of ototoxicity and nephrotoxicity.`;

              skipDoses = 1;
              newDose = "1.0 - 1.5 mg/kg (pl. 70-100 mg)";
              newInterval = "q48h";
              act = currentLang === 'hu'
                ? "Hagyjon ki egy dózist (24-48 óra szünet). Csökkentse a fenntartó adagot és hosszabbítsa meg az időközt 48 órára az IDSA 2026 célértékek védelmében."
                : currentLang === 'de'
                ? "Eine Dosis auslassen (24-48 Stunden Pause). Erhaltungsdosis reduzieren und Intervall auf 48 Stunden verlängern."
                : "Skip 1 dose (withhold 24-48h). Reduce maintenance dose and extend interval to q48h.";
            } else if (val < 1.0 || (estimatedAuc24 && estimatedAuc24 < 80)) {
              status = 'sub';
              interp = currentLang === 'hu'
                ? `Alacsony Gentamicin szint CRRT mellett (${val} mg/L, cél: 1.0 - 1.5 mg/L; becsült AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L, IDSA 2026 cél: 80–120 mg·h/L). A CRRT jelentősen eliminálja az aminoglikozidokat.`
                : currentLang === 'de'
                ? `Niedriger Spiegel unter CRRT (${val} mg/L, Ziel: 1,0 - 1,5 mg/L; geschätzte AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L, IDSA 2026: 80–120 mg·h/L). Aminoglykoside werden durch CRRT stark eliminiert.`
                : `Low trough level in CRRT patient (${val} mg/L, target: 1.0 - 1.5 mg/L; estimated AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L, IDSA 2026 target: 80–120 mg·h/L). CRRT clears aminoglycosides substantially.`;

              skipDoses = 0;
              boosterDose = "1.5 - 2.0 mg/kg IV booster egyszer";
              newDose = "2.5 - 3.0 mg/kg (pl. 180-200 mg)";
              newInterval = "q24h";
              act = currentLang === 'hu'
                ? "Dózis kihagyása nem javasolt. Adjon egy booster dózist azonnal, majd emelje a fenntartó dózist és adja q24h időközönként az IDSA 2026 AUC céltartomány eléréséhez."
                : currentLang === 'de'
                ? "Kein Auslassen. Geben Sie sofort einen Booster und erhöhen Sie die Erhaltungsdosis auf q24h."
                : "Do not skip doses. Administer an immediate booster dose, then increase the maintenance dose and adjust the interval to q24h.";
            } else {
              status = 'therapeutic';
              interp = currentLang === 'hu'
                ? `Megfelelő és stabil szint CRRT mellett (${val} mg/L, becsült AUC24: ~${estimatedAuc24 ?? '100'} mg·h/L, IDSA 2026 cél: 80–120 mg·h/L).`
                : currentLang === 'de'
                ? `Sicherer Spiegel unter CRRT (${val} mg/L, geschätzte AUC24: ~${estimatedAuc24 ?? '100'} mg·h/L, IDSA 2026: 80–120 mg·h/L).`
                : `Safe trough level in CRRT patient (${val} mg/L, estimated AUC24: ~${estimatedAuc24 ?? '100'} mg·h/L, IDSA 2026: 80–120 mg·h/L).`;

              skipDoses = 0;
              newDose = "2.0 - 2.5 mg/kg (pl. 140-160 mg)";
              newInterval = "q24h - q48h";
              act = currentLang === 'hu'
                ? "Folytassa a kezelést standard CRRT melletti adagolással. Ellenőrizze a szintet 2 naponta."
                : currentLang === 'de'
                ? "Therapie mit Standarddosis für CRRT fortsetzen. Alle 2 Tage Spiegel kontrollieren."
                : "Continue therapy with standard CRRT dosing. Check levels every 2 days.";
            }
          }
        }
        break;

      case 'amikacin':
        {
          const isOdd = parseInt(tdm.currentInterval) >= 24;
          const targetTrough = isOdd ? 5.0 : 8.0;
          const currentDoseNum = parseFloat(tdm.currentDose) || 1000;
          const currentIntervalNum = parseFloat(tdm.currentInterval) || 24;
          const ptWeight = parseFloat(tdm.weight) || parseFloat(patient.weight) || 75;

          // IDSA 2026 AUC calculation (Sawchuk-Zaske 2-point or 1-compartment clearance model)
          if (val > 0 && currentDoseNum > 0 && currentIntervalNum > 0) {
            const vdPop = 0.26 * ptWeight;
            if (!isNaN(peakVal) && peakVal > val && peakVal > 0) {
              const deltaT = Math.max(1.0, currentIntervalNum - 1.0);
              const ke = Math.log(peakVal / Math.max(0.05, val)) / deltaT;
              const cMaxEst = peakVal * Math.exp(ke * 0.5);
              let vdEst = (currentDoseNum * (1 - Math.exp(-ke * 0.5))) / (0.5 * ke * Math.max(1, cMaxEst - val * Math.exp(-ke * 0.5)));
              if (isNaN(vdEst) || vdEst < 0.15 * ptWeight || vdEst > 0.6 * ptWeight) {
                vdEst = vdPop;
              }
              const cl = Math.max(0.5, ke * vdEst);
              const dailyDose = currentDoseNum * (24 / currentIntervalNum);
              estimatedAuc24 = Math.round(dailyDose / cl);
            } else {
              const peakEst = val + (currentDoseNum / vdPop);
              const deltaT = Math.max(1.0, currentIntervalNum - 1.0);
              const ke = Math.log(peakEst / Math.max(0.05, val)) / deltaT;
              const cl = Math.max(0.5, ke * vdPop);
              const dailyDose = currentDoseNum * (24 / currentIntervalNum);
              estimatedAuc24 = Math.round(dailyDose / cl);
            }
          }

          if (rrt === 'none') {
            const isAucToxic = estimatedAuc24 !== undefined && estimatedAuc24 > 300;
            const isTroughToxic = val > targetTrough;
            const isAucSub = estimatedAuc24 !== undefined && estimatedAuc24 < 200;
            const isPeakSub = !isNaN(peakVal) && peakVal > 0 && peakVal < (isOdd ? 45.0 : 20.0);

            if (isAucToxic || isTroughToxic) {
              status = 'toxic';
              interp = currentLang === 'hu'
                ? `FIGYELMEZTETÉS: A mért Amikacin expozíció meghaladja az IDSA 2026-os biztonsági határértéket (Becsült AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L [IDSA 2026 cél: 200–300 mg·h/L], mért völgykoncentráció: ${val} mg/L [cél: < ${targetTrough} mg/L]). A 300 mg·h/L feletti expozíció kifejezetten magas cochlearis/vestibularis ototoxicitási és nefrotoxicitási (AKI) rizikóval jár!`
                : currentLang === 'de'
                ? `WARNUNG: Die gemessene Amikacin-Exposition überschreitet die IDSA 2026-Sicherheitsgrenze (Geschätzte AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L [IDSA 2026-Ziel: 200–300 mg·h/L], Talspiegel: ${val} mg/L [Ziel: < ${targetTrough} mg/L]). Hohes Risiko für cochleäre/vestibuläre Ototoxizität und Nephrotoxizität (AKI)!`
                : `WARNING: Measured Amikacin exposure exceeds the IDSA 2026 safety limit (Estimated AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L [IDSA 2026 target: 200–300 mg·h/L], trough: ${val} mg/L [target: < ${targetTrough} mg/L]). Exposure exceeding 300 mg·h/L carries severe ototoxicity and nephrotoxicity (AKI) risks!`;

              skipDoses = (val > 8.0 || (estimatedAuc24 && estimatedAuc24 > 380)) ? 2 : 1;
              const aucVal = estimatedAuc24 || 350;
              const targetRatio = 250 / Math.max(300, aucVal);
              const suggestedDose = Math.max(300, Math.round((currentDoseNum * targetRatio) / 100) * 100);
              newDose = `${suggestedDose} mg`;
              newInterval = isOdd ? "q36h - q48h" : "q24h";
              act = currentLang === 'hu'
                ? `Az IDSA 2026-os irányelv alapján azonnali dóziskihagyás szükséges: hagyjon ki ${skipDoses} dózist! Csak akkor adja be a következő fenntartó adagot, ha a szérum völgykoncentráció < 2.5–5.0 mg/L alá csökkent. Az új javasolt fenntartó adag az AUC24 200–300 mg·h/L cél eléréséhez: ${newDose} (megnyújtott elimináció esetén q36h vagy q48h időköz javasolt).`
                : currentLang === 'de'
                ? `Gemäß IDSA 2026 ${skipDoses} Dosis(en) auslassen! Therapie erst fortsetzen, sobald der Talspiegel < 2,5–5,0 mg/L liegt. Neue Zieldosis für AUC24 200–300 mg·h/L: ${newDose} (bei verlängerter Elimination q36h/q48h).`
                : `Per IDSA 2026 guidelines, withhold ${skipDoses} dose(s)! Resume only when the trough drops below 2.5–5.0 mg/L. Suggested new dose for AUC24 200–300 mg·h/L target: ${newDose} (use q36h/q48h if elimination is prolonged).`;
            } else if (isAucSub || isPeakSub || (isOdd && val < 1.0)) {
              status = 'sub';
              interp = currentLang === 'hu'
                ? `Szubterápiás Amikacin expozíció az IDSA 2026-os irányelv alapján (Becsült AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L [IDSA 2026 célérték: 200–300 mg·h/L], mért völgy: ${val} mg/L). Az alacsony expozíció veszélyezteti a mikrobiológiai eradicatiót és terápiás kudarcot okozhat súlyos fertőzésekben.`
                : currentLang === 'de'
                ? `Subtherapeutische Amikacin-Exposition gemäß IDSA 2026 (Geschätzte AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L [IDSA 2026-Ziel: 200–300 mg·h/L], Talspiegel: ${val} mg/L). Gefährdet den Therapieerfolg bei schweren Infektionen.`
                : `Subtherapeutic Amikacin exposure per IDSA 2026 guidelines (Estimated AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L [IDSA 2026 target: 200–300 mg·h/L], trough: ${val} mg/L). Subtherapeutic levels risk microbiological failure in severe Gram-negative infections.`;

              skipDoses = 0;
              const aucVal = estimatedAuc24 || 150;
              const targetRatio = 250 / Math.min(200, Math.max(80, aucVal));
              const suggestedDose = Math.round((currentDoseNum * targetRatio) / 100) * 100;
              newDose = `${suggestedDose} mg`;
              newInterval = `q${tdm.currentInterval}h`;
              if (isOdd && (aucVal < 160 || val < 0.8)) {
                boosterDose = `${Math.round(currentDoseNum * 0.4 / 100) * 100} mg IV egyszeri booster`;
              }
              act = currentLang === 'hu'
                ? `Dózis kihagyása NEM indokolt. Az IDSA 2026-os cél (AUC24: 200–300 mg·h/L) eléréséhez emelje a fenntartó adagot ${currentDoseNum} mg-ról ${newDose}-ra. Szeptikus sokkban egyszeri booster adása megfontolandó. Kontroll TDM a 2-3. új dózis előtt.`
                : currentLang === 'de'
                ? `Kein Auslassen indiziert. Zur Erreichung des IDSA 2026-Ziels (AUC24: 200–300 mg·h/L) Erhaltungsdosis auf ${newDose} anheben. Bei septischem Schock Booster erwägen.`
                : `Do not skip doses. To reach the IDSA 2026 target (AUC24: 200–300 mg·h/L), increase maintenance dose to ${newDose}. Consider a booster in septic shock. Recheck TDM before next dose.`;
            } else {
              status = 'therapeutic';
              interp = currentLang === 'hu'
                ? `Optimális terápiás expozíció az IDSA 2026-os irányelv szerint (Becsült AUC24: ~${estimatedAuc24} mg·h/L [IDSA 2026 cél: 200–300 mg·h/L], mért völgykoncentráció: ${val} mg/L [cél: < 5.0 mg/L]). Maximális baktericid hatékonyság biztonságos toxicitási profil mellett.`
                : currentLang === 'de'
                ? `Optimaler therapeutischer Bereich nach IDSA 2026 (Geschätzte AUC24: ~${estimatedAuc24} mg·h/L [IDSA 2026-Ziel: 200–300 mg·h/L], Talspiegel: ${val} mg/L [< 5,0 mg/L]). Hohe bakterizide Wirksamkeit bei sicherem Toxizitätsprofil.`
                : `Optimal therapeutic exposure per IDSA 2026 guidelines (Estimated AUC24: ~${estimatedAuc24} mg·h/L [IDSA 2026 target: 200–300 mg·h/L], trough: ${val} mg/L [target: < 5.0 mg/L]). Maximum bactericidal efficacy with a safe toxicity profile.`;

              skipDoses = 0;
              newDose = `${tdm.currentDose} mg`;
              newInterval = `q${tdm.currentInterval}h`;
              act = currentLang === 'hu'
                ? "Az adagolás folytatható változatlan dózissal és időközzel az IDSA 2026 célértékek fenntartásával. Gondoskodjon bőséges hidrálásról, és rendszeresen ellenőrizze a szérum kreatinint."
                : currentLang === 'de'
                ? "Therapie mit unveränderter Dosis und Intervall gemäß IDSA 2026 fortsetzen. Für gute Hydratation sorgen und Nierenfunktion überwachen."
                : "Continue current regimen unchanged in compliance with IDSA 2026 targets. Maintain proper hydration and monitor serum creatinine regularly.";
            }
          } else if (rrt === 'hd') {
            if (val > 8.0 || (estimatedAuc24 && estimatedAuc24 > 300)) {
              status = 'toxic';
              interp = currentLang === 'hu'
                ? `Magas dialízis előtti Amikacin szint (${val} mg/L, cél: < 8.0 mg/L; becsült AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L, IDSA 2026 cél: 200–300 mg·h/L). Toxikus felhalmozódás.`
                : currentLang === 'de'
                ? `Hoher Prä-Dialyse-Spiegel (${val} mg/L; geschätzte AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L, IDSA 2026: 200–300 mg·h/L) unter HD. Kumulationsgefahr.`
                : `High pre-dialysis Amikacin level (${val} mg/L, estimated AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L, IDSA 2026 target: 200–300 mg·h/L) in HD patient. Accumulation danger.`;

              skipDoses = "Következő HD utáni dózist hagyja ki";
              newDose = "3.0 - 5.0 mg/kg (pl. 200-300 mg)";
              newInterval = "Minden dialízis után (HD végén)";
              act = currentLang === 'hu'
                ? "A magas szint miatt függessze fel az adagolást a következő dialízis végén. Indítsa újra csökkentett post-dialízis dózissal, ha a szint < 5 mg/L alá süllyed."
                : currentLang === 'de'
                ? "Aufgrund des hohen Spiegels die Gabe nach der nächsten HD auslassen. Erst wieder geben, wenn Spiegel < 5 mg/L."
                : "Withhold dosing after the next HD session due to toxic levels. Resume at a reduced post-dialysis dose once the pre-dialysis level is < 5 mg/L.";
            } else if (val < 5.0 || (estimatedAuc24 && estimatedAuc24 < 200)) {
              status = 'sub';
              interp = currentLang === 'hu'
                ? `Alacsony dialízis előtti Amikacin szint (${val} mg/L, cél: 5.0 - 8.0 mg/L; becsült AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L, IDSA 2026 cél: 200–300 mg·h/L). Nem biztosít elégséges terápiás hatást.`
                : currentLang === 'de'
                ? `Niedriger Prä-Dialyse-Spiegel (${val} mg/L, Ziel: 5,0 - 8,0 mg/L; geschätzte AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L). Unzureichende therapeutische Wirkung.`
                : `Low pre-dialysis Amikacin level (${val} mg/L, target: 5.0 - 8.0 mg/L; estimated AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L). Insufficient therapeutic effect.`;

              skipDoses = 0;
              boosterDose = "5.0 - 7.5 mg/kg IV booster a következő HD végén";
              newDose = "7.5 - 10.0 mg/kg (pl. 500-600 mg)";
              newInterval = "Minden dialízis után (HD végén)";
              act = currentLang === 'hu'
                ? "Dózis kihagyása nem javasolt. Adjon booster dózist a következő HD végén, majd emelje a fenntartó adagokat az IDSA 2026 expozíciós célok biztosításához."
                : currentLang === 'de'
                ? "Kein Auslassen empfohlen. Booster-Dosis nach der nächsten HD verabreichen und Folgedosen anheben."
                : "Dose skipping not recommended. Administer a booster dose after the next HD, then increase subsequent maintenance doses.";
            } else {
              status = 'therapeutic';
              interp = currentLang === 'hu'
                ? `Megfelelő dialízis előtti szint (${val} mg/L, becsült AUC24: ~${estimatedAuc24 ?? '250'} mg·h/L, IDSA 2026 cél: 200–300 mg·h/L) HD mellett.`
                : currentLang === 'de'
                ? `Angemessener Prä-Dialyse-Spiegel (${val} mg/L, geschätzte AUC24: ~${estimatedAuc24 ?? '250'} mg·h/L, IDSA 2026: 200–300 mg·h/L) unter HD.`
                : `Appropriate pre-dialysis level (${val} mg/L, estimated AUC24: ~${estimatedAuc24 ?? '250'} mg·h/L, IDSA 2026: 200–300 mg·h/L) in HD patient.`;

              skipDoses = 0;
              newDose = "5.0 - 7.5 mg/kg (pl. 350-500 mg)";
              newInterval = "Minden dialízis után (HD végén)";
              act = currentLang === 'hu'
                ? "Folytassa az adagolást minden dialízis után standard post-dialízis dózissal."
                : currentLang === 'de'
                ? "Post-Dialyse-Dosis nach jeder HD fortsetzen."
                : "Continue standard post-dialysis dosing (5.0-7.5 mg/kg) after each HD session.";
            }
          } else {
            // CRRT
            if (val > 8.0 || (estimatedAuc24 && estimatedAuc24 > 300)) {
              status = 'toxic';
              interp = currentLang === 'hu'
                ? `Magas Amikacin expozíció CRRT mellett (${val} mg/L, cél: < 8.0 mg/L; becsült AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L, IDSA 2026 cél: 200–300 mg·h/L).`
                : currentLang === 'de'
                ? `Hoher Spiegel unter CRRT (${val} mg/L; geschätzte AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L, IDSA 2026: 200–300 mg·h/L).`
                : `High Amikacin exposure in CRRT patient (${val} mg/L, estimated AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L, IDSA 2026 target: 200–300 mg·h/L).`;

              skipDoses = 1;
              newDose = "5.0 mg/kg (pl. 350 mg)";
              newInterval = "q48h";
              act = currentLang === 'hu'
                ? "Hagyjon ki egy dózist (24 órás withhold). Indítsa újra csökkentett dózissal és megnyújtott (48 órás) adagolási időközzel az IDSA 2026 célértékek védelmében."
                : currentLang === 'de'
                ? "Eine Dosis auslassen. Mit reduzierter Dosis und verlängertem Intervall (48h) fortsetzen."
                : "Skip 1 dose. Restart with reduced dose and extended interval (48h).";
            } else if (val < 5.0 || (estimatedAuc24 && estimatedAuc24 < 200)) {
              status = 'sub';
              interp = currentLang === 'hu'
                ? `Alacsony Amikacin szint CRRT mellett (${val} mg/L, cél: 5.0 - 8.0 mg/L; becsült AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L, IDSA 2026 cél: 200–300 mg·h/L). Jelentős mértékű a gyógyszer hemofiltrációs eliminációja.`
                : currentLang === 'de'
                ? `Niedriger Spiegel unter CRRT (${val} mg/L, Ziel: 5,0 - 8,0 mg/L; geschätzte AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L). Hohe Filtrations-Clearance.`
                : `Low trough level in CRRT patient (${val} mg/L, target: 5.0 - 8.0 mg/L; estimated AUC24: ${estimatedAuc24 ?? 'N/A'} mg·h/L, IDSA 2026 target: 200–300 mg·h/L). High filtration clearance.`;

              skipDoses = 0;
              boosterDose = "7.5 - 10.0 mg/kg IV booster egyszer";
              newDose = "10.0 - 12.5 mg/kg (pl. 750-900 mg)";
              newInterval = "q24h";
              act = currentLang === 'hu'
                ? "Dózis kihagyása nem javasolt. Adjon egy booster dózist azonnal, majd emelje a fenntartó dózist és adja q24h időközönként az IDSA 2026 AUC célérték eléréséhez."
                : currentLang === 'de'
                ? "Kein Auslassen. Booster sofort geben, dann Erhaltungsdosis anheben und q24h verabreichen."
                : "Do not skip doses. Administer booster dose immediately, then increase the maintenance dose and adjust the interval to q24h.";
            } else {
              status = 'therapeutic';
              interp = currentLang === 'hu'
                ? `Terápiás szint CRRT mellett (${val} mg/L, becsült AUC24: ~${estimatedAuc24 ?? '250'} mg·h/L, IDSA 2026 cél: 200–300 mg·h/L).`
                : currentLang === 'de'
                ? `Therapeutischer Spiegel unter CRRT (${val} mg/L, geschätzte AUC24: ~${estimatedAuc24 ?? '250'} mg·h/L, IDSA 2026: 200–300 mg·h/L).`
                : `Therapeutic level in CRRT patient (${val} mg/L, estimated AUC24: ~${estimatedAuc24 ?? '250'} mg·h/L, IDSA 2026 target: 200–300 mg·h/L).`;

              skipDoses = 0;
              newDose = "7.5 - 10.0 mg/kg (pl. 500-750 mg)";
              newInterval = "q24h - q48h";
              act = currentLang === 'hu'
                ? "Folytassa a kezelést standard CRRT melletti adagolással."
                : currentLang === 'de'
                ? "Therapie mit Standarddosis für CRRT fortsetzen."
                : "Continue therapy with standard CRRT dosing.";
            }
          }
        }
        break;

      case 'voriconazole':
        if (rrt === 'none') {
          if (val < 1.5) {
            status = 'sub';
            interp = currentLang === 'hu'
              ? `Szubterápiás voriconazol szint (${val} mg/L, cél: 1.5-5.0 mg/L). Magas a gombás fertőzés progressziójának vagy a terápiás kudarcnak a veszélye.`
              : currentLang === 'de'
              ? `Subtherapeutischer Voriconazol-Spiegel (${val} mg/L, Ziel: 1,5-5,0 mg/L). Risiko für Therapieversagen.`
              : `Subtherapeutic voriconazole level (${val} mg/L, target: 1.5-5.0 mg/L). Risk of fungal treatment failure.`;

            skipDoses = 0;
            boosterDose = "200 - 300 mg IV/PO egyszer";
            const currentDoseNum = parseFloat(tdm.currentDose) || 200;
            newDose = `${Math.round(currentDoseNum * 1.5)} mg`;
            newInterval = "q12h";
            act = currentLang === 'hu'
              ? `Dózis kihagyása nem indokolt. Adjon be egy egyszeri booster dózist (200-300 mg IV/PO), majd emelje a fenntartó adagot kb. 50%-kal (pl. ${tdm.currentDose} mg-ról ${newDose}-ra q12h). Ellenőrizze a gyógyszer-interakciókat!`
              : currentLang === 'de'
              ? `Kein Auslassen empfohlen. Geben Sie einmalig 200-300 mg i.v./p.o. (Booster), gefolgt von einer Erhöhung der Erhaltungsdosis um ca. 50%.`
              : `Dose skipping not recommended. Administer a single booster dose (200-300 mg IV/PO), then increase maintenance dose by approx 50% (e.g., to ${newDose} q12h). Check drug interactions.`;
          } else if (val <= 5.0) {
            status = 'therapeutic';
            interp = currentLang === 'hu'
              ? `Megfelelő, biztonságos és hatásos terápiás voriconazol szint (${val} mg/L).`
              : currentLang === 'de'
              ? `Optimaler therapeutischer Spiegel (${val} mg/L). Gute Balance zwischen Wirkung und Verträglichkeit.`
              : `Optimal therapeutic level (${val} mg/L). Safe and effective.`;

            skipDoses = 0;
            newDose = `${tdm.currentDose} mg`;
            newInterval = "q12h";
            act = currentLang === 'hu'
              ? "Folytassa a kezelést változatlan adagolással. Kontroll TDM 5-7 nap múlva javasolt."
              : currentLang === 'de'
              ? "Therapie unverändert fortsetzen. TDM-Kontrolle in 5-7 Tagen empfohlen."
              : "Continue therapy unchanged. Re-check TDM in 5-7 days.";
          } else {
            status = 'toxic';
            interp = currentLang === 'hu'
              ? `Toxikus voriconazol szint (${val} mg/L, > 5.0 mg/L). Kifejezett neurotoxicitás (látászavarok, hallucinációk, zavartság, neuropathia) és májkárosodás veszélye áll fenn.`
              : currentLang === 'de'
              ? `Toxischer Voriconazol-Spiegel (${val} mg/L, > 5,0 mg/L). Risiko für Neurotoxizität (Sehstörungen, Halluzinationen, Verwirrung) und Hepatotoxizität.`
              : `Toxic voriconazole level (${val} mg/L, > 5.0 mg/L). High risk of neurotoxicity (visual disturbances, hallucinations, confusion) and hepatotoxicity.`;

            skipDoses = val > 6.5 ? 2 : 1;
            const currentDoseNum = parseFloat(tdm.currentDose) || 200;
            newDose = `${Math.round(currentDoseNum * 0.5)} mg`;
            newInterval = "q12h (vagy q24h)";
            act = currentLang === 'hu'
              ? `Azonnal függessze fel az adagolást! Hagyjon ki ${skipDoses} dózist! Mérje vissza a szérumszintet, és csak akkor folytassa csökkentett adaggal (pl. ${newDose} q12h), ha a szint < 3.0 mg/L alá csökkent. Ellenőrizze naponta a májenzimeket!`
              : currentLang === 'de'
              ? `Therapie sofort aussetzen! Lassen Sie ${skipDoses} Dosis(en) aus. Erst mit reduzierter Dosis (z. B. ${newDose} q12h) fortsetzen, wenn der Spiegel < 3,0 mg/L beträgt. Leberwerte täglich kontrollieren.`
              : `Withhold therapy immediately! Skip ${skipDoses} dose(s). Resume at a reduced dose (e.g., ${newDose} q12h) only when the level drops below 3.0 mg/L. Monitor liver enzymes daily.`;
          }
        } else if (rrt === 'hd') {
          if (val < 1.5) {
            status = 'sub';
            interp = currentLang === 'hu'
              ? `Hemodialízis mellett a voriconazol szint alacsony (${val} mg/L). Bár a hemodialízis nem üríti ki jelentősen, a fokozott metabolizmus vagy az IV jármű (SBECD) felhalmozódásának elkerülése miatti aluladagolás fennállhat.`
              : currentLang === 'de'
              ? `Unter Hämodialyse ist der Voriconazol-Spiegel zu niedrig (${val} mg/L).`
              : `Under hemodialysis, voriconazole level is low (${val} mg/L).`;

            skipDoses = 0;
            boosterDose = "200 mg PO/IV egyszeri booster";
            const currentDoseNum = parseFloat(tdm.currentDose) || 200;
            newDose = `${Math.round(currentDoseNum * 1.5)} mg`;
            newInterval = "q12h (szájon át preferált)";
            act = currentLang === 'hu'
              ? `Dózis kihagyása nem javasolt. Adjon egy egyszeri booster dózist, majd folytassa megemelt adaggal. FIGYELEM: IV adagolás esetén az SBECD hordozóanyag felhalmozódhat; lehetőség szerint térjen át ORÁLIS (p.o.) adagolásra, amely nem igényel vesefunkciós korlátozást!`
              : currentLang === 'de'
              ? `Kein Auslassen empfohlen. Einmalige Booster-Dosis verabreichen. WICHTIG: Bei i.v. Gabe droht SBECD-Akkumulation; bevorzugen Sie nach Möglichkeit die ORALE (p.o.) Gabe!`
              : `Dose skipping not recommended. Administer a single booster dose. IMPORTANT: IV formulation carries risk of SBECD vehicle accumulation; switch to ORAL (PO) therapy if possible!`;
          } else if (val <= 5.0) {
            status = 'therapeutic';
            interp = currentLang === 'hu'
              ? `Megfelelő dialízis előtti terápiás szint (${val} mg/L) hemodializált betegnél.`
              : currentLang === 'de'
              ? `Optimaler Prä-Dialyse-Spiegel (${val} mg/L) bei Hämodialyse-Patienten.`
              : `Appropriate pre-dialysis level (${val} mg/L) in HD patient.`;

            skipDoses = 0;
            newDose = `${tdm.currentDose} mg`;
            newInterval = "q12h (szájon át preferált)";
            act = currentLang === 'hu'
              ? "Folytassa a kezelést változatlan adaggal. Lehetőleg szájon át (p.o.) adagolja az SBECD akkumuláció elkerülése érdekében."
              : currentLang === 'de'
              ? "Therapie unverändert fortsetzen. Orale (p.o.) Gabe bevorzugen, um eine SBECD-Akkumulation zu vermeiden."
              : "Continue current regimen. Prefer oral (PO) route to avoid SBECD accumulation.";
          } else {
            status = 'toxic';
            interp = currentLang === 'hu'
              ? `Toxikus pre-dialízis voriconazol szint (${val} mg/L) HD mellett. Fokozott neurotoxicitás és hepatotoxicitás kockázata.`
              : currentLang === 'de'
              ? `Toxischer Prä-Dialyse-Spiegel (${val} mg/L) unter HD. Erhöhtes Risiko für Toxizität.`
              : `Toxic pre-dialysis level (${val} mg/L) in HD patient. Increased risk of neuro/hepatotoxicity.`;

            skipDoses = 1;
            const currentDoseNum = parseFloat(tdm.currentDose) || 200;
            newDose = `${Math.round(currentDoseNum * 0.5)} mg`;
            newInterval = "q12h";
            act = currentLang === 'hu'
              ? `Függessze fel a kezelést 24 órára (hagyjon ki 1 dózist). Indítsa újra 50%-kal csökkentett adaggal, ha a szint 3.0 mg/L alá süllyedt. Váltson orális adagolásra, ha eddig i.v. kapta.`
              : currentLang === 'de'
              ? `Therapie für 24h aussetzen (1 Dosis auslassen). Mit 50% reduzierter Dosis fortsetzen, sobald Spiegel < 3,0 mg/L. Auf orale Gabe umstellen.`
              : `Withhold therapy for 24h (skip 1 dose). Resume at a 50% reduced dose once level drops below 3.0 mg/L. Switch to oral route if currently IV.`;
          }
        } else {
          if (val < 1.5) {
            status = 'sub';
            interp = currentLang === 'hu'
              ? `CRRT mellett alacsony voriconazol szint (${val} mg/L). Bár a szűrők nem távolítják el nagymértékben, a hyperdinám CRRT állapotok fokozhatják a clearance-t.`
              : currentLang === 'de'
              ? `Unter CRRT ist der Spiegel zu niedrig (${val} mg/L).`
              : `Under CRRT, voriconazole level is low (${val} mg/L).`;

            skipDoses = 0;
            boosterDose = "200 mg PO/IV egyszer";
            const currentDoseNum = parseFloat(tdm.currentDose) || 200;
            newDose = `${Math.round(currentDoseNum * 1.5)} mg`;
            newInterval = "q12h";
            act = currentLang === 'hu'
              ? `Adjon egy egyszeri booster dózist, majd emelje meg a fenntartó adagot kb. 50%-kal. Törekedjen az orális (p.o.) adagolásra a nefrotoxikus SBECD hordozó felhalmozódásának megakadályozása érdekében.`
              : currentLang === 'de'
              ? `Geben Sie eine Booster-Dosis, dann Erhaltungsdosis um 50% anheben. Bevorzugen Sie die orale Gabe wegen der SBECD-Akkumulationsgefahr bei i.v.`
              : `Administer a booster dose, then increase maintenance dose by 50%. Prefer oral route to prevent nephrotoxic SBECD accumulation.`;
          } else if (val <= 5.0) {
            status = 'therapeutic';
            interp = currentLang === 'hu'
              ? `Megfelelő és stabil terápiás szint CRRT mellett (${val} mg/L).`
              : currentLang === 'de'
              ? `Therapeutischer und stabiler Spiegel unter CRRT (${val} mg/L).`
              : `Appropriate and stable level in CRRT patient (${val} mg/L).`;

            skipDoses = 0;
            newDose = `${tdm.currentDose} mg`;
            newInterval = "q12h";
            act = currentLang === 'hu'
              ? "Folytassa az adagolást változatlanul. Kísérje figyelemmel a májfunkciót és a klinikai hatékonyságot."
              : currentLang === 'de'
              ? "Therapie unverändert fortsetzen. Leberwerte und klinischen Verlauf engmaschig überbachen."
              : "Continue current regimen. Monitor liver function and clinical efficacy.";
          } else {
            status = 'toxic';
            interp = currentLang === 'hu'
              ? `Toxikus voriconazol szint CRRT mellett (${val} mg/L). Jelentős mellékhatás-kockázat.`
              : currentLang === 'de'
              ? `Toxischer Spiegel unter CRRT (${val} mg/L).`
              : `Toxic level in CRRT patient (${val} mg/L).`;

            skipDoses = 1;
            const currentDoseNum = parseFloat(tdm.currentDose) || 200;
            newDose = `${Math.round(currentDoseNum * 0.5)} mg`;
            newInterval = "q12h";
            act = currentLang === 'hu'
              ? `Hagyjon ki 1 dózist. Indítsa újra 50%-kal csökkentett fenntartó adaggal (pl. ${newDose} q12h), ha a szint < 3.0 mg/L alá süllyedt. Ellenőrizze a májenzimeket.`
              : currentLang === 'de'
              ? `1 Dosis auslassen. Mit 50% reduzierter Dosis fortsetzen, sobald Spiegel < 3,0 mg/L. Leberwerte kontrollieren.`
              : `Skip 1 dose. Resume at a 50% reduced maintenance dose (e.g., ${newDose} q12h) only once level drops below 3.0 mg/L. Monitor liver enzymes.`;
          }
        }
        break;

      default:
        break;
    }

    setTdmResult({
      status,
      interpretation: interp,
      action: act,
      skipDoses,
      newDose,
      newInterval,
      boosterDose,
      estimatedAuc24
    });
  };

  return (
    <div className="space-y-6">
      {/* Module Title */}
      <div className="border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2 text-slate-800">
          <Calculator className="w-6 h-6 text-blue-600" />
          <h2 className="text-lg font-extrabold tracking-tight">{lt.title}</h2>
        </div>
        <p className="text-xs text-slate-500 mt-1">{lt.subtitle}</p>
      </div>

      {/* Model Information Banner */}
      <div className="bg-gradient-to-r from-blue-50/90 to-indigo-50/70 border border-blue-200/80 rounded-xl p-3.5 flex items-start gap-3 shadow-xs">
        <div className="p-1.5 bg-blue-100/90 text-blue-700 rounded-lg shrink-0 mt-0.5">
          <Info className="w-4 h-4" />
        </div>
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold text-blue-950 uppercase tracking-wider">
              {lt.model_note_title}
            </span>
            <span className="text-[10px] bg-blue-200/70 text-blue-800 font-semibold px-2 py-0.5 rounded-full border border-blue-300/60">
              {currentLang === 'hu' ? '1-kompartmentes PK modell + Cockcroft-Gault' : currentLang === 'de' ? '1-Kompartiment-PK + Cockcroft-Gault' : '1-Compartment PK + Cockcroft-Gault'}
            </span>
          </div>
          <p className="text-xs text-blue-900/90 leading-relaxed">
            {lt.model_note_desc}
          </p>
        </div>
      </div>

      {/* Internal Subtabs */}
      <div className="flex border-b border-slate-200">
        <button
          onClick={() => setActiveSubTab('initial')}
          className={`py-2 px-4 text-xs font-bold border-b-2 transition-all ${
            activeSubTab === 'initial'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          {lt.tab_initial}
        </button>
        <button
          onClick={() => setActiveSubTab('tdm')}
          className={`py-2 px-4 text-xs font-bold border-b-2 transition-all ${
            activeSubTab === 'tdm'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          {lt.tab_tdm}
        </button>
      </div>

      {/* SUBTAB 1: INITIAL DOSE PLANNER */}
      {activeSubTab === 'initial' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Panel - Inputs */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-4 space-y-3">
              <h3 className="text-xs font-bold text-slate-700 flex items-center gap-1.5 uppercase tracking-wider">
                <User className="w-4 h-4 text-slate-400" />
                {lt.patient_params}
              </h3>

              {/* Age */}
              <div>
                <label className="text-[11px] font-semibold text-slate-500 block mb-1">{lt.age}</label>
                <input
                  type="number"
                  value={patient.age}
                  onChange={(e) => setPatient({ ...patient, age: e.target.value })}
                  className="w-full border border-slate-200 rounded-lg p-2 text-xs focus:ring-1 focus:ring-blue-500 outline-none"
                  placeholder="e.g. 65"
                />
              </div>

              {/* Weight */}
              <div>
                <label className="text-[11px] font-semibold text-slate-500 block mb-1">{lt.weight}</label>
                <input
                  type="number"
                  value={patient.weight}
                  onChange={(e) => setPatient({ ...patient, weight: e.target.value })}
                  className="w-full border border-slate-200 rounded-lg p-2 text-xs focus:ring-1 focus:ring-blue-500 outline-none"
                  placeholder="e.g. 75"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="text-[11px] font-semibold text-slate-500 block mb-1">{lt.gender}</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setPatient({ ...patient, gender: 'male' })}
                    className={`py-1.5 rounded-lg text-xs font-bold border transition-colors ${
                      patient.gender === 'male'
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {lt.male}
                  </button>
                  <button
                    onClick={() => setPatient({ ...patient, gender: 'female' })}
                    className={`py-1.5 rounded-lg text-xs font-bold border transition-colors ${
                      patient.gender === 'female'
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {lt.female}
                  </button>
                </div>
              </div>

              {/* Creatinine */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-[11px] font-semibold text-slate-500">{lt.creatinine}</label>
                  <div className="flex gap-1">
                    <button
                      onClick={() => setPatient({ ...patient, creatinineUnit: 'umol' })}
                      className={`text-[9px] px-1.5 py-0.5 rounded ${
                        patient.creatinineUnit === 'umol' ? 'bg-slate-700 text-white font-bold' : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      µmol/L
                    </button>
                    <button
                      onClick={() => setPatient({ ...patient, creatinineUnit: 'mgdl' })}
                      className={`text-[9px] px-1.5 py-0.5 rounded ${
                        patient.creatinineUnit === 'mgdl' ? 'bg-slate-700 text-white font-bold' : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      mg/dL
                    </button>
                  </div>
                </div>
                <input
                  type="number"
                  step="any"
                  value={patient.creatinine}
                  onChange={(e) => setPatient({ ...patient, creatinine: e.target.value })}
                  className="w-full border border-slate-200 rounded-lg p-2 text-xs focus:ring-1 focus:ring-blue-500 outline-none"
                  placeholder={patient.creatinineUnit === 'umol' ? 'e.g. 90' : 'e.g. 1.0'}
                />
              </div>

              {/* Renal Replacement Therapy (RRT) Selection */}
              <div>
                <label className="text-[11px] font-semibold text-slate-500 block mb-1">{lt.rrt_label}</label>
                <select
                  value={patient.rrt}
                  onChange={(e) => setPatient({ ...patient, rrt: e.target.value as 'none' | 'hd' | 'crrt' })}
                  className="w-full border border-slate-200 rounded-lg p-2 text-xs focus:ring-1 focus:ring-blue-500 outline-none bg-white font-bold text-slate-700"
                >
                  <option value="none">{lt.rrt_none}</option>
                  <option value="hd">{lt.rrt_hd}</option>
                  <option value="crrt">{lt.rrt_crrt}</option>
                </select>
              </div>

              {/* Calculate buttons */}
              <div className="flex gap-2 pt-2">
                <button
                  onClick={handleCalculateCrCl}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 rounded-lg flex items-center justify-center gap-1 shadow-sm transition-colors"
                >
                  <Calculator className="w-4 h-4" />
                  {lt.calculate}
                </button>
                <button
                  onClick={handleResetInitial}
                  className="bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold px-3 rounded-lg transition-colors"
                  title={lt.reset}
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Select drug card */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-4 space-y-3">
              <h3 className="text-xs font-bold text-slate-700 flex items-center gap-1.5 uppercase tracking-wider">
                <Sliders className="w-4 h-4 text-slate-400" />
                {lt.select_drug}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {(['vancomycin', 'gentamicin', 'amikacin', 'voriconazole'] as const).map((d) => (
                  <button
                    key={d}
                    onClick={() => setSelectedInitialDrug(d)}
                    className={`py-2 px-3 rounded-lg text-xs font-bold border text-left transition-all ${
                      selectedInitialDrug === d
                        ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span className="capitalize">{d}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Results & Suggestions */}
          <div className="lg:col-span-7 space-y-4">
            {(calculatedCrCl !== null || (patient.rrt !== 'none' && hasCalculated)) ? (
              <div className="space-y-4">
                {/* CrCl result banner or RRT banner */}
                <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm space-y-2">
                  {patient.rrt === 'none' ? (
                    <>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{lt.crcl_result}</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-extrabold text-slate-800">{calculatedCrCl}</span>
                        <span className="text-xs text-slate-500 font-bold">mL/min</span>
                      </div>

                      {/* Renal function tag */}
                      {calculatedCrCl !== null && (
                        <div className={`inline-flex px-2.5 py-1 rounded text-xs font-bold border ${getRenalCategory(calculatedCrCl).color}`}>
                          {getRenalCategory(calculatedCrCl).label}
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{lt.rrt_label}</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-extrabold text-blue-600">
                          {patient.rrt === 'hd' ? lt.rrt_hd : lt.rrt_crrt}
                        </span>
                      </div>
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-2.5 flex gap-2 text-[11px] text-amber-800 font-medium">
                        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <p>{lt.rrt_info_banner}</p>
                      </div>
                    </>
                  )}
                </div>

                {/* Dosing suggestions */}
                {initialSuggestions && (
                  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
                    <div className="border-b border-slate-100 pb-3">
                      <h4 className="text-sm font-extrabold text-slate-800 capitalize">
                        {selectedInitialDrug} {currentLang === 'hu' ? 'kezdő dózisterv' : 'initial dosing plan'}
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Loading Dose */}
                      <div className="bg-slate-50 border border-slate-100 p-3.5 rounded-lg space-y-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{lt.loading_dose}</span>
                        <p className="text-sm font-extrabold text-slate-800">{initialSuggestions.loading}</p>
                      </div>

                      {/* Maintenance Dose */}
                      <div className="bg-slate-50 border border-slate-100 p-3.5 rounded-lg space-y-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{lt.maintenance_dose}</span>
                        <p className="text-sm font-extrabold text-slate-800">
                          {initialSuggestions.maintenance} / {initialSuggestions.interval}
                        </p>
                      </div>
                    </div>

                    {/* Dosing Interval Info */}
                    <div className="bg-blue-50/40 border border-blue-100/50 p-4 rounded-lg flex gap-3">
                      <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <h5 className="text-xs font-bold text-blue-800">{lt.clinical_tips}</h5>
                        <p className="text-xs text-slate-600 leading-relaxed">{initialSuggestions.notes}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white border border-slate-100 rounded-xl p-8 text-center flex flex-col items-center justify-center space-y-3 min-h-[300px]">
                <Calculator className="w-12 h-12 text-slate-300" />
                <p className="text-slate-500 font-medium text-xs">
                  {currentLang === 'hu'
                    ? "Add meg a beteg paramétereit a bal oldalon, majd kattints a 'Számítás és Tervezés' gombra az optimális terápia megtervezéséhez."
                    : currentLang === 'de'
                    ? "Geben Sie die Patientenparameter links ein und klicken Sie auf 'Berechnen & Planen', um die optimale Therapie zu planen."
                    : "Enter the patient parameters on the left and click 'Calculate & Plan' to design the optimal initial therapy."}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* SUBTAB 2: TDM EVALUATION */}
      {activeSubTab === 'tdm' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Panel - Inputs */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200/60 rounded-xl p-4 space-y-4">
            <h3 className="text-xs font-bold text-slate-700 flex items-center gap-1.5 uppercase tracking-wider">
              <Activity className="w-4 h-4 text-slate-400" />
              {lt.tdm_title}
            </h3>

            {/* Select drug */}
            <div>
              <label className="text-[11px] font-semibold text-slate-500 block mb-1">{lt.select_drug}</label>
              <select
                value={tdm.drugId}
                onChange={(e) => {
                  const newDrug = e.target.value as any;
                  let newDose = tdm.currentDose;
                  let newInt = tdm.currentInterval;
                  let newTrough = tdm.measuredTrough;
                  if (newDrug === 'gentamicin' && tdm.drugId !== 'gentamicin') {
                    newDose = '350';
                    newInt = '24';
                    newTrough = '0.6';
                  } else if (newDrug === 'amikacin' && tdm.drugId !== 'amikacin') {
                    newDose = '1000';
                    newInt = '24';
                    newTrough = '2.5';
                  } else if (newDrug === 'vancomycin' && tdm.drugId !== 'vancomycin') {
                    newDose = '1000';
                    newInt = '12';
                    newTrough = '12.0';
                  } else if (newDrug === 'voriconazole' && tdm.drugId !== 'voriconazole') {
                    newDose = '200';
                    newInt = '12';
                    newTrough = '2.5';
                  }
                  setTdm({
                    ...tdm,
                    drugId: newDrug,
                    currentDose: newDose,
                    currentInterval: newInt,
                    measuredTrough: newTrough,
                    measuredPeak: ''
                  });
                }}
                className="w-full border border-slate-200 rounded-lg p-2 text-xs focus:ring-1 focus:ring-blue-500 outline-none bg-white font-bold text-slate-700"
              >
                <option value="vancomycin">Vancomycin</option>
                <option value="gentamicin">Gentamicin</option>
                <option value="amikacin">Amikacin</option>
                <option value="voriconazole">Voriconazole</option>
              </select>
            </div>

            {/* Renal Replacement Therapy (RRT) Selection */}
            <div>
              <label className="text-[11px] font-semibold text-slate-500 block mb-1">{lt.rrt_label}</label>
              <select
                value={tdm.rrt}
                onChange={(e) => setTdm({ ...tdm, rrt: e.target.value as 'none' | 'hd' | 'crrt' })}
                className="w-full border border-slate-200 rounded-lg p-2 text-xs focus:ring-1 focus:ring-blue-500 outline-none bg-white font-bold text-slate-700"
              >
                <option value="none">{lt.rrt_none}</option>
                <option value="hd">{lt.rrt_hd}</option>
                <option value="crrt">{lt.rrt_crrt}</option>
              </select>
            </div>

            {/* Patient Weight */}
            <div>
              <label className="text-[11px] font-semibold text-slate-500 block mb-1">{lt.patient_weight_label}</label>
              <input
                type="number"
                value={tdm.weight}
                onChange={(e) => setTdm({ ...tdm, weight: e.target.value })}
                className="w-full border border-slate-200 rounded-lg p-2 text-xs focus:ring-1 focus:ring-blue-500 outline-none bg-white font-semibold"
                placeholder="e.g. 75"
              />
            </div>

            {/* Current Dose */}
            <div>
              <label className="text-[11px] font-semibold text-slate-500 block mb-1">{lt.current_dose}</label>
              <input
                type="number"
                value={tdm.currentDose}
                onChange={(e) => setTdm({ ...tdm, currentDose: e.target.value })}
                className="w-full border border-slate-200 rounded-lg p-2 text-xs focus:ring-1 focus:ring-blue-500 outline-none bg-white font-semibold"
                placeholder="e.g. 1000"
              />
            </div>

            {/* Current Interval */}
            <div>
              <label className="text-[11px] font-semibold text-slate-500 block mb-1">{lt.interval_hrs}</label>
              <select
                value={tdm.currentInterval}
                onChange={(e) => setTdm({ ...tdm, currentInterval: e.target.value })}
                className="w-full border border-slate-200 rounded-lg p-2 text-xs focus:ring-1 focus:ring-blue-500 outline-none bg-white font-semibold"
              >
                <option value="8">q8h (8 óránként)</option>
                <option value="12">q12h (12 óránként)</option>
                <option value="24">q24h (24 óránként)</option>
                <option value="36">q36h (36 óránként)</option>
                <option value="48">q48h (48 óránként)</option>
              </select>
            </div>

            {/* Measured Trough */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-[11px] font-semibold text-slate-500">{lt.measured_trough}</label>
                {(tdm.drugId === 'gentamicin' || tdm.drugId === 'amikacin') && (
                  <span className="text-[10px] text-blue-600 font-bold">
                    {tdm.drugId === 'gentamicin' ? 'IDSA 2026: < 1.0 mg/L' : 'IDSA 2026: < 5.0 mg/L'}
                  </span>
                )}
              </div>
              <input
                type="number"
                step="any"
                value={tdm.measuredTrough}
                onChange={(e) => setTdm({ ...tdm, measuredTrough: e.target.value })}
                className="w-full border border-slate-200 rounded-lg p-2 text-xs focus:ring-1 focus:ring-blue-500 outline-none bg-white font-bold"
                placeholder="e.g. 0.6"
              />
            </div>

            {/* Measured Peak (only for aminoglycosides) */}
            {(tdm.drugId === 'gentamicin' || tdm.drugId === 'amikacin') && (
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-[11px] font-semibold text-slate-500">{lt.measured_peak}</label>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {currentLang === 'hu' ? '30-60 perccel az infúzió után' : '30-60 min post-infusion'}
                  </span>
                </div>
                <input
                  type="number"
                  step="any"
                  value={tdm.measuredPeak}
                  onChange={(e) => setTdm({ ...tdm, measuredPeak: e.target.value })}
                  className="w-full border border-slate-200 rounded-lg p-2 text-xs focus:ring-1 focus:ring-blue-500 outline-none bg-white font-semibold"
                  placeholder={tdm.drugId === 'gentamicin' ? 'e.g. 18' : 'e.g. 55'}
                />
              </div>
            )}

            {/* Calculate Button */}
            <button
              onClick={handleEvaluateTdm}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 rounded-lg flex items-center justify-center gap-1.5 shadow-sm transition-all"
            >
              <Activity className="w-4 h-4" />
              {lt.evaluate}
            </button>
          </div>

          {/* Right Panel - Evaluation Output */}
          <div className="lg:col-span-7 space-y-4">
            {tdmResult ? (
              <div className="space-y-4">
                {/* Visual Level indicator / Gauge card */}
                <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm space-y-4">
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{lt.target_range}</span>
                    <span className="text-xs font-extrabold text-blue-600">
                      {tdm.drugId === 'vancomycin' && (
                        currentLang === 'hu'
                          ? '10.0 - 20.0 mg/L (Cél: AUC/MIC; guideline tartomány: AUC24/MIC 400–600 mg·h/L)'
                          : currentLang === 'de'
                          ? '10.0 - 20.0 mg/L (Ziel: AUC/MHK; Leitlinie: AUC24/MHK 400–600 mg·h/L)'
                          : '10.0 - 20.0 mg/L (Target: AUC/MIC; guideline: AUC24/MIC 400–600 mg·h/L)'
                      )}
                      {tdm.drugId === 'gentamicin' && (
                        currentLang === 'hu'
                          ? 'Völgy < 1.0 mg/L (IDSA 2026 cél: AUC24 80–120 mg·h/L)'
                          : currentLang === 'de'
                          ? 'Tal < 1,0 mg/L (IDSA 2026 Ziel: AUC24 80–120 mg·h/L)'
                          : 'Trough < 1.0 mg/L (IDSA 2026 target: AUC24 80–120 mg·h/L)'
                      )}
                      {tdm.drugId === 'amikacin' && (
                        currentLang === 'hu'
                          ? 'Völgy < 5.0 mg/L (IDSA 2026 cél: AUC24 200–300 mg·h/L)'
                          : currentLang === 'de'
                          ? 'Tal < 5,0 mg/L (IDSA 2026 Ziel: AUC24 200–300 mg·h/L)'
                          : 'Trough < 5.0 mg/L (IDSA 2026 target: AUC24 200–300 mg·h/L)'
                      )}
                      {tdm.drugId === 'voriconazole' && '1.5 - 5.0 mg/L'}
                    </span>
                  </div>

                  {/* Level Slider Bar */}
                  <div className="relative pt-4 pb-2">
                    <div className="h-2 w-full bg-slate-100 rounded-full flex overflow-hidden">
                      {/* Subtherapeutic part */}
                      <div className="h-full bg-amber-200" style={{ width: '30%' }} />
                      {/* Therapeutic part */}
                      <div className="h-full bg-emerald-500" style={{ width: '40%' }} />
                      {/* Toxic part */}
                      <div className="h-full bg-red-400" style={{ width: '30%' }} />
                    </div>

                    {/* Numeric indicator marker */}
                    <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1.5">
                      <span>{currentLang === 'hu' ? 'Alacsony (Szubterápiás)' : currentLang === 'de' ? 'Niedrig (Subtherapeutisch)' : 'Low (Subtherapeutic)'}</span>
                      <span>{currentLang === 'hu' ? 'Terápiás ablak (Cél)' : currentLang === 'de' ? 'Therapeutischer Bereich' : 'Therapeutic (Target)'}</span>
                      <span>{currentLang === 'hu' ? 'Magas (Toxikus)' : currentLang === 'de' ? 'Hoch (Toxisch)' : 'High (Toxic)'}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 block uppercase">{lt.measured_value}</span>
                      <span className="text-xl font-extrabold text-slate-800">{tdm.measuredTrough} mg/L</span>
                    </div>

                    <div className={`px-2.5 py-1 rounded text-xs font-bold border flex items-center gap-1 ${
                      tdmResult.status === 'therapeutic'
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : tdmResult.status === 'sub'
                        ? 'bg-amber-50 text-amber-700 border-amber-200'
                        : 'bg-red-50 text-red-700 border-red-200'
                    }`}>
                      {tdmResult.status === 'therapeutic' && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                      {tdmResult.status === 'sub' && <AlertCircle className="w-4 h-4 text-amber-600" />}
                      {tdmResult.status === 'toxic' && <ShieldAlert className="w-4 h-4 text-red-600" />}
                      {tdmResult.status === 'therapeutic' ? lt.status_therapeutic : tdmResult.status === 'sub' ? lt.status_sub : lt.status_toxic}
                    </div>
                  </div>
                </div>

                {/* AUC Target Indicator Card for Vancomycin & Aminoglycosides (Gentamicin & Amikacin per IDSA 2026) */}
                {(tdm.drugId === 'vancomycin' || tdm.drugId === 'gentamicin' || tdm.drugId === 'amikacin') && tdmResult.estimatedAuc24 !== undefined && (
                  <div className="bg-indigo-50/70 border border-indigo-200/80 p-4 rounded-xl shadow-xs space-y-2.5">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-indigo-600" />
                        <span className="text-xs font-bold text-indigo-950 uppercase tracking-wider">
                          {tdm.drugId === 'vancomycin'
                            ? (currentLang === 'hu' ? 'Becsült 24 órás AUC expozíció (AUC24/MIC)' : currentLang === 'de' ? 'Geschätzte 24h-AUC-Exposition (AUC24/MHK)' : 'Estimated 24h AUC Exposure (AUC24/MIC)')
                            : (currentLang === 'hu' ? `Becsült 24 órás AUC expozíció (IDSA 2026 AUC24 - ${tdm.drugId === 'gentamicin' ? 'Gentamicin' : 'Amikacin'})` : currentLang === 'de' ? `Geschätzte 24h-AUC-Exposition (IDSA 2026 AUC24 - ${tdm.drugId === 'gentamicin' ? 'Gentamicin' : 'Amikacin'})` : `Estimated 24h AUC Exposure (IDSA 2026 AUC24 - ${tdm.drugId === 'gentamicin' ? 'Gentamicin' : 'Amikacin'})`)}
                        </span>
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-extrabold border ${
                        tdm.drugId === 'vancomycin'
                          ? (tdmResult.estimatedAuc24 >= 400 && tdmResult.estimatedAuc24 <= 600
                              ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                              : tdmResult.estimatedAuc24 < 400
                              ? 'bg-amber-100 text-amber-800 border-amber-300'
                              : 'bg-red-100 text-red-800 border-red-300')
                          : tdm.drugId === 'gentamicin'
                          ? (tdmResult.estimatedAuc24 >= 80 && tdmResult.estimatedAuc24 <= 120
                              ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                              : tdmResult.estimatedAuc24 < 80
                              ? 'bg-amber-100 text-amber-800 border-amber-300'
                              : 'bg-red-100 text-red-800 border-red-300')
                          : (tdmResult.estimatedAuc24 >= 200 && tdmResult.estimatedAuc24 <= 300
                              ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                              : tdmResult.estimatedAuc24 < 200
                              ? 'bg-amber-100 text-amber-800 border-amber-300'
                              : 'bg-red-100 text-red-800 border-red-300')
                      }`}>
                        ~{tdmResult.estimatedAuc24} mg·h/L
                        {tdm.drugId === 'gentamicin' && ' (IDSA 2026 cél: 80–120)'}
                        {tdm.drugId === 'amikacin' && ' (IDSA 2026 cél: 200–300)'}
                        {tdm.drugId === 'vancomycin' && ' (Cél: 400–600)'}
                      </span>
                    </div>
                    <p className="text-[11px] text-indigo-900/90 leading-relaxed">
                      {tdm.drugId === 'vancomycin' && (
                        currentLang === 'hu'
                          ? `A nemzetközi guideline-ok (ASHP/IDSA) alapján megfelelőnek tartott terápiás tartomány: AUC24/MIC 400–600 mg·h/L (feltételezve, hogy a MIC = 1 mg/L). ${
                              tdmResult.estimatedAuc24 >= 400 && tdmResult.estimatedAuc24 <= 600
                                ? 'A becsült expozíció az optimális terápiás ablakban van.'
                                : tdmResult.estimatedAuc24 < 400
                                ? 'A becsült expozíció a céltartomány alatt van (fokozott terápiás kudarc rizikó).'
                                : 'A becsült expozíció meghaladja a 600 mg·h/L-t (szignifikánsan emelkedett nefrotoxicitás és AKI rizikó)!'
                            }`
                          : currentLang === 'de'
                          ? `Leitliniengerechter Zielbereich (ASHP/IDSA): AUC24/MHK 400–600 mg·h/L (bei MHK = 1 mg/L). ${
                              tdmResult.estimatedAuc24 >= 400 && tdmResult.estimatedAuc24 <= 600
                                ? 'Die geschätzte Exposition liegt im optimalen Zielbereich.'
                                : tdmResult.estimatedAuc24 < 400
                                ? 'Die geschätzte Exposition liegt unter dem Zielbereich.'
                                : 'Die geschätzte Exposition übersteigt 600 mg·h/L (erhöhtes Nephrotoxizitätsrisiko)!'
                            }`
                          : `Guideline-recommended target range (ASHP/IDSA): AUC24/MIC 400–600 mg·h/L (assuming MIC = 1 mg/L). ${
                              tdmResult.estimatedAuc24 >= 400 && tdmResult.estimatedAuc24 <= 600
                                ? 'Estimated exposure is within the optimal guideline target range.'
                                : tdmResult.estimatedAuc24 < 400
                                ? 'Estimated exposure is below target (increased risk of clinical failure).'
                                : 'Estimated exposure exceeds 600 mg·h/L (substantially elevated AKI/nephrotoxicity risk)!'
                            }`
                      )}
                      {tdm.drugId === 'gentamicin' && (
                        currentLang === 'hu'
                          ? `Az IDSA 2026-os konszenzus irányelv alapján a terápiás cél: AUC24 80–120 mg·h/L (völgykoncentráció < 1.0 mg/L mellett). ${
                              tdmResult.estimatedAuc24 >= 80 && tdmResult.estimatedAuc24 <= 120
                                ? 'A becsült expozíció az optimális terápiás ablakban van az IDSA 2026 célértékeknek megfelelően (kiváló baktericid hatás, minimális ototoxicitás és AKI kockázat).'
                                : tdmResult.estimatedAuc24 < 80
                                ? 'A becsült expozíció az IDSA 2026 célérték alatt van (< 80 mg·h/L: aluldozírozás, elégtelen baktericid hatás és terápiás kudarc kockázata).'
                                : 'A becsült expozíció meghaladja az IDSA 2026 biztonsági küszöböt (> 120 mg·h/L: szignifikánsan emelkedett nefrotoxicitás [AKI] és irreverzibilis ototoxicitás kockázata)!'
                            }`
                          : currentLang === 'de'
                          ? `Gemäß IDSA 2026-Leitlinie liegt das Ziel bei AUC24 80–120 mg·h/L (bei Talspiegel < 1,0 mg/L). ${
                              tdmResult.estimatedAuc24 >= 80 && tdmResult.estimatedAuc24 <= 120
                                ? 'Die geschätzte Exposition liegt im optimalen IDSA 2026-Zielbereich.'
                                : tdmResult.estimatedAuc24 < 80
                                ? 'Die geschätzte Exposition liegt unter dem IDSA 2026-Zielwert (Risiko für Therapieversagen).'
                                : 'Die geschätzte Exposition übersteigt 120 mg·h/L (erhöhtes Risiko für AKI/Nephrotoxizität und Ototoxizität)!'
                            }`
                          : `According to the IDSA 2026 guidelines, the target is AUC24 80–120 mg·h/L (with trough < 1.0 mg/L). ${
                              tdmResult.estimatedAuc24 >= 80 && tdmResult.estimatedAuc24 <= 120
                                ? 'Estimated exposure is within the optimal IDSA 2026 target range (maximal efficacy, minimal toxicity).'
                                : tdmResult.estimatedAuc24 < 80
                                ? 'Estimated exposure is below the IDSA 2026 target (risk of underdosing and clinical failure).'
                                : 'Estimated exposure exceeds the IDSA 2026 safety threshold of 120 mg·h/L (significantly increased risk of AKI and ototoxicity)!'
                            }`
                      )}
                      {tdm.drugId === 'amikacin' && (
                        currentLang === 'hu'
                          ? `Az IDSA 2026-os konszenzus irányelv alapján a terápiás cél: AUC24 200–300 mg·h/L (völgykoncentráció < 5.0 mg/L mellett). ${
                              tdmResult.estimatedAuc24 >= 200 && tdmResult.estimatedAuc24 <= 300
                                ? 'A becsült expozíció az optimális terápiás ablakban van az IDSA 2026 célértékeknek megfelelően.'
                                : tdmResult.estimatedAuc24 < 200
                                ? 'A becsült expozíció az IDSA 2026 célérték alatt van (< 200 mg·h/L: szubterápiás szint, mikrobiológiai kudarc rizikója).'
                                : 'A becsült expozíció meghaladja az IDSA 2026 biztonsági küszöböt (> 300 mg·h/L: szignifikánsan emelkedett vestibularis/cochlearis és nefrotoxicitás kockázata)!'
                            }`
                          : currentLang === 'de'
                          ? `Gemäß IDSA 2026-Leitlinie liegt das Ziel bei AUC24 200–300 mg·h/L (bei Talspiegel < 5,0 mg/L). ${
                              tdmResult.estimatedAuc24 >= 200 && tdmResult.estimatedAuc24 <= 300
                                ? 'Die geschätzte Exposition liegt im optimalen IDSA 2026-Zielbereich.'
                                : tdmResult.estimatedAuc24 < 200
                                ? 'Die geschätzte Exposition liegt unter dem IDSA 2026-Zielwert (subtherapeutisch, Risiko für Therapieversagen).'
                                : 'Die geschätzte Exposition übersteigt 300 mg·h/L (erhöhtes Risiko für Ototoxizität und Nephrotoxizität)!'
                            }`
                          : `According to the IDSA 2026 guidelines, the target is AUC24 200–300 mg·h/L (with trough < 5.0 mg/L). ${
                              tdmResult.estimatedAuc24 >= 200 && tdmResult.estimatedAuc24 <= 300
                                ? 'Estimated exposure is within the optimal IDSA 2026 target range.'
                                : tdmResult.estimatedAuc24 < 200
                                ? 'Estimated exposure is below the IDSA 2026 target (subtherapeutic level, risk of clinical failure).'
                                : 'Estimated exposure exceeds the IDSA 2026 safety limit of 300 mg·h/L (significantly increased risk of ototoxicity and nephrotoxicity)!'
                            }`
                      )}
                    </p>
                  </div>
                )}

                {/* Detailed comments / advice card */}
                <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">{lt.evaluation_result}</span>
                    <p className="text-xs text-slate-600 leading-relaxed">{tdmResult.interpretation}</p>
                  </div>

                  <div className="border-t border-slate-100 pt-3.5 space-y-2">
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                      {lt.recommendation}
                    </h4>
                    <p className="text-xs text-blue-800 bg-blue-50 border border-blue-100/50 p-3.5 rounded-lg font-semibold leading-relaxed">
                      {tdmResult.action}
                    </p>
                  </div>

                  {/* Action Plan Details */}
                  {(tdmResult.skipDoses !== undefined || tdmResult.newDose || tdmResult.newInterval || tdmResult.boosterDose) && (
                    <div className="border-t border-slate-100 pt-3.5 space-y-3">
                      <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        {lt.action_plan_title}
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {tdmResult.skipDoses !== undefined && (
                          <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-lg">
                            <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">{lt.skip_doses_label}</span>
                            <span className="text-xs font-extrabold text-slate-800">
                              {tdmResult.skipDoses === 0
                                ? (currentLang === 'hu' ? 'Nincs kihagyás' : currentLang === 'de' ? 'Kein Auslassen' : 'None')
                                : tdmResult.skipDoses}
                            </span>
                          </div>
                        )}
                        {tdmResult.newInterval && (
                          <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-lg">
                            <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">{lt.new_interval_label}</span>
                            <span className="text-xs font-extrabold text-slate-800">{tdmResult.newInterval}</span>
                          </div>
                        )}
                        {tdmResult.boosterDose && (
                          <div className="p-2.5 bg-blue-50 border border-blue-100/40 rounded-lg col-span-2">
                            <span className="text-[10px] font-bold text-blue-500 block uppercase tracking-wider">{lt.booster_dose_label}</span>
                            <span className="text-xs font-extrabold text-blue-900">{tdmResult.boosterDose}</span>
                          </div>
                        )}
                        {tdmResult.newDose && (
                          <div className="p-2.5 bg-emerald-50 border border-emerald-100/40 rounded-lg col-span-2">
                            <span className="text-[10px] font-bold text-emerald-600 block uppercase tracking-wider">{lt.new_dose_label}</span>
                            <span className="text-xs font-extrabold text-emerald-900">{tdmResult.newDose}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white border border-slate-100 rounded-xl p-8 text-center flex flex-col items-center justify-center space-y-3 min-h-[300px]">
                <Activity className="w-12 h-12 text-slate-300" />
                <p className="text-slate-500 font-medium text-xs">
                  {currentLang === 'hu'
                    ? "Add meg a gyógyszerszint adatokat a bal oldalon, majd kattints a 'Gyógyszerszint Kiértékelése' gombra a TDM véleményezéshez."
                    : currentLang === 'de'
                    ? "Geben Sie die Wirkstoffspiegel links ein und klicken Sie auf 'Spiegel Auswerten', um die TDM-Auswertung zu starten."
                    : "Enter the measured drug levels on the left and click 'Evaluate TDM Levels' to view detailed clinical advice."}
                </p>
              </div>
            )}

            {/* General TDM guidelines / tips */}
            <div className="bg-slate-50 border border-slate-200/50 rounded-xl p-4 space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">{lt.clinical_tips}</span>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                {tdm.drugId === 'vancomycin' && lt.tips_vancomycin}
                {tdm.drugId === 'gentamicin' && lt.tips_gentamicin}
                {tdm.drugId === 'amikacin' && lt.tips_amikacin}
                {tdm.drugId === 'voriconazole' && lt.tips_voriconazole}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
