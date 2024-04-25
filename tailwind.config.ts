/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
            "app-primary": "#e7e7e7"
        },
    },
  },
  plugins: [],
};
