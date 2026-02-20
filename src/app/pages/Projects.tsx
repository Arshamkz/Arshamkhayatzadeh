import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import DotGrid from '../components/DotGrid';
import { projects } from '../data/projects';
import { haptic } from '../utils/haptics';
import { useTheme } from '../contexts/ThemeContext';
import { SEO } from '../components/SEO';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useTranslation } from 'react-i18next';
import { useProjectTranslation } from '../i18n/useProjectTranslation';

export function Projects() {
  const navigate = useNavigate();
  const { actualTheme } = useTheme();
  const { t } = useTranslation();
  const { getProjectData } = useProjectTranslation();

  const handleBack = () => {
    haptic('light');
    navigate('/');
  };

  const handleProjectClick = (projectId: string) => {
    haptic('medium');
    navigate(`/case-study/${projectId}`);
  };

  return (
    <>
      <SEO
        title={t('seo.projectsTitle')}
        description={t('seo.projectsDescription')}
        canonical="/projects"
      />
      
      <Helmet>
        <meta name="theme-color" content={actualTheme === 'dark' ? '#0f172a' : '#f8fafc'} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 relative overflow-x-hidden">
        
        {/* Interactive Dot Grid Background */}
        <div className="fixed inset-0 pointer-events-auto" aria-hidden="true">
          <DotGrid
            dotSize={4}
            gap={20}
            baseColor={actualTheme === 'dark' ? '#1e293b' : '#e2e8f0'}
            activeColor={actualTheme === 'dark' ? '#5227FF' : '#6366f1'}
            proximity={100}
            shockRadius={200}
            shockStrength={4}
            resistance={800}
            returnDuration={1.8}
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          
          {/* Header */}
          <header className="sticky top-0 z-50 px-4 sm:px-6 lg:px-12 py-6 bg-gradient-to-b from-blue-50/90 via-blue-50/70 to-transparent dark:from-slate-950/90 dark:via-slate-950/70 dark:to-transparent backdrop-blur-md border-b border-white/20 dark:border-white/10 shadow-lg shadow-black/5">
            <div className="max-w-6xl mx-auto">
              <button
                onClick={handleBack}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-semibold group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                {t('caseStudy.backToHome')}
              </button>
            </div>
          </header>

          {/* Projects Section */}
          <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              
              {/* Section Header */}
              <div className="text-center mb-12 sm:mb-16">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('projects.allProjects')}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  {t('projects.allProjectsSubtitle')}
                </p>
              </div>

              {/* Projects Grid */}
              <div className="space-y-8 sm:space-y-12">
                {projects.map((project, index) => {
                  const projectData = getProjectData(project.id);
                  if (!projectData) return null;
                  
                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      onClick={() => handleProjectClick(project.id)}
                      className="group cursor-pointer"
                    >
                      <div className="bg-white/40 dark:bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/40 dark:border-white/20 shadow-2xl hover:shadow-3xl hover:bg-white/50 dark:hover:bg-white/15 transition-all duration-300">
                        
                        {/* Thumbnail */}
                        {(project.coverImage || project.image) && (
                          <div className="w-full bg-white/60 dark:bg-white/5 backdrop-blur-sm overflow-hidden border-b border-white/40 dark:border-white/20 aspect-[2/1]">
                            <ImageWithFallback
                              src={project.coverImage || project.image}
                              alt={projectData.title}
                              className="w-full h-full object-cover object-center block transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        )}

                        {/* Content */}
                        <div className="p-6 sm:p-8 lg:p-12">
                          {/* Project Number */}
                          <div className="text-sm font-bold text-indigo-600 dark:text-violet-500 mb-4">
                            {t('projects.projectNumber', { number: String(index + 1).padStart(2, '0') })}
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {projectData.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="bg-white/40 dark:bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs text-gray-700 dark:text-gray-300 font-medium border border-white/30 dark:border-white/10"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Title */}
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                            {projectData.title}
                          </h3>

                          {/* Description */}
                          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 font-normal">
                            {projectData.shortDesc}
                          </p>

                          {/* Metrics */}
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                            {projectData.results.metrics.slice(0, 4).map((metric) => (
                              <div
                                key={metric.label}
                                className="relative bg-gradient-to-br from-white/40 to-white/20 dark:from-white/10 dark:to-white/5 backdrop-blur-md rounded-xl p-4 border-l-4 border-indigo-500 dark:border-violet-500 shadow-lg shadow-black/5"
                              >
                                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-1">
                                  {metric.value}
                                </div>
                                <div className="text-xs text-gray-600 dark:text-gray-400 font-medium leading-tight">
                                  {metric.label}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* CTA */}
                          <div className="flex items-center gap-2 text-base font-semibold group-hover:gap-3 transition-all">
                            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                              {t('projects.viewFullCaseStudy')}
                            </span>
                            <ArrowRight className="w-5 h-5 text-indigo-600 dark:text-violet-500 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}