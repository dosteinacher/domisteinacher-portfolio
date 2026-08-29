'use client';

import { motion, useInView, useMotionValue, useReducedMotion, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type Props = {
  /** Numeric target to count up to. */
  value?: number;
  prefix?: string;
  suffix?: string;
  /** Non-numeric display, rendered as-is with no count-up (e.g. a year like
   * "1996", or a "50 → 300" growth figure). Takes precedence over `value`. */
  staticText?: string;
  label: string;
  className?: string;
};

/** A bento-grid stat tile. Counts up from 0 → value once it scrolls into
 * view (snaps instantly under prefers-reduced-motion). Pass `staticText`
 * instead of `value` for a non-quantity highlight (e.g. a year). */
export default function StatTile({ value, prefix = '', suffix = '', staticText, label, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reducedMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || value === undefined) return;
    if (reducedMotion) {
      // Snap to the final value instead of animating — reduced-motion path.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplay(value);
      return;
    }
    const controls = animate(motionValue, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, reducedMotion, motionValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`bg-concrete rounded-lg border border-white/[0.06] p-6 flex flex-col justify-center ${className}`}
    >
      <div className="text-4xl md:text-5xl font-bold text-rust mb-2 tabular-nums">
        {staticText ?? (
          <>
            {prefix}
            {value !== undefined ? display : null}
            {suffix}
          </>
        )}
      </div>
      <p className="text-steel text-sm uppercase tracking-wide font-semibold">{label}</p>
    </motion.div>
  );
}
