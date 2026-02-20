import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import fa from './locales/fa.json';
import projectsEn from './locales/projects.en.json';
import projectsFa from './locales/projects.fa.json';

// Safe localStorage access with fallback
const getStoredLanguage = () => {
  try {
    return typeof window !== 'undefined' ? localStorage.getItem('language') : null;
  } catch {
    return null;
  }
};

// Initialize synchronously
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { 
        translation: en,
        projects: projectsEn
      },
      fa: { 
        translation: fa,
        projects: projectsFa
      }
    },
    lng: getStoredLanguage() || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    defaultNS: 'translation',
    ns: ['translation', 'projects'],
    react: {
      useSuspense: false  // Disable suspense to avoid async issues
    },
    debug: false,
    initImmediate: false  // Initialize immediately, not async
  });

export default i18n;