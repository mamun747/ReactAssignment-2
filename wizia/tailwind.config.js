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
      colors: {
        text1: "#0FF1F6",
        text2: "#14BCB2"
      },
      backgroundColor: {
        btnColor: "#0FF1F6",
        bg: "#02242A",
        bg2: "#07292F",
        bg3: "#002228"
      },
      fontFamily: {
        Montserrat: '"Work Sans", serif',
        work: '"Work Sans", serif'
      }
    },
    boxShadow: {
      buttonShadow: "rgba(83, 255, 252, 0.2)"
    },
    border: {
      buttonBorder: "#0FF1F6"
    }
  },
  darkMode: "class",
  plugins: [nextui()],
}