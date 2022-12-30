import Link from 'next/link'
import { useAnimation } from 'framer-motion'
import { Arrow, Button } from 'components'

import * as S from './styles'
import { ThemeOptions, useFiltersContext, useThemeContext } from 'providers'
import { getOpacity } from 'utils'

function Tigerbob() {
  const { active } = useFiltersContext()

  const animate = useAnimation()

  const { theme } = useThemeContext()

  return (
    <S.Wrapper
      $opacity={getOpacity(['Projects'], active)}
      animate={animate}
      onHoverEnd={() => animate.start('init')}
      onHoverStart={() => animate.start('anim')}
    >
      <S.BackgroundImage
        src="/tigerbob/tigerbob.svg"
        alt=""
        height={100}
        width={100}
      />
      {theme === ThemeOptions[0] && (
        <S.AccentImage
          src="/tigerbob/accent.svg"
          alt=""
          height={200}
          width={200}
        />
      )}
      <Link href="/projects/tigerbob">
        <Button withMotion Icon={Arrow}>
          Tigerbob
        </Button>
      </Link>
    </S.Wrapper>
  )
}

export default Tigerbob
