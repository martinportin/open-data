import { renderPrincipalsTableBody } from './utils/renderers/renderPrincipalsTableBody';
import {
  noPrincipals,
  threePrincipals,
  sevenPrincipals
} from './utils/mocks/props';

describe('principals table body', () => {
  test('should display no table rows', () => {
    const { getOneTableRow } = renderPrincipalsTableBody(noPrincipals);
    expect(getOneTableRow()).not.toBeInTheDocument();
  });

  test('should display three table rows', () => {
    const { getTableRows } = renderPrincipalsTableBody(threePrincipals);
    expect(getTableRows()).toHaveLength(3);
  });

  test('should display seven table rows', () => {
    const { getTableRows } = renderPrincipalsTableBody(sevenPrincipals);
    expect(getTableRows()).toHaveLength(7);
  });
});
