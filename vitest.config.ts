import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    exclude: ['**/node_modules/**', '**/dist/**', '**/e2e/**', '**/*.spec.ts', '**/error.test.tsx'],
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  // Override PostCSS for test environment - skip plugin loading
  // This fixes Tailwind CSS v4 @tailwindcss/postcss compatibility issue
  // Production builds still use postcss.config.mjs
  css: {
    postcss: {
      plugins: [], // Empty array bypasses PostCSS processing in tests
    },
  },
})
