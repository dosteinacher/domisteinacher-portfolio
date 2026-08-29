'use client';

import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { useDragScroll } from '@/lib/useDragScroll';

export type TimelineEntry = {
  year: string;
  company: string;
  role: string;
  current?: boolean;
};

type Props = {
  items: TimelineEntry[];
};

/** Horizontally draggable/scrubbable career timeline, reusing the same
 * pointer-drag mechanics as MediaReel. A progress line above the strip
 * tracks scroll position, mirroring the nav's scroll-progress bar. */
export default function DraggableTimeline({ items }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  useDragScroll(trackRef);
  const { scrollXProgress } = useScroll({ container: trackRef });

  return (
    <div>
      <div className="relative h-1 bg-steel/20 rounded-full mb-8 overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-rust to-orange rounded-full origin-left"
          style={{ scaleX: scrollXProgress }}
        />
      </div>

      <div
        ref={trackRef}
        className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing select-none"
      >
        {items.map((item, i) => (
          <div key={i} className="relative flex-shrink-0 w-56 snap-start">
            <div
              className={`w-4 h-4 rounded-full mb-4 ${
                item.current ? 'bg-rust ring-4 ring-rust/20' : 'bg-chalk'
              }`}
            />
            <span
              className={`inline-block px-3 py-1 rounded-full font-bold uppercase mb-2 ${
                item.current
                  ? 'text-sm bg-rust/30 text-rust border-2 border-rust'
                  : 'text-xs bg-steel/30 text-chalk'
              }`}
            >
              {item.company}
            </span>
            <p className={`font-mono mb-2 ${item.current ? 'text-sm text-chalk/80' : 'text-xs text-chalk/60'}`}>
              {item.year}
            </p>
            <p className={`leading-tight ${item.current ? 'text-base text-chalk font-bold' : 'text-sm text-chalk/90 font-medium'}`}>
              {item.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
