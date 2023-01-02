import { NextFont } from '@next/font/dist/types'
import { createGlobalStyle, css } from 'styled-components'

import { Theme } from './themes'

export const _Keyframes = css`
  @keyframes playing {
    0% {
      height: 3px;
    }

    50% {
      height: 12px;
    }

    to {
      height: 3px;
    }
  }
`

export const Keyframes = () => {
  return <>{_Keyframes}</>
}

export const _ResetStyles = css<{ silka: NextFont; moranga: NextFont }>`
  * {
    outline: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
  }

  html,
  body,
  #__next {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-width: 100vw;
  }

  img {
    overflow-clip-margin: content-box;
    overflow: clip;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${({ moranga }) => moranga.style.fontFamily};
  }

  p,
  a,
  div,
  span,
  button,
  input,
  textarea {
    font-family: ${({ silka }) => silka.style.fontFamily};
    font-weight: 400;
    font-style: normal;
  }
`

export const ResetStyles = () => {
  return <>{_ResetStyles}</>
}

export const _ThemeStyles = css`
  html {
    background: ${({ theme }: { theme: Theme }) => theme.colors.background};
  }
`

export const ThemeStyles = () => {
  return <>{_ThemeStyles}</>
}

export const GlobalStyles = createGlobalStyle<{
  silka: NextFont
  moranga: NextFont
}>`
  ${_ResetStyles}
  ${_Keyframes}
  ${_ThemeStyles}
`
