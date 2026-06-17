export default function EnumsBanner() {
  const P = '#818cf8'
  return (
    <svg width="100%" viewBox="0 0 780 220" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', background: '#07101a' }}>
      <defs>
        <pattern id="dots-enm" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="13" cy="13" r="0.75" fill={`${P}15`} />
        </pattern>
        <radialGradient id="glow-enm" cx="50%" cy="50%" r="45%">
          <stop offset="0%" stopColor={P} stopOpacity="0.05" />
          <stop offset="100%" stopColor={P} stopOpacity="0" />
        </radialGradient>
        <marker id="arrow-enm" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={`${P}80`} />
        </marker>
      </defs>
      <rect width="780" height="220" fill="url(#dots-enm)" />
      <rect width="780" height="220" fill="url(#glow-enm)" />

      <text x="390" y="18" fill={`${P}55`} fontSize="9" fontFamily="monospace" textAnchor="middle">enums — TypeScript</text>

      {/* === Column 1: Numeric Enum === */}
      <rect x="16" y="26" width="230" height="186" rx="7" fill={`${P}05`} stroke={`${P}28`} strokeWidth="1.5" />
      <text x="131" y="45" fill={`${P}80`} fontSize="9.5" fontFamily="monospace" textAnchor="middle" fontWeight="700">Numeric Enum</text>

      <rect x="30" y="53" width="202" height="80" rx="4" fill={`${P}0e`} stroke={`${P}30`} strokeWidth="1" />
      <text x="40" y="68" fill={`${P}80`} fontSize="9" fontFamily="monospace" fontWeight="700">enum</text>
      <text x="72" y="68" fill="rgba(96,165,250,0.9)" fontSize="9" fontFamily="monospace" fontWeight="700"> Direction</text>
      <text x="144" y="68" fill={`${P}60`} fontSize="9" fontFamily="monospace"> {'{'}</text>
      <text x="48" y="83" fill="rgba(134,239,172,0.85)" fontSize="9" fontFamily="monospace">  Up,</text>
      <text x="140" y="83" fill={`${P}45`} fontSize="8" fontFamily="monospace">// = 0</text>
      <text x="48" y="96" fill="rgba(134,239,172,0.85)" fontSize="9" fontFamily="monospace">  Down,</text>
      <text x="140" y="96" fill={`${P}45`} fontSize="8" fontFamily="monospace">// = 1</text>
      <text x="48" y="109" fill="rgba(134,239,172,0.85)" fontSize="9" fontFamily="monospace">  Left,</text>
      <text x="140" y="109" fill={`${P}45`} fontSize="8" fontFamily="monospace">// = 2</text>
      <text x="48" y="122" fill="rgba(134,239,172,0.85)" fontSize="9" fontFamily="monospace">  Right</text>
      <text x="140" y="122" fill={`${P}45`} fontSize="8" fontFamily="monospace">// = 3</text>
      <text x="40" y="128" fill={`${P}60`} fontSize="9" fontFamily="monospace">{'}'}</text>

      <line x1="131" y1="134" x2="131" y2="148" stroke={`${P}50`} strokeWidth="1.2" markerEnd="url(#arrow-enm)" />

      <rect x="30" y="150" width="202" height="18" rx="3" fill={`${P}10`} stroke={`${P}40`} strokeWidth="1" />
      <text x="131" y="163" fill={`${P}ee`} fontSize="9" fontFamily="monospace" textAnchor="middle">Direction.Up === 0</text>
      <text x="40" y="184" fill={`${P}55`} fontSize="8.5" fontFamily="monospace">Direction.Down === 1</text>
      <text x="40" y="198" fill={`${P}40`} fontSize="8" fontFamily="monospace">// auto-increments from 0</text>

      {/* === Column 2: String Enum === */}
      <rect x="275" y="26" width="230" height="186" rx="7" fill={`${P}05`} stroke={`${P}28`} strokeWidth="1.5" />
      <text x="390" y="45" fill={`${P}80`} fontSize="9.5" fontFamily="monospace" textAnchor="middle" fontWeight="700">String Enum</text>

      <rect x="289" y="53" width="202" height="88" rx="4" fill={`${P}0e`} stroke={`${P}30`} strokeWidth="1" />
      <text x="299" y="68" fill={`${P}80`} fontSize="9" fontFamily="monospace" fontWeight="700">enum</text>
      <text x="331" y="68" fill="rgba(96,165,250,0.9)" fontSize="9" fontFamily="monospace" fontWeight="700"> Status</text>
      <text x="381" y="68" fill={`${P}60`} fontSize="9" fontFamily="monospace"> {'{'}</text>
      <text x="307" y="83" fill="rgba(134,239,172,0.85)" fontSize="9" fontFamily="monospace">  Pending</text>
      <text x="355" y="83" fill={`${P}60`} fontSize="9" fontFamily="monospace"> = </text>
      <text x="370" y="83" fill="rgba(251,191,36,0.85)" fontSize="9" fontFamily="monospace">'pending',</text>
      <text x="307" y="97" fill="rgba(134,239,172,0.85)" fontSize="9" fontFamily="monospace">  Active</text>
      <text x="349" y="97" fill={`${P}60`} fontSize="9" fontFamily="monospace">  = </text>
      <text x="364" y="97" fill="rgba(251,191,36,0.85)" fontSize="9" fontFamily="monospace">'active',</text>
      <text x="307" y="111" fill="rgba(134,239,172,0.85)" fontSize="9" fontFamily="monospace">  Closed</text>
      <text x="351" y="111" fill={`${P}60`} fontSize="9" fontFamily="monospace">  = </text>
      <text x="366" y="111" fill="rgba(251,191,36,0.85)" fontSize="9" fontFamily="monospace">'closed',</text>
      <text x="299" y="132" fill={`${P}60`} fontSize="9" fontFamily="monospace">{'}'}</text>

      <line x1="390" y1="142" x2="390" y2="156" stroke={`${P}50`} strokeWidth="1.2" markerEnd="url(#arrow-enm)" />

      <rect x="289" y="158" width="202" height="18" rx="3" fill={`${P}10`} stroke={`${P}40`} strokeWidth="1" />
      <text x="390" y="171" fill={`${P}ee`} fontSize="9" fontFamily="monospace" textAnchor="middle">Status.Pending === 'pending'</text>
      <text x="299" y="190" fill={`${P}55`} fontSize="8.5" fontFamily="monospace">readable in logs &amp; APIs</text>
      <text x="299" y="203" fill={`${P}40`} fontSize="8" fontFamily="monospace">// explicit value = no surprises</text>

      {/* === Column 3: const enum / union alternative === */}
      <rect x="534" y="26" width="230" height="186" rx="7" fill={`${P}05`} stroke={`${P}28`} strokeWidth="1.5" />
      <text x="649" y="45" fill={`${P}80`} fontSize="9.5" fontFamily="monospace" textAnchor="middle" fontWeight="700">const enum</text>

      <rect x="548" y="53" width="202" height="62" rx="4" fill={`${P}0e`} stroke={`${P}30`} strokeWidth="1" />
      <text x="558" y="68" fill={`${P}55`} fontSize="8.5" fontFamily="monospace" fontWeight="700">const</text>
      <text x="591" y="68" fill={`${P}80`} fontSize="8.5" fontFamily="monospace" fontWeight="700"> enum</text>
      <text x="627" y="68" fill="rgba(96,165,250,0.9)" fontSize="8.5" fontFamily="monospace" fontWeight="700"> Color</text>
      <text x="667" y="68" fill={`${P}60`} fontSize="8.5" fontFamily="monospace"> {'{'}</text>
      <text x="566" y="83" fill="rgba(134,239,172,0.85)" fontSize="8.5" fontFamily="monospace">  Red = 'red', Green = 'green'</text>
      <text x="558" y="98" fill={`${P}60`} fontSize="8.5" fontFamily="monospace">{'}'}</text>
      <text x="558" y="111" fill={`${P}40`} fontSize="8" fontFamily="monospace">// inlined at compile time</text>

      <rect x="548" y="124" width="202" height="48" rx="4" fill="rgba(134,239,172,0.06)" stroke="rgba(134,239,172,0.25)" strokeWidth="1" />
      <text x="649" y="140" fill="rgba(134,239,172,0.8)" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="700">Union Alternative</text>
      <text x="558" y="155" fill={`${P}70`} fontSize="8.5" fontFamily="monospace">type Dir =</text>
      <text x="610" y="155" fill="rgba(251,191,36,0.85)" fontSize="8.5" fontFamily="monospace"> 'up' | 'down'</text>
      <text x="558" y="168" fill={`${P}45`} fontSize="8" fontFamily="monospace">// simpler, no enum overhead</text>

      <rect x="548" y="180" width="202" height="26" rx="3" fill={`${P}04`} stroke={`${P}18`} strokeWidth="0.8" />
      <text x="649" y="191" fill={`${P}55`} fontSize="7.5" fontFamily="monospace" textAnchor="middle">prefer const enum or union</text>
      <text x="649" y="201" fill={`${P}35`} fontSize="7.5" fontFamily="monospace" textAnchor="middle">over regular enum in modern TS</text>
    </svg>
  )
}
