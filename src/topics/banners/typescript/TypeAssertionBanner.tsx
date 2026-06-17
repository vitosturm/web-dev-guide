export default function TypeAssertionBanner() {
  const P = '#818cf8'
  return (
    <svg width="100%" viewBox="0 0 780 220" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', background: '#07101a' }}>
      <defs>
        <pattern id="dots-tya" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="13" cy="13" r="0.75" fill={`${P}15`} />
        </pattern>
        <radialGradient id="glow-tya" cx="50%" cy="50%" r="45%">
          <stop offset="0%" stopColor={P} stopOpacity="0.05" />
          <stop offset="100%" stopColor={P} stopOpacity="0" />
        </radialGradient>
        <marker id="arrow-tya" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={`${P}80`} />
        </marker>
      </defs>
      <rect width="780" height="220" fill="url(#dots-tya)" />
      <rect width="780" height="220" fill="url(#glow-tya)" />

      <text x="390" y="18" fill={`${P}55`} fontSize="9" fontFamily="monospace" textAnchor="middle">type assertion — TypeScript</text>

      {/* === Column 1: as keyword === */}
      <rect x="16" y="26" width="236" height="186" rx="7" fill={`${P}05`} stroke={`${P}28`} strokeWidth="1.5" />
      <text x="134" y="45" fill={`${P}80`} fontSize="9.5" fontFamily="monospace" textAnchor="middle" fontWeight="700">as — type assertion</text>

      <rect x="30" y="53" width="208" height="22" rx="4" fill={`${P}0e`} stroke={`${P}30`} strokeWidth="1" />
      <text x="40" y="68" fill={`${P}aa`} fontSize="9" fontFamily="monospace">const val: unknown = 'hello'</text>

      <line x1="134" y1="76" x2="134" y2="90" stroke={`${P}50`} strokeWidth="1.2" markerEnd="url(#arrow-tya)" />

      <rect x="30" y="92" width="208" height="22" rx="4" fill={`${P}10`} stroke={`${P}45`} strokeWidth="1" />
      <text x="40" y="107" fill={`${P}cc`} fontSize="9" fontFamily="monospace">const s = val</text>
      <text x="128" y="107" fill="rgba(134,239,172,0.9)" fontSize="9" fontFamily="monospace" fontWeight="700"> as string</text>

      <text x="40" y="128" fill={`${P}55`} fontSize="8.5" fontFamily="monospace">s.toUpperCase()  // OK ✓</text>

      {/* DOM example */}
      <rect x="30" y="138" width="208" height="36" rx="4" fill={`${P}06`} stroke={`${P}20`} strokeWidth="0.8" />
      <text x="40" y="152" fill={`${P}70`} fontSize="8.5" fontFamily="monospace">const el = document</text>
      <text x="40" y="165" fill={`${P}70`} fontSize="8.5" fontFamily="monospace">  .querySelector('#btn')</text>
      <text x="40" y="178" fill={`${P}70`} fontSize="8.5" fontFamily="monospace">  </text>
      <text x="56" y="178" fill="rgba(134,239,172,0.8)" fontSize="8.5" fontFamily="monospace">as HTMLButtonElement</text>

      <rect x="30" y="182" width="208" height="24" rx="3" fill={`${P}04`} stroke={`${P}18`} strokeWidth="0.8" />
      <text x="134" y="192" fill="rgba(248,113,113,0.6)" fontSize="7.5" fontFamily="monospace" textAnchor="middle">no angle brackets in JSX</text>
      <text x="134" y="202" fill={`${P}35`} fontSize="7.5" fontFamily="monospace" textAnchor="middle">use as, not &lt;Type&gt;</text>

      {/* === Column 2: optional chaining ?. === */}
      <rect x="272" y="26" width="236" height="186" rx="7" fill={`${P}05`} stroke={`${P}28`} strokeWidth="1.5" />
      <text x="390" y="45" fill={`${P}80`} fontSize="9.5" fontFamily="monospace" textAnchor="middle" fontWeight="700">?. optional chaining</text>

      <rect x="286" y="53" width="208" height="50" rx="4" fill={`${P}0e`} stroke={`${P}30`} strokeWidth="1" />
      <text x="296" y="68" fill={`${P}aa`} fontSize="9" fontFamily="monospace">const user = {'{'}</text>
      <text x="296" y="82" fill={`${P}aa`} fontSize="9" fontFamily="monospace">  address?: {'{'} city: string {'}'}</text>
      <text x="296" y="95" fill={`${P}aa`} fontSize="9" fontFamily="monospace">{'}'}</text>

      <text x="296" y="118" fill={`${P}aa`} fontSize="9" fontFamily="monospace">user.address?.city</text>
      <text x="296" y="132" fill="rgba(134,239,172,0.75)" fontSize="8.5" fontFamily="monospace">// 'Berlin' | undefined — no crash</text>

      <text x="296" y="152" fill={`${P}aa`} fontSize="9" fontFamily="monospace">user.address?.city?.toUpperCase()</text>
      <text x="296" y="166" fill="rgba(134,239,172,0.75)" fontSize="8.5" fontFamily="monospace">// chains: stops at first undefined</text>

      <rect x="286" y="174" width="208" height="32" rx="4" fill={`${P}06`} stroke={`${P}20`} strokeWidth="0.8" />
      <text x="390" y="188" fill={`${P}55`} fontSize="8.5" fontFamily="monospace" textAnchor="middle">obj?.prop    arr?.[0]</text>
      <text x="390" y="201" fill={`${P}35`} fontSize="8.5" fontFamily="monospace" textAnchor="middle">fn?.()   method?.call()</text>

      {/* === Column 3: nullish coalescing ?? + as const === */}
      <rect x="528" y="26" width="236" height="186" rx="7" fill={`${P}05`} stroke={`${P}28`} strokeWidth="1.5" />
      <text x="646" y="45" fill={`${P}80`} fontSize="9.5" fontFamily="monospace" textAnchor="middle" fontWeight="700">?? and as const</text>

      {/* ?? section */}
      <text x="542" y="63" fill={`${P}70`} fontSize="8.5" fontFamily="monospace" fontWeight="700">?? nullish coalescing</text>
      <rect x="542" y="68" width="208" height="50" rx="4" fill={`${P}0e`} stroke={`${P}30`} strokeWidth="1" />
      <text x="552" y="83" fill={`${P}aa`} fontSize="9" fontFamily="monospace">const n = value</text>
      <text x="641" y="83" fill="rgba(134,239,172,0.9)" fontSize="9" fontFamily="monospace" fontWeight="700"> ?? 'default'</text>
      <text x="552" y="97" fill={`${P}45`} fontSize="8" fontFamily="monospace">// fallback only on null / undefined</text>
      <text x="552" y="110" fill={`${P}35`} fontSize="8" fontFamily="monospace">// 0 ?? 'x' → 0  (not 'x')</text>

      {/* vs || */}
      <rect x="542" y="124" width="208" height="26" rx="3" fill="rgba(248,113,113,0.06)" stroke="rgba(248,113,113,0.25)" strokeWidth="0.8" />
      <text x="552" y="136" fill="rgba(248,113,113,0.7)" fontSize="8.5" fontFamily="monospace">0 || 'fallback'</text>
      <text x="647" y="136" fill="rgba(248,113,113,0.5)" fontSize="8.5" fontFamily="monospace">// → 'fallback' ✗</text>
      <text x="552" y="146" fill={`${P}35`} fontSize="8" fontFamily="monospace">|| treats 0 and '' as falsy</text>

      {/* as const */}
      <text x="542" y="165" fill={`${P}70`} fontSize="8.5" fontFamily="monospace" fontWeight="700">as const — literal narrowing</text>
      <rect x="542" y="170" width="208" height="36" rx="4" fill={`${P}0e`} stroke={`${P}30`} strokeWidth="1" />
      <text x="552" y="185" fill={`${P}aa`} fontSize="8.5" fontFamily="monospace">const cfg = {'{'} env: 'prod' {'}'}</text>
      <text x="698" y="185" fill="rgba(134,239,172,0.9)" fontSize="8.5" fontFamily="monospace" fontWeight="700"> as const</text>
      <text x="552" y="198" fill={`${P}45`} fontSize="8" fontFamily="monospace">cfg.env: 'prod'  // not string</text>
    </svg>
  )
}
