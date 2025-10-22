import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from '@/components/sections/projects'

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return []
  }
  unobserve() {}
} as any

describe('Projects Section', () => {
  it('renders section heading', () => {
    render(<Projects />)

    expect(screen.getByText('Featured Projects')).toBeDefined()
  })

  it('renders project cards', () => {
    render(<Projects />)

    // Check for project titles
    expect(screen.getByText(/Qluster AI/i)).toBeDefined()
    expect(screen.getByText(/Enthu\.AI/i)).toBeDefined()
    expect(screen.getByText(/AgileData/i)).toBeDefined()
  })

  it('renders project technologies', () => {
    render(<Projects />)

    expect(screen.getByText('React')).toBeDefined()
    expect(screen.getByText('Next.js')).toBeDefined()
    expect(screen.getByText('TypeScript')).toBeDefined()
  })

  it('renders project links', () => {
    const { container } = render(<Projects />)

    const links = container.querySelectorAll('a[rel="noopener noreferrer"]')
    expect(links.length).toBeGreaterThan(0)
  })

  it('all project links have correct attributes', () => {
    const { container } = render(<Projects />)

    const links = container.querySelectorAll('a[rel="noopener noreferrer"]')
    links.forEach((link) => {
      expect(link.getAttribute('target')).toBe('_blank')
      expect(link.getAttribute('rel')).toBe('noopener noreferrer')
    })
  })

  it('renders "Visit Live Site" buttons', () => {
    render(<Projects />)

    const buttons = screen.getAllByText('Visit Live Site')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('displays project highlights', () => {
    render(<Projects />)

    // Check for "Highlights" sections
    const highlightHeadings = screen.getAllByText('Highlights')
    expect(highlightHeadings.length).toBeGreaterThan(0)
  })

  it('displays tech stack sections', () => {
    render(<Projects />)

    // Check for "Tech Stack" sections
    const techHeadings = screen.getAllByText('Tech Stack')
    expect(techHeadings.length).toBeGreaterThan(0)
  })

  it('has projects section id', () => {
    const { container } = render(<Projects />)

    const section = container.querySelector('#projects')
    expect(section).toBeDefined()
  })
})
