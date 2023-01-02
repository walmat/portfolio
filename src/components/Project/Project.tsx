import { Arrow, Close } from 'components'
import { useAnimation } from 'framer-motion'
import { useRouter } from 'next/router'
import { Responsive, WidthProvider } from 'react-grid-layout'
import { isMobile } from 'react-device-detect'

import { Project as ProjectProps, RowHeights } from 'meta'

import * as S from './styles'
import { useMemo, useState } from 'react'

const ResponsiveGridLayout = WidthProvider(Responsive)

const button = {
  initial: {
    scale: 1
  },
  animate: {
    scale: 1.1
  }
}

const container = {
  initial: {
    y: 0
  },
  animate: {
    y: 20,
    transition: {
      duration: 0.24
    }
  }
}

const lg = [
  { i: 'featured', x: 0, y: 0, w: 2, h: 1 },
  { i: 'inverted', x: 2, y: 0, w: 1, h: 1 },
  { i: 'logo', x: 3, y: 0, w: 1, h: 1 },
  { i: 'first', x: 0, y: 1, w: 1, h: 1 },
  { i: 'second', x: 1, y: 1, w: 2, h: 1 },
  { i: 'third', x: 3, y: 1, w: 1, h: 1 },
  { i: 'fourth', x: 0, y: 2, w: 1, h: 1 },
  { i: 'fifth', x: 1, y: 2, w: 1, h: 1 },
  { i: 'sixth', x: 3, y: 2, w: 2, h: 1 }
]

const md = [
  { i: 'featured', x: 0, y: 0, w: 2, h: 1 },
  { i: 'inverted', x: 2, y: 0, w: 1, h: 1 },
  { i: 'logo', x: 3, y: 0, w: 1, h: 1 },
  { i: 'first', x: 0, y: 1, w: 1, h: 1 },
  { i: 'second', x: 1, y: 1, w: 2, h: 1 },
  { i: 'third', x: 3, y: 1, w: 1, h: 1 },
  { i: 'fourth', x: 0, y: 2, w: 1, h: 1 },
  { i: 'fifth', x: 1, y: 2, w: 1, h: 1 },
  { i: 'sixth', x: 3, y: 2, w: 2, h: 1 }
]

const sm = [
  { i: 'featured', x: 0, y: 0, w: 2, h: 1 },
  { i: 'inverted', x: 0, y: 0, w: 1, h: 1 },
  { i: 'logo', x: 1, y: 0, w: 1, h: 1 },
  { i: 'second', x: 0, y: 2, w: 2, h: 1 },
  { i: 'first', x: 0, y: 3, w: 1, h: 1 },
  { i: 'third', x: 1, y: 3, w: 1, h: 1 },
  { i: 'fourth', x: 0, y: 5, w: 1, h: 1 },
  { i: 'fifth', x: 1, y: 5, w: 1, h: 1 },
  { i: 'sixth', x: 0, y: 4, w: 2, h: 1 }
]

export const rowHeights: RowHeights = {
  lg: 280,
  md: 180,
  sm: 164
}

function Project({ name, description, body, images, links }: ProjectProps) {
  const animation = useAnimation()
  const { push } = useRouter()
  const back = () => push('/')

  const children = useMemo(() => {
    return Object.keys(images).map((key) => (
      <div key={key}>
        <S.GridItem>
          <S.Image
            src={images[key].src}
            width={800}
            height={800}
            alt={key}
            {...images[key].props}
          />
        </S.GridItem>
      </div>
    ))
  }, [images])

  const [rowHeight, setRowHeight] = useState(280)

  return (
    <>
      <S.Button
        onTap={back}
        animate={animation}
        variants={button}
        onHoverStart={() => animation.start('animate')}
        onHoverEnd={() => animation.start('initial')}
      >
        <Close />
      </S.Button>

      <S.Wrapper animate={animation} variants={container}>
        <S.Container>
          <S.Meta>
            <S.Title>{name}</S.Title>
            <S.TextWrapper>
              <S.Section>
                <S.Description>{description}</S.Description>
                <S.Links>
                  {links.map(({ href, label }) => (
                    <S.Link target="_blank" key={href} href={href}>
                      {label}
                      <S.LinkTag>
                        <Arrow />
                      </S.LinkTag>
                    </S.Link>
                  ))}
                </S.Links>
              </S.Section>
              <S.Section>
                {body.map((body, index) => (
                  <S.Paragraph key={index}>{body}</S.Paragraph>
                ))}
              </S.Section>
            </S.TextWrapper>
          </S.Meta>
          <S.GridContainer>
            <ResponsiveGridLayout
              useCSSTransforms
              isDraggable={!isMobile}
              isResizable={false}
              layouts={{ lg, md, sm }}
              breakpoints={{ lg: 1199, md: 799, sm: 0 }}
              cols={{ lg: 4, md: 4, sm: 2 }}
              onBreakpointChange={(breakpoint) =>
                setRowHeight(rowHeights[breakpoint])
              }
              containerPadding={[0, 0]}
              rowHeight={rowHeight}
              margin={[16, 16]}
            >
              {children}
            </ResponsiveGridLayout>
          </S.GridContainer>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default Project
