'use client'

import { about } from '@/lib/constants'
import { Reveal } from '@/components/primitives/reveal'
import { SectionLabel } from '@/components/primitives/section-label'
import { StatNumber } from '@/components/primitives/stat-number'
import { cn } from '@/lib/utils'

const STATS = [
  {
    value: 4,
    suffix: '+',
    decimals: 0,
    label: 'Years experience',
    accent: false,
  },
  {
    value: 39.5,
    suffix: '%',
    decimals: 1,
    label: 'Perf improvement',
    accent: true,
  },
  {
    value: 10,
    suffix: 'K+',
    decimals: 0,
    label: 'Users reached',
    accent: false,
  },
] as const

export function About() {
  return (
    <section id="about" className="relative mx-auto w-full max-w-6xl px-6 py-24 sm:py-32 lg:px-8">
      <h2 className="sr-only">About</h2>

      <Reveal delay={0}>
        <SectionLabel index={1}>About</SectionLabel>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-0">
        <div className="lg:col-span-7 xl:col-span-6">
          <Reveal delay={0.1}>
            <p
              className={cn(
                'font-display text-foreground text-[clamp(1.75rem,4.5vw,3rem)]',
                'leading-[1.1] font-semibold tracking-[-0.02em] text-balance'
              )}
            >
              Design and code, held to the same standard.
            </p>
          </Reveal>

          <div className="mt-8 max-w-prose space-y-5">
            {about.description.map((paragraph, i) => (
              <Reveal key={i} delay={0.18 + i * 0.07}>
                <p
                  className={cn(
                    'text-muted font-sans text-base leading-relaxed text-pretty',
                    i === 0 && 'text-foreground'
                  )}
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 lg:flex lg:flex-col lg:justify-center xl:col-span-6">
          <Reveal delay={0.15}>
            <div className="border-border border-t pt-10 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12 xl:pl-16">
              <div className="grid grid-cols-3 gap-x-6 gap-y-10 lg:grid-cols-1 lg:gap-y-12">
                {STATS.map((stat, i) => (
                  <Reveal key={stat.label} delay={0.22 + i * 0.1}>
                    <div className="flex flex-col gap-2">
                      <span
                        className={cn(
                          'font-display text-[clamp(2.25rem,6vw,3.5rem)] leading-none font-semibold tracking-[-0.03em]',
                          stat.accent ? 'text-accent-ink' : 'text-foreground'
                        )}
                      >
                        <StatNumber
                          value={stat.value}
                          suffix={stat.suffix}
                          decimals={stat.decimals}
                        />
                      </span>
                      <span className="text-muted font-mono text-xs tracking-[0.18em] uppercase">
                        {stat.label}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
