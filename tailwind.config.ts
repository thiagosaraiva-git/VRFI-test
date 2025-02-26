import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#000315",
          DEFAULT: "#1C122C",
          light: "#2D124C",
        },
        secondary: {
          dark: "#6B6374",
          DEFAULT: "#9B9EAC",
          light: "#F1F2F6",
        },
        neutral: {
          white: "#FFFFFF",
          gradient: "linear-gradient(to right, #6700E9, #D83AFF)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
