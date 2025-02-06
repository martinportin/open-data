import FilterCheckbox from '../../components/FilterCheckbox';
import { render, screen } from '@testing-library/react';
import { params } from '@/app/[locale]/__test__/utils/mocks/params';

export async function renderFilterCheckbox() {
  const principalType = 'principalType';
  const isChecked = true;
  const handleInputChange = jest.fn();
  const filterCheckbox = await FilterCheckbox({
    params,
    principalType,
    isChecked,
    handleInputChange
  });
  render(filterCheckbox);

  return {
    getFilterCheckbox: () =>
      screen.getByRole('checkbox', { name: /principalType/i }),
    getHandleInputChange: () => handleInputChange
  };
}
