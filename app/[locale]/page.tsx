import initTranslations from '../i18n';

export default async function Home({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  const { t } = await initTranslations(locale, ['home']);
  return <h1>{t('header')}</h1>;
}
