'use client'

import { cn } from '@/lib/utils'
import { cardBase } from '@/lib/styles'

interface ContentCardProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  as?: 'div' | 'form'
}

export function ContentCard({
  children,
  className,
  style,
  as: Component = 'div',
  ...props
}: ContentCardProps & React.HTMLAttributes<HTMLDivElement | HTMLFormElement>) {
  return (
    <Component
      className={cn(cardBase, 'bg-card', className)}
      style={style}
      {...props}
    >
      {children}
    </Component>
  )
}
