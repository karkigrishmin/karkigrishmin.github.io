'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { experience } from '@/lib/constants'
import { SectionLabel } from '@/components/primitives/section-label'
import { Reveal } from '@/components/primitives/reveal'
import { ExperienceCode } from '@/components/code-view/experience-code'
import { useLens } from '@/lib/lens-context'
import { useReducedMotion } from '@/lib/use-reduced-motion'

interface ExperienceEntry {
  company: string
  role: string
  type: string
  duration: string
  period: string
  location: string
  highlights: string[]
  tech: string[]
}

interface ExperienceRowProps {
  entry: ExperienceEntry
  index: number
  delay: number
}

function ExperienceRow({ entry, index, delay }: ExperienceRowProps) {
  const label = String(index + 1).padStart(2, '0')

  return (
    <Reveal delay={delay}>
      <div
        className={cn(
          'group border-border border-t',
          'grid grid-cols-1 gap-y-6 py-10',
          'sm:py-12',
          'md:grid-cols-[auto_1fr] md:gap-x-10 lg:gap-x-14'
        )}
      >
        {/* Left column: index + meta */}
        <div className="flex flex-row items-start gap-6 md:w-28 md:flex-col md:gap-3 lg:w-36">
          <span
            aria-hidden="true"
            className={cn(
              'font-mono text-4xl leading-none font-light tracking-[-0.04em] tabular-nums',
              'text-muted/80 transition-colors duration-300',
              'group-hover:text-accent-ink'
            )}
          >
            {label}
          </span>

          <div className="flex flex-col gap-1 pt-1 md:pt-0">
            <span className="text-muted font-mono text-[10px] tracking-[0.18em] uppercase">
              {entry.type}
            </span>
            <span className="text-muted font-mono text-[10px] leading-relaxed tracking-[0.18em] uppercase">
              {entry.duration}
            </span>
            <span className="text-muted font-mono text-[10px] leading-relaxed tracking-[0.18em] uppercase">
              {entry.period}
            </span>
            <span className="text-muted max-w-[12rem] font-mono text-[10px] leading-relaxed tracking-[0.18em] break-words uppercase md:max-w-none">
              {entry.location}
            </span>
          </div>
        </div>

        {/* Right column: content */}
        <div className="min-w-0">
          {/* Company + role header */}
          <div className="mb-6">
            <h3
              className={cn(
                'font-display text-foreground font-semibold tracking-[-0.025em] text-balance',
                'text-[clamp(1.5rem,3.5vw,2.25rem)] leading-[1.08]',
                'group-hover:text-foreground transition-colors duration-300'
              )}
            >
              {entry.company}
            </h3>
            <p className="text-foreground/70 mt-1.5 font-sans text-base">{entry.role}</p>
          </div>

          {/* Highlights */}
          <ul className="mb-7 max-w-prose space-y-3">
            {entry.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="text-accent-ink mt-[0.4em] shrink-0 font-mono text-xs select-none"
                >
                  —
                </span>
                <span className="text-muted font-sans text-sm leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>

          {/* Tech chips */}
          <div className="flex flex-wrap gap-2">
            {entry.tech.map((t) => (
              <span
                key={t}
                className={cn(
                  'border-border rounded-full border px-2.5 py-0.5',
                  'text-muted font-mono text-xs',
                  'transition-colors duration-200',
                  'group-hover:border-border hover:border-accent hover:text-accent-ink'
                )}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export function Experience() {
  const { lens } = useLens()
  const reduced = useReducedMotion()

  return (
    <section
      id="experience"
      className="relative mx-auto w-full max-w-6xl px-6 py-24 sm:py-32 lg:px-8"
    >
      <h2 className="sr-only">Experience</h2>

      <Reveal delay={0}>
        <SectionLabel>Experience</SectionLabel>
      </Reveal>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={lens}
          className="mt-8"
          initial={reduced ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
          transition={{ duration: reduced ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          {lens === 'code' ? <ExperienceCode /> : <ExperienceDesign />}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

function ExperienceDesign() {
  return (
    <>
      <Reveal delay={0.06}>
        <p
          className={cn(
            'font-display text-foreground',
            'text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.1] font-semibold tracking-[-0.02em] text-balance'
          )}
        >
          Six years. Six companies.
          <br />
          One consistent standard.
        </p>
      </Reveal>

      <div className="mt-16">
        {experience.map((entry, i) => (
          <ExperienceRow key={entry.company} entry={entry} index={i} delay={0.08 + i * 0.06} />
        ))}
      </div>
    </>
  )
}
