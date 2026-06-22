'use client'

import { useRef, useCallback, useEffect, useState } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'
import { useReducedMotion } from '@/lib/use-reduced-motion'
import { cn } from '@/lib/utils'

interface GlyphProps {
  char: string
  wrapperRef: React.RefObject<HTMLSpanElement | null>
  index: number
  interactive: boolean
}

function Glyph({ char, wrapperRef, index, interactive }: GlyphProps) {
  const glyphRef = useRef<HTMLSpanElement>(null)

  const rawY = useSpring(0, { stiffness: 120, damping: 22, mass: 0.4 })
  const rawW = useSpring(0, { stiffness: 80, damping: 20, mass: 0.5 })

  const translateY = useTransform(rawY, (v) => `${v}px`)
  const fontVariation = useTransform(rawW, (v) => `'wght' ${Math.round(600 + v * 200)}`)

  const updateFromPointer = useCallback(
    (px: number, py: number) => {
      if (!glyphRef.current) return
      const rect = glyphRef.current.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = px - cx
      const dy = py - cy
      const dist = Math.sqrt(dx * dx + dy * dy)
      const radius = 90
      const proximity = Math.max(0, 1 - dist / radius)
      const influence = proximity * proximity

      rawY.set(-influence * 6)
      rawW.set(influence)
    },
    [rawY, rawW]
  )

  const reset = useCallback(() => {
    rawY.set(0)
    rawW.set(0)
  }, [rawY, rawW])

  // One-time entrance: a subtle weight breathe sweeps across the glyphs once the
  // hero has settled, hinting that the name responds to the pointer.
  useEffect(() => {
    if (!interactive) return
    const start = 1100 + index * 55
    const up = window.setTimeout(() => rawW.set(0.55), start)
    const down = window.setTimeout(() => rawW.set(0), start + 220)
    return () => {
      window.clearTimeout(up)
      window.clearTimeout(down)
    }
  }, [interactive, index, rawW])

  useEffect(() => {
    if (!interactive) return
    const wrapper = wrapperRef.current
    if (!wrapper) return

    let isFinePointer = false
    if (typeof window !== 'undefined') {
      isFinePointer = window.matchMedia('(pointer: fine)').matches
    }
    if (!isFinePointer) return

    function onMove(e: PointerEvent) {
      updateFromPointer(e.clientX, e.clientY)
    }
    function onLeave() {
      reset()
    }

    wrapper.addEventListener('pointermove', onMove)
    wrapper.addEventListener('pointerleave', onLeave)
    return () => {
      wrapper.removeEventListener('pointermove', onMove)
      wrapper.removeEventListener('pointerleave', onLeave)
    }
  }, [interactive, updateFromPointer, reset, wrapperRef, index])

  if (!interactive) {
    return (
      <span aria-hidden className="inline-block">
        {char}
      </span>
    )
  }

  return (
    <motion.span
      ref={glyphRef}
      aria-hidden
      className="inline-block"
      style={{
        translateY,
        fontVariationSettings: fontVariation,
      }}
    >
      {char}
    </motion.span>
  )
}

interface InteractiveNameProps {
  text: string
  className?: string
  'aria-hidden'?: boolean | 'true' | 'false'
}

export function InteractiveName({
  text,
  className,
  'aria-hidden': ariaHidden,
}: InteractiveNameProps) {
  const reduced = useReducedMotion()
  const wrapperRef = useRef<HTMLSpanElement>(null)
  const [isFinePointer, setIsFinePointer] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsFinePointer(window.matchMedia('(pointer: fine)').matches)
    }
  }, [])

  const interactive = !reduced && isFinePointer

  const ariaProps =
    ariaHidden != null ? { 'aria-hidden': ariaHidden as boolean } : { 'aria-label': text }

  return (
    <span ref={wrapperRef} className={cn('inline', className)} {...ariaProps}>
      {text.split('').map((char, i) =>
        char === ' ' ? (
          <span key={i} aria-hidden className="inline">
            {' '}
          </span>
        ) : (
          <Glyph key={i} char={char} wrapperRef={wrapperRef} index={i} interactive={interactive} />
        )
      )}
    </span>
  )
}
