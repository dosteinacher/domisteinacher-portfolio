'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useT } from '@/lib/translations';
import GrainOverlay from '@/components/GrainOverlay';
import TransitionLink from '@/components/TransitionLink';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dominik-steinacher/' },
  { label: 'GitHub', href: 'https://github.com/dosteinacher' },
  { label: 'Instagram', href: 'https://www.instagram.com/domigalfius/' },
  { label: 'Facebook', href: 'https://www.facebook.com/dsteinacher' },
];

export default function Footer() {
  const { lang } = useLanguage();
  const t = useT(lang);

  return (
    <footer className="site-footer">
      <GrainOverlay />
      <div className="site-footer-inner">
        <TransitionLink href="/contact" className="site-footer-cta">
          {t.footer.cta}
        </TransitionLink>
        <div className="site-footer-bottom">
          <p>© {new Date().getFullYear()} Dominik Steinacher. {t.footer.rights}</p>
          <nav aria-label="Social links" className="site-footer-socials">
            {socialLinks.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                {label}<span aria-hidden="true"> ↗</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
