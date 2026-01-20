'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useThemeContext, ThemeOptions } from '@/providers/theme'

const toggle = {
  light: {
    x: 8,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 30
    }
  },
  dark: {
    x: 36,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 30
    }
  }
}

const iconVariants = {
  initial: {
    scale: 0,
    rotate: -45
  },
  animate: {
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 25
    }
  },
  exit: {
    scale: 0,
    rotate: 45,
    transition: {
      duration: 0.15,
      ease: 'easeOut'
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
    <motion.div className="rounded-[32px] h-full w-full flex items-center justify-center bg-card shadow-[inset_0_0_0_2px_var(--border)] cursor-grab active:cursor-grabbing">
      <motion.div
        onTap={handleSwitch}
        className="no-drag h-12 w-20 rounded-[40px] flex items-center relative bg-muted shadow-[inset_0_0_0_2px_var(--border)] cursor-pointer"
      >
        <motion.div
          animate={theme === ThemeOptions[0] ? 'light' : 'dark'}
          initial={theme === ThemeOptions[0] ? 'light' : 'dark'}
          variants={toggle}
          className="w-9 h-9 rounded-[30px] bg-black absolute flex items-center justify-center origin-center"
        >
          <AnimatePresence mode="wait">
            {theme === ThemeOptions[0] && (
              <motion.img
                key="sun"
                variants={iconVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                src="/sun.svg"
                alt=""
              />
            )}

            {theme === ThemeOptions[1] && (
              <motion.img
                key="moon"
                variants={iconVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                src="/moon.svg"
                alt=""
              />
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
