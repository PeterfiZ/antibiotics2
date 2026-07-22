# AntiInfective Guide - Antimicrobial Stewardship & Pharmacology Platform

An interactive, comprehensive clinical decision support and educational application designed for medical students, infectious disease specialists, clinical pharmacists, and healthcare providers.

This platform integrates modern antimicrobial pharmacology, empiric clinical treatment guidelines, microbiology matrices, multidrug-resistant (MDR) pathogen management protocols, therapeutic drug monitoring (TDM) calculators, renal dose adjustments, interactive case-based quizzes, and an AI-powered clinical consultant.

---

## 🌟 Key Features & Modules

### 1. 🧪 Pharmacology Module (`PharmacologyView`)
- **Antibiotic Classes**: Detailed profiles of Penicillins, Cephalosporins, Carbapenems, Monobactams, Fluoroquinolones, Aminoglycosides, Glycopeptides, Oxazolidinones, Macrolides, Tetracyclines, Polymyxins, and novel agents.
- **Drug Profiles**: Mechanism of action, spectrum of activity, standard adult/pediatric dosages, adverse effects, contraindications, and drug interactions.
- **PK/PD Drivers**: Classification by $C_{\max}/\text{MIC}$, $T > \text{MIC}$, or $\text{AUC}_{24}/\text{MIC}$ efficacy targets.

### 2. 🩺 Clinical Guidance Module (`ClinicalView`)
- **Empiric & Targeted Regimens**: Evidence-based antimicrobial choices categorized by organ system (CNS, Respiratory, Intra-abdominal, Urinary, Skin/Soft Tissue, Sepsis, Bone/Joint).
- **WHO AWaRe Classification**: Access, Watch, and Reserve categorizations for optimal antimicrobial stewardship.
- **Treatment Duration & Alternatives**: Recommended duration of therapy, step-down intravenous-to-oral conversion rules, and allergy/toxicity alternative options.

### 3. 🔬 Microbiology Spectrum (`MicrobiologyView`)
- **Pathogen Matrix**: Susceptibility profiles for Gram-positive cocci, Gram-negative bacilli, Anaerobes, Atypicals, and Fungi.
- **Susceptibility Heatmaps**: Color-coded susceptibility indicators (First-line, Effective, Intermediate, Resistant).
- **Resistance Profiles**: Overview of intrinsic and acquired resistance patterns across major bacterial families.

### 4. 🛡️ MDR Pathogens & Mechanisms (`MdrView`)
- **ECDC / WHO / IDSA Consensus Definitions**: Standardized classification criteria for Multidrug-Resistant (MDR), Extensively Drug-Resistant (XDR), and Pandrug-Resistant (PDR) isolates.
- **ESKAPE Pathogens**: In-depth focus on *Enterococcus faecium*, *Staphylococcus aureus*, *Klebsiella pneumoniae*, *Acinetobacter baumannii*, *Pseudomonas aeruginosa*, and *Enterobacter* spp.
- **Carbapenemase & Ambler Classification**:
  - Class A (KPC)
  - Class B Metallo-$\beta$-lactamases (NDM, VIM, IMP)
  - Class C (AmpC)
  - Class D Oxacillinases (OXA-48, OXA-23/24/58)
- **Novel $\beta$-Lactamase Inhibitor Combinations & Siderophores**: Sulbactam-Durlobactam (SUL-DUR / XACDURO®), Ceftazidime-Avibactam (CAZ-AVI), Meropenem-Vaborbactam (MEV), Imipenem-Relebactam (IMI-REL), Aztreonam-Avibactam (ATM-AVI), and Cefiderocol.
- **Clinical Algorithms**: Step-by-step decision matrix for CRAB (*Acinetobacter baumannii*), CRE, and CRPA management.

### 5. 🧮 Therapeutic Drug Monitoring (TDM) (`TdmCalculatorView`)
- **Vancomycin TDM**: $\text{AUC}_{24}/\text{MIC}$ Bayesian and two-point kinetic estimation, target trough recommendation (15–20 mg/L), and maintenance dosing calculator.
- **Aminoglycosides (Gentamicin/Amikacin)**: Extended-interval (once-daily) vs. conventional dosing, elimination rate constant ($k_e$), half-life ($t_{1/2}$), peak and trough projections.
- **Kinetic Equations**: Interactive calculation of volume of distribution ($V_d$), clearance ($CL$), and loading doses.

### 6. 📉 Renal Dosing Adjustment (`RenalDosingView`)
- **Renal Function Calculators**: Cockcroft-Gault Creatinine Clearance ($\text{CrCl}$) and eGFR calculation.
- **Dose Modification Rules**: Regimen adjustments for mild, moderate, severe renal impairment, Hemodialysis (HD), and Continuous Renal Replacement Therapy (CRRT).

### 7. 🎓 Practice & Clinical Cases (`PracticeView`)
- **Interactive Quiz Engine**: Board-style clinical vignettes with detailed rationale and references.
- **Score & Analytics**: Track progress across pharmacology, microbiology, and clinical decision-making.

### 8. 🤖 AI Clinical Consultant (`AiConsultantView`)
- **Powered by Google Gemini API**: Secure server-side integration (`@google/genai`) for real-time antimicrobial stewardship queries, complex clinical case analysis, and drug interaction evaluations.

---

## 🌐 Multi-Language Support

Built-in full localization with instant runtime language switching:
- 🇺🇸 **English** (`en`)
- 🇭🇺 **Hungarian** (`hu`)
- 🇩🇪 **German** (`de`)

---

## 🛠️ Tech Stack & Architecture

- **Frontend**: React 19, TypeScript, Vite 6, Tailwind CSS v4, Lucide React, Motion (Framer Motion)
- **Backend Server**: Node.js, Express.js, `tsx` / `esbuild`
- **AI Integration**: `@google/genai` (Google Gemini API)
- **Progressive Web App (PWA)**: Offline caching with Service Worker, responsive mobile-first UI layout, installable application manifest.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/antiinfective-guide.git
   cd antiinfective-guide
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory (refer to `.env.example`):
   ```env
   GEMINI_API_KEY=your_google_gemini_api_key_here
   PORT=3000
   ```

4. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

5. **Build for Production**:
   ```bash
   npm run build
   ```

6. **Start Production Server**:
   ```bash
   npm start
   ```

---

## ☁️ Deployment

### Deploying to Vercel

1. Push your repository to GitHub.
2. Import the project into **Vercel**.
3. Set the **Build Command** to: `npm run build`
4. Set the **Output Directory** to: `dist`
5. Add the Environment Variable `GEMINI_API_KEY` in your Vercel project settings.
6. Deploy!

### Deploying to Cloud Run / Docker

The project includes a bundled Node/Express production build script:
- `npm run build` creates `dist/server.cjs` via `esbuild`.
- `npm start` executes `node dist/server.cjs` listening on port `3000`.

---

## 📜 License

This project is licensed under the Apache-2.0 License.

---

## ⚠️ Medical Disclaimer

*This application is intended strictly for educational and clinical decision support purposes for qualified healthcare professionals and medical students. It does not replace clinical judgment or institution-specific antibiotic guidelines.*
