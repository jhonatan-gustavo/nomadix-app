// Copia dist/index.html a dist/404.html para que GitHub Pages sirva la SPA
// en rutas profundas (/search, /package/:id) sin perder el router.
import { copyFileSync } from 'node:fs'

copyFileSync('dist/index.html', 'dist/404.html')
console.log('✓ dist/404.html creado (fallback de rutas para GitHub Pages)')
