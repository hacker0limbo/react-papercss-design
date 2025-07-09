import { createContext } from 'react';
export type Theme = 'light' | 'dark';

export type ThemeContextType = {
  theme?: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme | undefined>>;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
