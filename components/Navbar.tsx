'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useT } from '@/lib/translations';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggle } = useLanguage();
  const t = useT(lang);

  const navItems = [
    { name: t.nav.home,    href: '/' },
    { name: t.nav.me,      href: '/me' },
    { name: t.nav.blogs,   href: '/domiblogs' },
    { name: t.nav.gopure,  href: 'https://go-pure.ch', external: true },
    { name: t.nav.contact, href: '/contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-charcoal/98 backdrop-blur-md border-b border-white/[0.08] shadow-card'
            : 'bg-charcoal/95 backdrop-blur-md border-b border-white/[0.06]'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-bold text-chalk hover:text-orange transition-colors duration-200 tracking-widest z-10"
            >
              DS
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                if (item.external) {
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-steel hover:text-chalk transition-colors duration-200 font-semibold uppercase text-sm tracking-wide"
                    >
                      {item.name}
                    </a>
                  );
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`transition-colors duration-200 font-semibold uppercase text-sm tracking-wide pb-0.5 ${
                      isActive
                        ? 'text-chalk border-b-2 border-orange'
                        : 'text-steel hover:text-chalk'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              {/* Language toggle */}
              <button
                onClick={toggle}
                className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest border border-white/20 rounded px-2.5 py-1 text-steel hover:text-chalk hover:border-white/40 transition-all duration-200"
                aria-label="Switch language"
              >
                <span className={lang === 'en' ? 'text-chalk' : 'text-steel/50'}>EN</span>
                <span className="text-white/20">|</span>
                <span className={lang === 'de' ? 'text-chalk' : 'text-steel/50'}>DE</span>
              </button>
            </div>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden relative z-10 w-8 h-8 flex flex-col justify-center gap-[6px] group"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              <motion.span
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="block h-0.5 w-full bg-chalk origin-center"
              />
              <motion.span
                animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="block h-0.5 w-full bg-chalk"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="block h-0.5 w-full bg-chalk origin-center"
              />
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-charcoal flex flex-col items-center justify-center gap-2"
          >
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-rust/[0.05] rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

            {navItems.map((item, i) => {
              const isActive = pathname === item.href;
              const Tag = item.external ? 'a' : Link;
              const extraProps = item.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {};

              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.05 + i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Tag
                    href={item.href}
                    {...extraProps}
                    className={`block text-4xl font-bold uppercase tracking-widest py-3 px-6 transition-colors duration-200 ${
                      isActive ? 'text-orange' : 'text-chalk hover:text-orange'
                    }`}
                  >
                    {item.name}
                  </Tag>
                </motion.div>
              );
            })}

            {/* Mobile language toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.05 + navItems.length * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                onClick={toggle}
                className="flex items-center gap-2 text-xl font-bold uppercase tracking-widest py-3 px-6 border border-white/20 rounded-lg text-steel hover:text-chalk hover:border-white/40 transition-all duration-200 mt-4"
              >
                <span className={lang === 'en' ? 'text-orange' : 'text-steel/50'}>EN</span>
                <span className="text-white/20">|</span>
                <span className={lang === 'de' ? 'text-orange' : 'text-steel/50'}>DE</span>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-10 text-steel text-sm tracking-widest uppercase"
            >
              domisteinacher.me
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
