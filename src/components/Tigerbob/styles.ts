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
  border-radius: ${({ theme }) => theme.tigerbob.radius};
  background: ${({ theme }) => theme.tigerbob.background};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.tigerbob.shadow};
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
  right: -322px;
  top: -348px;
  height: 564px;
  width: 564px;
  object-fit: cover;
  z-index: 1;
`

export const ExpandedCorner = styled(motion.div)`
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
  border: none;
  z-index: 2;

  &:hover {
    cursor: pointer;
    transition: box-shadow 0.2s ease-out 0s;
    box-shadow: ${({ theme }) => theme.cornerItem.hover};
  }
`

export const ExpandedCornerText = styled(motion.p)`
  margin: 0px 36px 0px 16px;
  font-size: 14px;
  line-height: normal;
  letter-spacing: 0.3px;
  font-weight: 400;
  white-space: nowrap;
  opacity: 1;
  color: ${({ theme }) => theme.colors.primary};
`

export const ExpandedCornerIcon = styled(motion.div)`
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
