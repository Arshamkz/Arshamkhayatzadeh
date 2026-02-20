import { motion } from 'motion/react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { haptic } from '../utils/haptics';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [isSpinning, setIsSpinning] = useState(false);

  const toggleLanguage = () => {
    if (isSpinning) return;
    
    haptic('medium');
    setIsSpinning(true);
    
    // Change language after spin starts
    setTimeout(() => {
      setLanguage(language === 'en' ? 'fa' : 'en');
    }, 150);
    
    setTimeout(() => {
      setIsSpinning(false);
    }, 500);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative overflow-hidden p-2 rounded-full bg-white/40 dark:bg-white/10 backdrop-blur-xl border border-white/40 dark:border-white/20 shadow-lg shadow-black/5 hover:bg-white/60 dark:hover:bg-white/15 transition-all duration-200 group min-w-[40px]"
      whileHover={{ scale: 1.05 }}
      animate={isSpinning ? { rotate: 1080 } : { rotate: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.5
      }}
      aria-label="Toggle language"
    >
      <motion.div
        key={language}
        initial={{ scale: 0, opacity: 0, rotate: -180 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 400,
          damping: 25,
          delay: 0.15
        }}
        className="text-sm font-bold text-gray-900 dark:text-white"
      >
        {language === 'en' ? 'فا' : 'EN'}
      </motion.div>

      {/* Tooltip */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-10">
        {language === 'en' ? 'فارسی' : 'English'}
      </div>
    </motion.button>
  );
}