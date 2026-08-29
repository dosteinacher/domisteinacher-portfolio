import Image from 'next/image';
import { ReactNode } from 'react';
import { getBlurDataURL } from '@/lib/blurPlaceholders';

type ChildrenProps = { children: ReactNode };

const components = {
  h2: ({ children }: ChildrenProps) => (
    <h2 className="text-3xl font-bold text-rust mt-10 mb-4 uppercase tracking-tight">{children}</h2>
  ),
  h3: ({ children }: ChildrenProps) => (
    <h3 className="text-2xl font-bold text-chalk mt-8 mb-3">{children}</h3>
  ),
  p: ({ children }: ChildrenProps) => (
    <p className="text-steel text-lg leading-relaxed mb-5">{children}</p>
  ),
  ul: ({ children }: ChildrenProps) => (
    <ul className="space-y-4 mb-6">{children}</ul>
  ),
  li: ({ children }: ChildrenProps) => (
    <li className="pl-6 border-l-2 border-rust text-steel text-lg leading-relaxed">{children}</li>
  ),
  strong: ({ children }: ChildrenProps) => (
    <strong className="text-chalk font-semibold">{children}</strong>
  ),
  blockquote: ({ children }: ChildrenProps) => (
    <blockquote className="bg-rust/10 border-l-4 border-rust p-6 rounded-lg my-8 text-chalk text-lg italic">
      {children}
    </blockquote>
  ),
  hr: () => <div className="divider-fire my-10" />,
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <div className="relative h-80 w-full rounded-lg overflow-hidden my-8">
      <Image
        src={src ?? ''}
        alt={alt ?? ''}
        fill
        placeholder="blur"
        blurDataURL={getBlurDataURL(src ?? '')}
        className="object-cover"
      />
    </div>
  ),
};

export default components;
