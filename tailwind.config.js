// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-instrument)"],
        inter: ["var(--font-inter)"],
      },
      letterSpacing: {
        'tighter-less': '-0.015em',
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
