/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'brand-dark': '#0a0a1a',
        'brand-neon': '#00f3ff',
        'brand-purple': '#bd00ff',
      },
    },
  },
  plugins: [],
}
