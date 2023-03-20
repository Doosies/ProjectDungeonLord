const plugin = require('tailwindcss/plugin');

const remCalculate = px => px / 16 + 'rem';

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    screens: {
      lgScreen: '768px',
      // => @media (min-width: 768px) { ... }
      // desktop: '1024px',
      // => @media (min-width: 1024px) { ... }
    },
    fontFamily: {
      my: ['pixeng', 'pixkor', 'sans-serif'],
    },
    extend: {
      fontSize: {
        h1: remCalculate(20),
        body1: remCalculate(14),
        body2: remCalculate(12),
        body3: remCalculate(10),
      },
    },
    colors: {
      dark: '#0E0D17',
      white: '#C7DCD0',
      whitePurple: '#625565',
      darkPurple: '#3E3546',
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtiles = {
        '.w-h-full': {
          width: '100%',
          height: '100%',
        },

        '.flex-col-center': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
      };
      addUtilities(newUtiles);
    }),
  ],
};
