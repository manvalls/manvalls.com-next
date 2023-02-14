import serverContext from 'server-only-context';

import locales from '@/locales';

import { default as es } from './es';
import { default as en } from './en';

export const [getLocale, setLocale] = serverContext(locales[0])

export const getTranslations = () => {
  switch (getLocale()) {
    case 'es':
      return es;
    case 'en':
    default:
      return en;
  }
}

export { locales };
