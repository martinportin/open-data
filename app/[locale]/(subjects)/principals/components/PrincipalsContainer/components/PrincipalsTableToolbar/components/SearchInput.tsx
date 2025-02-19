'use client';

import { useTranslation } from 'react-i18next';

export default function SearchInput({
  searchInputValue,
  handleInputChange
}: Readonly<SearchInputProps>) {
  const { t } = useTranslation();

  return (
    <label>
      {t('search')}:
      <input
        id="search"
        value={searchInputValue}
        onChange={handleInputChange}
      />
    </label>
  );
}
