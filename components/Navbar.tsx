'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Me', href: '/me' },
    { name: 'GO-PURE', href: 'https://go-pure.ch', external: true },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-sm border-b border-steel/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <Link href="/" className="text-xl font-bold text-chalk hover:text-rust transition">
            DS
          </Link>

          {/* Nav Links */}
          <div className="flex gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              
              if (item.external) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-chalk hover:text-rust transition font-semibold uppercase text-sm tracking-wide"
                  >
                    {item.name}
                  </a>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition font-semibold uppercase text-sm tracking-wide ${
                    isActive
                      ? 'text-rust border-b-2 border-rust'
                      : 'text-chalk hover:text-rust'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
