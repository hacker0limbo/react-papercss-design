import { useContext } from 'react';
import { LocaleContext } from './LocaleContext';

export const useLocale = () => {
  const localeContext = useContext(LocaleContext);

  return {
    locale: localeContext?.locale ?? 'en-US',
    setLocale: localeContext?.setLocale ?? (() => {}),
    t: localeContext?.t ?? ((id) => id),
  };
};

export default useLocale;
