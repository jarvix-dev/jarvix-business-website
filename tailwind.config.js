/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: "#0b0f19", soft: "#0f1629" },
        card: "#101a33",
        text: { DEFAULT: "#e6e8ee", muted: "#aab2c5" },
        brand: { DEFAULT: "#7aa2ff", strong: "#4f7dff" },
        line: "#223055"
      },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,.35)" }
    }
  },
  plugins: []
}
