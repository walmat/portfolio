import React, { PropsWithChildren } from 'react'
import App, { AppContext } from 'next/app'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import { ThemeProvider } from 'styled-components'
import { AnimatePresence } from 'framer-motion'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { getCookie } from 'cookies-next'
import localFont from '@next/font/local'

export const moranga = localFont({ src: '../fonts/Moranga-Bold.otf' })
export const silka = localFont({
  src: [
    {
      path: '../fonts/Silka-Regular.ttf',
      weight: '400'
    },
    {
      path: '../fonts/Silka-Medium.ttf',
      weight: '500'
    }
  ]
})

import {
  FiltersProvider,
  SpotifyProvider,
  ThemeProvider as Theme,
  useThemeContext
} from 'providers'

import { repositoryName } from 'prismicio'
import { GlobalStyles, themes } from 'styles'

interface ProvidersProps {
  initialTheme: string
  children: PropsWithChildren<React.ReactNode>
}

function Providers({ initialTheme, children }: ProvidersProps) {
  return (
    <Theme initialTheme={initialTheme}>
      <SpotifyProvider>
        <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
          <PrismicPreview repositoryName={repositoryName}>
            <FiltersProvider>{children}</FiltersProvider>
          </PrismicPreview>
        </PrismicProvider>
      </SpotifyProvider>
    </Theme>
  )
}

interface ThemeSwitchProps {
  children: PropsWithChildren<React.ReactNode>
}

const ThemeSwitch = ({ children }: ThemeSwitchProps) => {
  const { theme } = useThemeContext()

  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
}

interface ApplicationProps extends AppProps {
  theme: string
}

function Application({ Component, pageProps, theme }: ApplicationProps) {
  return (
    <Providers initialTheme={theme}>
      <Head>
        <title>mtw.</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="An aspiring homesteader and avid believer that Web3 has the potential to change the world."
        />
      </Head>
      <ThemeSwitch>
        <GlobalStyles silka={silka} moranga={moranga} />
        <AnimatePresence
          mode="wait"
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </ThemeSwitch>
    </Providers>
  )
}

Application.getInitialProps = async (context: AppContext) => {
  const props = await App.getInitialProps(context)
  const theme = getCookie('theme', {
    req: context.ctx.req,
    res: context.ctx.res
  })

  return {
    ...props,
    theme: theme ?? 'light'
  }
}

export default Application
