'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { cn } from '@/lib/utils'
import { testimonials } from '@/lib/constants'
import { SectionLabel } from '@/components/primitives/section-label'
import { Reveal } from '@/components/primitives/reveal'

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

function InitialsAvatar({ name }: { name: string }) {
  return (
    <div
      aria-hidden="true"
      className="border-border bg-surface text-muted flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border font-mono text-xs font-medium tracking-wider uppercase"
    >
      {getInitials(name)}
    </div>
  )
}

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ])

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onInit = useCallback(() => {
    if (emblaApi) {
      setScrollSnaps(emblaApi.scrollSnapList())
    }
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    onInit()
    onSelect()
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)

    return () => {
      emblaApi.off('reInit', onInit)
      emblaApi.off('reInit', onSelect)
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onInit, onSelect])

  return (
    <section
      id="testimonials"
      className="relative mx-auto w-full max-w-6xl px-6 py-24 sm:py-32 lg:px-8"
    >
      <Reveal delay={0}>
        <SectionLabel index={5}>Recommendations</SectionLabel>
      </Reveal>

      <h2 className="sr-only">Testimonials</h2>

      <Reveal delay={0.06}>
        <p
          aria-hidden="true"
          className="font-display text-foreground mt-6 text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.1] font-semibold tracking-[-0.02em] text-balance"
        >
          What people say.
        </p>
      </Reveal>

      <div className="relative mt-12">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {testimonials.map((testimonial, i) => (
              <div
                key={testimonial.id}
                className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_calc(50%-10px)] lg:flex-[0_0_calc(33.333%-14px)]"
              >
                <Reveal delay={0.08 + i * 0.06}>
                  <a
                    href={testimonial.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'group border-border bg-surface flex h-full flex-col rounded-xl border p-8',
                      'hover:border-foreground/20 transition-colors duration-300'
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className="font-display text-border group-hover:text-accent-ink text-[5rem] leading-[0.75] transition-colors duration-300 select-none"
                    >
                      &ldquo;
                    </span>

                    <p className="text-foreground/80 mt-4 flex-1 font-sans text-base leading-relaxed">
                      {testimonial.quote}
                    </p>

                    <div className="border-border mt-8 flex items-center gap-4 border-t pt-6">
                      <InitialsAvatar name={testimonial.name} />
                      <div className="min-w-0 flex-1">
                        <p className="font-display text-foreground text-sm leading-tight font-semibold">
                          {testimonial.name}
                        </p>
                        <p className="text-muted mt-0.5 font-mono text-[0.65rem] tracking-[0.18em] uppercase">
                          {testimonial.role}
                          <span aria-hidden className="mx-1.5 opacity-40">
                            ·
                          </span>
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </a>
                </Reveal>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={cn(
                  'h-px transition-all duration-300',
                  index === selectedIndex ? 'bg-accent-ink w-8' : 'bg-border hover:bg-muted w-4'
                )}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              aria-label="Previous testimonial"
              className={cn(
                'flex h-9 w-9 items-center justify-center rounded-full',
                'border-border text-muted border',
                'hover:border-foreground/30 hover:text-foreground transition-colors duration-200',
                'font-mono text-sm'
              )}
            >
              ←
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next testimonial"
              className={cn(
                'flex h-9 w-9 items-center justify-center rounded-full',
                'border-border text-muted border',
                'hover:border-foreground/30 hover:text-foreground transition-colors duration-200',
                'font-mono text-sm'
              )}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
