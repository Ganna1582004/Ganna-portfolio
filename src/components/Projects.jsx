import React, { useState } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { ProjectModal } from './ProjectModal';
import { 
  Sparkles, 
  ArrowUpRight, 
  Layers, 
  ExternalLink, 
  Filter, 
  Activity, 
  Utensils, 
  BookOpen, 
  Cpu, 
  Eye, 
  CheckCircle2,
  Sliders
} from 'lucide-react';

export const Projects = () => {
  const { t, isAr } = useThemeLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterProjects = t.projects.items.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.categories.includes(activeFilter);
  });

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet-100 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-900/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.projects.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.projects.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            {t.projects.subtitle}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {t.projects.filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeFilter === filter.key
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filterProjects.map((project) => (
            <div
              key={project.id}
              className="group glass-card rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-800/90 hover:border-violet-400 dark:hover:border-violet-500/70 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Project Card Visual Mockup Area (No human photos; clean UI vector illustrations) */}
              <div className={`p-6 bg-gradient-to-br ${project.accentColor} relative overflow-hidden text-white flex flex-col justify-between min-h-[220px]`}>
                
                {/* Abstract geometric background patterns */}
                <div className="absolute inset-0 opacity-15 pointer-events-none">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern id={`pattern-${project.id}`} width="24" height="24" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1.5" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#pattern-${project.id})`} />
                  </svg>
                </div>

                {/* Top Badge & Type */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/20 backdrop-blur-md shadow-xs">
                    {project.type}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                    {project.id === 'dermalyze' && <Activity className="w-4 h-4" />}
                    {project.id === 'food-delivery' && <Utensils className="w-4 h-4" />}
                    {project.id === 'reading-app' && <BookOpen className="w-4 h-4" />}
                  </div>
                </div>

                {/* Custom Abstract Mockup Content for each project */}
                <div className="relative z-10 my-auto py-2">
                  {project.id === 'dermalyze' && (
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 space-y-2">
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="flex items-center gap-1 font-mono">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                          AI Scan Active
                        </span>
                        <span className="font-bold">98.4% Match</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-400 rounded-full w-[98%]"></div>
                      </div>
                      <div className="text-[10px] text-white/80 flex justify-between">
                        <span>Melanoma Risk: Low</span>
                        <span>Clinical Flow</span>
                      </div>
                    </div>
                  )}

                  {project.id === 'food-delivery' && (
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 space-y-2">
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="font-semibold">Fast Checkout Flow</span>
                        <span className="bg-white/20 px-1.5 py-0.5 rounded font-mono">3 Steps</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px]">
                        <span className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center font-bold">1</span>
                        <div className="flex-1 h-0.5 bg-white/30"></div>
                        <span className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center font-bold">2</span>
                        <div className="flex-1 h-0.5 bg-white/30"></div>
                        <span className="w-6 h-6 rounded-md bg-white/40 flex items-center justify-center font-bold">3</span>
                      </div>
                    </div>
                  )}

                  {project.id === 'reading-app' && (
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 space-y-2">
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="font-semibold">Reading Companion UX</span>
                        <span className="bg-emerald-400/30 text-white px-1.5 py-0.5 rounded">92% Usability</span>
                      </div>
                      <div className="flex gap-2 text-[10px]">
                        <span className="px-2 py-1 rounded bg-white/20">Dark Mode</span>
                        <span className="px-2 py-1 rounded bg-white/20">Sepia</span>
                        <span className="px-2 py-1 rounded bg-white/20">Focus Mode</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Role indicator */}
                <div className="relative z-10 text-[11px] font-medium text-white/90">
                  {project.role}
                </div>
              </div>

              {/* Project Card Details Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                <div>
                  {/* Tool chips */}
                  <div className="flex flex-wrap gap-1.5 my-4">
                    {project.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Open Case Study Action Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-violet-50 hover:bg-violet-100 dark:bg-violet-950/40 dark:hover:bg-violet-900/50 text-violet-700 dark:text-violet-300 text-xs font-bold transition-all border border-violet-200/80 dark:border-violet-900/50"
                  >
                    <span>{t.projects.viewCaseStudy}</span>
                    <ArrowUpRight className={`w-3.5 h-3.5 ${isAr ? 'rotate-[-90deg]' : ''}`} />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal Popup */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
