import { useState } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'

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

import * as S from './styles'

interface RowHeights {
  [key: string]: number
}

interface Paddings {
  [key: string]: [number, number]
}

const ResponsiveGridLayout = WidthProvider(Responsive)

const lg = [
  { i: 'biography', x: 0, y: 0, w: 2, h: 1 },
  { i: 'github', x: 2, y: 0, w: 1, h: 1 },
  { i: 'nebula', x: 3, y: 0, w: 1, h: 2 },
  { i: 'spotify', x: 0, y: 1, w: 1, h: 1 },
  { i: 'twitter', x: 1, y: 1, w: 1, h: 1 },
  { i: 'tigerbob', x: 2, y: 1, w: 1, h: 2 },
  { i: 'blog', x: 0, y: 2, w: 2, h: 1 },
  { i: 'theme', x: 3, y: 2, w: 1, h: 1 },
  { i: 'recur', x: 0, y: 3, w: 2, h: 1 },
  { i: 'contact', x: 2, y: 3, w: 2, h: 1 }
]

const md = [
  { i: 'biography', x: 0, y: 0, w: 2, h: 2 },
  { i: 'github', x: 2, y: 0, w: 1, h: 1 },
  { i: 'nebula', x: 3, y: 0, w: 1, h: 2 },
  { i: 'spotify', x: 0, y: 2, w: 2, h: 1 },
  { i: 'tigerbob', x: 2, y: 1, w: 1, h: 2 },
  { i: 'theme', x: 3, y: 2, w: 1, h: 1 },
  { i: 'blog', x: 0, y: 3, w: 2, h: 2 },
  { i: 'recur', x: 2, y: 3, w: 2, h: 1 },
  { i: 'twitter', x: 1, y: 5, w: 1, h: 1 },
  { i: 'contact', x: 2, y: 4, w: 2, h: 2 }
]

const mobile = [
  { i: 'biography', x: 0, y: 0, w: 2, h: 2 },
  { i: 'github', x: 0, y: 2, w: 2, h: 1 },
  { i: 'twitter', x: 0, y: 3, w: 1, h: 1 },
  { i: 'nebula', x: 3, y: 0, w: 1, h: 2 },
  { i: 'tigerbob', x: 0, y: 4, w: 1, h: 2 },
  { i: 'theme', x: 3, y: 2, w: 1, h: 1 },
  { i: 'spotify', x: 0, y: 6, w: 2, h: 2 },
  { i: 'blog', x: 0, y: 8, w: 2, h: 2 },
  { i: 'recur', x: 0, y: 3, w: 2, h: 1 },
  { i: 'contact', x: 2, y: 3, w: 2, h: 2 }
]

const rowHeights: RowHeights = {
  lg: 280,
  md: 180,
  sm: 164,
  xs: 164,
  xxs: 164
}

const paddings: Paddings = {
  lg: [64, 0],
  md: [16, 16],
  sm: [16, 16],
  xs: [16, 16],
  xxs: [16, 16]
}

const Grid = () => {
  const [rowHeight, setRowHeight] = useState(280)

  return (
    <S.GridContainer>
      <S.Container>
        <ResponsiveGridLayout
          isResizable={false}
          layouts={{ lg, md, sm: mobile }}
          breakpoints={{ lg: 1199, md: 799, sm: 0 }}
          cols={{ lg: 4, md: 4, sm: 2 }}
          onBreakpointChange={(breakpoint) =>
            setRowHeight(rowHeights[breakpoint])
          }
          containerPadding={paddings}
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
