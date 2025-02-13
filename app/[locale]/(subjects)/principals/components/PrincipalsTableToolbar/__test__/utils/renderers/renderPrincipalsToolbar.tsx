import PrincipalsToolbar from '../../../PrincipalsToolbar';
import { render, screen } from '@testing-library/react';

export default function renderPrincipalsToolbar() {
  const searchInputProps = {
    label: 'search',
    searchInputValue: 'Search input',
    handleInputChange: jest.fn()
  };
  const filterCheckboxProps = [
    {
      principalType: 'principalType0',
      isChecked: true,
      handleFilterCheckboxChange: jest.fn()
    },
    {
      principalType: 'principalType1',
      isChecked: true,
      handleFilterCheckboxChange: jest.fn()
    },
    {
      principalType: 'principalType2',
      isChecked: true,
      handleFilterCheckboxChange: jest.fn()
    }
  ];
  render(
    <PrincipalsToolbar
      searchInputProps={searchInputProps}
      filterCheckboxProps={filterCheckboxProps}
    />
  );

  return {
    getSearchInput: () => screen.getByRole('textbox', { name: /search/i }),
    getFilterCheckboxes: () => screen.getAllByRole('checkbox')
  };
}
