import { render, screen } from '@testing-library/react'
import { InteractiveName } from '../interactive-name'

vi.mock('@/lib/use-reduced-motion', () => ({ useReducedMotion: () => true }))

describe('InteractiveName', () => {
  it('exposes the full text as a single accessible label', () => {
    render(<InteractiveName text="Grishmin Karki" />)
    expect(screen.getByLabelText('Grishmin Karki')).toBeInTheDocument()
  })
})
