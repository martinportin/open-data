import initTranslations from '@/app/i18n';

export default async function translationProviderProps() {
  const locale = 'en';
  const i18Namespaces = ['home'];
  const { resources } = await initTranslations(locale, i18Namespaces);

  return {
    locale,
    i18Namespaces,
    resources
  };
}
