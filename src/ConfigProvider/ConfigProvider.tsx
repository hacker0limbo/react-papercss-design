import { LocaleProvider } from '../i18n/LocaleProvider';
import { type Locale } from '../i18n/locales';
import { type Theme } from '../theme/ThemeContext';
import { ThemeProvider } from '../theme/ThemeProvider';

export type ConfigProviderProps = {
  theme?: Theme;
  locale?: Locale;
  children?: React.ReactNode;
};

export const ConfigProvider = ({ theme, locale, children }: ConfigProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <LocaleProvider locale={locale}>{children}</LocaleProvider>
    </ThemeProvider>
  );
};

export type { Locale, Theme };
