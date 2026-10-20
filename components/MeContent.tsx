'use client';

import Image from 'next/image';
import AnimateIn from '@/components/AnimateIn';
import DraggableTimeline from '@/components/DraggableTimeline';
import GrainOverlay from '@/components/GrainOverlay';
import MagneticButton from '@/components/MagneticButton';
import MediaReel from '@/components/MediaReel';
import StatTile from '@/components/StatTile';
import { useLanguage } from '@/context/LanguageContext';
import { useT } from '@/lib/translations';
import { getBlurDataURL } from '@/lib/blurPlaceholders';
import { lifeReel } from '@/lib/reels';

const gallery = [
  { src: '/pole.JPG', altIndex: 0 },
  { src: '/images/me-crossfit.jpg', altIndex: 1 },
  { src: '/business1.jpeg', altIndex: 2 },
  { src: '/portrait-lake.jpeg', altIndex: 3 },
];

const trainingImages = [
  '/cross2.png',
  '/cross3.jpeg',
  '/cross4.jpg',
  '/cross5.jpeg',
];

export default function MeContent() {
  const { lang } = useLanguage();
  const t = useT(lang);

  return (
    <main className="me-page">
      <section className="me-intro home-section">
        <div className="home-container">
          <AnimateIn>
            <p className="me-kicker">{t.me.pageKicker}</p>
            <h1 className="me-title">
              {t.me.titleLead}{' '}
              <span className="home-highlight">{t.me.titleHighlight}</span>
            </h1>
            <p className="me-lead">{t.me.intro}</p>
          </AnimateIn>

          <div className="me-gallery">
            {gallery.map(({ src, altIndex }, index) => (
              <AnimateIn key={src} delay={index * 0.1} className="me-gallery-reveal">
                <figure className="me-gallery-frame">
                  <Image
                    src={src}
                    alt={t.me.galleryAlt[altIndex]}
                    fill
                    sizes="(max-width: 740px) 82vw, (max-width: 1050px) 42vw, 320px"
                    placeholder="blur"
                    blurDataURL={getBlurDataURL(src)}
                    className="me-gallery-image"
                  />
                </figure>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="me-chapter-section">
        <div className="home-container me-chapter">
          <AnimateIn className="me-chapter-heading">
            <p className="me-chapter-number">{t.me.chapters[0].number}</p>
            <h2 className="me-chapter-title">{t.me.chapters[0].title}</h2>
          </AnimateIn>

          <div className="me-athletic-grid">
            <AnimateIn className="me-athletic-story">
              <p className="me-story-year">{t.me.poleVaultYear}</p>
              <h3 className="me-story-title">{t.me.poleVaultTitle}</h3>
              <p className="me-story-copy">{t.me.poleVaultDesc}</p>
            </AnimateIn>
            <AnimateIn delay={0.1} className="me-athletic-story">
              <p className="me-story-year">{t.me.crossfitPeriod}</p>
              <h3 className="me-story-title">{t.me.crossfitTitle}</h3>
              <p className="me-story-copy">{t.me.crossfitDesc}</p>
            </AnimateIn>
          </div>

          <AnimateIn className="me-training-reel">
            <h3 className="me-subsection-title">{t.home.trainingTitle}</h3>
            <MediaReel
              items={trainingImages.map((src) => ({ type: 'image' as const, src, caption: 'GO PURE' }))}
              cardAspect="aspect-[4/5]"
            />
          </AnimateIn>
        </div>
      </section>

      <section className="me-chapter-section me-professional-section">
        <GrainOverlay />
        <div className="home-container me-chapter">
          <AnimateIn className="me-chapter-heading">
            <p className="me-chapter-number">{t.me.chapters[1].number}</p>
            <h2 className="me-chapter-title">{t.me.chapters[1].title}</h2>
          </AnimateIn>

          <AnimateIn className="me-prose">
            <h3 className="me-prose-heading">{t.me.adobeTitle}</h3>
            <p>{t.me.adobeP1}</p>
            <p>{t.me.adobeP2}</p>
          </AnimateIn>

          <AnimateIn className="me-community">
            <h3 className="me-prose-heading">{t.me.communityTitle}</h3>
            <p className="me-community-lead">{t.me.communityP1}</p>
            <div className="me-community-detail">
              <h4>{t.me.aiCommunityTitle}</h4>
              <p>{t.me.aiCommunityP1}</p>
              <p>{t.me.aiCommunityP2}</p>
            </div>
            <blockquote>{t.me.quote}</blockquote>
          </AnimateIn>
        </div>
      </section>

      <section className="me-career-section">
        <GrainOverlay />
        <div className="home-container">
          <AnimateIn>
            <p className="me-kicker">{t.me.careerTitle}</p>
            <h2 className="me-career-title">{t.me.timelineHeading}</h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <DraggableTimeline
              items={t.me.timeline.map((item, index) => ({ ...item, current: index === 0 }))}
              label={t.me.timelineHeading}
              hint={t.me.timelineHint}
            />
          </AnimateIn>
        </div>
      </section>

      <section className="me-stats-section home-section">
        <div className="home-container">
          <AnimateIn>
            <p className="me-kicker">{t.me.statsTitle}</p>
            <h2 className="me-section-title">{t.me.statsTitle}</h2>
          </AnimateIn>
          <div className="me-stats-grid">
            <StatTile
              variant="paper"
              value={new Date().getFullYear() - 2000}
              suffix="+"
              label={t.me.statYears}
            />
            <StatTile variant="paper" value={900} suffix="+" label={t.me.statCommunity} />
            <StatTile variant="paper" value={346} suffix="+" label={t.me.statTemplates} />
            <StatTile variant="paper" staticText="50 → 300" label={t.me.statGrowth} />
            <StatTile variant="paper" staticText="1996" label={t.me.statChampion} />
          </div>
        </div>
      </section>

      <section className="me-off-clock-section home-section">
        <div className="home-container">
          <AnimateIn>
            <p className="me-kicker">{t.me.lifeTitle}</p>
            <h2 className="me-section-title">{t.me.offClockTitle}</h2>
            <p className="me-lead me-life-copy">{t.me.lifeDesc}</p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <MediaReel
              items={lifeReel}
              className="me-life-reel"
              cardAspect="aspect-[3/4]"
            />
          </AnimateIn>
        </div>
      </section>

      <section className="me-contact-section">
        <GrainOverlay />
        <AnimateIn>
          <p className="me-kicker">{t.contact.connectLabel}</p>
          <MagneticButton href="/contact" className="home-button home-button-primary">
            {t.me.cta} →
          </MagneticButton>
        </AnimateIn>
      </section>
    </main>
  );
}
