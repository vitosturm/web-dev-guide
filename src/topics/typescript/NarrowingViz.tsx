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
  'typeof & instanceof',
  'Discriminated unions',
  'Custom type guards',
  'Equality narrowing',
  'The "in" operator',
  'Type predicates',
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

function Branch({ label, type, color, delay, compact }: { label: string; type: string; color: string; delay: number; compact: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: label.includes('true') ? -10 : 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3 }}
      style={{
        flex: 1,
        background: `${color}0d`,
        border: `1px solid ${color}33`,
        borderRadius: 8,
        padding: compact ? '6px 10px' : '10px 14px',
        display: 'flex',
        flexDirection: 'column',
        gap: compact ? 3 : 5,
        alignItems: 'center',
      }}
    >
      <div style={{ fontSize: compact ? 9 : 10, color, fontWeight: 700, textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>{label}</div>
      <TypeBadge label={type} color={color} compact={compact} />
    </motion.div>
  )
}

function Step0({ compact }: { compact: boolean }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 8 : 12, alignItems: 'center' }}>
      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
        style={{ display: 'flex', alignItems: 'center', gap: compact ? 6 : 8 }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 11 : 13, color: MUTED }}>val:</span>
        <TypeBadge label="string | number" color={YELLOW} compact={compact} />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.3 }}
        style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 10 : 12, color: BLUE,
          background: `${BLUE}18`, border: `1px solid ${BLUE}44`, borderRadius: 5,
          padding: compact ? '2px 8px' : '3px 12px' }}>
        typeof val === "string"
      </motion.div>

      <div style={{ display: 'flex', gap: compact ? 6 : 10, width: '100%' }}>
        <Branch label="true branch" type="string" color={GREEN} delay={0.35} compact={compact} />
        <Branch label="false branch" type="number" color={BLUE} delay={0.45} compact={compact} />
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.3 }}
        style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: MUTED,
          background: `${MUTED}12`, borderRadius: 5, padding: compact ? '3px 8px' : '4px 10px' }}>
        instanceof narrows class instances: err instanceof Error
      </motion.div>
    </div>
  )
}

function Step1({ compact }: { compact: boolean }) {
  const shapes = [
    { kind: '"circle"', extra: 'radius: number', color: GREEN },
    { kind: '"rect"', extra: 'width, height: number', color: BLUE },
  ]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 8 : 12 }}>
      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
        style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 10 : 11, color: MUTED, textAlign: 'center' }}>
        <span style={{ color: PURPLE }}>type </span>
        <span style={{ color: TEXT, fontWeight: 700 }}>Shape</span>
        <span style={{ color: MUTED }}> = circle | rect</span>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 5 : 8 }}>
        {shapes.map((s, i) => (
          <motion.div key={s.kind} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 + 0.2, duration: 0.3 }}
            style={{ background: `${s.color}0d`, border: `1px solid ${s.color}33`, borderRadius: 8,
              padding: compact ? '7px 10px' : '10px 14px', display: 'flex', alignItems: 'center', gap: compact ? 6 : 10 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: MUTED }}>kind:</span>
            <TypeBadge label={s.kind} color={s.color} compact={compact} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: MUTED }}>{s.extra}</span>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55, duration: 0.3 }}
        style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: YELLOW,
          background: `${YELLOW}12`, borderRadius: 5, padding: compact ? '3px 8px' : '4px 10px', textAlign: 'center' }}>
        switch (s.kind) exhaustively handles all variants ✓
      </motion.div>
    </div>
  )
}

function Step2({ compact }: { compact: boolean }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 8 : 12, alignItems: 'center' }}>
      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
        style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 10 : 11,
          background: 'var(--surface-bright)', borderRadius: 8, padding: compact ? '8px 12px' : '12px 18px',
          lineHeight: 1.8, textAlign: 'left' }}>
        <div><span style={{ color: PURPLE }}>function </span><span style={{ color: BLUE }}>isString</span><span style={{ color: MUTED }}>(val: </span><TypeBadge label="unknown" color={YELLOW} compact={compact} /><span style={{ color: MUTED }}>)</span></div>
        <div style={{ paddingLeft: compact ? 12 : 16 }}>
          <span style={{ color: MUTED }}>: val </span>
          <span style={{ color: GREEN, fontWeight: 700 }}>is string</span>
        </div>
      </motion.div>

      <div style={{ display: 'flex', gap: compact ? 6 : 10, width: '100%' }}>
        <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.3 }}
          style={{ flex: 1, background: `${RED}0d`, border: `1px solid ${RED}33`, borderRadius: 8,
            padding: compact ? '6px 8px' : '8px 12px', textAlign: 'center' }}>
          <div style={{ fontSize: compact ? 9 : 10, color: RED, fontWeight: 700, marginBottom: 3, textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>before</div>
          <TypeBadge label="unknown" color={YELLOW} compact={compact} />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.3 }}
          style={{ display: 'flex', alignItems: 'center', color: GREEN, fontWeight: 700 }}>→</motion.div>
        <motion.div initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.3 }}
          style={{ flex: 1, background: `${GREEN}0d`, border: `1px solid ${GREEN}33`, borderRadius: 8,
            padding: compact ? '6px 8px' : '8px 12px', textAlign: 'center' }}>
          <div style={{ fontSize: compact ? 9 : 10, color: GREEN, fontWeight: 700, marginBottom: 3, textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>after</div>
          <TypeBadge label="string" color={GREEN} compact={compact} />
        </motion.div>
      </div>
    </div>
  )
}

function Step3({ compact }: { compact: boolean }) {
  const checks = [
    { code: 'x === null', narrows: 'null', branch: 'true', color: RED },
    { code: 'x !== null', narrows: 'T (not null)', branch: 'true', color: GREEN },
    { code: 'x === "admin"', narrows: '"admin"', branch: 'true', color: BLUE },
  ]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 6 : 10 }}>
      {checks.map((c, i) => (
        <motion.div key={c.code} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.12, duration: 0.3 }}
          style={{ display: 'flex', alignItems: 'center', gap: compact ? 6 : 10,
            background: `${c.color}0d`, border: `1px solid ${c.color}22`, borderRadius: 8,
            padding: compact ? '6px 10px' : '8px 14px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 10 : 11, color: BLUE,
            background: `${BLUE}18`, border: `1px solid ${BLUE}33`, borderRadius: 5,
            padding: compact ? '1px 6px' : '2px 8px', whiteSpace: 'nowrap' }}>
            {c.code}
          </div>
          <div style={{ color: MUTED, fontSize: compact ? 10 : 12 }}>→</div>
          <TypeBadge label={c.narrows} color={c.color} compact={compact} />
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 8 : 9, color: MUTED }}>in {c.branch} branch</div>
        </motion.div>
      ))}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.3 }}
        style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: PURPLE,
          background: `${PURPLE}12`, borderRadius: 5, padding: compact ? '3px 8px' : '4px 10px', textAlign: 'center' }}>
        Strict === eliminates impossible union members
      </motion.div>
    </div>
  )
}

function Step4({ compact }: { compact: boolean }) {
  const props = [
    { name: 'drive()', present: true, type: 'Car' },
    { name: 'sail()', present: false, type: 'Boat' },
    { name: 'fuel', present: true, type: 'both' },
  ]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 8 : 12, alignItems: 'center' }}>
      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
        style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 10 : 12, color: BLUE,
          background: `${BLUE}18`, border: `1px solid ${BLUE}44`, borderRadius: 5,
          padding: compact ? '2px 10px' : '3px 14px' }}>
        "drive" in vehicle
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 4 : 6, width: '100%' }}>
        {props.map((p, i) => (
          <motion.div key={p.name} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.12 + 0.2, duration: 0.3 }}
            style={{ display: 'flex', alignItems: 'center', gap: compact ? 6 : 10,
              padding: compact ? '4px 8px' : '5px 12px', borderRadius: 6,
              background: p.name === 'drive()' ? `${GREEN}0d` : `${MUTED}0a`,
              border: `1px solid ${p.name === 'drive()' ? GREEN : MUTED}22` }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 10 : 11,
              color: p.name === 'drive()' ? GREEN : MUTED }}>
              {p.name === 'drive()' ? '✓ ' : '  '}{p.name}
            </span>
            <div style={{ flex: 1 }} />
            <TypeBadge label={p.type} color={p.name === 'drive()' ? GREEN : MUTED} compact={compact} />
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.3 }}
        style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: GREEN,
          background: `${GREEN}12`, borderRadius: 5, padding: compact ? '3px 8px' : '4px 10px' }}>
        "drive" in vehicle → narrows to Car ✓
      </motion.div>
    </div>
  )
}

function Step5({ compact }: { compact: boolean }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 8 : 12, alignItems: 'center' }}>
      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
        style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10,
          background: 'var(--surface-bright)', borderRadius: 8, padding: compact ? '8px 12px' : '12px 18px',
          lineHeight: 1.9, textAlign: 'left' }}>
        <div><span style={{ color: PURPLE }}>function </span><span style={{ color: BLUE }}>isFish</span><span style={{ color: MUTED }}>(pet: Fish | Bird)</span></div>
        <div style={{ paddingLeft: compact ? 12 : 16 }}>
          <span style={{ color: MUTED }}>: pet </span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.4 }}
            style={{ color: GREEN, fontWeight: 700 }}>is Fish</motion.span>
        </div>
      </motion.div>

      <div style={{ display: 'flex', gap: compact ? 6 : 10, width: '100%' }}>
        <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.3 }}
          style={{ flex: 1, background: `${GREEN}0d`, border: `1px solid ${GREEN}33`, borderRadius: 8,
            padding: compact ? '7px 10px' : '10px 14px', display: 'flex', flexDirection: 'column',
            gap: compact ? 3 : 5, alignItems: 'center' }}>
          <div style={{ fontSize: compact ? 9 : 10, color: GREEN, fontWeight: 700, textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>if (isFish(pet))</div>
          <TypeBadge label="Fish" color={GREEN} compact={compact} />
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: GREEN }}>pet.swim() ✓</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.3 }}
          style={{ flex: 1, background: `${BLUE}0d`, border: `1px solid ${BLUE}33`, borderRadius: 8,
            padding: compact ? '7px 10px' : '10px 14px', display: 'flex', flexDirection: 'column',
            gap: compact ? 3 : 5, alignItems: 'center' }}>
          <div style={{ fontSize: compact ? 9 : 10, color: BLUE, fontWeight: 700, textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>else</div>
          <TypeBadge label="Bird" color={BLUE} compact={compact} />
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: BLUE }}>pet.fly() ✓</div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65, duration: 0.3 }}
        style={{ fontFamily: 'var(--font-mono)', fontSize: compact ? 9 : 10, color: YELLOW,
          background: `${YELLOW}12`, borderRadius: 5, padding: compact ? '3px 8px' : '4px 10px' }}>
        TypeScript trusts the predicate body — write it correctly!
      </motion.div>
    </div>
  )
}

export default function NarrowingViz({ step, compact = false }: Props) {
  const clampedStep = Math.min(step, stepLabels.length - 1)

  const stepContent: Record<number, React.ReactNode> = {
    0: <Step0 compact={compact} />,
    1: <Step1 compact={compact} />,
    2: <Step2 compact={compact} />,
    3: <Step3 compact={compact} />,
    4: <Step4 compact={compact} />,
    5: <Step5 compact={compact} />,
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
