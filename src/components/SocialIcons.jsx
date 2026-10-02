/**
 * Marcas sociales dibujadas como SVG (lucide-react v1 ya no incluye
 * iconos de marca). Estilo coherente con lucide: trazo 2px, extremos redondos.
 */

export function FacebookIcon({ size = 16, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M14.5 8.5h-1.2c-.9 0-1.3.5-1.3 1.3V11H14l-.3 2.2h-1.8V19" />
      <path d="M10.2 11h3.7" />
    </svg>
  )
}

export function InstagramIcon({ size = 16, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function LinkedinIcon({ size = 16, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M8 11v5.5" />
      <circle cx="8" cy="8" r="0.9" fill="currentColor" stroke="none" />
      <path d="M11.8 16.5v-3.4c0-1.1.7-1.9 1.8-1.9s1.8.8 1.8 1.9v3.4" />
      <path d="M11.8 11.4v5.1" />
    </svg>
  )
}
