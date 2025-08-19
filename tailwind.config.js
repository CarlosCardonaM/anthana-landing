module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        agrandir: ["Agrandir", "sans-serif"],
      },
      colors: {
        anthana: {
          dark: "#1A2A44",
          accent: "#00A3E0",
        }
      }
    },
  },
  plugins: [],
}
