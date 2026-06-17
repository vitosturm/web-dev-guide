export default function NextjsLayoutsBanner() {
  const C = '#a3b4c6'
  return (
    <svg width="100%" viewBox="0 0 780 220" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', background: '#07101a' }}>
      <defs>
        <pattern id="dots-nl" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="13" cy="13" r="0.75" fill={`${C}18`} />
        </pattern>
        <radialGradient id="glow-nl" cx="50%" cy="50%" r="45%">
          <stop offset="0%" stopColor={C} stopOpacity="0.06" />
          <stop offset="100%" stopColor={C} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="780" height="220" fill="url(#dots-nl)" />
      <rect width="780" height="220" fill="url(#glow-nl)" />

      {/* ── Outermost frame: RootLayout ── */}
      <rect x="16" y="12" width="578" height="174" rx="7" fill={`${C}06`} stroke={`${C}55`} strokeWidth="1.8" />
      <text x="24" y="26" fill={C} fontSize="9.5" fontFamily="monospace" fontWeight="700">RootLayout</text>
      <text x="24" y="38" fill={`${C}66`} fontSize="8" fontFamily="monospace">{'<html><body>'}</text>

      {/* ── Middle frame: DashboardLayout ── */}
      <rect x="42" y="50" width="422" height="122" rx="6" fill={`${C}07`} stroke={`${C}44`} strokeWidth="1.5" />
      <text x="50" y="64" fill={C} fontSize="9.5" fontFamily="monospace" fontWeight="700">DashboardLayout</text>
      <text x="50" y="76" fill={`${C}55`} fontSize="8" fontFamily="monospace">shared across child pages</text>

      {/* ── Inner frame: page.tsx ── */}
      <rect x="70" y="88" width="274" height="72" rx="5" fill={`${C}08`} stroke={`${C}33`} strokeWidth="1.4" strokeDasharray="6 3" />
      <text x="78" y="102" fill={`${C}99`} fontSize="9.5" fontFamily="monospace" fontWeight="700">page.tsx</text>
      <text x="78" y="115" fill={`${C}55`} fontSize="8.5" fontFamily="monospace">{'export default function Page() {'}</text>
      <text x="78" y="128" fill={`${C}44`} fontSize="8.5" fontFamily="monospace">{'  return <main>...</main>'}</text>
      <text x="78" y="141" fill={`${C}55`} fontSize="8.5" fontFamily="monospace">{'}'}</text>

      {/* Nesting depth bracket left side */}
      <line x1="8" y1="12" x2="8" y2="186" stroke={`${C}28`} strokeWidth="1.4" />
      <line x1="8" y1="12" x2="14" y2="12" stroke={`${C}28`} strokeWidth="1.4" />
      <line x1="8" y1="186" x2="14" y2="186" stroke={`${C}28`} strokeWidth="1.4" />

      {/* ── Right sidebar panel inside outermost frame ── */}
      <rect x="482" y="56" width="98" height="116" rx="5" fill={`${C}0a`} stroke={`${C}33`} strokeWidth="1.2" />
      <text x="531" y="70" fill={`${C}77`} fontSize="8" fontFamily="monospace" textAnchor="middle">sidebar</text>
      {/* Nav items */}
      <rect x="494" y="78" width="74" height="13" rx="3" fill={`${C}22`} stroke={`${C}33`} strokeWidth="1" />
      <text x="531" y="88" fill={`${C}88`} fontSize="7.5" fontFamily="monospace" textAnchor="middle">Dashboard</text>
      <rect x="494" y="97" width="74" height="13" rx="3" fill={`${C}38`} stroke={`${C}55`} strokeWidth="1" />
      <text x="531" y="107" fill={C} fontSize="7.5" fontFamily="monospace" textAnchor="middle">Analytics</text>
      <rect x="494" y="116" width="74" height="13" rx="3" fill={`${C}22`} stroke={`${C}33`} strokeWidth="1" />
      <text x="531" y="126" fill={`${C}88`} fontSize="7.5" fontFamily="monospace" textAnchor="middle">Settings</text>
      {/* Active indicator bar */}
      <rect x="491" y="97" width="3" height="13" rx="1.5" fill={C} opacity="0.7" />

      {/* "persists" double-headed arrow: sidebar stays */}
      <line x1="472" y1="114" x2="482" y2="114" stroke={`${C}44`} strokeWidth="1.2" strokeDasharray="3 2" />
      <text x="462" y="111" fill={`${C}44`} fontSize="7" fontFamily="monospace" textAnchor="end">persists</text>

      {/* ── Navigation change indicator ── */}
      {/* Arrow pointing into page.tsx indicating re-render */}
      <line x1="350" y1="124" x2="360" y2="124" stroke={`${C}44`} strokeWidth="1.2" strokeDasharray="3 2" />
      <polygon points="360,121 365,124 360,127" fill={`${C}55`} />
      <text x="354" y="116" fill={`${C}44`} fontSize="7" fontFamily="monospace" textAnchor="middle">navigate</text>

      {/* ── Top-right title ── */}
      <text x="764" y="22" fill={`${C}66`} fontSize="9.5" fontFamily="monospace" textAnchor="end" fontWeight="600">Layouts &amp; Nesting</text>
      <text x="764" y="34" fill={`${C}33`} fontSize="8" fontFamily="monospace" textAnchor="end">Next.js App Router</text>

      {/* ── Bottom label ── */}
      <text x="390" y="207" fill={`${C}44`} fontSize="8.5" fontFamily="monospace" textAnchor="middle">layouts persist across navigation — page re-renders, layout stays</text>
    </svg>
  )
}
