import { render, screen } from '@testing-library/react'
import { Button } from '../button'

describe('Button tokens', () => {
  it('primary variant uses accent token classes', () => {
    render(<Button>Click</Button>)
    const btn = screen.getByRole('button', { name: 'Click' })
    expect(btn.className).toContain('bg-accent')
    expect(btn.className).toContain('text-accent-foreground')
  })
})
