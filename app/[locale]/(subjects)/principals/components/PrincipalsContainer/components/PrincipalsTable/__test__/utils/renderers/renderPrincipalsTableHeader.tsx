'use client';

import { render, screen } from '@testing-library/react';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/app/components/TranslationsProvider';
import PrincipalsTableHeader from '../../../components/PrincipalsTableHeader';

export async function renderPrincipalsTableHeader() {
  const locale = 'en';
  const i18nNamespaces = ['principals'];
  const { resources } = await initTranslations(locale, i18nNamespaces);
  const table = document.createElement('table');
  render(
    <TranslationsProvider
      locale={locale}
      namespaces={i18nNamespaces}
      resources={resources}
    >
      <PrincipalsTableHeader />
    </TranslationsProvider>,
    {
      container: document.body.appendChild(table)
    }
  );

  return {
    getOrganizationNumberColumnHeader: () =>
      screen.getByRole('columnheader', { name: /organizationNumber/i }),
    getNameColumnHeader: () =>
      screen.getByRole('columnheader', { name: /name/i }),
    getTypeColumnHeader: () =>
      screen.getByRole('columnheader', { name: /type/i })
  };
}
