'use client'

import { motion } from 'framer-motion'
import { Reveal } from '@/components/primitives/reveal'
import { MagneticButton } from '@/components/primitives/magnetic-button'
import { InteractiveName } from '@/components/primitives/interactive-name'
import { useReducedMotion } from '@/lib/use-reduced-motion'
import { personalInfo } from '@/lib/constants'
import { cn } from '@/lib/utils'

const META = ['4+ YRS', 'REACT / NEXT / TS', 'EST. KATHMANDU']

function scrollToSection(id: string) {
  const element = document.getElementById(id)
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  element?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' })
}

export function Hero() {
  const reduced = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 pb-20 sm:px-8 sm:pt-32 lg:px-12"
    >
      {/* Index marker — editorial masthead touch, pinned top-left of the content well */}
      <Reveal delay={0.05}>
        <p className="text-muted mb-10 font-mono text-xs tracking-[0.25em] uppercase sm:mb-14">
          <span className="text-accent-ink">(01</span>
          <span className="mx-2 opacity-50">—</span>
          <span>Intro)</span>
        </p>
      </Reveal>

      <div className="grid w-full grid-cols-1 gap-y-10 lg:grid-cols-12">
        {/* Left content well — the masthead lives here; the right breathes */}
        <div className="lg:col-span-10 xl:col-span-9">
          {/* Eyebrow: availability + role + location */}
          <Reveal delay={0.1}>
            <div className="text-muted flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-xs tracking-[0.18em] uppercase">
              <span className="inline-flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  {!reduced && (
                    <span className="bg-accent absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                  )}
                  <span className="bg-accent relative inline-flex h-1.5 w-1.5 rounded-full" />
                </span>
                Available for work
              </span>
              <span aria-hidden className="bg-border h-3 w-px" />
              <span>{personalInfo.role}</span>
              <span aria-hidden className="bg-border h-3 w-px" />
              <span className="inline-flex items-center gap-2">
                <span aria-hidden className="bg-accent h-1.5 w-1.5 rounded-full" />
                {personalInfo.location}
              </span>
            </div>
          </Reveal>

          {/* The name — hero statement */}
          <Reveal delay={0.18}>
            <h1
              aria-label={personalInfo.name}
              className="font-display text-foreground mt-7 text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.95] font-semibold tracking-[-0.02em] text-balance sm:mt-9"
            >
              <span className="block">
                <InteractiveName text="Grishmin" aria-hidden />
              </span>{' '}
              <span className="block">
                <InteractiveName text="Karki" aria-hidden />
                <span aria-hidden className="text-accent-ink">
                  .
                </span>
              </span>
            </h1>
          </Reveal>

          {/* Tagline */}
          <Reveal delay={0.28}>
            <p className="text-muted mt-7 max-w-xl text-lg leading-relaxed text-pretty sm:mt-8 sm:text-xl">
              {personalInfo.tagline}
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.38}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <MagneticButton
                onClick={() => scrollToSection('projects')}
                className="bg-accent text-accent-foreground w-full px-8 py-3.5 font-medium hover:opacity-90 sm:w-auto"
              >
                View work
                <span aria-hidden className="text-base leading-none">
                  ↘
                </span>
              </MagneticButton>
              <MagneticButton
                onClick={() => scrollToSection('contact')}
                className="border-border text-foreground hover:border-accent hover:text-accent-ink w-full border px-8 py-3.5 font-medium transition-colors sm:w-auto"
              >
                Get in touch
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Masthead meta row — anchored to the bottom rule */}
      <Reveal delay={0.5}>
        <div className="border-border text-muted mt-16 flex flex-wrap items-center gap-x-4 gap-y-2 border-t pt-6 font-mono text-xs tracking-[0.18em] uppercase sm:mt-20">
          {META.map((item, i) => (
            <span key={item} className="inline-flex items-center gap-4">
              {i > 0 && <span aria-hidden className="bg-accent h-1 w-1 rounded-full" />}
              {item}
            </span>
          ))}
        </div>
      </Reveal>

      {/* Scroll cue */}
      <button
        type="button"
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to about section"
        className={cn(
          'group absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2',
          'text-muted font-mono text-[0.625rem] tracking-[0.3em] uppercase',
          'hover:text-accent-ink transition-colors min-[640px]:flex'
        )}
      >
        <span>Scroll</span>
        <motion.span
          aria-hidden
          className="bg-border group-hover:bg-accent block h-8 w-px origin-top"
          animate={reduced ? undefined : { scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </button>
    </section>
  )
}
