import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { LensProvider } from '@/lib/lens-context'
import { Hero } from '@/components/sections/hero'
import { personalInfo } from '@/lib/constants'

vi.mock('@/lib/use-reduced-motion', () => ({ useReducedMotion: () => true }))

const renderWithLens = (ui: React.ReactElement) => render(<LensProvider>{ui}</LensProvider>)

// Mock getElementById for scroll behavior
global.document.getElementById = vi.fn(
  (_id: string) =>
    ({
      scrollIntoView: vi.fn(),
    }) as unknown as HTMLElement
)

describe('Hero Section', () => {
  it('renders the name as the sole h1', () => {
    renderWithLens(<Hero />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(personalInfo.name)
  })

  it('renders the role', () => {
    renderWithLens(<Hero />)

    expect(screen.getByText(personalInfo.role)).toBeInTheDocument()
  })

  it('renders the location', () => {
    renderWithLens(<Hero />)

    expect(screen.getByText(personalInfo.location)).toBeInTheDocument()
  })

  it('renders both call-to-action buttons', () => {
    renderWithLens(<Hero />)

    expect(screen.getByRole('button', { name: /view work/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /get in touch/i })).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    renderWithLens(<Hero />)

    expect(screen.getByText(/Crafting pixel-perfect/i)).toBeInTheDocument()
  })

  it('scrolls to projects when the primary CTA is clicked', () => {
    renderWithLens(<Hero />)

    fireEvent.click(screen.getByRole('button', { name: /view work/i }))

    expect(global.document.getElementById).toHaveBeenCalledWith('projects')
  })

  it('scrolls to contact when the secondary CTA is clicked', () => {
    renderWithLens(<Hero />)

    fireEvent.click(screen.getByRole('button', { name: /get in touch/i }))

    expect(global.document.getElementById).toHaveBeenCalledWith('contact')
  })

  it('provides an accessible scroll cue to the about section', () => {
    renderWithLens(<Hero />)

    const scrollCue = screen.getByRole('button', { name: /scroll to about/i })
    fireEvent.click(scrollCue)

    expect(global.document.getElementById).toHaveBeenCalledWith('about')
  })

  it('has a hero section landmark', () => {
    renderWithLens(<Hero />)

    const section = document.querySelector('#hero')
    expect(section).not.toBeNull()
  })
})
