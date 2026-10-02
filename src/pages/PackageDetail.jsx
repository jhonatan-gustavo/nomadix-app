import { useMemo, useState } from 'react'
import {
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  ShieldCheck,
  Star,
  Users,
} from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { destinations } from '../data/mock'

const GUEST_OPTIONS = ['1', '2', '3', '4', '5', '6']

function BookingPanel({ destination }) {
  const [dates, setDates] = useState('')
  const [guests, setGuests] = useState('2')
  const [reserved, setReserved] = useState(false)

  const originalPrice = Math.round(destination.priceFrom / (1 - destination.discount / 100))
  const total = destination.priceFrom * Number(guests)

  if (reserved) {
    return (
      <div className="rounded-2xl border border-aqua-500/40 bg-aqua-50 p-6 text-center shadow-card">
        <CheckCircle2 size={40} className="mx-auto text-aqua-600" aria-hidden="true" />
        <h2 className="mt-4 text-2xl font-bold">¡Solicitud enviada!</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Un asesor de Nomadix confirmará tu reserva de <strong>{destination.title}</strong> por{' '}
          {guests} {Number(guests) === 1 ? 'persona' : 'personas'} en las próximas 24 horas.
        </p>
        <Link
          to="/search"
          className="mt-6 inline-flex rounded-lg border border-navy-700/25 px-6 py-2.5 text-sm font-semibold text-navy-700 transition hover:bg-white"
        >
          Seguir explorando
        </Link>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-line bg-white p-6 shadow-panel">
      <p className="text-sm text-muted">Precio por persona</p>
      <div className="mt-1 flex flex-wrap items-baseline gap-3">
        <span className="text-4xl font-bold text-orange-500">
          ${destination.priceFrom.toLocaleString('es-MX')}
        </span>
        <span className="text-sm font-medium text-muted">MXN</span>
        <span className="text-sm text-muted line-through">
          ${originalPrice.toLocaleString('es-MX')}
        </span>
        <span className="rounded-full bg-orange-50 px-2.5 py-1 text-xs font-bold text-orange-600">
          −{destination.discount}%
        </span>
      </div>

      <dl className="mt-5 space-y-3 border-y border-line py-4 text-sm">
        <div className="flex items-center justify-between">
          <dt className="flex items-center gap-2 text-muted">
            <Clock size={16} aria-hidden="true" /> Duración
          </dt>
          <dd className="font-semibold text-ink">{destination.duration}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="flex items-center gap-2 text-muted">
            <Star size={16} className="fill-orange-500 text-orange-500" aria-hidden="true" />
            Calificación
          </dt>
          <dd className="font-semibold text-ink">
            {destination.rating} <span className="font-normal text-muted">({destination.reviews})</span>
          </dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="flex items-center gap-2 text-muted">
            <MapPin size={16} aria-hidden="true" /> Ubicación
          </dt>
          <dd className="font-semibold text-ink">{destination.location}</dd>
        </div>
      </dl>

      <form
        className="mt-5 space-y-4"
        onSubmit={(e) => {
          e.preventDefault()
          setReserved(true)
        }}
      >
        <div>
          <label htmlFor="booking-date" className="flex items-center gap-2 text-sm font-semibold text-ink">
            <CalendarDays size={16} aria-hidden="true" /> Fecha de inicio
          </label>
          <input
            id="booking-date"
            type="date"
            required
            value={dates}
            onChange={(e) => setDates(e.target.value)}
            className="mt-2 w-full rounded-lg border border-line px-3 py-2.5 text-sm outline-none transition [color-scheme:light] focus:border-navy-700"
          />
        </div>

        <div>
          <label htmlFor="booking-guests" className="flex items-center gap-2 text-sm font-semibold text-ink">
            <Users size={16} aria-hidden="true" /> Pasajeros
          </label>
          <select
            id="booking-guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="mt-2 w-full rounded-lg border border-line px-3 py-2.5 text-sm outline-none transition focus:border-navy-700"
          >
            {GUEST_OPTIONS.map((n) => (
              <option key={n} value={n}>
                {n} {Number(n) === 1 ? 'persona' : 'personas'}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center justify-between rounded-lg bg-surface px-4 py-3">
          <span className="text-sm text-muted">Total estimado</span>
          <span className="text-xl font-bold text-navy-700">
            ${total.toLocaleString('es-MX')} <span className="text-sm font-medium">MXN</span>
          </span>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-orange-500 px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-orange-600"
        >
          Reservar ahora
        </button>
        <a
          href="mailto:hola@nomadix.mx"
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-navy-700/25 px-6 py-3 text-sm font-semibold text-navy-700 transition hover:bg-navy-50"
        >
          <Mail size={16} aria-hidden="true" /> Contactar a un asesor
        </a>
      </form>

      <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted">
        <ShieldCheck size={14} className="text-aqua-600" aria-hidden="true" />
        Cancelación gratuita hasta 48 horas antes
      </p>
    </div>
  )
}

export default function PackageDetail() {
  const { id } = useParams()
  const destination = destinations.find((d) => d.id === id)
  const [activeImage, setActiveImage] = useState(0)

  const gallery = useMemo(() => destination?.images ?? [], [destination])

  if (!destination) {
    return (
      <section className="shell py-24 text-center">
        <h1 className="text-4xl font-bold">Paquete no encontrado</h1>
        <p className="mx-auto mt-3 max-w-md text-muted">
          El viaje que buscas ya no está disponible o el enlace es incorrecto.
        </p>
        <Link
          to="/search"
          className="mt-8 inline-flex rounded-lg bg-orange-500 px-7 py-3 font-semibold text-white transition hover:bg-orange-600"
        >
          Ver todos los destinos
        </Link>
      </section>
    )
  }

  return (
    <section className="py-8 md:py-10">
      <div className="shell">
        {/* Migas de pan */}
        <nav aria-label="Migas de pan" className="flex items-center gap-1.5 text-sm text-muted">
          <Link to="/" className="transition hover:text-orange-500">
            Inicio
          </Link>
          <ChevronRight size={14} aria-hidden="true" />
          <Link to="/search" className="transition hover:text-orange-500">
            Destinos
          </Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span className="font-medium text-ink">{destination.title}</span>
        </nav>

        {/* Encabezado */}
        <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="rounded-full bg-aqua-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-aqua-700">
              {destination.category}
            </span>
            <h1 className="mt-3 text-4xl font-bold md:text-5xl">{destination.title}</h1>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-muted">
              <MapPin size={15} aria-hidden="true" /> {destination.location}
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-surface px-4 py-2.5 text-sm">
            <Star size={16} className="fill-orange-500 text-orange-500" aria-hidden="true" />
            <span className="font-semibold">{destination.rating}</span>
            <span className="text-muted">({destination.reviews} reseñas)</span>
          </div>
        </div>

        {/* Galería */}
        <div className="mt-6 grid gap-3 md:grid-cols-3 md:grid-rows-2">
          <button
            type="button"
            onClick={() => setActiveImage((i) => (i + 1) % gallery.length)}
            className="group relative col-span-2 h-64 overflow-hidden rounded-xl md:row-span-2 md:h-full"
            aria-label="Ampliar foto"
          >
            <img
              src={gallery[activeImage]}
              alt={`${destination.title} — foto principal`}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute bottom-3 right-3 rounded-lg bg-navy-900/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
              {activeImage + 1} / {gallery.length}
            </span>
          </button>
          {gallery.map((src, i) =>
            i === activeImage ? null : (
              <button
                key={src}
                type="button"
                onClick={() => setActiveImage(i)}
                className="h-48 overflow-hidden rounded-xl md:h-full"
                aria-label={`Ver foto ${i + 1}`}
              >
                <img
                  src={src}
                  alt={`${destination.title} — foto ${i + 1}`}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </button>
            ),
          )}
        </div>

        {/* Contenido + panel lateral sticky */}
        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1fr_360px]">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Descripción</h2>
              <div className="title-rule ml-0" aria-hidden="true" />
              <p className="mt-4 max-w-3xl leading-relaxed text-muted">{destination.description}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Qué incluye</h2>
              <div className="title-rule ml-0" aria-hidden="true" />
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {destination.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-ink">
                    <CheckCircle2 size={17} className="shrink-0 text-aqua-600" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Itinerario</h2>
              <div className="title-rule ml-0" aria-hidden="true" />
              <ol className="mt-6 space-y-6 border-l-2 border-navy-100 pl-6">
                {destination.itinerary.map((step, i) => (
                  <li key={step.day + i} className="relative">
                    <span
                      className="absolute -left-[31px] top-0 flex h-5 w-5 items-center justify-center rounded-full bg-navy-700 text-[10px] font-bold text-white"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <p className="text-xs font-bold uppercase tracking-wide text-orange-500">
                      {step.day}
                    </p>
                    <h3 className="mt-1 text-xl font-bold">{step.title}</h3>
                    <p className="mt-1 max-w-3xl text-sm leading-relaxed text-muted">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24">
            <BookingPanel destination={destination} />
          </aside>
        </div>
      </div>
    </section>
  )
}
