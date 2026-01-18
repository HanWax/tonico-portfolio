import { createFileRoute } from '@tanstack/react-router'
import { SEO } from '../components/SEO'
import { About } from '../components/sections/About'
import { Communities } from '../components/sections/Communities'
import { ContactCTA } from '../components/sections/ContactCTA'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <>
      <SEO
        title="About"
        url="/about"
        description="Learn about Hannah Waxman, founder of Tonico Labs. Freelance software developer specializing in AI automations and full-stack development based in Tel Aviv."
      />
      <About />
      <Communities />
      <ContactCTA />
    </>
  )
}
