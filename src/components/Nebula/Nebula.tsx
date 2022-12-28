import Link from 'next/link'
import { useAnimation } from 'framer-motion'
import { Arrow } from 'components'

import * as S from './styles'
import { ThemeOptions, useThemeContext } from 'providers'

const container = {
  init: {
    width: '36px',
    transition: {
      duration: 0.48,
      delay: 0.12
    }
  },
  anim: {
    width: 'auto',
    transition: {
      duration: 0.48
    }
  }
}

const text = {
  init: {
    x: -12,
    opacity: 0,
    transition: {
      duration: 0.48
    }
  },
  anim: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.36,
      duration: 0.12
    }
  }
}

function Nebula() {
  const animate = useAnimation()

  const { theme } = useThemeContext()

  return (
    <S.Wrapper
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
        <S.RectangleImage
          src="/nebula/rectangle.svg"
          alt=""
          height={200}
          width={200}
        />
      )}
      {theme === ThemeOptions[0] && (
        <S.AccentImage
          src="/nebula/accent.svg"
          alt=""
          height={200}
          width={200}
        />
      )}
      <Link href="/projects/nebula">
        <S.ExpandedCorner variants={container}>
          <S.ExpandedCornerText variants={text}>Nebula</S.ExpandedCornerText>
          <S.ExpandedCornerIcon>
            <Arrow />
          </S.ExpandedCornerIcon>
        </S.ExpandedCorner>
      </Link>
    </S.Wrapper>
  )
}

export default Nebula
