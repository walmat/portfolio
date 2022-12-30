import Link from 'next/link'

import { Arrow, Button } from 'components'
import { useFiltersContext, useThemeContext } from 'providers'

import * as S from './styles'
import { getOpacity } from 'utils'

interface SocialProps {
  name: string
  href: string
  height: number
  width: number
}

function Social({ name, href, width, height }: SocialProps) {
  const { theme } = useThemeContext()
  const { active } = useFiltersContext()

  return (
    <S.Container $opacity={getOpacity(['About'], active)} $name={name}>
      <S.SocialIcon
        $name={name}
        src={`/${name}/${theme}.svg`}
        alt=""
        width={width}
        height={height}
      />
      <Link href={href} target="_blank">
        <Button onlyIcon Icon={Arrow} />
      </Link>
    </S.Container>
  )
}

export default Social
