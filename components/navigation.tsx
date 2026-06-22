'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { LensToggle } from './lens-toggle'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const isScrolledRef = useRef(false)

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 50
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
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    navItems.forEach((item) => {
      const element = document.querySelector(item.href)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    element?.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 py-1.5 transition-all duration-500 sm:py-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className={cn(
            'flex items-center justify-between transition-all duration-500',
            isScrolled
              ? 'border-border bg-surface/70 rounded-full border px-4 py-1.5 backdrop-blur-xl sm:px-6 sm:py-2 md:px-8 md:py-2.5'
              : 'px-4 py-1.5 sm:px-6 sm:py-2 md:px-10 md:py-3'
          )}
          initial={false}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {/* Logo monogram */}
          <motion.button
            onClick={() => {
              const prefersReducedMotion = window.matchMedia(
                '(prefers-reduced-motion: reduce)'
              ).matches
              window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
            }}
            className="text-foreground hover:text-accent-ink font-mono text-lg font-bold tracking-widest uppercase transition-colors duration-200 sm:text-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            GK<span className="text-accent">.</span>
          </motion.button>

          {/* Nav links — desktop */}
          <div className="hidden items-center gap-0.5 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href
              return (
                <motion.div key={item.name} className="relative">
                  <Button
                    variant="ghost"
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      'rounded-md px-4 py-2 font-mono text-xs tracking-[0.18em] uppercase transition-colors duration-200',
                      isActive
                        ? 'text-accent-ink hover:bg-foreground/5'
                        : 'text-muted hover:text-foreground hover:bg-foreground/5'
                    )}
                  >
                    {item.name}
                  </Button>
                  {isActive && (
                    <motion.div
                      className="bg-accent absolute bottom-0.5 left-1/2 h-px w-4 -translate-x-1/2 rounded-full"
                      layoutId="activeIndicator"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                    />
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Right cluster: LensToggle + ThemeToggle + mobile hamburger */}
          <div className="flex items-center gap-2">
            <LensToggle className="hidden md:flex" />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-foreground/5 transition-colors duration-200 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </motion.div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="border-border bg-surface/90 mt-2 overflow-hidden rounded-2xl border backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col p-3">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04, duration: 0.2, ease: 'easeOut' }}
                    >
                      <Button
                        variant="ghost"
                        onClick={() => scrollToSection(item.href)}
                        className={cn(
                          'w-full justify-start rounded-xl px-4 py-2.5 font-mono text-xs tracking-[0.18em] uppercase transition-colors duration-200',
                          isActive
                            ? 'text-accent-ink hover:bg-foreground/5'
                            : 'text-muted hover:text-foreground hover:bg-foreground/5'
                        )}
                      >
                        <span className="flex items-center gap-2.5">
                          {isActive && (
                            <motion.span
                              className="bg-accent h-1 w-1 shrink-0 rounded-full"
                              layoutId="mobileActiveIndicator"
                            />
                          )}
                          {item.name}
                        </span>
                      </Button>
                      {index < navItems.length - 1 && (
                        <div className="bg-border mx-4 my-0.5 h-px" />
                      )}
                    </motion.div>
                  )
                })}

                {/* LensToggle inside mobile menu */}
                <div className="border-border mt-2 border-t px-2 pt-3">
                  <LensToggle className="w-full justify-center" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
