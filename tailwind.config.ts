import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "2rem",
        lg: "2.5rem",
      },
    },
    extend: {
      colors: {
        wbDark: {
          DEFAULT: "#2E3A40",
          50: "#F4F6F7",
          100: "#E3E8EA",
          200: "#C7D1D5",
          300: "#A1B1B8",
          400: "#6E848E",
          500: "#4C5F69",
          600: "#3D4E57",
          700: "#2E3A40",
          800: "#232C31",
          900: "#181E22",
          950: "#0F1316",
        },
        wbTeal: {
          DEFAULT: "#6E9E93",
          50: "#F1F7F5",
          100: "#DFEDE9",
          200: "#C0DCD4",
          300: "#98C5B9",
          400: "#6E9E93",
          500: "#52867A",
          600: "#416C62",
          700: "#365750",
          800: "#2E4741",
          900: "#283B37",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px 0 rgb(24 30 34 / 0.04), 0 1px 3px 0 rgb(24 30 34 / 0.06)",
        "card-hover":
          "0 10px 15px -3px rgb(24 30 34 / 0.07), 0 4px 6px -4px rgb(24 30 34 / 0.05)",
        glow: "0 0 40px -8px rgb(110 158 147 / 0.45)",
      },
      backgroundImage: {
        "wb-gradient": "linear-gradient(135deg, #6E9E93 0%, #416C62 100%)",
        "wb-gradient-soft": "linear-gradient(135deg, #DFEDE9 0%, #F4F6F7 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        float: "float 7s ease-in-out infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
