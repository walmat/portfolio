import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)`
  position: absolute;
  top: 120px;
  width: 100%;
  will-change: transform, opacity;
  transition: all 0.3s ease-out 0s;
`

export const Button = styled(motion.button)`
  position: absolute;
  width: 46px;
  height: 46px;
  top: calc(37px);
  left: calc(50% - 23px);
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
`
