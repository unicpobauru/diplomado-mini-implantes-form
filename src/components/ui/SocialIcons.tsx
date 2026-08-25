interface IconProps {
  className?: string;
}

/** Minimal outline glyphs — kept generic/geometric rather than pulling brand-mark packages. */

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.75" />
      <path d="M8 10.5V17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <circle cx="8" cy="7.2" r="1" fill="currentColor" />
      <path
        d="M12 17v-4.2c0-1.3 1-2.3 2.2-2.3s2.1 1 2.1 2.3V17"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="2.5" y="6" width="19" height="12" rx="4" stroke="currentColor" strokeWidth="1.75" />
      <path d="M10.5 9.7L14.8 12L10.5 14.3V9.7Z" fill="currentColor" />
    </svg>
  );
}

/** Colores fijos de marca (no `currentColor`) — así se reconoce como WhatsApp en cualquier botón, claro u oscuro. */
export function WhatsappIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 3.5a8.5 8.5 0 0 0-7.35 12.76L3.5 20.5l4.36-1.14A8.5 8.5 0 1 0 12 3.5Z"
        fill="#25D366"
      />
      <path
        d="M8.7 8.4c.2-.45.4-.46.6-.47h.5c.16 0 .38-.06.6.45s.72 1.76.78 1.9c.06.13.1.28.02.45s-.13.28-.26.43-.28.34-.4.46c-.13.13-.27.27-.12.53.15.27.68 1.13 1.47 1.83 1.01.9 1.86 1.18 2.13 1.31.27.13.43.11.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.22.6-.13.25.09 1.58.75 1.85.88.27.13.45.2.51.31.07.11.07.63-.15 1.24-.22.6-1.3 1.18-1.8 1.21-.5.03-.5.39-3.14-.69-2.64-1.08-4.19-3.69-4.31-3.87-.12-.18-.99-1.32-.99-2.52 0-1.2.63-1.79.85-2.03Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}
