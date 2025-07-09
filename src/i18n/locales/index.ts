import enUS from './en-US';
import zhCN from './zh-CN';

export type LocaleDict = typeof enUS;
export type Locale = keyof typeof locales;

export const locales = {
  'zh-CN': zhCN,
  'en-US': enUS,
};
