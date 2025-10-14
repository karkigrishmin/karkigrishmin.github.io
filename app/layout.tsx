import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'Grishmin Karki - Senior Frontend Engineer',
  description:
    'Senior Frontend Engineer with 4+ years of experience specializing in building scalable, user-centric applications. Expert in React, Next.js, TypeScript, and modern frontend technologies.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://grishmin.dev',
    title: 'Grishmin Karki - Senior Frontend Engineer',
    description:
      'Senior Frontend Engineer specializing in React, Next.js, and modern web technologies.',
    siteName: 'Grishmin Karki Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grishmin Karki - Senior Frontend Engineer',
    description:
      'Senior Frontend Engineer specializing in React, Next.js, and modern web technologies.',
    creator: '@karkigrishmin',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
