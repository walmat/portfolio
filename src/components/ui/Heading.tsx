'use client'

import React, { PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'

interface HeadingProps {
  children: PropsWithChildren<React.ReactNode>
  className?: string
}

export const Heading = ({ children, className }: HeadingProps) => (
  <h2
    className={cn(
      'text-2xl leading-8 font-normal text-foreground mb-1 truncate',
      className
    )}
  >
    {children}
  </h2>
)
