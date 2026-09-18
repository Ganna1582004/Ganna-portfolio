import React, { useState } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { 
  Palette, 
  Code, 
  Cpu, 
  Sparkles, 
  Check, 
  Layers,
  FileCode,
  Terminal,
  Workflow
} from 'lucide-react';

export const Skills = () => {
  const { t, isAr } = useThemeLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categoryIcons = {
    'ui-ux': Palette,
    frontend: Code,
    tools: Cpu
  };

  const categories = t.skills.categories;

  const filteredCategories = selectedCategory === 'all'
    ? categories
    : categories.filter(c => c.id === selectedCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 relative bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet-100 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-900/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.skills.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.skills.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            {t.skills.subtitle}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              selectedCategory === 'all'
                ? 'bg-violet-600 text-white shadow-md shadow-violet-600/25'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
            }`}
          >
            {isAr ? 'كافة المهارات' : 'All Domains'}
          </button>
          {categories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Sparkles;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-600/25'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredCategories.map((category) => {
            const CatIcon = categoryIcons[category.id] || Sparkles;
            return (
              <div
                key={category.id}
                className="glass-card rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800/80 hover:border-violet-400 dark:hover:border-violet-600/60 shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Card Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-violet-600 text-white flex items-center justify-center shadow-md shadow-violet-600/20">
                      <CatIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {category.name}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {category.skills.length} {isAr ? 'مهارات متقنة' : 'Core Skills'}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills List / Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 hover:border-violet-400 dark:hover:border-violet-500 text-xs font-medium text-slate-700 dark:text-slate-200 transition-all duration-200 hover:scale-[1.02] shadow-xs"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
                        <span>{skill.name}</span>
                        <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 border-l rtl:border-l-0 rtl:border-r border-slate-200 dark:border-slate-700 pl-1.5 rtl:pr-1.5 ml-0.5 rtl:mr-0.5">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom decorative bar */}
                <div className="mt-8 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{isAr ? 'كفاءة مهنية معتمدة' : 'Verified Capabilities'}</span>
                  <div className="flex items-center gap-1 text-emerald-500">
                    <Check className="w-3.5 h-3.5" />
                    <span className="font-semibold">{isAr ? 'معايير حديثة' : 'Modern Standards'}</span>
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
