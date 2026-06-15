'use client';
import { motion } from 'framer-motion';
import { staggerFast, charReveal } from '../../lib/animations';

export default function AnimatedText({ text, className = '', el: Tag = 'span', once = true }) {
  const words = text.split(' ');

  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        variants={staggerFast}
        initial="hidden"
        animate="visible"
        style={{ display: 'inline-block' }}
        aria-hidden
      >
        {words.map((word, wi) => (
          <span key={wi} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {word.split('').map((char, ci) => (
              <motion.span
                key={ci}
                variants={charReveal}
                style={{ display: 'inline-block' }}
              >
                {char}
              </motion.span>
            ))}
            {wi < words.length - 1 && (
              <motion.span variants={charReveal} style={{ display: 'inline-block' }}>
                &nbsp;
              </motion.span>
            )}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
