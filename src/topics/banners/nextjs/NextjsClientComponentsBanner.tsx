export default function NextjsClientComponentsBanner() {
  const C = '#a3b4c6'
  const BLUE = '#60a5fa'
  return (
    <svg width="100%" viewBox="0 0 780 220" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', background: '#07101a' }}>
      <defs>
        <pattern id="dots-ncc" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="13" cy="13" r="0.75" fill={`${C}18`} />
        </pattern>
        <radialGradient id="glow-ncc" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={BLUE} stopOpacity="0.07" />
          <stop offset="100%" stopColor={BLUE} stopOpacity="0" />
        </radialGradient>
        <marker id="arr-ncc" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill={`${C}55`} />
        </marker>
      </defs>
      <rect width="780" height="220" fill="url(#dots-ncc)" />
      <rect width="780" height="220" fill="url(#glow-ncc)" />

      {/* ── Center: Client Component box ── */}
      <rect x="272" y="18" width="236" height="158" rx="7" fill={`${BLUE}0d`} stroke={BLUE} strokeWidth="1.8" />
      {/* "use client" directive banner at top of box */}
      <rect x="272" y="18" width="236" height="26" rx="7" fill={`${BLUE}22`} />
      <rect x="272" y="32" width="236" height="12" fill={`${BLUE}22`} />
      <text x="390" y="35" fill={BLUE} fontSize="11" fontFamily="monospace" fontWeight="700" textAnchor="middle">"use client"</text>

      {/* Component label */}
      <text x="390" y="57" fill={`${C}99`} fontSize="8.5" fontFamily="monospace" textAnchor="middle">ClientComponent.tsx</text>

      {/* Divider */}
      <line x1="288" y1="63" x2="492" y2="63" stroke={`${BLUE}33`} strokeWidth="1" />

      {/* Enabled hooks / capabilities */}
      <text x="288" y="78" fill={`${C}66`} fontSize="8" fontFamily="monospace">enabled:</text>

      {/* useState */}
      <rect x="288" y="84" width="80" height="18" rx="3" fill={`${BLUE}18`} stroke={`${BLUE}55`} strokeWidth="1" />
      <text x="328" y="97" fill={BLUE} fontSize="9" fontFamily="monospace" textAnchor="middle">useState</text>

      {/* useEffect */}
      <rect x="378" y="84" width="84" height="18" rx="3" fill={`${BLUE}18`} stroke={`${BLUE}55`} strokeWidth="1" />
      <text x="420" y="97" fill={BLUE} fontSize="9" fontFamily="monospace" textAnchor="middle">useEffect</text>

      {/* onClick */}
      <rect x="288" y="108" width="68" height="18" rx="3" fill={`${BLUE}18`} stroke={`${BLUE}55`} strokeWidth="1" />
      <text x="322" y="121" fill={BLUE} fontSize="9" fontFamily="monospace" textAnchor="middle">onClick</text>

      {/* useRef */}
      <rect x="364" y="108" width="56" height="18" rx="3" fill={`${BLUE}18`} stroke={`${BLUE}55`} strokeWidth="1" />
      <text x="392" y="121" fill={BLUE} fontSize="9" fontFamily="monospace" textAnchor="middle">useRef</text>

      {/* useCallback */}
      <rect x="428" y="108" width="80" height="18" rx="3" fill={`${BLUE}18`} stroke={`${BLUE}55`} strokeWidth="1" />
      <text x="468" y="121" fill={BLUE} fontSize="9" fontFamily="monospace" textAnchor="middle">useCallback</text>

      {/* context */}
      <rect x="288" y="132" width="62" height="18" rx="3" fill={`${BLUE}18`} stroke={`${BLUE}55`} strokeWidth="1" />
      <text x="319" y="145" fill={BLUE} fontSize="9" fontFamily="monospace" textAnchor="middle">useContext</text>

      {/* custom hooks */}
      <rect x="358" y="132" width="90" height="18" rx="3" fill={`${BLUE}18`} stroke={`${BLUE}55`} strokeWidth="1" />
      <text x="403" y="145" fill={BLUE} fontSize="9" fontFamily="monospace" textAnchor="middle">custom hooks</text>

      {/* ── Left: Server Component tree ── */}
      {/* Server Component box */}
      <rect x="20" y="32" width="140" height="78" rx="6" fill={`${C}07`} stroke={`${C}44`} strokeWidth="1.4" />
      <text x="90" y="48" fill={`${C}bb`} fontSize="9.5" fontFamily="monospace" fontWeight="700" textAnchor="middle">ServerComponent</text>
      <text x="90" y="61" fill={`${C}55`} fontSize="8" fontFamily="monospace" textAnchor="middle">async function Page()</text>

      {/* "cannot use hooks" note */}
      <rect x="24" y="68" width="132" height="34" rx="4" fill="#f8717115" stroke="#f8717166" strokeWidth="1" />
      <text x="90" y="81" fill="#f87171" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="600">❌ cannot use hooks</text>
      <text x="90" y="93" fill="#f8717188" fontSize="7.5" fontFamily="monospace" textAnchor="middle">no useState / useEffect</text>

      {/* Child node below server component */}
      <rect x="48" y="120" width="84" height="22" rx="4" fill={`${C}07`} stroke={`${C}33`} strokeWidth="1" strokeDasharray="5 3" />
      <text x="90" y="135" fill={`${C}66`} fontSize="8.5" fontFamily="monospace" textAnchor="middle">layout.tsx</text>

      {/* Connector server → child */}
      <line x1="90" y1="110" x2="90" y2="120" stroke={`${C}44`} strokeWidth="1.2" markerEnd="url(#arr-ncc)" />

      {/* Arrow: server tries to reach client */}
      <line x1="160" y1="70" x2="268" y2="70" stroke={`${C}44`} strokeWidth="1.2" strokeDasharray="5 3" markerEnd="url(#arr-ncc)" />
      <text x="214" y="62" fill={`${C}55`} fontSize="7.5" fontFamily="monospace" textAnchor="middle">passes props ✓</text>
      <text x="214" y="82" fill="#f8717177" fontSize="7.5" fontFamily="monospace" textAnchor="middle">no callbacks ✗</text>

      {/* ── Right: What Client Components CAN do ── */}
      <text x="536" y="29" fill={`${C}77`} fontSize="8.5" fontFamily="monospace" fontWeight="600">CAN DO:</text>

      {/* Chips */}
      {/* browser APIs */}
      <rect x="532" y="34" width="94" height="18" rx="9" fill={`${BLUE}14`} stroke={`${BLUE}44`} strokeWidth="1" />
      <text x="579" y="47" fill={`${C}cc`} fontSize="8.5" fontFamily="monospace" textAnchor="middle">browser APIs</text>

      {/* event handlers */}
      <rect x="532" y="58" width="102" height="18" rx="9" fill={`${BLUE}14`} stroke={`${BLUE}44`} strokeWidth="1" />
      <text x="583" y="71" fill={`${C}cc`} fontSize="8.5" fontFamily="monospace" textAnchor="middle">event handlers</text>

      {/* animations */}
      <rect x="532" y="82" width="86" height="18" rx="9" fill={`${BLUE}14`} stroke={`${BLUE}44`} strokeWidth="1" />
      <text x="575" y="95" fill={`${C}cc`} fontSize="8.5" fontFamily="monospace" textAnchor="middle">animations</text>

      {/* real-time updates */}
      <rect x="532" y="106" width="118" height="18" rx="9" fill={`${BLUE}14`} stroke={`${BLUE}44`} strokeWidth="1" />
      <text x="591" y="119" fill={`${C}cc`} fontSize="8.5" fontFamily="monospace" textAnchor="middle">real-time updates</text>

      {/* localStorage */}
      <rect x="532" y="130" width="96" height="18" rx="9" fill={`${BLUE}14`} stroke={`${BLUE}44`} strokeWidth="1" />
      <text x="580" y="143" fill={`${C}cc`} fontSize="8.5" fontFamily="monospace" textAnchor="middle">localStorage</text>

      {/* Connector: client box → right chips */}
      <line x1="508" y1="97" x2="530" y2="97" stroke={`${BLUE}44`} strokeWidth="1.2" markerEnd="url(#arr-ncc)" />

      {/* ── Bottom label ── */}
      <rect x="0" y="183" width="780" height="37" fill={`${BLUE}09`} />
      <line x1="0" y1="183" x2="780" y2="183" stroke={`${BLUE}33`} strokeWidth="1" />
      <text x="390" y="198" fill={`${C}99`} fontSize="9" fontFamily="monospace" textAnchor="middle">
        Client Components still SSR on first load —
      </text>
      <text x="390" y="212" fill={`${C}66`} fontSize="9" fontFamily="monospace" textAnchor="middle">
        they hydrate in the browser
      </text>

      {/* Top-right label */}
      <text x="758" y="14" fill={`${C}55`} fontSize="8.5" fontFamily="monospace" textAnchor="end" fontWeight="600">Client Components</text>
    </svg>
  )
}
