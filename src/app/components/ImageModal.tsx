import { X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

/**
 * Minimal Lightbox — no zoom controls, no scroll gymnastics.
 * The image is always sized to fit within the viewport (max 92vw × 85vh),
 * `object-contain` guarantees no cropping, no distortion.
 * For pixel-level inspection, an "Open original" link opens the raw file
 * in a new tab.
 *
 * Contract:
 *   - Fixed to viewport, z-[9999], above everything.
 *   - Body scroll locked while open.
 *   - ESC / click backdrop / close button all dismiss.
 *   - Image never renders larger than viewport can hold.
 */
export function ImageModal({ isOpen, onClose, imageSrc, imageAlt }: ImageModalProps) {
  // Body scroll lock
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // ESC to close
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[9999] bg-black/92 backdrop-blur-md flex items-center justify-center p-6 sm:p-10"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={imageAlt}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="fixed top-4 right-4 z-[10001] w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Open-original link */}
          <a
            href={imageSrc}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[10001] inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/12 hover:bg-white/20 backdrop-blur-md text-white/85 text-xs font-medium transition"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Open original
          </a>

          {/* Image — hard-capped to fit viewport, never cropped */}
          <motion.img
            key={imageSrc}
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.18 }}
            src={imageSrc}
            alt={imageAlt}
            onClick={e => e.stopPropagation()}
            draggable={false}
            className="max-w-[92vw] max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl select-none"
            style={{ display: 'block' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
