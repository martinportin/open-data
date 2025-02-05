import { renderSearchInput } from './renderers/renderSearchInput';
import userEvent from '@testing-library/user-event';

describe('search input', () => {
  test('should display a text input', async () => {
    const { getSearchInput } = await renderSearchInput();
    expect(getSearchInput()).toBeInTheDocument();
  });

  test('search input should display "searchInputValue prop"', async () => {
    const { getSearchInput, getSearchInputValue } = await renderSearchInput();
    expect(getSearchInput()).toHaveValue(getSearchInputValue());
  });

  test('search input should have value "search input value"', async () => {
    const { getSearchInput, getHandleInputChange } = await renderSearchInput();
    await userEvent.type(getSearchInput(), 'New input');
    expect(getHandleInputChange()).toHaveBeenCalledTimes(9);
  });
});
