import { cn } from '@/lib/utils'

interface SectionLabelProps {
  index: number
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ index, children, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        'text-muted flex items-center gap-3 font-mono text-xs tracking-[0.2em] uppercase',
        className
      )}
    >
      <span className="text-accent-ink">{String(index).padStart(2, '0')}</span>
      <span className="bg-border h-px w-8" aria-hidden="true" />
      <span>{children}</span>
    </div>
  )
}
