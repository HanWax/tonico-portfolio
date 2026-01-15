import { Link } from '@tanstack/react-router'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const socialLinks = [
  { href: 'https://github.com/hannahwaxman', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/hannahwaxman', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://twitter.com/hannahwaxman', icon: Twitter, label: 'Twitter' },
  { href: 'mailto:hello@hannahwaxman.dev', icon: Mail, label: 'Email' },
]

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-background-secondary">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <Link to="/" className="text-xl font-bold">
              <span className="gradient-text">Hannah</span>
              <span className="text-foreground-muted">.dev</span>
            </Link>
            <p className="mt-2 text-sm text-foreground-muted">
              Freelance Software Developer
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-foreground-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-muted transition-colors hover:text-primary"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--border)] pt-8 text-center">
          <p className="text-sm text-foreground-muted">
            &copy; {new Date().getFullYear()} Hannah Waxman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
