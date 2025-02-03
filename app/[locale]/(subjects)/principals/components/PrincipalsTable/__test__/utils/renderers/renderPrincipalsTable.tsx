import { render, screen } from '@testing-library/react';
import PrincipalsTable from '../../../PrincipalsTable';

export function renderPrincipalsTable() {
  render(<PrincipalsTable />);

  return {
    getTable: () => screen.getByRole('table')
  };
}
