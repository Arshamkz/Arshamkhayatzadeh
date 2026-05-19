import React, { createContext, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n/config';

type Language = 'en' | 'fa';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  return <LanguageProviderContent>{children}</LanguageProviderContent>;
}

function LanguageProviderContent({ children }: { children: React.ReactNode }) {
  const { i18n: i18nInstance, t } = useTranslation();
  const language = (i18nInstance.language || 'en') as Language;
  const dir = language === 'fa' ? 'rtl' : 'ltr';

  const setLanguage = (lang: Language) => {
    i18nInstance.changeLanguage(lang);
    
    // Safely update localStorage
    try {
      localStorage.setItem('language', lang);
    } catch (error) {
      // Silently fail if localStorage is not available
      if (import.meta.env.DEV) {
        console.error('Failed to save language to localStorage:', error);
      }
    }
    
    // Update document direction and lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
      document.documentElement.lang = lang;
    }
  };

  // Set initial direction on mount
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.dir = dir;
      document.documentElement.lang = language;
    }
  }, [dir, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}