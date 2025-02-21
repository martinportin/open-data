import TranslationsProvider from '@/app/components/TranslationsProvider';
import FilterCheckbox from '../../../components/FilterCheckbox';
import { render, screen } from '@testing-library/react';
import initTranslations from '@/app/i18n';

export async function renderFilterCheckbox(checkboxProps: FilterCheckboxProps) {
  const locale = 'en';
  const i18nNamespaces = ['principals'];
  const { resources } = await initTranslations(locale, i18nNamespaces);

  render(
    <TranslationsProvider
      locale={locale}
      namespaces={i18nNamespaces}
      resources={resources}
    >
      <FilterCheckbox {...checkboxProps} />
    </TranslationsProvider>
  );

  return {
    getFilterCheckbox: () =>
      screen.getByRole('checkbox', { name: /principalType/i }),
    getHandleInputChange: () => checkboxProps.handleCheckboxChange
  };
}
