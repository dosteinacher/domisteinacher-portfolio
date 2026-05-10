import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body:    ['var(--font-body)', 'sans-serif'],
        sans:    ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        // Core palette
        'charcoal': '#111111',   // Carbon Black — primary background
        'concrete': '#191919',   // Surface — sections, cards
        'chalk':    '#F2EFE9',   // Warm White — primary text
        // Brand accents
        'rust':     '#C1121F',   // Deep Crimson — energy, leadership, CTAs
        'orange':   '#FF6B35',   // Burnt Orange — secondary accent, hover highlights
        'blue':     '#3A86FF',   // Electric Blue — tech, AI, digital
        'gold':     '#C9A227',   // Soft Gold — reserved for rare, premium moments
        // Neutral
        'steel':    '#8A8A8A',   // Muted text, secondary info
      },
      boxShadow: {
        'glow-rust':   '0 0 40px rgba(193, 18, 31, 0.22), 0 8px 32px rgba(0,0,0,0.45)',
        'glow-orange': '0 0 40px rgba(255, 107, 53, 0.18), 0 8px 32px rgba(0,0,0,0.45)',
        'glow-blue':   '0 0 40px rgba(58, 134, 255, 0.18), 0 8px 32px rgba(0,0,0,0.45)',
        'card':        '0 8px 32px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
} satisfies Config;
