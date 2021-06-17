const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    content: ['./public/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'cyan': colors.cyan,
        'teal': colors.teal
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
