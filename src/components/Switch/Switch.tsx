import { AnimatePresence } from 'framer-motion'
import { useThemeContext, ThemeOptions } from 'providers'

import * as S from './styles'

const toggle = {
  light: {
    x: 8,
    transition: {
      x: { type: 'spring', stiffness: 200, damping: 17.5 },
      duration: 0.3,
      ease: 'easeInOut'
    }
  },
  dark: {
    x: 36,
    transition: {
      x: { type: 'spring', stiffness: 200, damping: 17.5 },
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
}

export default function DarkModeSwitch() {
  const { theme, setTheme } = useThemeContext()

  const handleSwitch = () => {
    if (theme === ThemeOptions[0]) {
      setTheme(ThemeOptions[1])
    } else {
      setTheme(ThemeOptions[0])
    }
  }

  return (
    <S.Container onTap={handleSwitch}>
      <S.Background>
        <S.Toggle
          animate={theme === ThemeOptions[0] ? 'light' : 'dark'}
          initial={theme === ThemeOptions[0] ? 'light' : 'dark'}
          variants={toggle}
        >
          <AnimatePresence mode="wait">
            {theme === ThemeOptions[0] && (
              <S.Icon
                animate={{
                  scale: 1,
                  transition: {
                    scale: { type: 'spring', stiffness: 200, damping: 17.5 },
                    duration: 0.12,
                    ease: 'easeInOut'
                  }
                }}
                exit={{
                  scale: 0,
                  transition: {
                    scale: { type: 'spring', stiffness: 200, damping: 17.5 },
                    duration: 0.12,
                    ease: 'easeInOut'
                  }
                }}
                src="/sun.svg"
              />
            )}

            {theme === ThemeOptions[1] && (
              <S.Icon
                animate={{
                  scale: 1,
                  transition: {
                    scale: { type: 'spring', stiffness: 200, damping: 17.5 },
                    duration: 0.12,
                    ease: 'easeInOut'
                  }
                }}
                exit={{
                  scale: 0,
                  transition: {
                    scale: { type: 'spring', stiffness: 200, damping: 17.5 },
                    duration: 0.12,
                    ease: 'easeInOut'
                  }
                }}
                src="/moon.svg"
              />
            )}
          </AnimatePresence>
        </S.Toggle>
      </S.Background>
    </S.Container>
  )
}
