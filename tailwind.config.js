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
        theme: '#D2AC67'
      },
    },
  },
  plugins: [],
}