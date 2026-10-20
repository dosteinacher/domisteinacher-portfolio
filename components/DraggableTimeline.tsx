'use client';

import { motion, useReducedMotion, useScroll } from 'framer-motion';
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
  label: string;
  hint: string;
};

export default function DraggableTimeline({ items, label, hint }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  useDragScroll(trackRef);
  const { scrollXProgress } = useScroll({ container: trackRef });

  return (
    <div className="career-timeline">
      <div className="career-timeline-progress" aria-hidden="true">
        <motion.div
          className="career-timeline-progress-value"
          style={{ scaleX: reducedMotion ? 0 : scrollXProgress }}
        />
      </div>
      <div
        ref={trackRef}
        className="career-timeline-track scrollbar-hide"
        aria-label={label}
      >
        {items.map((item) => (
          <article
            key={`${item.year}-${item.company}`}
            className={`career-timeline-entry${item.current ? ' is-current' : ''}`}
          >
            <p className="career-timeline-year">{item.year}</p>
            <h3 className="career-timeline-company">{item.company}</h3>
            <p className="career-timeline-role">{item.role}</p>
          </article>
        ))}
      </div>
      <p className="career-timeline-hint">{hint}</p>
    </div>
  );
}
