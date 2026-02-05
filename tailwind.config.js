/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/react-app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rich-black': '#1A1A1A',
        'slate-grey': '#334155',
        'muted-gold': '#C5A059',
        'metallic-gold': '#D4AF37',
        'soft-off-white': '#F8FAFC',
        'border-light': '#E2E8F0',
        'dark-gold': '#B8860B',
        'darker-muted-gold': '#B08D55',
      },
    },
  },
  plugins: [],
};
