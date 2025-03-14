import PrincipalsFilterBar from '../../../PrincipalsFilterBar';
import { render, screen } from '@testing-library/react';
import TranslationsProvider from '@/app/components/TranslationsProvider';
import initTranslations from '@/app/i18n';

export default async function renderPrincipalsFilterBar(
  filterCheckboxProps: { principalType: string; isChecked: boolean }[]
) {
  const locale = 'en';
  const i18nNamespaces = ['principals'];
  const { resources } = await initTranslations(locale, i18nNamespaces);
  render(
    <TranslationsProvider
      locale={locale}
      namespaces={i18nNamespaces}
      resources={resources}
    >
      <PrincipalsFilterBar
        searchInputValue=""
        handleInputChange={jest.fn()}
        filterCheckboxes={filterCheckboxProps}
        handleCheckboxChange={jest.fn()}
      />
    </TranslationsProvider>
  );

  return {
    getSearchInput: () => screen.getByRole('textbox', { name: /search/i }),
    getSingleFilterCheckbox: () => screen.queryByRole('checkbox'),
    getFilterCheckboxes: () => screen.getAllByRole('checkbox')
  };
}
