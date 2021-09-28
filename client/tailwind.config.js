const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: colors.indigo[500],
        "primary-50": colors.indigo[50],
        "primary-100": colors.indigo[100],
        "primary-200": colors.indigo[200],
        "primary-300": colors.indigo[300],
        "primary-400": colors.indigo[400],
        "primary-500": colors.indigo[500],
        "primary-600": colors.indigo[600],
        "primary-700": colors.indigo[700],
        "primary-800": colors.indigo[800],
        "primary-900": colors.indigo[900],
        "primary-dark": colors.indigo[600],
        "primary-darker": colors.indigo[700],
        "primary-hov": colors.indigo[600],
        "primary-ring": colors.indigo[300],
        "dark-50": colors.indigo[50],
        "dark-100": colors.indigo[100],
        "dark-200": colors.indigo[200],
        "dark-300": colors.indigo[300],
        "dark-400": colors.indigo[400],
        "dark-500": colors.indigo[500],
        "dark-600": "#2F2D26",
        "dark-700": "#2C2B23",
        "dark-800": "#272822",
        "dark-900": "#21201B",
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
