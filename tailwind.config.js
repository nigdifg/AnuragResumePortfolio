/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['monospace'],
      },
      colors: {
        background: '#0a0a0a', // Matches the dark theme background
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"), // Required for the smooth fade-in animations
  ],
}