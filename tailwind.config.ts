import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
      },
      colors: {
        brand: {
          50: "#f4f6fb",
          100: "#e6eaf4",
          200: "#c8d2e6",
          300: "#9bacd0",
          400: "#6780b3",
          500: "#445d96",
          600: "#33477a",
          700: "#243663",
          800: "#1a2748",
          900: "#121b34",
          950: "#0b1124",
        },
        gold: {
          50: "#fbf7ec",
          100: "#f6edd0",
          200: "#ecd99e",
          300: "#e0c068",
          400: "#d4ab4a",
          500: "#c8a24c",
          600: "#a9853a",
          700: "#86662c",
        },
      },
      boxShadow: {
        card: "0 1px 2px 0 rgba(15,23,42,.04), 0 4px 16px -4px rgba(15,23,42,.12)",
        float: "0 20px 50px -15px rgba(15,23,42,.35)",
      },
    },
  },
  plugins: [],
};
export default config;
