export default function TsReactBanner() {
  const P = '#818cf8'
  return (
    <svg width="100%" viewBox="0 0 780 220" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', background: '#07101a' }}>
      <defs>
        <pattern id="dots-trx" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="13" cy="13" r="0.75" fill={`${P}15`} />
        </pattern>
        <radialGradient id="glow-trx" cx="50%" cy="50%" r="45%">
          <stop offset="0%" stopColor={P} stopOpacity="0.05" />
          <stop offset="100%" stopColor={P} stopOpacity="0" />
        </radialGradient>
        <marker id="arrow-trx" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={`${P}80`} />
        </marker>
      </defs>
      <rect width="780" height="220" fill="url(#dots-trx)" />
      <rect width="780" height="220" fill="url(#glow-trx)" />

      <text x="390" y="18" fill={`${P}55`} fontSize="9" fontFamily="monospace" textAnchor="middle">TypeScript in React</text>

      {/* === Column 1: Typed Props === */}
      <rect x="16" y="26" width="236" height="186" rx="7" fill={`${P}05`} stroke={`${P}28`} strokeWidth="1.5" />
      <text x="134" y="45" fill={`${P}80`} fontSize="9.5" fontFamily="monospace" textAnchor="middle" fontWeight="700">Typed Props</text>

      <rect x="30" y="53" width="208" height="64" rx="4" fill={`${P}0e`} stroke={`${P}30`} strokeWidth="1" />
      <text x="40" y="68" fill={`${P}80`} fontSize="8.5" fontFamily="monospace" fontWeight="700">type</text>
      <text x="66" y="68" fill="rgba(96,165,250,0.9)" fontSize="8.5" fontFamily="monospace" fontWeight="700"> CardProps</text>
      <text x="137" y="68" fill={`${P}60`} fontSize="8.5" fontFamily="monospace"> = {'{'}</text>
      <text x="48" y="82" fill={`${P}aa`} fontSize="8.5" fontFamily="monospace">  title:</text>
      <text x="88" y="82" fill="rgba(134,239,172,0.85)" fontSize="8.5" fontFamily="monospace"> string</text>
      <text x="48" y="95" fill={`${P}aa`} fontSize="8.5" fontFamily="monospace">  count</text>
      <text x="87" y="95" fill={`${P}60`} fontSize="8.5" fontFamily="monospace">?:</text>
      <text x="99" y="95" fill="rgba(96,165,250,0.85)" fontSize="8.5" fontFamily="monospace"> number</text>
      <text x="48" y="108" fill={`${P}aa`} fontSize="8.5" fontFamily="monospace">  variant:</text>
      <text x="97" y="108" fill="rgba(251,191,36,0.85)" fontSize="8.5" fontFamily="monospace"> 'primary' | 'ghost'</text>
      <text x="40" y="113" fill={`${P}60`} fontSize="8.5" fontFamily="monospace">{'}'}</text>

      <rect x="30" y="124" width="208" height="40" rx="4" fill={`${P}08`} stroke={`${P}28`} strokeWidth="0.8" />
      <text x="40" y="139" fill={`${P}80`} fontSize="8.5" fontFamily="monospace" fontWeight="700">function</text>
      <text x="90" y="139" fill="rgba(96,165,250,0.9)" fontSize="8.5" fontFamily="monospace"> Card</text>
      <text x="116" y="139" fill={`${P}60`} fontSize="8.5" fontFamily="monospace">({'{ title, count }'}:</text>
      <text x="40" y="152" fill="rgba(96,165,250,0.85)" fontSize="8.5" fontFamily="monospace">  CardProps</text>
      <text x="95" y="152" fill={`${P}60`} fontSize="8.5" fontFamily="monospace">) {'{ ... }'}</text>

      <rect x="30" y="172" width="208" height="34" rx="3" fill="rgba(248,113,113,0.06)" stroke="rgba(248,113,113,0.2)" strokeWidth="0.8" />
      <text x="40" y="185" fill={`${P}aa`} fontSize="8.5" fontFamily="monospace">{'<Card variant="invalid" />'}</text>
      <text x="40" y="199" fill="rgba(248,113,113,0.75)" fontSize="8" fontFamily="monospace">Error: not in union type ✗</text>

      {/* === Column 2: useState + useRef === */}
      <rect x="272" y="26" width="236" height="186" rx="7" fill={`${P}05`} stroke={`${P}28`} strokeWidth="1.5" />
      <text x="390" y="45" fill={`${P}80`} fontSize="9.5" fontFamily="monospace" textAnchor="middle" fontWeight="700">useState &amp; useRef</text>

      <rect x="286" y="53" width="208" height="64" rx="4" fill={`${P}0e`} stroke={`${P}30`} strokeWidth="1" />
      <text x="296" y="67" fill={`${P}70`} fontSize="8" fontFamily="monospace">// explicit generic when TS can't infer</text>
      <text x="296" y="81" fill={`${P}aa`} fontSize="8.5" fontFamily="monospace">const [user, setUser] =</text>
      <text x="296" y="94" fill={`${P}aa`} fontSize="8.5" fontFamily="monospace">  useState</text>
      <text x="343" y="94" fill="rgba(134,239,172,0.9)" fontSize="8.5" fontFamily="monospace" fontWeight="700">{'<User | null>'}</text>
      <text x="296" y="107" fill={`${P}aa`} fontSize="8.5" fontFamily="monospace">  (null)</text>

      <rect x="286" y="124" width="208" height="46" rx="4" fill={`${P}0e`} stroke={`${P}30`} strokeWidth="1" />
      <text x="296" y="138" fill={`${P}70`} fontSize="8" fontFamily="monospace">// element type as generic</text>
      <text x="296" y="151" fill={`${P}aa`} fontSize="8.5" fontFamily="monospace">const ref = useRef</text>
      <text x="385" y="151" fill="rgba(96,165,250,0.9)" fontSize="8.5" fontFamily="monospace" fontWeight="700">{'<HTMLInputElement>'}</text>
      <text x="296" y="164" fill={`${P}aa`} fontSize="8.5" fontFamily="monospace">  (null)</text>
      <text x="296" y="177" fill={`${P}50`} fontSize="8" fontFamily="monospace">ref.current?.focus()  // safe</text>

      <rect x="286" y="178" width="208" height="28" rx="3" fill={`${P}04`} stroke={`${P}18`} strokeWidth="0.8" />
      <text x="390" y="190" fill={`${P}45`} fontSize="8" fontFamily="monospace" textAnchor="middle">useState(null) → type null only</text>
      <text x="390" y="202" fill={`${P}30`} fontSize="8" fontFamily="monospace" textAnchor="middle">always pass the generic</text>

      {/* === Column 3: Event Handlers === */}
      <rect x="528" y="26" width="236" height="186" rx="7" fill={`${P}05`} stroke={`${P}28`} strokeWidth="1.5" />
      <text x="646" y="45" fill={`${P}80`} fontSize="9.5" fontFamily="monospace" textAnchor="middle" fontWeight="700">Event Handlers</text>

      <rect x="542" y="53" width="208" height="46" rx="4" fill={`${P}0e`} stroke={`${P}30`} strokeWidth="1" />
      <text x="552" y="67" fill={`${P}aa`} fontSize="8.5" fontFamily="monospace">const handleChange:</text>
      <text x="552" y="81" fill="rgba(134,239,172,0.85)" fontSize="8.5" fontFamily="monospace">  ChangeEventHandler</text>
      <text x="648" y="81" fill="rgba(96,165,250,0.85)" fontSize="8.5" fontFamily="monospace">{'<HTMLInputElement>'}</text>
      <text x="552" y="93" fill={`${P}aa`} fontSize="8.5" fontFamily="monospace">  = (e) =&gt; e.target.value</text>

      <rect x="542" y="106" width="208" height="44" rx="4" fill={`${P}0e`} stroke={`${P}30`} strokeWidth="1" />
      <text x="552" y="120" fill={`${P}aa`} fontSize="8.5" fontFamily="monospace">const handleClick:</text>
      <text x="552" y="133" fill="rgba(134,239,172,0.85)" fontSize="8.5" fontFamily="monospace">  MouseEventHandler</text>
      <text x="648" y="133" fill="rgba(96,165,250,0.85)" fontSize="8.5" fontFamily="monospace">{'<HTMLButtonElement>'}</text>
      <text x="552" y="146" fill={`${P}aa`} fontSize="8.5" fontFamily="monospace">  = (e) =&gt; e.currentTarget</text>

      <rect x="542" y="157" width="208" height="22" rx="4" fill={`${P}0e`} stroke={`${P}30`} strokeWidth="1" />
      <text x="552" y="171" fill={`${P}aa`} fontSize="8.5" fontFamily="monospace">FormEventHandler</text>
      <text x="642" y="171" fill="rgba(96,165,250,0.85)" fontSize="8.5" fontFamily="monospace">{'<HTMLFormElement>'}</text>

      <rect x="542" y="186" width="208" height="20" rx="3" fill={`${P}04`} stroke={`${P}18`} strokeWidth="0.8" />
      <text x="646" y="199" fill={`${P}40`} fontSize="8" fontFamily="monospace" textAnchor="middle">event.target is fully typed</text>
    </svg>
  )
}
