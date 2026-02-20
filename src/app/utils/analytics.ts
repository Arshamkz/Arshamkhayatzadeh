/**
 * Analytics Utility - Plausible Analytics Integration
 * 
 * Plausible is privacy-friendly, GDPR-compliant, and doesn't use cookies.
 * Lightweight alternative to Google Analytics.
 * 
 * Setup Instructions:
 * 1. Sign up at https://plausible.io
 * 2. Add your domain
 * 3. Update PLAUSIBLE_DOMAIN in this file
 * 4. Script is loaded via SEO component
 */

// Configuration
const PLAUSIBLE_DOMAIN = 'your-domain.com'; // TODO: Update with actual domain
const PLAUSIBLE_API_HOST = 'https://plausible.io'; // Use custom domain if self-hosted

// Type definitions
interface PlausibleEventOptions {
  props?: Record<string, string | number | boolean>;
  callback?: () => void;
}

declare global {
  interface Window {
    plausible?: (
      eventName: string,
      options?: PlausibleEventOptions
    ) => void;
  }
}

/**
 * Track a custom event
 * @param eventName - Name of the event (e.g., "Download Resume", "View Case Study")
 * @param props - Optional event properties (e.g., { language: "en", project: "reservation-flow" })
 */
export function trackEvent(
  eventName: string,
  props?: Record<string, string | number | boolean>
): void {
  if (typeof window === 'undefined') return;

  try {
    if (window.plausible) {
      window.plausible(eventName, { props });
      console.log(`[Analytics] Event tracked: ${eventName}`, props);
    } else {
      console.warn('[Analytics] Plausible not loaded yet');
    }
  } catch (error) {
    console.error('[Analytics] Error tracking event:', error);
  }
}

/**
 * Track page view (automatically handled by Plausible, but can be called manually for SPA navigation)
 * @param url - Optional custom URL (defaults to current URL)
 */
export function trackPageView(url?: string): void {
  if (typeof window === 'undefined') return;

  try {
    if (window.plausible) {
      window.plausible('pageview', {
        props: url ? { url } : undefined,
      });
      console.log(`[Analytics] Page view tracked:`, url || window.location.pathname);
    }
  } catch (error) {
    console.error('[Analytics] Error tracking page view:', error);
  }
}

/**
 * Track outbound link clicks
 * @param url - Destination URL
 * @param callback - Optional callback after tracking
 */
export function trackOutboundLink(url: string, callback?: () => void): void {
  trackEvent('Outbound Link', { url });
  
  if (callback) {
    // Small delay to ensure event is sent
    setTimeout(callback, 150);
  }
}

/**
 * Track file downloads
 * @param fileName - Name of the downloaded file
 * @param fileType - Type of file (e.g., "pdf", "zip")
 */
export function trackDownload(fileName: string, fileType: string): void {
  trackEvent('File Download', { 
    file: fileName,
    type: fileType 
  });
}

/**
 * Track case study views
 * @param projectId - ID of the project
 * @param projectTitle - Title of the project
 */
export function trackCaseStudyView(projectId: string, projectTitle: string): void {
  trackEvent('Case Study View', {
    project_id: projectId,
    project_title: projectTitle,
  });
}

/**
 * Track contact interactions
 * @param method - Contact method (e.g., "email", "linkedin")
 */
export function trackContact(method: string): void {
  trackEvent('Contact Click', { method });
}

/**
 * Track theme changes
 * @param theme - New theme value ("light" or "dark")
 */
export function trackThemeChange(theme: 'light' | 'dark'): void {
  trackEvent('Theme Change', { theme });
}

/**
 * Track resume downloads
 * @param language - Resume language ("en" or "fa")
 */
export function trackResumeDownload(language: 'en' | 'fa'): void {
  trackEvent('Resume Download', { language });
}

/**
 * Track scroll depth (for engagement measurement)
 * @param percentage - Scroll depth percentage (25, 50, 75, 100)
 */
export function trackScrollDepth(percentage: number): void {
  trackEvent('Scroll Depth', { depth: percentage });
}

// Export configuration for use in components
export const analyticsConfig = {
  domain: PLAUSIBLE_DOMAIN,
  apiHost: PLAUSIBLE_API_HOST,
};
