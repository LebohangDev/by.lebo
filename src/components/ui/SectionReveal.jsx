'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { sectionReveal } from '../../lib/animations';

export default function SectionReveal({ children, className = '', delay = 0, once = true }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: '-80px 0px' });

  return (
    <motion.div
      ref={ref}
      variants={sectionReveal}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
