import matter from 'gray-matter'
import type { BlogPost } from '../types/blog'

// Import blog posts using Vite's glob import
const blogModules = import.meta.glob<string>('/content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

function parseBlogPost(path: string, content: string): BlogPost {
  const { data, content: body } = matter(content)
  const slug = path.split('/').pop()?.replace('.md', '') || ''

  return {
    slug,
    frontmatter: {
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      tags: data.tags || [],
      author: data.author || 'Hannah Waxman',
      readingTime: data.readingTime || Math.ceil(body.split(/\s+/).length / 200),
      published: data.published !== false,
      featuredImage: data.featuredImage,
    },
    content: body,
  }
}

export function getAllPosts(): BlogPost[] {
  const posts = Object.entries(blogModules).map(([path, content]) =>
    parseBlogPost(path, content)
  )

  return posts
    .filter(post => post.frontmatter.published)
    .sort((a, b) =>
      new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
    )
}

export function getRecentPosts(limit: number): BlogPost[] {
  return getAllPosts().slice(0, limit)
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find(post => post.slug === slug)
}

export function getAllTags(): string[] {
  const tags = new Set<string>()
  getAllPosts().forEach(post => {
    post.frontmatter.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
}
