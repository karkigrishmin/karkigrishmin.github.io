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
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: 'linear-gradient(to bottom right, color-mix(in srgb, var(--primary) 5%, transparent), transparent, color-mix(in srgb, var(--accent) 5%, transparent))'
        }}
      />

      {/* Floating shapes for visual interest */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl -z-10"
        style={{
          backgroundColor: 'color-mix(in srgb, var(--primary) 10%, transparent)'
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
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl -z-10"
        style={{
          backgroundColor: 'color-mix(in srgb, var(--accent) 10%, transparent)'
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

      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-6 text-sm">
            <MapPin className="w-3 h-3 mr-1 text-primary" />
            {personalInfo.location}
          </Badge>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-foreground"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {personalInfo.name}
        </motion.h1>

        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-primary"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {personalInfo.role}
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl text-muted mb-6 max-w-2xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.p
          className="text-base sm:text-lg text-muted mb-8 max-w-3xl mx-auto leading-relaxed"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {personalInfo.bio}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="min-w-[160px]"
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="min-w-[160px]"
          >
            Get In Touch
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-muted cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
