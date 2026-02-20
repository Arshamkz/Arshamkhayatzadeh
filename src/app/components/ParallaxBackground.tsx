import { motion, useScroll, useTransform } from 'motion/react';

export function ParallaxBackground() {
  const { scrollY } = useScroll();

  // Different speeds for depth effect
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -50]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Layer 1 - Fast (Front) */}
      <motion.div
        style={{ y: y1 }}
        animate={{
          x: [0, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-indigo-400/30 to-violet-400/30 dark:from-indigo-500/20 dark:to-violet-500/20 rounded-full blur-3xl"
      />

      {/* Layer 2 - Medium (Middle) */}
      <motion.div
        style={{ y: y2 }}
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 left-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-violet-400/25 to-purple-400/25 dark:from-violet-500/15 dark:to-purple-500/15 rounded-full blur-3xl"
      />

      {/* Layer 3 - Slow (Back) */}
      <motion.div
        style={{ y: y3 }}
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-400/30 to-purple-400/30 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-3xl"
      />

      {/* Layer 4 - Extra slow (Far back) */}
      <motion.div
        style={{ y: y3 }}
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl"
      />
    </div>
  );
}
