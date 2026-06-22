import { render, screen } from '@testing-library/react'
import { StatNumber } from '../stat-number'

vi.mock('@/lib/use-reduced-motion', () => ({ useReducedMotion: () => true }))

describe('StatNumber', () => {
  it('renders the final value with prefix and suffix when reduced motion', () => {
    render(<StatNumber value={39.5} suffix="%" decimals={1} />)
    expect(screen.getByText('39.5%')).toBeInTheDocument()
  })
})
