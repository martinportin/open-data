import { render, screen } from '@testing-library/react';
import SearchInput from '../../components/SearchInput';

export function renderSearchInput() {
  const label = 'search';
  const searchInputValue = 'Search input';
  const handleInputChange = jest.fn();
  render(
    <SearchInput
      label={label}
      searchInputValue={searchInputValue}
      handleInputChange={handleInputChange}
    />
  );

  return {
    screen,
    getSearchInput: () => screen.getByRole('textbox', { name: /search/i }),
    getSearchInputValue: () => searchInputValue,
    getHandleInputChange: () => handleInputChange
  };
}
