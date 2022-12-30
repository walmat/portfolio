import { createContext, PropsWithChildren, useContext, useState } from 'react'
import { setCookie } from 'cookies-next'

export const ThemeOptions = ['light', 'dark']

interface ThemeContext {
  theme: string
  setTheme: (theme: string) => void
  themes: string[]
}

const ThemeContext = createContext<ThemeContext>({} as ThemeContext)

interface ThemeProviderProps {
  initialTheme: string
  children: PropsWithChildren<React.ReactNode>
}

export const ThemeProvider = ({
  initialTheme,
  children
}: ThemeProviderProps) => {
  const [theme, _setTheme] = useState(initialTheme ?? 'light')

  const setTheme = (theme: string) => {
    _setTheme(theme)
    setCookie('theme', theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: ThemeOptions }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)
