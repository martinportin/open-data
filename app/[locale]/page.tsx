import initTranslations from '../i18n';
import ClientComponent from './components/ClientComponent';
import TranslationsProvider from '../components/TranslationsProvider';

export default async function Home({
  params
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  const namespaces = ['home'];
  const { t, resources } = await initTranslations(locale, namespaces);
  return (
    <TranslationsProvider
      locale={locale}
      namespaces={namespaces}
      resources={resources}
    >
      <h1>{t('header')}</h1>
      <ClientComponent />
    </TranslationsProvider>
  );
}
