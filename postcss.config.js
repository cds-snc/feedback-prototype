const cssnano = require('cssnano')

module.exports = {
  plugins: [
    require('@csstools/postcss-sass'),
    require('tailwindcss'),
    cssnano({
      preset: 'default',
    }),
    require('autoprefixer'),
    ...([]),
  ],
}
