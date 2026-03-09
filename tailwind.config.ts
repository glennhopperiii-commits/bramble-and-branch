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
        // Bramble & Branch — earthy, muted, warm, grounded
        sage: {
          50: "#f4f6f0",
          100: "#e4e8dc",
          200: "#cdd4c0",
          300: "#adb89a",
          400: "#8d9a76",
          500: "#71805c",
          600: "#586647",
          700: "#44503a",
          800: "#394231",
          900: "#31392b",
        },
        stone: {
          50: "#faf9f6",
          100: "#f0ede8",
          200: "#e0dbd2",
          300: "#cbc2b5",
          400: "#b3a694",
          500: "#a1917c",
          600: "#8f7d68",
          700: "#776858",
          800: "#63574a",
          900: "#534940",
        },
        sienna: {
          50: "#fdf6f0",
          100: "#f9e8d9",
          200: "#f2ceb2",
          300: "#e8ad82",
          400: "#dd8a56",
          500: "#d47137",
          600: "#c45a28",
          700: "#a34623",
          800: "#843a22",
          900: "#6c321f",
        },
        cream: "#faf8f4",
        charcoal: "#2e2a25",
        bark: "#3d3528",
        blush: "#ecddd4",
        candle: "#d4a94e",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        body: ["'DM Sans'", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-md": ["2.5rem", { lineHeight: "1.15" }],
        "display-sm": ["2rem", { lineHeight: "1.2" }],
      },
    },
  },
  plugins: [],
};

export default config;
