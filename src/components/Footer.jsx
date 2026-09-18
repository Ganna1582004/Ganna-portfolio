import React from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { 
  Linkedin, 
  Github, 
  Mail, 
  ArrowUp, 
  Heart,
  Globe,
  Palette
} from 'lucide-react';

export const Footer = () => {
  const { t, isAr } = useThemeLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-950/80 backdrop-blur-md pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-200/60 dark:border-slate-800/60">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-start space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-md">
                {isAr ? 'ج' : 'GA'}
              </div>
              <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white">
                {t.personal.name}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
              {t.personal.tagline}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <a
              href={t.personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-400 transition-colors shadow-xs"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Behance (SVG / Palette) */}
            <a
              href={t.personal.socials.behance}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance Portfolio"
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-400 transition-colors shadow-xs"
            >
              <Palette className="w-4 h-4" />
            </a>

            {/* GitHub */}
            <a
              href={t.personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-400 transition-colors shadow-xs"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* Direct Email */}
            <a
              href={t.personal.socials.email}
              aria-label="Email Ganna Afifi"
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-400 transition-colors shadow-xs"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-all shadow-xs"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Bottom Sub-row: Dynamic Copyright & Design info */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            &copy; {currentYear} {t.personal.name}. {t.footer.rights}
          </div>
          <div className="flex items-center gap-1">
            <span>{t.footer.designedWith}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
