import { renderFilterCheckbox } from './utils/renderers/renderFilterCheckbox';
import { filterCheckboxProps } from './utils/mocks/props';
import userEvent from '@testing-library/user-event';

describe('filter checkbox', () => {
  test('should display a checkbox with the correct label', async () => {
    const { getFilterCheckbox } =
      await renderFilterCheckbox(filterCheckboxProps);
    expect(getFilterCheckbox()).toBeInTheDocument();
  });

  test('the checkbox should have the correct id', async () => {
    const { getFilterCheckbox } =
      await renderFilterCheckbox(filterCheckboxProps);
    expect(getFilterCheckbox().id).toEqual('principalType0Checkbox');
  });

  test('the checkbox should be checked', async () => {
    const { getFilterCheckbox } =
      await renderFilterCheckbox(filterCheckboxProps);
    expect(getFilterCheckbox()).toBeChecked();
  });

  test('"handleInputChange" should be called when checking the checkbox', async () => {
    const { getFilterCheckbox, getHandleInputChange } =
      await renderFilterCheckbox(filterCheckboxProps);
    await userEvent.click(getFilterCheckbox());
    expect(getHandleInputChange()).toHaveBeenCalled();
  });
});
