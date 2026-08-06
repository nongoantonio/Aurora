interface IconProps {
  size?: number;
  className?: string;
}

export function ZapIcon({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ShieldIcon({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 21.5s7.5-3.6 7.5-9.6V5.4L12 2.5 4.5 5.4v6.5c0 6 7.5 9.6 7.5 9.6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="m9 12 2.2 2.2L15.5 9.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChartIcon({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 20V10M12 20V4M20 20v-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M2 20h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function CheckIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="m20 6-11 11-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlusIcon({ size = 14, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowRightIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SparkleIcon({ size = 14, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2c.5 3.7 1.8 5 5.5 5.5-3.7.5-5 1.8-5.5 5.5-.5-3.7-1.8-5-5.5-5.5C10.2 7 11.5 5.7 12 2Z" />
      <path d="M19 14c.3 1.9.9 2.5 2.8 2.8-1.9.3-2.5.9-2.8 2.8-.3-1.9-.9-2.5-2.8-2.8 1.9-.3 2.5-.9 2.8-2.8Z" />
    </svg>
  );
}

export function MenuIcon({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function XSocialIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.6 10.6 20.4 3h-1.9l-5.9 6.6L8 3H3l7.1 10L3 21h1.9l6.2-7 5 7h5l-7.3-10.4Zm-2.2 2.5-.7-1L5 4.6h2.3l4.6 6.4.7 1 6 8.4h-2.3l-4.9-6.9Z" />
    </svg>
  );
}

export function LinkedinIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3.3 8.9h3.4V21H3.3V8.9ZM9.5 8.9h3.26v1.66h.05c.45-.86 1.56-1.76 3.22-1.76 3.44 0 4.08 2.27 4.08 5.22V21h-3.4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9.5V8.9Z" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 3.5a8.4 8.4 0 0 0-7.2 12.7L3.5 20.5l4.4-1.3A8.4 8.4 0 1 0 12 3.5Zm0 1.6a6.8 6.8 0 1 1-3.5 12.6l-.25-.15-2.6.77.78-2.53-.16-.26A6.8 6.8 0 0 1 12 5.1Z" />
      <path d="M9 8.6c.2-.5.4-.5.6-.5h.5c.15 0 .35 0 .5.4.2.5.6 1.6.7 1.7.1.15.15.3.05.5-.1.2-.15.3-.3.45-.15.15-.3.3-.4.4-.15.15-.3.3-.15.55.15.25.7 1.15 1.5 1.85 1 .9 1.85 1.2 2.1 1.35.25.15.4.1.55-.05.15-.15.6-.7.75-.95.15-.25.3-.2.5-.1.2.05 1.3.6 1.5.7.2.1.35.15.4.25.05.1.05.55-.15 1.1-.2.5-1.15 1-1.6 1.05-.4.05-.9.1-3-.8-2.55-1.1-4.15-3.6-4.3-3.8-.15-.2-1-1.3-1-2.5s.6-1.75.85-2Z" />
    </svg>
  );
}

export function CloudLockIcon({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M7 17.5a4 4 0 0 1-.5-7.97 5 5 0 0 1 9.62-1.9A4.5 4.5 0 0 1 17.5 16"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="9.3" y="14.2" width="6.4" height="5.3" rx="1.3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10.7 14.2v-1.4a1.8 1.8 0 1 1 3.6 0v1.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function PeopleIcon({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="9" cy="8.2" r="2.8" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3.6 19c.5-3 2.7-4.7 5.4-4.7s4.9 1.7 5.4 4.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path
        d="M15.2 6c1.3.3 2.3 1.5 2.3 2.9 0 1.3-.85 2.4-2.05 2.8M17.8 14.6c2.1.5 3.6 1.9 4 4.4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CodeIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="m9 8-4 4 4 4M15 8l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

let auroraMarkUid = 0;

/**
 * Marca "A" da Aurora: duas hastes em gradiente (violeta / azul-ciano),
 * uma fita diagonal a atravessar (a substituir a barra do "A"), um mini
 * gráfico de barras na base e um brilho na ponta — inspirado no logótipo
 * de referência fornecido.
 */
export function AuroraMark({ size = 28, className }: IconProps) {
  const uid = ++auroraMarkUid;
  const gLeft = `aurora-left-${uid}`;
  const gRight = `aurora-right-${uid}`;
  const gSwoosh = `aurora-swoosh-${uid}`;
  const gBars = `aurora-bars-${uid}`;

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id={gLeft} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id={gRight} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <linearGradient id={gSwoosh} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="55%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <linearGradient id={gBars} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>

      {/* hastes do "A" */}
      <path d="M50 5 14 92h19L50 5Z" fill={`url(#${gLeft})`} />
      <path d="M50 5 86 92H67L50 5Z" fill={`url(#${gRight})`} />

      {/* mini gráfico de barras na base */}
      <rect x="40" y="75" width="5.5" height="10" rx="1.4" fill={`url(#${gBars})`} />
      <rect x="47.3" y="67" width="5.5" height="18" rx="1.4" fill={`url(#${gBars})`} />
      <rect x="54.6" y="57" width="5.5" height="28" rx="1.4" fill={`url(#${gBars})`} />

      {/* fita/swoosh diagonal */}
      <path
        d="M23 62c9 15 24 15 32-2 8-17 20-24 34-32"
        fill="none"
        stroke={`url(#${gSwoosh})`}
        strokeWidth="6.5"
        strokeLinecap="round"
      />

      {/* brilho na ponta */}
      <path
        d="M90 14 92.6 20 98.5 22.5 92.6 25 90 31 87.4 25 81.5 22.5 87.4 20Z"
        fill="#67e8f9"
      />
    </svg>
  );
}

/** Alias mantido por compatibilidade com código existente. */
export const AuroraLogo = AuroraMark;

export function SunIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2.5v2.4M12 19.1v2.4M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MoonIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M20.5 14.7A8.5 8.5 0 0 1 9.3 3.5a8.5 8.5 0 1 0 11.2 11.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GlobeIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9s1.3-6.4 3.8-9Z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
