'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimateIn from '@/components/AnimateIn';
import HeroSection from '@/components/HeroSection';
import MediaReel from '@/components/MediaReel';
import StatTile from '@/components/StatTile';
import TiltCard from '@/components/TiltCard';
import { useLanguage } from '@/context/LanguageContext';
import { useT } from '@/lib/translations';
import { lifeReel, trainingReel } from '@/lib/reels';

const coverImages: Record<string, string> = {
  'how-to-create-a-vibrant-community': '/blogs/vibrant-community.png',
  'fitness-app-no-code': '/blogs/fitness-app-no-code.png',
  'hybrid-sales-strategies': '/blogs/Blog2a.jpg',
  'winning-the-game': '/blogs/Picture1.jpg',
};

export default function HomeContent() {
  const { lang } = useLanguage();
  const t = useT(lang);
  const features = [
    {
      number: '01',
      title: t.home.coachTitle,
      description: t.home.coachDescription,
      href: 'https://go-pure.ch',
      external: true,
      image: '/gopure-gym-wide.jpg',
    },
    {
      number: '02',
      title: t.home.buildTitle,
      description: t.home.buildDescription,
      href: '/domiblogs',
    },
    {
      number: '03',
      title: t.home.growTitle,
      description: t.home.growDescription,
      href: '/me',
    },
  ];
  const latestPosts = t.blogs.posts.slice(0, 2);
  const reelItems = [...trainingReel, ...lifeReel];

  return (
    <main className="home-page">
      <HeroSection />

      <div className="home-marquee" aria-label={t.home.marqueeItems.join(' · ')}>
        <div className="home-marquee-track">
          {[0, 1].map((copy) => (
            <div className="home-marquee-group" key={copy} aria-hidden={copy === 1}>
              {t.home.marqueeItems.map((item, index) => (
                <span className="home-marquee-group-item" key={`${copy}-${item}`}>
                  <span className="home-marquee-item">{item}</span>
                  {index < t.home.marqueeItems.length - 1 && (
                    <span className="home-marquee-dot" aria-hidden="true" />
                  )}
                </span>
              ))}
              <span className="home-marquee-dot" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>

      <section className="home-section">
        <div className="home-container">
          <AnimateIn>
            <h2 className="home-section-title">{t.home.thingsTitle}</h2>
          </AnimateIn>
          <div className="home-feature-grid">
            {features.map((feature) => {
              const content = (
                <>
                  {feature.image && (
                    <>
                      <Image
                        src={feature.image}
                        alt=""
                        fill
                        sizes="(max-width: 740px) 88vw, (max-width: 1200px) 45vw, 420px"
                        className="home-feature-photo"
                      />
                      <span className="home-coach-overlay" aria-hidden="true" />
                    </>
                  )}
                  <div className="home-feature-content">
                    <p className="home-feature-number">{feature.number} / 03</p>
                    <h3 className="home-feature-title">{feature.title}</h3>
                    <p className="home-feature-description">{feature.description}</p>
                  </div>
                  <span className="home-feature-arrow" aria-hidden="true">↗</span>
                </>
              );

              return (
                <AnimateIn key={feature.number} delay={Number(feature.number) * 0.08}>
                  <TiltCard className="home-feature-wrap">
                    {feature.external ? (
                      <a
                        href={feature.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="home-feature"
                      >
                        {content}
                      </a>
                    ) : (
                      <Link href={feature.href} className="home-feature">
                        {content}
                      </Link>
                    )}
                  </TiltCard>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="home-section home-media-section">
        <div className="home-container">
          <AnimateIn>
            <h2 className="home-section-title">{t.home.mediaTitle}</h2>
            <p className="home-section-intro">{t.home.mediaDescription}</p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <MediaReel
              items={reelItems}
              className="home-reel"
              cardAspect="aspect-[4/5]"
            />
          </AnimateIn>
        </div>
      </section>

      <section className="home-section home-stat-band">
        <div className="home-container home-stat-grid">
          <StatTile variant="blue" value={26} suffix="+" label={t.home.statYears} />
          <StatTile variant="blue" value={900} suffix="+" label={t.home.statCommunity} />
          <StatTile variant="blue" value={346} suffix="+" label={t.home.statTemplates} />
          <StatTile
            variant="blue"
            value={1996}
            startValue={1900}
            label={t.home.statChampion}
          />
        </div>
      </section>

      <section className="home-section">
        <div className="home-container">
          <AnimateIn>
            <h2 className="home-section-title">{t.home.latestTitle}</h2>
          </AnimateIn>
          <div className="home-writing-grid">
            {latestPosts.map((post, index) => (
              <AnimateIn key={post.slug} delay={index * 0.1}>
                <TiltCard className="home-writing-wrap">
                  <Link
                    href={`/domiblogs/${post.slug}`}
                    className="home-writing-card"
                  >
                    <div className="home-writing-image">
                      <Image
                        src={coverImages[post.slug]}
                        alt=""
                        fill
                        sizes="(max-width: 740px) 88vw, (max-width: 1100px) 44vw, 620px"
                      />
                    </div>
                    <div className="home-writing-body">
                      <div className="home-writing-topline">
                        <span className="home-writing-tag">{t.home.latestLabel}</span>
                        <span className="home-meta">
                          <time>{post.date}</time> · {post.readTime}
                        </span>
                      </div>
                      <h3 className="home-writing-title">{post.title}</h3>
                      <p className="home-writing-excerpt">{post.excerpt}</p>
                    </div>
                  </Link>
                </TiltCard>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn>
            <Link href="/domiblogs" className="home-all-posts">
              {t.home.allPosts}
            </Link>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
