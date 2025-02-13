import { render, screen } from '@testing-library/react';
import PrincipalsTableBody from '../../../components/PrincipalsTableBody';

export function renderPrincipalsTableBody(
  principalsTableBodyProps: PrincipalTableBodyProps
) {
  const table = document.createElement('table');
  render(<PrincipalsTableBody {...principalsTableBodyProps} />, {
    container: document.body.appendChild(table)
  });

  return {
    getOneTableRow: () => screen.queryByRole('row'),
    getTableRows: () => screen.getAllByRole('row')
  };
}
