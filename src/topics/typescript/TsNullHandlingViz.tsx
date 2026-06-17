import { motion, AnimatePresence } from 'framer-motion'

interface Props { step: number; compact?: boolean }

const BLUE   = '#3b82f6'
const GREEN  = '#4ade80'
const YELLOW = '#fbbf24'
const RED    = '#f87171'
const PURPLE = '#a78bfa'
const MUTED  = '#94a3b8'
const TEXT   = '#e2e8f0'

const stepLabels = [
  'undefined vs null',
  'Optional chaining (?.)',
  'Nullish coalescing (??)',
  'The unknown type',
]

function TypeBadge({ label, color, compact }: { label: string; color: string; compact: boolean }) {
  return (
    <span style={{
      fontFamily: 'var(--font-mono)',
      fontSize: compact ? 10 : 11,
      color,
      background: `${color}18`,
      border: `1px solid ${color}44`,
      borderRadius: 5,
      padding: compact ? '1px 6px' : '2px 8px',
      fontWeight: 600,
      whiteSpace: 'nowrap',
    }}>
      {label}
    </span>
  )
}

function Step0({ compact }: { compact: boolean }) {
  return (
    <div style={{ display: 'flex', gap: compact ? 8 : 14, justifyContent: 'center' }}>
      {/* undefined */}
      <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}
        style={{ flex: 1, background: `${YELLOW}0d`, border: `1px solid ${YELLOW}33`, borderRadius: 10,
          padding: compact ? '10px 12px' : '16px 18px', display: 'flex', flexDirection: 'column',
          gap: compact ? 5 : 8, alignItems: 'center' }}>
        <TypeBadge label="undefined" color={YELLOW} compact={compact} />
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: MUTED, textAlign: 'center', lineHeight: 1.6 }}>
          Variable declared<br />but never assigned
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10,
          color: YELLOW, background: `${YELLOW}18`, borderRadius: 5, padding: compact ? '2px 6px' : '3px 8px' }}>
          let x: string
        </div>
      </motion.div>

      {/* null */}
      <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.3 }}
        style={{ flex: 1, background: `${RED}0d`, border: `1px solid ${RED}33`, borderRadius: 10,
          padding: compact ? '10px 12px' : '16px 18px', display: 'flex', flexDirection: 'column',
          gap: compact ? 5 : 8, alignItems: 'center' }}>
        <TypeBadge label="null" color={RED} compact={compact} />
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: MUTED, textAlign: 'center', lineHeight: 1.6 }}>
          Deliberately<br />set to nothing
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10,
          color: RED, background: `${RED}18`, borderRadius: 5, padding: compact ? '2px 6px' : '3px 8px' }}>
          let x = null
        </div>
      </motion.div>
    </div>
  )
}

function Step1({ compact }: { compact: boolean }) {
  const chain = [
    { label: 'user', optional: false },
    { label: '.profile', optional: true },
    { label: '.address', optional: true },
    { label: '.city', optional: true },
  ]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 8 : 12, alignItems: 'center' }}>
      {/* Chain visualization */}
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: compact ? 2 : 3 }}>
        {chain.map((part, i) => (
          <motion.span key={i} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12, duration: 0.28 }}
            style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 11 : 13 }}>
            {part.optional ? (
              <>
                <span style={{ color: MUTED }}>?</span>
                <span style={{ color: GREEN }}>{part.label}</span>
              </>
            ) : (
              <span style={{ color: TEXT }}>{part.label}</span>
            )}
          </motion.span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: compact ? 6 : 10, width: '100%' }}>
        <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.55, duration: 0.3 }}
          style={{ flex: 1, background: `${RED}0d`, border: `1px solid ${RED}33`, borderRadius: 8,
            padding: compact ? '7px 10px' : '10px 14px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: RED, fontWeight: 700, marginBottom: compact ? 3 : 4 }}>
            without ?.
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: MUTED }}>
            user.profile.address<br />→ TypeError if null ✗
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.65, duration: 0.3 }}
          style={{ flex: 1, background: `${GREEN}0d`, border: `1px solid ${GREEN}33`, borderRadius: 8,
            padding: compact ? '7px 10px' : '10px 14px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: GREEN, fontWeight: 700, marginBottom: compact ? 3 : 4 }}>
            with ?.
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: MUTED }}>
            user?.profile?.address<br />→ undefined (safe) ✓
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75, duration: 0.3 }}
        style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: BLUE,
          background: `${BLUE}12`, borderRadius: 5, padding: compact ? '3px 8px' : '4px 10px', textAlign: 'center' }}>
        Short-circuits on null/undefined — never throws
      </motion.div>
    </div>
  )
}

function Step2({ compact }: { compact: boolean }) {
  const examples = [
    { left: 'null', op: '??', right: '"guest"', result: '"guest"', color: GREEN },
    { left: 'undefined', op: '??', right: '0', result: '0', color: BLUE },
    { left: '0', op: '??', right: '"fallback"', result: '0', color: YELLOW, note: '0 is not null!' },
    { left: '""', op: '??', right: '"default"', result: '""', color: YELLOW, note: 'empty string passes' },
  ]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 5 : 8 }}>
      {examples.map((ex, i) => (
        <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.12, duration: 0.28 }}
          style={{ display: 'flex', alignItems: 'center', gap: compact ? 5 : 8,
            padding: compact ? '4px 8px' : '5px 12px', borderRadius: 6,
            background: `${ex.color}0d`, border: `1px solid ${ex.color}22` }}>
          <TypeBadge label={ex.left} color={MUTED} compact={compact} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 11 : 13, color: PURPLE, fontWeight: 700 }}>{ex.op}</span>
          <TypeBadge label={ex.right} color={MUTED} compact={compact} />
          <span style={{ color: MUTED, fontSize: compact ? 10 : 12 }}>→</span>
          <TypeBadge label={ex.result} color={ex.color} compact={compact} />
          {ex.note && (
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 8 : 9, color: YELLOW }}>{ex.note}</span>
          )}
        </motion.div>
      ))}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.3 }}
        style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: PURPLE,
          background: `${PURPLE}12`, borderRadius: 5, padding: compact ? '3px 8px' : '4px 10px', textAlign: 'center' }}>
        ?? only triggers on null/undefined — use || for all falsy values
      </motion.div>
    </div>
  )
}

function Step3({ compact }: { compact: boolean }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 8 : 12, alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: compact ? 8 : 14, width: '100%' }}>
        {/* any */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}
          style={{ flex: 1, background: `${RED}0d`, border: `1px solid ${RED}33`, borderRadius: 10,
            padding: compact ? '10px 12px' : '14px 16px', display: 'flex', flexDirection: 'column',
            gap: compact ? 4 : 6 }}>
          <TypeBadge label="any" color={RED} compact={compact} />
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: MUTED, lineHeight: 1.6 }}>
            No checks — use freely<br />Opt-out of type safety
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.3 }}
            style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: RED }}>
            val.anything() // no error
          </motion.div>
        </motion.div>
        {/* unknown */}
        <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.3 }}
          style={{ flex: 1, background: `${GREEN}0d`, border: `1px solid ${GREEN}33`, borderRadius: 10,
            padding: compact ? '10px 12px' : '14px 16px', display: 'flex', flexDirection: 'column',
            gap: compact ? 4 : 6 }}>
          <TypeBadge label="unknown" color={GREEN} compact={compact} />
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: MUTED, lineHeight: 1.6 }}>
            Must narrow before use<br />Type-safe any alternative
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.3 }}
            style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: GREEN }}>
            if (typeof val === "string") ...
          </motion.div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.3 }}
        style={{ width: '100%', background: `${BLUE}0d`, border: `1px solid ${BLUE}33`, borderRadius: 8,
          padding: compact ? '7px 12px' : '10px 16px', fontFamily: 'var(--font-mono)',
          fontSize: compact ? 9 : 10, color: MUTED, lineHeight: 1.7 }}>
        <span style={{ color: BLUE, fontWeight: 700 }}>catch (err: unknown)</span><br />
        <span style={{ color: MUTED }}>err is unknown — check with </span>
        <span style={{ color: GREEN }}>instanceof Error</span>
        <span style={{ color: MUTED }}> before using .message</span>
      </motion.div>
    </div>
  )
}

export default function TsNullHandlingViz({ step, compact = false }: Props) {
  const clampedStep = Math.min(step, stepLabels.length - 1)

  const stepContent: Record<number, React.ReactNode> = {
    0: <Step0 compact={compact} />,
    1: <Step1 compact={compact} />,
    2: <Step2 compact={compact} />,
    3: <Step3 compact={compact} />,
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: compact ? 12 : 20 }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={`label-${clampedStep}`}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.3 }}
          style={{
            background: `${PURPLE}22`,
            border: `1px solid ${PURPLE}55`,
            borderRadius: 20,
            padding: compact ? '3px 10px' : '4px 14px',
            fontSize: compact ? 10 : 11,
            fontFamily: 'var(--font-mono)',
            color: PURPLE,
            fontWeight: 600,
          }}
        >
          {stepLabels[clampedStep]}
        </motion.div>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.div
          key={`step-${clampedStep}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          style={{ width: '100%' }}
        >
          {stepContent[clampedStep]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
