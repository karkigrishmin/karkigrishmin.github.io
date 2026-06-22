import { render, screen } from '@testing-library/react'
import { Experience } from '../experience'

vi.mock('@/lib/use-reduced-motion', () => ({ useReducedMotion: () => true }))

describe('Experience', () => {
  it('renders the section heading and the most recent role', () => {
    render(<Experience />)
    expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument()
    expect(screen.getByText('Qluster AI')).toBeInTheDocument()
  })
})
