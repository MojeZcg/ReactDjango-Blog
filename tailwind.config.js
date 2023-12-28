/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        oro: "#e6b219",
        dark: "#111114",
        dark2: "#121212",
        "oro-inespecifico": "#E5A65E",
        "oro-web": "#FFD700",
      },
      backgroundImage: {
        "gradient-secundary":
          "  linear-gradient(301deg, #ffffff 37%, #E6B21970 100%)",
        "gradient-secundary2":
          "conic-gradient(at 100% 100%, rgb(255, 255, 255), rgb(254, 249, 195), rgb(255, 255, 255))",
        "gradient-dark": "linear-gradient(300deg, #000000 66%, #E6B2195f 100%)",
      },
    },
    fontFamily: {
      Main: ["Onest", "sans-serif"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),

    function ({ addUtilities }) {
      const extendUnderline = {
        ".underline": {
          textDecoration: "underline",
          "text-decoration-color": "#EABE3F",
        },
      };
      addUtilities(extendUnderline);
    },
  ],
};
