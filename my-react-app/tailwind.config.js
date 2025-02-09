/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          inter: ['Inter', 'sans-serif'],
          satoshi: ['Satoshi', 'sans-serif'],
          spacing: {
          '13.76': '13.76px',
        },
        },
      },
    },
    plugins: [],
  }