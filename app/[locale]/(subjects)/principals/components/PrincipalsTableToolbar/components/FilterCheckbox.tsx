import initTranslations from '@/app/i18n';

export default async function FilterCheckbox({
  params,
  principalType,
  isChecked,
  handleInputChange
}: Readonly<{
  params: Promise<{ locale: string }>;
  principalType: string;
  isChecked: boolean;
  handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
}>) {
  const { locale } = await params;
  const namespaces = ['principals'];
  const { t } = await initTranslations(locale, namespaces);

  return (
    <label>
      {t(`${principalType}`)}
      <input
        id={`${principalType}Checkbox`}
        type="checkbox"
        checked={isChecked}
        onChange={handleInputChange}
      />
    </label>
  );
}
