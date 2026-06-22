'use client'

import { useEffect, useState } from 'react'
import { Command } from 'cmdk'
import { useTheme } from 'next-themes'
import { useLens } from '@/lib/lens-context'
import { personalInfo } from '@/lib/constants'
import { cn } from '@/lib/utils'

const sectionIds = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Contact', id: 'contact' },
]

function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false
}

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { lens, toggleLens } = useLens()

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  function close() {
    setOpen(false)
  }

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    })
    close()
  }

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    close()
  }

  function handleToggleLens() {
    toggleLens()
    close()
  }

  function copyEmail() {
    navigator.clipboard?.writeText(personalInfo.email)
    close()
  }

  function emailMe() {
    window.location.href = `mailto:${personalInfo.email}`
    close()
  }

  function openLink(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer')
    close()
  }

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Command menu"
      overlayClassName={cn(
        'fixed inset-0 z-[100] bg-background/70 backdrop-blur-sm',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
      )}
      contentClassName={cn(
        'fixed left-1/2 top-[20%] z-[101] w-full max-w-xl -translate-x-1/2',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        'data-[state=closed]:slide-out-to-left-1/2 data-[state=open]:slide-in-from-left-1/2',
        'data-[state=closed]:slide-out-to-top-[10%] data-[state=open]:slide-in-from-top-[10%]'
      )}
    >
      <div
        className={cn(
          'bg-surface border-border mx-4 overflow-hidden rounded-xl border shadow-2xl',
          'font-sans'
        )}
        role="dialog"
        aria-label="Command menu"
      >
        {/* Input row */}
        <div className="border-border flex items-center border-b px-4">
          <Command.Input
            placeholder="Type a command or search…"
            className={cn(
              'text-foreground placeholder:text-muted h-12 flex-1 bg-transparent text-sm outline-none',
              'w-full py-3'
            )}
          />
          <span
            className="text-muted font-mono text-[10px] tracking-[0.12em] select-none"
            aria-hidden="true"
          >
            ⌘K
          </span>
        </div>

        {/* Command list */}
        <Command.List className="max-h-[340px] overflow-y-auto overscroll-contain p-2">
          <Command.Empty className="text-muted py-8 text-center text-sm">No results.</Command.Empty>

          {/* Navigate */}
          <Command.Group
            heading="Navigate"
            className={cn(
              '[&_[cmdk-group-heading]]:text-muted [&_[cmdk-group-heading]]:font-mono',
              '[&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:tracking-[0.18em]',
              '[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:uppercase',
              '[&_[cmdk-group-heading]]:select-none'
            )}
          >
            {sectionIds.map(({ label, id }) => (
              <Command.Item
                key={id}
                value={`navigate ${label} ${id}`}
                onSelect={() => scrollTo(id)}
                className={cn(
                  'text-foreground cursor-pointer rounded-md px-3 py-2 text-sm',
                  'transition-colors duration-100 outline-none select-none',
                  'aria-selected:bg-foreground/5 aria-selected:text-accent-ink',
                  'data-[selected=true]:bg-foreground/5 data-[selected=true]:text-accent-ink'
                )}
              >
                {label}
              </Command.Item>
            ))}
          </Command.Group>

          {/* Actions */}
          <Command.Group
            heading="Actions"
            className={cn(
              '[&_[cmdk-group-heading]]:text-muted [&_[cmdk-group-heading]]:font-mono',
              '[&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:tracking-[0.18em]',
              '[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:uppercase',
              '[&_[cmdk-group-heading]]:select-none'
            )}
          >
            <Command.Item
              value="toggle theme dark light"
              onSelect={toggleTheme}
              className={cn(
                'text-foreground cursor-pointer rounded-md px-3 py-2 text-sm',
                'transition-colors duration-100 outline-none select-none',
                'aria-selected:bg-foreground/5 aria-selected:text-accent-ink',
                'data-[selected=true]:bg-foreground/5 data-[selected=true]:text-accent-ink'
              )}
            >
              Toggle theme
            </Command.Item>
            <Command.Item
              value={lens === 'design' ? 'toggle code view' : 'toggle design view'}
              onSelect={handleToggleLens}
              className={cn(
                'text-foreground cursor-pointer rounded-md px-3 py-2 text-sm',
                'transition-colors duration-100 outline-none select-none',
                'aria-selected:bg-foreground/5 aria-selected:text-accent-ink',
                'data-[selected=true]:bg-foreground/5 data-[selected=true]:text-accent-ink'
              )}
            >
              {lens === 'design' ? 'Toggle code view' : 'Toggle design view'}
            </Command.Item>
            <Command.Item
              value="copy email"
              onSelect={copyEmail}
              className={cn(
                'text-foreground cursor-pointer rounded-md px-3 py-2 text-sm',
                'transition-colors duration-100 outline-none select-none',
                'aria-selected:bg-foreground/5 aria-selected:text-accent-ink',
                'data-[selected=true]:bg-foreground/5 data-[selected=true]:text-accent-ink'
              )}
            >
              Copy email
            </Command.Item>
            <Command.Item
              value="email me send mail"
              onSelect={emailMe}
              className={cn(
                'text-foreground cursor-pointer rounded-md px-3 py-2 text-sm',
                'transition-colors duration-100 outline-none select-none',
                'aria-selected:bg-foreground/5 aria-selected:text-accent-ink',
                'data-[selected=true]:bg-foreground/5 data-[selected=true]:text-accent-ink'
              )}
            >
              Email me
            </Command.Item>
          </Command.Group>

          {/* Links */}
          <Command.Group
            heading="Links"
            className={cn(
              '[&_[cmdk-group-heading]]:text-muted [&_[cmdk-group-heading]]:font-mono',
              '[&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:tracking-[0.18em]',
              '[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:uppercase',
              '[&_[cmdk-group-heading]]:select-none'
            )}
          >
            <Command.Item
              value="github source code"
              onSelect={() => openLink(personalInfo.github)}
              className={cn(
                'text-foreground cursor-pointer rounded-md px-3 py-2 text-sm',
                'transition-colors duration-100 outline-none select-none',
                'aria-selected:bg-foreground/5 aria-selected:text-accent-ink',
                'data-[selected=true]:bg-foreground/5 data-[selected=true]:text-accent-ink'
              )}
            >
              GitHub
            </Command.Item>
            <Command.Item
              value="linkedin profile"
              onSelect={() => openLink(personalInfo.linkedin)}
              className={cn(
                'text-foreground cursor-pointer rounded-md px-3 py-2 text-sm',
                'transition-colors duration-100 outline-none select-none',
                'aria-selected:bg-foreground/5 aria-selected:text-accent-ink',
                'data-[selected=true]:bg-foreground/5 data-[selected=true]:text-accent-ink'
              )}
            >
              LinkedIn
            </Command.Item>
            <Command.Item
              value="twitter x social"
              onSelect={() => openLink(personalInfo.twitter)}
              className={cn(
                'text-foreground cursor-pointer rounded-md px-3 py-2 text-sm',
                'transition-colors duration-100 outline-none select-none',
                'aria-selected:bg-foreground/5 aria-selected:text-accent-ink',
                'data-[selected=true]:bg-foreground/5 data-[selected=true]:text-accent-ink'
              )}
            >
              Twitter
            </Command.Item>
            <Command.Item
              value="resume cv linkedin"
              onSelect={() => openLink(personalInfo.linkedin)}
              className={cn(
                'text-foreground cursor-pointer rounded-md px-3 py-2 text-sm',
                'transition-colors duration-100 outline-none select-none',
                'aria-selected:bg-foreground/5 aria-selected:text-accent-ink',
                'data-[selected=true]:bg-foreground/5 data-[selected=true]:text-accent-ink'
              )}
            >
              Résumé
            </Command.Item>
          </Command.Group>
        </Command.List>
      </div>
    </Command.Dialog>
  )
}
