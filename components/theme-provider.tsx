"use client";

import * as React from "react";

type Theme = "default" | "amber" | "emerald" | "blue";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
};

const initialState: ThemeProviderState = {
  theme: "default",
  setTheme: () => null,
  isDark: false,
  setIsDark: () => null,
};

const ThemeProviderContext =
  React.createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "default",
  storageKey = "ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<Theme>(
    () =>
      (typeof window !== "undefined" &&
        (localStorage.getItem(storageKey) as Theme)) ||
      defaultTheme
  );

  const [isDark, setIsDark] = React.useState<boolean>(
    () =>
      typeof window !== "undefined" &&
      localStorage.getItem("ui-dark-mode") === "true"
  );

  React.useEffect(() => {
    const root = window.document.documentElement;

    // Remove all theme classes
    root.classList.remove(
      "theme-default",
      "theme-amber",
      "theme-emerald",
      "theme-blue"
    );

    // Add the current theme class
    root.classList.add(`theme-${theme}`);
  }, [theme]);

  React.useEffect(() => {
    const root = window.document.documentElement;

    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
    isDark,
    setIsDark: (dark: boolean) => {
      localStorage.setItem("ui-dark-mode", String(dark));
      setIsDark(dark);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
