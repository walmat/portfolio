"use client";

import { useTheme } from "next-themes";

export const ThemeOptions = ["light", "dark"];

export const useThemeContext = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return {
    theme: resolvedTheme || theme || "light",
    setTheme,
    toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
    themes: ThemeOptions,
  };
};
