'use client'

import { motion } from 'framer-motion'
import { MapPin, ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { personalInfo } from '@/lib/constants'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)

    // Respect user's motion preferences for accessibility
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    element?.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20 sm:px-6 sm:pt-24 lg:px-8"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'linear-gradient(to bottom right, color-mix(in srgb, var(--primary) 5%, transparent), transparent, color-mix(in srgb, var(--accent) 5%, transparent))',
        }}
      />

      {/* Floating shapes for visual interest - hidden on mobile to prevent overflow */}
      <motion.div
        className="absolute top-20 left-10 -z-10 hidden h-40 w-40 rounded-full blur-3xl sm:block sm:h-56 sm:w-56 md:h-72 md:w-72"
        style={{
          backgroundColor: 'color-mix(in srgb, var(--primary) 10%, transparent)',
        }}
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute right-10 bottom-20 -z-10 hidden h-56 w-56 rounded-full blur-3xl sm:block sm:h-72 sm:w-72 md:h-96 md:w-96"
        style={{
          backgroundColor: 'color-mix(in srgb, var(--accent) 10%, transparent)',
        }}
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="mx-auto max-w-5xl px-2 text-center sm:px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-6 px-3 py-1.5 text-sm">
            <MapPin className="text-primary mr-1 h-3 w-3" />
            {personalInfo.location}
          </Badge>
        </motion.div>

        <motion.h1
          className="text-foreground mb-6 px-2 text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {personalInfo.name}
        </motion.h1>

        <motion.h2
          className="text-primary mb-4 px-2 text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {personalInfo.role}
        </motion.h2>

        <motion.p
          className="text-muted mx-auto mb-6 max-w-2xl px-4 text-base sm:text-lg md:text-xl"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.p
          className="text-muted mx-auto mb-8 max-w-3xl px-4 text-sm leading-relaxed sm:text-base md:text-lg"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {personalInfo.bio}
        </motion.p>

        <motion.div
          className="mb-16 flex flex-col items-center justify-center gap-3 px-4 sm:mb-20 sm:flex-row sm:gap-4"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="w-full min-w-[160px] sm:w-auto"
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="w-full min-w-[160px] sm:w-auto"
          >
            Get In Touch
          </Button>
        </motion.div>

        {/* Scroll indicator - hidden on short screens */}
        <motion.div
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 transform min-[600px]:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-muted flex cursor-pointer flex-col items-center gap-2"
            onClick={() => scrollToSection('about')}
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
