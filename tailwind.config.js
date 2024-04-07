/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans'],
        inter: ['Inter', 'serif']
      },
      colors: {
        orange: {
          1: '#FF8743',
          2: '#9E562E'
        },
        gray: {
          1: '#9CA3A3'
        },
        red: {
          1: '#EE8686'
        },
        background: '#F7F6F4'
      }
    },
  },
  plugins: [],
}

