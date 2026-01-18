import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { ExternalLink, Github } from 'lucide-react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { Card, CardContent } from '../ui/Card'
import { GradientText } from '../ui/GradientText'
import type { Project } from '../../types/project'

interface ProjectsGridProps {
  projects: Project[]
  preview?: boolean
  showFilters?: boolean
}

export function ProjectsGrid({ projects, preview = false }: ProjectsGridProps) {
  return (
    <section className="py-24 bg-background-secondary">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            Featured <GradientText>Projects</GradientText>
          </h2>
          <p className="mt-4 text-foreground-muted max-w-2xl mx-auto">
            A selection of projects I&apos;ve worked on. Each one represents a unique challenge solved.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="h-full flex flex-col overflow-hidden p-0">
                {/* Project Image Placeholder */}
                <div className="aspect-video bg-gradient-primary opacity-80 flex items-center justify-center">
                  <span className="text-white/60 text-sm"></span>
                </div>

                <CardContent className="flex-1 flex flex-col p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground-muted flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-4 flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-foreground-muted hover:text-primary transition-colors"
                      >
                        <ExternalLink size={14} />
                        Live
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-foreground-muted hover:text-primary transition-colors"
                      >
                        <Github size={14} />
                        Code
                      </a>
                    )}
                    <Link
                      to="/projects/$projectSlug"
                      params={{ projectSlug: project.slug }}
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline ml-auto"
                    >
                      View Details
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link to="/projects">
              <Button variant="outline">View All Projects</Button>
            </Link>
          </motion.div>
        )}
      </Container>
    </section>
  )
}
