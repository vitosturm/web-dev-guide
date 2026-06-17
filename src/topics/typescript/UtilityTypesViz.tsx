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
  'Partial & Required',
  'Pick & Omit',
  'Record, Readonly & ReturnType',
  'Exclude, Extract & NonNullable',
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

function PropRow({ name, optional, delay, color, compact }: { name: string; optional: boolean; delay: number; color: string; compact: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3 }}
      style={{ display: 'flex', alignItems: 'center', gap: compact ? 4 : 6,
        fontFamily: 'var(--font-mono)', fontSize: compact ? 10 : 11 }}
    >
      <span style={{ color }}>{name}</span>
      {optional && <span style={{ color: YELLOW }}>?</span>}
      <span style={{ color: MUTED }}>:</span>
      <span style={{ color: MUTED }}>string</span>
    </motion.div>
  )
}

function Step0({ compact }: { compact: boolean }) {
  const fields = ['name', 'email', 'role']
  return (
    <div style={{ display: 'flex', gap: compact ? 8 : 14, justifyContent: 'center' }}>
      {/* Original */}
      <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}
        style={{ background: 'var(--surface-bright)', border: `1px solid ${MUTED}33`, borderRadius: 8,
          padding: compact ? '8px 12px' : '12px 16px', display: 'flex', flexDirection: 'column', gap: compact ? 4 : 6 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: BLUE, fontWeight: 700, marginBottom: 2 }}>User</div>
        {fields.map((f, i) => <PropRow key={f} name={f} optional={false} delay={i * 0.1} color={TEXT} compact={compact} />)}
      </motion.div>

      {/* Arrows */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', gap: compact ? 4 : 6 }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.3 }}
          style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: YELLOW,
            background: `${YELLOW}18`, borderRadius: 5, padding: compact ? '2px 6px' : '3px 9px', textAlign: 'center' }}>
          Partial&lt;T&gt;
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.3 }}
          style={{ color: MUTED, textAlign: 'center', fontSize: compact ? 12 : 14 }}>↓</motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55, duration: 0.3 }}
          style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: GREEN,
            background: `${GREEN}18`, borderRadius: 5, padding: compact ? '2px 6px' : '3px 9px', textAlign: 'center' }}>
          Required&lt;T&gt;
        </motion.div>
      </div>

      {/* Partial result */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 6 : 8 }}>
        <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.3 }}
          style={{ background: `${YELLOW}0d`, border: `1px solid ${YELLOW}33`, borderRadius: 8,
            padding: compact ? '7px 11px' : '10px 14px', display: 'flex', flexDirection: 'column', gap: compact ? 3 : 5 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: YELLOW, fontWeight: 700 }}>Partial&lt;User&gt;</div>
          {fields.map((f, i) => <PropRow key={f} name={f} optional delay={i * 0.08 + 0.45} color={MUTED} compact={compact} />)}
        </motion.div>
      </div>
    </div>
  )
}

function Step1({ compact }: { compact: boolean }) {
  const allFields = ['id', 'name', 'email', 'password', 'role', 'createdAt']
  const picked    = ['id', 'name', 'email']
  const omitted   = ['password']

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 8 : 12, alignItems: 'center' }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}
        style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: MUTED, textAlign: 'center' }}>
        <span style={{ color: BLUE, fontWeight: 700 }}>User</span> — 6 properties
      </motion.div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: compact ? 4 : 6, justifyContent: 'center' }}>
        {allFields.map((f, i) => {
          const isPicked  = picked.includes(f)
          const isOmitted = omitted.includes(f)
          return (
            <motion.div key={f} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08, duration: 0.25 }}
              style={{
                fontFamily: 'var(--font-mono)', fontSize: compact ? 10 : 11,
                color: isPicked ? GREEN : isOmitted ? RED : MUTED,
                background: isPicked ? `${GREEN}18` : isOmitted ? `${RED}18` : `${MUTED}10`,
                border: `1px solid ${isPicked ? GREEN : isOmitted ? RED : MUTED}33`,
                borderRadius: 5, padding: compact ? '2px 7px' : '3px 9px',
                fontWeight: isPicked || isOmitted ? 600 : 400,
              }}>
              {isPicked ? '✓ ' : isOmitted ? '✗ ' : ''}{f}
            </motion.div>
          )
        })}
      </div>

      <div style={{ display: 'flex', gap: compact ? 8 : 12, width: '100%' }}>
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.3 }}
          style={{ flex: 1, background: `${GREEN}0d`, border: `1px solid ${GREEN}33`, borderRadius: 8,
            padding: compact ? '6px 10px' : '8px 12px', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: GREEN, fontWeight: 700, marginBottom: 4 }}>
            Pick&lt;User, "id"|"name"|"email"&gt;
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: MUTED }}>3 props selected</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.3 }}
          style={{ flex: 1, background: `${RED}0d`, border: `1px solid ${RED}33`, borderRadius: 8,
            padding: compact ? '6px 10px' : '8px 12px', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: RED, fontWeight: 700, marginBottom: 4 }}>
            Omit&lt;User, "password"&gt;
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: MUTED }}>5 props remain</div>
        </motion.div>
      </div>
    </div>
  )
}

function Step2({ compact }: { compact: boolean }) {
  const recordPairs = [
    { k: '"admin"', v: 'Permission[]', color: PURPLE },
    { k: '"editor"', v: 'Permission[]', color: BLUE },
    { k: '"viewer"', v: 'Permission[]', color: GREEN },
  ]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 8 : 12 }}>
      {/* Record */}
      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
        style={{ display: 'flex', flexDirection: 'column', gap: compact ? 4 : 6 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: YELLOW, fontWeight: 700 }}>
          Record&lt;Role, Permission[]&gt;
        </div>
        {recordPairs.map((p, i) => (
          <motion.div key={p.k} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 + 0.15, duration: 0.28 }}
            style={{ display: 'flex', alignItems: 'center', gap: compact ? 6 : 8,
              fontFamily: 'var(--font-mono)', fontSize: compact ? 10 : 11 }}>
            <TypeBadge label={p.k} color={p.color} compact={compact} />
            <span style={{ color: MUTED }}>→</span>
            <TypeBadge label={p.v} color={MUTED} compact={compact} />
          </motion.div>
        ))}
      </motion.div>

      <div style={{ display: 'flex', gap: compact ? 8 : 12 }}>
        {/* Readonly */}
        <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.55, duration: 0.3 }}
          style={{ flex: 1, background: `${BLUE}0d`, border: `1px solid ${BLUE}33`, borderRadius: 8,
            padding: compact ? '7px 10px' : '10px 14px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: BLUE, fontWeight: 700, marginBottom: compact ? 4 : 6 }}>
            Readonly&lt;T&gt;
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: MUTED }}>
            🔒 All props immutable<br />Assignment → compile error
          </div>
        </motion.div>
        {/* ReturnType */}
        <motion.div initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.65, duration: 0.3 }}
          style={{ flex: 1, background: `${GREEN}0d`, border: `1px solid ${GREEN}33`, borderRadius: 8,
            padding: compact ? '7px 10px' : '10px 14px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: GREEN, fontWeight: 700, marginBottom: compact ? 4 : 6 }}>
            ReturnType&lt;typeof fn&gt;
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: MUTED }}>
            Extracts return type<br />without calling fn
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function Step3({ compact }: { compact: boolean }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 8 : 12 }}>
      {[
        {
          name: 'Exclude<T, U>',
          color: RED,
          input: '"a" | "b" | "c"',
          op: 'Exclude<T, "a">',
          result: '"b" | "c"',
          desc: 'removes matching members',
        },
        {
          name: 'Extract<T, U>',
          color: GREEN,
          input: 'string | number | boolean',
          op: 'Extract<T, string | number>',
          result: 'string | number',
          desc: 'keeps matching members',
        },
        {
          name: 'NonNullable<T>',
          color: BLUE,
          input: 'string | null | undefined',
          op: 'NonNullable<T>',
          result: 'string',
          desc: 'strips null & undefined',
        },
      ].map((item, i) => (
        <motion.div key={item.name} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.15, duration: 0.3 }}
          style={{ background: `${item.color}0d`, border: `1px solid ${item.color}22`, borderRadius: 8,
            padding: compact ? '7px 12px' : '10px 16px', display: 'flex', flexDirection: 'column', gap: compact ? 3 : 5 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: compact ? 6 : 8 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 10 : 11, color: item.color, fontWeight: 700 }}>{item.name}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: MUTED }}>— {item.desc}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: compact ? 5 : 8,
            fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10 }}>
            <TypeBadge label={item.input} color={MUTED} compact={compact} />
            <span style={{ color: MUTED }}>→</span>
            <TypeBadge label={item.result} color={item.color} compact={compact} />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default function UtilityTypesViz({ step, compact = false }: Props) {
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
