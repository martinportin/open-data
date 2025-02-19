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
  filterCheckboxProps,
  {
    principalType: 'principalType1',
    isChecked: true,
    handleFilterCheckboxChange: jest.fn()
  },
  {
    principalType: 'principalType2',
    isChecked: true,
    handleFilterCheckboxChange: jest.fn()
  }
];

export const filterCheckboxPropsLarge = [
  ...filterCheckboxPropsSmall,
  {
    principalType: 'principalType3',
    isChecked: true,
    handleFilterCheckboxChange: jest.fn()
  },
  {
    principalType: 'principalType4',
    isChecked: true,
    handleFilterCheckboxChange: jest.fn()
  },
  {
    principalType: 'principalType5',
    isChecked: true,
    handleFilterCheckboxChange: jest.fn()
  },
  {
    principalType: 'principalType6',
    isChecked: true,
    handleFilterCheckboxChange: jest.fn()
  }
];
