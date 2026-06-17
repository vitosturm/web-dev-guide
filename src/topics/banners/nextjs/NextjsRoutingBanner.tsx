export default function NextjsRoutingBanner() {
  const C = '#a3b4c6'
  const ACC = '#7dd3fc'
  return (
    <svg width="100%" viewBox="0 0 780 220" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', background: '#07101a' }}>
      <defs>
        <pattern id="dots-nr" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="13" cy="13" r="0.75" fill={`${C}18`} />
        </pattern>
        <radialGradient id="glow-nr" cx="38%" cy="50%" r="55%">
          <stop offset="0%" stopColor={C} stopOpacity="0.06" />
          <stop offset="100%" stopColor={C} stopOpacity="0" />
        </radialGradient>
        <marker id="arr-nr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill={`${C}66`} />
        </marker>
      </defs>
      <rect width="780" height="220" fill="url(#dots-nr)" />
      <rect width="780" height="220" fill="url(#glow-nr)" />

      {/* ── Title ── */}
      <text x="762" y="22" fill={`${C}66`} fontSize="9.5" fontFamily="monospace" fontWeight="600" textAnchor="end">File-System Routing</text>
      <text x="762" y="34" fill={`${C}33`} fontSize="8" fontFamily="monospace" textAnchor="end">Next.js App Router</text>

      {/* ── Vertical tree guide line ── */}
      <line x1="46" y1="58" x2="46" y2="192" stroke={`${C}28`} strokeWidth="1" />

      {/* ── app/ folder row ── */}
      {/* folder icon */}
      <rect x="22" y="48" width="12" height="9" rx="1.5" fill={`${C}33`} />
      <rect x="22" y="44" width="6" height="4" rx="1" fill={`${C}33`} />
      <text x="40" y="57" fill={C} fontSize="11" fontFamily="monospace" fontWeight="700">app/</text>

      {/* ── page.tsx → / ── */}
      {/* tree branch */}
      <line x1="46" y1="80" x2="62" y2="80" stroke={`${C}28`} strokeWidth="1" />
      {/* file icon */}
      <rect x="64" y="74" width="9" height="11" rx="1" fill="none" stroke={`${C}44`} strokeWidth="1" />
      <line x1="69" y1="74" x2="73" y2="78" stroke={`${C}44`} strokeWidth="1" />
      <text x="78" y="83" fill={`${C}cc`} fontSize="10" fontFamily="monospace">page.tsx</text>
      {/* dashed arrow */}
      <line x1="148" y1="80" x2="396" y2="80" stroke={`${C}40`} strokeWidth="1.2" strokeDasharray="5 4" markerEnd="url(#arr-nr)" />
      {/* URL chip */}
      <rect x="400" y="70" width="68" height="20" rx="10" fill={`${C}10`} stroke={`${C}40`} strokeWidth="1.2" />
      <text x="434" y="84" fill={`${C}cc`} fontSize="10" fontFamily="monospace" textAnchor="middle">/</text>

      {/* ── about/ folder row ── */}
      <line x1="46" y1="108" x2="62" y2="108" stroke={`${C}28`} strokeWidth="1" />
      <rect x="64" y="102" width="12" height="9" rx="1.5" fill={`${C}2a`} />
      <rect x="64" y="98" width="6" height="4" rx="1" fill={`${C}2a`} />
      <text x="82" y="111" fill={`${C}aa`} fontSize="10" fontFamily="monospace">about/</text>

      {/* ── about/page.tsx → /about ── */}
      <line x1="46" y1="128" x2="56" y2="128" stroke={`${C}28`} strokeWidth="1" />
      <line x1="56" y1="108" x2="56" y2="128" stroke={`${C}28`} strokeWidth="1" />
      <line x1="56" y1="128" x2="72" y2="128" stroke={`${C}28`} strokeWidth="1" />
      {/* file icon */}
      <rect x="74" y="122" width="9" height="11" rx="1" fill="none" stroke={`${C}44`} strokeWidth="1" />
      <line x1="79" y1="122" x2="83" y2="126" stroke={`${C}44`} strokeWidth="1" />
      <text x="88" y="131" fill={`${C}aa`} fontSize="10" fontFamily="monospace">page.tsx</text>
      {/* dashed arrow */}
      <line x1="158" y1="128" x2="396" y2="128" stroke={`${C}40`} strokeWidth="1.2" strokeDasharray="5 4" markerEnd="url(#arr-nr)" />
      {/* URL chip */}
      <rect x="400" y="118" width="90" height="20" rx="10" fill={`${C}10`} stroke={`${C}40`} strokeWidth="1.2" />
      <text x="445" y="132" fill={`${C}cc`} fontSize="10" fontFamily="monospace" textAnchor="middle">/about</text>

      {/* ── blog/ folder row ── */}
      <line x1="46" y1="155" x2="62" y2="155" stroke={`${C}28`} strokeWidth="1" />
      <rect x="64" y="149" width="12" height="9" rx="1.5" fill={`${C}2a`} />
      <rect x="64" y="145" width="6" height="4" rx="1" fill={`${C}2a`} />
      <text x="82" y="158" fill={`${C}aa`} fontSize="10" fontFamily="monospace">blog/</text>

      {/* ── [slug]/ folder row ── */}
      <line x1="46" y1="175" x2="56" y2="175" stroke={`${C}28`} strokeWidth="1" />
      <line x1="56" y1="155" x2="56" y2="175" stroke={`${C}28`} strokeWidth="1" />
      <line x1="56" y1="175" x2="72" y2="175" stroke={`${C}28`} strokeWidth="1" />
      {/* dynamic segment folder — highlighted */}
      <rect x="74" y="169" width="12" height="9" rx="1.5" fill={`${ACC}30`} />
      <rect x="74" y="165" width="6" height="4" rx="1" fill={`${ACC}30`} />
      <text x="92" y="178" fill={ACC} fontSize="10" fontFamily="monospace" fontWeight="700">[slug]/</text>

      {/* ── blog/[slug]/page.tsx → /blog/:slug ── */}
      <line x1="46" y1="195" x2="56" y2="195" stroke={`${C}28`} strokeWidth="1" />
      <line x1="56" y1="175" x2="56" y2="195" stroke={`${C}28`} strokeWidth="1" />
      <line x1="56" y1="195" x2="66" y2="195" stroke={`${C}28`} strokeWidth="1" />
      <line x1="66" y1="195" x2="76" y2="195" stroke={`${C}28`} strokeWidth="1" />
      <line x1="76" y1="195" x2="86" y2="195" stroke={`${C}28`} strokeWidth="1" />
      {/* file icon */}
      <rect x="88" y="189" width="9" height="11" rx="1" fill="none" stroke={`${ACC}55`} strokeWidth="1" />
      <line x1="93" y1="189" x2="97" y2="193" stroke={`${ACC}55`} strokeWidth="1" />
      <text x="102" y="198" fill={`${ACC}cc`} fontSize="10" fontFamily="monospace">page.tsx</text>
      {/* dashed arrow */}
      <line x1="172" y1="195" x2="396" y2="195" stroke={`${ACC}55`} strokeWidth="1.2" strokeDasharray="5 4" markerEnd="url(#arr-nr)" />
      {/* URL chip — dynamic highlight */}
      <rect x="400" y="185" width="144" height="20" rx="10" fill={`${ACC}10`} stroke={`${ACC}55`} strokeWidth="1.2" />
      {/* /blog/ in normal color, :slug in accent */}
      <text x="412" y="199" fill={`${C}cc`} fontSize="10" fontFamily="monospace">/blog/</text>
      <text x="456" y="199" fill={ACC} fontSize="10" fontFamily="monospace" fontWeight="700">:slug</text>

      {/* ── Dynamic segment label badge ── */}
      <rect x="552" y="158" width="120" height="24" rx="4" fill={`${ACC}12`} stroke={`${ACC}40`} strokeWidth="1" strokeDasharray="4 3" />
      <text x="612" y="168" fill={ACC} fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="600">dynamic segment</text>
      <text x="612" y="179" fill={`${ACC}88`} fontSize="8" fontFamily="monospace" textAnchor="middle">matches any value</text>
      {/* connector from badge to [slug] label */}
      <line x1="552" y1="170" x2="546" y2="170" stroke={`${ACC}40`} strokeWidth="1" strokeDasharray="3 3" />
      <line x1="546" y1="170" x2="546" y2="178" stroke={`${ACC}40`} strokeWidth="1" strokeDasharray="3 3" />
      <line x1="546" y1="178" x2="140" y2="178" stroke={`${ACC}40`} strokeWidth="1" strokeDasharray="3 3" />
      <line x1="140" y1="178" x2="140" y2="178" stroke={`${ACC}40`} strokeWidth="1" />
    </svg>
  )
}
