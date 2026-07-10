import { BrowserRouter, Routes, Route } from 'react-router';
import { Toaster } from 'sonner';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Home } from './pages/Home';
import CaseStudy from './pages/CaseStudy';
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
              <div className="min-h-screen bg-[#E9E8E3] dark:bg-[#0F0E17] transition-colors duration-300">
                <SkipToContent />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/case-study/:id" element={<CaseStudy />} />
                  {/* 404 - Redirect to home */}
                  <Route path="*" element={<Home />} />
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
      <Analytics />
    </ErrorBoundary>
  );
}