'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { Button } from './ui/button'

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    // Check scroll position on mount
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Track active section with IntersectionObserver
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

    // Observe all sections
    navItems.forEach((item) => {
      const element = document.querySelector(item.href)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false) // Close mobile menu after navigation
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-1.5 sm:py-2 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled
              ? 'backdrop-blur-2xl border border-border/70 rounded-full px-4 py-1.5 sm:px-6 sm:py-2 md:px-10 md:py-3 ring-1 ring-offset-0'
              : 'px-4 py-1.5 sm:px-6 sm:py-2 md:px-10 md:py-3'
          }`}
          style={
            isScrolled
              ? {
                  backgroundColor: 'color-mix(in srgb, var(--card-bg) 80%, transparent)',
                  backgroundImage: 'linear-gradient(to right, color-mix(in srgb, var(--primary) 8%, transparent), color-mix(in srgb, var(--accent) 8%, transparent))',
                  '--tw-ring-color': 'color-mix(in srgb, var(--primary) 20%, transparent)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35), 0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 0 0 1px color-mix(in srgb, var(--primary) 8%, transparent)',
                } as React.CSSProperties
              : undefined
          }
          initial={false}
          animate={{
            scale: isScrolled ? 1 : 1,
            y: isScrolled ? 0 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {/* Logo/Name */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight bg-clip-text text-transparent hover:scale-110 transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, var(--primary), var(--accent))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            GK
          </motion.button>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href
              return (
                <motion.div key={item.name} className="relative">
                  <Button
                    variant="ghost"
                    onClick={() => scrollToSection(item.href)}
                    className={`text-sm font-medium rounded-md px-4 py-2 transition-all duration-300 ${
                      isActive
                        ? 'text-primary bg-primary/15'
                        : 'hover:text-primary hover:bg-primary/10'
                    }`}
                  >
                    {item.name}
                  </Button>
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 rounded-full"
                      style={{
                        background: 'linear-gradient(to right, var(--primary), var(--accent))',
                      }}
                      layoutId="activeIndicator"
                      initial={{ opacity: 0, y: -2 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Mobile Menu Toggle & Theme Toggle */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:scale-110 hover:bg-primary/10 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="md:hidden overflow-hidden backdrop-blur-2xl border border-border/70 mt-3 rounded-2xl ring-1"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--card-bg) 80%, transparent)',
                backgroundImage: 'linear-gradient(to bottom, color-mix(in srgb, var(--primary) 8%, transparent), color-mix(in srgb, var(--accent) 8%, transparent))',
                '--tw-ring-color': 'color-mix(in srgb, var(--primary) 20%, transparent)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35), 0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 0 0 1px color-mix(in srgb, var(--primary) 8%, transparent)',
              } as React.CSSProperties}
            >
              <div className="flex flex-col p-4 space-y-1">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                    >
                      <Button
                        variant="ghost"
                        onClick={() => scrollToSection(item.href)}
                        className={`w-full justify-start text-left rounded-xl px-4 py-3 transition-all duration-300 ${
                          isActive
                            ? 'text-primary bg-primary/15 font-semibold'
                            : 'hover:text-primary hover:bg-primary/10'
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          {isActive && (
                            <motion.span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ background: 'linear-gradient(to right, var(--primary), var(--accent))' }}
                              layoutId="mobileActiveIndicator"
                            />
                          )}
                          {item.name}
                        </span>
                      </Button>
                      {index < navItems.length - 1 && (
                        <div
                          className="h-px mx-4 my-1"
                          style={{ background: 'color-mix(in srgb, var(--border) 30%, transparent)' }}
                        />
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
