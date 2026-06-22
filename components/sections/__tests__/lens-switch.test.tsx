import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LensProvider } from '@/lib/lens-context'
import { LensToggle } from '@/components/lens-toggle'
import { Hero } from '../hero'

vi.mock('@/lib/use-reduced-motion', () => ({ useReducedMotion: () => true }))

describe('Hero lens switch', () => {
  it('shows the code object in code view', async () => {
    const user = userEvent.setup()
    render(
      <LensProvider>
        <LensToggle />
        <Hero />
      </LensProvider>
    )
    await user.click(screen.getByRole('button', { name: /code view/i }))
    expect(await screen.findByText(/const grishmin/i)).toBeInTheDocument()
  })
})
