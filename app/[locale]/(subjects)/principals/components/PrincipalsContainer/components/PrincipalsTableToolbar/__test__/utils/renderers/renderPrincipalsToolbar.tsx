import PrincipalsToolbar from '../../../PrincipalsToolbar';
import { render, screen } from '@testing-library/react';

export default function renderPrincipalsToolbar(
  searchInputProps: SearchInputProps,
  filterCheckboxProps: FilterCheckboxProps[]
) {
  render(
    <PrincipalsToolbar
      searchInputProps={searchInputProps}
      filterCheckboxProps={filterCheckboxProps}
    />
  );

  return {
    getSearchInput: () => screen.getByRole('textbox', { name: /search/i }),
    getSingleFilterCheckbox: () => screen.queryByRole('checkbox'),
    getFilterCheckboxes: () => screen.getAllByRole('checkbox')
  };
}
