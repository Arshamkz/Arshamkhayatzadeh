import { motion } from 'motion/react';
import { useState } from 'react';
import React from 'react';
import { haptic } from '../utils/haptics';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageModal } from './ImageModal';

// Placeholder images for Atomic Design stages - replace with actual assets
const tokensImage = 'https://via.placeholder.com/600x400/a855f7/ffffff?text=Tokens';
const atomsImage = 'https://via.placeholder.com/600x400/3b82f6/ffffff?text=Atoms';
const moleculesImage = 'https://via.placeholder.com/600x400/06b6d4/ffffff?text=Molecules';
const organismsImage = 'https://via.placeholder.com/600x400/10b981/ffffff?text=Organisms';
const pagesImage = 'https://via.placeholder.com/600x400/f59e0b/ffffff?text=Pages';

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

      {/* Image Modal */}
      {selectedLevel && (
        <ImageModal
          isOpen={true}
          onClose={closeModal}
          imageSrc={selectedLevel.image}
          imageAlt={`${t(`atomicDesign.${selectedLevel.key}.title`)} - ${t(`atomicDesign.${selectedLevel.key}.subtitle`)} ${t(`atomicDesign.${selectedLevel.key}.description`)}`}
        />
      )}
    </>
  );
}