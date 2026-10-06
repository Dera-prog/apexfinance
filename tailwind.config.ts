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
        /* Apex Blue — primary brand system */
        apex: {
          50: "#eff5ff",
          100: "#dbe8ff",
          200: "#bcd4ff",
          300: "#9dc0ff",
          400: "#5e97fb",
          500: "#2f74f5",
          600: "#1d5ce0",
          700: "#1749b8",
          800: "#123a91",
          900: "#0c2d6b",
          950: "#081e47",
        },
        ink: "#0f172a",
        muted: "#64748b",
        surface: "#f4f6f8",
        success: "#16a34a",
        warning: "#f59e0b",
        danger: "#ef4444",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        btn: "12px",
        input: "10px",
      },
      boxShadow: {
        soft: "0 4px 16px rgba(15, 23, 42, 0.06)",
        card: "0 8px 24px rgba(15, 23, 42, 0.08)",
        blue: "0 8px 24px rgba(29, 92, 224, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
