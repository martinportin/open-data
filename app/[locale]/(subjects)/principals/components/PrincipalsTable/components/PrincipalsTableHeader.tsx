import initTranslations from '@/app/i18n';

export default async function PrincipalsTableHeader({
  params
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  const namespaces = ['principals'];
  const { t } = await initTranslations(locale, namespaces);
  return (
    <thead>
      <tr>
        <th>{t('organizationNumber')}</th>
        <th>{t('name')}</th>
        <th>{t('type')}</th>
      </tr>
    </thead>
  );
}
