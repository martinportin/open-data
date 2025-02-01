import { render, screen } from '@testing-library/react';
import PrincipalsTableBody from '../../../principalsTableBody';

export function renderPrincipalsTableBody(principalsList: Principal[]) {
  const table = document.createElement('table');

  render(<PrincipalsTableBody principals={principalsList} />, {
    container: document.body.appendChild(table)
  });

  return {
    getASingleTableRow: () => screen.queryByRole('row'),
    getTableRows: () => screen.getAllByRole('row')
  };
}
