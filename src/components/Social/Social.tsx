import Link from 'next/link'

import { Arrow, Button } from 'components'
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
        <Button onlyIcon Icon={Arrow} />
      </Link>
    </S.Container>
  )
}

export default Social
