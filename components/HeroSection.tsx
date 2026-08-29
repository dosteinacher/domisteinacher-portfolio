'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion, useMotionValue } from 'framer-motion';
import { useRef, useState, useEffect, PointerEvent } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useT } from '@/lib/translations';
import MagneticButton from '@/components/MagneticButton';
import { getBlurDataURL } from '@/lib/blurPlaceholders';

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  const { lang } = useLanguage();
  const t = useT(lang);
  const reducedMotion = useReducedMotion();
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    // One-time browser-only feature check post-mount; SSR always starts
    // disabled to avoid a hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFinePointer(window.matchMedia('(pointer: fine)').matches);
  }, []);

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const yFront = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yBack = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const spotlightX = useMotionValue(50);
  const spotlightY = useMotionValue(50);
  const spotlightEnabled = finePointer && !reducedMotion;
  // Computed unconditionally — hooks can't be called inside the conditional
  // JSX below, even though the resulting div only renders when enabled.
  const spotlightBackground = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) => `radial-gradient(400px circle at ${x}% ${y}%, rgba(255,255,255,0.12), transparent 70%)`
  );

  const handlePointerMove = (e: PointerEvent<HTMLElement>) => {
    if (!spotlightEnabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    spotlightX.set(((e.clientX - rect.left) / rect.width) * 100);
    spotlightY.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="min-h-screen flex items-center justify-center px-4 py-20 pt-24 relative overflow-hidden"
    >
      {/* Cursor spotlight — fine-pointer + motion-safe only */}
      {spotlightEnabled && (
        <motion.div
          aria-hidden
          className="absolute inset-0 pointer-events-none mix-blend-soft-light"
          style={{ background: spotlightBackground }}
        />
      )}

      {/* Atmospheric blobs — slow aurora drift, motion-safe only */}
      <motion.div
        className="absolute top-0 left-0 w-[900px] h-[900px] bg-rust/[0.06] rounded-full blur-[140px] pointer-events-none -translate-x-1/2 -translate-y-1/3"
        animate={
          reducedMotion
            ? undefined
            : { x: [0, 60, -20, 0], y: [0, -40, 30, 0], scale: [1, 1.08, 0.96, 1] }
        }
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-blue/[0.03] rounded-full blur-[120px] pointer-events-none translate-x-1/3 translate-y-1/3"
        animate={
          reducedMotion
            ? undefined
            : { x: [0, -50, 30, 0], y: [0, 30, -30, 0], scale: [1, 0.94, 1.06, 1] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="font-bold text-chalk mb-4 tracking-tight leading-[0.95]"
            style={{ fontSize: 'clamp(2.75rem, 3rem + 4vw, 6rem)' }}
          >
            DOMINIK<br />
            <span className="text-gradient-fire">STEINACHER</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease }}
            style={{ originX: 0 }}
            className="divider-fire mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease }}
            className="text-xl md:text-2xl text-steel mb-6"
          >
            {t.hero.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease }}
            className="text-lg text-chalk/75 mb-8 leading-relaxed"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease }}
            className="flex gap-4 flex-wrap"
          >
            <MagneticButton
              href="mailto:dominik@steinacher-bachmann.ch"
              className="inline-block bg-rust hover:bg-rust/90 text-chalk px-8 py-3 rounded font-bold uppercase tracking-wide transition-colors duration-200 hover:shadow-glow-rust"
            >
              {t.hero.cta}
            </MagneticButton>
            <MagneticButton
              href="https://go-pure.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-blue/30 hover:border-blue text-chalk hover:text-blue px-8 py-3 rounded font-bold uppercase tracking-wide transition-colors duration-300 hover:bg-blue/5"
            >
              {t.hero.ctaSecondary}
            </MagneticButton>
          </motion.div>
        </div>

        {/* Images — asymmetric, overlapping composition with scroll parallax */}
        <div className="relative w-full h-[380px] sm:h-[440px] md:h-[500px]">
          <div className="absolute inset-0 bg-rust/[0.04] blur-3xl rounded-full pointer-events-none" />

          <motion.div
            style={{ y: yBack }}
            initial={{ opacity: 0, scale: 0.94, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="absolute right-0 top-0 w-[52%] aspect-[4/5] z-10"
          >
            <Image
              src="/hero-photo-3.jpg"
              alt="Dominik Steinacher"
              fill
              placeholder="blur"
              blurDataURL={getBlurDataURL('/hero-photo-3.jpg')}
              className="object-cover rounded-lg border border-white/[0.08] shadow-card"
            />
          </motion.div>

          <motion.div
            style={{ y: yFront }}
            initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="absolute left-0 bottom-0 w-[58%] aspect-[4/5] z-20"
          >
            <Image
              src="/squat-action-bw.jpg"
              alt="Dominik Steinacher training at GO PURE"
              fill
              placeholder="blur"
              blurDataURL={getBlurDataURL('/squat-action-bw.jpg')}
              className="object-cover rounded-lg border border-rust/30 shadow-glow-rust grayscale"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity: fadeOut }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-5 border-b-2 border-r-2 border-steel/60 rotate-45"
        />
      </motion.div>
    </section>
  );
}
