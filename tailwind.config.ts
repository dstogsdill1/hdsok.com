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
        // Softer neon accents (lightened by 10-15%)
        'neon-green': '#1aff52',
        'neon-green-dark': '#00e63d',
        'neon-blue': '#00d4ff',
        'neon-blue-dark': '#00b8e6',
        // New dark grey palette
        'base': '#1E1E26',          // Main background (lighter than pure black)
        'surface': '#262B35',        // Cards and elevated surfaces
        'surface-hover': '#2C303A',  // Hover states
        'border-subtle': '#3A3F4A',  // Subtle borders
        'border': '#4A4F5A',         // Standard borders
        // Legacy support (mapped to new palette)
        'dark-bg': '#1E1E26',
        'dark-card': '#262B35',
        'dark-border': '#3A3F4A',
        'grey-nav': '#1E1E26',
      },
      borderColor: {
        'neon': '#1aff52',
      },
      lineHeight: {
        'relaxed': '1.75',
        'loose': '2',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
};
export default config;
