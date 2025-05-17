import { render } from '@testing-library/react';
import PrincipalsTableBody from '../../components/PrincipalsTableBody';

export default function renderPrincipalsTableBody(
  principals: Principal[],
  ...names: RegExp[]
) {
  const table = document.createElement('table');
  const screen = render(<PrincipalsTableBody principals={principals} />, {
    container: document.body.appendChild(table)
  });

  function getColumnHeadersByName(names: RegExp[]) {
    return names.filter((name) => screen.getByRole('columnheader', { name }));
  }

  function getTableDataCellsByName(names: RegExp[]) {
    return names.filter((name) => screen.getByRole('cell', { name }));
  }

  return {
    getRow: () => screen.queryByRole('row'),
    getRows: () => screen.getAllByRole('row'),
    getColumnHeader: () =>
      names?.length
        ? getColumnHeadersByName(names)
        : screen.getAllByRole('columnheader'),
    getTableDataCells: () =>
      names?.length
        ? getTableDataCellsByName(names)
        : screen.getAllByRole('cell')
  };
}
