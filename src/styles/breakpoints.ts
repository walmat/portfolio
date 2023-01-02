import { Theme } from 'styles'

interface Value {
  [key: string]: string | number
}

export enum CSSPropUnits {
  EMPTY = '',
  PX = 'px',
  EM = 'em',
  REM = 'rem',
  PERCENT = '%'
}

export enum MediaQueryTypes {
  MIN_WIDTH = 'min-width',
  MAX_WIDTH = 'max-width',
  MIN_HEIGHT = 'min-height',
  MAX_HEIGHT = 'max-height'
}

interface BreakPointProps {
  theme: Theme
  cssProp: string
  cssPropUnit?: CSSPropUnits
  values: Value[]
  mediaQueryType?: MediaQueryTypes
}

export const breakpoints = ({
  theme, // the theme object to use for the breakpoints
  cssProp = 'padding', // the CSS property to apply to the breakpoints
  cssPropUnit = CSSPropUnits.EMPTY, // the units of the CSS property (can set equal to "" and apply units to values directly)
  values = [], // array of objects, e.g. [{ 800: 60 }, ...] <-- 800 (key) = screen breakpoint, 60 (value) = CSS prop breakpoint
  mediaQueryType = MediaQueryTypes.MIN_WIDTH // media query breakpoint type, i.e.: max-width, min-width, max-height, min-height
}: BreakPointProps) => {
  const breakpointProps: string = theme.breakpoints.reduce(
    (mediaQueries, breakpoint) => {
      const bp = values.find((value) => value[breakpoint])
      if (!bp) return mediaQueries

      return (mediaQueries += `@media (${mediaQueryType}: ${breakpoint}) {\n\t${cssProp}: ${bp[breakpoint]}${cssPropUnit};\n}\n`)
    },
    ''
  )

  console.log({ breakpointProps })

  return breakpointProps
}
