import React, { useState } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { 
  ArrowRight, 
  Sparkles, 
  Send, 
  Code2, 
  Layers, 
  Figma, 
  Cpu, 
  Eye, 
  CheckCircle2, 
  Palette, 
  Play, 
  Terminal,
  MousePointer2,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export const Hero = () => {
  const { t, isAr } = useThemeLanguage();
  const [activeTab, setActiveTab] = useState('design'); // 'design' | 'code'
  const [widgetButtonState, setWidgetButtonState] = useState('active'); // 'default' | 'active'
  const [counter, setCounter] = useState(1);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden radial-gradient-glow">
      {/* Abstract Ambient Gradient Orbs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-violet-500/20 dark:bg-violet-600/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 sm:w-[28rem] sm:h-[28rem] bg-indigo-500/20 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10 animate-float-slow"></div>
      <div className="absolute top-1/2 left-10 w-64 h-64 bg-fuchsia-500/15 dark:bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Text Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-start space-y-6">
            
            {/* Status & Focus Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-200 dark:border-violet-900/60 bg-violet-50/80 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 text-xs font-semibold shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-semibold text-slate-500 dark:text-slate-400 tracking-wide">
                {t.hero.greeting}{' '}
                <span className="text-slate-900 dark:text-white font-bold">{t.personal.name}</span>
              </p>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 dark:from-violet-400 dark:via-purple-300 dark:to-indigo-300 bg-clip-text text-transparent">
                  {t.hero.headlinePrefix}
                </span>{' '}
                <span className="text-slate-400 dark:text-slate-500 font-light">
                  {t.hero.headlineConnector}
                </span>{' '}
                <span className="bg-gradient-to-r from-indigo-600 via-cyan-600 to-teal-500 dark:from-indigo-400 dark:via-cyan-300 dark:to-teal-300 bg-clip-text text-transparent">
                  {t.hero.headlineSuffix}
                </span>
              </h1>
            </div>

            {/* Subtitle / Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {t.hero.bio}
            </p>

            {/* Key Value Micro Badges */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs font-medium text-slate-600 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <Cpu className="w-3.5 h-3.5 text-violet-500" />
                <span>CS & AI Major (Thebes Academy)</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                <span>DEPI Front-End Trainee</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>User-Centric Prototyping</span>
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
              </a>

              <a
                href="#contact"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-semibold text-sm shadow-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                <Send className="w-4 h-4 text-violet-500" />
                <span>{t.hero.ctaSecondary}</span>
              </a>
            </div>

          </div>

          {/* Right Column: High-End Interactive Glassmorphism Design/Code Inspector Card */}
          <div className="lg:col-span-5 relative w-full">
            
            {/* Ambient Backing Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-500 opacity-25 blur-xl group-hover:opacity-40 transition-opacity"></div>
            
            {/* Main Interactive Glass Container */}
            <div className="relative glass-card rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800/90">
              
              {/* Window Header / Window Controls */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-100/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-[11px] font-mono font-medium text-slate-400 dark:text-slate-500 ml-2">
                    {activeTab === 'design' ? 'Figma_Canvas.fig' : 'Component.tsx'}
                  </span>
                </div>

                {/* View Switcher Tabs */}
                <div className="flex items-center p-0.5 bg-slate-200 dark:bg-slate-800 rounded-lg text-xs font-semibold">
                  <button
                    onClick={() => setActiveTab('design')}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all ${
                      activeTab === 'design'
                        ? 'bg-white dark:bg-slate-950 text-violet-600 dark:text-violet-400 shadow-sm'
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>{isAr ? 'تصميم UI' : 'UI Design'}</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('code')}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all ${
                      activeTab === 'code'
                        ? 'bg-white dark:bg-slate-950 text-indigo-600 dark:text-indigo-400 shadow-sm'
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>{isAr ? 'كود React' : 'React Code'}</span>
                  </button>
                </div>
              </div>

              {/* Window Body: Conditional View */}
              <div className="p-5 sm:p-6 min-h-[360px] flex flex-col justify-between">
                
                {activeTab === 'design' ? (
                  /* Figma / UX Design View */
                  <div className="space-y-4">
                    {/* Design Tools Bar */}
                    <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200/60 dark:border-slate-800/60 text-slate-500">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-violet-600 dark:text-violet-400 font-semibold">
                          <MousePointer2 className="w-3.5 h-3.5" /> Select
                        </span>
                        <span className="hover:text-slate-800 dark:hover:text-slate-200 cursor-pointer">Frame</span>
                        <span className="hover:text-slate-800 dark:hover:text-slate-200 cursor-pointer">Shape</span>
                        <span className="hover:text-slate-800 dark:hover:text-slate-200 cursor-pointer">Text</span>
                      </div>
                      <span className="text-[10px] font-mono bg-violet-100 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 px-2 py-0.5 rounded">
                        100% Zoom
                      </span>
                    </div>

                    {/* Interactive UI Mockup Box */}
                    <div className="p-4 rounded-xl bg-gradient-to-b from-slate-100 to-white dark:from-slate-900/90 dark:to-slate-950/90 border border-slate-200 dark:border-slate-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center text-white">
                            <Sparkles className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                              {isAr ? 'بطاقة مواءمة الذكاء الاصطناعي' : 'AI Diagnostic Card'}
                            </div>
                            <div className="text-[10px] text-slate-400">Dermalyze Design Token</div>
                          </div>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          Auto-Layout
                        </span>
                      </div>

                      {/* Interactive Visual Element */}
                      <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs space-y-2">
                        <div className="flex justify-between items-center text-[11px] text-slate-500 dark:text-slate-400">
                          <span>{isAr ? 'حالة التفاعل:' : 'Interactive State:'}</span>
                          <span className="font-semibold text-violet-600 dark:text-violet-400 uppercase text-[10px]">
                            {widgetButtonState}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              setWidgetButtonState('active');
                              setCounter(c => c + 1);
                            }}
                            className={`flex-1 py-2 px-3 rounded-lg font-medium text-xs transition-all flex items-center justify-center gap-1.5 ${
                              widgetButtonState === 'active'
                                ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                            }`}
                          >
                            <Play className="w-3 h-3 fill-current" />
                            <span>{isAr ? 'تجربة النموذج' : 'Test Action'}</span>
                            <span className="ml-1 px-1.5 py-0.2 rounded-full bg-white/20 text-[10px] font-mono">
                              +{counter}
                            </span>
                          </button>
                          <button
                            onClick={() => setWidgetButtonState(s => s === 'hover' ? 'default' : 'hover')}
                            className="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                          >
                            Hover State
                          </button>
                        </div>
                      </div>

                      {/* Design Tokens Palette */}
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                          Tokens:
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span className="w-4 h-4 rounded-full bg-violet-600 ring-2 ring-white dark:ring-slate-900" title="#7c3aed"></span>
                          <span className="w-4 h-4 rounded-full bg-indigo-500 ring-2 ring-white dark:ring-slate-900" title="#6366f1"></span>
                          <span className="w-4 h-4 rounded-full bg-cyan-400 ring-2 ring-white dark:ring-slate-900" title="#22d3ee"></span>
                          <span className="w-4 h-4 rounded-full bg-emerald-400 ring-2 ring-white dark:ring-slate-900" title="#34d399"></span>
                        </div>
                      </div>
                    </div>

                    {/* UX Metric Callout */}
                    <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-violet-500/5 dark:bg-violet-500/10 border border-violet-500/20 text-xs">
                      <div className="flex items-center gap-2">
                        <Palette className="w-4 h-4 text-violet-500" />
                        <span className="font-medium text-slate-700 dark:text-slate-300 text-[11px]">
                          {isAr ? 'توافق كامل مع معايير إتاحة WCAG AAA' : 'WCAG AAA Accessible Design System'}
                        </span>
                      </div>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    </div>
                  </div>
                ) : (
                  /* React Code View */
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-slate-200 dark:border-slate-800">
                      <span className="flex items-center gap-1 text-indigo-500">
                        <Terminal className="w-3.5 h-3.5" /> React.js + Tailwind
                      </span>
                      <span className="text-emerald-500 font-semibold">Compiled: 0 errors</span>
                    </div>

                    {/* Syntax Highlighted Mock Code snippet */}
                    <div className="p-3.5 rounded-xl bg-slate-950 text-slate-200 border border-slate-800 leading-relaxed overflow-x-auto text-[11px]">
                      <div className="text-slate-500">// Modern accessible React component</div>
                      <div>
                        <span className="text-purple-400">export const </span>
                        <span className="text-yellow-300">DermalyzeCard </span>
                        <span className="text-purple-400">= </span>
                        <span className="text-blue-300">() </span>
                        <span className="text-purple-400">=&gt; </span>
                        <span className="text-slate-300">&#123;</span>
                      </div>
                      <div className="pl-4 text-slate-400">
                        <span className="text-purple-400">const </span>
                        <span className="text-slate-200">[status, setStatus]</span>
                        <span className="text-purple-400"> = </span>
                        <span className="text-blue-300">useState</span>
                        <span className="text-slate-300">(&apos;verified&apos;);</span>
                      </div>
                      <div className="pl-4 text-slate-400">
                        <span className="text-purple-400">return </span>
                        <span className="text-slate-300">(</span>
                      </div>
                      <div className="pl-8 text-cyan-300">
                        &lt;<span className="text-rose-400">div </span>
                        <span className="text-amber-300">className</span>=
                        <span className="text-emerald-300">&quot;rounded-2xl p-4 bg-glass border&quot;</span>&gt;
                      </div>
                      <div className="pl-12 text-slate-300">
                        &lt;<span className="text-rose-400">AIConfidenceMeter </span>
                        <span className="text-amber-300">accuracy</span>=
                        <span className="text-emerald-300">&#123;98.4&#125;</span> /&gt;
                      </div>
                      <div className="pl-8 text-cyan-300">&lt;/<span className="text-rose-400">div</span>&gt;</div>
                      <div className="pl-4 text-slate-300">);</div>
                      <div className="text-slate-300">&#125;;</div>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] border border-emerald-500/20">
                      <span className="font-semibold">🚀 Clean Architecture & Reusable Props</span>
                      <span className="font-mono text-[10px]">React 18</span>
                    </div>
                  </div>
                )}

                {/* Bottom interactive card badge */}
                <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
                    <span className="text-[11px] font-medium">{t.hero.techBadge}</span>
                  </div>
                  <a
                    href="#skills"
                    className="inline-flex items-center gap-1 text-[11px] text-violet-600 dark:text-violet-400 hover:underline font-semibold"
                  >
                    <span>{isAr ? 'عرض الأدوات' : 'View Stack'}</span>
                    <ChevronRight className={`w-3 h-3 ${isAr ? 'rotate-180' : ''}`} />
                  </a>
                </div>

              </div>

            </div>

            {/* Floating Decorative Badges (Geometric & Abstract) */}
            <div className="absolute -bottom-4 -left-4 sm:-left-6 glass-card p-3 rounded-2xl shadow-xl border border-white/40 dark:border-slate-800/80 hidden sm:flex items-center gap-3 animate-float-reverse">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="text-start">
                <div className="text-xs font-bold text-slate-900 dark:text-white">React.js & Tailwind</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">Production Front-End</div>
              </div>
            </div>

            <div className="absolute -top-4 -right-2 sm:-right-4 glass-card p-3 rounded-2xl shadow-xl border border-white/40 dark:border-slate-800/80 hidden sm:flex items-center gap-3 animate-float-slow">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-fuchsia-600 flex items-center justify-center text-white shadow-md shadow-violet-600/20">
                <Figma className="w-5 h-5" />
              </div>
              <div className="text-start">
                <div className="text-xs font-bold text-slate-900 dark:text-white">Figma & FigJam</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">User Flows & Prototypes</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
