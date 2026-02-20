import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export function ScrollReveal({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '' 
}: ScrollRevealProps) {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  const offset = directionOffset[direction];

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ 
          opacity: 0, 
          y: offset.y,
          x: offset.x,
        }}
        animate={isInView ? { 
          opacity: 1, 
          y: 0,
          x: 0,
        } : {
          opacity: 0, 
          y: offset.y,
          x: offset.x,
        }}
        transition={{ 
          duration: 0.6, 
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
