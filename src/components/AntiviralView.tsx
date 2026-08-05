/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { antiviralsData, AntiviralData } from '../data/antivirals';
import { useLanguage } from '../lib/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Bookmark,
  Clock,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  Info,
  ChevronDown,
  ChevronUp,
  Zap,
  Filter,
  Activity,
  FileText,
  UserCheck,
  Baby,
  Shield,
  ShieldAlert,
  Stethoscope,
  AlertCircle,
  HelpCircle,
  Pill
} from 'lucide-react';

export default function AntiviralView() {
  const { language, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(antiviralsData[0]?.id || null);
  const [activeTabMap, setActiveTabMap] = useState<Record<string, 'basic' | 'indications' | 'dosage' | 'safety'>>({});
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('bookmarked_antivirals');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedIds((prev) => {
      const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('bookmarked_antivirals', JSON.stringify(updated));
      } catch (err) {
        console.error('Failed to save bookmarks', err);
      }
      return updated;
    });
  };

  // Group definitions for filtering
  const groups = useMemo(() => {
    const list = [
      { id: 'all', label: { hu: 'Összes szer', en: 'All agents', de: 'Alle Wirkstoffe' } },
      { id: 'herpes', label: { hu: 'Herpes & CMV', en: 'Herpes & CMV', de: 'Herpes & CMV' } },
      { id: 'respiratory', label: { hu: 'Légúti & COVID', en: 'Respiratory & COVID', de: 'Atemwege & COVID' } },
      { id: 'hepatitis', label: { hu: 'Hepatitis (HBV/HCV)', en: 'Hepatitis (HBV/HCV)', de: 'Hepatitis (HBV/HCV)' } },
      { id: 'hiv', label: { hu: 'HIV / Retrovírus', en: 'HIV / Retrovirus', de: 'HIV / Retrovirus' } },
      { id: 'bookmarks', label: { hu: 'Könyvjelzők', en: 'Bookmarks', de: 'Lesezeichen' } }
    ];
    return list;
  }, []);

  const filteredData = useMemo(() => {
    return antiviralsData.filter((item) => {
      const lang = language as 'hu' | 'en' | 'de';
      const term = searchTerm.toLowerCase().trim();

      // Search matching
      const matchesSearch =
        !term ||
        item.name.toLowerCase().includes(term) ||
        item.group[lang].toLowerCase().includes(term) ||
        item.targetViruses[lang].toLowerCase().includes(term) ||
        item.mechanismOfAction[lang].toLowerCase().includes(term) ||
        item.indications[lang].some((ind) => ind.toLowerCase().includes(term)) ||
        item.sideEffects[lang].some((se) => se.toLowerCase().includes(term));

      if (!matchesSearch) return false;

      // Group matching
      if (selectedGroup === 'all') return true;
      if (selectedGroup === 'bookmarks') return bookmarkedIds.includes(item.id);
      if (selectedGroup === 'herpes') return item.id.includes('aciclovir') || item.id.includes('ganciclovir') || item.id.includes('letermovir') || item.group.en.toLowerCase().includes('herpes') || item.group.en.toLowerCase().includes('cmv');
      if (selectedGroup === 'respiratory') return item.id.includes('oseltamivir') || item.id.includes('remdesivir') || item.id.includes('paxlovid') || item.id.includes('baloxavir') || item.group.hu.toLowerCase().includes('influenza') || item.group.en.toLowerCase().includes('influenza') || item.group.hu.toLowerCase().includes('légúti');
      if (selectedGroup === 'hepatitis') return item.id.includes('tenofovir') || item.id.includes('sofosbuvir') || item.group.hu.toLowerCase().includes('hepatitis') || item.group.en.toLowerCase().includes('hepatitis');
      if (selectedGroup === 'hiv') return item.id.includes('biktarvy') || item.id.includes('tenofovir') || item.id.includes('abacavir') || item.id.includes('darunavir') || item.id.includes('doravirine') || item.id.includes('cabotegravir') || item.id.includes('hiv') || item.group.hu.toLowerCase().includes('hiv') || item.group.en.toLowerCase().includes('hiv');

      return true;
    });
  }, [searchTerm, selectedGroup, language, bookmarkedIds]);

  const lang = (language as 'hu' | 'en' | 'de') || 'hu';

  const getSubTab = (id: string) => activeTabMap[id] || 'basic';
  const setSubTab = (id: string, tab: 'basic' | 'indications' | 'dosage' | 'safety') => {
    setActiveTabMap((prev) => ({ ...prev, [id]: tab }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-cyan-900 via-slate-900 to-teal-900 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden border border-cyan-800/40">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-semibold backdrop-blur-md">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>{lang === 'hu' ? 'Klinikai Farmakológia' : lang === 'de' ? 'Klinische Pharmakologie' : 'Clinical Pharmacology'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              {lang === 'hu' ? 'Antivirális Szerek' : lang === 'de' ? 'Antivirale Wirkstoffe' : 'Antiviral Agents'}
            </h1>
            <p className="text-cyan-100/80 text-sm max-w-2xl leading-relaxed">
              {lang === 'hu'
                ? 'Részletes farmakológiai és klinikai útmutató a legfontosabb antivirális szerek hatásmechanizmusáról, adagolásáról, felezési idejéről és speciális betegcsoportok (vese, máj, gyermek, profilaxis) kezeléséről.'
                : lang === 'de'
                ? 'Ausführlicher klinischer Leitfaden zu Wirkungsweise, Dosierung, Halbwertszeiten und Besonderheiten wichtiger Antiviralia.'
                : 'Comprehensive clinical reference for mechanism of action, dosing, half-life, and special population management of key antiviral agents.'}
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10 self-start md:self-auto shrink-0">
            <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-300">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-cyan-200/80 font-medium">
                {lang === 'hu' ? 'Regisztrált molekulák' : lang === 'de' ? 'Registrierte Moleküle' : 'Registered Agents'}
              </div>
              <div className="text-xl font-bold text-white">{antiviralsData.length} {lang === 'hu' ? 'szer' : 'agents'}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls: Search and Filter Chips */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={
                lang === 'hu'
                  ? 'Keresés név, vírus, indikáció, hatás alapján...'
                  : lang === 'de'
                  ? 'Suche nach Name, Virus, Indikation...'
                  : 'Search by name, virus, indication...'
              }
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 bg-slate-200 px-1.5 py-0.5 rounded"
              >
                ✕
              </button>
            )}
          </div>

          <div className="text-xs text-slate-500 font-medium self-end sm:self-auto">
            {lang === 'hu' ? 'Találatok:' : lang === 'de' ? 'Ergebnisse:' : 'Results:'}{' '}
            <span className="font-bold text-cyan-700">{filteredData.length}</span> / {antiviralsData.length}
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
          <Filter className="w-4 h-4 text-slate-400 shrink-0 mr-1" />
          {groups.map((g) => {
            const isActive = selectedGroup === g.id;
            return (
              <button
                key={g.id}
                onClick={() => setSelectedGroup(g.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-cyan-700 text-white shadow-sm ring-2 ring-cyan-700/20'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {g.id === 'bookmarks' && <Bookmark className={`w-3.5 h-3.5 ${isActive ? 'fill-white' : 'text-slate-400'}`} />}
                <span>{g.label[lang]}</span>
                {g.id === 'bookmarks' && bookmarkedIds.length > 0 && (
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${isActive ? 'bg-cyan-900 text-cyan-200' : 'bg-slate-200 text-slate-700'}`}>
                    {bookmarkedIds.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main List */}
      {filteredData.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200/80 shadow-xs">
          <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-700 mb-1">
            {lang === 'hu' ? 'Nincs találat' : lang === 'de' ? 'Keine Ergebnisse' : 'No results found'}
          </h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            {lang === 'hu'
              ? 'Próbáld meg megváltoztatni a keresési kifejezést vagy töröld a szűrőket!'
              : lang === 'de'
              ? 'Bitte Suchbegriff anpassen oder Filter zurücksetzen.'
              : 'Try adjusting your search terms or clearing the group filter.'}
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedGroup('all');
            }}
            className="mt-4 px-4 py-2 bg-cyan-50 hover:bg-cyan-100 text-cyan-700 font-semibold text-xs rounded-xl transition-colors"
          >
            {lang === 'hu' ? 'Szűrők alaphelyzetbe' : lang === 'de' ? 'Filter zurücksetzen' : 'Reset filters'}
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredData.map((item) => {
            const isExpanded = expandedId === item.id;
            const isBookmarked = bookmarkedIds.includes(item.id);
            const activeSubTab = getSubTab(item.id);

            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'border-cyan-500/50 shadow-md ring-1 ring-cyan-500/20'
                    : 'border-slate-200/80 hover:border-slate-300 shadow-xs'
                }`}
              >
                {/* Header Row */}
                <div
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  className="p-4 sm:p-5 cursor-pointer hover:bg-slate-50/70 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-3.5">
                    <div className={`p-3 rounded-2xl shrink-0 mt-0.5 ${isExpanded ? 'bg-cyan-600 text-white shadow-sm' : 'bg-cyan-50 text-cyan-700'}`}>
                      <Pill className="w-5 h-5" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="text-lg font-extrabold text-slate-900 tracking-tight">{item.name}</h2>
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200/80 text-slate-600 text-[11px] font-semibold">
                          {item.group[lang]}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 font-medium flex items-center gap-1.5">
                        <span className="text-cyan-700 font-bold">{lang === 'hu' ? 'Célvírusok:' : lang === 'de' ? 'Zielviren:' : 'Target Viruses:'}</span>
                        <span>{item.targetViruses[lang]}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end md:self-auto shrink-0">
                    <button
                      onClick={(e) => toggleBookmark(item.id, e)}
                      title={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
                      className={`p-2 rounded-xl border transition-colors ${
                        isBookmarked
                          ? 'bg-amber-50 border-amber-200 text-amber-600 hover:bg-amber-100'
                          : 'bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500' : ''}`} />
                    </button>

                    <button
                      className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1 transition-colors ${
                        isExpanded ? 'bg-cyan-50 border-cyan-200 text-cyan-700' : 'bg-slate-50 border-slate-200 text-slate-600'
                      }`}
                    >
                      <span>{isExpanded ? (lang === 'hu' ? 'Összecsukás' : lang === 'de' ? 'Einklappen' : 'Collapse') : (lang === 'hu' ? 'Részletek' : lang === 'de' ? 'Details' : 'Details')}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Quick Key Specs Bar (always visible) */}
                <div className="px-4 sm:px-5 py-3 bg-slate-50/80 border-t border-b border-slate-100 text-xs text-slate-600 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="flex items-start gap-2">
                    <Clock className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                    <div className="leading-relaxed break-words">
                      <strong className="text-slate-800">{lang === 'hu' ? 'Felezési idő:' : lang === 'de' ? 'Halbwertszeit:' : 'Half-life:'}</strong>{' '}
                      {item.halfLife[lang]}
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <div className="leading-relaxed break-words">
                      <strong className="text-slate-800">{lang === 'hu' ? 'Hatás típusa:' : lang === 'de' ? 'Wirktyp:' : 'Effect type:'}</strong>{' '}
                      {item.effectType[lang]}
                    </div>
                  </div>
                  <div className="flex items-start gap-2 md:col-span-1">
                    <Sparkles className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <div className="leading-relaxed break-words">
                      <strong className="text-slate-800">{lang === 'hu' ? 'Sajátosság:' : lang === 'de' ? 'Besonderheit:' : 'Feature:'}</strong>{' '}
                      {item.specialFeature[lang]}
                    </div>
                  </div>
                </div>

                {/* Expanded Detail Panel */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="p-4 sm:p-6 border-t border-slate-100 space-y-5"
                    >
                      {/* Inner Navigation Tabs */}
                      <div className="flex items-center gap-1.5 border-b border-slate-200 pb-2 overflow-x-auto no-scrollbar">
                        <button
                          onClick={() => setSubTab(item.id, 'basic')}
                          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                            activeSubTab === 'basic'
                              ? 'bg-cyan-700 text-white shadow-xs'
                              : 'text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          <Info className="w-3.5 h-3.5" />
                          <span>{lang === 'hu' ? 'Alapok & Hatásmechanizmus' : lang === 'de' ? 'Grundlagen & Mechanismus' : 'Basics & Mechanism'}</span>
                        </button>

                        <button
                          onClick={() => setSubTab(item.id, 'indications')}
                          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                            activeSubTab === 'indications'
                              ? 'bg-cyan-700 text-white shadow-xs'
                              : 'text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          <Stethoscope className="w-3.5 h-3.5" />
                          <span>{lang === 'hu' ? 'Főbb Javallatok' : lang === 'de' ? 'Indikationen' : 'Indications'}</span>
                        </button>

                        <button
                          onClick={() => setSubTab(item.id, 'dosage')}
                          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                            activeSubTab === 'dosage'
                              ? 'bg-cyan-700 text-white shadow-xs'
                              : 'text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          <Pill className="w-3.5 h-3.5" />
                          <span>{lang === 'hu' ? 'Adagolás (Vese/Máj/Gyermek)' : lang === 'de' ? 'Dosierung (Niere/Leber/Kinder)' : 'Dosage (Renal/Hep/Peds)'}</span>
                        </button>

                        <button
                          onClick={() => setSubTab(item.id, 'safety')}
                          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                            activeSubTab === 'safety'
                              ? 'bg-cyan-700 text-white shadow-xs'
                              : 'text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          <AlertTriangle className="w-3.5 h-3.5" />
                          <span>{lang === 'hu' ? 'Mellékhatások & Tanácsok' : lang === 'de' ? 'Nebenwirkungen & Tipps' : 'Side Effects & Tips'}</span>
                        </button>
                      </div>

                      {/* Tab 1: Basic & Mechanism */}
                      {activeSubTab === 'basic' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/70 space-y-2">
                            <h4 className="text-xs font-extrabold uppercase tracking-wider text-cyan-800 flex items-center gap-1.5">
                              <Zap className="w-4 h-4 text-cyan-600" />
                              <span>{lang === 'hu' ? 'Hatásmechanizmus' : lang === 'de' ? 'Wirkungsmechanismus' : 'Mechanism of Action'}</span>
                            </h4>
                            <p className="text-xs text-slate-700 leading-relaxed">{item.mechanismOfAction[lang]}</p>
                          </div>

                          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/70 space-y-2">
                            <h4 className="text-xs font-extrabold uppercase tracking-wider text-teal-800 flex items-center gap-1.5">
                              <Sparkles className="w-4 h-4 text-teal-600" />
                              <span>{lang === 'hu' ? 'Különleges tulajdonságok' : lang === 'de' ? 'Besondere Eigenschaften' : 'Special Features'}</span>
                            </h4>
                            <p className="text-xs text-slate-700 leading-relaxed">{item.specialFeature[lang]}</p>
                          </div>

                          <div className="bg-cyan-50/60 p-4 rounded-2xl border border-cyan-100 md:col-span-2 space-y-1">
                            <div className="text-xs font-bold text-cyan-900 flex items-center gap-1.5">
                              <Activity className="w-4 h-4 text-cyan-700" />
                              <span>{lang === 'hu' ? 'Farmakokinematika & Felezési idő' : lang === 'de' ? 'Pharmakokinetik' : 'Pharmacokinetics'}</span>
                            </div>
                            <p className="text-xs text-cyan-800">{item.halfLife[lang]}</p>
                          </div>
                        </div>
                      )}

                      {/* Tab 2: Main Indications */}
                      {activeSubTab === 'indications' && (
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/70 space-y-3">
                          <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                            <Stethoscope className="w-4 h-4 text-cyan-600" />
                            <span>{lang === 'hu' ? 'Főbb Klinikai Indikációk' : lang === 'de' ? 'Hauptindikationen' : 'Main Indications'}</span>
                          </h4>
                          <ul className="space-y-2">
                            {item.indications[lang].map((ind, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{ind}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Tab 3: Detailed Dosage Grid */}
                      {activeSubTab === 'dosage' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Adult */}
                          <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100 space-y-1.5">
                            <div className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
                              <UserCheck className="w-4 h-4 text-blue-600" />
                              <span>{lang === 'hu' ? 'Felnőtt Adagolás' : lang === 'de' ? 'Erwachsenendosierung' : 'Adult Dosage'}</span>
                            </div>
                            <p className="text-xs text-slate-700 leading-relaxed">{item.dosage.adult[lang]}</p>
                          </div>

                          {/* Pediatric */}
                          <div className="bg-purple-50/50 p-4 rounded-2xl border border-purple-100 space-y-1.5">
                            <div className="text-xs font-bold text-purple-900 flex items-center gap-1.5">
                              <Baby className="w-4 h-4 text-purple-600" />
                              <span>{lang === 'hu' ? 'Gyermekgyógyászati Adagolás' : lang === 'de' ? 'Pädiatrische Dosierung' : 'Pediatric Dosage'}</span>
                            </div>
                            <p className="text-xs text-slate-700 leading-relaxed">{item.dosage.pediatric[lang]}</p>
                          </div>

                          {/* Prophylaxis */}
                          <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100 space-y-1.5">
                            <div className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                              <Shield className="w-4 h-4 text-emerald-600" />
                              <span>{lang === 'hu' ? 'Profilaxis Dózis' : lang === 'de' ? 'Prophylaxe-Dosierung' : 'Prophylaxis Dosing'}</span>
                            </div>
                            <p className="text-xs text-slate-700 leading-relaxed">{item.dosage.prophylaxis[lang]}</p>
                          </div>

                          {/* Renal Impairment */}
                          <div className="bg-amber-50/50 p-4 rounded-2xl border border-amber-100 space-y-1.5">
                            <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                              <AlertTriangle className="w-4 h-4 text-amber-600" />
                              <span>{lang === 'hu' ? 'Vesekárosodás (GFR / Dialízis)' : lang === 'de' ? 'Niereninsuffizienz' : 'Renal Impairment'}</span>
                            </div>
                            <p className="text-xs text-slate-700 leading-relaxed">{item.dosage.renal[lang]}</p>
                          </div>

                          {/* Hepatic Impairment */}
                          <div className="bg-rose-50/50 p-4 rounded-2xl border border-rose-100 md:col-span-2 space-y-1.5">
                            <div className="text-xs font-bold text-rose-900 flex items-center gap-1.5">
                              <AlertCircle className="w-4 h-4 text-rose-600" />
                              <span>{lang === 'hu' ? 'Májkárosodás' : lang === 'de' ? 'Leberinsuffizienz' : 'Hepatic Impairment'}</span>
                            </div>
                            <p className="text-xs text-slate-700 leading-relaxed">{item.dosage.hepatic[lang]}</p>
                          </div>
                        </div>
                      )}

                      {/* Tab 4: Side Effects & Practical Tips */}
                      {activeSubTab === 'safety' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Side Effects */}
                          <div className="bg-rose-50/50 p-4 rounded-2xl border border-rose-100 space-y-3">
                            <h4 className="text-xs font-extrabold uppercase tracking-wider text-rose-900 flex items-center gap-1.5">
                              <AlertTriangle className="w-4 h-4 text-rose-600" />
                              <span>{lang === 'hu' ? 'Mellékhatások & Toxicitás' : lang === 'de' ? 'Nebenwirkungen' : 'Side Effects & Toxicity'}</span>
                            </h4>
                            <ul className="space-y-2">
                              {item.sideEffects[lang].map((se, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                                  <span>{se}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Practical Tips */}
                          <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-200/80 space-y-3">
                            <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                              <Sparkles className="w-4 h-4 text-amber-600" />
                              <span>{lang === 'hu' ? 'Gyakorlati Klinikai Tanácsok' : lang === 'de' ? 'Praktische Klinische Tipps' : 'Practical Clinical Tips'}</span>
                            </h4>
                            <ul className="space-y-2">
                              {item.practicalTips[lang].map((tip, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-xs text-slate-800 font-medium">
                                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                                  <span>{tip}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
