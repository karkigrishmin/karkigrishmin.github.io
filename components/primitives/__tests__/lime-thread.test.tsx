import { render, screen } from '@testing-library/react'
import { LimeThread } from '../lime-thread'

vi.mock('@/lib/use-reduced-motion', () => ({ useReducedMotion: () => true }))

describe('LimeThread', () => {
  it('renders a decorative svg', () => {
    render(<LimeThread />)
    const svg = screen.getByTestId('lime-thread')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })
})
