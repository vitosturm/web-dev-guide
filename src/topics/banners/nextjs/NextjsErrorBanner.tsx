export default function NextjsErrorBanner() {
  const C = '#a3b4c6'
  const RED = '#f87171'
  return (
    <svg width="100%" viewBox="0 0 780 220" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', background: '#07101a' }}>
      <defs>
        <pattern id="dots-ne" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="13" cy="13" r="0.75" fill={`${C}18`} />
        </pattern>
        <radialGradient id="glow-ne" cx="50%" cy="50%" r="45%">
          <stop offset="0%" stopColor={C} stopOpacity="0.06" />
          <stop offset="100%" stopColor={C} stopOpacity="0" />
        </radialGradient>
        <marker id="arr-ne" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill={`${C}66`} />
        </marker>
      </defs>
      <rect width="780" height="220" fill="url(#dots-ne)" />
      <rect width="780" height="220" fill="url(#glow-ne)" />

      {/* ── Outermost layer: global-error.tsx ── */}
      <rect x="18" y="14" width="560" height="192" rx="7" fill={`${RED}06`} stroke={`${RED}55`} strokeWidth="1.5" />
      <text x="26" y="26" fill={RED} fontSize="9.5" fontFamily="monospace" fontWeight="700">global-error.tsx</text>
      <text x="26" y="37" fill={`${RED}77`} fontSize="8" fontFamily="monospace">catches root layout errors</text>

      {/* ── Middle layer: error.tsx wraps segment ── */}
      <rect x="42" y="46" width="512" height="148" rx="6" fill={`${C}06`} stroke={`${C}44`} strokeWidth="1.5" />
      <text x="50" y="58" fill={C} fontSize="9.5" fontFamily="monospace" fontWeight="700">error.tsx</text>
      <text x="50" y="69" fill={`${C}66`} fontSize="8" fontFamily="monospace">wraps segment</text>
      {/* layout.tsx label top-right of middle layer */}
      <text x="545" y="58" fill={`${C}88`} fontSize="9" fontFamily="monospace" textAnchor="end">layout.tsx</text>

      {/* ── Inner layer: page.tsx ── */}
      <rect x="72" y="80" width="318" height="100" rx="5" fill={`${C}08`} stroke={`${C}33`} strokeWidth="1.5" strokeDasharray="6 3" />
      <text x="80" y="93" fill={`${C}99`} fontSize="9.5" fontFamily="monospace" fontWeight="700">page.tsx</text>

      {/* Error / throw indicator inside page box */}
      {/* Lightning bolt icon at ~center-right of page box */}
      <g transform="translate(252, 108)">
        <polygon points="10,0 4,14 9,14 2,28 16,10 10,10 17,0" fill={RED} opacity="0.9" />
      </g>
      <text x="284" y="122" fill={RED} fontSize="9" fontFamily="monospace" fontWeight="600">throw</text>
      <text x="284" y="134" fill={`${RED}88`} fontSize="8.5" fontFamily="monospace">new Error()</text>

      {/* Code hint inside page box */}
      <text x="82" y="114" fill="rgba(255,255,255,0.25)" fontSize="9" fontFamily="monospace">// component body</text>
      <text x="82" y="128" fill={`${C}88`} fontSize="9.5" fontFamily="monospace">async function Page() &#123;</text>
      <text x="82" y="142" fill={`${RED}bb`} fontSize="9.5" fontFamily="monospace">  throw new Error('oops')</text>
      <text x="82" y="156" fill={`${C}88`} fontSize="9.5" fontFamily="monospace">&#125;</text>

      {/* "catches what's inside" label for outer → middle */}
      <text x="556" y="110" fill={`${RED}66`} fontSize="8" fontFamily="monospace" textAnchor="start">catches</text>
      <text x="556" y="121" fill={`${RED}66`} fontSize="8" fontFamily="monospace" textAnchor="start">all inside</text>

      {/* "catches what's inside" label for middle → inner */}
      <text x="398" y="128" fill={`${C}55`} fontSize="8" fontFamily="monospace" textAnchor="start">catches</text>
      <text x="398" y="139" fill={`${C}55`} fontSize="8" fontFamily="monospace" textAnchor="start">segment</text>

      {/* ── not-found.tsx box ── bottom-right outside all layers */}
      <rect x="606" y="130" width="154" height="54" rx="5" fill={`${C}08`} stroke={`${C}33`} strokeWidth="1.5" strokeDasharray="5 3" />
      <text x="614" y="148" fill={`${C}aa`} fontSize="9.5" fontFamily="monospace" fontWeight="700">not-found.tsx</text>
      <text x="614" y="162" fill={`${C}55`} fontSize="8.5" fontFamily="monospace">404 boundary</text>
      <text x="614" y="174" fill={`${C}44`} fontSize="8" fontFamily="monospace">notFound() triggers</text>

      {/* Dashed connector from page area to not-found box */}
      <line x1="580" y1="156" x2="604" y2="156" stroke={`${C}44`} strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#arr-ne)" />
      <text x="582" y="148" fill={`${C}55`} fontSize="8" fontFamily="monospace" textAnchor="middle">notFound()</text>

      {/* ── Legend / title top-right ── */}
      <text x="762" y="22" fill={`${C}66`} fontSize="9.5" fontFamily="monospace" textAnchor="end" fontWeight="600">Error Boundary Hierarchy</text>
      <text x="762" y="34" fill={`${C}33`} fontSize="8" fontFamily="monospace" textAnchor="end">Next.js App Router</text>

      {/* Vertical bracket / nesting depth indicator on far left */}
      <line x1="10" y1="14" x2="10" y2="206" stroke={`${RED}33`} strokeWidth="1.5" />
      <line x1="10" y1="14" x2="16" y2="14" stroke={`${RED}33`} strokeWidth="1.5" />
      <line x1="10" y1="206" x2="16" y2="206" stroke={`${RED}33`} strokeWidth="1.5" />
    </svg>
  )
}
