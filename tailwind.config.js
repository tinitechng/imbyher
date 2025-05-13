module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        md: "0 4px 10px -1px rgba(0, 0, 0, 0.1), 0 2px 6px -1px rgba(0, 0, 0, 0.06)",
      },
      fontFamily: {
        glacial: ["var(--font-glacial)", "sans-serif"],
      },
      backgroundColor: {
        dark: "#1a1a1a",
        "dark-light": "#2a2a2a",
      },
      textColor: {
        "dark-primary": "#f3f3f3",
        "dark-secondary": "#a0a0a0",
      },
    },
  },
  plugins: [],
};
