/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'backgroundWave' : '#0099ff',
      },
      fontFamily: {
        'Alkatra': ['Alkatra']
      },
      keyframes: {
        startupNav: {
          '0%': { transform: 'translateY(-5rem)' },
          '100%': { transform: 'translateY(0rem)' },
        },
        startupHome: {
          '0%': { transform: 'translateX(-100rem)' },
          '90%': { transform: 'translateX(2rem)' },
          '100%': { transform: 'translateX(0rem)' },
        },
        startupSkill: {
          '0%': { transform: 'translateY(-100rem)' },
          '100%': { transform: 'translateY(0rem)' },
        },
        startupSosmed: {
          '0%': { transform: 'translateX(100rem)' },
          '100%': { transform: 'translateX(0rem)' },
        },
        hideNav: {
          '0%': { transform: 'translateY(0rem)' },
          '10%': { transform: 'translateY(0.625rem)' },
          '100%': { transform: 'translateY(-20rem)' },
        },
      },
      animation: {
        startupNav: 'startupNav 4s ease-in-out 1',
        startupHome: 'startupHome 3s ease-in-out 1',
        startupSkill: 'startupSkill 4s ease-in-out 1',
        startupSosmed: 'startupSosmed 4s ease-in-out 1',
        hamburger: 'startupNav 1s ease-in-out 1',
        hideHamburger: 'hideNav 2s ease-in-out 1',
      }
    },
  },
  plugins: [],
}
