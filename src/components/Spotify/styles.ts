import styled from 'styled-components'
import Image from 'next/image'
import { breakpoints } from 'styles'

export const SpotifyWrapper = styled.div<{ $opacity: number }>`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 32px 38px;
  border-radius: ${({ theme }) => theme.spotify.radius};
  overflow: hidden;
  background: ${({ theme }) => theme.spotify.background};
  box-shadow: ${({ theme }) => theme.spotify.shadow};
  opacity: ${({ $opacity }) => $opacity};

  cursor: grab;
  &:active {
    cursor: grabbing;
  }

  ${({ theme }) =>
    breakpoints({
      theme,
      cssProp: 'padding',
      values: [
        {
          [theme.breakpoints[0]]: '32px 38px',
          [theme.breakpoints[1]]: '28px 32px',
          [theme.breakpoints[2]]: '32px 38px'
        }
      ]
    })}
`

export const AlbumArt = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.25;
  z-index: 1;
`

export const SpotifyImage = styled(Image)`
  margin-left: -4px;
  z-index: 2;
  width: 72px;
  height: 72px;

  ${({ theme }) =>
    breakpoints({
      theme,
      cssProp: 'width',
      values: [
        {
          [theme.breakpoints[0]]: '72px',
          [theme.breakpoints[1]]: '36px',
          [theme.breakpoints[2]]: '54px'
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
          [theme.breakpoints[1]]: '36px',
          [theme.breakpoints[2]]: '54px'
        }
      ]
    })}
`

export const SpotifyMetadata = styled.div``

export const SpotifyNowPlaying = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 0px;
`

export const SpotifyStatus = styled.p<{ isPlaying: boolean }>`
  margin-left: 4px;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.25px;
  font-weight: 400;
  color: ${({ isPlaying, theme }) =>
    isPlaying ? 'rgb(110, 210, 183)' : theme.colors.dim};
`

export const SpotifyStatusContainer = styled.div`
  height: 20px;
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`

export const SpotifyStatusSlice = styled.div<{
  timing: number
  isPlaying: boolean
  h: number
}>`
  ${({ timing, isPlaying }) =>
    isPlaying ? `animation: playing ${timing}s infinite ease;` : ''}

  width: 3px;
  height: ${({ h }) => h}px;
  margin-right: 3px;
  background: ${({ isPlaying, theme }) =>
    isPlaying ? 'rgb(110, 210, 183)' : theme.colors.dim};
  border-radius: 1.5px;
`

export const SpotifySongTitle = styled.h2`
  transition: opacity 0.5s ease 0s;
  display: inline-block;
  font-size: 24px;
  line-height: 32px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    opacity: 0.5;
    cursor: pointer;
    transition: opacity 0.5s ease 0s;
  }

  ${({ theme }) =>
    breakpoints({
      theme,
      cssProp: 'font-size',
      values: [
        {
          [theme.breakpoints[0]]: '32px',
          [theme.breakpoints[1]]: '20px',
          [theme.breakpoints[2]]: '24px'
        }
      ]
    })}

  ${({ theme }) =>
    breakpoints({
      theme,
      cssProp: 'line-height',
      values: [
        {
          [theme.breakpoints[0]]: '38px',
          [theme.breakpoints[1]]: '32px',
          [theme.breakpoints[2]]: '32px'
        }
      ]
    })}
`

export const SpotifyArtist = styled.p`
  transition: opacity 0.5s ease 0s;
  display: inline-block;

  font-size: 15px;
  letter-spacing: 0.5px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 22px;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
    transition: opacity 0.5s ease 0s;
  }
`
