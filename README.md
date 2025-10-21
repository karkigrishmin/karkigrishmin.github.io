# Grishmin Karki - Portfolio Website

A modern, performant, and accessible portfolio website built with the latest web technologies.

[![Live Site](https://img.shields.io/badge/Live-karkigrishmin.github.io-success?logo=github)](https://karkigrishmin.github.io/)
![Portfolio Preview](https://img.shields.io/badge/Next.js-15.5-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)

## Features

- **Latest Tech Stack**: Next.js 15.5, React 19, TypeScript 5, Tailwind CSS 4
- **Modern Design**: Minimalist, clean interface with smooth animations using Framer Motion
- **Dark/Light Mode**: Seamless theme switching with persistent preferences
- **Auto-Rotating Testimonials**: Interactive carousel with Embla Carousel, read more/less functionality
- **Timeline Experience**: Beautiful timeline layout showcasing 6 professional positions
- **Fully Responsive**: Optimized for all devices (320px to 1920px+) with mobile-first design
- **Accessible**: WCAG 2.1 AA compliant with semantic HTML and ARIA labels
- **Performant**: Optimized for Lighthouse scores 95+
- **Type-Safe**: Full TypeScript coverage for reliability
- **Tested**: Vitest + React Testing Library setup for quality assurance
- **SEO Optimized**: Meta tags, Open Graph, and structured data

## Tech Stack

### Core
- **Framework**: [Next.js 15.5](https://nextjs.org/) with App Router & Turbopack
- **React**: [React 19](https://react.dev/) with concurrent rendering
- **TypeScript**: [TypeScript 5](https://www.typescriptlang.org/) with strict mode

### Styling
- **CSS Framework**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/)
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/) with autoplay plugin
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utilities**: [CVA](https://cva.style/), clsx, tailwind-merge

### Testing
- **Test Runner**: [Vitest 3](https://vitest.dev/)
- **Testing Library**: [@testing-library/react](https://testing-library.com/react)
- **DOM Testing**: jsdom

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20.19+ or 22.12+)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/karkigrishmin/karkigrishmin.github.io.git
cd grishmin-portfolio-2025
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

The page will automatically reload when you make changes.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build with static export
- `npm test` - Run tests with Vitest
- `npm run test:ui` - Run tests with UI

> **Note**: This project uses Next.js static export for deployment to GitHub Pages.

## Project Structure

```
grishmin-portfolio-2025/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main landing page
│   ├── globals.css         # Global styles & design tokens
│   └── favicon.ico
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── badge.tsx
│   ├── sections/           # Page sections
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── skills.tsx
│   │   ├── experience.tsx  # Timeline with 6 jobs
│   │   ├── projects.tsx    # 6 professional projects
│   │   ├── testimonials.tsx # Carousel with 5 LinkedIn recommendations
│   │   └── contact.tsx
│   ├── navigation.tsx      # Navigation bar
│   ├── theme-provider.tsx  # Theme context
│   └── theme-toggle.tsx    # Theme switcher
├── lib/
│   ├── utils.ts            # Utility functions
│   └── constants.ts        # Content data
├── tests/
│   ├── setup.ts            # Test configuration
│   └── theme-toggle.test.tsx
├── public/                 # Static assets
├── vitest.config.ts        # Vitest configuration
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## Customization

### Content

All content is centralized in `lib/constants.ts`. Update this file to change:
- Personal information
- Skills (6 categories with technologies)
- Experience (6 professional positions with timeline data)
- Projects (6 client projects with live links)
- Testimonials (5 LinkedIn recommendations)
- Social links

### Design

Design tokens are defined in `app/globals.css`:
- Colors (light/dark mode)
- Typography
- Spacing
- Borders

### Components

All components are modular and reusable:
- UI components in `components/ui/`
- Section components in `components/sections/`
- Styled with Tailwind CSS
- Animated with Framer Motion

## Deployment

### GitHub Pages (Current Setup)

This site is deployed to **GitHub Pages** with automatic deployment via GitHub Actions.

**Live Site**: [https://karkigrishmin.github.io/](https://karkigrishmin.github.io/)

**How it works**:
1. Push changes to the `main` branch
2. GitHub Actions automatically builds the site
3. Static files are deployed to GitHub Pages
4. Site updates within 1-2 minutes

**To deploy your own**:
1. Fork this repository
2. Enable GitHub Pages in repository settings
3. Set source to "GitHub Actions"
4. Push to `main` branch to trigger deployment

The deployment workflow is defined in `.github/workflows/deploy.yml`.

### Alternative Platforms

The project can also be deployed to:
- **Vercel**: Import from GitHub and deploy instantly
- **Netlify**: Drag and drop the `out/` folder after running `npm run build`
- **Cloudflare Pages**: Connect repository and configure build settings
- **AWS Amplify**: Deploy with continuous deployment from GitHub
- **Railway** / **Render**: Support Next.js static exports

## Performance

Optimized for excellent Lighthouse scores:
- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

Optimization techniques:
- Next.js Image component for optimized images
- Code splitting with dynamic imports
- Font optimization with next/font
- Lazy loading for sections
- Turbopack for faster builds

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

MIT License - feel free to use this project for your own portfolio!

## Author

**Grishmin Karki**
- GitHub: [@karkigrishmin](https://github.com/karkigrishmin)
- LinkedIn: [grishmin](https://www.linkedin.com/in/grishmin/)
- Twitter: [@karkigrishmin](https://twitter.com/karkigrishmin)
- Email: grishminkarki7@gmail.com

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

Made with ❤️ by Grishmin Karki
