import styled from 'styled-components'
import { motion } from 'framer-motion'

import { breakpoints } from 'styles'

export const GridContainer = styled(motion.div)`
  will-change: opacity;
  position: relative;
`

export const Container = styled.div`
  max-width: 375px;
  position: relative;
  margin: -16px auto 0 auto;
  padding-bottom: 80px;

  ${({ theme }) =>
    breakpoints({
      theme,
      cssProp: 'max-width',
      values: [
        {
          [theme.breakpoints[0]]: '375px',
          [theme.breakpoints[1]]: '800px',
          [theme.breakpoints[2]]: '1200px'
        }
      ]
    })}
`
