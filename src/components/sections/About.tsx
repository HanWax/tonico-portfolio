import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { Sparkles, Users, Code } from 'lucide-react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { Card, CardContent } from '../ui/Card'
import { GradientText } from '../ui/GradientText'

const highlights = [
  {
    icon: Code,
    title: '10+ Years',
    description: 'Building products at software companies',
  },
  {
    icon: Sparkles,
    title: 'Craftsmanship',
    description: 'Agile-trained, raising team standards',
  },
  {
    icon: Users,
    title: 'Lifelong Learner',
    description: 'Speaker, mentor, and continuous learner',
  },
]

interface AboutProps {
  preview?: boolean
}

export function About({ preview = false }: AboutProps) {
  return (
    <section className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            About <GradientText>Me</GradientText>
          </h2>
          <p className="mt-4 text-foreground-muted max-w-2xl mx-auto">
            I combine deep technical expertise with product thinking to build solutions that matter.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="h-full text-center">
                <CardContent>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-foreground-muted">{item.description}</p>
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
            <Link to="/about">
              <Button variant="outline">Learn More About Me</Button>
            </Link>
          </motion.div>
        )}

        {!preview && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 max-w-3xl mx-auto"
          >
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p>
                After 10 years building products at software companies, I made the leap to
                freelancing to pursue what I&apos;m most passionate about: building web
                applications that help businesses scale. Trained in agile methodology and
                committed to software craftsmanship, I take pride in writing clean, maintainable
                code and raising the standards of every team I work with. Based in Tel Aviv and
                fluent in both English and Hebrew, I work with clients globally.
              </p>
              <p>
                I&apos;m a lifelong learner who believes in continuous improvement - both for
                myself and my teams. My approach combines deep technical expertise with the
                strategic thinking I developed during my management studies at Cambridge Judge Business School.
                I don&apos;t just write code - I understand the business problems behind it.
              </p>
              <p>
                Beyond client work, I&apos;m building towards a vision: creating a team that
                employs junior developers and provides mentorship through pair programming.
                I believe in growing the next generation of developers while delivering
                exceptional value to clients.
              </p>
            </div>
          </motion.div>
        )}
      </Container>
    </section>
  )
}
