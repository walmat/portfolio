import * as S from './styles'

import { Filters, Grid } from '..'
import Link from 'next/link'
import { Welcome } from 'hooks'

interface MainProps {
  post: Welcome
}

const Main = ({ post }: MainProps) => (
  <S.Wrapper>
    <S.Navigation>
      <S.Title>mtw.</S.Title>
      <Filters />
      <Link target="_blank" href="https://linkedin.com/in/walmat">
        <S.Contact>Connect</S.Contact>
      </Link>
    </S.Navigation>
    <Grid post={post} />
  </S.Wrapper>
)

export default Main
