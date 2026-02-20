import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import React from 'react';
import { X } from 'lucide-react';
import { haptic } from '../utils/haptics';
import { useLanguage } from '../contexts/LanguageContext';

// Import all Atomic Design stage images
import tokensImage from 'figma:asset/e8a0cfc09bd610d7ec46941c996412738142cc5b.png';
import atomsImage from 'figma:asset/cf37d6872859564b6b829947c33f849e68cb88de.png';
import moleculesImage from 'figma:asset/b774e37bec1b852c045c3b520fb9eeebcd50608e.png';
import organismsImage from 'figma:asset/f0c798f47756faae319b5e95761318314fa5e8d0.png';
import pagesImage from 'figma:asset/9eba92a5b0c1de4014a5a740d2765f7427dc252b.png';

interface AtomicLevel {
  id: number;
  key: string;
  color: string;
  image: string;
}

const atomicLevels: AtomicLevel[] = [
  {
    id: 1,
    key: 'tokens',
    color: '#a855f7', // purple-500
    image: tokensImage
  },
  {
    id: 2,
    key: 'atoms',
    color: '#3b82f6', // blue-500
    image: atomsImage
  },
  {
    id: 3,
    key: 'molecules',
    color: '#10b981', // green-500
    image: moleculesImage
  },
  {
    id: 4,
    key: 'organisms',
    color: '#f59e0b', // amber-500
    image: organismsImage
  },
  {
    id: 5,
    key: 'pages',
    color: '#6366f1', // indigo-500
    image: pagesImage
  }
];

// Icon components
const TokensIcon = ({ color }: { color: string }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="8" y="12" width="24" height="4" rx="2" fill={color} opacity="0.3"/>
    <rect x="8" y="18" width="24" height="4" rx="2" fill={color} opacity="0.6"/>
    <rect x="8" y="24" width="24" height="4" rx="2" fill={color}/>
  </svg>
);

const AtomsIcon = ({ color }: { color: string }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="12" y="12" width="16" height="16" rx="4" fill={color}/>
  </svg>
);

const MoleculesIcon = ({ color }: { color: string }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="8" y="8" width="10" height="10" rx="2" fill={color}/>
    <rect x="22" y="8" width="10" height="10" rx="2" fill={color} opacity="0.7"/>
    <rect x="8" y="22" width="10" height="10" rx="2" fill={color} opacity="0.7"/>
    <rect x="22" y="22" width="10" height="10" rx="2" fill={color} opacity="0.4"/>
  </svg>
);

const OrganismsIcon = ({ color }: { color: string }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="8" y="8" width="24" height="6" rx="2" fill={color}/>
    <rect x="8" y="17" width="11" height="15" rx="2" fill={color} opacity="0.6"/>
    <rect x="21" y="17" width="11" height="15" rx="2" fill={color} opacity="0.6"/>
  </svg>
);

const PagesIcon = ({ color }: { color: string }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="10" y="8" width="20" height="24" rx="2" fill={color} opacity="0.2"/>
    <rect x="12" y="12" width="16" height="3" rx="1" fill={color}/>
    <rect x="12" y="17" width="8" height="11" rx="1" fill={color} opacity="0.6"/>
    <rect x="22" y="17" width="6" height="11" rx="1" fill={color} opacity="0.6"/>
  </svg>
);

const iconMap: { [key: string]: React.ComponentType<{ color: string }> } = {
  'tokens': TokensIcon,
  'atoms': AtomsIcon,
  'molecules': MoleculesIcon,
  'organisms': OrganismsIcon,
  'pages': PagesIcon
};

export function AtomicDesignGallery() {
  const [selectedLevel, setSelectedLevel] = useState<AtomicLevel | null>(null);
  const { t } = useLanguage();

  const handleCardClick = (level: AtomicLevel) => {
    haptic('medium');
    setSelectedLevel(level);
  };

  const closeModal = () => {
    haptic('light');
    setSelectedLevel(null);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedLevel) {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedLevel]);

  // Hide language and theme toggles when modal is open
  useEffect(() => {
    if (selectedLevel) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [selectedLevel]);

  return (
    <>
      <div className="bg-white/40 dark:bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 lg:p-12 border border-white/40 dark:border-white/20 shadow-2xl shadow-black/5">
        {/* Header */}
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            {t('atomicDesign.title')}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('atomicDesign.subtitle')}
          </p>
        </div>

        {/* Atomic Levels - Horizontal Layout */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-4">
          {atomicLevels.map((level, index) => {
            const IconComponent = iconMap[level.key];
            return (
              <div key={level.id} className="contents">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleCardClick(level)}
                  className="group relative flex items-start gap-4 lg:flex-col lg:items-center lg:gap-3 flex-1 w-full lg:w-auto text-left lg:text-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  {/* Number Badge */}
                  <div 
                    className="absolute -top-2 -left-2 rtl:-right-2 rtl:left-auto lg:relative lg:top-auto lg:left-auto lg:right-auto w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg z-10"
                    style={{ backgroundColor: level.color }}
                  >
                    {level.id}
                  </div>

                  {/* Icon */}
                  <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <IconComponent color={level.color} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 
                      className="text-lg sm:text-xl font-bold mb-1 transition-colors duration-300"
                      style={{ color: level.color }}
                    >
                      {t(`atomicDesign.${level.key}.title`)}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">
                      {t(`atomicDesign.${level.key}.subtitle`)}
                    </p>
                    <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                      {t(`atomicDesign.${level.key}.description`)}
                    </div>
                  </div>
                </motion.button>

                {/* Arrow separator for desktop */}
                {index < atomicLevels.length - 1 && (
                  <div className="hidden lg:block text-gray-400 dark:text-gray-600 flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="rtl:rotate-180">
                      <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Hint */}
        <div className="mt-8 text-center text-xs sm:text-sm text-gray-500 dark:text-gray-500">
          {t('atomicDesign.clickHint')}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedLevel && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[100]"
              onClick={closeModal}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-8"
              onClick={closeModal}
            >
              <div 
                className="relative max-w-7xl w-full max-h-[95vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="bg-white/10 backdrop-blur-2xl rounded-2xl px-4 py-3 sm:px-6 sm:py-4 border border-white/20 mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
                      style={{ backgroundColor: selectedLevel.color }}
                    >
                      <span className="text-white font-bold text-lg sm:text-xl">{selectedLevel.id}</span>
                    </div>
                    <div>
                      <h3 
                        className="text-lg sm:text-2xl font-bold"
                        style={{ color: selectedLevel.color }}
                      >
                        {t(`atomicDesign.${selectedLevel.key}.title`)}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-300">
                        {t(`atomicDesign.${selectedLevel.key}.subtitle`)} {t(`atomicDesign.${selectedLevel.key}.description`)}
                      </p>
                    </div>
                  </div>
                  
                  <button
                    onClick={closeModal}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 flex-shrink-0"
                    aria-label={t('accessibility.close')}
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </button>
                </div>

                {/* Image */}
                <div className="flex-1 bg-white/10 backdrop-blur-2xl rounded-2xl overflow-auto border border-white/20 shadow-2xl">
                  <div className="p-4 sm:p-6">
                    <img
                      src={selectedLevel.image}
                      alt={`${t(`atomicDesign.${selectedLevel.key}.title`)} - ${t('caseStudy.fullView')}`}
                      className="w-full h-auto rounded-lg sm:rounded-xl shadow-2xl"
                    />
                  </div>
                </div>

                {/* Hint */}
                <div className="text-center mt-4 text-xs sm:text-sm text-gray-400">
                  {t('atomicDesign.modalHint')}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}