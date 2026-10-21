import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    slug: 'ark-media',
    title: 'Ark Media',
    description: 'Tech and product consultant. Rebuilt the website from scratch to support unified, multi-platform subscriptions across podcasts, newsletters, and community.',
    longDescription: 'Tech and product consultant for Ark Media. Rebuilt the website from scratch to support new multi-platform subscriptions, giving users a single, clear place to manage their podcast, newsletter, and community memberships. Also built internal tools that help the team prepare and research podcast episodes, and that surface insights into revenue and overall business health.',
    image: '/images/projects/ark-media.jpg',
    tags: ['Product Strategy', 'Subscriptions', 'Internal Tools', 'Analytics'],
    liveUrl: 'https://arkmedia.org/',
    featured: true,
  },
  {
    slug: 'via-remix-scheduling',
    title: 'Via Remix Scheduling',
    description: 'Transit planning and scheduling platform helping transportation agencies build optimized schedules with data-driven recommendations.',
    longDescription: 'Worked on Remix Scheduling at Via, a transit planning software platform used by cities and transit authorities worldwide. Built tools that combine machine optimization with human expertise, enabling planners to leverage algorithmic recommendations while applying their domain knowledge to create complex transit schedules.',
    image: '/images/projects/remix-scheduling.jpg',
    tags: ['TypeScript', 'React', 'Ruby on Rails', 'Python', 'PostgreSQL', 'AWS', 'Terraform'],
    liveUrl: 'https://ridewithvia.com/solutions/remix/scheduling',
    featured: true,
  },
  {
    slug: 'stealth-fintech-startup',
    title: 'Stealth Fintech Startup',
    description: 'Founding engineer at an early-stage fintech tackling dispute management. Took the product from blank repo to launched platform.',
    longDescription: 'Founding engineering hire at an early-stage fintech tackling the dispute management space. Took the product from a blank repository to a launched platform with paying customers. Owned frontend architecture, technology decisions, testing strategy, and release processes. Built the primary case-management application alongside a second tool that streamlines upstream data, enabling greater automation and helping clients navigate regulatory complexity more efficiently.',
    image: '/images/projects/fintech.jpg',
    tags: ['TypeScript', 'React', 'Kotlin', 'Spring Boot', 'PostgreSQL', 'AWS', 'Terraform'],
    featured: true,
  },
  {
    slug: 'practec-team-lead',
    title: 'Practec',
    description: 'Team lead for four intern development teams, bridging client requirements and engineering execution to deliver software for real clients.',
    longDescription: 'Team lead at Practec, managing four teams of intern developers building software for external clients. Act as the interface between client and team: gathering and clarifying requirements, then translating them into well-scoped, implementable tasks. Keep the teams unblocked, ensure communication flows smoothly in both directions between developers and clients, and provide hands-on technical expertise and guidance on architecture, code quality, and delivery.',
    image: '/images/projects/practec.jpg',
    tags: ['Technical Leadership', 'Mentorship', 'Requirements Analysis', 'Project Management'],
    liveUrl: 'https://www.linkedin.com/company/practec-software/',
    featured: true,
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
