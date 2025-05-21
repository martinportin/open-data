import { render } from '@testing-library/react';
import TranslationsProvider from '@/app/components/TranslationsProvider';
import initTranslations from '@/app/i18n';
import EducationOrganizersTableHeader from '../../components/EducationOrganizersTableHeader';

export default async function renderEducationOrganizersTableHeader(
  ...names: RegExp[]
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
      <table>
        <EducationOrganizersTableHeader />
      </table>
    </TranslationsProvider>
  );

  function getTableColumnHeadersByName(names: RegExp[]) {
    return names.filter((name) => screen.getByRole('columnheader', { name }));
  }

  return {
    getTableRows: () => screen.getAllByRole('row'),
    getTableColumnHeaders: () =>
      names?.length
        ? getTableColumnHeadersByName(names)
        : screen.getAllByRole('columnheader')
  };
}
