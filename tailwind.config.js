/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#111111",
        "primary-light": "#DDDDDD",
        "primary-yellow": "#FFA02B",
        "vermillion": "#FF5968",
        "cobalt-blue": "#2E86C1",
        "purple": "#C71BDB"
      },
      fontFamily: {
        "helix": "'helix', sans-serif"
      }
    },
  },
  plugins: [],
}
