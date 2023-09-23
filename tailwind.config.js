/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        tealDark: "#0EB29A",
        tealLight: "#F5FDFF",
        greenLight: "#DDF0C2",
        grayMedium: "#8C999A",
      },
      keyframes: {
        fade: {
          "0%": { opacity: 0 },
          "50%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        fade1: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        button1: {
          "0%": { translate: "0px" },
          "50%": { translate: "3px" },
          "100%": { translate: "0px" },
        },
        bounce1: {
          "0%": { translate: "0px 0px" },
          "50%": { translate: "0px 4px" },
          "100%": { translate: "0px 0px" },
        },
        bounce2: {
          "0%": { translate: "0px 0px" },
          "50%": { translate: "0px 1px" },
          "100%": { translate: "0px 0px" },
        },
      },
      animation: {
        fadeInOut: "fade 2s linear ",
        fadeIn: "fade1 1s linear ",
        buttonActive: "button1 1s linear ",
        buttonHover: "button1 1s linear  ",
        bounceQ: "bounce1 1s linear  ",
        bounceZ: "bounce2 1s linear  ",
      },
      backgroundSize: {
        "50%": "50%",
        "75%": "75%",
        "85%": "85%",
        "90%": "90%",
        "100%": "100%",
        16: "4rem",
      },
      scale: {
        "25%": "25%",
        "44%": "44%",
        "50%": "50%",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/typography")],
};
