import { projects } from '../constants'

describe('projects code-view fields', () => {
  it('each project has stack, architectureNote, impact', () => {
    for (const p of projects) {
      expect(Array.isArray(p.stack) && p.stack.length).toBeTruthy()
      expect(typeof p.architectureNote === 'string' && p.architectureNote.length).toBeTruthy()
      expect(typeof p.impact === 'string' && p.impact.length).toBeTruthy()
    }
  })
})
