import React, { useEffect, useRef, useState } from 'react';
import { type Theme, ThemeContext } from './ThemeContext';

export type ThemeProviderProps = {
  theme?: Theme;
  children: React.ReactNode;
};

export const ThemeProvider = ({ theme: propTheme, children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme | undefined>(propTheme);
  const lastPropTheme = useRef<Theme | undefined>(propTheme);

  // sync props.theme to state
  useEffect(() => {
    if (propTheme !== lastPropTheme.current) {
      setTheme(propTheme);
      lastPropTheme.current = propTheme;
    }
  }, [propTheme]);

  useEffect(() => {
    // when theme changes to 'dark', add 'dark' class to document, else remove it
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
