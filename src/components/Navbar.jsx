import React, { useState, useEffect } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { 
  Sun, 
  Moon, 
  Globe, 
  Menu, 
  X, 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';

export const Navbar = () => {
  const { lang, theme, toggleLanguage, toggleTheme, t, isAr } = useThemeLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#experience', label: t.nav.experience },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-lg shadow-violet-500/5 dark:shadow-black/20 border-b border-slate-200/80 dark:border-slate-800/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 via-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-violet-500/30 group-hover:scale-105 transition-transform duration-300">
              <span className="font-extrabold text-sm">{isAr ? 'ج' : 'GA'}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-violet-900 to-slate-800 dark:from-white dark:via-violet-200 dark:to-slate-200 bg-clip-text text-transparent">
                {isAr ? 'جنة عفيفي' : 'Ganna Afifi'}
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-violet-600 dark:text-violet-400">
                {isAr ? 'تصميم واجهات & تطوير' : 'UI/UX & Front-End'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-violet-600 dark:text-slate-300 dark:hover:text-violet-400 hover:bg-violet-500/10 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Controls: Language Toggle, Theme Toggle, Hire Me */}
          <div className="hidden sm:flex items-center gap-2.5">
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/80 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-violet-400 dark:hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 shadow-sm transition-all duration-200"
              title={isAr ? "Switch to English" : "التبديل إلى العربية"}
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-violet-500" />
              <span>{isAr ? 'English' : 'عربي'}</span>
            </button>

            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:border-violet-400 dark:hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 shadow-sm transition-all duration-200"
              title={theme === 'dark' ? 'Switch to Light mode' : 'Switch to Dark mode'}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-violet-600" />
              )}
            </button>

            {/* Quick Contact CTA */}
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-md shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>{t.nav.hireMe}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 ${isAr ? 'rotate-[-90deg]' : ''}`} />
            </a>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex sm:hidden items-center gap-1.5">
            {/* Quick Lang toggle on mobile */}
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-200"
            >
              {isAr ? 'EN' : 'عربي'}
            </button>
            {/* Quick Theme toggle on mobile */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-md border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-violet-600" />
              )}
            </button>
            {/* Hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden glass-card mt-2 mx-4 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-violet-500/10 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-semibold shadow-md shadow-violet-500/25"
            >
              <span>{t.nav.hireMe}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 ${isAr ? 'rotate-[-90deg]' : ''}`} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
