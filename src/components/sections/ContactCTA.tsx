import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { ArrowRight, Mail } from 'lucide-react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'

export function ContactCTA() {
  return (
    <section className="py-24 bg-background-secondary">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-gradient-primary p-8 sm:p-12 md:p-16 text-center"
        >
          {/* Decorative Elements */}
          <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -right-20 -bottom-20 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Let&apos;s Build Something{' '}
              <span className="text-white/90">Amazing</span>
            </h2>

            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss
              how I can help bring your ideas to life.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 hover:shadow-lg"
                >
                  <Mail size={18} />
                  Get in Touch
                </Button>
              </Link>
              <Link to="/projects">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 group"
                >
                  See My Work
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
