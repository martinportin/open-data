import { renderFilterCheckbox } from './renderers/renderFilterCheckbox';
import userEvent from '@testing-library/user-event';

describe('filter checkbox', () => {
  test('should display a checkbox with the correct label', () => {
    const { getFilterCheckbox } = renderFilterCheckbox();
    expect(getFilterCheckbox()).toBeInTheDocument();
  });

  test('the checkbox should have the correct id', () => {
    const { getFilterCheckbox } = renderFilterCheckbox();
    expect(getFilterCheckbox().id).toEqual('principalTypeCheckbox');
  });

  test('the checkbox should be checked', () => {
    const { getFilterCheckbox } = renderFilterCheckbox();
    expect(getFilterCheckbox()).toBeChecked();
  });

  test('"handleInputChange" should be called when checking the checkbox', async () => {
    const { getFilterCheckbox, getHandleInputChange } = renderFilterCheckbox();
    await userEvent.click(getFilterCheckbox());
    expect(getHandleInputChange()).toHaveBeenCalled();
  });
});
