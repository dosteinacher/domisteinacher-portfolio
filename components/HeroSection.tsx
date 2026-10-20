'use client';

import Image from 'next/image';
import AnimateIn from '@/components/AnimateIn';
import MagneticButton from '@/components/MagneticButton';
import { useLanguage } from '@/context/LanguageContext';
import { useT } from '@/lib/translations';
import { getBlurDataURL } from '@/lib/blurPlaceholders';

export default function HeroSection() {
  const { lang } = useLanguage();
  const t = useT(lang);

  return (
    <section className="home-section home-hero">
      <div className="home-container home-hero-grid">
        <AnimateIn className="home-hero-copy">
          <p className="home-kicker">
            <span className="home-kicker-dot" aria-hidden="true" />
            {t.home.heroKicker}
          </p>
          <h1 className="home-title">
            <span className="home-title-name">DOMINIK</span>
            <span className="home-highlight">STEINACHER</span>
          </h1>
          <p className="home-hero-lead">{t.home.heroLead}</p>
          <div className="home-hero-actions">
            <MagneticButton href="/domiblogs" className="home-button home-button-primary">
              {t.home.heroBlogs}
            </MagneticButton>
            <MagneticButton href="/me" className="home-button home-button-secondary">
              {t.home.heroMe}
            </MagneticButton>
          </div>
        </AnimateIn>

        <AnimateIn className="home-portrait-stage" delay={0.12}>
          <div className="home-portrait-block" aria-hidden="true" />
          <div className="home-portrait-frame">
            <Image
              src="/hero-photo-3.jpg"
              alt="Dominik Steinacher in Arlesheim"
              fill
              priority
              sizes="(max-width: 740px) 88vw, (max-width: 1200px) 42vw, 480px"
              placeholder="blur"
              blurDataURL={getBlurDataURL('/hero-photo-3.jpg')}
              className="home-portrait"
            />
          </div>
          <div className="home-champion-badge" aria-label="1996 Swiss champion in pole vault">
            <span className="home-champion-year">1996</span>
            <span className="home-champion-label">Swiss champ<br />pole vault</span>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
