import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'charcoal': '#111111',
        'concrete': '#2E2E2E',
        'chalk': '#F5F5F5',
        'rust': '#B11226',
        'steel': '#8A8A8A',
      },
    },
  },
  plugins: [],
} satisfies Config;
