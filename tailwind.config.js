/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gameYellow: "#FFC62F",
        gameGreen: "#16C60C",
        gameRed: "#E44031",
        gameCyan: "#41C6CB",
        gamePink: "#F88999",
        gameWine: "#C24B5D",
        gameOrange: "#F3A455",
        gameWhip: "#FFEDC7",
      },
    },
  },
  plugins: [],
};
