'use client';

import { useTranslation } from 'react-i18next';

export default function FilterSearchInput({
  labelName,
  id,
  value,
  handleInputChange
}: Readonly<{
  labelName: string;
  id: string;
  value: string;
  handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
}>) {
  const { t } = useTranslation();

  return (
    <>
      <label htmlFor={id}>{t(labelName)}</label>
      <input id={id} type="text" value={value} onChange={handleInputChange} />
    </>
  );
}
