import { render, screen } from '@testing-library/react';
import SearchInput from '../../components/SearchInput';

export async function renderSearchInput() {
  const params = Promise.resolve({ locale: 'en' });
  const searchInputValue = 'Search input';
  const handleInputChange = jest.fn();
  const searchInput = await SearchInput({
    params,
    searchInputValue,
    handleInputChange
  });
  render(searchInput);

  return {
    screen,
    getSearchInput: () => screen.getByRole('textbox', { name: /search/i }),
    getSearchInputValue: () => searchInputValue,
    getHandleInputChange: () => handleInputChange
  };
}
