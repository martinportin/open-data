import { render, screen } from '@testing-library/react';
import TranslationsProvider from '@/app/components/TranslationsProvider';
import initTranslations from '@/app/i18n';
import SearchInput from '../../../components/SearchInput';

export async function renderSearchInput(searchInputProps: SearchInputProps) {
  const locale = 'en';
  const i18nNamespaces = ['principals'];
  const { resources } = await initTranslations(locale, i18nNamespaces);
  render(
    <TranslationsProvider
      locale={locale}
      namespaces={i18nNamespaces}
      resources={resources}
    >
      <SearchInput {...searchInputProps} />
    </TranslationsProvider>
  );

  return {
    screen,
    getSearchInput: () => screen.getByRole('textbox', { name: /search/i }),
    getSearchInputValue: () => searchInputProps.searchInputValue,
    getHandleInputChange: () => searchInputProps.handleInputChange
  };
}
