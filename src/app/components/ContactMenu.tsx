import { useEffect, useRef } from 'react';
import { X, Mail, Send, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

interface ContactMenuProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLButtonElement>;
}

const glassPanel = [
  'bg-white/55 dark:bg-white/8',
  'backdrop-blur-3xl',
  'border border-white/75 dark:border-white/14',
  'shadow-[0_20px_60px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.95)]',
  'dark:shadow-[0_20px_60px_rgba(0,0,0,0.40),inset_0_1px_0_rgba(255,255,255,0.07)]',
].join(' ');

export function ContactMenu({ isOpen, onClose }: ContactMenuProps) {
  const { t } = useLanguage();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) onClose();
    };
    const handleEscape = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
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
      gradient: 'from-violet-500 to-indigo-600',
      chipColor: 'bg-violet-100/80 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300',
    },
    {
      icon: Send,
      label: 'Telegram',
      href: 'https://t.me/arsham_khayatzadeh',
      description: '@arsham_khayatzadeh',
      gradient: 'from-sky-500 to-cyan-600',
      chipColor: 'bg-sky-100/80 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/arsham-khayatzadeh',
      description: 'arsham-khayatzadeh',
      gradient: 'from-blue-500 to-blue-700',
      chipColor: 'bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Blurred backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/15 dark:bg-black/35 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, scale: 0.94, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: -12 }}
            transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[92%] sm:w-full max-w-sm"
          >
            <div className={`${glassPanel} rounded-3xl overflow-hidden`}>
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/50 dark:border-white/10">
                <div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">Get in Touch</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Choose a channel below</p>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-xl bg-white/50 dark:bg-white/8 border border-white/60 dark:border-white/12 flex items-center justify-center hover:bg-white/70 dark:hover:bg-white/15 transition-colors"
                  aria-label={t('accessibility.closeMenu')}
                >
                  <X className="w-4 h-4 text-gray-600 dark:text-gray-400" />
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
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.06 }}
                      whileHover={{ scale: 1.02 }}
                      className="group flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/35 dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10 border border-white/55 dark:border-white/10 hover:border-violet-300/50 dark:hover:border-violet-500/25 transition-all duration-200 active:scale-[0.98] min-h-[60px]"
                    >
                      {/* Icon bubble */}
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${option.gradient} flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 group-hover:shadow-lg transition-all duration-200`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors">
                          {option.label}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 truncate mt-0.5">
                          {option.description}
                        </div>
                      </div>

                      {/* Arrow */}
                      <svg className="w-4 h-4 text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
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
