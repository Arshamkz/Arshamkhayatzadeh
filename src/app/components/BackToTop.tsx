import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { haptic } from '../utils/haptics';
import { useLanguage } from '../contexts/LanguageContext';

interface BackToTopProps {
  showAfter?: number; // Scroll distance in pixels before showing button (default: 300)
  smoothScroll?: boolean; // Use smooth scrolling (default: true)
  className?: string;
}

export function BackToTop({
  showAfter = 300,
  smoothScroll = true,
  className = '',
}: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > showAfter) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Initial check
    toggleVisibility();

    // Listen to scroll events
    window.addEventListener('scroll', toggleVisibility, { passive: true });

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [showAfter]);

  const scrollToTop = () => {
    haptic('light');
    
    if (smoothScroll) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/50 ${className}`}
          aria-label={t('backToTop.label')}
          title={t('backToTop.label')}
        >
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/**
 * Usage:
 * 
 * Basic:
 * <BackToTop />
 * 
 * Custom trigger distance:
 * <BackToTop showAfter={500} />
 * 
 * Without smooth scroll:
 * <BackToTop smoothScroll={false} />
 * 
 * Custom styling:
 * <BackToTop className="bottom-8 right-8" />
 */