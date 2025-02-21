import initTranslations from '../i18n';
import TranslationsProvider from '../components/TranslationsProvider';

export default async function Home({
  params
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  const i18nNamespaces = ['common', 'home', 'principals'];
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      locale={locale}
      namespaces={i18nNamespaces}
      resources={resources}
    >
      <h1>{t('home:openData')}</h1>
    </TranslationsProvider>
  );
}
