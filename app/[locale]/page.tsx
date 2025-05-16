import initTranslations from '../i18n';
import TranslationsProvider from '../components/TranslationsProvider';

export default async function Home({
  params
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  const i18nNamespaces = ['home'];
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      locale={locale}
      namespaces={i18nNamespaces}
      resources={resources}
    >
      <main>
        <h1>{t('header')}</h1>
      </main>
    </TranslationsProvider>
  );
}
