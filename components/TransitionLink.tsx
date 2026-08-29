'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react';

type DocumentWithViewTransitions = Document & {
  startViewTransition?: (callback: () => void) => void;
};

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

/** Drop-in replacement for next/link that adds a native View Transitions
 * crossfade between pages where the browser supports it (Chromium, Safari
 * 18+). Feature-detected — falls through to next/link's normal navigation
 * everywhere else, where app/template.tsx's Framer fade covers the same
 * "page transition" need. */
export default function TransitionLink({ href, children, onClick, ...rest }: Props) {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    // Let modifier-clicks (new tab, etc.) behave natively.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

    const doc = document as DocumentWithViewTransitions;
    if (!doc.startViewTransition) return;

    e.preventDefault();
    doc.startViewTransition(() => {
      router.push(href);
    });
  };

  return (
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
