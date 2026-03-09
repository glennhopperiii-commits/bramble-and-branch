import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bramble & Branch palette — placeholder until brand guide arrives
        sage: {
          50: "#f6f7f4",
          100: "#e8eae3",
          200: "#d1d5c7",
          300: "#b3b9a3",
          400: "#939b7e",
          500: "#768063",
          600: "#5d664e",
          700: "#4a5140",
          800: "#3d4336",
          900: "#343a2f",
        },
        stone: {
          50: "#faf9f7",
          100: "#f0eeea",
          200: "#e0dbd4",
          300: "#ccc4b8",
          400: "#b5a999",
          500: "#a49683",
          600: "#978672",
          700: "#7d6e5f",
          800: "#675b51",
          900: "#554c44",
        },
        clay: {
          50: "#fdf8f6",
          100: "#f9ede7",
          200: "#f3d9ce",
          300: "#eabfab",
          400: "#de9e82",
          500: "#d08362",
          600: "#bc6b49",
          700: "#9d573c",
          800: "#824a35",
          900: "#6d402f",
        },
        cream: "#faf8f5",
        bark: "#2c2418",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
