import { render, screen } from '@testing-library/react';
import SearchInput from '../../components/SearchInput';
import { params } from '@/app/[locale]/__test__/utils/mocks/params';

export async function renderSearchInput() {
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
