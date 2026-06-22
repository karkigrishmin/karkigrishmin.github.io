'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/lib/use-reduced-motion'
import { CodeLine, CodePanel, Key, Punc, Str } from './code-panel'

interface CodeRow {
  indent: number
  node: React.ReactNode
}

const ROWS: CodeRow[] = [
  { indent: 0, node: <Key>{'// grishmin.ts'}</Key> },
  {
    indent: 0,
    node: (
      <>
        <span className="text-accent-ink">const grishmin</span> <Punc>=</Punc> {'{'}
      </>
    ),
  },
  {
    indent: 2,
    node: (
      <>
        role<Punc>:</Punc> <Str>{"'Senior Frontend Engineer'"}</Str>
        <Punc>,</Punc>
      </>
    ),
  },
  {
    indent: 2,
    node: (
      <>
        location<Punc>:</Punc> <Str>{"'Kathmandu, Nepal'"}</Str>
        <Punc>,</Punc>
      </>
    ),
  },
  {
    indent: 2,
    node: (
      <>
        experience<Punc>:</Punc> <Str>{"'4+ years'"}</Str>
        <Punc>,</Punc>
      </>
    ),
  },
  {
    indent: 2,
    node: (
      <>
        focus<Punc>:</Punc> <Punc>[</Punc>
        <Str>{"'design systems'"}</Str>
        <Punc>,</Punc> <Str>{"'performance'"}</Str>
        <Punc>,</Punc> <Str>{"'testing'"}</Str>
        <Punc>]</Punc>
        <Punc>,</Punc>
      </>
    ),
  },
  {
    indent: 2,
    node: (
      <>
        stack<Punc>:</Punc> <Punc>[</Punc>
        <Str>{"'React'"}</Str>
        <Punc>,</Punc> <Str>{"'Next.js'"}</Str>
        <Punc>,</Punc> <Str>{"'TypeScript'"}</Str>
        <Punc>,</Punc> <Str>{"'Svelte'"}</Str>
        <Punc>]</Punc>
        <Punc>,</Punc>
      </>
    ),
  },
  {
    indent: 2,
    node: (
      <>
        available<Punc>:</Punc> <Punc>true</Punc>
        <Punc>,</Punc>
      </>
    ),
  },
  {
    indent: 0,
    node: (
      <>
        {'}'} <Punc>satisfies</Punc> Engineer
      </>
    ),
  },
]

export function HeroCode() {
  const reduced = useReducedMotion()
  // Number of rows currently revealed. Starts fully revealed under reduced motion.
  const [revealed, setRevealed] = useState(() => (reduced ? ROWS.length : 0))

  useEffect(() => {
    if (reduced) {
      setRevealed(ROWS.length)
      return
    }
    setRevealed(0)
    let current = 0
    const interval = window.setInterval(() => {
      current += 1
      setRevealed(current)
      if (current >= ROWS.length) window.clearInterval(interval)
    }, 90)
    return () => window.clearInterval(interval)
  }, [reduced])

  return (
    <CodePanel filename="grishmin.ts" className="max-w-2xl">
      <pre className="m-0">
        <code>
          {ROWS.map((row, i) => {
            const isVisible = i < revealed
            const line = (
              <CodeLine indent={row.indent}>
                {row.node}
                {!reduced && i === revealed - 1 && (
                  <span
                    aria-hidden="true"
                    className="bg-accent ml-0.5 inline-block h-[1em] w-[0.5ch] translate-y-[0.12em] animate-pulse"
                  />
                )}
              </CodeLine>
            )
            if (reduced) return <div key={i}>{line}</div>
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden={!isVisible}
              >
                {line}
              </motion.div>
            )
          })}
        </code>
      </pre>
    </CodePanel>
  )
}
