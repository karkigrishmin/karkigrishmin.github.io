import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ErrorComponent from '@/app/error'

describe('Error Boundary Component', () => {
  const mockReset = vi.fn()
  const mockError = new Error('Test error message')
  const mockErrorWithDigest = Object.assign(new Error('Test error with digest'), {
    digest: 'abc123',
  })

  beforeEach(() => {
    vi.clearAllMocks()
    // Mock console.error to avoid noise in test output
    vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  it('renders error component with correct heading', () => {
    render(<ErrorComponent error={mockError} reset={mockReset} />)

    expect(screen.getByText('Something went wrong')).toBeInTheDocument()
  })

  it('displays error description', () => {
    render(<ErrorComponent error={mockError} reset={mockReset} />)

    expect(screen.getByText(/An unexpected error occurred/i)).toBeInTheDocument()
  })

  it('logs error to console on mount', () => {
    const consoleSpy = vi.spyOn(console, 'error')

    render(<ErrorComponent error={mockError} reset={mockReset} />)

    expect(consoleSpy).toHaveBeenCalledWith('Application error:', mockError)
  })

  it('displays error digest when provided', () => {
    render(<ErrorComponent error={mockErrorWithDigest} reset={mockReset} />)

    expect(screen.getByText(/Error ID:/i)).toBeInTheDocument()
    expect(screen.getByText(/abc123/i)).toBeInTheDocument()
  })

  it('does not display error digest when not provided', () => {
    render(<ErrorComponent error={mockError} reset={mockReset} />)

    expect(screen.queryByText(/Error ID:/i)).not.toBeInTheDocument()
  })

  it('displays error message in technical details', () => {
    render(<ErrorComponent error={mockError} reset={mockReset} />)

    expect(screen.getByText('Test error message')).toBeInTheDocument()
  })

  it('calls reset function when Try Again button is clicked', () => {
    render(<ErrorComponent error={mockError} reset={mockReset} />)

    const tryAgainButton = screen.getByRole('button', { name: /try again/i })
    fireEvent.click(tryAgainButton)

    expect(mockReset).toHaveBeenCalledTimes(1)
  })

  it('navigates to home when Go Home button is clicked', () => {
    const originalLocation = window.location
    Object.defineProperty(window, 'location', {
      configurable: true,
      writable: true,
      value: { ...originalLocation, href: '' },
    })

    render(<ErrorComponent error={mockError} reset={mockReset} />)

    const goHomeButton = screen.getByRole('button', { name: /go home/i })
    fireEvent.click(goHomeButton)

    expect(window.location.href).toBe('/')

    Object.defineProperty(window, 'location', {
      configurable: true,
      writable: true,
      value: originalLocation,
    })
  })

  it('renders error icon', () => {
    const { container } = render(<ErrorComponent error={mockError} reset={mockReset} />)

    // Check for AlertCircle icon (lucide-react)
    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  it('has proper aria structure', () => {
    render(<ErrorComponent error={mockError} reset={mockReset} />)

    // Check that details element exists for expandable content
    const details = screen.getByText('Technical Details').closest('details')
    expect(details).toBeInTheDocument()
  })
})
