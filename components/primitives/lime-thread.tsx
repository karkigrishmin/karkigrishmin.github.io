'use client'

import { useScroll } from 'framer-motion'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/lib/use-reduced-motion'
import { cn } from '@/lib/utils'

interface LimeThreadProps {
  className?: string
}

export function LimeThread({ className }: LimeThreadProps) {
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll()

  const pathD =
    'M 50 0 C 80 60, 20 130, 55 200 C 90 270, 15 340, 50 420 C 85 500, 25 570, 60 650 C 95 730, 10 800, 45 900 C 70 960, 40 990, 50 1000'

  if (reduced) {
    return (
      <svg
        data-testid="lime-thread"
        aria-hidden="true"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        className={cn('h-full w-full', className)}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="lime-thread-glow" x="-20%" y="-5%" width="140%" height="110%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
            <feColorMatrix in="blur" type="saturate" values="2" result="saturated" />
            <feMerge>
              <feMergeNode in="saturated" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d={pathD}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeOpacity="0.18"
          strokeLinecap="round"
          filter="url(#lime-thread-glow)"
        />
        <path
          d={pathD}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeOpacity="0.38"
          strokeLinecap="round"
        />
      </svg>
    )
  }

  return (
    <svg
      data-testid="lime-thread"
      aria-hidden="true"
      viewBox="0 0 100 1000"
      preserveAspectRatio="none"
      className={cn('h-full w-full', className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="lime-thread-glow" x="-20%" y="-5%" width="140%" height="110%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
          <feColorMatrix in="blur" type="saturate" values="2" result="saturated" />
          <feMerge>
            <feMergeNode in="saturated" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d={pathD}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2.5"
        strokeOpacity="0.16"
        strokeLinecap="round"
        filter="url(#lime-thread-glow)"
      />
      <motion.path
        d={pathD}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeOpacity="0.52"
        style={{ pathLength: scrollYProgress }}
      />
    </svg>
  )
}
