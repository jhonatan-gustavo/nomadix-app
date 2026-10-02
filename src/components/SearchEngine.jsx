import { useState } from 'react'
import { CalendarDays, ChevronDown, MapPin, Search, Users } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

/**
 * Barra de búsqueda de viajes (destino, fechas y pasajeros).
 * Réplica del panel blanco con divisores y botón naranja del diseño base.
 * Se usa sobre la banda azul marino del Home y de la vista /search.
 *
 * Props:
 * - onSearch: opcional; si se omite, navega a /search con los parámetros.
 * - className: clases extra para posicionar el panel (ej. bandas o sticky).
 */

const GUEST_OPTIONS = ['1', '2', '3', '4', '5', '6', '7', '8+']

function Field({ icon: Icon, label, children }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3.5 md:px-5">
      <Icon size={20} className="shrink-0 text-ink" aria-hidden="true" />
      <div className="min-w-0 flex-1">
        <label className="block text-[15px] font-semibold leading-tight text-ink">{label}</label>
        {children}
      </div>
    </div>
  )
}

const controlClass =
  'w-full border-0 bg-transparent p-0 text-sm text-muted outline-none placeholder:text-muted focus:ring-0'

export default function SearchEngine({ onSearch, className = '' }) {
  const navigate = useNavigate()
  const [destination, setDestination] = useState('')
  const [dates, setDates] = useState('')
  const [guests, setGuests] = useState('2')

  function handleSubmit(e) {
    e.preventDefault()
    const params = new URLSearchParams()
    if (destination) params.set('destination', destination)
    if (dates) params.set('dates', dates)
    params.set('guests', guests)

    if (onSearch) {
      onSearch({ destination, dates, guests })
    } else {
      navigate(`/search?${params.toString()}`)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      aria-label="Buscar viajes"
      className={`rounded-2xl bg-white shadow-panel ${className}`}
    >
      <div className="grid divide-y divide-line md:grid-cols-[1.3fr_1fr_0.8fr_auto] md:divide-x md:divide-y-0">
        <Field icon={MapPin} label="Destino">
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="¿A dónde quieres ir?"
            className={controlClass}
          />
        </Field>

        <Field icon={CalendarDays} label="Fechas">
          <input
            type="date"
            value={dates}
            onChange={(e) => setDates(e.target.value)}
            aria-label="Fecha del viaje"
            className={`${controlClass} [color-scheme:light]`}
          />
        </Field>

        <Field icon={Users} label="Pasajeros">
          <div className="relative">
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              aria-label="Número de pasajeros"
              className={`${controlClass} appearance-none pr-6`}
            >
              {GUEST_OPTIONS.map((n) => (
                <option key={n} value={n}>
                  {n} personas
                </option>
              ))}
            </select>
            <ChevronDown
              size={14}
              className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-muted"
              aria-hidden="true"
            />
          </div>
        </Field>

        <div className="p-3 md:pl-3 md:pr-4">
          <button
            type="submit"
            aria-label="Buscar viajes"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 font-semibold text-white transition hover:bg-orange-600 md:h-14 md:w-14"
          >
            <Search size={20} aria-hidden="true" />
            <span className="md:hidden">Buscar</span>
          </button>
        </div>
      </div>
    </form>
  )
}
