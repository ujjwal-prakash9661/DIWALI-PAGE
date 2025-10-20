import { motion } from 'motion/react';

export function AnimatedText({ text, className = '', delay = 0 }) {
  const words = text.split(' ');

  return (
    <div className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              className="inline-block"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: delay + (wordIndex * 0.1) + (charIndex * 0.05),
                ease: 'easeOut',
              }}
            >
              {char}
            </motion.span>
          ))}
          <span className="inline-block">&nbsp;</span>
        </span>
      ))}
    </div>
  );
}

export function GlowingText({ text, className = '' }) {
  return (
    <motion.div
      className={className}
      animate={{
        textShadow: [
          '0 0 10px rgba(251, 191, 36, 0.5)',
          '0 0 20px rgba(251, 191, 36, 0.8)',
          '0 0 10px rgba(251, 191, 36, 0.5)',
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {text}
    </motion.div>
  );
}
