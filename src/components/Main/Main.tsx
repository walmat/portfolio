import * as S from './styles'

import { Filters, Grid } from '..'

const Main = () => (
  <S.Wrapper>
    <S.Navigation>
      <S.Title>mtw.</S.Title>
      <Filters />
      <S.Contact>Contact</S.Contact>
    </S.Navigation>
    <Grid />
  </S.Wrapper>
)

export default Main
