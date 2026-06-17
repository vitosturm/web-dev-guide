export default function CustomHooksBanner() {
  const C = '#f472b6'
  return (
    <svg width="100%" viewBox="0 0 780 220" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', background: '#07101a' }}>
      <defs>
        <pattern id="dots-ch" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="13" cy="13" r="0.75" fill={`${C}18`} />
        </pattern>
        <radialGradient id="glow-ch" cx="50%" cy="50%" r="45%">
          <stop offset="0%" stopColor={C} stopOpacity="0.06" />
          <stop offset="100%" stopColor={C} stopOpacity="0" />
        </radialGradient>
        <marker id="arr-ch-down" markerWidth="7" markerHeight="7" refX="3.5" refY="6" orient="auto">
          <path d="M0,0 L3.5,7 L7,0 Z" fill="rgba(255,255,255,0.3)" />
        </marker>
        <marker id="arr-ch-up-l" markerWidth="7" markerHeight="7" refX="3.5" refY="1" orient="auto">
          <path d="M0,7 L3.5,0 L7,7 Z" fill={`${C}88`} />
        </marker>
        <marker id="arr-ch-up-r" markerWidth="7" markerHeight="7" refX="3.5" refY="1" orient="auto">
          <path d="M0,7 L3.5,0 L7,7 Z" fill={`${C}88`} />
        </marker>
      </defs>

      <rect width="780" height="220" fill="url(#dots-ch)" />
      <rect width="780" height="220" fill="url(#glow-ch)" />

      {/* ── LEFT COMPONENT: <SearchBar /> ── */}
      <rect x="30" y="18" width="210" height="100" rx="7" fill={`${C}0d`} stroke={`${C}40`} strokeWidth="1.5" />
      <text x="135" y="36" fill={`${C}cc`} fontSize="10.5" fontFamily="monospace" textAnchor="middle" fontWeight="700">&lt;SearchBar /&gt;</text>
      <line x1="48" y1="44" x2="222" y2="44" stroke={`${C}28`} strokeWidth="1" />

      {/* Duplicated code lines inside SearchBar */}
      <text x="48" y="60" fill="rgba(255,255,255,0.2)" fontSize="9" fontFamily="monospace">const [value, setValue] =</text>
      <text x="175" y="60" fill={`${C}55`} fontSize="9" fontFamily="monospace">useState('')</text>
      <rect x="48" y="52" width="174" height="10" rx="2" fill="rgba(255,80,80,0.07)" />

      <text x="48" y="74" fill="rgba(255,255,255,0.2)" fontSize="9" fontFamily="monospace">const [debounced,</text>
      <rect x="48" y="66" width="174" height="10" rx="2" fill="rgba(255,80,80,0.07)" />

      <text x="48" y="88" fill="rgba(255,255,255,0.2)" fontSize="9" fontFamily="monospace">  setDebounced] = useState('')</text>
      <rect x="48" y="80" width="174" height="10" rx="2" fill="rgba(255,80,80,0.07)" />

      <text x="48" y="102" fill="rgba(255,255,255,0.2)" fontSize="9" fontFamily="monospace">useEffect(() =&gt; &#123; ... &#125;,</text>
      <rect x="48" y="94" width="174" height="10" rx="2" fill="rgba(255,80,80,0.07)" />

      <text x="48" y="116" fill="rgba(255,255,255,0.2)" fontSize="9" fontFamily="monospace">  [value, delay])</text>
      <rect x="48" y="108" width="174" height="10" rx="2" fill="rgba(255,80,80,0.07)" />

      {/* ── RIGHT COMPONENT: <FilterPanel /> ── */}
      <rect x="540" y="18" width="210" height="100" rx="7" fill={`${C}0d`} stroke={`${C}40`} strokeWidth="1.5" />
      <text x="645" y="36" fill={`${C}cc`} fontSize="10.5" fontFamily="monospace" textAnchor="middle" fontWeight="700">&lt;FilterPanel /&gt;</text>
      <line x1="558" y1="44" x2="732" y2="44" stroke={`${C}28`} strokeWidth="1" />

      {/* Duplicated code lines inside FilterPanel */}
      <rect x="558" y="52" width="174" height="10" rx="2" fill="rgba(255,80,80,0.07)" />
      <text x="558" y="60" fill="rgba(255,255,255,0.2)" fontSize="9" fontFamily="monospace">const [value, setValue] =</text>

      <rect x="558" y="66" width="174" height="10" rx="2" fill="rgba(255,80,80,0.07)" />
      <text x="558" y="74" fill="rgba(255,255,255,0.2)" fontSize="9" fontFamily="monospace">const [debounced,</text>

      <rect x="558" y="80" width="174" height="10" rx="2" fill="rgba(255,80,80,0.07)" />
      <text x="558" y="88" fill="rgba(255,255,255,0.2)" fontSize="9" fontFamily="monospace">  setDebounced] = useState('')</text>

      <rect x="558" y="94" width="174" height="10" rx="2" fill="rgba(255,80,80,0.07)" />
      <text x="558" y="102" fill="rgba(255,255,255,0.2)" fontSize="9" fontFamily="monospace">useEffect(() =&gt; &#123; ... &#125;,</text>

      <rect x="558" y="108" width="174" height="10" rx="2" fill="rgba(255,80,80,0.07)" />
      <text x="558" y="116" fill="rgba(255,255,255,0.2)" fontSize="9" fontFamily="monospace">  [value, delay])</text>

      {/* ── ARROWS: Components down to hook ── */}
      <line x1="135" y1="118" x2="330" y2="166" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arr-ch-down)" />
      <line x1="645" y1="118" x2="452" y2="166" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arr-ch-down)" />

      {/* ── HOOK BOX (center bottom) ── */}
      <text x="390" y="157" fill={`${C}99`} fontSize="9" fontFamily="monospace" textAnchor="middle" letterSpacing="2">custom hook</text>
      <rect x="268" y="163" width="244" height="46" rx="8" fill={`${C}14`} stroke={C} strokeWidth="2" />
      <text x="390" y="183" fill={C} fontSize="12" fontFamily="monospace" textAnchor="middle" fontWeight="700">useDebounce(value, 300)</text>
      <text x="390" y="200" fill={`${C}77`} fontSize="9.5" fontFamily="monospace" textAnchor="middle">encapsulates useState + useEffect</text>

      {/* ── RETURN VALUE: upward arrows back to components ── */}
      {/* Left return arrow */}
      <line x1="310" y1="163" x2="160" y2="130" stroke={`${C}66`} strokeWidth="1.5" markerEnd="url(#arr-ch-up-l)" />
      <text x="198" y="153" fill={`${C}88`} fontSize="8.5" fontFamily="monospace" textAnchor="middle">&#123; debounced &#125;</text>

      {/* Right return arrow */}
      <line x1="470" y1="163" x2="622" y2="130" stroke={`${C}66`} strokeWidth="1.5" markerEnd="url(#arr-ch-up-r)" />
      <text x="582" y="153" fill={`${C}88`} fontSize="8.5" fontFamily="monospace" textAnchor="middle">&#123; debounced &#125;</text>

      {/* ── CLEAN USAGE in components (after refactor) ── */}
      {/* SearchBar clean line */}
      <rect x="48" y="122" width="174" height="12" rx="3" fill={`${C}15`} stroke={`${C}33`} strokeWidth="1" />
      <text x="135" y="132" fill={`${C}cc`} fontSize="9" fontFamily="monospace" textAnchor="middle">useDebounce(query, 300)</text>

      {/* FilterPanel clean line */}
      <rect x="558" y="122" width="174" height="12" rx="3" fill={`${C}15`} stroke={`${C}33`} strokeWidth="1" />
      <text x="645" y="132" fill={`${C}cc`} fontSize="9" fontFamily="monospace" textAnchor="middle">useDebounce(filter, 300)</text>
    </svg>
  )
}
