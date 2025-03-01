import TranslationsProvider from '@/app/components/TranslationsProvider';
import PrincipalsContainer from './components/PrincipalsContainer/PrincipalsContainer';
import getPrincipals from './services/SwedishNationalAgencyForEducation';
import initTranslations from '@/app/i18n';

export default async function PrincipalsPage({
  params
}: Readonly<{ params: Promise<{ locale: 'en' | 'sv' }> }>) {
  const { locale } = await params;
  const i18nNamespaces = ['common', 'home', 'principals'];
  const { resources } = await initTranslations(locale, i18nNamespaces);
  const principalsExtract = await getPrincipals();

  return (
    <TranslationsProvider
      locale={locale}
      namespaces={i18nNamespaces}
      resources={resources}
    >
      <PrincipalsContainer
        principals={principalsExtract.principals}
        dateTimeOfExtract={
          locale === 'en'
            ? principalsExtract.englishDateTimeOfExtract
            : principalsExtract.swedishDateTimeOfExtract
        }
      />
    </TranslationsProvider>
  );
}
