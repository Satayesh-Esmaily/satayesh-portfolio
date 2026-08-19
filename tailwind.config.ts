import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // "ink" now names the light surfaces, "paper" the dark text —
        // kept the same token names across every component so the whole
        // site re-themes from these two palettes alone.
        ink: {
          DEFAULT: "#f8f7f3",
          soft: "#f0efe8",
          raised: "#e8e6dc",
        },
        paper: {
          DEFAULT: "#16161c",
          dim: "#5c5c68",
          faint: "#8b8b96",
        },
        accent: {
          DEFAULT: "#4f46e5",
          soft: "#4338ca",
          dim: "#c7cafe",
        },
        signal: {
          DEFAULT: "#0d9488",
        },
        line: "rgba(22,22,28,0.1)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(22,22,28,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(22,22,28,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "56px 56px",
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
        float: "float 7s ease-in-out infinite",
        "float-delay": "float 9s ease-in-out infinite 1.5s",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest2: "0.28em",
      },
    },
  },
  plugins: [],
};

export default config;
