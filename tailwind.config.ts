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
        // Core monochrome scale
        void: "#080808",
        ash: "#111111",
        stone: "#1c1c1c",
        smoke: "#2e2e2e",
        mist: "#888888",
        bone: "#c8bfb0",     // warm off-white accent
        parchment: "#e8e0d4",   // lightest warm cream
        // legacy compat aliases used across pages
        "museum-black": "#080808",
        "museum-surface": "#1c1c1c",
        "accent-muted": "#888888",
        "accent-industrial": "#2e2e2e",
        "night": "#080808",
        "night-surface": "#1c1c1c",
        "ink": "#e8e0d4",
        "ink-muted": "#888888",
        "ink-faint": "#3a3a3a",
        "accent": "#c8bfb0",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 1.2s ease-out forwards",
        "fade-in-slow": "fadeIn 2.4s ease-out forwards",
        "slide-up": "slideUp 1s cubic-bezier(0.16,1,0.3,1) forwards",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
      },
      boxShadow: {
        "card": "0 1px 0 rgba(255,255,255,0.03), 0 4px 24px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
export default config;
