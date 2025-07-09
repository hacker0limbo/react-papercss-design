import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { tokens } from './tokens';

// a hook to get and set current theme, and return papercss design tokens
export default function useTheme() {
  const themeContext = useContext(ThemeContext);

  return {
    theme: themeContext?.theme,
    setTheme: themeContext?.setTheme ?? (() => {}),
    tokens: tokens[themeContext?.theme ?? 'light'],
  };
}
