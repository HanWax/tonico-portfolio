import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { SEO } from '../../components/SEO'
import { Container } from '../../components/ui/Container'
import { GradientText } from '../../components/ui/GradientText'
import { ProjectsGrid } from '../../components/sections/ProjectsGrid'
import { ContactCTA } from '../../components/sections/ContactCTA'
import { getAllProjects } from '../../lib/projects'

export const Route = createFileRoute('/projects/')({
  component: ProjectsPage,
})

function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <>
      <SEO
        title="Projects"
        url="/projects"
        description="Explore software development projects by Tonico Labs. Portfolio showcasing AI automations, full-stack applications, and technical solutions."
      />
      <section className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold sm:text-5xl">
              My <GradientText>Projects</GradientText>
            </h1>
            <p className="mt-4 text-foreground-muted max-w-2xl mx-auto">
              A collection of projects I&apos;ve built for clients and personal exploration.
              Each represents a unique challenge and solution.
            </p>
          </motion.div>
        </Container>
      </section>

      <ProjectsGrid projects={projects} />
      <ContactCTA />
    </>
  )
}
