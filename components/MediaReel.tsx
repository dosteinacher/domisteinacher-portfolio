'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
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
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (item.type !== 'video' || reducedMotion) return;
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
  }, [item, reducedMotion]);

  return (
    <div
      ref={wrapperRef}
      className={`media-reel-card relative flex-shrink-0 w-[min(72vw,260px)] ${cardAspect} snap-center`}
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
        <div         className="media-reel-caption absolute bottom-0 left-0 right-0 p-4">
          <p>{item.caption}</p>
        </div>
      )}
    </div>
  );
}
