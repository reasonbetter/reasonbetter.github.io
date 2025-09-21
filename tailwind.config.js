// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      letterSpacing: {
        'tighter-less': '-0.015em',
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
