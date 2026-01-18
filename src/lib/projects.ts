import type { Project } from '../types/project'

export const projects: Project[] = [
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
