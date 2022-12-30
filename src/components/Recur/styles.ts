import Image from 'next/image'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)<{ $opacity: number }>`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.recur.radius};
  background: ${({ theme }) => theme.recur.background};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.recur.shadow};
  z-index: -1;
  opacity: ${({ $opacity }) => $opacity};

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
  right: -182px;
  bottom: -122px;
  height: 454px;
  width: 454px;
  object-fit: cover;
  z-index: 1;
`

export const RectangleImage = styled(Image)`
  position: absolute;
  left: -100px;
  top: -48px;
  height: 272px;
  width: 272px;
  object-fit: cover;
  z-index: 1;
`
