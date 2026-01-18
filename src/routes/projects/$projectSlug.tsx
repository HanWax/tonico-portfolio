import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { SEO } from '../../components/SEO'
import { Container } from '../../components/ui/Container'
import { Button } from '../../components/ui/Button'
import { GradientText } from '../../components/ui/GradientText'
import { getProjectBySlug } from '../../lib/projects'

export const Route = createFileRoute('/projects/$projectSlug')({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.projectSlug)
    if (!project) {
      throw notFound()
    }
    return project
  },
  component: ProjectPage,
})

function ProjectPage() {
  const project = Route.useLoaderData()

  return (
    <>
      <SEO
        title={project.title}
        url={`/projects/${project.slug}`}
        description={project.description}
      />
      <section className="py-16">
        <Container size="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Back Link */}
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-foreground-muted hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Projects
            </Link>

            {/* Title */}
            <h1 className="text-3xl font-bold sm:text-4xl mb-4">
              <GradientText>{project.title}</GradientText>
            </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 mb-8">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="sm">
                  <ExternalLink size={16} />
                  View Live
                </Button>
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm">
                  <Github size={16} />
                  View Code
                </Button>
              </a>
            )}
          </div>

          {/* Description */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-foreground-muted">
              {project.longDescription || project.description}
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
    </>
  )
}
