import { renderFilterCheckbox } from './renderers/renderFilterCheckbox';
import userEvent from '@testing-library/user-event';

describe('filter checkbox', () => {
  test('should display a checkbox with the correct label', async () => {
    const { getFilterCheckbox } = await renderFilterCheckbox();
    expect(getFilterCheckbox()).toBeInTheDocument();
  });

  test('the checkbox should have the correct id', async () => {
    const { getFilterCheckbox } = await renderFilterCheckbox();
    expect(getFilterCheckbox().id).toEqual('principalTypeCheckbox');
  });

  test('the checkbox should be checked', async () => {
    const { getFilterCheckbox } = await renderFilterCheckbox();
    expect(getFilterCheckbox()).toBeChecked();
  });

  test('"handleInputChange" should be called when checking the checkbox', async () => {
    const { getFilterCheckbox, getHandleInputChange } =
      await renderFilterCheckbox();
    await userEvent.click(getFilterCheckbox());
    expect(getHandleInputChange()).toHaveBeenCalled();
  });
});
