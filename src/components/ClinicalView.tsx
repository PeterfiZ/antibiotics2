/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { ClinicalInfection } from '../types';
import { Search, Folder, Stethoscope, AlertOctagon, Heart, CheckCircle2, ShieldAlert, FileText, ClipboardList } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage, TransText } from '../lib/LanguageContext';

export default function ClinicalView() {
  const { t, tg, language, clinicalInfectionsData } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedInfection, setSelectedInfection] = useState<ClinicalInfection | null>(null);

  const categories = [
    { id: 'all', labelKey: 'CLINICAL_ALL_INFECTIONS' },
    { id: 'respiratory', labelKey: 'CLINICAL_RESPIRATORY_INFECTIONS' },
    { id: 'urinary', labelKey: 'CLINICAL_URINARY_INFECTIONS' },
    { id: 'cns', labelKey: 'CLINICAL_CNS_INFECTIONS' },
    { id: 'sepsis', labelKey: 'CLINICAL_SEPSIS_INFECTIONS' },
    { id: 'abdominal', labelKey: 'CLINICAL_ABDOMINAL_INFECTIONS' },
    { id: 'sst_bone', labelKey: 'CLINICAL_SST_BONE_INFECTIONS' }
  ];

  const filteredInfections = useMemo(() => {
    return clinicalInfectionsData.filter(inf => {
      const matchesSearch = inf.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            inf.diagnosticsNotes.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            inf.guidelines.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || inf.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'respiratory': return t('CAT_RESPIRATORY');
      case 'urinary': return t('CAT_URINARY');
      case 'cns': return t('CAT_CNS');
      case 'sepsis': return t('CAT_SEPSIS');
      case 'abdominal': return t('CAT_ABDOMINAL');
      case 'sst_bone': return t('CAT_SST_BONE');
      default: return t('CAT_OTHER');
    }
  };

  const getFrequencyBadgeColor = (freq: string) => {
    switch (freq) {
      case 'very-common': return 'bg-red-50 text-red-700 border-red-200';
      case 'common': return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'rare': return 'bg-amber-50 text-amber-600 border-amber-200';
      default: return 'bg-slate-50 text-slate-600 border-slate-200';
    }
  };

  const getFrequencyLabel = (freq: string) => {
    switch (freq) {
      case 'very-common': return t('FREQ_VERY_COMMON');
      case 'common': return t('FREQ_COMMON');
      case 'rare': return t('FREQ_RARE');
      default: return t('FREQ_UNKNOWN');
    }
  };

  return (
    <div id="clinical-view" className="space-y-6">
      {/* View Header */}
      <div className="border-b border-slate-100 pb-4">
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight flex items-center gap-2">
          <Stethoscope className="w-6 h-6 text-blue-600" />
          {t('CLINICAL_TITLE')}
        </h2>
        <p className="text-slate-500 text-sm mt-0.5">
          {t('CLINICAL_SUBTITLE')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side: Filter and List - 4 cols */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4.5 w-4.5 text-slate-400" />
              <input
                type="text"
                placeholder={t('SEARCH_INFECTIONS_PLACEHOLDER')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 pl-10 pr-4 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm"
              />
            </div>

            {/* Category Buttons */}
            <div className="space-y-1">
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">{t('CATEGORIES_LABEL')}</span>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex justify-between items-center transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span>{t(cat.labelKey)}</span>
                  {selectedCategory === cat.id && <Folder className="w-3.5 h-3.5" />}
                </button>
              ))}
            </div>
          </div>

          {/* Infections List */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100 max-h-[420px] overflow-y-auto">
            {filteredInfections.length > 0 ? (
              filteredInfections.map((inf) => (
                <button
                  key={inf.id}
                  onClick={() => setSelectedInfection(inf)}
                  className={`w-full text-left p-4 transition-all duration-150 hover:bg-slate-50 block ${
                    selectedInfection?.id === inf.id ? 'bg-blue-50/50 border-r-4 border-blue-600' : ''
                  }`}
                >
                  <span className="text-[10px] uppercase font-bold text-blue-600 tracking-wider">
                    {getCategoryLabel(inf.category)}
                  </span>
                  <h4 className="font-bold text-slate-800 text-sm mt-0.5">{tg(inf.name)}</h4>
                  <p className="text-xs text-slate-400 line-clamp-1 mt-1">
                    <TransText text={inf.guidelines} />
                  </p>
                </button>
              ))
            ) : (
              <div className="p-8 text-center text-slate-400 text-sm">
                {t('NO_INFECTIONS_FOUND')}
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Detailed Guideline Sheet - 8 cols */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            {selectedInfection ? (
              <motion.div
                key={selectedInfection.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
                className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden space-y-6"
              >
                {/* Header Sheet */}
                <div className="bg-slate-900 p-6 text-white border-b border-slate-800">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs bg-blue-500/20 text-blue-300 px-2.5 py-0.5 rounded-full font-bold border border-blue-500/30 uppercase tracking-wide">
                        {getCategoryLabel(selectedInfection.category)} {t('INFECTIONS')}
                      </span>
                      <h3 className="text-2xl font-bold mt-2 tracking-tight">{tg(selectedInfection.name)}</h3>
                      <p className="text-xs text-slate-300 mt-1 flex items-center gap-1.5">
                        <FileText className="w-4 h-4 text-slate-400" />
                        <strong>{t('GUIDELINE_LABEL')}:</strong> <TransText text={selectedInfection.guidelines} />
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 space-y-6">
                  {/* Diagnostics Notes Card */}
                  <div className="bg-amber-50/50 border border-amber-200/60 p-4 rounded-xl space-y-2">
                    <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
                      <AlertOctagon className="w-4 h-4 text-amber-600" />
                      {t('DIAGNOSTICS_TITLE')}
                    </h4>
                    <p className="text-xs text-amber-900 leading-relaxed font-normal">
                      <TransText text={selectedInfection.diagnosticsNotes} />
                    </p>
                  </div>

                  {/* Pathogens list - grid horizontal */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                      <Heart className="w-4 h-4 text-red-500" />
                      {t('MOST_COMMON_PATHOGENS')}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedInfection.pathogens.map((pathogen, idx) => (
                        <div key={idx} className="p-3 border border-slate-100 rounded-lg flex gap-3 bg-slate-50/50">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold border shrink-0 h-fit self-start ${getFrequencyBadgeColor(pathogen.frequency)}`}>
                            {getFrequencyLabel(pathogen.frequency)}
                          </span>
                          <div className="space-y-0.5">
                            <span className="text-sm font-bold text-slate-800 italic block">{tg(pathogen.name)}</span>
                            {pathogen.notes && (
                              <span className="text-xs text-slate-500 block leading-relaxed">
                                <TransText text={pathogen.notes} />
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Empirical Regimens Section */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                      <ClipboardList className="w-4 h-4 text-blue-600" />
                      {t('EMPIRICAL_REGIMENS')}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Mild regimen */}
                      <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-slate-50/20">
                        <div className="bg-blue-700/5 p-4 border-b border-slate-200/60">
                          <h5 className="font-bold text-blue-800 text-sm">{t('MILD_TREATMENT_TITLE')}</h5>
                          <span className="text-[10px] text-slate-500 font-medium mt-0.5 block">{t('MILD_TREATMENT_DESC')}</span>
                        </div>
                        <div className="p-4 space-y-3">
                          <div className="space-y-0.5">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">{t('FIRST_LINE')}</span>
                            <span className="text-xs text-slate-800 font-bold leading-relaxed block">
                              <TransText text={selectedInfection.empirical.mild.firstLine} />
                            </span>
                          </div>
                          <div className="space-y-0.5 border-t border-slate-100 pt-2.5">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">{t('ALTERNATIVE_OPTION')}</span>
                            <span className="text-xs text-slate-700 font-medium leading-relaxed block">
                              <TransText text={selectedInfection.empirical.mild.alternative} />
                            </span>
                          </div>
                          <div className="border-t border-slate-100 pt-2.5">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">{t('DURATION_OF_TREATMENT')}</span>
                            <span className="text-xs text-slate-700 font-semibold block">
                              <TransText text={selectedInfection.empirical.mild.duration} />
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Severe regimen */}
                      <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-slate-50/20">
                        <div className="bg-red-700/5 p-4 border-b border-slate-200/60">
                          <h5 className="font-bold text-red-800 text-sm">{t('SEVERE_TREATMENT_TITLE')}</h5>
                          <span className="text-[10px] text-slate-500 font-medium mt-0.5 block">{t('SEVERE_TREATMENT_DESC')}</span>
                        </div>
                        <div className="p-4 space-y-3">
                          <div className="space-y-0.5">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">{t('FIRST_LINE_IV')}</span>
                            <span className="text-xs text-slate-800 font-bold leading-relaxed block">
                              <TransText text={selectedInfection.empirical.severe.firstLine} />
                            </span>
                          </div>
                          <div className="space-y-0.5 border-t border-slate-100 pt-2.5">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">{t('ALTERNATIVE_OPTION')}</span>
                            <span className="text-xs text-slate-700 font-medium leading-relaxed block">
                              <TransText text={selectedInfection.empirical.severe.alternative} />
                            </span>
                          </div>
                          <div className="border-t border-slate-100 pt-2.5">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">{t('DURATION_OF_TREATMENT')}</span>
                            <span className="text-xs text-slate-700 font-semibold block">
                              <TransText text={selectedInfection.empirical.severe.duration} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Targeted Therapy guidelines */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                      <ShieldAlert className="w-4 h-4 text-emerald-600" />
                      {t('TARGETED_THERAPY_TITLE')}
                    </h4>
                    <div className="border border-slate-200 rounded-xl divide-y divide-slate-100 overflow-hidden shadow-sm bg-slate-50/10">
                      {selectedInfection.targeted.map((target, idx) => (
                        <div key={idx} className="p-4 grid grid-cols-1 md:grid-cols-12 gap-3 hover:bg-slate-50/50">
                          <div className="md:col-span-5 font-bold text-xs text-slate-700 bg-slate-100/60 p-2 rounded border border-slate-200/50 h-fit">
                            🔍 {t('IF_CONFIRMED')}: <span className="text-blue-700 italic block mt-0.5">{tg(target.condition)}</span>
                          </div>
                          <div className="md:col-span-7 flex gap-2 items-start text-xs text-slate-800">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <div className="space-y-1">
                              <strong>{t('RECOMMENDED_TARGETED_THERAPY')}:</strong>
                              <p className="leading-relaxed font-medium text-slate-700">
                                <TransText text={target.treatment} />
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="bg-slate-50 border border-dashed border-slate-200 rounded-xl py-24 text-center text-slate-400 h-full flex flex-col justify-center items-center">
                <Stethoscope className="w-12 h-12 text-slate-300 mb-2" />
                <p className="font-medium">{t('CLINICAL_CHOOSE_PROMPT')}</p>
                <p className="text-xs text-slate-400 mt-1 max-w-sm">
                  {t('CLINICAL_CHOOSE_PROMPT_DESC')}
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
