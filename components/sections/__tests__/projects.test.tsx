import { render, screen } from '@testing-library/react'
import { Projects } from '../projects'

vi.mock('@/lib/use-reduced-motion', () => ({ useReducedMotion: () => true }))

describe('Projects', () => {
  it('renders heading, first project title, and external links open safely', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument()
    expect(screen.getByText('Qluster AI - Data Workflow Platform')).toBeInTheDocument()
    const links = screen.getAllByRole('link')
    const external = links.filter((a) => a.getAttribute('target') === '_blank')
    expect(external.length).toBeGreaterThan(0)
    external.forEach((a) => expect(a.getAttribute('rel') || '').toContain('noopener'))
  })
})
