/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': 'poppins'
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '6rem',
        xl: '8rem',
        '2xl': '9rem',
      },
    },
    extend: {
      screens: {
        'xs': '380',
      },
      colors: {
        "primary-dark": "#030113",
        "white": "#F4E9F7",
        "secondary-dark": "#0A071D",
        "blue-text": "#1F1951"
      }
    },
  },
  plugins: [],
}

