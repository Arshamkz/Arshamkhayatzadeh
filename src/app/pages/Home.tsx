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
import DotGrid from '../components/DotGrid';
import { useState, useRef } from 'react';
import profileImageLight from '@/imports/ChatGPT_Image_Jun_5__2026__09_47_36_PM.png';
import profileImageDark from '@/imports/profile.jpg';

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
        <meta name="theme-color" content={actualTheme === 'dark' ? '#0a1628' : '#ffffff'} />
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-[#0a1628] relative overflow-x-hidden">
        
        {/* Dot Grid Wallpaper - Disabled for performance */}
        {/* <div className="fixed inset-0 pointer-events-none z-0">
          <DotGrid
            dotSize={4}
            gap={20}
            baseColor={actualTheme === 'dark' ? '#1a2942' : '#f0f4f8'}
            activeColor={actualTheme === 'dark' ? '#2d4a6e' : '#dae3ec'}
            proximity={100}
            shockRadius={200}
            shockStrength={4}
            resistance={800}
            returnDuration={1.8}
          />
        </div> */}

        {/* Top Right Controls */}
        <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
          {/* LinkedIn Link */}
          <motion.a
            href="https://www.linkedin.com/in/arsham-khayatzadeh"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-md border border-gray-200/50 dark:border-white/10 flex items-center justify-center hover:bg-white/80 dark:hover:bg-white/20 transition-all duration-200 shadow-lg shadow-black/5"
            aria-label="LinkedIn Profile"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </motion.a>

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-md border border-gray-200/50 dark:border-white/10 flex items-center justify-center hover:bg-white/80 dark:hover:bg-white/20 transition-all duration-200 shadow-lg shadow-black/5 overflow-hidden relative"
            aria-label="Toggle theme"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              key={actualTheme}
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 0.3
              }}
            >
              {actualTheme === 'dark' ? (
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
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
        <div className="fixed top-6 left-6 z-50">
          <LanguageToggle />
        </div>

        {/* Main Content */}
        <div className="relative z-10" id="main-content">
          
          {/* Hero Section */}
          <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-20">
            <div className="max-w-4xl mx-auto text-center">
              
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="mb-6 sm:mb-8 flex justify-center"
              >
                <div className="relative group">
                  {/* Glow effect - reduce blur on mobile */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full blur-md sm:blur-xl opacity-30 group-hover:opacity-70 transition-all duration-500" />

                  {/* Image container with glassmorphism */}
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-white/60 dark:bg-white/10 backdrop-blur-md border-4 border-white/50 dark:border-white/20 shadow-2xl shadow-blue-500/20 group-hover:shadow-3xl group-hover:shadow-blue-500/40 transition-all duration-500">
                    <motion.img
                      key={actualTheme}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      src={actualTheme === 'dark' ? profileImageDark : profileImageLight}
                      alt="Arsham Khayatzadeh - Product Designer"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      loading="eager"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-3 sm:mb-4 leading-tight"
              >
                <span className="text-gray-900 dark:text-white">Arsham</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                  Khayatzadeh
                </span>
              </motion.h1>

              {/* Role */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8"
              >
                {t('hero.title')}
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
              >
                {t('hero.subtitle')}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-md sm:max-w-none"
              >
                <button
                  ref={contactButtonRef}
                  onClick={() => {
                    haptic('medium');
                    setContactMenuOpen(true);
                  }}
                  className="flex-1 sm:flex-initial px-5 sm:px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>{t('hero.contact')}</span>
                </button>

                <button
                  onClick={handleResumeDownload}
                  className="flex-1 sm:flex-initial px-5 sm:px-6 py-3 bg-white/60 dark:bg-white/10 backdrop-blur-md border border-gray-200/50 dark:border-white/10 text-gray-900 dark:text-white rounded-full font-medium hover:bg-white/80 dark:hover:bg-white/20 transition-all duration-200 shadow-lg shadow-black/5 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  <span>{t('hero.resume')}</span>
                </button>
              </motion.div>

              {/* Stats Card */}

            </div>
          </section>

          {/* Projects Section */}
          <section className="py-20 px-6 md:px-12" id="projects">
            <div className="max-w-6xl mx-auto">
              
              {/* Section Header */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-3 inline-block"
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                      {t('projects.sectionTitle')}
                    </span>
                  </motion.h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t('projects.sectionSubtitle')}
                  </p>
                </motion.div>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {projects.map((project, index) => {
                  const projectData = getProjectData(project.id);
                  if (!projectData) return null;

                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      onClick={() => handleViewCaseStudy(project.id)}
                      className="group cursor-pointer"
                    >
                      <div className="relative h-full bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-gray-200/50 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/10 hover:border-blue-300 dark:hover:border-blue-500/50 transition-all duration-300 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-blue-500/10 active:scale-[0.98] sm:hover:-translate-y-2">

                        {/* Featured Badge */}
                        {project.featured && (
                          <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-10">
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-md opacity-60 animate-pulse" />
                              <div className="relative bg-gradient-to-r from-amber-400 to-orange-500 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg font-bold text-[10px] sm:text-xs tracking-wide flex items-center gap-0.5 sm:gap-1">
                                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="hidden sm:inline">{t('projects.experiencedLeadership')}</span>
                                <span className="sm:hidden">{t('projects.leadership')}</span>
                              </div>
                            </div>
                          </div>
                        )}

                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {projectData.title}
                        </h3>

                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 line-clamp-2">
                          {projectData.shortDesc}
                        </p>

                        <div className="flex items-center gap-1 text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:gap-2 transition-all">
                          <span>{t('projects.viewDetails')}</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </div>

                        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-300 pointer-events-none" />
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
          <footer className="py-12 px-6 md:px-12 text-center">
            <p className="text-sm text-gray-400 dark:text-gray-600">
              © 2026 Arsham Khayatzadeh
            </p>
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