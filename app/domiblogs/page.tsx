import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

// Blog posts data - we'll expand this as you add more
const blogPosts = [
  {
    slug: 'winning-the-game',
    title: 'Winning the Game: Lessons from Sport, CrossFit, and Pole Vaulting in PLG, Sales, and Culture Change',
    date: 'Feb 7, 2025',
    author: 'Dominik Steinacher',
    excerpt: 'Success, whether in sports, business, or personal growth, is built on resilience, adaptability, and execution.',
    readTime: '5 min read',
  },
];

export default function DomiBlogsPage() {
  return (
    <main className="min-h-screen bg-charcoal">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24 max-w-5xl">
        <h1 className="text-5xl md:text-6xl font-bold text-chalk mb-4 uppercase tracking-tight">
          DomiBlogs
        </h1>
        <div className="h-1 w-24 bg-rust mb-12"></div>
        
        <p className="text-xl text-steel mb-12 leading-relaxed max-w-3xl">
          Insights on leadership, transformation, community building, and the intersection 
          of athletics and business.
        </p>

        {/* Blog Posts Grid */}
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/domiblogs/${post.slug}`}
              className="block group"
            >
              <article className="bg-concrete p-8 rounded-lg border-l-4 border-steel hover:border-rust transition-all duration-300">
                <div className="flex items-center gap-4 text-sm text-steel mb-4">
                  <time>{post.date}</time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-chalk mb-4 group-hover:text-rust transition">
                  {post.title}
                </h2>
                
                <p className="text-steel text-lg leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-2 text-rust font-semibold">
                  Read More
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
