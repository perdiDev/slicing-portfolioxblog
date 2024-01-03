/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': 'poppins'
    },
    extend: {
      colors: {
        "primary-dark": "#030113",
        "white": "#F4E9F7",
        "secondary-dark": "#0A071D"
      }
    },
  },
  plugins: [],
}

