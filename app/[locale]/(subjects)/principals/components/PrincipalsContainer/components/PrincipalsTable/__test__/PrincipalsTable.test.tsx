import { renderPrincipalsTable } from './utils/renderers/renderPrincipalsTable';

describe('principals table', () => {
  test('should display a table header and a table body', async () => {
    const { getTable } = await renderPrincipalsTable();
    expect(getTable()).toBeInTheDocument();
  });
});
