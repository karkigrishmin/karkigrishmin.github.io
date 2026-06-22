import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LensProvider, useLens } from '../lens-context'

function Probe() {
  const { lens, toggleLens } = useLens()
  return <button onClick={toggleLens}>lens:{lens}</button>
}

describe('lens-context', () => {
  it('defaults to design and toggles to code and back', async () => {
    const user = userEvent.setup()
    render(
      <LensProvider>
        <Probe />
      </LensProvider>
    )
    const btn = screen.getByRole('button')
    expect(btn).toHaveTextContent('lens:design')
    await user.click(btn)
    expect(btn).toHaveTextContent('lens:code')
    await user.click(btn)
    expect(btn).toHaveTextContent('lens:design')
  })

  it('throws if useLens used outside provider', () => {
    function Bad() {
      useLens()
      return null
    }
    expect(() => render(<Bad />)).toThrow(/LensProvider/)
  })
})
