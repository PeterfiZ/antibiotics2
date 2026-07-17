/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Antibiotic } from '../types';
import { Search, Info, CheckCircle2, AlertTriangle, XCircle, Layers, ArrowLeftRight, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage, TransText } from '../lib/LanguageContext';

export function getGroupOrderWeight(group: string): number {
  if (!group) return 999;
  const g = group.toLowerCase().trim();

  // 1. PENICILLINS (Sejtfalszintézist gátlók - Penicillinek)
  if (g.includes('természetes penicillin') || g.includes('natural penicillin') || g.includes('natürliche penicillin')) {
    return 10;
  }
  if (g.includes('izoxazolil') || g.includes('isoxazolyl') || g.includes('béta-laktamáz-stabil') || g.includes('laktamase-stabile') || g.includes('oxacillin') || g.includes('cloxacillin')) {
    return 11;
  }
  if (g.includes('aminopenicillin') || g.includes('szélesített spektrumú penicillin') || g.includes('broad-spectrum penicillin')) {
    if (g.includes('inhibitor') || g.includes('gátló') || g.includes('clavulan') || g.includes('klavulán') || g.includes('sulbactam')) {
      return 14; // Aminopenicillins with inhibitor
    }
    return 12; // Aminopenicillins alone
  }
  if (g.includes('amdinocillin') || g.includes('vizelet-specifikus') || g.includes('urine-specific')) {
    return 13;
  }
  if (g.includes('inhibitorral kombinált penicillin') || g.includes('kombinált penicillin') || (g.includes('penicillin') && g.includes('inhibitor') && !g.includes('ureido') && !g.includes('cephalosporin'))) {
    return 14;
  }
  if (g.includes('ureidopenicillin')) {
    if (g.includes('inhibitor') || g.includes('gátló') || g.includes('kombináció') || g.includes('tazobactam')) {
      return 16;
    }
    return 15;
  }

  // 2. CEPHALOSPORINS (Sejtfalszintézist gátlók - Cephalosporinok)
  if (g.includes('cephalosporin') || g.includes('ceph') || g.includes('zef')) {
    if (g.includes('1.') || g.includes('1st') || g.includes('1. gen')) {
      return 20;
    }
    if (g.includes('2.') || g.includes('2nd') || g.includes('2. gen')) {
      if (g.includes('cephamycin') || g.includes('cefamycin') || g.includes('szefamicin')) {
        return 22;
      }
      return 21;
    }
    if (g.includes('3.') || g.includes('3rd') || g.includes('3. gen')) {
      if (g.includes('orális') || g.includes('oral')) {
        return 23;
      }
      if (g.includes('pseudomonas') || g.includes('pszeudomonas')) {
        return 25;
      }
      if (g.includes('inhibitor') || g.includes('gátló') || g.includes('kombináció')) {
        return 26;
      }
      return 24; // predominantly gram-negative
    }
    if (g.includes('4.') || g.includes('4th') || g.includes('4. gen')) {
      if (g.includes('inhibitor') || g.includes('gátló') || g.includes('kombináció')) {
        return 28;
      }
      return 27;
    }
    if (g.includes('5.') || g.includes('5th') || g.includes('5. gen')) {
      if (g.includes('inhibitor') || g.includes('gátló') || g.includes('kombináció')) {
        return 30;
      }
      return 29; // anti-MRSA
    }
    if (g.includes('siderophor')) {
      return 31;
    }
    return 24; // default to 3rd gen middleweight
  }

  // 3. CARBAPENEMS (Sejtfalszintézist gátlók - Carbapenemek)
  if (g.includes('carbapenem') || g.includes('karbapenem')) {
    if (g.includes('inhibitor') || g.includes('gátló') || g.includes('kombináció') || g.includes('relebactam') || g.includes('vaborbactam')) {
      return 41;
    }
    return 40;
  }

  // 4. GLYCOPEPTIDES (Sejtfalszintézist gátlók - Glikopeptidek)
  if (g.includes('glycopeptid') || g.includes('glikopeptid')) {
    return 50;
  }

  // 5. OTHER CELL WALL SYNTHESIS INHIBITORS (Sejtfalszintézist gátló - Epoxidok)
  if (g.includes('epoxid') || g.includes('fosfomycin')) {
    return 60;
  }

  // 6. TETRACYCLINES (Fehérjeszintézist gátlók - 30S)
  if (g.includes('tetracyclin') || g.includes('tetraciklin')) {
    return 70;
  }
  if (g.includes('glicilciklin') || g.includes('glycylcyclin')) {
    return 71;
  }
  if (g.includes('fluorociklin') || g.includes('fluorocyclin')) {
    return 72;
  }

  // 7. AMINOGLYCOSIDES (Fehérjeszintézist gátlók - 30S)
  if (g.includes('aminoglikozid') || g.includes('aminoglycosid')) {
    return 80;
  }

  // 8. MACROLIDES & KETOLIDES (Fehérjeszintézist gátlók - 50S)
  if (g.includes('makrolid') || g.includes('macrolid')) {
    if (g.includes('azalid')) {
      return 91;
    }
    if (g.includes('ketolid')) {
      return 92;
    }
    return 90;
  }
  if (g.includes('ketolid')) {
    return 92;
  }

  // 9. LINCOSAMIDES (Fehérjeszintézist gátlók - 50S)
  if (g.includes('lincosamid') || g.includes('linkozamid') || g.includes('clindamycin') || g.includes('klindamicin')) {
    return 100;
  }

  // 10. OXAZOLIDINONES (Fehérjeszintézist gátlók - 50S)
  if (g.includes('oxazolidinon') || g.includes('oxazolidinonok')) {
    return 110;
  }

  // 11. MACROCYCLICS (Fehérjeszintézist gátlók - RNS polimeráz)
  if (g.includes('makrociklusos') || g.includes('macrocyclic')) {
    return 120;
  }

  // 12. FLUOROQUINOLONES (Nukleinsav-szintézist gátlók)
  if (g.includes('fluorokinolon') || g.includes('fluorchinolon') || g.includes('fluoroquinolon') || g.includes('kinolon')) {
    if (g.includes('2.') || g.includes('2nd') || g.includes('2. gen')) {
      return 130;
    }
    if (g.includes('3.') || g.includes('3rd') || g.includes('3. gen')) {
      return 131;
    }
    if (g.includes('4.') || g.includes('4th') || g.includes('4. gen')) {
      return 132;
    }
    return 130;
  }

  // 13. NITROIMIDAZOLES (Nukleinsav-szintézist gátlók / DNS degradáció)
  if (g.includes('nitroimidazol')) {
    return 140;
  }

  // 14. SULFONAMIDES & TRIMETHOPRIM (Folsavszintézist gátlók)
  if (g.includes('szulfonamid') || g.includes('sulfonamid') || g.includes('trimethoprim') || g.includes('co-trimoxazol')) {
    return 150;
  }

  // 15. NITROFURANS (Egyéb / több célpont)
  if (g.includes('nitrofurán') || g.includes('nitrofuran')) {
    return 160;
  }

  // Fallback for general non-antibiotics (e.g. antifungals, polymyxins, other classes)
  if (g.includes('gombaellenes') || g.includes('antifungal') || g.includes('azol')) {
    return 200;
  }
  if (g.includes('polymyxin') || g.includes('polimixin') || g.includes('colistin') || g.includes('koliztin')) {
    return 210;
  }

  return 999;
}

export default function PharmacologyView() {
  const { t, tg, language, antibioticsData } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [selectedAntibiotic, setSelectedAntibiotic] = useState<Antibiotic | null>(null);
  
  // Comparison state
  const [isCompareMode, setIsCompareMode] = useState(false);
  const [compareIdA, setCompareIdA] = useState<string>('');
  const [compareIdB, setCompareIdB] = useState<string>('');

  // Sorted list of antibiotics by group order weight, and then by name
  const sortedAntibiotics = useMemo(() => {
    return [...antibioticsData].sort((a, b) => {
      const weightA = getGroupOrderWeight(a.group);
      const weightB = getGroupOrderWeight(b.group);
      if (weightA !== weightB) {
        return weightA - weightB;
      }
      return a.name.localeCompare(b.name);
    });
  }, [antibioticsData]);

  // Get unique antibiotic groups in logical mechanism/generation order
  const groups = useMemo(() => {
    const allGroups = sortedAntibiotics.map(ab => ab.group);
    return ['all', ...Array.from(new Set(allGroups))];
  }, [sortedAntibiotics]);

  // Filtered antibiotics sorted logically
  const filteredAntibiotics = useMemo(() => {
    return sortedAntibiotics.filter(ab => {
      const matchesSearch = ab.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            (ab.abbreviation && ab.abbreviation.toLowerCase().includes(searchTerm.toLowerCase())) ||
                            (ab.brandNames && ab.brandNames.toLowerCase().includes(searchTerm.toLowerCase())) ||
                            ab.mechanismOfAction.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGroup = selectedGroup === 'all' || ab.group === selectedGroup;
      return matchesSearch && matchesGroup;
    });
  }, [sortedAntibiotics, searchTerm, selectedGroup]);

  const antibioticA = useMemo(() => sortedAntibiotics.find(ab => ab.id === compareIdA), [sortedAntibiotics, compareIdA]);
  const antibioticB = useMemo(() => sortedAntibiotics.find(ab => ab.id === compareIdB), [sortedAntibiotics, compareIdB]);

  const renderSpectrumRating = (score: number, labelKey: string) => {
    const label = t(labelKey);
    if (score === 2) {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
          <CheckCircle2 className="w-3.5 h-3.5" /> {label}: {t('SPECTRUM_EXCELLENT')}
        </span>
      );
    } else if (score === 1) {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
          <AlertTriangle className="w-3.5 h-3.5" /> {label}: {t('SPECTRUM_MODERATE')}
        </span>
      );
    } else {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-50 text-slate-400 border border-slate-200">
          <XCircle className="w-3.5 h-3.5" /> {label}: {t('SPECTRUM_NONE')}
        </span>
      );
    }
  };

  const getSpectrumBadge = (score: number) => {
    if (score === 2) return 'bg-emerald-500 text-white';
    if (score === 1) return 'bg-amber-400 text-slate-900';
    return 'bg-slate-200 text-slate-500';
  };

  return (
    <div id="pharmacology-view" className="space-y-6">
      {/* Header and Toggle Comparison */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight flex items-center gap-2">
            <Layers className="w-6 h-6 text-blue-600" />
            {t('PHARMA_TITLE')}
          </h2>
          <p className="text-slate-500 text-sm mt-0.5">
            {t('PHARMA_SUBTITLE')}
          </p>
        </div>
        <button
          onClick={() => {
            setIsCompareMode(!isCompareMode);
            setSelectedAntibiotic(null);
          }}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 flex items-center gap-2 border ${
            isCompareMode 
              ? 'bg-blue-50 border-blue-200 text-blue-700 shadow-sm' 
              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <ArrowLeftRight className="w-4 h-4" />
          {isCompareMode ? t('BACK_TO_BROWSE') : t('COMPARE_AB')}
        </button>
      </div>

      {isCompareMode ? (
        /* COMPARISON MODE UI */
        <div className="space-y-6">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">{t('COMPARE_A_LABEL')}</label>
              <select
                value={compareIdA}
                onChange={(e) => setCompareIdA(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-slate-700 focus:ring-2 focus:ring-blue-500 outline-none font-medium text-sm"
              >
                <option value="">{t('SELECT_AB_OPTION')}</option>
                {sortedAntibiotics.map(ab => (
                  <option key={ab.id} value={ab.id} disabled={ab.id === compareIdB}>{tg(ab.name)} ({tg(ab.group)})</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">{t('COMPARE_B_LABEL')}</label>
              <select
                value={compareIdB}
                onChange={(e) => setCompareIdB(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-slate-700 focus:ring-2 focus:ring-blue-500 outline-none font-medium text-sm"
              >
                <option value="">{t('SELECT_AB_OPTION')}</option>
                {sortedAntibiotics.map(ab => (
                  <option key={ab.id} value={ab.id} disabled={ab.id === compareIdA}>{tg(ab.name)} ({tg(ab.group)})</option>
                ))}
              </select>
            </div>
          </div>

          {antibioticA && antibioticB ? (
            <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-sm">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-4 font-semibold text-slate-700 w-1/4">{t('PROPERTY_HEADER')}</th>
                    <th className="p-4 font-bold text-blue-700 w-3/8 border-r border-slate-200 bg-blue-50/30">{tg(antibioticA.name)}</th>
                    <th className="p-4 font-bold text-blue-700 w-3/8">{tg(antibioticB.name)}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 font-semibold text-slate-500 bg-slate-50/50">{t('DRUG_GROUP')}</td>
                    <td className="p-4 text-slate-800 border-r border-slate-200 bg-blue-50/10 font-medium">{tg(antibioticA.group)}</td>
                    <td className="p-4 text-slate-800 font-medium">{tg(antibioticB.group)}</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-500 bg-slate-50/50">{t('BRAND_NAMES')}</td>
                    <td className="p-4 text-slate-600 border-r border-slate-200 italic bg-blue-50/10">
                      <TransText text={antibioticA.brandNames || t('NO_DATA')} />
                    </td>
                    <td className="p-4 text-slate-600 italic">
                      <TransText text={antibioticB.brandNames || t('NO_DATA')} />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-500 bg-slate-50/50">{t('HALF_LIFE')}</td>
                    <td className="p-4 text-slate-800 border-r border-slate-200 bg-blue-50/10 font-medium">{tg(antibioticA.halfLife)}</td>
                    <td className="p-4 text-slate-800 font-medium">{tg(antibioticB.halfLife)}</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-500 bg-slate-50/50">{t('PAE')}</td>
                    <td className="p-4 text-slate-700 border-r border-slate-200 bg-blue-50/10 text-xs">
                      <TransText text={antibioticA.pae} />
                    </td>
                    <td className="p-4 text-slate-700 text-xs">
                      <TransText text={antibioticB.pae} />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-500 bg-slate-50/50">{t('EFFECT_TYPE')}</td>
                    <td className="p-4 border-r border-slate-200 bg-blue-50/10">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${
                        antibioticA.effectType === 'bactericid'
                          ? 'bg-rose-50 text-rose-700 border-rose-200'
                          : 'bg-amber-50 text-amber-700 border-amber-200'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${antibioticA.effectType === 'bactericid' ? 'bg-rose-500' : 'bg-amber-500'}`} />
                        {antibioticA.effectType === 'bactericid' ? t('bactericid') : t('bacteriostaticus')}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${
                        antibioticB.effectType === 'bactericid'
                          ? 'bg-rose-50 text-rose-700 border-rose-200'
                          : 'bg-amber-50 text-amber-700 border-amber-200'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${antibioticB.effectType === 'bactericid' ? 'bg-rose-500' : 'bg-amber-500'}`} />
                        {antibioticB.effectType === 'bactericid' ? t('bactericid') : t('bacteriostaticus')}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-500 bg-slate-50/50">{t('MECHANISM_OF_ACTION')}</td>
                    <td className="p-4 text-slate-700 border-r border-slate-200 bg-blue-50/10 text-xs leading-relaxed">
                      <TransText text={antibioticA.mechanismOfAction} />
                    </td>
                    <td className="p-4 text-slate-700 text-xs leading-relaxed">
                      <TransText text={antibioticB.mechanismOfAction} />
                    </td>
                  </tr>
                  {/* Spectrum comparison row */}
                  <tr>
                    <td className="p-4 font-semibold text-slate-500 bg-slate-50/50">{t('SPECTRUM')}</td>
                    <td className="p-4 border-r border-slate-200 bg-blue-50/10 space-y-2">
                      <div className="grid grid-cols-2 gap-1.5">
                        {renderSpectrumRating(antibioticA.spectrum.gramPositive, "GRAM_POSITIVE")}
                        {renderSpectrumRating(antibioticA.spectrum.gramNegative, "GRAM_NEGATIVE")}
                        {renderSpectrumRating(antibioticA.spectrum.anaerobe, "ANAEROBE")}
                        {renderSpectrumRating(antibioticA.spectrum.atypical, "ATYPICAL")}
                        {renderSpectrumRating(antibioticA.spectrum.pseudomonas, "PSEUDOMONAS")}
                      </div>
                      <div className="text-xs text-slate-500 mt-2 border-t border-slate-100 pt-2">
                        <strong>{t('SPECIAL_CHARACTERISTIC')}:</strong> <TransText text={antibioticA.spectrum.other} />
                      </div>
                    </td>
                    <td className="p-4 space-y-2">
                      <div className="grid grid-cols-2 gap-1.5">
                        {renderSpectrumRating(antibioticB.spectrum.gramPositive, "GRAM_POSITIVE")}
                        {renderSpectrumRating(antibioticB.spectrum.gramNegative, "GRAM_NEGATIVE")}
                        {renderSpectrumRating(antibioticB.spectrum.anaerobe, "ANAEROBE")}
                        {renderSpectrumRating(antibioticB.spectrum.atypical, "ATYPICAL")}
                        {renderSpectrumRating(antibioticB.spectrum.pseudomonas, "PSEUDOMONAS")}
                      </div>
                      <div className="text-xs text-slate-500 mt-2 border-t border-slate-100 pt-2">
                        <strong>{t('SPECIAL_CHARACTERISTIC')}:</strong> <TransText text={antibioticB.spectrum.other} />
                      </div>
                    </td>
                  </tr>
                  {/* Dosing Row */}
                  <tr>
                    <td className="p-4 font-semibold text-slate-500 bg-slate-50/50">{t('DOSING_ADULT')}</td>
                    <td className="p-4 text-slate-800 border-r border-slate-200 bg-blue-50/10 font-medium text-xs leading-relaxed">
                      <TransText text={antibioticA.dosage.adult} />
                    </td>
                    <td className="p-4 text-slate-800 font-medium text-xs leading-relaxed">
                      <TransText text={antibioticB.dosage.adult} />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-500 bg-slate-50/50">{t('DOSING_RENAL')}</td>
                    <td className="p-4 text-amber-800 border-r border-slate-200 bg-blue-50/10 text-xs leading-relaxed">
                      <TransText text={antibioticA.dosage.renalAdjustment || t('NO_ADJUSTMENT_REQUIRED')} />
                    </td>
                    <td className="p-4 text-amber-800 text-xs leading-relaxed">
                      <TransText text={antibioticB.dosage.renalAdjustment || t('NO_ADJUSTMENT_REQUIRED')} />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-500 bg-slate-50/50">{t('SIDE_EFFECTS')}</td>
                    <td className="p-4 border-r border-slate-200 bg-blue-50/10">
                      <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
                        {antibioticA.sideEffects.map((se, i) => <li key={i}><TransText text={se} /></li>)}
                      </ul>
                    </td>
                    <td className="p-4">
                      <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
                        {antibioticB.sideEffects.map((se, i) => <li key={i}><TransText text={se} /></li>)}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12 border border-dashed border-slate-200 bg-white rounded-xl text-slate-400">
              <ArrowLeftRight className="w-12 h-12 mx-auto text-slate-300 mb-2" />
              <p>{t('COMPARE_CHOOSE_PROMPT')}</p>
            </div>
          )}
        </div>
      ) : (
        /* BROWSE MODE UI */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left list and search panel - 5 cols */}
          <div className="lg:col-span-5 space-y-4">
            {/* Search & Filter */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4.5 w-4.5 text-slate-400" />
                <input
                  type="text"
                  placeholder={t('SEARCH_PLACEHOLDER')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 pl-10 pr-4 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">{t('GROUP_FILTER')}</label>
                <select
                  value={selectedGroup}
                  onChange={(e) => setSelectedGroup(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                >
                  {groups.map(group => (
                    <option key={group} value={group}>
                      {group === 'all' ? t('ALL_GROUPS') : tg(group)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Antibiotics List */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden max-h-[580px] overflow-y-auto divide-y divide-slate-100">
              {filteredAntibiotics.length > 0 ? (
                filteredAntibiotics.map((ab) => (
                  <button
                    key={ab.id}
                    onClick={() => setSelectedAntibiotic(ab)}
                    className={`w-full text-left p-4 transition-all duration-150 block hover:bg-slate-50 ${
                      selectedAntibiotic?.id === ab.id ? 'bg-blue-50/50 border-r-4 border-blue-600' : ''
                    }`}
                  >
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-bold text-slate-800 text-sm flex flex-wrap items-center gap-1.5">
                        {tg(ab.name)}
                        {ab.abbreviation && (
                          <span className="inline-block bg-blue-50 text-blue-600 font-mono text-[10px] px-1.5 py-0.5 rounded border border-blue-100 uppercase font-semibold">
                            {ab.abbreviation}
                          </span>
                        )}
                      </h4>
                      <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium shrink-0">
                        {tg(ab.group)}
                      </span>
                    </div>
                    {ab.brandNames && (
                      <p className="text-xs text-slate-400 italic mt-0.5 truncate">HU: {ab.brandNames}</p>
                    )}
                    {/* Micro spectrum preview bar */}
                    <div className="flex gap-1 mt-2.5">
                      <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden flex">
                        <div className={`h-full ${getSpectrumBadge(ab.spectrum.gramPositive)}`} style={{ width: '20%' }} title={t('GRAM_POSITIVE')} />
                        <div className={`h-full ${getSpectrumBadge(ab.spectrum.gramNegative)}`} style={{ width: '20%' }} title={t('GRAM_NEGATIVE')} />
                        <div className={`h-full ${getSpectrumBadge(ab.spectrum.anaerobe)}`} style={{ width: '20%' }} title={t('ANAEROBE')} />
                        <div className={`h-full ${getSpectrumBadge(ab.spectrum.atypical)}`} style={{ width: '20%' }} title={t('ATYPICAL')} />
                        <div className={`h-full ${getSpectrumBadge(ab.spectrum.pseudomonas)}`} style={{ width: '20%' }} title={t('PSEUDOMONAS')} />
                      </div>
                    </div>
                  </button>
                ))
              ) : (
                <div className="p-8 text-center text-slate-400 text-sm">
                  {t('NO_ANTIBIOTICS_FOUND')}
                </div>
              )}
            </div>
          </div>

          {/* Right Details Panel - 7 cols */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {selectedAntibiotic ? (
                <motion.div
                  key={selectedAntibiotic.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                  className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden"
                >
                  {/* Panel Header */}
                  <div className="bg-slate-900 border-b border-slate-800 p-6 text-white">
                    <div className="flex flex-wrap justify-between items-start gap-4">
                      <div>
                        <span className="text-xs bg-blue-500/20 text-blue-300 px-2.5 py-0.5 rounded-full font-bold border border-blue-500/30">
                          {tg(selectedAntibiotic.group)}
                        </span>
                        <h3 className="text-2xl font-bold mt-2 tracking-tight flex items-center gap-2.5 flex-wrap">
                          {tg(selectedAntibiotic.name)}
                          {selectedAntibiotic.abbreviation && (
                            <span className="bg-blue-500/10 text-blue-300 font-mono text-base px-2.5 py-0.5 rounded border border-blue-500/25 uppercase font-semibold">
                              {selectedAntibiotic.abbreviation}
                            </span>
                          )}
                        </h3>
                        {selectedAntibiotic.brandNames && (
                          <p className="text-xs text-slate-400 italic mt-1">{t('BRAND_NAMES')}: <TransText text={selectedAntibiotic.brandNames} /></p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Panel Body */}
                  <div className="p-6 space-y-6">
                    {/* Pharmacokinetics block */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">{t('HALF_LIFE')} (T1/2)</span>
                        <span className="text-sm font-semibold text-slate-700 block mt-1">{tg(selectedAntibiotic.halfLife)}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">{t('PAE')}</span>
                        <span className="text-sm font-semibold text-slate-700 block mt-1 leading-relaxed">
                          <TransText text={selectedAntibiotic.pae} />
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">{t('EFFECT_TYPE')}</span>
                        <span className="block mt-1">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${
                            selectedAntibiotic.effectType === 'bactericid'
                              ? 'bg-rose-50 text-rose-700 border-rose-200'
                              : 'bg-amber-50 text-amber-700 border-amber-200'
                          }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${selectedAntibiotic.effectType === 'bactericid' ? 'bg-rose-500' : 'bg-amber-500'}`} />
                            {selectedAntibiotic.effectType === 'bactericid' ? t('bactericid') : t('bacteriostaticus')}
                          </span>
                        </span>
                      </div>
                    </div>

                    {/* Spectrum grid */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                        <Activity className="w-4 h-4 text-blue-600" />
                        {t('SPECTRUM_TITLE')}
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 pt-1">
                        <div className="p-3 border border-slate-100 rounded-lg text-center bg-slate-50/50">
                          <span className="text-[10px] font-semibold text-slate-400 block mb-1">{t('GRAM_POSITIVE')}</span>
                          <div className="flex justify-center">{renderSpectrumRating(selectedAntibiotic.spectrum.gramPositive, "G+")}</div>
                        </div>
                        <div className="p-3 border border-slate-100 rounded-lg text-center bg-slate-50/50">
                          <span className="text-[10px] font-semibold text-slate-400 block mb-1">{t('GRAM_NEGATIVE')}</span>
                          <div className="flex justify-center">{renderSpectrumRating(selectedAntibiotic.spectrum.gramNegative, "G-")}</div>
                        </div>
                        <div className="p-3 border border-slate-100 rounded-lg text-center bg-slate-50/50">
                          <span className="text-[10px] font-semibold text-slate-400 block mb-1">{t('ANAEROBE')}</span>
                          <div className="flex justify-center">{renderSpectrumRating(selectedAntibiotic.spectrum.anaerobe, "Anaerob")}</div>
                        </div>
                        <div className="p-3 border border-slate-100 rounded-lg text-center bg-slate-50/50">
                          <span className="text-[10px] font-semibold text-slate-400 block mb-1">{t('ATYPICAL')}</span>
                          <div className="flex justify-center">{renderSpectrumRating(selectedAntibiotic.spectrum.atypical, "Atípusos")}</div>
                        </div>
                        <div className="p-3 border border-slate-100 rounded-lg text-center bg-slate-50/50 col-span-2 sm:col-span-1">
                          <span className="text-[10px] font-semibold text-slate-400 block mb-1">{t('PSEUDOMONAS')}</span>
                          <div className="flex justify-center">{renderSpectrumRating(selectedAntibiotic.spectrum.pseudomonas, "Pseudomonas")}</div>
                        </div>
                      </div>
                      <div className="bg-blue-50/30 p-3 rounded-lg border border-blue-100/50 text-xs text-slate-600 mt-2">
                        <strong>{t('SPECIAL_CHARACTERISTIC')}:</strong> <TransText text={selectedAntibiotic.spectrum.other} />
                      </div>
                    </div>

                    {/* Mechanism of Action */}
                    <div className="space-y-1.5">
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t('MECHANISM_OF_ACTION')}</h4>
                      <p className="text-sm text-slate-700 leading-relaxed font-normal bg-slate-50 p-3.5 rounded-lg border border-slate-100">
                        <TransText text={selectedAntibiotic.mechanismOfAction} />
                      </p>
                    </div>

                    {/* Dosing Details */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t('DOSING_GUIDELINES')}</h4>
                      <div className="border border-slate-200 rounded-xl divide-y divide-slate-100 overflow-hidden">
                        <div className="p-4 grid grid-cols-1 sm:grid-cols-12 gap-2">
                          <span className="text-xs font-bold text-slate-500 sm:col-span-3">{t('DOSING_ADULT')}</span>
                          <span className="text-xs font-semibold text-slate-700 sm:col-span-9">
                            <TransText text={selectedAntibiotic.dosage.adult} />
                          </span>
                        </div>
                        {selectedAntibiotic.dosage.pediatric && (
                          <div className="p-4 grid grid-cols-1 sm:grid-cols-12 gap-2">
                            <span className="text-xs font-bold text-slate-500 sm:col-span-3">{t('DOSING_PEDIATRIC')}</span>
                            <span className="text-xs text-slate-700 sm:col-span-9">
                              <TransText text={selectedAntibiotic.dosage.pediatric} />
                            </span>
                          </div>
                        )}
                        <div className="p-4 grid grid-cols-1 sm:grid-cols-12 gap-2 bg-amber-50/30">
                          <span className="text-xs font-bold text-amber-700 sm:col-span-3">{t('DOSING_RENAL_FILTER')}</span>
                          <span className="text-xs text-amber-800 font-medium sm:col-span-9">
                            <TransText text={selectedAntibiotic.dosage.renalAdjustment || t('NO_RENAL_ADJUSTMENT_EXPLAIN')} />
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Side effects & Indications */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Indications */}
                      <div className="space-y-2 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                        <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          {t('INDICATIONS_TITLE')}
                        </h4>
                        <ul className="list-disc list-inside text-xs text-slate-600 space-y-1.5 pl-1.5">
                          {selectedAntibiotic.indications.map((ind, i) => (
                            <li key={i} className="leading-relaxed">
                              <TransText text={ind} />
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Side effects */}
                      <div className="space-y-2 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                        <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1">
                          <AlertTriangle className="w-4 h-4 text-amber-500" />
                          {t('SIDE_EFFECTS_TITLE')}
                        </h4>
                        <ul className="list-disc list-inside text-xs text-slate-600 space-y-1.5 pl-1.5">
                          {selectedAntibiotic.sideEffects.map((se, i) => (
                            <li key={i} className="leading-relaxed text-red-700/80">
                              <TransText text={se} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom notes if any */}
                    {selectedAntibiotic.notes && (
                      <div className="p-4 bg-slate-50 border-l-4 border-slate-400 rounded-r-lg text-xs text-slate-500 leading-relaxed font-normal">
                        <strong>{t('PRACTICAL_ADVICE')}:</strong> <TransText text={selectedAntibiotic.notes} />
                      </div>
                    )}
                  </div>
                </motion.div>
              ) : (
                <div className="bg-slate-50 border border-dashed border-slate-200 rounded-xl py-24 text-center text-slate-400 h-full flex flex-col justify-center items-center">
                  <Info className="w-12 h-12 text-slate-300 mb-2" />
                  <p className="font-medium">{t('PHARMA_CHOOSE_PROMPT')}</p>
                  <p className="text-xs text-slate-400 mt-1 max-w-sm">
                    {t('PHARMA_CHOOSE_PROMPT_DESC')}
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
}
