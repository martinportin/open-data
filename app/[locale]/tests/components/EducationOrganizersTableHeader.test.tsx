import renderEducationOrganizersTableHeader from './renderEducationOrganizersTableHeader';

describe('principals table header', () => {
  test('should render a table row', async () => {
    const { getTableRows } = await renderEducationOrganizersTableHeader();
    expect(getTableRows()).toHaveLength(1);
  });

  test('should render three column headers', async () => {
    const { getTableColumnHeaders } =
      await renderEducationOrganizersTableHeader();
    expect(getTableColumnHeaders()).toHaveLength(3);
  });

  test('should render a table column header for each name', async () => {
    const { getTableColumnHeaders } =
      await renderEducationOrganizersTableHeader(
        /organizationNumber/i,
        /displayName/i,
        /organizerType/i
      );
    expect(getTableColumnHeaders()).toHaveLength(3);
  });
});
