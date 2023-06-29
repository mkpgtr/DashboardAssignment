/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens:{
        xsm : {'max':'768px'}
      }
    },
  },
  plugins: [],
}

