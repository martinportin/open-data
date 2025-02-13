import renderPrincipalsToolbar from './utils/renderers/renderPrincipalsToolbar';

describe('principals toolbar', () => {
  test('should display a search input', () => {
    const { getSearchInput } = renderPrincipalsToolbar();
    expect(getSearchInput()).toBeInTheDocument();
  });

  test('should render three filter checkboxes', () => {
    const { getFilterCheckboxes } = renderPrincipalsToolbar();
    expect(getFilterCheckboxes()).toHaveLength(3);
  });
});
