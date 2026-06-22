import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Skills } from '@/components/sections/skills'

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

describe('Skills Section', () => {
  it('renders section heading', () => {
    render(<Skills />)

    expect(screen.getByRole('heading', { name: /skills/i })).toBeDefined()
  })

  it('renders skill categories', () => {
    render(<Skills />)

    expect(screen.getByText('Core Frontend')).toBeDefined()
    expect(screen.getByText('Styling & Design')).toBeDefined()
    expect(screen.getByText('State & Data')).toBeDefined()
    expect(screen.getByText('Testing & Quality')).toBeDefined()
    expect(screen.getByText('Tools & Practices')).toBeDefined()
    expect(screen.getByText('Web3 & Blockchain')).toBeDefined()
  })

  it('renders key technologies', () => {
    render(<Skills />)

    // Core Frontend
    expect(screen.getByText('TypeScript')).toBeDefined()
    expect(screen.getByText('React.js')).toBeDefined()
    expect(screen.getByText('Next.js')).toBeDefined()

    // Styling
    expect(screen.getByText('Tailwind CSS')).toBeDefined()

    // State Management
    expect(screen.getByText('Zustand')).toBeDefined()
    expect(screen.getByText(/React Query/i)).toBeDefined()

    // Testing
    expect(screen.getByText('Vitest')).toBeDefined()
    expect(screen.getByText('Playwright')).toBeDefined()

    // Tools
    expect(screen.getByText('Storybook')).toBeDefined()

    // Web3
    expect(screen.getByText('Cardano')).toBeDefined()
  })

  it('renders recently added skills', () => {
    render(<Skills />)

    // Skills added in the latest update
    expect(screen.getByText('Zustand')).toBeDefined()
    expect(screen.getByText('Playwright')).toBeDefined()
    expect(screen.getByText('shadcn/ui')).toBeDefined()
    expect(screen.getByText('Storybook')).toBeDefined()
    expect(screen.getByText('Chrome Extensions')).toBeDefined()
    expect(screen.getByText('lucid-cardano')).toBeDefined()
  })

  it('has skills section id', () => {
    const { container } = render(<Skills />)

    const section = container.querySelector('#skills')
    expect(section).toBeDefined()
  })

  it('renders all 6 skill categories', () => {
    render(<Skills />)

    const categoryNames = [
      'Core Frontend',
      'Styling & Design',
      'State & Data',
      'Testing & Quality',
      'Tools & Practices',
      'Web3 & Blockchain',
    ]
    categoryNames.forEach((name) => {
      expect(screen.getByText(name)).toBeDefined()
    })
  })
})
