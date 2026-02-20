import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function VerticalStepper() {
  const { t, language } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: t('nav.home'), icon: '🏠' },
    { id: 'about', label: 'Why Hire Me', icon: '💡' },
    { id: 'projects', label: t('nav.projects'), icon: '🎨' },
    { id: 'experience', label: t('nav.experience'), icon: '💼' },
    { id: 'showcase', label: 'My Process', icon: '🔄' },
    { id: 'contact', label: t('nav.contact'), icon: '📧' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['home', 'about', 'projects', 'experience', 'showcase', 'contact'];
      const currentSection = sectionIds.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isRTL = language === 'fa';

  return (
    <div className={`fixed ${isRTL ? 'right-8' : 'left-8'} top-1/2 -translate-y-1/2 z-50 hidden lg:block`}>
      <div className="flex flex-col gap-6 items-center">
        {sections.map((section, index) => {
          const isActive = activeSection === section.id;
          const isPassed = sections.findIndex(s => s.id === activeSection) >= index;

          return (
            <div key={section.id} className="relative group">
              {/* Connecting Line */}
              {index < sections.length - 1 && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-6 bg-gray-300">
                  <motion.div
                    className="w-full bg-black origin-top"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: isPassed ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              )}

              {/* Circle Button */}
              <button
                onClick={() => scrollToSection(section.id)}
                className="relative select-none"
              >
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all select-none ${
                    isActive
                      ? 'bg-black text-white shadow-xl scale-110'
                      : isPassed
                      ? 'bg-gray-800 text-white shadow-lg'
                      : 'bg-white border-2 border-gray-300 text-gray-400 hover:border-gray-400'
                  }`}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xl">{section.icon}</span>
                </motion.div>

                {/* Active Ring */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-black"
                    initial={{ scale: 1, opacity: 0 }}
                    animate={{ scale: 1.4, opacity: 0 }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  />
                )}
              </button>

              {/* Tooltip Label - position based on language */}
              <div className={`absolute ${isRTL ? 'left-full ml-4' : 'right-full mr-4'} top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}>
                <div className="bg-black text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium shadow-xl relative">
                  {section.label}
                  <div className={`absolute ${isRTL ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'} top-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-black`}></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}