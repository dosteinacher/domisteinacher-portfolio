'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { getBlurDataURL } from '@/lib/blurPlaceholders';
import { useDragScroll } from '@/lib/useDragScroll';

export type MediaReelItem =
  | { type: 'video'; src: string; poster: string; caption?: string }
  | { type: 'image'; src: string; caption?: string };

type Props = {
  items: MediaReelItem[];
  className?: string;
  /** Tailwind aspect-ratio class for each card. Defaults to a tall 9:16
   * frame suited to vertical video; pass a shorter ratio (e.g. aspect-[3/4])
   * for reels mixing in landscape photos. */
  cardAspect?: string;
};

/** Horizontally-scrolling, scroll-snapping strip of vertical video/photo
 * cards. Videos only play while their card is actually in view (perf), and
 * the whole strip supports desktop mouse-drag since it lives inside a
 * Lenis-driven vertical-scroll page. */
export default function MediaReel({ items, className = '', cardAspect = 'aspect-[9/16]' }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  useDragScroll(trackRef);

  return (
    <div
      ref={trackRef}
      className={`flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing select-none ${className}`}
    >
      {items.map((item, i) => (
        <ReelCard key={i} item={item} cardAspect={cardAspect} />
      ))}
    </div>
  );
}

function ReelCard({ item, cardAspect }: { item: MediaReelItem; cardAspect: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (item.type !== 'video') return;
    const video = videoRef.current;
    const wrapper = wrapperRef.current;
    if (!video || !wrapper) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.5 }
    );
    observer.observe(wrapper);
    return () => observer.disconnect();
  }, [item]);

  return (
    <div
      ref={wrapperRef}
      className={`relative flex-shrink-0 w-[220px] md:w-[260px] ${cardAspect} rounded-xl overflow-hidden border border-white/[0.08] shadow-card snap-center bg-concrete`}
    >
      {item.type === 'video' ? (
        <video
          ref={videoRef}
          src={item.src}
          poster={item.poster}
          muted
          loop
          playsInline
          preload="none"
          className="w-full h-full object-cover pointer-events-none"
        />
      ) : (
        <Image
          src={item.src}
          alt={item.caption ?? ''}
          fill
          placeholder="blur"
          blurDataURL={getBlurDataURL(item.src)}
          className="object-cover pointer-events-none"
        />
      )}
      {item.caption && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/90 to-transparent p-4 pt-10">
          <p className="text-chalk font-bold uppercase text-sm tracking-wide">{item.caption}</p>
        </div>
      )}
    </div>
  );
}
