'use client';

import { render } from '@testing-library/react';
import FilterSearchInput from '../../components/FilterSearchInput';
import translationProviderProps from './utils/props';
import TranslationsProvider from '@/app/components/TranslationsProvider';

export default async function renderFilterSearchInput(
  name: RegExp,
  id: string,
  value: string,
  handleInputChange: React.ChangeEventHandler<HTMLInputElement>
) {
  const { locale, i18Namespaces, resources } = await translationProviderProps();

  const labelName = 'labelName';

  const screen = render(
    <TranslationsProvider
      locale={locale}
      namespaces={i18Namespaces}
      resources={resources}
    >
      <FilterSearchInput
        id={id}
        labelName={labelName}
        value={value}
        handleInputChange={handleInputChange}
      />
    </TranslationsProvider>
  );

  return {
    getSearchInput: () => screen.getByRole('searchbox', { name }),
    getHandleInputChange: () => handleInputChange
  };
}
