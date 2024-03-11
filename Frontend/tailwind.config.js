/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // add this line
  ],
  theme: {
    extend: {
      colors: {
        primary: '#019DDE',
        yellow: '#FFE454',
        red: '#E86A6A',
        green: '#4EBE6D',
        heading: '#1D242E',
        accent: '#F5F8FF',
        dashboard: '#FBF9F9',
        hover: '#26baf8',
        secondary: '#24C9FA',
        text: '#747272'
      }
    },
  },
  plugins: [],
}
