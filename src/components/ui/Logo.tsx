interface LogoProps {
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizes = {
  sm: { icon: 24, text: 'text-lg' },
  md: { icon: 32, text: 'text-xl' },
  lg: { icon: 40, text: 'text-2xl' },
}

export function Logo({ showText = true, size = 'md', className = '' }: LogoProps) {
  const { icon, text } = sizes[size]

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#8b5cf6' }} />
            <stop offset="100%" style={{ stopColor: '#3b82f6' }} />
          </linearGradient>
        </defs>
        <rect width="100" height="100" rx="20" fill="url(#logoGradient)" />
        <path
          d="M30 25 L70 25 L70 35 L55 35 L55 50 L65 75 L35 75 L45 50 L45 35 L30 35 Z"
          fill="white"
        />
        <circle cx="45" cy="60" r="4" fill="url(#logoGradient)" />
        <circle cx="55" cy="65" r="3" fill="url(#logoGradient)" />
      </svg>
      {showText && (
        <span className={`font-bold tracking-tight ${text}`}>
          <span className="gradient-text">tonico</span>
          <span className="text-foreground-muted"> labs</span>
        </span>
      )}
    </div>
  )
}
