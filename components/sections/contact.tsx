'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { contact } from '@/lib/constants'

const iconMap = {
  Github,
  Linkedin,
  Twitter,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {contact.title}
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            {contact.description}
          </p>
        </motion.div>

        <Card className="max-w-2xl mx-auto p-8 sm:p-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-8"
          >
            <Button
              size="lg"
              asChild
              className="text-lg px-8 py-6"
            >
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3"
              >
                <Mail className="w-5 h-5" />
                {contact.email}
              </a>
            </Button>
          </motion.div>

          <div className="relative my-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/20" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-card text-foreground font-medium">
                or connect with me on
              </span>
            </div>
          </div>

          <motion.div
            className="flex justify-center gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {contact.social.map((social) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap]
              return (
                <motion.div key={social.name} variants={itemVariants}>
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="w-14 h-14 hover:!scale-110 hover:!border-primary transition-all duration-200"
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  </Button>
                </motion.div>
              )
            })}
          </motion.div>
        </Card>

        {/* Footer */}
        <motion.div
          className="mt-16 text-center text-sm text-muted"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p>
            &copy; {new Date().getFullYear()} Grishmin Karki. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
