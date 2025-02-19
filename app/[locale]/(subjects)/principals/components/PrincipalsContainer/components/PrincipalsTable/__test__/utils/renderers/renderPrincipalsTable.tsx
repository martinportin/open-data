import { render, screen } from '@testing-library/react';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/app/components/TranslationsProvider';
import PrincipalsTable from '../../../PrincipalsTable';
import { sevenPrincipals } from '../mocks/props';

export async function renderPrincipalsTable() {
  const locale = 'en';
  const i18nNamespaces = ['principals'];
  const { resources } = await initTranslations(locale, i18nNamespaces);
  render(
    <TranslationsProvider
      locale={locale}
      namespaces={i18nNamespaces}
      resources={resources}
    >
      <PrincipalsTable principals={sevenPrincipals.principals} />
    </TranslationsProvider>
  );

  return {
    getTable: () => screen.getByRole('table')
  };
}
