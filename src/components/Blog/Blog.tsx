import { Arrow } from 'components/Arrow'
import * as S from './styles'

function Blog() {
  return (
    <S.Wrapper>
      <S.Copy>
        <S.Title>Introspective look into web3 gaming</S.Title>
        <S.Text>
          A brief overview of the pitfalls of the current play-to-earn trends
          that we see in Web3 gaming and my analysis on what we could be doing
          to promote mass adoption within NFTs as a whole.
        </S.Text>
      </S.Copy>

      <S.Footer>
        <S.Button>
          <Arrow />
          <S.ButtonText>Read more</S.ButtonText>
        </S.Button>
        <S.Date>Dec 28, 2022</S.Date>
      </S.Footer>
    </S.Wrapper>
  )
}

export default Blog
