import fs from 'fs';
import path from 'path';
import { antibioticsData_HU } from '../src/data/antibiotics_hu';
import { antibioticsData_EN } from '../src/data/antibiotics_en';
import { antibioticsData_DE } from '../src/data/antibiotics_de';
import { getPregnancyLactationInfo } from '../src/data/pregnancyLactationData';
import { isStarredAntibiotic } from '../src/components/PharmacologyView';

interface LangConfig {
  lang: 'hu' | 'en' | 'de';
  title: string;
  subtitle: string;
  metaDesc: string;
  printBtn: string;
  backToTop: string;
  contents: string;
  starredBadge: string;
  brandNames: string;
  group: string;
  pkHeading: string;
  halfLife: string;
  pae: string;
  effectType: string;
  dosageHeading: string;
  adultDose: string;
  pediatricDose: string;
  renalAdjustment: string;
  mechanismHeading: string;
  indicationsHeading: string;
  spectrumHeading: string;
  sideEffectsHeading: string;
  notesHeading: string;
  pregHeading: string;
  pregLactLabel: string;
  fdaCatLabel: string;
  pregStatusLabel: string;
  lactStatusLabel: string;
  spectrumGrades: {
    excellent: string;
    moderate: string;
    resistant: string;
  };
}

const configs: Record<'hu' | 'en' | 'de', LangConfig> = {
  hu: {
    lang: 'hu',
    title: 'Kötelező (*) Antibiotikumok Farmakológiai Adattára',
    subtitle: 'Részletes hatóanyag-ismertető orvostanhallgatók és rezidensek számára – Validációs és Ellenőrzési Jegyzék',
    metaDesc: 'A vizsgakövetelményekben és a klinikai gyakorlatban kötelezően ismert 45 kiemelt antibiotikum teljes farmakológiai adatlapja.',
    printBtn: '📄 Nyomtatás / Mentés PDF-ként (Ctrl + P)',
    backToTop: 'Vissza a tartalomjegyzékhez ↑',
    contents: 'Tartalomjegyzék & Gyorskereső',
    starredBadge: 'Kötelező tananyag (*)',
    brandNames: 'Magyarországi kereskedelmi nevek (védjegyek)',
    group: 'Csoport',
    pkHeading: 'Farmakokinetika & Dinamika',
    halfLife: 'Felezési idő (T1/2)',
    pae: 'Posztantibiotikus hatás (PAE)',
    effectType: 'Hatástípus',
    dosageHeading: 'Adagolás & Alkalmazás',
    adultDose: 'Felnőtt adagolás',
    pediatricDose: 'Gyermek adagolás',
    renalAdjustment: 'Dózismódosítás vesekárosodás esetén',
    mechanismHeading: 'Hatásmechanizmus',
    indicationsHeading: 'Főbb klinikai indikációk',
    spectrumHeading: 'Antibakteriális spektrum',
    sideEffectsHeading: 'Főbb mellékhatások & toxicitás',
    notesHeading: 'Klinikai & didaktikai megjegyzések',
    pregHeading: 'FDA / EMA Terhességi & Szoptatási Alkalmazhatóság',
    pregLactLabel: 'Alkalmazhatóság',
    fdaCatLabel: 'FDA Kategória',
    pregStatusLabel: 'Terhességi státusz',
    lactStatusLabel: 'Szoptatási státusz',
    spectrumGrades: {
      excellent: 'Kiváló (1. választandó)',
      moderate: 'Mérsékelt / Változó',
      resistant: 'Rezisztens / Hatástalan'
    }
  },
  en: {
    lang: 'en',
    title: 'Core (*) Antibiotics Pharmacology Dossier',
    subtitle: 'Detailed Clinical & Pharmacological Reference for Medical Students and Residents – Validation Guide',
    metaDesc: 'Complete pharmacology reference dossier for the 45 core starred antibiotics required in medical curricula.',
    printBtn: '📄 Print / Save as PDF (Ctrl + P)',
    backToTop: 'Back to Table of Contents ↑',
    contents: 'Table of Contents & Quick Index',
    starredBadge: 'Core Curriculum (*)',
    brandNames: 'Common Brand Names',
    group: 'Class / Group',
    pkHeading: 'Pharmacokinetics & Dynamics',
    halfLife: 'Half-life (T1/2)',
    pae: 'Post-Antibiotic Effect (PAE)',
    effectType: 'Effect Type',
    dosageHeading: 'Dosage & Administration',
    adultDose: 'Adult Dosing',
    pediatricDose: 'Pediatric Dosing',
    renalAdjustment: 'Renal Dose Adjustment',
    mechanismHeading: 'Mechanism of Action',
    indicationsHeading: 'Main Clinical Indications',
    spectrumHeading: 'Antimicrobial Spectrum',
    sideEffectsHeading: 'Adverse Effects & Toxicity',
    notesHeading: 'Clinical & Didactic Pearls',
    pregHeading: 'FDA / EMA Pregnancy & Lactation Safety',
    pregLactLabel: 'Safety Assessment',
    fdaCatLabel: 'FDA Category',
    pregStatusLabel: 'Pregnancy Status',
    lactStatusLabel: 'Lactation Status',
    spectrumGrades: {
      excellent: 'First-line / Susceptible',
      moderate: 'Moderate / Variable',
      resistant: 'Resistant / Ineffective'
    }
  },
  de: {
    lang: 'de',
    title: 'Katalog der Pflicht-Antibiotika (*)',
    subtitle: 'Detailliertes pharmakologisches Kompendium für Studierende und Assistenzärzte – Validierungsdossier',
    metaDesc: 'Vollständiges pharmakologisches Dossier der 45 mit Stern (*) gekennzeichneten Kern-Antibiotika.',
    printBtn: '📄 Drucken / Als PDF speichern (Strg + P)',
    backToTop: 'Zurück zum Inhaltsverzeichnis ↑',
    contents: 'Inhaltsverzeichnis & Schnellübersicht',
    starredBadge: 'Kerncurriculum (*)',
    brandNames: 'Handelsnamen',
    group: 'Substanzklasse',
    pkHeading: 'Pharmakokinetik & Dynamik',
    halfLife: 'Halbwertszeit (T1/2)',
    pae: 'Postantibiotischer Effekt (PAE)',
    effectType: 'Wirktyp',
    dosageHeading: 'Dosierung & Verabreichung',
    adultDose: 'Erwachsenendosierung',
    pediatricDose: 'Pädiatrische Dosierung',
    renalAdjustment: 'Dosisanpassung bei Niereninsuffizienz',
    mechanismHeading: 'Wirkungsmechanismus',
    indicationsHeading: 'Hauptindikationen',
    spectrumHeading: 'Antimikrobielles Spektrum',
    sideEffectsHeading: 'Nebenwirkungen & Toxizität',
    notesHeading: 'Klinische & didaktische Hinweise',
    pregHeading: 'FDA / EMA Schwangerschafts- & Stillzeitsicherheit',
    pregLactLabel: 'Sicherheitsbewertung',
    fdaCatLabel: 'FDA-Kategorie',
    pregStatusLabel: 'Schwangerschaftsstatus',
    lactStatusLabel: 'Stillzeitstatus',
    spectrumGrades: {
      excellent: 'Erstlinienwirksam / Empfindlich',
      moderate: 'Mäßig / Variabel',
      resistant: 'Resistent / Unwirksam'
    }
  }
};

function getDataset(lang: 'hu' | 'en' | 'de') {
  if (lang === 'hu') return antibioticsData_HU;
  if (lang === 'en') return antibioticsData_EN;
  return antibioticsData_DE;
}

function escapeHtml(str: string | undefined | null): string {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getSpectrumScoreLabel(score: number, grades: LangConfig['spectrumGrades']) {
  if (score >= 2) return `<span class="badge badge-green">${grades.excellent} (+++)</span>`;
  if (score === 1) return `<span class="badge badge-amber">${grades.moderate} (++)</span>`;
  return `<span class="badge badge-gray">${grades.resistant} (-)</span>`;
}

function generateHtml(lang: 'hu' | 'en' | 'de') {
  const cfg = configs[lang];
  const dataset = getDataset(lang);

  const starred = dataset.filter(a => isStarredAntibiotic(a.id) || (lang === 'de' && a.id === 'ceftazidim'));

  // Sort alphabetically by name
  starred.sort((a, b) => a.name.localeCompare(b.name));

  // Build Table of Contents
  const tocItems = starred.map((item, index) => {
    return `<li><a href="#drug-${item.id}"><span class="toc-num">${index + 1}.</span> <strong>${escapeHtml(item.name)}</strong> <span class="toc-group">(${escapeHtml(item.group)})</span></a></li>`;
  }).join('\n');

  // Build Drug Cards
  const drugCards = starred.map((item, index) => {
    const preg = getPregnancyLactationInfo(item.id === 'ceftazidim' ? 'ceftazidime' : item.id);
    const pregText = preg?.pregnancySummary ? preg.pregnancySummary[lang] || preg.pregnancySummary.hu : '';
    const lactText = preg?.lactationSummary ? preg.lactationSummary[lang] || preg.lactationSummary.hu : '';

    const sideEffectsList = Array.isArray(item.sideEffects)
      ? item.sideEffects.map(se => `<li>${escapeHtml(se)}</li>`).join('')
      : `<li>${escapeHtml(String(item.sideEffects))}</li>`;

    const indicationsList = Array.isArray(item.indications)
      ? item.indications.map(ind => `<li>${escapeHtml(ind)}</li>`).join('')
      : `<li>${escapeHtml(String(item.indications))}</li>`;

    return `
    <article class="drug-card" id="drug-${item.id}">
      <header class="drug-header">
        <div class="drug-header-main">
          <span class="drug-num">#${index + 1}</span>
          <h2 class="drug-title">
            <span class="star" title="Kötelező tananyag / Core curriculum">*</span>
            ${escapeHtml(item.name)}
            ${item.abbreviation ? `<span class="drug-abbr">${escapeHtml(item.abbreviation)}</span>` : ''}
          </h2>
          <span class="drug-group-badge">${escapeHtml(item.group)}</span>
        </div>
        ${item.brandNames ? `<div class="drug-brands"><strong>${cfg.brandNames}:</strong> ${escapeHtml(item.brandNames)}</div>` : ''}
      </header>

      <!-- Pregnancy & Lactation Safety Banner -->
      ${preg ? `
      <div class="safety-box">
        <div class="safety-badge-row">
          <span class="fda-badge">FDA Cat. ${escapeHtml(preg.fdaCategory || 'N/A')}</span>
          <span class="safety-pill ${preg.pregnancySafe ? 'safe' : 'caution'}">
            🤰 ${cfg.pregStatusLabel}: ${preg.pregnancySafe ? 'Megengedett / Safe' : 'Megfontolás / Caution'}
          </span>
          <span class="safety-pill ${preg.lactationSafe ? 'safe' : 'caution'}">
            🍼 ${cfg.lactStatusLabel}: ${preg.lactationSafe ? 'Kompatibilis / Compatible' : 'Megfontolás / Caution'}
          </span>
        </div>
        <div class="safety-texts">
          <p><strong>Terhesség / Pregnancy:</strong> ${escapeHtml(pregText)}</p>
          <p><strong>Szoptatás / Lactation:</strong> ${escapeHtml(lactText)}</p>
        </div>
      </div>
      ` : ''}

      <div class="details-grid">
        <!-- Mechanism of Action -->
        <div class="detail-block full-width">
          <h3 class="section-title">🔬 ${cfg.mechanismHeading}</h3>
          <p class="section-content">${escapeHtml(item.mechanismOfAction)}</p>
        </div>

        <!-- PK & Dynamics -->
        <div class="detail-block">
          <h3 class="section-title">⚡ ${cfg.pkHeading}</h3>
          <table class="subtable">
            <tr><th>${cfg.effectType}</th><td><span class="badge badge-blue">${escapeHtml(item.effectType || 'Baktericid')}</span></td></tr>
            <tr><th>${cfg.halfLife}</th><td>${escapeHtml(item.halfLife)}</td></tr>
            <tr><th>${cfg.pae}</th><td>${escapeHtml(item.pae || 'Nincs / Minimális')}</td></tr>
          </table>
        </div>

        <!-- Dosage & Administration -->
        <div class="detail-block">
          <h3 class="section-title">💊 ${cfg.dosageHeading}</h3>
          <table class="subtable">
            <tr><th>${cfg.adultDose}</th><td>${escapeHtml(item.dosage?.adult || '-')}</td></tr>
            ${item.dosage?.pediatric ? `<tr><th>${cfg.pediatricDose}</th><td>${escapeHtml(item.dosage.pediatric)}</td></tr>` : ''}
            <tr><th>${cfg.renalAdjustment}</th><td class="renal-alert">${escapeHtml(item.dosage?.renalAdjustment || 'Nem igényel dózismódosítást / No adjustment')}</td></tr>
          </table>
        </div>

        <!-- Spectrum of Activity -->
        <div class="detail-block">
          <h3 class="section-title">🎯 ${cfg.spectrumHeading}</h3>
          <div class="spectrum-grid">
            <div class="spec-item"><span>Gram-pozitív:</span> ${getSpectrumScoreLabel(item.spectrum?.gramPositive ?? 0, cfg.spectrumGrades)}</div>
            <div class="spec-item"><span>Gram-negatív:</span> ${getSpectrumScoreLabel(item.spectrum?.gramNegative ?? 0, cfg.spectrumGrades)}</div>
            <div class="spec-item"><span>Anaerob:</span> ${getSpectrumScoreLabel(item.spectrum?.anaerobe ?? 0, cfg.spectrumGrades)}</div>
            <div class="spec-item"><span>Pseudomonas:</span> ${getSpectrumScoreLabel(item.spectrum?.pseudomonas ?? 0, cfg.spectrumGrades)}</div>
            <div class="spec-item"><span>Atípusos:</span> ${getSpectrumScoreLabel(item.spectrum?.atypical ?? 0, cfg.spectrumGrades)}</div>
          </div>
          ${item.spectrum?.other ? `<p class="spec-notes"><em>${escapeHtml(item.spectrum.other)}</em></p>` : ''}
        </div>

        <!-- Main Indications -->
        <div class="detail-block">
          <h3 class="section-title">🩺 ${cfg.indicationsHeading}</h3>
          <ul class="bullet-list">
            ${indicationsList}
          </ul>
        </div>

        <!-- Adverse Effects -->
        <div class="detail-block">
          <h3 class="section-title">⚠️ ${cfg.sideEffectsHeading}</h3>
          <ul class="bullet-list side-effects">
            ${sideEffectsList}
          </ul>
        </div>

        <!-- Clinical Notes -->
        ${item.notes ? `
        <div class="detail-block">
          <h3 class="section-title">💡 ${cfg.notesHeading}</h3>
          <p class="section-content notes-content">${escapeHtml(item.notes)}</p>
        </div>
        ` : ''}
      </div>

      <footer class="drug-card-footer no-print">
        <a href="#toc" class="back-link">${cfg.backToTop}</a>
      </footer>
    </article>
    `;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(cfg.title)} (${lang.toUpperCase()})</title>
  <meta name="description" content="${escapeHtml(cfg.metaDesc)}">
  <style>
    :root {
      --primary: #1d4ed8;
      --primary-dark: #1e40af;
      --primary-light: #eff6ff;
      --slate-900: #0f172a;
      --slate-800: #1e293b;
      --slate-700: #334155;
      --slate-600: #475569;
      --slate-500: #64748b;
      --slate-200: #e2e8f0;
      --slate-100: #f1f5f9;
      --slate-50: #f8fafc;
      --red-600: #dc2626;
      --emerald-600: #059669;
      --emerald-50: #ecfdf5;
      --amber-600: #d97706;
      --amber-50: #fffbeb;
      --blue-50: #eff6ff;
      --blue-700: #1d4ed8;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background-color: var(--slate-100);
      color: var(--slate-900);
      line-height: 1.4;
      font-size: 12.5px;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    .container {
      max-width: 1040px;
      margin: 0 auto;
      padding: 16px 14px 60px;
    }

    /* Fixed floating print bar for browser preview */
    .action-bar {
      position: sticky;
      top: 10px;
      z-index: 1000;
      background: white;
      border: 1px solid var(--slate-200);
      border-radius: 10px;
      padding: 10px 16px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }

    .btn-print {
      background: var(--primary);
      color: white;
      border: none;
      padding: 8px 16px;
      font-weight: 700;
      font-size: 13px;
      border-radius: 7px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: background 0.15s;
    }

    .btn-print:hover {
      background: var(--primary-dark);
    }

    .lang-switcher {
      display: flex;
      gap: 6px;
    }

    .lang-btn {
      padding: 5px 10px;
      border-radius: 6px;
      font-size: 11px;
      font-weight: 600;
      text-decoration: none;
      color: var(--slate-700);
      background: var(--slate-100);
      border: 1px solid var(--slate-200);
    }

    .lang-btn.active {
      background: var(--primary-dark);
      color: white;
      border-color: var(--primary-dark);
    }

    /* Header banner */
    .doc-header {
      background: white;
      border: 1px solid var(--slate-200);
      border-radius: 12px;
      padding: 18px 22px;
      margin-bottom: 18px;
      border-top: 5px solid var(--primary);
    }

    .doc-title {
      font-size: 21px;
      font-weight: 800;
      color: var(--slate-900);
      margin-bottom: 6px;
    }

    .doc-subtitle {
      font-size: 13px;
      color: var(--slate-600);
      margin-bottom: 12px;
      line-height: 1.5;
    }

    .meta-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      font-size: 11px;
    }

    .pill {
      background: var(--slate-100);
      border: 1px solid var(--slate-200);
      padding: 3px 8px;
      border-radius: 5px;
      font-weight: 600;
      color: var(--slate-700);
    }

    .pill.red {
      background: #fef2f2;
      border-color: #fecaca;
      color: #991b1b;
    }

    /* TOC */
    .toc-card {
      background: white;
      border: 1px solid var(--slate-200);
      border-radius: 12px;
      padding: 18px 20px;
      margin-bottom: 22px;
    }

    .toc-card h2 {
      font-size: 15px;
      font-weight: 700;
      margin-bottom: 12px;
      color: var(--slate-800);
      border-bottom: 1px solid var(--slate-200);
      padding-bottom: 6px;
    }

    .toc-list {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 6px 14px;
    }

    .toc-list a {
      color: var(--primary-dark);
      text-decoration: none;
      font-size: 11.5px;
      display: block;
      padding: 2px 0;
    }

    .toc-list a:hover {
      text-decoration: underline;
    }

    .toc-num {
      color: var(--slate-500);
      font-family: monospace;
      margin-right: 4px;
    }

    .toc-group {
      font-size: 10.5px;
      color: var(--slate-500);
    }

    /* Drug Cards */
    .drug-card {
      background: white;
      border: 1px solid var(--slate-200);
      border-radius: 12px;
      padding: 16px 18px;
      margin-bottom: 18px;
      box-shadow: 0 1px 2px rgba(0,0,0,0.03);
      display: block;
      page-break-inside: avoid !important;
      break-inside: avoid !important;
      break-inside: avoid-page !important;
    }

    .drug-header {
      border-bottom: 1.5px solid var(--slate-100);
      padding-bottom: 10px;
      margin-bottom: 12px;
    }

    .drug-header-main {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }

    .drug-num {
      background: var(--slate-900);
      color: white;
      font-weight: 800;
      font-size: 11px;
      padding: 2px 6px;
      border-radius: 5px;
    }

    .drug-title {
      font-size: 17px;
      font-weight: 800;
      color: var(--slate-900);
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }

    .star {
      color: var(--red-600);
      font-size: 19px;
      line-height: 1;
      font-weight: 900;
    }

    .drug-abbr {
      background: var(--blue-50);
      color: var(--blue-700);
      border: 1px solid #bfdbfe;
      font-family: monospace;
      font-size: 11px;
      padding: 1px 6px;
      border-radius: 4px;
      text-transform: uppercase;
      font-weight: 700;
    }

    .drug-group-badge {
      background: var(--slate-100);
      color: var(--slate-700);
      font-size: 11px;
      padding: 2px 8px;
      border-radius: 5px;
      font-weight: 600;
    }

    .drug-brands {
      font-size: 11px;
      color: var(--slate-600);
      margin-top: 5px;
      font-style: italic;
    }

    /* Safety Box */
    .safety-box {
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      border-radius: 8px;
      padding: 8px 12px;
      margin-bottom: 12px;
      font-size: 11.5px;
      page-break-inside: avoid !important;
      break-inside: avoid !important;
    }

    .safety-badge-row {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-bottom: 6px;
      align-items: center;
    }

    .fda-badge {
      background: #047857;
      color: white;
      font-weight: 800;
      font-size: 10px;
      padding: 2px 6px;
      border-radius: 4px;
    }

    .safety-pill {
      font-size: 10px;
      font-weight: 700;
      padding: 2px 6px;
      border-radius: 4px;
    }

    .safety-pill.safe {
      background: #dcfce7;
      color: #15803d;
      border: 1px solid #86efac;
    }

    .safety-pill.caution {
      background: #fef3c7;
      color: #b45309;
      border: 1px solid #fcd34d;
    }

    .safety-texts p {
      margin-bottom: 3px;
      color: #166534;
      line-height: 1.35;
    }

    .safety-texts p:last-child {
      margin-bottom: 0;
    }

    /* Grid Layout */
    .details-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      page-break-inside: avoid !important;
      break-inside: avoid !important;
    }

    .detail-block {
      background: var(--slate-50);
      border: 1px solid var(--slate-200);
      border-radius: 8px;
      padding: 10px 12px;
      page-break-inside: avoid !important;
      break-inside: avoid !important;
    }

    .detail-block.full-width {
      grid-column: span 2;
    }

    .section-title {
      font-size: 11.5px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.4px;
      color: var(--slate-700);
      margin-bottom: 6px;
      border-bottom: 1px solid var(--slate-200);
      padding-bottom: 3px;
    }

    .section-content {
      font-size: 11.5px;
      color: var(--slate-800);
      line-height: 1.4;
    }

    .notes-content {
      background: var(--amber-50);
      border-left: 3px solid var(--amber-600);
      padding: 6px 10px;
      border-radius: 4px;
      color: #78350f;
    }

    /* Subtables */
    .subtable {
      width: 100%;
      border-collapse: collapse;
      font-size: 11px;
    }

    .subtable th {
      text-align: left;
      font-weight: 600;
      color: var(--slate-600);
      padding: 3px 6px 3px 0;
      width: 38%;
      vertical-align: top;
      border-bottom: 1px solid var(--slate-200);
    }

    .subtable td {
      padding: 3px 0;
      color: var(--slate-800);
      vertical-align: top;
      border-bottom: 1px solid var(--slate-200);
    }

    .renal-alert {
      color: #991b1b;
      font-weight: 600;
    }

    /* Bullet lists */
    .bullet-list {
      padding-left: 16px;
      font-size: 11.5px;
      color: var(--slate-800);
      line-height: 1.4;
    }

    .bullet-list li {
      margin-bottom: 3px;
    }

    .bullet-list.side-effects li {
      color: #450a0a;
    }

    /* Spectrum grid */
    .spectrum-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 4px;
      margin-bottom: 6px;
      font-size: 11px;
    }

    .spec-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2px 0;
      border-bottom: 1px dashed var(--slate-200);
    }

    .spec-item span:first-child {
      font-weight: 600;
      color: var(--slate-700);
    }

    .spec-notes {
      font-size: 10.5px;
      color: var(--slate-600);
      line-height: 1.35;
      margin-top: 4px;
    }

    .badge {
      display: inline-block;
      font-size: 10px;
      font-weight: 700;
      padding: 1px 5px;
      border-radius: 3px;
    }

    .badge-green {
      background: #dcfce7;
      color: #166534;
    }

    .badge-amber {
      background: #fef3c7;
      color: #92400e;
    }

    .badge-gray {
      background: #f1f5f9;
      color: #64748b;
    }

    .badge-blue {
      background: #dbeafe;
      color: #1e40af;
    }

    .drug-card-footer {
      margin-top: 10px;
      text-align: right;
    }

    .back-link {
      font-size: 10.5px;
      color: var(--primary);
      text-decoration: none;
      font-weight: 600;
    }

    .back-link:hover {
      text-decoration: underline;
    }

    /* PRINT SPECIFIC STYLES - COMPACT & PAGE BREAK SECURED */
    @page {
      size: A4 portrait;
      margin: 8mm 6mm 8mm 6mm;
    }

    @media print {
      body {
        background: white;
        font-size: 9pt;
        line-height: 1.3;
        color: #111;
      }

      .container {
        max-width: 100%;
        padding: 0;
        margin: 0;
      }

      .no-print {
        display: none !important;
      }

      .doc-header {
        border-radius: 0;
        border: none;
        border-bottom: 1.5pt solid #000;
        padding: 6pt 0 8pt;
        margin-bottom: 10pt;
      }

      .doc-title {
        font-size: 15pt;
        margin-bottom: 3pt;
      }

      .doc-subtitle {
        font-size: 8.5pt;
        margin-bottom: 6pt;
      }

      .toc-card {
        page-break-after: always;
        break-after: page;
        border: 0.5pt solid #ccc;
        padding: 10pt;
      }

      .toc-card h2 {
        font-size: 11pt;
      }

      .toc-list a {
        font-size: 8pt;
      }

      /* STRICTLY PREVENT CARD BREAK ACROSS PAGES */
      .drug-card {
        border: 0.75pt solid #777;
        border-radius: 4pt;
        box-shadow: none;
        margin-bottom: 10pt;
        padding: 8pt 10pt;
        display: block !important;
        page-break-inside: avoid !important;
        break-inside: avoid !important;
        break-inside: avoid-page !important;
      }

      .drug-header {
        padding-bottom: 4pt;
        margin-bottom: 6pt;
      }

      .drug-title {
        font-size: 12pt;
      }

      .drug-abbr {
        font-size: 8pt;
        padding: 1pt 4pt;
      }

      .drug-group-badge {
        font-size: 8pt;
        padding: 1pt 5pt;
      }

      .drug-brands {
        font-size: 8pt;
        margin-top: 2pt;
      }

      .safety-box {
        padding: 4pt 6pt;
        margin-bottom: 6pt;
        font-size: 8pt;
        border: 0.5pt solid #86efac;
      }

      .safety-badge-row {
        gap: 4pt;
        margin-bottom: 3pt;
      }

      .fda-badge, .safety-pill {
        font-size: 7.5pt;
        padding: 1pt 4pt;
      }

      .details-grid {
        gap: 5pt;
      }

      .detail-block {
        border: 0.5pt solid #ccc;
        padding: 5pt 7pt;
        border-radius: 3pt;
      }

      .section-title {
        font-size: 8pt;
        margin-bottom: 3pt;
        padding-bottom: 2pt;
      }

      .section-content {
        font-size: 8pt;
        line-height: 1.28;
      }

      .subtable {
        font-size: 7.5pt;
      }

      .subtable th, .subtable td {
        padding: 2pt 0;
      }

      .bullet-list {
        font-size: 8pt;
        padding-left: 12pt;
        line-height: 1.25;
      }

      .bullet-list li {
        margin-bottom: 1.5pt;
      }

      .spectrum-grid {
        gap: 2pt;
        margin-bottom: 3pt;
        font-size: 7.5pt;
      }

      .spec-item {
        padding: 1pt 0;
      }

      .spec-notes {
        font-size: 7.5pt;
        margin-top: 2pt;
      }

      .badge {
        font-size: 7pt;
        padding: 1pt 3pt;
      }

      .star {
        color: #b91c1c !important;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Action Bar (hidden when printed) -->
    <div class="action-bar no-print">
      <button class="btn-print" onclick="window.print()">
        ${cfg.printBtn}
      </button>
      <div class="lang-switcher">
        <a href="/starred_antibiotics_hu.html" class="lang-btn ${lang === 'hu' ? 'active' : ''}">HU (Magyar)</a>
        <a href="/starred_antibiotics_en.html" class="lang-btn ${lang === 'en' ? 'active' : ''}">EN (English)</a>
        <a href="/starred_antibiotics_de.html" class="lang-btn ${lang === 'de' ? 'active' : ''}">DE (Deutsch)</a>
      </div>
    </div>

    <!-- Document Header -->
    <header class="doc-header">
      <h1 class="doc-title">${escapeHtml(cfg.title)}</h1>
      <p class="doc-subtitle">${escapeHtml(cfg.subtitle)}</p>
      <div class="meta-pills">
        <span class="pill red">★ 43 ${cfg.starredBadge}</span>
        <span class="pill">🌐 Nyelv / Language: ${lang.toUpperCase()}</span>
        <span class="pill">📅 Export Dátum: ${new Date().toISOString().split('T')[0]}</span>
        <span class="pill">🏥 Forrás: Európai & Magyar Infektológiai Útmutatók</span>
      </div>
    </header>

    <!-- Table of Contents -->
    <nav class="toc-card" id="toc">
      <h2>📑 ${cfg.contents} (43 Hatóanyag)</h2>
      <ul class="toc-list">
        ${tocItems}
      </ul>
    </nav>

    <!-- Drugs List -->
    <main class="drugs-container">
      ${drugCards}
    </main>
  </div>
</body>
</html>`;
}

function generateIndexHtml() {
  return `<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kötelező (*) Antibiotikumok Export Központ (PDF / Nyomtatás)</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: #f8fafc;
      color: #0f172a;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      padding: 20px;
    }
    .card {
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 20px;
      padding: 36px;
      max-width: 680px;
      width: 100%;
      box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05);
      border-top: 6px solid #2563eb;
    }
    h1 {
      font-size: 24px;
      font-weight: 800;
      margin-bottom: 8px;
    }
    p {
      color: #475569;
      font-size: 14px;
      line-height: 1.6;
      margin-bottom: 24px;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 12px;
      margin-bottom: 24px;
    }
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 20px;
      border: 1.5px solid #e2e8f0;
      border-radius: 12px;
      text-decoration: none;
      color: #1e293b;
      transition: all 0.2s;
    }
    .item:hover {
      border-color: #2563eb;
      background: #eff6ff;
      transform: translateY(-2px);
    }
    .item-title {
      font-weight: 700;
      font-size: 15px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .item-desc {
      font-size: 12px;
      color: #64748b;
      margin-top: 2px;
    }
    .item-btn {
      background: #2563eb;
      color: white;
      font-size: 12px;
      font-weight: 700;
      padding: 8px 14px;
      border-radius: 8px;
      white-space: nowrap;
    }
    .footer-note {
      font-size: 12px;
      color: #94a3b8;
      border-top: 1px solid #f1f5f9;
      padding-top: 16px;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>📄 Kötelező (*) Antibiotikumok PDF Export</h1>
    <p>
      Itt tölthető le és nyomtatható ki közvetlenül mind a 43 csillaggal jelölt, kötelező farmakológiai hatóanyag teljes adatlapja ellenőrzés és szakmai validálás céljából, mindhárom nyelven.
    </p>
    <div class="grid">
      <a href="/starred_antibiotics_hu.html" target="_blank" class="item">
        <div>
          <div class="item-title">🇭🇺 Magyar változat (HU)</div>
          <div class="item-desc">43 csillagos antibiotikum teljes magyar farmakológiai profilja</div>
        </div>
        <span class="item-btn">Megnyitás & PDF →</span>
      </a>

      <a href="/starred_antibiotics_en.html" target="_blank" class="item">
        <div>
          <div class="item-title">🇬🇧 Angol változat (EN)</div>
          <div class="item-desc">Full clinical & pharmacological dossiers of all 43 starred agents</div>
        </div>
        <span class="item-btn">Open & PDF →</span>
      </a>

      <a href="/starred_antibiotics_de.html" target="_blank" class="item">
        <div>
          <div class="item-title">🇩🇪 Német változat (DE)</div>
          <div class="item-desc">Vollständiges pharmakologisches Dossier der 43 Pflicht-Antibiotika</div>
        </div>
        <span class="item-btn">Öffnen & PDF →</span>
      </a>
    </div>
    <div class="footer-note">
      💡 <strong>Tipp PDF mentéséhez:</strong> A megnyíló oldalon kattintson a felső <em>"Nyomtatás / Mentés PDF-ként"</em> gombra (vagy nyomja meg a <kbd>Ctrl + P</kbd> / <kbd>Cmd + P</kbd> billentyűkombinációt), majd válassza a <em>"Mentés PDF-ként" (Save as PDF)</em> opciót!
    </div>
  </div>
</body>
</html>`;
}

// Generate files in public directory
const publicDir = path.join(process.cwd(), 'public');
fs.writeFileSync(path.join(publicDir, 'starred_antibiotics_hu.html'), generateHtml('hu'), 'utf8');
fs.writeFileSync(path.join(publicDir, 'starred_antibiotics_en.html'), generateHtml('en'), 'utf8');
fs.writeFileSync(path.join(publicDir, 'starred_antibiotics_de.html'), generateHtml('de'), 'utf8');
fs.writeFileSync(path.join(publicDir, 'starred_exports.html'), generateIndexHtml(), 'utf8');

console.log('Successfully generated all starred antibiotic export files in public/');
