import { render, screen } from '@testing-library/react'
import { LensProvider } from '@/lib/lens-context'
import { Hero } from '../hero'
import { personalInfo } from '@/lib/constants'

vi.mock('@/lib/use-reduced-motion', () => ({ useReducedMotion: () => true }))

const renderWithLens = (ui: React.ReactElement) => render(<LensProvider>{ui}</LensProvider>)

describe('Hero', () => {
  it('renders the name, role and CTAs', () => {
    renderWithLens(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(personalInfo.name)
    expect(screen.getByText(personalInfo.role)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /view work/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /get in touch/i })).toBeInTheDocument()
  })
})
