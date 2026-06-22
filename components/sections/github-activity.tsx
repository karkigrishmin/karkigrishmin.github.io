'use client'

import { cn } from '@/lib/utils'
import { personalInfo } from '@/lib/constants'
import { useGithubActivity, type Repo } from '@/lib/use-github-activity'
import { useReducedMotion } from '@/lib/use-reduced-motion'

function SkeletonCard({ reduced }: { reduced: boolean }) {
  return (
    <div
      className={cn('bg-surface border-border rounded-xl border p-5', 'flex flex-col gap-3')}
      aria-hidden="true"
    >
      <div className={cn('bg-foreground/5 h-4 w-2/3 rounded', !reduced && 'animate-pulse')} />
      <div className={cn('bg-foreground/5 h-3 w-full rounded', !reduced && 'animate-pulse')} />
      <div className={cn('bg-foreground/5 h-3 w-4/5 rounded', !reduced && 'animate-pulse')} />
      <div className="mt-auto flex items-center gap-3">
        <div className={cn('bg-foreground/5 h-3 w-12 rounded', !reduced && 'animate-pulse')} />
        <div className={cn('bg-foreground/5 h-3 w-8 rounded', !reduced && 'animate-pulse')} />
      </div>
    </div>
  )
}

function RepoCard({ repo }: { repo: Repo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group bg-surface border-border rounded-xl border p-5',
        'flex flex-col gap-2.5',
        'hover:border-accent/50 transition-colors duration-300',
        'focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2'
      )}
    >
      <span className="text-accent-ink truncate font-mono text-sm leading-snug font-medium underline-offset-2 group-hover:underline">
        {repo.name}
      </span>

      {repo.description && (
        <p
          className="text-muted font-sans text-sm leading-relaxed"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {repo.description}
        </p>
      )}

      <div className="text-muted mt-auto flex items-center gap-4 pt-1 font-mono text-xs">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span aria-hidden="true" className="bg-accent-ink/40 h-2 w-2 shrink-0 rounded-full" />
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <span aria-label={`${repo.stargazers_count} stars`}>★ {repo.stargazers_count}</span>
        </span>
      </div>
    </a>
  )
}

export function GithubActivity() {
  const state = useGithubActivity('karkigrishmin')
  const reduced = useReducedMotion()

  return (
    <section
      aria-live="polite"
      aria-label="GitHub activity"
      className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8"
    >
      <header className="mb-8 flex items-center justify-between gap-4">
        <span className="flex items-center gap-2.5">
          <span aria-hidden="true" className="bg-accent h-1.5 w-1.5 shrink-0 rounded-full" />
          <span className="text-muted font-mono text-xs tracking-[0.18em] uppercase">
            Latest on GitHub
          </span>
        </span>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-accent-ink focus-visible:outline-accent inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.12em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          @karkigrishmin
          <span aria-hidden="true">↗</span>
        </a>
      </header>

      {state.status === 'loading' && (
        <div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="Loading repositories"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} reduced={reduced} />
          ))}
        </div>
      )}

      {state.status === 'success' && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {state.repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}

      {state.status === 'error' && (
        <div className="border-border flex flex-col items-center gap-3 rounded-xl border border-dashed px-6 py-12 text-center">
          <p className="text-muted font-sans text-sm leading-relaxed">
            Couldn&apos;t load live repositories right now — the work still lives on GitHub.
          </p>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center gap-1.5',
              'font-mono text-xs tracking-[0.18em] uppercase',
              'text-accent-ink hover:text-foreground focus-visible:outline-accent transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2'
            )}
          >
            Browse the repositories
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      )}
    </section>
  )
}
