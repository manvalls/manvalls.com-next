import { default as es } from './es';
import { default as en } from './en';

export const locales = ['es', 'en'];

export const getTranslations = (locale: string) => {
  switch (locale) {
    case 'es':
      return es;
    case 'en':
    default:
      return en;
  }
}
