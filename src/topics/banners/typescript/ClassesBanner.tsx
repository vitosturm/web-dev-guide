export default function ClassesBanner() {
  const P = '#818cf8'
  return (
    <svg width="100%" viewBox="0 0 780 220" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', background: '#07101a' }}>
      <defs>
        <pattern id="dots-cls" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="13" cy="13" r="0.75" fill={`${P}15`} />
        </pattern>
        <radialGradient id="glow-cls" cx="50%" cy="50%" r="45%">
          <stop offset="0%" stopColor={P} stopOpacity="0.05" />
          <stop offset="100%" stopColor={P} stopOpacity="0" />
        </radialGradient>
        <marker id="arrow-cls" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={`${P}80`} />
        </marker>
      </defs>
      <rect width="780" height="220" fill="url(#dots-cls)" />
      <rect width="780" height="220" fill="url(#glow-cls)" />

      <text x="390" y="18" fill={`${P}55`} fontSize="9" fontFamily="monospace" textAnchor="middle">classes — TypeScript</text>

      {/* === Left: Base class === */}
      <rect x="20" y="26" width="320" height="186" rx="7" fill={`${P}05`} stroke={`${P}28`} strokeWidth="1.5" />
      <text x="36" y="45" fill={`${P}cc`} fontSize="10" fontFamily="monospace" fontWeight="700">class</text>
      <text x="73" y="45" fill="rgba(96,165,250,0.9)" fontSize="10" fontFamily="monospace" fontWeight="700">User</text>
      <text x="107" y="45" fill={`${P}60`} fontSize="10" fontFamily="monospace"> {'{'}</text>

      {/* private */}
      <rect x="36" y="52" width="60" height="15" rx="3" fill="rgba(248,113,113,0.12)" stroke="rgba(248,113,113,0.35)" strokeWidth="0.8" />
      <text x="42" y="63" fill="rgba(248,113,113,0.85)" fontSize="8.5" fontFamily="monospace">private</text>
      <text x="100" y="63" fill={`${P}aa`} fontSize="8.5" fontFamily="monospace"> id: number</text>

      {/* readonly */}
      <rect x="36" y="70" width="66" height="15" rx="3" fill="rgba(251,191,36,0.10)" stroke="rgba(251,191,36,0.30)" strokeWidth="0.8" />
      <text x="42" y="81" fill="rgba(251,191,36,0.85)" fontSize="8.5" fontFamily="monospace">readonly</text>
      <text x="110" y="81" fill={`${P}aa`} fontSize="8.5" fontFamily="monospace"> name: string</text>

      {/* protected */}
      <rect x="36" y="88" width="72" height="15" rx="3" fill="rgba(167,139,250,0.12)" stroke="rgba(167,139,250,0.35)" strokeWidth="0.8" />
      <text x="42" y="99" fill="rgba(167,139,250,0.85)" fontSize="8.5" fontFamily="monospace">protected</text>
      <text x="116" y="99" fill={`${P}aa`} fontSize="8.5" fontFamily="monospace"> role: string</text>

      {/* constructor shorthand */}
      <rect x="36" y="108" width="290" height="40" rx="4" fill={`${P}08`} stroke={`${P}30`} strokeWidth="1" />
      <text x="44" y="122" fill={`${P}80`} fontSize="8.5" fontFamily="monospace" fontWeight="700">constructor</text>
      <text x="120" y="122" fill={`${P}60`} fontSize="8.5" fontFamily="monospace">(</text>
      <text x="128" y="122" fill="rgba(248,113,113,0.75)" fontSize="8.5" fontFamily="monospace">private</text>
      <text x="174" y="122" fill={`${P}aa`} fontSize="8.5" fontFamily="monospace"> age: number,</text>
      <text x="44" y="136" fill="rgba(251,191,36,0.75)" fontSize="8.5" fontFamily="monospace">readonly</text>
      <text x="95" y="136" fill={`${P}aa`} fontSize="8.5" fontFamily="monospace"> email: string) {'{'} ... {'}'}</text>
      <rect x="226" y="108" width="78" height="40" rx="3" fill="rgba(134,239,172,0.06)" stroke="rgba(134,239,172,0.25)" strokeWidth="0.8" />
      <text x="265" y="122" fill="rgba(134,239,172,0.7)" fontSize="7.5" fontFamily="monospace" textAnchor="middle">shorthand</text>
      <text x="265" y="135" fill="rgba(134,239,172,0.5)" fontSize="7.5" fontFamily="monospace" textAnchor="middle">auto-assigns</text>

      {/* method */}
      <text x="44" y="162" fill={`${P}80`} fontSize="8.5" fontFamily="monospace">getName(): string {'{'}</text>
      <text x="44" y="175" fill={`${P}55`} fontSize="8.5" fontFamily="monospace">  return this.name</text>
      <text x="44" y="188" fill={`${P}55`} fontSize="8.5" fontFamily="monospace">{'}'}</text>
      <text x="44" y="204" fill={`${P}30`} fontSize="8.5" fontFamily="monospace">{'}'} // end class</text>

      {/* === Right: Inheritance === */}
      <rect x="360" y="26" width="400" height="186" rx="7" fill={`${P}05`} stroke={`${P}28`} strokeWidth="1.5" />
      <text x="560" y="44" fill={`${P}80`} fontSize="9.5" fontFamily="monospace" textAnchor="middle" fontWeight="700">extends &amp; override</text>

      {/* Base label */}
      <rect x="376" y="52" width="90" height="30" rx="4" fill={`${P}08`} stroke={`${P}30`} strokeWidth="1" />
      <text x="421" y="71" fill="rgba(96,165,250,0.9)" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="700">User</text>

      <line x1="466" y1="67" x2="510" y2="67" stroke={`${P}50`} strokeWidth="1.2" markerEnd="url(#arrow-cls)" />
      <text x="488" y="63" fill={`${P}55`} fontSize="7.5" fontFamily="monospace" textAnchor="middle">extends</text>

      <rect x="512" y="52" width="220" height="50" rx="4" fill={`${P}08`} stroke={`${P}30`} strokeWidth="1" />
      <text x="522" y="67" fill={`${P}cc`} fontSize="9" fontFamily="monospace" fontWeight="700">class</text>
      <text x="556" y="67" fill="rgba(134,239,172,0.9)" fontSize="9" fontFamily="monospace" fontWeight="700"> Admin</text>
      <text x="603" y="67" fill={`${P}cc`} fontSize="9" fontFamily="monospace"> extends</text>
      <text x="663" y="67" fill="rgba(96,165,250,0.9)" fontSize="9" fontFamily="monospace"> User</text>
      <text x="522" y="84" fill={`${P}55`} fontSize="8.5" fontFamily="monospace">  permissions: string[]</text>
      <text x="522" y="96" fill={`${P}40`} fontSize="8" fontFamily="monospace">  // inherits User members</text>

      {/* Override section */}
      <rect x="376" y="116" width="356" height="64" rx="5" fill={`${P}06`} stroke={`${P}22`} strokeWidth="1" />
      <text x="394" y="133" fill={`${P}80`} fontSize="9" fontFamily="monospace" fontWeight="700">override</text>
      <text x="454" y="133" fill={`${P}cc`} fontSize="9" fontFamily="monospace"> — replace inherited method</text>
      <text x="394" y="150" fill={`${P}60`} fontSize="8.5" fontFamily="monospace">override getName(): string {'{'}</text>
      <text x="394" y="164" fill={`${P}45`} fontSize="8.5" fontFamily="monospace">  return super.getName() + ' [admin]'</text>
      <text x="394" y="178" fill={`${P}45`} fontSize="8.5" fontFamily="monospace">{'}'}</text>

      {/* Access modifiers legend */}
      <rect x="376" y="192" width="356" height="16" rx="3" fill={`${P}04`} stroke={`${P}18`} strokeWidth="0.8" />
      <text x="386" y="203" fill="rgba(248,113,113,0.7)" fontSize="8" fontFamily="monospace">private</text>
      <text x="430" y="203" fill={`${P}35`} fontSize="8" fontFamily="monospace">class-only  </text>
      <text x="498" y="203" fill="rgba(167,139,250,0.7)" fontSize="8" fontFamily="monospace">protected</text>
      <text x="548" y="203" fill={`${P}35`} fontSize="8" fontFamily="monospace">+subclass  </text>
      <text x="611" y="203" fill="rgba(134,239,172,0.7)" fontSize="8" fontFamily="monospace">public</text>
      <text x="644" y="203" fill={`${P}35`} fontSize="8" fontFamily="monospace">anywhere</text>
    </svg>
  )
}
