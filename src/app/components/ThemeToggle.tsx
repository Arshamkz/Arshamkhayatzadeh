import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'motion/react';
import { haptic } from '../utils/haptics';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: 'light' as const, icon: Sun, label: 'Light' },
    { value: 'dark' as const, icon: Moon, label: 'Dark' }
  ];

  const handleThemeChange = (newTheme: typeof theme) => {
    haptic('light');
    setTheme(newTheme);
  };

  return (
    <div className="flex items-center gap-1 p-1 bg-white/40 dark:bg-white/10 backdrop-blur-xl rounded-full border border-white/40 dark:border-white/20 shadow-lg shadow-black/5">
      {themes.map((t) => {
        const Icon = t.icon;
        const isActive = theme === t.value;

        return (
          <button
            key={t.value}
            onClick={() => handleThemeChange(t.value)}
            className="relative p-2 rounded-full transition-colors"
            aria-label={`Switch to ${t.label} theme`}
          >
            {isActive && (
              <motion.div
                layoutId="theme-indicator"
                className="absolute inset-0 bg-white/60 dark:bg-white/20 rounded-full shadow-md backdrop-blur-md border border-white/40 dark:border-white/20"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <Icon
              className={`w-4 h-4 relative z-10 transition-colors ${
                isActive
                  ? 'text-gray-900 dark:text-white'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}