import renderFilterbar from './renderFilterbar';

describe('filterbar', () => {
  const checkboxNames = [
    /public/i,
    /private/i,
    /municipalAssociation/i,
    /region/i,
    /nationalAgencyForEducation/i,
    /sami/i,
    /special/i
  ];

  test('should display a filter bar', async () => {
    const { getFilterbar } = await renderFilterbar();
    expect(getFilterbar()).toBeInTheDocument();
  });

  test('should display eight list items', async () => {
    const { getFilterbarItems } = await renderFilterbar();
    expect(getFilterbarItems()).toHaveLength(8);
  });

  test('should display a search input', async () => {
    const { getSearchInput } = await renderFilterbar();
    expect(getSearchInput()).toBeInTheDocument();
  });

  test('should display seven checkbox', async () => {
    const { getCheckboxes } = await renderFilterbar();
    expect(getCheckboxes()).toHaveLength(7);
  });

  for (const name of checkboxNames) {
    test(`should display a ${name} checkbox`, async () => {
      const { getCheckbox } = await renderFilterbar();
      expect(getCheckbox(name)).toBeInTheDocument();
    });
  }
});
