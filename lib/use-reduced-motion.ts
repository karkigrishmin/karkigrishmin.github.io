'use client'

import { useEffect, useState } from 'react'

/**
 * Custom hook to detect user's motion preferences
 * Returns true if user prefers reduced motion (for accessibility)
 *
 * Usage:
 * const prefersReducedMotion = useReducedMotion()
 * if (!prefersReducedMotion) {
 *   // Apply animations
 * }
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check media query on mount
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    // Listen for changes to user preferences
    const listener = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', listener)
    return () => mediaQuery.removeEventListener('change', listener)
  }, [])

  return prefersReducedMotion
}
