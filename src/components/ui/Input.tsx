import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          className={cn(
            'w-full rounded-lg border bg-background px-4 py-3 text-foreground',
            'placeholder:text-foreground-muted',
            'focus:outline-none focus:ring-2 focus:ring-primary/50',
            'transition-colors',
            error ? 'border-red-500' : 'border-[var(--border)]',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <textarea
          ref={ref}
          className={cn(
            'w-full rounded-lg border bg-background px-4 py-3 text-foreground',
            'placeholder:text-foreground-muted',
            'focus:outline-none focus:ring-2 focus:ring-primary/50',
            'transition-colors resize-none',
            error ? 'border-red-500' : 'border-[var(--border)]',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
