import type { Config } from 'tailwindcss'

const config: Config = {
  // Dark mode configuration - uses data-theme attribute
  darkMode: ['class', '[data-theme="dark"]'],

  // Content paths for Tailwind to scan
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  // Tailwind CSS v4 uses @theme directive in CSS for colors
  // Only extend with non-color customizations
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['var(--font-space-grotesk)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
