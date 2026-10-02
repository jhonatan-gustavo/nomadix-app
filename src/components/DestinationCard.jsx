import { ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

/**
 * Tarjeta de destino reutilizable (Home, /search, ofertas).
 * Muestra imagen con badge de descuento, título, ubicación, precio y rating.
 *
 * Prop: destination — objeto de src/data/mock.js
 */
export default function DestinationCard({ destination }) {
  const { id, title, location, priceFrom, discount, rating, image, description } = destination

  return (
    <Link
      to={`/package/${id}`}
      className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-panel"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Badge de descuento sobre degradado marino (patrón del diseño) */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-900/90 via-navy-900/45 to-transparent px-4 pb-3 pt-12">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-white/90">Hasta</p>
          <p className="text-3xl font-bold leading-none text-white">{discount}%</p>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-white/90">
            de descuento
          </p>
        </div>

        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-navy-700 shadow-sm">
          <Star size={12} className="fill-orange-500 text-orange-500" aria-hidden="true" />
          {rating}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-5">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-xs font-medium text-aqua-600">{location}</p>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted">{description}</p>

        <div className="mt-auto flex items-end justify-between pt-3">
          <p className="text-xs text-muted">
            desde{' '}
            <span className="block text-lg font-semibold text-orange-500">
              ${priceFrom.toLocaleString('es-MX')} MXN
            </span>
          </p>
          <span className="flex items-center gap-1.5 text-sm font-semibold text-orange-500">
            Ver paquete
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </Link>
  )
}
