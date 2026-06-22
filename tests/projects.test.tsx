import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from '@/components/sections/projects'

vi.mock('@/lib/use-reduced-motion', () => ({ useReducedMotion: () => true }))

describe('Projects Section', () => {
  it('renders an accessible section heading', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument()
  })

  it('renders all six project titles as headings', () => {
    render(<Projects />)
    expect(
      screen.getByRole('heading', { name: 'Qluster AI - Data Workflow Platform' })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Enthu\.AI/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /AgileData/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Heliski/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Iagon/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Tigg/i })).toBeInTheDocument()
  })

  it('renders project technologies as chips', () => {
    render(<Projects />)
    expect(screen.getAllByText('React').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Next.js').length).toBeGreaterThan(0)
    expect(screen.getAllByText('TypeScript').length).toBeGreaterThan(0)
  })

  it('renders all external links with target="_blank"', () => {
    const { container } = render(<Projects />)
    const links = container.querySelectorAll('a[target="_blank"]')
    expect(links.length).toBeGreaterThan(0)
  })

  it('all external links have rel containing noopener', () => {
    const { container } = render(<Projects />)
    const links = container.querySelectorAll('a[target="_blank"]')
    links.forEach((link) => {
      expect(link.getAttribute('rel')).toContain('noopener')
    })
  })

  it('renders "Visit" links for each project', () => {
    render(<Projects />)
    const visitLinks = screen.getAllByRole('link', { name: /visit/i })
    expect(visitLinks.length).toBe(6)
  })

  it('renders project highlight bullet points', () => {
    render(<Projects />)
    expect(screen.getByText('Intelligent data matching')).toBeInTheDocument()
    expect(screen.getByText('10K+ active learners')).toBeInTheDocument()
  })

  it('renders project descriptions', () => {
    render(<Projects />)
    expect(screen.getByText(/AI-powered data ingestion platform/i)).toBeInTheDocument()
  })

  it('renders the section with id="projects"', () => {
    const { container } = render(<Projects />)
    expect(container.querySelector('#projects')).toBeInTheDocument()
  })
})
