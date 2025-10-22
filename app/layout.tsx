import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
  weight: ['600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
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
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
