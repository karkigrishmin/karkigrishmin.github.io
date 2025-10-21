export const personalInfo = {
  name: 'Grishmin Karki',
  role: 'Senior Frontend Engineer',
  tagline: 'Crafting pixel-perfect, accessible web experiences with modern technologies',
  location: 'Kathmandu, Nepal',
  bio: '4+ years of experience specializing in building scalable, high-performance applications. Expert in translating complex Figma designs into pixel-perfect, responsive interfaces. Proven track record of delivering measurable results—achieved 39.5% performance improvement through state management optimization. Passionate about design systems, comprehensive testing strategies, and creating seamless user experiences that drive business value across Web2 and Web3 ecosystems.',
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
    'Recently, I achieved a 39.5% performance improvement by migrating state management to React Query and Zustand. My experience spans both Web2 and Web3 ecosystems—from building decentralized cloud storage platforms on Cardano blockchain to optimizing data-heavy enterprise applications. I focus on delivering measurable results through performance optimization, clean architecture, and modern development practices.',
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
    company: 'Qluster AI',
    role: 'Senior Frontend Engineer',
    type: 'Full-time',
    duration: 'Sep 2024 - Present',
    period: '1 yr 2 mos',
    location: 'Los Angeles, California, United States · Remote',
    highlights: [
      'Migrated application state management from context to React Query and Zustand, achieving 39.5% performance improvement and eliminating duplicate API calls',
      'Led refactoring of multiple list views into unified, reusable components, improving filtering, searching, pagination, and caching functionalities',
      'Spearheaded setup of Vitest and React Testing Library, developing comprehensive tests that improved code quality and reduced regression risks',
      'Collaborated closely with founder to develop innovative features and improve UI/UX design, shaping product direction',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'React Query', 'Zustand', 'Vitest', 'RTL'],
  },
  {
    company: 'Iagon',
    role: 'Frontend Web3 Developer',
    type: 'Full-time',
    duration: 'Jan 2024 - Sep 2024',
    period: '9 mos',
    location: 'Oslo, Norway · Remote',
    highlights: [
      'Built decentralized cloud storage platform on Cardano blockchain',
      'Implemented Web3 wallet integration using lucid-cardano library',
      'Developed responsive interfaces with Next.js and TypeScript',
      'Integrated REST APIs and conducted thorough code reviews',
    ],
    tech: ['Next.js', 'TypeScript', 'Cardano', 'lucid-cardano', 'Tailwind CSS', 'React Query', 'shadcn', 'Web3'],
  },
  {
    company: 'Rara Labs',
    role: 'Frontend Engineer',
    type: 'Full-time',
    duration: 'Jun 2023 - Jan 2024',
    period: '8 mos',
    location: 'Hybrid',
    highlights: [
      'Developed custom Rara Design System using Storybook',
      'Implemented comprehensive unit testing with Jest and React Testing Library',
      'Built scalable React applications with TypeScript and Next.js',
      'Integrated GraphQL APIs and worked with multiple UI libraries',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'GraphQL', 'Storybook', 'Jest', 'RTL', 'Tailwind CSS', 'ChakraUI'],
  },
  {
    company: 'AgileData.io',
    role: 'Frontend Developer',
    type: 'Contract',
    duration: 'Oct 2022 - Dec 2023',
    period: '1 yr 3 mos',
    location: 'Wellington, New Zealand · Remote',
    highlights: [
      'Delivered contract work for enterprise data management platform',
      'Built complex data workflow interfaces with React and TypeScript',
      'Implemented custom data processing and visualization features',
    ],
    tech: ['React', 'TypeScript', 'Data Processing'],
  },
  {
    company: 'EnthuZiastic',
    role: 'Frontend Developer',
    type: 'Full-time',
    duration: 'Jan 2022 - May 2023',
    period: '1 yr 5 mos',
    location: 'San Jose, California, United States · Remote',
    highlights: [
      'Developed live learning platform with SvelteKit serving 10K+ learners',
      'Built Chrome extensions and custom design system with Storybook',
      'Implemented state management with Redux and React Query',
      'Created comprehensive unit tests using Vitest and Jest',
    ],
    tech: ['SvelteKit', 'Svelte', 'React', 'TypeScript', 'Redux', 'React Query', 'Vitest', 'GraphQL', 'Tailwind CSS'],
  },
  {
    company: 'WsCodeLabs',
    role: 'Frontend Developer',
    type: 'Full-time',
    duration: 'Apr 2020 - Sep 2022',
    period: '2 yrs 6 mos',
    location: 'Remote',
    highlights: [
      'Built responsive web applications with React, Svelte, and TypeScript',
      'Implemented modern styling solutions with Tailwind CSS',
      'Developed UI components using Ant Design',
      'Collaborated on multiple client projects with focus on code quality',
    ],
    tech: ['React', 'Svelte', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Ant Design', 'CSS'],
  },
]

export const projects = [
  {
    id: 'qluster',
    title: 'Qluster AI - Data Workflow Platform',
    description:
      'AI-powered data ingestion platform that transforms raw, messy CSV/JSON into clean, trusted datasets. Features intelligent matching, data quarantine, and complete data lineage tracking.',
    tech: ['React', 'Next.js', 'TypeScript', 'AI/ML'],
    highlights: [
      'Intelligent data matching',
      'Data quarantine system',
      'Complete lineage tracking',
    ],
    link: 'https://www.qluster.ai/',
    image: '/projects/qluster.jpg',
  },
  {
    id: 'enthu',
    title: 'Enthu.AI - Live Learning Platform',
    description:
      'Global people-to-people live learning network with 1000+ interactive courses taught by expert instructors. Serves 10,000+ learners across 10+ countries.',
    tech: ['SvelteKit', 'TypeScript', 'Stripe', 'PayPal'],
    highlights: [
      '10K+ active learners',
      'Live interactive courses',
      'Global learning platform',
    ],
    link: 'https://enthu.com/',
    image: '/projects/enthu.jpg',
  },
  {
    id: 'agiledata',
    title: 'AgileData - Data Management Platform',
    description:
      'Enterprise data management platform that solves complex data problems with elegant solutions. Provides magical, flexible data workflows for organizations.',
    tech: ['React', 'TypeScript', 'Data Processing'],
    highlights: [
      'Enterprise data handling',
      'Custom data workflows',
      'Integration solutions',
    ],
    link: 'https://agiledata.io/',
    image: '/projects/agiledata.jpg',
  },
  {
    id: 'heliski',
    title: 'Heliski International - Adventure Marketplace',
    description:
      'Search, compare and book helicopter skiing experiences worldwide. Connects adventure seekers with operators across multiple countries with real-time availability.',
    tech: ['Next.js', 'Redux', 'Google Maps API', 'TypeScript'],
    highlights: [
      'Global marketplace',
      'Real-time booking',
      'Operator comparison',
    ],
    link: 'https://heliskiinternational.com/',
    image: '/projects/heliski.jpg',
  },
  {
    id: 'iagon',
    title: 'Iagon - Decentralized Cloud Storage',
    description:
      'Blockchain-based decentralized cloud storage and computing platform on Cardano. Provides secure, distributed alternative to centralized cloud services.',
    tech: ['Next.js', 'React', 'Cardano', 'Web3'],
    highlights: [
      'Decentralized storage',
      'Blockchain integration',
      'Web3 cloud solution',
    ],
    link: 'https://iagon.com/',
    image: '/projects/iagon.jpg',
  },
  {
    id: 'tigg',
    title: 'Tigg - Cloud Accounting Software',
    description:
      'Nepal\'s #1 cloud-based ERP and accounting software serving 10,000+ users across 1,500 businesses. Features AI-powered invoice processing and IRD certification.',
    tech: ['React', 'TypeScript', 'Cloud ERP', 'AI'],
    highlights: [
      '10K+ business users',
      'IRD-certified invoicing',
      'AI-powered automation',
    ],
    link: 'https://www.tiggapp.com/',
    image: '/projects/tigg.jpg',
  },
]

export const testimonials = [
  {
    id: '1',
    name: 'Sep Dehpour',
    role: 'Founder',
    company: 'Qluster Data',
    quote:
      'I\'ve had the pleasure of working with Grishmin for over a year as our frontend engineer on an early-stage data platform. He\'s a clear communicator, asks thoughtful questions, cares deeply about the product, and has consistently made himself available across time zones—even when that meant late nights to maximize overlap. On the engineering side, he delivered solid React work and stepped in on a few tricky issues. Over time he leaned into newer workflows (AI-assisted development, stronger testing practices, Playwright) and kept improving. He shines when goals are clear and the feedback loop is tight—he moves quickly, keeps you posted, and gets things across the line.',
    linkedinUrl: 'https://www.linkedin.com/in/sepehr/',
    image: null,
  },
  {
    id: '2',
    name: 'Aayush Twayana',
    role: 'Engineer | Designer | Illustrator',
    company: 'Iagon',
    quote:
      'Had a chance of working together with Grishmin on a project where he worked as a Frontend Engineer. Grishmin is an exceptional developer with a keen eye for design and a deep understanding of user experience. His ability to translate complex designs into high-quality, responsive, and accessible web applications, without sacrificing the quality of the code is truly impressive. Beyond the technical expertise, Grishmin is a great team player and an even good friend, always willing to help others and share the knowledge he has, be it technical or something personal.',
    linkedinUrl: 'https://www.linkedin.com/in/aayush-twayana-ba811817b/',
    image: null,
  },
  {
    id: '3',
    name: 'Ravi Shrestha',
    role: 'Web3 Engineer',
    company: 'Iagon',
    quote:
      'Highly knowledgeable, deep understanding of what he was doing and a good human being.',
    linkedinUrl: 'https://www.linkedin.com/in/ravi-shrestha-98064b177/',
    image: null,
  },
  {
    id: '4',
    name: 'Anuj Timsina',
    role: 'Frontend Engineer',
    company: 'Iagon',
    quote:
      'I had the pleasure of working with Grishmin Karki as a frontend developer at NGIT Solutions Pvt. Ltd. He always follows best practices and coding standards, and he\'s very thorough when checking pull requests, making sure everything meets high standards. He\'s genuinely passionate about frontend development and prefers to focus on mastering it rather than moving into other areas. I highly recommend him to any team looking for a dedicated and skilled frontend developer.',
    linkedinUrl: 'https://www.linkedin.com/in/anuj-timsina/',
    image: null,
  },
  {
    id: '5',
    name: 'Aayush Acharya',
    role: 'PhD CS @ Temple University',
    company: 'Rara Labs',
    quote:
      'I had the pleasure of working alongside Grishmin on a project. His unwavering commitment to excellence and meticulous attention to detail significantly elevated the quality of our work. He is a hardworking and talented frontend developer and I highly recommend him for any web development team.',
    linkedinUrl: 'https://www.linkedin.com/in/aayush-acharya/',
    image: null,
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
