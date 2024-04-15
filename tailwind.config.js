module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" }, 'lg': { 'min': '1050px', 'max': '1279px' }, },
    extend: {
      colors: {
        white: { A700: "#ffffff", A700_3f: "#ffffff3f", A700_cc: "#ffffffcc", A700_30: "#ffffff30" },
        blue_gray: { 100: "#d7d7d7", 900: "#353535", "100_01": "#d9d9d9" },
        black: { 900: "#000000", "900_2b": "#0202022b" },
        gray: {
          50: "#f9f9f9",
          400: "#c9c9c9",
          600: "#777777",
          800: "#454545",
          900: "#09132e",
          "700_01": "#555555",
          "100_16": "#f4f4f416",
        },
        pink: {
          800: "#a4254f",
          A400: "#e80d55",
          A400_1e: "#e80d551e",
          A400_0a: "#e80d550a",
          A400_0f: "#e80d550f",
          "700_0f": "#cb0b4a0f",
        },
        blue: { 600: "#2d96d7" },
        light_blue: { 900: "#0f528b", "900_19": "#0f528b19" },
        gray_700: "#5a5a5a",
      },
      boxShadow: { xs: "0px 4px 9px 4px #000000", sm: "0px 4px 135px 7px #000000" },
      fontFamily: { poppins: "Poppins", lato: "Lato", montserrat: "Montserrat" },
      backgroundImage: {
        gradient: "linear-gradient(to right #f4f4f416,#8e8e8e16)",
        gradient1: "linear-gradient(178deg, #66666626,#000000)",
        gradient2: "linear-gradient(91deg, #e80d5563,#cb0b4a63,#82072f11)",
        gradient3: "linear-gradient(180deg, #00000000,#00000068,#000000bc)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
