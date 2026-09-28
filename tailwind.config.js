/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./ciberseguridad/index.html", "./odoo-erp/index.html", "./paginas-web/index.html", "./blog/index.html", "./blog/como-implementar-un-erp-en-colombia/index.html"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Inter", "sans-serif"],                       // Texto general
        "display": ["Sora", "sans-serif"],                     // Titulares y precios
        "mono": ["Disket Mono", "JetBrains Mono", "monospace"], // Eyebrows, tags y detalles técnicos
        "brand": ["Rubik Mono One", "sans-serif"],             // Frases de marca cortas, en mayúsculas
      },
      colors: {
        // Paleta según el Design System de CSL
        "bg-main": "#0d0e10",   // Fondo principal
        "bg-card": "#16171b",   // Superficie (cards, formularios)
        "bg-raised": "#1f2025", // Superficie elevada (hover, inputs)
        "bg-header": "#0f0842", // Índigo del logotipo
        "line": "#2c2d33",      // Bordes hairline
        "primary": {
          DEFAULT: "#8f00ff",   // Violeta Syndicate: rellenos, bordes, íconos, titulares grandes
          hover: "#7a00e0",     // Hover de rellenos violeta
          light: "#b57bff",     // Violeta legible para links y textos pequeños
        },
        "violet-mid": "#4f04a1", // Parada media del degradado de marca
        "accent": {
          DEFAULT: "#fbd405",   // Amarillo Latam: CTA y precios
          hover: "#e5c004",
        },
        "text-main": "#fafafc", // Texto principal
        "text-muted": "#a8a8b2" // Texto secundario
      },
      boxShadow: {
        "glow": "0 0 24px rgba(143, 0, 255, 0.30)",
        "glow-strong": "0 0 40px rgba(143, 0, 255, 0.45)",
      },
      backgroundImage: {
        'hero-gradient': "linear-gradient(to bottom, rgba(15, 8, 66, 0.9), rgba(13, 14, 16, 1))",
        'brand-gradient': "linear-gradient(90deg, #0f0842 0%, #4f04a1 50%, #8f00ff 100%)",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
