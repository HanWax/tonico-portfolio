import { motion } from 'framer-motion'
import { Users, Lightbulb, MessageSquare } from 'lucide-react'
import { Container } from '../ui/Container'
import { Card, CardContent } from '../ui/Card'
import { GradientText } from '../ui/GradientText'

const helpItems = [
  {
    icon: Users,
    title: 'Fractional CTO Services',
    description:
      'Need a technical co-founder? My fractional CTO services can fill the gap.',
  },
  {
    icon: Lightbulb,
    title: 'Product Validation',
    description:
      "Got a product idea on the back burner or a costly process you'd like to automate? I can quickly build, validate, and iterate so you can test the business case with real data.",
  },
  {
    icon: MessageSquare,
    title: 'Bridge the Communication Gap',
    description:
      "Struggling to understand your developers' work? I'll help you ask the right questions and get the clarity you need.",
  },
]

export function HowWeHelp() {
  return (
    <section className="py-24 bg-background-secondary">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            How I Can Help You <GradientText>Stand Out</GradientText>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {helpItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <CardContent>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
                  <p className="mt-2 text-foreground-muted">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
