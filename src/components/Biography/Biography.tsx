import * as S from './styles'

function Biography() {
  return (
    <S.Container>
      <S.ImageWrapper>
        <S.ImageContainer src="/pfp.jpeg" alt="" width={72} height={72} />
      </S.ImageWrapper>
      <S.BiographyText>
        I&apos;m <S.BiographyName>Matthew</S.BiographyName>, a senior frontend
        engineer from the USA. I&apos;m extremely passionate about React, Web3,
        and automating anything I can. Thanks for stopping by!
      </S.BiographyText>
    </S.Container>
  )
}

export default Biography
