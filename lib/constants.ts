export const personalInfo = {
  name: 'Grishmin Karki',
  role: 'Senior Frontend Engineer',
  tagline: 'Crafting pixel-perfect, accessible web experiences with modern technologies',
  location: 'Kathmandu, Nepal',
  bio: 'Senior Frontend Engineer with 4+ years of experience specializing in building scalable, user-centric applications. Expert in translating complex Figma designs into high-performance, responsive interfaces. Passionate about design systems, testing, and creating seamless user experiences that drive business value. Currently exploring blockchain development on Cardano while maintaining expertise in modern frontend ecosystems.',
  email: 'grishminkarki7@gmail.com',
  github: 'https://github.com/karkigrishmin',
  linkedin: 'https://www.linkedin.com/in/grishmin/',
  twitter: 'https://twitter.com/karkigrishmin',
}

export const about = {
  title: 'About Me',
  description: [
    'As a Senior Frontend Engineer, I thrive at the intersection of design and code. My expertise lies in transforming Figma designs into pixel-perfect, production-ready applications that users love.',
    'I specialize in building robust component architectures and design systems that scale. My approach combines technical excellence with a deep understanding of user experience, ensuring every interface is not just functional, but delightful.',
    'Beyond frontend development, I\'m passionate about code quality and testing. I\'ve led initiatives to implement comprehensive testing strategies using Vitest and React Testing Library, significantly improving codebase reliability.',
    'Currently, I\'m expanding my horizons into blockchain development with Cardano, leveraging Elixir to build offchain libraries. This exploration complements my frontend expertise and opens new possibilities for decentralized applications.',
  ],
}

export const skills = {
  'Core Frontend': [
    'JavaScript (ES6+)',
    'TypeScript',
    'React.js',
    'Next.js',
    'Svelte / SvelteKit',
  ],
  'Styling & Design': [
    'Tailwind CSS',
    'CSS-in-JS',
    'Radix UI',
    'CVA',
    'Responsive Design',
    'Figma to Code',
  ],
  'State & Data': [
    'Redux Toolkit',
    'React Query / TanStack Query',
    'Svelte Store',
    'REST APIs',
    'GraphQL',
    'Axios / Orval',
  ],
  'Testing & Quality': [
    'Vitest',
    'Jest',
    'React Testing Library',
    'Svelte Testing Library',
    'Unit Testing',
    'Integration Testing',
  ],
  'Tools & Practices': [
    'Git / GitHub',
    'Performance Optimization',
    'Web Accessibility (a11y)',
    'Design Systems',
    'Component Libraries',
    'Code Reviews',
  ],
  'Exploring': [
    'Elixir',
    'Rust',
    'Cardano Blockchain',
    'Web3 Development',
  ],
}

export const experience = [
  {
    role: 'Senior Frontend Engineer',
    duration: '4+ years',
    highlights: [
      'Led comprehensive refactoring of list views into unified, reusable components, significantly improving code maintainability and reducing duplication',
      'Spearheaded the setup and integration of Vitest and React Testing Library, establishing testing best practices and improving overall code quality',
      'Created comprehensive design systems using TailwindCSS, Radix UI, and CVA, ensuring consistency across products and accelerating development',
      'Collaborated closely with founders on innovative features and UI/UX improvements, translating business requirements into elegant technical solutions',
      'Demonstrated expertise in pixel-perfect implementation from Figma designs, maintaining design fidelity while optimizing for performance',
      'Implemented robust authentication flows and state management solutions, handling complex user scenarios with elegance',
      'Mentored junior developers through code reviews and pair programming, fostering a culture of continuous learning',
    ],
  },
]

export const projects = [
  {
    id: 'edering',
    title: 'Edering - Restaurant Ordering Platform',
    description:
      'Mobile-first web application enabling customers to order food at restaurants without staff assistance. Includes a comprehensive provider dashboard for menu management and sales analytics.',
    tech: ['Svelte', 'SvelteKit', 'TypeScript'],
    highlights: [
      'Mobile-optimized UX',
      'Real-time ordering',
      'Admin analytics',
    ],
    link: 'https://github.com/karkigrishmin/Edering',
    image: '/projects/edering.jpg',
  },
  {
    id: 'sutra-sdk',
    title: 'Sutra Cardano SDK',
    description:
      'Offchain Cardano library for Elixir, empowering developers to build blockchain applications. Part of the Catalyst Fund13 initiative.',
    tech: ['Elixir', 'Cardano', 'Blockchain'],
    highlights: [
      'Open-source SDK',
      'Blockchain development',
      'Developer-friendly API',
    ],
    link: 'https://github.com/karkigrishmin/sutra-cardano-sdk',
    image: '/projects/sutra.jpg',
  },
  {
    id: 'dsa',
    title: 'DSA Implementation',
    description:
      'Comprehensive data structures and algorithms implementations in JavaScript, demonstrating problem-solving skills and computer science fundamentals.',
    tech: ['JavaScript', 'Algorithms', 'Data Structures'],
    highlights: [
      'Algorithm optimization',
      'Clean code practices',
      'Educational resource',
    ],
    link: 'https://github.com/karkigrishmin/DSA',
    image: '/projects/dsa.jpg',
  },
  {
    id: 'mesh-examples',
    title: 'Cardano Mesh Examples',
    description:
      'Comprehensive examples and integrations using MeshJS SDK for Cardano blockchain development, showcasing Web3 capabilities.',
    tech: ['TypeScript', 'Cardano', 'MeshJS', 'Web3'],
    highlights: [
      'Web3 integration',
      'Blockchain examples',
      'Developer tutorials',
    ],
    link: 'https://github.com/karkigrishmin/mesh-examples',
    image: '/projects/mesh.jpg',
  },
]

export const contact = {
  title: 'Get In Touch',
  description:
    'I\'m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!',
  email: personalInfo.email,
  social: [
    {
      name: 'GitHub',
      url: personalInfo.github,
      icon: 'Github',
    },
    {
      name: 'LinkedIn',
      url: personalInfo.linkedin,
      icon: 'Linkedin',
    },
    {
      name: 'Twitter',
      url: personalInfo.twitter,
      icon: 'Twitter',
    },
  ],
}
