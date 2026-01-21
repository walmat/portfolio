"use client";

import { useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useThemeContext } from "@/providers/theme";

const LONG_PRESS_DURATION = 500;

const toggle = {
  light: {
    x: 8,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30,
    },
  },
  dark: {
    x: 36,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30,
    },
  },
};

const iconVariants = {
  initial: {
    scale: 0,
    rotate: -45,
  },
  animate: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
  exit: {
    scale: 0,
    rotate: 45,
    transition: {
      duration: 0.15,
      ease: "easeOut",
    },
  },
};

export default function DarkModeSwitch() {
  const { theme, rawTheme, setTheme } = useThemeContext();
  const longPressTimer = useRef<NodeJS.Timeout | null>(null);
  const didLongPress = useRef(false);

  const isSystemMode = rawTheme === "system";

  const handleTapStart = useCallback(() => {
    didLongPress.current = false;
    longPressTimer.current = setTimeout(() => {
      didLongPress.current = true;
      setTheme("system");
    }, LONG_PRESS_DURATION);
  }, [setTheme]);

  const clearLongPressTimer = useCallback(() => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  }, []);

  const handleTap = useCallback(() => {
    clearLongPressTimer();
    if (didLongPress.current) {
      return;
    }
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme, setTheme, clearLongPressTimer]);

  const getIconKey = () => {
    if (isSystemMode) return "system";
    return theme === "light" ? "sun" : "moon";
  };

  const getIconSrc = () => {
    if (isSystemMode) return "/system.svg";
    return theme === "light" ? "/sun.svg" : "/moon.svg";
  };

  return (
    <motion.div className="rounded-[32px] h-full w-full flex items-center justify-center bg-card shadow-[inset_0_0_0_2px_var(--border)] cursor-grab active:cursor-grabbing">
      <motion.div
        onTapStart={handleTapStart}
        onTap={handleTap}
        onTapCancel={clearLongPressTimer}
        onPointerUp={clearLongPressTimer}
        className="no-drag h-12 w-20 rounded-[40px] flex items-center relative bg-muted shadow-[inset_0_0_0_2px_var(--border)] cursor-pointer"
      >
        <motion.div
          animate={theme === "light" ? "light" : "dark"}
          initial={theme === "light" ? "light" : "dark"}
          variants={toggle}
          className="w-9 h-9 rounded-[30px] bg-black absolute flex items-center justify-center origin-center"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={getIconKey()}
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              src={getIconSrc()}
              alt=""
            />
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
