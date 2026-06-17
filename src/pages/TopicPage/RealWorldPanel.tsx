import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { RealWorldExample } from '@/types'
import CodeBlock from '@/components/ui/CodeBlock'

interface Props {
  examples: RealWorldExample[]
  color: string
}

export default function RealWorldPanel({ examples, color }: Props) {
  const { t } = useTranslation('topic')
  const [openIdx, setOpenIdx] = useState<number>(0)

  return (
    <div style={{ marginTop: 48 }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 24, color: 'var(--text)' }}>
        {t('realWorldExamples')}
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {examples.map((ex, i) => {
          const isOpen = openIdx === i
          return (
            <div
              key={i}
              style={{
                background: 'var(--surface)',
                border: `1px solid ${isOpen ? `${color}55` : 'var(--border)'}`,
                borderRadius: 10,
                overflow: 'hidden',
                transition: 'border-color 0.2s',
              }}
            >
              {/* Header — always visible, click to toggle */}
              <button
                onClick={() => setOpenIdx(isOpen ? -1 : i)}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', gap: 10,
                  padding: '13px 16px', cursor: 'pointer',
                  background: 'none', border: 'none', textAlign: 'left',
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 9, fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color, flexShrink: 0,
                  background: `${color}18`, padding: '3px 8px', borderRadius: 4,
                }}>
                  {ex.context}
                </span>
                <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', flex: 1 }}>
                  {ex.heading}
                </span>
                <span style={{
                  fontSize: 10, color: 'var(--text-faint)',
                  transform: isOpen ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.2s',
                  flexShrink: 0,
                }}>
                  ▼
                </span>
              </button>

              {/* Body — description left, code right */}
              {isOpen && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '260px 1fr',
                  borderTop: `1px solid ${color}22`,
                }}>
                  <div style={{
                    padding: '18px 20px',
                    borderRight: '1px solid var(--border)',
                  }}>
                    <p style={{
                      fontSize: 13, color: 'var(--text-muted)',
                      lineHeight: 1.7, margin: 0,
                    }}>
                      {ex.description}
                    </p>
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <CodeBlock code={ex.code} language="javascript" />
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
