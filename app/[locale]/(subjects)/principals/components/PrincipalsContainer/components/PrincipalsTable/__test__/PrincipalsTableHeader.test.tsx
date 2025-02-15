import { renderPrincipalsTableHeader } from './utils/renderers/renderPrincipalsTableHeader';

describe('principals table header', () => {
  test('should display a organization number column headers', () => {
    const { getOrganizationNumberColumnHeader } = renderPrincipalsTableHeader();
    expect(getOrganizationNumberColumnHeader()).toBeInTheDocument();
  });

  test('should display a name column header', () => {
    const { getNameColumnHeader } = renderPrincipalsTableHeader();
    expect(getNameColumnHeader()).toBeInTheDocument();
  });

  test('should display type column header', () => {
    const { getTypeColumnHeader } = renderPrincipalsTableHeader();
    expect(getTypeColumnHeader()).toBeInTheDocument();
  });
});
