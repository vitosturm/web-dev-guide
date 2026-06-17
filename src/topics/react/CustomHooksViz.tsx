import { motion, AnimatePresence } from 'framer-motion'

interface Props { step: number; compact?: boolean }

const PINK = '#f472b6'
const stepLabels = [
  'Same logic copy-pasted across components',
  'Custom hooks: must start with "use"',
  'useLocalStorage — syncs state with storage',
  'useDebounce — delays rapid events',
  'Share logic across many components',
]

function CodeLine({ children, highlight, dim }: { children: string; highlight?: boolean; dim?: boolean }) {
  return (
    <span style={{
      display: 'block',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: dim ? '#475569' : highlight ? PINK : '#e2e8f0',
      fontWeight: highlight ? 700 : 400,
      background: highlight ? 'rgba(244,114,182,0.12)' : 'transparent',
      borderRadius: 3,
      padding: '1px 4px',
    }}>
      {children}
    </span>
  )
}

function CodeBlock({ children, borderColor, minW }: { children: React.ReactNode; borderColor?: string; minW?: number }) {
  return (
    <div style={{
      background: 'rgba(0,0,0,0.35)',
      border: `1px solid ${borderColor ?? 'rgba(244,114,182,0.25)'}`,
      borderRadius: 8,
      padding: '10px 14px',
      minWidth: minW ?? 220,
    }}>
      {children}
    </div>
  )
}

function Label({ children, color }: { children: string; color?: string }) {
  return (
    <div style={{
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: color ?? '#94a3b8',
      textAlign: 'center',
      marginTop: 4,
    }}>
      {children}
    </div>
  )
}

function Arrow({ color, dir = 'down' }: { color?: string; dir?: 'down' | 'right' | 'left' }) {
  const arrows: Record<string, string> = { down: '↓', right: '→', left: '←' }
  return (
    <span style={{ color: color ?? PINK, fontSize: 16, lineHeight: 1 }}>
      {arrows[dir]}
    </span>
  )
}

function ComponentBox({
  name,
  showDuplicate,
  showClean,
}: {
  name: string
  showDuplicate?: boolean
  showClean?: boolean
}) {
  return (
    <div style={{
      background: showDuplicate ? 'rgba(239,68,68,0.06)' : 'rgba(0,0,0,0.35)',
      border: `1px solid ${showDuplicate ? 'rgba(239,68,68,0.45)' : 'rgba(244,114,182,0.3)'}`,
      borderRadius: 8,
      padding: '10px 14px',
      minWidth: 170,
    }}>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: PINK,
        fontWeight: 700,
        marginBottom: 6,
      }}>
        {'<'}{name}{' />'}
      </div>
      {showDuplicate && (
        <>
          <CodeLine>{'  const [data, setData]'}</CodeLine>
          <CodeLine>{'    = useState(null)'}</CodeLine>
          <CodeLine>{'  useEffect(() => {'}</CodeLine>
          <CodeLine>{'    fetch(url).then('}</CodeLine>
          <CodeLine>{'      res => setData(res)'}</CodeLine>
          <CodeLine>{'    )'}</CodeLine>
          <CodeLine>{'  }, [url])'}</CodeLine>
        </>
      )}
      {showClean && (
        <>
          <CodeLine highlight>{'  const { data, loading,'}</CodeLine>
          <CodeLine highlight>{'    error } = useData(url)'}</CodeLine>
        </>
      )}
    </div>
  )
}

export default function CustomHooksViz({ step, compact = false }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>

      {/* Step 0 — duplication problem */}
      {step === 0 && (
        <AnimatePresence mode="wait">
          <motion.div
            key="step0"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}
          >
            <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <ComponentBox name="UserProfile" showDuplicate />
                <Label color="rgba(239,68,68,0.85)">fetches user data</Label>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <ComponentBox name="PostList" showDuplicate />
                <Label color="rgba(239,68,68,0.85)">fetches post data</Label>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'rgba(239,68,68,0.9)',
                background: 'rgba(239,68,68,0.08)',
                border: '1px solid rgba(239,68,68,0.3)',
                borderRadius: 5,
                padding: '4px 10px',
              }}
            >
              identical logic duplicated
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}

      {/* Step 1 — rules of custom hooks */}
      {step === 1 && (
        <AnimatePresence mode="wait">
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}
          >
            <CodeBlock minW={260}>
              <CodeLine highlight>{'function useData(url) {  // "use" prefix'}</CodeLine>
              <CodeLine>{'  const [data, setData]'}</CodeLine>
              <CodeLine>{'    = useState(null)    // ← hook'}</CodeLine>
              <CodeLine>{'  useEffect(() => {    // ← hook'}</CodeLine>
              <CodeLine>{'    fetch(url).then('}</CodeLine>
              <CodeLine>{'      res => setData(res)'}</CodeLine>
              <CodeLine>{'    )'}</CodeLine>
              <CodeLine>{'  }, [url])'}</CodeLine>
              <CodeLine>{'  return data'}</CodeLine>
              <CodeLine>{'}'}</CodeLine>
            </CodeBlock>
            <div style={{ display: 'flex', gap: 18, marginTop: 4, justifyContent: 'center' }}>
              {[
                { label: 'starts with "use"', color: PINK },
                { label: 'calls other hooks', color: '#a78bfa' },
                { label: 'returns values', color: '#4ade80' },
              ].map(({ label, color }) => (
                <div key={label} style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  color,
                  background: `${color}15`,
                  border: `1px solid ${color}44`,
                  borderRadius: 4,
                  padding: '3px 7px',
                }}>
                  {label}
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      {/* Step 2 — useLocalStorage */}
      {step === 2 && (
        <AnimatePresence mode="wait">
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
          >
            {/* Hook box */}
            <div style={{
              background: 'rgba(0,0,0,0.4)',
              border: `2px solid ${PINK}`,
              borderRadius: 8,
              padding: '10px 18px',
              textAlign: 'center',
              boxShadow: `0 0 18px ${PINK}33`,
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: PINK, fontWeight: 700 }}>
                useLocalStorage(key, initial)
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#94a3b8', marginTop: 4 }}>
                {'returns [storedValue, setValue]'}
              </div>
            </div>

            {/* Two outputs */}
            <div style={{ display: 'flex', gap: 36, alignItems: 'flex-start' }}>
              {/* localStorage side */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}
              >
                <Arrow color="#f5c542" />
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: '#f5c542',
                  background: 'rgba(245,197,66,0.1)',
                  border: '1px solid rgba(245,197,66,0.35)',
                  borderRadius: 6,
                  padding: '6px 10px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontWeight: 700 }}>localStorage</div>
                  <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    style={{ fontSize: 10, marginTop: 2, color: '#94a3b8' }}
                  >
                    "theme": "dark"
                  </motion.div>
                </div>
                <Label>persists across sessions</Label>
              </motion.div>

              {/* state side */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}
              >
                <Arrow color="#4ade80" />
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: '#4ade80',
                  background: 'rgba(74,222,128,0.08)',
                  border: '1px solid rgba(74,222,128,0.3)',
                  borderRadius: 6,
                  padding: '6px 10px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontWeight: 700 }}>state</div>
                  <motion.div
                    key="state-val"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                    style={{ fontSize: 10, marginTop: 2, color: '#94a3b8' }}
                  >
                    "dark"
                  </motion.div>
                </div>
                <Label>triggers re-render</Label>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      {/* Step 3 — useDebounce */}
      {step === 3 && (
        <AnimatePresence mode="wait">
          <motion.div
            key="step3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}
          >
            {/* Input stream */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 4, width: '100%', maxWidth: 300 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#94a3b8', marginBottom: 2 }}>
                rapid keystrokes
              </div>
              <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                {[0, 0.08, 0.16, 0.24, 0.32, 0.40].map((delay, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay }}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      background: 'rgba(244,114,182,0.6)',
                      border: `1px solid ${PINK}`,
                    }}
                  />
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: PINK, marginLeft: 4 }}
                >
                  "reac"
                </motion.div>
              </div>
            </div>

            <Arrow color={PINK} />

            {/* Debounce box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: '#f5c542',
                background: 'rgba(245,197,66,0.08)',
                border: '1px solid rgba(245,197,66,0.4)',
                borderRadius: 8,
                padding: '8px 20px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontWeight: 700 }}>useDebounce</div>
              <div style={{ fontSize: 10, color: '#94a3b8', marginTop: 3 }}>wait 300ms for pause</div>
            </motion.div>

            <Arrow color={PINK} />

            {/* Single output */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 300 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}
            >
              <div style={{
                width: 14,
                height: 14,
                borderRadius: '50%',
                background: '#4ade80',
                border: '2px solid #4ade80',
                boxShadow: '0 0 12px #4ade8088',
              }} />
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#4ade80' }}>
                single debounced value
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}

      {/* Step 4 — sharing logic */}
      {step === 4 && (
        <AnimatePresence mode="wait">
          <motion.div
            key="step4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
          >
            {/* Shared hook at top */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              style={{
                background: 'rgba(0,0,0,0.4)',
                border: `2px solid ${PINK}`,
                borderRadius: 8,
                padding: '8px 20px',
                textAlign: 'center',
                boxShadow: `0 0 20px ${PINK}33`,
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: PINK, fontWeight: 700 }}>
                useData(url)
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#94a3b8', marginTop: 3 }}>
                {'→ { data, loading, error }'}
              </div>
            </motion.div>

            {/* Arrows down */}
            <div style={{ display: 'flex', gap: 96 }}>
              {[0.2, 0.3].map((delay, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay }}
                >
                  <Arrow color={PINK} />
                </motion.div>
              ))}
            </div>

            {/* Component boxes using the hook */}
            <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <ComponentBox name="UserProfile" showClean />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <ComponentBox name="PostList" showClean />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: '#4ade80',
                background: 'rgba(74,222,128,0.08)',
                border: '1px solid rgba(74,222,128,0.3)',
                borderRadius: 5,
                padding: '4px 10px',
              }}
            >
              one source of truth, zero duplication
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}

      {/* Step label */}
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
          }}
        >
          {stepLabels[Math.min(step, stepLabels.length - 1)]}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}
