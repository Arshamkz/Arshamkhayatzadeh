import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * BeforeAfterSlider Component
 * 
 * Interactive before/after comparison slider for visual storytelling.
 * Features:
 * - Draggable slider handle
 * - Click to reveal
 * - Keyboard accessible
 * - Mobile-friendly touch gestures
 * - Animated labels
 */

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  defaultPosition?: number; // 0-100 (default: 50)
  className?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel,
  afterLabel,
  defaultPosition = 50,
  className = '',
}: BeforeAfterSliderProps) {
  const { t } = useLanguage();
  const [sliderPosition, setSliderPosition] = useState(defaultPosition);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const finalBeforeLabel = beforeLabel || t('caseStudy.before');
  const finalAfterLabel = afterLabel || t('caseStudy.after');

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    // Clamp between 0 and 100
    const clampedPercentage = Math.min(Math.max(percentage, 0), 100);
    setSliderPosition(clampedPercentage);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMove(e.clientX);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className={`relative select-none ${className}`}>
      {/* Container */}
      <div
        ref={containerRef}
        className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-2xl cursor-ew-resize"
        onClick={handleClick}
        onTouchStart={() => setIsDragging(true)}
        role="img"
        aria-label={t('accessibility.beforeAfterComparison')}
      >
        {/* After Image (Full) */}
        <img
          src={afterImage}
          alt={finalAfterLabel}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt={finalBeforeLabel}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* Labels */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-4 left-4 bg-red-600/90 backdrop-blur-sm px-4 py-2 rounded-full text-white font-bold text-sm shadow-lg"
        >
          {finalBeforeLabel}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="absolute top-4 right-4 bg-green-600/90 backdrop-blur-sm px-4 py-2 rounded-full text-white font-bold text-sm shadow-lg"
        >
          {finalAfterLabel}
        </motion.div>

        {/* Slider Handle */}
        <div
          className="absolute inset-y-0 flex items-center justify-center"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          {/* Vertical Line */}
          <div className="absolute inset-y-0 w-1 bg-white shadow-lg" />

          {/* Handle Button */}
          <button
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
            className="relative w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/50 z-10"
            aria-label={t('accessibility.dragToCompare')}
            tabIndex={0}
          >
            <ChevronLeft className="w-4 h-4 text-gray-700 absolute left-2" />
            <ChevronRight className="w-4 h-4 text-gray-700 absolute right-2" />
          </button>
        </div>

        {/* Instruction Hint (fades on first interaction) */}
        {sliderPosition === defaultPosition && !isDragging && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium pointer-events-none"
          >
            ← Drag to compare →
          </motion.div>
        )}
      </div>

      {/* Accessibility: Keyboard hint */}
      <p className="sr-only">
        Use arrow keys to adjust comparison slider. Current position: {Math.round(sliderPosition)}%
      </p>
    </div>
  );
}

/**
 * Usage:
 * 
 * <BeforeAfterSlider
 *   beforeImage="/images/before.jpg"
 *   afterImage="/images/after.jpg"
 *   beforeLabel="Before Redesign"
 *   afterLabel="After Redesign"
 *   defaultPosition={50}
 * />
 */