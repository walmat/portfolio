import Image from 'next/image'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.nebula.radius};
  background: ${({ theme }) => theme.nebula.background};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.nebula.shadow};
  z-index: -1;

  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`

export const BackgroundImage = styled(Image)`
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 2;
`

export const AccentImage = styled(Image)`
  position: absolute;
  right: -122px;
  bottom: -148px;
  height: 364px;
  width: 364px;
  object-fit: cover;
  z-index: 1;
`

export const RectangleImage = styled(Image)`
  position: absolute;
  right: -184px;
  top: -148px;
  height: 272px;
  width: 272px;
  object-fit: cover;
  z-index: 1;
`
