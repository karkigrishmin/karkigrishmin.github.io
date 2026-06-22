import { render, screen } from '@testing-library/react'
import { SectionLabel } from '../section-label'

describe('SectionLabel', () => {
  it('renders the label text', () => {
    render(<SectionLabel>About</SectionLabel>)
    expect(screen.getByText('About')).toBeInTheDocument()
  })
})
