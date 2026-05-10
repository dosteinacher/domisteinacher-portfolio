'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 pt-24 relative overflow-hidden">

      {/* Atmospheric blobs */}
      <div className="absolute top-0 left-0 w-[900px] h-[900px] bg-rust/[0.06] rounded-full blur-[140px] pointer-events-none -translate-x-1/2 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-blue/[0.03] rounded-full blur-[120px] pointer-events-none translate-x-1/3 translate-y-1/3" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* Text */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="text-5xl md:text-7xl font-bold text-chalk mb-4 tracking-tight leading-none"
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
            Pole Vault Champion · Coach · Digital Solutions Expert
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease }}
            className="text-lg text-chalk/75 mb-8 leading-relaxed"
          >
            I love Crossfit and push the limits. Coaching at GO PURE is amazing. At Adobe,
            I lead strategic transformation and growth. My athletic background helps—I was
            Swiss Pole Vault Champion in 1996.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease }}
            className="flex gap-4 flex-wrap"
          >
            <a
              href="mailto:dominik@steinacher-bachmann.ch"
              className="bg-rust hover:bg-rust/90 text-chalk px-8 py-3 rounded font-bold uppercase tracking-wide transition-all duration-200 hover:shadow-glow-rust"
            >
              Get in Touch
            </a>
            <a
              href="https://go-pure.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue/30 hover:border-blue text-chalk hover:text-blue px-8 py-3 rounded font-bold uppercase tracking-wide transition-all duration-300 hover:bg-blue/5"
            >
              Visit GO PURE
            </a>
          </motion.div>
        </div>

        {/* Images */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center relative">
          <div className="absolute inset-0 bg-rust/[0.04] blur-3xl rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="relative w-80 h-80 md:w-96 md:h-96 z-10"
          >
            <Image
              src="/hero-photo.jpg"
              alt="Dominik Steinacher"
              fill
              className="object-cover rounded-lg border border-rust/30 shadow-glow-rust"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="relative w-72 h-72 md:w-80 md:h-80 z-10"
          >
            <Image
              src="/hero-photo-3.jpg"
              alt="Dominik Steinacher"
              fill
              className="object-cover rounded-lg border border-white/[0.08] shadow-card"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
