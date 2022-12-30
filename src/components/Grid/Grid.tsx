import { useState } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'
import { isMobile } from 'react-device-detect'

import {
  Spotify,
  Biography,
  Social,
  Theme,
  Tigerbob,
  Contact,
  Blog,
  Nebula,
  Recur
} from 'components'

import { lg, md, mobile, rowHeights } from 'meta'
import * as S from './styles'
import { useFiltersContext } from 'providers'

const ResponsiveGridLayout = WidthProvider(Responsive)

const Grid = () => {
  const [rowHeight, setRowHeight] = useState(280)

  const { active } = useFiltersContext()

  return (
    <S.GridContainer>
      <S.Container>
        <ResponsiveGridLayout
          isDraggable={!isMobile}
          isResizable={false}
          layouts={{ lg: lg[active], md: md[active], sm: mobile[active] }}
          breakpoints={{ lg: 1199, md: 799, sm: 0 }}
          cols={{ lg: 4, md: 4, sm: 2 }}
          onBreakpointChange={(breakpoint) =>
            setRowHeight(rowHeights[breakpoint])
          }
          rowHeight={rowHeight}
          margin={[16, 16]}
        >
          <div key="biography">
            <Biography />
          </div>
          <div key="github">
            <Social
              name="github"
              href="https://github.com/walmat"
              height={64}
              width={64}
            />
          </div>
          <div key="nebula">
            <Nebula />
          </div>
          <div key="spotify">
            <Spotify />
          </div>
          <div key="twitter">
            <Social
              name="twitter"
              href="https://twitter.com/Mattwall7"
              height={61.052}
              width={75.121}
            />
          </div>
          <div key="tigerbob">
            <Tigerbob />
          </div>
          <div key="blog">
            <Blog />
          </div>
          <div key="theme">
            <Theme />
          </div>
          <div key="recur">
            <Recur />
          </div>
          <div key="contact">
            <Contact />
          </div>
        </ResponsiveGridLayout>
      </S.Container>
    </S.GridContainer>
  )
}

export default Grid
