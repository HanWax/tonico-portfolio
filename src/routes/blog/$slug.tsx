import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Container } from '../../components/ui/Container'
import { GradientText } from '../../components/ui/GradientText'
import { getPostBySlug } from '../../lib/blog'

export const Route = createFileRoute('/blog/$slug')({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug)
    if (!post) {
      throw notFound()
    }
    return post
  },
  component: BlogPostPage,
})

function BlogPostPage() {
  const post = Route.useLoaderData()

  return (
    <section className="py-16">
      <Container size="sm">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Back Link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-foreground-muted hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl mb-6">
            <GradientText>{post.frontmatter.title}</GradientText>
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-foreground-muted mb-8 pb-8 border-b border-[var(--border)]">
            <span className="inline-flex items-center gap-1">
              <User size={14} />
              {post.frontmatter.author}
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar size={14} />
              {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock size={14} />
              {post.frontmatter.readingTime} min read
            </span>
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </motion.article>
      </Container>
    </section>
  )
}
