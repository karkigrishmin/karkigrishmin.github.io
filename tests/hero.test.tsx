import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Hero } from '@/components/sections/hero'

// Mock getElementById for scroll behavior
global.document.getElementById = vi.fn(
  (_id: string) =>
    ({
      scrollIntoView: vi.fn(),
    }) as unknown as HTMLElement
)

describe('Hero Section', () => {
  it('renders personal information', () => {
    render(<Hero />)

    expect(screen.getByText('Grishmin Karki')).toBeDefined()
    expect(screen.getByText('Senior Frontend Engineer')).toBeDefined()
  })

  it('renders location badge', () => {
    render(<Hero />)

    expect(screen.getByText('Kathmandu, Nepal')).toBeDefined()
  })

  it('renders call-to-action buttons', () => {
    render(<Hero />)

    expect(screen.getByText('View My Work')).toBeDefined()
    expect(screen.getByText('Get In Touch')).toBeDefined()
  })

  it('renders tagline', () => {
    render(<Hero />)

    const tagline = screen.getByText(/Crafting pixel-perfect/i)
    expect(tagline).toBeDefined()
  })

  it('renders bio text', () => {
    render(<Hero />)

    const bio = screen.getByText(/4\+ years of experience/i)
    expect(bio).toBeDefined()
  })

  it('scrolls to projects section when "View My Work" is clicked', () => {
    render(<Hero />)

    const button = screen.getByText('View My Work')
    fireEvent.click(button)

    expect(global.document.getElementById).toHaveBeenCalledWith('projects')
  })

  it('scrolls to contact section when "Get In Touch" is clicked', () => {
    render(<Hero />)

    const button = screen.getByText('Get In Touch')
    fireEvent.click(button)

    expect(global.document.getElementById).toHaveBeenCalledWith('contact')
  })

  it('has scroll indicator', () => {
    render(<Hero />)

    expect(screen.getByText('Scroll to explore')).toBeDefined()
  })

  it('has hero section id', () => {
    const { container } = render(<Hero />)

    const section = container.querySelector('#hero')
    expect(section).toBeDefined()
  })
})
