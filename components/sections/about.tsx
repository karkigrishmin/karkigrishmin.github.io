'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { about } from '@/lib/constants'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center">
            {about.title}
          </h2>

          <div className="space-y-6">
            {about.description.map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-base sm:text-lg text-muted leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Decorative element */}
          <motion.div
            className="mt-12 h-1 w-32 mx-auto rounded-full"
            style={{
              backgroundImage: 'linear-gradient(to right, var(--primary), var(--accent))'
            }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={
              isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }
            }
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>
      </div>
    </section>
  )
}
