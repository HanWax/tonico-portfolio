import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface GradientTextProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'accent'
  animate?: boolean
}

export function GradientText({
  children,
  variant = 'primary',
  animate = false,
  className,
  ...props
}: GradientTextProps) {
  return (
    <span
      className={cn(
        'bg-clip-text text-transparent',
        {
          'bg-gradient-primary': variant === 'primary',
          'bg-gradient-secondary': variant === 'secondary',
          'bg-gradient-accent': variant === 'accent',
        },
        animate && 'animate-gradient-x bg-[length:200%_auto]',
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
