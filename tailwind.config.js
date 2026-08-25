/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Inter", "sans-serif"],       // Texto general
        "display": ["Rubik", "sans-serif"],    // Títulos (Branding)
        "mono": ["Space Mono", "monospace"],   // Detalles técnicos
      },
      colors: {
        "bg-main": "#0e0e10",   // Obsidian (Fondo Principal)
        "bg-card": "#262728",   // Onyx (Tarjetas)
        "bg-header": "#0f0842", // Deep Navy
        "primary": "#8236fc",   // Vivid Purple
        "accent": "#fbd405",    // Cyber Yellow
        "text-main": "#fcfffc", // Mint White
        "text-muted": "#a8a8b2" // Tech Grey
      },
      backgroundImage: {
        'hero-gradient': "linear-gradient(to bottom, rgba(15, 8, 66, 0.9), rgba(14, 14, 16, 1))",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
