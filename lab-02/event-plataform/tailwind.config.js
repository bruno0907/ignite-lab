/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue500: '#012b43',
          blue400: '#0d4c70',
          blue300: '2d7096',
          blue200: '5998bc',
          warning: '#fba94c',
          error: '#f75a68',
          base900: '#09090a',
          base700: '#121214',
          base500: '#29292e',
          base300: '#8d8d99',
          base200: '#c4c4cc',
          base100: '#e1e1e6',
        }        
      }
    },
  },
  plugins: [],
}
