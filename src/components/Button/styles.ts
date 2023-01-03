import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Paragraph } from 'components/Typography/styles'

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

export const IconButton = styled.div`
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

export const ButtonWithMotion = styled(motion.div)`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  position: absolute;
  bottom: 14px;
  left: 14px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  overflow: hidden;
  transition: box-shadow 0.2s ease-out 0s;
  background: ${({ theme }) => theme.cornerItem.background};
  box-shadow: ${({ theme }) => theme.cornerItem.shadow};
  will-change: width, height, transform;
  border: none;
  z-index: 2;

  &:hover {
    cursor: pointer;
    transition: box-shadow 0.2s ease-out 0s;
    box-shadow: ${({ theme }) => theme.cornerItem.hover};
  }
`

export const ButtonWithMotionText = styled(motion.p)`
  margin: 0px 36px 0px 16px;
  font-size: 14px;
  line-height: normal;
  letter-spacing: 0.3px;
  font-weight: 400;
  white-space: nowrap;
  opacity: 1;
  color: ${({ theme }) => theme.colors.primary};
`

export const ButtonWithMotionIcon = styled(motion.div)`
  background: ${({ theme }) => theme.cornerItem.background};
  width: 36px;
  height: 36px;
  border-radius: 18px;
  position: absolute;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  right: 0px;
`

export const ButtonText = styled(Paragraph)`
  margin-left: 6px;
`
