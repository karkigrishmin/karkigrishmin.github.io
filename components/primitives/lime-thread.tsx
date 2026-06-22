'use client'

import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '@/lib/use-reduced-motion'
import { cn } from '@/lib/utils'

interface LimeThreadProps {
  className?: string
}

const PATH_D =
  'M 50 0 C 80 60, 20 130, 55 200 C 90 270, 15 340, 50 420 C 85 500, 25 570, 60 650 C 95 730, 10 800, 45 900 C 70 960, 40 990, 50 1000'

function ThreadGlow() {
  return (
    <filter id="lime-thread-glow" x="-25%" y="-5%" width="150%" height="110%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
      <feColorMatrix in="blur" type="saturate" values="1.3" result="saturated" />
      <feMerge>
        <feMergeNode in="saturated" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  )
}

export function LimeThread({ className }: LimeThreadProps) {
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll()
  // A short bright segment whose leading edge sits at the drawn tip and descends on scroll.
  const headLength = useMotionValue(0.05)
  const headOffset = useTransform(scrollYProgress, (p) => Math.max(0, p - 0.05))

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
          <ThreadGlow />
        </defs>
        <path
          d={PATH_D}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeOpacity="0.32"
          strokeLinecap="round"
          filter="url(#lime-thread-glow)"
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
        <ThreadGlow />
      </defs>

      {/* Faint crisp ghost — shows the whole route, no bloom */}
      <path
        d={PATH_D}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.25"
        strokeOpacity="0.12"
        strokeLinecap="round"
      />

      {/* The drawn trail — fills from the top as the page is scrolled (the visible reaction) */}
      <motion.path
        d={PATH_D}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeOpacity="0.55"
        strokeLinecap="round"
        filter="url(#lime-thread-glow)"
        style={{ pathLength: scrollYProgress }}
      />

      {/* Comet tip — a small bright segment riding the leading edge of the trail */}
      <motion.path
        d={PATH_D}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="3"
        strokeOpacity="0.95"
        strokeLinecap="round"
        filter="url(#lime-thread-glow)"
        style={{ pathLength: headLength, pathOffset: headOffset, pathSpacing: 1 }}
      />
    </svg>
  )
}
