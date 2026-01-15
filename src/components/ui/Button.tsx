import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all',
          'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background',
          'disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-gradient-primary text-white hover:opacity-90 hover:shadow-lg hover:shadow-primary/25':
              variant === 'primary',
            'bg-background-secondary text-foreground hover:bg-background-secondary/80':
              variant === 'secondary',
            'border border-[var(--border)] bg-transparent text-foreground hover:bg-background-secondary':
              variant === 'outline',
            'bg-transparent text-foreground hover:bg-background-secondary':
              variant === 'ghost',
          },
          {
            'h-9 px-4 text-sm': size === 'sm',
            'h-11 px-6 text-sm': size === 'md',
            'h-12 px-8 text-base': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
