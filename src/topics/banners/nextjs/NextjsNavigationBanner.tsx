export default function NextjsNavigationBanner() {
  const C = '#a3b4c6'
  return (
    <svg width="100%" viewBox="0 0 780 220" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', background: '#07101a' }}>
      <defs>
        <pattern id="dots-nn" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="13" cy="13" r="0.75" fill={`${C}18`} />
        </pattern>
        <radialGradient id="glow-nn" cx="50%" cy="50%" r="45%">
          <stop offset="0%" stopColor={C} stopOpacity="0.06" />
          <stop offset="100%" stopColor={C} stopOpacity="0" />
        </radialGradient>
        <marker id="arr-nn" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill={`${C}99`} />
        </marker>
        <marker id="arr-nn-dashed" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill={`${C}66`} />
        </marker>
      </defs>

      {/* Background */}
      <rect width="780" height="220" fill="url(#dots-nn)" />
      <rect width="780" height="220" fill="url(#glow-nn)" />

      {/* ── Title ── */}
      <text x="390" y="22" fill={C} fontSize="11.5" fontFamily="monospace" fontWeight="700" textAnchor="middle" letterSpacing="0.5">Navigation in Next.js</text>
      <line x1="260" y1="27" x2="520" y2="27" stroke={`${C}33`} strokeWidth="0.75" />

      {/* ── Vertical Divider ── */}
      <line x1="390" y1="34" x2="390" y2="210" stroke={`${C}33`} strokeWidth="1.2" strokeDasharray="4 3" />

      {/* ════════════════════════════════════════════════════════════
          LEFT PANEL — <Link> declarative
          ════════════════════════════════════════════════════════════ */}

      {/* Panel label */}
      <text x="26" y="44" fill={`${C}bb`} fontSize="9.5" fontFamily="monospace" fontWeight="700">&lt;Link&gt;</text>
      <text x="82" y="44" fill={`${C}55`} fontSize="9" fontFamily="monospace">— declarative</text>

      {/* Code snippet box */}
      <rect x="24" y="50" width="250" height="30" rx="4" fill={`${C}08`} stroke={`${C}33`} strokeWidth="1" />
      <text x="34" y="62" fill={`${C}44`} fontSize="8.5" fontFamily="monospace">{'// JSX'}</text>
      <text x="34" y="76" fill={`${C}cc`} fontSize="9.5" fontFamily="monospace">{'<Link href="/about">About</Link>'}</text>

      {/* Page A box */}
      <rect x="36" y="100" width="84" height="36" rx="4" fill={`${C}0a`} stroke={`${C}44`} strokeWidth="1.2" />
      <text x="78" y="114" fill={`${C}aa`} fontSize="8.5" fontFamily="monospace" textAnchor="middle">/home</text>
      <text x="78" y="126" fill={`${C}55`} fontSize="7.5" fontFamily="monospace" textAnchor="middle">current page</text>

      {/* Solid arrow with "prefetched" label */}
      <line x1="122" y1="118" x2="192" y2="118" stroke={`${C}99`} strokeWidth="1.4" markerEnd="url(#arr-nn)" />
      <text x="157" y="112" fill={`${C}77`} fontSize="7.5" fontFamily="monospace" textAnchor="middle">prefetched</text>

      {/* Page B box */}
      <rect x="194" y="100" width="84" height="36" rx="4" fill={`${C}0a`} stroke={`${C}44`} strokeWidth="1.2" />
      <text x="236" y="114" fill={`${C}aa`} fontSize="8.5" fontFamily="monospace" textAnchor="middle">/about</text>
      <text x="236" y="126" fill={`${C}55`} fontSize="7.5" fontFamily="monospace" textAnchor="middle">target page</text>

      {/* Prefetch annotation lines */}
      <line x1="78" y1="136" x2="78" y2="152" stroke={`${C}33`} strokeWidth="0.75" />
      <line x1="236" y1="136" x2="236" y2="152" stroke={`${C}33`} strokeWidth="0.75" />
      <line x1="78" y1="152" x2="236" y2="152" stroke={`${C}33`} strokeWidth="0.75" />
      <text x="157" y="164" fill={`${C}44`} fontSize="7.5" fontFamily="monospace" textAnchor="middle">loads in background on hover</text>

      {/* "zero JS bundle" badge */}
      <rect x="36" y="174" width="88" height="18" rx="9" fill={`${C}12`} stroke={`${C}44`} strokeWidth="1" />
      <text x="80" y="186" fill={`${C}99`} fontSize="8" fontFamily="monospace" textAnchor="middle">zero JS bundle</text>

      {/* Viewport note */}
      <text x="148" y="186" fill={`${C}44`} fontSize="7.5" fontFamily="monospace">also prefetches in viewport</text>


      {/* ════════════════════════════════════════════════════════════
          RIGHT PANEL — useRouter programmatic
          ════════════════════════════════════════════════════════════ */}

      {/* Panel label */}
      <text x="406" y="44" fill={`${C}bb`} fontSize="9.5" fontFamily="monospace" fontWeight="700">useRouter</text>
      <text x="483" y="44" fill={`${C}55`} fontSize="9" fontFamily="monospace">— programmatic</text>

      {/* Code snippet box */}
      <rect x="404" y="50" width="350" height="30" rx="4" fill={`${C}08`} stroke={`${C}33`} strokeWidth="1" />
      <text x="414" y="62" fill={`${C}44`} fontSize="8.5" fontFamily="monospace">{'// inside event handler'}</text>
      <text x="414" y="76" fill={`${C}cc`} fontSize="9.5" fontFamily="monospace">{"router.push('/dashboard')"}</text>

      {/* Button node */}
      <rect x="416" y="100" width="80" height="36" rx="6" fill={`${C}10`} stroke={`${C}55`} strokeWidth="1.4" />
      <text x="456" y="115" fill={`${C}cc`} fontSize="8.5" fontFamily="monospace" textAnchor="middle">onClick</text>
      <text x="456" y="127" fill={`${C}55`} fontSize="7.5" fontFamily="monospace" textAnchor="middle">button</text>

      {/* Arrow: button → push call */}
      <line x1="498" y1="118" x2="554" y2="118" stroke={`${C}66`} strokeWidth="1.4" strokeDasharray="5 2.5" markerEnd="url(#arr-nn-dashed)" />
      <text x="526" y="112" fill={`${C}55`} fontSize="7.5" fontFamily="monospace" textAnchor="middle">triggers</text>

      {/* Push call node */}
      <rect x="556" y="102" width="90" height="32" rx="4" fill={`${C}08`} stroke={`${C}33`} strokeWidth="1" />
      <text x="601" y="115" fill={`${C}aa`} fontSize="8.5" fontFamily="monospace" textAnchor="middle">router.push()</text>
      <text x="601" y="127" fill={`${C}55`} fontSize="7.5" fontFamily="monospace" textAnchor="middle">imperative call</text>

      {/* Arrow: push → page transition */}
      <line x1="601" y1="134" x2="601" y2="154" stroke={`${C}99`} strokeWidth="1.4" markerEnd="url(#arr-nn)" />

      {/* Page transition box */}
      <rect x="546" y="156" width="110" height="30" rx="4" fill={`${C}0a`} stroke={`${C}44`} strokeWidth="1.2" />
      <text x="601" y="168" fill={`${C}aa`} fontSize="8.5" fontFamily="monospace" textAnchor="middle">/dashboard</text>
      <text x="601" y="180" fill={`${C}55`} fontSize="7.5" fontFamily="monospace" textAnchor="middle">page transition</text>

      {/* "on event" badge */}
      <rect x="416" y="196" width="60" height="18" rx="9" fill={`${C}12`} stroke={`${C}44`} strokeWidth="1" />
      <text x="446" y="208" fill={`${C}99`} fontSize="8" fontFamily="monospace" textAnchor="middle">on event</text>

      {/* Extra use-cases note */}
      <text x="490" y="208" fill={`${C}44`} fontSize="7.5" fontFamily="monospace">replace() · back() · forward() · refresh()</text>
    </svg>
  )
}
