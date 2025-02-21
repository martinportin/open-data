'use client';

import { useTranslation } from 'react-i18next';

export default function FilterCheckbox({
  principalType,
  isChecked,
  handleCheckboxChange
}: Readonly<FilterCheckboxProps>) {
  const { t } = useTranslation();
  return (
    <label>
      {t(`${principalType}`)}:
      <input
        id={`${principalType}Checkbox`}
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </label>
  );
}
