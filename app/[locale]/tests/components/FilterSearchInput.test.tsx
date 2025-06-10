import userEvent from '@testing-library/user-event';
import renderFilterSearchInput from './utils/renderFilterSearchInput';

describe('filter search input', () => {
  const id = 'mockId';
  const labelName = /labelName/i;
  const testValue = 'test';
  const handleInputChange = jest.fn();

  test('should render a search input', async () => {
    const { getSearchInput } = await renderFilterSearchInput(
      labelName,
      id,
      '',
      handleInputChange
    );
    expect(getSearchInput()).toBeInTheDocument();
  });

  test('search input should have the given id', async () => {
    const { getSearchInput } = await renderFilterSearchInput(
      labelName,
      id,
      '',
      handleInputChange
    );
    expect(getSearchInput()).toHaveAttribute('id', id);
  });

  test('search input should be empty', async () => {
    const { getSearchInput } = await renderFilterSearchInput(
      labelName,
      id,
      '',
      handleInputChange
    );
    expect(getSearchInput()).toHaveValue('');
  });

  test('search input value should be "test"', async () => {
    const { getSearchInput } = await renderFilterSearchInput(
      labelName,
      id,
      testValue,
      handleInputChange
    );
    expect(getSearchInput()).toHaveValue('test');
  });

  test('"handleInputChange" should be called when typing in search input', async () => {
    const { getSearchInput, getHandleInputChange } =
      await renderFilterSearchInput(labelName, id, '', handleInputChange);
    userEvent.type(getSearchInput(), 'test');
    expect(getHandleInputChange()).toHaveBeenCalledTimes(4);
  });
});
