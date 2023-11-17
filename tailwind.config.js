/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/App.js",
    "./src/index.css",
    "./src/Header.js",
    "./src/Main.js",
    "./src/Employee.js",
    "./src/EmployeeCard.js",
    "./src/Gallery.js",
    "./src/News.js",
    "./src/NewsElement.js",
    "./public/index.html",
  ],
  theme: {
    extend: {
      animation: {
        pulseBeat: "pulsate-bck 0.5s ease-in-out infinite both",
        textIn:
          "tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both",
        nextCard:
          "flip-vertical-right 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both",
      },
      dropShadow: {
        "text-shadow": "3px 0px 0px #FFFFFF",
      },
    },
  },
  plugins: [],
};
