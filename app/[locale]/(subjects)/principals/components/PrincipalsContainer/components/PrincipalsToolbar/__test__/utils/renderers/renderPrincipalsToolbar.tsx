import PrincipalsToolbar from '../../../PrincipalsToolbar';
import { render, screen } from '@testing-library/react';
import TranslationsProvider from '@/app/components/TranslationsProvider';
import initTranslations from '@/app/i18n';

export default async function renderPrincipalsToolbar(
  searchInputProps: SearchInputProps,
  filterCheckboxProps: FilterCheckboxProps[]
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
      <PrincipalsToolbar
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
