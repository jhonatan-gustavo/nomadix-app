import { Compass } from 'lucide-react'
import { Link } from 'react-router-dom'

/** Página 404 con la misma identidad visual (título serif itálica + CTA naranja). */
export default function NotFound() {
  return (
    <section className="shell flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <Compass size={56} className="text-aqua-500" strokeWidth={1.5} aria-hidden="true" />
      <p className="mt-6 text-sm font-bold uppercase tracking-widest text-orange-500">Error 404</p>
      <h1 className="mt-2 text-4xl font-bold md:text-5xl">¿Te has perdido?</h1>
      <p className="mt-4 max-w-md leading-relaxed text-muted">
        La ruta que buscas no existe. Volvamos al inicio y planeamos tu próxima aventura.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-lg bg-orange-500 px-7 py-3 font-semibold text-white shadow-sm transition hover:bg-orange-600"
      >
        Volver al inicio
      </Link>
    </section>
  )
}
