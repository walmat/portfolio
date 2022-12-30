import { Box } from 'rebass'
import { Arrow, Heading } from 'components'

import * as S from './styles'

function Blog() {
  return (
    <S.Wrapper>
      <S.Copy>
        <Box sx={{ mb: 2 }}>
          <Heading>Introspective look into web3 gaming</Heading>
        </Box>
        <S.Text>
          A brief look into the pitfalls of the current play-to-earn trends that
          we see in Web3 gaming and my take on what we should be doing to
          promote mass adoption of NFT communities.
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
