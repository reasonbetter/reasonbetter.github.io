// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)", "system-ui", "-apple-system", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
        instrument: ["var(--font-inter)", "system-ui", "-apple-system", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
      },
      letterSpacing: {
        'tighter-less': '-0.015em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
