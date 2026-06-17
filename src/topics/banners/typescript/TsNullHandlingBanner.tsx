export default function TsNullHandlingBanner() {
  const P = '#818cf8'
  return (
    <svg width="100%" viewBox="0 0 780 220" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', background: '#07101a' }}>
      <defs>
        <pattern id="dots-nul" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="13" cy="13" r="0.75" fill={`${P}15`} />
        </pattern>
        <radialGradient id="glow-nul" cx="50%" cy="50%" r="45%">
          <stop offset="0%" stopColor={P} stopOpacity="0.05" />
          <stop offset="100%" stopColor={P} stopOpacity="0" />
        </radialGradient>
        <marker id="arrow-nul" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={`${P}80`} />
        </marker>
      </defs>
      <rect width="780" height="220" fill="url(#dots-nul)" />
      <rect width="780" height="220" fill="url(#glow-nul)" />

      <text x="390" y="18" fill={`${P}55`} fontSize="9" fontFamily="monospace" textAnchor="middle">null, undefined &amp; unknown — TypeScript</text>

      {/* === Column 1: undefined vs null === */}
      <rect x="16" y="26" width="236" height="186" rx="7" fill={`${P}05`} stroke={`${P}28`} strokeWidth="1.5" />
      <text x="134" y="45" fill={`${P}80`} fontSize="9.5" fontFamily="monospace" textAnchor="middle" fontWeight="700">undefined vs null</text>

      <rect x="30" y="53" width="208" height="36" rx="4" fill={`${P}0e`} stroke={`${P}30`} strokeWidth="1" />
      <text x="40" y="68" fill={`${P}aa`} fontSize="9" fontFamily="monospace">let name:</text>
      <text x="101" y="68" fill="rgba(96,165,250,0.9)" fontSize="9" fontFamily="monospace"> string | undefined</text>
      <text x="40" y="81" fill={`${P}50`} fontSize="8" fontFamily="monospace">// declared but not yet set</text>

      <rect x="30" y="95" width="208" height="36" rx="4" fill={`${P}0e`} stroke={`${P}30`} strokeWidth="1" />
      <text x="40" y="110" fill={`${P}aa`} fontSize="9" fontFamily="monospace">let age:</text>
      <text x="90" y="110" fill="rgba(251,191,36,0.9)" fontSize="9" fontFamily="monospace"> number | null</text>
      <text x="189" y="110" fill={`${P}cc`} fontSize="9" fontFamily="monospace"> = null</text>
      <text x="40" y="123" fill={`${P}50`} fontSize="8" fontFamily="monospace">// intentionally empty</text>

      <line x1="134" y1="132" x2="134" y2="146" stroke={`${P}50`} strokeWidth="1.2" markerEnd="url(#arrow-nul)" />

      <rect x="30" y="148" width="208" height="36" rx="4" fill={`${P}10`} stroke={`${P}40`} strokeWidth="1" />
      <text x="40" y="163" fill={`${P}aa`} fontSize="9" fontFamily="monospace">if (name !==</text>
      <text x="118" y="163" fill="rgba(96,165,250,0.9)" fontSize="9" fontFamily="monospace"> undefined</text>
      <text x="183" y="163" fill={`${P}aa`} fontSize="9" fontFamily="monospace">) {'{'}</text>
      <text x="40" y="176" fill="rgba(134,239,172,0.8)" fontSize="9" fontFamily="monospace">  name.toUpperCase()  // OK ✓</text>
      <text x="40" y="187" fill={`${P}60`} fontSize="9" fontFamily="monospace">{'}'}</text>

      <rect x="30" y="196" width="208" height="12" rx="3" fill={`${P}04`} />
      <text x="134" y="205" fill={`${P}40`} fontSize="7.5" fontFamily="monospace" textAnchor="middle">strictNullChecks: true — catches both</text>

      {/* === Column 2: optional chaining === */}
      <rect x="272" y="26" width="236" height="186" rx="7" fill={`${P}05`} stroke={`${P}28`} strokeWidth="1.5" />
      <text x="390" y="45" fill={`${P}80`} fontSize="9.5" fontFamily="monospace" textAnchor="middle" fontWeight="700">?. optional chaining</text>

      <rect x="286" y="53" width="208" height="50" rx="4" fill={`${P}0e`} stroke={`${P}30`} strokeWidth="1" />
      <text x="296" y="68" fill={`${P}aa`} fontSize="9" fontFamily="monospace">type User = {'{'}</text>
      <text x="296" y="81" fill={`${P}aa`} fontSize="9" fontFamily="monospace">  address?: {'{'} city: string {'}'}</text>
      <text x="296" y="94" fill={`${P}aa`} fontSize="9" fontFamily="monospace">{'}'}</text>

      <text x="296" y="116" fill={`${P}aa`} fontSize="9" fontFamily="monospace">user</text>
      <text x="318" y="116" fill="rgba(134,239,172,0.9)" fontSize="9" fontFamily="monospace" fontWeight="700">?.</text>
      <text x="334" y="116" fill={`${P}aa`} fontSize="9" fontFamily="monospace">address</text>
      <text x="388" y="116" fill="rgba(134,239,172,0.9)" fontSize="9" fontFamily="monospace" fontWeight="700">?.</text>
      <text x="404" y="116" fill={`${P}aa`} fontSize="9" fontFamily="monospace">city</text>
      <text x="296" y="130" fill={`${P}45`} fontSize="8" fontFamily="monospace">// 'Berlin' | undefined — no crash</text>

      <text x="296" y="150" fill={`${P}aa`} fontSize="9" fontFamily="monospace">arr</text>
      <text x="316" y="150" fill="rgba(134,239,172,0.9)" fontSize="9" fontFamily="monospace" fontWeight="700">?.</text>
      <text x="332" y="150" fill={`${P}aa`} fontSize="9" fontFamily="monospace">[0]</text>
      <text x="296" y="164" fill={`${P}aa`} fontSize="9" fontFamily="monospace">fn</text>
      <text x="312" y="164" fill="rgba(134,239,172,0.9)" fontSize="9" fontFamily="monospace" fontWeight="700">?.</text>
      <text x="328" y="164" fill={`${P}aa`} fontSize="9" fontFamily="monospace">()</text>

      <rect x="286" y="176" width="208" height="30" rx="4" fill={`${P}06`} stroke={`${P}20`} strokeWidth="0.8" />
      <text x="390" y="190" fill={`${P}55`} fontSize="8.5" fontFamily="monospace" textAnchor="middle">short-circuits at first</text>
      <text x="390" y="202" fill={`${P}40`} fontSize="8.5" fontFamily="monospace" textAnchor="middle">null/undefined → returns undefined</text>

      {/* === Column 3: nullish coalescing + unknown === */}
      <rect x="528" y="26" width="236" height="186" rx="7" fill={`${P}05`} stroke={`${P}28`} strokeWidth="1.5" />
      <text x="646" y="45" fill={`${P}80`} fontSize="9.5" fontFamily="monospace" textAnchor="middle" fontWeight="700">?? and unknown</text>

      {/* ?? section */}
      <rect x="542" y="53" width="208" height="60" rx="4" fill={`${P}0e`} stroke={`${P}30`} strokeWidth="1" />
      <text x="552" y="68" fill={`${P}aa`} fontSize="9" fontFamily="monospace">const name = input</text>
      <text x="643" y="68" fill="rgba(134,239,172,0.9)" fontSize="9" fontFamily="monospace" fontWeight="700"> ?? 'Guest'</text>
      <text x="552" y="83" fill={`${P}45`} fontSize="8" fontFamily="monospace">// fallback only on null/undefined</text>
      <text x="552" y="97" fill={`${P}45`} fontSize="8" fontFamily="monospace">// 0 ?? 'x'  →  0  (0 is valid!)</text>
      <text x="552" y="110" fill={`${P}35`} fontSize="8" fontFamily="monospace">// '' ?? 'x' →  ''  ('' is valid!)</text>

      {/* ??= shorthand */}
      <rect x="542" y="120" width="208" height="26" rx="4" fill={`${P}08`} stroke={`${P}28`} strokeWidth="0.8" />
      <text x="552" y="133" fill={`${P}aa`} fontSize="9" fontFamily="monospace">config.port</text>
      <text x="623" y="133" fill="rgba(134,239,172,0.9)" fontSize="9" fontFamily="monospace" fontWeight="700"> ??=</text>
      <text x="648" y="133" fill={`${P}cc`} fontSize="9" fontFamily="monospace"> 3000</text>
      <text x="552" y="143" fill={`${P}35`} fontSize="8" fontFamily="monospace">// assign only if null/undefined</text>

      {/* unknown */}
      <text x="552" y="162" fill={`${P}70`} fontSize="8.5" fontFamily="monospace" fontWeight="700">unknown — safer than any</text>
      <rect x="542" y="167" width="208" height="40" rx="4" fill={`${P}06`} stroke={`${P}20`} strokeWidth="0.8" />
      <text x="552" y="181" fill={`${P}aa`} fontSize="8.5" fontFamily="monospace">const data: unknown = fetch()</text>
      <text x="552" y="194" fill={`${P}70`} fontSize="8.5" fontFamily="monospace">if (typeof data === 'string') {'{'}</text>
      <text x="552" y="207" fill="rgba(134,239,172,0.7)" fontSize="8.5" fontFamily="monospace">  data.toLowerCase()  // OK ✓</text>
    </svg>
  )
}
