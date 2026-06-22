'use client'

import { createContext, useCallback, useContext, useMemo, useState } from 'react'

export type Lens = 'design' | 'code'

interface LensContextValue {
  lens: Lens
  setLens: (lens: Lens) => void
  toggleLens: () => void
}

const LensContext = createContext<LensContextValue | null>(null)

export function LensProvider({ children }: { children: React.ReactNode }) {
  const [lens, setLens] = useState<Lens>('design')
  const toggleLens = useCallback(
    () => setLens((prev) => (prev === 'design' ? 'code' : 'design')),
    []
  )
  const value = useMemo(() => ({ lens, setLens, toggleLens }), [lens, toggleLens])
  return <LensContext.Provider value={value}>{children}</LensContext.Provider>
}

export function useLens(): LensContextValue {
  const ctx = useContext(LensContext)
  if (!ctx) throw new Error('useLens must be used within a LensProvider')
  return ctx
}
