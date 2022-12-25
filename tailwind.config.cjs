/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
      colors: {
        'home': {
          'primary': '#005dab',
          'secondary': '#337cc1',
          'highlight': '#1147a9'
        },
        'away': {
          'primary': '#ea8211',
          'secondary': '#ffac38',
          'hightlight': '#e57215'
        },
        'theme': {
          'primary': '#0a1624',
          'secondary': '#1d2c3f'
        }
      },
    },
  },
  plugins: [],
}
