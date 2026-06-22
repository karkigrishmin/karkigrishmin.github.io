import { render, screen } from '@testing-library/react'
import { Contact } from '../contact'

vi.mock('@/lib/use-reduced-motion', () => ({ useReducedMotion: () => true }))

describe('Contact', () => {
  it('renders heading and an email mailto link', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: /get in touch|contact/i })).toBeInTheDocument()
    const mail = screen.getByRole('link', { name: /grishminkarki7@gmail\.com/i })
    expect(mail.getAttribute('href')).toMatch(/^mailto:/)
  })
})
