import React, { ReactNode } from 'react'
import { NextSeo } from 'next-seo'
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

export const PageLayout = ({
  children,
  title,
  description
}: Props): JSX.Element => (
  <>
    <NextSeo
      title={title}
      description={description}
      openGraph={{ title, description }}
    />
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
    >
      {children}
    </motion.div>
  </>
)
