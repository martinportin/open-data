import FilterCheckbox from '../../../components/FilterCheckbox';
import { render, screen } from '@testing-library/react';

export function renderFilterCheckbox(checkboxProps: FilterCheckboxProps) {
  render(<FilterCheckbox {...checkboxProps} />);

  return {
    getFilterCheckbox: () =>
      screen.getByRole('checkbox', { name: /principalType/i }),
    getHandleInputChange: () => checkboxProps.handleCheckboxChange
  };
}
