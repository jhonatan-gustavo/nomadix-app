import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Ruta base requerida para desplegar en GitHub Pages bajo /nomadix-app/
  base: '/nomadix-app/',
  plugins: [react()],
})
