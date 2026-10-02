import { useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  CreditCard,
  FerrisWheel,
  HeartHandshake,
  Hotel,
  Luggage,
  Plane,
  ReceiptText,
  Ticket,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import DestinationCard from '../components/DestinationCard'
import SearchEngine from '../components/SearchEngine'
import { destinations, featuredDestinations } from '../data/mock'

/** Título decorativo de sección: serif itálica + subrayado degradado (patrón del diseño) */
function SectionTitle({ children, id }) {
  return (
    <div className="text-center">
      <h2 id={id} className="text-3xl font-bold md:text-4xl">
        {children}
      </h2>
      <div className="title-rule mx-auto" aria-hidden="true" />
    </div>
  )
}

const SERVICE_ITEMS = [
  { icon: Hotel, label: 'Paquetes con vuelos y hospedaje' },
  { icon: FerrisWheel, label: 'Tours y Actividades' },
  { icon: Plane, label: 'Vuelos Redondos y Sencillos' },
  { icon: Ticket, label: 'Traslado y Renta de Autos' },
]

const REASONS = [
  { icon: Luggage, title: 'Precios exclusivos', text: 'Tarifas únicas y ofertas especiales que no encuentras en ningún otro lado.' },
  { icon: HeartHandshake, title: 'Agencia confiable', text: 'Años de experiencia cuidando cada detalle de tu viaje, de principio a fin.' },
  { icon: ReceiptText, title: 'Facturación en línea', text: 'Genera tus facturas al instante desde cualquier dispositivo, sin filas.' },
  { icon: CreditCard, title: 'Métodos de pago', text: 'Paga con las principales tarjetas de crédito y débito de forma segura.' },
]

const DESTINO_TILES = [
  { name: 'Cancún', count: 24, image: featuredDestinations[0].image },
  { name: 'Tulum', count: 12, image: destinations[3].image },
  { name: 'Riviera Maya', count: 18, image: destinations[5].image },
  { name: 'Europa', count: 9, image: destinations[4].image },
]

function Hero() {
  const slides = featuredDestinations
  const [index, setIndex] = useState(0)
  const current = slides[index]

  const go = (step) => setIndex((i) => (i + step + slides.length) % slides.length)

  return (
    <section className="pt-10 md:pt-14">
      <div className="shell text-center">
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          <span className="text-orange-500">Explora</span>, <span className="text-navy-700">Sueña</span>,{' '}
          <span className="text-aqua-500">Descubre</span>
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
          Consigue el mejor paquete que incluye hospedaje, vuelos, traslado y tours y vive
          experiencias inolvidables.
        </p>
        <Link
          to="/#buscar"
          className="mt-7 inline-flex rounded-lg border border-navy-700/25 bg-orange-400 px-7 py-3 font-semibold text-navy-700 shadow-sm transition hover:bg-orange-300"
        >
          Cotiza tu próximo gran viaje
        </Link>
      </div>

      {/* Carrusel del hero (flechas y puntos interactivos) */}
      <div className="shell mt-9">
        <div className="group relative overflow-hidden rounded-2xl shadow-card">
          <div className="relative aspect-[16/9] md:aspect-[21/9]">
            {slides.map((slide, i) => (
              <img
                key={slide.id}
                src={slide.image}
                alt={slide.title}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  i === index ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-900/70 to-transparent px-4 pb-16 pt-24 md:pb-20">
              <div className="mb-3 flex justify-center gap-2">
                {slides.map((slide, i) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Ver ${slide.title}`}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? 'w-6 bg-orange-400' : 'w-2 bg-white/70 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
              <p className="text-center font-display text-2xl font-bold italic text-white md:text-3xl">
                {current.title}
              </p>
              <div
                className="mx-auto mt-2 h-0.5 w-32 bg-gradient-to-r from-orange-400 via-sand-light to-aqua-400"
                aria-hidden="true"
              />
            </div>

            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Imagen anterior"
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/25 p-2.5 text-white backdrop-blur transition hover:bg-white/40"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Imagen siguiente"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/25 p-2.5 text-white backdrop-blur transition hover:bg-white/40"
            >
              <ChevronRight size={22} />
            </button>

          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const ofertas = featuredDestinations

  return (
    <>
      <Hero />

      {/* Banda marino con la barra de búsqueda superpuesta sobre el hero */}
      <section id="buscar" className="bg-navy-700 pb-10 pt-10">
        <div className="shell">
          <SearchEngine className="relative z-10 -mt-24" />
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16">
        <div className="shell">
          <SectionTitle>Nuestros Servicios</SectionTitle>
          <div className="mt-10 grid gap-8 rounded-2xl bg-navy-700 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICE_ITEMS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-4 text-center">
                <Icon size={44} className="text-orange-400" strokeWidth={1.6} aria-hidden="true" />
                <p className="font-display text-lg font-semibold italic text-white">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ofertas con DestinationCard */}
      <section id="ofertas" className="pb-16">
        <div className="shell">
          <SectionTitle>Nuestros paquetes</SectionTitle>
          <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-relaxed text-muted md:text-base">
            ¡Bienvenido a la aventura de tus sueños! Descubre nuestros exclusivos paquetes turísticos
            con experiencias inolvidables a precios que te harán sonreír.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ofertas.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/search"
              className="inline-flex rounded-lg bg-aqua-500 px-7 py-3 font-semibold text-white shadow-sm transition hover:bg-aqua-600"
            >
              Ver más paquetes
            </Link>
          </div>
        </div>
      </section>

      {/* Grilla de destinos */}
      <section className="bg-surface py-16">
        <div className="shell">
          <SectionTitle>Destinos destacados</SectionTitle>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {DESTINO_TILES.map((tile) => (
              <Link
                key={tile.name}
                to={`/search?destination=${encodeURIComponent(tile.name)}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-card"
              >
                <img
                  src={tile.image}
                  alt={tile.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy-900/85 via-navy-900/25 to-transparent p-5">
                  <p className="font-display text-2xl font-bold italic text-white">{tile.name}</p>
                  <p className="text-sm text-white/85">{tile.count} experiencias disponibles</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section id="nosotros" className="py-16">
        <div className="shell">
          <SectionTitle>¿Por qué elegirnos?</SectionTitle>
          <div className="mt-10 grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {REASONS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
