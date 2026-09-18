import React from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { 
  Sparkles, 
  Layout, 
  Code2, 
  GraduationCap, 
  BrainCircuit, 
  Compass, 
  Layers, 
  CheckCircle,
  FileText
} from 'lucide-react';

export const About = () => {
  const { t, isAr } = useThemeLanguage();

  const highlightIcons = {
    Sparkles: BrainCircuit,
    Layout: Layout,
    Code2: Code2
  };

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet-100 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-900/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.about.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Narrative & Visual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left / Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              {t.about.paragraph1}
            </p>
            <p>
              {t.about.paragraph2}
            </p>
            <p className="text-sm sm:text-base border-l-4 rtl:border-l-0 rtl:border-r-4 border-violet-500 pl-4 rtl:pr-4 py-1 italic bg-violet-50/50 dark:bg-violet-950/20 text-slate-700 dark:text-slate-200 rounded-r-lg rtl:rounded-r-none rtl:rounded-l-lg">
              {t.about.paragraph3}
            </p>

            {/* Quick Badges / Micro Tags */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-800 dark:text-slate-200 shadow-sm">
                <GraduationCap className="w-4 h-4 text-violet-500" />
                <span>Thebes Academy (2022-2026)</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-800 dark:text-slate-200 shadow-sm">
                <Compass className="w-4 h-4 text-indigo-500" />
                <span>{isAr ? 'القاهرة، المعادي' : 'Cairo, Al-Maadi'}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-800 dark:text-slate-200 shadow-sm">
                <Layers className="w-4 h-4 text-cyan-500" />
                <span>{isAr ? 'تصميم النظم وتطوير المكونات' : 'Design Systems & Component Architecture'}</span>
              </span>
            </div>
          </div>

          {/* Right / Synergy Architecture Diagram (Abstract, No photo) */}
          <div className="lg:col-span-5">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800/90 shadow-xl relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-violet-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-between">
                <span>{isAr ? 'المثلث الإبداعي لـ جنة عفيفي' : 'The Creative Synergy Triad'}</span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300">
                  Methodology
                </span>
              </h3>

              {/* Visual Connected Nodes */}
              <div className="space-y-3 relative">
                {/* Connector Line */}
                <div className="absolute left-6 rtl:left-auto rtl:right-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-violet-500 via-indigo-500 to-cyan-500"></div>

                {/* Node 1: AI & Logic */}
                <div className="relative flex items-start gap-4 p-3 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 hover:scale-[1.02] transition-transform">
                  <div className="w-12 h-12 rounded-xl bg-violet-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-violet-600/30">
                    <BrainCircuit className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {isAr ? 'الذكاء الاصطناعي وعلوم الحاسب' : 'Artificial Intelligence & CS'}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {isAr ? 'خوارزميات ذكية، هياكل بيانات دقيقة، وحلول تقنية تعتمد على البيانات.' : 'Algorithmic thinking, data structures, and computer vision integration.'}
                    </p>
                  </div>
                </div>

                {/* Node 2: UI/UX Research */}
                <div className="relative flex items-start gap-4 p-3 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 hover:scale-[1.02] transition-transform">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-indigo-600/30">
                    <Layout className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {isAr ? 'تصميم تجربة وواجهة المستخدم' : 'Human-Centered UI/UX'}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {isAr ? 'أبحاث مستخدمين دقيقة، مخططات هيكلية، ونماذج تفاعلية تحل المشكلات الواقعية.' : 'Empirical research, interactive Figma prototypes, and friction-free flows.'}
                    </p>
                  </div>
                </div>

                {/* Node 3: React.js Code */}
                <div className="relative flex items-start gap-4 p-3 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 hover:scale-[1.02] transition-transform">
                  <div className="w-12 h-12 rounded-xl bg-cyan-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-cyan-600/30">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {isAr ? 'هندسة كود React.js المتجاوب' : 'React.js & Clean Front-End'}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {isAr ? 'مكونات سريعة، متوافقة، ومتجاوبة تماماً مع شاشات الهواتف والأجهزة المكتبية.' : 'Reusable, accessible, pixel-perfect components with Tailwind CSS.'}
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {t.about.highlights.map((item, idx) => {
            const IconComponent = highlightIcons[item.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 hover:border-violet-400 dark:hover:border-violet-600/60 transition-all duration-300 hover:-translate-y-1 shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-violet-100 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400 flex items-center justify-center mb-4">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {t.about.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-5 rounded-2xl text-center border border-slate-200/60 dark:border-slate-800/60 hover:border-violet-300 dark:hover:border-violet-800 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 dark:from-violet-400 dark:via-purple-300 dark:to-indigo-300 bg-clip-text text-transparent mb-1 font-mono">
                {stat.number}
              </div>
              <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
