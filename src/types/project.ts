export interface Project {
  slug: string
  title: string
  description: string
  longDescription?: string
  image: string
  logo?: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}
