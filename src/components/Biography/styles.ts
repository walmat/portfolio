import styled from 'styled-components'
import Image from 'next/image'
import { breakpoints } from 'styles'

export const Container = styled.div<{ $opacity: number }>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 36px 42px;
  border-radius: ${({ theme }) => theme.card.radius};
  opacity: ${({ $opacity }) => $opacity};
  overflow: hidden;
  background: ${({ theme }) => theme.card.background};
  box-shadow: ${({ theme }) => theme.card.shadow};

  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`

export const ImageContainer = styled(Image)`
  border-radius: 50%;

  ${({ theme }) =>
    breakpoints({
      theme,
      cssProp: 'width',
      values: [
        {
          [theme.breakpoints[0]]: '72px',
          [theme.breakpoints[1]]: 'auto',
          [theme.breakpoints[2]]: 'auto'
        }
      ]
    })}

  ${({ theme }) =>
    breakpoints({
      theme,
      cssProp: 'height',
      values: [
        {
          [theme.breakpoints[0]]: '72px',
          [theme.breakpoints[1]]: '108px',
          [theme.breakpoints[2]]: '72px'
        }
      ]
    })}
`

export const BiographyText = styled.div`
  font-size: 14px;
  line-height: 26px;
  letter-spacing: 0.5px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
`

export const BiographyName = styled.h2`
  display: inline;
  font-size: 40px;
`
