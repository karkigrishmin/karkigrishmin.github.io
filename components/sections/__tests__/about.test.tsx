import { render, screen } from '@testing-library/react'
import { About } from '../about'

vi.mock('@/lib/use-reduced-motion', () => ({ useReducedMotion: () => true }))

describe('About', () => {
  it('renders the section heading and the headline stat', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByText('39.5%')).toBeInTheDocument()
  })
})
