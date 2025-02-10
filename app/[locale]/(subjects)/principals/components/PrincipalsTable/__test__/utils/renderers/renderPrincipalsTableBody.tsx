import { render, screen } from '@testing-library/react';
import PrincipalsTableBody from '../../../components/PrincipalsTableBody';
import { principalsTableBodyProps } from '../mocks/props';

export function renderPrincipalsTableBody() {
  const table = document.createElement('table');
  render(<PrincipalsTableBody {...principalsTableBodyProps} />, {
    container: document.body.appendChild(table)
  });

  return {
    getTableRows: () => screen.getAllByRole('row')
  };
}
