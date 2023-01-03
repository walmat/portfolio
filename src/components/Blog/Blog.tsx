import { Box } from 'rebass/styled-components'
import { Arrow, Heading, Paragraph, Button } from 'components'
import { useFiltersContext } from 'providers'
import { getOpacity } from 'utils'
import { format } from 'date-fns'

import * as S from './styles'
import { Item } from 'hooks'
import Link from 'next/link'

interface BlogProps {
  post: Item
}

const getTrimmedDescription = (description: string) => {
  const matches = description.match(/<p>(.*?)<\/p>/)
  if (!matches) {
    return null
  }

  const [, match] = matches
  return match
}

function Blog({ post }: BlogProps) {
  const { active } = useFiltersContext()

  if (!post) {
    return null
  }

  const { title, description, pubDate, link } = post

  const desc = getTrimmedDescription(description)

  return (
    <S.Wrapper $opacity={getOpacity(['Media'], active)}>
      <S.Copy>
        <Box sx={{ mb: 2 }}>
          <Heading>{title}</Heading>
        </Box>
        <Paragraph>{desc ?? ''}</Paragraph>
      </S.Copy>

      <S.Footer>
        <Link href={link} target="_blank">
          <Button Icon={Arrow}>Read more</Button>
        </Link>
        <S.Date>{format(new Date(pubDate), 'MMM dd, yyyy')}</S.Date>
      </S.Footer>
    </S.Wrapper>
  )
}

export default Blog
