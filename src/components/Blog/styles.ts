import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Paragraph } from 'components/Typography/styles'
import { breakpoints } from 'styles'

export const Wrapper = styled.div<{ $opacity: number }>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 36px 42px;
  border-radius: ${({ theme }) => theme.card.radius};
  overflow: hidden;
  opacity: ${({ $opacity }) => $opacity};
  background: ${({ theme }) => theme.card.background};
  box-shadow: ${({ theme }) => theme.card.shadow};
`

export const Copy = styled.div``

export const Footer = styled.div`
  width: 100%;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
`

export const Description = styled(Paragraph)`
  max-height: 124px;
  overflow: hidden;
  position: relative;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(
      transparent 60px,
      ${({ theme }) => theme.card.background}
    );

    ${({ theme }) =>
      breakpoints({
        theme,
        cssProp: 'background',
        values: [
          {
            [theme
              .breakpoints[0]]: `linear-gradient(transparent 60px, ${theme.card.background})`,
            [theme
              .breakpoints[1]]: `linear-gradient(transparent 120px, ${theme.card.background})`,
            [theme
              .breakpoints[2]]: `linear-gradient(transparent 150px, ${theme.card.background})`,
            [theme
              .breakpoints[3]]: `linear-gradient(transparent 75px, ${theme.card.background})`
          }
        ]
      })}
  }

  ${({ theme }) =>
    breakpoints({
      theme,
      cssProp: 'max-height',
      values: [
        {
          [theme.breakpoints[0]]: '124px',
          [theme.breakpoints[1]]: '150px',
          [theme.breakpoints[2]]: '180px',
          [theme.breakpoints[3]]: '94px'
        }
      ]
    })}
`

export const Button = styled(motion.button)`
  height: 36px;
  padding: 0px 12px;
  top: 20px;
  right: 20px;
  border-radius: 18px;
  box-shadow: ${({ theme }) => theme.contact.button.shadow};
  border: none;
  background: ${({ theme }) => theme.contact.button.background};
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  transition: all 0.3s ease-out 0s;
  will-change: box-shadow, transform;

  &:hover {
    cursor: pointer;
    transition: box-shadow 0.2s ease-out 0s;
    box-shadow: ${({ theme }) => theme.contact.button.hover};
  }
`

export const ButtonIcon = styled.img`
  transition: 0.3s;
`

export const ButtonText = styled.p`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.25px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 6px;
`

export const Date = styled.p`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.25px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.dim};
`
