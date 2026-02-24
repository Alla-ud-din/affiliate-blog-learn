/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ─── CUSTOMIZE BRANDING ──────────────────────────────────────────
      // Change these colors to match your brand
      colors: {
        brand: {
          50:  '#fdf8f0',
          100: '#f9edda',
          200: '#f0d4a8',
          300: '#e6b870',
          400: '#da9540',
          500: '#c77d28',  // ← Primary brand color
          600: '#a8621e',
          700: '#854c1a',
          800: '#633b18',
          900: '#442917',
        },
        neutral: {
          50:  '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
      },
      // ─── CUSTOMIZE FONTS ─────────────────────────────────────────────
      // Change these font families after adding them to _document.js
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      // ─── END CUSTOMIZATION ───────────────────────────────────────────
    },
  },
  plugins: [],
}
