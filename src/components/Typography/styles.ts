import styled from 'styled-components'

export const H2 = styled.h2`
  display: inline-block;
  font-size: 24px;
  font-family: 'Moranga Bold';
  line-height: 32px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 4px;
`

export const Paragraph = styled.p`
  display: inline-block;
  font-size: 15px;
  font-family: 'Silka Regular';
  line-height: 26px;
  letter-spacing: 0.5px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
`
