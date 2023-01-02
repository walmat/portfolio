import { useMemo, useState } from 'react'
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

const grid = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.24
    }
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.24
    }
  }
}

interface Item {
  key: string
  Component: JSX.Element
}

const Grid = () => {
  const items: Item[] = useMemo(() => {
    return [
      {
        key: 'biography',
        Component: <Biography />
      },
      {
        key: 'github',
        Component: (
          <Social
            {...{
              width: 64,
              height: 64,
              name: 'github',
              href: 'https://github.com/walmat'
            }}
          />
        )
      },
      {
        key: 'nebula',
        Component: <Nebula />
      },
      {
        key: 'spotify',
        Component: <Spotify />
      },
      {
        key: 'twitter',
        Component: (
          <Social
            {...{
              width: 75.121,
              height: 61.052,
              href: 'https://twitter.com/Mattwall7',
              name: 'twitter'
            }}
          />
        )
      },
      {
        key: 'tigerbob',
        Component: <Tigerbob />
      },
      {
        key: 'blog',
        Component: <Blog />
      },
      {
        key: 'theme',
        Component: <Theme />
      },
      {
        key: 'recur',
        Component: <Recur />
      },
      {
        key: 'contact',
        Component: <Contact />
      }
    ]
  }, [])

  const [rowHeight, setRowHeight] = useState(280)

  const { active } = useFiltersContext()

  const children = useMemo(() => {
    return items.map(({ key, Component }) => {
      console.log(Component)
      return <div key={key}>{Component}</div>
    })
  }, [items])

  return (
    <S.GridContainer
      initial="initial"
      animate="animate"
      exit="initial"
      variants={grid}
    >
      <S.Container>
        <ResponsiveGridLayout
          useCSSTransforms
          isDraggable={!isMobile}
          isResizable={false}
          layouts={{ lg: lg[active], md: md[active], sm: mobile[active] }}
          breakpoints={{ lg: 1199, md: 799, sm: 0 }}
          cols={{ lg: 4, md: 4, sm: 2 }}
          onBreakpointChange={(breakpoint) =>
            setRowHeight(rowHeights[breakpoint])
          }
          containerPadding={[16, 32]}
          rowHeight={rowHeight}
          margin={[16, 16]}
        >
          {children}
        </ResponsiveGridLayout>
      </S.Container>
    </S.GridContainer>
  )
}

export default Grid
