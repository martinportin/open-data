import initTranslations from '@/app/i18n';

export default async function PrincipalsHeader({
  locale
}: Readonly<{ locale: string }>) {
  const i18nNamespaces = ['principals'];
  const { t } = await initTranslations(locale, i18nNamespaces);

  return <h1>{t('principals')}</h1>;
}
