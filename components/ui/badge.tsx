import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-all duration-200',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary-hover hover:scale-105',
        secondary:
          'border-transparent bg-secondary text-foreground hover:bg-secondary/70 hover:shadow-sm',
        outline:
          'border-primary bg-background text-foreground hover:bg-secondary',
        accent:
          'border-transparent bg-accent text-accent-foreground shadow hover:bg-accent-hover hover:scale-105',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
