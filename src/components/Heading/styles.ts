import styled from 'styled-components'

export const H2 = styled.h2`
  transition: opacity 0.5s ease 0s;
  display: inline-block;
  font-size: 24px;
  font-family: 'Moranga Bold';
  line-height: 32px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
`
