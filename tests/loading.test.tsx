import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Loading from '@/app/loading'

describe('Loading Component', () => {
  it('renders loading component', () => {
    render(<Loading />)

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('displays loading text', () => {
    render(<Loading />)

    const loadingText = screen.getByText('Loading...')
    expect(loadingText).toBeVisible()
  })

  it('renders three animated dots', () => {
    const { container } = render(<Loading />)

    // Check for the container of dots
    const dotsContainer = container.querySelector('.inline-flex.gap-2')
    expect(dotsContainer).toBeInTheDocument()

    // Check that there are 3 dot elements
    const dots = dotsContainer?.querySelectorAll('.w-3.h-3.rounded-full')
    expect(dots).toHaveLength(3)
  })

  it('has proper layout structure', () => {
    const { container } = render(<Loading />)

    // Check for min-h-screen container
    const mainContainer = container.querySelector('.min-h-screen')
    expect(mainContainer).toBeInTheDocument()

    // Check for centering classes
    expect(mainContainer).toHaveClass('flex', 'items-center', 'justify-center')
  })

  it('has gradient background on dots', () => {
    const { container } = render(<Loading />)

    const dots = container.querySelectorAll('.w-3.h-3.rounded-full')

    dots.forEach((dot) => {
      const style = (dot as HTMLElement).style.background
      // Check that gradient is applied (contains 'linear-gradient')
      expect(style).toContain('linear-gradient')
    })
  })

  it('is accessible with proper text content', () => {
    render(<Loading />)

    // Screen readers should announce the loading state
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })
})
