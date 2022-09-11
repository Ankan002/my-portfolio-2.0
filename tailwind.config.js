/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#010208",
        "primary-light": "#DDDDDD",
        "primary-yellow": "#FFA02B",
        "vermillion": "#FF5968",
        "cobalt-blue": "#2E86C1",
        "purple": "#C71BDB",
        "primary-orange": "#FC5830",
        "light-grey": "#B5BAC7",
        "semi-transparent": "rgba(0, 0, 0, 0.6)",
        "primary-green": "#08CD92",
        "primary-red": "#D61C4E"
      },
      fontFamily: {
        "manrope": "'Manrope', sans-serif",
        "fira-code": "'Fira Code', monospace"
      }
    },
  },
  plugins: [],
}
