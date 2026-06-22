'use client'

import { cn } from '@/lib/utils'
import { skills } from '@/lib/constants'
import { SectionLabel } from '@/components/primitives/section-label'
import { Reveal } from '@/components/primitives/reveal'

interface SkillCellProps {
  category: string
  skillList: string[]
  delay: number
}

function SkillCell({ category, skillList, delay }: SkillCellProps) {
  return (
    <Reveal delay={delay} className="h-full">
      <div
        className={cn(
          'group bg-surface border-border h-full rounded-xl border p-6 sm:p-8',
          'hover:bg-foreground/[0.02] hover:border-foreground/[0.12] transition-colors duration-300'
        )}
      >
        <p className="text-muted mb-5 flex items-center gap-2.5 font-mono text-xs tracking-[0.18em] uppercase">
          <span aria-hidden="true" className="bg-accent h-1.5 w-1.5 rounded-full opacity-70" />
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

  const delays = [0, 0.06, 0.12, 0.08, 0.14, 0.2]

  return (
    <section id="skills" className="relative mx-auto w-full max-w-6xl px-6 py-24 sm:py-32 lg:px-8">
      <h2 className="sr-only">Skills</h2>

      <Reveal delay={0}>
        <SectionLabel>Skills</SectionLabel>
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
          <SkillCell
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
