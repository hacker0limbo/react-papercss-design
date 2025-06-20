import React, { useEffect, useRef, useState } from 'react';
import { ThemeContext } from '../theme';
import { Theme } from '../types';

export type ConfigProviderProps = {
  theme?: Theme;
  children: React.ReactNode;
};

/**
 * ConfigProvider component
 */
export const ConfigProvider = ({ theme: propsTheme = 'light', children }: ConfigProviderProps) => {
  const [theme, setTheme] = useState<Theme>(propsTheme);
  const lastPropTheme = useRef<Theme>(propsTheme);

  // sync props.theme to state
  useEffect(() => {
    if (propsTheme !== lastPropTheme.current) {
      setTheme(propsTheme);
      lastPropTheme.current = propsTheme;
    }
  }, [propsTheme]);

  useEffect(() => {
    // when theme changes to 'dark', add 'dark' class to document, else remove it
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
