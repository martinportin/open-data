import { render, screen } from '@testing-library/react';
import PrincipalsTable from '../../../PrincipalsTable';
import {
  principalsTableHeaderProps,
  principalsTableBodyPropsLarge
} from '../mocks/props';

export function renderPrincipalsTable() {
  render(
    <PrincipalsTable
      principalsTableHeaderProps={principalsTableHeaderProps}
      principalsTableBodyProps={principalsTableBodyPropsLarge}
    />
  );

  return {
    getTable: () => screen.getByRole('table')
  };
}
