'use client'

import { useAnimation } from 'framer-motion'
import { useRouter } from 'next/navigation'

export function useProjectHover(slug: string) {
  const animate = useAnimation()
  const router = useRouter()

  return {
    animate,
    onHoverStart: () => {
      animate.start('anim')
      router.prefetch(`/projects/${slug}`)
    },
    onHoverEnd: () => animate.start('init')
  }
}
