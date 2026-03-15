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
        primary: "#1e1b4b",
        secondary: "#64748b",
        surface: "#f0f4ff",
        accent: {
          indigo: "#6366f1",
          violet: "#8b5cf6",
          pink: "#ec4899",
        },
      },
      fontFamily: {
        heading: ["var(--font-syne)", "system-ui", "sans-serif"],
        body: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "gradient-accent":
          "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(30, 27, 75, 0.08)",
        "glass-hover": "0 12px 40px rgba(30, 27, 75, 0.12)",
      },
      animation: {
        float: "float 8s ease-in-out infinite alternate",
        "pulse-slow": "pulse 2.5s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-28px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
