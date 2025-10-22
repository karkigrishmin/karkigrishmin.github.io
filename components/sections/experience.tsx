'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Calendar, Briefcase } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { experience } from '@/lib/constants'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

// Helper function to get company initials
const getCompanyInitials = (company: string): string => {
  return company
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="experience"
      ref={ref}
      className="bg-secondary/30 px-4 py-20 sm:px-6 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">Experience</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl px-4 text-sm sm:text-base md:text-lg">
            4+ years building exceptional digital experiences across diverse industries
          </p>
        </motion.div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Timeline connector line */}
          <div
            className="absolute top-16 bottom-16 left-8 hidden w-0.5 sm:block"
            style={{
              background: 'linear-gradient(to bottom, var(--primary), var(--accent))',
              opacity: 0.3,
            }}
          />

          <div className="space-y-8 sm:space-y-12">
            {experience.map((exp, index) => (
              <motion.div key={index} variants={itemVariants} className="relative">
                <Card className="group border-border/40 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col gap-6 sm:flex-row">
                      {/* Company Logo/Initials */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div
                            className="flex h-16 w-16 items-center justify-center rounded-2xl text-xl font-bold text-white shadow-lg sm:h-20 sm:w-20 sm:text-2xl"
                            style={{
                              background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                            }}
                          >
                            {getCompanyInitials(exp.company)}
                          </div>
                          {/* Timeline dot */}
                          <div
                            className="border-background absolute top-1/2 -left-[2.15rem] hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 sm:block"
                            style={{
                              background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                            }}
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        {/* Header */}
                        <div className="mb-4">
                          <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                            <div>
                              <h3 className="group-hover:text-primary text-xl font-bold transition-colors duration-200 sm:text-2xl">
                                {exp.role}
                              </h3>
                              <div className="mt-1 flex items-center gap-2">
                                <Briefcase className="text-primary h-4 w-4" />
                                <p className="text-foreground/90 text-base font-semibold sm:text-lg">
                                  {exp.company}
                                </p>
                              </div>
                            </div>
                            <Badge
                              variant={exp.type === 'Contract' ? 'outline' : 'secondary'}
                              className="text-xs whitespace-nowrap sm:text-sm"
                            >
                              {exp.type}
                            </Badge>
                          </div>

                          <div className="text-muted-foreground flex flex-wrap gap-3 text-xs sm:gap-4 sm:text-sm">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                              <span>{exp.duration}</span>
                              <span className="text-muted-foreground/60">·</span>
                              <span className="text-muted-foreground/80">{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Highlights */}
                        <div className="mb-4">
                          <ul className="space-y-2">
                            {exp.highlights.map((highlight, idx) => (
                              <li
                                key={idx}
                                className="text-muted-foreground flex items-start gap-2 text-sm sm:text-base"
                              >
                                <span
                                  className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full"
                                  style={{
                                    background:
                                      'linear-gradient(135deg, var(--primary), var(--accent))',
                                  }}
                                />
                                <span className="leading-relaxed">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech Stack */}
                        <div>
                          <div className="flex flex-wrap gap-2">
                            {exp.tech.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="bg-background/50 hover:bg-primary/10 hover:text-primary hover:border-primary/50 text-xs transition-colors duration-200"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
