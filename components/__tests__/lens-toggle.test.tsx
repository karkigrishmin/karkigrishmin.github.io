import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LensProvider } from '@/lib/lens-context'
import { LensToggle } from '../lens-toggle'

describe('LensToggle', () => {
  it('toggles aria-pressed when clicked', async () => {
    const user = userEvent.setup()
    render(
      <LensProvider>
        <LensToggle />
      </LensProvider>
    )
    const btn = screen.getByRole('button', { name: /code view|design view/i })
    expect(btn).toHaveAttribute('aria-pressed', 'false')
    await user.click(btn)
    expect(btn).toHaveAttribute('aria-pressed', 'true')
  })

  it('starts in design mode by default', () => {
    render(
      <LensProvider>
        <LensToggle />
      </LensProvider>
    )
    const btn = screen.getByRole('button', { name: /code view/i })
    expect(btn).toHaveAttribute('aria-pressed', 'false')
  })

  it('shows code label text when in code mode', async () => {
    const user = userEvent.setup()
    render(
      <LensProvider>
        <LensToggle />
      </LensProvider>
    )
    const btn = screen.getByRole('button', { name: /code view/i })
    await user.click(btn)
    expect(screen.getByRole('button', { name: /design view/i })).toBeDefined()
  })

  it('accepts an optional className prop', () => {
    render(
      <LensProvider>
        <LensToggle className="extra-class" />
      </LensProvider>
    )
    const btn = screen.getByRole('button', { name: /code view|design view/i })
    expect(btn.className).toContain('extra-class')
  })
})
