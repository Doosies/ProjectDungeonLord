/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    screens: {
      // mobile: { max: '639x' }, //'640px',
      // => @media (max-width: 640px) { ... }
      tablet: '768px',
      // => @media (min-width: 768px) { ... }
      desktop: '1024px',
      // => @media (min-width: 1024px) { ... }
    },
    fontFamily: {
      my: ['pixeng', 'pixkor', 'sans-serif'],
    },
  },
  plugins: [],
}
