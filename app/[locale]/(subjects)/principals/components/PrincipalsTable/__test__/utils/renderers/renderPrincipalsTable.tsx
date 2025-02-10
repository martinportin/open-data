import { render, screen } from '@testing-library/react';
import PrincipalsTable from '../../../PrincipalsTable';
import { principalsTableHeaderProps } from '../mocks/props';
import { principalsTableBodyProps } from '../mocks/props';

export function renderPrincipalsTable() {
  render(
    <PrincipalsTable
      principalsTableHeaderProps={principalsTableHeaderProps}
      principalsTableBodyProps={principalsTableBodyProps}
    />
  );

  return {
    getTable: () => screen.getByRole('table')
  };
}
