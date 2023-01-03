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

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes peekUp {
    0% {
      transform: translateY(20px);
    }

    100% {
      transform: translateY(0);
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

  .react-grid-layout {
    position: relative;
    animation: fadeIn 1.75s, peekUp 1s;
  }

  .react-grid-item img {
    pointer-events: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .react-grid-item.resizing {
    z-index: 1;
    will-change: width, height;
  }

  .react-grid-item.react-draggable-dragging {
    transition: none;
    z-index: 3;
    will-change: transform;
  }

  .react-grid-item.dropping {
    visibility: hidden;
  }

  .react-grid-item.react-grid-placeholder {
    background: ${({ theme }) => theme.colors.dim};
    border-radius: 32px;
    opacity: 0.2;
    transition-duration: 0.1s;
    z-index: 2;
    -webkit-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  .react-grid-item > .react-resizable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
  }

  .react-grid-item > .react-resizable-handle:after {
    content: '';
    position: absolute;
    right: 3px;
    bottom: 3px;
    width: 5px;
    height: 5px;
    border-right: 2px solid rgba(0, 0, 0, 0.4);
    border-bottom: 2px solid rgba(0, 0, 0, 0.4);
  }

  .react-resizable-hide > .react-resizable-handle {
    display: none;
  }

  .react-grid-item > .react-resizable-handle.react-resizable-handle-sw {
    bottom: 0;
    left: 0;
    cursor: sw-resize;
    transform: rotate(90deg);
  }

  .react-grid-item > .react-resizable-handle.react-resizable-handle-se {
    bottom: 0;
    right: 0;
    cursor: se-resize;
  }

  .react-grid-item > .react-resizable-handle.react-resizable-handle-nw {
    top: 0;
    left: 0;
    cursor: nw-resize;
    transform: rotate(180deg);
  }

  .react-grid-item > .react-resizable-handle.react-resizable-handle-ne {
    top: 0;
    right: 0;
    cursor: ne-resize;
    transform: rotate(270deg);
  }

  .react-grid-item > .react-resizable-handle.react-resizable-handle-e,
  .react-grid-item > .react-resizable-handle.react-resizable-handle-w {
    top: 50%;
    margin-top: -10px;
    cursor: ew-resize;
  }

  .react-grid-item > .react-resizable-handle.react-resizable-handle-w {
    left: 0;
    transform: rotate(135deg);
  }

  .react-grid-item > .react-resizable-handle.react-resizable-handle-e {
    right: 0;
    transform: rotate(315deg);
  }

  .react-grid-item > .react-resizable-handle.react-resizable-handle-n,
  .react-grid-item > .react-resizable-handle.react-resizable-handle-s {
    left: 50%;
    margin-left: -10px;
    cursor: ns-resize;
  }

  .react-grid-item > .react-resizable-handle.react-resizable-handle-n {
    top: 0;
    transform: rotate(225deg);
  }

  .react-grid-item > .react-resizable-handle.react-resizable-handle-s {
    bottom: 0;
    transform: rotate(45deg);
  }

  .react-resizable {
    position: relative;
  }

  .react-resizable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    background-origin: content-box;
    box-sizing: border-box;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+');
    background-position: 100% 100%;
    padding: 0 3px 3px 0;
  }

  .react-resizable-handle-sw {
    bottom: 0;
    left: 0;
    cursor: sw-resize;
    transform: rotate(90deg);
  }

  .react-resizable-handle-se {
    bottom: 0;
    right: 0;
    cursor: se-resize;
  }

  .react-resizable-handle-nw {
    top: 0;
    left: 0;
    cursor: nw-resize;
    transform: rotate(180deg);
  }

  .react-resizable-handle-ne {
    top: 0;
    right: 0;
    cursor: ne-resize;
    transform: rotate(270deg);
  }

  .react-resizable-handle-e,
  .react-resizable-handle-w {
    top: 50%;
    margin-top: -10px;
    cursor: ew-resize;
  }

  .react-resizable-handle-w {
    left: 0;
    transform: rotate(135deg);
  }

  .react-resizable-handle-e {
    right: 0;
    transform: rotate(315deg);
  }

  .react-resizable-handle-n,
  .react-resizable-handle-s {
    left: 50%;
    margin-left: -10px;
    cursor: ns-resize;
  }

  .react-resizable-handle-n {
    top: 0;
    transform: rotate(225deg);
  }

  .react-resizable-handle-s {
    bottom: 0;
    transform: rotate(45deg);
  }

  .react-grid-item {
    transition: all 500ms ease 0s;
    will-change: transform;
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
