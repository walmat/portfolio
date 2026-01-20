'use client'

import React, { PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'

interface ParagraphProps {
  children?: PropsWithChildren<React.ReactNode>
  className?: string
}

export const Paragraph = ({ children, className }: ParagraphProps) => (
  <p
    className={cn(
      'inline-block text-[15px] leading-[26px] tracking-[0.5px] font-normal text-foreground truncate',
      className
    )}
  >
    {children}
  </p>
)
