'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useT } from '@/lib/translations';
import TransitionLink from '@/components/TransitionLink';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { lang, toggle } = useLanguage();
  const t = useT(lang);
  const reducedMotion = useReducedMotion();

  const navItems = [
    { name: t.nav.home,    href: '/' },
    { name: t.nav.me,      href: '/me' },
    { name: t.nav.blogs,   href: '/domiblogs' },
    { name: t.nav.gopure,  href: 'https://go-pure.ch', external: true },
    { name: t.nav.contact, href: '/contact' },
  ];

  // Intentional: close the mobile menu whenever the route changes.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className="site-header">
      <nav aria-label="Main navigation" className="site-nav">
        <TransitionLink href="/" className="site-brand">
          <span className="site-brand-mark" aria-hidden="true">DS</span>
          <span className="site-brand-name">Domi Steinacher</span>
        </TransitionLink>

        <div className="site-nav-links">
          {navItems.map((item) => {
            const isActive = !item.external &&
              (pathname === item.href || (item.href !== '/' && pathname.startsWith(`${item.href}/`)));
            const className = `site-nav-link${isActive ? ' is-active' : ''}`;
            if (item.external) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {item.name}<span aria-hidden="true"> ↗</span>
                </a>
              );
            }
            return (
              <TransitionLink
                key={item.href}
                href={item.href}
                className={className}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.name}
              </TransitionLink>
            );
          })}
          <LanguageToggle lang={lang} onToggle={toggle} />
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="site-menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <span className={open ? 'is-open' : ''} />
          <span className={open ? 'is-open' : ''} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={reducedMotion ? false : { opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: reducedMotion ? 0 : 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="site-mobile-menu"
          >
            {navItems.map((item) => {
              const isActive = !item.external &&
                (pathname === item.href || (item.href !== '/' && pathname.startsWith(`${item.href}/`)));
              const className = `site-mobile-link${isActive ? ' is-active' : ''}`;
              return (
                item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {item.name}<span aria-hidden="true"> ↗</span>
                  </a>
                ) : (
                  <TransitionLink
                    key={item.href}
                    href={item.href}
                    className={className}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                  </TransitionLink>
                )
              );
            })}
            <LanguageToggle lang={lang} onToggle={toggle} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function LanguageToggle({ lang, onToggle }: { lang: 'en' | 'de'; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="site-language-toggle"
      aria-label="Switch language"
    >
      <span className={lang === 'en' ? 'is-selected' : ''}>EN</span>
      <span aria-hidden="true">/</span>
      <span className={lang === 'de' ? 'is-selected' : ''}>DE</span>
    </button>
  );
}
