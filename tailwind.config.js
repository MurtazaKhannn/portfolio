/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      'xs': {'max': '639px'},  // Custom breakpoint for screens less than 640px
      'sm': '640px',           // Default small breakpoint
      'md': '768px',           // Default medium breakpoint
      'lg': '1024px',          // Default large breakpoint
      'xl': '1280px',          // Default extra large breakpoint
      '2xl': '1536px',         // Default 2x extra large breakpoint
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        danfo: ['Danfo', 'sans-serif'] ,
        bebas: ['"Bebas Neue"', 'cursive'],
        poiret: ['Poiret One', 'sans-serif'],
        ops: ['Black Ops One', 'sans-serif'],
        broken: ['Rubik Broken Fax' , 'sans-serif'],
      },
      textStrokeWidth: {
        '1': '1px',
        '2': '2px',
      },
      textStrokeColor: {
        black: 'black',
        white: 'white',
      },
    },
  },
  variants: {
    textStrokeWidth: ['responsive'],
    textStrokeColor: ['responsive'],
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke-1': {
          '-webkit-text-stroke-width': '1px',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke-width': '2px',
        },
        '.text-stroke-black': {
          '-webkit-text-stroke-color': 'black',
        },
        '.text-stroke-white': {
          '-webkit-text-stroke-color': 'white',
        },
      });
    },
  ],
}

