import { emptyPrincipalsList, principalsList } from './utils/mocks/principals';
import { renderPrincipalsTableBody } from './utils/renderers/renderPrincipalsTableBody';

describe('principals table body', () => {
  test('should display zero table rows', () => {
    const { getASingleTableRow } =
      renderPrincipalsTableBody(emptyPrincipalsList);
    expect(getASingleTableRow()).not.toBeInTheDocument();
  });

  test('should display three table rows', () => {
    const { getTableRows } = renderPrincipalsTableBody(
      principalsList.slice(0, 3)
    );
    expect(getTableRows()).toHaveLength(3);
  });

  test('should display seven table rows', () => {
    const { getTableRows } = renderPrincipalsTableBody(principalsList);
    expect(getTableRows()).toHaveLength(7);
  });
});
