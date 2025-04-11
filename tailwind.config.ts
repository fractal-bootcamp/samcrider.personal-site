import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        terminal: ["Fira Code", "Monaco", "Courier New", "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "terminal-blink": "blink 1s step-end infinite",
        "text-glow": "glow 1.5s ease-in-out infinite alternate",
        "bg-pulse": "backgroundPulse 3s ease infinite",
      },
      keyframes: {
        blink: {
          "0%, 50%": { opacity: "1" },
          "50.1%, 100%": { opacity: "0" },
        },
        glow: {
          "0%": {
            textShadow:
              "0 0 2px rgba(101, 101, 255, 0.2), 0 0 4px rgba(101, 101, 255, 0.2)",
          },
          "100%": {
            textShadow:
              "0 0 4px rgba(101, 101, 255, 0.4), 0 0 8px rgba(101, 101, 255, 0.4)",
          },
        },
        backgroundPulse: {
          "0%, 100%": { backgroundColor: "rgba(30, 30, 50, 1)" },
          "50%": { backgroundColor: "rgba(25, 25, 45, 1)" },
        },
      },
      backdropFilter: {
        glass: "blur(8px)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        neohacker: {
          primary: "#6e6aff", // neon blue/purple
          secondary: "#ffffff", // white
          accent: "#ff56c1", // neon pink accent
          neutral: "#121221", // dark blue-black for panels
          "base-100": "#0a0a16", // very dark blue-black background
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
          "--rounded-box": "0.5rem", // slight rounding
          "--rounded-btn": "0.375rem",
          "--rounded-badge": "0.375rem",
          "--animation-btn": "0.3s",
          "--animation-input": "0.2s",
          "--btn-text-case": "normal",
          "--navbar-padding": "0.75rem",
          "--border-btn": "1px",
        },
      },
      "light",
    ],
    darkTheme: "neohacker",
  },
} satisfies Config;
