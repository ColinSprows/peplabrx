/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Meto-style teal/green palette
        primary: {
          50: '#effefb',
          100: '#c7fff4',
          200: '#90ffea',
          300: '#51f7dd',
          400: '#1ee4ca',
          500: '#05c8b0',
          600: '#00a190',
          700: '#058076',
          800: '#0a655f',
          900: '#0d534e',
        },
        // Cream/warm neutrals
        cream: {
          50: '#fdfbf7',
          100: '#faf6ed',
          200: '#f5eed9',
          300: '#ede0be',
          400: '#e3ce9e',
          500: '#d4b578',
        },
        // Keep accent for highlights
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
