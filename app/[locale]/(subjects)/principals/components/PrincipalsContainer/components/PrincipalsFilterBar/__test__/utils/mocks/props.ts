export const filterCheckboxProps = {
  principalType: 'principalType0',
  isChecked: true,
  handleCheckboxChange: jest.fn()
};

export const filterCheckboxPropsEmpty: FilterCheckboxProps[] = [];

export const searchInputProps = {
  searchInputValue: 'Search input',
  handleInputChange: jest.fn()
};

export const filterCheckboxPropsSmall = [
  { principalType: 'principalType0', isChecked: true },
  {
    principalType: 'principalType1',
    isChecked: true
  },
  {
    principalType: 'principalType2',
    isChecked: true
  }
];

export const filterCheckboxPropsLarge = [
  ...filterCheckboxPropsSmall,
  {
    principalType: 'principalType3',
    isChecked: true
  },
  {
    principalType: 'principalType4',
    isChecked: true
  },
  {
    principalType: 'principalType5',
    isChecked: true
  },
  {
    principalType: 'principalType6',
    isChecked: true
  }
];
