import { render } from '@testing-library/react';
import PrincipalsTableBody from '../../components/PrincipalsTableBody';

export default function renderPrincipalsTableBody(
  principals: Principal[],
  ...names: RegExp[]
) {
  const screen = render(
    <table>
      <PrincipalsTableBody principals={principals} />
    </table>
  );

  function getTableColumnHeadersByName(names: RegExp[]) {
    return names.filter((name) => screen.getByRole('columnheader', { name }));
  }

  function getTableDataCellsByName(names: RegExp[]) {
    return names.filter((name) => screen.getByRole('cell', { name }));
  }

  return {
    getTableRow: () => screen.queryByRole('row'),
    getTableRows: () => screen.getAllByRole('row'),
    getTableColumnHeaders: () =>
      names?.length
        ? getTableColumnHeadersByName(names)
        : screen.getAllByRole('columnheader'),
    getTableDataCells: () =>
      names?.length
        ? getTableDataCellsByName(names)
        : screen.getAllByRole('cell')
  };
}
