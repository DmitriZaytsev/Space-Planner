/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      'sandy': '#FCC89A',
      'light-pink': '#FDEED9',
      'light-sandy': '#FEEAC7',
      'light-brown': '#986000',
    },
    extend: {},
  },
  plugins: [],
};