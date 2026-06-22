import { render, screen } from '@testing-library/react'
import { Testimonials } from '../testimonials'

vi.mock('@/lib/use-reduced-motion', () => ({ useReducedMotion: () => true }))

describe('Testimonials', () => {
  it('renders the section heading and the first author', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { name: /testimonials|recommendations/i })
    ).toBeInTheDocument()
    expect(screen.getByText('Sep Dehpour')).toBeInTheDocument()
  })
})
