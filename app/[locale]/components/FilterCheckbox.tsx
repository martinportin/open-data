'use client;';

import { useTranslation } from 'react-i18next';

export default function FilterCheckbox({
  labelName,
  id,
  checked,
  handleCheckboxChange
}: Readonly<{
  labelName: string;
  id: string;
  checked: boolean;
  handleCheckboxChange: React.ChangeEventHandler<HTMLInputElement>;
}>) {
  const { t } = useTranslation();

  return (
    <>
      <label htmlFor={id}>{t(labelName)}</label>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
    </>
  );
}
