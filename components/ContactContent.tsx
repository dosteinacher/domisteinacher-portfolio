'use client';

import Navbar from '@/components/Navbar';
import AnimateIn from '@/components/AnimateIn';
import MagneticButton from '@/components/MagneticButton';
import { useLanguage } from '@/context/LanguageContext';
import { useT } from '@/lib/translations';

const socials = [
  {
    href: 'https://www.linkedin.com/in/dominik-steinacher/',
    label: 'LinkedIn',
    path: 'M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z',
  },
  {
    href: 'https://github.com/dosteinacher',
    label: 'GitHub',
    path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
  },
  {
    href: 'https://www.instagram.com/domigalfius/',
    label: 'Instagram',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    href: 'https://www.facebook.com/dsteinacher',
    label: 'Facebook',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
];

export default function ContactContent() {
  const { lang } = useLanguage();
  const t = useT(lang);

  return (
    <main className="min-h-screen bg-charcoal">
      <Navbar />

      <div className="container mx-auto px-4 py-24 max-w-4xl">

        <AnimateIn>
          <h1 className="text-5xl md:text-6xl font-bold text-chalk mb-8 uppercase tracking-tight">
            {t.contact.title}
          </h1>
          <div className="divider-fire mb-12" />
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-concrete p-8 rounded-lg border-l-4 border-rust">
              <h2 className="text-xl font-bold text-rust mb-4 uppercase">{t.contact.emailLabel}</h2>
              <MagneticButton
                href="mailto:dominik@steinacher-bachmann.ch"
                className="text-chalk text-lg hover:text-rust transition-colors duration-200 block mb-2"
              >
                dominik@steinacher-bachmann.ch
              </MagneticButton>
              <MagneticButton
                href="mailto:nigglus@gmail.com"
                className="text-chalk/70 hover:text-rust transition-colors duration-200 block"
              >
                nigglus@gmail.com
              </MagneticButton>
            </div>

            <div className="bg-concrete p-8 rounded-lg border-l-4 border-blue">
              <h2 className="text-xl font-bold text-blue mb-4 uppercase">{t.contact.addressLabel}</h2>
              <p className="text-chalk text-lg">
                Altenmattweg 13<br />
                4144 Arlesheim<br />
                Switzerland
              </p>
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div className="bg-concrete p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-chalk mb-6 uppercase">{t.contact.connectLabel}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {socials.map(({ href, label, path }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-charcoal hover:bg-rust text-chalk px-6 py-4 rounded font-semibold transition-all duration-200 border border-white/[0.06] hover:border-rust hover:shadow-glow-rust"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={path} />
                  </svg>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </AnimateIn>

      </div>
    </main>
  );
}
