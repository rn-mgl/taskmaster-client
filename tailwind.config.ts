import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: "var(--font-header)",
        body: "var(--font-body)",
      },
      screens: {
        "m-s": "320px",
        "m-m": "375px",
        "m-l": "425px",
        t: "768px",
        "l-s": "1024px",
        "l-l": "1440px",
      },
      colors: {
        "default-light": "#FAFAFA",
        "default-dark": "#303030",
        "default-black": "#000000DE",
        "default-white": "#FFFFFF",
        "primary-main": "#651FFF",
        "primary-light": "#D1C4E9",
        "primary-dark": "#311B92",
        "secondary-main": "#00E5FF",
        "secondary-light": "#84FFFF",
        "secondary-dark": "#006064",
        "accent-main": "#FF4081",
        "accent-light": "#F8BBD0",
        "accent-dark": "#D81B60",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(-1rem)" },
          "100%": { transform: "translateY(1rem)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out alternate infinite",
      },
    },
  },
  plugins: [],
};
export default config;
