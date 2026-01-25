import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0F14",
        paper: "#FBFAF7",
        accent: "#4C6FFF"
      }
    },
  },
  plugins: [],
};
export default config;
