import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LensProvider } from '@/lib/lens-context'
import { CommandPalette } from '../command-palette'

vi.mock('next-themes', () => ({ useTheme: () => ({ theme: 'dark', setTheme: vi.fn() }) }))

beforeAll(() => {
  window.HTMLElement.prototype.scrollIntoView = vi.fn()
})

function setup() {
  return render(
    <LensProvider>
      <CommandPalette />
    </LensProvider>
  )
}

describe('CommandPalette', () => {
  it('opens with Ctrl+K and shows core commands', async () => {
    const user = userEvent.setup()
    setup()
    await user.keyboard('{Control>}k{/Control}')
    expect(await screen.findByText(/copy email/i)).toBeInTheDocument()
    expect(screen.getByText(/toggle (code|design) view/i)).toBeInTheDocument()
  })
})
