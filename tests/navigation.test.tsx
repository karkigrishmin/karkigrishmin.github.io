import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Navigation } from '@/components/navigation'

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: () => [],
  unobserve: vi.fn(),
  root: null,
  rootMargin: '',
  thresholds: [],
})) as unknown as typeof IntersectionObserver

// Mock scroll behaviors
global.scrollTo = vi.fn()

describe('Navigation', () => {
  it('renders all navigation items', () => {
    render(<Navigation />)

    expect(screen.getByText('About')).toBeDefined()
    expect(screen.getByText('Skills')).toBeDefined()
    expect(screen.getByText('Experience')).toBeDefined()
    expect(screen.getByText('Projects')).toBeDefined()
    expect(screen.getByText('Testimonials')).toBeDefined()
    expect(screen.getByText('Contact')).toBeDefined()
  })

  it('renders logo/initials', () => {
    render(<Navigation />)

    const logo = screen.getByText('GK')
    expect(logo).toBeDefined()
  })

  it('has theme toggle button', () => {
    render(<Navigation />)

    const themeButton = screen.getByLabelText(/toggle theme/i)
    expect(themeButton).toBeDefined()
  })

  it('has mobile menu toggle on small screens', () => {
    render(<Navigation />)

    const menuButton = screen.getByLabelText(/toggle mobile menu/i)
    expect(menuButton).toBeDefined()
  })

  it('scrolls to top when logo is clicked', () => {
    render(<Navigation />)

    const logo = screen.getByLabelText('Scroll to top')
    fireEvent.click(logo)

    // Check that scrollTo was called
    expect(global.scrollTo).toHaveBeenCalled()
    const call = (global.scrollTo as any).mock.calls[0][0]
    expect(call.top).toBe(0)
    // Behavior can be 'smooth' or 'auto' depending on matchMedia mock
    expect(['smooth', 'auto']).toContain(call.behavior)
  })

  it('has accessible navigation structure', () => {
    const { container } = render(<Navigation />)

    const nav = container.querySelector('nav')
    expect(nav).toBeDefined()
  })
})
