'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import TiltCard from '@/components/TiltCard';
import { useLanguage } from '@/context/LanguageContext';
import { useT } from '@/lib/translations';
import { getBlurDataURL } from '@/lib/blurPlaceholders';

const coverImages: Record<string, string> = {
  'how-to-create-a-vibrant-community': '/blogs/vibrant-community.png',
  'fitness-app-no-code': '/blogs/fitness-app-no-code.png',
  'hybrid-sales-strategies': '/blogs/Blog2a.jpg',
  'winning-the-game': '/blogs/Picture1.jpg',
};

export default function DomiBlogsContent() {
  const { lang } = useLanguage();
  const t = useT(lang);
  const posts = t.blogs.posts;

  return (
    <main className="min-h-screen bg-charcoal">
      <Navbar />

      <div className="container mx-auto px-4 py-24 max-w-5xl">
        <h1 className="text-5xl md:text-6xl font-bold text-chalk mb-4 uppercase tracking-tight">
          DomiBlogs
        </h1>
        <div className="h-1 w-24 bg-rust mb-12"></div>

        <p className="text-xl text-steel mb-12 leading-relaxed max-w-3xl">
          {t.blogs.description}
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/domiblogs/${post.slug}`} className="block group">
              <TiltCard className="bg-concrete rounded-lg border-l-4 border-steel hover:border-rust transition-colors duration-300 overflow-hidden">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={coverImages[post.slug]}
                    alt={post.title}
                    fill
                    placeholder="blur"
                    blurDataURL={getBlurDataURL(coverImages[post.slug])}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-steel mb-4">
                    <time>{post.date}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{t.blogs.by} Dominik Steinacher</span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-chalk mb-4 group-hover:text-rust transition">
                    {post.title}
                  </h2>

                  <p className="text-steel text-lg leading-relaxed mb-4">{post.excerpt}</p>

                  <div className="flex items-center gap-2 text-rust font-semibold">
                    {t.blogs.readMore}
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </div>
                </div>
              </TiltCard>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
