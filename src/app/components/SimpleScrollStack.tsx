import { useEffect, useRef, useCallback } from 'react';

export const SimpleScrollStackItem = ({ 
  children, 
  itemClassName = '' 
}: { 
  children: React.ReactNode; 
  itemClassName?: string;
}) => (
  <div className={`simple-scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

interface SimpleScrollStackProps {
  children: React.ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: number; // pixels from top
  scaleEndPosition?: number; // pixels from top
  baseScale?: number;
}

const SimpleScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 40,
  stackPosition = 150,
  scaleEndPosition = 50,
  baseScale = 0.9,
}: SimpleScrollStackProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const rafRef = useRef<number | null>(null);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length) return;

    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const cardTop = rect.top + scrollTop;
      
      // Calculate when card should start stacking
      const triggerStart = cardTop - stackPosition - (itemStackDistance * i);
      const triggerEnd = cardTop - scaleEndPosition;
      
      // Scale progress (0 to 1)
      let scaleProgress = 0;
      if (scrollTop >= triggerStart && scrollTop <= triggerEnd) {
        scaleProgress = (scrollTop - triggerStart) / (triggerEnd - triggerStart);
      } else if (scrollTop > triggerEnd) {
        scaleProgress = 1;
      }

      // Calculate scale
      const targetScale = baseScale + (i * itemScale);
      const scale = 1 - (scaleProgress * (1 - targetScale));

      // Calculate position (pinning)
      let translateY = 0;
      const pinStart = cardTop - stackPosition - (itemStackDistance * i);
      
      // Find end point (last card bottom)
      const lastCard = cardsRef.current[cardsRef.current.length - 1];
      const lastCardRect = lastCard ? lastCard.getBoundingClientRect() : rect;
      const lastCardBottom = lastCardRect.bottom + scrollTop;
      const pinEnd = lastCardBottom - viewportHeight;

      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translateY = scrollTop - cardTop + stackPosition + (itemStackDistance * i);
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPosition + (itemStackDistance * i);
      }

      // Apply transforms
      const transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
      card.style.transform = transform;
      card.style.transformOrigin = 'top center';
      card.style.willChange = 'transform';
    });

    rafRef.current = requestAnimationFrame(updateCardTransforms);
  }, [itemScale, itemStackDistance, stackPosition, scaleEndPosition, baseScale]);

  const handleScroll = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    rafRef.current = requestAnimationFrame(updateCardTransforms);
  }, [updateCardTransforms]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Find all cards
    const cards = Array.from(
      container.querySelectorAll('.simple-scroll-stack-card')
    ) as HTMLElement[];

    cardsRef.current = cards;

    // Add margins
    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.position = 'relative';
      card.style.zIndex = `${cards.length - i}`;
    });

    // Start animation loop
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      cardsRef.current = [];
    };
  }, [itemDistance, handleScroll]);

  return (
    <div className={`simple-scroll-stack-container ${className}`.trim()} ref={containerRef}>
      {children}
      <div className="simple-scroll-stack-spacer" style={{ height: '100vh' }} />
    </div>
  );
};

export default SimpleScrollStack;
