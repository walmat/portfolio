import Link from 'next/link'

import { Arrow } from 'components'
import { useThemeContext } from 'providers'

import * as S from './styles'

interface SocialProps {
  name: string
  href: string
  height: number
  width: number
}

function Social({ name, href, width, height }: SocialProps) {
  const { theme } = useThemeContext()

  return (
    <S.Container $name={name}>
      <S.SocialIcon
        $name={name}
        src={`/${name}/${theme}.svg`}
        alt=""
        width={width}
        height={height}
      />
      <Link href={href} target="_blank">
        <S.CornerContainer>
          <Arrow />
        </S.CornerContainer>
      </Link>
    </S.Container>
  )
}

export default Social
