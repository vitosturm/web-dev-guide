import { motion, AnimatePresence } from 'framer-motion'

interface Props { step: number; compact?: boolean }

const PINK = '#f472b6'
const stepLabels = [
  'useRef does not trigger re-renders',
  'useRef gives direct access to DOM nodes',
  'useRef stores mutable values across renders',
  'useRef always reads the current value — no stale closures',
  'forwardRef passes a ref through to a child',
  'ref vs state: choose the right tool',
]

function CodeLine({ children, highlight }: { children: string; highlight?: boolean }) {
  return (
    <span style={{
      display: 'block',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: highlight ? PINK : '#e2e8f0',
      fontWeight: highlight ? 700 : 400,
      background: highlight ? 'rgba(244,114,182,0.12)' : 'transparent',
      borderRadius: 3,
      padding: '1px 4px',
    }}>
      {children}
    </span>
  )
}

function CodeBlock({ children, minWidth }: { children: React.ReactNode; minWidth?: number }) {
  return (
    <div style={{
      background: 'rgba(0,0,0,0.35)',
      border: `1px solid rgba(244,114,182,0.25)`,
      borderRadius: 8,
      padding: '10px 14px',
      minWidth: minWidth ?? 240,
    }}>
      {children}
    </div>
  )
}

function Label({ children, color = '#94a3b8' }: { children: React.ReactNode; color?: string }) {
  return (
    <div style={{
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      marginBottom: 3,
    }}>
      {children}
    </div>
  )
}

/* ─── Step 0 helpers ─────────────────────────────────────── */

function ValueBox({
  label,
  value,
  flash,
  color,
}: {
  label: string
  value: number
  flash: boolean
  color: string
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
      <Label color={color}>{label}</Label>
      <motion.div
        animate={flash
          ? { boxShadow: [`0 0 0px ${color}00`, `0 0 20px ${color}cc`, `0 0 0px ${color}00`] }
          : { boxShadow: 'none' }
        }
        transition={{ duration: 0.9, repeat: Infinity, repeatDelay: 0.4 }}
        style={{
          padding: '10px 22px',
          border: `2px solid ${color}`,
          borderRadius: 8,
          background: `${color}14`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
        }}
      >
        <motion.div
          key={value}
          initial={{ scale: 1.5, color: '#facc15' }}
          animate={{ scale: 1, color: '#e2e8f0' }}
          style={{ fontFamily: 'var(--font-mono)', fontSize: 28, fontWeight: 700 }}
        >
          {value}
        </motion.div>
        {flash && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 1, 0], scale: [0.8, 1, 0.8] }}
            transition={{ duration: 0.9, repeat: Infinity, repeatDelay: 0.4 }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              color,
              background: `${color}20`,
              borderRadius: 4,
              padding: '2px 6px',
            }}
          >
            re-render
          </motion.div>
        )}
        {!flash && (
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            color: '#475569',
            background: 'rgba(0,0,0,0.25)',
            borderRadius: 4,
            padding: '2px 6px',
          }}>
            no re-render
          </div>
        )}
      </motion.div>
    </div>
  )
}

/* ─── Step 3 helpers ─────────────────────────────────────── */

function ClosureBox({ stale, label, color, value }: { stale: boolean; label: string; color: string; value: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
      <Label color={color}>{label}</Label>
      <div style={{
        padding: '8px 16px',
        border: `2px solid ${color}`,
        borderRadius: 8,
        background: `${color}14`,
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color,
        textAlign: 'center',
        minWidth: 110,
      }}>
        <div style={{ fontSize: 11, color: '#94a3b8', marginBottom: 4 }}>
          {stale ? 'captured at render' : 'always reads'}
        </div>
        <div style={{ fontWeight: 700 }}>{value}</div>
      </div>
    </div>
  )
}

export default function UseRefViz({ step, compact = false }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>

      {/* ── Step 0 — state re-renders, ref does not ── */}
      {step === 0 && (
        <AnimatePresence mode="wait">
          <motion.div
            key="step0"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}
          >
            <ValueBox label="state" value={3} flash color="#5b9cf5" />
            <div style={{
              alignSelf: 'center',
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: '#475569',
              paddingTop: 20,
            }}>
              vs
            </div>
            <ValueBox label="ref" value={3} flash={false} color={PINK} />
          </motion.div>
        </AnimatePresence>
      )}

      {/* ── Step 1 — DOM access via ref ── */}
      {step === 1 && (
        <AnimatePresence mode="wait">
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}
          >
            {/* useRef() box */}
            <CodeBlock minWidth={200}>
              <CodeLine highlight>{'const inputRef = useRef(null)'}</CodeLine>
            </CodeBlock>

            {/* arrow down */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.4, repeat: Infinity }}
                style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: PINK }}
              >
                ref={'{inputRef}'}
              </motion.div>
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                style={{ color: PINK, fontSize: 20, lineHeight: 1 }}
              >
                ↓
              </motion.div>
            </div>

            {/* input DOM node */}
            <motion.div
              animate={{ boxShadow: [`0 0 0px ${PINK}00`, `0 0 18px ${PINK}88`, `0 0 0px ${PINK}00`] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              style={{
                padding: '8px 20px',
                border: `2px solid ${PINK}`,
                borderRadius: 8,
                background: `${PINK}14`,
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: PINK,
                fontWeight: 700,
              }}
            >
              {'<input /> DOM node'}
            </motion.div>

            {/* trigger line */}
            <div style={{
              marginTop: 4,
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: '#94a3b8',
              background: 'rgba(0,0,0,0.3)',
              borderRadius: 5,
              padding: '3px 10px',
            }}>
              {'inputRef.current.focus()'}
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      {/* ── Step 2 — mutable values, no extra re-render ── */}
      {step === 2 && (
        <AnimatePresence mode="wait">
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}
          >
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              {/* Render counter */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <Label color="#5b9cf5">renders</Label>
                <div style={{
                  padding: '10px 18px',
                  border: '2px solid #5b9cf5',
                  borderRadius: 8,
                  background: 'rgba(91,156,245,0.1)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 28,
                  fontWeight: 700,
                  color: '#5b9cf5',
                  textAlign: 'center',
                }}>
                  1
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#94a3b8' }}>stays at 1</div>
              </div>

              <div style={{ alignSelf: 'center', paddingTop: 8, color: '#475569', fontFamily: 'var(--font-mono)', fontSize: 18 }}>
                +
              </div>

              {/* Ref value */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <Label color={PINK}>timerRef</Label>
                <motion.div
                  animate={{ boxShadow: [`0 0 0px ${PINK}00`, `0 0 14px ${PINK}66`, `0 0 0px ${PINK}00`] }}
                  transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 0.2 }}
                  style={{
                    padding: '10px 14px',
                    border: `2px solid ${PINK}`,
                    borderRadius: 8,
                    background: `${PINK}12`,
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: PINK,
                    textAlign: 'center',
                  }}
                >
                  <div style={{ color: '#94a3b8', marginBottom: 3, fontSize: 10 }}>current</div>
                  <div style={{ fontWeight: 700 }}>setInterval(...)</div>
                </motion.div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#94a3b8' }}>changes freely</div>
              </div>
            </div>

            <CodeBlock minWidth={220}>
              <CodeLine>{'const timerRef = useRef(null)'}</CodeLine>
              <CodeLine highlight>{'timerRef.current = setInterval(tick, 1s)'}</CodeLine>
              <CodeLine>{'// no re-render triggered'}</CodeLine>
            </CodeBlock>
          </motion.div>
        </AnimatePresence>
      )}

      {/* ── Step 3 — stale closures ── */}
      {step === 3 && (
        <AnimatePresence mode="wait">
          <motion.div
            key="step3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}
          >
            <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
              <ClosureBox stale label="closure" color="#f87171" value="count = 0 ❌" />
              <ClosureBox stale={false} label="ref" color={PINK} value="countRef.current ✓" />
            </div>

            <div style={{ display: 'flex', flex: 1, gap: 20 }}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                color: '#f87171',
                background: 'rgba(248,113,113,0.08)',
                border: '1px solid rgba(248,113,113,0.3)',
                borderRadius: 5,
                padding: '4px 10px',
                textAlign: 'center',
              }}>
                stale: frozen at<br />render time
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                color: PINK,
                background: `${PINK}10`,
                border: `1px solid ${PINK}44`,
                borderRadius: 5,
                padding: '4px 10px',
                textAlign: 'center',
              }}>
                always fresh:<br />.current is live
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      {/* ── Step 4 — forwardRef ── */}
      {step === 4 && (
        <AnimatePresence mode="wait">
          <motion.div
            key="step4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
          >
            {/* Parent */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0 }}
              style={{
                padding: '8px 18px',
                border: '2px solid #5b9cf5',
                borderRadius: 8,
                background: 'rgba(91,156,245,0.1)',
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: '#5b9cf5',
              }}
            >
              {'<Parent ref={myRef} />'}
            </motion.div>

            {/* arrow */}
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.1, repeat: Infinity }}
              style={{ color: PINK, fontSize: 18 }}
            >
              ↓
            </motion.div>

            {/* forwardRef wrapper */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              style={{
                padding: '8px 14px',
                border: `2px dashed ${PINK}`,
                borderRadius: 8,
                background: `${PINK}0e`,
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: PINK,
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 10, color: '#94a3b8', marginBottom: 2 }}>wrapped with</div>
              {'forwardRef((props, ref) => ...)'}
            </motion.div>

            {/* arrow */}
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.1, repeat: Infinity, delay: 0.2 }}
              style={{ color: PINK, fontSize: 18 }}
            >
              ↓
            </motion.div>

            {/* DOM node */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: 1,
                x: 0,
                boxShadow: [`0 0 0px ${PINK}00`, `0 0 16px ${PINK}88`, `0 0 0px ${PINK}00`],
              }}
              transition={{ delay: 0.3, boxShadow: { duration: 1.4, repeat: Infinity } }}
              style={{
                padding: '8px 22px',
                border: `2px solid ${PINK}`,
                borderRadius: 8,
                background: `${PINK}18`,
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: PINK,
                fontWeight: 700,
              }}
            >
              {'<input /> ← ref attaches here'}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}

      {/* ── Step 5 — ref vs state decision tree ── */}
      {step === 5 && (
        <AnimatePresence mode="wait">
          <motion.div
            key="step5"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 7, minWidth: 280 }}
          >
            {[
              { q: 'Trigger a re-render?', yes: 'useState', no: 'useRef', yesColor: '#5b9cf5', noColor: PINK },
              { q: 'Access a DOM node?', yes: null, no: 'useRef', noColor: PINK },
              { q: 'Store timer / ID?', yes: null, no: 'useRef', noColor: PINK },
            ].map((row, i) => (
              <motion.div
                key={row.q}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                style={{ display: 'flex', alignItems: 'center', gap: 8 }}
              >
                {/* Question */}
                <div style={{
                  flex: 1,
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: '#e2e8f0',
                  background: 'rgba(0,0,0,0.3)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 5,
                  padding: '5px 9px',
                }}>
                  {row.q}
                </div>

                {/* YES badge */}
                {row.yes ? (
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    fontWeight: 700,
                    color: row.yesColor,
                    background: `${row.yesColor}18`,
                    border: `1px solid ${row.yesColor}55`,
                    borderRadius: 4,
                    padding: '3px 7px',
                    whiteSpace: 'nowrap',
                  }}>
                    YES → {row.yes}
                  </div>
                ) : (
                  <div style={{ width: 76 }} />
                )}

                {/* NO / always badge */}
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  fontWeight: 700,
                  color: row.noColor ?? PINK,
                  background: `${row.noColor ?? PINK}18`,
                  border: `1px solid ${(row.noColor ?? PINK)}55`,
                  borderRadius: 4,
                  padding: '3px 7px',
                  whiteSpace: 'nowrap',
                }}>
                  {row.yes ? 'NO → ' : '→ '}{row.no}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      )}

      {/* ── Step label ── */}
      <AnimatePresence mode="wait">
        <motion.p
          key={step}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          style={{
            color: PINK,
            fontFamily: 'var(--font-mono)',
            fontSize: compact ? 11 : 12,
            textAlign: 'center',
            margin: 0,
          }}
        >
          {stepLabels[Math.min(step, stepLabels.length - 1)]}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}
