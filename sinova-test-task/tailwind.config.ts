import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./shared/components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--text-primary-cats))",
        secondary: "rgb(var(--text-primary-dogs))",
        foreground: "rgb(var(--foreground-rgb))",
        backgroundStart: "rgb(var(--background-start-rgb))",
        backgroundEnd: "rgb(var(--background-end-rgb))",
      },
    },
  },
  plugins: [],
};
export default config;
