export default function NextjsDataFetchingBanner() {
  const C = '#a3b4c6'
  return (
    <svg width="100%" viewBox="0 0 780 220" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', background: '#07101a' }}>
      <defs>
        <pattern id="dots-ndf" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="13" cy="13" r="0.75" fill={`${C}18`} />
        </pattern>
        <radialGradient id="glow-ndf" cx="50%" cy="50%" r="45%">
          <stop offset="0%" stopColor={C} stopOpacity="0.06" />
          <stop offset="100%" stopColor={C} stopOpacity="0" />
        </radialGradient>
        <marker id="arr-ndf" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill={`${C}66`} />
        </marker>
      </defs>

      {/* ── Background ── */}
      <rect width="780" height="220" fill="url(#dots-ndf)" />
      <rect width="780" height="220" fill="url(#glow-ndf)" />

      {/* ══════════════════════════════════════════
          BROWSER ICON (top)
      ══════════════════════════════════════════ */}
      {/* browser frame */}
      <rect x="60" y="12" width="56" height="38" rx="4" fill="#0d1e30" stroke={`${C}44`} strokeWidth="1.2" />
      {/* toolbar strip */}
      <rect x="60" y="12" width="56" height="11" rx="4" fill={`${C}14`} />
      <rect x="60" y="19" width="56" height="4" fill={`${C}14`} />
      {/* traffic dots */}
      <circle cx="67" cy="17" r="1.8" fill={`${C}30`} />
      <circle cx="73" cy="17" r="1.8" fill={`${C}30`} />
      <circle cx="79" cy="17" r="1.8" fill={`${C}30`} />
      {/* url bar */}
      <rect x="84" y="13.5" width="28" height="7" rx="2" fill={`${C}18`} stroke={`${C}22`} strokeWidth="0.8" />
      {/* page lines */}
      <line x1="66" y1="30" x2="110" y2="30" stroke={`${C}28`} strokeWidth="1.2" />
      <line x1="66" y1="35" x2="104" y2="35" stroke={`${C}1a`} strokeWidth="1" />
      <line x1="66" y1="40" x2="108" y2="40" stroke={`${C}1a`} strokeWidth="1" />
      {/* label */}
      <text x="88" y="62" fill={`${C}55`} fontSize="8" fontFamily="monospace" textAnchor="middle">Browser</text>

      {/* ── Arrow: Browser ↓ to Layer 1 ── */}
      <line x1="88" y1="65" x2="88" y2="79" stroke={`${C}55`} strokeWidth="1.2" markerEnd="url(#arr-ndf)" />

      {/* ══════════════════════════════════════════
          LAYER 1: Request Memoization (top, smallest scope)
      ══════════════════════════════════════════ */}
      <rect x="18" y="80" width="460" height="34" rx="5" fill="#0d1e30" stroke={`${C}28`} strokeWidth="1.2" />
      {/* left scope bar */}
      <rect x="18" y="80" width="4" height="34" rx="2" fill={`${C}30`} />
      <text x="32" y="94" fill={`${C}88`} fontSize="8.5" fontFamily="monospace" fontWeight="700">Request Memoization</text>
      <text x="32" y="106" fill={`${C}44`} fontSize="7.5" fontFamily="monospace">Dedupes identical fetch() calls within one render tree</text>
      {/* scope badge */}
      <rect x="386" y="86" width="86" height="14" rx="3" fill={`${C}0d`} stroke={`${C}25`} strokeWidth="0.8" />
      <text x="429" y="95.5" fill={`${C}50`} fontSize="7" fontFamily="monospace" textAnchor="middle">per-render scope</text>

      {/* ── Arrow: Layer 1 ↓ to Layer 2 ── */}
      <line x1="88" y1="114" x2="88" y2="127" stroke={`${C}55`} strokeWidth="1.2" markerEnd="url(#arr-ndf)" />

      {/* ══════════════════════════════════════════
          LAYER 2: Data Cache (middle)
      ══════════════════════════════════════════ */}
      <rect x="18" y="128" width="460" height="34" rx="5" fill="#0a1c2e" stroke={C} strokeWidth="1.6" />
      {/* left scope bar — highlighted */}
      <rect x="18" y="128" width="4" height="34" rx="2" fill={C} opacity="0.5" />
      <text x="32" y="142" fill={C} fontSize="8.5" fontFamily="monospace" fontWeight="700">Data Cache</text>
      <text x="32" y="154" fill={`${C}66`} fontSize="7.5" fontFamily="monospace">fetch() cache: 'force-cache' · persists across requests &amp; deploys</text>
      {/* scope badge */}
      <rect x="370" y="134" width="102" height="14" rx="3" fill={`${C}14`} stroke={`${C}44`} strokeWidth="0.8" />
      <text x="421" y="143.5" fill={C} fontSize="7" fontFamily="monospace" textAnchor="middle">persistent · cross-req</text>

      {/* ── Arrow: Layer 2 ↓ to Layer 3 ── */}
      <line x1="88" y1="162" x2="88" y2="175" stroke={`${C}55`} strokeWidth="1.2" markerEnd="url(#arr-ndf)" />

      {/* ══════════════════════════════════════════
          LAYER 3: Full Route Cache (bottom, largest scope)
      ══════════════════════════════════════════ */}
      <rect x="18" y="176" width="460" height="34" rx="5" fill="#080f18" stroke={`${C}28`} strokeWidth="1.2" />
      {/* left scope bar */}
      <rect x="18" y="176" width="4" height="34" rx="2" fill={`${C}22`} />
      <text x="32" y="190" fill={`${C}66`} fontSize="8.5" fontFamily="monospace" fontWeight="700">Full Route Cache</text>
      <text x="32" y="202" fill={`${C}38`} fontSize="7.5" fontFamily="monospace">Static page HTML + RSC payload cached at build time</text>
      {/* scope badge */}
      <rect x="356" y="182" width="116" height="14" rx="3" fill={`${C}0a`} stroke={`${C}1e`} strokeWidth="0.8" />
      <text x="414" y="191.5" fill={`${C}44`} fontSize="7" fontFamily="monospace" textAnchor="middle">build-time · CDN scope</text>

      {/* ══════════════════════════════════════════
          DATABASE ICON (bottom, below layers)
      ══════════════════════════════════════════ */}
      {/* DB cylinder */}
      <ellipse cx="88" cy="212" rx="18" ry="6" fill="#0d1e30" stroke={`${C}30`} strokeWidth="1.2" />
      <rect x="70" y="206" width="36" height="10" fill="#080f18" stroke="none" />
      <ellipse cx="88" cy="206" rx="18" ry="6" fill="#0a1820" stroke={`${C}30`} strokeWidth="1.2" />
      <ellipse cx="88" cy="206" rx="18" ry="6" fill="none" stroke={`${C}20`} strokeWidth="1" />
      {/* DB label not needed — no room; add a tiny one */}

      {/* ══════════════════════════════════════════
          UPWARD DATA FLOW arrows (right side of layers)
      ══════════════════════════════════════════ */}
      {/* Upward flow label */}
      <text x="503" y="166" fill={`${C}33`} fontSize="7.5" fontFamily="monospace" textAnchor="middle">data flows ↑</text>
      <line x1="503" y1="210" x2="503" y2="170" stroke={`${C}33`} strokeWidth="1" strokeDasharray="3 2" markerEnd="url(#arr-ndf)" />

      {/* ══════════════════════════════════════════
          RIGHT PANEL: revalidate chips
      ══════════════════════════════════════════ */}
      {/* Panel header */}
      <text x="764" y="20" fill={`${C}66`} fontSize="8.5" fontFamily="monospace" textAnchor="end" fontWeight="700">Revalidation</text>

      {/* chip 1: revalidate number */}
      <rect x="558" y="28" width="206" height="44" rx="5" fill={`${C}0d`} stroke={`${C}30`} strokeWidth="1.2" />
      <text x="570" y="42" fill={`${C}55`} fontSize="7.5" fontFamily="monospace" fontWeight="600">Time-based</text>
      <text x="570" y="57" fill={C} fontSize="8" fontFamily="monospace">{'{ next: { revalidate: 60 } }'}</text>
      <text x="570" y="67" fill={`${C}38`} fontSize="7" fontFamily="monospace">Re-fetches at most every 60 s</text>

      {/* chip 2: revalidatePath */}
      <rect x="558" y="82" width="206" height="44" rx="5" fill={`${C}0d`} stroke={`${C}30`} strokeWidth="1.2" />
      <text x="570" y="96" fill={`${C}55`} fontSize="7.5" fontFamily="monospace" fontWeight="600">On-demand</text>
      <text x="570" y="110" fill={C} fontSize="8" fontFamily="monospace">revalidatePath('/blog')</text>
      <text x="570" y="120" fill={`${C}38`} fontSize="7" fontFamily="monospace">Purge cache for a specific route</text>

      {/* chip 3: revalidateTag */}
      <rect x="558" y="136" width="206" height="44" rx="5" fill={`${C}0d`} stroke={`${C}30`} strokeWidth="1.2" />
      <text x="570" y="150" fill={`${C}55`} fontSize="7.5" fontFamily="monospace" fontWeight="600">Tag-based</text>
      <text x="570" y="165" fill={C} fontSize="8" fontFamily="monospace">revalidateTag('posts')</text>
      <text x="570" y="174" fill={`${C}38`} fontSize="7" fontFamily="monospace">Purge all entries with tag</text>

      {/* chip 4: no-store */}
      <rect x="558" y="190" width="206" height="24" rx="5" fill={`${C}0a`} stroke={`${C}20`} strokeWidth="1" />
      <text x="570" y="200" fill={`${C}44`} fontSize="7.5" fontFamily="monospace">cache: 'no-store'</text>
      <text x="570" y="210" fill={`${C}28`} fontSize="7" fontFamily="monospace">Always dynamic, never cached</text>

      {/* vertical connector between chips */}
      <line x1="764" y1="28" x2="764" y2="214" stroke={`${C}14`} strokeWidth="1" strokeDasharray="3 3" />
    </svg>
  )
}
