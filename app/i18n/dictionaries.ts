import 'server-only';

export type Locale = keyof typeof dictionaries;

const dictionaries = {
  'en-GB': () => import('./en.json').then((module) => module.default),
  'sv-SE': () => import('./sv.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};
