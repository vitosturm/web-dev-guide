export default function TsArraysBanner() {
  const P = '#818cf8'
  return (
    <svg width="100%" viewBox="0 0 780 220" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', background: '#07101a' }}>
      <defs>
        <pattern id="dots-tar" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="13" cy="13" r="0.75" fill={`${P}15`} />
        </pattern>
        <radialGradient id="glow-tar" cx="50%" cy="50%" r="45%">
          <stop offset="0%" stopColor={P} stopOpacity="0.05" />
          <stop offset="100%" stopColor={P} stopOpacity="0" />
        </radialGradient>
        <marker id="arrow-tar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={`${P}80`} />
        </marker>
      </defs>
      <rect width="780" height="220" fill="url(#dots-tar)" />
      <rect width="780" height="220" fill="url(#glow-tar)" />

      <text x="390" y="18" fill={`${P}55`} fontSize="9" fontFamily="monospace" textAnchor="middle">arrays &amp; tuples — TypeScript</text>

      {/* === Column 1: Typed Array === */}
      <rect x="20" y="28" width="230" height="178" rx="7" fill={`${P}05`} stroke={`${P}28`} strokeWidth="1.5" />
      <text x="135" y="47" fill={`${P}80`} fontSize="9.5" fontFamily="monospace" textAnchor="middle" fontWeight="700">Typed Array</text>

      <rect x="34" y="55" width="202" height="22" rx="4" fill={`${P}0e`} stroke={`${P}35`} strokeWidth="1" />
      <text x="44" y="70" fill={`${P}cc`} fontSize="9.5" fontFamily="monospace">const names:</text>
      <text x="131" y="70" fill={`${P}ff`} fontSize="9.5" fontFamily="monospace" fontWeight="700"> string[]</text>
      <text x="196" y="70" fill={`${P}cc`} fontSize="9.5" fontFamily="monospace"> = []</text>

      <text x="44" y="96" fill={`${P}aa`} fontSize="9" fontFamily="monospace">names.push(</text>
      <text x="130" y="96" fill="rgba(134,239,172,0.9)" fontSize="9" fontFamily="monospace">'Alice'</text>
      <text x="176" y="96" fill={`${P}aa`} fontSize="9" fontFamily="monospace">) ✓</text>

      <text x="44" y="112" fill={`${P}aa`} fontSize="9" fontFamily="monospace">names.push(</text>
      <text x="130" y="112" fill="rgba(248,113,113,0.9)" fontSize="9" fontFamily="monospace">42</text>
      <text x="152" y="112" fill={`${P}aa`} fontSize="9" fontFamily="monospace">)</text>
      <rect x="44" y="118" width="138" height="16" rx="3" fill="rgba(248,113,113,0.08)" stroke="rgba(248,113,113,0.3)" strokeWidth="0.8" />
      <text x="50" y="130" fill="rgba(248,113,113,0.85)" fontSize="8" fontFamily="monospace">Error: number ≠ string ✗</text>

      <text x="44" y="155" fill={`${P}55`} fontSize="8.5" fontFamily="monospace">const nums: number[]</text>
      <text x="44" y="168" fill={`${P}40`} fontSize="8.5" fontFamily="monospace">const flags: boolean[]</text>
      <text x="44" y="181" fill={`${P}30`} fontSize="8.5" fontFamily="monospace">const mixed: (string|number)[]</text>
      <text x="44" y="196" fill={`${P}25`} fontSize="8.5" fontFamily="monospace">const items: Array&lt;T&gt;</text>

      {/* === Column 2: Tuple === */}
      <rect x="275" y="28" width="230" height="178" rx="7" fill={`${P}05`} stroke={`${P}28`} strokeWidth="1.5" />
      <text x="390" y="47" fill={`${P}80`} fontSize="9.5" fontFamily="monospace" textAnchor="middle" fontWeight="700">Tuple</text>

      <rect x="289" y="55" width="202" height="22" rx="4" fill={`${P}0e`} stroke={`${P}35`} strokeWidth="1" />
      <text x="299" y="70" fill={`${P}cc`} fontSize="9.5" fontFamily="monospace">type Point =</text>
      <text x="383" y="70" fill={`${P}ff`} fontSize="9.5" fontFamily="monospace" fontWeight="700"> [number, number]</text>

      <text x="299" y="93" fill={`${P}aa`} fontSize="9" fontFamily="monospace">const p: Point = [</text>
      <text x="390" y="93" fill="rgba(96,165,250,0.9)" fontSize="9" fontFamily="monospace">3</text>
      <text x="398" y="93" fill={`${P}aa`} fontSize="9" fontFamily="monospace">,</text>
      <text x="406" y="93" fill="rgba(134,239,172,0.9)" fontSize="9" fontFamily="monospace"> 7</text>
      <text x="418" y="93" fill={`${P}aa`} fontSize="9" fontFamily="monospace">]</text>

      <line x1="390" y1="100" x2="390" y2="114" stroke={`${P}50`} strokeWidth="1.2" markerEnd="url(#arrow-tar)" />

      <rect x="299" y="116" width="84" height="22" rx="4" fill="rgba(96,165,250,0.1)" stroke="rgba(96,165,250,0.4)" strokeWidth="1" />
      <text x="341" y="131" fill="rgba(96,165,250,0.9)" fontSize="9" fontFamily="monospace" textAnchor="middle">p[0]: number</text>
      <rect x="389" y="116" width="84" height="22" rx="4" fill="rgba(134,239,172,0.1)" stroke="rgba(134,239,172,0.4)" strokeWidth="1" />
      <text x="431" y="131" fill="rgba(134,239,172,0.9)" fontSize="9" fontFamily="monospace" textAnchor="middle">p[1]: number</text>

      <text x="299" y="158" fill={`${P}55`} fontSize="8.5" fontFamily="monospace">const [x, y] = p  // destructure</text>
      <text x="299" y="172" fill={`${P}40`} fontSize="8.5" fontFamily="monospace">type Entry = [string, number]</text>
      <text x="299" y="186" fill={`${P}30`} fontSize="8.5" fontFamily="monospace">// fixed length &amp; positions</text>
      <text x="299" y="200" fill={`${P}25`} fontSize="8.5" fontFamily="monospace">// spread: [...Point, string]</text>

      {/* === Column 3: Readonly === */}
      <rect x="530" y="28" width="230" height="178" rx="7" fill={`${P}05`} stroke={`${P}28`} strokeWidth="1.5" />
      <text x="645" y="47" fill={`${P}80`} fontSize="9.5" fontFamily="monospace" textAnchor="middle" fontWeight="700">ReadonlyArray</text>

      <rect x="544" y="55" width="202" height="22" rx="4" fill={`${P}0e`} stroke={`${P}35`} strokeWidth="1" />
      <text x="554" y="70" fill={`${P}cc`} fontSize="9.5" fontFamily="monospace">const list:</text>
      <text x="619" y="70" fill={`${P}ff`} fontSize="9.5" fontFamily="monospace" fontWeight="700"> readonly string[]</text>

      <text x="554" y="93" fill={`${P}aa`} fontSize="9" fontFamily="monospace">list[0]</text>
      <text x="600" y="93" fill="rgba(134,239,172,0.9)" fontSize="9" fontFamily="monospace">   // read ✓</text>
      <text x="554" y="109" fill={`${P}aa`} fontSize="9" fontFamily="monospace">list.push(</text>
      <text x="624" y="109" fill="rgba(248,113,113,0.85)" fontSize="9" fontFamily="monospace">'x'</text>
      <text x="646" y="109" fill={`${P}aa`} fontSize="9" fontFamily="monospace">)</text>
      <rect x="554" y="115" width="106" height="16" rx="3" fill="rgba(248,113,113,0.08)" stroke="rgba(248,113,113,0.3)" strokeWidth="0.8" />
      <text x="560" y="127" fill="rgba(248,113,113,0.85)" fontSize="8" fontFamily="monospace">Error: no .push() ✗</text>

      <text x="554" y="150" fill={`${P}55`} fontSize="8.5" fontFamily="monospace">ReadonlyArray&lt;string&gt;</text>
      <text x="554" y="164" fill={`${P}40`} fontSize="8.5" fontFamily="monospace">readonly [string, number]</text>
      <text x="554" y="178" fill={`${P}30`} fontSize="8.5" fontFamily="monospace">// no push/pop/splice</text>
      <text x="554" y="196" fill={`${P}25`} fontSize="8.5" fontFamily="monospace">// prevents mutation bugs</text>
    </svg>
  )
}
