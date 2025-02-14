import { renderSearchInput } from './utils/renderers/renderSearchInput';
import userEvent from '@testing-library/user-event';
import { searchInputProps } from './utils/mocks/props';

describe('search input', () => {
  test('should display a text input with the correct label', () => {
    const { getSearchInput } = renderSearchInput(searchInputProps);
    expect(getSearchInput()).toBeInTheDocument();
  });

  test('search input should display "searchInputValue prop"', () => {
    const { getSearchInput, getSearchInputValue } =
      renderSearchInput(searchInputProps);
    expect(getSearchInput()).toHaveValue(getSearchInputValue());
  });

  test('"handleInputChange" should be called when typing in the search input', async () => {
    const { getSearchInput, getHandleInputChange } =
      renderSearchInput(searchInputProps);
    await userEvent.type(getSearchInput(), 'New input');
    expect(getHandleInputChange()).toHaveBeenCalledTimes(9);
  });
});
