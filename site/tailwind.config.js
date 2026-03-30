/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#03030b",
        accent: {
          cyan: "#00f2ff",
          blue: "#0066ff",
          purple: "#bc13fe",
          green: "#0ffca1",
        },
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      animation: {
        'slow-spin': 'spin 12s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'infinite-scroll-slow': 'infinite-scroll-slow 80s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-scroll-slow': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', filter: 'blur(80px)' },
          '50%': { opacity: '0.7', filter: 'blur(120px)' },
        }
      }
    },
  },
  plugins: [],
}
