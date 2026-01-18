import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Calendar, Clock } from 'lucide-react'
import { SEO } from '../../components/SEO'
import { Container } from '../../components/ui/Container'
import { Card, CardContent } from '../../components/ui/Card'
import { GradientText } from '../../components/ui/GradientText'
import { getAllPosts } from '../../lib/blog'

export const Route = createFileRoute('/blog/')({
  component: BlogPage,
})

function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <SEO
        title="Blog"
        url="/blog"
        description="Read insights on software development, AI automations, and building great products from Tonico Labs by Hannah Waxman."
      />
      <section className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold sm:text-5xl">
              The <GradientText>Blog</GradientText>
            </h1>
          <p className="mt-4 text-foreground-muted max-w-2xl mx-auto">
            Thoughts on software development, AI automations, and building great products.
          </p>
        </motion.div>

        {posts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-foreground-muted">
              No posts yet. Check back soon!
            </p>
          </motion.div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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

                      <h2 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                        {post.frontmatter.title}
                      </h2>

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
        )}
      </Container>
    </section>
    </>
  )
}
