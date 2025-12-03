/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0C9BEA",
        dark: "#002D3F",
      },
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [],
}