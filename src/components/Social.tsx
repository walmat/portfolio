'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Arrow, Button } from '@/components'
import { useThemeContext } from '@/providers'
import { useCardOpacity } from '@/hooks'

interface SocialProps {
  name: string
  href: string
  height: number
  width: number
  extension?: 'svg' | 'png'
}

const backgroundColors: { [key: string]: { light: string; dark: string } } = {
  github: {
    light: 'var(--github)',
    dark: 'var(--card)'
  },
  x: {
    light: 'var(--x)',
    dark: 'var(--card)'
  }
} as const

function Social({ name, href, width, height, extension = 'svg' }: SocialProps) {
  const { theme } = useThemeContext()
  const opacity = useCardOpacity(['About'])

  const bgColor =
    theme === 'dark'
      ? backgroundColors[name]?.dark
      : backgroundColors[name]?.light

  return (
    <div
      style={{ opacity, backgroundColor: bgColor }}
      className="h-full w-full flex flex-col items-center justify-center rounded-[32px] overflow-hidden shadow-[inset_0_0_0_2px_var(--border)] cursor-grab active:cursor-grabbing"
    >
      <Image
        src={`/${name}/${theme}.${extension}`}
        alt=""
        width={width}
        height={height}
        className={`${name === 'x' ? 'scale-[0.7]' : ''} md:scale-[0.7] lg:scale-100`}
      />
      <Link href={href} target="_blank">
        <Button onlyIcon Icon={Arrow} />
      </Link>
    </div>
  )
}

export default Social
