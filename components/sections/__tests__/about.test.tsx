import { render, screen } from '@testing-library/react'
import { LensProvider } from '@/lib/lens-context'
import { About } from '../about'

vi.mock('@/lib/use-reduced-motion', () => ({ useReducedMotion: () => true }))

const renderWithLens = (ui: React.ReactElement) => render(<LensProvider>{ui}</LensProvider>)

describe('About', () => {
  it('renders the section heading and the headline stat', () => {
    renderWithLens(<About />)
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByText('39.5%')).toBeInTheDocument()
  })
})
