/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      burntorange: "#bf5700",
      "burntorange-dark": "#9d4700",
      charcoal: "#333f48",
      "charcoal-dark": "#1f262b",
      limestone: "#d6d2c4",
      "limestone-light": "#f2f1ed",
      gray: "#F4F6F7",
    },
    fontFamily: {
      display: ['"Libre Franklin"', "sans-serif"],
    },
  },
  plugins: [],
}
