import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState
} from 'react'

export const ThemeOptions = ['light', 'dark']

interface ThemeContext {
  theme: string
  setTheme: (theme: string) => void
  themes: string[]
}

const ThemeContext = createContext<ThemeContext>({} as ThemeContext)

interface ThemeProviderProps {
  children: PropsWithChildren<React.ReactNode>
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, _setTheme] = useState(ThemeOptions[0])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const theme = window.localStorage.getItem('theme')
      if (theme) {
        _setTheme(theme)
      }
    }
  }, [])

  const setTheme = (theme: string) => {
    _setTheme(theme)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', theme)
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: ThemeOptions }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)
