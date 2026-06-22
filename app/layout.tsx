import type { Metadata, Viewport } from 'next'
import { Fraunces, Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { LensProvider } from '@/lib/lens-context'
import { GrainOverlay } from '@/components/primitives/grain-overlay'

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'swap',
  axes: ['opsz', 'SOFT', 'WONK'],
})

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'Grishmin Karki - Senior Frontend Engineer',
  description:
    'Senior Frontend Engineer with 4+ years of experience specializing in building scalable, user-centric applications. Expert in React, Next.js, TypeScript, and modern frontend technologies.',
  keywords: [
    'Grishmin Karki',
    'Frontend Engineer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'Svelte',
    'Web Development',
    'Kathmandu',
    'Nepal',
  ],
  authors: [{ name: 'Grishmin Karki', url: 'https://github.com/karkigrishmin' }],
  creator: 'Grishmin Karki',
  metadataBase: new URL('https://karkigrishmin.github.io'),
  alternates: {
    canonical: 'https://karkigrishmin.github.io/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://karkigrishmin.github.io/',
    title: 'Grishmin Karki - Senior Frontend Engineer',
    description:
      'Senior Frontend Engineer with 4+ years building scalable React and Next.js applications. Specialized in TypeScript, Web3, and modern frontend architecture. Based in Kathmandu, Nepal.',
    siteName: 'Grishmin Karki Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Grishmin Karki - Senior Frontend Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grishmin Karki - Senior Frontend Engineer',
    description:
      'Senior Frontend Engineer with 4+ years building scalable React and Next.js applications. Specialized in TypeScript, Web3, and modern frontend architecture.',
    creator: '@karkigrishmin',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'kqBOlG_qw1-7n7j1t8JJRZO2npkkAGWvPoyszPBGf80',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Grishmin Karki',
    alternateName: 'Grishmin',
    jobTitle: 'Senior Frontend Engineer',
    description:
      'Senior Frontend Engineer with 4+ years of experience specializing in building scalable, user-centric applications.',
    url: 'https://karkigrishmin.github.io',
    image: 'https://karkigrishmin.github.io/og-image.png',
    sameAs: [
      'https://github.com/karkigrishmin',
      'https://linkedin.com/in/karkigrishmin',
      'https://twitter.com/karkigrishmin',
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Svelte',
      'Web3',
      'Blockchain',
      'Frontend Development',
      'Web Development',
      'UI/UX',
      'Responsive Design',
      'Tailwind CSS',
      'Framer Motion',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Tribhuvan University',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kathmandu',
      addressCountry: 'Nepal',
    },
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${fraunces.variable} ${geist.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <LensProvider>
            <GrainOverlay />
            {children}
          </LensProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
