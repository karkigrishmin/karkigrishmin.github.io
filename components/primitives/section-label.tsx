import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        'text-muted flex items-center gap-3 font-mono text-xs tracking-[0.2em] uppercase',
        className
      )}
    >
      <span aria-hidden="true" className="bg-accent h-1.5 w-1.5 rounded-full" />
      <span aria-hidden="true" className="bg-border h-px w-8" />
      <span>{children}</span>
    </div>
  )
}
