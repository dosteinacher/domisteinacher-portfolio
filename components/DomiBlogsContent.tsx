'use client';

import Link from 'next/link';
import AnimateIn from '@/components/AnimateIn';
import { useLanguage } from '@/context/LanguageContext';
import { useT } from '@/lib/translations';

export default function DomiBlogsContent() {
  const { lang } = useLanguage();
  const t = useT(lang);

  return (
    <main className="blogs-page">
      <section className="blogs-container blogs-index">
        <AnimateIn className="blogs-header">
          <p className="blogs-kicker">{t.nav.blogs}</p>
          <h1 className="blogs-title">
            DOMI<span>BLOGS</span>
          </h1>
          <p className="blogs-intro">{t.blogs.description}</p>
        </AnimateIn>

        <div className="blogs-list">
          {t.blogs.posts.map((post, index) => (
            <AnimateIn key={post.slug} delay={index * 0.06}>
              <article>
                <Link
                  href={`/domiblogs/${post.slug}`}
                  className="blogs-row"
                >
                  <div className="blogs-row-main">
                    <div className="blogs-row-meta">
                      <span className="blogs-tag">{t.home.latestLabel}</span>
                      <span className="blogs-meta">
                        <time>{post.date}</time> · {post.readTime}
                      </span>
                    </div>
                    <h2 className="blogs-row-title">{post.title}</h2>
                  </div>
                  <div className="blogs-row-aside">
                    <p className="blogs-row-excerpt">{post.excerpt}</p>
                    <span className="blogs-row-arrow" aria-hidden="true">↗</span>
                  </div>
                </Link>
              </article>
            </AnimateIn>
          ))}
        </div>
      </section>
    </main>
  );
}
