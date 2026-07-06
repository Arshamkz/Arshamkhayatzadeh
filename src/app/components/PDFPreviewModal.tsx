import { X, Download, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';

interface PDFPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title?: string;
}

export function PDFPreviewModal({ isOpen, onClose, pdfUrl, title = 'PDF Preview' }: PDFPreviewModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Close Button - Fixed position */}
        <button
          onClick={onClose}
          className="fixed top-4 right-4 z-[10000] w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-200 shadow-lg"
          aria-label="Close PDF preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* PDF Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-5xl h-[90vh] md:h-[85vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-white/10 backdrop-blur-md rounded-t-xl px-4 py-3 border-b border-white/20 flex items-center justify-between">
            <h3 className="text-white font-semibold text-sm md:text-base truncate">{title}</h3>
            <div className="flex items-center gap-2">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                title="Open in new tab"
              >
                <ExternalLink className="w-4 h-4 text-white" />
              </a>
              <a
                href={pdfUrl}
                download
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                title="Download PDF"
              >
                <Download className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="bg-white rounded-b-xl shadow-2xl h-[calc(100%-3rem)] overflow-auto">
            <iframe
              src={pdfUrl}
              className="w-full h-full min-h-[600px] border-0"
              title={title}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
