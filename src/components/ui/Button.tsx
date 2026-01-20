'use client'

import { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  Icon: React.FC
  children?: PropsWithChildren<React.ReactNode | undefined>
  onlyIcon?: boolean
  withMotion?: boolean
  disabled?: boolean
}

const spring = {
  type: 'spring' as const,
  stiffness: 400,
  damping: 40
}

const container = {
  init: {
    width: '36px',
    transition: spring
  },
  anim: {
    width: 'auto',
    transition: spring
  }
}

const text = {
  init: {
    x: -4,
    opacity: 0,
    transition: spring
  },
  anim: {
    x: 0,
    opacity: 1,
    transition: spring
  }
}

const arrow = {
  init: {
    scale: 1,
    borderRadius: 16,
    transition: spring
  },
  anim: {
    scale: 1,
    borderRadius: 12,
    transition: spring
  }
}

export function Button({
  children,
  Icon,
  onlyIcon = false,
  withMotion = false,
  disabled = false
}: ButtonProps) {
  if (withMotion) {
    return (
      <motion.div
        variants={container}
        className="w-9 h-9 rounded-[18px] absolute bottom-3.5 left-3.5 flex items-center overflow-hidden transition-shadow duration-200 ease-out bg-card shadow-[inset_0_0_0_2px_var(--border)] border-none z-[2] hover:cursor-pointer hover:shadow-[0_0_0_5px_var(--ring)]"
      >
        <motion.p
          variants={text}
          className="mx-9 ml-4 text-sm leading-normal tracking-[0.3px] font-normal whitespace-nowrap text-foreground opacity-0"
        >
          {children}
        </motion.p>
        <motion.div
          variants={arrow}
          className="w-8 h-8 absolute flex items-center justify-center right-0.5 top-1/2 -translate-y-1/2"
        >
          <Icon />
        </motion.div>
      </motion.div>
    )
  }

  if (onlyIcon) {
    return (
      <div className="bg-card shadow-[inset_0_0_0_2px_var(--border)] w-9 h-9 rounded-[18px] absolute bottom-3.5 left-3.5 flex items-center justify-center transition-shadow duration-200 ease-out hover:cursor-pointer hover:shadow-[0_0_0_5px_var(--ring)]">
        <Icon />
      </div>
    )
  }

  return (
    <motion.button
      disabled={disabled}
      className="h-9 px-3 rounded-[18px] shadow-[0_0_0_2px_var(--ring)] border-none bg-transparent flex items-center transition-all duration-300 ease-out hover:cursor-pointer hover:shadow-[0_0_0_5px_var(--ring)] disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <Icon />
      <span className="ml-1.5 text-sm text-foreground">{children}</span>
    </motion.button>
  )
}
