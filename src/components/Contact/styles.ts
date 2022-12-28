import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 40px 44px;
  border-radius: ${({ theme }) => theme.card.radius};
  overflow: hidden;
  background: ${({ theme }) => theme.card.background};
  box-shadow: ${({ theme }) => theme.card.shadow};

  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`

export const Copy = styled.div``

export const Title = styled.h2`
  font-size: 24px;
  font-family: 'Moranga Bold';
  line-height: 32px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 4px;
`

export const Text = styled.p`
  font-size: 15px;
  font-family: 'Silka Regular';
  line-height: 26px;
  letter-spacing: 0.5px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
`

export const Subscribe = styled(motion.input)`
  border-top: none;
  border-right: none;
  border-left: none;
  border-image: initial;
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.contact.input.background};
  border-bottom: ${({ theme }) => theme.contact.input.border};
  padding: 12px 0px;
  font-size: 16px;
  font-family: 'Silka Regular';
  letter-spacing: 0.25px;
  font-weight: 400;
  margin-bottom: 8px;
  border-radius: 0px;

  @keyframes shake {
    0% {
      margin-left: 0rem;
    }
    25% {
      margin-left: 0.5rem;
    }
    75% {
      margin-left: -0.5rem;
    }
    100% {
      margin-left: 0rem;
    }
  }

  &:invalid {
    animation: shake 0.2s ease-in-out 0s 2;
    box-shadow: 0 0 0.6rem #ff0000;
  }
`

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
  font-family: 'Silka Medium';
  line-height: 24px;
  letter-spacing: 0.25px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 6px;
`

export const Error = styled.p`
  font-size: 14px;
  font-family: 'Silka Medium';
  line-height: 24px;
  letter-spacing: 0.25px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.error};
  margin-left: 6px;
`
