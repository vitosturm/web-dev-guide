export default function UseRefBanner() {
  const C = '#f472b6'
  return (
    <svg width="100%" viewBox="0 0 780 220" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', background: '#07101a' }}>
      <defs>
        <pattern id="dots-ur" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="13" cy="13" r="0.75" fill={`${C}18`} />
        </pattern>
        <radialGradient id="glow-ur" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={C} stopOpacity="0.07" />
          <stop offset="100%" stopColor={C} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="780" height="220" fill="url(#dots-ur)" />
      <rect width="780" height="220" fill="url(#glow-ur)" />

      {/* Title */}
      <text x="390" y="18" fill={`${C}55`} fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="600">useRef — mutable box that persists across renders</text>

      {/* ── Render timeline: 3 render boxes ── */}
      {/* Render 1 */}
      <rect x="50" y="38" width="120" height="46" rx="5" fill="none" stroke={`${C}44`} strokeWidth="1.2" />
      <text x="110" y="57" fill={`${C}bb`} fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="700">Render 1</text>
      <text x="110" y="73" fill="rgba(255,255,255,0.35)" fontSize="8" fontFamily="monospace" textAnchor="middle">state / props</text>

      {/* Render 2 */}
      <rect x="210" y="38" width="120" height="46" rx="5" fill="none" stroke={`${C}44`} strokeWidth="1.2" />
      <text x="270" y="57" fill={`${C}bb`} fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="700">Render 2</text>
      <text x="270" y="73" fill="rgba(255,255,255,0.35)" fontSize="8" fontFamily="monospace" textAnchor="middle">state / props</text>

      {/* Render 3 */}
      <rect x="370" y="38" width="120" height="46" rx="5" fill="none" stroke={`${C}44`} strokeWidth="1.2" />
      <text x="430" y="57" fill={`${C}bb`} fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="700">Render 3</text>
      <text x="430" y="73" fill="rgba(255,255,255,0.35)" fontSize="8" fontFamily="monospace" textAnchor="middle">state / props</text>

      {/* "···" hint for more renders */}
      <text x="516" y="66" fill={`${C}44`} fontSize="13" fontFamily="monospace">· · ·</text>

      {/* Arrows between render boxes */}
      <line x1="170" y1="61" x2="210" y2="61" stroke={`${C}33`} strokeWidth="1" markerEnd={`url(#arr-ur)`} />
      <line x1="330" y1="61" x2="370" y2="61" stroke={`${C}33`} strokeWidth="1" markerEnd={`url(#arr-ur)`} />

      {/* ── render cycle boundary dashed line ── */}
      <line x1="30" y1="102" x2="750" y2="102" stroke={`${C}25`} strokeWidth="1" strokeDasharray="6 4" />
      <text x="34" y="98" fill={`${C}33`} fontSize="8" fontFamily="monospace">render cycle boundary</text>

      {/* ── Labels above boundary (inside render world) ── */}
      <text x="34" y="118" fill="rgba(255,255,255,0.3)" fontSize="8.5" fontFamily="monospace">state change  →  re-render</text>

      {/* ── Ref box persists below boundary ── */}
      {/* Persistent ref box */}
      <rect x="50" y="130" width="300" height="52" rx="6" fill={`${C}0e`} stroke={C} strokeWidth="1.4" />
      <text x="66" y="149" fill={`${C}cc`} fontSize="9" fontFamily="monospace" fontWeight="700">ref  =  {'{'}</text>
      <text x="90" y="165" fill="rgba(255,255,255,0.7)" fontSize="9" fontFamily="monospace">current:  <tspan fill={C}>{'<input />'}</tspan></text>
      <text x="66" y="178" fill={`${C}cc`} fontSize="9" fontFamily="monospace">{'}'}</text>

      {/* "persists" badge */}
      <rect x="256" y="138" width="82" height="16" rx="4" fill={`${C}22`} stroke={`${C}55`} strokeWidth="0.8" />
      <text x="297" y="149" fill={C} fontSize="8" fontFamily="monospace" textAnchor="middle">persists ✓</text>

      {/* "ref.current change → no re-render" label */}
      <text x="34" y="200" fill="rgba(255,255,255,0.3)" fontSize="8.5" fontFamily="monospace">ref.current change  →  no re-render</text>

      {/* ── DOM element icon on the right ── */}
      <rect x="580" y="125" width="130" height="52" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" />
      <text x="645" y="147" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="monospace" textAnchor="middle">DOM node</text>
      <rect x="602" y="154" width="86" height="14" rx="3" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
      <text x="645" y="164" fill="rgba(255,255,255,0.6)" fontSize="8.5" fontFamily="monospace" textAnchor="middle">{'<input />'}</text>

      {/* ── Arrow: ref box → DOM node ── */}
      <defs>
        <marker id="arr-ur" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill={`${C}88`} />
        </marker>
        <marker id="arr-ur-dom" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" fill="rgba(255,255,255,0.35)" />
        </marker>
      </defs>
      {/* Curved path from ref box right edge to DOM node left edge */}
      <path d="M 350 156 C 460 156, 500 162, 580 162" fill="none" stroke={`${C}77`} strokeWidth="1.3" strokeDasharray="5 3" markerEnd="url(#arr-ur-dom)" />
      <text x="464" y="153" fill={`${C}88`} fontSize="8" fontFamily="monospace" textAnchor="middle">ref.current → DOM node</text>

      {/* Vertical connector lines from renders down to boundary */}
      <line x1="110" y1="84" x2="110" y2="102" stroke={`${C}22`} strokeWidth="1" strokeDasharray="3 3" />
      <line x1="270" y1="84" x2="270" y2="102" stroke={`${C}22`} strokeWidth="1" strokeDasharray="3 3" />
      <line x1="430" y1="84" x2="430" y2="102" stroke={`${C}22`} strokeWidth="1" strokeDasharray="3 3" />
    </svg>
  )
}
