import Link from 'next/link'
import { useAnimation } from 'framer-motion'
import { Arrow, Button } from 'components'

import * as S from './styles'
import { ThemeOptions, useThemeContext, useFiltersContext } from 'providers'
import { getOpacity } from 'utils'

function Recur() {
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
        src="/recur/recur.svg"
        alt=""
        height={100}
        width={100}
      />
      {theme === ThemeOptions[0] && (
        <>
          <S.RectangleImage
            src="/recur/rectangle.svg"
            alt=""
            height={200}
            width={200}
          />
          <S.AccentImage
            src="/recur/accent.svg"
            alt=""
            height={200}
            width={200}
          />
        </>
      )}
      <Link href="/projects/recur">
        <Button withMotion Icon={Arrow}>
          Recur Forever
        </Button>
      </Link>
    </S.Wrapper>
  )
}

export default Recur
