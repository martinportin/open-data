import FilterCheckbox from '../../components/FilterCheckbox';
import { render, screen } from '@testing-library/react';

export function renderFilterCheckbox() {
  const checkboxProps: FilterCheckboxProps = {
    principalType: 'principalType',
    isChecked: true,
    handleCheckboxChange: jest.fn()
  };

  render(<FilterCheckbox {...checkboxProps} />);

  return {
    getFilterCheckbox: () =>
      screen.getByRole('checkbox', { name: /principalType/i }),
    getHandleInputChange: () => checkboxProps.handleCheckboxChange
  };
}
