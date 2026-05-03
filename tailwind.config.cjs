/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        muted: "#6B7280",
        accent: "#2563EB",
        "accent-soft": "#EAF1FF",
        navy: "#1A2B45",
        canvas: "#F5F5F5",
        card: "#F3F4F6",
        slate: "#1A2B45",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 6px -1px rgb(0 0 0 / 0.06), 0 10px 24px -4px rgb(0 0 0 / 0.08)",
        nav: "0 8px 30px rgb(0 0 0 / 0.08)",
        mock: "0 25px 50px -12px rgb(0 0 0 / 0.15)",
      },
      keyframes: {
        "route-enter": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "drawer-enter": {
          from: { opacity: "0", transform: "translateX(28px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "drawer-exit": {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(28px)" },
        },
        "fade-enter": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-exit": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        "mega-enter": {
          from: { opacity: "0", transform: "translateY(10px) scale(0.985)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        "route-enter": "route-enter 0.45s cubic-bezier(0.22, 1, 0.36, 1) both",
        "drawer-enter": "drawer-enter 0.28s cubic-bezier(0.22, 1, 0.36, 1) both",
        "drawer-exit": "drawer-exit 0.22s ease-in both",
        "fade-enter": "fade-enter 0.2s ease-out both",
        "fade-exit": "fade-exit 0.2s ease-in both",
        "mega-enter": "mega-enter 0.2s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};
