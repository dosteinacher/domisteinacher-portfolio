'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AnimateIn from '@/components/AnimateIn';
import MediaReel, { MediaReelItem } from '@/components/MediaReel';
import MagneticButton from '@/components/MagneticButton';
import TiltCard from '@/components/TiltCard';
import { useLanguage } from '@/context/LanguageContext';
import { useT } from '@/lib/translations';
import { getBlurDataURL } from '@/lib/blurPlaceholders';

const trainingReel: MediaReelItem[] = [
  { type: 'video', src: '/videos/reel-pullup.mp4', poster: '/videos/posters/reel-pullup.jpg', caption: 'Pull-Ups' },
  { type: 'video', src: '/videos/reel-overhead-press.mp4', poster: '/videos/posters/reel-overhead-press.jpg', caption: 'Overhead Press' },
  { type: 'video', src: '/videos/reel-handstand-pushup.mp4', poster: '/videos/posters/reel-handstand-pushup.jpg', caption: 'Handstand Push-Up' },
  { type: 'video', src: '/videos/reel-barbell-jerk.mp4', poster: '/videos/posters/reel-barbell-jerk.jpg', caption: 'Barbell Jerk' },
];

const socialLinks = [
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

export default function HomeContent() {
  const { lang } = useLanguage();
  const t = useT(lang);

  return (
    <main className="min-h-screen bg-charcoal">
      <Navbar />
      <HeroSection />

      {/* Training in Motion */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/pullup-mood.jpeg"
            alt=""
            fill
            placeholder="blur"
            blurDataURL={getBlurDataURL('/pullup-mood.jpeg')}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/85 to-charcoal" />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <AnimateIn>
            <h2 className="text-4xl md:text-5xl font-bold text-chalk mb-3 uppercase tracking-tight">
              {t.home.trainingTitle}
            </h2>
            <p className="text-steel text-lg mb-10">{t.home.trainingDesc}</p>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.1} className="relative z-10">
          <div className="max-w-6xl mx-auto px-4">
            <MediaReel items={trainingReel} />
          </div>
        </AnimateIn>
      </section>

      {/* About */}
      <section className="py-20 px-4 bg-concrete border-y border-white/[0.04] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[8%] pointer-events-none select-none">
          <img src="/pattern-tribal.png" alt="" className="w-[500px] h-[500px] object-contain" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <AnimateIn>
            <h2 className="text-4xl md:text-5xl font-bold text-chalk mb-12 uppercase tracking-tight">
              {t.home.aboutTitle}
            </h2>
          </AnimateIn>

          <div className="grid md:grid-cols-12 gap-8 md:gap-6 mb-16 items-center">
            <AnimateIn delay={0.1} className="md:col-span-5">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-rust/30 shadow-glow-rust -rotate-1">
                <Image
                  src="/pole.JPG"
                  alt="Pole Vault"
                  fill
                  placeholder="blur"
                  blurDataURL={getBlurDataURL('/pole.JPG')}
                  className="object-cover"
                />
              </div>
            </AnimateIn>
            <AnimateIn delay={0.15} className="md:col-span-7">
              <h3 className="text-2xl font-bold text-rust mb-4">{t.home.athleticTitle}</h3>
              <p className="text-chalk/75 text-lg leading-relaxed mb-6">{t.home.athleticP1}</p>
              <p className="text-chalk/75 text-lg leading-relaxed">{t.home.athleticP2}</p>
            </AnimateIn>
          </div>

          <div className="grid md:grid-cols-12 gap-8 md:gap-6 items-center">
            <AnimateIn delay={0.1} className="md:col-span-7 md:order-1 order-2">
              <h3 className="text-2xl font-bold text-blue mb-4">{t.home.professionalTitle}</h3>
              <p className="text-chalk/75 text-lg leading-relaxed mb-6">{t.home.professionalP1}</p>
              <p className="text-chalk/75 text-lg leading-relaxed">{t.home.professionalP2}</p>
            </AnimateIn>
            <AnimateIn delay={0.15} className="md:col-span-5 md:order-2 order-1">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-blue/30 shadow-glow-blue rotate-1">
                <Image
                  src="/portrait-lake.jpeg"
                  alt="Dominik Steinacher"
                  fill
                  placeholder="blur"
                  blurDataURL={getBlurDataURL('/portrait-lake.jpeg')}
                  className="object-cover"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-[4%] grayscale pointer-events-none select-none">
          <img src="/go-pure-logo.png" alt="" className="w-[600px] h-[600px] object-contain" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <AnimateIn>
            <h2 className="text-4xl md:text-5xl font-bold text-chalk mb-12 uppercase tracking-tight">
              {t.home.projectsTitle}
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <TiltCard className="bg-concrete border-l-4 border-rust rounded-lg mb-8 hover:shadow-glow-rust hover:border-orange transition-colors duration-300 group overflow-hidden">
              <div className="grid md:grid-cols-12">
                <div className="relative h-56 md:h-auto md:col-span-5">
                  <Image
                    src="/gopure-gym-wide.jpg"
                    alt="GO PURE gym"
                    fill
                    placeholder="blur"
                    blurDataURL={getBlurDataURL('/gopure-gym-wide.jpg')}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 md:col-span-7">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <h3 className="text-3xl font-bold text-chalk group-hover:text-rust transition-colors duration-200">
                      GO PURE
                    </h3>
                    <span className="text-orange font-bold uppercase text-sm tracking-widest">
                      {t.home.featuredLabel}
                    </span>
                  </div>
                  <p className="text-chalk/70 text-lg leading-relaxed mb-6">{t.home.gopureDesc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Next.js', 'TypeScript', 'Postgres', 'Vercel'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-charcoal text-blue/70 text-sm rounded border border-blue/[0.15]">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <MagneticButton
                    href="https://go-pure.ch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-rust hover:bg-rust/90 text-chalk px-6 py-2 rounded font-bold uppercase tracking-wide transition-colors duration-200 hover:shadow-glow-rust"
                  >
                    {t.home.visitSite}
                  </MagneticButton>
                </div>
              </div>
            </TiltCard>
          </AnimateIn>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4 bg-concrete border-y border-white/[0.04]">
        <div className="max-w-6xl mx-auto text-center">
          <AnimateIn>
            <h2 className="text-4xl md:text-5xl font-bold text-chalk mb-12 uppercase tracking-tight">
              {t.home.contactTitle}
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {socialLinks.map(({ href, label, path }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-charcoal hover:bg-rust text-chalk px-6 py-3 rounded font-semibold transition-all duration-200 border border-white/[0.06] hover:border-rust hover:shadow-glow-rust"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={path} />
                  </svg>
                  {label}
                </a>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <MagneticButton
              href="mailto:dominik@steinacher-bachmann.ch"
              className="inline-block text-2xl md:text-3xl font-bold text-rust hover:text-orange transition-colors duration-200"
            >
              dominik@steinacher-bachmann.ch
            </MagneticButton>
            <p className="text-steel mt-4">Arlesheim, Switzerland</p>
          </AnimateIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto text-center text-steel/50">
          <p>&copy; {new Date().getFullYear()} Dominik Steinacher. {t.home.footer}</p>
        </div>
      </footer>
    </main>
  );
}
