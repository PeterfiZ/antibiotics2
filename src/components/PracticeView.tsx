/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { QuizQuestion } from '../types';
import { GraduationCap, Trophy, ArrowRight, RotateCcw, Check, X, ShieldAlert, HeartPulse, ListChecks, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage, TransText } from '../lib/LanguageContext';

export default function PracticeView() {
  const { t, tg, quizQuestionsData } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswerIdx, setSelectedAnswerIdx] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [answeredQuestionsList, setAnsweredQuestionsList] = useState<{ question: QuizQuestion; chosen: number; isCorrect: boolean }[]>([]);

  // Filter questions based on selected category
  const filteredQuestions = useMemo(() => {
    if (selectedCategory === 'all') return quizQuestionsData;
    return quizQuestionsData.filter(q => q.type === selectedCategory);
  }, [selectedCategory]);

  const currentQuestion = useMemo(() => {
    if (filteredQuestions.length === 0 || currentQuestionIdx >= filteredQuestions.length) return null;
    return filteredQuestions[currentQuestionIdx];
  }, [filteredQuestions, currentQuestionIdx]);

  const handleAnswerClick = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswerIdx(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswerIdx === null || isAnswerSubmitted || !currentQuestion) return;

    const isCorrect = selectedAnswerIdx === currentQuestion.correctAnswerIndex;
    setIsAnswerSubmitted(true);
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    setAnsweredQuestionsList(prev => [
      ...prev,
      {
        question: currentQuestion,
        chosen: selectedAnswerIdx,
        isCorrect
      }
    ]);
  };

  const handleNextQuestion = () => {
    setSelectedAnswerIdx(null);
    setIsAnswerSubmitted(false);

    if (currentQuestionIdx + 1 < filteredQuestions.length) {
      setCurrentQuestionIdx(prev => prev + 1);
    } else {
      setIsQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIdx(0);
    setSelectedAnswerIdx(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsQuizFinished(false);
    setAnsweredQuestionsList([]);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentQuestionIdx(0);
    setSelectedAnswerIdx(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsQuizFinished(false);
    setAnsweredQuestionsList([]);
  };

  const getResultsFeedback = (percentage: number) => {
    if (percentage === 100) {
      return { 
        title: t('FEEDBACK_100_TITLE'), 
        desc: t('FEEDBACK_100_DESC'), 
        color: "text-emerald-700 bg-emerald-50 border-emerald-200" 
      };
    }
    if (percentage >= 80) {
      return { 
        title: t('FEEDBACK_80_TITLE'), 
        desc: t('FEEDBACK_80_DESC'), 
        color: "text-blue-700 bg-blue-50 border-blue-200" 
      };
    }
    if (percentage >= 60) {
      return { 
        title: t('FEEDBACK_60_TITLE'), 
        desc: t('FEEDBACK_60_DESC'), 
        color: "text-amber-700 bg-amber-50 border-amber-200" 
      };
    }
    return { 
      title: t('FEEDBACK_0_TITLE'), 
      desc: t('FEEDBACK_0_DESC'), 
      color: "text-red-700 bg-red-50 border-red-200" 
    };
  };

  const quizPercentage = useMemo(() => {
    if (filteredQuestions.length === 0) return 0;
    return Math.round((score / filteredQuestions.length) * 100);
  }, [score, filteredQuestions]);

  const feedback = useMemo(() => getResultsFeedback(quizPercentage), [quizPercentage]);

  const getTopicLabel = (type?: string) => {
    switch (type) {
      case 'pharmacology': return t('PRACTICE_PHARMACOLOGY');
      case 'empirical': return t('PRACTICE_EMPIRICAL_THERAPY');
      case 'susceptibility': return t('PRACTICE_SUSCEPTIBILITY');
      default: return '';
    }
  };

  return (
    <div id="practice-view" className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-blue-600" />
            {t('PRACTICE_TITLE')}
          </h2>
          <p className="text-slate-500 text-sm mt-0.5">
            {t('PRACTICE_SUBTITLE')}
          </p>
        </div>

        {/* Category filters */}
        <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200/50 self-end text-xs">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`px-3 py-1.5 rounded-md font-semibold transition-all ${
              selectedCategory === 'all' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            {t('PRACTICE_ALL_QUESTIONS')}
          </button>
          <button
            onClick={() => handleCategoryChange('pharmacology')}
            className={`px-3 py-1.5 rounded-md font-semibold transition-all ${
              selectedCategory === 'pharmacology' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            {t('PRACTICE_PHARMACOLOGY')}
          </button>
          <button
            onClick={() => handleCategoryChange('empirical')}
            className={`px-3 py-1.5 rounded-md font-semibold transition-all ${
              selectedCategory === 'empirical' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            {t('PRACTICE_EMPIRICAL_THERAPY')}
          </button>
          <button
            onClick={() => handleCategoryChange('susceptibility')}
            className={`px-3 py-1.5 rounded-md font-semibold transition-all ${
              selectedCategory === 'susceptibility' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            {t('PRACTICE_SUSCEPTIBILITY')}
          </button>
        </div>
      </div>

      {filteredQuestions.length === 0 ? (
        <div className="text-center py-16 bg-white border border-slate-200 rounded-xl text-slate-400">
          <HelpCircle className="w-12 h-12 mx-auto text-slate-300 mb-2" />
          <p>{t('PRACTICE_NO_QUESTIONS')}</p>
        </div>
      ) : isQuizFinished ? (
        /* COMPLETED SCREEN */
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 md:p-8 text-center space-y-6"
        >
          <div className="max-w-md mx-auto space-y-4">
            <div className="w-20 h-20 bg-blue-50 border border-blue-200 text-blue-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <Trophy className="w-10 h-10" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">{t('PRACTICE_QUIZ_FINISHED')}</span>
              <h3 className="text-3xl font-extrabold text-slate-800">{t('PRACTICE_YOUR_SCORE')}:</h3>
              <div className="text-5xl font-black text-blue-700 mt-2">
                {score} / {filteredQuestions.length}
                <span className="text-2xl text-slate-400 font-normal ml-1">({quizPercentage}%)</span>
              </div>
            </div>

            {/* Specialized feedback card */}
            <div className={`p-4 rounded-xl border text-left space-y-1.5 ${feedback.color}`}>
              <h4 className="font-extrabold text-base flex items-center gap-1.5">
                <ListChecks className="w-5 h-5 shrink-0" />
                {feedback.title}
              </h4>
              <p className="text-xs leading-relaxed font-normal">{feedback.desc}</p>
            </div>

            <button
              onClick={handleRestartQuiz}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <RotateCcw className="w-4 h-4" /> {t('PRACTICE_RESTART')}
            </button>
          </div>

          {/* Answered questions review logs */}
          <div className="text-left border-t border-slate-100 pt-6 mt-6 max-w-3xl mx-auto space-y-4">
            <h4 className="font-extrabold text-slate-800 text-sm">{t('PRACTICE_ANSWERS_REVIEW')}:</h4>
            <div className="space-y-3">
              {answeredQuestionsList.map((log, i) => (
                <div key={i} className={`p-4 rounded-lg border text-xs ${
                  log.isCorrect ? 'bg-emerald-50/40 border-emerald-100' : 'bg-red-50/40 border-red-100'
                }`}>
                  <div className="flex justify-between items-start gap-4">
                    <p className="font-bold text-slate-800 leading-relaxed">
                      {i + 1}. <TransText text={log.question.questionText} />
                    </p>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold border shrink-0 ${
                      log.isCorrect ? 'bg-emerald-100 text-emerald-800 border-emerald-200' : 'bg-red-100 text-red-800 border-red-200'
                    }`}>
                      {log.isCorrect ? t('CORRECT') : t('INCORRECT')}
                    </span>
                  </div>
                  <div className="mt-2.5 space-y-1">
                    <p className="text-slate-500">
                      {t('CHOSEN_OPTION')}: <span className="font-bold text-slate-700">
                        <TransText text={log.question.options[log.chosen]} />
                      </span>
                    </p>
                    {!log.isCorrect && (
                      <p className="text-emerald-700">
                        {t('CORRECT_OPTION')}: <span className="font-bold">
                          <TransText text={log.question.options[log.question.correctAnswerIndex]} />
                        </span>
                      </p>
                    )}
                    <p className="text-slate-600 border-t border-slate-200/50 pt-2 mt-2 leading-relaxed italic">
                      <strong>{t('EXPLANATION')}:</strong> <TransText text={log.question.explanation} />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ) : (
        /* QUIZ ACTIVE VIEW */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left panel: Clinical Case card if available (7 cols) or generic info */}
          <div className="lg:col-span-5 space-y-4">
            {currentQuestion?.caseData ? (
              /* High-fidelity Case Study card */
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-900 text-slate-100 rounded-xl border border-slate-800 overflow-hidden shadow-md"
              >
                <div className="bg-gradient-to-r from-red-950 to-slate-900 px-4 py-3 border-b border-red-900/40 flex items-center gap-2">
                  <HeartPulse className="w-5 h-5 text-red-500 animate-pulse" />
                  <span className="font-extrabold text-xs tracking-wider uppercase text-red-400">{t('ACTIVE_PATIENT_CASE')}</span>
                </div>
                <div className="p-4 space-y-4">
                  {/* Demographics */}
                  <div className="grid grid-cols-2 gap-4 text-xs border-b border-slate-800 pb-3">
                    <div>
                      <span className="text-slate-500 font-semibold uppercase block">{t('AGE_GENDER')}</span>
                      <span className="text-sm font-bold text-slate-200 block mt-0.5">
                        {currentQuestion.caseData.age} {t('YEARS_OLD_SUFFIX')} <TransText text={currentQuestion.caseData.gender} />
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500 font-semibold uppercase block font-mono">{t('CLASSIFICATION')}</span>
                      <span className="text-xs font-semibold text-blue-400 block mt-1">{t('EMERGENCY_ADMISSION')}</span>
                    </div>
                  </div>

                  {/* Symptoms */}
                  <div className="text-xs space-y-1">
                    <span className="text-slate-500 font-semibold uppercase block">{t('CHIEF_COMPLAINTS')}</span>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {currentQuestion.caseData.symptoms.map((sym, idx) => (
                        <span key={idx} className="bg-slate-800 text-slate-200 px-2 py-1 rounded font-medium border border-slate-700">
                          • <TransText text={sym} />
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Vitals Dashboard */}
                  <div className="space-y-1">
                    <span className="text-xs text-slate-500 font-semibold uppercase block">{t('VITALS')}</span>
                    <div className="grid grid-cols-4 gap-2 pt-1 text-center font-mono">
                      <div className="bg-slate-800 p-2 rounded border border-slate-700/60">
                        <span className="text-[9px] text-slate-400 block uppercase">{t('BLOOD_PRESSURE')}</span>
                        <span className="text-xs font-bold text-slate-100 block mt-0.5">{currentQuestion.caseData.vitals.bp}</span>
                      </div>
                      <div className="bg-slate-800 p-2 rounded border border-slate-700/60">
                        <span className="text-[9px] text-slate-400 block uppercase">{t('HEART_RATE')}</span>
                        <span className="text-xs font-bold text-red-400 block mt-0.5">{currentQuestion.caseData.vitals.hr}/perc</span>
                      </div>
                      <div className="bg-slate-800 p-2 rounded border border-slate-700/60">
                        <span className="text-[9px] text-slate-400 block uppercase">{t('TEMPERATURE')}</span>
                        <span className="text-xs font-bold text-amber-400 block mt-0.5">{currentQuestion.caseData.vitals.temp}</span>
                      </div>
                      <div className="bg-slate-800 p-2 rounded border border-slate-700/60">
                        <span className="text-[9px] text-slate-400 block uppercase">{t('RESPIRATION')}</span>
                        <span className="text-xs font-bold text-slate-100 block mt-0.5">{currentQuestion.caseData.vitals.rr}/perc</span>
                      </div>
                    </div>
                  </div>

                  {/* Labs and diagnostics */}
                  <div className="text-xs bg-slate-950 p-3 rounded-lg border border-slate-800/80 space-y-1">
                    <span className="text-slate-500 font-semibold uppercase block">{t('CLINICAL_LABS_TESTS')}</span>
                    <ul className="space-y-1 list-disc list-inside text-slate-300 font-medium pl-1">
                      {currentQuestion.caseData.labs.map((lab, idx) => (
                        <li key={idx} className="leading-relaxed">
                          <TransText text={lab} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Concept Question sidecard */
              <div className="bg-white p-6 rounded-xl border border-slate-200 text-center space-y-3 h-full flex flex-col justify-center items-center">
                <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-2">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-800 text-sm">{t('THEORETICAL_QUESTION')}</h4>
                <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                  {t('THEORETICAL_QUESTION_DESC')}
                </p>
              </div>
            )}
          </div>

          {/* Right panel: Active Question options & Submit (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Progress counter */}
            <div className="flex justify-between items-center text-xs text-slate-500">
              <span className="font-semibold uppercase text-blue-600">
                {t('PRACTICE_TOPIC')}: {getTopicLabel(currentQuestion?.type)}
              </span>
              <span className="font-bold">
                {t('PRACTICE_QUESTION')}: {currentQuestionIdx + 1} / {filteredQuestions.length}
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-blue-600 h-full transition-all duration-300"
                style={{ width: `${((currentQuestionIdx + 1) / filteredQuestions.length) * 100}%` }}
              />
            </div>

            {/* Question Text */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-extrabold text-slate-800 text-base leading-relaxed">
                <TransText text={currentQuestion?.questionText || ''} />
              </h3>

              {/* Options list */}
              <div className="space-y-2.5">
                {currentQuestion?.options.map((option, idx) => {
                  const isSelected = selectedAnswerIdx === idx;
                  const isCorrectAnswer = currentQuestion.correctAnswerIndex === idx;
                  
                  let optionClass = "border-slate-200 hover:bg-slate-50 text-slate-700 hover:border-slate-300 bg-white";
                  if (isSelected && !isAnswerSubmitted) {
                    optionClass = "border-blue-500 bg-blue-50 text-blue-800 ring-2 ring-blue-500/20";
                  } else if (isAnswerSubmitted) {
                    if (isCorrectAnswer) {
                      optionClass = "border-emerald-500 bg-emerald-50 text-emerald-800 ring-2 ring-emerald-500/10";
                    } else if (isSelected) {
                      optionClass = "border-red-500 bg-red-50 text-red-800 ring-2 ring-red-500/10";
                    } else {
                      optionClass = "border-slate-100 bg-slate-50 text-slate-400 opacity-60";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswerClick(idx)}
                      disabled={isAnswerSubmitted}
                      className={`w-full text-left p-3.5 border rounded-lg text-xs font-semibold flex justify-between items-center transition-all ${optionClass}`}
                    >
                      <div className="flex gap-2.5 items-center">
                        <span className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200/60 flex items-center justify-center font-bold text-slate-500 text-[10px] shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="leading-relaxed">
                          <TransText text={option} />
                        </span>
                      </div>
                      {isAnswerSubmitted && isCorrectAnswer && (
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 font-extrabold" />
                      )}
                      {isAnswerSubmitted && isSelected && !isCorrectAnswer && (
                        <X className="w-4 h-4 text-red-600 shrink-0 font-extrabold" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Submit / Next Button */}
              <div className="flex justify-end pt-2 border-t border-slate-100">
                {!isAnswerSubmitted ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={selectedAnswerIdx === null}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-bold py-2 px-5 rounded-lg text-xs shadow-sm transition-colors flex items-center gap-1.5"
                  >
                    {t('SUBMIT_ANSWER')}
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-lg text-xs shadow-sm transition-colors flex items-center gap-1.5"
                  >
                    {currentQuestionIdx + 1 < filteredQuestions.length ? t('NEXT_QUESTION') : t('VIEW_RESULTS')}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Explanation box after answer is submitted */}
            {isAnswerSubmitted && currentQuestion && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl border leading-relaxed text-xs ${
                  selectedAnswerIdx === currentQuestion.correctAnswerIndex
                    ? 'bg-emerald-50 text-emerald-900 border-emerald-200'
                    : 'bg-red-50 text-red-900 border-red-200'
                }`}
              >
                <div className="flex items-center gap-1.5 font-bold mb-1">
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  <span>{t('CLINICAL_PHARMACOLOGICAL_EXPLANATION')}:</span>
                </div>
                <p className="font-medium">
                  <TransText text={currentQuestion.explanation} />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
