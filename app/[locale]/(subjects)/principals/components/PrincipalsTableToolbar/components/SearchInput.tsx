import initTranslations from '@/app/i18n';

export default async function SearchInput({
  params,
  searchInputValue,
  handleInputChange
}: Readonly<{
  params: Promise<{ locale: string }>;
  searchInputValue: string;
  handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
}>) {
  const { locale } = await params;
  const namespaces = ['common'];
  const { t } = await initTranslations(locale, namespaces);
  return (
    <label>
      {t('search')}:
      <input id="search" value={searchInputValue} onInput={handleInputChange} />
    </label>
  );
}
