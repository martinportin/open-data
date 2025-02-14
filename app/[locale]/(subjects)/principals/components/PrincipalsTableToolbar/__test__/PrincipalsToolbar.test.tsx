import renderPrincipalsToolbar from './utils/renderers/renderPrincipalsToolbar';
import {
  searchInputProps,
  filterCheckboxPropsEmpty,
  filterCheckboxPropsSmall,
  filterCheckboxPropsLarge
} from './utils/mocks/props';

describe('principals toolbar', () => {
  test('should display a search input', () => {
    const { getSearchInput } = renderPrincipalsToolbar(
      searchInputProps,
      filterCheckboxPropsEmpty
    );
    expect(getSearchInput()).toBeInTheDocument();
  });

  test('should display no checkboxes', () => {
    const { getSingleFilterCheckbox } = renderPrincipalsToolbar(
      searchInputProps,
      filterCheckboxPropsEmpty
    );
    expect(getSingleFilterCheckbox()).not.toBeInTheDocument();
  });

  test('should render three filter checkboxes', () => {
    const { getFilterCheckboxes } = renderPrincipalsToolbar(
      searchInputProps,
      filterCheckboxPropsSmall
    );
    expect(getFilterCheckboxes()).toHaveLength(3);
  });

  test('should render six filter checkboxes', () => {
    const { getFilterCheckboxes } = renderPrincipalsToolbar(
      searchInputProps,
      filterCheckboxPropsLarge
    );
    expect(getFilterCheckboxes()).toHaveLength(7);
  });
});
