/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      skyBlue:'hsl(193, 38%, 86%)',
      darkBlue:'hsl(217, 19%, 38%)',
      grey:'hsl(217, 19%, 24%)',
      dark:'hsl(218, 23%, 16%)',
      neon:'hsl(150, 100%, 66%)'
    },
    extend: {},
  },
  plugins: [],
}

