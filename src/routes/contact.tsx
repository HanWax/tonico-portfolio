import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { Send, CheckCircle, AlertCircle, Calendar, Mail, MapPin } from 'lucide-react'
import { InlineWidget } from 'react-calendly'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { Input, Textarea } from '../components/ui/Input'
import { Card, CardContent } from '../components/ui/Card'
import { GradientText } from '../components/ui/GradientText'
import { useTheme } from '../context/ThemeContext'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  const { theme } = useTheme()
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    }
  }

  return (
    <section className="py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold sm:text-5xl">
            Get in <GradientText>Touch</GradientText>
          </h1>
          <p className="mt-4 text-foreground-muted max-w-2xl mx-auto">
            Have a project in mind or want to discuss a collaboration?
            I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid gap-4 sm:grid-cols-3 mb-12"
        >
          <Card className="text-center">
            <CardContent className="flex flex-col items-center py-6">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-foreground-muted">hello@hannahwaxman.dev</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="flex flex-col items-center py-6">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <p className="font-medium">Location</p>
              <p className="text-sm text-foreground-muted">Tel Aviv, Israel</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="flex flex-col items-center py-6">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <p className="font-medium">Availability</p>
              <p className="text-sm text-foreground-muted">Open for projects</p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

            {submitStatus === 'success' ? (
              <Card className="bg-green-500/10 border-green-500/30">
                <CardContent className="flex items-center gap-3 py-8">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <div>
                    <p className="font-medium text-green-600 dark:text-green-400">
                      Message sent successfully!
                    </p>
                    <p className="text-sm text-foreground-muted">
                      I&apos;ll get back to you as soon as possible.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      {...register('name')}
                      placeholder="Your name"
                      error={errors.name?.message}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      {...register('email')}
                      type="email"
                      placeholder="your@email.com"
                      error={errors.email?.message}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input
                    {...register('subject')}
                    placeholder="What's this about?"
                    error={errors.subject?.message}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    {...register('message')}
                    placeholder="Tell me about your project..."
                    rows={6}
                    error={errors.message?.message}
                  />
                </div>

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-500 text-sm">
                    <AlertCircle size={16} />
                    Failed to send message. Please try again.
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto"
                  disabled={submitStatus === 'loading'}
                >
                  {submitStatus === 'loading' ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Calendly Widget */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6">Book a Call</h2>
            <p className="text-foreground-muted mb-6">
              Prefer to talk? Schedule a free 30-minute consultation to discuss your project.
            </p>
            <Card className="overflow-hidden p-0">
              <InlineWidget
                url="https://calendly.com/your-calendly-url"
                styles={{
                  height: '600px',
                  minWidth: '280px',
                }}
                pageSettings={{
                  backgroundColor: theme === 'dark' ? '12121a' : 'ffffff',
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                  primaryColor: '8b5cf6',
                  textColor: theme === 'dark' ? 'f3f4f6' : '1f2937',
                }}
              />
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
