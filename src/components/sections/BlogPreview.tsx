import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { Card, CardContent } from '../ui/Card'
import { GradientText } from '../ui/GradientText'
import type { BlogPost } from '../../types/blog'

interface BlogPreviewProps {
  posts: BlogPost[]
}

export function BlogPreview({ posts }: BlogPreviewProps) {
  if (posts.length === 0) {
    return null
  }

  return (
    <section className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            Latest from the <GradientText>Blog</GradientText>
          </h2>
          <p className="mt-4 text-foreground-muted max-w-2xl mx-auto">
            Thoughts on software development, AI, and building products.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to="/blog/$slug" params={{ slug: post.slug }}>
                <Card hover className="h-full">
                  <CardContent>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.frontmatter.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                      {post.frontmatter.title}
                    </h3>

                    <p className="text-sm text-foreground-muted line-clamp-3 mb-4">
                      {post.frontmatter.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-foreground-muted">
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock size={12} />
                        {post.frontmatter.readingTime} min read
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link to="/blog">
            <Button variant="outline" className="group">
              View All Posts
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
