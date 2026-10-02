/**
 * Nomadix — Design tokens
 * Extraídos del diseño de referencia "Good travel v2" (Figma):
 * - Azul marino #27327F: fondos principales (banda de búsqueda, paneles, títulos)
 * - Turquesa #1DAA87: acento, estados positivos, CTAs secundarios
 * - Naranja #FA8B02 / #F49D5A: llamados a la acción, precios y descuentos
 * - Neutros: texto #333333, secundario #666666, superficies #F8F8F8, líneas #E6E6E6
 * - Tipografía: Poppins (UI/cuerpo) + Playfair Display italic (títulos decorativos)
 *
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Azul marino / fondo principal
        navy: {
          50: '#F1F2F9',
          100: '#E4E5EF',
          400: '#5D659F',
          600: '#343F87',
          700: '#27327F', // base
          800: '#233474',
          900: '#17144C',
        },
        // Turquesa / cian de acento
        aqua: {
          50: '#E8F8F4',
          100: '#CFF0E7',
          400: '#26B390',
          500: '#1DAA87', // base
          600: '#158F70',
          700: '#117563',
          800: '#2B8089',
        },
        // Naranja: CTAs, precios, alertas y descuentos
        orange: {
          50: '#FEF3E7',
          100: '#FDDFBF',
          300: '#F5B483',
          400: '#F49D5A', // relleno suave de botones
          500: '#FA8B02', // acento fuerte
          600: '#E07A00',
          soft: '#F49D5A',
        },
        // Tierra: apoyo cromático (acentos editoriales)
        sand: {
          DEFAULT: '#986A5D',
          light: '#B08574',
        },
        // Neutros semánticos
        ink: '#333333', // texto principal
        muted: '#666666', // texto secundario
        surface: '#F8F8F8', // fondos de tarjeta
        line: '#E6E6E6', // bordes y divisores
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 4px 20px rgba(23, 20, 76, 0.08)',
        nav: '0 6px 24px rgba(23, 20, 76, 0.10)',
        panel: '0 12px 40px rgba(23, 20, 76, 0.16)',
      },
      maxWidth: {
        shell: '1200px',
      },
    },
  },
  plugins: [],
}
