/** @type {import('tailwindcss').Config} */
const {nextui, button, colors} = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: '"Work Sans", serif',
        work: '"Work Sans", serif'
      }
    },
    backgroundColor: {
      btnColor: "#0FF1F6",
      bg: "#02242A"
    },
    boxShadow: {
      buttonShadow: "rgba(83, 255, 252, 0.2)"
    },
    border: {
      buttonBorder: "#0FF1F6"
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}