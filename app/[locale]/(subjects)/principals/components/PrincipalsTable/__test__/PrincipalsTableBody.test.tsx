import { renderPrincipalsTableBody } from './utils/renderers/renderPrincipalsTableBody';

describe('principals table body', () => {
  test('should display seven table rows', () => {
    const { getTableRows } = renderPrincipalsTableBody();
    expect(getTableRows()).toHaveLength(7);
  });
});
