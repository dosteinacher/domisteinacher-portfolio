'use client';

import { ReactLenis, useLenis } from 'lenis/react';
import { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

/** Lenis virtualizes scroll position, so a client-side route change doesn't
 * automatically land back at the top like a native navigation would — nudge
 * it explicitly. Must render inside <ReactLenis> to reach the instance via
 * context. */
function ScrollResetOnNavigate() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  return null;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    // One-time browser-only feature check post-mount; SSR always starts
    // disabled to avoid a hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(!query.matches);

    const onChange = () => setEnabled(!query.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  if (!enabled) return <>{children}</>;

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      <ScrollResetOnNavigate />
      {children}
    </ReactLenis>
  );
}
