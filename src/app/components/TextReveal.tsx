import { motion } from 'motion/react';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  type?: 'word' | 'char';
}

export function TextReveal({ 
  text, 
  className = '', 
  delay = 0,
  type = 'word'
}: TextRevealProps) {
  if (type === 'word') {
    const words = text.split(' ');
    return (
      <span className={className}>
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: delay + wordIndex * 0.05,
                duration: 0.5,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
            {wordIndex < words.length - 1 && <span>&nbsp;</span>}
          </span>
        ))}
      </span>
    );
  }

  // Character by character
  const chars = text.split('');
  return (
    <span className={className}>
      {chars.map((char, charIndex) => (
        <motion.span
          key={charIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + charIndex * 0.03,
            duration: 0.3,
            ease: 'easeOut',
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}
