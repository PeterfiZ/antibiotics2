/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { antiviralsData, AntiviralData } from '../data/antivirals';
import { 
  Search, 
  Pill, 
  Clock, 
  Zap, 
  Activity, 
  AlertTriangle, 
  Info, 
  Shield, 
  BookOpen, 
  Check, 
  Bookmark, 
  ShieldAlert
} from 'lucide-react';

// Multilingual labels for the Antiviral View (matching AntifungalView style)
const labels = {
  hu: {
    title: 'Antivirális Kezelés (Antivirális szerek)',
    subtitle: 'Szisztémás antivirális szerek farmakológiai tulajdonságai, célvírusai, adagolása és klinikai alkalmazása',
    searchPlaceholder: 'Keresés hatóanyag, csoport, vírus vagy javallat szerint...',
    allGroups: 'Összes csoport',
    groupHerpes: 'Herpes & CMV',
    groupRespiratory: 'Légúti & COVID',
    groupHepatitis: 'Hepatitis (HBV/HCV)',
    groupHiv: 'HIV / Retrovírus',
    groupBookmarks: 'Könyvjelzők',
    halfLife: 'Felezési idő',
    effectType: 'Hatás típusa',
    targetViruses: 'Célvírusok / Spektrum',
    specialFeature: 'Különleges tulajdonság',
    mechanismOfAction: 'Hatásmechanizmus',
    dosageAdult: 'Felnőtt adagolás',
    dosagePediatric: 'Gyermek adagolás',
    dosageProphylaxis: 'Profilaxis adagolás',
    dosageRenal: 'Veseelégtelenségben',
    dosageHepatic: 'Májkárosodásban',
    indications: 'Főbb javallatok',
    sideEffects: 'Mellékhatások',
    practicalTips: 'Gyakorlati tanácsok',
    secGeneral: 'Alapinfók',
    secDosage: 'Adagolás',
    secIndications: 'Vírusok & Javallatok',
    secSafety: 'Mellékhatások & Tanácsok',
    noResults: 'Nincs találat a keresési feltételeknek megfelelően.',
    quickSummary: 'Főbb jellemzők',
    dosageGuidelines: 'Adagolási irányelvek',
    virostatic: 'Virosztatikus',
    virucidal: 'Virucid',
    activeFilters: 'Aktív szűrők',
    clearFilters: 'Szűrők törlése',
    bookmarked: 'Mentve',
    bookmark: 'Mentés könyvjelzőbe',
    details: 'Részletek megnyitása'
  },
  en: {
    title: 'Antiviral Treatment (Antiviral Agents)',
    subtitle: 'Pharmacological properties, target viruses, dosing, and clinical application of systemic antivirals',
    searchPlaceholder: 'Search by agent, group, virus, or indication...',
    allGroups: 'All Groups',
    groupHerpes: 'Herpes & CMV',
    groupRespiratory: 'Respiratory & COVID',
    groupHepatitis: 'Hepatitis (HBV/HCV)',
    groupHiv: 'HIV / Retrovirus',
    groupBookmarks: 'Bookmarks',
    halfLife: 'Half-life',
    effectType: 'Effect type',
    targetViruses: 'Target Viruses / Spectrum',
    specialFeature: 'Special Feature',
    mechanismOfAction: 'Mechanism of Action',
    dosageAdult: 'Adult Dosing',
    dosagePediatric: 'Pediatric Dosing',
    dosageProphylaxis: 'Prophylaxis Dosing',
    dosageRenal: 'Renal Impairment',
    dosageHepatic: 'Hepatic Impairment',
    indications: 'Main Indications',
    sideEffects: 'Side Effects',
    practicalTips: 'Practical Tips',
    secGeneral: 'General Info',
    secDosage: 'Dosage',
    secIndications: 'Viruses & Indications',
    secSafety: 'Side Effects & Tips',
    noResults: 'No matches found for your search criteria.',
    quickSummary: 'Key Features',
    dosageGuidelines: 'Dosage Guidelines',
    virostatic: 'Virostatic',
    virucidal: 'Virucidal',
    activeFilters: 'Active filters',
    clearFilters: 'Clear filters',
    bookmarked: 'Bookmarked',
    bookmark: 'Add bookmark',
    details: 'View details'
  },
  de: {
    title: 'Antivirale Behandlung (Antivirale Wirkstoffe)',
    subtitle: 'Pharmakologische Eigenschaften, Zielviren, Dosierung und klinische Anwendung systemischer Antiviralia',
    searchPlaceholder: 'Suche nach Wirkstoff, Gruppe, Virus oder Indikation...',
    allGroups: 'Alle Gruppen',
    groupHerpes: 'Herpes & CMV',
    groupRespiratory: 'Atemwege & COVID',
    groupHepatitis: 'Hepatitis (HBV/HCV)',
    groupHiv: 'HIV / Retrovirus',
    groupBookmarks: 'Lesezeichen',
    halfLife: 'Halbwertszeit',
    effectType: 'Wirkungstyp',
    targetViruses: 'Zielviren / Spektrum',
    specialFeature: 'Besondere Eigenschaft',
    mechanismOfAction: 'Wirkungsmechanismus',
    dosageAdult: 'Dosierung Erwachsene',
    dosagePediatric: 'Dosierung Kinder',
    dosageProphylaxis: 'Prophylaxe-Dosierung',
    dosageRenal: 'Niereninsuffizienz',
    dosageHepatic: 'Leberfunktionsstörung',
    indications: 'Hauptindikationen',
    sideEffects: 'Nebenwirkungen',
    practicalTips: 'Praktische Ratschläge',
    secGeneral: 'Allg. Infos',
    secDosage: 'Dosierung',
    secIndications: 'Viren & Indikationen',
    secSafety: 'Nebenwirkungen & Tipps',
    noResults: 'Keine Übereinstimmungen für Ihre Suchkriterien gefunden.',
    quickSummary: 'Hauptmerkmale',
    dosageGuidelines: 'Dosierungsrichtlinien',
    virostatic: 'Virostatisch',
    virucidal: 'Viruzid',
    activeFilters: 'Aktive Filter',
    clearFilters: 'Filter löschen',
    bookmarked: 'Gespeichert',
    bookmark: 'Als Lesezeichen speichern',
    details: 'Details anzeigen'
  }
};

export default function AntiviralView() {
  const { language } = useLanguage();
  const currentLabels = labels[language as keyof typeof labels] || labels.hu;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [activeCardTabs, setActiveCardTabs] = useState<Record<string, 'general' | 'indications' | 'dosage' | 'safety'>>({});
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('antiviral_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarks(prev => {
      const updated = prev.includes(id) ? prev.filter(bId => bId !== id) : [...prev, id];
      try {
        localStorage.setItem('antiviral_bookmarks', JSON.stringify(updated));
      } catch (err) {
        console.error('Failed to save bookmarks', err);
      }
      return updated;
    });
  };

  const getCardTab = (drugId: string) => {
    return activeCardTabs[drugId] || 'general';
  };

  const setCardTab = (drugId: string, tab: 'general' | 'indications' | 'dosage' | 'safety') => {
    setActiveCardTabs(prev => ({ ...prev, [drugId]: tab }));
  };

  // Check if group is matched for drug
  const matchesGroup = (drug: AntiviralData, groupKey: string) => {
    if (groupKey === 'all') return true;
    if (groupKey === 'bookmarks') return bookmarks.includes(drug.id);
    const lowerId = drug.id.toLowerCase();
    const lowerGroup = drug.group.en.toLowerCase();
    const lowerGroupHu = drug.group.hu.toLowerCase();
    
    if (groupKey === 'herpes') {
      return lowerId.includes('aciclovir') || lowerId.includes('ganciclovir') || lowerId.includes('letermovir') || lowerGroup.includes('herpes') || lowerGroup.includes('cmv');
    }
    if (groupKey === 'respiratory') {
      return lowerId.includes('oseltamivir') || lowerId.includes('remdesivir') || lowerId.includes('paxlovid') || lowerId.includes('baloxavir') || lowerGroupHu.includes('influenza') || lowerGroup.includes('influenza') || lowerGroupHu.includes('légúti');
    }
    if (groupKey === 'hepatitis') {
      return lowerId.includes('tenofovir') || lowerId.includes('sofosbuvir') || lowerGroupHu.includes('hepatitis') || lowerGroup.includes('hepatitis');
    }
    if (groupKey === 'hiv') {
      return lowerId.includes('biktarvy') || lowerId.includes('tenofovir') || lowerId.includes('abacavir') || lowerId.includes('darunavir') || lowerId.includes('doravirine') || lowerId.includes('cabotegravir') || lowerId.includes('hiv') || lowerGroupHu.includes('hiv') || lowerGroup.includes('hiv');
    }
    return true;
  };

  // Filter antivirals based on search and selected group
  const filteredAntivirals = antiviralsData.filter(drug => {
    const query = searchQuery.toLowerCase().trim();
    const groupMatch = matchesGroup(drug, selectedGroup);
    
    if (!query) return groupMatch;

    const lang = language as 'hu' | 'en' | 'de';
    const nameMatch = drug.name.toLowerCase().includes(query);
    const groupNameMatch = (drug.group[lang] || '').toLowerCase().includes(query);
    const virusMatch = (drug.targetViruses[lang] || '').toLowerCase().includes(query);
    const indicationsMatch = drug.indications[lang]?.some(ind => ind.toLowerCase().includes(query)) || false;
    const mechanismMatch = (drug.mechanismOfAction[lang] || '').toLowerCase().includes(query);

    return groupMatch && (nameMatch || groupNameMatch || virusMatch || indicationsMatch || mechanismMatch);
  });

  // Get active effect type details
  const getEffectTypeDetails = (effectStr: string) => {
    const lower = effectStr.toLowerCase();
    const isVirucidal = lower.includes('virucid');
    return {
      label: isVirucidal ? currentLabels.virucidal : currentLabels.virostatic,
      className: isVirucidal 
        ? 'bg-rose-50 text-rose-700 border-rose-200' 
        : 'bg-amber-50 text-amber-700 border-amber-200'
    };
  };

  return (
    <div className="space-y-6">
      {/* View Header */}
      <div className="border-b border-slate-100 pb-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <span className="p-1.5 bg-blue-50 text-blue-600 rounded-lg border border-blue-100 inline-block">
                <ShieldAlert className="w-5.5 h-5.5 text-blue-600" />
              </span>
              {currentLabels.title}
            </h2>
            <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-3xl">
              {currentLabels.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Control Panel: Search & Group Filter Pills */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center bg-slate-50/60 p-4 rounded-2xl border border-slate-200/60">
        {/* Search Bar */}
        <div className="relative lg:col-span-6">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={currentLabels.searchPlaceholder}
            className="w-full pl-10 pr-4 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none shadow-xs text-slate-800"
          />
        </div>

        {/* Group Filter Pills */}
        <div className="lg:col-span-6 flex flex-wrap gap-1.5 justify-start lg:justify-end">
          {[
            { id: 'all', label: currentLabels.allGroups },
            { id: 'herpes', label: currentLabels.groupHerpes },
            { id: 'respiratory', label: currentLabels.groupRespiratory },
            { id: 'hepatitis', label: currentLabels.groupHepatitis },
            { id: 'hiv', label: currentLabels.groupHiv },
            { id: 'bookmarks', label: currentLabels.groupBookmarks }
          ].map(group => (
            <button
              key={group.id}
              onClick={() => setSelectedGroup(group.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all duration-150 cursor-pointer ${
                selectedGroup === group.id
                  ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {group.label}
              {group.id === 'bookmarks' && bookmarks.length > 0 && (
                <span className={`ml-1.5 px-1.5 py-0.2 rounded-full text-[10px] ${selectedGroup === 'bookmarks' ? 'bg-blue-800 text-blue-100' : 'bg-slate-100 text-slate-600'}`}>
                  {bookmarks.length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Active Filters Summary */}
      {(searchQuery || selectedGroup !== 'all') && (
        <div className="flex items-center justify-between text-xs bg-blue-50/40 px-4 py-2.5 rounded-xl border border-blue-100/60">
          <div className="flex items-center gap-2 text-slate-600">
            <span className="font-bold text-[10px] uppercase tracking-wider text-slate-400">{currentLabels.activeFilters}:</span>
            {selectedGroup !== 'all' && (
              <span className="bg-white border border-slate-200 px-2.5 py-0.5 rounded-lg font-bold text-slate-700">
                {selectedGroup === 'herpes' && currentLabels.groupHerpes}
                {selectedGroup === 'respiratory' && currentLabels.groupRespiratory}
                {selectedGroup === 'hepatitis' && currentLabels.groupHepatitis}
                {selectedGroup === 'hiv' && currentLabels.groupHiv}
                {selectedGroup === 'bookmarks' && currentLabels.groupBookmarks}
              </span>
            )}
            {searchQuery && (
              <span className="bg-white border border-slate-200 px-2.5 py-0.5 rounded-lg font-bold text-slate-700 max-w-[150px] truncate">
                &ldquo;{searchQuery}&rdquo;
              </span>
            )}
          </div>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedGroup('all');
            }}
            className="text-blue-600 hover:text-blue-500 font-bold transition-colors cursor-pointer"
          >
            {currentLabels.clearFilters}
          </button>
        </div>
      )}

      {/* Antivirals Content Grid */}
      {filteredAntivirals.length > 0 ? (
        <div className="space-y-6">
          {filteredAntivirals.map(drug => {
            const currentTab = getCardTab(drug.id);
            const isBookmarked = bookmarks.includes(drug.id);
            const lang = language as 'hu' | 'en' | 'de';
            const effectInfo = getEffectTypeDetails(drug.effectType[lang]);

            return (
              <div 
                key={drug.id}
                className="bg-white border border-slate-200/80 rounded-2xl shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden"
              >
                {/* Drug Header */}
                <div className="p-4 md:p-5 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">
                        <Pill className="w-4.5 h-4.5" />
                      </span>
                      <h3 className="text-lg font-black text-slate-900 tracking-tight">
                        {drug.name}
                      </h3>
                      {/* Effect Type Badge */}
                      <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider border ${effectInfo.className}`}>
                        {effectInfo.label}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-bold tracking-wide">
                      {drug.group[lang]}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-center">
                    {/* Bookmark button */}
                    <button
                      onClick={(e) => toggleBookmark(drug.id, e)}
                      title={isBookmarked ? currentLabels.bookmarked : currentLabels.bookmark}
                      className={`p-2 rounded-xl border transition-all duration-150 cursor-pointer active:scale-95 ${
                        isBookmarked 
                          ? 'bg-amber-50 text-amber-500 border-amber-200' 
                          : 'bg-white text-slate-400 border-slate-200 hover:bg-slate-50 hover:text-slate-600'
                      }`}
                    >
                      <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Card Inner Tabs Navigation */}
                <div className="border-b border-slate-100 flex overflow-x-auto bg-white/70">
                  {[
                    { id: 'general', label: currentLabels.secGeneral, icon: Info },
                    { id: 'indications', label: currentLabels.secIndications, icon: BookOpen },
                    { id: 'dosage', label: currentLabels.secDosage, icon: Zap },
                    { id: 'safety', label: currentLabels.secSafety, icon: Shield }
                  ].map(tab => {
                    const TabIcon = tab.icon;
                    const isActive = currentTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setCardTab(drug.id, tab.id as any)}
                        className={`flex items-center gap-1.5 px-4 py-3 border-b-2 text-xs font-bold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                          isActive
                            ? 'border-blue-600 text-blue-600 bg-blue-50/10'
                            : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50/40'
                        }`}
                      >
                        <TabIcon className="w-3.5 h-3.5" />
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                {/* Card Content Based on Active Inner Tab */}
                <div className="p-5 min-h-[180px]">
                  {/* General Tab */}
                  {currentTab === 'general' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                            {currentLabels.halfLife}
                          </span>
                          <p className="font-semibold text-slate-700 flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                            {drug.halfLife[lang]}
                          </p>
                        </div>

                        <div className="space-y-1">
                          <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                            {currentLabels.effectType}
                          </span>
                          <p className="font-semibold text-slate-700 flex items-center gap-1.5">
                            <Activity className="w-4 h-4 text-slate-400 shrink-0" />
                            {drug.effectType[lang]}
                          </p>
                        </div>

                        <div className="space-y-1">
                          <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                            {currentLabels.targetViruses}
                          </span>
                          <p className="font-semibold text-slate-700 leading-relaxed">
                            {drug.targetViruses[lang]}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-blue-50/40 border border-blue-100/50 rounded-xl p-3.5 space-y-1.5">
                          <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-wider block flex items-center gap-1">
                            <Zap className="w-3.5 h-3.5 fill-blue-50" />
                            {currentLabels.specialFeature}
                          </span>
                          <p className="font-bold text-slate-700 leading-relaxed">
                            {drug.specialFeature[lang]}
                          </p>
                        </div>

                        <div className="space-y-1">
                          <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                            {currentLabels.mechanismOfAction}
                          </span>
                          <p className="font-semibold text-slate-600 leading-relaxed text-justify">
                            {drug.mechanismOfAction[lang]}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Indications & Viruses Tab */}
                  {currentTab === 'indications' && (
                    <div className="space-y-5 text-xs">
                      <div className="space-y-1.5 bg-emerald-50/30 border border-emerald-100/40 p-4 rounded-xl">
                        <span className="text-[10px] font-extrabold text-emerald-600 uppercase tracking-wider block">
                          {currentLabels.targetViruses}
                        </span>
                        <p className="font-bold text-slate-700 leading-relaxed">
                          {drug.targetViruses[lang]}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                          {currentLabels.indications}
                        </span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {drug.indications[lang]?.map((ind, idx) => (
                            <div key={idx} className="flex items-start gap-2 bg-slate-50 border border-slate-100 p-2.5 rounded-lg">
                              <span className="mt-0.5 bg-blue-100 text-blue-700 w-4 h-4 rounded-full flex items-center justify-center shrink-0 font-bold text-[9px]">
                                {idx + 1}
                              </span>
                              <span className="font-semibold text-slate-700">{ind}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Dosage Guidelines Tab */}
                  {currentTab === 'dosage' && (
                    <div className="space-y-4 text-xs">
                      <div className="flex items-center gap-1.5 border-b border-slate-100 pb-2">
                        <span className="font-bold text-[10px] uppercase tracking-wider text-slate-400">
                          {currentLabels.dosageGuidelines}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Adult */}
                        <div className="space-y-1 bg-slate-50 border border-slate-100 p-3 rounded-xl">
                          <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                            {currentLabels.dosageAdult}
                          </span>
                          <p className="font-bold text-slate-700 leading-relaxed">
                            {drug.dosage.adult[lang]}
                          </p>
                        </div>

                        {/* Pediatric */}
                        <div className="space-y-1 bg-slate-50 border border-slate-100 p-3 rounded-xl">
                          <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                            {currentLabels.dosagePediatric}
                          </span>
                          <p className="font-semibold text-slate-700 leading-relaxed">
                            {drug.dosage.pediatric[lang]}
                          </p>
                        </div>

                        {/* Prophylaxis */}
                        <div className="space-y-1 bg-emerald-50/20 border border-emerald-100 p-3 rounded-xl">
                          <span className="text-[10px] font-extrabold text-emerald-600 uppercase tracking-wider block flex items-center gap-1">
                            <Shield className="w-3.5 h-3.5" />
                            {currentLabels.dosageProphylaxis}
                          </span>
                          <p className="font-semibold text-slate-700 leading-relaxed">
                            {drug.dosage.prophylaxis[lang]}
                          </p>
                        </div>

                        {/* Renal */}
                        <div className="space-y-1 bg-amber-50/20 border border-amber-100 p-3 rounded-xl">
                          <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-wider block flex items-center gap-1">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            {currentLabels.dosageRenal}
                          </span>
                          <p className="font-semibold text-slate-700 leading-relaxed">
                            {drug.dosage.renal[lang]}
                          </p>
                        </div>

                        {/* Hepatic */}
                        <div className="space-y-1 bg-amber-50/20 border border-amber-100 p-3 rounded-xl md:col-span-2">
                          <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-wider block flex items-center gap-1">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            {currentLabels.dosageHepatic}
                          </span>
                          <p className="font-semibold text-slate-700 leading-relaxed">
                            {drug.dosage.hepatic[lang]}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Safety & Side Effects Tab */}
                  {currentTab === 'safety' && (
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 text-xs">
                      {/* Side Effects */}
                      <div className="md:col-span-6 space-y-2">
                        <span className="text-[10px] font-extrabold text-red-500 uppercase tracking-wider block">
                          {currentLabels.sideEffects}
                        </span>
                        <div className="space-y-1.5">
                          {drug.sideEffects[lang]?.map((effect, idx) => (
                            <div key={idx} className="flex items-start gap-2 bg-rose-50/30 border border-rose-100/40 p-2.5 rounded-lg">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                              <span className="font-semibold text-slate-700">{effect}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Practical Tips */}
                      <div className="md:col-span-6 space-y-2">
                        <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-wider block">
                          {currentLabels.practicalTips}
                        </span>
                        <div className="space-y-1.5">
                          {drug.practicalTips[lang]?.map((tip, idx) => (
                            <div key={idx} className="flex items-start gap-2 bg-blue-50/30 border border-blue-100/40 p-2.5 rounded-lg">
                              <Check className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                              <span className="font-semibold text-slate-700">{tip}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200/80 shadow-xs">
          <Info className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-700 mb-1">
            {currentLabels.noResults}
          </h3>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedGroup('all');
            }}
            className="mt-4 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-xs rounded-xl transition-colors cursor-pointer"
          >
            {currentLabels.clearFilters}
          </button>
        </div>
      )}
    </div>
  );
}
