import FilterCheckbox from '../../components/FilterCheckbox';
import { render, screen } from '@testing-library/react';

export function renderFilterCheckbox() {
  const checkboxProp: FilterCheckboxProp = {
    principalType: 'principalType',
    isChecked: true,
    handleCheckboxChange: jest.fn()
  };

  render(<FilterCheckbox checkboxProp={checkboxProp} />);

  return {
    getFilterCheckbox: () =>
      screen.getByRole('checkbox', { name: /principalType/i }),
    getHandleInputChange: () => checkboxProp.handleCheckboxChange
  };
}
