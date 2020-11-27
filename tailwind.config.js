/* eslint-disable no-undef */
module.exports = {
  purge: {
    content: ['./dist/**/*.+(html|php|twig)', './src/js/**/*.js'],
    options: {
      safelist: [],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '50vh': '50vh',
      },
    },
    container: {
      center: true,
    },
  },
  variants: {},
  plugins: [],
}
