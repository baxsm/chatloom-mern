import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "dark-1": "#111111",
        "dark-2": "#1C1C1C",
        "dark-3": "#333333",
        "dark-4": "#111",
        border: "#989898",
        input: "#333",
        ring: "#754152",
        background: "#393939",
        foreground: "#111",
        primary: {
          DEFAULT: "#DDDDDD",
          foreground: "#333333",
          background: "#7653d0",
        },
        secondary: {
          DEFAULT: "#959595",
          foreground: "#333",
          background: "#a38bdf",
        },
        destructive: {
          DEFAULT: "#770000",
          foreground: "#990000",
        },
        muted: {
          DEFAULT: "#9a9a9a",
          foreground: "#a9a9a9",
        },
        accent: {
          DEFAULT: "rgba(255,255,255,0.05)",
          foreground: "#abbd",
        },
        popover: {
          DEFAULT: "#111111",
          foreground: "#959595",
        },
        card: {
          DEFAULT: "#666666",
          foreground: "#99999999",
        },
      },
      borderRadius: {
        lg: "4px",
        md: "2px",
        sm: "1px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
