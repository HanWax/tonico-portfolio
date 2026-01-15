import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { GradientText } from '../ui/GradientText'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-hero dark:opacity-100 opacity-50" />
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
      </div>

      <Container className="flex min-h-[90vh] flex-col items-center justify-center py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for new projects
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{' '}
            <GradientText animate>Hannah Waxman</GradientText>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg text-foreground-muted sm:text-xl md:text-2xl"
          >
            Freelance Software Developer specializing in{' '}
            <span className="text-foreground font-medium">AI Automations</span>
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-4 max-w-2xl mx-auto text-foreground-muted"
          >
            10+ years of experience building products. Deep technical expertise paired with
            product thinking. Based in Tel Aviv, working globally.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/projects">
              <Button size="lg" className="group">
                View My Work
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="group">
                <Calendar size={18} />
                Book a Call
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-foreground-muted">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="h-14 w-[1px] bg-gradient-to-b from-foreground-muted to-transparent" />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
