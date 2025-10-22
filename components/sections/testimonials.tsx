'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { testimonials } from '@/lib/constants'

// Helper function to get initials from name
const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ])

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({})

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

  const toggleExpand = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

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
    <section id="testimonials" className="bg-secondary/50 px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">What People Say</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-sm sm:text-base md:text-lg">
            Recommendations from colleagues, managers, and clients
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => {
                const isExpanded = expandedCards[testimonial.id]
                const shouldTruncate = testimonial.quote.length > 200

                return (
                  <div
                    key={testimonial.id}
                    className="min-w-0 flex-[0_0_100%] pr-6 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                  >
                    <Card className="border-border/40 hover:border-border flex h-full flex-col transition-all duration-300 hover:shadow-lg">
                      <CardContent className="flex h-full flex-col pt-6">
                        {/* Quote Icon */}
                        <div className="mb-4">
                          <Quote className="text-primary/50 h-8 w-8" />
                        </div>

                        {/* Testimonial Text */}
                        <div className="mb-6 flex-1">
                          <AnimatePresence mode="wait">
                            <motion.p
                              key={isExpanded ? 'expanded' : 'collapsed'}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className={`text-muted-foreground text-sm leading-relaxed sm:text-base ${
                                !isExpanded && shouldTruncate ? 'line-clamp-4' : ''
                              }`}
                            >
                              &quot;{testimonial.quote}&quot;
                            </motion.p>
                          </AnimatePresence>

                          {/* Read More/Less Button */}
                          {shouldTruncate && (
                            <button
                              onClick={() => toggleExpand(testimonial.id)}
                              className="text-primary hover:text-primary/80 mt-2 text-sm font-medium transition-colors duration-200"
                            >
                              {isExpanded ? 'Read less' : 'Read more'}
                            </button>
                          )}
                        </div>

                        {/* Author Info */}
                        <div className="border-border/40 flex items-center gap-4 border-t pt-4">
                          {/* Avatar or Initials */}
                          <div className="flex-shrink-0">
                            {testimonial.image ? (
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="h-12 w-12 rounded-full object-cover"
                              />
                            ) : (
                              <div className="from-primary to-accent flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br text-sm font-semibold text-white">
                                {getInitials(testimonial.name)}
                              </div>
                            )}
                          </div>

                          {/* Name and Role */}
                          <div className="min-w-0 flex-1">
                            <h4 className="truncate text-sm font-semibold sm:text-base">
                              {testimonial.name}
                            </h4>
                            <p className="text-muted-foreground truncate text-xs sm:text-sm">
                              {testimonial.role} at {testimonial.company}
                            </p>
                          </div>

                          {/* LinkedIn Link */}
                          <a
                            href={testimonial.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary flex-shrink-0 transition-colors duration-200"
                            aria-label={`View ${testimonial.name}'s LinkedIn profile`}
                          >
                            <Linkedin className="h-5 w-5" />
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="bg-background/80 border-border hover:bg-accent hover:text-accent-foreground absolute top-1/2 left-0 z-10 flex h-10 w-10 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border shadow-lg backdrop-blur-sm transition-all duration-200 sm:h-12 sm:w-12 sm:-translate-x-12"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button
            onClick={scrollNext}
            className="bg-background/80 border-border hover:bg-accent hover:text-accent-foreground absolute top-1/2 right-0 z-10 flex h-10 w-10 translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border shadow-lg backdrop-blur-sm transition-all duration-200 sm:h-12 sm:w-12 sm:translate-x-12"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Dots Navigation */}
          <div className="mt-8 flex justify-center gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? 'bg-primary w-8'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
