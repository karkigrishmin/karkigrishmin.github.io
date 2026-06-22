import '@testing-library/jest-dom'

// Stub ResizeObserver (not in jsdom) — required by embla-carousel
class ResizeObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}
Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  value: ResizeObserverStub,
})
Object.defineProperty(global, 'ResizeObserver', {
  writable: true,
  value: ResizeObserverStub,
})

// Stub IntersectionObserver (not in jsdom) — required by framer-motion useInView
class IntersectionObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}
Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: IntersectionObserverStub,
})
Object.defineProperty(global, 'IntersectionObserver', {
  writable: true,
  value: IntersectionObserverStub,
})

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
