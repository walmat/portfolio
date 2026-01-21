"use client";

import { useTheme } from "next-themes";

export const ThemeOptions = ["light", "dark", "system"] as const;

export const useThemeContext = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return {
    theme: resolvedTheme || "light",
    rawTheme: theme || "system",
    setTheme,
    toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
    themes: ThemeOptions,
  };
};
