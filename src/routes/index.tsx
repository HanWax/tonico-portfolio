import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '../components/sections/Hero'
import { About } from '../components/sections/About'
import { ProjectsGrid } from '../components/sections/ProjectsGrid'
import { BlogPreview } from '../components/sections/BlogPreview'
import { ContactCTA } from '../components/sections/ContactCTA'
import { getFeaturedProjects } from '../lib/projects'
import { getRecentPosts } from '../lib/blog'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const featuredProjects = getFeaturedProjects(3)
  const recentPosts = getRecentPosts(3)

  return (
    <>
      <Hero />
      <About preview />
      <ProjectsGrid projects={featuredProjects} preview />
      <BlogPreview posts={recentPosts} />
      <ContactCTA />
    </>
  )
}
