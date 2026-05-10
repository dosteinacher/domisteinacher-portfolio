import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import AnimateIn from '@/components/AnimateIn';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPost, getAllPosts, formatDate } from '@/lib/blog';
import components from '@/components/mdx-components';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPost(slug);
    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        images: [
          {
            url: `/og?title=${encodeURIComponent(post.title)}&subtitle=${encodeURIComponent(post.readTime + ' · ' + post.author)}`,
          },
        ],
      },
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getPost(slug);
  } catch {
    notFound();
  }

  return (
    <main className="min-h-screen bg-charcoal">
      <Navbar />

      <article className="container mx-auto px-4 py-24 max-w-4xl">

        {/* Header */}
        <AnimateIn>
          <Link href="/domiblogs" className="text-rust hover:text-orange font-semibold mb-8 inline-flex items-center gap-2 transition-colors duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to DomiBlogs
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-chalk mb-6 leading-tight mt-4">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-steel mb-8">
            <time>{formatDate(post.date)}</time>
            <span>·</span>
            <span>by {post.author}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <div className="relative h-96 w-full rounded-lg overflow-hidden mb-12">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </AnimateIn>

        {/* MDX Content */}
        <AnimateIn delay={0.15}>
          <div className="prose-none">
            <MDXRemote source={post.content} components={components} />
          </div>
        </AnimateIn>

        {/* Back button */}
        <AnimateIn delay={0.2}>
          <div className="mt-16 pt-8 border-t border-white/[0.06]">
            <Link
              href="/domiblogs"
              className="inline-block bg-rust hover:bg-rust/90 text-chalk px-8 py-3 rounded-lg font-bold transition-all duration-200 hover:shadow-glow-rust"
            >
              ← Back to All Posts
            </Link>
          </div>
        </AnimateIn>

      </article>
    </main>
  );
}
