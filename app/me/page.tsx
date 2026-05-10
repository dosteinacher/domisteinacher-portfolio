import type { Metadata } from 'next';
import MeContent from '@/components/MeContent';

export const metadata: Metadata = {
  title: 'Me',
  description: 'Career timeline, athletic journey, and the story behind Dominik Steinacher.',
  openGraph: { images: [{ url: '/og?title=About+Me&subtitle=Career+%C2%B7+Athletics+%C2%B7+Community' }] },
};

export default function MePage() {
  return <MeContent />;
}
