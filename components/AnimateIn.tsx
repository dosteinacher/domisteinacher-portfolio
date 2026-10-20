'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export default function AnimateIn({ children, className = '', delay = 0, y = 24 }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px', amount: 0.15 });
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={reducedMotion ? false : { opacity: 0, y }}
      animate={reducedMotion ? { opacity: 1, y: 0 } : inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: reducedMotion ? 0 : 0.9, delay: reducedMotion ? 0 : delay, ease: [0.2, 0.8, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
