import { useState, useRef, useEffect } from 'react';
import { X, Mail, Send, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

interface ContactMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactMenu({ isOpen, onClose }: ContactMenuProps) {
  const { t } = useLanguage();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const contactOptions = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:arsham.kz770@gmail.com',
      description: 'arsham.kz770@gmail.com',
    },
    {
      icon: Send,
      label: 'Telegram',
      href: 'https://t.me/arsham_khayatzadeh',
      description: '@arsham_khayatzadeh',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/arsham-khayatzadeh',
      description: 'arsham-khayatzadeh',
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ 
              duration: 0.2,
              ease: [0.21, 0.47, 0.32, 0.98]
            }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md"
          >
            <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl rounded-3xl border border-white/40 dark:border-white/20 shadow-2xl shadow-black/20 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/20 dark:border-white/10">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Get in Touch
                </h3>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl hover:bg-white/30 dark:hover:bg-white/10 transition-colors"
                  aria-label={t('accessibility.closeMenu')}
                >
                  <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
              </div>

              {/* Options */}
              <div className="p-3 flex flex-col gap-2">
                {contactOptions.map((option, index) => {
                  const Icon = option.icon;
                  return (
                    <motion.a
                      key={option.label}
                      href={option.href}
                      target={option.href.startsWith('http') ? '_blank' : undefined}
                      rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      onClick={onClose}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      className="group flex items-center gap-4 p-4 rounded-2xl bg-white/20 dark:bg-white/5 hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-violet-500/20 dark:hover:from-indigo-500/15 dark:hover:to-violet-500/15 border border-white/20 dark:border-white/10 hover:border-indigo-500/30 dark:hover:border-violet-500/30 transition-all duration-300 active:scale-[0.98] hover:shadow-lg hover:shadow-indigo-500/10"
                    >
                      {/* Icon */}
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 shadow-lg shadow-indigo-500/25 group-hover:shadow-xl group-hover:shadow-indigo-500/40 group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <div className="text-base font-semibold text-gray-900 dark:text-white mb-0.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {option.label}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 truncate">
                          {option.description}
                        </div>
                      </div>

                      {/* Arrow indicator on hover */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-5 h-5 text-indigo-500 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}