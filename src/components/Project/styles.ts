import NextImage from 'next/image'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoints } from 'styles'

export const Wrapper = styled(motion.div)`
  position: absolute;
  top: 120px;
  width: 100%;
  will-change: transform, opacity;
  transition: all 0.3s ease-out 0s;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 320px;
  padding: 50px 0;

  ${({ theme }) =>
    breakpoints({
      theme,
      cssProp: 'padding',
      values: [
        {
          [theme.breakpoints[0]]: '50px 0',
          [theme.breakpoints[1]]: '50px 0',
          [theme.breakpoints[2]]: '60px 0',
          [theme.breakpoints[3]]: '60px 0'
        }
      ]
    })}

  ${({ theme }) =>
    breakpoints({
      theme,
      cssProp: 'max-width',
      values: [
        {
          [theme.breakpoints[0]]: '320px',
          [theme.breakpoints[1]]: '800px',
          [theme.breakpoints[2]]: '800px',
          [theme.breakpoints[3]]: '1200px'
        }
      ]
    })}
`

export const Meta = styled.div`
  padding: 0;

  ${({ theme }) =>
    breakpoints({
      theme,
      cssProp: 'padding',
      values: [
        {
          [theme.breakpoints[0]]: '0',
          [theme.breakpoints[1]]: '0 32px',
          [theme.breakpoints[2]]: '0 16px'
        }
      ]
    })}
`

export const Button = styled(motion.button)`
  position: absolute;
  width: 46px;
  height: 46px;
  top: calc(37px);
  left: 32px;
  border-radius: ${({ theme }) => theme.close.radius};
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  transition: all 0.3s ease-out 0s;
  background: ${({ theme }) => theme.close.background};
  border: ${({ theme }) => theme.close.border};

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.close.hover};
  }

  ${({ theme }) =>
    breakpoints({
      theme,
      cssProp: 'left',
      values: [
        {
          [theme.breakpoints[0]]: '32px',
          [theme.breakpoints[1]]: 'calc(50% - 23px)',
          [theme.breakpoints[2]]: 'calc(50% - 23px)'
        }
      ]
    })};
`

export const Title = styled.h2`
  font-size: 36px;
  line-height: 48px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 8px;
`

export const TextWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  ${({ theme }) =>
    breakpoints({
      theme,
      cssProp: 'grid-template-columns',
      values: [
        {
          [theme.breakpoints[0]]: '1fr',
          [theme.breakpoints[1]]: '1fr 1fr',
          [theme.breakpoints[2]]: '1fr 1fr',
          [theme.breakpoints[3]]: '1fr 1fr'
        }
      ]
    })}
`

export const Section = styled.div``

export const Links = styled.div`
  display: flex;
`

export const Link = styled.a`
  height: 38px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 16px;
  border-radius: 19px;
  letter-spacing: 0.25px;
  font-size: 14px;
  margin-right: 8px;
  border: ${({ theme }) => theme.link.border};
  transition: all 0.2s ease-out 0s;
  background: ${({ theme }) => theme.link.background};
  color: ${({ theme }) => theme.link.color};

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.link.hover};
  }
`

export const LinkTag = styled.div`
  margin-left: 6px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`

export const Description = styled.p`
  font-size: 26px;
  line-height: 40px;
  letter-spacing: 0.25px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 16px;
`

export const Paragraph = styled.p`
  font-size: 15px;
  line-height: 26px;
  letter-spacing: 0.5px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 16px;
`

export const GridContainer = styled.div`
  max-width: 100%;
  position: relative;
  margin: 32px auto 0px;
  padding-bottom: 80px;

  ${({ theme }) =>
    breakpoints({
      theme,
      cssProp: 'max-width',
      values: [
        {
          [theme.breakpoints[0]]: '320px',
          [theme.breakpoints[1]]: '800px',
          [theme.breakpoints[2]]: '800px',
          [theme.breakpoints[3]]: '1200px'
        }
      ]
    })}
`

export const GridItem = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.card.radius};
  overflow: hidden;
  background: ${({ theme }) => theme.card.background};
  box-shadow: ${({ theme }) => theme.card.shadow};
  object-fit: cover;

  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`

export const GridItemCentered = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.card.radius};
  overflow: hidden;
  background: ${({ theme }) => theme.card.background};
  box-shadow: ${({ theme }) => theme.card.shadow};

  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`

export const Image = styled(NextImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
