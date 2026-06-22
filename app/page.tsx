import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Skills } from '@/components/sections/skills'
import { Experience } from '@/components/sections/experience'
import { Projects } from '@/components/sections/projects'
import { GithubActivity } from '@/components/sections/github-activity'
import { Testimonials } from '@/components/sections/testimonials'
import { Contact } from '@/components/sections/contact'
import { LimeThread } from '@/components/primitives/lime-thread'

export default function Home() {
  return (
    <main className="relative">
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 flex justify-center">
        <LimeThread className="h-full w-full max-w-6xl px-6 lg:px-8" />
      </div>
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GithubActivity />
        <Testimonials />
        <Contact />
      </div>
    </main>
  )
}
