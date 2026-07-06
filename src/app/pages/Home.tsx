import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { ArrowUpRight, Download, Mail } from 'lucide-react';
import { projects } from '../data/projects';
import { haptic } from '../utils/haptics';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useProjectTranslation } from '../i18n/useProjectTranslation';
import { SEO } from '../components/SEO';
import { ContactMenu } from '../components/ContactMenu';
import { ResumePreviewModal } from '../components/ResumePreviewModal';
import { BackToTop } from '../components/BackToTop';
import { LanguageToggle } from '../components/LanguageToggle';
import { AboutSection } from '../components/AboutSection';
import { useState, useRef } from 'react';
import profileImageLight from '@/imports/ChatGPT_Image_Jun_5__2026__09_47_36_PM.png';
import profileImageDark from '@/imports/profile.jpg';

// Reusable glass class strings
const glassCard = [
  'bg-white/50 dark:bg-white/6',
  'backdrop-blur-2xl',
  'border border-white/70 dark:border-white/12',
  'shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.90)]',
  'dark:shadow-[0_8px_32px_rgba(0,0,0,0.30),inset_0_1px_0_rgba(255,255,255,0.06)]',
].join(' ');

export function Home() {
  const navigate = useNavigate();
  const { actualTheme, setTheme } = useTheme();
  const { t, language } = useLanguage();
  const { getProjectData } = useProjectTranslation();
  const [contactMenuOpen, setContactMenuOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const contactButtonRef = useRef<HTMLButtonElement>(null);

  const handleViewCaseStudy = (projectId: string) => {
    haptic('medium');
    navigate(`/case-study/${projectId}`);
  };

  const handleResumeDownload = () => {
    haptic('success');
    setResumeModalOpen(true);
  };

  const toggleTheme = () => {
    haptic('light');
    setTheme(actualTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <SEO
        title={t('seo.homeTitle')}
        description={t('seo.homeDescription')}
        canonical="/"
      />

      <Helmet>
        <meta name="theme-color" content={actualTheme === 'dark' ? '#0F0E17' : '#E9E8E3'} />
      </Helmet>

      <div className="min-h-screen bg-[#E9E8E3] dark:bg-[#0F0E17] relative overflow-x-hidden transition-colors duration-300">

        {/* Ambient gradient orbs - light mode */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-violet-300/20 dark:bg-violet-900/20 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-teal-300/15 dark:bg-teal-900/15 blur-[120px]" />
          <div className="absolute top-[40%] right-[20%] w-[30vw] h-[30vw] rounded-full bg-pink-200/10 dark:bg-pink-900/10 blur-[100px]" />
        </div>

        {/* Top Right Controls */}
        <div className="fixed top-5 right-5 z-50 flex items-center gap-2.5">
          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/arsham-khayatzadeh"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 rounded-2xl ${glassCard} flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-200`}
            aria-label="LinkedIn Profile"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
          >
            <svg className="w-4.5 h-4.5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </motion.a>

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className={`w-10 h-10 rounded-2xl ${glassCard} flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-200 overflow-hidden relative`}
            aria-label="Toggle theme"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
          >
            <motion.div
              key={actualTheme}
              initial={{ scale: 0, rotate: -90, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              {actualTheme === 'dark' ? (
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Language Toggle */}
        <div className="fixed top-5 left-5 z-50">
          <LanguageToggle />
        </div>

        {/* Main Content */}
        <div className="relative z-10" id="main-content">

          {/* ─── HERO ─── */}
          <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-24">
            <div className="max-w-4xl mx-auto text-center">

              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mb-8 flex justify-center"
              >
                <div className="relative group">
                  {/* Glowing ring */}
                  <div className="absolute -inset-1.5 bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-500 rounded-full blur-xl opacity-35 group-hover:opacity-60 transition-all duration-500" />
                  {/* Glass frame */}
                  <div className={`relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden ${glassCard} border-[3px] border-white/80 dark:border-white/20`}>
                    <motion.img
                      key={actualTheme}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      src={actualTheme === 'dark' ? profileImageDark : profileImageLight}
                      alt="Arsham Khayatzadeh - Product Designer"
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      loading="eager"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4 leading-tight tracking-tight"
              >
                <span className="text-gray-900 dark:text-white">Arsham</span>
                <br />
                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Khayatzadeh
                </span>
              </motion.h1>

              {/* Role badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6 flex justify-center"
              >
                <span className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold ${glassCard} text-violet-700 dark:text-violet-300`}>
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                  {t('hero.title')}
                </span>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed"
              >
                {t('hero.subtitle')}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3"
              >
                {/* Primary — violet glass */}
                <button
                  ref={contactButtonRef}
                  onClick={() => { haptic('medium'); setContactMenuOpen(true); }}
                  className="flex-1 sm:flex-initial px-7 py-3.5 bg-gradient-to-br from-violet-600 to-indigo-700 text-white rounded-2xl font-semibold transition-all duration-200 shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 hover:scale-[1.03] active:scale-[0.97] flex items-center justify-center gap-2"
                >
                  <Mail className="w-4.5 h-4.5" />
                  {t('hero.contact')}
                </button>

                {/* Secondary — glass */}
                <button
                  onClick={handleResumeDownload}
                  className={`flex-1 sm:flex-initial px-7 py-3.5 ${glassCard} rounded-2xl font-semibold text-gray-800 dark:text-white hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 flex items-center justify-center gap-2`}
                >
                  <Download className="w-4.5 h-4.5" />
                  {t('hero.resume')}
                </button>
              </motion.div>
            </div>
          </section>

          {/* ─── PROJECTS ─── */}
          <section className="py-20 px-6 md:px-12" id="projects">
            <div className="max-w-6xl mx-auto">

              {/* Section header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-14"
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent inline-block">
                  {t('projects.sectionTitle')}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
                  {t('projects.sectionSubtitle')}
                </p>
              </motion.div>

              {/* Projects grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {projects.map((project, index) => {
                  const projectData = getProjectData(project.id);
                  if (!projectData) return null;

                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      onClick={() => handleViewCaseStudy(project.id)}
                      className="group cursor-pointer"
                    >
                      <div
                        className={`relative h-full ${glassCard} rounded-3xl p-6 hover:bg-white/65 dark:hover:bg-white/10 hover:border-violet-300/60 dark:hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(109,40,217,0.12)] active:scale-[0.98]`}
                      >
                        {/* Featured badge */}
                        {project.featured && (
                          <div className="absolute -top-3 -right-3 z-10">
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-md opacity-60 animate-pulse" />
                              <div className="relative bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1.5 rounded-full shadow-lg font-bold text-xs tracking-wide flex items-center gap-1">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="hidden sm:inline">{t('projects.experiencedLeadership')}</span>
                                <span className="sm:hidden">{t('projects.leadership')}</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Color accent bar */}
                        <div className="w-10 h-1 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 mb-5 group-hover:w-16 transition-all duration-300" />

                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2.5 group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors leading-snug">
                          {projectData.title}
                        </h3>

                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 line-clamp-2 leading-relaxed">
                          {projectData.shortDesc}
                        </p>

                        {/* Tags row */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {project.tags.slice(0, 2).map((tag, ti) => (
                            <span
                              key={ti}
                              className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-violet-100/80 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border border-violet-200/60 dark:border-violet-700/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-500 dark:text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 group-hover:gap-2.5 transition-all">
                          <span>{t('projects.viewDetails')}</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </div>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/0 to-indigo-500/0 group-hover:from-violet-500/4 group-hover:to-indigo-500/4 transition-all duration-300 pointer-events-none" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* About Section */}
          <AboutSection />

          {/* Footer */}
          <footer className="py-10 px-6 md:px-12 text-center">
            <div className={`max-w-md mx-auto py-4 px-6 rounded-2xl ${glassCard} text-sm text-gray-500 dark:text-gray-500`}>
              © 2026 Arsham Khayatzadeh · Product Designer
            </div>
          </footer>
        </div>
      </div>

      <ResumePreviewModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        language={language}
      />

      <ContactMenu
        isOpen={contactMenuOpen}
        onClose={() => setContactMenuOpen(false)}
        triggerRef={contactButtonRef}
      />

      <BackToTop />
    </>
  );
}
