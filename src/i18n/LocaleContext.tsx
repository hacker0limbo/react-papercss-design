import { createContext } from 'react';
import { Locale } from './locales';

export type LocaleContextType = {
  locale: Locale;
  setLocale: React.Dispatch<React.SetStateAction<Locale>>;
  t: (id: string) => string;
};

export const LocaleContext = createContext<LocaleContextType | null>(null);
