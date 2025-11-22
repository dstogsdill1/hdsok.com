import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'neon-green': '#00ff41',
        'neon-green-dark': '#00cc33',
        'dark-bg': '#0a0a0a',
        'dark-card': '#0a0a0a',
        'dark-border': '#2a2a2a',
        'grey-nav': '#0a0a0a',
      },
      borderColor: {
        'neon': '#00ff41',
      },
    },
  },
  plugins: [],
};
export default config;
