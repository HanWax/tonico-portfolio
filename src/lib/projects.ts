import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    slug: 'ai-workflow-automation',
    title: 'AI Workflow Automation Platform',
    description: 'Built an intelligent automation platform that reduces manual data processing by 80% using custom AI pipelines.',
    longDescription: 'Developed a comprehensive AI-powered workflow automation platform for a logistics company. The system uses natural language processing to understand incoming requests, automatically routes them to appropriate handlers, and generates responses using GPT-4. Integrated with existing CRM and ERP systems.',
    image: '/images/projects/ai-workflow.jpg',
    tags: ['AI/ML', 'Python', 'React', 'PostgreSQL'],
    featured: true,
  },
  {
    slug: 'saas-dashboard',
    title: 'SaaS Analytics Dashboard',
    description: 'Full-stack analytics dashboard with real-time data visualization and custom reporting features.',
    longDescription: 'Designed and built a modern SaaS analytics platform featuring real-time data streaming, interactive charts, and automated report generation. The platform handles millions of events daily with sub-second query performance.',
    image: '/images/projects/dashboard.jpg',
    tags: ['TypeScript', 'React', 'Node.js', 'ClickHouse'],
    featured: true,
  },
  {
    slug: 'mobile-fintech-app',
    title: 'Mobile Fintech Application',
    description: 'Cross-platform mobile app for personal finance management with bank integrations.',
    longDescription: 'Led development of a React Native fintech application featuring bank account aggregation, spending analytics, and budgeting tools. Implemented secure Open Banking integrations and biometric authentication.',
    image: '/images/projects/fintech.jpg',
    tags: ['React Native', 'TypeScript', 'Node.js', 'Open Banking'],
    featured: true,
  },
  {
    slug: 'ecommerce-platform',
    title: 'E-commerce Platform Rebuild',
    description: 'Complete rebuild of legacy e-commerce platform with modern tech stack and improved performance.',
    image: '/images/projects/ecommerce.jpg',
    tags: ['Next.js', 'TypeScript', 'Shopify', 'Tailwind'],
    featured: false,
  },
  {
    slug: 'developer-tools',
    title: 'Internal Developer Tools',
    description: 'Suite of internal tools to streamline development workflows and improve team productivity.',
    image: '/images/projects/devtools.jpg',
    tags: ['Go', 'React', 'Docker', 'CLI'],
    featured: false,
  },
]

export function getAllProjects(): Project[] {
  return projects
}

export function getFeaturedProjects(limit?: number): Project[] {
  const featured = projects.filter(p => p.featured)
  return limit ? featured.slice(0, limit) : featured
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}
