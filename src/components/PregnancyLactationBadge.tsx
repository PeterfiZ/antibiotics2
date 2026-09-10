/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Baby, Milk, ShieldAlert, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { getPregnancyLactationInfo } from '../data/pregnancyLactationData';
import { Language } from '../lib/LanguageContext';

interface Props {
  drugId: string | undefined;
  compact?: boolean;
  language?: Language;
}

export const PregnancyLactationBadges: React.FC<Props> = ({ drugId, compact = false, language = 'hu' }) => {
  const info = getPregnancyLactationInfo(drugId);
  if (!info) return null;

  const { pregnancySafe, lactationSafe, fdaCategory } = info;

  // Only display badges/icons where permitted (or if detailed, show specific state)
  if (!pregnancySafe && !lactationSafe) return null;

  const lang = language as 'hu' | 'en' | 'de';

  const pregTooltip = lang === 'hu'
    ? `FDA ${fdaCategory}: Terhességben alkalmazható / megengedett`
    : lang === 'de'
    ? `FDA ${fdaCategory}: In der Schwangerschaft zugelassen / sicher`
    : `FDA ${fdaCategory}: Permitted / safe in pregnancy`;

  const lactTooltip = lang === 'hu'
    ? 'EMA: Szoptatás alatt alkalmazható / kompatibilis'
    : lang === 'de'
    ? 'EMA: Mit dem Stillen vereinbar / zugelassen'
    : 'EMA: Compatible with breastfeeding / permitted';

  if (compact) {
    return (
      <span className="inline-flex items-center gap-1 ml-1 shrink-0 align-middle">
        {pregnancySafe && (
          <span
            title={pregTooltip}
            className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/80 hover:bg-emerald-100 transition-colors cursor-help shadow-2xs"
          >
            <Baby className="w-3 h-3 text-emerald-600" />
            <span>FDA {fdaCategory}</span>
          </span>
        )}
        {lactationSafe && (
          <span
            title={lactTooltip}
            className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-bold bg-sky-50 text-sky-700 border border-sky-200/80 hover:bg-sky-100 transition-colors cursor-help shadow-2xs"
          >
            <Milk className="w-3 h-3 text-sky-600" />
            <span>{lang === 'hu' ? 'Szopt.' : lang === 'de' ? 'Still.' : 'Lact.'}</span>
          </span>
        )}
      </span>
    );
  }

  // Detailed badges (for header / prominent cards)
  return (
    <div className="inline-flex flex-wrap items-center gap-1.5 mt-1">
      {pregnancySafe && (
        <span
          title={pregTooltip}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 shadow-xs"
        >
          <Baby className="w-3.5 h-3.5 text-emerald-400" />
          <span>FDA {fdaCategory} • {lang === 'hu' ? 'Terhességben megengedett' : lang === 'de' ? 'In Schwangerschaft erlaubt' : 'Permitted in pregnancy'}</span>
        </span>
      )}
      {lactationSafe && (
        <span
          title={lactTooltip}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-sky-500/20 text-sky-300 border border-sky-400/30 shadow-xs"
        >
          <Milk className="w-3.5 h-3.5 text-sky-300" />
          <span>EMA • {lang === 'hu' ? 'Szoptatás alatt alkalmazható' : lang === 'de' ? 'Stillen erlaubt' : 'Compatible with lactation'}</span>
        </span>
      )}
    </div>
  );
};

export const PregnancyLactationDetailCard: React.FC<{ drugId: string | undefined; language?: Language }> = ({
  drugId,
  language = 'hu'
}) => {
  const info = getPregnancyLactationInfo(drugId);
  if (!info) return null;

  const lang = (language || 'hu') as 'hu' | 'en' | 'de';
  const { pregnancySafe, lactationSafe, fdaCategory, pregnancyStatus, lactationStatus, pregnancySummary, lactationSummary } = info;

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50/20 p-4 rounded-xl border border-slate-200/90 shadow-2xs space-y-3.5">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-blue-100 text-blue-700 rounded-lg">
            <Baby className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
              {lang === 'hu' ? 'Alkalmazás terhességben és szoptatás alatt (FDA / EMA)' : lang === 'de' ? 'Anwendung in Schwangerschaft und Stillzeit (FDA / EMA)' : 'Use in Pregnancy and Lactation (FDA / EMA)'}
            </h4>
            <span className="text-[10px] text-slate-500">
              {lang === 'hu' ? 'Klinikai biztonságossági besorolás' : lang === 'de' ? 'Klinische Sicherheitseinstufung' : 'Clinical safety classification'}
            </span>
          </div>
        </div>

        {/* FDA Category badge */}
        <span className={`px-2 py-0.5 rounded text-xs font-extrabold border ${
          fdaCategory === 'B'
            ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
            : fdaCategory === 'C'
            ? 'bg-amber-100 text-amber-800 border-amber-300'
            : fdaCategory === 'D'
            ? 'bg-red-100 text-red-800 border-red-300'
            : 'bg-slate-100 text-slate-700 border-slate-300'
        }`}>
          FDA Cat. {fdaCategory}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Pregnancy Panel */}
        <div className={`p-3 rounded-lg border space-y-1.5 ${
          pregnancyStatus === 'safe'
            ? 'bg-emerald-50/70 border-emerald-200/80 text-emerald-950'
            : pregnancyStatus === 'caution'
            ? 'bg-amber-50/70 border-amber-200/80 text-amber-950'
            : 'bg-rose-50/70 border-rose-200/80 text-rose-950'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 font-bold text-xs">
              <Baby className={`w-3.5 h-3.5 ${
                pregnancyStatus === 'safe' ? 'text-emerald-700' : pregnancyStatus === 'caution' ? 'text-amber-700' : 'text-rose-700'
              }`} />
              <span>{lang === 'hu' ? 'Terhesség' : lang === 'de' ? 'Schwangerschaft' : 'Pregnancy'}</span>
            </div>
            <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider ${
              pregnancyStatus === 'safe'
                ? 'bg-emerald-200/70 text-emerald-800'
                : pregnancyStatus === 'caution'
                ? 'bg-amber-200/70 text-amber-800'
                : 'bg-rose-200/70 text-rose-800'
            }`}>
              {pregnancyStatus === 'safe'
                ? (lang === 'hu' ? 'Megengedett' : lang === 'de' ? 'Erlaubt' : 'Permitted')
                : pregnancyStatus === 'caution'
                ? (lang === 'hu' ? 'Megfontolással' : lang === 'de' ? 'Vorsicht' : 'Caution')
                : (lang === 'hu' ? 'Ellenjavallt' : lang === 'de' ? 'Kontraindiziert' : 'Contraindicated')}
            </span>
          </div>
          <p className="text-[11px] leading-relaxed opacity-90">
            {pregnancySummary[lang] || pregnancySummary.hu}
          </p>
        </div>

        {/* Lactation Panel */}
        <div className={`p-3 rounded-lg border space-y-1.5 ${
          lactationStatus === 'safe'
            ? 'bg-sky-50/70 border-sky-200/80 text-sky-950'
            : lactationStatus === 'caution'
            ? 'bg-amber-50/70 border-amber-200/80 text-amber-950'
            : 'bg-rose-50/70 border-rose-200/80 text-rose-950'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 font-bold text-xs">
              <Milk className={`w-3.5 h-3.5 ${
                lactationStatus === 'safe' ? 'text-sky-700' : lactationStatus === 'caution' ? 'text-amber-700' : 'text-rose-700'
              }`} />
              <span>{lang === 'hu' ? 'Szoptatás' : lang === 'de' ? 'Stillzeit' : 'Lactation'}</span>
            </div>
            <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider ${
              lactationStatus === 'safe'
                ? 'bg-sky-200/70 text-sky-800'
                : lactationStatus === 'caution'
                ? 'bg-amber-200/70 text-amber-800'
                : 'bg-rose-200/70 text-rose-800'
            }`}>
              {lactationStatus === 'safe'
                ? (lang === 'hu' ? 'Kompatibilis' : lang === 'de' ? 'Vereinbar' : 'Compatible')
                : lactationStatus === 'caution'
                ? (lang === 'hu' ? 'Óvatossággal' : lang === 'de' ? 'Vorsicht' : 'Caution')
                : (lang === 'hu' ? 'Nem javasolt' : lang === 'de' ? 'Nicht empfohlen' : 'Avoid')}
            </span>
          </div>
          <p className="text-[11px] leading-relaxed opacity-90">
            {lactationSummary[lang] || lactationSummary.hu}
          </p>
        </div>
      </div>
    </div>
  );
};
