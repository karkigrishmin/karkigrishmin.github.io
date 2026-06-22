'use client'

import { experience } from '@/lib/constants'
import { CodePanel } from './code-panel'

/** Deterministic 7-char hex hash from a seed string — git-shortlog flavor. */
function shortHash(seed: string): string {
  let h = 0x811c9dc5
  for (let i = 0; i < seed.length; i += 1) {
    h ^= seed.charCodeAt(i)
    h = Math.imul(h, 0x01000193)
  }
  return (h >>> 0).toString(16).padStart(8, '0').slice(0, 7)
}

export function ExperienceCode() {
  return (
    <CodePanel filename="git log --oneline --author=grishmin" className="w-full">
      <ol className="m-0 space-y-6">
        {experience.map((entry) => {
          const hash = shortHash(entry.company + entry.duration)
          return (
            <li key={entry.company} className="font-mono text-[0.8125rem] leading-[1.7] sm:text-sm">
              <p className="flex flex-wrap items-baseline gap-x-2">
                <span className="text-accent-ink shrink-0">{hash}</span>
                <span className="text-muted shrink-0">({entry.duration})</span>
                <span className="text-foreground">
                  {entry.company} <span className="text-muted">—</span> {entry.role}
                </span>
              </p>
              <ul className="mt-1.5 space-y-1">
                {entry.highlights.slice(0, 2).map((highlight) => (
                  <li key={highlight} className="text-muted flex gap-2 pl-2">
                    <span aria-hidden="true" className="text-accent-ink/60 select-none">
                      *
                    </span>
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </li>
          )
        })}
      </ol>
    </CodePanel>
  )
}
