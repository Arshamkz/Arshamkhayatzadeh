import { motion } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';

// Import all Atomic Design stage images
import tokensImage from 'figma:asset/e8a0cfc09bd610d7ec46941c996412738142cc5b.png';
import atomsImage from 'figma:asset/cf37d6872859564b6b829947c33f849e68cb88de.png';
import moleculesImage from 'figma:asset/b774e37bec1b852c045c3b520fb9eeebcd50608e.png';
import organismsImage from 'figma:asset/f0c798f47756faae319b5e95761318314fa5e8d0.png';
import pagesImage from 'figma:asset/9eba92a5b0c1de4014a5a740d2765f7427dc252b.png';

interface AtomicStage {
  title: string;
  description: string;
  image: string;
  color: string;
}

const atomicStages: AtomicStage[] = [
  {
    title: 'Design Tokens',
    description: 'Foundation layer defining colors, typography, spacing, and visual properties',
    image: tokensImage,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Atoms',
    description: 'Basic building blocks like buttons, inputs, and labels that cannot be broken down further',
    image: atomsImage,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Molecules',
    description: 'Simple component groups combining atoms (search boxes, form fields, navigation tabs)',
    image: moleculesImage,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Organisms',
    description: 'Complex UI sections combining molecules and atoms (cards, galleries, navigation bars)',
    image: organismsImage,
    color: 'from-amber-500 to-orange-500'
  },
  {
    title: 'Pages',
    description: 'Complete screens assembling all components into functional user interfaces',
    image: pagesImage,
    color: 'from-indigo-500 to-violet-500'
  }
];

export function AtomicDesignShowcase() {
  const [selectedStage, setSelectedStage] = useState<AtomicStage | null>(null);

  return (
    <>
      <div className="space-y-6 sm:space-y-8">
        {atomicStages.map((stage, index) => (
          <motion.div
            key={stage.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            {/* Stage Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r ${stage.color} text-white font-bold text-sm sm:text-base shadow-lg`}>
                {index + 1}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                  {stage.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {stage.description}
                </p>
              </div>
            </div>

            {/* Image Container */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative bg-white/40 dark:bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-white/40 dark:border-white/20 shadow-xl shadow-black/5 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-black/10"
              onClick={() => setSelectedStage(stage)}
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stage.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              
              {/* Image */}
              <img
                src={stage.image}
                alt={`${stage.title} - Atomic Design Component`}
                className="w-full h-auto rounded-lg sm:rounded-xl shadow-lg"
                loading="lazy"
              />

              {/* Click to Expand Hint */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-black/60 dark:bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Click to expand
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
                    {selectedStage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300">
                    {selectedStage.description}
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
                alt={`${selectedStage.title} - Full View`}
                className="w-full h-auto rounded-lg sm:rounded-xl shadow-2xl"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}