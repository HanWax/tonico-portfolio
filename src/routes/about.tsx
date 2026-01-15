import { createFileRoute } from '@tanstack/react-router'
import { About } from '../components/sections/About'
import { ContactCTA } from '../components/sections/ContactCTA'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <>
      <About />
      <ContactCTA />
    </>
  )
}
