import { renderPrincipalsTable } from './utils/renderers/renderPrincipalsTable';

describe('principals table', () => {
  test('should display a table header and a table body', () => {
    const { getTable } = renderPrincipalsTable();
    expect(getTable()).toBeInTheDocument();
  });
});
