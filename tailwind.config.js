/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FFC27A",
      },
      fontFamily: {
        mainFont: ["Public Sans"],
      },
    },
  },
  plugins: [require("daisyui")],
};
