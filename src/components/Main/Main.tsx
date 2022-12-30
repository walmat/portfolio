import * as S from './styles'

import { Filters, Grid } from '..'
import Link from 'next/link'

const Main = () => (
  <S.Wrapper>
    <S.Navigation>
      <S.Title>mtw.</S.Title>
      <Filters />
      <Link href="mailto:matthew.wallt@gmail.com">
        <S.Contact>Contact</S.Contact>
      </Link>
    </S.Navigation>
    <Grid />
  </S.Wrapper>
)

export default Main
