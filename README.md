# Grishmin Karki - Portfolio Website

A modern, performant, and accessible portfolio website built with the latest web technologies.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15.5-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)

## Features

- **Latest Tech Stack**: Next.js 15.5, React 19, TypeScript 5, Tailwind CSS 4
- **Modern Design**: Minimalist, clean interface with smooth animations using Framer Motion
- **Dark/Light Mode**: Seamless theme switching with persistent preferences
- **Fully Responsive**: Mobile-first design that looks great on all devices
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
git clone https://github.com/karkigrishmin/portfolio.git
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
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm test` - Run tests with Vitest
- `npm run test:ui` - Run tests with UI

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
│   │   ├── experience.tsx
│   │   ├── projects.tsx
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
- Skills
- Experience
- Projects
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

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/karkigrishmin/portfolio)

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- Cloudflare Pages
- AWS Amplify
- Railway
- Render

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
