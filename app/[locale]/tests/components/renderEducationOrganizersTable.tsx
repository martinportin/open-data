import { render, within } from '@testing-library/react';
import EducationOrganizersTable from '../../components/EducationOrganizersTable';
import TranslationsProvider from '@/app/components/TranslationsProvider';
import initTranslations from '@/app/i18n';

export default async function renderEducationOrganizersTable(
  educationOrganizers: EducationOrganizers[]
) {
  const locale = 'en';
  const i18Namespaces = ['home'];
  const { resources } = await initTranslations(locale, i18Namespaces);
  const screen = render(
    <TranslationsProvider
      locale={locale}
      namespaces={i18Namespaces}
      resources={resources}
    >
      <EducationOrganizersTable educationOrganizers={educationOrganizers} />
    </TranslationsProvider>
  );

  function getFirstTableRow() {
    return screen.getAllByRole('row')[0];
  }

  function getAllButFirstTableRow() {
    return screen.getAllByRole('row').slice(1);
  }

  return {
    getTableColumnHeaders: () =>
      within(getFirstTableRow()).getAllByRole('columnheader'),
    getTableRows: () => getAllButFirstTableRow()
  };
}
