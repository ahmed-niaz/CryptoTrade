/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#01051e",
        "color-primary-light": "#020726",
        'color-primary-dark':'#010417',
        'color-secondary':'#fb8500',
        'color-gray':'#333',
        'color-white':'#fff',
        'color-bolb':'#d8e2dc',
        'title':'#adb5bd'
      },
    },
    container:{
      center: true,
      padding:{
        default: '20px',
        md: '50px'
      }
    }
  },
  plugins: [
    plugin(function({addUtilities}) {
      addUtilities({
        '.rotate-y-180':{
          transform:'rotateY(180deg)'
        },
        '.-rotate-y-180':{
          transform:'rotateY(-180deg)'
        },
      })
    }),
  ],
};
