import styled from 'styled-components'
import { motion } from 'framer-motion'

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
