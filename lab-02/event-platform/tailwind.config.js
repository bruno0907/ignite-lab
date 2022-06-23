/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue500: '#012b43',
          blue400: '#0d4c70',
          blue300: '#2d7096',
          blue200: '#5998bc',
          warning: '#fba94c',
          error: '#f75a68',
          base900: '#09090a',
          base800: '#121214',
          base700: '#202024',
          base600: '#29292e',
          base500: '#323238',
          base300: '#8d8d99',
          base200: '#c4c4cc',
          base100: '#e1e1e6',
        }        
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
      }
    },
  },
  plugins: [],
}
