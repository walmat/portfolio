import { Paragraph } from 'components/Typography/styles'
import styled from 'styled-components'

import { breakpoints } from 'styles'

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 180px;
  width: 100%;
  padding: 0px 3.5vw;

  ${({ theme }) =>
    breakpoints({
      theme,
      cssProp: 'height',
      values: [
        {
          [theme.breakpoints[0]]: '180px',
          [theme.breakpoints[1]]: '136px',
          [theme.breakpoints[2]]: '136px'
        }
      ]
    })}

  ${({ theme }) =>
    breakpoints({
      theme,
      cssProp: 'flex-direction',
      values: [
        {
          [theme.breakpoints[0]]: 'column',
          [theme.breakpoints[1]]: 'row',
          [theme.breakpoints[2]]: 'row'
        }
      ]
    })}

${({ theme }) =>
    breakpoints({
      theme,
      cssProp: 'justify-content',
      values: [
        {
          [theme.breakpoints[0]]: 'center',
          [theme.breakpoints[1]]: 'space-between',
          [theme.breakpoints[2]]: 'space-between'
        }
      ]
    })}
`

export const Contact = styled(Paragraph)`
  display: none;
  transition: all 0.2s ease 0s;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  ${({ theme }) =>
    breakpoints({
      theme,
      cssProp: 'display',
      values: [
        {
          [theme.breakpoints[0]]: 'none',
          [theme.breakpoints[1]]: 'flex',
          [theme.breakpoints[2]]: 'flex'
        }
      ]
    })}

  ${({ theme }) =>
    breakpoints({
      theme,
      cssProp: 'margin',
      values: [
        {
          [theme.breakpoints[0]]: '36px 0 24px 0',
          [theme.breakpoints[1]]: '0',
          [theme.breakpoints[2]]: '0'
        }
      ]
    })}
`

export const Title = styled.h1`
  --bg-size: 400%;
  --color-one: #776af2;
  --color-two: #a097fd;
  font-size: 3rem;
  margin: 36px 0 24px 0;
  background: linear-gradient(30deg, #776af2 13.4%, #a097fd 86.61%);
  line-height: 1;
  height: 42px;

  @media (prefers-reduced-motion: no-preference) {
    font-size: 3rem;
    background: linear-gradient(
        90deg,
        var(--color-one),
        var(--color-two),
        var(--color-one)
      )
      0 0 / var(--bg-size) 100%;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    animation: move-bg 30s infinite linear;

    @keyframes move-bg {
      to {
        background-position: var(--bg-size) 0;
      }
    }
  }

  ${({ theme }) =>
    breakpoints({
      theme,
      cssProp: 'margin',
      values: [
        {
          [theme.breakpoints[0]]: '36px 0 24px 0',
          [theme.breakpoints[1]]: '0',
          [theme.breakpoints[2]]: '0'
        }
      ]
    })}
`
