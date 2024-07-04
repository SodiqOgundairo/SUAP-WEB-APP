/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#101010",
        light: "#fafafa",
        theme: 'rgb(204, 154, 0)'
      },
    },
  },
  plugins: [],
}