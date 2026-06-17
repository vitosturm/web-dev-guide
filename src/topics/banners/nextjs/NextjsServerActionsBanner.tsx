export default function NextjsServerActionsBanner() {
  const C = '#a3b4c6'
  return (
    <svg width="100%" viewBox="0 0 780 220" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', background: '#07101a' }}>
      <defs>
        <pattern id="dots-nsa" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="13" cy="13" r="0.75" fill={`${C}18`} />
        </pattern>
        <radialGradient id="glow-nsa" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={C} stopOpacity="0.07" />
          <stop offset="100%" stopColor={C} stopOpacity="0" />
        </radialGradient>
        <marker id="arr-nsa" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill={`${C}88`} />
        </marker>
        <marker id="arr-nsa-db" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill={`${C}55`} />
        </marker>
      </defs>
      <rect width="780" height="220" fill="url(#dots-nsa)" />
      <rect width="780" height="220" fill="url(#glow-nsa)" />

      {/* ── LEFT: Browser Form ── */}
      {/* Form panel */}
      <rect x="18" y="18" width="185" height="148" rx="6" fill="#0a1c2e" stroke={`${C}30`} strokeWidth="1.2" />
      {/* Browser chrome bar */}
      <rect x="18" y="18" width="185" height="20" rx="6" fill="#0d1e30" stroke={`${C}28`} strokeWidth="1.2" />
      <rect x="18" y="30" width="185" height="8" fill="#0d1e30" />
      <circle cx="30" cy="28" r="3" fill={`${C}20`} stroke={`${C}33`} strokeWidth="0.8" />
      <circle cx="42" cy="28" r="3" fill={`${C}20`} stroke={`${C}33`} strokeWidth="0.8" />
      <circle cx="54" cy="28" r="3" fill={`${C}20`} stroke={`${C}33`} strokeWidth="0.8" />
      <text x="110" y="30" fill={`${C}33`} fontSize="7" fontFamily="monospace" textAnchor="middle">app/create/page.tsx</text>

      {/* Form title */}
      <text x="30" y="56" fill={`${C}88`} fontSize="8.5" fontFamily="monospace" fontWeight="700">Create Post</text>

      {/* Label: Title */}
      <text x="30" y="70" fill={`${C}55`} fontSize="7.5" fontFamily="monospace">Title</text>
      {/* Input field 1 */}
      <rect x="30" y="74" width="155" height="14" rx="3" fill="#071018" stroke={`${C}30`} strokeWidth="1" />
      <text x="36" y="84" fill={`${C}33`} fontSize="7" fontFamily="monospace">My post title...</text>

      {/* Label: Body */}
      <text x="30" y="100" fill={`${C}55`} fontSize="7.5" fontFamily="monospace">Body</text>
      {/* Input field 2 */}
      <rect x="30" y="104" width="155" height="26" rx="3" fill="#071018" stroke={`${C}30`} strokeWidth="1" />
      <text x="36" y="115" fill={`${C}33`} fontSize="7" fontFamily="monospace">Post content here...</text>
      <text x="36" y="124" fill={`${C}22`} fontSize="7" fontFamily="monospace">...</text>

      {/* Submit button */}
      <rect x="30" y="140" width="155" height="18" rx="3" fill={`${C}18`} stroke={C} strokeWidth="1.2" />
      <text x="107" y="152" fill={C} fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="700">Submit</text>

      {/* form action label */}
      <text x="110" y="176" fill={`${C}44`} fontSize="7" fontFamily="monospace" textAnchor="middle">{'<form action={createPost}>'}</text>

      {/* ── CENTER ARROW: Form → Server Fn ── */}
      {/* horizontal arrow */}
      <line x1="204" y1="100" x2="318" y2="100" stroke={`${C}88`} strokeWidth="1.5" markerEnd="url(#arr-nsa)" strokeDasharray="5 3" />
      {/* Label above arrow */}
      <text x="261" y="92" fill={C} fontSize="7.5" fontFamily="monospace" textAnchor="middle" fontWeight="600">POST (auto-generated</text>
      <text x="261" y="101" fill={`${C}00`} fontSize="7.5" fontFamily="monospace" textAnchor="middle">.</text>
      <text x="261" y="110" fill={C} fontSize="7.5" fontFamily="monospace" textAnchor="middle" fontWeight="600">endpoint)</text>
      {/* "no /api route" strikethrough hint */}
      <rect x="220" y="114" width="82" height="12" rx="2" fill={`${C}0a`} stroke={`${C}22`} strokeWidth="0.8" />
      <text x="261" y="123" fill={`${C}44`} fontSize="6.5" fontFamily="monospace" textAnchor="middle">no /api/route needed</text>

      {/* ── RIGHT: Server Function Box ── */}
      <rect x="320" y="18" width="290" height="138" rx="6" fill="#0a1c2e" stroke={C} strokeWidth="1.6" />
      {/* Active dot */}
      <circle cx="330" cy="27" r="3.5" fill={C} opacity="0.75" />
      <text x="342" y="31" fill={C} fontSize="8" fontFamily="monospace" fontWeight="700">SERVER FUNCTION</text>

      {/* Code lines */}
      <text x="334" y="48" fill={`${C}66`} fontSize="8" fontFamily="monospace">{'\'use server\''}</text>
      <text x="334" y="62" fill={`${C}88`} fontSize="8" fontFamily="monospace">{'async function createPost(fd) {'}</text>
      <text x="334" y="76" fill={`${C}55`} fontSize="8" fontFamily="monospace">{'  await db.insert({'}</text>
      <text x="334" y="88" fill={`${C}44`} fontSize="8" fontFamily="monospace">{'    title: fd.get(\'title\'),'}</text>
      <text x="334" y="100" fill={`${C}44`} fontSize="8" fontFamily="monospace">{'    body:  fd.get(\'body\'),'}</text>
      <text x="334" y="112" fill={`${C}55`} fontSize="8" fontFamily="monospace">{'  })'}</text>
      <text x="334" y="124" fill={`${C}66`} fontSize="8" fontFamily="monospace">{'  revalidatePath(\'/\')'}</text>
      <text x="334" y="136" fill={`${C}88`} fontSize="8" fontFamily="monospace">{'}'}</text>

      {/* ── ARROW: Server Fn → Database ── */}
      <line x1="465" y1="157" x2="465" y2="172" stroke={`${C}55`} strokeWidth="1.4" markerEnd="url(#arr-nsa-db)" />
      <text x="472" y="167" fill={`${C}44`} fontSize="7" fontFamily="monospace">db.insert()</text>

      {/* ── DATABASE CYLINDER ── */}
      {/* cylinder body */}
      <rect x="415" y="172" width="100" height="36" rx="3" fill="#071018" stroke={`${C}33`} strokeWidth="1.2" />
      {/* cylinder top ellipse */}
      <ellipse cx="465" cy="172" rx="50" ry="9" fill="#0a1822" stroke={`${C}44`} strokeWidth="1.2" />
      {/* cylinder bottom ellipse suggestion */}
      <ellipse cx="465" cy="208" rx="50" ry="9" fill="#071018" stroke={`${C}28`} strokeWidth="1" />
      {/* db label */}
      <text x="465" y="191" fill={`${C}66`} fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="700">Database</text>
      <text x="465" y="202" fill={`${C}44`} fontSize="7" fontFamily="monospace" textAnchor="middle">PostgreSQL / SQLite</text>

      {/* ── BOTTOM LABEL ── */}
      <text x="390" y="214" fill={`${C}44`} fontSize="7.5" fontFamily="monospace" textAnchor="middle">no API route needed — Next.js handles the HTTP layer</text>
    </svg>
  )
}
