import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  position: relative;
  display: flex;
  font-size: 14px;
  border-radius: ${({ theme }) => theme.filters.radius};
  background: ${({ theme }) => theme.filters.background};
  padding: ${({ theme }) => theme.filters.padding};
  border: ${({ theme }) => theme.filters.border};
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const Option = styled(motion.div)`
  border-radius: 50px;
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0 16px;
  cursor: pointer;
  transition: opacity 0.3s ease 0s;
`

export const OptionText = styled.p<{ $selected: boolean }>`
  position: relative;
  font-size: 14px;
  color: ${({ theme }) => theme.filters.option.color};
  transition: all 0.2s ease 0s;
  font-weight: 700;
  z-index: 2;

  &:hover {
    color: ${({ $selected, theme }) =>
      !$selected && theme.filters.option.hover};
  }
`

export const Highlight = styled(motion.div)`
  position: absolute;
  z-index: -1;
  height: 32px;
  left: 5px;
  width: 50px;
  background: ${({ theme }) => theme.filters.highlight.background};
  border-radius: ${({ theme }) => theme.filters.highlight.radius};
  padding: ${({ theme }) => theme.filters.highlight.padding};

  transition: all 0.2s ease 0s;
`
