'use client';

import { useEffect, RefObject } from 'react';

/** Enables click-and-drag horizontal scrolling on a ref'd scrollable element
 * (desktop mouse users) while leaving native touch/trackpad scrolling and
 * CSS scroll-snap intact. Shared by MediaReel and DraggableTimeline. */
export function useDragScroll(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let scrollStart = 0;

    const onPointerDown = (e: PointerEvent) => {
      isDown = true;
      el.setPointerCapture(e.pointerId);
      startX = e.clientX;
      scrollStart = el.scrollLeft;
      el.style.scrollSnapType = 'none';
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!isDown) return;
      el.scrollLeft = scrollStart - (e.clientX - startX);
    };
    const endDrag = () => {
      isDown = false;
      el.style.scrollSnapType = '';
    };

    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerup', endDrag);
    el.addEventListener('pointerleave', endDrag);
    return () => {
      el.removeEventListener('pointerdown', onPointerDown);
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerup', endDrag);
      el.removeEventListener('pointerleave', endDrag);
    };
  }, [ref]);
}
