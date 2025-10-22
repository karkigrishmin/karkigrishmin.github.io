import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Skills } from '@/components/sections/skills'

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

describe('Skills Section', () => {
  it('renders section heading', () => {
    render(<Skills />)

    expect(screen.getByText('Skills & Expertise')).toBeDefined()
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
    const { container } = render(<Skills />)

    const categories = container.querySelectorAll('[class*="space-y"]')
    // Should have at least 6 category sections
    expect(categories.length).toBeGreaterThanOrEqual(6)
  })
})
