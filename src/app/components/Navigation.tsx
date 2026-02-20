import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { LanguageToggle } from './LanguageToggle';
import { Sun, Moon } from 'lucide-react';
import { haptic } from '../utils/haptics';

export function Navigation() {
  const location = useLocation();
  const { t } = useLanguage();
  const { actualTheme, setTheme } = useTheme();

  const navItems = [
    { key: 'work', path: '/' },
    { key: 'about', path: '/#about' },
    { key: 'contact', path: '/#contact' }
  ];

  const toggleTheme = () => {
    haptic('light');
    setTheme(actualTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-white/20 dark:border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
            {t('hero.name')}
          </Link>

          {/* Nav Items */}
          <div className="flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/40 dark:border-white/20 hover:bg-white/40 dark:hover:bg-white/15 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={t('theme.toggleTheme')}
            >
              {actualTheme === 'dark' ? (
                <Sun className="w-5 h-5 text-gray-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>

            {/* Language Toggle */}
            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
