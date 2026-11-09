/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        midnight: "#172B42",
        deep: "#0B1220",
        brand: {
          DEFAULT: "#2563EB",
          dark: "#1D4ED8",
          light: "#DBEAFE",
        },
        ember: {
          DEFAULT: "#F97316",
          dark: "#C2410C",
          soft: "#FFF1E7",
        },
        mist: "#F4F7FA",
        muted: "#64748B",
      },
      fontFamily: {
        display: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 70px -30px rgba(17, 24, 39, 0.28)",
        card: "0 18px 45px -28px rgba(17, 24, 39, 0.35)",
        lift: "0 30px 60px -24px rgba(23, 43, 66, 0.38)",
      },
      letterSpacing: {
        label: "0.2em",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "72px 72px",
      },
    },
  },
  plugins: [],
};
