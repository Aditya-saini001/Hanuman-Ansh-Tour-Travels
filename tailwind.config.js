/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0d9488",
          dark: "#0f766e",
        },
        secondary: "#0f172a",
        accent: {
          DEFAULT: "#f59e0b",
          hover: "#d97706",
        },
        "light-bg": "#f8fafc",
      },
      boxShadow: {
        card: "0 12px 30px -5px rgba(0, 0, 0, 0.12)",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "sans-serif"],
      },
      keyframes: {
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "bounce-short": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        "modal-enter": {
          from: { opacity: 0, transform: "scale(0.95) translateY(10px)" },
          to: { opacity: 1, transform: "scale(1) translateY(0)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 18s linear infinite",
        "bounce-short": "bounce-short 2s ease-in-out infinite",
        "modal-enter": "modal-enter 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};
