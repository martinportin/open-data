import { renderPrincipalsTableBody } from './utils/renderers/renderPrincipalsTableBody';
import {
  principalsTableBodyPropsEmpty,
  principalsTableBodyPropsSmall,
  principalsTableBodyPropsLarge
} from './utils/mocks/props';

describe('principals table body', () => {
  test('should display no table rows', () => {
    const { getOneTableRow } = renderPrincipalsTableBody(
      principalsTableBodyPropsEmpty
    );
    expect(getOneTableRow()).not.toBeInTheDocument();
  });

  test('should display three table rows', () => {
    const { getTableRows } = renderPrincipalsTableBody(
      principalsTableBodyPropsSmall
    );
    expect(getTableRows()).toHaveLength(3);
  });

  test('should display seven table rows', () => {
    const { getTableRows } = renderPrincipalsTableBody(
      principalsTableBodyPropsLarge
    );
    expect(getTableRows()).toHaveLength(7);
  });
});
