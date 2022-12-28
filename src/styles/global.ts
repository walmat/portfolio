import { createGlobalStyle } from 'styled-components'

import { Theme } from './themes'

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Moranga Bold';
    src: url('/fonts/Moranga Bold.otf');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Silka Medium';
    src: url('/fonts/Silka-Medium.ttf');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Silka Regular';
    src: url('/fonts/Silka-Regular.ttf');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'TT Interphases Pro Thin';
    src: url('/fonts/TT-Interphases-Pro/TT Interphases Pro Thin.otf');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'TT Interphases Pro Thin';
    src: url('/fonts/TT-Interphases-Pro/TT Interphases Pro Thin Italic.otf');
    font-weight: 100;
    font-style: italic;
  }

  @font-face {
    font-family: 'TT Interphases Pro ExtraLight';
    src: url('/fonts/TT-Interphases-Pro/TT Interphases Pro ExtraLight.otf');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'TT Interphases Pro ExtraLight';
    src: url('/fonts/TT-Interphases-Pro/TT Interphases Pro ExtraLight Italic.otf');
    font-weight: 200;
    font-style: italic;
  }

  @font-face {
    font-family: 'TT Interphases Pro Light';
    src: url('/fonts/TT-Interphases-Pro/TT Interphases Pro Light.otf');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'TT Interphases Pro Light';
    src: url('/fonts/TT-Interphases-Pro/TT Interphases Pro Light Italic.otf');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'TT Interphases Pro Regular';
    src: url('/fonts/TT-Interphases-Pro/TT Interphases Pro Regular.otf');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'TT Interphases Pro Medium';
    src: url('/fonts/TT-Interphases-Pro/TT Interphases Pro Medium.otf');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'TT Interphases Pro Medium';

    src: url('/fonts/TT-Interphases-Pro/TT Interphases Pro Medium Italic.otf');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'TT Interphases Pro DemiBold';
    src: url('/fonts/TT-Interphases-Pro/TT Interphases Pro DemiBold.otf');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'TT Interphases Pro DemiBold';
    src: url('/fonts/TT-Interphases-Pro/TT Interphases Pro DemiBold Italic.otf');
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: 'TT Interphases Pro Bold';
    src: url('/fonts/TT-Interphases-Pro/TT Interphases Pro Bold.otf');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'TT Interphases Pro Bold';
    src: url('/fonts/TT-Interphases-Pro/TT Interphases Pro Bold Italic.otf');
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: 'TT Interphases Pro ExtraBold';
    src: url('/fonts/TT-Interphases-Pro/TT Interphases Pro ExtraBold.otf');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'TT Interphases Pro ExtraBold';
    src: url('/fonts/TT-Interphases-Pro/TT Interphases Pro ExtraBold Italic.otf');
    font-weight: 800;
    font-style: italic;
  }

  @font-face {
    font-family: 'TT Interphases Pro Black';
    src: url('/fonts/TT-Interphases-Pro/TT Interphases Pro Black.otf');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'TT Interphases Pro Black';
    src: url('/fonts/TT-Interphases-Pro/TT Interphases Pro Black Italic.otf');
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: 'Beastly';
    src: url('/fonts/Beastly/Beastly-14Point.otf');
    font-weight: 400;
    font-style: normal;
  }

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

  * {
    outline: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;

    transition: background 0.2s ease 0s;
  }

  html {
    font-size: 100%;
  }

  img {
    overflow-clip-margin: content-box;
    overflow: clip;
  }

  a {
    color: inherit;
    text-decoration: none
  }

  html, body, #__next {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-width: 100vw;
    font-family: 'Silka Medium', sans-serif;
    font-weight: 500;
    font-style: normal;

    background: ${({ theme }: { theme: Theme }) => theme.colors.background};
    color: ${({ theme }: { theme: Theme }) => theme.colors.primary};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Beastly', sans-serif;
  }

  .react-grid-layout {
    position: relative;
    transition: height 200ms ease;
  }
  .react-grid-item {
    transition: all 200ms ease;
    transition-property: left, top;
  }
  .react-grid-item img {
    pointer-events: none;
    user-select: none;
  }
  .react-grid-item.cssTransforms {
    transition-property: transform;
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
    opacity: 0.2;
    transition-duration: 100ms;
    z-index: 2;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  .react-grid-item > .react-resizable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
  }

  .react-grid-item > .react-resizable-handle::after {
    content: "";
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
  .react-grid-item > .react-resizable-handle.react-resizable-handle-w,
  .react-grid-item > .react-resizable-handle.react-resizable-handle-e {
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
    background-position: bottom right;
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
  .react-resizable-handle-w,
  .react-resizable-handle-e {
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

`
