/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'lightBG': "url('/src/assets/images/lightBG.jpg')",
        'darkBG': "url('/src/assets/images/darkBG.jpg')",
      }
    },
  },
  plugins: [],
}

