import React, { PropsWithChildren } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import { ThemeProvider } from 'styled-components'
import { AnimatePresence } from 'framer-motion'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'

import {
  FiltersProvider,
  SpotifyProvider,
  ThemeProvider as Theme,
  useThemeContext
} from 'providers'

import { repositoryName } from 'prismicio'
import { GlobalStyles, themes } from 'styles'

interface ChildrenProps {
  children: PropsWithChildren<React.ReactNode>
}

function Providers({ children }: ChildrenProps) {
  return (
    <Theme>
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

const ThemeSwitch = ({ children }: ChildrenProps) => {
  const { theme } = useThemeContext()
  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
}

function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <ThemeSwitch>
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
        <GlobalStyles />
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </ThemeSwitch>
    </Providers>
  )
}

export default App
