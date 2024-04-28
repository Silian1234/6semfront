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
          2: '#9E562E',
          3: '#E36D39'
        },
        gray: {
          1: '#9CA3A3',
          2: '#A8AEAE',
          3: '#5B5E5F',
          4: '#BFBFBF',
          5: '#808181',
          6: '#878787'
        },
        red: {
          1: '#EE8686',
          2: '#AE0000'
        },
        green: {
          1: '#AEDAB5',
          2: '#83D26F',
          3: '#42AE00'
        },
        dark: {
          1: '#3B4658'
        },
        background: '#F7F6F4'
      }
    },
    boxShadow: {
      dark: "0px 4px 21px 0px rgba(0, 0, 0, 0.25)"
    },
  },
  plugins: [],
}

