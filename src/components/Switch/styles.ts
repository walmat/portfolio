import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  border-radius: ${({ theme }) => theme.switch.radius};
  height: 100%;
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  background: ${({ theme }) => theme.switch.container};
  box-shadow: ${({ theme }) => theme.switch.shadow};

  &:hover {
    cursor: pointer;
  }
`

export const Background = styled.div`
  height: 48px;
  width: 80px;
  border-radius: 40px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  background: ${({ theme }) => theme.switch.background};
  box-shadow: ${({ theme }) => theme.switch.shadow};
`

export const Toggle = styled(motion.div)`
  width: 36px;
  height: 36px;
  border-radius: 30px;
  background: ${({ theme }) => theme.switch.toggle};
  position: absolute;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;

  transform-origin: 50% 50% 0px;
`

export const Icon = styled(motion.img)``
