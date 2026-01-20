'use client'

import Image from 'next/image'
import { useCardOpacity } from '@/hooks'

function Biography() {
  const opacity = useCardOpacity(['About'])

  return (
    <div
      style={{ opacity }}
      className="h-full w-full flex flex-col items-start justify-between p-9 px-[42px] rounded-[32px] overflow-hidden bg-card shadow-[inset_0_0_0_2px_var(--border)] cursor-grab active:cursor-grabbing"
    >
      <div className="flex items-center justify-center">
        <Image
          src="/pfp.jpeg"
          alt=""
          width={72}
          height={72}
          className="rounded-full w-[72px] h-[72px] md:w-auto md:h-[108px] lg:w-[72px] lg:h-[72px]"
        />
      </div>
      <div className="text-sm leading-[26px] tracking-[0.5px] font-normal text-foreground">
        I&apos;m <h2 className="inline text-[40px]">Matthew</h2>, a founding
        engineer who loves building products and sweating the small stuff.
        Currently working on Forkast — AI-powered recipes for near-zero waste.
      </div>
    </div>
  )
}

export default Biography
