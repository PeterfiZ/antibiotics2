/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import {
  mdrDefinitions,
  eskapePathogens,
  amblerClasses,
  carbapenemaseMatrix,
  pathogenMdrModules,
  mdrStewardshipPrinciples,
  PathogenMdrModule
} from '../data/mdrData';
import {
  ShieldAlert,
  Dna,
  Search,
  CheckCircle2,
  AlertTriangle,
  Info,
  Pill,
  Zap,
  Activity,
  Layers,
  ChevronRight,
  BookOpen,
  SlidersHorizontal,
  Syringe,
  Microscope,
  Clock,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function MdrView() {
  const { language, t, tg } = useLanguage();

  const [activeSubTab, setActiveSubTab] = useState<'eskape' | 'mechanisms' | 'pathogens' | 'matrix' | 'crab_algo' | 'stewardship'>('eskape');
  const [selectedPathogenId, setSelectedPathogenId] = useState<string>('crab');
  const [matrixSearch, setMatrixSearch] = useState<string>('');
  const [selectedAmbler, setSelectedAmbler] = useState<string | null>(null);

  const getLangProp = <T extends Record<string, any>>(obj: T, key: string): string => {
    if (!obj || !obj[key]) return '';
    const field = obj[key];
    if (typeof field === 'string') return field;
    if (typeof field === 'object') {
      return field[language] || field['hu'] || field['en'] || '';
    }
    return '';
  };

  const getLangArray = (obj: any): string[] => {
    if (!obj) return [];
    if (Array.isArray(obj)) return obj;
    return obj[language] || obj['hu'] || obj['en'] || [];
  };

  const currentPathogen: PathogenMdrModule = pathogenMdrModules[selectedPathogenId] || pathogenMdrModules['crab'];

  const filteredMatrix = carbapenemaseMatrix.filter(item => {
    if (!matrixSearch.trim()) return true;
    const q = matrixSearch.toLowerCase();
    const enzymeMatch = item.enzyme.toLowerCase().includes(q);
    const amblerMatch = item.amblerClass.toLowerCase().includes(q);
    const notesMatch = getLangProp(item, 'notes').toLowerCase().includes(q);
    const drugMatch = getLangArray(item.effectiveDrugs).some(d => d.toLowerCase().includes(q));
    return enzymeMatch || amblerMatch || notesMatch || drugMatch;
  });

  return (
    <div className="space-y-6 text-slate-800">
      {/* Module Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-5 md:p-6 text-white shadow-md border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="bg-rose-500/20 text-rose-300 text-xs font-extrabold px-2.5 py-0.5 rounded-full border border-rose-500/30 flex items-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5" />
                {language === 'hu' ? 'ÚJ KLINIKAI MODUL' : language === 'de' ? 'NEUES KLINISCHES MODUL' : 'NEW CLINICAL MODULE'}
              </span>
              <span className="text-slate-400 text-xs font-semibold">ECDC / WHO / IDSA 2024/2025</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
              {language === 'hu' ? 'MDR Kórokozók Kezelési Lehetőségei' : language === 'de' ? 'Behandlung von MDR-Erregern' : 'Management of MDR Pathogens'}
            </h2>
            <p className="text-xs md:text-sm text-slate-300 max-w-3xl leading-relaxed">
              {language === 'hu' 
                ? 'Rezisztencia gének (blaKPC, blaNDM, blaOXA, mecA, vanA), béta-laktamáz gátló kombinációk (SUL-DUR, CAZ-AVI, MEV, IMI-REL, ATM-AVI), sziderofórok (Cefiderokol) és klinikai algoritmusok.'
                : language === 'de'
                ? 'Resistenzgene (blaKPC, blaNDM, blaOXA, mecA, vanA), Beta-Lactamase-Inhibitor-Kombinationen, Siderophore und klinische Algorithmen.'
                : 'Resistance genes (blaKPC, blaNDM, blaOXA, mecA, vanA), beta-lactamase inhibitor combinations, siderophores (Cefiderocol) and clinical treatment algorithms.'}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-center shrink-0">
            <div className="bg-slate-800/80 border border-slate-700/80 p-3 rounded-xl text-center">
              <span className="text-[10px] text-slate-400 font-bold uppercase block">{language === 'hu' ? 'FDA 2023 Áttörés' : 'FDA 2023 Breakthrough'}</span>
              <span className="text-xs font-extrabold text-amber-300 block mt-0.5">XACDURO® (SUL-DUR)</span>
            </div>
          </div>
        </div>

        {/* Sub-navigation Tabs */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
          {[
            { id: 'eskape', label: language === 'hu' ? '1. ESKAPE & Definíciók' : language === 'de' ? '1. ESKAPE & Definitionen' : '1. ESKAPE & Definitions', icon: ShieldAlert },
            { id: 'mechanisms', label: language === 'hu' ? '2. Rezisztencia Mechanizmusok' : language === 'de' ? '2. Resistenzmechanismen' : '2. Resistance Mechanisms', icon: Dna },
            { id: 'pathogens', label: language === 'hu' ? '3. Kórokozó-specifikus Terápia' : language === 'de' ? '3. Erregerspezifische Therapie' : '3. Pathogen-Specific Therapy', icon: Microscope },
            { id: 'matrix', label: language === 'hu' ? '4. Karbapenemáz Mátrix' : language === 'de' ? '4. Carbapenemase-Matrix' : '4. Carbapenemase Matrix', icon: Zap },
            { id: 'crab_algo', label: language === 'hu' ? '5. CRAB Algoritmus (WHO/IDSA)' : language === 'de' ? '5. CRAB-Algorithmus' : '5. CRAB Algorithm', icon: Activity },
            { id: 'stewardship', label: language === 'hu' ? '6. PK/PD & Stewardship' : language === 'de' ? '6. PK/PD & Stewardship' : '6. PK/PD & Stewardship', icon: Clock }
          ].map((tab) => {
            const IconComp = tab.icon;
            const isActive = activeSubTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id as any)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all duration-150 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 ring-1 ring-blue-400'
                    : 'bg-slate-800/70 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <IconComp className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* SUB-VIEW 1: ESKAPE & DEFINITIONS */}
      {activeSubTab === 'eskape' && (
        <div className="space-y-6">
          {/* ECDC/CDC Definitions Cards */}
          <div className="space-y-3">
            <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-600" />
              {language === 'hu' ? '1. MDR, XDR és PDR ECDC/CDC Konszenzus Definíciók' : '1. MDR, XDR & PDR ECDC/CDC Consensus Definitions'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {mdrDefinitions.map((def, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-slate-200/80 p-4 shadow-xs space-y-2">
                  <div className="flex justify-between items-center">
                    <span className={`text-xs font-extrabold px-2.5 py-1 rounded-lg border ${def.badgeColor}`}>
                      {def.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {getLangProp(def, 'definition')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ESKAPE Overview Table */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden space-y-4 p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-rose-600" />
                  {language === 'hu' ? '2. ESKAPE-Kórokozók – Gyors Áttekintő Táblázat' : '2. ESKAPE Pathogens – Quick Reference Table'}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {language === 'hu' ? 'Kiemelten veszélyes multidrog-rezisztens kórokozók főbb génei és elsővonalbeli kezelése' : 'Major resistance genes and first-line treatment for high-risk MDR pathogens'}
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100/80 text-slate-700 font-extrabold uppercase text-[10px] tracking-wider border-b border-slate-200">
                    <th className="p-3">{language === 'hu' ? 'Kórokozó' : 'Pathogen'}</th>
                    <th className="p-3">{language === 'hu' ? 'MDR Definíció' : 'MDR Definition'}</th>
                    <th className="p-3">{language === 'hu' ? 'Főbb Rezisztencia Gének / Mechanizmusok' : 'Major Resistance Genes / Mechanisms'}</th>
                    <th className="p-3">{language === 'hu' ? 'Elsővonalbeli Kezelés' : 'First-line Treatment'}</th>
                    <th className="p-3 text-right">{language === 'hu' ? 'Részletek' : 'Details'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {eskapePathogens.map((path) => (
                    <tr key={path.id} className="hover:bg-blue-50/40 transition-colors">
                      <td className="p-3 font-bold text-slate-900">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-lg bg-slate-900 text-white flex items-center justify-center font-extrabold text-xs">
                            {path.letter}
                          </span>
                          <div>
                            <span className="italic block font-serif text-sm">{path.name}</span>
                            <span className="text-[10px] text-blue-600 font-bold">{path.code}</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-3 font-semibold text-slate-700">{path.mdrDefinition}</td>
                      <td className="p-3 font-mono text-[11px] text-indigo-900 bg-indigo-50/30 rounded">
                        {path.majorGenes}
                      </td>
                      <td className="p-3 font-bold text-emerald-800">
                        {getLangProp(path, 'firstLineTreatment')}
                      </td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => {
                            setSelectedPathogenId(path.detailsKey);
                            setActiveSubTab('pathogens');
                          }}
                          className="inline-flex items-center gap-1 bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                        >
                          <span>{language === 'hu' ? 'Modul' : 'Module'}</span>
                          <ChevronRight className="w-3 h-3" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* SUB-VIEW 2: RESISTANCE MECHANISMS */}
      {activeSubTab === 'mechanisms' && (
        <div className="space-y-6">
          {/* Ambler Classes Card */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-4">
            <div>
              <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
                <Dna className="w-5 h-5 text-indigo-600" />
                {language === 'hu' ? '3.1 Béta-laktamázok (Ambler Osztályozás)' : '3.1 Beta-lactamases (Ambler Classification)'}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {language === 'hu' ? 'Szerin-β-laktamázok (A, C, D) és Metallo-β-laktamázok (B) szubsztrátjai és új gátlószerei' : 'Substrates and novel inhibitors for Serine-β-lactamases (A, C, D) and Metallo-β-lactamases (B)'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {amblerClasses.map((ac) => (
                <div key={ac.ambler} className={`p-4 rounded-xl border ${ac.color} space-y-2`}>
                  <div className="flex justify-between items-center border-b border-black/10 pb-2">
                    <span className="font-black text-sm uppercase tracking-wider">
                      Ambler {ac.ambler} Osztály: {getLangProp(ac, 'type')}
                    </span>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div>
                      <strong className="text-slate-900 font-extrabold block text-[11px] uppercase tracking-wider">{language === 'hu' ? 'Főbb gének:' : 'Major genes:'}</strong>
                      <span className="font-mono text-[11px] text-indigo-950 font-bold">{ac.genes}</span>
                    </div>
                    <div>
                      <strong className="text-slate-900 font-extrabold block text-[11px] uppercase tracking-wider">{language === 'hu' ? 'Szubsztrát:' : 'Substrate:'}</strong>
                      <span>{getLangProp(ac, 'substrate')}</span>
                    </div>
                    <div>
                      <strong className="text-slate-900 font-extrabold block text-[11px] uppercase tracking-wider">{language === 'hu' ? 'Gátlószer:' : 'Inhibitor:'}</strong>
                      <span className="font-extrabold text-emerald-800">{getLangProp(ac, 'inhibitors')}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Non-Enzymatic Mechanisms */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-3">
            <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-600" />
              {language === 'hu' ? '3.2 Nem-enzimatikus Rezisztencia Mechanizmusok' : '3.2 Non-Enzymatic Resistance Mechanisms'}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/70 space-y-1">
                <span className="font-bold text-slate-900 block text-xs">{language === 'hu' ? '1. Efflux-pumpák (RND típus):' : '1. Efflux Pumps (RND type):'}</span>
                <p className="text-slate-600 leading-relaxed">
                  AdeABC (<em>A. baumannii</em>), MexAB-OprM (<em>P. aeruginosa</em>), NorA (<em>S. aureus</em>). Aktívan pumpálják ki a fluorochinolonokat, tetracyclineket és béta-laktámokat.
                </p>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/70 space-y-1">
                <span className="font-bold text-slate-900 block text-xs">{language === 'hu' ? '2. Porin-veszteség:' : '2. Porin Loss:'}</span>
                <p className="text-slate-600 leading-relaxed">
                  oprD porin veszteség <em>P. aeruginosa</em>-ban → izolált imipenem rezisztencia; OmpK35/OmpK36 veszteség <em>Klebsiella</em>-ban → csökkent porin permeabilitás.
                </p>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/70 space-y-1">
                <span className="font-bold text-slate-900 block text-xs">{language === 'hu' ? '3. Célpont-módosítás:' : '3. Target Alteration:'}</span>
                <p className="text-slate-600 leading-relaxed">
                  PBP2a (<em>mecA</em>) MRSA-ban; D-Ala-D-Lac szubsztitúció (<em>vanA/vanB</em>) VRE-ben; DNS giráz/topoizomeráz IV mutációk (fluorochinolonok ellen); 23S rRNS/L3/L4 mutációk (linezolid).
                </p>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/70 space-y-1">
                <span className="font-bold text-slate-900 block text-xs">{language === 'hu' ? '4. Biofilm-képzés & LPS módosítás:' : '4. Biofilm Formation & LPS Modification:'}</span>
                <p className="text-slate-600 leading-relaxed">
                  Igen erős biofilm védőréteg (<em>A. baumannii, P. aeruginosa</em>); Lipid A módosítás (PmrA/B) → Colistin rezisztencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUB-VIEW 3: PATHOGEN-SPECIFIC THERAPY */}
      {activeSubTab === 'pathogens' && (
        <div className="space-y-5">
          {/* Pathogen Switcher Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'crab', label: 'CRAB (Acinetobacter)', badge: 'WHO #1' },
              { id: 'cre', label: 'CRE (KPC / MBL / OXA-48)', badge: 'Kritikus' },
              { id: 'crpa', label: 'CRPA (Pseudomonas)', badge: 'Kritikus' },
              { id: 'mrsa', label: 'MRSA (S. aureus)', badge: 'Gram+' },
              { id: 'vre', label: 'VRE (Enterococcus)', badge: 'Gram+' },
              { id: 'esbl', label: 'ESBL (Enterobacterales)', badge: 'Gram-' }
            ].map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedPathogenId(p.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedPathogenId === p.id
                    ? 'bg-slate-900 text-white shadow-md ring-2 ring-blue-500'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{p.label}</span>
                <span className="text-[9px] bg-blue-500/20 text-blue-800 px-1.5 py-0.5 rounded font-black">
                  {p.badge}
                </span>
              </button>
            ))}
          </div>

          {/* Selected Pathogen Detailed Card */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 md:p-6 shadow-xs space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <span className="bg-rose-100 text-rose-800 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-rose-200">
                  {currentPathogen.badge}
                </span>
                <h3 className="text-lg md:text-xl font-black text-slate-900 mt-1">
                  {currentPathogen.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {currentPathogen.subtitle}
                </p>
              </div>
            </div>

            {/* Mechanisms List */}
            <div className="space-y-2 bg-slate-50/80 p-4 rounded-xl border border-slate-200/60">
              <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Dna className="w-4 h-4 text-indigo-600" />
                {language === 'hu' ? 'Rezisztencia Gének és Mechanizmusok' : 'Resistance Genes and Mechanisms'}
              </h4>
              <ul className="list-disc list-inside text-xs text-slate-700 space-y-1.5 leading-relaxed font-medium">
                {getLangArray(currentPathogen.mechanisms).map((m, idx) => (
                  <li key={idx}>{m}</li>
                ))}
              </ul>
            </div>

            {/* Treatment Options Table */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Pill className="w-4 h-4 text-emerald-600" />
                {language === 'hu' ? 'Terápiás Opciók, Dózis és Indikációk' : 'Therapeutic Options, Dosage, and Indications'}
              </h4>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100/90 text-slate-700 font-extrabold uppercase text-[10px] tracking-wider border-b border-slate-200">
                      <th className="p-3">{language === 'hu' ? 'Gyógyszer / Kombináció' : 'Drug / Combination'}</th>
                      <th className="p-3">{language === 'hu' ? 'Dózis (Felnőtt)' : 'Dosage (Adult)'}</th>
                      <th className="p-3">{language === 'hu' ? 'Indikáció / Spektrum' : 'Indication / Spectrum'}</th>
                      <th className="p-3">{language === 'hu' ? 'Mellékhatás / Figyelmeztetés' : 'Side Effects / Warnings'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {currentPathogen.drugOptions.map((opt, idx) => (
                      <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                        <td className="p-3 font-bold text-slate-900 bg-slate-50/40">{opt.drug}</td>
                        <td className="p-3 font-mono text-[11px] text-blue-900 bg-blue-50/20 font-bold">{opt.dose}</td>
                        <td className="p-3 text-slate-700 font-medium">{getLangProp(opt, 'indication')}</td>
                        <td className="p-3 text-rose-900 bg-rose-50/30 font-semibold">{getLangProp(opt, 'sideEffectsOrWarnings')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Clinical Alerts / Special Notes */}
            {getLangArray(currentPathogen.clinicalAlerts).length > 0 && (
              <div className="bg-amber-50 border border-amber-200/90 p-4 rounded-xl space-y-2">
                <h4 className="text-xs font-extrabold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  {language === 'hu' ? 'Klinikai Kulcsszabályok és Figyelmeztetések' : 'Key Clinical Rules and Alerts'}
                </h4>
                <ul className="list-disc list-inside text-xs text-amber-900 space-y-1 font-semibold">
                  {getLangArray(currentPathogen.clinicalAlerts).map((alert, idx) => (
                    <li key={idx}>{alert}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* SUB-VIEW 4: CARBAPENEMASE MATRIX */}
      {activeSubTab === 'matrix' && (
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 md:p-6 shadow-xs space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-500" />
                {language === 'hu' ? '4. Karbapenemáz Döntési Mátrix' : '4. Carbapenemase Decision Matrix'}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {language === 'hu' ? 'Keresés karbapenemáz enzim (KPC, NDM, VIM, OXA-48, OXA-23) alapján a célzott gyógyszerválasztáshoz' : 'Search by carbapenemase enzyme (KPC, NDM, VIM, OXA-48) for targeted antibiotic selection'}
              </p>
            </div>

            {/* Matrix Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={matrixSearch}
                onChange={(e) => setMatrixSearch(e.target.value)}
                placeholder={language === 'hu' ? "Keresés: KPC, NDM, OXA, Cefiderokol..." : "Search: KPC, NDM, OXA..."}
                className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-slate-50"
              />
            </div>
          </div>

          <div className="space-y-4">
            {filteredMatrix.map((item) => (
              <div key={item.id} className="border border-slate-200/80 rounded-xl p-4 space-y-3 hover:border-blue-300 transition-colors bg-slate-50/40">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/60 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-sm text-slate-900">{item.enzyme}</span>
                    <span className="text-[10px] font-bold bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded border border-indigo-200">
                      {item.amblerClass}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    📍 {getLangProp(item, 'prevalence')}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="bg-emerald-50/80 border border-emerald-200 p-3 rounded-lg space-y-1">
                    <span className="font-extrabold text-emerald-900 flex items-center gap-1 uppercase text-[10px]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      {language === 'hu' ? 'Hatékony / Elsővonalbeli Gyógyszerek:' : 'Effective / First-line Drugs:'}
                    </span>
                    <ul className="list-disc list-inside font-bold text-emerald-950 space-y-0.5">
                      {getLangArray(item.effectiveDrugs).map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-rose-50/80 border border-rose-200 p-3 rounded-lg space-y-1">
                    <span className="font-extrabold text-rose-900 flex items-center gap-1 uppercase text-[10px]">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                      {language === 'hu' ? 'Hatástalan / Rezisztens Gyógyszerek:' : 'Ineffective / Resistant Drugs:'}
                    </span>
                    <ul className="list-disc list-inside font-semibold text-rose-900 space-y-0.5">
                      {getLangArray(item.ineffectiveDrugs).map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 p-3 rounded-lg text-xs text-slate-700 leading-relaxed font-medium">
                  <strong className="text-slate-900 font-extrabold block text-[11px] uppercase tracking-wider mb-0.5">
                    {language === 'hu' ? 'Klinikai Útmutató & Mechanizmus:' : 'Clinical Guide & Mechanism:'}
                  </strong>
                  {getLangProp(item, 'notes')}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-VIEW 5: CRAB ALGORITHM */}
      {activeSubTab === 'crab_algo' && (
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 md:p-6 shadow-xs space-y-5">
          <div>
            <span className="bg-amber-100 text-amber-900 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-amber-200">
              WHO / IDSA 2024 IRÁNYELVEK
            </span>
            <h3 className="text-lg md:text-xl font-black text-slate-900 mt-1 flex items-center gap-2">
              <Activity className="w-5 h-5 text-rose-600" />
              {language === 'hu' ? '5. CRAB (Acinetobacter baumannii) Kezelési Algoritmus' : '5. CRAB (Acinetobacter baumannii) Treatment Algorithm'}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {language === 'hu' ? 'A WHO Priority-1 kórokozó célzott terápiás döntési fája a legújabb Sulbactam-Durlobactam (XACDURO®) és Cefiderokol adatok alapján' : 'Targeted clinical decision matrix for WHO Priority-1 CRAB based on Sulbactam-Durlobactam (XACDURO®) and Cefiderocol'}
            </p>
          </div>

          <div className="space-y-3">
            {pathogenMdrModules.crab.algorithm?.map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 hover:border-blue-300 transition-colors">
                <div className="space-y-1 flex-1">
                  <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-wider block">
                    {language === 'hu' ? `KLINIKAI HELYZET #${idx + 1}` : `CLINICAL SITUATION #${idx + 1}`}
                  </span>
                  <strong className="text-sm font-extrabold text-slate-900 block">
                    {getLangProp(item, 'scenario')}
                  </strong>
                </div>

                <div className="bg-white border border-slate-200/80 p-3 rounded-lg flex-1 md:max-w-md">
                  <span className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-wider block">
                    {language === 'hu' ? 'JAVASOLT MEGKÖZELÍTÉS' : 'RECOMMENDED APPROACH'}
                  </span>
                  <span className="text-xs font-bold text-emerald-950 block mt-0.5">
                    {getLangProp(item, 'approach')}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl space-y-2 text-xs text-blue-950">
            <h4 className="font-extrabold uppercase tracking-wider text-[11px] text-blue-900 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-blue-600" />
              {language === 'hu' ? 'Sulbactam-Durlobactam (SUL-DUR) Működési Elve' : 'Sulbactam-Durlobactam (SUL-DUR) Mechanism of Action'}
            </h4>
            <p className="leading-relaxed">
              A Sulbactam önmagában is bír antibakteriális hatással <em>Acinetobacter baumannii</em>-ban (közvetlenül kötődik a PBP1 és PBP2 szintézis fehérjékhez). A Durlobactam egy DBO-típusú (diazabicyclooctane) gátlószer, ami megvédi a Sulbactamot a CRAB törzsek által termelt OXA-23/24/58 karbapenemázok általi hidrolízistől.
            </p>
          </div>
        </div>
      )}

      {/* SUB-VIEW 6: PK/PD & STEWARDSHIP */}
      {activeSubTab === 'stewardship' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 md:p-6 shadow-xs space-y-4">
            <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              {getLangProp(mdrStewardshipPrinciples.pkpd, 'title')}
            </h3>

            <div className="space-y-3">
              {mdrStewardshipPrinciples.pkpd.items.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200/70 text-xs text-slate-700 leading-relaxed font-medium">
                  {getLangProp({ item }, 'item')}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 md:p-6 shadow-xs space-y-4">
            <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-emerald-600" />
              {getLangProp(mdrStewardshipPrinciples.stewardship, 'title')}
            </h3>

            <div className="space-y-3">
              {mdrStewardshipPrinciples.stewardship.items.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200/70 text-xs text-slate-700 leading-relaxed font-medium">
                  {getLangProp({ item }, 'item')}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
