/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Light purple primary
        primary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        },
        // Light khaki/tan secondary
        secondary: {
          50: '#fdfcfb',
          100: '#f5f0e8',
          200: '#e8dcc8',
          300: '#d4c4a8',
          400: '#c4ad8a',
          500: '#b09872',
          600: '#9a7f5a',
          700: '#7d6548',
          800: '#65513a',
          900: '#4d3d2c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderColor: {
        DEFAULT: '#171717',
      },
    },
  },
  plugins: [],
};
