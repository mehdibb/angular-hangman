/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#F5F5F5",
        "input": "#E0E0E0",
        "accent": "#FFC107",
        "ring": "#FFC107",
        "accent-foreground": "#212121",
      }
    },
  },
  plugins: [],
}

