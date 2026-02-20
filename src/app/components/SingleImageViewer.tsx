import { useState, useEffect } from 'react';
import { X, Maximize2 } from 'lucide-react';

interface SingleImageViewerProps {
  image: string;
  alt: string;
}

export function SingleImageViewer({ image, alt }: SingleImageViewerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <>
      <div className="w-full">
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
            <div className="relative overflow-hidden bg-white/20 dark:bg-white/5 backdrop-blur-md rounded-xl border border-white/30 dark:border-white/10 shadow-xl shadow-black/5 h-[400px]">
              <img
                src={image}
                alt={alt}
                loading="lazy"
                className="w-full h-full object-cover object-top"
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
            className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 dark:from-slate-950/95 dark:via-slate-900/95 dark:to-slate-950/95 backdrop-blur-2xl rounded-2xl border-2 border-white/20 dark:border-white/10 shadow-2xl overflow-hidden max-w-6xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Scrollable image */}
            <div
              className="overflow-y-auto p-6 sm:p-8 max-h-[90vh]"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(255,255,255,0.3) rgba(0,0,0,0.1)'
              }}
            >
              <img
                src={image}
                alt={alt}
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
