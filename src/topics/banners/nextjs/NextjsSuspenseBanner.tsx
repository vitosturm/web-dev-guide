export default function NextjsSuspenseBanner() {
  const C = '#a3b4c6'
  return (
    <svg width="100%" viewBox="0 0 780 220" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', background: '#07101a' }}>
      <defs>
        <pattern id="dots-ns" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="13" cy="13" r="0.75" fill={`${C}18`} />
        </pattern>
        <radialGradient id="glow-ns" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={C} stopOpacity="0.06" />
          <stop offset="100%" stopColor={C} stopOpacity="0" />
        </radialGradient>
        <marker id="arr-ns" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill={`${C}66`} />
        </marker>
      </defs>

      {/* Background layers */}
      <rect width="780" height="220" fill="url(#dots-ns)" />
      <rect width="780" height="220" fill="url(#glow-ns)" />

      {/* ── Title ── */}
      <text x="390" y="20" fill={`${C}88`} fontSize="9.5" fontFamily="monospace" fontWeight="700" textAnchor="middle">Streaming with Suspense</text>

      {/* ── Timeline rail ── */}
      <line x1="62" y1="110" x2="718" y2="110" stroke={`${C}22`} strokeWidth="1.5" />

      {/* ── Arrow segments t0→t500 ── */}
      <line x1="238" y1="110" x2="312" y2="110" stroke={`${C}55`} strokeWidth="1.5" markerEnd="url(#arr-ns)" />
      {/* ── Arrow segments t500→t1200 ── */}
      <line x1="544" y1="110" x2="618" y2="110" stroke={`${C}55`} strokeWidth="1.5" markerEnd="url(#arr-ns)" />

      {/* ══════════════════════════════════════════
          STATE 1 — t=0  Shell HTML arrives
          Browser frame x=30, y=32, w=208, h=150
      ══════════════════════════════════════════ */}
      {/* Browser chrome */}
      <rect x="30" y="32" width="208" height="146" rx="5" fill={`${C}06`} stroke={`${C}44`} strokeWidth="1.5" />
      {/* Address bar strip */}
      <rect x="30" y="32" width="208" height="18" rx="5" fill={`${C}10`} />
      <rect x="30" y="44" width="208" height="6" fill={`${C}10`} />
      <circle cx="44" cy="41" r="3" fill={`${C}22`} />
      <circle cx="54" cy="41" r="3" fill={`${C}22`} />
      <circle cx="64" cy="41" r="3" fill={`${C}22`} />
      <rect x="78" y="36" width="110" height="10" rx="3" fill={`${C}12`} stroke={`${C}22`} strokeWidth="1" />

      {/* Header bar — visible */}
      <rect x="42" y="56" width="184" height="16" rx="3" fill={`${C}18`} stroke={`${C}33`} strokeWidth="1" />
      <text x="50" y="67" fill={`${C}88`} fontSize="7.5" fontFamily="monospace">■ header</text>
      <rect x="178" y="59" width="36" height="10" rx="2" fill={`${C}14`} />
      <text x="196" y="67" fill={`${C}55`} fontSize="6.5" fontFamily="monospace" textAnchor="middle">nav</text>

      {/* Nav strip */}
      <rect x="42" y="76" width="184" height="10" rx="2" fill={`${C}0e`} />
      <rect x="46" y="79" width="22" height="4" rx="1" fill={`${C}22`} />
      <rect x="72" y="79" width="22" height="4" rx="1" fill={`${C}22`} />
      <rect x="98" y="79" width="22" height="4" rx="1" fill={`${C}22`} />

      {/* Skeleton bars — content area */}
      <rect x="42" y="92" width="184" height="10" rx="2" fill={`${C}14`} stroke={`${C}20`} strokeWidth="1" strokeDasharray="3 2" />
      <rect x="42" y="106" width="140" height="8" rx="2" fill={`${C}10`} stroke={`${C}1a`} strokeWidth="1" strokeDasharray="3 2" />
      <rect x="42" y="118" width="164" height="8" rx="2" fill={`${C}10`} stroke={`${C}1a`} strokeWidth="1" strokeDasharray="3 2" />
      <rect x="42" y="130" width="110" height="8" rx="2" fill={`${C}0c`} stroke={`${C}18`} strokeWidth="1" strokeDasharray="3 2" />
      <rect x="42" y="142" width="184" height="24" rx="2" fill={`${C}08`} stroke={`${C}18`} strokeWidth="1" strokeDasharray="4 3" />
      {/* "skeleton" label */}
      <text x="134" y="157" fill={`${C}33`} fontSize="7" fontFamily="monospace" textAnchor="middle">skeleton</text>

      {/* t=0 timestamp label */}
      <text x="134" y="190" fill={`${C}55`} fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="700">t = 0</text>
      <text x="134" y="202" fill={`${C}33`} fontSize="7.5" fontFamily="monospace" textAnchor="middle">shell HTML arrives</text>

      {/* ══════════════════════════════════════════
          STATE 2 — t=500ms  First chunk
          Browser frame x=336, y=32, w=208, h=150
      ══════════════════════════════════════════ */}
      <rect x="336" y="32" width="208" height="146" rx="5" fill={`${C}06`} stroke={`${C}44`} strokeWidth="1.5" />
      <rect x="336" y="32" width="208" height="18" rx="5" fill={`${C}10`} />
      <rect x="336" y="44" width="208" height="6" fill={`${C}10`} />
      <circle cx="350" cy="41" r="3" fill={`${C}22`} />
      <circle cx="360" cy="41" r="3" fill={`${C}22`} />
      <circle cx="370" cy="41" r="3" fill={`${C}22`} />
      <rect x="384" y="36" width="110" height="10" rx="3" fill={`${C}12`} stroke={`${C}22`} strokeWidth="1" />

      {/* Header + nav — still visible */}
      <rect x="348" y="56" width="184" height="16" rx="3" fill={`${C}18`} stroke={`${C}33`} strokeWidth="1" />
      <text x="356" y="67" fill={`${C}88`} fontSize="7.5" fontFamily="monospace">■ header</text>
      <rect x="484" y="59" width="36" height="10" rx="2" fill={`${C}14`} />
      <text x="502" y="67" fill={`${C}55`} fontSize="6.5" fontFamily="monospace" textAnchor="middle">nav</text>
      <rect x="348" y="76" width="184" height="10" rx="2" fill={`${C}0e`} />
      <rect x="352" y="79" width="22" height="4" rx="1" fill={`${C}22`} />
      <rect x="378" y="79" width="22" height="4" rx="1" fill={`${C}22`} />
      <rect x="404" y="79" width="22" height="4" rx="1" fill={`${C}22`} />

      {/* First card — filled in */}
      <rect x="348" y="92" width="184" height="42" rx="3" fill={`${C}0e`} stroke={`${C}44`} strokeWidth="1.2" />
      <rect x="354" y="97" width="60" height="7" rx="1" fill={`${C}33`} />
      <rect x="354" y="108" width="140" height="5" rx="1" fill={`${C}22`} />
      <rect x="354" y="117" width="110" height="5" rx="1" fill={`${C}1a`} />
      <rect x="354" y="126" width="50" height="6" rx="2" fill={`${C}28`} stroke={`${C}44`} strokeWidth="1" />
      <text x="379" y="131" fill={`${C}77`} fontSize="5.5" fontFamily="monospace" textAnchor="middle">loaded ✓</text>

      {/* Remaining skeletons */}
      <rect x="348" y="138" width="184" height="12" rx="2" fill={`${C}10`} stroke={`${C}1a`} strokeWidth="1" strokeDasharray="3 2" />
      <rect x="348" y="154" width="130" height="10" rx="2" fill={`${C}0c`} stroke={`${C}18`} strokeWidth="1" strokeDasharray="3 2" />
      <text x="440" y="172" fill={`${C}30`} fontSize="7" fontFamily="monospace" textAnchor="middle">skeleton</text>

      {/* t=500 label */}
      <text x="440" y="190" fill={`${C}55`} fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="700">t = 500ms</text>
      <text x="440" y="202" fill={`${C}33`} fontSize="7.5" fontFamily="monospace" textAnchor="middle">first chunk streams in</text>

      {/* ══════════════════════════════════════════
          STATE 3 — t=1200ms  All data loaded
          Browser frame x=642, y=32, w=108, h=150
          (narrower to fit; scaled down)
      ══════════════════════════════════════════ */}
      <rect x="642" y="32" width="120" height="146" rx="5" fill={`${C}06`} stroke={`${C}66`} strokeWidth="1.8" />
      <rect x="642" y="32" width="120" height="18" rx="5" fill={`${C}12`} />
      <rect x="642" y="44" width="120" height="6" fill={`${C}12`} />
      <circle cx="654" cy="41" r="3" fill={`${C}28`} />
      <circle cx="663" cy="41" r="3" fill={`${C}28`} />
      <circle cx="672" cy="41" r="3" fill={`${C}28`} />
      <rect x="682" y="36" width="68" height="10" rx="3" fill={`${C}14`} stroke={`${C}28`} strokeWidth="1" />

      {/* Header + nav */}
      <rect x="650" y="56" width="104" height="14" rx="3" fill={`${C}20`} stroke={`${C}44`} strokeWidth="1" />
      <text x="656" y="65" fill={`${C}99`} fontSize="7" fontFamily="monospace">■ header</text>
      <rect x="650" y="74" width="104" height="8" rx="2" fill={`${C}10`} />
      <rect x="653" y="77" width="18" height="3" rx="1" fill={`${C}28`} />
      <rect x="674" y="77" width="18" height="3" rx="1" fill={`${C}28`} />
      <rect x="695" y="77" width="18" height="3" rx="1" fill={`${C}28`} />

      {/* Card 1 */}
      <rect x="650" y="86" width="104" height="26" rx="3" fill={`${C}0e`} stroke={`${C}44`} strokeWidth="1" />
      <rect x="655" y="90" width="40" height="5" rx="1" fill={`${C}33`} />
      <rect x="655" y="99" width="80" height="4" rx="1" fill={`${C}20`} />
      <rect x="655" y="106" width="60" height="4" rx="1" fill={`${C}1a`} />

      {/* Card 2 */}
      <rect x="650" y="116" width="104" height="26" rx="3" fill={`${C}0e`} stroke={`${C}44`} strokeWidth="1" />
      <rect x="655" y="120" width="38" height="5" rx="1" fill={`${C}33`} />
      <rect x="655" y="129" width="85" height="4" rx="1" fill={`${C}20`} />
      <rect x="655" y="136" width="50" height="4" rx="1" fill={`${C}1a`} />

      {/* Card 3 */}
      <rect x="650" y="146" width="104" height="24" rx="3" fill={`${C}0e`} stroke={`${C}44`} strokeWidth="1" />
      <rect x="655" y="150" width="36" height="5" rx="1" fill={`${C}33`} />
      <rect x="655" y="159" width="76" height="4" rx="1" fill={`${C}20`} />
      <rect x="655" y="165" width="55" height="4" rx="1" fill={`${C}1a`} />

      {/* t=1200 label */}
      <text x="702" y="190" fill={`${C}55`} fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="700">t = 1200ms</text>
      <text x="702" y="202" fill={`${C}33`} fontSize="7.5" fontFamily="monospace" textAnchor="middle">all data loaded</text>

      {/* ── Code chips at bottom — two pill chips ── */}
      <rect x="108" y="207" width="220" height="12" rx="3" fill={`${C}0c`} stroke={`${C}22`} strokeWidth="1" />
      <text x="218" y="216" fill={`${C}66`} fontSize="7.5" fontFamily="monospace" textAnchor="middle">{'<Suspense fallback={<Skeleton />}>'}</text>

      <rect x="448" y="207" width="162" height="12" rx="3" fill={`${C}0c`} stroke={`${C}22`} strokeWidth="1" />
      <text x="529" y="216" fill={`${C}66`} fontSize="7.5" fontFamily="monospace" textAnchor="middle">{'<SlowDataComponent />'}</text>
    </svg>
  )
}
