import initTranslations from '../i18n';
import TranslationsProvider from '../components/TranslationsProvider';

const i18nNamespaces = ['home'];

export default async function Home({
  params
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      locale={locale}
      namespaces={i18nNamespaces}
      resources={resources}
    >
      <h1>{t('openData')}</h1>
    </TranslationsProvider>
  );
}
