'use client'

import { cn } from '@/lib/utils'
import { skills } from '@/lib/constants'
import { SectionLabel } from '@/components/primitives/section-label'
import { Reveal } from '@/components/primitives/reveal'

const BENTO_CONFIG: Record<string, { index: string; gridClass: string; padClass: string }> = {
  'Core Frontend': {
    index: '01',
    gridClass: 'lg:col-span-2 lg:row-span-2',
    padClass: 'p-8 sm:p-10',
  },
  'Styling & Design': {
    index: '02',
    gridClass: 'lg:col-span-1',
    padClass: 'p-6',
  },
  'State & Data': {
    index: '03',
    gridClass: 'lg:col-span-1',
    padClass: 'p-6',
  },
  'Testing & Quality': {
    index: '04',
    gridClass: 'lg:col-span-2',
    padClass: 'p-6 sm:p-8',
  },
  'Tools & Practices': {
    index: '05',
    gridClass: 'lg:col-span-1',
    padClass: 'p-6',
  },
  'Web3 & Blockchain': {
    index: '06',
    gridClass: 'lg:col-span-1',
    padClass: 'p-6',
  },
}

interface BentoCellProps {
  category: string
  skillList: string[]
  delay: number
}

function BentoCell({ category, skillList, delay }: BentoCellProps) {
  const config = BENTO_CONFIG[category] ?? {
    index: '??',
    gridClass: '',
    padClass: 'p-6',
  }

  return (
    <Reveal delay={delay} className={config.gridClass}>
      <div
        className={cn(
          'group bg-surface border-border h-full rounded-xl border',
          'hover:bg-foreground/[0.02] hover:border-foreground/[0.12] transition-colors duration-300',
          config.padClass
        )}
      >
        <p className="text-muted mb-5 flex items-center gap-2.5 font-mono text-xs tracking-[0.18em] uppercase">
          <span className="text-accent-ink opacity-60">[{config.index}]</span>
          <span>{category}</span>
        </p>

        <div className="flex flex-wrap gap-2">
          {skillList.map((skill) => (
            <span
              key={skill}
              className={cn(
                'border-border text-muted rounded-full border px-3 py-1 font-mono text-xs',
                'hover:border-accent hover:text-accent-ink cursor-default transition-colors duration-200'
              )}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export function Skills() {
  const entries = Object.entries(skills)

  const delays = [0, 0.08, 0.12, 0.1, 0.18, 0.22]

  return (
    <section id="skills" className="relative mx-auto w-full max-w-6xl px-6 py-24 sm:py-32 lg:px-8">
      <h2 className="sr-only">Skills</h2>

      <Reveal delay={0}>
        <SectionLabel index={2}>Skills</SectionLabel>
      </Reveal>

      <Reveal delay={0.05}>
        <p
          className={cn(
            'font-display text-foreground mt-8',
            'text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.1] font-semibold tracking-[-0.02em] text-balance'
          )}
        >
          A toolkit refined across
          <br />
          six years of production work.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {entries.map(([category, skillList], i) => (
          <BentoCell
            key={category}
            category={category}
            skillList={skillList}
            delay={delays[i] ?? 0.1}
          />
        ))}
      </div>
    </section>
  )
}
