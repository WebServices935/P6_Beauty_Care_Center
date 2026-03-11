/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'rose-pink': '#FFC0CB',
        'soft-pink': '#FFB6C1',
        'deep-pink': '#E91E63',
        'magenta': '#C2185B',
        'gold': '#D4AF37',
        'light-gold': '#F4E4C1',
        'peach': '#FFE5D9',
        'beige': '#F5F5DC',
      },
      fontFamily: {
        'elegant': ['Georgia', 'serif'],
        'script': ['Brush Script MT', 'cursive'],
      },
    },
  },
  plugins: [],
};
