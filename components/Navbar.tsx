'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home',       href: '/' },
    { name: 'Me',         href: '/me' },
    { name: 'DomiBlogs',  href: '/domiblogs' },
    { name: 'GO-PURE',    href: 'https://go-pure.ch', external: true },
    { name: 'Contact',    href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/98 backdrop-blur-md border-b border-white/[0.06]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-chalk hover:text-orange transition-colors duration-200 tracking-widest"
          >
            DS
          </Link>

          {/* Nav links */}
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
                    className="text-steel hover:text-chalk transition-colors duration-200 font-semibold uppercase text-sm tracking-wide"
                  >
                    {item.name}
                  </a>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-200 font-semibold uppercase text-sm tracking-wide pb-0.5 ${
                    isActive
                      ? 'text-chalk border-b-2 border-orange'
                      : 'text-steel hover:text-chalk'
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
