import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function TestimonialCarousel() {
  const { t, language } = useLanguage();

  const testimonials = [
    {
      id: 'ali',
      initials: language === 'fa' ? 'ع.آ' : 'AA',
      gradient: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-500/10 to-indigo-500/10 dark:from-blue-400/20 dark:to-indigo-400/20',
      borderColor: 'border-blue-400/30 dark:border-blue-400/20',
      linkColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      id: 'mahshid',
      initials: language === 'fa' ? 'م.گ' : 'MG',
      gradient: 'from-purple-500 to-pink-600',
      bgGradient: 'from-purple-500/10 to-pink-500/10 dark:from-purple-400/20 dark:to-pink-400/20',
      borderColor: 'border-purple-400/30 dark:border-purple-400/20',
      linkColor: 'text-purple-600 dark:text-purple-400',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
        {/* Section Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          {t('testimonials.title')}
        </h3>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`bg-gradient-to-br ${testimonial.bgGradient} backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border ${testimonial.borderColor} shadow-2xl`}
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg`}>
                    {testimonial.initials}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white mb-1">
                    {t(`testimonials.${testimonial.id}.name`)}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {t(`testimonials.${testimonial.id}.role`)}
                  </p>
                  <a
                    href={t(`testimonials.${testimonial.id}.linkedin`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xs ${testimonial.linkColor} hover:underline inline-flex items-center gap-1`}
                  >
                    {language === 'fa' ? 'مشاهده در لینکدین' : 'View on LinkedIn'}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <blockquote className="space-y-3 sm:space-y-4 text-gray-800 dark:text-gray-200 leading-relaxed">
                <p className="text-sm sm:text-base">
                  "{t(`testimonials.${testimonial.id}.quote1`)}"
                </p>
                <p className="text-sm sm:text-base">
                  "{t(`testimonials.${testimonial.id}.quote2`)}"
                </p>
                <p className="text-sm sm:text-base">
                  "{t(`testimonials.${testimonial.id}.quote3`)}"
                </p>
                {testimonial.id === 'mahshid' && (
                  <p className="text-sm sm:text-base">
                    "{t(`testimonials.${testimonial.id}.quote4`)}"
                  </p>
                )}
              </blockquote>
            </motion.div>
          ))}
        </div>
    </motion.div>
  );
}
