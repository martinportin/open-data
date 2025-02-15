import { render, screen } from '@testing-library/react';
import PrincipalsTableHeader from '../../../components/PrincipalsTableHeader';
import { principalsTableHeaderProps } from '../mocks/props';

export function renderPrincipalsTableHeader() {
  const table = document.createElement('table');
  render(<PrincipalsTableHeader {...principalsTableHeaderProps} />, {
    container: document.body.appendChild(table)
  });

  return {
    getOrganizationNumberColumnHeader: () =>
      screen.getByRole('columnheader', { name: /Organization Number/i }),
    getNameColumnHeader: () =>
      screen.getByRole('columnheader', { name: /Name/i }),
    getTypeColumnHeader: () =>
      screen.getByRole('columnheader', { name: /Type/i })
  };
}
