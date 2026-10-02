import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Las rutas definitivas (Home, Search, PackageDetail) se integran en la Fase 4.
// Este esqueleto mantiene el enrutamiento operativo desde la Fase 1.
function Placeholder({ title }) {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-6xl items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-slate-800">{title}</h1>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Placeholder title="Nomadix — Home" />} />
        <Route path="/search" element={<Placeholder title="Nomadix — Búsqueda" />} />
        <Route path="/package/:id" element={<Placeholder title="Nomadix — Detalle" />} />
        <Route path="*" element={<Placeholder title="Página no encontrada" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
