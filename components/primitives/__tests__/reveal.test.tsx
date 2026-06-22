import { render, screen } from '@testing-library/react'
import { Reveal } from '../reveal'

vi.mock('@/lib/use-reduced-motion', () => ({ useReducedMotion: () => true }))

describe('Reveal', () => {
  it('renders children', () => {
    render(
      <Reveal>
        <p>hello</p>
      </Reveal>
    )
    expect(screen.getByText('hello')).toBeInTheDocument()
  })
})
