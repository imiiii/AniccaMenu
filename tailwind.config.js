/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        turquoise: '#1abc9c',
        terracotta: '#d36b47',
        'sand-beige': '#f4e7d3',
      },
      fontFamily: {
        'persian': ['Vazirmatn', 'sans-serif'],
        'anicca': ['Anicca', 'Fredoka One', 'cursive'],
      },
    },
  },
  plugins: [],
}

