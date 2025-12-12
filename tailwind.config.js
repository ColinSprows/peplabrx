/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Light purple primary - #e1b2f9 for backgrounds, #8f67a3 for text
        primary: {
          50: '#faf5ff',
          100: '#f5e6fc',
          200: '#ecd0f9',
          300: '#e1b2f9',
          400: '#d199f0',
          500: '#b87de0',
          600: '#8f67a3',
          700: '#7a5690',
          800: '#64457a',
          900: '#4e3460',
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
        serif: ['var(--font-eb-garamond)', 'Georgia', 'serif'],
      },
      borderColor: {
        DEFAULT: '#171717',
      },
    },
  },
  plugins: [],
};
