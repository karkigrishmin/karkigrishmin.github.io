'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { cn } from '@/lib/utils'
import { contact, personalInfo } from '@/lib/constants'
import { SectionLabel } from '@/components/primitives/section-label'
import { Reveal } from '@/components/primitives/reveal'
import { Button } from '@/components/ui/button'

const SOCIAL_URLS: Record<string, string> = {
  GitHub: personalInfo.github,
  LinkedIn: personalInfo.linkedin,
  Twitter: personalInfo.twitter,
}

function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard?.writeText(email)
      setCopied(true)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard unavailable — the mailto link remains the fallback.
    }
  }, [email])

  return (
    <>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={handleCopy}
        aria-label={copied ? 'Email copied to clipboard' : 'Copy email address'}
        className="text-muted hover:text-accent-ink hover:bg-foreground/5 size-9 rounded-full transition-colors"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </Button>
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? 'Email copied to clipboard' : ''}
      </span>
    </>
  )
}

export function Contact() {
  return (
    <>
      <section
        id="contact"
        className="relative mx-auto w-full max-w-6xl px-6 py-24 sm:py-32 lg:px-8"
      >
        <Reveal delay={0}>
          <SectionLabel>Contact</SectionLabel>
        </Reveal>

        <h2 className="sr-only">Get In Touch</h2>

        <Reveal delay={0.08}>
          <p
            className={cn(
              'font-display text-foreground mt-6 leading-[1.0] font-semibold tracking-[-0.03em] text-balance',
              'text-[clamp(2rem,7vw,5rem)]'
            )}
            aria-hidden="true"
          >
            Let&rsquo;s build something.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="text-muted mt-6 max-w-xl font-sans text-base leading-relaxed text-pretty sm:text-lg">
            {contact.description}
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2">
            <a
              href={`mailto:${personalInfo.email}`}
              className={cn(
                'font-display text-foreground inline-block break-all',
                'text-[clamp(1.15rem,3.5vw,2.25rem)] font-semibold tracking-[-0.02em]',
                'underline-offset-8 transition-colors duration-200',
                'hover:text-accent-ink hover:underline'
              )}
            >
              {personalInfo.email}
            </a>
            <CopyEmailButton email={personalInfo.email} />
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <div className="border-border mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t pt-10">
            {contact.social.map((social) => {
              const url = SOCIAL_URLS[social.name] ?? social.url
              return (
                <a
                  key={social.name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'text-muted font-mono text-xs tracking-[0.18em] uppercase',
                    'hover:text-accent-ink transition-colors duration-200'
                  )}
                >
                  {social.name}
                </a>
              )
            })}
          </div>
        </Reveal>
      </section>

      <footer className="mx-auto w-full max-w-6xl px-6 pb-10 lg:px-8">
        <div className="border-border flex flex-col gap-3 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted font-mono text-[0.65rem] tracking-[0.18em] uppercase">
            &copy; {new Date().getFullYear()} Grishmin Karki
          </p>
          <p className="text-muted font-mono text-[0.65rem] tracking-[0.18em] uppercase">
            Built with Next.js
            <span aria-hidden className="mx-2 opacity-40">
              ·
            </span>
            TypeScript
            <span aria-hidden className="mx-2 opacity-40">
              ·
            </span>
            Tailwind CSS
          </p>
        </div>
      </footer>
    </>
  )
}
