'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { projects } from '@/lib/constants'
import { SectionLabel } from '@/components/primitives/section-label'
import { Reveal } from '@/components/primitives/reveal'
import { ProjectsCode } from '@/components/code-view/projects-code'
import { useLens } from '@/lib/lens-context'
import { useReducedMotion } from '@/lib/use-reduced-motion'

interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  highlights: string[]
  link: string
  image?: string
  stack: string[]
  architectureNote: string
  impact: string
}

const MOTIF_SYMBOLS: Record<string, string> = {
  qluster: '⬡',
  enthu: '◎',
  agiledata: '▦',
  heliski: '△',
  iagon: '⬢',
  tigg: '≡',
}

function ProjectMotif({ project, isEven }: { project: Project; isEven: boolean }) {
  const reduced = useReducedMotion()
  const symbol = MOTIF_SYMBOLS[project.id] ?? '◆'
  const initial = project.id.slice(0, 2).toUpperCase()

  return (
    <motion.div
      className={cn(
        'relative overflow-hidden',
        'border-border bg-surface rounded-xl border',
        'aspect-[4/3] w-full',
        'flex items-center justify-center',
        'group-hover:border-accent/30 transition-colors duration-500'
      )}
      whileHover={reduced ? undefined : { scale: 1.012 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Lime radial glow — intensifies on row hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 110%, color-mix(in srgb, var(--color-accent) 20%, transparent), transparent)',
        }}
      />

      {/* Dot grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'radial-gradient(circle, color-mix(in srgb, var(--color-muted) 70%, transparent) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />

      {/* Large decorative symbol — bottom corner, alternating side */}
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute bottom-2 font-mono leading-none select-none',
          'text-muted/8 group-hover:text-accent/12 text-[7rem] transition-colors duration-500',
          isEven ? 'right-3' : 'left-3'
        )}
      >
        {symbol}
      </div>

      {/* Center initial + id label */}
      <div className="relative flex flex-col items-center gap-1.5 text-center">
        <span
          aria-hidden="true"
          className={cn(
            'font-display leading-none font-semibold tracking-[-0.04em] select-none',
            'text-[clamp(3.5rem,9vw,5.5rem)]',
            'text-muted/15 group-hover:text-accent/25 transition-colors duration-500'
          )}
        >
          {initial}
        </span>
        <span className="text-muted/40 font-mono text-[9px] tracking-[0.24em] uppercase select-none">
          {project.id}
        </span>
      </div>

      {/* Bottom accent bar — slides in on hover */}
      <div
        aria-hidden="true"
        className={cn(
          'bg-accent absolute right-0 bottom-0 left-0 h-[2px]',
          'origin-left scale-x-0 group-hover:scale-x-100',
          'transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]'
        )}
      />
    </motion.div>
  )
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const label = String(index + 1).padStart(2, '0')
  const isEven = index % 2 === 0

  return (
    <Reveal delay={0.08 + index * 0.05}>
      <div
        className={cn(
          'group border-border border-t',
          'grid grid-cols-1 gap-8 py-10 sm:py-14',
          'lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14'
        )}
      >
        {/* Motif tile — alternates sides on lg */}
        <div className={cn('w-full', isEven ? 'lg:order-first' : 'lg:order-last')}>
          <ProjectMotif project={project} isEven={isEven} />
        </div>

        {/* Text block — alternates sides on lg */}
        <div className={cn('min-w-0', isEven ? 'lg:order-last' : 'lg:order-first')}>
          {/* Row index */}
          <span
            aria-hidden="true"
            className={cn(
              'mb-5 block font-mono text-4xl leading-none font-light tracking-[-0.04em] tabular-nums',
              'text-border transition-colors duration-300',
              'group-hover:text-accent-ink'
            )}
          >
            {label}
          </span>

          {/* Title */}
          <h3
            className={cn(
              'font-display font-semibold tracking-[-0.025em] text-balance',
              'text-[clamp(1.3rem,2.8vw,1.85rem)] leading-[1.1]',
              'text-foreground mb-3'
            )}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-muted mb-6 max-w-prose font-sans text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Highlights */}
          <ul className="mb-7 space-y-2.5">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="text-accent-ink mt-[0.35em] shrink-0 font-mono text-xs select-none"
                >
                  —
                </span>
                <span className="text-muted font-sans text-sm leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>

          {/* Tech chips */}
          <div className="mb-7 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className={cn(
                  'border-border rounded-full border px-2.5 py-0.5',
                  'text-muted font-mono text-xs',
                  'transition-colors duration-200',
                  'hover:border-accent hover:text-accent-ink'
                )}
              >
                {t}
              </span>
            ))}
          </div>

          {/* External link */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center gap-1.5',
              'font-mono text-xs tracking-[0.18em] uppercase',
              'text-accent-ink',
              'underline-offset-4 hover:underline',
              'transition-opacity duration-200 hover:opacity-80'
            )}
          >
            Visit
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </Reveal>
  )
}

export function Projects() {
  const { lens } = useLens()
  const reduced = useReducedMotion()

  return (
    <section
      id="projects"
      className="relative mx-auto w-full max-w-6xl px-6 py-24 sm:py-32 lg:px-8"
    >
      {/* Accessible heading — visible in DOM, screen-reader-first; visual title below */}
      <h2 className="sr-only">Projects</h2>

      <Reveal delay={0}>
        <SectionLabel index={4}>Projects</SectionLabel>
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
          {lens === 'code' ? <ProjectsCode /> : <ProjectsDesign />}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

function ProjectsDesign() {
  return (
    <>
      <Reveal delay={0.06}>
        <p
          className={cn(
            'font-display text-foreground',
            'text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.1] font-semibold tracking-[-0.02em] text-balance'
          )}
          aria-hidden="true"
        >
          Work that ships.
          <br />
          Products people use.
        </p>
      </Reveal>

      <div className="mt-16">
        {projects.map((project, i) => (
          <ProjectRow key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Closing hairline */}
      <div className="border-border border-t" aria-hidden="true" />
    </>
  )
}
