export default function ZodBanner() {
  const P = '#818cf8'
  return (
    <svg width="100%" viewBox="0 0 780 220" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', background: '#07101a' }}>
      <defs>
        <pattern id="dots-zod" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="13" cy="13" r="0.75" fill={`${P}15`} />
        </pattern>
        <radialGradient id="glow-zod" cx="50%" cy="50%" r="45%">
          <stop offset="0%" stopColor={P} stopOpacity="0.05" />
          <stop offset="100%" stopColor={P} stopOpacity="0" />
        </radialGradient>
        <marker id="arrow-zod" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={`${P}80`} />
        </marker>
      </defs>
      <rect width="780" height="220" fill="url(#dots-zod)" />
      <rect width="780" height="220" fill="url(#glow-zod)" />

      <text x="390" y="18" fill={`${P}55`} fontSize="9" fontFamily="monospace" textAnchor="middle">Zod — runtime validation — TypeScript</text>

      {/* === Column 1: Schema definition === */}
      <rect x="16" y="26" width="236" height="186" rx="7" fill={`${P}05`} stroke={`${P}28`} strokeWidth="1.5" />
      <text x="134" y="45" fill={`${P}80`} fontSize="9.5" fontFamily="monospace" textAnchor="middle" fontWeight="700">Define Schema</text>

      <rect x="30" y="53" width="208" height="94" rx="4" fill={`${P}0e`} stroke={`${P}30`} strokeWidth="1" />
      <text x="40" y="68" fill={`${P}70`} fontSize="8.5" fontFamily="monospace">import {'{ z }'} from</text>
      <text x="143" y="68" fill="rgba(251,191,36,0.85)" fontSize="8.5" fontFamily="monospace"> 'zod'</text>
      <text x="40" y="84" fill={`${P}aa`} fontSize="8.5" fontFamily="monospace">const UserSchema =</text>
      <text x="40" y="97" fill={`${P}aa`} fontSize="8.5" fontFamily="monospace">  z.object({'{'}</text>
      <text x="56" y="110" fill="rgba(134,239,172,0.85)" fontSize="8.5" fontFamily="monospace">    name:</text>
      <text x="96" y="110" fill="rgba(96,165,250,0.85)" fontSize="8.5" fontFamily="monospace"> z.string()</text>
      <text x="56" y="123" fill="rgba(134,239,172,0.85)" fontSize="8.5" fontFamily="monospace">    age:</text>
      <text x="92" y="123" fill="rgba(96,165,250,0.85)" fontSize="8.5" fontFamily="monospace">  z.number().min(0)</text>
      <text x="48" y="137" fill={`${P}aa`} fontSize="8.5" fontFamily="monospace">  {'})'}</text>
      <text x="40" y="143" fill={`${P}45`} fontSize="8" fontFamily="monospace">     // real JS at runtime</text>

      <line x1="134" y1="148" x2="134" y2="162" stroke={`${P}50`} strokeWidth="1.2" markerEnd="url(#arrow-zod)" />

      <rect x="30" y="164" width="208" height="40" rx="4" fill={`${P}08`} stroke={`${P}28`} strokeWidth="0.8" />
      <text x="134" y="178" fill={`${P}55`} fontSize="8.5" fontFamily="monospace" textAnchor="middle">z.string()  z.number()</text>
      <text x="134" y="192" fill={`${P}40`} fontSize="8.5" fontFamily="monospace" textAnchor="middle">z.boolean()  z.array()  z.enum()</text>
      <text x="134" y="205" fill={`${P}30`} fontSize="7.5" fontFamily="monospace" textAnchor="middle">z.optional()  z.nullable()</text>

      {/* === Column 2: safeParse === */}
      <rect x="272" y="26" width="236" height="186" rx="7" fill={`${P}05`} stroke={`${P}28`} strokeWidth="1.5" />
      <text x="390" y="45" fill={`${P}80`} fontSize="9.5" fontFamily="monospace" textAnchor="middle" fontWeight="700">safeParse — never throws</text>

      <rect x="286" y="53" width="208" height="34" rx="4" fill={`${P}0e`} stroke={`${P}30`} strokeWidth="1" />
      <text x="296" y="67" fill={`${P}aa`} fontSize="8.5" fontFamily="monospace">const result =</text>
      <text x="296" y="81" fill={`${P}aa`} fontSize="8.5" fontFamily="monospace">  UserSchema.safeParse(rawData)</text>

      <line x1="390" y1="88" x2="390" y2="102" stroke={`${P}50`} strokeWidth="1.2" markerEnd="url(#arrow-zod)" />

      {/* success branch */}
      <rect x="286" y="104" width="208" height="42" rx="4" fill="rgba(134,239,172,0.07)" stroke="rgba(134,239,172,0.30)" strokeWidth="1" />
      <text x="296" y="118" fill="rgba(134,239,172,0.85)" fontSize="8.5" fontFamily="monospace">if (result.success) {'{'}</text>
      <text x="296" y="131" fill="rgba(134,239,172,0.7)" fontSize="8.5" fontFamily="monospace">  result.data.name  // typed ✓</text>
      <text x="296" y="141" fill="rgba(134,239,172,0.55)" fontSize="8.5" fontFamily="monospace">{'}'}</text>

      {/* error branch */}
      <rect x="286" y="153" width="208" height="40" rx="4" fill="rgba(248,113,113,0.07)" stroke="rgba(248,113,113,0.28)" strokeWidth="1" />
      <text x="296" y="167" fill="rgba(248,113,113,0.75)" fontSize="8.5" fontFamily="monospace">else {'{'}</text>
      <text x="296" y="180" fill="rgba(248,113,113,0.7)" fontSize="8.5" fontFamily="monospace">  result.error.issues</text>
      <text x="296" y="193" fill="rgba(248,113,113,0.5)" fontSize="8.5" fontFamily="monospace">{'}'} // field + message</text>

      <rect x="286" y="200" width="208" height="10" rx="2" fill={`${P}04`} />
      <text x="390" y="208" fill={`${P}30`} fontSize="7" fontFamily="monospace" textAnchor="middle">never throws — always check .success</text>

      {/* === Column 3: z.infer === */}
      <rect x="528" y="26" width="236" height="186" rx="7" fill={`${P}05`} stroke={`${P}28`} strokeWidth="1.5" />
      <text x="646" y="45" fill={`${P}80`} fontSize="9.5" fontFamily="monospace" textAnchor="middle" fontWeight="700">z.infer — one source of truth</text>

      {/* TypeScript type problem */}
      <rect x="542" y="53" width="208" height="46" rx="4" fill="rgba(248,113,113,0.06)" stroke="rgba(248,113,113,0.22)" strokeWidth="1" />
      <text x="646" y="67" fill="rgba(248,113,113,0.6)" fontSize="8.5" fontFamily="monospace" textAnchor="middle">❌ two sources of truth</text>
      <text x="552" y="81" fill={`${P}55`} fontSize="8" fontFamily="monospace">type User = {'{'} name: string; age: number {'}'}</text>
      <text x="552" y="94" fill={`${P}40`} fontSize="8" fontFamily="monospace">const UserSchema = z.object({'{ ... }'})</text>

      <line x1="646" y1="100" x2="646" y2="114" stroke={`${P}50`} strokeWidth="1.2" markerEnd="url(#arrow-zod)" />

      {/* z.infer solution */}
      <rect x="542" y="116" width="208" height="56" rx="4" fill="rgba(134,239,172,0.07)" stroke="rgba(134,239,172,0.28)" strokeWidth="1" />
      <text x="646" y="130" fill="rgba(134,239,172,0.8)" fontSize="8.5" fontFamily="monospace" textAnchor="middle">✓ schema is the source</text>
      <text x="552" y="145" fill={`${P}aa`} fontSize="8.5" fontFamily="monospace">type User = z.infer</text>
      <text x="645" y="145" fill="rgba(134,239,172,0.9)" fontSize="8.5" fontFamily="monospace" fontWeight="700">{'<typeof UserSchema>'}</text>
      <text x="552" y="159" fill={`${P}50`} fontSize="8" fontFamily="monospace">// type derived automatically</text>
      <text x="552" y="171" fill={`${P}40`} fontSize="8" fontFamily="monospace">// change schema → type updates</text>

      <rect x="542" y="180" width="208" height="26" rx="4" fill={`${P}06`} stroke={`${P}20`} strokeWidth="0.8" />
      <text x="646" y="192" fill={`${P}55`} fontSize="8" fontFamily="monospace" textAnchor="middle">schema validates at runtime</text>
      <text x="646" y="204" fill={`${P}35`} fontSize="8" fontFamily="monospace" textAnchor="middle">type provides autocomplete</text>
    </svg>
  )
}
