import type { NextConfig } from 'next'

// Empty for production (served at the domain root); set to '/dev' by the dev
// preview workflow so assets resolve under karkigrishmin.github.io/dev/.
const basePath = process.env.PAGES_BASE_PATH ?? ''

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  images: {
    unoptimized: true,
  },

  // Security headers for production-grade protection
  // NOTE: These headers won't work with GitHub Pages (static export)
  // but are included for best practices if deployed to Vercel/Netlify/server
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval';
              style-src 'self' 'unsafe-inline';
              img-src 'self' https: data:;
              font-src 'self' data:;
              connect-src 'self';
              frame-ancestors 'none';
            `
              .trim()
              .replace(/\s{2,}/g, ' '),
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
}

export default nextConfig
