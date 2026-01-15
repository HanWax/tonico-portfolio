export interface BlogPost {
  slug: string
  frontmatter: {
    title: string
    date: string
    excerpt: string
    tags: string[]
    author: string
    readingTime: number
    published: boolean
    featuredImage?: string
  }
  content: string
}
