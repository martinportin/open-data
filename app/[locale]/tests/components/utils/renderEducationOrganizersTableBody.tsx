import { render } from '@testing-library/react';
import EducationOrganizersTableBody from '../../../components/EducationOrganizersTableBody';

export default function renderEductaionOrganizersaTableBody(
  educationOrganizers: EducationOrganizers[],
  ...names: RegExp[]
) {
  const screen = render(
    <table>
      <EducationOrganizersTableBody educationOrganizers={educationOrganizers} />
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
