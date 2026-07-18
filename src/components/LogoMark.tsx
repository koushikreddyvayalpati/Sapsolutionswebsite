export default function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      aria-hidden="true"
      focusable="false"
      role="img"
    >
      <defs>
        <linearGradient id="nexusMarkSurface" x1="8" x2="40" y1="7" y2="42">
          <stop offset="0" stopColor="#2F6DF6" />
          <stop offset="0.54" stopColor="#1748B7" />
          <stop offset="1" stopColor="#07111F" />
        </linearGradient>
        <linearGradient id="nexusMarkSignal" x1="14" x2="36" y1="14" y2="34">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#BFD7FF" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill="url(#nexusMarkSurface)" />
      <rect
        x="7.5"
        y="7.5"
        width="33"
        height="33"
        rx="8"
        fill="none"
        stroke="rgba(255,255,255,.36)"
      />
      <path
        d="M14.5 30.5L21.5 20.5L28 27.5L34 17.5"
        fill="none"
        stroke="url(#nexusMarkSignal)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.2"
      />
      <path
        d="M16 33.5H31.5L36 27.5"
        fill="none"
        stroke="rgba(255,255,255,.42)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <circle cx="14.5" cy="30.5" r="2.35" fill="#D8E7FF" />
      <circle cx="21.5" cy="20.5" r="2.35" fill="#FFFFFF" />
      <circle cx="28" cy="27.5" r="2.35" fill="#BFD7FF" />
      <circle cx="34" cy="17.5" r="2.35" fill="#FFFFFF" />
      <circle cx="36" cy="27.5" r="1.85" fill="#8FB7FF" />
    </svg>
  );
}
