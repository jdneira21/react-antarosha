/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      'open-sans': ['Open Sans'],
    },
    container: {
      center: true,
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
})

