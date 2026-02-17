/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        dark: {
          900: "#0a0a0f",
          800: "#151520",
          700: "#1f1f2e",
          600: "#2a2a3e",
        },
        accent: {
          cyan: "#00f5ff",
          purple: "#a78bfa",
          green: "#4ade80",
        },
      },
    },
  },
  plugins: [],
};
