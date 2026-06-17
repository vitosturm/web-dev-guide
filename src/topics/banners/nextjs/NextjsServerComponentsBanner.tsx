export default function NextjsServerComponentsBanner() {
  const C = '#a3b4c6'
  return (
    <svg width="100%" viewBox="0 0 780 220" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', background: '#07101a' }}>
      <defs>
        <pattern id="dots-nsc" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="13" cy="13" r="0.75" fill={`${C}18`} />
        </pattern>
        <radialGradient id="glow-nsc" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={C} stopOpacity="0.05" />
          <stop offset="100%" stopColor={C} stopOpacity="0" />
        </radialGradient>
        <marker id="arr-nsc" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill={`${C}77`} />
        </marker>
        <marker id="arr-nsc-h" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill={`${C}99`} />
        </marker>
      </defs>

      {/* Background dots + glow */}
      <rect width="780" height="220" fill="url(#dots-nsc)" />
      <rect width="780" height="220" fill="url(#glow-nsc)" />

      {/* ── Server zone background ── */}
      <rect x="0" y="0" width="390" height="220" fill="#0a1929" opacity="0.6" />

      {/* ── Client zone background ── */}
      <rect x="390" y="0" width="390" height="220" fill="#0d1f2d" opacity="0.4" />

      {/* ── Boundary line ── */}
      <line x1="390" y1="0" x2="390" y2="220" stroke={`${C}55`} strokeWidth="1.5" strokeDasharray="8 4" />

      {/* Boundary label */}
      <rect x="303" y="9" width="174" height="18" rx="3" fill="#07101a" />
      <text x="390" y="21" fill={`${C}99`} fontSize="9" fontFamily="monospace" fontWeight="700" textAnchor="middle">Server / Client boundary</text>

      {/* ── Zone labels ── */}
      <text x="18" y="40" fill={`${C}44`} fontSize="8.5" fontFamily="monospace" fontWeight="600">SERVER ZONE</text>
      <text x="408" y="40" fill={`${C}44`} fontSize="8.5" fontFamily="monospace" fontWeight="600">CLIENT ZONE</text>

      {/* ── Component box (server) ── */}
      <rect x="22" y="54" width="228" height="88" rx="5" fill={`${C}07`} stroke={`${C}44`} strokeWidth="1.5" />
      <text x="30" y="68" fill={`${C}cc`} fontSize="9.5" fontFamily="monospace" fontWeight="700">async function Page() &#123;</text>
      <text x="38" y="84" fill={`${C}88`} fontSize="9" fontFamily="monospace">const data =</text>
      <text x="38" y="97" fill={`${C}bb`} fontSize="9.5" fontFamily="monospace">  await db.query()</text>
      <text x="38" y="112" fill={`${C}66`} fontSize="9" fontFamily="monospace">return &lt;article&gt;...&lt;/article&gt;</text>
      <text x="30" y="130" fill={`${C}cc`} fontSize="9.5" fontFamily="monospace">&#125;</text>

      {/* ── Server-side labels below component box ── */}
      <text x="22" y="158" fill={`${C}55`} fontSize="8.5" fontFamily="monospace">no JS sent to browser</text>
      <text x="22" y="171" fill={`${C}55`} fontSize="8.5" fontFamily="monospace">direct DB access</text>

      {/* ── Database cylinder (server) ── */}
      {/* cylinder body */}
      <rect x="78" y="176" width="80" height="34" rx="4" fill={`${C}09`} stroke={`${C}44`} strokeWidth="1.2" />
      {/* top ellipse */}
      <ellipse cx="118" cy="178" rx="40" ry="7" fill={`${C}12`} stroke={`${C}55`} strokeWidth="1.2" />
      {/* bottom ellipse */}
      <ellipse cx="118" cy="208" rx="40" ry="7" fill={`${C}09`} stroke={`${C}44`} strokeWidth="1.2" />
      <text x="118" y="197" fill={`${C}88`} fontSize="8.5" fontFamily="monospace" textAnchor="middle">db.query()</text>

      {/* Arrow: DB → component (upward) */}
      <line
        x1="118" y1="171"
        x2="118" y2="144"
        stroke={`${C}66`} strokeWidth="1.3" strokeDasharray="4 3"
        markerEnd="url(#arr-nsc)"
      />
      <text x="123" y="162" fill={`${C}44`} fontSize="7.5" fontFamily="monospace">data</text>

      {/* ── Arrow: component → HTML output crossing boundary ── */}
      <line
        x1="252" y1="97"
        x2="408" y2="97"
        stroke={`${C}88`} strokeWidth="1.5"
        markerEnd="url(#arr-nsc-h)"
      />

      {/* ── HTML output box (client) ── */}
      <rect x="410" y="54" width="218" height="110" rx="5" fill={`${C}06`} stroke={`${C}33`} strokeWidth="1.5" strokeDasharray="6 3" />
      <text x="420" y="69" fill={`${C}77`} fontSize="9.5" fontFamily="monospace" fontWeight="700">&lt;article&gt;</text>
      <text x="432" y="84" fill={`${C}55`} fontSize="9" fontFamily="monospace">&lt;h1&gt;Title&lt;/h1&gt;</text>
      <text x="432" y="98" fill={`${C}55`} fontSize="9" fontFamily="monospace">&lt;p&gt;Content...&lt;/p&gt;</text>
      <text x="432" y="112" fill={`${C}55`} fontSize="9" fontFamily="monospace">&lt;footer&gt;...&lt;/footer&gt;</text>
      <text x="420" y="128" fill={`${C}77`} fontSize="9.5" fontFamily="monospace" fontWeight="700">&lt;/article&gt;</text>
      <text x="420" y="144" fill={`${C}44`} fontSize="8" fontFamily="monospace">// zero runtime JS</text>

      {/* Client zone label: HTML streamed to client */}
      <text x="518" y="181" fill={`${C}66`} fontSize="8.5" fontFamily="monospace" textAnchor="middle">HTML streamed</text>
      <text x="518" y="194" fill={`${C}66`} fontSize="8.5" fontFamily="monospace" textAnchor="middle">to client</text>

      {/* Downward arrow from HTML box toward "browser" */}
      <line
        x1="518" y1="166"
        x2="518" y2="199"
        stroke={`${C}44`} strokeWidth="1.2" strokeDasharray="4 3"
        markerEnd="url(#arr-nsc)"
      />

      {/* ── Title top-right ── */}
      <text x="762" y="22" fill={`${C}55`} fontSize="9.5" fontFamily="monospace" textAnchor="end" fontWeight="700">Server Components</text>
      <text x="762" y="34" fill={`${C}33`} fontSize="8" fontFamily="monospace" textAnchor="end">Next.js App Router</text>
    </svg>
  )
}
