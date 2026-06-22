'use client'

import { cn } from '@/lib/utils'
import { GrishminCard } from './grishmin-card'

function scrollToSection(id: string) {
  const element = document.getElementById(id)
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  element?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' })
}

const CALLS = [
  { method: 'viewWork', target: 'projects', label: 'View my work' },
  { method: 'getInTouch', target: 'contact', label: 'Get in touch' },
] as const

interface DocLine {
  text: string
  tone?: 'name' | 'accent'
}

const DOC_LINES: DocLine[] = [
  { text: '/**' },
  { text: ' * Grishmin Karki', tone: 'name' },
  { text: ' * Senior Frontend Engineer', tone: 'accent' },
  { text: ' *' },
  { text: ' * Crafting pixel-perfect, accessible' },
  { text: ' * web experiences with modern tech.' },
  { text: ' */' },
]

export function HeroCode() {
  return (
    <div className="grid w-full grid-cols-1 items-center gap-y-10 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
      {/* Left: the masthead, as a doc comment */}
      <div className="lg:col-span-7">
        <div className="font-mono text-[clamp(0.875rem,1.6vw,1.4rem)] leading-[1.7]">
          {DOC_LINES.map((line, i) => (
            <div
              key={i}
              className={cn(
                'whitespace-pre',
                line.tone === 'name'
                  ? 'text-foreground'
                  : line.tone === 'accent'
                    ? 'text-accent-ink'
                    : 'text-muted'
              )}
            >
              {line.text || ' '}
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start gap-2.5">
          {CALLS.map(({ method, target, label }) => (
            <button
              key={method}
              type="button"
              onClick={() => scrollToSection(target)}
              aria-label={label}
              className="group focus-visible:outline-accent inline-flex w-fit items-center gap-2 font-mono text-sm focus-visible:outline-2 focus-visible:outline-offset-4 sm:text-base"
            >
              <span aria-hidden="true" className="text-accent-ink opacity-60">
                {'>'}
              </span>
              <span className="text-muted group-hover:text-foreground transition-colors duration-200">
                grishmin.
                <span className="text-accent-ink underline-offset-4 group-hover:underline">
                  {method}
                </span>
                ()
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Right: the same identity, as data — shares the slot with the design card */}
      <div className="lg:col-span-5">
        <GrishminCard />
      </div>
    </div>
  )
}
