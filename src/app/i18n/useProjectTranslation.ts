import { useLanguage } from '../contexts/LanguageContext';
import projectsEn from './locales/projects.en.json';
import projectsFa from './locales/projects.fa.json';

export function useProjectTranslation() {
  const { language } = useLanguage();
  
  const getProjectData = (projectId: string) => {
    const data = language === 'fa' ? projectsFa : projectsEn;
    return data[projectId as keyof typeof data];
  };

  return { getProjectData, language };
}
