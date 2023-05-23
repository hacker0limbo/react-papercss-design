import React, { useEffect, useState } from 'react';
import { ThemeContext } from '../theme';
import { Theme } from '../types';

export type ConfigProviderProps = {
  theme?: Theme;
  children: React.ReactNode;
};

export const ConfigProvider = ({ theme: propsTheme = 'light', children }: ConfigProviderProps) => {
  const [theme, setTheme] = useState<Theme>(propsTheme);

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
