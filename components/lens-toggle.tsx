'use client'

import { useLens } from '@/lib/lens-context'
import { cn } from '@/lib/utils'

export function LensToggle({ className }: { className?: string }) {
  const { lens, toggleLens } = useLens()
  const isCode = lens === 'code'

  return (
    <button
      type="button"
      onClick={toggleLens}
      aria-pressed={isCode}
      aria-label={isCode ? 'Switch to design view' : 'Switch to code view'}
      className={cn(
        'group border-border relative flex items-center gap-0 overflow-hidden rounded-full border transition-all duration-300',
        'font-mono text-xs tracking-[0.18em] uppercase',
        'hover:border-accent/50',
        className
      )}
    >
      <span
        className={cn(
          'relative z-10 px-3 py-1.5 transition-colors duration-300',
          !isCode ? 'text-foreground' : 'text-muted'
        )}
      >
        Design
      </span>
      <span className="text-border relative z-10">|</span>
      <span
        className={cn(
          'relative z-10 px-3 py-1.5 transition-colors duration-300',
          isCode ? 'text-foreground' : 'text-muted'
        )}
      >
        {'</>'}
      </span>
      <span
        className={cn(
          'bg-foreground/[0.06] ring-border/70 pointer-events-none absolute inset-y-0 w-1/2 rounded-full ring-1 transition-all duration-300 ease-out ring-inset',
          isCode ? 'left-1/2' : 'left-0'
        )}
      />
    </button>
  )
}
