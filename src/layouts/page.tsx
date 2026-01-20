'use client'

import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

type Props = {
  children: ReactNode
  title: string
  description: string
}

const variants = {
  hidden: { opacity: 0, y: -20, transition: { duration: 0.24 } },
  enter: { opacity: 1, y: 0, transition: { duration: 0.24 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.24 } }
}

export const PageLayout = ({ children }: Props): React.ReactElement => (
  <motion.div
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    className="flex flex-col flex-1"
  >
    {children}
  </motion.div>
)
