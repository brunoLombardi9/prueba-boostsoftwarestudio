/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#fe9300", 
        strongOrange: "#fa6c01",
        darkGray: "#d6d6d6"
      },
    },
  },
  plugins: [],
}