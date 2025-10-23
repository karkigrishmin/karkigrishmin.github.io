import '@testing-library/jest-dom'

// Mock window.matchMedia for prefers-reduced-motion tests
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false, // Default: motion is allowed
    media: query,
    onchange: null,
    addListener: () => {}, // Deprecated but still used by some libraries
    removeListener: () => {}, // Deprecated but still used by some libraries
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => true,
  }),
})
