import { useState, useRef, useEffect } from 'react';
import { X, Maximize2 } from 'lucide-react';

interface ScrollableImageViewerProps {
  desktopImage: string;
  mobileImage?: string;
  alt: string;
}

export function ScrollableImageViewer({ desktopImage, mobileImage, alt }: ScrollableImageViewerProps) {
  const [activeView, setActiveView] = useState<'desktop' | 'mobile'>('desktop');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const isHoveringRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);
  const [modalScrollable, setModalScrollable] = useState(false);

  const checkScrollable = (isModal = false) => {
    const container = isModal ? modalContainerRef.current : containerRef.current;
    if (container) {
      const hasScroll = container.scrollHeight > container.clientHeight;
      if (isModal) {
        setModalScrollable(hasScroll);
      } else {
        setIsScrollable(hasScroll);
      }
    }
  };

  // Auto-scroll animation
  useEffect(() => {
    const container = isModalOpen ? modalContainerRef.current : containerRef.current;
    const scrollable = isModalOpen ? modalScrollable : isScrollable;

    if (!isHovering || !container || !scrollable) {
      setScrollProgress(0);
      if (container) {
        container.scrollTop = 0;
      }
      return;
    }

    const scrollHeight = container.scrollHeight - container.clientHeight;
    
    if (scrollHeight <= 0) return;

    let animationFrame: number;
    let startTime: number | null = null;
    const duration = 10000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeProgress = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      
      setScrollProgress(easeProgress);
      container.scrollTop = easeProgress * scrollHeight;

      if (progress < 1 && isHoveringRef.current) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isHovering, isScrollable, modalScrollable, isModalOpen]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
      setScrollProgress(0);
    }
    setTimeout(() => checkScrollable(false), 100);
  }, [activeView]);

  useEffect(() => {
    if (isModalOpen && modalContainerRef.current) {
      modalContainerRef.current.scrollTop = 0;
      setScrollProgress(0);
      setTimeout(() => checkScrollable(true), 100);
    }
  }, [isModalOpen, activeView]);

  useEffect(() => {
    isHoveringRef.current = isHovering;
  }, [isHovering]);

  // Close modal on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isModalOpen]);

  // Prevent body scroll when modal open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const currentImage = activeView === 'desktop' ? desktopImage : (mobileImage || desktopImage);

  return (
    <>
      <div className="w-full">
        {/* View Switcher - Glass */}
        {mobileImage && (
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setActiveView('desktop')}
              className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl transition-all font-bold border ${
                activeView === 'desktop'
                  ? 'bg-white/60 dark:bg-white/20 text-gray-900 dark:text-white backdrop-blur-xl border-white/60 dark:border-white/30 shadow-xl shadow-black/10'
                  : 'bg-white/30 dark:bg-white/10 text-gray-700 dark:text-gray-400 backdrop-blur-xl border-white/30 dark:border-white/10 shadow-lg shadow-black/5 hover:bg-white/40 dark:hover:bg-white/15'
              }`}
            >
              Desktop
            </button>
            <button
              onClick={() => setActiveView('mobile')}
              className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl transition-all font-bold border ${
                activeView === 'mobile'
                  ? 'bg-white/60 dark:bg-white/20 text-gray-900 dark:text-white backdrop-blur-xl border-white/60 dark:border-white/30 shadow-xl shadow-black/10'
                  : 'bg-white/30 dark:bg-white/10 text-gray-700 dark:text-gray-400 backdrop-blur-xl border-white/30 dark:border-white/10 shadow-lg shadow-black/5 hover:bg-white/40 dark:hover:bg-white/15'
              }`}
            >
              Mobile
            </button>
          </div>
        )}

        {/* Thumbnail - Smaller Preview */}
        <div 
          onClick={() => setIsModalOpen(true)}
          className="relative group bg-white/40 dark:bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/40 dark:border-white/20 shadow-2xl shadow-black/5 cursor-pointer hover:shadow-3xl hover:shadow-black/10 transition-all"
        >
          {/* Expand Icon */}
          <div className="absolute top-4 right-4 z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity border border-white/40 dark:border-white/20 shadow-xl">
            <Maximize2 className="w-5 h-5 text-gray-900 dark:text-white" />
          </div>

          {/* Click to expand hint */}
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-b from-transparent via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="absolute bottom-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl px-6 py-3 rounded-xl text-gray-900 dark:text-white text-sm font-bold border border-white/40 dark:border-white/20 shadow-xl">
              Click to view full size
            </div>
          </div>

          {/* Thumbnail container */}
          <div className="p-4">
            <div
              className={`relative overflow-hidden bg-white/20 dark:bg-white/5 backdrop-blur-md rounded-xl border border-white/30 dark:border-white/10 shadow-xl shadow-black/5 ${
                activeView === 'desktop' 
                  ? 'h-[300px] sm:h-[400px]' 
                  : 'h-[300px] sm:h-[400px] max-w-[300px] mx-auto'
              }`}
            >
              {/* Mobile frame for thumbnail */}
              {activeView === 'mobile' && (
                <>
                  <div className="absolute top-0 left-0 right-0 h-6 bg-white/30 dark:bg-white/10 backdrop-blur-md z-20 flex items-center justify-center rounded-t-xl border-b border-white/20 dark:border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="text-gray-700 dark:text-gray-300 text-[10px] font-bold">9:41</div>
                      <div className="w-12 h-3 bg-white/40 dark:bg-white/20 backdrop-blur-sm rounded-full border border-white/30 dark:border-white/10" />
                    </div>
                  </div>
                  <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/40 dark:bg-white/20 backdrop-blur-sm rounded-full z-20 border border-white/20 dark:border-white/10" />
                </>
              )}
              
              <img
                src={currentImage}
                alt={alt}
                loading="lazy"
                className={`w-full h-full object-cover object-top ${activeView === 'mobile' ? 'pt-6' : ''}`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/70 dark:bg-black/85 backdrop-blur-xl"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(false);
            }}
            className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[110] bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-3 rounded-xl text-gray-900 dark:text-white hover:bg-white dark:hover:bg-slate-800 transition-all border border-white/40 dark:border-white/20 shadow-2xl group"
          >
            <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
          </button>

          {/* Modal content */}
          <div 
            className={`relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 dark:from-slate-950/95 dark:via-slate-900/95 dark:to-slate-950/95 backdrop-blur-2xl rounded-2xl border-2 border-white/20 dark:border-white/10 shadow-2xl overflow-hidden ${
              activeView === 'desktop' 
                ? 'max-w-6xl w-full max-h-[90vh]' 
                : 'max-w-md w-full max-h-[90vh]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Progress indicator */}
            {isHovering && (
              <div className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl px-4 py-2 rounded-xl text-gray-900 dark:text-white text-sm font-bold border border-white/40 dark:border-white/20 shadow-xl">
                {Math.round(scrollProgress * 100)}%
              </div>
            )}

            {/* Progress bar */}
            {isHovering && (
              <div className="absolute top-0 left-0 right-0 h-1.5 z-10">
                <div className="h-full bg-white/20 dark:bg-white/10">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_16px_rgba(59,130,246,0.8)]"
                    style={{ width: `${scrollProgress * 100}%` }}
                  />
                </div>
              </div>
            )}

            {/* Scrollable image */}
            <div
              ref={modalContainerRef}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className={`overflow-y-auto p-6 sm:p-8 ${
                activeView === 'desktop' 
                  ? 'max-h-[90vh]' 
                  : 'max-h-[90vh]'
              }`}
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(255,255,255,0.3) rgba(0,0,0,0.1)'
              }}
            >
              <div className={`relative ${activeView === 'mobile' ? 'max-w-[380px] mx-auto' : ''}`}>
                {/* Mobile frame for modal */}
                {activeView === 'mobile' && (
                  <>
                    <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-slate-800/90 to-transparent dark:from-slate-950/90 z-20 flex items-center justify-center rounded-t-xl">
                      <div className="flex items-center gap-4">
                        <div className="text-gray-300 dark:text-gray-400 text-xs font-bold">9:41</div>
                        <div className="w-20 h-5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white/20 backdrop-blur-sm rounded-full z-20 border border-white/10" />
                  </>
                )}
                
                <img
                  src={currentImage}
                  alt={alt}
                  className={`w-full h-auto rounded-xl shadow-2xl ${activeView === 'mobile' ? 'mt-10' : ''}`}
                  onLoad={() => checkScrollable(true)}
                />
              </div>
            </div>

            {/* Scroll hint */}
            {modalScrollable && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl px-5 py-2 rounded-xl text-gray-900 dark:text-white text-xs font-bold border border-white/40 dark:border-white/20 shadow-xl flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-pulse"></span>
                Scroll or hover to auto-scroll
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}