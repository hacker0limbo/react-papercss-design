import { useContext } from 'react';
import { ThemeContext, tokens } from '../theme';

export default function useTheme() {
  const themeContext = useContext(ThemeContext);

  return {
    theme: themeContext?.theme ?? 'light',
    setTheme: themeContext?.setTheme ?? (() => {}),
    tokens: tokens[themeContext?.theme ?? 'light'],
  };
}
