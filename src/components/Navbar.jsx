import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Globe, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

/**
 * Navegación principal responsiva.
 * Marca textual "Nomadix", enlaces de ruta, selector de idioma/moneda,
 * CTA en turquesa y menú hamburguesa en móvil (patrón del diseño base).
 */

const NAV_LINKS = [
  { label: 'Inicio', to: '/' },
  { label: 'Destinos', to: '/search' },
  { label: 'Tours', to: '/search?category=tour' },
  { label: 'Paquetes', to: '/search?category=paquete' },
  { label: 'Contacto', to: '/#contacto' },
]

const LANGUAGES = ['Español', 'English']
const CURRENCIES = ['MXN', 'USD', 'EUR']

function Selector() {
  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState('Español')
  const [currency, setCurrency] = useState('MXN')
  const ref = useRef(null)

  // Cierra el menú al hacer clic fuera o con Escape (accesibilidad básica)
  useEffect(() => {
    function onDown(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="flex items-center gap-1.5 rounded-lg border border-line px-3 py-2 text-sm font-medium text-ink transition hover:border-navy-700 hover:text-navy-700"
      >
        <Globe size={16} aria-hidden="true" />
        <span>
          {lang === 'Español' ? 'ES' : 'EN'} · {currency}
        </span>
        <ChevronDown size={14} className={open ? 'rotate-180 transition' : 'transition'} aria-hidden="true" />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 w-44 rounded-xl border border-line bg-white p-2 shadow-panel"
        >
          <p className="px-2 py-1 text-xs font-semibold text-muted">Idioma</p>
          {LANGUAGES.map((item) => (
            <button
              key={item}
              type="button"
              role="menuitemradio"
              aria-checked={lang === item}
              onClick={() => setLang(item)}
              className={`flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-sm transition hover:bg-surface ${
                lang === item ? 'font-semibold text-navy-700' : 'text-ink'
              }`}
            >
              {item}
              {lang === item && <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />}
            </button>
          ))}
          <p className="mt-2 px-2 py-1 text-xs font-semibold text-muted">Moneda</p>
          {CURRENCIES.map((item) => (
            <button
              key={item}
              type="button"
              role="menuitemradio"
              aria-checked={currency === item}
              onClick={() => setCurrency(item)}
              className={`flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-sm transition hover:bg-surface ${
                currency === item ? 'font-semibold text-navy-700' : 'text-ink'
              }`}
            >
              {item}
              {currency === item && <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function Brand() {
  return (
    <Link to="/" className="flex items-baseline gap-1" aria-label="Nomadix — ir al inicio">
      <span className="font-display text-2xl font-bold italic text-navy-700">Nomadix</span>
      <span className="h-1.5 w-1.5 rounded-full bg-orange-500" aria-hidden="true" />
    </Link>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname, search, hash } = useLocation()

  // El menú móvil se cierra desde los propios enlaces (onClick), sin efectos

  /**
   * Estado activo propio: compara ruta, query (?category=…) y ancla (#contacto)
   * para que cada enlace se ilumine solo cuando corresponde.
   */
  function activeFor(to) {
    const [pathPart, anchor] = to.split('#')
    const [path, linkSearch] = pathPart.split('?')
    if (path !== pathname) return false
    if (anchor) return hash === `#${anchor}`
    if (linkSearch) return search === `?${linkSearch}`
    return search === '' && !hash
  }

  const linkClass = (active) =>
    `text-[15px] font-medium transition hover:text-orange-500 ${active ? 'text-orange-500' : 'text-ink'}`

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="shell flex h-20 items-center justify-between gap-4">
        <Brand />

        {/* Escritorio */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={linkClass(activeFor(link.to))}
              aria-current={activeFor(link.to) ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Selector />
          <Link
            to="/#buscar"
            className="rounded-lg bg-aqua-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-aqua-600"
          >
            ¡Cotiza tu viaje!
          </Link>
        </div>

        {/* Móvil */}
        <div className="flex items-center gap-2 lg:hidden">
          <Selector />
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="rounded-lg border border-line p-2.5 text-navy-700 transition hover:bg-surface"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-line bg-white lg:hidden" aria-label="Principal móvil">
          <div className="shell flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-[15px] font-medium transition hover:bg-surface ${
                  activeFor(link.to) ? 'text-orange-500' : 'text-ink'
                }`}
                aria-current={activeFor(link.to) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/#buscar"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-lg bg-aqua-500 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-aqua-600"
            >
              ¡Cotiza tu viaje!
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
