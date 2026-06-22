'use client'

import { cn } from '@/lib/utils'

interface CodePanelProps {
  filename: string
  children: React.ReactNode
  className?: string
}

/**
 * Shared editor-chrome shell for the code-view presentations: a surface panel
 * with a minimal title bar (three dots + a mono filename) and a scrollable body.
 */
export function CodePanel({ filename, children, className }: CodePanelProps) {
  return (
    <div className={cn('border-border bg-surface overflow-hidden rounded-xl border', className)}>
      <div className="border-border flex items-center gap-3 border-b px-4 py-3">
        <span aria-hidden="true" className="flex items-center gap-1.5">
          <span className="bg-border h-2.5 w-2.5 rounded-full" />
          <span className="bg-border h-2.5 w-2.5 rounded-full" />
          <span className="bg-border h-2.5 w-2.5 rounded-full" />
        </span>
        <span className="text-muted font-mono text-xs tracking-[0.04em] select-none">
          {filename}
        </span>
      </div>
      <div className="overflow-x-auto px-5 py-5 sm:px-6 sm:py-6">{children}</div>
    </div>
  )
}

/** A single mono code line. `indent` adds left padding in 1ch units. */
export function CodeLine({
  indent = 0,
  className,
  children,
}: {
  indent?: number
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        'font-mono text-[0.8125rem] leading-[1.7] whitespace-pre sm:text-sm',
        className
      )}
      style={indent > 0 ? { paddingLeft: `${indent}ch` } : undefined}
    >
      {children}
    </div>
  )
}

/** Punctuation / keyword token — lime. */
export function Punc({ children }: { children: React.ReactNode }) {
  return <span className="text-accent-ink">{children}</span>
}

/** Key / comment token — muted. */
export function Key({ children }: { children: React.ReactNode }) {
  return <span className="text-muted">{children}</span>
}

/** String / value token — foreground. */
export function Str({ children }: { children: React.ReactNode }) {
  return <span className="text-foreground">{children}</span>
}
