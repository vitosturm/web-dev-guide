import { motion, AnimatePresence } from 'framer-motion'

interface Props { step: number; compact?: boolean }

const BLUEGRAY = '#a3b4c6'
const GREEN    = '#4ade80'
const RED      = '#f87171'
const AMBER    = '#fbbf24'
const SLATE    = '#94a3b8'
const VIOLET   = '#a78bfa'
const SKY      = '#38bdf8'

const mono = 'var(--font-mono)'

// Reusable file-tree row
function TreeRow({
  indent = 0,
  label,
  highlight = false,
  highlightColor = BLUEGRAY,
  tag,
  compact = false,
}: {
  indent?: number
  label: string
  highlight?: boolean
  highlightColor?: string
  tag?: string
  compact?: boolean
}) {
  const fs = compact ? 8 : 10
  const pad = compact ? 4 : 6
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: compact ? 4 : 6,
      paddingLeft: indent * (compact ? 10 : 14),
      paddingTop: compact ? 1 : 2,
      paddingBottom: compact ? 1 : 2,
    }}>
      {indent > 0 && (
        <span style={{ fontFamily: mono, fontSize: fs, color: SLATE + '44', flexShrink: 0 }}>└─</span>
      )}
      <span style={{
        fontFamily: mono, fontSize: fs,
        color: highlight ? highlightColor : SLATE + '99',
        fontWeight: highlight ? 700 : 400,
        background: highlight ? `${highlightColor}18` : 'transparent',
        border: highlight ? `1px solid ${highlightColor}44` : '1px solid transparent',
        borderRadius: 4,
        padding: highlight ? `1px ${pad}px` : `1px ${pad}px`,
      }}>
        {label}
      </span>
      {tag && (
        <span style={{ fontFamily: mono, fontSize: compact ? 6 : 7, color: highlightColor + '99' }}>{tag}</span>
      )}
    </div>
  )
}

export default function NextjsErrorViz({ step, compact = false }: Props) {
  const s = Math.min(step, 4)
  const panelW = compact ? 220 : 300

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: compact ? 10 : 16, width: '100%' }}>
      <AnimatePresence mode="wait">

        {/* ── Step 0 — The problem ── */}
        {s === 0 && (
          <motion.div key="s0"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ width: panelW, display: 'flex', flexDirection: 'column', gap: compact ? 6 : 10 }}>

            {/* Layout box — goes red */}
            <motion.div
              initial={{ borderColor: SLATE + '33' }}
              animate={{ borderColor: RED + '88' }}
              transition={{ delay: 0.35, duration: 0.5 }}
              style={{
                background: `${RED}08`,
                border: `1px solid ${RED}44`,
                borderRadius: 8,
                padding: compact ? '8px 10px' : '10px 14px',
              }}>
              <div style={{ fontFamily: mono, fontSize: compact ? 7 : 8, color: RED + 'bb', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.07em', marginBottom: compact ? 6 : 8 }}>
                layout.tsx
              </div>

              {/* Nav bar (broken) */}
              <motion.div
                initial={{ background: `${SLATE}18` }}
                animate={{ background: `${RED}22` }}
                transition={{ delay: 0.5, duration: 0.4 }}
                style={{ borderRadius: 5, height: compact ? 12 : 16, marginBottom: compact ? 5 : 7, display: 'flex', alignItems: 'center', paddingLeft: compact ? 6 : 8 }}>
                <span style={{ fontFamily: mono, fontSize: compact ? 6 : 7, color: SLATE + '66' }}>nav</span>
              </motion.div>

              {/* Route segment that crashes */}
              <div style={{
                background: `${RED}14`, border: `1px solid ${RED}66`,
                borderRadius: 6, padding: compact ? '5px 8px' : '6px 10px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <span style={{ fontFamily: mono, fontSize: compact ? 8 : 9, color: RED, fontWeight: 700 }}>
                  dashboard/page.tsx
                </span>
                <motion.span
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 280 }}
                  style={{ fontSize: compact ? 14 : 18 }}>
                  💥
                </motion.span>
              </div>

              {/* Footer (broken) */}
              <motion.div
                initial={{ background: `${SLATE}18` }}
                animate={{ background: `${RED}22` }}
                transition={{ delay: 0.5, duration: 0.4 }}
                style={{ borderRadius: 5, height: compact ? 10 : 13, marginTop: compact ? 5 : 7, display: 'flex', alignItems: 'center', paddingLeft: compact ? 6 : 8 }}>
                <span style={{ fontFamily: mono, fontSize: compact ? 6 : 7, color: SLATE + '66' }}>footer</span>
              </motion.div>
            </motion.div>

            {/* Explanation */}
            <motion.div
              initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
              style={{
                fontFamily: mono, fontSize: compact ? 7 : 9, color: SLATE + '88',
                background: `${SLATE}0a`, border: `1px solid ${SLATE}22`,
                borderRadius: 6, padding: compact ? '4px 8px' : '6px 10px', lineHeight: 1.65,
              }}>
              <span style={{ color: RED + 'cc' }}>No error.tsx</span>
              {' → unhandled error propagates\nup through layout.tsx → '}
              <span style={{ color: RED }}>whole page crashes</span>
            </motion.div>
          </motion.div>
        )}

        {/* ── Step 1 — error.tsx ── */}
        {s === 1 && (
          <motion.div key="s1"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ width: panelW, display: 'flex', flexDirection: 'column', gap: compact ? 6 : 10 }}>

            {/* Layout — stays green */}
            <motion.div
              initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
              style={{
                background: `${GREEN}08`, border: `1px solid ${GREEN}33`,
                borderRadius: 8, padding: compact ? '8px 10px' : '10px 14px',
              }}>
              <div style={{ fontFamily: mono, fontSize: compact ? 7 : 8, color: GREEN + 'cc', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.07em', marginBottom: compact ? 6 : 8 }}>
                layout.tsx
                <span style={{ fontFamily: mono, fontSize: compact ? 6 : 7, color: GREEN + '88', fontWeight: 400, marginLeft: compact ? 6 : 8 }}>stays intact ✓</span>
              </div>

              {/* error.tsx boundary */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
                style={{
                  background: `${BLUEGRAY}0a`, border: `1.5px solid ${BLUEGRAY}55`,
                  borderRadius: 7, padding: compact ? '5px 8px' : '7px 10px',
                }}>
                <div style={{ fontFamily: mono, fontSize: compact ? 7 : 8, color: BLUEGRAY, fontWeight: 700, marginBottom: compact ? 4 : 6 }}>
                  error.tsx
                  <span style={{ color: BLUEGRAY + '77', fontWeight: 400 }}> ← boundary</span>
                </div>

                {/* page.tsx inside boundary */}
                <motion.div
                  initial={{ borderColor: SLATE + '22' }}
                  animate={{ borderColor: RED + '77' }}
                  transition={{ delay: 0.45, duration: 0.4 }}
                  style={{
                    background: `${RED}10`, border: `1px solid ${RED}44`,
                    borderRadius: 5, padding: compact ? '4px 7px' : '5px 9px',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  }}>
                  <span style={{ fontFamily: mono, fontSize: compact ? 8 : 9, color: RED + 'cc' }}>page.tsx</span>
                  <motion.span
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, type: 'spring', stiffness: 240 }}
                    style={{ fontSize: compact ? 11 : 14 }}>
                    💥
                  </motion.span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
                  style={{ fontFamily: mono, fontSize: compact ? 6 : 7, color: BLUEGRAY + '88', marginTop: compact ? 3 : 4 }}>
                  error caught here — boundary renders fallback UI
                </motion.div>
              </motion.div>
            </motion.div>

            {/* File tree */}
            <motion.div
              initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              style={{
                background: `${SLATE}0a`, border: `1px solid ${SLATE}22`,
                borderRadius: 8, padding: compact ? '6px 8px' : '8px 12px',
              }}>
              <TreeRow label="app/" compact={compact} />
              <TreeRow indent={1} label="layout.tsx" highlightColor={GREEN} compact={compact} />
              <TreeRow indent={1} label="dashboard/" compact={compact} />
              <TreeRow indent={2} label="error.tsx" highlight highlightColor={BLUEGRAY} tag="← catches segment error" compact={compact} />
              <TreeRow indent={2} label="page.tsx" highlight highlightColor={RED} tag="← throws" compact={compact} />
            </motion.div>
          </motion.div>
        )}

        {/* ── Step 2 — not-found.tsx + notFound() ── */}
        {s === 2 && (
          <motion.div key="s2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ width: panelW, display: 'flex', flexDirection: 'column', gap: compact ? 6 : 10 }}>

            {/* File tree with not-found.tsx */}
            <motion.div
              initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
              style={{
                background: `${SLATE}0a`, border: `1px solid ${SLATE}22`,
                borderRadius: 8, padding: compact ? '6px 8px' : '8px 12px',
              }}>
              <TreeRow label="app/" compact={compact} />
              <TreeRow indent={1} label="not-found.tsx" highlight highlightColor={AMBER} tag="← custom 404" compact={compact} />
              <TreeRow indent={1} label="page.tsx" compact={compact} />
            </motion.div>

            {/* Flow: notFound() call → not-found.tsx renders */}
            <motion.div
              initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              style={{ display: 'flex', flexDirection: 'column', gap: compact ? 4 : 6 }}>

              {/* page.tsx calling notFound() */}
              <div style={{
                background: `${SLATE}0c`, border: `1px solid ${SLATE}33`,
                borderRadius: 8, padding: compact ? '6px 8px' : '8px 10px',
              }}>
                <div style={{ fontFamily: mono, fontSize: compact ? 7 : 8, color: SLATE + 'bb', fontWeight: 700, marginBottom: compact ? 3 : 5 }}>
                  page.tsx
                </div>
                <div style={{ fontFamily: mono, fontSize: compact ? 8 : 10, color: SLATE + 'aa', lineHeight: 1.65 }}>
                  <span style={{ color: SKY }}>if </span>
                  <span style={{ color: SLATE + '77' }}>(!data) {'{'}</span>
                  <br />
                  <span style={{ color: SLATE + '44' }}>{'  '}</span>
                  <motion.span
                    style={{
                      color: AMBER, fontWeight: 700,
                      background: `${AMBER}18`, border: `1px solid ${AMBER}44`,
                      borderRadius: 3, padding: compact ? '0 3px' : '0 4px',
                    }}>
                    notFound()
                  </motion.span>
                  <br />
                  <span style={{ color: SLATE + '77' }}>{'}'}</span>
                </div>
              </div>

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }} animate={{ opacity: 1, scaleY: 1 }} transition={{ delay: 0.4 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: compact ? 1 : 2 }}>
                <div style={{ width: 1, height: compact ? 10 : 14, background: AMBER + '66' }} />
                <span style={{ fontFamily: mono, fontSize: compact ? 9 : 11, color: AMBER + '88' }}>▼</span>
              </motion.div>

              {/* Custom 404 page render */}
              <motion.div
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
                style={{
                  background: `${AMBER}0c`, border: `1.5px solid ${AMBER}55`,
                  borderRadius: 8, padding: compact ? '6px 8px' : '8px 10px',
                }}>
                <div style={{ fontFamily: mono, fontSize: compact ? 7 : 8, color: AMBER, fontWeight: 700, marginBottom: compact ? 3 : 5 }}>
                  not-found.tsx renders
                </div>
                {/* Browser frame mockup */}
                <div style={{
                  background: `${SLATE}0a`, border: `1px solid ${SLATE}22`,
                  borderRadius: 5, padding: compact ? '5px 8px' : '7px 10px',
                  display: 'flex', flexDirection: 'column', gap: compact ? 3 : 4,
                }}>
                  <div style={{ display: 'flex', gap: compact ? 3 : 4, alignItems: 'center' }}>
                    {['#f87171', '#fbbf24', '#4ade80'].map((c) => (
                      <div key={c} style={{ width: compact ? 4 : 5, height: compact ? 4 : 5, borderRadius: '50%', background: c + '88' }} />
                    ))}
                    <div style={{ flex: 1, height: compact ? 5 : 6, background: SLATE + '22', borderRadius: 3 }} />
                  </div>
                  <div style={{ fontFamily: mono, fontSize: compact ? 9 : 11, color: AMBER, fontWeight: 700 }}>404</div>
                  <div style={{ fontFamily: mono, fontSize: compact ? 7 : 8, color: SLATE + '88' }}>Custom not found page</div>
                </div>
                <div style={{ fontFamily: mono, fontSize: compact ? 6 : 7, color: AMBER + '88', marginTop: compact ? 3 : 4 }}>
                  instead of default Next.js 404
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {/* ── Step 3 — global-error.tsx ── */}
        {s === 3 && (
          <motion.div key="s3"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ width: panelW, display: 'flex', flexDirection: 'column', gap: compact ? 6 : 10 }}>

            {/* File tree */}
            <motion.div
              initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
              style={{
                background: `${SLATE}0a`, border: `1px solid ${SLATE}22`,
                borderRadius: 8, padding: compact ? '6px 8px' : '8px 12px',
              }}>
              <TreeRow label="app/" compact={compact} />
              <TreeRow indent={1} label="global-error.tsx" highlight highlightColor={VIOLET} tag="← highlighted" compact={compact} />
              <TreeRow indent={1} label="layout.tsx" compact={compact} />
              <TreeRow indent={1} label="error.tsx" compact={compact} />
            </motion.div>

            {/* global-error wraps entire app */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
              style={{
                background: `${VIOLET}0c`, border: `1.5px solid ${VIOLET}55`,
                borderRadius: 8, padding: compact ? '8px 10px' : '10px 14px',
              }}>
              <div style={{ fontFamily: mono, fontSize: compact ? 7 : 8, color: VIOLET, fontWeight: 700, marginBottom: compact ? 5 : 7 }}>
                global-error.tsx
                <span style={{ color: VIOLET + '77', fontWeight: 400 }}> wraps entire app</span>
              </div>

              {/* layout.tsx inside */}
              <motion.div
                initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                style={{
                  background: `${SLATE}0a`, border: `1px solid ${SLATE}33`,
                  borderRadius: 6, padding: compact ? '5px 8px' : '7px 10px',
                }}>
                <div style={{ fontFamily: mono, fontSize: compact ? 7 : 8, color: SLATE + 'aa', fontWeight: 700, marginBottom: compact ? 3 : 5 }}>
                  layout.tsx
                  <motion.span
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
                    style={{ color: RED + '99', fontWeight: 400 }}>
                    {' ← can crash here'}
                  </motion.span>
                </div>
                <div style={{
                  background: `${SLATE}08`, border: `1px solid ${SLATE}22`,
                  borderRadius: 5, height: compact ? 16 : 20,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ fontFamily: mono, fontSize: compact ? 7 : 8, color: SLATE + '55' }}>page content</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                style={{ fontFamily: mono, fontSize: compact ? 6 : 7, color: VIOLET + '88', marginTop: compact ? 4 : 6 }}>
                catches errors in root layout.tsx — must include {'<html>/<body>'}
              </motion.div>
            </motion.div>

            {/* Must be 'use client' note */}
            <motion.div
              initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
              style={{
                fontFamily: mono, fontSize: compact ? 7 : 9, color: SLATE + '88',
                background: `${SLATE}0a`, border: `1px solid ${SLATE}22`,
                borderRadius: 6, padding: compact ? '4px 8px' : '5px 10px',
                display: 'flex', alignItems: 'center', gap: compact ? 5 : 7,
              }}>
              <span style={{
                color: AMBER, background: `${AMBER}18`,
                border: `1px solid ${AMBER}44`,
                borderRadius: 3, padding: compact ? '0 3px' : '1px 5px',
                fontFamily: mono, fontSize: compact ? 6 : 7,
              }}>
                'use client'
              </span>
              <span>required — replaces entire page on error</span>
            </motion.div>
          </motion.div>
        )}

        {/* ── Step 4 — The hierarchy ── */}
        {s === 4 && (
          <motion.div key="s4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ width: panelW, display: 'flex', flexDirection: 'column', gap: compact ? 5 : 8 }}>

            <div style={{ fontFamily: mono, fontSize: compact ? 7 : 8, color: SLATE + '88', marginBottom: compact ? 2 : 3 }}>
              Error boundary waterfall:
            </div>

            {[
              { label: 'global-error.tsx', desc: 'catches errors in root layout', color: VIOLET, indent: 0, delay: 0.05 },
              { label: 'layout.tsx',       desc: 'shared UI shell',               color: SLATE,  indent: 1, delay: 0.15 },
              { label: 'error.tsx',        desc: 'catches segment errors',        color: BLUEGRAY, indent: 2, delay: 0.25 },
              { label: 'page.tsx',         desc: 'route content',                 color: GREEN,  indent: 3, delay: 0.35 },
              { label: 'not-found.tsx',    desc: 'renders on notFound()',         color: AMBER,  indent: 4, delay: 0.45 },
            ].map(({ label, desc, color, indent, delay }) => (
              <motion.div key={label}
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay }}
                style={{
                  paddingLeft: indent * (compact ? 12 : 16),
                  display: 'flex', flexDirection: 'column', gap: compact ? 1 : 2,
                }}>
                {indent > 0 && (
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 0 }}>
                    <div style={{
                      width: indent * (compact ? 12 : 16) - (compact ? 8 : 10),
                      height: compact ? 10 : 12,
                      borderLeft: `1px solid ${SLATE}33`,
                      borderBottom: `1px solid ${SLATE}33`,
                      position: 'absolute',
                      marginLeft: (indent - 1) * (compact ? 12 : 16) + (compact ? 4 : 6),
                    }} />
                  </div>
                )}
                <div style={{
                  display: 'flex', alignItems: 'center',
                  gap: compact ? 6 : 8,
                  background: `${color}0a`, border: `1px solid ${color}33`,
                  borderRadius: 6, padding: compact ? '4px 7px' : '5px 9px',
                  position: 'relative',
                }}>
                  <span style={{ fontFamily: mono, fontSize: compact ? 8 : 10, color, fontWeight: 700 }}>{label}</span>
                  <span style={{ fontFamily: mono, fontSize: compact ? 6 : 7, color: color + '77' }}>— {desc}</span>
                </div>
              </motion.div>
            ))}

            {/* Scope arrow note */}
            <motion.div
              initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              style={{
                fontFamily: mono, fontSize: compact ? 7 : 8, color: SLATE + '88',
                background: `${SLATE}0a`, border: `1px solid ${SLATE}22`,
                borderRadius: 6, padding: compact ? '4px 7px' : '5px 9px',
                textAlign: 'center' as const, marginTop: compact ? 2 : 4,
              }}>
              outer boundaries catch errors inner ones don't handle
            </motion.div>
          </motion.div>
        )}

      </AnimatePresence>

      {/* Step caption */}
      <AnimatePresence mode="wait">
        <motion.p
          key={s}
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          style={{
            margin: 0, fontFamily: mono,
            fontSize: compact ? 9 : 10,
            color: [RED, BLUEGRAY, AMBER, VIOLET, SLATE][s] ?? BLUEGRAY,
            textAlign: 'center' as const, maxWidth: 320,
          }}>
          {[
            'without error.tsx, an unhandled exception crashes the entire page layout',
            'error.tsx wraps only its segment — the rest of the layout stays intact',
            'call notFound() anywhere in a server component to render your custom 404',
            'global-error.tsx is the last resort — it catches failures in root layout.tsx itself',
            'errors bubble outward: page → error.tsx → global-error.tsx — place boundaries where needed',
          ][s]}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}
