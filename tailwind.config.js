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
      // colors: {
      //   beige: "#F5EFE3",
      //   green: "#B5C99D",
      //   terracotta: "#E07A5F",
      //   rose: "#D2A3A9",
      //   goldenrod: "#F9C22E",
      // },
      // colors: {
      //   greenLight: "#C8E4B2",
      //   greenMedium: "#9ED2BE",
      //   greenDark: "#7EAA92",
      //   orange: "#FFD9B7",
      // },
      // colors: {
      //   purpleLight: "#6F61C0",
      //   purpleMedium: "#A084E8",
      //   tealLight: "#8BE8E5",
      //   tealDark: "#D5FFE4",
      // },
      colors: {
        tealDark: "#0EB29A",
        tealLight: "#F5FDFF",
        greenLight: "#DDF0C2",
        grayMedium: "#8C999A",
      },
    },
  },
  plugins: [],
};
