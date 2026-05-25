import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0F14",
        paper: "#FBFAF7",
        accent: "#4C6FFF",
        // Dark mode colors matching corpus map
        "dark-bg": "#07080d",
        "dark-surface": "#0d0f18",
        "dark-surface-2": "#111828",
        "dark-border": "#1a1e2a",
        "dark-text": "#b8c6de",
        "dark-dim": "#5a6a82",
        "dark-bright": "#e4e8f0",
      }
    },
  },
  plugins: [],
};
export default config;
