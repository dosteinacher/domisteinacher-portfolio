'use client';

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { MouseEvent, ReactNode, useState, useEffect } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  /** Max tilt angle in degrees. */
  maxTilt?: number;
};

/** Wraps children in a subtle 3D tilt-toward-cursor effect. Inert on touch
 * devices and under prefers-reduced-motion (matches the pattern already
 * used for Lenis/aurora/spotlight elsewhere on the site). */
export default function TiltCard({ children, className = '', maxTilt = 6 }: Props) {
  const reducedMotion = useReducedMotion();
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    // One-time browser-only feature check post-mount; SSR always starts
    // disabled to avoid a hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFinePointer(window.matchMedia('(pointer: fine)').matches);
  }, []);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(springY, [0, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(springX, [0, 1], [-maxTilt, maxTilt]);

  const enabled = finePointer && !reducedMotion;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!enabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={enabled ? { rotateX, rotateY, transformPerspective: 1000 } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}
