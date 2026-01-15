import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export function Container({ children, size = 'lg', className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6',
        {
          'max-w-3xl': size === 'sm',
          'max-w-4xl': size === 'md',
          'max-w-6xl': size === 'lg',
          'max-w-7xl': size === 'xl',
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
