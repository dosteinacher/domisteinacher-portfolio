'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export default function AnimateIn({ children, className = '', delay = 0, y = 24 }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
