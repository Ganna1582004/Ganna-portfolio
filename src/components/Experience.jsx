import React from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { 
  Sparkles, 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  CheckCircle2, 
  Building2,
  ArrowRight
} from 'lucide-react';

export const Experience = () => {
  const { t, isAr } = useThemeLanguage();

  return (
    <section id="experience" className="py-20 sm:py-28 relative bg-slate-100/40 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet-100 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-900/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.experience.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.experience.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            {t.experience.subtitle}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 rtl:border-l-0 rtl:border-r-2 border-violet-300 dark:border-violet-900/60 ml-4 rtl:ml-0 rtl:mr-4 sm:ml-8 rtl:sm:mr-8 space-y-12">
          {t.experience.timeline.map((item, index) => {
            const isEducation = item.company.includes('Thebes');
            return (
              <div key={index} className="relative pl-6 rtl:pl-0 rtl:pr-6 sm:pl-10 rtl:sm:pr-10">
                
                {/* Timeline Dot Icon */}
                <div className={`absolute -left-3.5 rtl:-left-auto rtl:-right-3.5 top-1.5 w-7 h-7 rounded-full flex items-center justify-center text-white ring-4 ring-white dark:ring-slate-950 ${
                  item.active
                    ? 'bg-gradient-to-tr from-emerald-500 to-teal-500 shadow-md shadow-emerald-500/30'
                    : isEducation
                    ? 'bg-gradient-to-tr from-indigo-600 to-violet-600'
                    : 'bg-gradient-to-tr from-violet-600 to-purple-600'
                }`}>
                  {isEducation ? (
                    <GraduationCap className="w-3.5 h-3.5" />
                  ) : (
                    <Briefcase className="w-3.5 h-3.5" />
                  )}
                </div>

                {/* Timeline Card */}
                <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800/80 hover:border-violet-400 dark:hover:border-violet-600/60 shadow-md hover:shadow-xl transition-all duration-300">
                  
                  {/* Card Header: Role & Period */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400 font-mono">
                          {item.type}
                        </span>
                        {item.active && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                            {isAr ? 'حالي' : 'Present'}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1">
                        {item.title}
                      </h3>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-violet-500" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Company / Institution */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3">
                    <Building2 className="w-4 h-4 text-slate-400" />
                    <span>{item.company}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bullet Points */}
                  <div className="space-y-2 mb-5">
                    {item.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-violet-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
