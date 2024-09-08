/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        fotura: ["foturaLight", "sans-serif"], // 'fotura' is the custom font name
        foturalight2: ["foturalight2", "sans-serif"],
        spectral: ["Spectral", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      container: {
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
