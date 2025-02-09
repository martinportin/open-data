import { render, screen } from '@testing-library/react';
import SearchInput from '../../components/SearchInput';

export function renderSearchInput() {
  const searchInputProp = {
    label: 'search',
    searchInputValue: 'Search input',
    handleInputChange: jest.fn()
  };
  render(<SearchInput {...searchInputProp} />);

  return {
    screen,
    getSearchInput: () => screen.getByRole('textbox', { name: /search/i }),
    getSearchInputValue: () => searchInputProp.searchInputValue,
    getHandleInputChange: () => searchInputProp.handleInputChange
  };
}
