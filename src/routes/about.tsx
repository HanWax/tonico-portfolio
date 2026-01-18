import { createFileRoute } from '@tanstack/react-router'
import { About } from '../components/sections/About'
import { Communities } from '../components/sections/Communities'
import { ContactCTA } from '../components/sections/ContactCTA'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <>
      <About />
      <Communities />
      <ContactCTA />
    </>
  )
}
