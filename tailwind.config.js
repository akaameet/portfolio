module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // enable dark mode via class
  theme: {
    extend: {
      colors: {
        primary: "#16A34A", // Primary green for accents
        secondary: "#22C55E", // Hover green accent
        light: "#F9FAFB", // Soft light mode background
        dark: "#0f0f0f", // Dark mode background
        card: {
          light: "#E5E7EB", // Light card background
          dark: "#1a1a1a", // Dark card background
        },
        text: {
          light: "#111827", // Light mode text color
          dark: "#d1d5db", // Dark mode text color
        },
        muted: "#6B7280", // Secondary font color (for subtitles / muted text)
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Font for both modes
      },
      boxShadow: {
        glow: "0 0 15px rgba(59, 218, 81, 0.7)", // Glow effect for buttons
      },
    },
  },
  plugins: [],
};
