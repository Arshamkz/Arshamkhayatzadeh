import { motion } from 'motion/react';
import { Search, Layers, TrendingUp, Target, Lightbulb, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { TestimonialCarousel } from './TestimonialCarousel';

const glassCard = [
  'bg-white/50 dark:bg-white/6',
  'backdrop-blur-2xl',
  'border border-white/70 dark:border-white/12',
  'shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.90)]',
  'dark:shadow-[0_8px_32px_rgba(0,0,0,0.30),inset_0_1px_0_rgba(255,255,255,0.06)]',
].join(' ');

export function AboutSection() {
  const { t } = useLanguage();

  const focusAreas = [
    {
      icon: Search,
      title: 'about.focus.research.title',
      description: 'about.focus.research.description',
      gradient: 'from-violet-500 to-indigo-600',
      chipColor: 'bg-violet-100/80 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border-violet-200/60 dark:border-violet-700/30',
    },
    {
      icon: Layers,
      title: 'about.focus.systems.title',
      description: 'about.focus.systems.description',
      gradient: 'from-pink-500 to-rose-600',
      chipColor: 'bg-pink-100/80 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 border-pink-200/60 dark:border-pink-700/30',
    },
    {
      icon: TrendingUp,
      title: 'about.focus.optimization.title',
      description: 'about.focus.optimization.description',
      gradient: 'from-teal-500 to-emerald-600',
      chipColor: 'bg-teal-100/80 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 border-teal-200/60 dark:border-teal-700/30',
    },
  ];

  const principles = [
    { icon: Target, title: 'about.principles.dataFirst.title', description: 'about.principles.dataFirst.description' },
    { icon: Users, title: 'about.principles.userCentric.title', description: 'about.principles.userCentric.description' },
    { icon: Lightbulb, title: 'about.principles.iterative.title', description: 'about.principles.iterative.description' },
  ];

  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent inline-block">
            {t('about.title')}
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t('about.headline')}
          </p>
        </motion.div>

        {/* Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            {t('about.impactTitle')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group ${glassCard} rounded-3xl p-7 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(109,40,217,0.10)] transition-all duration-300`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${area.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                  <area.icon className="w-6 h-6 text-white" />
                </div>

                {/* Chip label */}
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mb-3 ${area.chipColor}`}>
                  {t(area.title)}
                </span>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t(area.description)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <TestimonialCarousel />

        {/* Design Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            {t('about.philosophyTitle')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {principles.map((p, index) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group ${glassCard} rounded-3xl p-7 hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mb-4 shadow-md shadow-violet-500/25">
                  <p.icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                  {t(p.title)}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t(p.description)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
