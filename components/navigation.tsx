'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { LensToggle } from './lens-toggle'
import { Button } from './ui/button'
import { useReducedMotion } from '@/lib/use-reduced-motion'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
]

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function openCommandPalette() {
  window.dispatchEvent(new CustomEvent('open-command-palette'))
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const isScrolledRef = useRef(false)
  const reduced = useReducedMotion()

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 24
    if (scrolled !== isScrolledRef.current) {
      isScrolledRef.current = scrolled
      setIsScrolled(scrolled)
    }
  }, [])

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`)
        })
      },
      { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    )
    navItems.forEach((item) => {
      const element = document.querySelector(item.href)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
    setIsMobileMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
    setIsMobileMenuOpen(false)
  }

  const pillTransition = reduced ? { duration: 0 } : { duration: 0.4, ease: EASE_OUT_EXPO }

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4">
        <div
          className={cn(
            'flex items-center gap-1 rounded-full border px-1.5 py-1.5',
            'transition-[background-color,border-color,box-shadow] duration-500',
            isScrolled
              ? 'border-border bg-surface/80 shadow-lg shadow-black/[0.06] backdrop-blur-xl'
              : 'border-border/50 bg-surface/40 backdrop-blur-md'
          )}
        >
          {/* Monogram */}
          <motion.button
            onClick={scrollToTop}
            className="text-foreground hover:text-accent-ink rounded-full px-2.5 py-1 font-mono text-base font-bold tracking-widest uppercase transition-colors duration-200 sm:text-lg"
            whileHover={reduced ? undefined : { scale: 1.04 }}
            whileTap={reduced ? undefined : { scale: 0.95 }}
            aria-label="Scroll to top"
          >
            GK<span className="text-accent">.</span>
          </motion.button>

          {/* Desktop links with gliding lime indicator */}
          <div className="relative hidden items-center md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'focus-visible:outline-accent relative rounded-full px-2.5 py-1.5 font-mono text-[11px] tracking-[0.16em] uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 lg:px-3',
                    isActive ? 'text-accent-ink' : 'text-muted hover:text-foreground'
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navActivePill"
                      aria-hidden="true"
                      className="bg-accent/12 ring-accent/25 absolute inset-0 rounded-full ring-1"
                      transition={pillTransition}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </button>
              )
            })}
          </div>

          {/* Divider */}
          <span aria-hidden="true" className="bg-border mx-1 hidden h-5 w-px md:block" />

          {/* Right cluster */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={openCommandPalette}
              aria-label="Open command palette"
              className="text-muted hover:text-foreground hover:border-accent/50 border-border focus-visible:outline-accent hidden items-center gap-0.5 rounded-full border px-2.5 py-1.5 font-mono text-[10px] tracking-[0.1em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 sm:inline-flex"
            >
              <span aria-hidden="true">⌘</span>
              <span aria-hidden="true">K</span>
            </button>
            <LensToggle />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-foreground/5 size-9 rounded-full transition-colors duration-200 md:hidden"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile full-bleed overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.25, ease: 'easeOut' }}
            className="bg-background fixed inset-0 z-40 flex flex-col px-6 pt-28 pb-10 md:hidden"
          >
            <nav className="flex flex-1 flex-col justify-center gap-1">
              {navItems.map((item, i) => {
                const isActive = activeSection === item.href
                return (
                  <motion.button
                    key={item.name}
                    type="button"
                    onClick={() => scrollToSection(item.href)}
                    aria-current={isActive ? 'true' : undefined}
                    initial={reduced ? false : { opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: reduced ? 0 : 0.05 + i * 0.05,
                      duration: 0.3,
                      ease: EASE_OUT_EXPO,
                    }}
                    className="group focus-visible:outline-accent flex items-center gap-4 py-2 text-left focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'h-px transition-all duration-300',
                        isActive ? 'bg-accent w-8' : 'bg-border w-4 group-hover:w-6'
                      )}
                    />
                    <span
                      className={cn(
                        'font-display text-4xl leading-tight transition-colors',
                        isActive
                          ? 'text-accent-ink'
                          : 'text-foreground/80 group-hover:text-foreground'
                      )}
                    >
                      {item.name}
                    </span>
                  </motion.button>
                )
              })}
            </nav>

            <div className="text-muted flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase">
              <span className="bg-accent h-1 w-1 rounded-full" aria-hidden="true" />
              Senior Frontend Engineer — Kathmandu
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
