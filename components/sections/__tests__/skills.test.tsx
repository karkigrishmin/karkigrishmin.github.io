import { render, screen } from '@testing-library/react'
import { Skills } from '../skills'

vi.mock('@/lib/use-reduced-motion', () => ({ useReducedMotion: () => true }))

describe('Skills', () => {
  it('renders the section heading, a category and a skill', () => {
    render(<Skills />)
    expect(screen.getByRole('heading', { name: /skills/i })).toBeInTheDocument()
    expect(screen.getByText('Core Frontend')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })
})
