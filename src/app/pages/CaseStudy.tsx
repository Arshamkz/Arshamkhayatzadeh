import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Check, ArrowRight, TrendingUp, Boxes, Building2, Hotel } from 'lucide-react';
import { getProjectById, getAllProjects } from '../data/projects';
import { haptic } from '../utils/haptics';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useProjectTranslation } from '../i18n/useProjectTranslation';
import { SEO } from '../components/SEO';
import { ScrollProgress } from '../components/ScrollProgress';
import { CursorSpotlight } from '../components/CursorSpotlight';
import { AtomicDesignGallery } from '../components/AtomicDesignGallery';
import { AtomicDesignShowcase } from '../components/AtomicDesignShowcase';
import { ChipsShowcase } from '../components/ChipsShowcase';
import { ChipsDocHeader } from '../components/ChipsDocHeader';
import { IranHotelPLPShowcase } from '../components/IranHotelPLPShowcase';
import { BackToTop } from '../components/BackToTop';
import { LanguageToggle } from '../components/LanguageToggle';
import DotGrid from '../components/DotGrid';
import { useState, useEffect } from 'react';

export default function CaseStudy() {
  const { id: projectSlug } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { actualTheme, setTheme } = useTheme();
  const { t, language } = useLanguage();
  const { getProjectData } = useProjectTranslation();
  const textAlign = language === 'fa' ? 'text-right' : 'text-left';

  const project = getProjectById(projectSlug || '');
  const projectTranslationData = getProjectData(projectSlug || '');
  const allProjects = getAllProjects();
  const otherProjects = allProjects.filter(p => p.id !== projectSlug);

  // Scroll to top when component mounts or projectSlug changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [projectSlug]);

  if (!project || !projectTranslationData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0a1628] relative select-none">
        <div className="fixed inset-0 pointer-events-auto z-0">
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
        </div>
        <div className="relative z-10 text-center bg-white/40 dark:bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/40 dark:border-white/20 shadow-2xl">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Case Study Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-semibold"
          >
            ← {t('caseStudy.backToProjects')}
          </button>
        </div>
      </div>
    );
  }

  const handleBack = () => {
    haptic('light');
    navigate('/');
  };

  const handleLeadershipClick = () => {
    haptic('light');
    const leadershipSection = document.getElementById('leadership-section');
    if (leadershipSection) {
      leadershipSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePlaygroundClick = () => {
    haptic('light');
    const playgroundSection = document.getElementById('playground-section');
    if (playgroundSection) {
      const yOffset = -80; // offset for better visibility
      const y = playgroundSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    haptic('light');
    setTheme(actualTheme === 'dark' ? 'light' : 'dark');
  };

  // Glass Section Component
  const GlassSection = ({ 
    title, 
    children, 
    id 
  }: { 
    title: string; 
    children: React.ReactNode; 
    id?: string;
  }) => (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-12 sm:mb-16"
    >
      <div className="bg-white/40 dark:bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 lg:p-12 border border-white/40 dark:border-white/20 shadow-2xl shadow-black/5">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
          {title}
        </h2>
        {children}
      </div>
    </motion.section>
  );

  return (
    <>
      <SEO
        title={`${projectTranslationData.title} - ${t('seo.caseStudyTitle')}`}
        description={projectTranslationData.shortDesc}
        canonical={`/case-study/${project.id}`}
      />

      <Helmet>
        <meta name="theme-color" content={actualTheme === 'dark' ? '#0a1628' : '#ffffff'} />
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-[#0a1628] relative overflow-x-hidden select-none">
        
        {/* Dot Grid Wallpaper */}
        <div className="fixed inset-0 pointer-events-auto z-0">
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
        </div>

        {/* Cursor Spotlight Effect */}
        <CursorSpotlight />

        {/* Scroll Progress */}
        <ScrollProgress />

        {/* Theme Toggle */}
        <div className="fixed top-6 right-6 z-50">
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
        <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24">

          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={handleBack}
            className="mb-6 sm:mb-8 inline-flex items-center gap-2.5 bg-white/40 dark:bg-white/10 backdrop-blur-xl rounded-xl px-4 py-2.5 border border-white/40 dark:border-white/20 hover:bg-white/60 dark:hover:bg-white/15 transition-all duration-200 group shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold text-gray-900 dark:text-white">
              {t('caseStudy.backToProjects')}
            </span>
          </motion.button>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 sm:mb-12"
          >
            {/* Badges - Top Right */}
            {(project.featured || project.id === 'design-system' || project.id === 'iranhotel-plp') && (
              <div className="flex justify-end gap-3 mb-4 flex-wrap">
                {/* Leadership Badge */}
                {project.featured && (
                  <button
                    onClick={handleLeadershipClick}
                    className="group relative cursor-pointer"
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-md opacity-60 animate-pulse" />
                    {/* Badge */}
                    <div className="relative bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-lg font-bold text-xs sm:text-sm tracking-wide flex items-center gap-1.5 sm:gap-2 hover:scale-105 transition-transform">
                      <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>{t('projects.experiencedLeadership')}</span>
                      <span className="text-xs opacity-80">↓</span>
                    </div>
                  </button>
                )}

                {/* Playground Badge */}
                {(project.id === 'design-system' || project.id === 'iranhotel-plp') && (
                  <button
                    onClick={handlePlaygroundClick}
                    className="group relative cursor-pointer"
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md opacity-60 animate-pulse" />
                    {/* Badge */}
                    <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-lg font-bold text-xs sm:text-sm tracking-wide flex items-center gap-1.5 sm:gap-2 hover:scale-105 transition-transform">
                      <Boxes className="w-4 h-4" />
                      <span>{language === 'fa' ? 'Playground تعاملی' : 'Interactive Playground'}</span>
                      <span className="text-xs opacity-80">↓</span>
                    </div>
                  </button>
                )}
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              {projectTranslationData.title}
            </h1>
            <p className={`text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed ${textAlign}`}>
              {projectTranslationData.shortDesc}
            </p>
          </motion.div>

          {/* Project Details Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
          >
            <div className="bg-white/40 dark:bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/40 dark:border-white/20 shadow-xl">
              <div className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1 sm:mb-2">{t('caseStudy.role')}</div>
              <div className={`text-sm sm:text-base font-medium text-gray-900 dark:text-white ${textAlign}`}>{projectTranslationData.role}</div>
            </div>
            
            <div className="bg-white/40 dark:bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/40 dark:border-white/20 shadow-xl">
              <div className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1 sm:mb-2">{t('caseStudy.timeline')}</div>
              <div className={`text-sm sm:text-base font-medium text-gray-900 dark:text-white ${textAlign}`}>{projectTranslationData.timeline}</div>
            </div>
            
            <div className="bg-white/40 dark:bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/40 dark:border-white/20 shadow-xl">
              <div className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1 sm:mb-2">{t('caseStudy.company')}</div>
              <div className={`text-sm sm:text-base font-medium text-gray-900 dark:text-white ${textAlign}`}>{projectTranslationData.company}</div>
            </div>

            <div className="bg-white/40 dark:bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/40 dark:border-white/20 shadow-xl">
              <div className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1 sm:mb-2">{t('caseStudy.collaboration')}</div>
              <div className={`text-sm sm:text-base font-medium text-gray-900 dark:text-white ${textAlign}`}>{projectTranslationData.collaboration}</div>
            </div>
          </motion.div>

          {/* Sections Container */}
          <div className="space-y-12 sm:space-y-16">

            {/* Overview/Context */}
            <GlassSection title={t('caseStudy.overview')}>
              <p className={`text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed ${textAlign}`}>
                {projectTranslationData.context}
              </p>
              {project.projectLink && (
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 sm:mt-6 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  {t('caseStudy.visitProject')}
                </a>
              )}
            </GlassSection>

            {/* Problem */}
            <GlassSection title={t('caseStudy.problem')}>
              <p className={`text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 ${textAlign}`}>
                {projectTranslationData.problem.description}
              </p>
              
              <div className="mb-4 sm:mb-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 text-base sm:text-lg">{t('caseStudy.keyIssues')}</h3>
                <div className="space-y-2 sm:space-y-3">
                  {projectTranslationData.problem.issues.map((issue, i) => (
                    <div key={i} className="bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/30 dark:border-white/10 flex items-start gap-2 sm:gap-3">
                      <div className="w-1.5 h-1.5 bg-red-500 dark:bg-red-400 rounded-full mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                      <span className={`text-sm sm:text-base text-gray-700 dark:text-gray-300 ${textAlign}`}>{issue}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 text-base sm:text-lg">{t('caseStudy.goals')}</h3>
                <div className="space-y-2 sm:space-y-3">
                  {projectTranslationData.problem.goals.map((goal, i) => (
                    <div key={i} className="bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/30 dark:border-white/10 flex items-start gap-2 sm:gap-3">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className={`text-sm sm:text-base text-gray-700 dark:text-gray-300 ${textAlign}`}>{goal}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassSection>

            {/* Research */}
            <GlassSection title={t('caseStudy.research')}>
              <p className={`text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 ${textAlign}`}>
                {projectTranslationData.research.description}
              </p>
              
              <div className="mb-4 sm:mb-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 text-base sm:text-lg">{t('caseStudy.methods')}</h3>
                <div className="space-y-2 sm:space-y-3">
                  {projectTranslationData.research.methods.map((method, i) => (
                    <div key={i} className="bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/30 dark:border-white/10 flex items-start gap-2 sm:gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                      <span className={`text-sm sm:text-base text-gray-700 dark:text-gray-300 ${textAlign}`}>{method}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 text-base sm:text-lg">{t('caseStudy.insights')}</h3>
                <div className="space-y-2 sm:space-y-3">
                  {projectTranslationData.research.insights.map((insight, i) => (
                    <div key={i} className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 dark:from-purple-500/10 dark:to-indigo-500/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/30 dark:border-white/10">
                      <p className={`text-sm sm:text-base text-gray-900 dark:text-white font-semibold leading-relaxed ${textAlign}`}>
                        💡 {insight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </GlassSection>

            {/* Process & Leadership (Featured Projects Only) */}
            {project.featured && projectTranslationData.processLeadership && (
              <motion.section
                id="leadership-section"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-12 sm:mb-16"
              >
                <div className={`backdrop-blur-xl rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 lg:p-12 border shadow-2xl ${
                  project.featured 
                    ? 'bg-gradient-to-br from-amber-50/90 to-orange-50/90 dark:from-amber-900/30 dark:to-orange-900/30 border-amber-300/60 dark:border-amber-600/40'
                    : 'bg-white/40 dark:bg-white/10 border-white/40 dark:border-white/20'
                }`}>
                  
                  {/* Header with Crown Icon */}
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className={`text-3xl sm:text-4xl ${project.featured ? 'animate-pulse' : ''}`}>👑</div>
                    <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${
                      project.featured 
                        ? 'text-amber-900 dark:text-amber-100' 
                        : 'text-gray-900 dark:text-white'
                    }`}>
                      {t('caseStudy.processLeadership')}
                    </h2>
                  </div>

                  <p className={`text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 ${textAlign} ${
                    project.featured
                      ? 'text-amber-900 dark:text-amber-100'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}>
                    {projectTranslationData.processLeadership.description}
                  </p>

                  {/* Framework */}
                  <div className={`backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border mb-6 sm:mb-8 ${
                    project.featured
                      ? 'bg-white/50 dark:bg-white/10 border-amber-300/50 dark:border-amber-600/30'
                      : 'bg-white/30 dark:bg-white/10 border-white/30 dark:border-white/10'
                  }`}>
                    <h3 className={`font-bold mb-4 text-base sm:text-lg flex items-center gap-2 ${
                      project.featured
                        ? 'text-amber-900 dark:text-amber-100'
                        : 'text-gray-900 dark:text-white'
                    }`}>
                      <span className="text-xl">🎯</span>
                      {projectTranslationData.processLeadership.framework.title}
                    </h3>
                    <div className="space-y-3 sm:space-y-4">
                      {projectTranslationData.processLeadership.framework.steps.map((step, i) => (
                        <div key={i} className={`flex items-start gap-3 sm:gap-4 text-sm sm:text-base ${textAlign} ${
                          project.featured
                            ? 'text-amber-900 dark:text-amber-50'
                            : 'text-gray-800 dark:text-gray-200'
                        }`}>
                          <div className={`w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm ${
                            project.featured
                              ? 'bg-amber-400 dark:bg-amber-600 text-white'
                              : 'bg-blue-500 dark:bg-blue-600 text-white'
                          }`}>
                            {i + 1}
                          </div>
                          <span className="pt-0.5 sm:pt-1">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Challenges */}
                  <div className={`backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border mb-6 sm:mb-8 ${
                    project.featured
                      ? 'bg-white/50 dark:bg-white/10 border-amber-300/50 dark:border-amber-600/30'
                      : 'bg-white/30 dark:bg-white/10 border-white/30 dark:border-white/10'
                  }`}>
                    <h3 className={`font-bold mb-4 text-base sm:text-lg flex items-center gap-2 ${
                      project.featured
                        ? 'text-amber-900 dark:text-amber-100'
                        : 'text-gray-900 dark:text-white'
                    }`}>
                      <span className="text-xl">⚡</span>
                      {t('caseStudy.leadershipChallenges')}
                    </h3>
                    {projectTranslationData.processLeadership.challenges.map((challenge, i) => (
                      <div key={i} className={`mb-4 sm:mb-6 last:mb-0 pb-4 sm:pb-6 last:pb-0 ${
                        i < projectTranslationData.processLeadership.challenges.length - 1 
                          ? (project.featured 
                              ? 'border-b border-amber-300/30 dark:border-amber-600/20' 
                              : 'border-b border-gray-300/30 dark:border-white/10')
                          : ''
                      }`}>
                        <h4 className={`font-bold mb-2 sm:mb-3 text-sm sm:text-base ${
                          project.featured
                            ? 'text-amber-800 dark:text-amber-200'
                            : 'text-gray-900 dark:text-white'
                        }`}>
                          {challenge.title}
                        </h4>
                        <div className="space-y-2 sm:space-y-3">
                          <div>
                            <div className={`text-xs font-semibold mb-1 ${
                              project.featured
                                ? 'text-red-700 dark:text-red-400'
                                : 'text-red-600 dark:text-red-400'
                            }`}>
                              {t('caseStudy.challengeLabel')}
                            </div>
                            <p className={`text-sm sm:text-base leading-relaxed ${textAlign} ${
                              project.featured
                                ? 'text-gray-800 dark:text-gray-200'
                                : 'text-gray-700 dark:text-gray-300'
                            }`}>
                              {challenge.issue}
                            </p>
                          </div>
                          <div>
                            <div className={`text-xs font-semibold mb-1 ${
                              project.featured
                                ? 'text-green-700 dark:text-green-400'
                                : 'text-green-600 dark:text-green-400'
                            }`}>
                              {t('caseStudy.solutionLabel')}
                            </div>
                            <p className={`text-sm sm:text-base leading-relaxed ${textAlign} ${
                              project.featured
                                ? 'text-gray-800 dark:text-gray-200'
                                : 'text-gray-700 dark:text-gray-300'
                            }`}>
                              {challenge.solution}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Impact */}
                  <div className={`backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border ${
                    project.featured
                      ? 'bg-gradient-to-br from-amber-100/80 to-orange-100/80 dark:from-amber-800/40 dark:to-orange-800/40 border-amber-300/50 dark:border-amber-600/30'
                      : 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 dark:from-green-500/10 dark:to-emerald-500/10 border-white/30 dark:border-white/10'
                  }`}>
                    <h3 className={`font-bold mb-4 text-base sm:text-lg flex items-center gap-2 ${
                      project.featured
                        ? 'text-amber-900 dark:text-amber-100'
                        : 'text-gray-900 dark:text-white'
                    }`}>
                      <span className="text-xl">🚀</span>
                      {t('caseStudy.leadershipImpact')}
                    </h3>
                    <ul className="space-y-2 sm:space-y-3">
                      {projectTranslationData.processLeadership.impact.map((item, i) => (
                        <li key={i} className={`flex items-start gap-2 sm:gap-3 text-sm sm:text-base ${textAlign} ${
                          project.featured
                            ? 'text-amber-900 dark:text-amber-100'
                            : 'text-gray-800 dark:text-gray-200'
                        }`}>
                          <Check className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 ${
                            project.featured
                              ? 'text-amber-600 dark:text-amber-400'
                              : 'text-green-600 dark:text-green-400'
                          }`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.section>
            )}

            {/* Solution */}
            <GlassSection title={t('caseStudy.solution')}>
              <p className={`text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 ${textAlign}`}>
                {projectTranslationData.solution.description}
              </p>

              {/* Atomic Design 5-stage grid — TOP of design-system */}
              {project.id === 'design-system' && (
                <div className="mb-8 sm:mb-10">
                  <div className="mb-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {t('caseStudy.atomicDesignHierarchy')}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                      {t('caseStudy.atomicDesignDesc')}
                    </p>
                  </div>
                  <AtomicDesignShowcase />
                </div>
              )}

              {/* Chips — documentation header + interactive playground */}
              {project.id === 'design-system' && (
                <div className="mb-8 sm:mb-10 space-y-6">
                  <ChipsDocHeader />
                  <div id="playground-section">
                    <ChipsShowcase />
                  </div>
                </div>
              )}

              {/* Before & After Comparison - Only for Reservation System - MOVED TO TOP */}
              {project.id === 'reservation-system' && (
                <div className="mb-8 sm:mb-10">
                  <div className="mb-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {t('caseStudy.beforeAfter')}
                    </h3>
                  </div>
                  <AtomicDesignGallery />
                </div>
              )}

              {/* IranHotel PLP Interactive Showcase */}
              {project.id === 'iranhotel-plp' && (
                <div className="mb-8 sm:mb-10">
                  <div id="playground-section">
                    <IranHotelPLPShowcase />
                  </div>
                </div>
              )}
              
              <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {projectTranslationData.solution.features.map((feature, i) => (
                  <div key={i} className="bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/30 dark:border-white/10 flex items-start gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className={`text-sm sm:text-base text-gray-700 dark:text-gray-300 ${textAlign}`}>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 dark:from-blue-500/10 dark:to-indigo-500/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/30 dark:border-white/10">
                <p className={`text-sm sm:text-base text-gray-900 dark:text-white font-semibold leading-relaxed ${textAlign}`}>
                  {projectTranslationData.solution.implementation}
                </p>
              </div>
            </GlassSection>

            {/* Learnings */}
            <GlassSection title={t('caseStudy.learnings')}>
              <div className="space-y-3 sm:space-y-4">
                {projectTranslationData.learnings.map((learning, i) => (
                  <div key={i} className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 dark:from-indigo-500/10 dark:to-purple-500/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/30 dark:border-white/10">
                    <p className={`text-sm sm:text-base text-gray-900 dark:text-white font-semibold leading-relaxed ${textAlign}`}>
                      "{learning}"
                    </p>
                  </div>
                ))}
              </div>
            </GlassSection>

            {/* Other Projects */}
            {otherProjects.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-12 sm:mb-16"
              >
                <div className="bg-white/40 dark:bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 lg:p-12 border border-white/40 dark:border-white/20 shadow-2xl shadow-black/5">
                  <div className="mb-6 sm:mb-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                      {t('caseStudy.otherProjects')}
                    </h2>
                    <p className={`text-sm sm:text-base text-gray-600 dark:text-gray-400 ${textAlign}`}>
                      {t('caseStudy.exploreMore')}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {otherProjects.map((otherProject, index) => {
                      const otherProjectData = getProjectData(otherProject.id);
                      
                      // Define icon and color for each project
                      const projectMeta = {
                        'reservation-flow': {
                          Icon: TrendingUp,
                          gradient: 'from-green-400 to-emerald-500',
                          bgGradient: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
                        },
                        'reservation-system': {
                          Icon: TrendingUp,
                          gradient: 'from-green-400 to-emerald-500',
                          bgGradient: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
                        },
                        'design-system': {
                          Icon: Boxes,
                          gradient: 'from-purple-400 to-indigo-500',
                          bgGradient: 'from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20'
                        },
                        'ihotelhub': {
                          Icon: Building2,
                          gradient: 'from-blue-400 to-cyan-500',
                          bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20'
                        },
                        'iranhotel-plp': {
                          Icon: Hotel,
                          gradient: 'from-indigo-500 to-purple-600',
                          bgGradient: 'from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20'
                        }
                      };

                      const meta = projectMeta[otherProject.id as keyof typeof projectMeta] || projectMeta['design-system'];
                      const ProjectIcon = meta.Icon;

                      return (
                        <motion.div
                          key={otherProject.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02, y: -4 }}
                          onClick={() => {
                            haptic('light');
                            navigate(`/case-study/${otherProject.id}`);
                          }}
                          className="group cursor-pointer"
                        >
                          <div className="bg-white/50 dark:bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl overflow-hidden border border-white/40 dark:border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300">
                            
                            {/* Icon Header */}
                            <div className={`relative h-32 sm:h-36 overflow-hidden bg-gradient-to-br ${meta.bgGradient} flex items-center justify-center`}>
                              {/* Animated Background Circles */}
                              <div className="absolute inset-0 overflow-hidden">
                                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${meta.gradient} rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700`} />
                                <div className={`absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br ${meta.gradient} rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700`} />
                              </div>
                              
                              {/* Icon */}
                              <div className="relative z-10">
                                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${meta.gradient} flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                                  <ProjectIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2} />
                                </div>
                              </div>

                              {/* View Arrow - appears on hover */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                                <div className="flex items-center gap-1.5 text-white font-medium text-xs sm:text-sm">
                                  <span>{t('caseStudy.viewProject')}</span>
                                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                              </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-4 sm:p-5">
                              <h3 className={`text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${textAlign}`}>
                                {otherProjectData.title}
                              </h3>
                              <p className={`text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed mb-3 ${textAlign}`}>
                                {otherProjectData.shortDesc}
                              </p>
                              
                              {/* Tags */}
                              <div className={`flex flex-wrap gap-1.5 ${language === 'fa' ? 'justify-end' : 'justify-start'}`}>
                                {otherProject.tags.slice(0, 3).map((tag, tagIndex) => (
                                  <span
                                    key={tagIndex}
                                    className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-[10px] sm:text-xs font-medium"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.section>
            )}

          </div>

        </main>
      </div>

      <BackToTop />
    </>
  );
}