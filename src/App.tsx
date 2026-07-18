/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import PharmacologyView from './components/PharmacologyView';
import ClinicalView from './components/ClinicalView';
import MicrobiologyView from './components/MicrobiologyView';
import PracticeView from './components/PracticeView';
import AiConsultantView from './components/AiConsultantView';
import TdmCalculatorView from './components/TdmCalculatorView';
import RenalDosingView from './components/RenalDosingView';

import { Antibiotic, ClinicalInfection } from './types';
import { useLanguage } from './lib/LanguageContext';

import { 
  Layers, 
  Stethoscope, 
  Bug, 
  GraduationCap, 
  Brain, 
  Bookmark, 
  Clock, 
  BookOpen, 
  Heart,
  ChevronRight,
  Info,
  Calculator,
  TrendingDown,
  Download,
  MessageSquare,
  Star,
  Eye,
  BarChart3
} from 'lucide-react';

export default function App() {
  const { language, setLanguage, t, tg, antibioticsData, clinicalInfectionsData } = useLanguage();
  const [activeTab, setActiveTab] = useState<'pharma' | 'clinical' | 'micro' | 'quiz' | 'ai' | 'tdm' | 'renal'>('pharma');
  const [utcTime, setUtcTime] = useState('');

  // PWA Install Prompt State
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBtn, setShowInstallBtn] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Detect iOS
    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(ios);

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBtn(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // If already running in standalone PWA mode
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setShowInstallBtn(false);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  // System Statistics State
  const [stats, setStats] = useState({ visits: 0, downloads: 0 });

  // Load stats and register visit on mount
  useEffect(() => {
    fetch('/api/stats/visit', { method: 'POST' })
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.visits === 'number') {
          setStats(data);
        }
      })
      .catch(err => {
        console.warn('Failed to register visit:', err);
        fetch('/api/stats')
          .then(res => res.json())
          .then(data => data && setStats(data))
          .catch(e => console.warn('Failed to load stats:', e));
      });
  }, []);

  // Dynamic Google Analytics Setup
  useEffect(() => {
    const measurementId = (import.meta as any).env.VITE_GA_MEASUREMENT_ID || 'G-26E0EYZZQ8';
    if (measurementId) {
      if (!document.getElementById('google-analytics-script')) {
        const script = document.createElement('script');
        script.id = 'google-analytics-script';
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
        document.head.appendChild(script);

        const initScript = document.createElement('script');
        initScript.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
            page_title: 'SepsisDose'
          });
        `;
        document.head.appendChild(initScript);
      }
    }
  }, []);

  // Track virtual pageviews on tab changes in GA
  useEffect(() => {
    if ((window as any).gtag) {
      const measurementId = (import.meta as any).env.VITE_GA_MEASUREMENT_ID || 'G-26E0EYZZQ8';
      (window as any).gtag('config', measurementId, {
        page_path: `/${activeTab}`,
        page_title: `SepsisDose - ${activeTab}`
      });
    }
  }, [activeTab]);

  const handleInstallClick = () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User installed the PWA');
        // Increment backend downloads
        fetch('/api/stats/download', { method: 'POST' })
          .then(res => res.json())
          .then(data => data && typeof data.downloads === 'number' && setStats(data))
          .catch(err => console.warn('Failed to track PWA download:', err));

        if ((window as any).gtag) {
          (window as any).gtag('event', 'pwa_installed', {
            event_category: 'pwa'
          });
        }
      }
      setDeferredPrompt(null);
      setShowInstallBtn(false);
    });
  };



  // Feedback Form State
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [feedbackName, setFeedbackName] = useState('');
  const [feedbackEmail, setFeedbackEmail] = useState('');
  const [feedbackSubject, setFeedbackSubject] = useState('SepsisDose Visszajelzés');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackRating, setFeedbackRating] = useState(5);
  const [feedbackStatus, setFeedbackStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSendFeedback = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackEmail || !feedbackMessage) return;

    setFeedbackStatus('submitting');
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: feedbackName,
          email: feedbackEmail,
          subject: feedbackSubject,
          message: feedbackMessage,
          rating: feedbackRating
        })
      });

      if (response.ok) {
        setFeedbackStatus('success');
      } else {
        setFeedbackStatus('error');
      }
    } catch (err) {
      console.error('Error submitting feedback through API:', err);
      setFeedbackStatus('error');
    }
  };

  const getMailtoLink = () => {
    const recipient = 'peterfi.zoltan@pte.hu';
    const subject = encodeURIComponent(feedbackSubject || 'SepsisDose Visszajelzés');
    const bodyText = `Név: ${feedbackName || 'Névtelen látogató'}
E-mail: ${feedbackEmail}
Értékelés: ${feedbackRating}/5 csillag

Üzenet:
${feedbackMessage}`;
    const body = encodeURIComponent(bodyText);
    return `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  const resetFeedbackForm = () => {
    setFeedbackName('');
    setFeedbackEmail('');
    setFeedbackSubject('SepsisDose Visszajelzés');
    setFeedbackMessage('');
    setFeedbackRating(5);
    setFeedbackStatus('idle');
  };
  
  // Bookmarks state (persisted via localStorage)
  const [bookmarkedAntibiotics, setBookmarkedAntibiotics] = useState<string[]>(() => {
    const saved = localStorage.getItem('ab_bookmarks');
    return saved ? JSON.parse(saved) : ['amoxicillin_clavulanate', 'ceftriaxone'];
  });

  const [bookmarkedInfections, setBookmarkedInfections] = useState<string[]>(() => {
    const saved = localStorage.getItem('inf_bookmarks');
    return saved ? JSON.parse(saved) : ['cap_severe'];
  });

  // Update live UTC time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const utcString = now.toUTCString().replace('GMT', 'UTC');
      setUtcTime(utcString);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Sync bookmarks to localStorage
  useEffect(() => {
    localStorage.setItem('ab_bookmarks', JSON.stringify(bookmarkedAntibiotics));
  }, [bookmarkedAntibiotics]);

  useEffect(() => {
    localStorage.setItem('inf_bookmarks', JSON.stringify(bookmarkedInfections));
  }, [bookmarkedInfections]);

  const toggleAbBookmark = (id: string) => {
    setBookmarkedAntibiotics(prev => 
      prev.includes(id) ? prev.filter(bId => bId !== id) : [...prev, id]
    );
  };

  const toggleInfBookmark = (id: string) => {
    setBookmarkedInfections(prev => 
      prev.includes(id) ? prev.filter(bId => bId !== id) : [...prev, id]
    );
  };

  // Quick navigation to bookmarks
  const [quickDetailAb, setQuickDetailAb] = useState<Antibiotic | null>(null);
  const [quickDetailInf, setQuickDetailInf] = useState<ClinicalInfection | null>(null);

  const tabs = [
    { id: 'pharma', labelKey: 'tab_pharma_label', icon: Layers, descKey: 'tab_pharma_desc' },
    { id: 'clinical', labelKey: 'tab_clinical_label', icon: Stethoscope, descKey: 'tab_clinical_desc' },
    { id: 'micro', labelKey: 'tab_micro_label', icon: Bug, descKey: 'tab_micro_desc' },
    { id: 'tdm', labelKey: 'tab_tdm_label', icon: Calculator, descKey: 'tab_tdm_desc' },
    { id: 'renal', labelKey: 'tab_renal_label', icon: TrendingDown, descKey: 'tab_renal_desc' },
    { id: 'quiz', labelKey: 'tab_quiz_label', icon: GraduationCap, descKey: 'tab_quiz_desc' },
    { id: 'ai', labelKey: 'tab_ai_label', icon: Brain, descKey: 'tab_ai_desc' }
  ] as const;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans flex flex-col antialiased">
      {/* Clinician Top Alert Bar */}
      <div className="bg-slate-900 border-b border-slate-800 text-slate-400 py-1.5 px-4 text-[10px] sm:text-xs font-semibold flex justify-between items-center z-30">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            {t('SYSTEM_ACTIVE')}
          </span>
          <span className="hidden md:inline text-slate-600">|</span>
          <span className="hidden md:inline">{t('SYSTEM_DESC')}</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-slate-400">
          <Clock className="w-3.5 h-3.5 text-slate-500" />
          <span>{utcTime || t('LOADING')}</span>
        </div>
      </div>

      {/* Main Professional Header */}
      <header className="bg-slate-900 border-b border-slate-800 text-white py-4 px-6 sticky top-0 z-20 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 border border-blue-700/20 text-white rounded-lg flex items-center justify-center shadow-md">
              <Stethoscope className="w-5.5 h-5.5 font-extrabold" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight leading-tight flex items-center gap-2">
                {t('TITLE')} <span className="text-blue-400 font-normal text-sm bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">AI</span>
              </h1>
              <p className="text-xs text-slate-400 mt-0.5 font-medium">
                {t('SUBTITLE')}
              </p>
              <p className="text-[11px] text-blue-300 mt-1 font-semibold opacity-90">
                {t('CREATED_BY')}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
            {/* Feedback Button next to Language Selector */}
            <button
              id="header-feedback-button"
              onClick={() => {
                resetFeedbackForm();
                setIsFeedbackOpen(true);
              }}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs px-3.5 py-1.5 rounded-lg shadow-lg hover:shadow-emerald-900/30 transition-all duration-150 border border-emerald-500/30 cursor-pointer relative overflow-hidden group active:scale-95"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-300"></span>
              </span>
              <MessageSquare className="w-3.5 h-3.5 text-emerald-100 group-hover:rotate-6 transition-transform" />
              <span>{t('FEEDBACK_SHORT')}</span>
            </button>

            {/* Language Selector */}
            <div className="flex items-center gap-1 bg-slate-800 border border-slate-700 p-1 rounded-lg">
              {(['hu', 'en', 'de'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2.5 py-1 rounded text-xs font-bold uppercase transition-all duration-150 ${
                    language === lang 
                      ? 'bg-blue-600 text-white shadow-sm' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Version badge */}
            <span className="text-[10px] bg-slate-800 border border-slate-700 text-slate-300 font-bold px-2.5 py-1.5 rounded-md shrink-0">
              {t('VERSION_GUIDELINES')}
            </span>
          </div>
        </div>
      </header>

      {/* Primary Dashboard Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Navigation Tabs and Left Bookmarks (3 cols on XL) */}
        <div className="xl:col-span-3 space-y-6">
          {/* PWA Install Promo Box */}
          {(showInstallBtn || (isIOS && !window.matchMedia('(display-mode: standalone)').matches)) && (
            <div className="bg-slate-900 border border-slate-800 text-white rounded-2xl p-4 shadow-lg space-y-3 relative overflow-hidden">
              <div className="absolute right-[-10px] bottom-[-15px] opacity-10">
                <Download className="w-20 h-20 rotate-12 text-slate-400" />
              </div>
              <div className="relative z-10">
                <h4 className="font-extrabold text-xs uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  {t('PWA_INSTALL')}
                </h4>
                <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                  {isIOS ? t('PWA_IOS_INSTRUCTION') : t('PWA_INSTALL_DESC')}
                </p>
                {!isIOS && showInstallBtn && (
                  <button
                    onClick={handleInstallClick}
                    className="mt-3 w-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs py-2 px-3 rounded-xl shadow-sm transition-all duration-150 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    {t('PWA_INSTALL')}
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Tab buttons card */}
          <nav className="bg-white rounded-2xl border border-slate-200/75 shadow-sm p-2 flex flex-row xl:flex-col gap-1 overflow-x-auto xl:overflow-visible sticky xl:top-24">
            {tabs.map((tab) => {
              const IconComp = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setQuickDetailAb(null);
                    setQuickDetailInf(null);
                  }}
                  className={`flex flex-col xl:flex-row items-center xl:items-start gap-2 px-3 py-2.5 xl:py-3 rounded-xl text-center xl:text-left transition-all duration-200 shrink-0 select-none ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/10' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                  style={{ minWidth: '95px' }}
                >
                  <IconComp className={`w-5 h-5 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <div>
                    <span className="text-xs font-bold block leading-none">{t(tab.labelKey)}</span>
                    <span className={`text-[9px] mt-0.5 hidden xl:block font-medium ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                      {t(tab.descKey)}
                    </span>
                  </div>
                </button>
              );
            })}
          </nav>



          {/* Bookmarks Quick Drawer */}
          <div className="bg-white rounded-2xl border border-slate-200/75 p-4 shadow-sm space-y-4 hidden xl:block">
            <div className="flex items-center gap-1.5 border-b border-slate-100 pb-2.5 text-slate-800">
              <Bookmark className="w-4 h-4 text-blue-600" />
              <h3 className="font-extrabold text-xs uppercase tracking-wider">{t('BOOKMARKS_TITLE')}</h3>
            </div>

            {/* Antibiotics bookmarks */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">{t('BOOKMARKS_ANTIBIOTICS')}</span>
              {bookmarkedAntibiotics.length > 0 ? (
                <div className="space-y-1">
                  {bookmarkedAntibiotics.map(abId => {
                    const ab = antibioticsData.find(a => a.id === abId);
                    if (!ab) return null;
                    return (
                      <button
                        key={abId}
                        onClick={() => {
                          setActiveTab('pharma');
                          setQuickDetailAb(ab);
                        }}
                        className="w-full flex justify-between items-center text-xs p-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors border border-slate-200/40 font-semibold"
                      >
                        <span className="truncate">{tg(ab.name)}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      </button>
                    );
                  })}
                </div>
              ) : (
                <p className="text-[10px] text-slate-400 italic">{t('NO_BOOKMARKS_ANTIBIOTICS')}</p>
              )}
            </div>

            {/* Infections bookmarks */}
            <div className="space-y-2 border-t border-slate-100 pt-3">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">{t('BOOKMARKS_INFECTIONS')}</span>
              {bookmarkedInfections.length > 0 ? (
                <div className="space-y-1">
                  {bookmarkedInfections.map(infId => {
                    const inf = clinicalInfectionsData.find(i => i.id === infId);
                    if (!inf) return null;
                    return (
                      <button
                        key={infId}
                        onClick={() => {
                          setActiveTab('clinical');
                          setQuickDetailInf(inf);
                        }}
                        className="w-full flex justify-between items-center text-xs p-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors border border-slate-200/40 font-semibold"
                      >
                        <span className="truncate">{tg(inf.name)}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      </button>
                    );
                  })}
                </div>
              ) : (
                <p className="text-[10px] text-slate-400 italic">{t('NO_BOOKMARKS_INFECTIONS')}</p>
              )}
            </div>
          </div>
        </div>

        {/* Primary Content View Area (9 cols on XL) */}
        <main className="xl:col-span-9 bg-white rounded-2xl border border-slate-200/75 shadow-sm p-4 md:p-6 min-h-[500px]">
          {/* Temporary Detail Sheet overlay for Bookmarks */}
          {quickDetailAb && (
            <div className="mb-6 bg-blue-50/50 p-4 rounded-xl border border-blue-200 text-xs flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <Info className="w-4 h-4 text-blue-600" />
                <span>{t('DETAILS_OPENED_AB')}: <strong>{tg(quickDetailAb.name)}</strong></span>
              </div>
              <button 
                onClick={() => setQuickDetailAb(null)} 
                className="font-bold text-blue-700 bg-blue-100 hover:bg-blue-200 px-2 py-1 rounded"
              >
                {t('CLOSE')}
              </button>
            </div>
          )}

          {activeTab === 'pharma' && <PharmacologyView />}
          {activeTab === 'clinical' && <ClinicalView />}
          {activeTab === 'micro' && <MicrobiologyView />}
          {activeTab === 'tdm' && <TdmCalculatorView />}
          {activeTab === 'renal' && <RenalDosingView />}
          {activeTab === 'quiz' && <PracticeView />}
          {activeTab === 'ai' && <AiConsultantView />}
        </main>
      </div>

      {/* Shared Footer */}
      <footer className="bg-white border-t border-slate-200/80 py-4 px-6 text-center text-xs text-slate-400 font-medium">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>{t('FOOTER_COPYRIGHT')}</p>
          
          {/* Mini mobile-friendly stats */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] text-slate-400 font-bold">
            <span className="flex items-center gap-1 bg-slate-50 border border-slate-200/80 px-2.5 py-1.5 rounded-xl shadow-xs">
              <Eye className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{stats.visits || 1} {t('STATS_VISITS').toLowerCase()}</span>
            </span>
            <span className="flex items-center gap-1 bg-slate-50 border border-slate-200/80 px-2.5 py-1.5 rounded-xl shadow-xs">
              <Download className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{stats.downloads || 0} {t('STATS_DOWNLOADS').toLowerCase()}</span>
            </span>
          </div>
          
          <p className="italic text-[10px] text-slate-400">{t('SHARED_FOOTER_DISCLAIMER')}</p>
        </div>
      </footer>

      {/* Feedback Modal */}
      {isFeedbackOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-lg w-full overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="bg-slate-900 text-white p-4 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-400" />
                <h3 className="font-extrabold text-sm uppercase tracking-wider">{t('FEEDBACK_TITLE')}</h3>
              </div>
              <button
                onClick={() => setIsFeedbackOpen(false)}
                className="text-slate-400 hover:text-white transition-colors p-1"
              >
                <span className="text-xl font-bold">&times;</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 overflow-y-auto space-y-4">
              {feedbackStatus === 'success' ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-100 shadow-sm">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-extrabold text-base text-slate-800">{t('FEEDBACK_SUCCESS')}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed max-w-sm mx-auto">
                      {t('FEEDBACK_SUCCESS_EMAIL_PROMPT')}
                    </p>
                  </div>
                  <div className="pt-2 flex flex-col gap-2 max-w-xs mx-auto">
                    <a
                      href={getMailtoLink()}
                      className="w-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs py-2.5 px-4 rounded-xl shadow-sm transition-all duration-150 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      {t('FEEDBACK_EMAIL_CLIENT_BTN')}
                    </a>
                    <button
                      onClick={() => setIsFeedbackOpen(false)}
                      className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs py-2 px-4 rounded-xl transition-all duration-150"
                    >
                      {t('CLOSE')}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSendFeedback} className="space-y-4 text-left">
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {t('FEEDBACK_DESC')}
                  </p>

                  {/* Rating Selector */}
                  <div className="space-y-1.5 bg-slate-50 border border-slate-200/50 p-3 rounded-xl">
                    <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                      {t('FEEDBACK_RATING')}
                    </label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFeedbackRating(star)}
                          className="p-0.5 hover:scale-110 transition-transform duration-100 outline-none"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              star <= feedbackRating
                                ? 'text-amber-400 fill-amber-400'
                                : 'text-slate-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name field */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                      {t('FEEDBACK_NAME')}
                    </label>
                    <input
                      type="text"
                      value={feedbackName}
                      onChange={(e) => setFeedbackName(e.target.value)}
                      placeholder="Dr. Kovács János"
                      className="w-full border border-slate-200 rounded-xl p-2.5 text-xs focus:ring-1 focus:ring-blue-500 outline-none bg-white text-slate-800"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                      {t('FEEDBACK_EMAIL')} *
                    </label>
                    <input
                      type="email"
                      required
                      value={feedbackEmail}
                      onChange={(e) => setFeedbackEmail(e.target.value)}
                      placeholder="kovacs.janos@example.com"
                      className="w-full border border-slate-200 rounded-xl p-2.5 text-xs focus:ring-1 focus:ring-blue-500 outline-none bg-white text-slate-800"
                    />
                  </div>

                  {/* Subject field */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                      {t('FEEDBACK_SUBJECT')} *
                    </label>
                    <input
                      type="text"
                      required
                      value={feedbackSubject}
                      onChange={(e) => setFeedbackSubject(e.target.value)}
                      className="w-full border border-slate-200 rounded-xl p-2.5 text-xs focus:ring-1 focus:ring-blue-500 outline-none bg-white text-slate-800"
                    />
                  </div>

                  {/* Message field */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                      {t('FEEDBACK_MESSAGE')} *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={feedbackMessage}
                      onChange={(e) => setFeedbackMessage(e.target.value)}
                      placeholder="Megjegyzések, kérdések, fejlesztési javaslatok..."
                      className="w-full border border-slate-200 rounded-xl p-2.5 text-xs focus:ring-1 focus:ring-blue-500 outline-none bg-white text-slate-800 resize-none"
                    />
                  </div>

                  {feedbackStatus === 'error' && (
                    <p className="text-red-500 text-xs font-bold bg-red-50 border border-red-200 p-2 rounded-lg">
                      {t('FEEDBACK_ERROR')}
                    </p>
                  )}

                  {/* Submit Buttons */}
                  <div className="flex gap-2.5 pt-2 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setIsFeedbackOpen(false)}
                      className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs py-2.5 px-4 rounded-xl transition-all duration-150 cursor-pointer"
                    >
                      {t('CLOSE')}
                    </button>
                    <button
                      type="submit"
                      disabled={feedbackStatus === 'submitting'}
                      className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs py-2.5 px-4 rounded-xl shadow-sm transition-all duration-150 flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                    >
                      {feedbackStatus === 'submitting' ? t('FEEDBACK_SUBMITTING') : t('FEEDBACK_SEND_API')}
                    </button>
                  </div>

                  {/* Mailto Fallback Link */}
                  <div className="text-center pt-2">
                    <a
                      href={getMailtoLink()}
                      className="text-[11px] text-blue-600 hover:text-blue-500 font-extrabold hover:underline"
                    >
                      {t('FEEDBACK_SEND_MAIL')}
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
