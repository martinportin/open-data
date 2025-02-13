import { render, screen } from '@testing-library/react';
import SearchInput from '../../../components/SearchInput';

export function renderSearchInput(searchInputProps: SearchInputProps) {
  render(<SearchInput {...searchInputProps} />);

  return {
    screen,
    getSearchInput: () => screen.getByRole('textbox', { name: /search/i }),
    getSearchInputValue: () => searchInputProps.searchInputValue,
    getHandleInputChange: () => searchInputProps.handleInputChange
  };
}
