import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import PackageDetail from './pages/PackageDetail'
import Search from './pages/Search'

// Ruta base de Vite ('/nomadix-app/' en GitHub Pages, '/' en local).
// React Router la necesita sin barra final para no duplicar segmentos.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

/**
 * Rutas de la SPA:
 * - /               Home (hero + buscador + ofertas + destinos)
 * - /search         Catálogo con filtros
 * - /package/:id    Detalle del paquete
 * - *               Página no encontrada
 */
export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/package/:id" element={<PackageDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
