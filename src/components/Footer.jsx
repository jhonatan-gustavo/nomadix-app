import { useState } from 'react'
import { AtSign, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from './SocialIcons'

/**
 * Footer completo: banda de newsletter (formulario funcional con estado de éxito),
 * columnas de enlaces y datos de contacto, y barra inferior de derechos.
 */

const EXPLORE_LINKS = [
  { label: 'Inicio', to: '/' },
  { label: 'Destinos', to: '/search' },
  { label: 'Tours', to: '/search?category=tour' },
  { label: 'Paquetes', to: '/search?category=paquete' },
]

const HELP_LINKS = [
  { label: 'Centro de ayuda', to: '/#contacto' },
  { label: 'Preguntas frecuentes', to: '/#contacto' },
  { label: 'Aviso de privacidad', to: '/#contacto' },
  { label: 'Términos y condiciones', to: '/#contacto' },
]

const SOCIALS = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'LinkedIn', Icon: LinkedinIcon },
]

// Se calcula una sola vez fuera del render para cumplir con reglas de pureza de React
const CURRENT_YEAR = new Date().getFullYear()

function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email.trim()) return
    setSent(true)
    setEmail('')
  }

  return (
    <section className="bg-navy-700 py-14 text-white" aria-labelledby="newsletter-title">
      <div className="shell grid items-center gap-8 md:grid-cols-2">
        <div>
          <h2 id="newsletter-title" className="font-display text-3xl font-bold italic text-white">
            Únete a nuestro newsletter
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-navy-100">
            Sé de los primeros en enterarte de ofertas exclusivas y descubre los destinos que mejor
            se adaptan a tu próximo viaje.
          </p>
        </div>

        {sent ? (
          <p className="flex items-center gap-2 rounded-xl bg-aqua-500/15 px-5 py-4 text-sm font-medium text-aqua-100 md:justify-self-end">
            <CheckCircle2 size={18} aria-hidden="true" />
            ¡Listo! Te enviaremos las ofertas a tu correo.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row md:justify-self-end">
            <label htmlFor="newsletter-email" className="sr-only">
              Correo electrónico
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              className="w-full rounded-lg border-0 px-4 py-3 text-sm text-ink shadow-sm ring-1 ring-transparent placeholder:text-muted focus:ring-2 focus:ring-orange-400 sm:w-72"
            />
            <button
              type="submit"
              className="rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
            >
              Suscribirme
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default function Footer() {
  return (
    <footer id="contacto" className="bg-navy-900 text-navy-100">
      <Newsletter />

      <div className="shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-bold italic text-white">Nomadix</p>
          <p className="mt-3 text-sm leading-relaxed">
            Agencia de viajes digital: paquetes, vuelos, tours y traslados para descubrir el mundo
            sin complicaciones.
          </p>
          <div className="mt-5 flex gap-3">
            {SOCIALS.map(({ label, Icon }) => (
              <a
                key={label}
                href="#contacto"
                aria-label={label}
                className="rounded-lg border border-navy-700 p-2.5 text-white transition hover:border-aqua-500 hover:bg-aqua-500"
              >
                <Icon size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Explora">
          <h3 className="font-display text-lg font-bold italic text-white">Explora</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {EXPLORE_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition hover:text-orange-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Ayuda">
          <h3 className="font-display text-lg font-bold italic text-white">Ayuda</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {HELP_LINKS.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="transition hover:text-orange-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-lg font-bold italic text-white">Contacto</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="shrink-0 text-aqua-400" aria-hidden="true" />
              <a href="tel:+525512345678" className="transition hover:text-orange-400">
                +52 55 1234 5678
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="shrink-0 text-aqua-400" aria-hidden="true" />
              <a href="mailto:hola@nomadix.mx" className="transition hover:text-orange-400">
                hola@nomadix.mx
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <AtSign size={16} className="mt-0.5 shrink-0 text-aqua-400" aria-hidden="true" />
              <span>@nomadix.travel</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-aqua-400" aria-hidden="true" />
              <span>Av. Reforma 123, CDMX, México</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-700">
        <div className="shell flex flex-col items-center justify-between gap-2 py-5 text-xs sm:flex-row">
          <p>© {CURRENT_YEAR} Nomadix. Proyecto de portafolio — todos los derechos reservados.</p>
          <p className="text-navy-400">Hecho con Vite, React y Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
