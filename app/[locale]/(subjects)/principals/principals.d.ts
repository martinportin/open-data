interface Principal {
  PeOrgNr: string;
  Namn: string;
  Typ: string;
}

interface SearchInputProps {
  label: string;
  searchInputValue: string;
  handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
}

interface FilterCheckboxProps {
  principalType: string;
  isChecked: boolean;
  handleCheckboxChange: React.ChangeEventHandler<HTMLInputElement>;
}

interface PrincipalToolbarProps {
  searchInputProps: SearchInputProps;
  filterCheckboxProps: FilterCheckboxProps[];
}
