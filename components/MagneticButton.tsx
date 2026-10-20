'use client';

import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { MouseEvent, ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  strength?: number;
};

/** Wraps a link/button and nudges it toward the cursor on hover — a cheap
 * "magnetic" micro-interaction using Framer's motion values (no new deps). */
export default function MagneticButton({
  href,
  children,
  className = '',
  target,
  rel,
  strength = 0.35,
}: Props) {
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={reducedMotion ? undefined : { x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.a>
  );
}
