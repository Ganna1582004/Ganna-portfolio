import React, { createContext, useContext, useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

const ThemeLanguageContext = createContext();

export const ThemeLanguageProvider = ({ children }) => {
  // Initialize language from localStorage or default to 'en'
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('ganna_portfolio_lang');
    return saved === 'ar' || saved === 'en' ? saved : 'en';
  });

  // Initialize theme from localStorage or default to 'dark'
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('ganna_portfolio_theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'dark'; // Defaulting to sleek dark theme
  });

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    // Update HTML dir and lang attributes
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('ganna_portfolio_lang', lang);
  }, [lang, dir]);

  useEffect(() => {
    // Update Tailwind dark class on root html element
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('ganna_portfolio_theme', theme);
  }, [theme]);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const t = portfolioData[lang];

  return (
    <ThemeLanguageContext.Provider
      value={{
        lang,
        dir,
        theme,
        toggleLanguage,
        toggleTheme,
        t,
        isAr: lang === 'ar',
      }}
    >
      {children}
    </ThemeLanguageContext.Provider>
  );
};

export const useThemeLanguage = () => {
  const context = useContext(ThemeLanguageContext);
  if (!context) {
    throw new Error('useThemeLanguage must be used within a ThemeLanguageProvider');
  }
  return context;
};
