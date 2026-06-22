import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MagneticButton } from '../magnetic-button'

vi.mock('@/lib/use-reduced-motion', () => ({ useReducedMotion: () => true }))

describe('MagneticButton', () => {
  it('renders children and fires onClick', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    render(<MagneticButton onClick={onClick}>Go</MagneticButton>)
    await user.click(screen.getByRole('button', { name: 'Go' }))
    expect(onClick).toHaveBeenCalledOnce()
  })
})
