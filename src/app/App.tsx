import { BrowserRouter, Routes, Route } from 'react-router';
import { Toaster } from 'sonner';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Home } from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import { Projects } from './pages/Projects';
import { Admin } from './pages/Admin';
import { SkipToContent } from './components/SkipToContent';
import { ErrorBoundary } from './components/ErrorBoundary';
import './i18n/config'; // Initialize i18n before app renders

export default function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider>
          <LanguageProvider>
            <BrowserRouter>
              <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
                <SkipToContent />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/case-study/:id" element={<CaseStudy />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/admin" element={<Admin />} />
                </Routes>
                <Toaster 
                  position="top-center" 
                  richColors 
                  closeButton 
                  duration={4000}
                  toastOptions={{
                    className: 'dark:bg-gray-800 dark:text-white dark:border-gray-700',
                  }}
                />
              </div>
            </BrowserRouter>
          </LanguageProvider>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}