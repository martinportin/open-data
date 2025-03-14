import renderPrincipalsFilterBar from './utils/renderers/renderPrincipalsFilterBar';
import {
  filterCheckboxPropsEmpty,
  filterCheckboxPropsSmall,
  filterCheckboxPropsLarge
} from './utils/mocks/props';

describe('principals toolbar', () => {
  test('should display a search input', async () => {
    const { getSearchInput } = await renderPrincipalsFilterBar(
      filterCheckboxPropsEmpty
    );
    expect(getSearchInput()).toBeInTheDocument();
  });

  test('should display no checkboxes', async () => {
    const { getSingleFilterCheckbox } = await renderPrincipalsFilterBar(
      filterCheckboxPropsEmpty
    );
    expect(getSingleFilterCheckbox()).not.toBeInTheDocument();
  });

  test('should render three filter checkboxes', async () => {
    const { getFilterCheckboxes } = await renderPrincipalsFilterBar(
      filterCheckboxPropsSmall
    );
    expect(getFilterCheckboxes()).toHaveLength(3);
  });

  test('should render six filter checkboxes', async () => {
    const { getFilterCheckboxes } = await renderPrincipalsFilterBar(
      filterCheckboxPropsLarge
    );
    expect(getFilterCheckboxes()).toHaveLength(7);
  });
});
