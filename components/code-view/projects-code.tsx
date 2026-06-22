'use client'

import { projects } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { CodePanel, Key } from './code-panel'

function SpecField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <p className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
      <span className="text-accent-ink/80 shrink-0 select-none">{label}</span>
      <span className="text-muted leading-relaxed">{children}</span>
    </p>
  )
}

export function ProjectsCode() {
  return (
    <CodePanel filename="projects/README.md" className="w-full">
      <div className="space-y-8">
        {projects.map((project) => (
          <article key={project.id} className="font-mono text-[0.8125rem] leading-[1.7] sm:text-sm">
            <h3 className="text-accent-ink font-semibold">
              <span className="select-none">## </span>
              {project.title}
            </h3>
            <div className="mt-2 space-y-1.5">
              <SpecField label="stack:">{project.stack.join(', ')}</SpecField>
              <SpecField label="architecture:">{project.architectureNote}</SpecField>
              <SpecField label="impact:">{project.impact}</SpecField>
              <p className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
                <span className="text-accent-ink/80 shrink-0 select-none">link:</span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'text-foreground underline-offset-4 hover:underline',
                    'hover:text-accent-ink transition-colors'
                  )}
                >
                  {project.link}
                </a>
              </p>
            </div>
          </article>
        ))}
        <p className="font-mono text-[0.8125rem] sm:text-sm">
          <Key>{'// 6 shipped — products people use'}</Key>
        </p>
      </div>
    </CodePanel>
  )
}
