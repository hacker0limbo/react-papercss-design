import { get } from 'lodash-es';
import { useEffect, useRef, useState } from 'react';
import { LocaleContext, LocaleContextType } from './LocaleContext';
import { Locale, locales } from './locales';

type LocaleProviderProps = {
  locale?: Locale;
  children: React.ReactNode;
};

export const LocaleProvider = ({ locale: propLocale = 'en-US', children }: LocaleProviderProps) => {
  const [locale, setLocale] = useState<Locale>(propLocale);
  const localeDict = locales[locale] ?? locales['en-US'];
  const lastPropLocale = useRef<Locale>(propLocale);

  // sync props.locale to state
  useEffect(() => {
    if (propLocale !== lastPropLocale.current) {
      setLocale(propLocale);
      lastPropLocale.current = propLocale;
    }
  }, [propLocale]);

  const t: LocaleContextType['t'] = (id) => get(localeDict, id, id);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>{children}</LocaleContext.Provider>
  );
};
