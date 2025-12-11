module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // enable dark mode via class
  theme: {
    extend: {
      colors: {
        primary: "#0BDA51", // Green text stays same in both modes
        secondary: "#10B981", // Green accent for hover/shadows
        background: {
          light: "#ffffff", // Light mode main background
          dark: "#0f0f0f", // Dark mode main background
        },
        card: {
          light: "#f3f4f6", // Light mode card background
          dark: "#1a1a1a", // Dark mode card background
        },
        text: {
          light: "#111827", // Light mode main text
          dark: "#d1d5db", // Dark mode main text
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Font for both modes
      },
      boxShadow: {
        glow: "0 0 15px rgba(59, 218, 81, 0.7)", // Glow effect for buttons
      },
      clipPath: {
        hex: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
      },
    },
  },
  plugins: [],
};
