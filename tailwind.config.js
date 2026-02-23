/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem', // 16px mobile
        sm: '1.5rem',    // 24px tablet
        lg: '2rem',      // 32px desktop
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px', // Restrict max width to ~1200px as requested
      },
    },
    extend: {
      colors: {
        bg: { DEFAULT: "#0b0f19", soft: "#0f1629" },
        card: "#101a33",
        text: { DEFAULT: "#e6e8ee", muted: "#8a93a8" },
        brand: { DEFAULT: "#7aa2ff", strong: "#4f7dff", glow: "rgba(122,162,255,0.15)" },
        amber: { DEFAULT: "#f59e0b", glow: "rgba(245,158,11,0.12)" },
        line: "#1e2d4d",
        green: "#22c55e",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.35)",
        glow: "0 0 60px rgba(122,162,255,0.12)",
        'amber-glow': "0 0 60px rgba(245,158,11,0.10)",
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(122,162,255,0.18) 0%, transparent 70%)',
      },
      fontSize: {
        'fluid-h1': 'clamp(2.5rem, 5vw + 1rem, 4.5rem)',
        'fluid-h2': 'clamp(1.75rem, 3vw + 1rem, 3rem)',
      }
    },
  },
  plugins: [],
}
