import { Box } from 'rebass/styled-components'
import { Arrow, Heading, Button } from 'components'
import { useFiltersContext, useMediumContext } from 'providers'
import { getOpacity } from 'utils'
import { format } from 'date-fns'

import * as S from './styles'
import Link from 'next/link'

const DateComponent = ({ date }: { date: string }) => {
  try {
    return <S.Date>{format(new Date(date), 'MMM dd, yyyy')}</S.Date>
  } catch (error) {
    return null
  }
}

function Blog() {
  const { active } = useFiltersContext()

  const post = useMediumContext()

  if (!post) {
    return null
  }

  const { title, description, link, pubDate } = post

  return (
    <S.Wrapper $opacity={getOpacity(['Media'], active)}>
      <S.Copy>
        <Box sx={{ mb: 2 }}>
          <Heading>{title}</Heading>
        </Box>
        <S.Description>{description}</S.Description>
      </S.Copy>

      <S.Footer>
        <Link href={link} target="_blank">
          <Button Icon={Arrow}>Read more</Button>
        </Link>
        <DateComponent date={pubDate} />
      </S.Footer>
    </S.Wrapper>
  )
}

export default Blog
