import { motion } from 'framer-motion'
import { Users, Rocket, GraduationCap, Heart } from 'lucide-react'
import { Container } from '../ui/Container'
import { Card, CardContent } from '../ui/Card'
import { GradientText } from '../ui/GradientText'

const communities = [
  {
    icon: Users,
    title: 'Nevo Network',
    description:
      'Alumni of this fellowship for Olim in tech, connecting immigrants with mentorship, leadership development, and Israel\'s innovation ecosystem.',
    url: 'https://nevonetwork.org/',
  },
  {
    icon: Rocket,
    title: 'Symbol Founding Engineers',
    description:
      'Member of this community for first developers at early-stage startups, focused on peer learning and navigating the unique challenges of scaling from MVP to growth.',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7271471849274826752/',
  },
  {
    icon: GraduationCap,
    title: 'TechGym',
    description:
      'Speaker and mentor at TechGym, where I gave a lecture to the fullstack development group on the shared architectural patterns of my favourite technologies: Git, React and Cursor.',
    url: 'https://techsgym.com/',
  },
  {
    icon: Heart,
    title: 'Palestinian Mentorship Program',
    description:
      'Mentor connecting Palestinian tech entrepreneurs with global expertise, helping develop future leaders in Palestine\'s growing startup ecosystem.',
    url: 'https://www.palinternship.com/',
  },
]

export function Communities() {
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
            Communities & <GradientText>Networks</GradientText>
          </h2>
          <p className="mt-4 text-foreground-muted max-w-2xl mx-auto">
            I believe in giving back and growing together with the tech community.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {communities.map((community, index) => (
            <motion.div
              key={community.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={community.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card hover className="h-full">
                  <CardContent>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary">
                      <community.icon size={24} className="text-white" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">{community.title}</h3>
                    <p className="mt-2 text-foreground-muted">{community.description}</p>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
