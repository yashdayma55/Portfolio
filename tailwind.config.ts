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
        accent: {
          purple: "#6366f1",
          pink: "#ec4899",
          violet: "#8b5cf6",
        },
        surface: {
          light: "#F7F8FC",
          card: "#ffffff",
        },
        text: {
          primary: "#1e1b4b",
          secondary: "#64748b",
          muted: "#94a3b8",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
        "gradient-subtle": "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)",
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(99, 102, 241, 0.08)",
        "card-hover": "0 12px 40px -4px rgba(99, 102, 241, 0.15)",
        glow: "0 0 40px -10px rgba(139, 92, 246, 0.3)",
      },
      animation: {
        "blink-cursor": "blink 1s step-end infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
