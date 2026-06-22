import { render, screen } from '@testing-library/react'
import { GrainOverlay } from '../grain-overlay'

describe('GrainOverlay', () => {
  it('renders a decorative, non-interactive overlay hidden from a11y tree', () => {
    render(<GrainOverlay />)
    const overlay = screen.getByTestId('grain-overlay')
    expect(overlay).toHaveAttribute('aria-hidden', 'true')
    expect(overlay.className).toContain('pointer-events-none')
  })
})
