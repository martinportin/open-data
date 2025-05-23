import renderFilterCheckbox from './renderFilterCheckbox';
import userEvent from '@testing-library/user-event';

describe('filter checkbox', () => {
  const labelName = /labelName/i;
  const id = 'mockId';
  const isChecked = true;
  const handleCheckboxChange = jest.fn();

  test('should render a checkbox with label name', async () => {
    const { getCheckbox } = await renderFilterCheckbox(
      labelName,
      id,
      isChecked,
      handleCheckboxChange
    );
    expect(getCheckbox()).toBeInTheDocument();
  });

  test('checkbox should have the given id', async () => {
    const { getCheckbox } = await renderFilterCheckbox(
      labelName,
      id,
      isChecked,
      handleCheckboxChange
    );
    expect(getCheckbox().id).toEqual(id);
  });

  test('checkbox should be checked', async () => {
    const { getCheckbox } = await renderFilterCheckbox(
      labelName,
      id,
      isChecked,
      handleCheckboxChange
    );
    expect(getCheckbox()).toBeChecked();
  });

  test('checkbox should not be checked', async () => {
    const { getCheckbox } = await renderFilterCheckbox(
      labelName,
      id,
      !isChecked,
      handleCheckboxChange
    );
    expect(getCheckbox()).not.toBeChecked();
  });

  test('"handleCheckboxChange" should be called when checkbox get checked/unchecked', async () => {
    const { getCheckbox, getHandleCheckboxChange } = await renderFilterCheckbox(
      labelName,
      id,
      isChecked,
      handleCheckboxChange
    );
    userEvent.click(getCheckbox());
    expect(getHandleCheckboxChange()).toHaveBeenCalled();
  });
});
