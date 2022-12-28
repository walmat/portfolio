import Image from 'next/image'
import styled from 'styled-components'
import { breakpoints } from 'styles'

export const Container = styled.div<{ $name: string }>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme, $name }) => theme[$name].radius};
  overflow: hidden;
  background: ${({ theme, $name }) => theme[$name].background};
  box-shadow: ${({ theme, $name }) => theme[$name].shadow};

  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`

export const CornerContainer = styled.div`
  background: ${({ theme }) => theme.cornerItem.background};
  box-shadow: ${({ theme }) => theme.cornerItem.shadow};
  width: 36px;
  height: 36px;
  border-radius: 18px;
  position: absolute;
  bottom: 14px;
  left: 14px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  transition: box-shadow 0.2s ease-out 0s;
  will-change: transform;

  &:hover {
    cursor: pointer;
    transition: box-shadow 0.2s ease-out 0s;
    box-shadow: ${({ theme }) => theme.cornerItem.hover};
  }
`

export const SocialIcon = styled(Image)<{ $name: string }>`
  ${({ $name }) => $name === 'twitter' && 'transform: scale(0.7)'};
  ${({ theme, $name }) =>
    breakpoints({
      theme,
      cssProp: 'transform',
      values: [
        {
          [theme.breakpoints[0]]:
            $name === 'twitter' ? 'scale(0.7)' : 'scale(1)',
          [theme.breakpoints[1]]: 'scale(0.7)',
          [theme.breakpoints[2]]: 'scale(1)'
        }
      ]
    })}
`
