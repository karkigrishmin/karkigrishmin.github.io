import { render, screen } from '@testing-library/react'
import { LensProvider } from '@/lib/lens-context'
import { Experience } from '../experience'

vi.mock('@/lib/use-reduced-motion', () => ({ useReducedMotion: () => true }))

const renderWithLens = (ui: React.ReactElement) => render(<LensProvider>{ui}</LensProvider>)

describe('Experience', () => {
  it('renders the section heading and the most recent role', () => {
    renderWithLens(<Experience />)
    expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument()
    expect(screen.getByText('Qluster AI')).toBeInTheDocument()
  })
})
