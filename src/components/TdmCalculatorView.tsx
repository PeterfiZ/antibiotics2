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
      tab_tdm: "TDM Értékelés (Völgy/Csúcs)",
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
      tips_vancomycin: "Vancomycin esetében a völgykoncentrációt közvetlenül a 4. vagy 5. dózis előtt (steady state) kell levenni. Súlyos fertőzéseknél (szepszis, endocarditis, osteomyelitis) a céltartomány 15-20 mg/L, enyhébb esetekben 10-15 mg/L.",
      tips_gentamicin: "Gentamicin egyszeri napi adagolásánál (ODD) a völgykoncentráció < 1 mg/L (ideálisan < 0.5 mg/L), a csúcsszint 15-20 mg/L legyen. Hagyományos napi többszöri adagolásnál a völgy < 2 mg/L, a csúcs 5-10 mg/L.",
      tips_amikacin: "Amikacin egyszeri napi adagolásánál a völgykoncentráció < 5 mg/L (ideálisan < 2 mg/L), míg a csúcsszintnek 50-60 mg/L-nek kell lennie. Hagyományos adagolásnál a völgy < 8 mg/L, a csúcs 20-30 mg/L.",
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
      tab_tdm: "TDM Evaluation (Trough/Peak)",
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
      tips_vancomycin: "For Vancomycin, draw trough levels immediately before the 4th or 5th dose (steady state). For severe infections (sepsis, endocarditis, osteomyelitis), target 15-20 mg/L; for milder infections, 10-15 mg/L.",
      tips_gentamicin: "For Gentamicin once-daily dosing (ODD), target trough is < 1 mg/L (ideally < 0.5 mg/L) and peak is 15-20 mg/L. For conventional multiple daily dosing, target trough is < 2 mg/L and peak is 5-10 mg/L.",
      tips_amikacin: "For Amikacin once-daily dosing, target trough is < 5 mg/L (ideally < 2 mg/L) and peak is 50-60 mg/L. For conventional dosing, target trough is < 8 mg/L and peak is 20-30 mg/L.",
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
      tab_tdm: "TDM-Auswertung (Tal/Spitze)",
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
      tips_vancomycin: "Bei Vancomycin sollte der Talspiegel unmittelbar vor der 4. oder 5. Dosis (Steady State) bestimmt werden. Bei schweren Infektionen (Sepsis, Endokarditis, Osteomyelitis) liegt der Zielbereich bei 15-20 mg/L, bei milderen Verläufen bei 10-15 mg/L.",
      tips_gentamicin: "Bei einmal täglicher Gabe (ODD) von Gentamicin sollte der Talspiegel < 1 mg/L (ideal < 0,5 mg/L) und der Spitzenspiegel 15-20 mg/L betragen. Bei konventioneller Gabe: Talspiegel < 2 mg/L, Spitzenspiegel 5-10 mg/L.",
      tips_amikacin: "Bei einmal täglicher Gabe von Amikacin sollte der Talspiegel < 5 mg/L (ideal < 2 mg/L) und der Spitzenspiegel 50-60 mg/L betragen. Bei konventioneller Gabe: Talspiegel < 8 mg/L, Spitzenspiegel 20-30 mg/L.",
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
              ? "Hemodialízis esetén a Vancomycin csak kismértékben eliminálódik a hagyományos membránokon keresztül. A javasolt adagolás: telítő dózis után 500-1000 mg minden HD kezelés után (post-dialízis). Szigorú pre-dialízis TDM javasolt, a céltartomány: 15-20 mg/L."
              : currentLang === 'de'
              ? "Vancomycin wird durch Standard-Dialysemembranen nur minimal eliminiert. Empfohlenes Schema: Nach Ladedosis 500-1000 mg nach jeder HD-Sitzung (Post-Dialyse) verabreichen. Strenges Prä-Dialyse-TDM empfohlen, Zielspiegel: 15-20 mg/L."
              : "Vancomycin is only minimally cleared by standard dialysis membranes. Suggested regimen: after loading, administer 500-1000 mg after each HD session (post-dialysis). Strict pre-dialysis TDM is recommended, target trough: 15-20 mg/L."
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
              ? "Folyamatos vesehelyettesítő kezelés (CRRT) során a Vancomycin clearance-e jelentős. Kezdő telítő dózis (15-20 mg/kg) után fenntartó adagként napi 1000 mg (vagy 500-750 mg q12h) javasolt. Szigorú napi TDM javasolt a steady-state eléréséig, cél völgykoncentráció: 15-20 mg/L."
              : currentLang === 'de'
              ? "Die Vancomycin-Clearance ist während einer kontinuierlichen Nierenersatztherapie (CRRT) signifikant. Nach einer Ladedosis von 15-20 mg/kg wird eine Erhaltungsdosis von 1000 mg täglich (oder 500-750 mg q12h) empfohlen. Tägliches TDM ist bis zum Erreichen des Steady-State unerlässlich, Zielspiegel: 15-20 mg/L."
              : "Vancomycin clearance is significant during Continuous Renal Replacement Therapy (CRRT). After a loading dose of 15-20 mg/kg, a maintenance dose of 1000 mg daily (or 500-750 mg q12h) is suggested. Daily TDM is essential until steady state is reached, target trough: 15-20 mg/L."
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
            ? "Normál elimináció. Cél völgykoncentráció: 15-20 mg/L súlyos, vagy 10-15 mg/L enyhe fertőzésekben."
            : currentLang === 'de'
            ? "Normale Elimination. Ziel-Talspiegel: 15-20 mg/L bei schweren oder 10-15 mg/L bei milden Infektionen."
            : "Normal elimination. Target trough: 15-20 mg/L for severe, or 10-15 mg/L for mild infections.";
        } else if (crcl >= 60) {
          maintDose = "1000 mg";
          interval = "12h";
          comment = currentLang === 'hu'
            ? "Enyhén csökkent vesefunkció. Fokozott figyelem a 3-4. napon végzett TDM esetében."
            : currentLang === 'de'
            ? "Leicht eingeschränkte Nierenfunktion. Erhöhte Aufmerksamkeit für TDM am 3.-4. Tag."
            : "Mildly impaired renal function. Increased attention for TDM on day 3-4.";
        } else if (crcl >= 30) {
          maintDose = "1000 mg";
          interval = "24h";
          comment = currentLang === 'hu'
            ? "Középsúlyos veseelégtelenség. Jelentősen megnyúlt felezési idő. Szoros TDM javasolt."
            : currentLang === 'de'
            ? "Mittelschwere Niereninsuffizienz. Deutlich verlängerte Halbwertszeit. Engmaschiges TDM empfohlen."
            : "Moderate renal impairment. Significantly prolonged half-life. Close TDM recommended.";
        } else if (crcl >= 15) {
          maintDose = "500 - 750 mg";
          interval = "24h - 48h";
          comment = currentLang === 'hu'
            ? "Súlyos veseelégtelenség. Megfontolandó az egyszeri telítő dózis után kizárólag TDM-vezérelt (pulse-dosing) adagolás: újabb adag csak ha a szint < 15 mg/L."
            : currentLang === 'de'
            ? "Schwere Niereninsuffizienz. Nach Einmaldosis sollte die weitere Gabe ausschließlich TDM-gesteuert (Pulse-Dosing) erfolgen: Neue Dosis erst, wenn Spiegel < 15 mg/L."
            : "Severe renal impairment. Consider pulse-dosing based strictly on TDM after loading: next dose only when trough level drops below 15 mg/L.";
        } else {
          maintDose = "500 mg";
          interval = "TDM vezérelt (pulse-dosing)";
          comment = currentLang === 'hu'
            ? "Végstádiumú veseelégtelenség vagy dialízis. Adagolás kizárólag a mért völgykoncentrációk alapján."
            : currentLang === 'de'
            ? "Terminale Niereninsuffizienz oder Dialyse. Dosierung ausschließlich basierend auf gemessenen Talkonzentrationen."
            : "End-stage renal disease or dialysis. Dosing strictly guided by measured trough levels.";
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

    const rrt = tdm.rrt;

    switch (tdm.drugId) {
      case 'vancomycin':
        if (rrt === 'none') {
          if (val < 10.0) {
            status = 'sub';
            interp = currentLang === 'hu'
              ? `A mért völgykoncentráció (${val} mg/L) elmarad a terápiás céltól (10-20 mg/L). Fokozott a kezelési kudarc és a rezisztencia kialakulásának veszélye.`
              : currentLang === 'de'
              ? `Der gemessene Talspiegel (${val} mg/L) liegt unter dem therapeutischen Zielbereich (10-20 mg/L). Risiko für Therapieversagen und Resistenzentwicklung.`
              : `The measured trough level (${val} mg/L) is below the therapeutic target (10-20 mg/L). Risk of treatment failure and resistance development.`;
            
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
              ? `Kiváló terápiás szint (${val} mg/L). Súlyos szepszis/endocarditis/pneumonia esetén a 15-20 mg/L optimális, enyhébb szöveti fertőzésekben a 10-15 mg/L is elegendő.`
              : currentLang === 'de'
              ? `Hervorragender therapeutischer Spiegel (${val} mg/L). Bei schweren Infektionen sind 15-20 mg/L optimal, bei milderen Gewebeinfektionen reichen 10-15 mg/L aus.`
              : `Excellent therapeutic level (${val} mg/L). For severe infections, 15-20 mg/L is optimal; for milder infections, 10-15 mg/L is sufficient.`;

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
              ? `A mért szint (${val} mg/L) a toxikus tartományban van (> 20 mg/L). Kifejezett vesekárosító (nephrotoxikus) hatás várható, különösen más nefrotoxikus szerekkel (pl. aminoglikozidok, loop-diuretikumok) kombinálva.`
              : currentLang === 'de'
              ? `Der gemessene Spiegel (${val} mg/L) liegt im toxischen Bereich (> 20 mg/L). Ein ausgeprägtes nephrotaxisches Risiko besteht, insbesondere bei Kombination mit anderen nephrotoxischen Substanzen.`
              : `The measured level (${val} mg/L) is in the toxic range (> 20 mg/L). Significant risk of nephrotoxicity, especially when combined with other nephrotoxic agents.`;

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
              ? `Hemodialízis mellett a völgykoncentráció (${val} mg/L) nem elegendő. Céltartomány dialízis előtt: 15-20 mg/L.`
              : currentLang === 'de'
              ? `Unter Hämodialyse ist die Talkonzentration (${val} mg/L) unzureichend. Zielbereich vor Dialyse: 15-20 mg/L.`
              : `Under hemodialysis, the trough level (${val} mg/L) is subtherapeutic. Target range pre-dialysis: 15-20 mg/L.`;

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
              ? `Megfelelő pre-dialízis terápiás szint (${val} mg/L) hemodializált betegnél.`
              : currentLang === 'de'
              ? `Optimaler Prä-Dialyse-Spiegel (${val} mg/L) bei Hämodialyse-Patienten.`
              : `Appropriate pre-dialysis therapeutic level (${val} mg/L) in HD patient.`;

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
              ? `Magas, toxikus pre-dialízis szint (${val} mg/L) HD mellett. Akkumulációs veszély áll fenn.`
              : currentLang === 'de'
              ? `Toxischer Prä-Dialyse-Spiegel (${val} mg/L) unter HD. Kumulationsgefahr.`
              : `Toxic pre-dialysis level (${val} mg/L) in HD patient. High risk of drug accumulation.`;

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
              ? `CRRT mellett a ${val} mg/L szint alacsony. CRRT során a clearance jelentős lehet. Cél: 15-20 mg/L.`
              : currentLang === 'de'
              ? `Unter CRRT ist der Spiegel von ${val} mg/L zu niedrig. CRRT-Clearance kann hoch sein. Ziel: 15-20 mg/L.`
              : `In CRRT, a level of ${val} mg/L is low. CRRT clearance can be substantial. Target: 15-20 mg/L.`;

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
              ? `Terápiás és stabil szint CRRT mellett (${val} mg/L).`
              : currentLang === 'de'
              ? `Therapeutischer und stabiler Spiegel unter CRRT (${val} mg/L).`
              : `Therapeutic and stable level in CRRT patient (${val} mg/L).`;

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
              ? `Magas, toxikus szint CRRT mellett (${val} mg/L). Akkumuláció és vesekárosító hatás veszélye.`
              : currentLang === 'de'
              ? `Hoher, toxischer Spiegel unter CRRT (${val} mg/L). Kumulations- und Toxizitätsgefahr.`
              : `High, toxic level in CRRT patient (${val} mg/L). Risk of toxicity and accumulation.`;

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

      case 'gentamicin':
        {
          const isOdd = parseInt(tdm.currentInterval) >= 24;
          const targetTrough = isOdd ? 1.0 : 2.0;

          if (rrt === 'none') {
            if (val > targetTrough) {
              status = 'toxic';
              interp = currentLang === 'hu'
                ? `Magas völgykoncentráció (${val} mg/L, cél: < ${targetTrough} mg/L). Ez akkumulációra utal, ami súlyos vese- és fülkárosodást (nephro/ototoxicitás) okozhat.`
                : currentLang === 'de'
                ? `Hoher Talspiegel (${val} mg/L, Zielwert: < ${targetTrough} mg/L). Dies deutet auf Akkumulation hin, was schwere Nieren- und Gehörschäden verursachen kann.`
                : `High trough level (${val} mg/L, target: < ${targetTrough} mg/L). Indicates accumulation, which can cause severe nephro- and ototoxicity.`;

              skipDoses = 1;
              const currentDoseNum = parseFloat(tdm.currentDose) || 240;
              const suggestedDose = Math.round(currentDoseNum * 0.75 / 20) * 20;
              newDose = `${suggestedDose} mg`;
              newInterval = isOdd ? "q36h - q48h" : "q24h";
              act = currentLang === 'hu'
                ? `Hagyjon ki 1 dózist! Ezután folytassa csökkentett dózissal (pl. ${tdm.currentDose} mg helyett ${newDose}-mal) vagy hosszabb időközökkel (pl. q24h helyett q36h/q48h).`
                : currentLang === 'de'
                ? `1 Dosis auslassen! Danach mit reduzierter Dosis fortfahren (z. B. ${newDose} statt ${tdm.currentDose} mg) oder das Intervall verlängern.`
                : `Skip 1 dose! Resume at a reduced dose (e.g., ${newDose} instead of ${tdm.currentDose} mg) or extend the interval (e.g., q36h/q48h).`;
            } else if ((isOdd && val < 0.3) || (!isOdd && val < 1.0) || (tdm.measuredPeak && parseFloat(tdm.measuredPeak) < (isOdd ? 15.0 : 5.0))) {
              status = 'sub';
              interp = currentLang === 'hu'
                ? `Szubterápiás Gentamicin szint (völgy: ${val} mg/L). Ez aluladagolásra utal, ami csökkenti a baktériumölő hatást és terápiás kudarchoz vezethet.`
                : currentLang === 'de'
                ? `Subtherapeutischer Gentamicin-Spiegel (Tal: ${val} mg/L). Dies deutet auf eine Unterdosierung hin, was die bakterizide Wirkung mindert.`
                : `Subtherapeutic Gentamicin level (trough: ${val} mg/L). This indicates underdosing, which reduces bactericidal efficacy and may lead to treatment failure.`;

              skipDoses = 0;
              const currentDoseNum = parseFloat(tdm.currentDose) || 240;
              const suggestedDose = Math.round(currentDoseNum * 1.25 / 20) * 20;
              newDose = `${suggestedDose} mg`;
              newInterval = `q${tdm.currentInterval}h`;
              boosterDose = isOdd ? `${Math.round(currentDoseNum * 0.5 / 20) * 20} mg IV egyszeri booster` : undefined;
              act = currentLang === 'hu'
                ? `Dózis kihagyása NEM javasolt. Emelje a fenntartó adagot kb. 25%-kal (${tdm.currentDose} mg-ról ${newDose}-ra) az optimális csúcsszint eléréséhez. Súlyos fertőzésben egyszeri booster adása megfontolandó.`
                : currentLang === 'de'
                ? `Dosisauslassung NICHT empfohlen. Erhöhen Sie die Erhaltungsdosis um ca. 25% (von ${tdm.currentDose} mg auf ${newDose}). Ein einmaliger Booster kann erwogen werden.`
                : `Dose skipping NOT recommended. Increase maintenance dose by ~25% (from ${tdm.currentDose} mg to ${newDose}). Consider an extra booster dose in severe infections.`;
            } else {
              status = 'therapeutic';
              interp = currentLang === 'hu'
                ? `Megfelelő, biztonságos völgykoncentráció (${val} mg/L). A gyógyszer akkumulációja nem áll fenn.`
                : currentLang === 'de'
                ? `Angemessener, sicherer Talspiegel (${val} mg/L). Keine Wirkstoffakkumulation nachweisbar.`
                : `Safe, optimal trough level (${val} mg/L). No drug accumulation detected.`;

              skipDoses = 0;
              newDose = `${tdm.currentDose} mg`;
              newInterval = `q${tdm.currentInterval}h`;
              act = currentLang === 'hu'
                ? "Az adagolás folytatható változatlanul. Stabil vesefunkció mellett heti 1x kontroll TDM elegendő."
                : currentLang === 'de'
                ? "Die Therapie kann unverändert fortgesetzt werden. Bei stabiler Nierenfunktion reicht eine wöchentliche Kontrolle."
                : "Continue current regimen unchanged. Weekly TDM is sufficient if renal function remains stable.";
            }
          } else if (rrt === 'hd') {
            if (val > 1.5) {
              status = 'toxic';
              interp = currentLang === 'hu'
                ? `Magas dialízis előtti Gentamicin szint (${val} mg/L, cél: < 1.5 mg/L). Akkumulációs és nefro/ototoxicitási veszély áll fenn.`
                : currentLang === 'de'
                ? `Hoher Prä-Dialyse-Spiegel (${val} mg/L, Ziel: < 1,5 mg/L) unter HD. Kumulationsgefahr.`
                : `High pre-dialysis Gentamicin level (${val} mg/L, target: < 1.5 mg/L) in HD patient. Accumulation and toxicity risk.`;

              skipDoses = "Következő HD utáni dózist hagyja ki";
              newDose = "1.0 - 1.2 mg/kg (pl. 70-80 mg)";
              newInterval = "Minden dialízis után (HD végén)";
              act = currentLang === 'hu'
                ? "A magas szint miatt hagyja ki a következő HD utáni dózist. Indítsa újra csökkentett adaggal, ha a szint < 1 mg/L alá csökken."
                : currentLang === 'de'
                ? "Nächste Dosis nach HD auslassen. Mit reduzierter Dosis fortfahren, wenn Spiegel < 1 mg/L."
                : "Skip the next post-dialysis dose. Resume at a reduced dose only once the pre-dialysis level drops below 1 mg/L.";
            } else if (val < 1.0) {
              status = 'sub';
              interp = currentLang === 'hu'
                ? `Alacsony dialízis előtti Gentamicin szint (${val} mg/L, cél: 1.0 - 1.5 mg/L). Nem biztosít kellő terápiás hatást.`
                : currentLang === 'de'
                ? `Niedriger Prä-Dialyse-Spiegel (${val} mg/L, Ziel: 1,0 - 1,5 mg/L). Unzureichende therapeutische Wirkung.`
                : `Low pre-dialysis Gentamicin level (${val} mg/L, target: 1.0 - 1.5 mg/L). May fail to achieve clinical cure.`;

              skipDoses = 0;
              boosterDose = "1.0 - 1.5 mg/kg IV booster a következő HD végén";
              newDose = "2.0 - 2.5 mg/kg (pl. 140-160 mg)";
              newInterval = "Minden dialízis után (HD végén)";
              act = currentLang === 'hu'
                ? "Dózis kihagyása nem javasolt. Adjon be egy booster dózist a következő HD végén, majd emelje a fenntartó adagokat."
                : currentLang === 'de'
                ? "Kein Auslassen empfohlen. Verabreichen Sie eine Booster-Dosis nach der nächsten HD und erhöhen Sie die Folgedosen."
                : "Dose skipping not recommended. Administer a booster dose at the end of the next HD session, then increase subsequent maintenance doses.";
            } else {
              status = 'therapeutic';
              interp = currentLang === 'hu'
                ? `Megfelelő dialízis előtti terápiás szint (${val} mg/L) HD mellett.`
                : currentLang === 'de'
                ? `Angemessener Prä-Dialyse-Spiegel (${val} mg/L) unter HD.`
                : `Appropriate pre-dialysis level (${val} mg/L) in HD patient.`;

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
            if (val > 1.5) {
              status = 'toxic';
              interp = currentLang === 'hu'
                ? `Emelkedett völgykoncentráció CRRT mellett (${val} mg/L). Toxicitás veszélye.`
                : currentLang === 'de'
                ? `Erhöhter Talspiegel unter CRRT (${val} mg/L). Toxizitätsrisiko.`
                : `Elevated trough level in CRRT patient (${val} mg/L). Risk of ototoxicity and nephrotoxicity.`;

              skipDoses = 1;
              newDose = "1.0 - 1.5 mg/kg (pl. 70-100 mg)";
              newInterval = "q48h";
              act = currentLang === 'hu'
                ? "Hagyjon ki egy dózist (24-48 óra szünet). Csökkentse a fenntartó adagot és hosszabbítsa meg az időközt 48 órára."
                : currentLang === 'de'
                ? "Eine Dosis auslassen (24-48 Stunden Pause). Erhaltungsdosis reduzieren und Intervall auf 48 Stunden verlängern."
                : "Skip 1 dose (withhold 24-48h). Reduce maintenance dose and extend interval to q48h.";
            } else if (val < 1.0) {
              status = 'sub';
              interp = currentLang === 'hu'
                ? `Alacsony Gentamicin szint CRRT mellett (${val} mg/L, cél: 1.0 - 1.5 mg/L). A CRRT jelentősen eliminálja az aminoglikozidokat.`
                : currentLang === 'de'
                ? `Niedriger Spiegel unter CRRT (${val} mg/L, Ziel: 1,0 - 1,5 mg/L). Aminoglykoside werden durch CRRT stark eliminiert.`
                : `Low trough level in CRRT patient (${val} mg/L, target: 1.0 - 1.5 mg/L). CRRT clears aminoglycosides substantially.`;

              skipDoses = 0;
              boosterDose = "1.5 - 2.0 mg/kg IV booster egyszer";
              newDose = "2.5 - 3.0 mg/kg (pl. 180-200 mg)";
              newInterval = "q24h";
              act = currentLang === 'hu'
                ? "Dózis kihagyása nem javasolt. Adjon egy booster dózist azonnal, majd emelje a fenntartó dózist és adja q24h időközönként."
                : currentLang === 'de'
                ? "Kein Auslassen. Geben Sie sofort einen Booster und erhöhen Sie die Erhaltungsdosis auf q24h."
                : "Do not skip doses. Administer an immediate booster dose, then increase the maintenance dose and adjust the interval to q24h.";
            } else {
              status = 'therapeutic';
              interp = currentLang === 'hu'
                ? `Megfelelő szint CRRT mellett (${val} mg/L).`
                : currentLang === 'de'
                ? `Sicherer Spiegel unter CRRT (${val} mg/L).`
                : `Safe trough level in CRRT patient (${val} mg/L).`;

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

          if (rrt === 'none') {
            if (val > targetTrough) {
              status = 'toxic';
              interp = currentLang === 'hu'
                ? `Emelkedett völgykoncentráció (${val} mg/L, cél: < ${targetTrough} mg/L). Súlyos fül- és vesekárosodási kockázat.`
                : currentLang === 'de'
                ? `Erhöhter Talspiegel (${val} mg/L, Zielwert: < ${targetTrough} mg/L). Erhöhtes Risiko für Oto- und Nephrotoxizität.`
                : `Elevated trough level (${val} mg/L, target: < ${targetTrough} mg/L). High risk of ototoxicity and nephrotoxicity.`;

              skipDoses = 1;
              const currentDoseNum = parseFloat(tdm.currentDose) || 1000;
              const suggestedDose = Math.round(currentDoseNum * 0.75 / 100) * 100;
              newDose = `${suggestedDose} mg`;
              newInterval = isOdd ? "q36h - q48h" : "q24h";
              act = currentLang === 'hu'
                ? `Hagyjon ki 1 dózist! Ezután folytassa csökkentett dózissal (pl. ${tdm.currentDose} mg helyett ${newDose}-mal) vagy nyújtsa meg az időközt.`
                : currentLang === 'de'
                ? `Eine Dosis auslassen! Danach mit reduzierter Dosis fortfahren (z. B. ${newDose} statt ${tdm.currentDose} mg) oder das Intervall verlängern.`
                : `Skip 1 dose! Resume at a reduced dose (e.g., ${newDose} instead of ${tdm.currentDose} mg) or extend the interval.`;
            } else if ((isOdd && val < 1.0) || (!isOdd && val < 4.0) || (tdm.measuredPeak && parseFloat(tdm.measuredPeak) < (isOdd ? 45.0 : 20.0))) {
              status = 'sub';
              interp = currentLang === 'hu'
                ? `Szubterápiás Amikacin szint (völgy: ${val} mg/L). Az alacsony koncentráció veszélyezteti a klinikai sikert.`
                : currentLang === 'de'
                ? `Subtherapeutischer Amikacin-Spiegel (Tal: ${val} mg/L). Unzureichende Konzentration gefährdet den Therapieerfolg.`
                : `Subtherapeutic Amikacin level (trough: ${val} mg/L). Low levels may lead to clinical failure.`;

              skipDoses = 0;
              const currentDoseNum = parseFloat(tdm.currentDose) || 1000;
              const suggestedDose = Math.round(currentDoseNum * 1.25 / 100) * 100;
              newDose = `${suggestedDose} mg`;
              newInterval = `q${tdm.currentInterval}h`;
              boosterDose = isOdd ? `${Math.round(currentDoseNum * 0.5 / 100) * 100} mg IV egyszeri booster` : undefined;
              act = currentLang === 'hu'
                ? `Dózis kihagyása NEM javasolt. Emelje a fenntartó adagot kb. 25%-kal (${tdm.currentDose} mg-ról ${newDose}-ra) az optimális csúcskoncentráció eléréséhez.`
                : currentLang === 'de'
                ? `Kein Auslassen empfohlen. Erhöhen Sie die Erhaltungsdosis um ca. 25% (von ${tdm.currentDose} mg auf ${newDose}).`
                : `Dose skipping NOT recommended. Increase maintenance dose by ~25% (from ${tdm.currentDose} mg to ${newDose}) to reach optimal peak levels.`;
            } else {
              status = 'therapeutic';
              interp = currentLang === 'hu'
                ? `Biztonságos völgykoncentráció (${val} mg/L). Kiváló biztonsági profil.`
                : currentLang === 'de'
                ? `Sicherer Talspiegel (${val} mg/L). Hervorragendes Sicherheitsprofil.`
                : `Safe trough level (${val} mg/L). Excellent safety profile.`;

              skipDoses = 0;
              newDose = `${tdm.currentDose} mg`;
              newInterval = `q${tdm.currentInterval}h`;
              act = currentLang === 'hu'
                ? "Folytassa az adagolást változatlan formában. Hidratálja jól a beteget."
                : currentLang === 'de'
                ? "Therapie unverändert fortsetzen. Auf gute Hydratation des Patienten achten."
                : "Continue current regimen. Ensure proper patient hydration.";
            }
          } else if (rrt === 'hd') {
            if (val > 8.0) {
              status = 'toxic';
              interp = currentLang === 'hu'
                ? `Magas dialízis előtti Amikacin szint (${val} mg/L, cél: < 8.0 mg/L). Toxikus felhalmozódás.`
                : currentLang === 'de'
                ? `Hoher Prä-Dialyse-Spiegel (${val} mg/L) unter HD. Kumulationsgefahr.`
                : `High pre-dialysis Amikacin level (${val} mg/L) in HD patient. Accumulation danger.`;

              skipDoses = "Következő HD utáni dózist hagyja ki";
              newDose = "3.0 - 5.0 mg/kg (pl. 200-300 mg)";
              newInterval = "Minden dialízis után (HD végén)";
              act = currentLang === 'hu'
                ? "A magas szint miatt függessze fel az adagolást a következő dialízis végén. Indítsa újra csökkentett post-dialízis dózissal, ha a szint < 5 mg/L alá süllyed."
                : currentLang === 'de'
                ? "Aufgrund des hohen Spiegels die Gabe nach der nächsten HD auslassen. Erst wieder geben, wenn Spiegel < 5 mg/L."
                : "Withhold dosing after the next HD session due to toxic levels. Resume at a reduced post-dialysis dose once the pre-dialysis level is < 5 mg/L.";
            } else if (val < 5.0) {
              status = 'sub';
              interp = currentLang === 'hu'
                ? `Alacsony dialízis előtti Amikacin szint (${val} mg/L, cél: 5.0 - 8.0 mg/L). Nem biztosít elégséges terápiás hatást.`
                : currentLang === 'de'
                ? `Niedriger Prä-Dialyse-Spiegel (${val} mg/L, Ziel: 5,0 - 8,0 mg/L). Unzureichende therapeutische Wirkung.`
                : `Low pre-dialysis Amikacin level (${val} mg/L, target: 5.0 - 8.0 mg/L). Insufficient therapeutic effect.`;

              skipDoses = 0;
              boosterDose = "5.0 - 7.5 mg/kg IV booster a következő HD végén";
              newDose = "7.5 - 10.0 mg/kg (pl. 500-600 mg)";
              newInterval = "Minden dialízis után (HD végén)";
              act = currentLang === 'hu'
                ? "Dózis kihagyása nem javasolt. Adjon booster dózist a következő HD végén, majd emelje a fenntartó adagokat."
                : currentLang === 'de'
                ? "Kein Auslassen empfohlen. Booster-Dosis nach der nächsten HD verabreichen und Folgedosen anheben."
                : "Dose skipping not recommended. Administer a booster dose after the next HD, then increase subsequent maintenance doses.";
            } else {
              status = 'therapeutic';
              interp = currentLang === 'hu'
                ? `Megfelelő dialízis előtti szint (${val} mg/L) HD mellett.`
                : currentLang === 'de'
                ? `Angemessener Prä-Dialyse-Spiegel (${val} mg/L) unter HD.`
                : `Appropriate pre-dialysis level (${val} mg/L) in HD patient.`;

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
            if (val > 8.0) {
              status = 'toxic';
              interp = currentLang === 'hu'
                ? `Magas völgykoncentráció CRRT mellett (${val} mg/L, cél: < 8.0 mg/L).`
                : currentLang === 'de'
                ? `Hoher Talspiegel unter CRRT (${val} mg/L).`
                : `High trough level in CRRT patient (${val} mg/L).`;

              skipDoses = 1;
              newDose = "5.0 mg/kg (pl. 350 mg)";
              newInterval = "q48h";
              act = currentLang === 'hu'
                ? "Hagyjon ki egy dózist (24 órás withhold). Indítsa újra csökkentett dózissal és megnyújtott (48 órás) adagolási időközzel."
                : currentLang === 'de'
                ? "Eine Dosis auslassen. Mit reduzierter Dosis und verlängertem Intervall (48h) fortsetzen."
                : "Skip 1 dose. Restart with reduced dose and extended interval (48h).";
            } else if (val < 5.0) {
              status = 'sub';
              interp = currentLang === 'hu'
                ? `Alacsony Amikacin szint CRRT mellett (${val} mg/L, cél: 5.0 - 8.0 mg/L). Jelentős mértékű a gyógyszer eliminációja.`
                : currentLang === 'de'
                ? `Niedriger Spiegel unter CRRT (${val} mg/L, Ziel: 5,0 - 8,0 mg/L). Hohe Filtrations-Clearance.`
                : `Low trough level in CRRT patient (${val} mg/L, target: 5.0 - 8.0 mg/L). High filtration clearance.`;

              skipDoses = 0;
              boosterDose = "7.5 - 10.0 mg/kg IV booster egyszer";
              newDose = "10.0 - 12.5 mg/kg (pl. 750-900 mg)";
              newInterval = "q24h";
              act = currentLang === 'hu'
                ? "Dózis kihagyása nem javasolt. Adjon egy booster dózist azonnal, majd emelje a fenntartó dózist és adja q24h időközönként."
                : currentLang === 'de'
                ? "Kein Auslassen. Booster sofort geben, dann Erhaltungsdosis anheben und q24h verabreichen."
                : "Do not skip doses. Administer booster dose immediately, then increase the maintenance dose and adjust the interval to q24h.";
            } else {
              status = 'therapeutic';
              interp = currentLang === 'hu'
                ? `Terápiás szint CRRT mellett (${val} mg/L).`
                : currentLang === 'de'
                ? `Therapeutischer Spiegel unter CRRT (${val} mg/L).`
                : `Therapeutic level in CRRT patient (${val} mg/L).`;

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
      boosterDose
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
                onChange={(e) => setTdm({ ...tdm, drugId: e.target.value as any, measuredPeak: '' })}
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

            {/* Current Dose */}
            <div>
              <label className="text-[11px] font-semibold text-slate-500 block mb-1">{lt.current_dose}</label>
              <input
                type="number"
                value={tdm.currentDose}
                onChange={(e) => setTdm({ ...tdm, currentDose: e.target.value })}
                className="w-full border border-slate-200 rounded-lg p-2 text-xs focus:ring-1 focus:ring-blue-500 outline-none bg-white"
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
              <label className="text-[11px] font-semibold text-slate-500 block mb-1">{lt.measured_trough}</label>
              <input
                type="number"
                step="any"
                value={tdm.measuredTrough}
                onChange={(e) => setTdm({ ...tdm, measuredTrough: e.target.value })}
                className="w-full border border-slate-200 rounded-lg p-2 text-xs focus:ring-1 focus:ring-blue-500 outline-none bg-white font-bold"
                placeholder="e.g. 12.5"
              />
            </div>

            {/* Measured Peak (only for aminoglycosides) */}
            {(tdm.drugId === 'gentamicin' || tdm.drugId === 'amikacin') && (
              <div>
                <label className="text-[11px] font-semibold text-slate-500 block mb-1">{lt.measured_peak}</label>
                <input
                  type="number"
                  step="any"
                  value={tdm.measuredPeak}
                  onChange={(e) => setTdm({ ...tdm, measuredPeak: e.target.value })}
                  className="w-full border border-slate-200 rounded-lg p-2 text-xs focus:ring-1 focus:ring-blue-500 outline-none bg-white"
                  placeholder="e.g. 18"
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
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{lt.target_range}</span>
                    <span className="text-xs font-extrabold text-blue-600">
                      {tdm.drugId === 'vancomycin' && '10.0 - 20.0 mg/L'}
                      {tdm.drugId === 'gentamicin' && '< 1.0 mg/L'}
                      {tdm.drugId === 'amikacin' && '< 4.0 mg/L'}
                      {tdm.drugId === 'voriconazole' && '1.5 - 5.0 mg/L'}
                    </span>
                  </div>

                  {/* Level Slider Bar */}
                  <div className="relative pt-4 pb-2">
                    <div className="h-2 w-full bg-slate-100 rounded-full flex overflow-hidden">
                      {/* Subtherapeutic part */}
                      <div className="h-full bg-amber-200" style={{ width: tdm.drugId === 'voriconazole' ? '30%' : '30%' }} />
                      {/* Therapeutic part */}
                      <div className="h-full bg-emerald-500" style={{ width: tdm.drugId === 'voriconazole' ? '40%' : '40%' }} />
                      {/* Toxic part */}
                      <div className="h-full bg-red-400" style={{ width: '30%' }} />
                    </div>

                    {/* Numeric indicator marker */}
                    <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1.5">
                      <span>{currentLang === 'hu' ? 'Alacsony' : 'Low'}</span>
                      <span>{currentLang === 'hu' ? 'Terápiás (Cél)' : 'Therapeutic'}</span>
                      <span>{currentLang === 'hu' ? 'Magas' : 'High'}</span>
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
