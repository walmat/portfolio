import * as S from './styles'

import { Filters, Grid } from '..'
import Link from 'next/link'

const Main = () => (
  <S.Wrapper>
    <S.Navigation>
      <S.Title>mtw.</S.Title>
      <Filters />
      <Link target="_blank" href="https://linkedin.com/in/walmat">
        <S.Contact>Connect</S.Contact>
      </Link>
    </S.Navigation>
    <Grid />
  </S.Wrapper>
)

export default Main
