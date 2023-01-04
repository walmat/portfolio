import Link from 'next/link'
import { useAnimation } from 'framer-motion'
import { Arrow, Button } from 'components'

import * as S from './styles'
import { ThemeOptions, useFiltersContext, useThemeContext } from 'providers'
import { getOpacity } from 'utils'

function Nebula() {
  const { active } = useFiltersContext()
  const { theme } = useThemeContext()

  const animate = useAnimation()

  return (
    <S.Wrapper
      $opacity={getOpacity(['Projects'], active)}
      animate={animate}
      onHoverEnd={() => animate.start('init')}
      onHoverStart={() => animate.start('anim')}
    >
      <S.BackgroundImage
        src="/nebula/nebula.svg"
        alt=""
        height={100}
        width={100}
      />
      {theme === ThemeOptions[0] && (
        <>
          <S.RectangleImage
            src="/nebula/rectangle.svg"
            alt=""
            height={200}
            width={200}
          />
          <S.AccentImage
            src="/nebula/accent.svg"
            alt=""
            height={200}
            width={200}
          />
        </>
      )}
      <Link href="/projects/nebula">
        <Button withMotion Icon={Arrow}>
          Nebula
        </Button>
      </Link>
    </S.Wrapper>
  )
}

export default Nebula
