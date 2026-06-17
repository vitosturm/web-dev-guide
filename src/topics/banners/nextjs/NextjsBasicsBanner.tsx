export default function NextjsBasicsBanner() {
  const C = '#a3b4c6'
  return (
    <svg width="100%" viewBox="0 0 780 220" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', background: '#07101a' }}>
      <defs>
        <pattern id="dots-nb" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="13" cy="13" r="0.75" fill={`${C}18`} />
        </pattern>
        <radialGradient id="glow-nb" cx="50%" cy="50%" r="45%">
          <stop offset="0%" stopColor={C} stopOpacity="0.06" />
          <stop offset="100%" stopColor={C} stopOpacity="0" />
        </radialGradient>
        <marker id="arr-nb" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill={`${C}55`} />
        </marker>
      </defs>
      <rect width="780" height="220" fill="url(#dots-nb)" />
      <rect width="780" height="220" fill="url(#glow-nb)" />

      {/* ── Layer 1: Browser ── */}
      <rect x="18" y="16" width="530" height="40" rx="5" fill="#0d1e30" stroke={`${C}28`} strokeWidth="1.2" />
      <text x="30" y="32" fill={`${C}55`} fontSize="9" fontFamily="monospace" fontWeight="700">BROWSER</text>
      <text x="30" y="46" fill={`${C}33`} fontSize="8" fontFamily="monospace">renders HTML · handles events · manages history</text>
      {/* browser dots */}
      <circle cx="506" cy="28" r="3.5" fill={`${C}18`} stroke={`${C}33`} strokeWidth="1" />
      <circle cx="518" cy="28" r="3.5" fill={`${C}18`} stroke={`${C}33`} strokeWidth="1" />
      <circle cx="530" cy="28" r="3.5" fill={`${C}18`} stroke={`${C}33`} strokeWidth="1" />

      {/* ── Arrow: Browser → React Client ── */}
      <line x1="283" y1="56" x2="283" y2="67" stroke={`${C}44`} strokeWidth="1.2" markerEnd="url(#arr-nb)" />
      <text x="290" y="64" fill={`${C}33`} fontSize="7.5" fontFamily="monospace">hydrate</text>

      {/* ── Layer 2: React (Client) ── */}
      <rect x="18" y="68" width="530" height="40" rx="5" fill="#0a1c2e" stroke={`${C}30`} strokeWidth="1.2" />
      <text x="30" y="84" fill={`${C}66`} fontSize="9" fontFamily="monospace" fontWeight="700">REACT (CLIENT)</text>
      <text x="30" y="98" fill={`${C}33`} fontSize="8" fontFamily="monospace">useState · useEffect · Client Components · Event Handlers</text>
      {/* hydration chip */}
      <rect x="454" y="76" width="82" height="16" rx="3" fill={`${C}10`} stroke={`${C}30`} strokeWidth="1" />
      <text x="462" y="87" fill={`${C}55`} fontSize="7.5" fontFamily="monospace">hydration ↔</text>

      {/* ── Arrow: React Client → Next.js Server ── */}
      <line x1="283" y1="108" x2="283" y2="119" stroke={`${C}55`} strokeWidth="1.4" markerEnd="url(#arr-nb)" />
      <text x="290" y="116" fill={`${C}44`} fontSize="7.5" fontFamily="monospace">request / RSC</text>

      {/* ── Layer 3: Next.js (Server) — HIGHLIGHTED ── */}
      <rect x="18" y="120" width="530" height="44" rx="5" fill="#0e2236" stroke={C} strokeWidth="1.6" />
      <text x="30" y="137" fill={C} fontSize="9" fontFamily="monospace" fontWeight="700">NEXT.JS (SERVER)</text>
      <text x="30" y="151" fill={`${C}88`} fontSize="8" fontFamily="monospace">App Router · Server Components · Streaming · Server Actions</text>
      {/* active dot */}
      <circle cx="22" cy="133" r="3" fill={C} opacity="0.7" />
      {/* RSC label chip */}
      <rect x="438" y="128" width="96" height="14" rx="3" fill={`${C}14`} stroke={`${C}44`} strokeWidth="1" />
      <text x="446" y="138.5" fill={C} fontSize="7.5" fontFamily="monospace">Server Components</text>

      {/* ── Arrow: Next.js Server → Database ── */}
      <line x1="283" y1="164" x2="283" y2="175" stroke={`${C}44`} strokeWidth="1.2" markerEnd="url(#arr-nb)" />
      <text x="290" y="173" fill={`${C}33`} fontSize="7.5" fontFamily="monospace">fetch / ORM</text>

      {/* ── Layer 4: Database / APIs ── */}
      <rect x="18" y="176" width="530" height="36" rx="5" fill="#080f18" stroke={`${C}22`} strokeWidth="1.2" />
      <text x="30" y="191" fill={`${C}44`} fontSize="9" fontFamily="monospace" fontWeight="700">DATABASE / APIs</text>
      <text x="30" y="204" fill={`${C}28`} fontSize="8" fontFamily="monospace">PostgreSQL · REST · GraphQL · Edge KV · Third-party Services</text>

      {/* ── Right panel: feature chips ── */}
      <text x="762" y="26" fill={`${C}55`} fontSize="9" fontFamily="monospace" textAnchor="end" fontWeight="600">App Router Stack</text>
      <text x="762" y="37" fill={`${C}2a`} fontSize="7.5" fontFamily="monospace" textAnchor="end">Next.js 14+</text>

      {/* chip: App Router */}
      <rect x="562" y="52" width="100" height="22" rx="4" fill={`${C}0e`} stroke={`${C}40`} strokeWidth="1.2" />
      <text x="612" y="66" fill={`${C}99`} fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="600">App Router</text>

      {/* chip: Server Components */}
      <rect x="562" y="82" width="100" height="22" rx="4" fill={`${C}0e`} stroke={`${C}40`} strokeWidth="1.2" />
      <text x="612" y="96" fill={`${C}99`} fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="600">Server Comps</text>

      {/* chip: Streaming */}
      <rect x="562" y="112" width="100" height="22" rx="4" fill={`${C}12`} stroke={C} strokeWidth="1.4" />
      <text x="612" y="126" fill={C} fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="700">Streaming</text>

      {/* chip: Server Actions */}
      <rect x="562" y="142" width="100" height="22" rx="4" fill={`${C}0e`} stroke={`${C}40`} strokeWidth="1.2" />
      <text x="612" y="156" fill={`${C}99`} fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="600">Server Actions</text>

      {/* chip: File-system Routing */}
      <rect x="562" y="172" width="100" height="22" rx="4" fill={`${C}0e`} stroke={`${C}33`} strokeWidth="1" />
      <text x="612" y="186" fill={`${C}77`} fontSize="8.5" fontFamily="monospace" textAnchor="middle">FS Routing</text>

      {/* vertical connector line between chips */}
      <line x1="684" y1="63" x2="684" y2="184" stroke={`${C}18`} strokeWidth="1" strokeDasharray="3 3" />
    </svg>
  )
}
