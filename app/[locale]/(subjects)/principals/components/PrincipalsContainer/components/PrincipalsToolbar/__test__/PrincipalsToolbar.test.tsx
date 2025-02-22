import renderPrincipalsToolbar from './utils/renderers/renderPrincipalsToolbar';
import {
  searchInputProps,
  filterCheckboxPropsEmpty,
  filterCheckboxPropsSmall,
  filterCheckboxPropsLarge
} from './utils/mocks/props';

describe('principals toolbar', () => {
  test('should display a search input', async () => {
    const { getSearchInput } = await renderPrincipalsToolbar(
      searchInputProps,
      filterCheckboxPropsEmpty
    );
    expect(getSearchInput()).toBeInTheDocument();
  });

  test('should display no checkboxes', async () => {
    const { getSingleFilterCheckbox } = await renderPrincipalsToolbar(
      searchInputProps,
      filterCheckboxPropsEmpty
    );
    expect(getSingleFilterCheckbox()).not.toBeInTheDocument();
  });

  test('should render three filter checkboxes', async () => {
    const { getFilterCheckboxes } = await renderPrincipalsToolbar(
      searchInputProps,
      filterCheckboxPropsSmall
    );
    expect(getFilterCheckboxes()).toHaveLength(3);
  });

  test('should render six filter checkboxes', async () => {
    const { getFilterCheckboxes } = await renderPrincipalsToolbar(
      searchInputProps,
      filterCheckboxPropsLarge
    );
    expect(getFilterCheckboxes()).toHaveLength(7);
  });
});
