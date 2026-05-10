import type { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
  title: 'Dominik Steinacher',
  description:
    'Swiss Pole Vault Champion. CrossFit Coach at GO PURE. Senior Manager Transformational Growth & Strategy at Adobe.',
  openGraph: {
    title: 'Dominik Steinacher',
    description:
      'Swiss Pole Vault Champion. CrossFit Coach at GO PURE. Senior Manager Transformational Growth & Strategy at Adobe.',
    images: [{ url: '/og?title=Dominik+Steinacher' }],
  },
};

export default function Home() {
  return <HomeContent />;
}
