import React, { useEffect } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { 
  X, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  Cpu, 
  ArrowRight,
  ShieldCheck,
  Smartphone,
  BookOpen
} from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  const { t, isAr } = useThemeLanguage();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity"
      ></div>

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl glass-card bg-white/95 dark:bg-slate-900/95 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 z-10 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Top Header with gradient accent */}
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${project.accentColor} text-white relative`}>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 rtl:right-auto rtl:left-5 w-9 h-9 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-sm mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{project.badge}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {project.title}
          </h3>
          <p className="text-white/90 text-xs sm:text-sm mt-1 font-medium">
            {project.role}
          </p>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 dark:text-slate-300">
          
          {/* Key Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-mono">
                  {m.value}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Full Case Study Narrative */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              {isAr ? 'عن دراسة الحالة والمشروع' : 'Case Study & Overview'}
            </h4>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {project.fullDescription}
            </p>
          </div>

          {/* Deliverables & Design Process */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              {isAr ? 'المخرجات ومراحل التصميم' : 'Process & Key Deliverables'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.deliverables.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-violet-500 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Tech Stack */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              {isAr ? 'الأدوات والتقنيات المستخدمة' : 'Tools & Technologies Used'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-900/40 text-xs font-semibold"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            {isAr ? 'تصميم وبحث: جنة محمد عفيفي' : 'Designed & Researched by Ganna Afifi'}
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold transition-all shadow-sm"
          >
            {t.projects.closeModal}
          </button>
        </div>

      </div>
    </div>
  );
};
