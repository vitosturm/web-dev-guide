export default function NextjsRouteHandlersBanner() {
  const C = '#a3b4c6'
  return (
    <svg width="100%" viewBox="0 0 780 220" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', background: '#07101a' }}>
      <defs>
        <pattern id="dots-nrh" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="13" cy="13" r="0.75" fill={`${C}18`} />
        </pattern>
        <radialGradient id="glow-nrh" cx="42%" cy="50%" r="55%">
          <stop offset="0%" stopColor={C} stopOpacity="0.06" />
          <stop offset="100%" stopColor={C} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="780" height="220" fill="url(#dots-nrh)" />
      <rect width="780" height="220" fill="url(#glow-nrh)" />

      {/* ── Title ── */}
      <text x="762" y="22" fill={`${C}66`} fontSize="9.5" fontFamily="monospace" fontWeight="600" textAnchor="end">Route Handlers</text>
      <text x="762" y="34" fill={`${C}33`} fontSize="8" fontFamily="monospace" textAnchor="end">Next.js App Router</text>

      {/* ── Table header ── */}
      <rect x="22" y="44" width="736" height="22" rx="3" fill={`${C}0d`} stroke={`${C}22`} strokeWidth="1" />
      <text x="44" y="59" fill={`${C}55`} fontSize="9" fontFamily="monospace" fontWeight="700" letterSpacing="1">METHOD</text>
      <text x="172" y="59" fill={`${C}55`} fontSize="9" fontFamily="monospace" fontWeight="700" letterSpacing="1">URL</text>
      <text x="340" y="59" fill={`${C}55`} fontSize="9" fontFamily="monospace" fontWeight="700" letterSpacing="1">HANDLER EXPORT</text>
      {/* header col dividers */}
      <line x1="158" y1="44" x2="158" y2="66" stroke={`${C}18`} strokeWidth="1" />
      <line x1="326" y1="44" x2="326" y2="66" stroke={`${C}18`} strokeWidth="1" />

      {/* ── Row 1: GET ── */}
      <rect x="22" y="66" width="736" height="36" rx="0" fill={`${C}05`} stroke={`${C}14`} strokeWidth="1" />
      {/* GET chip */}
      <rect x="36" y="75" width="38" height="18" rx="3" fill="#14432a" stroke="#2a7a4f" strokeWidth="1.2" />
      <text x="55" y="88" fill="#4ade80" fontSize="9.5" fontFamily="monospace" fontWeight="700" textAnchor="middle">GET</text>
      {/* URL */}
      <text x="172" y="88" fill={`${C}cc`} fontSize="10" fontFamily="monospace">/api/posts</text>
      {/* col dividers */}
      <line x1="158" y1="66" x2="158" y2="102" stroke={`${C}18`} strokeWidth="1" />
      <line x1="326" y1="66" x2="326" y2="102" stroke={`${C}18`} strokeWidth="1" />
      {/* handler */}
      <text x="340" y="88" fill={`${C}99`} fontSize="9.5" fontFamily="monospace">
        <tspan fill={`${C}55`}>export async function </tspan>
        <tspan fill="#4ade80" fontWeight="700">GET</tspan>
        <tspan fill={`${C}88`}>(req)</tspan>
      </text>

      {/* ── Row 2: POST ── */}
      <rect x="22" y="102" width="736" height="36" rx="0" fill={`${C}03`} stroke={`${C}14`} strokeWidth="1" />
      {/* POST chip */}
      <rect x="36" y="111" width="38" height="18" rx="3" fill="#0f2d4a" stroke="#1e5a8a" strokeWidth="1.2" />
      <text x="55" y="124" fill="#60a5fa" fontSize="9.5" fontFamily="monospace" fontWeight="700" textAnchor="middle">POST</text>
      {/* URL */}
      <text x="172" y="124" fill={`${C}cc`} fontSize="10" fontFamily="monospace">/api/posts</text>
      {/* col dividers */}
      <line x1="158" y1="102" x2="158" y2="138" stroke={`${C}18`} strokeWidth="1" />
      <line x1="326" y1="102" x2="326" y2="138" stroke={`${C}18`} strokeWidth="1" />
      {/* handler */}
      <text x="340" y="124" fill={`${C}99`} fontSize="9.5" fontFamily="monospace">
        <tspan fill={`${C}55`}>export async function </tspan>
        <tspan fill="#60a5fa" fontWeight="700">POST</tspan>
        <tspan fill={`${C}88`}>(req)</tspan>
      </text>

      {/* ── Row 3: DELETE ── */}
      <rect x="22" y="138" width="736" height="36" rx="0" fill={`${C}05`} stroke={`${C}14`} strokeWidth="1" />
      {/* DELETE chip */}
      <rect x="36" y="147" width="50" height="18" rx="3" fill="#3d0f0f" stroke="#7a1e1e" strokeWidth="1.2" />
      <text x="61" y="160" fill="#f87171" fontSize="9.5" fontFamily="monospace" fontWeight="700" textAnchor="middle">DELETE</text>
      {/* URL */}
      <text x="172" y="160" fill={`${C}cc`} fontSize="10" fontFamily="monospace">/api/posts/[id]</text>
      {/* col dividers */}
      <line x1="158" y1="138" x2="158" y2="174" stroke={`${C}18`} strokeWidth="1" />
      <line x1="326" y1="138" x2="326" y2="174" stroke={`${C}18`} strokeWidth="1" />
      {/* handler */}
      <text x="340" y="160" fill={`${C}99`} fontSize="9.5" fontFamily="monospace">
        <tspan fill={`${C}55`}>export async function </tspan>
        <tspan fill="#f87171" fontWeight="700">DELETE</tspan>
        <tspan fill={`${C}88`}>(req, {'{ params }'})</tspan>
      </text>

      {/* ── Row 4: PATCH ── */}
      <rect x="22" y="174" width="736" height="36" rx="0" fill={`${C}03`} stroke={`${C}14`} strokeWidth="1" />
      {/* PATCH chip */}
      <rect x="36" y="183" width="44" height="18" rx="3" fill="#2e2200" stroke="#5c4400" strokeWidth="1.2" />
      <text x="58" y="196" fill="#fbbf24" fontSize="9.5" fontFamily="monospace" fontWeight="700" textAnchor="middle">PATCH</text>
      {/* URL */}
      <text x="172" y="196" fill={`${C}cc`} fontSize="10" fontFamily="monospace">/api/posts/[id]</text>
      {/* col dividers */}
      <line x1="158" y1="174" x2="158" y2="210" stroke={`${C}18`} strokeWidth="1" />
      <line x1="326" y1="174" x2="326" y2="210" stroke={`${C}18`} strokeWidth="1" />
      {/* handler */}
      <text x="340" y="196" fill={`${C}99`} fontSize="9.5" fontFamily="monospace">
        <tspan fill={`${C}55`}>export async function </tspan>
        <tspan fill="#fbbf24" fontWeight="700">PATCH</tspan>
        <tspan fill={`${C}88`}>(req, {'{ params }'})</tspan>
      </text>

      {/* ── File path label (bottom-right) ── */}
      <text x="754" y="212" fill={`${C}44`} fontSize="8.5" fontFamily="monospace" textAnchor="end">app/api/posts/route.ts</text>
    </svg>
  )
}
