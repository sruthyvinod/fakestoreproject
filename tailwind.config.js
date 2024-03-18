/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary:{
          '50': '#fffaeb',
          '100': '#fff1c6',
          '200': '#ffe088',
          '300': '#ffcb4a',
          '400': '#ffb420',
          '500': '#f99107',
          '600': '#dd6a02',
          '700': '#b74906',
          '800': '#94370c',
          '900': '#7a2f0d',
          '950': '#461602',
        },
        secondary:{
          '50': '#edefff',
          '100': '#dee3ff',
          '200': '#c4caff',
          '300': '#a0a8ff',
          '400': '#7a7aff',
          '500': '#675bf9',
          '600': '#583dee',
          '700': '#4c30d2',
          '800': '#3d2aa9',
          '900': '#362986',
          '950': '#21184e',
        },
      },    
    },
  },
  plugins: [],
}

