import Navbar from '@/components/Navbar';
import { notFound } from 'next/navigation';
import FitnessAppPost from '@/components/blog/FitnessAppPost';
import WinningTheGamePost from '@/components/blog/WinningTheGamePost';
import HybridSalesPost from '@/components/blog/HybridSalesPost';
import VibrantCommunityPost from '@/components/blog/VibrantCommunityPost';

const slugs = ['fitness-app-no-code', 'winning-the-game', 'hybrid-sales-strategies', 'how-to-create-a-vibrant-community'];

export async function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!slugs.includes(slug)) notFound();

  return (
    <main className="min-h-screen bg-charcoal">
      <Navbar />
      {slug === 'fitness-app-no-code' && <FitnessAppPost />}
      {slug === 'winning-the-game' && <WinningTheGamePost />}
      {slug === 'hybrid-sales-strategies' && <HybridSalesPost />}
      {slug === 'how-to-create-a-vibrant-community' && <VibrantCommunityPost />}
    </main>
  );
}
