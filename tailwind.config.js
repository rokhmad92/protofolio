/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Alkatra': ['Alkatra']
      },
      keyframes: {
        startup: {
          '0%': { transform: 'translateY(-5rem)' },
          '100%': { transform: 'translateY(0rem)' },
        },
        hide: {
          '0%': { transform: 'translateY(0rem)' },
          '10%': { transform: 'translateY(0.625rem)' },
          '100%': { transform: 'translateY(-20rem)' },
        },
      },
      animation: {
        startupNav: 'startup 4s ease-in-out 1',
        hamburger: 'startup 1s ease-in-out 1',
        hideHamburger: 'hide 2s ease-in-out 1',
      }
    },
  },
  plugins: [],
}
