// tailwind.config.js
const colors = require('tailwindcss/colors')
module.exports = {
  purge:[],
    theme: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
      ,
      
        extend:{
        colors: {
          green: {
            950:'54C3E5',

                },
              },
            },
  },
  }