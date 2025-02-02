import { renderPrincipalsTableHeader } from './utils/renderers/renderPrincipalsTableHeader';

describe('principals table header', () => {
  test('should display a organization number column headers', async () => {
    const { getOrganizationNumberColumnHeader } =
      await renderPrincipalsTableHeader();
    expect(getOrganizationNumberColumnHeader()).toBeInTheDocument();
  });

  test('should display a name column header', async () => {
    const { getNameColumnHeader } = await renderPrincipalsTableHeader();
    expect(getNameColumnHeader()).toBeInTheDocument();
  });

  test('should display type column header', async () => {
    const { getTypeColumnHeader } = await renderPrincipalsTableHeader();
    expect(getTypeColumnHeader()).toBeInTheDocument();
  });
});
