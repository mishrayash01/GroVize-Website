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
        'coffee-dark': '#1A0F0A',
        'accent-teal': '#4F9C8F',
        'cream': '#F5E6D3',
        'muted-brown': '#C9B8A0',
        'coffee-card': '#2D1810',
        'coffee-border': '#5A4034',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
