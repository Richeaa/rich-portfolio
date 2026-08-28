/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05070c",
          900: "#0a0e16",
          800: "#0f141f",
          700: "#161d2b",
          600: "#1e2738",
        },
        surface: {
          900: "#0c111c",
          800: "#111826",
          700: "#161f30",
          600: "#1c2740",
          border: "#233049",
        },
        brand: {
          50: "#eef6ff",
          100: "#d9ecff",
          200: "#b7dbff",
          300: "#86c2ff",
          400: "#4da2ff",
          500: "#0a84ff",
          600: "#0066db",
          700: "#0052b4",
          800: "#063e85",
          900: "#0a2f5e",
          950: "#071d3b",
        },
      },
      fontFamily: {
        sans: [
          '"Inter"',
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          "sans-serif",
        ],
        mono: [
          '"JetBrains Mono"',
          '"SF Mono"',
          "ui-monospace",
          "monospace",
        ],
      },
      borderRadius: {
        "4xl": "1.75rem",
        "5xl": "2.25rem",
      },
      boxShadow: {
        bento: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 40px -20px rgba(0,0,0,0.55)",
        "glow-brand": "0 0 0 1px rgba(10,132,255,0.35), 0 0 40px -8px rgba(10,132,255,0.45)",
      },
      backgroundImage: {
        "grid-dot":
          "radial-gradient(circle, rgba(10,132,255,0.14) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(60% 50% at 50% 0%, rgba(10,132,255,0.14) 0%, rgba(10,132,255,0) 100%)",
      },
      backgroundSize: {
        "grid-dot": "22px 22px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-line": {
          "0%": { strokeDashoffset: "240" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "pulse-line": "pulse-line 3.5s linear infinite",
      },
    },
  },
  plugins: [],
}
