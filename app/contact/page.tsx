import type { Metadata } from 'next';
import ContactContent from '@/components/ContactContent';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Dominik Steinacher — email, social links, and location.',
  openGraph: {
    images: [{ url: '/og?title=Get+In+Touch&subtitle=Arlesheim%2C+Switzerland' }],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
