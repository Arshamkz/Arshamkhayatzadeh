import { motion } from 'motion/react';
import { Search, Layers, TrendingUp, Target, Lightbulb, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { TestimonialCarousel } from './TestimonialCarousel';

export function AboutSection() {
  const { t } = useLanguage();

  const focusAreas = [
    {
      icon: Search,
      title: 'about.focus.research.title',
      description: 'about.focus.research.description',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-500/10 to-indigo-500/10 dark:from-blue-400/20 dark:to-indigo-400/20',
    },
    {
      icon: Layers,
      title: 'about.focus.systems.title',
      description: 'about.focus.systems.description',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-500/10 to-pink-500/10 dark:from-purple-400/20 dark:to-pink-400/20',
    },
    {
      icon: TrendingUp,
      title: 'about.focus.optimization.title',
      description: 'about.focus.optimization.description',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-500/10 to-emerald-500/10 dark:from-green-400/20 dark:to-emerald-400/20',
    },
  ];

  const principles = [
    {
      icon: Target,
      title: 'about.principles.dataFirst.title',
      description: 'about.principles.dataFirst.description',
    },
    {
      icon: Users,
      title: 'about.principles.userCentric.title',
      description: 'about.principles.userCentric.description',
    },
    {
      icon: Lightbulb,
      title: 'about.principles.iterative.title',
      description: 'about.principles.iterative.description',
    },
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {t('about.title')}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
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
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            {t('about.impactTitle')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group bg-gradient-to-br ${area.bgColor} backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-gray-200/50 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <area.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {t(area.title)}
                </h4>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t(area.description)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <TestimonialCarousel />

        {/* Design Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            {t('about.philosophyTitle')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/60 to-white/40 dark:from-white/10 dark:to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4">
                  <principle.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {t(principle.title)}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t(principle.description)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
