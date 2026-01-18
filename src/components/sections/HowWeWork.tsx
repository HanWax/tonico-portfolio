import { motion } from 'framer-motion'
import { Eye, Handshake, Settings } from 'lucide-react'
import { Container } from '../ui/Container'
import { Card, CardContent } from '../ui/Card'
import { GradientText } from '../ui/GradientText'

const principles = [
  {
    icon: Eye,
    title: 'Transparent Communication',
    description: 'Clear milestones and honest trade-offs.',
  },
  {
    icon: Handshake,
    title: 'Collaborative Problem-Solving',
    description:
      'I see myself as part of your team, not just an external contractor.',
  },
  {
    icon: Settings,
    title: 'Flexible Formats',
    description:
      'Project-based builds, ongoing advisory, or stepping in as a fractional CTO.',
  },
]

export function HowWeWork() {
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
            How I <GradientText>Work</GradientText>
          </h2>
          <p className="mt-4 text-foreground-muted text-lg max-w-2xl mx-auto">
            Every engagement looks a little different, but the principles are the same:
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <CardContent>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary">
                    <principle.icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{principle.title}</h3>
                  <p className="mt-2 text-foreground-muted">{principle.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
