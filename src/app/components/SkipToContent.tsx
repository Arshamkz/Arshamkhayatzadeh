export function SkipToContent() {
  const handleSkip = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      // Smooth scroll با respect به prefers-reduced-motion
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      mainContent.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <a
      href="#main-content"
      onClick={handleSkip}
      className="skip-link sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-indigo-600 focus:text-white focus:px-8 focus:py-4 focus:rounded-xl focus:font-bold focus:shadow-2xl focus:outline focus:outline-4 focus:outline-white focus:outline-offset-2 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-400 transition-all focus:min-w-[200px] focus:text-center"
      aria-label="Skip to main content section"
    >
      Skip to main content
    </a>
  );
}