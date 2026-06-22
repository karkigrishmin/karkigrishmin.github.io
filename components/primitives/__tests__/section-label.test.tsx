import { render, screen } from '@testing-library/react'
import { SectionLabel } from '../section-label'

describe('SectionLabel', () => {
  it('renders the index and label text', () => {
    render(<SectionLabel index={1}>About</SectionLabel>)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })
})
