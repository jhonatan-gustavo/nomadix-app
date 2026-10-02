import { useMemo, useState } from 'react'
import { SlidersHorizontal, X } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import DestinationCard from '../components/DestinationCard'
import SearchEngine from '../components/SearchEngine'
import { categories, destinations } from '../data/mock'

const SORT_OPTIONS = [
  { value: 'relevant', label: 'Más relevantes' },
  { value: 'price-asc', label: 'Precio: menor a mayor' },
  { value: 'price-desc', label: 'Precio: mayor a menor' },
  { value: 'discount', label: 'Mayor descuento' },
]

const MAX_PRICE = 25000

function FilterPanel({ filters, setFilters, onReset }) {
  const toggleCategory = (value) => {
    setFilters((f) => ({
      ...f,
      categories: f.categories.includes(value)
        ? f.categories.filter((c) => c !== value)
        : [...f.categories, value],
    }))
  }

  return (
    <div className="space-y-6 rounded-xl border border-line bg-white p-5 shadow-card">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Filtros</h2>
        <button
          type="button"
          onClick={onReset}
          className="text-xs font-semibold text-orange-500 transition hover:text-orange-600"
        >
          Limpiar
        </button>
      </div>

      <div>
        <label htmlFor="filter-destination" className="text-sm font-semibold text-ink">
          Destino
        </label>
        <input
          id="filter-destination"
          type="text"
          value={filters.destination}
          onChange={(e) => setFilters((f) => ({ ...f, destination: e.target.value }))}
          placeholder="Ciudad o país"
          className="mt-2 w-full rounded-lg border border-line px-3 py-2.5 text-sm outline-none transition focus:border-navy-700"
        />
      </div>

      <fieldset>
        <legend className="text-sm font-semibold text-ink">Categoría</legend>
        <div className="mt-2 space-y-2">
          {categories.map(({ value, label }) => (
            <label key={value} className="flex cursor-pointer items-center gap-2.5 text-sm text-ink">
              <input
                type="checkbox"
                checked={filters.categories.includes(value)}
                onChange={() => toggleCategory(value)}
                className="h-4 w-4 rounded border-line accent-orange-500"
              />
              {label}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="filter-price" className="text-sm font-semibold text-ink">
            Precio máximo
          </label>
          <span className="text-xs font-semibold text-orange-500">
            ${filters.maxPrice.toLocaleString('es-MX')} MXN
          </span>
        </div>
        <input
          id="filter-price"
          type="range"
          min={1000}
          max={MAX_PRICE}
          step={500}
          value={filters.maxPrice}
          onChange={(e) => setFilters((f) => ({ ...f, maxPrice: Number(e.target.value) }))}
          className="mt-3 w-full accent-orange-500"
        />
      </div>

      <div>
        <label htmlFor="filter-rating" className="text-sm font-semibold text-ink">
          Calificación mínima
        </label>
        <select
          id="filter-rating"
          value={filters.minRating}
          onChange={(e) => setFilters((f) => ({ ...f, minRating: Number(e.target.value) }))}
          className="mt-2 w-full rounded-lg border border-line px-3 py-2.5 text-sm outline-none transition focus:border-navy-700"
        >
          <option value={0}>Cualquiera</option>
          <option value={4}>4.0 o más</option>
          <option value={4.5}>4.5 o más</option>
          <option value={4.7}>4.7 o más</option>
        </select>
      </div>
    </div>
  )
}

export default function Search() {
  const [searchParams] = useSearchParams()

  const [filters, setFilters] = useState({
    destination: searchParams.get('destination') ?? '',
    categories: searchParams.get('category') ? [searchParams.get('category')] : [],
    maxPrice: MAX_PRICE,
    minRating: 0,
  })
  const [sort, setSort] = useState('relevant')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  function resetFilters() {
    setFilters({ destination: '', categories: [], maxPrice: MAX_PRICE, minRating: 0 })
  }

  const results = useMemo(() => {
    const q = filters.destination.trim().toLowerCase()
    const filtered = destinations.filter((d) => {
      const matchesText =
        !q || d.title.toLowerCase().includes(q) || d.location.toLowerCase().includes(q)
      const matchesCategory = filters.categories.length === 0 || filters.categories.includes(d.category)
      const matchesPrice = d.priceFrom <= filters.maxPrice
      const matchesRating = d.rating >= filters.minRating
      return matchesText && matchesCategory && matchesPrice && matchesRating
    })

    const sorted = [...filtered]
    if (sort === 'price-asc') sorted.sort((a, b) => a.priceFrom - b.priceFrom)
    if (sort === 'price-desc') sorted.sort((a, b) => b.priceFrom - a.priceFrom)
    if (sort === 'discount') sorted.sort((a, b) => b.discount - a.discount)
    return sorted
  }, [filters, sort])

  return (
    <>
      {/* Banda de búsqueda superior */}
      <section className="bg-navy-700 py-10">
        <div className="shell">
          <h1 className="mb-6 text-center text-3xl font-bold text-white md:text-4xl">
            Encuentra tu próximo destino
          </h1>
          <SearchEngine />
        </div>
      </section>

      <section className="py-10">
        <div className="shell grid items-start gap-8 lg:grid-cols-[280px_1fr]">
          {/* Sidebar de filtros */}
          <aside className="hidden lg:sticky lg:top-24 lg:block">
            <FilterPanel filters={filters} setFilters={setFilters} onReset={resetFilters} />
          </aside>

          {/* Filtros en móvil */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen((v) => !v)}
              aria-expanded={mobileFiltersOpen}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-line bg-white px-4 py-3 text-sm font-semibold text-navy-700 shadow-sm"
            >
              {mobileFiltersOpen ? <X size={16} /> : <SlidersHorizontal size={16} />}
              {mobileFiltersOpen ? 'Ocultar filtros' : 'Mostrar filtros'}
            </button>
            {mobileFiltersOpen && (
              <div className="mt-4">
                <FilterPanel filters={filters} setFilters={setFilters} onReset={resetFilters} />
              </div>
            )}
          </div>

          {/* Resultados */}
          <div>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted">
                <span className="font-semibold text-ink">{results.length}</span>{' '}
                {results.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}
              </p>
              <label className="flex items-center gap-2 text-sm">
                <span className="text-muted">Ordenar por</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="rounded-lg border border-line bg-white px-3 py-2 text-sm font-medium outline-none transition focus:border-navy-700"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {results.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {results.map((destination) => (
                  <DestinationCard key={destination.id} destination={destination} />
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-line bg-surface px-6 py-14 text-center">
                <h2 className="text-2xl font-bold">Sin resultados por ahora</h2>
                <p className="mx-auto mt-2 max-w-md text-sm text-muted">
                  No encontramos viajes que coincidan con esos filtros. Prueba con otro destino o
                  amplía el rango de precio.
                </p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-6 rounded-lg bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
