import { motion } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Placeholder images for Atomic Design stages - replace with actual assets
const tokensImage = 'https://via.placeholder.com/600x400/a855f7/ffffff?text=Tokens';
const atomsImage = 'https://via.placeholder.com/600x400/3b82f6/ffffff?text=Atoms';
const moleculesImage = 'https://via.placeholder.com/600x400/06b6d4/ffffff?text=Molecules';
const organismsImage = 'https://via.placeholder.com/600x400/10b981/ffffff?text=Organisms';
const pagesImage = 'https://via.placeholder.com/600x400/f59e0b/ffffff?text=Pages';

interface AtomicStage {
  id: string;
  image: string;
  color: string;
}

export function AtomicDesignShowcase() {
  const { t } = useLanguage();
  const [selectedStage, setSelectedStage] = useState<AtomicStage | null>(null);

  const atomicStages: AtomicStage[] = [
    {
      id: 'tokens',
      image: tokensImage,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'atoms',
      image: atomsImage,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'molecules',
      image: moleculesImage,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'organisms',
      image: organismsImage,
      color: 'from-amber-500 to-orange-500'
    },
    {
      id: 'pages',
      image: pagesImage,
      color: 'from-indigo-500 to-violet-500'
    }
  ];

  return (
    <>
      {/* Horizontal Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
        {atomicStages.map((stage, index) => (
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="group"
          >
            {/* Stage Header */}
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <div className={`flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-r ${stage.color} text-white font-bold text-[10px] sm:text-xs shadow-lg shrink-0`}>
                {index + 1}
              </div>
              <h3 className="text-xs sm:text-sm lg:text-base font-bold text-gray-900 dark:text-white leading-tight">
                {t(`caseStudy.atomicStages.${stage.id}.title`)}
              </h3>
            </div>
            
            <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 mb-2 sm:mb-3 leading-snug h-[2.8rem] sm:h-[3.2rem] overflow-hidden">
              {t(`caseStudy.atomicStages.${stage.id}.description`)}
            </p>

            {/* Image Container */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative bg-white/40 dark:bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl p-2 sm:p-2.5 lg:p-3 border border-white/40 dark:border-white/20 shadow-lg shadow-black/5 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-black/10 aspect-[4/3]"
              onClick={() => setSelectedStage(stage)}
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stage.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
              
              {/* Image */}
              <img
                src={stage.image}
                alt={t(`caseStudy.atomicStages.${stage.id}.title`)}
                className="w-full h-full object-cover rounded-md sm:rounded-lg shadow-md"
                loading="lazy"
              />

              {/* Click to Expand Hint */}
              <div className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 bg-black/70 dark:bg-white/10 backdrop-blur-sm px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-white text-[9px] sm:text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {t('caseStudy.atomicStages.clickToExpand')}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Full Screen Modal */}
      {selectedStage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedStage(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            className="relative max-w-7xl w-full max-h-[90vh] bg-white/10 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-white/20 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/20">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r ${selectedStage.color} flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-lg`}>
                  {atomicStages.indexOf(selectedStage) + 1}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {t(`caseStudy.atomicStages.${selectedStage.id}.title`)}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300">
                    {t(`caseStudy.atomicStages.${selectedStage.id}.description`)}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedStage(null)}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
            </div>

            {/* Image */}
            <div className="overflow-auto max-h-[calc(90vh-120px)] p-4 sm:p-6">
              <img
                src={selectedStage.image}
                alt={`${selectedStage.id} - Full View`}
                className="w-full h-auto rounded-lg sm:rounded-xl shadow-2xl"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}