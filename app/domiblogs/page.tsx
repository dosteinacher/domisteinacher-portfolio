import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import AnimateIn from '@/components/AnimateIn';
import { getAllPosts, formatDate } from '@/lib/blog';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DomiBlogs',
  description:
    'Insights on leadership, transformation, community building, and the intersection of athletics and business.',
  openGraph: {
    images: [{ url: '/og?title=DomiBlogs&subtitle=Leadership+%C2%B7+Transformation+%C2%B7+Athletics' }],
  },
};

export default function DomiBlogsPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-charcoal">
      <Navbar />

      <div className="container mx-auto px-4 py-24 max-w-5xl">
        <AnimateIn>
          <h1 className="text-5xl md:text-6xl font-bold text-chalk mb-4 uppercase tracking-tight">
            DomiBlogs
          </h1>
          <div className="divider-fire mb-12" />
          <p className="text-xl text-steel mb-12 leading-relaxed max-w-3xl">
            Insights on leadership, transformation, community building, and the intersection
            of athletics and business.
          </p>
        </AnimateIn>

        <div className="space-y-8">
          {posts.map((post, i) => (
            <AnimateIn key={post.slug} delay={i * 0.12}>
              <Link href={`/domiblogs/${post.slug}`} className="block group">
                <article className="bg-concrete rounded-lg border-l-4 border-steel/30 hover:border-rust hover:shadow-glow-rust transition-all duration-300 overflow-hidden">
                  {post.coverImage && (
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-steel mb-4">
                      <time>{formatDate(post.date)}</time>
                      <span>·</span>
                      <span>{post.readTime}</span>
                      <span>·</span>
                      <span>{post.author}</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-chalk mb-4 group-hover:text-rust transition-colors duration-200">
                      {post.title}
                    </h2>

                    <p className="text-steel text-lg leading-relaxed mb-4">{post.excerpt}</p>

                    <div className="flex items-center gap-2 text-rust group-hover:text-orange font-semibold transition-colors duration-200">
                      Read More
                      <svg
                        className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </main>
  );
}
