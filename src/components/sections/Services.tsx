import { motion } from 'framer-motion'
import { BookOpen, RefreshCw, Layers } from 'lucide-react'
import { Container } from '../ui/Container'
import { Card, CardContent } from '../ui/Card'
import { GradientText } from '../ui/GradientText'

const services = [
  {
    icon: BookOpen,
    title: 'Technical Literacy',
    description:
      "I'll equip you with the technical literacy to engage meaningfully with your team and make confident decisions about priorities and resources.",
  },
  {
    icon: RefreshCw,
    title: 'Iterative Development',
    description:
      "I believe in iterative, hypothesis-driven development—starting small, testing quickly, and learning fast. You'll see results early, with analytics built in so I can validate outcomes, double down on what works, and pivot when needed.",
  },
  {
    icon: Layers,
    title: 'Modern Tech Stack',
    description:
      "I'm fluent across modern technologies—React, Node.js, TypeScript, AI and cloud infrastructure—and know what it takes to scale products from proof-of-concept to enterprise-grade systems.",
  },
]

export function Services() {
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
            What I <GradientText>Offer</GradientText>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <CardContent>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary">
                    <service.icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{service.title}</h3>
                  <p className="mt-2 text-foreground-muted">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
