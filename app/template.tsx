'use client';

import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

/** Next's per-navigation remount point. Provides a Framer fade+rise-in for
 * browsers *without* native View Transitions support (see
 * components/TransitionLink.tsx) — feature-detected so it doesn't
 * double-animate on top of the native crossfade where that's already
 * running. */
export default function Template({ children }: { children: ReactNode }) {
  const [nativeSupport, setNativeSupport] = useState(true);

  useEffect(() => {
    // One-time browser-only feature check post-mount; SSR always starts
    // assuming support (skips the fallback animation) to avoid a hydration
    // mismatch and to avoid a flash of animation for the common case.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNativeSupport('startViewTransition' in document);
  }, []);

  if (nativeSupport) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
