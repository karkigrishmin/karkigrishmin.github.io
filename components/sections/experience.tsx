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
    }
  },
}

// Helper function to get company initials
const getCompanyInitials = (company: string) => {
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
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Experience
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
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
            className="absolute left-8 top-16 bottom-16 w-0.5 hidden sm:block"
            style={{
              background: 'linear-gradient(to bottom, var(--primary), var(--accent))',
              opacity: 0.3,
            }}
          />

          <div className="space-y-8 sm:space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <Card className="group hover:shadow-xl transition-all duration-300 border-border/40 hover:border-primary/50">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row gap-6">
                      {/* Company Logo/Initials */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div
                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-white font-bold text-xl sm:text-2xl shadow-lg"
                            style={{
                              background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                            }}
                          >
                            {getCompanyInitials(exp.company)}
                          </div>
                          {/* Timeline dot */}
                          <div
                            className="absolute -left-[2.15rem] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-background hidden sm:block"
                            style={{
                              background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                            }}
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        {/* Header */}
                        <div className="mb-4">
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                            <div>
                              <h3 className="text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors duration-200">
                                {exp.role}
                              </h3>
                              <div className="flex items-center gap-2 mt-1">
                                <Briefcase className="w-4 h-4 text-primary" />
                                <p className="text-base sm:text-lg font-semibold text-foreground/90">
                                  {exp.company}
                                </p>
                              </div>
                            </div>
                            <Badge
                              variant={exp.type === 'Contract' ? 'outline' : 'secondary'}
                              className="text-xs sm:text-sm whitespace-nowrap"
                            >
                              {exp.type}
                            </Badge>
                          </div>

                          <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                              <span>{exp.duration}</span>
                              <span className="text-muted-foreground/60">·</span>
                              <span className="text-muted-foreground/80">{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
                                className="flex items-start gap-2 text-sm sm:text-base text-muted-foreground"
                              >
                                <span
                                  className="inline-block w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                  style={{
                                    background: 'linear-gradient(135deg, var(--primary), var(--accent))',
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
                                className="text-xs bg-background/50 hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-colors duration-200"
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
