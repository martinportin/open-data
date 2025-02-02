import PrincipalsTableHeader from '../../../PrincipalsTableHeader';
import { params } from '@/app/[locale]/__test__/utils/mocks/params';
import { render, screen } from '@testing-library/react';

export async function renderPrincipalsTableHeader() {
  const table = document.createElement('table');

  const principalsTableHeader = await PrincipalsTableHeader(params);
  render(principalsTableHeader, {
    container: document.body.appendChild(table)
  });

  return {
    getOrganizationNumberColumnHeader: () =>
      screen.getByRole('columnheader', { name: /organizationNumber/i }),
    getNameColumnHeader: () =>
      screen.getByRole('columnheader', { name: /name/i }),
    getTypeColumnHeader: () =>
      screen.getByRole('columnheader', { name: /type/i })
  };
}
